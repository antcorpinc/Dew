import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CONSTANTS } from '../../../../common/constants';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../../common/backoffice-shared/services/user-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgentInfoViewModel } from '../../../viewmodel/usersviewmodel/agentinfoviewmodel';
import { AgencyViewModel } from '../../../viewmodel/usersviewmodel/agencyviewmodel';
import { DesignationViewModel } from '../../../viewmodel/usersviewmodel/designationviewmodel';
import { MgRoleViewModel } from '../../../viewmodel/usersviewmodel/mgrolelistviewmodel';
import { BackofficeLookupService } from '../../../common/backoffice-shared/services/backoffice-lookup';
import { BranchViewModel } from '../../../viewmodel/usersviewmodel/branchviewmodel';
import { Observable } from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { MatSnackBar , NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS} from '@angular/material';
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
  selector: 'app-agent-user-info',
  templateUrl: './agent-user-info.component.html',
  styleUrls: ['./agent-user-info.component.css'],
  providers: [
    { provide: DateAdapter, useClass: DatePickerDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
  ]
})

export class AgentUserInfoComponent implements OnInit {
  operation: string;
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  agentId: string;
  agentInfo: AgentInfoViewModel = <AgentInfoViewModel>{};
  agentForm: FormGroup;
  designationList: DesignationViewModel[];
  roleList: MgRoleViewModel[];
  agencyList: AgencyViewModel[] = [];
  branchList: BranchViewModel[] = [];
  public todaysDate = new Date();
  filteredOptions: Observable<AgencyViewModel[]>;
  filteredBranchOptions: Observable<BranchViewModel[]>;
  isEdit = false;
  isInactiveDateRequired: boolean;
  direction = 1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    public lookupService: BackofficeLookupService,
    private userDataService: UserDataService,
    private snackBar: MatSnackBar,
    private cd: ChangeDetectorRef,
    private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.operation = this.activatedRoute.snapshot.params['operation'];
    this.agentId = this.activatedRoute.snapshot.params['id'];

    this.agentForm = new FormGroup({
      agency: new FormControl('', Validators.required),
      branch: new FormControl('' , Validators.required),
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      designationId: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contactNumber: new FormControl('', Validators.required),
      b2BRoleId: new FormControl('', Validators.required),
      activationDate: new FormControl(''),
      inActivateUser: new FormControl(''),
      deActivationDate: new FormControl(''),
    });

    if (this.operation.toLowerCase().trim() === this.edit) {
      this.isEdit = true;
      this.agentForm.controls.activationDate.disable();
      this.getAgentUser(this.agentId);
    }

    this.getDesignations();
    this.getRoles();
    this.getAgencies();

