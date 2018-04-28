import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TaxesApplicabilityViewModel } from '../../../viewmodel/hoteldetailsviewmodel/taxesapplicabilityviewmodel';
import { LookupService } from '../../../../common/shared/services/lookup.service';

@Injectable()
export class TaxapplicabilityResolverService implements Resolve<TaxesApplicabilityViewModel[]> {

  constructor(private lookupService: LookupService) {
  }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<TaxesApplicabilityViewModel[]> {
    return this.lookupService.getTaxApplicability();
  }

}
