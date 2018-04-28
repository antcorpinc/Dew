webpackJsonp(["user-mgmt.module"],{

/***/ "../../../../../src/app/backoffice/common/backoffice-shared/services/agency-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgencyResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgencyResolverService = (function () {
    function AgencyResolverService(backofficeLookupService) {
        this.backofficeLookupService = backofficeLookupService;
    }
    AgencyResolverService.prototype.resolve = function (route, state) {
        return this.backofficeLookupService.getAgencies();
    };
    AgencyResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__["a" /* BackofficeLookupService */]])
    ], AgencyResolverService);
    return AgencyResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/common/backoffice-shared/services/application-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationResolverService = (function () {
    function ApplicationResolverService(backofficeLookupService) {
        this.backofficeLookupService = backofficeLookupService;
    }
    ApplicationResolverService.prototype.resolve = function (route, state) {
        return this.backofficeLookupService.getApplications();
    };
    ApplicationResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__["a" /* BackofficeLookupService */]])
    ], ApplicationResolverService);
    return ApplicationResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/common/backoffice-shared/services/department-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartmentResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepartmentResolverService = (function () {
    function DepartmentResolverService(backOfficeLookupService) {
        this.backOfficeLookupService = backOfficeLookupService;
    }
    DepartmentResolverService.prototype.resolve = function (route, state) {
        return this.backOfficeLookupService.getDepartments();
    };
    DepartmentResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__["a" /* BackofficeLookupService */]])
    ], DepartmentResolverService);
    return DepartmentResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/common/backoffice-shared/services/designation-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignationResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesignationResolverService = (function () {
    function DesignationResolverService(backofficeLookupService) {
        this.backofficeLookupService = backofficeLookupService;
    }
    DesignationResolverService.prototype.resolve = function (route, state) {
        return this.backofficeLookupService.getDesignationByType(route.data['type']);
    };
    DesignationResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__["a" /* BackofficeLookupService */]])
    ], DesignationResolverService);
    return DesignationResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/common/backoffice-shared/services/hotel-chain-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelChainResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_shared_services_lookup_service__ = __webpack_require__("../../../../../src/app/common/shared/services/lookup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelChainResolverService = (function () {
    function HotelChainResolverService(lookupService) {
        this.lookupService = lookupService;
    }
    HotelChainResolverService.prototype.resolve = function (route, state) {
        return this.lookupService.getHotelChains();
    };
    HotelChainResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_shared_services_lookup_service__["a" /* LookupService */]])
    ], HotelChainResolverService);
    return HotelChainResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/common/backoffice-shared/services/hotel-partner-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelPartnerResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_shared_services_lookup_service__ = __webpack_require__("../../../../../src/app/common/shared/services/lookup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelPartnerResolverService = (function () {
    function HotelPartnerResolverService(lookupService) {
        this.lookupService = lookupService;
    }
    HotelPartnerResolverService.prototype.resolve = function (route, state) {
        return this.lookupService.getHotelPartners();
    };
    HotelPartnerResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_shared_services_lookup_service__["a" /* LookupService */]])
    ], HotelPartnerResolverService);
    return HotelPartnerResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/common/backoffice-shared/services/hotel-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelResolverService = (function () {
    function HotelResolverService(backOfficeLookUpService) {
        this.backOfficeLookUpService = backOfficeLookUpService;
    }
    HotelResolverService.prototype.resolve = function (route, state) {
        return this.backOfficeLookUpService.getIndividualHotels();
    };
    HotelResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__["a" /* BackofficeLookupService */]])
    ], HotelResolverService);
    return HotelResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/common/backoffice-shared/services/role-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backoffice_common_constants__ = __webpack_require__("../../../../../src/app/backoffice/common/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleResolverService = (function () {
    function RoleResolverService(backofficeLookupService) {
        this.backofficeLookupService = backofficeLookupService;
    }
    RoleResolverService.prototype.resolve = function (route, state) {
        return this.backofficeLookupService.getRolesByApplicationName(route.data['appName'], __WEBPACK_IMPORTED_MODULE_2__backoffice_common_constants__["a" /* BACKOFFICECONSTANTS */].userType.hotelUser);
    };
    RoleResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__backoffice_lookup__["a" /* BackofficeLookupService */]])
    ], RoleResolverService);
    return RoleResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/common/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKOFFICECONSTANTS; });
var BACKOFFICECONSTANTS = {
    userType: {
        mgUser: 1,
        hotelUser: 2,
        agentUser: 3
    },
    hotelUserType: {
        individual: 'I',
        chain: 'C',
        supplier: 'S'
    },
    extranet: 'Extranet'
};


/***/ }),

/***/ "../../../../../src/app/backoffice/common/pipes/orderbypipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Orderbypipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Orderbypipe = (function () {
    function Orderbypipe() {
    }
    Orderbypipe.prototype.transform = function (records, args) {
        return records.sort(function (a, b) {
            if (args.property === 'hotelName' || args.property === 'name' || args.property === 'title') {
                if (a[args.property].toLowerCase() < b[args.property].toLowerCase()) {
                    return -1 * args.direction;
                }
                else if (a[args.property].toLowerCase() > b[args.property].toLowerCase()) {
                    return 1 * args.direction;
                }
                else {
                    return 0;
                }
            }
        });
    };
    Orderbypipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderBy' })
    ], Orderbypipe);
    return Orderbypipe;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-info/agent-user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".controlButtons {\r\n  padding-top: 30px !important;\r\n  padding-bottom: 28px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-info/agent-user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-4\">\r\n  <div class=\"customBreadcrumb mb-4\">\r\n    <span>Agents </span>\r\n    <span>{{ (this.operation === 'create') ? \"&gt; Create New Agent\" : \"&gt; Edit Agent\" }}</span>\r\n  </div>\r\n  <h1 class=\"mainHeading mb-2 customBreadcrumb borderBottomNone\">{{ (this.operation === 'create') ? \"Create New Agent\" : \"Edit Agent\" }}<span class=\"mandatoryInfo\">Indicates Mandatory Fields</span></h1>\r\n\r\n  <form [formGroup]=\"agentForm\" (ngSubmit)=\"saveAgent()\">\r\n\r\n    <div class=\"row customeRow\">\r\n      <div class=\"form-group col-md-4 col-lg-3 mb-0 mt-4\">\r\n        <mat-form-field>\r\n          <input type=\"text\" matInput placeholder=\"Search by Agency Name/Code\" formControlName=\"agency\" [matAutocomplete]=\"auto\">\r\n          <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n            <mat-option *ngFor=\"let agency of filteredOptions | async | orderBy: {property:'name', direction: direction} \" [value]=\"agency\" (onSelectionChange)=\"getBranches(agency.id)\">\r\n              {{ agency.name }} - {{agency.code}}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group col-md-4 col-lg-3 mb-0 mt-4\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Search by Branch Name\" name=\"branch\" formControlName=\"branch\" [matAutocomplete]=\"autoBranch\">\r\n          <mat-autocomplete #autoBranch=\"matAutocomplete\" [displayWith]=\"displayBranchFn\">\r\n            <mat-option *ngFor=\"let branch of filteredBranchOptions | async\" [value]=\"branch\">\r\n              {{ branch.name }}\r\n            </mat-option>\r\n          </mat-autocomplete>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\">\r\n      <div class=\"col-md-2 col-lg-1\">\r\n        <div class=\"userImageSection\">\r\n          <mat-icon class=\"userImage\">account_circle</mat-icon>\r\n          <div class=\"image-upload\">\r\n            <label for=\"file-input\">\r\n              <img src=\"assets/uploadPhoto.png\" title=\"Upload Image\" />\r\n            </label>\r\n            <input id=\"file-input\" type=\"file\" />\r\n          </div>\r\n          <button class=\"deletePhoto\" mat-raised-button title=\"Delete Image\">\r\n            <i class=\"fa fa-times-thin\"></i>\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\">\r\n      <div class=\"pt-1 form-group col-md-4 col-lg-3\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"First Name\" id=\"firstName\" formControlName=\"firstName\" required />\r\n          </mat-form-field>\r\n        </div>\r\n      <div class=\"pt-1 form-group col-md-4 col-lg-3\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Last Name\" id=\"lastName\" formControlName=\"lastName\" required />\r\n          </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group pt-1 col-md-4 col-lg-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"User Name\" id=\"userName\" formControlName=\"userName\" pattern=\"^(?!\\s*$)(?!.*__.*)[-a-zA-Z0-9_.]*$\" required />\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\">\r\n      <div class=\"form-group col-md-4 col-lg-3\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Designation\" formControlName=\"designationId\" required>\r\n              <mat-option [value]=\"null\">Select</mat-option>\r\n              <mat-option *ngFor=\"let designation of designationList\" [value]=\"designation.designationId\">{{designation.title}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n       <div class=\"form-group col-md-4 col-lg-3\">\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input matInput placeholder=\"Email ID\" id=\"emailID\" formControlName=\"email\" pattern=\"\\w+@\\w+\\.\\w+(,\\s*\\w+@\\w+\\.\\w+)*\" required />\r\n          </mat-form-field>\r\n        </div>\r\n      <div class=\"form-group col-md-4 col-lg-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Contact Number\" id=\"contactNumber\" formControlName=\"contactNumber\" required\r\n                 pattern=\"[0-9# '+-]*\" type=\"tel\" maxlength=\"15\" />\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\">\r\n      <div class=\"form-group col-md-4 col-lg-3 mb-0\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Role\" formControlName=\"b2BRoleId\" required>\r\n            <mat-option [value]=\"null\">Select</mat-option>\r\n            <mat-option *ngFor=\"let role of roleList\" [value]=\"role.id\">{{role.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\">\r\n      <div class=\"col-md-4 col-lg-3 mb-0 mt-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [matDatepicker]=\"activationDate\" placeholder=\"Activation Date\" formControlName=\"activationDate\" [min]=\"todaysDate\"\r\n                 [required]=\"!isEdit\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"activationDate\">\r\n            <mat-icon matDatepickerToggleIcon>\r\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n            </mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #activationDate></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\" *ngIf=\"operation == 'edit'\">\r\n      <div class=\"col-md-4 col-lg-3 mt-3\">\r\n        <div class=\"form-check form-check-inline\">\r\n          <mat-checkbox formControlName=\"inActivateUser\" [checked]= \"isInactiveDateRequired\" (change)= \"toggleDeactivationDate($event)\">Inactivate User</mat-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\" *ngIf=\"isInactiveDateRequired == true\">\r\n      <div class=\"col-md-4 col-lg-3 mt-4 pt-2 mb-0\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [matDatepicker]=\"deActivationDate\" placeholder=\"Inactivation Date\" formControlName=\"deActivationDate\" [min]=\"todaysDate\"\r\n                   [required] = \"isInactiveDateRequired\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"deActivationDate\">\r\n            <mat-icon matDatepickerToggleIcon>\r\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n            </mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #deActivationDate></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 controlButtons\">\r\n        <button title=\"Save\" type=\"submit\" class=\"genericButton activeButton mat-primary mr-2\" [disabled]=\"!agentForm.valid\" mat-raised-button>Save</button>\r\n        <button title=\"Cancel\" type=\"submit\" class=\"genericButton defaultButton\" mat-raised-button (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-info/agent-user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePickerDateAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentUserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_backoffice_shared_services_user_data_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_shared_services_user_profile_service__ = __webpack_require__("../../../../../src/app/common/shared/services/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_constants__ = __webpack_require__("../../../../../src/app/backoffice/common/constants.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var DatePickerDateAdapter = (function (_super) {
    __extends(DatePickerDateAdapter, _super);
    function DatePickerDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerDateAdapter.prototype.format = function (date, displayFormat) {
        date.setMinutes((date.getTimezoneOffset() * -1));
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.toLocaleString('en-us', { month: 'long' });
            var year = date.getFullYear();
            return this._to2digit(day) + '-' + month.substring(0, 3) + '-' + year % 100;
        }
        else {
            return date.toDateString();
        }
    };
    DatePickerDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return DatePickerDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_8__angular_material__["P" /* NativeDateAdapter */]));

var AgentUserInfoComponent = (function () {
    function AgentUserInfoComponent(router, activatedRoute, lookupService, userDataService, snackBar, cd, userProfileService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.lookupService = lookupService;
        this.userDataService = userDataService;
        this.snackBar = snackBar;
        this.cd = cd;
        this.userProfileService = userProfileService;
        this.edit = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.create;
        this.agentInfo = {};
        this.agencyList = [];
        this.branchList = [];
        this.todaysDate = new Date();
        this.isEdit = false;
        this.direction = 1;
    }
    AgentUserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operation = this.activatedRoute.snapshot.params['operation'];
        this.agentId = this.activatedRoute.snapshot.params['id'];
        this.agentForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            agency: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            branch: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            userName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            designationId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            contactNumber: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            b2BRoleId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            activationDate: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            inActivateUser: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            deActivationDate: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
        });
        if (this.operation.toLowerCase().trim() === this.edit) {
            this.isEdit = true;
            this.agentForm.controls.activationDate.disable();
            this.getAgentUser(this.agentId);
        }
        this.getDesignations();
        this.getRoles();
        this.getAgencies();
        this.filteredOptions = this.agentForm.controls.agency.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val.toString()); }));
        this.filteredBranchOptions = this.agentForm.controls.branch.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filterBranch(val.toString()); }));
    };
    AgentUserInfoComponent.prototype.filter = function (val) {
        if (this.agencyList.length > 0) {
            return this.agencyList.filter(function (option) {
                return option.name.toString().toLowerCase().indexOf(val.toString().toLowerCase()) === 0;
            });
        }
    };
    AgentUserInfoComponent.prototype.filterBranch = function (val) {
        if (this.branchList.length > 0) {
            return this.branchList.filter(function (option) {
                return option.name.toString().toLowerCase().indexOf(val.toString().toLowerCase()) === 0;
            });
        }
    };
    AgentUserInfoComponent.prototype.displayFn = function (val) {
        return val ? val.name + ' - ' + val.code : val;
    };
    AgentUserInfoComponent.prototype.displayBranchFn = function (val) {
        return val ? val.name : val;
    };
    AgentUserInfoComponent.prototype.toggleDeactivationDate = function (event) {
        this.isInactiveDateRequired = event.checked;
        if (event.checked) {
            this.agentForm.controls.deActivationDate.enable();
        }
        else {
            this.agentForm.controls.deActivationDate.disable();
        }
        this.cd.detectChanges();
    };
    AgentUserInfoComponent.prototype.getDesignations = function () {
        var _this = this;
        this.lookupService.getDesignationByType(__WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].userType.agentuser).subscribe(function (designationData) {
            return _this.designationList = designationData;
        });
    };
    AgentUserInfoComponent.prototype.getRoles = function () {
        var _this = this;
        this.lookupService.getRolesByApplicationName(__WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].application.b2b, __WEBPACK_IMPORTED_MODULE_10__common_constants__["a" /* BACKOFFICECONSTANTS */].userType.agentUser).subscribe(function (data) {
            return _this.roleList = data;
        });
    };
    AgentUserInfoComponent.prototype.getAgencies = function () {
        this.agencyList = this.activatedRoute.snapshot.data['agencies'];
    };
    AgentUserInfoComponent.prototype.getBranches = function (agencyId) {
        var _this = this;
        this.branchList.splice(0, this.branchList.length);
        this.agentForm.get('branch').setValue('');
        if (agencyId !== null) {
            this.lookupService.getAgencyBranches(agencyId).subscribe(function (data) {
                return _this.branchList = data;
            });
        }
    };
    AgentUserInfoComponent.prototype.saveAgent = function () {
        var _this = this;
        var agent = Object.assign({}, this.agentInfo, this.agentForm.value);
        agent.agencyId = agent.agency.id;
        agent.branchId = agent.branch.id;
        agent.userName = agent.agency.code + '__' + agent.userName;
        agent.updatedBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
            this.userProfileService.GetBasicUserInfo().LastName;
        if (this.operation === this.create) {
            agent.createdBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                this.userProfileService.GetBasicUserInfo().LastName;
            this.userDataService.createAgentUser(agent)
                .subscribe(function (data) {
                if (data.succeeded === true) {
                    _this.snackBar.open('New agent is created successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration,
                        verticalPosition: 'top', panelClass: 'showSnackBar' });
                    _this.router.navigate(['/usermgmt/agentusers']);
                }
                else {
                    // TODO: Need to check how we are doing error handling.
                    _this.snackBar.open('Error occourred while saving Agent. ' + data.errors[0].description, '', { duration: __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                }
            });
        }
        else {
            agent.createdBy = this.agentInfo.createdBy;
            if (this.isInactiveDateRequired) {
                agent.inActivationType = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].inActiveType.permanent;
            }
            else {
                agent.inActivationType = '';
                agent.deActivationDate = '';
            }
            this.userDataService.updateAgentUser(this.agentId, agent)
                .subscribe(function (data) {
                if (data.succeeded === true) {
                    _this.snackBar.open('The agent is updated successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration,
                        verticalPosition: 'top', panelClass: 'showSnackBar' });
                    _this.router.navigate(['/usermgmt/agentusers']);
                }
                else {
                    // TODO: Need to check how we are doing error handling.
                    _this.snackBar.open('Error occourred while updating Agent. ' + data.errors[0].description, '', { duration: __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                }
            });
        }
    };
    AgentUserInfoComponent.prototype.cancel = function () {
        window.scrollTo(0, 0);
        this.router.navigate(['/usermgmt/agentusers']);
    };
    AgentUserInfoComponent.prototype.getAgentUser = function (agentId) {
        var _this = this;
        this.userDataService.getAgentUserById(agentId).subscribe(function (data) {
            _this.agentInfo = data;
            _this.isInactiveDateRequired = false;
            _this.getBranches(data.agency.id);
            _this.agentForm.get('email').setValue(data.email);
            _this.agentForm.get('designationId').setValue(data.designationId);
            _this.agentForm.get('contactNumber').setValue(data.contactNumber);
            _this.agentForm.get('b2BRoleId').setValue(data.b2BRoleId);
            _this.agentForm.get('activationDate').setValue(data.activationDate);
            if (data.deActivationDate !== null && data.deActivationDate !== undefined) {
                _this.isInactiveDateRequired = true;
                _this.agentForm.get('deActivationDate').setValue(data.deActivationDate);
            }
            _this.agentForm.get('firstName').setValue(data.firstName);
            _this.agentForm.get('lastName').setValue(data.lastName);
            var val = data.userName.split('__');
            var userName = val[1];
            _this.agentForm.get('userName').setValue(userName);
            _this.agentForm.get('agency').setValue(data.agency);
            _this.agentForm.get('branch').setValue(data.branch);
        });
    };
    AgentUserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agent-user-info',
            template: __webpack_require__("../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-info/agent-user-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-info/agent-user-info.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* DateAdapter */], useClass: DatePickerDateAdapter },
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: DATE_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_backoffice_lookup__["a" /* BackofficeLookupService */],
            __WEBPACK_IMPORTED_MODULE_3__common_backoffice_shared_services_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_9__common_shared_services_user_profile_service__["a" /* UserProfileService */]])
    ], AgentUserInfoComponent);
    return AgentUserInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-list/agent-user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".usernameTH{\r\n    width: 9%;\r\n}\r\n.agencyTH{\r\n    width: 10%;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\r\n.branchTH{\r\n    width:10%;\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\r\n.designationTH{\r\n    width:10%;\r\n}\r\n.emailTH {\r\n  width: 11%;\r\n}\r\n.userApplicationRoleTH{\r\n    width:9%;\r\n}\r\n.activationTH{\r\n    width: 13%;\r\n    padding-right: 0;\r\n}\r\n.userStatusTH{\r\n    width: 6%;\r\n    padding-left: 5px;\r\n    padding-right: 0;\r\n}\r\n.userActionTH {\r\n  width: 7%;\r\n  padding-right: 0;\r\n}\r\n\r\n.firstnameTH{\r\n  width:14%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-list/agent-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"mt-4 pt-2\">\r\n    <h1 class=\"mainHeading pb-0 borderBottomNone\">Agents</h1>\r\n    <div class=\"row mt-4 mb-0\">\r\n      <form [formGroup]=\"searchUsers\" (ngSubmit)=\"findUsers(searchUsers.get('searchText').value,searchUsers.get('startDate').value,searchUsers.get('endDate').value)\"\r\n            class=\"w-100\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"lightBlueContainer pb-0 pl-4 pr-4 pt-4 mb-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n\r\n                <div class=\"row\">\r\n\r\n                  <div class=\"col-md-7 pr-5\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Search by User Name, Agency Name, Agency Code, Branch Name, Email Id, Designation, Roles, Activation date \" formControlName=\"searchText\" (keydown.backspace)=\"checkIsInputCleared()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-2 pl-0\">\r\n                    <mat-form-field class=\"width80percent\">\r\n                      <span matPrefix>From &nbsp;</span>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"sdate\">\r\n                        <mat-icon matDatepickerToggleIcon>\r\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                        </mat-icon>\r\n                      </mat-datepicker-toggle>\r\n                      <input matInput [matDatepicker]=\"sdate\" placeholder=\"DD-MMM-YY\" formControlName=\"startDate\">\r\n                      <mat-datepicker #sdate></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span class=\"btn transparent-circle smallDeleteIcon ml-1\" title=\"Delete\">\r\n                      <i class=\"fa fa-times-thin\" aria-hidden=\"true\" (click)=\"checkIsFromDateCleared();\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-2 pr-4\">\r\n                    <mat-form-field class=\"width80percent\">\r\n                      <span matPrefix>To &nbsp;</span>\r\n                      <input matInput [matDatepicker]=\"enddate\" placeholder=\"DD-MMM-YY\" formControlName=\"endDate\" [min]=\"searchUsers.get('startDate').value\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"enddate\">\r\n                        <mat-icon matDatepickerToggleIcon>\r\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                        </mat-icon>\r\n                      </mat-datepicker-toggle>\r\n                      <mat-datepicker #enddate></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span class=\"btn transparent-circle smallDeleteIcon ml-1\" title=\"Delete\">\r\n                      <i class=\"fa fa-times-thin\" aria-hidden=\"true\" (click)=\"checkIsToDateCleared();\"></i>\r\n                    </span>\r\n                  </div>\r\n                 \r\n                  <div class=\"col-md-1 top10px controlButtons\">\r\n                    <button title=\"Search\" type=\"submit\" class=\"genericButton genericSmallButton activeButton mat-primary\" mat-raised-button>Search</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 pt-4 mt-2 pb-3 mb-1 controlButtons\">\r\n        <button title=\"Create New Agent\" type=\"submit\" class=\"btn defaultButton genericButton genericSmallButton\" mat-raised-button\r\n                (click)=\"createAgent()\">\r\n          <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i><span>Create New Agent</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <mat-table #table [dataSource]='!isSearch ? dataSource: filteredData' matSort (matSortChange)=\"sortData($event)\" matSortActive=\"activationDate\" matSortDirection=\"desc\" class=\"flexNone genericTable mb-4 pb-1 mat-table\">\r\n      <ng-container matColumnDef=\"firstName\">\r\n        <mat-header-cell class=\"firstnameTH alignItemCenter\" *matHeaderCellDef mat-sort-header> First/Last Name </mat-header-cell>\r\n        <mat-cell class=\"firstnameTH\" *matCellDef=\"let element\"><div class=\"d-flex\"><div><mat-icon class=\"userIcon alignItemCenter\">account_circle</mat-icon></div><span class=\"pl-1 alignItemCenter\">{{element.firstName}} {{element.lastName}}</span></div></mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"userName\">\r\n        <mat-header-cell class=\"usernameTH\" *matHeaderCellDef mat-sort-header> User Name </mat-header-cell>\r\n        <mat-cell class=\"usernameTH\" *matCellDef=\"let element\"> {{element.userName}} </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"agencyName\">\r\n        <mat-header-cell class=\"agencyTH\" *matHeaderCellDef mat-sort-header> <div>Agency Name/<div>Code</div></div></mat-header-cell>\r\n        <mat-cell class=\"agencyTH\" *matCellDef=\"let element\"> {{element.agencyName}} - {{element.agencyCode}} </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"branchName\">\r\n        <mat-header-cell class=\"branchTH\" *matHeaderCellDef mat-sort-header> Branch Name </mat-header-cell>\r\n        <mat-cell class=\"branchTH\" *matCellDef=\"let element\"> {{element.branchName}} </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"designation\">\r\n        <mat-header-cell class=\"designationTH\" *matHeaderCellDef mat-sort-header> Designation </mat-header-cell>\r\n        <mat-cell class=\"designationTH\" *matCellDef=\"let element\"> {{element.designation}} </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"email\">\r\n        <mat-header-cell class=\"emailTH\" *matHeaderCellDef mat-sort-header> Email ID </mat-header-cell>\r\n        <mat-cell class=\"emailTH\" *matCellDef=\"let element\"> {{element.email}} </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"userApplicationRole\">\r\n        <mat-header-cell class=\"userApplicationRoleTH\" *matHeaderCellDef mat-sort-header>\r\n          Role\r\n        </mat-header-cell>\r\n        <mat-cell class=\"userApplicationRoleTH\" *matCellDef=\"let element\">\r\n          <ng-container *ngFor=\"let c of element.userApplicationRole\">\r\n            <span class=\"d-block\"> {{c.roleName}}</span>\r\n          </ng-container>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"activationDate\">\r\n        <mat-header-cell class=\"activationTH\" *matHeaderCellDef mat-sort-header>\r\n          <div>Activation/<div>Inactivation Date</div></div>\r\n        </mat-header-cell>\r\n        <mat-cell class=\"activationTH\" *matCellDef=\"let element\">\r\n          <span class=\"d-block\">{{element.activationDate | date : \"dd-MMM-yy\"}}<span *ngIf=\"!element.isActive && element.deActivationDate != null\">/</span></span>\r\n          <ng-container *ngIf=\"!element.isActive && element.deActivationDate != null \">\r\n            {{element.deActivationDate | date : \"dd-MMM-yy\"}}\r\n          </ng-container>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"isActive\">\r\n        <mat-header-cell class=\"userStatusTH noOutlineOnFocus\" *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\r\n        <mat-cell class=\"userStatusTH\" *matCellDef=\"let element\">\r\n          <ng-container *ngIf=\" element.isActive == true\">\r\n            <i class=\"fa fa-circle active_status\" aria-hidden=\"true\"></i>Active\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!element.isActive\">\r\n            <i class=\"fa fa-circle deactivate_status\" aria-hidden=\"true\"></i>Inactive\r\n          </ng-container>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\" class=\"text-center\">\r\n        <mat-header-cell class=\"userActionTH noOutlineOnFocus\" *matHeaderCellDef> </mat-header-cell>\r\n        <mat-cell class=\"userActionTH placeholderColorGray\" *matCellDef=\"let element\">\r\n          <mat-select placeholder=\"Actions\" name=\"Actions\" [(ngModel)]=\"actions\">\r\n            <ng-container *ngIf=\"element.isActive== true \">\r\n              <mat-option value=\"{{element.id}}:edit\" #edit (click)=\"goUserUpdate(edit.value)\">Edit</mat-option>\r\n            </ng-container>\r\n            <mat-option value=\"{{element.id}}:delete\" #delete (click)=\"goUserDelete(delete.value)\">Delete</mat-option>\r\n          </mat-select>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n    <div style=\"color:orange\" *ngIf=\"noDataAvailable\">\r\n      No Agent is created.\r\n    </div>\r\n    <div style=\"color:orange\" *ngIf=\"noRecordsFound\">\r\n      No Agent user record found.\r\n    </div>\r\n    <div class=\"paginationWrapper\">\r\n      <span class=\"pageCount\" *ngIf=\"!noDataAvailable\">\r\n        Page: {{(pageEvent) ? pageEvent.pageIndex + 1 : 1}} of {{\r\n(pageEvent) ? Math.ceil(pageEvent.length/pageEvent.pageSize)\r\n        : Math.ceil(totalRecords/20)\r\n        }}\r\n      </span>\r\n      <mat-paginator *ngIf=\"!noDataAvailable\" class=\"genericPagination\" (page)=\"pageEvent = $event\" #paginator [pageSize]=\"20\"\r\n                     [pageSizeOptions]=\"[5, 10, 20]\">\r\n      </mat-paginator>\r\n    </div>\r\n    <!-- <mat-paginator #paginator class=\"genericPagination\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator> -->\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-list/agent-user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePickerDateAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_dialogs_dialogs_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/dialogs/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_backoffice_shared_services_user_data_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/user-data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var DatePickerDateAdapter = (function (_super) {
    __extends(DatePickerDateAdapter, _super);
    function DatePickerDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerDateAdapter.prototype.format = function (date, displayFormat) {
        date.setMinutes((date.getTimezoneOffset() * -1));
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.toLocaleString('en-us', { month: 'long' });
            var year = date.getFullYear();
            return this._to2digit(day) + '-' + month.substring(0, 3) + '-' + year % 100;
        }
        else {
            return date.toDateString();
        }
    };
    DatePickerDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return DatePickerDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_3__angular_material__["P" /* NativeDateAdapter */]));

