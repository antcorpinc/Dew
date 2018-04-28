import { Injectable } from '@angular/core';
import { AuthenticatedHttpService } from '../../../../common/shared/services/authenticated-http.service';
import { MgUsersListViewModel } from '../../../viewmodel/usersviewmodel/mguserlistviewmodel';
import { PortalService } from '../../../../common/shared/services/portal.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MgUserViewModel } from '../../../viewmodel/usersviewmodel/mguserviewmodel';
import { AgentInfoViewModel } from '../../../viewmodel/usersviewmodel/agentinfoviewmodel';
import { HotelUserListViewModel } from '../../../viewmodel/usersviewmodel/hoteluserlistviewmodel';
import { Agentuserlistviewmodel } from '../../../viewmodel/usersviewmodel/agentuserlistviewmodel';
import { HotelUserViewModel } from '../../../viewmodel/usersviewmodel/hoteluserinfoviewmodel';
import { ApplicationRoleIdViewModel } from '../../../viewmodel/usersviewmodel/applicationroleidviewmodel';
import { HotelViewModel } from '../../../viewmodel/usersviewmodel/hotelviewmodel';
import { AgencyViewModel } from '../../../viewmodel/usersviewmodel/agencyviewmodel';
import { BranchViewModel } from '../../../viewmodel/usersviewmodel/branchviewmodel';
import { RolesPermissionsListViewModel } from '../../../viewmodel/usersviewmodel/rolespermissionslistviewmodel';

@Injectable()
export class UserDataService {

  constructor(private authenticatedHttpService: AuthenticatedHttpService,
    private portalService: PortalService,
    private activatedRoute: ActivatedRoute ) { }

    mgUserListDto: MgUsersListViewModel[];
    mgUserDto: MgUserViewModel;
    hotelUserListDto: HotelUserListViewModel[];
    hotelUserDto: HotelUserViewModel;
    agentUserListDto: Agentuserlistviewmodel[];
    agentDto: AgentInfoViewModel;
    appRoleListDto: RolesPermissionsListViewModel[];

    /* ---------- For Mg User -------------- */

