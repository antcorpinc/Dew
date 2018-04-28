import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FacilityGroupViewModel } from '../../../../viewmodel/facilitiesservicesviewmodel/facilitygroupviewmodel';
import { ContractFacilitiesDataServiceService } from './contract-facilities-data-service.service';

@Injectable()
export class ContractFacilitiesDataResolverService implements Resolve<FacilityGroupViewModel[]> {

  constructor(private contractFacilitiesDataServiceService: ContractFacilitiesDataServiceService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<FacilityGroupViewModel[]> {

    const contractId = route.parent.params['id'];
     // const contractId = 10;
    // const contractId = 13;
    return this.contractFacilitiesDataServiceService.getContractFacilitiesAndServices(contractId);
  }

}