var AgentUserListComponent = (function () {
    function AgentUserListComponent(agentUserDataService, dialogsService, router, activatedRoute, datepipe, snackBar) {
        this.agentUserDataService = agentUserDataService;
        this.dialogsService = dialogsService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.datepipe = datepipe;
        this.snackBar = snackBar;
        this.edit = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.read;
        this.displayedColumns = ['firstName', 'userName', 'agencyName', 'branchName', 'designation', 'email', 'userApplicationRole',
            'activationDate', 'isActive', 'actions'];
        this.Math = Math;
    }
    AgentUserListComponent.prototype.ngOnInit = function () {
        this.getAgentUserList();
        this.isSearch = false;
        this.searchUsers = new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormGroup"]({
            startDate: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](),
            endDate: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"](),
            searchText: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormControl"]()
        });
    };
    AgentUserListComponent.prototype.findUsers = function (filterValue, filterFrom, filterTo) {
        var _this = this;
        if (filterFrom !== null || filterTo !== null || (filterValue !== null && filterValue.length >= 3)) {
            this.isSearch = true;
        }
        if (filterFrom !== null) {
            filterFrom = this.datepipe.transform(filterFrom, 'yyyy-MM-dd');
        }
        if (filterTo !== null) {
            filterTo = this.datepipe.transform(filterTo, 'yyyy-MM-dd');
        }
        if (filterValue !== null) {
            filterValue = filterValue.trim();
            filterValue = filterValue.toLowerCase();
        }
        this.filteredData = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatTableDataSource */](this.agentUserList.filter(function (user) {
            var searchActivationDate = _this.datepipe.transform(user.activationDate, 'dd-MMM-yy hh:mm a');
            var activationDate = _this.datepipe.transform(user.activationDate, 'yyyy-MM-dd');
            if (filterValue !== null && (filterFrom === null && filterTo === null)) {
                return _this.filterUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue);
            }
            else if (filterFrom !== null && (filterTo === null && filterValue === null)) {
                return activationDate >= filterFrom;
            }
            else if (filterTo !== null && (filterFrom === null && filterValue === null)) {
                return activationDate <= filterTo;
            }
            else if (filterValue === null && (filterFrom !== null && filterTo !== null)) {
                return filterFrom <= activationDate && activationDate <= filterTo;
            }
            else if (filterFrom === null && (filterValue !== null && filterTo !== null)) {
                return (_this.filterUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue)) && activationDate <= filterTo;
            }
            else if (filterTo === null && (filterFrom !== null && filterValue !== null)) {
                return (_this.filterUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue)) &&
                    activationDate >= filterFrom;
            }
            else if (filterFrom !== null && filterTo !== null && filterValue !== null) {
                return (_this.filterUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue)) &&
                    (filterFrom <= activationDate && activationDate <= filterTo);
            }
        }));
        if (this.filteredData.data.length === 0) {
            this.noRecordsFound = true;
        }
        this.filteredData.paginator = this.paginator;
        this.filteredData.sort = this.sort;
    };
    AgentUserListComponent.prototype.filterUser = function (agentUser, filterValue) {
        this.isAppRoleData = false;
        this.isDesignationData = false;
        for (var i = 0; i < agentUser.userApplicationRole.length; i++) {
            if (agentUser.userApplicationRole[i].roleName.toLowerCase().includes(filterValue)) {
                this.isAppRoleData = true;
                break;
            }
        }
        return agentUser.firstName.toLowerCase().includes(filterValue) ||
            agentUser.email.toLowerCase().includes(filterValue) ||
            agentUser.lastName.toLowerCase().includes(filterValue) ||
            agentUser.userName.toLowerCase().includes(filterValue) ||
            agentUser.designation.toLowerCase().includes(filterValue) ||
            agentUser.branchName.toLowerCase().includes(filterValue) ||
            agentUser.agencyName.toLowerCase().includes(filterValue) ||
            agentUser.agencyCode.toLowerCase().includes(filterValue) ||
            this.isAppRoleData || this.isDesignationData;
    };
    AgentUserListComponent.prototype.checkIsInputCleared = function () {
        if (this.searchUsers.get('searchText').value.length === 1 &&
            this.searchUsers.get('startDate').value === null &&
            this.searchUsers.get('endDate').value === null) {
            this.filteredData = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatTableDataSource */](this.agentUserList);
            this.filteredData.paginator = this.paginator;
            this.filteredData.sort = this.sort;
            this.isSearch = false;
            this.noRecordsFound = false;
        }
    };
    AgentUserListComponent.prototype.checkIsFromDateCleared = function () {
        this.searchUsers.get('startDate').setValue(null);
        if ((this.searchUsers.get('searchText').value === null || this.searchUsers.get('searchText').value === '') &&
            this.searchUsers.get('endDate').value === null) {
            this.getAgentUserList();
        }
    };
    AgentUserListComponent.prototype.checkIsToDateCleared = function () {
        this.searchUsers.get('endDate').setValue(null);
        if ((this.searchUsers.get('searchText').value === null || this.searchUsers.get('searchText').value === '') &&
            this.searchUsers.get('startDate').value === null) {
            this.getAgentUserList();
        }
    };
    AgentUserListComponent.prototype.sortData = function (sort) {
        var data = this.agentUserList.slice();
        if (!sort.active || sort.direction === '') {
            this.dataSource.data = data.sort(function (a, b) {
                var isAsc = sort.direction === 'desc';
                return compare(a.activationDate, b.activationDate, isAsc);
            });
            return;
        }
        else {
            if (this.isSearch) {
                this.filteredData.data = this.filteredData.data.sort(function (a, b) {
                    var isAsc = sort.direction === 'asc';
                    switch (sort.active) {
                        case 'firstName': return compare(a.firstName.toLowerCase(), b.firstName.toLowerCase(), isAsc);
                        case 'userName': return compare(a.userName.toLowerCase(), b.userName.toLowerCase(), isAsc);
                        case 'email': return compare(a.email.toLowerCase(), b.email.toLowerCase(), isAsc);
                        case 'designation': return compare(a.designation, b.designation, isAsc);
                        case 'branchName': return compare(a.branchName, b.branchName, isAsc);
                        case 'agencyName': return compare(a.agencyName, b.agencyName, isAsc);
                        case 'userApplicationRole':
                            return compare((a.userApplicationRole.length === 0) ? '' :
                                a.userApplicationRole[0].roleName, (b.userApplicationRole.length === 0) ? '' :
                                b.userApplicationRole[0].roleName, isAsc);
                        case 'activationDate': return compare(a.activationDate, b.activationDate, isAsc);
                        case 'isActive': return compare(a.isActive, b.isActive, isAsc);
                        default: return 0;
                    }
                });
                this.filteredData.paginator = this.paginator;
            }
            this.dataSource.data = data.sort(function (a, b) {
                var isAsc = sort.direction === 'asc';
                switch (sort.active) {
                    case 'firstName': return compare(a.firstName.toLowerCase(), b.firstName.toLowerCase(), isAsc);
                    case 'userName': return compare(a.userName.toLowerCase(), b.userName.toLowerCase(), isAsc);
                    case 'email': return compare(a.email.toLowerCase(), b.email.toLowerCase(), isAsc);
                    case 'designation': return compare(a.designation, b.designation, isAsc);
                    case 'branchName': return compare(a.branchName, b.branchName, isAsc);
                    case 'agencyName': return compare(a.agencyName, b.agencyName, isAsc);
                    case 'agencyCode': return compare(a.agencyCode, b.agencyCode, isAsc);
                    case 'userApplicationRole':
                        return compare((a.userApplicationRole.length === 0) ? '' :
                            a.userApplicationRole[0].roleName, (b.userApplicationRole.length === 0) ? '' :
                            b.userApplicationRole[0].roleName, isAsc);
                    case 'activationDate': return compare(a.activationDate, b.activationDate, isAsc);
                    case 'isActive': return compare(a.isActive, b.isActive, isAsc);
                    default: return 0;
                }
            });
            this.dataSource.paginator = this.paginator;
        }
    };
    AgentUserListComponent.prototype.createAgent = function () {
        this.router.navigate(['../agentusers', 0, this.create], { relativeTo: this.activatedRoute });
    };
    AgentUserListComponent.prototype.getAgentUserList = function () {
        var _this = this;
        this.isSearch = false;
        this.agentUserDataService.getAgentUsers().subscribe(function (agentUsersList) {
            _this.agentUserList = agentUsersList;
            agentUsersList.forEach(function (element) {
                element.userName = element.userName.split('__')[1];
            });
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["K" /* MatTableDataSource */](_this.agentUserList);
            _this.totalRecords = _this.agentUserList.length;
            _this.dataSource.sort = _this.sort;
            if (agentUsersList.length === 0) {
                _this.noDataAvailable = true;
            }
            else {
                _this.noDataAvailable = false;
            }
            _this.dataSource.paginator = _this.paginator;
        });
    };
    AgentUserListComponent.prototype.deleteAgentUser = function (agentUserId) {
        var _this = this;
        this.agentUserDataService.deleteAgentUser(agentUserId).subscribe(function (data) {
            window.scrollTo(0, 0);
            _this.snackBar.open('The user is deleted successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top',
                panelClass: 'showSnackBar' });
            _this.getAgentUserList();
        });
    };
    AgentUserListComponent.prototype.goUserDelete = function (value) {
        var _this = this;
        var val = value.split(':');
        var agentUserId = val[0];
        this.dialogsService
            .confirm('Confirm', 'Are you sure you want to delete this user?').subscribe(function (res) {
            _this.result = res;
            if (_this.result) {
                _this.deleteAgentUser(agentUserId);
            }
            else {
                _this.actions = null;
            }
        });
    };
    AgentUserListComponent.prototype.goUserUpdate = function (value) {
        var val = value.split(':');
        var agentUserId = val[0];
        this.operation = val[1];
        this.router.navigate(['../agentusers', agentUserId, this.operation.trim().toLowerCase()], { relativeTo: this.activatedRoute });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MatPaginator */])
    ], AgentUserListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["H" /* MatSort */])
    ], AgentUserListComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AgentUserListComponent.prototype, "_dateValue", void 0);
    AgentUserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agent-user-list',
            template: __webpack_require__("../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-list/agent-user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-list/agent-user-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_dialogs_dialogs_service__["a" /* DialogsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* DateAdapter */], useClass: DatePickerDateAdapter },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: DATE_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__common_backoffice_shared_services_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_dialogs_dialogs_service__["a" /* DialogsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSnackBar */]])
    ], AgentUserListComponent);
    return AgentUserListComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-type/hotel-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-type/hotel-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-4\">\r\n  <div class=\"customBreadcrumb mb-4\">\r\n    <span>Hotel/Supplier </span>\r\n    <span *ngIf=\"operation == 'create'\">&gt;  Create New Hotel/Supplier User </span>\r\n    <span *ngIf=\"operation == 'edit'\">&gt;  Edit Hotel/Supplier User </span>\r\n  </div>\r\n  <h1 *ngIf=\"operation == 'create'\" class=\"mainHeading customBreadcrumb borderBottomNone\">Create New Hotel/Supplier User<span class=\"mandatoryInfo\">Indicates Mandatory Fields</span></h1>\r\n  <h1 *ngIf=\"operation == 'edit'\" class=\"mainHeading mb-4 customBreadcrumb borderBottomNone\">Edit Hotel/Supplier User<span class=\"mandatoryInfo\">Indicates Mandatory Fields</span></h1>\r\n  <form #mgHotelForm=\"ngForm\">\r\n    <div *ngIf=\"operation == 'create'\" class=\"row customeRow\">\r\n      <div class=\"form-group col-md-5 pt-4\">\r\n        <div>\r\n          <label>Type</label>\r\n          <mat-radio-group class=\"d-flex\">\r\n            <mat-radio-button value=\"1\" [routerLink]=\"['hoteluserinfo',0,create]\" routerLinkActive=\"active\">Hotel Chain</mat-radio-button>\r\n            <mat-radio-button value=\"2\" [routerLink]=\"['individual',0,create]\" routerLinkActive=\"active\">Individual Hotels</mat-radio-button>\r\n            <mat-radio-button value=\"3\" [routerLink]=\"['supplieruser',0,create]\" routerLinkActive=\"active\">Supplier</mat-radio-button>\r\n          </mat-radio-group>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div>\r\n  <div class=\"body-style\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- <div>\r\n  <app-hotel-type-nav-menu [hotelType] = \"hoteltype\"></app-hotel-type-nav-menu>\r\n</div>\r\n<div >\r\n  <div class=\"body-style\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div> -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-type/hotel-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotelTypeComponent = (function () {
    function HotelTypeComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.edit = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.read;
    }
    HotelTypeComponent.prototype.ngOnInit = function () {
        this.operation = this.create;
        if (this.activatedRoute.firstChild !== null) {
            this.operation = this.activatedRoute.firstChild.snapshot.params['operation'];
        }
    };
    HotelTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hotel-type',
            template: __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-type/hotel-type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-type/hotel-type.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], HotelTypeComponent);
    return HotelTypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-info/hotel-user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".controlButtons {\r\n  padding-top: 30px !important;\r\n  padding-bottom: 28px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-info/hotel-user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-1\">\r\n  <form [formGroup]=\"hotelUserForm\" (ngSubmit)=\"saveHotelUserDetails()\">\r\n    <div class=\"row customeRow alignItemCenter\">\r\n      <div class=\"form-group col-md-4 col-lg-3 mb-0 mt-1\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Chain\" name=\"Chain\" formControlName=\"chainId\" (change)=\"getHotelBrands(hotelUserForm.get('chainId').value);\" required>\r\n            <mat-option [value]=\"null\"> Select </mat-option>\r\n            <mat-option *ngFor=\"let hotelchain of HotelchainList\" [value]=\"hotelchain.hotelChainId\">{{hotelchain.hotelChainName}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group col-md-4 col-lg-3 mb-0 mt-1\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Brand\" name=\"Brand\" formControlName=\"brandIds\" (change)=\"getHotels(hotelUserForm.get('brandIds').value);\" multiple required>\r\n            <mat-option [value]=\"null\" *ngIf=\"isBrandList == true\"> All </mat-option>\r\n            <mat-option *ngFor=\"let hotelbrand of HotelbrandList\" [value]=\"hotelbrand.hotelBrandId\" aria-selected=\"true\">\r\n              {{hotelbrand.hotelBrandName}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group col-md-4 col-lg-3 mb-0 mt-1\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Hotel Name - ID\" name=\"Hotel Name - ID\" formControlName=\"hotelId\" (change)=\"selectAllHotels();\" multiple required>\r\n            <mat-option [value]=\"null\" *ngIf=\"isHotelList == true\" > All  </mat-option>\r\n            <mat-option *ngFor=\"let hotel of hotelNameList\" [value]=\"hotel.hotelId\">\r\n              {{hotel.hotelName}} - {{hotel.hotelCode}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"row customeRow\">\r\n      <div class=\"col-md-2 col-lg-1\">\r\n        <div class=\"userImageSection\">\r\n          <mat-icon class=\"userImage\">account_circle</mat-icon>\r\n          <div class=\"image-upload\">\r\n            <label for=\"file-input\">\r\n              <img src=\"assets/uploadPhoto.png\" title=\"Upload Image\" />\r\n            </label>\r\n            <input id=\"file-input\" type=\"file\" />\r\n          </div>\r\n          <button class=\"deletePhoto\" mat-raised-button title=\"Delete Image\">\r\n            <i class=\"fa fa-times-thin\"></i>\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row customeRow\">\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"First Name\" name=\"firstName\" formControlName=\"firstName\" required />\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Last Name\" name=\"lastName\" formControlName=\"lastName\" required />\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Designation\" name=\"Designation\" formControlName=\"designationId\" required>\r\n            <mat-option *ngFor=\"let designation of designationList\" [value]=\"designation.designationId\">\r\n              {{designation.title}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      </div>\r\n\r\n    <div class=\"row customeRow\">\r\n\r\n      <div class=\"form-group col-md-4 col-lg-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Email ID\" name=\"emailID\" formControlName=\"email\" pattern=\"\\w+@\\w+\\.\\w+(,\\s*\\w+@\\w+\\.\\w+)*\" required />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4 col-lg-3\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Role\" name=\"Role\" formControlName=\"extranetRoleId\" required>\r\n            <mat-option *ngFor=\"let role of roleList\" [value]=\"role.id\">\r\n              {{role.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"row customeRow\">\r\n      <div class=\"col-md-4 col-lg-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [matDatepicker]=\"activationDate\" placeholder=\"Activation Date\" formControlName=\"activationDate\" [min]=\"(operation === create) ? todaysDate : minDate\"\r\n                 required=\"!isEdit\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"activationDate\">\r\n            <mat-icon matDatepickerToggleIcon>\r\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n            </mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #activationDate></mat-datepicker>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"operation == 'edit'\">\r\n        <div class=\"col-md-4 col-lg-3 mt-3\">\r\n            <div class=\"form-check form-check-inline\">\r\n              <mat-checkbox formControlName=\"inActivateUser\" [checked]= \"isInactiveDateRequired\" (change)=\"toggleDeactivationDate($event);\">Inactivate User</mat-checkbox>\r\n            </div>\r\n        </div>\r\n      </div>\r\n\r\n    <div class=\"row customeRow\" *ngIf=\"isInactiveDateRequired == true\">\r\n      <div class=\"col-md-4 col-lg-3 mt-4 pt-2 mb-0\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [matDatepicker]=\"deActivationDate\" placeholder=\"Inactivation Date\" formControlName=\"deActivationDate\" [min]=\"(operation === edit) ? todaysDate : minDate\"\r\n              required= \"isInactiveDateRequired\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"deActivationDate\">\r\n            <mat-icon matDatepickerToggleIcon>\r\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n            </mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #deActivationDate></mat-datepicker>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 controlButtons pl-3\">\r\n        <button title=\"Save\" type=\"submit\" class=\"genericButton activeButton mat-primary mr-1\" [disabled]=\"!hotelUserForm.valid\" mat-raised-button>Save</button>\r\n        <button title=\"Cancel\" type=\"submit\" class=\"genericButton defaultButton\" (click)=\"cancel()\" mat-raised-button>Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-info/hotel-user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePickerDateAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelUserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__("../../../../../src/app/backoffice/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_backoffice_shared_services_backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_shared_services_lookup_service__ = __webpack_require__("../../../../../src/app/common/shared/services/lookup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_backoffice_shared_services_user_data_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_shared_services_user_profile_service__ = __webpack_require__("../../../../../src/app/common/shared/services/user-profile.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var DatePickerDateAdapter = (function (_super) {
    __extends(DatePickerDateAdapter, _super);
    function DatePickerDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerDateAdapter.prototype.format = function (date, displayFormat) {
        date.setMinutes((date.getTimezoneOffset() * -1));
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.toLocaleString('en-us', { month: 'long' });
            var year = date.getFullYear();
            return this._to2digit(day) + '-' + month.substring(0, 3) + '-' + year % 100;
        }
        else {
            return date.toDateString();
        }
    };
    DatePickerDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return DatePickerDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_5__angular_material__["P" /* NativeDateAdapter */]));