    this.filteredOptions = this.agentForm.controls.agency.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filter(val.toString()))
    );

    this.filteredBranchOptions = this.agentForm.controls.branch.valueChanges
    .pipe(
      startWith(''),
      map(val => this.filterBranch(val.toString()))
    );
  }

  filter(val: string): AgencyViewModel[] {
    if (this.agencyList.length > 0 ) {
    return this.agencyList.filter(option =>
       option.name.toString().toLowerCase().indexOf(val.toString().toLowerCase()) === 0);
    }
  }

  filterBranch(val: string): BranchViewModel[] {
    if (this.branchList.length > 0) {
    return this.branchList.filter(option =>
       option.name.toString().toLowerCase().indexOf(val.toString().toLowerCase()) === 0);
    }
  }

  displayFn(val: AgencyViewModel) {
    return val ? val.name + ' - ' + val.code : val ;
  }

  displayBranchFn(val: BranchViewModel) {
    return val ? val.name : val ;
  }

  toggleDeactivationDate(event) {
    this.isInactiveDateRequired = event.checked;
    if (event.checked) {
    this.agentForm.controls.deActivationDate.enable();
    } else {
    this.agentForm.controls.deActivationDate.disable();
    }
    this.cd.detectChanges();
  }

  getDesignations() {
    this.lookupService.getDesignationByType(CONSTANTS.userType.agentuser).subscribe(designationData =>
      this.designationList = designationData
    );
  }

  getRoles() {
    this.lookupService.getRolesByApplicationName(CONSTANTS.application.b2b, BACKOFFICECONSTANTS.userType.agentUser).subscribe(data =>
      this.roleList = data
    );
  }

  getAgencies() {
    this.agencyList = this.activatedRoute.snapshot.data['agencies'];
  }

  getBranches(agencyId) {
    this.branchList.splice(0, this.branchList.length);
    this.agentForm.get('branch').setValue('');
    if (agencyId !== null) {
      this.lookupService.getAgencyBranches(agencyId).subscribe(data =>
        this.branchList = data
      ); }
  }

  saveAgent() {
    const agent = Object.assign({}, this.agentInfo, this.agentForm.value);
    agent.agencyId = agent.agency.id;
    agent.branchId = agent.branch.id;
    agent.userName = agent.agency.code  + '__' +   agent.userName;
    agent.updatedBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                          this.userProfileService.GetBasicUserInfo().LastName;

    if (this.operation === this.create) {
      agent.createdBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                            this.userProfileService.GetBasicUserInfo().LastName;

      this.userDataService.createAgentUser(agent as AgentInfoViewModel)
        .subscribe(data => {
          if (data.succeeded === true ) {
            this.snackBar.open('New agent is created successfully', '', { duration:  CONSTANTS.toasterTimeOut.duration,
              verticalPosition: 'top', panelClass: 'showSnackBar'});
            this.router.navigate(['/usermgmt/agentusers']);
          } else {
            // TODO: Need to check how we are doing error handling.
            this.snackBar.open('Error occourred while saving Agent. ' + data.errors[0].description ,
            '', { duration:  CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
          }
        });
      } else {
        agent.createdBy = this.agentInfo.createdBy;
        if (this.isInactiveDateRequired) {
          agent.inActivationType = CONSTANTS.inActiveType.permanent;
        } else {
          agent.inActivationType = '';
          agent.deActivationDate = '';
        }
        this.userDataService.updateAgentUser(this.agentId, agent as AgentInfoViewModel)
        .subscribe(data => {
          if (data.succeeded === true ) {
            this.snackBar.open('The agent is updated successfully', '', { duration: CONSTANTS.toasterTimeOut.duration,
              verticalPosition: 'top', panelClass: 'showSnackBar'});
            this.router.navigate(['/usermgmt/agentusers']);
          } else {
            // TODO: Need to check how we are doing error handling.
            this.snackBar.open('Error occourred while updating Agent. ' + data.errors[0].description ,
            '', { duration:  CONSTANTS.toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar'});
          }
        });
      }
  }

  cancel() {
    window.scrollTo(0, 0);
    this.router.navigate(['/usermgmt/agentusers']);
  }

  getAgentUser(agentId) {
    this.userDataService.getAgentUserById(agentId).subscribe(
      (data) => {
        this.agentInfo = data;
        this.isInactiveDateRequired = false;
        this.getBranches(data.agency.id);
        this.agentForm.get('email').setValue(data.email);
        this.agentForm.get('designationId').setValue(data.designationId);
        this.agentForm.get('contactNumber').setValue(data.contactNumber);
        this.agentForm.get('b2BRoleId').setValue(data.b2BRoleId);
        this.agentForm.get('activationDate').setValue(data.activationDate);
        if (data.deActivationDate !== null && data.deActivationDate !== undefined) {
          this.isInactiveDateRequired = true;
          this.agentForm.get('deActivationDate').setValue(data.deActivationDate);
        }
        this.agentForm.get('firstName').setValue(data.firstName);
        this.agentForm.get('lastName').setValue(data.lastName);
        const val =  data.userName.split('__');
        const userName = val[1];
        this.agentForm.get('userName').setValue(userName);
        this.agentForm.get('agency').setValue(data.agency);
        this.agentForm.get('branch').setValue(data.branch);
     }
    );
  }
}
