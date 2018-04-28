import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelBrandViewModel } from '../../../../common/viewmodels/hotelbrandviewmodel';
import { HotelChainViewModel } from '../../../../common/viewmodels/hotelchainviewmodel';
import { CONSTANTS } from '../../../../common/constants';
import { BACKOFFICECONSTANTS } from '../../../common/constants';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MatSnackBar, NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { HotelUserViewModel } from '../../../viewmodel/usersviewmodel/hoteluserinfoviewmodel';
import { HotelNameViewModel } from '../../../viewmodel/usersviewmodel/hotelnameviewmodel';
import { DesignationViewModel } from '../../../viewmodel/usersviewmodel/designationviewmodel';
import { MgRoleViewModel } from '../../../viewmodel/usersviewmodel/mgrolelistviewmodel';
import { BackofficeLookupService } from '../../../common/backoffice-shared/services/backoffice-lookup';
import { LookupService } from '../../../../common/shared/services/lookup.service';
import { UserDataService } from '../../../common/backoffice-shared/services/user-data.service';
import { UserProfileService } from '../../../../common/shared/services/user-profile.service';

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
  selector: 'app-hotel-user-info',
  templateUrl: './hotel-user-info.component.html',
  styleUrls: ['./hotel-user-info.component.css'],
  providers: [
    { provide: DateAdapter, useClass: DatePickerDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ]
})
export class HotelUserInfoComponent implements OnInit {

  HotelchainList: HotelChainViewModel[];
  HotelbrandList: HotelBrandViewModel[];
  hotelNameList: HotelNameViewModel[];
  designationList: DesignationViewModel[];
  roleList: MgRoleViewModel[];
  public todaysDate = new Date();
  hotelUser: HotelUserViewModel;
  minDate: string;
  userId: string;
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  read = CONSTANTS.operation.read;
  hotelUserDetails: HotelUserViewModel = <HotelUserViewModel>{};
  hotelUserForm: FormGroup;
  allBrandIds: number[];
  allHotelIds: string[];
  isHotelList: boolean;
  isBrandList: boolean;
  operation: string;
  editBrandIds: number[];
  editChainId: number;
  isInactiveDateRequired = false;
  isEdit = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private cd: ChangeDetectorRef,
    private lookupService: LookupService,
    private userDataService: UserDataService,
  private backOfficeLookUpService: BackofficeLookupService,
  private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.operation = this.activatedRoute.snapshot.params['operation'];
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.getHotelChainList();
    this.getDesignations();
    this.getRoles();
    this.allBrandIds = [0];
    this.allHotelIds = [''];
    this.isHotelList = false;
    this.isBrandList = false;
    this.hotelUserForm = new FormGroup({
      chainId: new FormControl('', Validators.required),
      brandIds: new FormControl('', Validators.required),
      hotelId: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      designationId: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      extranetRoleId: new FormControl('', Validators.required),
      activationDate: new FormControl(''),
      inActivateUser: new FormControl(''),
      deActivationDate: new FormControl('')
    });

    if (this.operation === this.edit) {
      this.isEdit = true;
      this.hotelUserForm.controls.activationDate.disable();
      this.getHotelUser();
    }
  }

  toggleDeactivationDate(event) {
    this.isInactiveDateRequired = event.checked;
    if (event.checked) {
      this.hotelUserForm.controls.deActivationDate.enable();
    } else {
      this.hotelUserForm.controls.deActivationDate.disable();
    }
      this.cd.detectChanges();
  }

  getHotelChainList() {
      this.HotelchainList = this.activatedRoute.snapshot.data['hotelChains'];

  }

  getHotelBrands(chainId) {
    if (this.operation === this.edit && this.hotelUserForm.value.chainId !== this.editChainId || this.operation === this.create) {
      this.hotelUserForm.patchValue({brandId: null});
      this.hotelUserForm.patchValue({hotelId: null});
      this.HotelbrandList = null;
      this.hotelNameList = null;
      this.isHotelList = false;
      this.isBrandList = false;
    }
    this.lookupService.getHotelBrands(chainId).subscribe((mghotelbrandList) => {
      this.HotelbrandList = mghotelbrandList;
      if (mghotelbrandList.length > 1) {
        this.isBrandList = true;
      }
      if (this.operation === this.edit) {
        this.getHotels(this.editBrandIds);
      }
    });
  }

  getDesignations() {
    this.backOfficeLookUpService.getDesignationByType(CONSTANTS.userType.hoteluser).subscribe(designationData =>
      this.designationList = designationData
    );
  }

  getRoles() {
    this.backOfficeLookUpService.getRolesByApplicationName(CONSTANTS.application.extranet, BACKOFFICECONSTANTS.userType.hotelUser)
    .subscribe(data =>
      this.roleList = data
    );
  }

  selectAllHotels() {
    // fetch all hotelIds from hotelsList
    if (this.hotelNameList !== null) {
      this.allHotelIds.splice(0 , this.allHotelIds.length);
      for (let b = 0; b < this.hotelNameList.length; b++) {
        this.allHotelIds[b] = this.hotelNameList[b].hotelId;
      }
      // select/deselect all hotels
      if (this.hotelUserForm.value.hotelId.length !== 0) {
        if (this.hotelUserForm.value.hotelId[0] == null && this.hotelUserForm.value.hotelId.length !== (this.allHotelIds.length + 1)) {
            this.hotelUserForm.patchValue({hotelId: this.allHotelIds});
        } else if (this.hotelUserForm.value.hotelId.length === (this.allHotelIds.length + 1)) {
          this.hotelUserForm.patchValue({hotelId: null});
        }
     }
    }
 }

  getHotels(brandIds) {
    // fetch all brandIds from brandsList
    this.allBrandIds.splice(0 , this.allBrandIds.length);
    for (let b = 0; b < this.HotelbrandList.length; b++) {
      this.allBrandIds[b] = this.HotelbrandList[b].hotelBrandId;
    }
    // select/deselect all brands
    if (brandIds.length !== (this.allBrandIds.length + 1) && brandIds.length !== 0) {
        if (brandIds[0] == null) {
          for (let b = 0; b < this.HotelbrandList.length; b++) {
            brandIds[b] = this.HotelbrandList[b].hotelBrandId;
            this.hotelUserForm.value.brandIds[b] = this.HotelbrandList[b].hotelBrandId;
          }
          this.hotelUserForm.patchValue({brandIds: brandIds});
        }
    } else if (brandIds.length === (this.allBrandIds.length + 1) && this.hotelNameList != null) {
      this.hotelUserForm.patchValue({brandIds: null});
      this.hotelNameList = null;
      this.isHotelList = false;
    }
    // fetch hotels according to brandIds
     if (brandIds.length >= 1 && brandIds[0] !== null) {
      this.backOfficeLookUpService.getHotelsByBrandIds(brandIds).subscribe((data) => {
        this.hotelNameList = data;
        this.isHotelList = (data.length > 1) ? true : false;
      });
     }

  }
