import { Component, OnInit } from '@angular/core';
import { MgApplicationViewModel } from '../../../viewmodel/usersviewmodel/mgapplicationlistviewmodel';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { BackofficeLookupService } from '../../../common/backoffice-shared/services/backoffice-lookup';
import { MgRoleViewModel } from '../../../viewmodel/usersviewmodel/mgrolelistviewmodel';
import { Observable } from 'rxjs/Observable';
import { BACKOFFICECONSTANTS } from '../../../common/constants';
import { FeatureViewModel } from '../../../viewmodel/usersviewmodel/rolespermissionviewmodel/featureviewmodel';
import { RolesPermissionDataService } from '../../../common/backoffice-shared/services/roles-permission-data.service';
import { CONSTANTS } from '../../../../common/constants';
import { RolePrivilegeInfoViewModel } from '../../../viewmodel/usersviewmodel/rolespermissionviewmodel/roleprivilegeinfoviewmodel';

@Component({
  selector: 'app-roles-permissions-info',
  templateUrl: './roles-permissions-info.component.html',
  styleUrls: ['./roles-permissions-info.component.css']
})
export class RolesPermissionInfoComponent implements OnInit {
  setNewPermissionForm: FormGroup;
  readOnly: boolean[];
  fullAccess: boolean[];
  operation: string;
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  applicationList: MgApplicationViewModel[];
  applicationRolesList: MgRoleViewModel[];
  featureList: FeatureViewModel[];
  selectedOption: string;
  rolePrivilegeList: RolePrivilegeInfoViewModel[];
  appId: string;
  roleId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backofficeLookupService: BackofficeLookupService,
    private rolesPermissionDataService: RolesPermissionDataService,
    private router: Router
  ) { }

  ngOnInit() {

    this.operation = this.activatedRoute.snapshot.params['operation'];

      this.setNewPermissionForm = new FormGroup({
          modules: new FormControl(),
          subModules: new FormControl(),
          readOnlys: new FormControl(),
          fullAccesss: new FormControl(),
          userApplication: new FormControl(),
          userRole: new FormControl(),
          featureDetails:  new FormArray([this.buildFeatureDetailForm()]),
      });

    this.selectedOption = this.activatedRoute.snapshot.data['applications'].find(x => x.name === BACKOFFICECONSTANTS.extranet).id;
    this.getApplications();
    this.getApplicationRoles(this.selectedOption);
    this.getFeaturesByAppId(this.selectedOption);

    if (this.operation.toLowerCase().trim() === this.edit) {
      this.appId = this.activatedRoute.snapshot.params['applicationId'];
      this.roleId = this.activatedRoute.snapshot.params['roleId'];
      this.getPermissionDetails(this.appId, this.roleId);
   }
  }


  /* ---------- Feature Details ---------------- */
  buildFeatureDetailForm(): FormGroup {
    let featureDetailsFormGroup: FormGroup;
    featureDetailsFormGroup = new FormGroup({
      featureId: new FormControl(),
      module: new FormControl(),
      subModule: new FormControl(''),
      readOnly: new FormControl(''),
      fullAccess: new FormControl('')
    });
    return featureDetailsFormGroup;
  }

  get featureDetails():  FormArray {
    return <FormArray>this.setNewPermissionForm.get('featureDetails');
   }

  getApplications() {
    this.applicationList = this.activatedRoute.snapshot.data['applications'];
  }

  getApplicationRoles(applicationId: string) {
    this.backofficeLookupService.getRolesByApplicationIdAndUserType(applicationId, null).subscribe
    (data => {
      this.applicationRolesList = data;
    });
  }

  getFeaturesByAppId(applicationId: string) {
    this.rolesPermissionDataService.getFeaturesByAppId(applicationId).subscribe
    (data => {
      this.featureList = data;
    });
  }

  savePermissions() {
    const rolePermission = this.setNewPermissionForm.value;
    console.log(rolePermission);
  }

  cancel() {
    window.scrollTo(0, 0);
    this.router.navigate(['/usermgmt/rolespermissions']);
  }

  getPermissionDetails(appId, roleId) {
    this.rolesPermissionDataService.getFeaturesByAppAndRoleId(appId, roleId).subscribe(
      (data) => {
        this.setNewPermissionForm.controls.userApplication.disable();
        this.setNewPermissionForm.controls.userRole.disable();
        this.setNewPermissionForm.get('userApplication').setValue(this.appId);
        this.setNewPermissionForm.get('userRole').setValue(this.roleId);
        this.featureList = data;
      }
    );
  }

}