var HotelUserInfoComponent = (function () {
    function HotelUserInfoComponent(router, activatedRoute, snackBar, cd, lookupService, userDataService, backOfficeLookUpService, userProfileService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.cd = cd;
        this.lookupService = lookupService;
        this.userDataService = userDataService;
        this.backOfficeLookUpService = backOfficeLookUpService;
        this.userProfileService = userProfileService;
        this.todaysDate = new Date();
        this.edit = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.read;
        this.hotelUserDetails = {};
        this.isInactiveDateRequired = false;
        this.isEdit = false;
    }
    HotelUserInfoComponent.prototype.ngOnInit = function () {
        this.operation = this.activatedRoute.snapshot.params['operation'];
        this.userId = this.activatedRoute.snapshot.params['id'];
        this.getHotelChainList();
        this.getDesignations();
        this.getRoles();
        this.allBrandIds = [0];
        this.allHotelIds = [''];
        this.isHotelList = false;
        this.isBrandList = false;
        this.hotelUserForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            chainId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            brandIds: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            hotelId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            designationId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            extranetRoleId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required),
            activationDate: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            inActivateUser: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            deActivationDate: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('')
        });
        if (this.operation === this.edit) {
            this.isEdit = true;
            this.hotelUserForm.controls.activationDate.disable();
            this.getHotelUser();
        }
    };
    HotelUserInfoComponent.prototype.toggleDeactivationDate = function (event) {
        this.isInactiveDateRequired = event.checked;
        if (event.checked) {
            this.hotelUserForm.controls.deActivationDate.enable();
        }
        else {
            this.hotelUserForm.controls.deActivationDate.disable();
        }
        this.cd.detectChanges();
    };
    HotelUserInfoComponent.prototype.getHotelChainList = function () {
        this.HotelchainList = this.activatedRoute.snapshot.data['hotelChains'];
    };
    HotelUserInfoComponent.prototype.getHotelBrands = function (chainId) {
        var _this = this;
        if (this.operation === this.edit && this.hotelUserForm.value.chainId !== this.editChainId || this.operation === this.create) {
            this.hotelUserForm.patchValue({ brandId: null });
            this.hotelUserForm.patchValue({ hotelId: null });
            this.HotelbrandList = null;
            this.hotelNameList = null;
            this.isHotelList = false;
            this.isBrandList = false;
        }
        this.lookupService.getHotelBrands(chainId).subscribe(function (mghotelbrandList) {
            _this.HotelbrandList = mghotelbrandList;
            if (mghotelbrandList.length > 1) {
                _this.isBrandList = true;
            }
            if (_this.operation === _this.edit) {
                _this.getHotels(_this.editBrandIds);
            }
        });
    };
    HotelUserInfoComponent.prototype.getDesignations = function () {
        var _this = this;
        this.backOfficeLookUpService.getDesignationByType(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].userType.hoteluser).subscribe(function (designationData) {
            return _this.designationList = designationData;
        });
    };
    HotelUserInfoComponent.prototype.getRoles = function () {
        var _this = this;
        this.backOfficeLookUpService.getRolesByApplicationName(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].application.extranet, __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* BACKOFFICECONSTANTS */].userType.hotelUser)
            .subscribe(function (data) {
            return _this.roleList = data;
        });
    };
    HotelUserInfoComponent.prototype.selectAllHotels = function () {
        // fetch all hotelIds from hotelsList
        if (this.hotelNameList !== null) {
            this.allHotelIds.splice(0, this.allHotelIds.length);
            for (var b = 0; b < this.hotelNameList.length; b++) {
                this.allHotelIds[b] = this.hotelNameList[b].hotelId;
            }
            // select/deselect all hotels
            if (this.hotelUserForm.value.hotelId.length !== 0) {
                if (this.hotelUserForm.value.hotelId[0] == null && this.hotelUserForm.value.hotelId.length !== (this.allHotelIds.length + 1)) {
                    this.hotelUserForm.patchValue({ hotelId: this.allHotelIds });
                }
                else if (this.hotelUserForm.value.hotelId.length === (this.allHotelIds.length + 1)) {
                    this.hotelUserForm.patchValue({ hotelId: null });
                }
            }
        }
    };
    HotelUserInfoComponent.prototype.getHotels = function (brandIds) {
        var _this = this;
        // fetch all brandIds from brandsList
        this.allBrandIds.splice(0, this.allBrandIds.length);
        for (var b = 0; b < this.HotelbrandList.length; b++) {
            this.allBrandIds[b] = this.HotelbrandList[b].hotelBrandId;
        }
        // select/deselect all brands
        if (brandIds.length !== (this.allBrandIds.length + 1) && brandIds.length !== 0) {
            if (brandIds[0] == null) {
                for (var b = 0; b < this.HotelbrandList.length; b++) {
                    brandIds[b] = this.HotelbrandList[b].hotelBrandId;
                    this.hotelUserForm.value.brandIds[b] = this.HotelbrandList[b].hotelBrandId;
                }
                this.hotelUserForm.patchValue({ brandIds: brandIds });
            }
        }
        else if (brandIds.length === (this.allBrandIds.length + 1) && this.hotelNameList != null) {
            this.hotelUserForm.patchValue({ brandIds: null });
            this.hotelNameList = null;
            this.isHotelList = false;
        }
        // fetch hotels according to brandIds
        if (brandIds.length >= 1 && brandIds[0] !== null) {
            this.backOfficeLookUpService.getHotelsByBrandIds(brandIds).subscribe(function (data) {
                _this.hotelNameList = data;
                _this.isHotelList = (data.length > 1) ? true : false;
            });
        }
    };
    HotelUserInfoComponent.prototype.getHotelUser = function () {
        var _this = this;
        // this.getHotelBrands(2);
        // this.getHotels(this.testBrandIds);
        this.userDataService.getHotelUserById(this.userId).subscribe(function (hotelUser) {
            _this.hotelUserDetails = hotelUser;
            // this.hotelUser = hotelUser;
            _this.hotelUserForm.get('chainId').setValue(hotelUser.chainId);
            _this.editChainId = hotelUser.chainId;
            _this.getHotelBrands(hotelUser.chainId);
            _this.hotelUserForm.get('brandIds').setValue(hotelUser.brandId);
            _this.editBrandIds = hotelUser.brandId;
            _this.hotelUserForm.get('hotelId').setValue(hotelUser.hotelId);
            _this.hotelUserForm.get('firstName').setValue(hotelUser.firstName);
            _this.hotelUserForm.get('lastName').setValue(hotelUser.lastName);
            _this.hotelUserForm.get('designationId').setValue(hotelUser.designationId);
            _this.hotelUserForm.get('extranetRoleId').setValue(hotelUser.extranetRoleId);
            _this.hotelUserForm.get('email').setValue(hotelUser.email);
            _this.hotelUserForm.get('activationDate').setValue(hotelUser.activationDate);
            if (hotelUser.deActivationDate !== null) {
                // this.hotelUserForm.get('inActivateUser').setValue(true);
                _this.isInactiveDateRequired = true;
                _this.hotelUserForm.get('deActivationDate').setValue(hotelUser.deActivationDate);
                _this.cd.detectChanges();
            }
        });
    };
    HotelUserInfoComponent.prototype.saveHotelUserDetails = function () {
        var _this = this;
        var hotelUser = Object.assign({}, this.hotelUserDetails, this.hotelUserForm.value);
        hotelUser.userName = hotelUser.email;
        hotelUser.hotelUserType = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* BACKOFFICECONSTANTS */].hotelUserType.chain;
        if (this.isInactiveDateRequired) {
            hotelUser.inActivationType = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].inActiveType.permanent;
        }
        if (this.isEdit && !this.isInactiveDateRequired) {
            hotelUser.inActivationType = '';
            hotelUser.deActivationDate = '';
        }
        hotelUser.createdBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
            this.userProfileService.GetBasicUserInfo().LastName;
        hotelUser.updatedBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
            this.userProfileService.GetBasicUserInfo().LastName;
        if (this.operation === this.create) {
            this.userDataService.createHotelUser(hotelUser)
                .subscribe(function (data) {
                if (data.succeeded === true) {
                    _this.snackBar.open('New user is created successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration,
                        verticalPosition: 'top', panelClass: 'showSnackBar' });
                    _this.router.navigate(['/usermgmt/hoteluserslist']);
                }
                else {
                    // TODO: Need to check how we are doing error handling.
                    _this.snackBar.open('Error occourred while saving Agent. ' + data.errors[0].description, '', { duration: __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                }
            });
        }
        else if (this.operation === this.edit) {
            this.userDataService.updateHotelUser(this.userId, hotelUser)
                .subscribe(function (data) {
                if (data.succeeded === true) {
                    _this.snackBar.open('The user is updated successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration,
                        verticalPosition: 'top', panelClass: 'showSnackBar' });
                    _this.router.navigate(['/usermgmt/hoteluserslist']);
                }
                else {
                    // TODO: Need to check how we are doing error handling.
                    _this.snackBar.open('Error occourred while saving Agent. ' + data.errors[0].description, '', { duration: __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                }
            });
        }
    };
    HotelUserInfoComponent.prototype.cancel = function () {
        window.scrollTo(0, 0);
        this.router.navigate(['/usermgmt/hoteluserslist']);
    };
    HotelUserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hotel-user-info',
            template: __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-info/hotel-user-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-info/hotel-user-info.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* DateAdapter */], useClass: DatePickerDateAdapter },
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: DATE_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_7__common_shared_services_lookup_service__["a" /* LookupService */],
            __WEBPACK_IMPORTED_MODULE_8__common_backoffice_shared_services_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_6__common_backoffice_shared_services_backoffice_lookup__["a" /* BackofficeLookupService */],
            __WEBPACK_IMPORTED_MODULE_9__common_shared_services_user_profile_service__["a" /* UserProfileService */]])
    ], HotelUserInfoComponent);
    return HotelUserInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-list/hotel-user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".usernameTH{width:15%;}\r\n.hotelIDTH{width: 19%;}\r\n.designationIDTH{width: 10%;}\r\n.emailTH {\r\n  width: 14%;\r\n}\r\n.applicationRoleTH{width: 10%;}\r\n.activationTH{width: 15%;}\r\n.userStatusTH{width: 9%;}\r\n.userActionTH{width: 9%;}\r\n.expandHotelDetails {\r\n  position: absolute;\r\n  left: 83px;\r\n  width: 91%;\r\n  padding: 10px;\r\n  overflow-y: scroll;\r\n  height: 87px;\r\n  margin-top: 42px;\r\n  border: 1px solid #e0e0e0;\r\n  background: #fafafa;\r\n}\r\n\r\n.expandHotelDetails span{\r\n  font-size:13px;\r\n}\r\n\r\n.hotelIDTH a {\r\n  cursor: pointer;\r\n  color: #2aaae1;\r\n  display: block;\r\n  margin-top: 5px;\r\n}\r\n\r\n.expandHotelTitle {\r\n  display: block;\r\n  z-index: 1;\r\n  position: absolute;\r\n  left: 84px;\r\n  width: 94%;\r\n  padding-top: 16px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-list/hotel-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"mt-4 pt-2\">\r\n    <h1 class=\"mainHeading pb-0 borderBottomNone\">Hotel / Supplier</h1>\r\n    <div class=\"row mt-4 mb-0\">\r\n      <form [formGroup]=\"searchHotelUsers\" (ngSubmit)=\"findHotelUser(searchHotelUsers.get('searchText').value,searchHotelUsers.get('startDate').value,searchHotelUsers.get('endDate').value)\"\r\n            class=\"w-100\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"lightBlueContainer pb-0 pl-4 pr-4 pt-4 mb-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n\r\n                <div class=\"row\">\r\n\r\n                  <div class=\"col-md-7 pr-5\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Search by User Name, Email ID, Designation, Roles, Activation date \" formControlName=\"searchText\"\r\n                             (keydown.backspace)=\"checkIsInputCleared()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-2 pl-0\">\r\n                    <mat-form-field class=\"width80percent\">\r\n                      <span matPrefix>From &nbsp;</span>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"startdate\">\r\n                        <mat-icon matDatepickerToggleIcon>\r\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                        </mat-icon>\r\n                      </mat-datepicker-toggle>\r\n                      <input matInput [matDatepicker]=\"startdate\" placeholder=\"DD-MMM-YY\" formControlName=\"startDate\">\r\n                      <mat-datepicker #startdate></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span class=\"btn transparent-circle smallDeleteIcon ml-1\" title=\"Delete\">\r\n                      <i class=\"fa fa-times-thin\" aria-hidden=\"true\" (click)=\"checkIsFromDateCleared();\"></i>\r\n                    </span>\r\n                  </div>\r\n                  <div class=\"col-md-2 pr-4\">\r\n                    <mat-form-field class=\"width80percent\">\r\n                      <span matPrefix>To &nbsp;</span>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"enddate\">\r\n                        <mat-icon matDatepickerToggleIcon>\r\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                        </mat-icon>\r\n                      </mat-datepicker-toggle>\r\n                      <input matInput [matDatepicker]=\"enddate\" placeholder=\"DD-MMM-YY\" formControlName=\"endDate\" [min]=\"searchHotelUsers.get('startDate').value\">\r\n                      <mat-datepicker #enddate></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span class=\"btn transparent-circle smallDeleteIcon ml-1\" title=\"Delete\">\r\n                      <i class=\"fa fa-times-thin\" aria-hidden=\"true\" (click)=\"checkIsToDateCleared();\"></i>\r\n                    </span>\r\n                  </div>\r\n                  \r\n                  <div class=\"col-md-1 top10px controlButtons\">\r\n                    <button title=\"Search\" type=\"submit\" class=\"genericButton genericSmallButton activeButton mat-primary\" mat-raised-button>Search</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 pt-4 mt-2 pb-3 mb-1 controlButtons\">\r\n        <button title=\"Create New Hotel / Supplier User\" type=\"submit\" class=\"btn defaultButton genericButton genericSmallButton\"\r\n                mat-raised-button (click)=\"createHotelUser()\">\r\n          <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\r\n          <span>Create New Hotel / Supplier User</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <mat-table class=\"flexNone genericTable mb-4 pb-1 mat-table\" #table [dataSource]='!isSearch ? dataSource: filteredData' matSort (matSortChange)=\"sortData($event)\"\r\n               matSortActive=\"activationDate\" matSortDirection=\"desc\">\r\n\r\n      <ng-container matColumnDef=\"firstName\">\r\n        <mat-header-cell class=\"usernameTH alignItemCenter pr-0\" *matHeaderCellDef mat-sort-header> User Name </mat-header-cell>\r\n        <mat-cell class=\"usernameTH\" *matCellDef=\"let element\">\r\n          <div class=\"d-flex\">\r\n            <div><mat-icon class=\"userIcon alignItemCenter\">account_circle</mat-icon></div>\r\n            <span class=\"pl-1 alignItemCenter\">{{element.firstName}} {{element.lastName}}</span>\r\n          </div>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"hotels\">\r\n        <mat-header-cell class=\"hotelIDTH\" *matHeaderCellDef mat-sort-header> Hotel Name - ID </mat-header-cell>\r\n        <mat-cell class=\"hotelIDTH\" *matCellDef=\"let element\">\r\n          <ng-container *ngIf=\"element.hotels.length > 1\">\r\n            <span>{{element.hotels[0].name}} - {{element.hotels[0].code}}</span>\r\n            <ng-container *ngIf=\"!element.hideme\">\r\n              <a (click)=\"element.hideme = !element.hideme\">More<i class=\"fa fa-angle-down ml-1\" aria-hidden=\"true\"></i></a>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"element.hideme\">\r\n              <a (click)=\"element.hideme = !element.hideme\">Less<i class=\"fa fa-angle-up ml-1\" aria-hidden=\"true\"></i></a>\r\n            </ng-container>\r\n            <span [hidden]=\"!element.hideme\" class=\"expandHotelTitle mavenProMedium\">Hotel Name - ID</span>\r\n            <div [hidden]=\"!element.hideme\" class=\"expandHotelDetails\">\r\n              <ng-container *ngFor=\"let c of element.hotels; let first = first; let last = last\">\r\n                <span *ngIf=\"!first && !last\">{{c.name}} - {{c.code}} ,</span>\r\n                <span *ngIf=\"last\">{{c.name}} - {{c.code}} .</span>\r\n              </ng-container>\r\n            </div>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"element.hotels.length==1\">\r\n            <span class=\"d-block\">{{element.hotels[0].name}} - {{element.hotels[0].code}}</span>\r\n          </ng-container>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"designation\">\r\n        <mat-header-cell class=\"designationIDTH\" *matHeaderCellDef mat-sort-header> Designation </mat-header-cell>\r\n        <mat-cell class=\"designationIDTH\" *matCellDef=\"let element\"> {{element.designation}} </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"email\">\r\n        <mat-header-cell class=\"emailTH\" *matHeaderCellDef mat-sort-header> Email ID </mat-header-cell>\r\n        <mat-cell class=\"emailTH\" *matCellDef=\"let element\"> {{element.email}} </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"userApplicationRole\">\r\n        <mat-header-cell class=\"applicationRoleTH\" *matHeaderCellDef mat-sort-header> Role </mat-header-cell>\r\n        <mat-cell class=\"applicationRoleTH\" *matCellDef=\"let element\">\r\n          <ng-container *ngFor=\"let c of element.userApplicationRole\">\r\n            <span class=\"d-block\"> {{c.roleName}}</span>\r\n          </ng-container>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"activationDate\">\r\n        <mat-header-cell class=\"activationTH\" *matHeaderCellDef mat-sort-header>\r\n            <div>Activation/<div>Inactivation Date</div></div>\r\n        </mat-header-cell>\r\n        <mat-cell class=\"activationTH\" *matCellDef=\"let element\">\r\n          <span class=\"d-block\">{{element.activationDate | date : \"dd-MMM-yy\"}}<span *ngIf=\"!element.isActive && element.deActivationDate != null\">/</span></span>\r\n          <ng-container *ngIf=\"!element.isActive && element.deActivationDate != null \">\r\n            {{element.deActivationDate | date : \"dd-MMM-yy\"}}\r\n          </ng-container>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"isActive\">\r\n        <mat-header-cell class=\"userStatusTH noOutlineOnFocus\" *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\r\n        <mat-cell class=\"userStatusTH\" *matCellDef=\"let element\">\r\n          <ng-container *ngIf=\"!element.isActive \">\r\n            <i class=\"fa fa-circle deactivate_status\" aria-hidden=\"true\"></i>Inactive\r\n          </ng-container>\r\n          <ng-container *ngIf=\"element.isActive == true\">\r\n            <i class=\"fa fa-circle active_status\" aria-hidden=\"true\"></i>Active\r\n          </ng-container>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"actions\" class=\"text-center\">\r\n        <mat-header-cell class=\"userActionTH noOutlineOnFocus\" *matHeaderCellDef mat-sort-header> </mat-header-cell>\r\n        <mat-cell class=\"placeholderColorGray userActionTH\" *matCellDef=\"let element\">\r\n          <mat-select placeholder=\"Actions\" name=\"Actions\" [(ngModel)]=\"actions\">\r\n            <ng-container *ngIf=\"element.isActive \">\r\n              <mat-option value=\"{{element.id}}:edit:{{element.hotelUserType}}\" #edit (click)=\"goUserUpdate(edit.value)\">Edit</mat-option>\r\n            </ng-container>\r\n            <mat-option value=\"{{element.id}}:delete\" #delete (click)=\"goUserDelete(delete.value)\">Delete</mat-option>\r\n          </mat-select>\r\n        </mat-cell>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [style.padding-bottom]=\"row.hideme ? '134px': '0px'\"></mat-row>\r\n\r\n    </mat-table>\r\n    <div style=\"color:orange\" *ngIf=\"noDataAvailable\">\r\n      No Users are created.\r\n    </div>\r\n    <div style=\"color:orange\" *ngIf=\"noRecordsFound\">\r\n      No Hotel user record found.\r\n    </div>\r\n    <div class=\"paginationWrapper\">\r\n      <span class=\"pageCount\" *ngIf=\"!noDataAvailable\">\r\n        Page: {{(pageEvent) ? pageEvent.pageIndex + 1 : 1}} of {{ (pageEvent) ? Math.ceil(pageEvent.length/pageEvent.pageSize)\r\n      : Math.ceil(totalRecords/20) }}\r\n      </span>\r\n      <mat-paginator *ngIf=\"!noDataAvailable\" class=\"genericPagination\" (page)=\"pageEvent = $event\" #paginator [pageSize]=\"20\"\r\n                     [pageSizeOptions]=\"[5, 10, 20]\" >\r\n      </mat-paginator>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-list/hotel-user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePickerDateAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_backoffice_shared_services_user_data_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_backoffice_shared_dialogs_dialogs_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/dialogs/dialogs.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var DatePickerDateAdapter = (function (_super) {
    __extends(DatePickerDateAdapter, _super);
    function DatePickerDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerDateAdapter.prototype.format = function (date, displayFormat) {
        date.setMinutes((date.getTimezoneOffset() * -1));
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.toLocaleString('en-us', { month: 'long' });
            var year = date.getFullYear();
            return this._to2digit(day) + '-' + month.substring(0, 3) + '-' + year % 100;
        }
        else {
            return date.toDateString();
        }
    };
    DatePickerDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return DatePickerDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_2__angular_material_core__["u" /* NativeDateAdapter */]));

