import { Injectable } from '@angular/core';
import { AuthenticatedHttpService } from '../../../../../common/shared/services/authenticated-http.service';
import { PortalService } from '../../../../../common/shared/services/portal.service';
import { Observable } from 'rxjs/Observable';
import { FacilityGroupViewModel } from '../../../../viewmodel/facilitiesservicesviewmodel/facilitygroupviewmodel';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ContractFacilitiesDataServiceService {

  facilityGroupDto: FacilityGroupViewModel[];

  constructor(private authenticatedHttpService: AuthenticatedHttpService, private portalService: PortalService) { }

  getContractFacilitiesAndServices(contractId): Observable<FacilityGroupViewModel[]> {
    return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
    + 'api/Facilities/GetContractFacilityGroups/' , contractId).map( data => {
       this.facilityGroupDto = data.result;
      return this.facilityGroupDto;
    });
  }

  addContractFacilities(contractFacilities: any): Observable<number> {
    // console.log(JSON.stringify(facilities));
    return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
      + 'api/Facilities/CreateContractFacilityRelation/', contractFacilities)
      .do(data => console.log('All: '))
      .catch(this.handleError)  ;
  }

  isContractFacilityExits(contractId): Observable<any> {
    return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
      + 'api/Facilities/IsContractFacilityExits/', contractId);
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

}
