import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CONSTANTS } from '../../../../common/constants';
import { Router, ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { RoomtypeDataService } from '../../../common/extranet-shared/services/roomtype-data.service';
import { DialogsService } from '../../../common/extranet-shared/dialogs/dialogs.service';
import { HotelRoomTypeViewModel } from '../../../viewmodel/roomtypeviewmodel/HotelRoomTypeViewModel';
import { RoomTypeViewModel } from '../../../viewmodel/roomtypeviewmodel/RoomTypeViewModel';
import { SizeMeasureViewModel } from '../../../viewmodel/roomtypeviewmodel/SizeMeasureViewModel';
import { BedsViewModel } from '../../../viewmodel/roomtypeviewmodel/BedsViewModel';
import { OccupancyViewModel } from '../../../viewmodel/roomtypeviewmodel/OccupancyViewModel';
import { MatSnackBar } from '@angular/material';
import { ObjectState } from '../../../../common/enums';

function ValidateArrangment(control: AbstractControl): { [key: string]: boolean } | null {
  const occupancy = control.get('occupancyId');
  const roomBed = control.get('roomBedList');
  let totalArrangment = 0, occ, totalNoOfBeds = 0;
  const list = [];

  if (((occupancy.value !== undefined) && (occupancy.value !== null)) &&
    (roomBed.value !== undefined) && (roomBed.value !== null) && (roomBed.value.length > 0)) {
    occ = occupancy.value;

    roomBed.value.forEach(element => {
     const BedID = element.bedId;
      list.push(BedID);
      const noOfBeds = element.noOfBeds;
      totalNoOfBeds = noOfBeds + totalNoOfBeds;
      if (BedID === 1) {
        totalArrangment += BedID * noOfBeds;
      } else {
        totalArrangment += 2 * noOfBeds;
      }
    });

    const sorted_arr = list.slice().sort();
    const results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] === sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }

    if (results.length > 0) {
      return { 'ValidateArrangmentSameBed': true };
    }
    if (occ !== 1 && occ < totalArrangment) {
      return { 'ValidateArrangment': true };
    }
    if (occ === 1 && occ !== totalNoOfBeds) {
      return { 'ValidateArrangmentSingleGuest': true };
    }
  }
  return null;
}

@Component({
  selector: 'app-room-type-info',
  templateUrl: './room-type-info.component.html',
  styleUrls: ['./room-type-info.component.css']
})
export class RoomTypeInfoComponent implements OnInit {
  operation: string;
  isRead: boolean;
  roomOperation: string;
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  read = CONSTANTS.operation.read;
  hotelId: string;
  roomId: number;
  roomBedListLen: number;
  isMaxLength: boolean;
  result: any;
  roomTypesList: RoomTypeViewModel[];
  sizeMeasureList: SizeMeasureViewModel[];
  bedsList: BedsViewModel[];
  occupancyList: OccupancyViewModel[];
  roomTypeInfo: HotelRoomTypeViewModel = <HotelRoomTypeViewModel>{};

  roomForm: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private roomTypeDataService: RoomtypeDataService, private cd: ChangeDetectorRef,
    public snackBar: MatSnackBar, private dialogsService: DialogsService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.hotelId = this.activatedRoute.parent.snapshot.params['id'];
    this.operation = this.activatedRoute.parent.snapshot.params['operation'];
    this.roomOperation = this.activatedRoute.snapshot.params['operation'];
    this.roomId = this.activatedRoute.snapshot.params['id'];
    this.getRoomTypes();
    this.getRoomSizes();
    this.getBeds();
    this.getOccupancy();

    this.roomForm = new FormGroup({
      isActive: new FormControl('true'),
      roomTypeId: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      size: new FormControl('', [Validators.max(9000), Validators.required]),
      sizeMeasureId: new FormControl(1, Validators.required),
      noOfRooms: new FormControl('', [Validators.max(25000), Validators.required]),
      isFreeSale: new FormControl(false, Validators.required),
      isSmoking: new FormControl(false, Validators.required),
      description: new FormControl('', Validators.required),
      objectState: new FormControl(ObjectState.Unchanged),
      roomBedOptions: this.buildRoomBedOptions()
    });

