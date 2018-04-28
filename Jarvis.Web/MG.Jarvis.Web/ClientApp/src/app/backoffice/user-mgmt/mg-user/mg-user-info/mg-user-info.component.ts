import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MgApplicationViewModel } from '../../../viewmodel/usersviewmodel/mgapplicationlistviewmodel';
import { DepartmentViewModel } from '../../../viewmodel/usersviewmodel/departmentviewmodel';
import { CONSTANTS } from '../../../../common/constants';
import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { MatSnackBar, NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS, MatDatepickerInputEvent } from '@angular/material';
import { UserDataService } from '../../../common/backoffice-shared/services/user-data.service';
import { MgUserViewModel } from '../../../viewmodel/usersviewmodel/mguserviewmodel';
import { Observable } from 'rxjs/Observable';
import { MgRoleViewModel } from '../../../viewmodel/usersviewmodel/mgrolelistviewmodel';
import { BackofficeLookupService } from '../../../common/backoffice-shared/services/backoffice-lookup';
import { UserProfileService } from '../../../../common/shared/services/user-profile.service';
import { ApplicationRoleIdViewModel } from '../../../viewmodel/usersviewmodel/applicationroleidviewmodel';
import { DialogsService } from '../../../../extranet/common/extranet-shared/dialogs/dialogs.service';
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

function ValidateAppRole(control: AbstractControl): { [key: string]: boolean } | null {
  const appRoleList = control;
  if ((appRoleList.value !== undefined) && (appRoleList.value !== null) &&
    (appRoleList.value.length > 0)) {

    const appList = [];

    const appRoleArray = [];
    appRoleList.value.forEach(element => {
      appList.push(element.applicationId);
      appRoleArray.push({applicationId: element.applicationId, roleId: element.roleId});
    });
    const sorterAppList = appList.sort();
    const duplicateApp = false;
    for (let i = 0; i < sorterAppList.length - 1; i++) {
      if (sorterAppList[i + 1] != null && sorterAppList[i] != null) {
        if (sorterAppList[i + 1] === sorterAppList[i]) {
          return { 'ValidateAppRole': true };
        }
      }
    }

    for (let i = 0; i < appRoleArray.length; i++) {
      if ( appRoleArray[i] != null) {
        if (appRoleArray[i].applicationId !== null &&  appRoleArray[i].roleId === null ) {
          return { 'ValidateAppRoleNotNull': true };
        }
      }
    }

  }
  return null;
}