var HotelUserListComponent = (function () {
    function HotelUserListComponent(router, activatedRoute, userDataService, dialogsService, datepipe, snackBar) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userDataService = userDataService;
        this.dialogsService = dialogsService;
        this.datepipe = datepipe;
        this.snackBar = snackBar;
        this.edit = __WEBPACK_IMPORTED_MODULE_4__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_4__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_4__common_constants__["a" /* CONSTANTS */].operation.read;
        this.displayedColumns = ['firstName', 'hotels', 'designation', 'email', 'userApplicationRole', 'activationDate', 'isActive', 'actions'];
        this.hotel = {
            ' kind ': ' title ',
            'label': 'ADD_TITLE'
        };
        this.Math = Math;
    }
    HotelUserListComponent.prototype.ngOnInit = function () {
        this.getHotelUserList();
        this.hideme = {};
        this.isSearch = false;
        this.searchHotelUsers = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormGroup"]({
            startDate: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"](),
            endDate: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"](),
            searchText: new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormControl"]()
        });
    };
    HotelUserListComponent.prototype.getHotelUserList = function () {
        var _this = this;
        this.isSearch = false;
        this.userDataService.getHotelUsers().subscribe(function (mgUsersList) {
            _this.hotelUserList = mgUsersList;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_6__angular_material__["K" /* MatTableDataSource */](_this.hotelUserList);
            _this.totalRecords = _this.hotelUserList.length;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            if (mgUsersList.length === 0) {
                _this.noDataAvailable = true;
            }
            else {
                _this.noDataAvailable = false;
            }
        });
    };
    HotelUserListComponent.prototype.createHotelUser = function () {
        this.router.navigate(['../hotelusers'], { relativeTo: this.activatedRoute });
    };
    HotelUserListComponent.prototype.findHotelUser = function (filterValue, filterFrom, filterTo) {
        var _this = this;
        if (filterFrom !== null || filterTo !== null || (filterValue !== null && filterValue.length >= 3)) {
            this.isSearch = true;
        }
        if (filterFrom !== null) {
            filterFrom = this.datepipe.transform(filterFrom, 'yyyy-MM-dd');
        }
        if (filterTo !== null) {
            filterTo = this.datepipe.transform(filterTo, 'yyyy-MM-dd');
        }
        if (filterValue !== null) {
            filterValue = filterValue.trim();
            filterValue = filterValue.toLowerCase();
        }
        this.filteredData = new __WEBPACK_IMPORTED_MODULE_6__angular_material__["K" /* MatTableDataSource */](this.hotelUserList.filter(function (user) {
            var searchActivationDate = _this.datepipe.transform(user.activationDate, 'dd-MMM-yy hh:mm a');
            var activationDate = _this.datepipe.transform(user.activationDate, 'yyyy-MM-dd');
            if (filterValue !== null && (filterFrom === null && filterTo === null)) {
                return _this.filterHotelUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue);
            }
            else if (filterFrom !== null && (filterTo === null && filterValue === null)) {
                return activationDate >= filterFrom;
            }
            else if (filterTo !== null && (filterFrom === null && filterValue === null)) {
                return activationDate <= filterTo;
            }
            else if (filterValue === null && (filterFrom !== null && filterTo !== null)) {
                return filterFrom <= activationDate && activationDate <= filterTo;
            }
            else if (filterFrom === null && (filterValue !== null && filterTo !== null)) {
                return (_this.filterHotelUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue)) && activationDate <= filterTo;
            }
            else if (filterTo === null && (filterFrom !== null && filterValue !== null)) {
                return (_this.filterHotelUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue)) &&
                    activationDate >= filterFrom;
            }
            else if (filterFrom !== null && filterTo !== null && filterValue !== null) {
                return (_this.filterHotelUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue)) &&
                    (filterFrom <= activationDate && activationDate <= filterTo);
            }
        }));
        if (this.filteredData.data.length === 0) {
            this.noRecordsFound = true;
        }
        this.filteredData.paginator = this.paginator;
        this.filteredData.sort = this.sort;
    };
    HotelUserListComponent.prototype.filterHotelUser = function (user, filterValue) {
        this.isAppRoleData = false;
        this.isHotelData = false;
        for (var i = 0; i < user.userApplicationRole.length; i++) {
            if (user.userApplicationRole[i].roleName.toLowerCase().includes(filterValue)) {
                this.isAppRoleData = true;
                break;
            }
        }
        for (var j = 0; j < user.hotels.length; j++) {
            if (user.hotels[j].name.toLowerCase().includes(filterValue)) {
                this.isHotelData = true;
            }
        }
        return user.firstName.toLowerCase().includes(filterValue) ||
            user.lastName.toLowerCase().includes(filterValue) ||
            user.email.toLowerCase().includes(filterValue) ||
            user.designation.toLowerCase().includes(filterValue) ||
            this.isAppRoleData || this.isHotelData;
    };
    HotelUserListComponent.prototype.checkIsInputCleared = function () {
        this.paginator.page.emit();
        if (this.searchHotelUsers.get('searchText').value.length === 1 &&
            this.searchHotelUsers.get('startDate').value === null &&
            this.searchHotelUsers.get('endDate').value === null) {
            this.filteredData = new __WEBPACK_IMPORTED_MODULE_6__angular_material__["K" /* MatTableDataSource */](this.hotelUserList);
            this.filteredData.paginator = this.paginator;
            this.filteredData.sort = this.sort;
            this.isSearch = false;
            this.noRecordsFound = false;
        }
    };
    HotelUserListComponent.prototype.checkIsFromDateCleared = function () {
        this.paginator.page.emit();
        this.searchHotelUsers.get('startDate').setValue(null);
        if ((this.searchHotelUsers.get('searchText').value === null || this.searchHotelUsers.get('searchText').value === '') &&
            this.searchHotelUsers.get('endDate').value === null) {
            this.getHotelUserList();
        }
    };
    HotelUserListComponent.prototype.checkIsToDateCleared = function () {
        this.paginator.page.emit();
        this.searchHotelUsers.get('endDate').setValue(null);
        if ((this.searchHotelUsers.get('searchText').value === null || this.searchHotelUsers.get('searchText').value === '') &&
            this.searchHotelUsers.get('startDate').value === null) {
            this.getHotelUserList();
        }
    };
    HotelUserListComponent.prototype.sortData = function (sort) {
        var data = this.hotelUserList.slice();
        if (!sort.active || sort.direction === '') {
            this.dataSource.data = data.sort(function (a, b) {
                var isAsc = sort.direction === 'desc';
                return compare(a.activationDate, b.activationDate, isAsc);
            });
            return;
        }
        else {
            if (this.isSearch) {
                this.filteredData.data = this.filteredData.data.sort(function (a, b) {
                    var isAsc = sort.direction === 'asc';
                    switch (sort.active) {
                        // case 'name': return compare(a.firstName, b.firstName, isAsc);
                        case 'firstName': return compare(a.firstName, b.firstName, isAsc);
                        case 'email': return compare(a.email, b.email, isAsc);
                        case 'hotels':
                            return compare((a.hotels.length === 0) ? '' :
                                a.hotels[0].name, (b.hotels.length === 0) ? '' :
                                b.hotels[0].name, isAsc);
                        case 'designation': return compare(a.designation, b.designation, isAsc);
                        case 'isActive': return compare(a.isActive, b.isActive, isAsc);
                        case 'userApplicationRole':
                            return compare((a.userApplicationRole.length === 0) ? '' :
                                a.userApplicationRole[0].roleName, (b.userApplicationRole.length === 0) ? '' :
                                b.userApplicationRole[0].roleName, isAsc);
                        case 'activationDate': return compare(a.activationDate, b.activationDate, isAsc);
                        default: return 0;
                    }
                });
                this.filteredData.paginator = this.paginator;
            }
            this.dataSource.data = data.sort(function (a, b) {
                var isAsc = sort.direction === 'asc';
                switch (sort.active) {
                    // case 'name': return compare(a.firstName, b.firstName, isAsc);
                    case 'firstName': return compare(a.firstName.toLowerCase(), b.firstName.toLowerCase(), isAsc);
                    case 'email': return compare(a.email, b.email, isAsc);
                    case 'hotels':
                        return compare((a.hotels.length === 0) ? '' :
                            a.hotels[0].name, (b.hotels.length === 0) ? '' :
                            b.hotels[0].name, isAsc);
                    case 'designation': return compare(a.designation, b.designation, isAsc);
                    case 'isActive': return compare(a.isActive, b.isActive, isAsc);
                    case 'userApplicationRole':
                        return compare((a.userApplicationRole.length === 0) ? '' :
                            a.userApplicationRole[0].roleName, (b.userApplicationRole.length === 0) ? '' :
                            b.userApplicationRole[0].roleName, isAsc);
                    case 'activationDate': return compare(a.activationDate, b.activationDate, isAsc);
                    default: return 0;
                }
            });
            this.dataSource.paginator = this.paginator;
        }
    };
    HotelUserListComponent.prototype.goUserUpdate = function (value) {
        var val = value.split(':');
        var userId = val[0];
        this.operation = val[1];
        // routing for edit user based on hotel-user type
        var hotelUserType = val[2];
        if (hotelUserType === 'C') {
            this.router.navigate(['../hotelusers/hoteluserinfo', userId, this.operation.trim().toLowerCase()], { relativeTo: this.activatedRoute });
        }
        else if (hotelUserType === 'I') {
            this.router.navigate(['../hotelusers/individual', userId, this.operation.trim().toLowerCase()], { relativeTo: this.activatedRoute });
        }
        else if (hotelUserType === 'S') {
            this.router.navigate(['../hotelusers/supplieruser', userId, this.operation.trim().toLowerCase()], { relativeTo: this.activatedRoute });
        }
    };
    HotelUserListComponent.prototype.deleteHotelUser = function (userId) {
        var _this = this;
        this.userDataService.deleteHotelUser(userId).subscribe(function (data) {
            window.scrollTo(0, 0);
            _this.snackBar.open('The user is deleted successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_4__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top',
                panelClass: 'showSnackBar' });
            _this.getHotelUserList();
        });
    };
    HotelUserListComponent.prototype.goUserDelete = function (value) {
        var _this = this;
        var val = value.split(':');
        var userId = val[0];
        this.dialogsService
            .confirm('Confirm', 'Are you sure you want to delete this user?').subscribe(function (res) {
            _this.result = res;
            if (_this.result) {
                _this.deleteHotelUser(userId);
            }
            else {
                _this.actions = null;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_material__["v" /* MatPaginator */])
    ], HotelUserListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["H" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_material__["H" /* MatSort */])
    ], HotelUserListComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HotelUserListComponent.prototype, "_dateValue", void 0);
    HotelUserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-hotel-user-list',
            template: __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-list/hotel-user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-list/hotel-user-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_8__common_backoffice_shared_dialogs_dialogs_service__["a" /* DialogsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["c" /* DateAdapter */], useClass: DatePickerDateAdapter },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["f" /* MAT_DATE_FORMATS */], useValue: DATE_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_0__common_backoffice_shared_services_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_8__common_backoffice_shared_dialogs_dialogs_service__["a" /* DialogsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["F" /* MatSnackBar */]])
    ], HotelUserListComponent);
    return HotelUserListComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/individual-hotel-user-info/individual-hotel-user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".controlButtons {\r\n  padding-top: 30px !important;\r\n  padding-bottom: 28px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/individual-hotel-user-info/individual-hotel-user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <form [formGroup]=\"individualHotelForm\" (ngSubmit)=\"saveIndividualHotelUserDetails()\">\r\n    <div class=\"row customeRow\">\r\n      <div class=\"form-group col-md-4 col-lg-3 mb-0 mt-2\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Hotel Name - ID\" name=\"Hotel Name - ID\" formControlName=\"hotelId\" multiple required>\r\n            <mat-option *ngFor=\"let hotel of hotelList | orderBy: {property:'hotelName',direction: direction}\" [value]=\"hotel.hotelId\">{{hotel.hotelName}} - {{hotel.hotelCode}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div class=\"row customeRow\">\r\n      <div class=\"col-md-2 col-lg-1\">\r\n        <div class=\"userImageSection\">\r\n          <mat-icon class=\"userImage\">account_circle</mat-icon>\r\n          <div class=\"image-upload\">\r\n            <label for=\"file-input\">\r\n              <img src=\"assets/uploadPhoto.png\" title=\"Upload Image\" />\r\n            </label>\r\n            <input id=\"file-input\" type=\"file\" />\r\n          </div>\r\n          <button class=\"deletePhoto\" mat-raised-button title=\"Delete Image\">\r\n            <i class=\"fa fa-times-thin\"></i>\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row customeRow\">\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"First Name\" id=\"firstName\" formControlName=\"firstName\" required />\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Last Name\" id=\"lastName\" formControlName=\"lastName\" required />\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Designation\" formControlName=\"designationId\" required>\r\n            <mat-option [value]=\"null\">Select</mat-option>\r\n            <mat-option *ngFor=\"let designation of designationList | orderBy:{property:'title',direction: direction}\" [value]=\"designation.designationId\">{{designation.title}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\">\r\n\r\n      <div class=\"form-group col-md-4 col-lg-3 mb-0\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Email ID\" id=\"emailID\" formControlName=\"email\" pattern=\"\\w+@\\w+\\.\\w+(,\\s*\\w+@\\w+\\.\\w+)*\" required />\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4 col-lg-3 mb-0\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Role\" formControlName=\"extranetRoleId\" required>\r\n            <mat-option [value]=\"null\">Select</mat-option>\r\n            <mat-option *ngFor=\"let role of roleList| orderBy:{property:'name',direction: direction}\" [value]=\"role.id\">{{role.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\">\r\n      <div class=\"col-md-4 col-lg-3 mt-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [matDatepicker]=\"activationDate\" placeholder=\"Activation Date\" formControlName=\"activationDate\"\r\n                  [min]=\"(operation === create) ?  todaysDate : minDate\" required>\r\n          <mat-datepicker-toggle matSuffix [for]=\"activationDate\">\r\n            <mat-icon matDatepickerToggleIcon>\r\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n            </mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #activationDate></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"operation == 'edit'\">\r\n        <div class=\"col-md-4 col-lg-3 mt-3\">\r\n            <div class=\"form-check form-check-inline\">\r\n              <mat-checkbox formControlName=\"inActivateUser\" [checked]=\"isChecked\" (change)= \"toggleDeactivationDate($event)\" >Inactivate User</mat-checkbox>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\" *ngIf=\"isChecked\">\r\n      <div class=\"col-md-4 col-lg-3 mt-4 pt-2 mb-0\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [matDatepicker]=\"deActivationDate\" placeholder=\"Inactivation Date\" formControlName=\"deActivationDate\"\r\n          [min]=\"(operation === edit) ? todaysDate : minDate\" [required] = \"isInactiveDateRequired\" >\r\n          <mat-datepicker-toggle matSuffix [for]=\"deActivationDate\">\r\n            <mat-icon matDatepickerToggleIcon>\r\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n            </mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #deActivationDate></mat-datepicker>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 controlButtons pl-3\">\r\n        <button title=\"Save\" type=\"submit\" class=\"genericButton activeButton mat-primary mr-1\" [disabled]=\"!individualHotelForm.valid\" mat-raised-button>Save</button>\r\n        <button title=\"Cancel\" type=\"submit\" class=\"genericButton defaultButton\" mat-raised-button (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/individual-hotel-user-info/individual-hotel-user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePickerDateAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndividualHotelUserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_backoffice_shared_services_backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_user_data_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_shared_services_user_profile_service__ = __webpack_require__("../../../../../src/app/common/shared/services/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_constants__ = __webpack_require__("../../../../../src/app/backoffice/common/constants.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var DatePickerDateAdapter = (function (_super) {
    __extends(DatePickerDateAdapter, _super);
    function DatePickerDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerDateAdapter.prototype.format = function (date, displayFormat) {
        date.setMinutes((date.getTimezoneOffset() * -1));
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.toLocaleString('en-us', { month: 'long' });
            var year = date.getFullYear();
            return this._to2digit(day) + '-' + month.substring(0, 3) + '-' + year % 100;
        }
        else {
            return date.toDateString();
        }
    };
    DatePickerDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return DatePickerDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_6__angular_material__["P" /* NativeDateAdapter */]));

