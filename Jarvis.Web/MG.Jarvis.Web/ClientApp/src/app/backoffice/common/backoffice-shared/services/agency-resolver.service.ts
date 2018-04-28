import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BackofficeLookupService } from './backoffice-lookup';
import { AgencyViewModel } from '../../../viewmodel/usersviewmodel/agencyviewmodel';

@Injectable()
export class AgencyResolverService {
  constructor( private backofficeLookupService: BackofficeLookupService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<AgencyViewModel[]> {
      return this.backofficeLookupService.getAgencies();
    }
}