getHotelUser() {
  // this.getHotelBrands(2);
  // this.getHotels(this.testBrandIds);
  this.userDataService.getHotelUserById(this.userId).subscribe((hotelUser) => {
    this.hotelUserDetails = hotelUser;
    // this.hotelUser = hotelUser;
    this.hotelUserForm.get('chainId').setValue(hotelUser.chainId);
    this.editChainId = hotelUser.chainId;
    this.getHotelBrands(hotelUser.chainId);
    this.hotelUserForm.get('brandIds').setValue(hotelUser.brandId);
    this.editBrandIds = hotelUser.brandId;
    this.hotelUserForm.get('hotelId').setValue(hotelUser.hotelId);
    this.hotelUserForm.get('firstName').setValue(hotelUser.firstName);
    this.hotelUserForm.get('lastName').setValue(hotelUser.lastName);
    this.hotelUserForm.get('designationId').setValue(hotelUser.designationId);
    this.hotelUserForm.get('extranetRoleId').setValue(hotelUser.extranetRoleId);
    this.hotelUserForm.get('email').setValue(hotelUser.email);
    this.hotelUserForm.get('activationDate').setValue(hotelUser.activationDate);
    if (hotelUser.deActivationDate !== null) {
      // this.hotelUserForm.get('inActivateUser').setValue(true);
      this.isInactiveDateRequired = true;
      this.hotelUserForm.get('deActivationDate').setValue(hotelUser.deActivationDate);
      this.cd.detectChanges();
    }
  });
}

  saveHotelUserDetails() {
    const hotelUser = Object.assign({}, this.hotelUserDetails, this.hotelUserForm.value);
    hotelUser.userName = hotelUser.email;
    hotelUser.hotelUserType = BACKOFFICECONSTANTS.hotelUserType.chain;
    if (this.isInactiveDateRequired) {
      hotelUser.inActivationType = CONSTANTS.inActiveType.permanent;
    }
    if (this.isEdit && !this.isInactiveDateRequired) {
      hotelUser.inActivationType = '';
      hotelUser.deActivationDate = '';
    }
    hotelUser.createdBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
    this.userProfileService.GetBasicUserInfo().LastName;
    hotelUser.updatedBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
    this.userProfileService.GetBasicUserInfo().LastName;

    if (this.operation === this.create) {
      this.userDataService.createHotelUser(hotelUser as HotelUserViewModel)
      .subscribe(data => {
        if (data.succeeded === true) {
          this.snackBar.open('New user is created successfully', '', { duration:  CONSTANTS.toasterTimeOut.duration,
            verticalPosition: 'top', panelClass: 'showSnackBar'});
          this.router.navigate(['/usermgmt/hoteluserslist']);
        } else {
          // TODO: Need to check how we are doing error handling.
          this.snackBar.open('Error occourred while saving Agent. ' + data.errors[0].description ,
          '', { duration:  CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
        }
      });
    } else if (this.operation === this.edit) {
      this.userDataService.updateHotelUser(this.userId, hotelUser as HotelUserViewModel)
      .subscribe(data => {
        if (data.succeeded === true) {
          this.snackBar.open('The user is updated successfully', '', { duration:  CONSTANTS.toasterTimeOut.duration,
            verticalPosition: 'top', panelClass: 'showSnackBar'});
          this.router.navigate(['/usermgmt/hoteluserslist']);
        } else {
          // TODO: Need to check how we are doing error handling.
          this.snackBar.open('Error occourred while saving Agent. ' + data.errors[0].description ,
          '', { duration:  CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
        }
      });
    }
  }

  cancel() {
    window.scrollTo(0, 0);
    this.router.navigate(['/usermgmt/hoteluserslist']);
  }
}