var IndividualHotelUserInfoComponent = (function () {
    function IndividualHotelUserInfoComponent(backOfficeLookUpService, activatedRoute, userDataService, snackBar, router, userProfileService, cd) {
        this.backOfficeLookUpService = backOfficeLookUpService;
        this.activatedRoute = activatedRoute;
        this.userDataService = userDataService;
        this.snackBar = snackBar;
        this.router = router;
        this.userProfileService = userProfileService;
        this.cd = cd;
        this.edit = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.read;
        this.mgHotelViewModel = {};
        this.todaysDate = new Date();
        this.isInactiveDateRequired = false;
    }
    IndividualHotelUserInfoComponent.prototype.ngOnInit = function () {
        this.direction = 1;
        this.operation = this.activatedRoute.snapshot.params['operation'];
        this.userId = this.activatedRoute.snapshot.params['id'];
        this.individualHotelForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            hotelId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            designationId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            extranetRoleId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            activationDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            inActivateUser: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            deActivationDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('')
        });
        this.getDesignations();
        this.getRoles();
        this.getHotels();
        if (this.operation.toLowerCase().trim() === this.edit) {
            this.individualHotelForm.controls.activationDate.disable();
            this.individualHotelForm.controls.deActivationDate.disable();
            this.getIndividualHotelUser(this.userId);
        }
    };
    IndividualHotelUserInfoComponent.prototype.getDesignations = function () {
        this.designationList = this.activatedRoute.snapshot.data['designations'];
    };
    IndividualHotelUserInfoComponent.prototype.getRoles = function () {
        this.roleList = this.activatedRoute.snapshot.data['roles'];
    };
    IndividualHotelUserInfoComponent.prototype.getHotels = function () {
        this.hotelList = this.activatedRoute.snapshot.data['hotels'];
    };
    IndividualHotelUserInfoComponent.prototype.toggleDeactivationDate = function (event) {
        this.isChecked = event.checked;
        if (event.checked === true) {
            this.isInactiveDateRequired = true;
            this.individualHotelForm.controls.deActivationDate.enable();
        }
        else {
            this.isInactiveDateRequired = false;
            this.individualHotelForm.controls.deActivationDate.disable();
        }
        this.cd.detectChanges();
    };
    IndividualHotelUserInfoComponent.prototype.saveIndividualHotelUserDetails = function () {
        var _this = this;
        var individualHotelUser = Object.assign({}, this.mgHotelViewModel, this.individualHotelForm.value);
        individualHotelUser.updatedBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
            this.userProfileService.GetBasicUserInfo().LastName;
        individualHotelUser.userName = individualHotelUser.email;
        individualHotelUser.hotelUserType = __WEBPACK_IMPORTED_MODULE_8__common_constants__["a" /* BACKOFFICECONSTANTS */].hotelUserType.individual;
        if (this.operation === this.create) {
            individualHotelUser.createdBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                this.userProfileService.GetBasicUserInfo().LastName;
            this.userDataService.createHotelUser(individualHotelUser)
                .subscribe(function (data) {
                if (data.succeeded === true) {
                    window.scrollTo(0, 0);
                    _this.snackBar.open('New user is created successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top',
                        panelClass: 'showSnackBar' });
                    _this.router.navigate(['/usermgmt/hoteluserslist']);
                }
                else {
                    // TODO: Need to check how we are doing error handling.
                    _this.snackBar.open('Error occourred while saving Agent. ' + data.errors[0].description, '', { duration: __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                }
            });
        }
        else if (this.operation === this.edit) {
            individualHotelUser.createdBy = this.mgHotelViewModel.createdBy;
            individualHotelUser.activationDate = this.mgHotelViewModel.activationDate;
            if (this.isInactiveDateRequired) {
                this.isChecked = true;
                individualHotelUser.inActivationType = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].inActiveType.permanent;
            }
            this.userDataService.updateHotelUser(this.userId, individualHotelUser)
                .subscribe(function (data) {
                if (data.succeeded === true) {
                    window.scrollTo(0, 0);
                    _this.snackBar.open('The user is updated successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top',
                        panelClass: 'showSnackBar' });
                    _this.router.navigate(['/usermgmt/hoteluserslist']);
                }
                else {
                    // TODO: Need to check how we are doing error handling.
                    _this.snackBar.open('Error occourred while saving Agent. ' + data.errors[0].description, '', { duration: __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                }
            });
        }
    };
    IndividualHotelUserInfoComponent.prototype.cancel = function () {
        window.scrollTo(0, 0);
        this.router.navigate(['/usermgmt/hoteluserslist']);
    };
    IndividualHotelUserInfoComponent.prototype.getIndividualHotelUser = function (userId) {
        var _this = this;
        this.userDataService.getHotelUserById(userId).subscribe(function (individualHotelUserData) {
            _this.mgHotelViewModel.createdBy = individualHotelUserData.createdBy;
            _this.mgHotelViewModel.activationDate = individualHotelUserData.activationDate;
            _this.individualHotelForm.get('firstName').setValue(individualHotelUserData.firstName);
            _this.individualHotelForm.get('lastName').setValue(individualHotelUserData.lastName);
            _this.individualHotelForm.get('email').setValue(individualHotelUserData.email);
            _this.individualHotelForm.get('extranetRoleId').setValue(individualHotelUserData.extranetRoleId);
            _this.individualHotelForm.get('designationId').setValue(individualHotelUserData.designationId);
            _this.individualHotelForm.get('activationDate').setValue(individualHotelUserData.activationDate);
            _this.individualHotelForm.get('hotelId').setValue(individualHotelUserData.hotelId);
            _this.isChecked = false;
            if (individualHotelUserData.deActivationDate != null) {
                _this.isInactiveDateRequired = true;
                _this.isChecked = true;
                _this.individualHotelForm.controls.deActivationDate.enable();
                _this.individualHotelForm.get('deActivationDate').setValue(individualHotelUserData.deActivationDate);
            }
        });
    };
    IndividualHotelUserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-individual-hotel-user-info',
            template: __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/individual-hotel-user-info/individual-hotel-user-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/individual-hotel-user-info/individual-hotel-user-info.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* DateAdapter */], useClass: DatePickerDateAdapter },
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: DATE_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common_backoffice_shared_services_backoffice_lookup__["a" /* BackofficeLookupService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_7__common_shared_services_user_profile_service__["a" /* UserProfileService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], IndividualHotelUserInfoComponent);
    return IndividualHotelUserInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/supplier-user-info/supplier-user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".controlButtons {\r\n  padding-top: 30px !important;\r\n  padding-bottom: 28px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/supplier-user-info/supplier-user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <form [formGroup]=\"supplierHotelForm\" (ngSubmit)=\"saveSupplierUserDetails()\">\r\n\r\n    <div class=\"row customeRow alignItemCenter\">\r\n      <div class=\"form-group col-md-4 col-lg-3 mt-2 mb-0 mt-1\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Supplier\" name=\"Supplier\" formControlName=\"partnerList\" (change)=\"getHotelsByPartnerId(supplierHotelForm.get('partnerList').value);\"\r\n            required>\r\n            <mat-option [value]=\"null\"> Select </mat-option>\r\n            <mat-option *ngFor=\"let hotel of partnerList\" [value]=\"hotel.hotelChainId\">{{hotel.hotelChainName}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group col-md-4 col-lg-3 mt-2 mb-0 mt-1\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Hotel Name and Code\" name=\"Hotel Name and Code\" formControlName=\"hotelId\" (change)=\"selectAllHotels();\" multiple required>\r\n            <mat-option [value]=\"null\" *ngIf=\"isPartnerHotelList == true\"> All </mat-option>\r\n            <mat-option *ngFor=\"let hotelname of partnerHotelList\" [value]=\"hotelname.hotelId\">\r\n              {{hotelname.hotelName}} - {{hotelname.hotelCode}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row customeRow\">\r\n      <div class=\"col-md-2 col-lg-1\">\r\n        <div class=\"userImageSection\">\r\n          <mat-icon class=\"userImage\">account_circle</mat-icon>\r\n          <div class=\"image-upload\">\r\n            <label for=\"file-input\">\r\n              <img src=\"assets/uploadPhoto.png\" title=\"Upload Image\" />\r\n            </label>\r\n            <input id=\"file-input\" type=\"file\" />\r\n          </div>\r\n          <button class=\"deletePhoto\" mat-raised-button title=\"Delete Image\">\r\n            <i class=\"fa fa-times-thin\"></i>\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\">\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"First Name\" id=\"firstName\" formControlName=\"firstName\" required />\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Last Name\" id=\"lastName\" formControlName=\"lastName\" required />\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n          <mat-form-field>\r\n            <mat-select placeholder=\"Designation\" formControlName=\"designationId\" required>\r\n              <mat-option [value]=\"null\">Select</mat-option>\r\n              <mat-option *ngFor=\"let designation of designationList\" [value]=\"designation.designationId\">{{designation.title}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"row customeRow\">\r\n      <div class=\"form-group col-md-4 col-lg-3 mb-0\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Email ID\" id=\"emailID\" formControlName=\"email\" pattern=\"\\w+@\\w+\\.\\w+(,\\s*\\w+@\\w+\\.\\w+)*\" required\r\n          />\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group col-md-4 col-lg-3 mb-0\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Role\" formControlName=\"extranetRoleId\" required>\r\n            <mat-option [value]=\"null\">Select</mat-option>\r\n            <mat-option *ngFor=\"let role of roleList\" [value]=\"role.id\">{{role.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\">\r\n      <div class=\"col-md-4 col-lg-3 mt-3\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [matDatepicker]=\"activationDate\" placeholder=\"Activation Date\" formControlName=\"activationDate\" [min]=\"(operation === create) ?  todaysDate : minDate\"\r\n            required>\r\n          <mat-datepicker-toggle matSuffix [for]=\"activationDate\">\r\n            <mat-icon matDatepickerToggleIcon>\r\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n            </mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #activationDate></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"operation == 'edit'\">\r\n      <div class=\"col-md-4 col-lg-3 mt-3\">\r\n        <div class=\"form-check form-check-inline\">\r\n          <mat-checkbox formControlName=\"inActivateUser\" [checked]=\"isChecked\" (change)=\"toggleDeactivationDate($event)\">Inactivate User</mat-checkbox>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow\" *ngIf=\"isChecked\">\r\n      <div class=\"col-md-4 col-lg-3 mt-4 pt-2 mb-0\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput [matDatepicker]=\"deActivationDate\" placeholder=\"Inactivation Date\" formControlName=\"deActivationDate\" [min]=\"(operation === edit) ? todaysDate : minDate\"\r\n            [required]=\"isInactiveDateRequired\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"deActivationDate\">\r\n            <mat-icon matDatepickerToggleIcon>\r\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n            </mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #deActivationDate></mat-datepicker>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 controlButtons pl-3\">\r\n        <button title=\"Save\" type=\"submit\" class=\"genericButton activeButton mat-primary mr-1\" [disabled]=\"!supplierHotelForm.valid\" mat-raised-button>Save</button>\r\n        <button title=\"Cancel\" type=\"submit\" class=\"genericButton defaultButton\" mat-raised-button (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/hotel-user/supplier-user-info/supplier-user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePickerDateAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierUserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_backoffice_shared_services_backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_constants__ = __webpack_require__("../../../../../src/app/backoffice/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_shared_services_user_profile_service__ = __webpack_require__("../../../../../src/app/common/shared/services/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_backoffice_shared_services_user_data_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/user-data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var DatePickerDateAdapter = (function (_super) {
    __extends(DatePickerDateAdapter, _super);
    function DatePickerDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerDateAdapter.prototype.format = function (date, displayFormat) {
        date.setMinutes((date.getTimezoneOffset() * -1));
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.toLocaleString('en-us', { month: 'long' });
            var year = date.getFullYear();
            return this._to2digit(day) + '-' + month.substring(0, 3) + '-' + year % 100;
        }
        else {
            return date.toDateString();
        }
    };
    DatePickerDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return DatePickerDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_7__angular_material__["P" /* NativeDateAdapter */]));

var SupplierUserInfoComponent = (function () {
    function SupplierUserInfoComponent(backOfficeLookUpService, activatedRoute, userProfileService, router, snackBar, userDataService, cd) {
        this.backOfficeLookUpService = backOfficeLookUpService;
        this.activatedRoute = activatedRoute;
        this.userProfileService = userProfileService;
        this.router = router;
        this.snackBar = snackBar;
        this.userDataService = userDataService;
        this.cd = cd;
        this.edit = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.read;
        this.mgHotelViewModel = {};
        this.isInactiveDateRequired = false;
        this.todaysDate = new Date();
    }
    SupplierUserInfoComponent.prototype.ngOnInit = function () {
        this.userId = this.activatedRoute.snapshot.params['id'];
        this.operation = this.activatedRoute.snapshot.params['operation'];
        this.allHotelIds = [''];
        this.supplierHotelForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            partnerList: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            hotelId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"],
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            designationId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            extranetRoleId: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            activationDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            inActivateUser: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            deActivationDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('')
        });
        this.getDesignations();
        this.getRoles();
        this.getHotelPartners();
        if (this.operation.toLowerCase().trim() === this.edit) {
            this.supplierHotelForm.controls.activationDate.disable();
            this.supplierHotelForm.controls.deActivationDate.disable();
            this.getSupplierHotelUser(this.userId);
        }
    };
    SupplierUserInfoComponent.prototype.getDesignations = function () {
        this.designationList = this.activatedRoute.snapshot.data['designations'];
    };
    SupplierUserInfoComponent.prototype.getRoles = function () {
        this.roleList = this.activatedRoute.snapshot.data['roles'];
    };
    SupplierUserInfoComponent.prototype.getHotelPartners = function () {
        this.partnerList = this.activatedRoute.snapshot.data['suppliers'];
    };
    // fetch hotels according to partnerId
    SupplierUserInfoComponent.prototype.getHotelsByPartnerId = function (partnerId) {
        var _this = this;
        if (partnerId !== null) {
            this.backOfficeLookUpService.getHotelsByPartnerId(partnerId).subscribe(function (data) {
                _this.partnerHotelList = data;
                _this.isPartnerHotelList = (data.length > 1) ? true : false;
            });
        }
    };
    SupplierUserInfoComponent.prototype.toggleDeactivationDate = function (event) {
        this.isChecked = event.checked;
        if (event.checked === true) {
            this.isInactiveDateRequired = true;
            this.supplierHotelForm.controls.deActivationDate.enable();
        }
        else {
            this.isInactiveDateRequired = false;
            this.supplierHotelForm.controls.deActivationDate.disable();
        }
        this.cd.detectChanges();
    };
    SupplierUserInfoComponent.prototype.saveSupplierUserDetails = function () {
        var _this = this;
        var SupplierUser = Object.assign({}, this.mgHotelViewModel, this.supplierHotelForm.value);
        SupplierUser.updatedBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
            this.userProfileService.GetBasicUserInfo().LastName;
        SupplierUser.userName = SupplierUser.email;
        SupplierUser.hotelUserType = __WEBPACK_IMPORTED_MODULE_5__common_constants__["a" /* BACKOFFICECONSTANTS */].hotelUserType.supplier;
        if (this.operation === this.create) {
            SupplierUser.createdBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                this.userProfileService.GetBasicUserInfo().LastName;
            this.userDataService.createHotelUser(SupplierUser)
                .subscribe(function (data) {
                if (data.succeeded === true) {
                    window.scrollTo(0, 0);
                    _this.snackBar.open('New Supplier is created successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top',
                        panelClass: 'showSnackBar' });
                    _this.router.navigate(['/usermgmt/hoteluserslist']);
                }
                else {
                    // TODO: Need to check how we are doing error handling.
                    _this.snackBar.open('Error occourred while saving Supplier. ' + data.errors[0].description, '', { duration: __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                }
            });
        }
        else if (this.operation === this.edit) {
            SupplierUser.createdBy = this.mgHotelViewModel.createdBy;
            SupplierUser.activationDate = this.mgHotelViewModel.activationDate;
            if (this.isInactiveDateRequired) {
                this.isChecked = true;
                SupplierUser.inActivationType = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].inActiveType.permanent;
            }
            this.userDataService.updateHotelUser(this.userId, SupplierUser)
                .subscribe(function (data) {
                if (data.succeeded === true) {
                    window.scrollTo(0, 0);
                    _this.snackBar.open('The Supplier is updated successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top',
                        panelClass: 'showSnackBar' });
                    _this.router.navigate(['/usermgmt/hoteluserslist']);
                }
                else {
                    // TODO: Need to check how we are doing error handling.
                    _this.snackBar.open('Error occourred while saving Supplier. ' + data.errors[0].description, '', { duration: __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                }
            });
        }
    };
    SupplierUserInfoComponent.prototype.cancel = function () {
        window.scrollTo(0, 0);
        this.router.navigate(['/usermgmt/hoteluserslist']);
    };
    SupplierUserInfoComponent.prototype.selectAllHotels = function () {
        // fetch all hotelIds from hotelsList
        if (this.partnerHotelList !== null) {
            this.allHotelIds.splice(0, this.allHotelIds.length);
            for (var b = 0; b < this.partnerHotelList.length; b++) {
                this.allHotelIds[b] = this.partnerHotelList[b].hotelId;
            }
            // select/deselect all hotels
            if (this.supplierHotelForm.value.hotelId.length !== 0) {
                if (this.supplierHotelForm.value.hotelId[0] == null && this.supplierHotelForm.value.hotelId.length !==
                    (this.allHotelIds.length + 1)) {
                    this.supplierHotelForm.patchValue({ hotelId: this.allHotelIds });
                }
                else if (this.supplierHotelForm.value.hotelId.length === (this.allHotelIds.length + 1)) {
                    this.supplierHotelForm.patchValue({ hotelId: null });
                }
            }
        }
    };
    SupplierUserInfoComponent.prototype.getSupplierHotelUser = function (userId) {
        var _this = this;
        this.userDataService.getHotelUserById(userId).subscribe(function (supplierHotelUserData) {
            _this.mgHotelViewModel.createdBy = supplierHotelUserData.createdBy;
            _this.mgHotelViewModel.activationDate = supplierHotelUserData.activationDate;
            _this.supplierHotelForm.get('firstName').setValue(supplierHotelUserData.firstName);
            _this.supplierHotelForm.get('lastName').setValue(supplierHotelUserData.lastName);
            _this.supplierHotelForm.get('email').setValue(supplierHotelUserData.email);
            _this.supplierHotelForm.get('extranetRoleId').setValue(supplierHotelUserData.extranetRoleId);
            _this.supplierHotelForm.get('designationId').setValue(supplierHotelUserData.designationId);
            _this.supplierHotelForm.get('activationDate').setValue(supplierHotelUserData.activationDate);
            _this.supplierHotelForm.get('partnerList').setValue(supplierHotelUserData.chainId);
            _this.getHotelsByPartnerId(supplierHotelUserData.chainId);
            _this.supplierHotelForm.get('hotelId').setValue(supplierHotelUserData.hotelId);
            _this.isChecked = false;
            if (supplierHotelUserData.deActivationDate != null) {
                _this.isInactiveDateRequired = true;
                _this.isChecked = true;
                _this.supplierHotelForm.controls.deActivationDate.enable();
                _this.supplierHotelForm.get('deActivationDate').setValue(supplierHotelUserData.deActivationDate);
            }
        });
    };
    SupplierUserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-supplier-user-info',
            template: __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/supplier-user-info/supplier-user-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/supplier-user-info/supplier-user-info.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* DateAdapter */], useClass: DatePickerDateAdapter },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: DATE_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common_backoffice_shared_services_backoffice_lookup__["a" /* BackofficeLookupService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_6__common_shared_services_user_profile_service__["a" /* UserProfileService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_8__common_backoffice_shared_services_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], SupplierUserInfoComponent);
    return SupplierUserInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-info/mg-user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.transparent-circle span:before {\r\n  top: -11.5px;\r\n  right: 3px;\r\n}\r\n\r\n.controlButtons {\r\n  padding-top: 30px !important;\r\n  padding-bottom: 28px !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-info/mg-user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-4\">\r\n  <div class=\"customBreadcrumb mb-4\">\r\n    <span>MG </span>\r\n    <span *ngIf=\"operation == 'create'\">&gt; Create New MG User</span>\r\n    <span *ngIf=\"operation == 'edit'\">&gt; Edit MG User</span>\r\n  </div>\r\n  <h1 *ngIf=\"operation == 'create'\" class=\"mainHeading mb-2 customBreadcrumb borderBottomNone\">Create New User<span class=\"mandatoryInfo float-right\">Indicates Mandatory Fields</span></h1>\r\n  <h1 *ngIf=\"operation == 'edit'\" class=\"mainHeading mb-2 customBreadcrumb borderBottomNone\">Edit User<span class=\"mandatoryInfo float-right\">Indicates Mandatory Fields</span></h1>\r\n  <form [formGroup]=\"mgUserForm\" (ngSubmit)=\"saveUser()\">\r\n    <div class=\"row customeRow\">\r\n      <div class=\"col-md-2 col-lg-1\">\r\n        <div class=\"userImageSection\">\r\n          <mat-icon class=\"userImage\">account_circle</mat-icon>\r\n          <div class=\"image-upload\">\r\n            <label for=\"file-input\">\r\n              <img src=\"assets/uploadPhoto.png\" title=\"Upload Image\" />\r\n            </label>\r\n            <input id=\"file-input\" type=\"file\" />\r\n          </div>\r\n          <button class=\"deletePhoto\" mat-raised-button title=\"Delete Image\">\r\n            <i class=\"fa fa-times-thin\"></i>\r\n          </button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow formSections p-0 borderBottomNone\">\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"First Name\" formControlName=\"firstName\" id=\"firstName\" required />\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Last Name\" formControlName=\"lastName\" id=\"lastName\" required />\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group pt-2 col-md-4 col-lg-3\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Employee ID\" formControlName=\"employeeId\" id=\"employeeID\" required />\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow formSections p-0 borderBottomNone\">\r\n\r\n      <div class=\"form-group col-md-4 col-lg-3\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Email ID\" formControlName=\"email\" id=\"email\" pattern=\"\\w+@\\w+\\.\\w+(,\\s*\\w+@\\w+\\.\\w+)*\" required />\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"form-group col-md-4 col-lg-3\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Department(s)\" name=\"department\" formControlName=\"departments\" multiple required>\r\n            <mat-option *ngFor=\"let department of departmentList\" [value]=\"department.id\">{{department.name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <h6 class=\"blackText mavenProMedium pt-3\">Please Select Application & Role</h6>\r\n    <div formArrayName=\"userApplicationRole\" *ngFor=\"let appRole of userApplicationRole.controls; let i =index\">\r\n      <div [formGroupName]=\"i\">    \r\n       \r\n          <div class=\"row formSections p-0 borderBottomNone alignItemCenter\">\r\n            <div class=\"col-md-8\">\r\n              <div class=\"blueBackground d-flex pt-4 pl-2\">\r\n                <div class=\"row pb-1\">\r\n                <div class=\"form-group ml-4 pl-1 pr-0 col-md-5 col-lg-3 mb-0\">\r\n                  <mat-form-field>\r\n                    <mat-select formControlName=\"applicationId\" placeholder=\"Application\" (change)=\"getRolesForApplication(i)\" required>\r\n                      <mat-option [value]=\"null\">Select</mat-option>\r\n                      <ng-container *ngFor=\"let app of applicationList\">\r\n                        <mat-option [value]=\"app.id\">{{app.name}}</mat-option>\r\n                      </ng-container>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                 \r\n                </div>\r\n                <div class=\"form-group pl-0 pr-0 ml-5 col-md-5 col-lg-3 mb-0\">\r\n                  <mat-form-field>\r\n                    <mat-select formControlName=\"roleId\" placeholder=\"Roles\" required>\r\n                      <mat-option [value]=\"null\">Select</mat-option>\r\n                      <ng-container *ngFor=\"let role of this.appRolesListArray[i] \">\r\n                        <mat-option [value]=\"role.id\">{{role.name}}</mat-option>\r\n                      </ng-container>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  \r\n                </div>\r\n                <div class=\"col-md-2 ml-5 pt-1 text-right\">\r\n                  <ng-container *ngIf=\"i > 0\">\r\n                    <span class=\"btn transparent-circle mr-3\" title=\"Delete\" (click)=\"confirmDeleteAppRole(i)\"><i aria-hidden=\"true\" class=\"fa fa-times-thin\"></i></span>\r\n                  </ng-container>\r\n                  <span class=\"btn transparent-circle\" title=\"Add\" [hidden]='isMaxLength' (click)=\"addAppRole()\"><span></span></span>\r\n                </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>      \r\n  </div>\r\n</div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 pt-2 \">\r\n        <mat-error *ngIf=\"mgUserForm.get('userApplicationRole').errors && mgUserForm.get('userApplicationRole').errors.ValidateAppRole\">\r\n          This app type is already selected.\r\n        </mat-error>\r\n        <mat-error *ngIf=\"mgUserForm.get('userApplicationRole').errors && mgUserForm.get('userApplicationRole').errors.ValidateAppRoleNotNull\">\r\n          Role needs to be selected\r\n        </mat-error>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row customeRow formSections p-0 borderBottomNone\">\r\n      <div class=\"form-group col-md-4 col-lg-3 pt-2 mb-0 mt-3 pt-3\">\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"activationDate\" placeholder=\"Activation Date\" formControlName=\"activationDate\" [min]=\"todaysDate\" required>\r\n          <mat-datepicker-toggle matSuffix [for]=\"activationDate\">\r\n            <mat-icon matDatepickerToggleIcon>\r\n              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n            </mat-icon>\r\n          </mat-datepicker-toggle>\r\n          <mat-datepicker #activationDate></mat-datepicker>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"operation == 'edit'\" class=\"row customeRow formSections p-0 borderBottomNone\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"row customeRow\">\r\n          <div class=\"form-group col-md-4 col-lg-3 mb-3 mt-3\">\r\n            <mat-checkbox [checked]=\"isInactivateUser\" (change)=\"showHideInactiationDatesSection($event)\">Inactivate User</mat-checkbox>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"isInactivateUser\">\r\n          <div class=\"pl-2 ml-2 form-group col-md-4 col-lg-3 mb-0\">\r\n            <mat-radio-group class=\"d-flex\" (change)=\"toggleInactiveUserType($event)\">\r\n              <mat-radio-button value=\"T\" [checked]=\"inactiveType == 'T'\">Temporary</mat-radio-button>\r\n              <mat-radio-button value=\"P\" [checked]=\"inactiveType == 'P'\">Permanent</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"isInactivateUser && inactiveType == 'T'\">\r\n          <div class=\"pl-2 form-group col-md-4 col-lg-3 mb-0\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 mt-3 pt-2\">\r\n                <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"inactiveFromDate\" placeholder=\"Inactive From\" formControlName=\"temporaryInActivationDate\" [min]=\"todaysDate\" (dateInput)=\"inActiveFromDateChange('input', $event)\" (dateChange)=\"inActiveFromDateChange('change', $event)\" [required]=\"inactiveType == 'T'\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"inactiveFromDate\">\r\n                    <mat-icon matDatepickerToggleIcon>\r\n                      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                    </mat-icon>\r\n                  </mat-datepicker-toggle>\r\n                  <mat-datepicker #inactiveFromDate></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-md-6 mt-3 pt-2\">\r\n                <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"inactiveToDate\" placeholder=\"Inactive To\" formControlName=\"temporaryActivationDate\" [min]=\"inactiveToMinDate\" [required]=\"inactiveType == 'T'\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"inactiveToDate\">\r\n                    <mat-icon matDatepickerToggleIcon>\r\n                      <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                    </mat-icon>\r\n                  </mat-datepicker-toggle>\r\n                  <mat-datepicker #inactiveToDate></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\" *ngIf=\"isInactivateUser && inactiveType == 'P'\">\r\n          <div class=\"ml-3 mt-3 form-group col-md-4 col-lg-3 mb-0\">\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"inactivationDate\" placeholder=\"Inactivation Date\" formControlName=\"deActivationDate\" [min]=\"todaysDate\" [required]=\"inactiveType == 'P'\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"inactivationDate\">\r\n                <mat-icon matDatepickerToggleIcon>\r\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                </mat-icon>\r\n              </mat-datepicker-toggle>\r\n              <mat-datepicker #inactivationDate></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 controlButtons pl-3\">\r\n        <button title=\"Save\" type=\"submit\" class=\"genericButton activeButton mat-primary mr-1\" mat-raised-button [disabled]=\"!mgUserForm.valid\">Save</button>\r\n        <button title=\"Cancel\" type=\"button\" class=\"genericButton defaultButton\" mat-raised-button (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-info/mg-user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePickerDateAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MgUserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_user_data_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_backoffice_shared_services_backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_shared_services_user_profile_service__ = __webpack_require__("../../../../../src/app/common/shared/services/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__extranet_common_extranet_shared_dialogs_dialogs_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/dialogs/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_constants__ = __webpack_require__("../../../../../src/app/backoffice/common/constants.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var DatePickerDateAdapter = (function (_super) {
    __extends(DatePickerDateAdapter, _super);
    function DatePickerDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerDateAdapter.prototype.format = function (date, displayFormat) {
        date.setMinutes((date.getTimezoneOffset() * -1));
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.toLocaleString('en-us', { month: 'long' });
            var year = date.getFullYear();
            return this._to2digit(day) + '-' + month.substring(0, 3) + '-' + year % 100;
        }
        else {
            return date.toDateString();
        }
    };
    DatePickerDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return DatePickerDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_4__angular_material__["P" /* NativeDateAdapter */]));

