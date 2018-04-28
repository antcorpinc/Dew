import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CONSTANTS } from '../../../../common/constants';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent, MatSnackBar } from '@angular/material';
import { RoomTypeListViewModel } from '../../../viewmodel/roomtypeviewmodel/roomtypelistviewmodel';
import { RoomtypeDataService } from '../../../common/extranet-shared/services/roomtype-data.service';
import { DialogsService } from '../../../common/extranet-shared/dialogs/dialogs.service';

@Component({
  selector: 'app-room-type-list',
  templateUrl: './room-type-list.component.html',
  styleUrls: ['./room-type-list.component.css']
})
export class RoomTypeListComponent implements OnInit {
  read = CONSTANTS.operation.read;
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  operation: string;
  isRead: boolean;
  isDeleted: boolean;
  hotelId: string;
  result: any;
  actions: string;
  noDataAvailable: boolean;
  roomList: RoomTypeListViewModel[];
  displayedColumns = ['roomName', 'noOfRooms', 'isFreeSale', 'noOfGuests', 'isActive', 'actions'];
  dataSource: MatTableDataSource<RoomTypeListViewModel>;
  pageEvent: PageEvent;
  Math: any;
  totalRecords: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private roomTypeDataService: RoomtypeDataService,
    private dialogsService: DialogsService,
    private cd: ChangeDetectorRef,
    public snackBar: MatSnackBar) {
    this.Math = Math;
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.hotelId = this.activatedRoute.parent.snapshot.params['id'];
    this.operation = this.activatedRoute.parent.snapshot.params['operation'];
    this.getRooms(this.hotelId);
    if (this.operation.toLowerCase().trim() === this.read) {
      this.isRead = true;
    }
  }

  createRoomType() {
    this.router.navigate(['../roomtype', 0, this.create], { relativeTo: this.activatedRoute });
  }

  getRooms(hotelId) {
    this.roomTypeDataService.getRooms(hotelId).subscribe((roomList) => {
      this.roomList = roomList;
      this.totalRecords = this.roomList.length;
      this.dataSource = new MatTableDataSource<RoomTypeListViewModel>(this.roomList);
      this.cd.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (roomList.length === 0) {
        this.noDataAvailable = true;
      }
    });
  }

  deleteRoom(roomId) {
    this.roomTypeDataService.deleteroom(roomId).subscribe((isDeleted) => {
      this.isDeleted = isDeleted;
      this.snackBar.open('Room Deleted Successfully', '',
        { duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
      this.getRooms(this.hotelId);
    });
  }

  GoRoomUpdate(value) {
    const val = value.split('-');
    const roomId = val[0];
    this.operation = val[1];
    this.router.navigate(['../roomtype', roomId, this.operation.trim().toLowerCase()], { relativeTo: this.activatedRoute });
  }

  GoRoomDelete(value) {
    const val = value.split('-');
    const roomId = val[0];
    this.dialogsService.confirm('Confirm', 'Are you sure you want to delete this room?').subscribe(res => {
      this.result = res;
      if (this.result) {
        this.deleteRoom(roomId);
      } else {
        this.actions = null;
      }
    });
  }

}
