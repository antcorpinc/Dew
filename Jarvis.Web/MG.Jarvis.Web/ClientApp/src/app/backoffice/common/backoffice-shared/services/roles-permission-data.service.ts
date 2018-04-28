import { Injectable } from '@angular/core';
import { AuthenticatedHttpService } from '../../../../common/shared/services/authenticated-http.service';
import { PortalService } from '../../../../common/shared/services/portal.service';
import { ActivatedRoute } from '@angular/router';
import { FeatureViewModel } from '../../../viewmodel/usersviewmodel/rolespermissionviewmodel/FeatureViewModel';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RolesPermissionDataService {

  constructor(private authenticatedHttpService: AuthenticatedHttpService,
    private portalService: PortalService,
    private activatedRoute: ActivatedRoute ) { }

    featureListDto: FeatureViewModel[];

    getFeaturesByAppId(appId): Observable<FeatureViewModel[]> {
      return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi
      + 'api/FeatureTypeRolePrivilege/Get?appId=' + appId).map(data => {
            if (data === null) {
                this.featureListDto = [];
            } else {
                this.featureListDto = data;
            }
            return this.featureListDto;
        });
    }

    getFeaturesByAppAndRoleId(appId, roleId): Observable<FeatureViewModel[]> {
      return this.authenticatedHttpService.get(this.portalService.appSettings.BaseUrls.UserMgmtApi
      + 'api/FeatureTypeRolePrivilege/Get/' + appId + '/' + roleId).map(data => {
            if (data === null) {
                this.featureListDto = [];
            } else {
                this.featureListDto = data;
            }
            return this.featureListDto;
        });
    }
}