    if (this.roomOperation.toLowerCase().trim() === this.edit || this.roomOperation.toLowerCase().trim() === this.read) {
      this.getRoomDetails(this.roomId);
    }
  }

  get roomBedList(): FormArray {
    return <FormArray>this.roomForm.controls.roomBedOptions.get('roomBedList');
  }
  buildRoomBedOptions(): FormGroup {
    let roomBedOptionsFormGroup: FormGroup;
    roomBedOptionsFormGroup = new FormGroup({
      occupancyId: new FormControl(),
      objectState: new FormControl(ObjectState.Unchanged),
      roomBedList: new FormArray([this.buildRoomBed()])
    }, ValidateArrangment);

    return roomBedOptionsFormGroup;
  }

  addRoomBed() {
    this.roomBedList.push(this.buildRoomBed());
    this.roomBedListLen = this.roomBedList.length;
    const bedListLen = this.bedsList.length;
    if (this.roomBedListLen === bedListLen) {
      this.isMaxLength = true;
    }
    this.cd.detectChanges();
  }
  deleteRoomBed(index: number) {
    if (this.roomOperation.toLowerCase().trim() === this.edit) {
      const id = this.roomBedList.controls[index].get('id').value;
      if (id !== 0) {
        this.dialogsService.confirm('Confirm', 'Are you sure you want to delete this bed type?').subscribe(res => {
          this.result = res;
          if (this.result) {
            this.roomTypeDataService.deleteRoomBedRelation(id).subscribe(data => {
            });
            this.roomBedList.removeAt(index);
            this.isMaxLength = false;
          }
        });
      } else {
        this.roomBedList.removeAt(index);
        this.isMaxLength = false;
      }
    } else {
      this.isMaxLength = false;
      this.roomBedList.removeAt(index);
    }
    this.cd.detectChanges();
  }
  buildRoomBed(): FormGroup {
    let roomBedFormGroup: FormGroup;
    roomBedFormGroup = new FormGroup({
      bedId: new FormControl(),
      noOfBeds: new FormControl(),
      id: new FormControl(0),
      objectState: new FormControl(ObjectState.Added),
    });
    return roomBedFormGroup;
  }
  cancelRoomType() {
    if (this.roomForm.dirty) {
      this.dialogsService.confirm('Confirm', 'If you cancel, the current data will be lost').subscribe(res => {
        this.result = res;
        if (this.result) {
          this.router.navigate(['/hotelmgmt/hotel', this.hotelId, this.operation.trim().toLowerCase(), 'roomtypelist']);
        }
      });
    } else {
      this.router.navigate(['/hotelmgmt/hotel', this.hotelId, this.operation.trim().toLowerCase(), 'roomtypelist']);
    }
  }
  getRoomTypes() {
    this.roomTypeDataService.getRoomTypes().subscribe(roomTypesList => {
      this.roomTypesList = roomTypesList;
    });
  }
  getRoomSizes() {
    this.roomTypeDataService.getSizeMeasure().subscribe(sizeMeasureList => {
      this.sizeMeasureList = sizeMeasureList;
    });
  }
  getBeds() {
    this.roomTypeDataService.getBeds().subscribe(bedsList => {
      this.bedsList = bedsList;
    });
  }
  getOccupancy() {
    this.roomTypeDataService.getOccupancy().subscribe(occupancyList => {
      this.occupancyList = occupancyList;
    });
  }

  saveRoom() {
    if (this.roomForm.valid) {
      const roomtypes = Object.assign({}, this.roomTypeInfo, this.roomForm.value);
      roomtypes.hotelId = this.hotelId;

      if (this.roomOperation.toLowerCase().trim() === this.create) {
        roomtypes.objectState = ObjectState.Added;
        roomtypes.roomId = 0;
        roomtypes.roomBedOptions.hotelId = this.hotelId;
        roomtypes.roomBedOptions.objectState = ObjectState.Added;
      }

      if (this.roomOperation.toLowerCase().trim() === this.edit) {
        roomtypes.roomId = this.roomId;
        roomtypes.roomBedOptions.hotelId = this.hotelId;
      }

      this.roomTypeDataService.addRoom(roomtypes as HotelRoomTypeViewModel)
        .subscribe(data => {
          this.snackBar.open('Room Saved Successfully', '', { duration: CONSTANTS.toasterTimeOut.duration,
              verticalPosition: 'top', panelClass: 'showSnackBar' });
          this.router.navigate(['/hotelmgmt/hotel', this.hotelId, this.operation.trim().toLowerCase(), 'roomtypelist']);
      });
    }
  }

  flagRoomTypeAsEdited() {
    if (this.roomOperation.toLowerCase().trim() === this.edit) {
      this.roomForm.get('objectState').setValue(ObjectState.Modified);
    }
  }

  flagBedTypeAsEdited(index: number) {
    if (this.roomOperation.toLowerCase().trim() === this.edit) {
      if (this.roomBedList.controls[index].get('objectState').value !== ObjectState.Added) {
        this.roomBedList.controls[index].get('objectState').setValue(ObjectState.Modified);
      }
    }
  }

  private getRoomDetails(roomId) {
    this.roomTypeDataService.getRoom(roomId).subscribe(roomData => {

      const roomBedvalue = roomData.roomBedOptions.roomBedList;
      for (let i = 0; i < roomBedvalue.length - 1; i++) {
        this.addRoomBed();
      }

      if (this.roomOperation.toLowerCase().trim() === this.edit || this.roomOperation.toLowerCase().trim() === this.read) {
        this.roomForm.get('isActive').setValue(roomData.isActive);
        this.roomForm.get('roomTypeId').setValue(roomData.roomTypeId);
        this.roomForm.get('name').setValue(roomData.name);
        this.roomForm.get('size').setValue(roomData.size);
        this.roomForm.get('sizeMeasureId').setValue(roomData.sizeMeasureId);
        this.roomForm.get('noOfRooms').setValue(roomData.noOfRooms);
        this.roomForm.get('isFreeSale').setValue(roomData.isFreeSale);
        this.roomForm.get('isSmoking').setValue(roomData.isSmoking);
        this.roomForm.get('description').setValue(roomData.description);
        this.roomForm.controls.roomBedOptions.get('occupancyId').setValue(roomData.roomBedOptions.occupancyId);

        this.roomBedList.controls.forEach((control, index) => {
          control.get('bedId').setValue(roomBedvalue[index].bedId);
          control.get('noOfBeds').setValue(roomBedvalue[index].noOfBeds);
          control.get('id').setValue(roomBedvalue[index].id);
          control.get('objectState').setValue(ObjectState.Unchanged);
        });

        if (this.roomOperation.toLowerCase().trim() === this.read) {
          this.isRead = true;
          this.roomForm.disable();
        }
      }

    });
  }

}