@Component({
  selector: 'app-mg-user-info',
  templateUrl: './mg-user-info.component.html',
  styleUrls: ['./mg-user-info.component.css'],
  providers: [
    { provide: DateAdapter, useClass: DatePickerDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ]
})

export class MgUserInfoComponent implements OnInit {

  departmentList: DepartmentViewModel[];
  applicationList: MgApplicationViewModel[];
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  read = CONSTANTS.operation.read;
  temporary = CONSTANTS.inActiveType.temporary;
  permanent = CONSTANTS.inActiveType.permanent;
  // id: string;
  userId: string;
  operation: string;
  mgUserForm: FormGroup;
  mgUserViewModel: MgUserViewModel = <MgUserViewModel>{};
  appRolesListArray = Array<MgRoleViewModel[]>();
  appRoles: Observable<MgRoleViewModel[]>;
  isMaxLength: boolean;
  result: any;
  actions: string;
  isInactivateUser: boolean;
  inactiveType: string;
  todaysDate = new Date();
  inactiveToMinDate = new Date();
  mgUser = BACKOFFICECONSTANTS.userType.mgUser;
  wasTemporaryInactive: boolean;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private cd: ChangeDetectorRef,
              private snackBar: MatSnackBar,
              private userDataService: UserDataService,
              private backofficeLookupService: BackofficeLookupService,
              private userProfileService: UserProfileService,
              private dialogsService: DialogsService) { }

  ngOnInit() {
    // Get the id from the activated route
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.operation = this.activatedRoute.snapshot.params['operation'];
    // Get all the master data
    this.getDepartments();
    this.getApplications();

    // Set inactiveToMinDate as tomorrow's date
    this.inactiveToMinDate.setDate(this.todaysDate.getDate() + 1);

    // Create the Form Model
    this.mgUserForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      userName: new FormControl(),
      employeeId: new FormControl(),
      email: new FormControl(),
      departments: new FormControl(),
      activationDate: new FormControl(),
      userApplicationRole: new FormArray([], ValidateAppRole),
      temporaryInActivationDate: new FormControl(),
      temporaryActivationDate: new FormControl(),
      deActivationDate: new FormControl()
    });

    if (this.operation.toLowerCase().trim() === this.create) {
      this.addAppRole();
    } else if (this.operation.toLowerCase().trim() === this.edit || this.operation.toLowerCase().trim() === this.read) {
      this.getMGUser(this.userId);
      this.mgUserForm.controls.activationDate.disable();
    }
  }

  getMGUser(userId) {
    this.userDataService.getMGUserById(userId).subscribe(
      (mgUserData) => {
        if (this.operation.toLowerCase().trim() === this.edit) {
          this.mgUserViewModel = mgUserData;
          this.isInactivateUser = false;
          this.wasTemporaryInactive = false;
          this.mgUserForm.get('firstName').setValue(mgUserData.firstName);
          this.mgUserForm.get('lastName').setValue(mgUserData.lastName);
          this.mgUserForm.get('userName').setValue(mgUserData.userName);
          this.mgUserForm.get('employeeId').setValue(mgUserData.employeeId);
          this.mgUserForm.get('email').setValue(mgUserData.email);
          const departmentIds = [];
          for (const departmentId of mgUserData.departments) {
            departmentIds.push(departmentId);
          }
          this.mgUserForm.get('departments').setValue(departmentIds);
          this.mgUserForm.get('activationDate').setValue(mgUserData.activationDate);
          const applicationRoleIdArray: ApplicationRoleIdViewModel[] = [];
          const appRoleValue = mgUserData.userApplicationRole;
          for (let i = 0; i < appRoleValue.length; i++) {
            this.addAppRole();
          }
          this.userApplicationRole.controls.forEach((control , index) => {
            control.get('applicationId').setValue(appRoleValue[index].applicationId);
            this.getRolesForApplication(index);
            control.get('roleId').setValue(appRoleValue[index].roleId);
          });

          if (mgUserData.inActivationType !== null &&
            mgUserData.inActivationType !== undefined &&
            mgUserData.inActivationType.trim() !== '') {
            this.isInactivateUser = true;
            this.inactiveType = mgUserData.inActivationType;
            if (this.inactiveType === this.temporary &&
                mgUserData.temporaryInActivationDate !== undefined &&
                mgUserData.temporaryInActivationDate !== null &&
                mgUserData.temporaryInActivationDate !== '' &&
                new Date(mgUserData.temporaryInActivationDate) <= this.todaysDate) {
              this.wasTemporaryInactive = true;
            }
          }

          this.mgUserForm.get('temporaryInActivationDate').setValue(mgUserData.temporaryInActivationDate);
          this.mgUserForm.get('temporaryActivationDate').setValue(mgUserData.temporaryActivationDate);
          this.mgUserForm.get('deActivationDate').setValue(mgUserData.deActivationDate);
          this.toggleInactivationDates();
          this.cd.detectChanges();
        }
      }
    );
  }

  getDepartments() {
    this.departmentList = this.activatedRoute.snapshot.data['departments'];
   }

  getApplications() {
    this.applicationList = this.activatedRoute.snapshot.data['applications'];
  }

   get userApplicationRole():  FormArray {
    return <FormArray>this.mgUserForm.get('userApplicationRole');
   }

  buildAppRole(): FormGroup {
      let appRoleFormGroup: FormGroup;
      appRoleFormGroup = new FormGroup({
        applicationId: new FormControl(),
        roleId: new FormControl()
    });
    return appRoleFormGroup;
   }

  addAppRole() {
    this.userApplicationRole.push(this.buildAppRole());
    if (this.appRolesListArray === null || this.appRolesListArray === undefined) {
      this.appRolesListArray = new Array<MgRoleViewModel[]>();
    } else {
      this.appRolesListArray.push([]);
    }

    if (this.userApplicationRole.length === this.applicationList.length) {

      this.isMaxLength = true;
    }
    this.cd.detectChanges();
  }

  confirmDeleteAppRole(index: number) {
    this.isMaxLength = false;
    this.dialogsService
    .confirm('Confirm', 'Are you sure you want to delete this application role?').subscribe(res => {
      this.result = res;
      if (this.result) {
        this.deleteAppRole(index);
      } else {
        this.actions = null;
      }
    });
  }

  deleteAppRole(index: number) {
    this.userApplicationRole.removeAt(index);
    this.appRolesListArray.splice(index, 1);
    this.cd.detectChanges();
  }

  getRolesForApplication(applicationIndex: number) {
    const applicationId = this.userApplicationRole.controls[applicationIndex].get('applicationId').value;
    this.appRoles = this.backofficeLookupService.getRolesByApplicationIdAndUserType(applicationId, this.mgUser);
    this.appRoles.subscribe(data => {
      this.appRolesListArray[applicationIndex] = data;
    });
  }

  saveUser() {
    const savedMGUser: MgUserViewModel = Object.assign({}, this.mgUserViewModel, this.mgUserForm.value);
    savedMGUser.userName = savedMGUser.email;
    savedMGUser.updatedBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                            this.userProfileService.GetBasicUserInfo().LastName;
    if (this.operation === this.create) {
      savedMGUser.createdBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                            this.userProfileService.GetBasicUserInfo().LastName;
      this.userDataService.createMGUser(savedMGUser)
      .subscribe(data => {
        window.scrollTo(0, 0);
        let snackBarMessage = 'New user is created successfully';
        if (!data.succeeded) {
          snackBarMessage = 'Error while creating new user';
          if (data.errors && data.errors.length > 0) {
            snackBarMessage += ' - ' + data.errors[0].description;
          }
        }
        this.snackBar.open(snackBarMessage, '', { duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top',
        panelClass: 'showSnackBar'});
        this.router.navigate(['/usermgmt/mgusers']);
      });
    }  else if (this.operation === this.edit) {
      savedMGUser.createdBy = this.mgUserViewModel.createdBy;
      if (this.inactiveType !== undefined && this.inactiveType !== null && this.inactiveType.trim() !== '') {
        savedMGUser.inActivationType = this.inactiveType;
        if (this.inactiveType === this.temporary) {
          // Clear deActivationDate if inactive type is Temporary
          savedMGUser.deActivationDate = null;
        } else {
          // Clear temporaryInActivationDate and temporaryActivationDate if inactive type is Permanent
          savedMGUser.temporaryInActivationDate = null;
          savedMGUser.temporaryActivationDate = null;
        }
      } else {
        // Clear deActivationDate, temporaryInActivationDate and temporaryActivationDate if Inactivate User checkbox is unchecked
        // If Inactivate User checkbox is unchecked -
        // Check if the user was temporary inactive
        // if yes, set temporaryActivationDate to today's date in ISOString format e.g. "2018-04-25T00:00:00.000Z"
        // if no, clear inActivationType, deActivationDate, temporaryInActivationDate and temporaryActivationDate
        if (this.wasTemporaryInactive) {
          savedMGUser.temporaryActivationDate = new Date(Date.UTC(this.todaysDate.getFullYear(),
                                                                  this.todaysDate.getMonth(),
                                                                  this.todaysDate.getDate(),
                                                                  0, 0, 0)).toISOString();
        } else {
          savedMGUser.inActivationType = null;
          savedMGUser.temporaryInActivationDate = null;
          savedMGUser.temporaryActivationDate = null;
          savedMGUser.deActivationDate = null;
        }
      }
      this.userDataService.updateMGUser(this.userId, savedMGUser)
      .subscribe(data => {
        window.scrollTo(0, 0);
        let snackBarMessage = 'The user is updated successfully';
        if (!data.succeeded) {
          snackBarMessage = 'Error while updating the user';
          if (data.errors && data.errors.length > 0) {
            snackBarMessage += ' - ' + data.errors[0].description;
          }
        }
        this.snackBar.open(snackBarMessage, '', { duration: CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top',
        panelClass: 'showSnackBar'});
        this.router.navigate(['/usermgmt/mgusers']);
      });
    }
  }

  cancel() {
    window.scrollTo(0, 0);
    this.router.navigate(['/usermgmt/mgusers']);
  }

  showHideInactiationDatesSection(event) {
      this.isInactivateUser = event.checked;
      // Temporary radio button will be by default selected
      if (event.checked) {
        this.inactiveType = this.temporary;
      } else {
      // Once Inactivate User checkbox unchecked, reset inactiveType
        this.inactiveType = null;
      }
      this.toggleInactivationDates();
      this.cd.detectChanges();
  }

  toggleInactiveUserType(event) {
      this.inactiveType = event.value;
      this.toggleInactivationDates();
      this.cd.detectChanges();
  }

  toggleInactivationDates() {
    if (this.inactiveType === this.temporary) {
      this.mgUserForm.controls.deActivationDate.disable();
      this.mgUserForm.controls.temporaryInActivationDate.enable();
      this.mgUserForm.controls.temporaryActivationDate.enable();
    } else if (this.inactiveType === this.permanent) {
      this.mgUserForm.controls.deActivationDate.enable();
      this.mgUserForm.controls.temporaryInActivationDate.disable();
      this.mgUserForm.controls.temporaryActivationDate.disable();
    } else {
      this.mgUserForm.controls.deActivationDate.disable();
      this.mgUserForm.controls.temporaryInActivationDate.disable();
      this.mgUserForm.controls.temporaryActivationDate.disable();
    }
  }

  inActiveFromDateChange(type: string, event: MatDatepickerInputEvent<Date>) {
    const inactiveFromDateValue = this.mgUserForm.get('temporaryInActivationDate').value;
    const inactiveToDateValue = this.mgUserForm.get('temporaryActivationDate').value;
    const inactiveFromDate = inactiveFromDateValue !== undefined && inactiveFromDateValue !== null ? new Date(inactiveFromDateValue) : '';
    if (inactiveFromDate !== '') {
      // Set inactiveToMinDate as next day of inactiveFromDate
      this.inactiveToMinDate = inactiveFromDate;
      this.inactiveToMinDate.setDate(inactiveFromDate.getDate() + 1);
      const inactiveToDate = inactiveToDateValue !== undefined && inactiveToDateValue !== null ? new Date(inactiveToDateValue) : '';
      if (inactiveToDate !== '') {
        if (inactiveFromDate >= inactiveToDate) {
          this.mgUserForm.get('temporaryActivationDate').setValue(null);
        }
      }
    } else {
      // Set inactiveToMinDate as tomorrow's date
      this.inactiveToMinDate = new Date();
      this.inactiveToMinDate.setDate(this.todaysDate.getDate() + 1);
    }
    this.cd.detectChanges();
  }
}
