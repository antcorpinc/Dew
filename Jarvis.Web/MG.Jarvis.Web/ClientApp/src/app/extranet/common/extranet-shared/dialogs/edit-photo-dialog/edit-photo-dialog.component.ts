import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { RoomTypeViewModel } from '../../../../viewmodel/amenitiesviewmodel/roomtypeviewmodel';
import { CONSTANTS } from '../../../../../common/constants';
import { DocumentType } from '../../../../../common/enums';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotelDataService } from '../../services/hotel-data.service';
import { PhotosDataService } from '../../services/photos-data.service';

@Component({
  selector: 'app-edit-photo-dialog',
  templateUrl: './edit-photo-dialog.component.html',
  styleUrls: ['./edit-photo-dialog.component.css']
})
export class EditPhotoDialogComponent implements OnInit {

  roomId: number;
  photoId: number;
  modalView: string;
  roomList: RoomTypeViewModel[];
  create = CONSTANTS.operation.create;
  edit = CONSTANTS.operation.edit;
  file: File;
  isFileUploaded: boolean;
  isUploadComplete: boolean;
  error: string;
  errorSize: string;
  image = new Image();
  src: any;
  extension: number;
  photoForm: FormGroup;
  hotelCode: string;
  closeDialog: boolean;

  constructor(public dialogRef: MatDialogRef<EditPhotoDialogComponent>,
    public photosDataService: PhotosDataService,
    public hotelDataService: HotelDataService,
    public dialog: MatDialog) {
  }

  @Input() fileExt: string;
  @Input() maxSize: number;
  @ViewChild('inputFile')
  inputFile: any;

  ngOnInit() {
    this.error = null;
    this.errorSize = null;
    this.maxSize = 5;
    this.fileExt = DocumentType[3] + ', ' + DocumentType[4] + ', ' + DocumentType[5];
    this.isFileUploaded = false;
    this.isUploadComplete = false;
    this.closeDialog = true;

    this.buildPhotoForm();

    this.hotelCode = this.hotelDataService.hotelDetails.hotelCode;
  }

  buildPhotoForm() {
    this.photoForm = new FormGroup({
      photoPath: new FormControl(),
      isMainPhoto: new FormControl(),
      roomArray: (this.roomList.length !== 0 ? this.buildRoomTypeOptions() : new FormArray([]))
    });

    if (this.roomList.length !== 0) {
      this.photoForm.controls.roomArray['controls'].forEach(element => {
        if (element.get('roomId').value === this.roomId) {
          element.get('isSelected').setValue(true);
        }
      });
    }
  }

  get roomArray(): FormArray {
    return (this.roomList.length !== 0 ? <FormArray>this.photoForm.get('roomArray') : new FormArray([]));
  }

  buildRoomTypeOptions() {
    let roomTypeArray: FormArray;
    let roomTypeOptionsFormGroup: FormGroup;
    this.roomList.forEach(roomtype => {
      roomTypeOptionsFormGroup = new FormGroup({
        roomId: new FormControl(roomtype.roomId),
        roomName: new FormControl(roomtype.roomName),
        isSelected: new FormControl(false)
      });
      if (roomTypeArray === null || roomTypeArray === undefined) {
        roomTypeArray = new FormArray([roomTypeOptionsFormGroup]);
      } else {
        roomTypeArray.push(roomTypeOptionsFormGroup);
      }
    });
    return roomTypeArray;
  }

  fileChanged($event): void {
    this.closeDialog = true;
    this.isUploadComplete = false;
    const thisObject = this;
    this.isFileUploaded = false;
    const reader: FileReader = new FileReader();
    this.file = $event.target.files[0];
    if (this.file) {
      this.isValidFileExtension(this.file);
      this.isValidDimensions();
      if (this.error || this.errorSize) {
        this.file = null;
      }
      if (!thisObject.error || !thisObject.errorSize) {
        this.image.src = window.URL.createObjectURL(this.file);
        reader.readAsDataURL(this.file);
        reader.onload = function (e: any) {
          thisObject.src = e.target.result;
        };
      }
    }
  }

  readFile(): void {
    const thisObject = this;
    const myReader: FileReader = new FileReader();
    myReader.readAsArrayBuffer(this.file);
    let formData = {};
    myReader.onloadend = function (e) {
      const byteArray = new Uint8Array(myReader.result);
      const array = Array.from(byteArray);
      formData = {
        hotelCode: thisObject.hotelCode,
        bytes: array,
        extension: thisObject.extension
      };
      thisObject.photosDataService.uploadPhoto(formData)
        .subscribe(response => {
          thisObject.photoForm.get('photoPath').setValue(response.result);
          if (response.result && !response.isError) {
            thisObject.isUploadComplete = true;
          } else {
            thisObject.error = response.message;
          }
        });
      thisObject.isFileUploaded = true;
    };
  }

  isValidFileExtension(file) {
    const extensions = (this.fileExt.split(','))
      .map(function (x) { return x.toLocaleUpperCase().trim(); });
    const ext = file.name.toUpperCase().split('.').pop() || file.name;
    const exists = extensions.includes(ext);
    if (!exists) {
      this.error = 'Please choose an image (JPG, PNG) file only.';
    } else {
      this.error = null;
      if (ext === DocumentType[3]) {
        this.extension = DocumentType.JPG;
      } else if (ext === DocumentType[4]) {
        this.extension = DocumentType.JPEG;
      } else if (ext === DocumentType[5]) {
        this.extension = DocumentType.PNG;
      }
    }
    this.isValidFileSize(file);
  }

  isValidFileSize(file) {
    const fileSizeinMB = file.size / (1024 * 1000);
    const size = Math.round(fileSizeinMB * 100) / 100;
    if (size > this.maxSize) {
      this.errorSize = 'File exceeds file size limit of ' + this.maxSize + 'MB';
    } else if (size === 0) {
      this.errorSize = 'File is too small';
    } else {
      this.errorSize = null;
    }
  }

  isValidDimensions() {
    const thisObject = this;
    this.image.onload = function () {
      const height = thisObject.image.height;
      const width = thisObject.image.width;
      if (height < 600 || width < 800) {
        thisObject.error = 'Minimum Dimensions should be 600px/800px';
      }
    };
  }

  savePhoto(closeDialog) {
    this.closeDialog = closeDialog;
    const rooms = [];
    this.photoForm.controls.roomArray['controls'].forEach(element => {
      if (element.get('isSelected').value === true) {
        rooms.push(element.get('roomId').value);
      }
    });
    console.log('rooms ' + rooms);
    if (closeDialog) {
      this.dialogRef.close(true);
    } else {
      this.isUploadComplete = false;
      this.isFileUploaded = false;
      this.inputFile.nativeElement.value = '';
      this.buildPhotoForm();
    }
  }

}

