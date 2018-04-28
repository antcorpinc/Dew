import { Injectable } from '@angular/core';
import { AuthenticatedHttpService } from '../../../../common/shared/services/authenticated-http.service';
import { Observable } from 'rxjs/Observable';
import { PortalService } from '../../../../common/shared/services/portal.service';
import { CalenderViewModel } from '../../../viewmodel/allocationsviewmodel/calenderviewmodel';
import { ContractViewModel } from '../../../viewmodel/allocationsviewmodel/contractviewmodel';
import { RateCategoryInfoViewModel } from '../../../viewmodel/ratecategoryviewmodel/RateCategoryInfoViewModel';
import { RoomRatePlanViewModel } from '../../../viewmodel/allocationsviewmodel/roomrateplanviewmodel';
import { RestrictionsTypeViewModel } from '../../../viewmodel/allocationsviewmodel/restrictionstypeviewmodel';
import { HttpErrorResponse } from '@angular/common/http';
import { RestrictionViewModel } from '../../../viewmodel/allocationsviewmodel/restrictionviewmodel';
import { BlackOutViewModel } from '../../../viewmodel/allocationsviewmodel/blackoutviewmodel';

@Injectable()
export class AllocationsDataService {
  constructor(private authenticatedHttpService: AuthenticatedHttpService,
    private portalService: PortalService) { }
  allocationDateRangeDto: CalenderViewModel[];
  allocationDataDto: ContractViewModel;
  rateCategoryDataDto: RateCategoryInfoViewModel[];
  roomDataDto: RoomRatePlanViewModel[];
  restrictionsTypeDataDto: RestrictionsTypeViewModel[];

  getDateRange(dateArray): Observable<CalenderViewModel[]> {
    return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
      + 'api/Allocations/GetDates/', dateArray).map(data => {
        this.allocationDateRangeDto = data.result;
        return this.allocationDateRangeDto;
      });
  }

  getAllocationData(dateArray): Observable<ContractViewModel> {
    return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
      + 'api/Allocations/GetAllocationDetails/', dateArray).map(data => {
        if (data === null) {
          this.allocationDataDto = null;
        } else {
          this.allocationDataDto = data.result;
        }
        return this.allocationDataDto;
      });
  }

  getRateCategory(hotelId): Observable<RateCategoryInfoViewModel[]> {
    return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
      + 'api/RatesCategory/GetActiveRateCategory/', hotelId).map(data => {
        this.rateCategoryDataDto = data.result;
        return this.rateCategoryDataDto;
      });
  }

  getRoomsByRateCategory(rateCategoryId, hotelId): Observable<RoomRatePlanViewModel[]> {
    const roomRatePlanRequest = {
      id: hotelId,
      rateCategoryId: rateCategoryId
    };
    return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
      + 'api/Room/GetHotelRoomsByRateCategoryId/', roomRatePlanRequest).map(data => {
        this.roomDataDto = data.result;
        return this.roomDataDto;
      });
  }

  getRestrictionType(): Observable<RestrictionsTypeViewModel[]> {
    return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.ExtranetApi
      + 'api/Restrictions/GetRestrictionType/').map(data => {
        this.restrictionsTypeDataDto = data.result;
        return this.restrictionsTypeDataDto;
      });
  }

  addHotelRangeRestriction(restrictionData: RestrictionViewModel): Observable<any> {
    return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
      + 'api/Restrictions/CreateHotelRangeRestriction/', restrictionData)
      .do(data => console.log('All:'))
      .catch(this.handleError);
  }

  addHotelRangeBlackOut(blackOutData: BlackOutViewModel): Observable<any> {
    return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
      + 'api/Restrictions/CreateHotelRangeBlackOut/', blackOutData)
      .do(data => console.log('All:'))
      .catch(this.handleError);
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
    return Observable.throw(errorMessage);
  }
}
