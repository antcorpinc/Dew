import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ObjectState } from '../../../../common/enums';
import { CONSTANTS } from '../../../../common/constants';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';
import { CancellationPolicyViewModel } from '../../../viewmodel/policiesviewmodel/cancellationpolicyviewmodel';
import { PoliciesDataService } from './../../../common/extranet-shared/services/policies-data.service';
import { UserProfileService } from '../../../../common/shared/services/user-profile.service';
import { DialogsService } from '../../../common/extranet-shared/dialogs/dialogs.service';
import { MatSnackBar } from '@angular/material';

/* const read = CONSTANTS.operation.read;
const edit = CONSTANTS.operation.edit;
const create = CONSTANTS.operation.create; */

@Component({
  selector: 'app-cancellation-policies-list',
  templateUrl: './cancellation-policies-list.component.html',
  styleUrls: ['./cancellation-policies-list.component.css']
})
export class CancellationPoliciesListComponent implements OnInit {
  hotelId: number;
  operation: string;
  isRead = true;
  noDataAvailable: boolean;
  dialogResult: any;
  dialogActions: string;
  cancellationPolicyList: CancellationPolicyViewModel[];
  displayedColumns = ['policyname', 'details', 'status', 'action'];
  dataSource: MatTableDataSource<CancellationPolicyViewModel>;
  pageEvent: PageEvent;
  Math: any;
  // totalRecords: number;
  deleteCancellationPolicyDtoMsg: any;
  deactivateCancellationPolicyDtoMsg: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  read = CONSTANTS.operation.read;
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  constructor(private router: Router,
    private policiesDataService: PoliciesDataService,
    private activatedRoute: ActivatedRoute,
    private userProfileService: UserProfileService,
    private dialogsService: DialogsService,
    private snackBar: MatSnackBar) {
    this.Math = Math;
  }

  ngOnInit() {
    this.hotelId = this.activatedRoute.parent.snapshot.params['id'];
    this.operation = this.activatedRoute.parent.snapshot.params['operation'];
    this.getCancellationPolicyList(this.hotelId);
    if (this.operation.toLowerCase().trim() === this.read) {
      this.isRead = false;
    }
  }
  createcancellationpolicy() {
    this.router.navigate(['../cancellationpolicies', 0, this.create], { relativeTo: this.activatedRoute });
  }
  getCancellationPolicyList(hotelId) {
    this.policiesDataService.getCancellationPolicyListdto(hotelId).subscribe(policylistdto => {
      if (policylistdto === null) {
        this.noDataAvailable = true;
        this.cancellationPolicyList = [];
      }
      // tslint:disable-next-line:one-line
      else {
        this.cancellationPolicyList = policylistdto;
        // this.totalRecords = this.cancellationPolicyList.length;
      }
      this.dataSource = new MatTableDataSource<CancellationPolicyViewModel>(this.cancellationPolicyList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  CancellationPolicyUpdate(data) {
    const eventData = data.value.split('-');
    const policyId = eventData[0];
    this.operation = eventData[1];
    if (this.operation.trim().toLowerCase() === this.edit) {
      this.router.navigate(['../cancellationpolicies', policyId,
        this.operation.trim().toLowerCase()], { relativeTo: this.activatedRoute });
    }
    // tslint:disable-next-line:one-line
    if (this.operation.trim().toLowerCase() === 'delete') {
      this.dialogsService
        .confirm('Confirm', 'Are you sure you want to delete this Policy?').subscribe(res => {
          this.dialogResult = res;
          if (this.dialogResult) {
            this.policiesDataService.deleteCancellationPolicyById(policyId).subscribe(deleteCancellationPolicyDto => {
              // this.deleteCancellationPolicyDtoMsg = deleteCancellationPolicyDto
              // tslint:disable-next-line:max-line-length
              this.snackBar.open('Policy deleted successfully', '', {duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
              this.getCancellationPolicyList(this.hotelId);
            });
            /* this.policiesDataService.getCancellationPolicyTypedto().subscribe(cancellationClauseTypeDto => {
              this.cancellationClauseType = cancellationClauseTypeDto;
          }); */
          } else {
            this.dialogActions = null;
          }
        });
    }
    if (this.operation.trim().toLowerCase() === 'inactive') {
      this.dialogsService
        .confirm('Confirm', 'Are you sure you want to Inactivate this Policy?').subscribe(res => {
          this.dialogResult = res;
          if (this.dialogResult) {
            this.policiesDataService.deactivateCancellationPolicy(policyId).subscribe(deactivateCancellationPolicyDto => {
              // this.deleteCancellationPolicyDtoMsg = deleteCancellationPolicyDto
              // tslint:disable-next-line:max-line-length
              this.snackBar.open('Policy inactivated successfully', '', {duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
              this.getCancellationPolicyList(this.hotelId);
              // console.log('wait');
            });
          } else {
            this.dialogActions = null;
          }
        });
    }
    if (this.operation.trim().toLowerCase() === 'active') {
      this.dialogsService
        .confirm('Confirm', 'Are you sure you want to Activate this Policy?').subscribe(res => {
          this.dialogResult = res;
          if (this.dialogResult) {
            this.policiesDataService.deactivateCancellationPolicy(policyId).subscribe(deactivateCancellationPolicyDto => {
              // this.deleteCancellationPolicyDtoMsg = deleteCancellationPolicyDto
              // tslint:disable-next-line:max-line-length
              this.snackBar.open('Policy activated successfully', '', {duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
              this.getCancellationPolicyList(this.hotelId);
              // console.log('wait');
            });
          } else {
            this.dialogActions = null;
          }
        });
    }
  }
}
