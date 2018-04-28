import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialogRef, NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllocationsDataService } from '../../../common/extranet-shared/services/allocations-data.service';
import { RateCategoryInfoViewModel } from '../../../viewmodel/ratecategoryviewmodel/RateCategoryInfoViewModel';
import { RoomRatePlanViewModel } from '../../../viewmodel/allocationsviewmodel/roomrateplanviewmodel';
import { EXTRANETCONSTANTS } from '../../../common/constants';
import { RestrictionsTypeViewModel } from '../../../viewmodel/allocationsviewmodel/restrictionstypeviewmodel';
import { RestrictionViewModel } from '../../../viewmodel/allocationsviewmodel/restrictionviewmodel';
import { CONSTANTS } from '../../../../common/constants';
import { DISABLED } from '@angular/forms/src/model';
import { BlackOutViewModel } from '../../../viewmodel/allocationsviewmodel/blackoutviewmodel';

const duration = CONSTANTS.toasterTimeOut.duration;

const DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

export class DatePickerDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    date.setHours(0, 0, 0, 0);
    date.setMinutes((date.getTimezoneOffset() * -1));
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.toLocaleString('en-us', { month: 'long' });
      const year = date.getFullYear();
      return this._to2digit(day) + '-' + month.substring(0, 3) + '-' + year % 100;
    } else {
      return date.toDateString();
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}

@Component({
  selector: 'app-bulk-update-dialog',
  templateUrl: './bulk-update-dialog.component.html',
  styleUrls: ['./bulk-update-dialog.component.css'],
  providers: [
    { provide: DateAdapter, useClass: DatePickerDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ],
})
export class BulkUpdateDialogComponent implements OnInit {

  hotelId: number;
  restrictionForm: FormGroup;
  blackOutForm: FormGroup;
  rateCategoryList: RateCategoryInfoViewModel[];
  roomList: RoomRatePlanViewModel[];
  restrictionTypeList: RestrictionsTypeViewModel[];
  days = EXTRANETCONSTANTS.days;
  maxDate = new Date();
  todaysDate = new Date();
  restrictionData: RestrictionViewModel;
  restrictionDataSave: RestrictionViewModel;
  restrictionId = EXTRANETCONSTANTS.allocations.restriction.minimumLengthofStayId;
  restrictionMessage: boolean;
  blackOutMessage: boolean;
  blackOutData: BlackOutViewModel;
  blackOutDataSave: BlackOutViewModel;


  @HostBinding('@.disabled')
  public animationsDisabled = true;


  public title: string;
  public showCancel = true;
  constructor(public dialogRef: MatDialogRef<BulkUpdateDialogComponent>, public activatedRoute: ActivatedRoute,
    public allocationsDataService: AllocationsDataService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {

    this.getRateCateory();
    this.getRestrictionType();

    this.restrictionForm = new FormGroup({
      id: new FormControl(0),
      rateCategoryId: new FormControl('', Validators.required),
      roomId: new FormControl('', Validators.required),
      ratePlanId: new FormControl,
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      daysArray: new FormControl,
      days: new FormControl,
      restrictionTypeId: new FormControl('', Validators.required),
      restrictionTypeValue: new FormControl,
    });

    this.blackOutForm = new FormGroup({
      id: new FormControl(0),
      rateCategoryId: new FormControl('', Validators.required),
      roomId: new FormControl('', Validators.required),
      ratePlanId: new FormControl,
      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required),
      daysArray: new FormControl,
      days: new FormControl,
    });

    this.restrictionForm.get('roomId').disable();
    this.blackOutForm.get('roomId').disable();
  }

  getRateCateory() {
    this.allocationsDataService.getRateCategory(this.hotelId).subscribe(rateCategoryData =>
      this.rateCategoryList = rateCategoryData
    );
  }

  getRooms(event) {
    this.restrictionForm.get('roomId').enable();
    this.blackOutForm.get('roomId').enable();

    this.allocationsDataService.getRoomsByRateCategory(event.value, this.hotelId).subscribe(roomData =>
      this.roomList = roomData
    );
  }

  getRestrictionType() {
    this.allocationsDataService.getRestrictionType().subscribe(restrictionType =>
      this.restrictionTypeList = restrictionType
    );
  }

  getRatePlanId(event) {
    this.roomList.forEach(room => {
      if (room.roomId === event.value) {
        this.restrictionForm.get('ratePlanId').setValue(room.ratePlanId);
        this.blackOutForm.get('ratePlanId').setValue(room.ratePlanId);
      }
    });
  }

  selectedRestrictionType() {
    const restrictionTypeId = this.restrictionForm.get('restrictionTypeId').value;
    if (restrictionTypeId === this.restrictionId) {
      this.restrictionForm.get('restrictionTypeValue').enable();
    } else {
      this.restrictionForm.get('restrictionTypeValue').disable();
    }
  }

  saveRestriction() {
    // converting days Array to String
    if (this.restrictionForm.get('daysArray').value !== null) {
      const days = this.restrictionForm.get('daysArray').value.join(',');
      this.restrictionForm.get('days').setValue(days);
    }
    this.restrictionDataSave = Object.assign({}, this.restrictionData, this.restrictionForm.value);

    this.allocationsDataService.addHotelRangeRestriction(this.restrictionDataSave as RestrictionViewModel).subscribe(
      (response) => {
        if (response.isError) {
          this.restrictionMessage = true;
        } else {
          this.restrictionMessage = false;
          this.snackBar.open('Restriction Saved Successfully', '', { duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
          window.scrollTo(0, 0);
          this.restrictionForm.reset();
          this.restrictionForm.get('id').setValue(0);
        }
      }
    );
  }

  saveBlackOut() {
    // converting days Array to String
    if (this.blackOutForm.get('daysArray').value !== null) {
      const days = this.blackOutForm.get('daysArray').value.join(',');
      this.blackOutForm.get('days').setValue(days);
    }

    const fromDate = new Date(this.blackOutForm.get('fromDate').value);
    const toDate = new Date(this.blackOutForm.get('toDate').value);

    this.blackOutForm.get('fromDate').setValue(fromDate.toISOString());
    this.blackOutForm.get('toDate').setValue(toDate.toISOString());

    this.blackOutDataSave = Object.assign({}, this.blackOutData, this.blackOutForm.value);
    this.allocationsDataService.addHotelRangeBlackOut(this.blackOutDataSave as BlackOutViewModel).subscribe(
      (response) => {
        if (response.isError) {
          this.blackOutMessage = true;
        } else {
          this.blackOutMessage = false;
          this.snackBar.open('BlackOut Saved Successfully', '', { duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
          window.scrollTo(0, 0);
          this.blackOutForm.reset();
          this.blackOutForm.get('id').setValue(0);
        }
      }
    );
  }

}