function ValidateAppRole(control) {
    var appRoleList = control;
    if ((appRoleList.value !== undefined) && (appRoleList.value !== null) &&
        (appRoleList.value.length > 0)) {
        var appList_1 = [];
        var appRoleArray_1 = [];
        appRoleList.value.forEach(function (element) {
            appList_1.push(element.applicationId);
            appRoleArray_1.push({ applicationId: element.applicationId, roleId: element.roleId });
        });
        var sorterAppList = appList_1.sort();
        var duplicateApp = false;
        for (var i = 0; i < sorterAppList.length - 1; i++) {
            if (sorterAppList[i + 1] != null && sorterAppList[i] != null) {
                if (sorterAppList[i + 1] === sorterAppList[i]) {
                    return { 'ValidateAppRole': true };
                }
            }
        }
        for (var i = 0; i < appRoleArray_1.length; i++) {
            if (appRoleArray_1[i] != null) {
                if (appRoleArray_1[i].applicationId !== null && appRoleArray_1[i].roleId === null) {
                    return { 'ValidateAppRoleNotNull': true };
                }
            }
        }
    }
    return null;
}
var MgUserInfoComponent = (function () {
    function MgUserInfoComponent(router, activatedRoute, cd, snackBar, userDataService, backofficeLookupService, userProfileService, dialogsService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.cd = cd;
        this.snackBar = snackBar;
        this.userDataService = userDataService;
        this.backofficeLookupService = backofficeLookupService;
        this.userProfileService = userProfileService;
        this.dialogsService = dialogsService;
        this.edit = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.read;
        this.temporary = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].inActiveType.temporary;
        this.permanent = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].inActiveType.permanent;
        this.mgUserViewModel = {};
        this.appRolesListArray = Array();
        this.todaysDate = new Date();
        this.inactiveToMinDate = new Date();
        this.mgUser = __WEBPACK_IMPORTED_MODULE_9__common_constants__["a" /* BACKOFFICECONSTANTS */].userType.mgUser;
    }
    MgUserInfoComponent.prototype.ngOnInit = function () {
        // Get the id from the activated route
        this.userId = this.activatedRoute.snapshot.params['id'];
        this.operation = this.activatedRoute.snapshot.params['operation'];
        // Get all the master data
        this.getDepartments();
        this.getApplications();
        // Set inactiveToMinDate as tomorrow's date
        this.inactiveToMinDate.setDate(this.todaysDate.getDate() + 1);
        // Create the Form Model
        this.mgUserForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            firstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            lastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            userName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            employeeId: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            departments: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            activationDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            userApplicationRole: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormArray"]([], ValidateAppRole),
            temporaryInActivationDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            temporaryActivationDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            deActivationDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
        if (this.operation.toLowerCase().trim() === this.create) {
            this.addAppRole();
        }
        else if (this.operation.toLowerCase().trim() === this.edit || this.operation.toLowerCase().trim() === this.read) {
            this.getMGUser(this.userId);
            this.mgUserForm.controls.activationDate.disable();
        }
    };
    MgUserInfoComponent.prototype.getMGUser = function (userId) {
        var _this = this;
        this.userDataService.getMGUserById(userId).subscribe(function (mgUserData) {
            if (_this.operation.toLowerCase().trim() === _this.edit) {
                _this.mgUserViewModel = mgUserData;
                _this.isInactivateUser = false;
                _this.wasTemporaryInactive = false;
                _this.mgUserForm.get('firstName').setValue(mgUserData.firstName);
                _this.mgUserForm.get('lastName').setValue(mgUserData.lastName);
                _this.mgUserForm.get('userName').setValue(mgUserData.userName);
                _this.mgUserForm.get('employeeId').setValue(mgUserData.employeeId);
                _this.mgUserForm.get('email').setValue(mgUserData.email);
                var departmentIds = [];
                for (var _i = 0, _a = mgUserData.departments; _i < _a.length; _i++) {
                    var departmentId = _a[_i];
                    departmentIds.push(departmentId);
                }
                _this.mgUserForm.get('departments').setValue(departmentIds);
                _this.mgUserForm.get('activationDate').setValue(mgUserData.activationDate);
                var applicationRoleIdArray = [];
                var appRoleValue_1 = mgUserData.userApplicationRole;
                for (var i = 0; i < appRoleValue_1.length; i++) {
                    _this.addAppRole();
                }
                _this.userApplicationRole.controls.forEach(function (control, index) {
                    control.get('applicationId').setValue(appRoleValue_1[index].applicationId);
                    _this.getRolesForApplication(index);
                    control.get('roleId').setValue(appRoleValue_1[index].roleId);
                });
                if (mgUserData.inActivationType !== null &&
                    mgUserData.inActivationType !== undefined &&
                    mgUserData.inActivationType.trim() !== '') {
                    _this.isInactivateUser = true;
                    _this.inactiveType = mgUserData.inActivationType;
                    if (_this.inactiveType === _this.temporary &&
                        mgUserData.temporaryInActivationDate !== undefined &&
                        mgUserData.temporaryInActivationDate !== null &&
                        mgUserData.temporaryInActivationDate !== '' &&
                        new Date(mgUserData.temporaryInActivationDate) <= _this.todaysDate) {
                        _this.wasTemporaryInactive = true;
                    }
                }
                _this.mgUserForm.get('temporaryInActivationDate').setValue(mgUserData.temporaryInActivationDate);
                _this.mgUserForm.get('temporaryActivationDate').setValue(mgUserData.temporaryActivationDate);
                _this.mgUserForm.get('deActivationDate').setValue(mgUserData.deActivationDate);
                _this.toggleInactivationDates();
                _this.cd.detectChanges();
            }
        });
    };
    MgUserInfoComponent.prototype.getDepartments = function () {
        this.departmentList = this.activatedRoute.snapshot.data['departments'];
    };
    MgUserInfoComponent.prototype.getApplications = function () {
        this.applicationList = this.activatedRoute.snapshot.data['applications'];
    };
    Object.defineProperty(MgUserInfoComponent.prototype, "userApplicationRole", {
        get: function () {
            return this.mgUserForm.get('userApplicationRole');
        },
        enumerable: true,
        configurable: true
    });
    MgUserInfoComponent.prototype.buildAppRole = function () {
        var appRoleFormGroup;
        appRoleFormGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            applicationId: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            roleId: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
        return appRoleFormGroup;
    };
    MgUserInfoComponent.prototype.addAppRole = function () {
        this.userApplicationRole.push(this.buildAppRole());
        if (this.appRolesListArray === null || this.appRolesListArray === undefined) {
            this.appRolesListArray = new Array();
        }
        else {
            this.appRolesListArray.push([]);
        }
        if (this.userApplicationRole.length === this.applicationList.length) {
            this.isMaxLength = true;
        }
        this.cd.detectChanges();
    };
    MgUserInfoComponent.prototype.confirmDeleteAppRole = function (index) {
        var _this = this;
        this.isMaxLength = false;
        this.dialogsService
            .confirm('Confirm', 'Are you sure you want to delete this application role?').subscribe(function (res) {
            _this.result = res;
            if (_this.result) {
                _this.deleteAppRole(index);
            }
            else {
                _this.actions = null;
            }
        });
    };
    MgUserInfoComponent.prototype.deleteAppRole = function (index) {
        this.userApplicationRole.removeAt(index);
        this.appRolesListArray.splice(index, 1);
        this.cd.detectChanges();
    };
    MgUserInfoComponent.prototype.getRolesForApplication = function (applicationIndex) {
        var _this = this;
        var applicationId = this.userApplicationRole.controls[applicationIndex].get('applicationId').value;
        this.appRoles = this.backofficeLookupService.getRolesByApplicationIdAndUserType(applicationId, this.mgUser);
        this.appRoles.subscribe(function (data) {
            _this.appRolesListArray[applicationIndex] = data;
        });
    };
    MgUserInfoComponent.prototype.saveUser = function () {
        var _this = this;
        var savedMGUser = Object.assign({}, this.mgUserViewModel, this.mgUserForm.value);
        savedMGUser.userName = savedMGUser.email;
        savedMGUser.updatedBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
            this.userProfileService.GetBasicUserInfo().LastName;
        if (this.operation === this.create) {
            savedMGUser.createdBy = this.userProfileService.GetBasicUserInfo().FirstName + ' ' +
                this.userProfileService.GetBasicUserInfo().LastName;
            this.userDataService.createMGUser(savedMGUser)
                .subscribe(function (data) {
                window.scrollTo(0, 0);
                var snackBarMessage = 'New user is created successfully';
                if (!data.succeeded) {
                    snackBarMessage = 'Error while creating new user';
                    if (data.errors && data.errors.length > 0) {
                        snackBarMessage += ' - ' + data.errors[0].description;
                    }
                }
                _this.snackBar.open(snackBarMessage, '', { duration: __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top',
                    panelClass: 'showSnackBar' });
                _this.router.navigate(['/usermgmt/mgusers']);
            });
        }
        else if (this.operation === this.edit) {
            savedMGUser.createdBy = this.mgUserViewModel.createdBy;
            if (this.inactiveType !== undefined && this.inactiveType !== null && this.inactiveType.trim() !== '') {
                savedMGUser.inActivationType = this.inactiveType;
                if (this.inactiveType === this.temporary) {
                    // Clear deActivationDate if inactive type is Temporary
                    savedMGUser.deActivationDate = null;
                }
                else {
                    // Clear temporaryInActivationDate and temporaryActivationDate if inactive type is Permanent
                    savedMGUser.temporaryInActivationDate = null;
                    savedMGUser.temporaryActivationDate = null;
                }
            }
            else {
                // Clear deActivationDate, temporaryInActivationDate and temporaryActivationDate if Inactivate User checkbox is unchecked
                // If Inactivate User checkbox is unchecked -
                // Check if the user was temporary inactive
                // if yes, set temporaryActivationDate to today's date in ISOString format e.g. "2018-04-25T00:00:00.000Z"
                // if no, clear inActivationType, deActivationDate, temporaryInActivationDate and temporaryActivationDate
                if (this.wasTemporaryInactive) {
                    savedMGUser.temporaryActivationDate = new Date(Date.UTC(this.todaysDate.getFullYear(), this.todaysDate.getMonth(), this.todaysDate.getDate(), 0, 0, 0)).toISOString();
                }
                else {
                    savedMGUser.inActivationType = null;
                    savedMGUser.temporaryInActivationDate = null;
                    savedMGUser.temporaryActivationDate = null;
                    savedMGUser.deActivationDate = null;
                }
            }
            this.userDataService.updateMGUser(this.userId, savedMGUser)
                .subscribe(function (data) {
                window.scrollTo(0, 0);
                var snackBarMessage = 'The user is updated successfully';
                if (!data.succeeded) {
                    snackBarMessage = 'Error while updating the user';
                    if (data.errors && data.errors.length > 0) {
                        snackBarMessage += ' - ' + data.errors[0].description;
                    }
                }
                _this.snackBar.open(snackBarMessage, '', { duration: __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top',
                    panelClass: 'showSnackBar' });
                _this.router.navigate(['/usermgmt/mgusers']);
            });
        }
    };
    MgUserInfoComponent.prototype.cancel = function () {
        window.scrollTo(0, 0);
        this.router.navigate(['/usermgmt/mgusers']);
    };
    MgUserInfoComponent.prototype.showHideInactiationDatesSection = function (event) {
        this.isInactivateUser = event.checked;
        // Temporary radio button will be by default selected
        if (event.checked) {
            this.inactiveType = this.temporary;
        }
        else {
            // Once Inactivate User checkbox unchecked, reset inactiveType
            this.inactiveType = null;
        }
        this.toggleInactivationDates();
        this.cd.detectChanges();
    };
    MgUserInfoComponent.prototype.toggleInactiveUserType = function (event) {
        this.inactiveType = event.value;
        this.toggleInactivationDates();
        this.cd.detectChanges();
    };
    MgUserInfoComponent.prototype.toggleInactivationDates = function () {
        if (this.inactiveType === this.temporary) {
            this.mgUserForm.controls.deActivationDate.disable();
            this.mgUserForm.controls.temporaryInActivationDate.enable();
            this.mgUserForm.controls.temporaryActivationDate.enable();
        }
        else if (this.inactiveType === this.permanent) {
            this.mgUserForm.controls.deActivationDate.enable();
            this.mgUserForm.controls.temporaryInActivationDate.disable();
            this.mgUserForm.controls.temporaryActivationDate.disable();
        }
        else {
            this.mgUserForm.controls.deActivationDate.disable();
            this.mgUserForm.controls.temporaryInActivationDate.disable();
            this.mgUserForm.controls.temporaryActivationDate.disable();
        }
    };
    MgUserInfoComponent.prototype.inActiveFromDateChange = function (type, event) {
        var inactiveFromDateValue = this.mgUserForm.get('temporaryInActivationDate').value;
        var inactiveToDateValue = this.mgUserForm.get('temporaryActivationDate').value;
        var inactiveFromDate = inactiveFromDateValue !== undefined && inactiveFromDateValue !== null ? new Date(inactiveFromDateValue) : '';
        if (inactiveFromDate !== '') {
            // Set inactiveToMinDate as next day of inactiveFromDate
            this.inactiveToMinDate = inactiveFromDate;
            this.inactiveToMinDate.setDate(inactiveFromDate.getDate() + 1);
            var inactiveToDate = inactiveToDateValue !== undefined && inactiveToDateValue !== null ? new Date(inactiveToDateValue) : '';
            if (inactiveToDate !== '') {
                if (inactiveFromDate >= inactiveToDate) {
                    this.mgUserForm.get('temporaryActivationDate').setValue(null);
                }
            }
        }
        else {
            // Set inactiveToMinDate as tomorrow's date
            this.inactiveToMinDate = new Date();
            this.inactiveToMinDate.setDate(this.todaysDate.getDate() + 1);
        }
        this.cd.detectChanges();
    };
    MgUserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mg-user-info',
            template: __webpack_require__("../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-info/mg-user-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-info/mg-user-info.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* DateAdapter */], useClass: DatePickerDateAdapter },
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MAT_DATE_FORMATS */], useValue: DATE_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_6__common_backoffice_shared_services_backoffice_lookup__["a" /* BackofficeLookupService */],
            __WEBPACK_IMPORTED_MODULE_7__common_shared_services_user_profile_service__["a" /* UserProfileService */],
            __WEBPACK_IMPORTED_MODULE_8__extranet_common_extranet_shared_dialogs_dialogs_service__["a" /* DialogsService */]])
    ], MgUserInfoComponent);
    return MgUserInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-list/mg-user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".firstnameTH {\r\n  width: 15%;\r\n}\r\n\r\n.empIDTH {\r\n  width: 12%;\r\n}\r\n\r\n.emailTH {\r\n  width: 14%;\r\n}\r\n\r\n.departmentTH {\r\n  width: 10%;\r\n}\r\n\r\n.applicationRoleTH {\r\n  width: 14%;\r\n}\r\n\r\n.activationTH {\r\n  width: 16%;\r\n}\r\n\r\n.userStatusTH {\r\n  width: 10%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.userActionTH {\r\n  width: 9%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-list/mg-user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"mt-4 pt-2\">\r\n    <h1 class=\"mainHeading pb-0 borderBottomNone\">MG</h1>\r\n\r\n    <div class=\"row mt-4 mb-0\">\r\n      <form [formGroup]=\"searchUsers\" (ngSubmit)=\"findUsers(searchUsers.get('searchText').value,searchUsers.get('startDate').value,searchUsers.get('endDate').value)\"\r\n            class=\"w-100\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"lightBlueContainer pb-0 pl-4 pr-4 pt-4 mb-4\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n\r\n                <div class=\"col-md-7 pr-5\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Search by User Name, Email ID, Department, Applications & Roles, Activation date \" formControlName=\"searchText\"\r\n                           (keydown.backspace)=\"checkIsInputCleared()\">\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                  <div class=\"col-md-2 pl-0\">\r\n                    <mat-form-field class=\"width80percent\">\r\n                      <span matPrefix>From &nbsp;</span>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"startdate\">\r\n                        <mat-icon matDatepickerToggleIcon>\r\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                        </mat-icon>\r\n                      </mat-datepicker-toggle>\r\n                      <input matInput [matDatepicker]=\"startdate\" placeholder=\"DD-MMM-YY\" formControlName=\"startDate\">\r\n                      <mat-datepicker #startdate></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span class=\"btn transparent-circle smallDeleteIcon ml-1\" title=\"Delete\">\r\n                      <i class=\"fa fa-times-thin\" aria-hidden=\"true\" (click)=\"checkIsFromDateCleared();\"></i>\r\n                    </span>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-2 pr-4\">\r\n                    <mat-form-field class=\"width80percent\">\r\n                      <span matPrefix>To &nbsp;</span>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"enddate\">\r\n                        <mat-icon matDatepickerToggleIcon>\r\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                        </mat-icon>\r\n                      </mat-datepicker-toggle>\r\n                      <input matInput [matDatepicker]=\"enddate\" placeholder=\"DD-MMM-YY\" formControlName=\"endDate\" [min]=\"searchUsers.get('startDate').value\">\r\n                      <mat-datepicker #enddate></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <span class=\"btn transparent-circle smallDeleteIcon ml-1\" title=\"Delete\">\r\n                      <i class=\"fa fa-times-thin\" aria-hidden=\"true\" (click)=\"checkIsToDateCleared();\"></i>\r\n                    </span>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-1 top10px controlButtons\">\r\n                    <button title=\"Search\" type=\"submit\" class=\"genericButton genericSmallButton activeButton mat-primary\" mat-raised-button>Search</button>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 pt-4 mt-2 pb-3 mb-1 controlButtons\">\r\n        <button title=\"Create New MG User\" type=\"submit\" class=\"btn defaultButton genericButton genericSmallButton\" mat-raised-button\r\n                (click)=\"createMgUser()\">\r\n          <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i><span>Create New MG User</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <mat-table #table [dataSource]='!isSearch ? dataSource: filteredData' matSort (matSortChange)=\"sortData($event)\" matSortActive=\"activationDate\" matSortDirection=\"desc\" class=\"flexNone genericTable mb-4 pb-1 mat-table\">\r\n\r\n      <ng-container matColumnDef=\"firstName\">\r\n        <mat-header-cell class=\"firstnameTH alignItemCenter pr-0\" *matHeaderCellDef mat-sort-header> First/Last Name </mat-header-cell>\r\n        <mat-cell class=\"firstnameTH\" *matCellDef=\"let element\"><div class=\"d-flex\"><div><mat-icon class=\"userIcon alignItemCenter\">account_circle</mat-icon></div><span class=\"pl-1 alignItemCenter\">{{element.firstName}} {{element.lastName}}</span></div></mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"employeeId\">\r\n        <mat-header-cell class=\"empIDTH\" *matHeaderCellDef mat-sort-header> Employee ID </mat-header-cell>\r\n        <mat-cell class=\"empIDTH\" *matCellDef=\"let element\"> {{element.employeeId}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"email\">\r\n        <mat-header-cell class=\"emailTH\" *matHeaderCellDef mat-sort-header> Email ID </mat-header-cell>\r\n        <mat-cell class=\"emailTH\" *matCellDef=\"let element\"> {{element.email}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"departments\">\r\n        <mat-header-cell class=\"departmentTH pl-0 pr-0\" *matHeaderCellDef mat-sort-header> Department(s) </mat-header-cell>\r\n        <mat-cell class=\"departmentTH pl-0 pr-0\" *matCellDef=\"let element\">\r\n          <ng-container *ngFor=\"let c of element.departments\">\r\n            <ng-container *ngIf=\"element.departments[0].name == c.name && element.departments.length == 1 \">\r\n              {{c.name}}\r\n            </ng-container>\r\n            <ng-container *ngIf=\"element.departments[0].name == c.name && element.departments.length > 1 \">\r\n              {{c.name}}<span>,</span>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"element.departments[0].name != c.name\">\r\n              {{c.name}}\r\n            </ng-container>\r\n          </ng-container>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"userApplicationRole\">\r\n        <mat-header-cell class=\"applicationRoleTH\" *matHeaderCellDef mat-sort-header>\r\n          <span class=\"text-center\"><span class=\"d-block float-left\">Application(s)</span><span class=\"d-block float-left\">&amp; Role(s)</span></span>\r\n        </mat-header-cell>\r\n        <mat-cell class=\"applicationRoleTH\" *matCellDef=\"let element\">\r\n          <ng-container *ngFor=\"let c of element.userApplicationRole\">\r\n            <span class=\"d-block\">{{c.applicationName}} - {{c.roleName}}</span>\r\n          </ng-container>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"activationDate\">\r\n        <mat-header-cell class=\"activationTH\" *matHeaderCellDef mat-sort-header>\r\n          <div>Activation/<div>Inactivation Date</div></div>\r\n        </mat-header-cell>\r\n        <mat-cell class=\"activationTH\" *matCellDef=\"let element\">\r\n          <span class=\"d-block\">{{element.activationDate | date : \"dd-MMM-yy\"}}<span *ngIf=\"!element.isActive && element.deActivationDate != null\">/</span></span>\r\n          <ng-container *ngIf=\"!element.isActive && element.deActivationDate != null \">\r\n            {{element.deActivationDate | date : \"dd-MMM-yy\"}}\r\n          </ng-container>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"isActive\">\r\n        <mat-header-cell class=\"userStatusTH noOutlineOnFocus\" *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\r\n        <mat-cell class=\"userStatusTH\" *matCellDef=\"let element\">\r\n          <ng-container *ngIf=\"element.isActive\">\r\n            <i class=\"fa fa-circle active_status\" aria-hidden=\"true\"></i>Active\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!element.isActive\">\r\n            <ng-container *ngIf=\"element.inActivationType === 'P' \">\r\n              <i class=\"fa fa-circle deactivate_status\" aria-hidden=\"true\"></i>Inactive\r\n            </ng-container>\r\n            <ng-container *ngIf=\"element.inActivationType === 'T'\">\r\n            <i class=\"fa fa-circle inactive_status\" aria-hidden=\"true\"></i>Inactive\r\n              <div class=\"tooltipCustom\">\r\n                <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\r\n                <div class=\"tooltiptext\">\r\n                  <div class=\"pl-4 ml-2 pt-3 mt-1\">\r\n                    <h6 class=\"mavenProMedium blackText\">Temporary Inactivate:</h6>\r\n                    <span class=\"d-block pt-1 pb-1\">Inactive From: {{element.temporaryInActivationDate | date : \"dd-MMM-yy\"}}</span>\r\n                    <span>Inactive To <span class=\"pl-2 ml-1\">: {{element.temporaryActivationDate | date : \"dd-MMM-yy\"}}</span></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </ng-container>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\" class=\"text-center\">\r\n        <mat-header-cell class=\"userActionTH noOutlineOnFocus\" *matHeaderCellDef mat-sort-header> </mat-header-cell>\r\n        <mat-cell class=\"placeholderColorGray userActionTH\" *matCellDef=\"let element\">\r\n          <mat-select placeholder=\"Actions\" name=\"Actions\" [(ngModel)]=\"actions\">\r\n            <ng-container *ngIf=\"element.isActive || element.inActivationType == 'T'\">\r\n              <mat-option value=\"{{element.id}}:edit\" #edit (click)=\"goUserUpdate(edit.value)\">Edit</mat-option>\r\n            </ng-container>\r\n            <mat-option value=\"{{element.id}}:delete\" #delete (click)=\"goUserDelete(delete.value)\">Delete</mat-option>\r\n          </mat-select>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n\r\n    </mat-table>\r\n    <div style=\"color:orange\" *ngIf=\"noDataAvailable\">\r\n      No Users are created.\r\n    </div>\r\n    <div style=\"color:orange\" *ngIf=\"noRecordsFound\">\r\n      No MG user record found.\r\n    </div>\r\n    <div class=\"paginationWrapper\">\r\n      <span class=\"pageCount\" *ngIf=\"!noDataAvailable\">\r\n        Page: {{(pageEvent) ? pageEvent.pageIndex + 1 : 1}} of {{\r\n(pageEvent) ? Math.ceil(pageEvent.length/pageEvent.pageSize)\r\n      : Math.ceil(totalRecords/20)\r\n        }}\r\n      </span>\r\n\r\n      <mat-paginator *ngIf=\"!noDataAvailable\" class=\"genericPagination\" (page)=\"pageEvent = $event\" #paginator [pageSize]=\"20\"\r\n                     [pageSizeOptions]=\"[5, 10, 20]\">\r\n      </mat-paginator>\r\n    </div>\r\n  </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-list/mg-user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePickerDateAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MgUserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_backoffice_shared_services_user_data_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/user-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_backoffice_shared_dialogs_dialogs_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/dialogs/dialogs.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};
