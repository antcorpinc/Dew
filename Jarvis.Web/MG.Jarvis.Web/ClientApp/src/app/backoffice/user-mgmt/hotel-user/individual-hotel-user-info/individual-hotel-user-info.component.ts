import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DesignationViewModel } from '../../../viewmodel/usersviewmodel/designationviewmodel';
import { MgRoleViewModel } from '../../../viewmodel/usersviewmodel/mgrolelistviewmodel';
import { CONSTANTS } from '../../../../common/constants';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackofficeLookupService } from '../../../common/backoffice-shared/services/backoffice-lookup';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../../../common/backoffice-shared/services/user-data.service';
import { MatSnackBar, NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { HotelUserViewModel } from '../../../viewmodel/usersviewmodel/hoteluserinfoviewmodel';
import { HotelNameViewModel } from '../../../viewmodel/usersviewmodel/hotelnameviewmodel';
import { UserProfileService } from '../../../../common/shared/services/user-profile.service';
import { BACKOFFICECONSTANTS } from '../../../common/constants';

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
  selector: 'app-individual-hotel-user-info',
  templateUrl: './individual-hotel-user-info.component.html',
  styleUrls: ['./individual-hotel-user-info.component.css'],
  providers: [
    { provide: DateAdapter, useClass: DatePickerDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ]
})
export class IndividualHotelUserInfoComponent implements OnInit {

  designationList: DesignationViewModel[];
  hotelList: HotelNameViewModel[];
  roleList: MgRoleViewModel[];
  individualHotelForm: FormGroup;
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  read = CONSTANTS.operation.read;
  operation: string;
  mgHotelViewModel: HotelUserViewModel= <HotelUserViewModel>{};
  todaysDate = new Date();
  minDate: string;
  userId: string;
  isInactiveDateRequired = false;
  isChecked: boolean;
  direction: number;

  constructor(private backOfficeLookUpService: BackofficeLookupService,
              private activatedRoute: ActivatedRoute,
              private userDataService: UserDataService,
              private snackBar: MatSnackBar,
              private router: Router,
              private userProfileService: UserProfileService,
              private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.direction = 1 ;
    this.operation = this.activatedRoute.snapshot.params['operation'];
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.individualHotelForm = new FormGroup({
      hotelId: new FormControl('', Validators.required),
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
    this.getHotels();

    if (this.operation.toLowerCase().trim() === this.edit) {
      this.individualHotelForm.controls.activationDate.disable();
      this.individualHotelForm.controls.deActivationDate.disable();
      this.getIndividualHotelUser(this.userId);
   }

  }

  getDesignations() {
    this.designationList = this.activatedRoute.snapshot.data['designations'];
  }

  getRoles() {
    this.roleList = this.activatedRoute.snapshot.data['roles'];
  }

  getHotels() {
      this.hotelList = this.activatedRoute.snapshot.data['hotels'];
  }

  toggleDeactivationDate(event) {
    this.isChecked = event.checked;
    if (event.checked === true) {
      this.isInactiveDateRequired = true;
      this.individualHotelForm.controls.deActivationDate.enable();
    } else {
      this.isInactiveDateRequired = false;
      this.individualHotelForm.controls.deActivationDate.disable();
    }
    this.cd.detectChanges();
  }

  saveIndividualHotelUserDetails() {

    const individualHotelUser = Object.assign({}, this.mgHotelViewModel, this.individualHotelForm.value);

    individualHotelUser.updatedBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                                    this.userProfileService.GetBasicUserInfo().LastName;
    individualHotelUser.userName = individualHotelUser.email;
    individualHotelUser.hotelUserType = BACKOFFICECONSTANTS.hotelUserType.individual;

      if (this.operation === this.create) {

        individualHotelUser.createdBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                                        this.userProfileService.GetBasicUserInfo().LastName;

      this.userDataService.createHotelUser(individualHotelUser as HotelUserViewModel)
      .subscribe(data => {
        if (data.succeeded === true) {
        window.scrollTo(0, 0);
        this.snackBar.open('New user is created successfully', '', { duration:  CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top',
        panelClass: 'showSnackBar'});
        this.router.navigate(['/usermgmt/hoteluserslist']);
      } else {
        // TODO: Need to check how we are doing error handling.
        this.snackBar.open('Error occourred while saving Agent. ' + data.errors[0].description ,
        '', { duration:  CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
      }
      });

     } else if (this.operation === this.edit) {
      individualHotelUser.createdBy =  this.mgHotelViewModel.createdBy;
      individualHotelUser.activationDate =  this.mgHotelViewModel.activationDate;

      if (this.isInactiveDateRequired) {
      this.isChecked = true;
      individualHotelUser.inActivationType = CONSTANTS.inActiveType.permanent;
    }

      this.userDataService.updateHotelUser(this.userId, individualHotelUser)
      .subscribe(data => {
        if (data.succeeded === true) {
        window.scrollTo(0, 0);
        this.snackBar.open('The user is updated successfully', '', { duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top',
        panelClass: 'showSnackBar'});
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

  getIndividualHotelUser(userId) {
    this.userDataService.getHotelUserById(userId).subscribe(
      (individualHotelUserData) => {
          this.mgHotelViewModel.createdBy = individualHotelUserData.createdBy;
          this.mgHotelViewModel.activationDate = individualHotelUserData.activationDate;

          this.individualHotelForm.get('firstName').setValue(individualHotelUserData.firstName);
          this.individualHotelForm.get('lastName').setValue(individualHotelUserData.lastName);
          this.individualHotelForm.get('email').setValue(individualHotelUserData.email);
          this.individualHotelForm.get('extranetRoleId').setValue(individualHotelUserData.extranetRoleId);
          this.individualHotelForm.get('designationId').setValue(individualHotelUserData.designationId);
          this.individualHotelForm.get('activationDate').setValue(individualHotelUserData.activationDate);
          this.individualHotelForm.get('hotelId').setValue(individualHotelUserData.hotelId);
          this.isChecked = false;
          if (individualHotelUserData.deActivationDate != null) {
            this.isInactiveDateRequired = true;
            this.isChecked = true;
            this.individualHotelForm.controls.deActivationDate.enable();
            this.individualHotelForm.get('deActivationDate').setValue(individualHotelUserData.deActivationDate);
          }
      }
    );
  }

}
