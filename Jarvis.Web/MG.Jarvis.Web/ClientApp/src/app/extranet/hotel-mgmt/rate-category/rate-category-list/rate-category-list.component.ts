import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource,
  MatPaginator, MatSort, PageEvent, MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CONSTANTS } from '../../../../common/constants';
import { RatecategoryDataService } from '../../../common/extranet-shared/services/ratecategory-data.service';
import { RateCategoryListViewModel } from '../../../viewmodel/ratecategoryviewmodel/RateCategoryListViewModel';
import { DialogsService } from '../../../common/extranet-shared/dialogs/dialogs.service';


@Component({
  selector: 'app-rate-category-list',
  templateUrl: './rate-category-list.component.html',
  styleUrls: ['./rate-category-list.component.css']
})
export class RateCategoryListComponent implements OnInit {
  read = CONSTANTS.operation.read;
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  operation: string;
  isRead: boolean;
  isDeleted: boolean;
  hotelId: string;
  noDataAvailable: boolean;
  ratecategoryList: RateCategoryListViewModel[];
  isRoomExists: boolean;
  isPolicyExists: boolean;
  result: any;
  actions: string;
  displayedColumns = ['rateCategoryName', 'contractType', 'roomName', 'cancellationPolicy', 'mealPlan', 'market', 'isActive', 'actions'];
  dataSource: MatTableDataSource<RateCategoryListViewModel>;
  pageEvent: PageEvent;
  Math: any;
  totalRecords: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private rateCategoryDataService: RatecategoryDataService,
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
    this.getCancellationPolicies(this.hotelId);
    this.getRateCategory(this.hotelId);

    if (this.operation.toLowerCase().trim() === this.read) {
      this.isRead = true;
    }
  }

  getCancellationPolicies(hotelId) {
    this.rateCategoryDataService.getCancellationPolicies(hotelId).subscribe(policylist => {
      if (policylist.length === 0) {
        this.isPolicyExists = true;
      } else {
        this.isPolicyExists = false;
      }
    });
  }

  getRooms(hotelId) {
    this.rateCategoryDataService.getRooms(hotelId).subscribe(roomListData => {
      if (roomListData.length === 0) {
        this.isRoomExists = true;
      } else {
        this.isRoomExists = false;
      }
    });
  }

  createRateCategory() {
    this.router.navigate(['../ratecategory', 0, this.create], { relativeTo: this.activatedRoute });
  }

  getRateCategory(hotelId) {
    this.rateCategoryDataService.getRateCategory(hotelId).subscribe(rateList => {
      this.ratecategoryList = rateList;
      this.totalRecords = this.ratecategoryList.length;
      this.dataSource = new MatTableDataSource<RateCategoryListViewModel>(this.ratecategoryList);
      this.cd.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (rateList.length === 0) {
        this.noDataAvailable = true;
      }
    });
  }

  GoRateUpdate(value) {
    const val = value.split('-');
    const rateId = val[0];
    this.operation = val[1];
    this.router.navigate(['../ratecategory', rateId, this.operation.trim().toLowerCase()], { relativeTo: this.activatedRoute });
  }

  deleteRate(rateId) {
    this.rateCategoryDataService.deleterate(rateId).subscribe((isDeleted) => {
      this.isDeleted = isDeleted;
      this.snackBar.open('Rate Category Deleted Successfully', '',
        { duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
      this.getRateCategory(this.hotelId);
    });
  }

  GoRateDelete(value) {
    const val = value.split('-');
    const rateId = val[0];
    this.dialogsService.confirm('Confirm', 'Are you sure you want to delete this rate category?').subscribe(res => {
      this.result = res;
      if (this.result) {
        this.deleteRate(rateId);
      } else {
        this.actions = null;
      }
    });
  }

}



