import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContractTermsViewModel } from '../../../../viewmodel/templates/contract-terms/contracttermsviemodel';
import { AuthenticatedHttpService } from '../../../../../common/shared/services/authenticated-http.service';
import { PortalService } from '../../../../../common/shared/services/portal.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SaveContractTermsViewModel } from '../../../../viewmodel/templates/contract-terms/saveContractTermsViewModel';
import { ObjectState } from '../../../../../common/enums';

@Injectable()
export class ContractTermsDataService {

  constructor(private authenticatedHttpService: AuthenticatedHttpService,
    private portalService: PortalService) { }
    contractTermsGroupDto: any[];

    getContractTerms(contractId): Observable<any[]> {
      return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
      + 'api/Contracts/GetContractProperties/', contractId).map( data => {
         this.contractTermsGroupDto = data.result;
        return this.contractTermsGroupDto;
      });
    }
}