var DatePickerDateAdapter = (function (_super) {
    __extends(DatePickerDateAdapter, _super);
    function DatePickerDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerDateAdapter.prototype.format = function (date, displayFormat) {
        date.setMinutes((date.getTimezoneOffset() * -1));
        if (displayFormat === 'input') {
            var day = date.getDate();
            var month = date.toLocaleString('en-us', { month: 'long' });
            var year = date.getFullYear();
            return this._to2digit(day) + '-' + month.substring(0, 3) + '-' + year % 100;
        }
        else {
            return date.toDateString();
        }
    };
    DatePickerDateAdapter.prototype._to2digit = function (n) {
        return ('00' + n).slice(-2);
    };
    return DatePickerDateAdapter;
}(__WEBPACK_IMPORTED_MODULE_6__angular_material_core__["u" /* NativeDateAdapter */]));

var MgUserListComponent = (function () {
    function MgUserListComponent(router, activatedRoute, userDataService, dialogsService, datepipe, snackBar) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userDataService = userDataService;
        this.dialogsService = dialogsService;
        this.datepipe = datepipe;
        this.snackBar = snackBar;
        this.edit = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].operation.read;
        this.displayedColumns = ['firstName', 'employeeId', 'email', 'departments',
            'userApplicationRole', 'activationDate', 'isActive', 'actions'];
        this.Math = Math;
    }
    MgUserListComponent.prototype.ngOnInit = function () {
        this.getMgUserList();
        this.isSearch = false;
        this.searchUsers = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            startDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            endDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](),
            searchText: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]()
        });
    };
    MgUserListComponent.prototype.findUsers = function (filterValue, filterFrom, filterTo) {
        var _this = this;
        if (filterFrom !== null || filterTo !== null || (filterValue !== null && filterValue.length >= 3)) {
            this.isSearch = true;
        }
        if (filterFrom !== null) {
            filterFrom = this.datepipe.transform(filterFrom, 'yyyy-MM-dd');
        }
        if (filterTo !== null) {
            filterTo = this.datepipe.transform(filterTo, 'yyyy-MM-dd');
        }
        if (filterValue !== null) {
            filterValue = filterValue.trim();
            filterValue = filterValue.toLowerCase();
        }
        this.filteredData = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["K" /* MatTableDataSource */](this.userList.filter(function (user) {
            var searchActivationDate = _this.datepipe.transform(user.activationDate, 'dd-MMM-yy hh:mm a');
            var activationDate = _this.datepipe.transform(user.activationDate, 'yyyy-MM-dd');
            if (filterValue !== null && (filterFrom === null && filterTo === null)) {
                return _this.filterUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue);
            }
            else if (filterFrom !== null && (filterTo === null && filterValue === null)) {
                return activationDate >= filterFrom;
            }
            else if (filterTo !== null && (filterFrom === null && filterValue === null)) {
                return activationDate <= filterTo;
            }
            else if (filterValue === null && (filterFrom !== null && filterTo !== null)) {
                return filterFrom <= activationDate && activationDate <= filterTo;
            }
            else if (filterFrom === null && (filterValue !== null && filterTo !== null)) {
                return (_this.filterUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue)) && activationDate <= filterTo;
            }
            else if (filterTo === null && (filterFrom !== null && filterValue !== null)) {
                return (_this.filterUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue)) &&
                    activationDate >= filterFrom;
            }
            else if (filterFrom !== null && filterTo !== null && filterValue !== null) {
                return (_this.filterUser(user, filterValue) ||
                    searchActivationDate.toLowerCase().includes(filterValue)) &&
                    (filterFrom <= activationDate && activationDate <= filterTo);
            }
        }));
        if (this.filteredData.data.length === 0) {
            this.noRecordsFound = true;
        }
        this.filteredData.paginator = this.paginator;
        this.filteredData.sort = this.sort;
    };
    MgUserListComponent.prototype.filterUser = function (user, filterValue) {
        this.isAppRoleData = false;
        this.isDepartmentData = false;
        for (var i = 0; i < user.userApplicationRole.length; i++) {
            if ((user.userApplicationRole[i].applicationName.toLowerCase().includes(filterValue))
                || (user.userApplicationRole[i].roleName.toLowerCase().includes(filterValue))) {
                this.isAppRoleData = true;
                break;
            }
        }
        for (var j = 0; j < user.departments.length; j++) {
            if (user.departments[j].name.toLowerCase().includes(filterValue)) {
                this.isDepartmentData = true;
            }
        }
        return user.email.toLowerCase().includes(filterValue) ||
            user.employeeId.toString().includes(filterValue) ||
            user.lastName.toLowerCase().includes(filterValue) ||
            user.firstName.toLowerCase().includes(filterValue) ||
            this.isAppRoleData || this.isDepartmentData;
    };
    MgUserListComponent.prototype.checkIsInputCleared = function () {
        this.paginator.page.emit();
        if (this.searchUsers.get('searchText').value.length === 1 &&
            this.searchUsers.get('startDate').value === null &&
            this.searchUsers.get('endDate').value === null) {
            this.filteredData = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["K" /* MatTableDataSource */](this.userList);
            this.filteredData.paginator = this.paginator;
            this.filteredData.sort = this.sort;
            this.isSearch = false;
            this.noRecordsFound = false;
        }
    };
    MgUserListComponent.prototype.checkIsFromDateCleared = function () {
        this.paginator.page.emit();
        this.searchUsers.get('startDate').setValue(null);
        if ((this.searchUsers.get('searchText').value === null || this.searchUsers.get('searchText').value === '') &&
            this.searchUsers.get('endDate').value === null) {
            this.getMgUserList();
        }
    };
    MgUserListComponent.prototype.checkIsToDateCleared = function () {
        this.paginator.page.emit();
        this.searchUsers.get('endDate').setValue(null);
        if ((this.searchUsers.get('searchText').value === null || this.searchUsers.get('searchText').value === '') &&
            this.searchUsers.get('startDate').value === null) {
            this.getMgUserList();
        }
    };
    MgUserListComponent.prototype.sortData = function (sort) {
        var data = this.userList.slice();
        if (!sort.active || sort.direction === '') {
            this.dataSource.data = data.sort(function (a, b) {
                var isAsc = sort.direction === 'desc';
                return compare(a.activationDate, b.activationDate, isAsc);
            });
            return;
        }
        else {
            if (this.isSearch) {
                this.filteredData.data = this.filteredData.data.sort(function (a, b) {
                    var isAsc = sort.direction === 'asc';
                    switch (sort.active) {
                        case 'firstName': return compare(a.firstName.toLowerCase(), b.firstName.toLowerCase(), isAsc);
                        // case 'userName': return compare(a.userName.toLowerCase(), b.userName.toLowerCase(), isAsc);
                        case 'email': return compare(a.email.toLowerCase(), b.email.toLowerCase(), isAsc);
                        case 'employeeId': return compare(+a.employeeId, +b.employeeId, isAsc);
                        case 'isActive': return compare(a.isActive, b.isActive, isAsc);
                        case 'departments': return compare((a.departments.length === 0) ? '' :
                            a.departments[0].name, (b.departments.length === 0) ? '' :
                            b.departments[0].name, isAsc);
                        case 'userApplicationRole':
                            return compare((a.userApplicationRole.length === 0) ? '' :
                                a.userApplicationRole[0].applicationName, (b.userApplicationRole.length === 0) ? '' :
                                b.userApplicationRole[0].applicationName, isAsc);
                        case 'activationDate': return compare(a.activationDate, b.activationDate, isAsc);
                        default: return 0;
                    }
                });
                this.filteredData.paginator = this.paginator;
            }
            this.dataSource.data = data.sort(function (a, b) {
                var isAsc = sort.direction === 'asc';
                switch (sort.active) {
                    case 'firstName': return compare(a.firstName.toLowerCase(), b.firstName.toLowerCase(), isAsc);
                    // case 'userName': return compare(a.userName.toLowerCase(), b.userName.toLowerCase(), isAsc);
                    case 'email': return compare(a.email.toLowerCase(), b.email.toLowerCase(), isAsc);
                    case 'employeeId': return compare(+a.employeeId, +b.employeeId, isAsc);
                    case 'isActive': return compare(a.isActive, b.isActive, isAsc);
                    case 'departments': return compare((a.departments.length === 0) ? '' :
                        a.departments[0].name, (b.departments.length === 0) ? '' :
                        b.departments[0].name, isAsc);
                    case 'userApplicationRole':
                        return compare((a.userApplicationRole.length === 0) ? '' :
                            a.userApplicationRole[0].applicationName, (b.userApplicationRole.length === 0) ? '' :
                            b.userApplicationRole[0].applicationName, isAsc);
                    case 'activationDate': return compare(a.activationDate, b.activationDate, isAsc);
                    default: return 0;
                }
            });
            this.dataSource.paginator = this.paginator;
        }
    };
    MgUserListComponent.prototype.getMgUserList = function () {
        var _this = this;
        this.isSearch = false;
        this.userDataService.getMgUsers().subscribe(function (mgUsersList) {
            _this.userList = mgUsersList;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__angular_material__["K" /* MatTableDataSource */](_this.userList);
            _this.totalRecords = _this.userList.length;
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            if (mgUsersList.length === 0) {
                _this.noDataAvailable = true;
            }
            else {
                _this.noDataAvailable = false;
            }
        });
    };
    MgUserListComponent.prototype.createMgUser = function () {
        this.router.navigate(['../mguser', 0, this.create], { relativeTo: this.activatedRoute });
    };
    MgUserListComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.userDataService.deleteMGUser(userId).subscribe(function (data) {
            window.scrollTo(0, 0);
            _this.snackBar.open('The user is deleted successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top',
                panelClass: 'showSnackBar' });
            _this.getMgUserList();
        });
    };
    MgUserListComponent.prototype.goUserUpdate = function (value) {
        var val = value.split(':');
        var userId = val[0];
        this.operation = val[1];
        this.router.navigate(['../mguser', userId, this.operation.trim().toLowerCase()], { relativeTo: this.activatedRoute });
    };
    MgUserListComponent.prototype.goUserDelete = function (value) {
        var _this = this;
        var val = value.split(':');
        var userId = val[0];
        this.dialogsService
            .confirm('Confirm', 'Are you sure you want to delete this user?').subscribe(function (res) {
            _this.result = res;
            if (_this.result) {
                _this.deleteUser(userId);
            }
            else {
                _this.actions = null;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatPaginator */])
    ], MgUserListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["H" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["H" /* MatSort */])
    ], MgUserListComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MgUserListComponent.prototype, "_dateValue", void 0);
    MgUserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mg-user-list',
            template: __webpack_require__("../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-list/mg-user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-list/mg-user-list.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_8__common_backoffice_shared_dialogs_dialogs_service__["a" /* DialogsService */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["c" /* DateAdapter */], useClass: DatePickerDateAdapter },
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["f" /* MAT_DATE_FORMATS */], useValue: DATE_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4__common_backoffice_shared_services_user_data_service__["a" /* UserDataService */],
            __WEBPACK_IMPORTED_MODULE_8__common_backoffice_shared_dialogs_dialogs_service__["a" /* DialogsService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["F" /* MatSnackBar */]])
    ], MgUserListComponent);
    return MgUserListComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-info/roles-permissions-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-info/roles-permissions-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid pt-4\">\n  <div class=\"customBreadcrumb mb-3 pb-1\">\n    <span>Roles & Permissions </span>\n    <span>&gt; Set New Permissions</span>\n  </div>\n  <h1 class=\"mainHeading mb-4\">Set New Permissions</h1>\n  <form [formGroup]=\"setNewPermissionForm\">\n    <div class=\"row customeRow\">\n      <div class=\"form-group col-md-4 col-lg-3 pt-2\">\n        <mat-form-field>\n          <mat-select placeholder=\"Application Name\" name=\"Application Name\" formControlName=\"userApplication\" required [(ngModel)]=\"selectedOption\"\n            (change)=\"getApplicationRoles(setNewPermissionForm.get('userApplication').value); getFeaturesByAppId(setNewPermissionForm.get('userApplication').value);\">\n            <mat-option *ngFor=\"let app of applicationList\" [value]=\"app.id\">{{app.name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"row customeRow\">\n      <div class=\"form-group col-md-4 col-lg-3\">\n        <mat-form-field>\n          <mat-select placeholder=\"Role Type\" name=\"Role Type\" formControlName=\"userRole\" required>\n            <mat-option *ngFor=\"let roles of applicationRolesList\" [value]=\"roles.id\">{{roles.name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n    <!-- <div class=\"row customeRow\">\n      <div class=\"col-md-8 col-lg-6 form-group\">\n        <mat-form-field>\n          <textarea rows=\"5\" cols=\"200\" matInput placeholder=\"Description\" maxlength=\"500\"></textarea>\n        </mat-form-field>\n      </div>\n    </div> -->\n    <h6 class=\"h6 pt-3 pb-2\">Set Permissions</h6>\n    <div class=\"row\">\n      <div class=\"form-group col-md-12 table-responsive\">\n\n        <table class=\"table genericTable\">\n          <thead>\n            <tr class=\"title-Bar\">\n              <th class=\"iconTH\"></th>\n              <th class=\"moduleTH\">Modules</th>\n              <th class=\"subModuleTH\">Sub-Modules</th>\n              <th class=\"readAccessTH\">Read-Only</th>\n              <th class=\"fullAccessTH\">Full Access</th>\n            </tr>\n          </thead>\n          <div formArrayName=\"featureDetails\" *ngFor=\"let feature of featureDetails.controls; let i =index\">\n          <div [formGroupName]=\"i\">\n              <tbody>\n                <ng-container *ngFor=\"let element of featureList\">\n                  <tr>\n                    <td>\n                      <div class=\"ml-1 transparent-circle\">\n                        <i class=\"material-icons plusIcon\" aria-hidden=\"true\">add</i>\n                      </div>\n                    </td><td>{{element.name}}</td>\n                    <td></td>\n                    <td><mat-checkbox></mat-checkbox></td>\n                    <td><mat-checkbox></mat-checkbox></td>\n                  </tr>\n                  <ng-container *ngFor=\"let subElement of element.subModule\">\n                    <tr>\n                      <td></td>\n                      <td></td>\n                      <td>{{subElement.name}}\n                      </td>\n                      <td>\n                        <mat-checkbox formControlName=\"readOnly\"></mat-checkbox>\n                      </td>\n                      <td>\n                        <mat-checkbox formControlName=\"fullAccess\"></mat-checkbox>\n                      </td>\n                    </tr>\n                  </ng-container>\n                </ng-container>\n              </tbody>\n          </div>\n          </div>\n        </table>\n      </div>\n    </div>\n\n    <div class=\"controlButtons borderTopDark paddingTop50px pb-4 mb-1 paddingRight15px\">\n        <button title=\"Save\" class=\"genericButton activeButton mat-raised-button mat-primary\" (click)=\"savePermissions()\">Save</button>\n        <button title=\"Cancel\" class=\"genericButton defaultButton\">Cancel</button>\n        <button title=\"Continue\" class=\"genericButton activeButton mat-raised-button mat-primary float-right\">Save &amp; Set New Permissions</button>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-info/roles-permissions-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetNewPermissionInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_backoffice_shared_services_backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_constants__ = __webpack_require__("../../../../../src/app/backoffice/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_roles_permission_data_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/roles-permission-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SetNewPermissionInfoComponent = (function () {
    function SetNewPermissionInfoComponent(activatedRoute, backofficeLookupService, rolesPermissionDataService) {
        this.activatedRoute = activatedRoute;
        this.backofficeLookupService = backofficeLookupService;
        this.rolesPermissionDataService = rolesPermissionDataService;
    }
    SetNewPermissionInfoComponent.prototype.ngOnInit = function () {
        this.setNewPermissionForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            modules: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            subModules: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            readOnly: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            fullAccess: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            userApplication: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            userRole: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            featureDetails: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"]([this.buildFeatureDetailForm()]),
        });
        this.selectedOption = this.activatedRoute.snapshot.data['applications'].find(function (x) { return x.name === __WEBPACK_IMPORTED_MODULE_4__common_constants__["a" /* BACKOFFICECONSTANTS */].extranet; }).id;
        this.getApplications();
        this.getApplicationRoles(this.selectedOption);
        this.getFeaturesByAppId(this.selectedOption);
    };
    /* ---------- Feature Details ---------------- */
    SetNewPermissionInfoComponent.prototype.buildFeatureDetailForm = function () {
        var featureDetailsFormGroup;
        featureDetailsFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            featureId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            module: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            subModule: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            readOnly: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            fullAccess: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('')
        });
        return featureDetailsFormGroup;
    };
    Object.defineProperty(SetNewPermissionInfoComponent.prototype, "featureDetails", {
        get: function () {
            return this.setNewPermissionForm.get('featureDetails');
        },
        enumerable: true,
        configurable: true
    });
    SetNewPermissionInfoComponent.prototype.getApplications = function () {
        this.applicationList = this.activatedRoute.snapshot.data['applications'];
    };
    SetNewPermissionInfoComponent.prototype.getApplicationRoles = function (applicationId) {
        var _this = this;
        this.backofficeLookupService.getRolesByApplicationIdAndUserType(applicationId, null).subscribe(function (data) {
            _this.applicationRolesList = data;
        });
    };
    SetNewPermissionInfoComponent.prototype.getFeaturesByAppId = function (applicationId) {
        var _this = this;
        this.rolesPermissionDataService.getFeaturesByAppId(applicationId).subscribe(function (data) {
            _this.featureList = data;
        });
    };
    SetNewPermissionInfoComponent.prototype.savePermissions = function () {
        var rolePermission = this.setNewPermissionForm.value;
        console.log(rolePermission);
    };
    SetNewPermissionInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-roles-permissions-info',
            template: __webpack_require__("../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-info/roles-permissions-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-info/roles-permissions-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__common_backoffice_shared_services_backoffice_lookup__["a" /* BackofficeLookupService */],
            __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_roles_permission_data_service__["a" /* RolesPermissionDataService */]])
    ], SetNewPermissionInfoComponent);
    return SetNewPermissionInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-list/roles-permissions-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-list/roles-permissions-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"mt-4 pt-2\">\r\n    <h1 class=\"mainHeading mb-1 pb-0 borderBottomNone\">Roles & Permissions</h1>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 pt-3 pb-3 controlButtons\">\r\n        <button title=\"Set New Permissions\" type=\"submit\" class=\"btn defaultButton genericButton genericSmallButton\"\r\n                mat-raised-button (click)=\"setNewPermissions()\">\r\n          <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\r\n          <span>Set New Permissions</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-list/roles-permissions-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesPermissionsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RolesPermissionsListComponent = (function () {
    function RolesPermissionsListComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.create = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.create;
    }
    RolesPermissionsListComponent.prototype.ngOnInit = function () {
    };
    RolesPermissionsListComponent.prototype.setNewPermissions = function () {
        this.router.navigate(['../rolespermissions', 0, this.create], { relativeTo: this.activatedRoute });
    };
    RolesPermissionsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-roles-permissions-list',
            template: __webpack_require__("../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-list/roles-permissions-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-list/roles-permissions-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], RolesPermissionsListComponent);
    return RolesPermissionsListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/user-mgmt-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export userRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMgmtRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedUserComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__roles_permission_roles_permissions_list_roles_permissions_list_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-list/roles-permissions-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mg_user_mg_user_list_mg_user_list_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-list/mg-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mg_user_mg_user_info_mg_user_info_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/mg-user/mg-user-info/mg-user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_department_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/department-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_backoffice_shared_services_application_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/application-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agent_user_agent_user_list_agent_user_list_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-list/agent-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agent_user_agent_user_info_agent_user_info_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-info/agent-user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hotel_user_hotel_user_list_hotel_user_list_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-list/hotel-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hotel_user_hotel_user_info_hotel_user_info_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-info/hotel-user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_backoffice_shared_services_role_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/role-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_backoffice_shared_services_designation_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/designation-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hotel_user_individual_hotel_user_info_individual_hotel_user_info_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/individual-hotel-user-info/individual-hotel-user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hotel_user_hotel_type_hotel_type_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-type/hotel-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__hotel_user_supplier_user_info_supplier_user_info_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/supplier-user-info/supplier-user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_backoffice_shared_services_hotel_chain_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/hotel-chain-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_backoffice_shared_services_hotel_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/hotel-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_backoffice_shared_services_agency_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/agency-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__roles_permission_roles_permissions_info_roles_permissions_info_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-info/roles-permissions-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_backoffice_shared_services_hotel_partner_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/hotel-partner-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var userRoutes = [
    // { path: '', redirectTo: 'mgusers', pathMatch: 'full' },
    { path: 'mgusers', component: __WEBPACK_IMPORTED_MODULE_2__mg_user_mg_user_list_mg_user_list_component__["a" /* MgUserListComponent */] },
    { path: 'mguser/:id/:operation',
        component: __WEBPACK_IMPORTED_MODULE_3__mg_user_mg_user_info_mg_user_info_component__["a" /* MgUserInfoComponent */],
        resolve: {
            departments: __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_department_resolver_service__["a" /* DepartmentResolverService */],
            applications: __WEBPACK_IMPORTED_MODULE_6__common_backoffice_shared_services_application_resolver_service__["a" /* ApplicationResolverService */]
        }
    },
    { path: 'agentusers', component: __WEBPACK_IMPORTED_MODULE_7__agent_user_agent_user_list_agent_user_list_component__["a" /* AgentUserListComponent */] },
    { path: 'agentusers/:id/:operation',
        component: __WEBPACK_IMPORTED_MODULE_8__agent_user_agent_user_info_agent_user_info_component__["a" /* AgentUserInfoComponent */],
        resolve: {
            agencies: __WEBPACK_IMPORTED_MODULE_18__common_backoffice_shared_services_agency_resolver_service__["a" /* AgencyResolverService */],
        }
    },
    { path: 'hoteluserslist', component: __WEBPACK_IMPORTED_MODULE_9__hotel_user_hotel_user_list_hotel_user_list_component__["a" /* HotelUserListComponent */] },
    {
        path: 'hotelusers', component: __WEBPACK_IMPORTED_MODULE_14__hotel_user_hotel_type_hotel_type_component__["a" /* HotelTypeComponent */],
        children: [
            { path: '', redirectTo: 'hoteldetails', pathMatch: 'full' },
            { path: 'hoteluserinfo/:id/:operation', component: __WEBPACK_IMPORTED_MODULE_10__hotel_user_hotel_user_info_hotel_user_info_component__["a" /* HotelUserInfoComponent */],
                resolve: {
                    hotelChains: __WEBPACK_IMPORTED_MODULE_16__common_backoffice_shared_services_hotel_chain_resolver_service__["a" /* HotelChainResolverService */]
                }
            },
            { path: 'individual/:id/:operation',
                component: __WEBPACK_IMPORTED_MODULE_13__hotel_user_individual_hotel_user_info_individual_hotel_user_info_component__["a" /* IndividualHotelUserInfoComponent */],
                resolve: {
                    roles: __WEBPACK_IMPORTED_MODULE_11__common_backoffice_shared_services_role_resolver_service__["a" /* RoleResolverService */],
                    designations: __WEBPACK_IMPORTED_MODULE_12__common_backoffice_shared_services_designation_resolver_service__["a" /* DesignationResolverService */],
                    hotels: __WEBPACK_IMPORTED_MODULE_17__common_backoffice_shared_services_hotel_resolver_service__["a" /* HotelResolverService */]
                },
                data: {
                    appName: __WEBPACK_IMPORTED_MODULE_19__common_constants__["a" /* CONSTANTS */].application.extranet,
                    type: __WEBPACK_IMPORTED_MODULE_19__common_constants__["a" /* CONSTANTS */].userType.hoteluser
                }
            },
            { path: 'supplieruser/:id/:operation',
                component: __WEBPACK_IMPORTED_MODULE_15__hotel_user_supplier_user_info_supplier_user_info_component__["a" /* SupplierUserInfoComponent */],
                resolve: {
                    roles: __WEBPACK_IMPORTED_MODULE_11__common_backoffice_shared_services_role_resolver_service__["a" /* RoleResolverService */],
                    designations: __WEBPACK_IMPORTED_MODULE_12__common_backoffice_shared_services_designation_resolver_service__["a" /* DesignationResolverService */],
                    suppliers: __WEBPACK_IMPORTED_MODULE_21__common_backoffice_shared_services_hotel_partner_resolver_service__["a" /* HotelPartnerResolverService */]
                },
                data: {
                    appName: __WEBPACK_IMPORTED_MODULE_19__common_constants__["a" /* CONSTANTS */].application.extranet,
                    type: __WEBPACK_IMPORTED_MODULE_19__common_constants__["a" /* CONSTANTS */].userType.hoteluser
                }
            }
        ]
    },
    { path: 'rolespermissions', component: __WEBPACK_IMPORTED_MODULE_0__roles_permission_roles_permissions_list_roles_permissions_list_component__["a" /* RolesPermissionsListComponent */] },
    { path: 'rolespermissions/:id/:operation',
        component: __WEBPACK_IMPORTED_MODULE_20__roles_permission_roles_permissions_info_roles_permissions_info_component__["a" /* SetNewPermissionInfoComponent */],
        resolve: {
            applications: __WEBPACK_IMPORTED_MODULE_6__common_backoffice_shared_services_application_resolver_service__["a" /* ApplicationResolverService */]
        }
    }
];
var UserMgmtRoutingModule = (function () {
    function UserMgmtRoutingModule() {
    }
    UserMgmtRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(userRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], UserMgmtRoutingModule);
    return UserMgmtRoutingModule;
}());

