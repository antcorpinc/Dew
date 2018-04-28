import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DesignationViewModel } from '../../../viewmodel/usersviewmodel/designationviewmodel';
import { MgRoleViewModel } from '../../../viewmodel/usersviewmodel/mgrolelistviewmodel';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CONSTANTS } from '../../../../common/constants';
import { BackofficeLookupService } from '../../../common/backoffice-shared/services/backoffice-lookup';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelChainViewModel } from '../../../../common/viewmodels/hotelchainviewmodel';
import { HotelNameViewModel } from '../../../viewmodel/usersviewmodel/hotelnameviewmodel';
import { BACKOFFICECONSTANTS } from '../../../common/constants';
import { UserProfileService } from '../../../../common/shared/services/user-profile.service';
import { HotelUserViewModel } from '../../../viewmodel/usersviewmodel/hoteluserinfoviewmodel';
import { MatSnackBar, NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { UserDataService } from '../../../common/backoffice-shared/services/user-data.service';

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
  selector: 'app-supplier-user-info',
  templateUrl: './supplier-user-info.component.html',
  styleUrls: ['./supplier-user-info.component.css'],
  providers: [
    { provide: DateAdapter, useClass: DatePickerDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ]
})
export class SupplierUserInfoComponent implements OnInit {

  designationList: DesignationViewModel[];
  roleList: MgRoleViewModel[];
  partnerList: HotelChainViewModel[];
  supplierHotelForm: FormGroup;
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  read = CONSTANTS.operation.read;
  operation: string;
  editPartnerId: number;
  isPartnerHotelList: boolean;
  partnerHotelList: HotelNameViewModel[];
  mgHotelViewModel: HotelUserViewModel= <HotelUserViewModel>{};
  userId: string;
  isInactiveDateRequired = false;
  isChecked: boolean;
  todaysDate = new Date();
  minDate: string;
  allHotelIds: string[];

  constructor(private backOfficeLookUpService: BackofficeLookupService,
              private activatedRoute: ActivatedRoute,
              private userProfileService: UserProfileService,
              private router: Router,
              private snackBar: MatSnackBar,
              private userDataService: UserDataService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.operation = this.activatedRoute.snapshot.params['operation'];
    this.allHotelIds = [''];
    this.supplierHotelForm = new FormGroup({
      partnerList: new FormControl('', Validators.required),
      hotelId: new FormControl,
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      designationId: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      extranetRoleId: new FormControl('', Validators.required),
      activationDate: new FormControl('', Validators.required),
      inActivateUser: new FormControl(''),
      deActivationDate: new FormControl('')
    });

    this.getDesignations();
    this.getRoles();
    this.getHotelPartners();

    if (this.operation.toLowerCase().trim() === this.edit) {
      this.supplierHotelForm.controls.activationDate.disable();
      this.supplierHotelForm.controls.deActivationDate.disable();
      this.getSupplierHotelUser(this.userId);
   }
  }

  getDesignations() {
    this.designationList = this.activatedRoute.snapshot.data['designations'];
  }

  getRoles() {
    this.roleList = this.activatedRoute.snapshot.data['roles'];
  }

  getHotelPartners() {
    this.partnerList = this.activatedRoute.snapshot.data['suppliers'];
  }

  // fetch hotels according to partnerId
  getHotelsByPartnerId(partnerId) {
    if (partnerId !== null) {
      this.backOfficeLookUpService.getHotelsByPartnerId(partnerId).subscribe((data) => {
        this.partnerHotelList = data;
        this.isPartnerHotelList = (data.length > 1) ? true : false;
      });
     }
  }

  toggleDeactivationDate(event) {
    this.isChecked = event.checked;
    if (event.checked === true) {
      this.isInactiveDateRequired = true;
      this.supplierHotelForm.controls.deActivationDate.enable();
    } else {
      this.isInactiveDateRequired = false;
      this.supplierHotelForm.controls.deActivationDate.disable();
    }
    this.cd.detectChanges();
  }

