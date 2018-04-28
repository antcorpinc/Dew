import { Injectable } from '@angular/core';
import { AuthenticatedHttpService } from '../../../../common/shared/services/authenticated-http.service';
import { PortalService } from '../../../../common/shared/services/portal.service';
import { Observable } from 'rxjs/Observable';
import { MgApplicationViewModel } from '../../../viewmodel/usersviewmodel/mgapplicationlistviewmodel';
import { MgRoleViewModel } from '../../../viewmodel/usersviewmodel/mgrolelistviewmodel';
import { DepartmentViewModel } from '../../../viewmodel/usersviewmodel/departmentviewmodel';
import { DesignationViewModel } from '../../../viewmodel/usersviewmodel/designationviewmodel';
import { AgencyViewModel } from '../../../viewmodel/usersviewmodel/agencyviewmodel';
import { BranchViewModel } from '../../../viewmodel/usersviewmodel/branchviewmodel';
import { HotelNameViewModel } from '../../../viewmodel/usersviewmodel/hotelnameviewmodel';


@Injectable()
export class BackofficeLookupService {
departmentsDto: DepartmentViewModel[];
applicationsDto: MgApplicationViewModel[];
rolesDto: MgRoleViewModel[];
hotelsDto: HotelNameViewModel[] = [];
designationDto: DesignationViewModel[];
branchDto: BranchViewModel[] = [];
agencyDto: AgencyViewModel[];


constructor(private authenticatedHttpService: AuthenticatedHttpService,
  private portalService: PortalService
 ) {

}

getApplications(): Observable<MgApplicationViewModel[]> {
  return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi + 'api/Application/Get').map( data => {
    this.applicationsDto = data;
    return this.applicationsDto;
});
}

getRolesByApplicationIdAndUserType(applicationId, userType): Observable<MgRoleViewModel[]> {
  return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi
    + 'api/Role/GetByApplicationId?applicationId=' + applicationId + '&UserType=' + userType).map( data => {
    this.rolesDto = data;
    return this.rolesDto;
});
}

getDepartments(): Observable<DepartmentViewModel[]> {
  return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi + 'api/Department/Get').map( data => {
     this.departmentsDto = data;
    return this.departmentsDto;
});
}

getRolesByApplicationName(applicationName: string, userType: number): Observable<MgRoleViewModel[]> {
  return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi
      + 'api/Role/GetByApplicationName?name=' + applicationName + '&userType=' + userType).map( data => {
     this.rolesDto = data;
    return this.rolesDto;
});
}

getHotelsByBrandIds(brandIds: number[]): Observable<HotelNameViewModel[]> {
  return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
    + 'api/HotelManagement/GetHotelsByBrandId/', brandIds).map( data => {
      if (data !== null) {
        this.hotelsDto = data.result;
      } else {
        this.hotelsDto = [];
      }

    return this.hotelsDto;
});
}

getHotelsByPartnerId(partnerIds: number[]): Observable<HotelNameViewModel[]> {
  return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
    + 'api/HotelManagement/GetHotelsByPartnerId', [partnerIds]).map( data => {
      if (data !== null) {
        this.hotelsDto = data.result;
      } else {
        this.hotelsDto = [];
      }

    return this.hotelsDto;
});
}

getAgencies(): Observable<AgencyViewModel[]> {
   return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.BackOfficeApi
  + 'api/Agency/Get').map(
 // return this.authenticatedHttpService.get('http://172.27.127.102:5000/api/Agency/Get').map(
    data => {
      this.agencyDto = [];
      if (data !== null) {
      data.result.forEach(element => {
        const agency: AgencyViewModel = { id : element.mgAgency.id, name: element.mgAgency.name, code: element.mgAgency.code };
        this.agencyDto.push(agency);
      });
    }
    return this.agencyDto;
});
}

getAgencyBranches(id: number): Observable<BranchViewModel[]> {
    return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.BackOfficeApi
     + 'api/Branch/GetBranchByAgancyId?agencyId=' + id).map(
     // return this.authenticatedHttpService.get('http://172.27.127.102:5000/api/Branch/GetBranchByAgancyId?agencyId=' + id).map(
    data => {
        this.branchDto = [];
        if (data !== null) {
        data.result.forEach(element => {
          const branch: BranchViewModel = { id : element.mgBranch.id, name: element.mgBranch.name };
          this.branchDto.push(branch);
        });
      }
    return this.branchDto;
  });
}

getIndividualHotels(): Observable<HotelNameViewModel[]> {
  return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.ExtranetApi
    + 'api/HotelManagement/GetIndividualHotels').map(
     data => {
        this.hotelsDto = [];
        this.hotelsDto = data.result;
      return this.hotelsDto;
});
}

getDesignationByType(userType: string): Observable<DesignationViewModel[]> {
  return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
  + 'api/Miscellaneous/GetDesignation/', JSON.stringify(userType)).map( data => {
    this.designationDto = data.result;
    return this.designationDto;
  });
}

}