var routedUserComponents = [
    __WEBPACK_IMPORTED_MODULE_2__mg_user_mg_user_list_mg_user_list_component__["a" /* MgUserListComponent */],
    __WEBPACK_IMPORTED_MODULE_3__mg_user_mg_user_info_mg_user_info_component__["a" /* MgUserInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_7__agent_user_agent_user_list_agent_user_list_component__["a" /* AgentUserListComponent */],
    __WEBPACK_IMPORTED_MODULE_8__agent_user_agent_user_info_agent_user_info_component__["a" /* AgentUserInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_9__hotel_user_hotel_user_list_hotel_user_list_component__["a" /* HotelUserListComponent */],
    __WEBPACK_IMPORTED_MODULE_10__hotel_user_hotel_user_info_hotel_user_info_component__["a" /* HotelUserInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_20__roles_permission_roles_permissions_info_roles_permissions_info_component__["a" /* SetNewPermissionInfoComponent */]
];


/***/ }),

/***/ "../../../../../src/app/backoffice/user-mgmt/user-mgmt.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMgmtModule", function() { return UserMgmtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_mgmt_routing_module__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/user-mgmt-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_material_material_module__ = __webpack_require__("../../../../../src/app/common/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_backoffice_lookup__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/backoffice-lookup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_backoffice_shared_services_department_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/department-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_backoffice_shared_services_application_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/application-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agent_user_agent_user_info_agent_user_info_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-info/agent-user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agent_user_agent_user_list_agent_user_list_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/agent-user/agent-user-list/agent-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hotel_user_hotel_user_list_hotel_user_list_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-list/hotel-user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hotel_user_hotel_user_info_hotel_user_info_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-user-info/hotel-user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hotel_user_individual_hotel_user_info_individual_hotel_user_info_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/individual-hotel-user-info/individual-hotel-user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_backoffice_shared_services_designation_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/designation-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_backoffice_shared_services_role_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/role-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__hotel_user_hotel_type_hotel_type_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/hotel-type/hotel-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hotel_user_supplier_user_info_supplier_user_info_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/hotel-user/supplier-user-info/supplier-user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_backoffice_shared_services_hotel_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/hotel-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_backoffice_shared_services_agency_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/agency-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_backoffice_shared_services_hotel_chain_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/hotel-chain-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_pipes_orderbypipe__ = __webpack_require__("../../../../../src/app/backoffice/common/pipes/orderbypipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__roles_permission_roles_permissions_info_roles_permissions_info_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-info/roles-permissions-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__roles_permission_roles_permissions_list_roles_permissions_list_component__ = __webpack_require__("../../../../../src/app/backoffice/user-mgmt/roles-permission/roles-permissions-list/roles-permissions-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_backoffice_shared_services_hotel_partner_resolver_service__ = __webpack_require__("../../../../../src/app/backoffice/common/backoffice-shared/services/hotel-partner-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// import { RoleResolverService } from '../common/backoffice-shared/services/role-resolver.service';
var UserMgmtModule = (function () {
    function UserMgmtModule() {
    }
    UserMgmtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__user_mgmt_routing_module__["a" /* UserMgmtRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__common_material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__user_mgmt_routing_module__["b" /* routedUserComponents */], __WEBPACK_IMPORTED_MODULE_8__agent_user_agent_user_info_agent_user_info_component__["a" /* AgentUserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__agent_user_agent_user_list_agent_user_list_component__["a" /* AgentUserListComponent */], __WEBPACK_IMPORTED_MODULE_10__hotel_user_hotel_user_list_hotel_user_list_component__["a" /* HotelUserListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__hotel_user_hotel_user_info_hotel_user_info_component__["a" /* HotelUserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__hotel_user_individual_hotel_user_info_individual_hotel_user_info_component__["a" /* IndividualHotelUserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__hotel_user_hotel_type_hotel_type_component__["a" /* HotelTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__hotel_user_supplier_user_info_supplier_user_info_component__["a" /* SupplierUserInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__common_pipes_orderbypipe__["a" /* Orderbypipe */],
                __WEBPACK_IMPORTED_MODULE_21__roles_permission_roles_permissions_info_roles_permissions_info_component__["a" /* SetNewPermissionInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__roles_permission_roles_permissions_list_roles_permissions_list_component__["a" /* RolesPermissionsListComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__common_backoffice_shared_services_backoffice_lookup__["a" /* BackofficeLookupService */], __WEBPACK_IMPORTED_MODULE_6__common_backoffice_shared_services_department_resolver_service__["a" /* DepartmentResolverService */],
                __WEBPACK_IMPORTED_MODULE_7__common_backoffice_shared_services_application_resolver_service__["a" /* ApplicationResolverService */], __WEBPACK_IMPORTED_MODULE_13__common_backoffice_shared_services_designation_resolver_service__["a" /* DesignationResolverService */],
                __WEBPACK_IMPORTED_MODULE_14__common_backoffice_shared_services_role_resolver_service__["a" /* RoleResolverService */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_17__common_backoffice_shared_services_hotel_resolver_service__["a" /* HotelResolverService */],
                __WEBPACK_IMPORTED_MODULE_18__common_backoffice_shared_services_agency_resolver_service__["a" /* AgencyResolverService */],
                __WEBPACK_IMPORTED_MODULE_19__common_backoffice_shared_services_hotel_chain_resolver_service__["a" /* HotelChainResolverService */],
                __WEBPACK_IMPORTED_MODULE_23__common_backoffice_shared_services_hotel_partner_resolver_service__["a" /* HotelPartnerResolverService */]
            ]
        })
    ], UserMgmtModule);
    return UserMgmtModule;
}());



/***/ })

});
//# sourceMappingURL=user-mgmt.module.chunk.js.map