  saveSupplierUserDetails() {

    const SupplierUser = Object.assign({}, this.mgHotelViewModel, this.supplierHotelForm.value);

    SupplierUser.updatedBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                                    this.userProfileService.GetBasicUserInfo().LastName;
    SupplierUser.userName = SupplierUser.email;
    SupplierUser.hotelUserType = BACKOFFICECONSTANTS.hotelUserType.supplier;

    if (this.operation === this.create) {

      SupplierUser.createdBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                                        this.userProfileService.GetBasicUserInfo().LastName;

      this.userDataService.createHotelUser(SupplierUser as HotelUserViewModel)
      .subscribe(data => {
        if (data.succeeded === true) {
        window.scrollTo(0, 0);
        this.snackBar.open('New Supplier is created successfully', '',
        { duration:  CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top',
        panelClass: 'showSnackBar'});
        this.router.navigate(['/usermgmt/hoteluserslist']);
      } else {
        // TODO: Need to check how we are doing error handling.
        this.snackBar.open('Error occourred while saving Supplier. ' + data.errors[0].description ,
        '', { duration:  CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
      }
      });

     } else if (this.operation === this.edit) {
      SupplierUser.createdBy =  this.mgHotelViewModel.createdBy;
      SupplierUser.activationDate =  this.mgHotelViewModel.activationDate;

      if (this.isInactiveDateRequired) {
      this.isChecked = true;
      SupplierUser.inActivationType = CONSTANTS.inActiveType.permanent;
    }

      this.userDataService.updateHotelUser(this.userId, SupplierUser)
      .subscribe(data => {
        if (data.succeeded === true) {
        window.scrollTo(0, 0);
        this.snackBar.open('The Supplier is updated successfully', '',
        { duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top',
        panelClass: 'showSnackBar'});
        this.router.navigate(['/usermgmt/hoteluserslist']);
      } else {
        // TODO: Need to check how we are doing error handling.
        this.snackBar.open('Error occourred while saving Supplier. ' + data.errors[0].description ,
        '', { duration:  CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
      }
      });
    }

  }

  cancel() {
    window.scrollTo(0, 0);
    this.router.navigate(['/usermgmt/hoteluserslist']);
  }

  selectAllHotels() {
    // fetch all hotelIds from hotelsList
    if (this.partnerHotelList !== null) {
      this.allHotelIds.splice(0 , this.allHotelIds.length);
      for (let b = 0; b < this.partnerHotelList.length; b++) {
        this.allHotelIds[b] = this.partnerHotelList[b].hotelId;
      }
      // select/deselect all hotels
      if (this.supplierHotelForm.value.hotelId.length !== 0) {
        if (this.supplierHotelForm.value.hotelId[0] == null && this.supplierHotelForm.value.hotelId.length !==
          (this.allHotelIds.length + 1)) {
            this.supplierHotelForm.patchValue({hotelId: this.allHotelIds});
        } else if (this.supplierHotelForm.value.hotelId.length === (this.allHotelIds.length + 1)) {
          this.supplierHotelForm.patchValue({hotelId: null});
        }
     }
    }
 }

  getSupplierHotelUser(userId) {
    this.userDataService.getHotelUserById(userId).subscribe(
      (supplierHotelUserData) => {
          this.mgHotelViewModel.createdBy = supplierHotelUserData.createdBy;
          this.mgHotelViewModel.activationDate = supplierHotelUserData.activationDate;

          this.supplierHotelForm.get('firstName').setValue(supplierHotelUserData.firstName);
          this.supplierHotelForm.get('lastName').setValue(supplierHotelUserData.lastName);
          this.supplierHotelForm.get('email').setValue(supplierHotelUserData.email);
          this.supplierHotelForm.get('extranetRoleId').setValue(supplierHotelUserData.extranetRoleId);
          this.supplierHotelForm.get('designationId').setValue(supplierHotelUserData.designationId);
          this.supplierHotelForm.get('activationDate').setValue(supplierHotelUserData.activationDate);
          this.supplierHotelForm.get('partnerList').setValue(supplierHotelUserData.chainId);
          this.getHotelsByPartnerId(supplierHotelUserData.chainId);
          this.supplierHotelForm.get('hotelId').setValue(supplierHotelUserData.hotelId);
          this.isChecked = false;
          if (supplierHotelUserData.deActivationDate != null) {
            this.isInactiveDateRequired = true;
            this.isChecked = true;
            this.supplierHotelForm.controls.deActivationDate.enable();
            this.supplierHotelForm.get('deActivationDate').setValue(supplierHotelUserData.deActivationDate);
          }
      }
    );
  }
}