    getMgUsers(): Observable<MgUsersListViewModel[]> {
      return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi
      + 'api/MGUser/Get').map(data => {
            if (data === null) {
                this.mgUserListDto = [];
            } else {
                this.mgUserListDto = data;
            }
            return this.mgUserListDto;
        });
    }

    createMGUser(mgUserViewModel: MgUserViewModel): Observable<any> {
      return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.UserMgmtApi
        + 'api/MGUser/Create/', mgUserViewModel);
    }

    updateMGUser(id: string, mgUserViewModel: MgUserViewModel): Observable<any> {
      return this.authenticatedHttpService.put(this.portalService.appSettings.BaseUrls.UserMgmtApi
        + 'api/MGUser/Update/' + id + '/', mgUserViewModel);
    }

    deleteMGUser(userId: string): Observable<boolean> {
      return this.authenticatedHttpService.put(this.portalService.appSettings.BaseUrls.UserMgmtApi
          + 'api/MGUser/Delete/', JSON.stringify(userId));
    }

    getMGUserById(userId: string): Observable<MgUserViewModel> {
      return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi
        + 'api/MGUser/GetById?userId=' + userId).map(data => {
          this.mgUserDto = new MgUserViewModel();
          this.mgUserDto.employeeId = data.employeeId;
          this.mgUserDto.id = data.id;
          this.mgUserDto.firstName = data.firstName;
          this.mgUserDto.lastName = data.lastName;
          this.mgUserDto.userName = data.userName;
          this.mgUserDto.email = data.email;
          this.mgUserDto.profilePictureUri = data.profilePictureUri;
          this.mgUserDto.activationDate = data.activationDate;
          this.mgUserDto.inActivationType = data.inActivationType;
          this.mgUserDto.temporaryInActivationDate = data.temporaryInActivationDate;
          this.mgUserDto.temporaryActivationDate = data.temporaryActivationDate;
          this.mgUserDto.deActivationDate = data.deActivationDate;
          this.mgUserDto.createdBy = data.createdBy;
          data.departments.forEach(element => {
            if (this.mgUserDto.departments == null || this.mgUserDto.departments === undefined ) {
              this.mgUserDto.departments = new Array<string>();
            }
               this.mgUserDto.departments.push(element.id);
          });
          data.userApplicationRole.forEach(element => {
            if (this.mgUserDto.userApplicationRole == null || this.mgUserDto.userApplicationRole === undefined ) {
              this.mgUserDto.userApplicationRole = new Array<ApplicationRoleIdViewModel>();
            }
            const appRoleId: ApplicationRoleIdViewModel = new ApplicationRoleIdViewModel();
            appRoleId.applicationId = element.applicationId;
            appRoleId.roleId = element.roleId;
            this.mgUserDto.userApplicationRole.push(appRoleId);
          });

          return this.mgUserDto;
        });
    }

    /* ---------- Mg User Ends -------------- */

    /* ---------- For Hotel User -------------- */

    getHotelUsers(): Observable<HotelUserListViewModel[]> {
      return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi
        + 'api/HotelUser/Get').map((response: any) => {
            if (response === null) {
                this.hotelUserListDto = [];
            } else {
                this.hotelUserListDto = response;
            }
            return this.hotelUserListDto;
        });
    }

  createHotelUser(hotelUserInfo: HotelUserViewModel ): Observable<any> {
    return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.UserMgmtApi
      + 'api/HotelUser/Create/', hotelUserInfo);
  }

    deleteHotelUser(userId: string): Observable<boolean> {
      return this.authenticatedHttpService.put(this.portalService.appSettings.BaseUrls.UserMgmtApi
          + 'api/HotelUser/Delete/', JSON.stringify(userId));
    }

    getHotelUserById(userId: string): Observable<HotelUserViewModel> {
      return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi
        + 'api/HotelUser/GetById?userId=' + userId).map(data => {
          this.hotelUserDto = data;
          this.hotelUserDto.extranetRoleId =  data.userApplicationRole !== null ?
          data.userApplicationRole[0].roleId : 0;
           data.hotels.forEach(element => {
             if (this.hotelUserDto.hotelId == null || this.hotelUserDto.hotelId === undefined ) {
               this.hotelUserDto.hotelId = new Array<number>();
               this.hotelUserDto.chainId = 0;
               this.hotelUserDto.brandId = new Array<number>();
             }
                this.hotelUserDto.hotelId.push(element.id);
                this.hotelUserDto.chainId = element.chainId;
                this.hotelUserDto.brandId.push(element.brandId);
           });
          return this.hotelUserDto;
        });
    }

    updateHotelUser(id: string, hotelUserViewModel: HotelUserViewModel): Observable<any> {
      return this.authenticatedHttpService.put(this.portalService.appSettings.BaseUrls.UserMgmtApi
        + 'api/HotelUser/Update/' + id + '/', hotelUserViewModel);
    }

    /* ---------- Hotel User Ends -------------- */

    /* ---------- For Agent User -------------- */

    getAgentUsers(): Observable<Agentuserlistviewmodel[]> {
      return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi
      + 'api/Agent/Get').map(data => {
            if (data === null) {
                this.agentUserListDto = [];
            } else {
                this.agentUserListDto = data;
            }
            return this.agentUserListDto;
        });
    }

    createAgentUser(agentInfo: AgentInfoViewModel): Observable<any> {
      return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.UserMgmtApi
        + 'api/agent/Create/', JSON.stringify(agentInfo));
    }

    updateAgentUser(agentId: string, agentInfo: AgentInfoViewModel): Observable<any> {
      return this.authenticatedHttpService.put(this.portalService.appSettings.BaseUrls.UserMgmtApi
        + 'api/Agent/Update/' + agentId, JSON.stringify(agentInfo));
    }

    deleteAgentUser(agentId: string): Observable<boolean> {
      return this.authenticatedHttpService.put(this.portalService.appSettings.BaseUrls.UserMgmtApi
          + 'api/Agent/Delete/', JSON.stringify(agentId));
    }

    getAgentUserById(agentId: string): Observable<AgentInfoViewModel> {
      return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi
        + 'api/Agent/GetById?userId=' + agentId).map(data => {
          this.agentDto = new AgentInfoViewModel();
          this.agentDto.b2BRoleId = data.userApplicationRole[0].roleId;
          this.agentDto.agency =  { id: data.agencyId, name: data.agencyName, code: data.agencyCode };
          this.agentDto.branch =  { id: data.branchId, name: data.branchName };
          this.agentDto.profilePictureUri = data.profilePictureUri;
          this.agentDto.firstName = data.firstName;
          this.agentDto.lastName = data.lastName;
          this.agentDto.userName = data.userName;
          this.agentDto.designationId = data.designationId;
          this.agentDto.email = data.email;
          this.agentDto.contactNumber = data.contactNumber;
          this.agentDto.activationDate = data.activationDate;
          this.agentDto.deActivationDate = data.deActivationDate;
          this.agentDto.inActivationType = data.inActivationType;
          this.agentDto.isActive = data.isActive;
          this.agentDto.createdBy = data.createdBy;
          return this.agentDto;
        });
    }

    /* ---------- Agent User Ends -------------- */

    /* ---------- For Roles and Permissions -------------- */
  
    getAppRoles(): Observable<RolesPermissionsListViewModel[]> {
      return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi
        + 'api/FeatureTypeRolePrivilege/GetAll').map(data => {
            if (data === null) {
                this.appRoleListDto = [];
            } else {
                this.appRoleListDto = data;
            }
            return this.appRoleListDto;
        });
    }

     /* ----------  Roles and Permissions Ends-------------- */






}
