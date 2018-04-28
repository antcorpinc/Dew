import { DialogsService } from './../../common/extranet-shared/dialogs/dialogs.service';
import { Component, OnInit } from '@angular/core';
import { RoomTypeViewModel } from '../../viewmodel/amenitiesviewmodel/roomtypeviewmodel';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CONSTANTS } from '../../../common/constants';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  result: any;
  roomList: RoomTypeViewModel[];
  create = CONSTANTS.operation.create;
  edit = CONSTANTS.operation.edit;
  read = CONSTANTS.operation.read;
  hotelId: number;
  operation: string;

  constructor(private dialogsService: DialogsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.hotelId = this.activatedRoute.parent.snapshot.params['id'];
    this.operation = this.activatedRoute.parent.snapshot.params['operation'];
    this.roomList = this.activatedRoute.snapshot.data['roomData'];
    console.log(this.roomList);
  }

  openPhotoModal(roomId, photoId, modalView) {
    this.dialogsService.openPhotoModal(roomId, photoId, modalView, this.roomList).subscribe(res => {
      this.result = res;
    });
  }

  GoPhotoDelete(photoId) {
    this.dialogsService
      .confirm('Confirm', 'Are you sure you want to delete this photo?').subscribe(res => {
        this.result = res;
        if (this.result) {
          this.deletePhoto(photoId);
        } else {

        }
      });
  }

  deletePhoto(messageId) {
    // this.messageDataService.deleteMessage(messageId).subscribe((isDeleted) => {
    //   this.isDeleted = isDeleted;
    //   this.snackBar.open('Photo Deleted Successfully', '',
    //     { duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
    //   this.getMessageList(this.hotelId);
    // });
  }
}
