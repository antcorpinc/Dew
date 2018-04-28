import { RolesPermissionsListComponent } from './roles-permission/roles-permissions-list/roles-permissions-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MgUserListComponent } from './mg-user/mg-user-list/mg-user-list.component';
import { MgUserInfoComponent } from './mg-user/mg-user-info/mg-user-info.component';
import { NgModule } from '@angular/core';
import { DepartmentResolverService } from '../common/backoffice-shared/services/department-resolver.service';
import { ApplicationResolverService } from '../common/backoffice-shared/services/application-resolver.service';
import { AgentUserListComponent } from './agent-user/agent-user-list/agent-user-list.component';
import { AgentUserInfoComponent } from './agent-user/agent-user-info/agent-user-info.component';
import { HotelUserListComponent } from './hotel-user/hotel-user-list/hotel-user-list.component';
import { HotelUserInfoComponent } from './hotel-user/hotel-user-info/hotel-user-info.component';
import { RoleResolverService } from '../common/backoffice-shared/services/role-resolver.service';
import { DesignationResolverService } from '../common/backoffice-shared/services/designation-resolver.service';
import { IndividualHotelUserInfoComponent } from './hotel-user/individual-hotel-user-info/individual-hotel-user-info.component';
import { HotelTypeComponent } from './hotel-user/hotel-type/hotel-type.component';
import { SupplierUserInfoComponent } from './hotel-user/supplier-user-info/supplier-user-info.component';
import { HotelChainResolverService } from '../common/backoffice-shared/services/hotel-chain-resolver.service';
import { HotelResolverService } from '../common/backoffice-shared/services/hotel-resolver.service';
import { AgencyResolverService } from '../common/backoffice-shared/services/agency-resolver.service';
import { CONSTANTS } from '../../common/constants';
import { RolesPermissionInfoComponent } from './roles-permission/roles-permissions-info/roles-permissions-info.component';
import { HotelPartnerResolverService } from '../common/backoffice-shared/services/hotel-partner-resolver.service';
// import { ApplicationFeatureResolverService } from '../common/backoffice-shared/services/application-feature-resolver.service';


export const userRoutes: Routes =
[
   // { path: '', redirectTo: 'mgusers', pathMatch: 'full' },
    { path: 'mgusers', component: MgUserListComponent },
    { path: 'mguser/:id/:operation',
    component: MgUserInfoComponent,
    resolve: {
      departments: DepartmentResolverService,
      applications: ApplicationResolverService
    }
    },
    { path: 'agentusers', component: AgentUserListComponent },
    { path: 'agentusers/:id/:operation',
      component: AgentUserInfoComponent,
      resolve: {
        agencies: AgencyResolverService,
      }
    },

    { path: 'hoteluserslist', component: HotelUserListComponent },
    {
        path: 'hotelusers', component: HotelTypeComponent,

        children: [
            { path: '', redirectTo: 'hoteldetails', pathMatch: 'full' },
            { path: 'hoteluserinfo/:id/:operation', component: HotelUserInfoComponent,
             resolve: {
              hotelChains: HotelChainResolverService
             }
           },
            { path: 'individual/:id/:operation',
              component : IndividualHotelUserInfoComponent,
                  resolve: {
                      roles: RoleResolverService,
                      designations: DesignationResolverService,
                      hotels: HotelResolverService
                          },
                      data: {
                        appName: CONSTANTS.application.extranet,
                        type: CONSTANTS.userType.hoteluser
                            }
            },

            { path: 'supplieruser/:id/:operation',
              component : SupplierUserInfoComponent,
                  resolve: {
                      roles: RoleResolverService,
                      designations: DesignationResolverService,
                      suppliers: HotelPartnerResolverService
                          },
                          data: {
                            appName: CONSTANTS.application.extranet,
                            type: CONSTANTS.userType.hoteluser
                                }
            }
        ]

    },
    { path : 'rolespermissions', component: RolesPermissionsListComponent },
    { path:  'rolespermissions/:roleId/:applicationId/:operation',
      component: RolesPermissionInfoComponent,
      resolve: {
          applications: ApplicationResolverService,
         // applicationFeatures: ApplicationFeatureResolverService
    }
  }
];


@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
  })
  export class UserMgmtRoutingModule {}

  export const routedUserComponents = [
    MgUserListComponent,
    MgUserInfoComponent,
    AgentUserListComponent,
    AgentUserInfoComponent,
    HotelUserListComponent,
      HotelUserInfoComponent,
      RolesPermissionInfoComponent
  ];
