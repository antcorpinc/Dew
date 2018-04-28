import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router/src/interfaces';
import { LookupService } from '../../../../common/shared/services/lookup.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HotelChainViewModel } from '../../../../common/viewmodels/hotelchainviewmodel';


@Injectable()
export class HotelChainResolverService implements Resolve<HotelChainViewModel[]> {
  constructor(private lookupService: LookupService) { }
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<HotelChainViewModel[]> {
    return this.lookupService.getHotelChains();
  }

}
