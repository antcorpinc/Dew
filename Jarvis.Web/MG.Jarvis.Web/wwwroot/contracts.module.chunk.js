webpackJsonp(["contracts.module"],{

/***/ "../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-name-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractNameDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractNameDataService = (function () {
    function ContractNameDataService() {
        this.contractNameSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.contractName = this.contractNameSource.asObservable();
    }
    ContractNameDataService.prototype.changeContractName = function (contractName) {
        this.contractNameSource.next(contractName);
    };
    ContractNameDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ContractNameDataService);
    return ContractNameDataService;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-terms-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractTermsDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_shared_services_authenticated_http_service__ = __webpack_require__("../../../../../src/app/common/shared/services/authenticated-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_shared_services_portal_service__ = __webpack_require__("../../../../../src/app/common/shared/services/portal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContractTermsDataService = (function () {
    function ContractTermsDataService(authenticatedHttpService, portalService) {
        this.authenticatedHttpService = authenticatedHttpService;
        this.portalService = portalService;
    }
    ContractTermsDataService.prototype.getContractTerms = function (contractId) {
        var _this = this;
        return this.authenticatedHttpService.post(this.portalService.appSettings.BaseUrls.ExtranetApi
            + 'api/Contracts/GetContractProperties/', contractId).map(function (data) {
            _this.contractTermsGroupDto = data.result;
            return _this.contractTermsGroupDto;
        });
    };
    ContractTermsDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_shared_services_authenticated_http_service__["a" /* AuthenticatedHttpService */],
            __WEBPACK_IMPORTED_MODULE_2__common_shared_services_portal_service__["a" /* PortalService */]])
    ], ContractTermsDataService);
    return ContractTermsDataService;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-url-notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractUrlNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractUrlNotificationService = (function () {
    function ContractUrlNotificationService() {
        this.urlPathSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.urlPath = this.urlPathSource.asObservable();
    }
    ContractUrlNotificationService.prototype.changeURLRoute = function (urlpath) {
        this.urlPathSource.next(urlpath);
    };
    ContractUrlNotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ContractUrlNotificationService);
    return ContractUrlNotificationService;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/common/pipes/contractsOrderPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractsOrderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContractsOrderPipe = (function () {
    function ContractsOrderPipe() {
    }
    ContractsOrderPipe.prototype.transform = function (records, args) {
        return records.sort(function (a, b) {
            if (args.property === 'hotelName' || args.property === 'location' ||
                args.property === 'name' || args.property === 'status' || args.property === 'contactPerson') {
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
            if (args.property === 'id') {
                if (a[args.property] > b[args.property]) {
                    return 1 * args.direction;
                }
                else if (a[args.property] < b[args.property]) {
                    return -1 * args.direction;
                }
                else {
                    return 0;
                }
            }
            if (args.property === 'startDateEndDate') {
                if (a['startDate'] > b['startDate']) {
                    return 1 * args.direction;
                }
                else if (a['startDate'] < b['startDate']) {
                    return -1 * args.direction;
                }
                else {
                    return 0;
                }
            }
        });
    };
    ContractsOrderPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'orderByContracts' })
    ], ContractsOrderPipe);
    return ContractsOrderPipe;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/allocations/allocations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".allocationsTable  .rateCategoryTH {\r\n    width: 10%;\r\n  } \r\n  \r\n  .allocationsTable  .roomTypeTH {\r\n    width: 15%;\r\n}\r\n\r\n.allocationsTable  .datesTH {\r\n    width: 15%;\r\n}\r\n\r\n.allocationsTable  .daysTH {\r\n    width: 10%;\r\n}\r\n\r\n.allocationsTable  .typeTH {\r\n    width: 15%;\r\n}\r\n\r\n.allocationsTable  .allotmentTH {\r\n    width: 10%;\r\n}\r\n\r\n.allocationsTable .bedTypeTh {\r\n    width: 11%;\r\n}\r\n\r\n.allocationsTable .saveBtns {\r\n  width: 14%;\r\n}\r\n\r\n.maxWidth600px {\r\n  max-width: 600px;\r\n}\r\n\r\n.table th {\r\n    vertical-align: middle;\r\n}\r\n\r\n.controlButtons.saveBtns .genericButton {\r\n    min-width: 50px;\r\n    padding: 8px 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/allocations/allocations.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"contractAllocationForm\">\n<div class=\"container-fluid\">\n    <h1 class=\"mainHeading mb-4 customBreadcrumb\">Allocations</h1>\n    <div class=\"row ml-0\">\n      <div class=\"col-md-6 maxWidth600px lightBlueContainer pb-2 pl-4 pr-2 pt-3 mb-3\">\n        <div class=\"row\">\n          <div class=\"col-md-9\">\n              <mat-form-field>\n                  <input matInput placeholder=\"Pooled Allotment\" formControlName=\"pooledAllotment\"  />\n              </mat-form-field>\n          </div>\n          <div class=\"col-md-3 pt-1\">\n              <button mat-raised-button class=\"btn addButton float-left\" title=\"Apply\" (click)=\"onPooledApply()\" >Apply</button>\n              <button mat-raised-button class=\"btn addButton float-left\" title=\"Clear\" (click)=\"onPooledClear()\" >Clear</button>\n              \n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"controlButtons\">\n        <button mat-raised-button class=\"defaultButton mb-3 genericButton genericSmallButton mat-raised-button floar-right\" (click)=\"addAllocationRange()\"  title=\"Create New Individual Allotment\">\n            <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n            <span>Create New Individual Allotment</span>\n        </button>\n    </div>\n    <table class=\"table genericTable allocationsTable\">\n        <thead>\n            <tr>\n                <th class=\"rateCategoryTH\">Rate Category *</th>\n                <th class=\"roomTypeTH\">Room Type *</th>\n                <th class=\"datesTH\">Dates *</th>\n                <th class=\"daysTH\">Days</th>\n                <th class=\"typeTH\">Type *</th>\n                <th class=\"allotmentTH\">Allotment</th>\n                <th class=\"bedTypeTh\">Bed Type & Rates (IDR)</th>\n                <th class=\"saveBtns\"></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr formArrayName=\"rangeAllocation\" \n            *ngFor=\"let allocation of rangeAllocation.controls; let i=index\">\n            <ng-container [formGroupName]=\"i\">\n                <td class=\"rateCategoryTH border-0\">\n                    <mat-form-field>\n                        <mat-select placeholder=\"Select\"  formControlName=\"rateCategoryId\"  required>\n                        <mat-option [value]=\"rate.id\" *ngFor='let rate of rateCategoryList'>{{rate.name}}</mat-option>\n                        </mat-select>\n                    </mat-form-field> \n                </td>\n                <td class=\"roomTypeTH border-0\">\n                    <mat-form-field>\n                      <mat-select placeholder=\"Select\"  formControlName=\"roomTypeId\"  required>\n                          <mat-option [value]=\"room.id\" *ngFor='let room of roomTypeList'>{{room.name}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                </td>\n                <td class=\"datesTH border-0\">\n                    <div>\n                      <mat-form-field>\n                          <span matPrefix>From &nbsp;</span>\n                          <input matInput [matDatepicker]=\"fromDate\" placeholder=\"DD-MMM-YY\"\n                            formControlName=\"fromDate\"  required>\n                          <mat-datepicker-toggle matSuffix [for]=\"fromDate\">\n                            <mat-icon matDatepickerToggleIcon>\n                              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                            </mat-icon>\n                          </mat-datepicker-toggle>\n                          <mat-datepicker #fromDate></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                    <div>\n                      <mat-form-field>\n                          <span matPrefix>To &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n                          <input matInput [matDatepicker]=\"toDate\" placeholder=\"DD-MMM-YY\"\n                            formControlName=\"toDate\"  required>\n                          <mat-datepicker-toggle matSuffix [for]=\"toDate\">\n                            <mat-icon matDatepickerToggleIcon>\n                              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                            </mat-icon>\n                          </mat-datepicker-toggle>\n                          <mat-datepicker #toDate></mat-datepicker>\n                        </mat-form-field>\n                    </div>\n                </td>\n                <td class=\"daysTH border-0\">\n                    <mat-form-field>\n                      <mat-select placeholder=\"Select\" name=\"days\" formControlName=\"days\" multiple required>\n                      <mat-option [value]=\"day.id\" *ngFor='let day of daysOfWeekList'>{{day.name}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                </td>\n                <td class=\"typeTH border-0\">\n                    <mat-form-field>\n                      <mat-select placeholder=\"Select\" name=\"allocationTypeId\" formControlName=\"allocationTypeId\" required>\n                        <mat-option [value]=\"type.id\" *ngFor='let type of allotmentTypeList'>{{type.name}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                </td>\n                <td class=\"allotmentTH border-0\">\n                    <mat-form-field>\n                      <input matInput  formControlName=\"allotment\" id=\"allotment\" required />\n                    </mat-form-field>\n                </td>\n                <td class=\"bedTypeTh border-0\">\n                    <div>\n                        <mat-form-field>\n                            <input matInput placeholder=\"Single\" formControlName=\"singleBed\" id=\"singleBed\" required />\n                          </mat-form-field>\n                    </div>\n              \n                    <div>\n                        <mat-form-field>\n                            <input matInput placeholder=\"Double/Twin\" formControlName=\"doubleBed\" id=\"doubleBed\" required />\n                          </mat-form-field>\n                    </div>\n              \n                    <div>\n                        <mat-form-field>\n                            <input matInput placeholder=\"Triple\" formControlName=\"tripleBed\" id=\"tripleBed\" required />\n                          </mat-form-field>\n                    </div>\n              \n                    <div>\n                        <mat-form-field>\n                            <input matInput placeholder=\"Quad\" formControlName=\"quadBed\" id=\"quadBed\" required />\n                          </mat-form-field>\n                    </div>\n              \n                    <div>\n                        <mat-form-field>\n                            <input matInput placeholder=\"XBed\" formControlName=\"extraBed\" id=\"extraBed\" required />\n                          </mat-form-field>\n                    </div>\n              \n                </td>\n                <td class=\"saveBtns controlButtons border-0\">\n                    <button  title=\"Save\" class=\"genericButton activeButton mat-raised-button mat-primary\">Save</button>\n                    <button title=\"Cancel\" class=\"genericButton defaultButton\" >Cancel</button>\n                </td>\n              </ng-container>\n            </tr>\n        </tbody>\n    </table>\n\n    <div>\n\n        <div >\n            <div >\n              <mat-error *ngIf=\"contractAllocationForm.get('rangeAllocation').errors \n              && contractAllocationForm.get('rangeAllocation').errors.ValidateRateCategoryId\">\n                This rate category Type already exists.\n              </mat-error>\n             \n            </div>\n          </div>\n    </div>\n</div>\n</form>\n<div class=\"row mt-5 ml-0 mr-0\">\n    <div class=\"col-md-12 controlButtons mb-4\">\n      <button title=\"Save\" class=\"genericButton activeButton mat-primary mat-raised-button\" >Save</button>\n      <button title=\"Cancel\" class=\"genericButton defaultButton mat-raised-button\" mat-raised-button >Cancel</button>\n      <button class=\"genericButton activeButton mat-primary mat-raised-button float-right\" title=\"Save &amp; Continue\" >Save &amp; Continue</button>\n    </div>\n  </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/allocations/allocations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function ValidateAllocationRange(control) {
    var arr = [];
    var allocationRangeList = control;
    var result = '';
    // Validations for elements of the range allocation array []
    // Has to have atleast 2 elements to compare
    if ((allocationRangeList.value !== undefined) && (allocationRangeList.value !== null) &&
        (allocationRangeList.value.length > 1)) {
        allocationRangeList.value.forEach(function (element, index) {
            if (index <= allocationRangeList.value.length) {
                result = traverseAllocationRangeList(allocationRangeList, index, ++index);
                if (result !== null && result !== undefined && result.length > 0) {
                    arr.push(result);
                }
            }
        });
        if (arr !== null && arr !== undefined && arr.length > 0) {
            return { 'ValidateRateCategoryId': true };
        }
        else {
            return null;
        }
    }
}
function traverseAllocationRangeList(rangeList, currentIndex, nextIndex) {
    // if (currentIndex === rangeList.length - 1 ) {
    //  return null;
    // }
    if (currentIndex < rangeList.length - 1) {
        var currentItem = rangeList.value[currentIndex];
        var nextItem = rangeList.value[nextIndex];
        if (currentItem.rateCategoryId !== undefined && currentItem.rateCategoryId !== null
            && currentItem.fromDate !== undefined && currentItem.fromDate !== null
            && currentItem.toDate !== undefined && currentItem.toDate !== null
            && currentItem.days !== undefined && currentItem.days !== null
            && currentItem.allocationTypeId !== undefined && currentItem.allocationTypeId !== null
            &&
                nextItem.rateCategoryId !== undefined && nextItem.rateCategoryId !== null
            && nextItem.fromDate !== undefined && nextItem.fromDate !== null
            && nextItem.toDate !== undefined && nextItem.toDate !== null
            && nextItem.days !== undefined && nextItem.days !== null
            && nextItem.allocationTypeId !== undefined && nextItem.allocationTypeId !== null) {
            // Add Validation Rules -- Now Just Testing
            var currentrateCategoryId = currentItem.rateCategoryId;
            var nextrateCategoryId = nextItem.rateCategoryId;
            if (currentrateCategoryId === nextrateCategoryId) {
                return 'ValidateRateCategoryId';
            }
            ++nextIndex;
            if (nextIndex === rangeList.length) {
                return null;
            }
            else {
                return traverseAllocationRangeList(rangeList, currentIndex, nextIndex);
            }
        }
        else {
            return null;
        }
    }
}
var AllocationsComponent = (function () {
    function AllocationsComponent(cd) {
        this.cd = cd;
        this.edit = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.read;
        // To do change this according to whether there are any range allocation created
        // If none then create 1 by default else show the number created on init
        this.contractAllocationOperation = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.create;
    }
    AllocationsComponent.prototype.ngOnInit = function () {
        // Get the master data
        // For testing
        this.rateCategoryList = [
            { id: 1, name: 'Standard Rate' },
            { id: 2, name: 'Read Only' },
            { id: 3, name: 'Non-Refundable' },
        ];
        this.roomTypeList = [
            { id: 1, name: 'Std-Haven-Double' },
            { id: 2, name: 'Std-Haven-Sunroof' },
            { id: 3, name: 'Std-Haven-Beach Front' },
            { id: 4, name: 'Stdd-Haven-Balcony' },
            { id: 5, name: 'Room Only-Haven-Double' },
            { id: 6, name: 'Room Only-Haven-Sunroof' },
            { id: 7, name: 'Room Only-Haven-Beach Front' },
            { id: 8, name: 'Room Only-Haven-Balcony' },
            { id: 9, name: 'NRF-Haven-Double' },
            { id: 10, name: 'NRF-Haven-Sunroof' },
            { id: 11, name: 'NRF-Haven-Beach Front' },
            { id: 12, name: 'NRF-Haven-Balcony' }
        ];
        this.daysOfWeekList = [
            { id: 'Mon', name: 'Mon' },
            { id: 'Tue', name: 'Tue' },
            { id: 'Wed', name: 'Wed' },
            { id: 'Thu', name: 'Thu' },
            { id: 'Fri', name: 'Fri' },
            { id: 'Sat', name: 'Sat' },
            { id: 'Sun', name: 'Sun' },
        ];
        this.allotmentTypeList = [
            { id: 1, name: 'Room Level' },
            { id: 2, name: 'Rate Category' },
            { id: 3, name: 'Is Free Sale' },
        ];
        // Create the Form Model
        this.contractAllocationForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            pooledAllotment: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            rangeAllocation: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"]([], ValidateAllocationRange)
        });
        // To do get operation-- Api whether there was any or do we need this?
        if (this.contractAllocationOperation.toLowerCase().trim() === this.create) {
            this.addAllocationRange();
        }
    };
    Object.defineProperty(AllocationsComponent.prototype, "rangeAllocation", {
        get: function () {
            return this.contractAllocationForm.get('rangeAllocation');
        },
        enumerable: true,
        configurable: true
    });
    AllocationsComponent.prototype.addAllocationRange = function () {
        this.rangeAllocation.push(this.buildAllocationRange());
        this.cd.detectChanges();
    };
    AllocationsComponent.prototype.buildAllocationRange = function () {
        var allocationRangeGroup;
        allocationRangeGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            rateCategoryId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            roomTypeId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            fromDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            toDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            days: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            allocationTypeId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            allotment: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            singleBed: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            doubleBed: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            tripleBed: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            quadBed: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            extraBed: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
        return allocationRangeGroup;
    };
    AllocationsComponent.prototype.onPooledApply = function () {
        var pooledAllotment = this.contractAllocationForm.get('pooledAllotment').value;
        this.rangeAllocation.controls.forEach(function (control, index) {
            control.get('allotment').setValue(pooledAllotment);
            control.get('allotment').disable();
        });
    };
    AllocationsComponent.prototype.onPooledClear = function () {
        this.contractAllocationForm.get('pooledAllotment').setValue('');
        this.rangeAllocation.controls.forEach(function (control, index) {
            control.get('allotment').setValue('');
            control.get('allotment').enable();
        });
    };
    AllocationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-allocations',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/allocations/allocations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/allocations/allocations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], AllocationsComponent);
    return AllocationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract-list/contract-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".genericTable th:nth-child(1), .genericTable tr td:nth-child(1) {\r\n  width: 2%;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n.genericTable th:nth-child(2), .genericTable tr td:nth-child(2) {\r\n  width: 15%;\r\n}\r\n.genericTable th:nth-child(3), .genericTable tr td:nth-child(3) {\r\n  width: 15%;\r\n}\r\n.genericTable th:nth-child(4), .genericTable tr td:nth-child(4) {\r\n  width: 10%;\r\n}\r\n.genericTable th:nth-child(5), .genericTable tr td:nth-child(5) {\r\n  width: 11%;\r\n}\r\n.genericTable th:nth-child(6), .genericTable tr td:nth-child(6) {\r\n  width: 14%;\r\n}\r\n.genericTable th:nth-child(7), .genericTable tr td:nth-child(7) {\r\n  width: 13%;\r\n}\r\n.genericTable th:nth-child(8), .genericTable tr td:nth-child(8) {\r\n  width: 10%;\r\n}\r\n.genericTable th:nth-child(9), .genericTable tr td:nth-child(9) {\r\n  width: 10%;\r\n}\r\n\r\n.extraRowsCount {\r\n  background-color: #29aae2 ;\r\n  padding: 5px;\r\n  color: #fff;\r\n}\r\n\r\n.extraRowsCount span {\r\n  font-size: 15px;\r\n}\r\n\r\n.fa-angle-down, .fa-angle-up {\r\n  font-size: 20px;\r\n  color: #29aae2 ;\r\n}\r\n\r\n.page-size {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  float: right;\r\n  position: relative;\r\n  font-size: 13.5px;\r\n  width: 66px;\r\n  margin-top: 0.1875rem;\r\n}\r\n\r\n.page-size label {\r\n  display: inline-block;\r\n  margin: 0 .5rem .5rem 0;\r\n  line-height: 2rem;\r\n  white-space: nowrap;\r\n}\r\n\r\n.page-size mat-select {\r\n  outline: none;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n}\r\n\r\n.page-size select::-ms-expand {\r\n  display: none;\r\n}\r\n\r\n.contractsPagination {\r\n  font-size: 0.875rem;\r\n  display: inline-block;\r\n}\r\n\r\npagination-controls /deep/ .ngx-pagination .current {\r\n  color: #29aae2 ;\r\n  font-family: 'maven_proregular';\r\n  background: #fff;\r\n}\r\n\r\n.PaginationControls{\r\n  text-align: center;\r\n}\r\n/*Pagination next*/\r\n\r\npagination-controls /deep/ li.pagination-next.ng-star-inserted {\r\n    font-size: 0.1rem;\r\n    color: #29aae2;\r\n    background: #29aae2;\r\n    padding: 8px 0 1px 0px !important;\r\n    line-height: 12px;\r\n    position: relative;\r\n}\r\n\r\n  pagination-controls /deep/ li.pagination-next.ng-star-inserted.disabled {\r\n    font-size: 0.2rem;\r\n    background: rgba(0, 0, 0, 0.12) !important;\r\n    opacity:inherit;\r\n    color:rgba(0, 0, 0, 0.12) !important;\r\n    padding: 6px 8px 0 7px !important;\r\n    line-height: 23px;\r\n    position: relative;\r\n  }\r\n\r\npagination-controls /deep/ li.pagination-previous.disabled.ng-star-inserted {\r\n  background: rgba(0, 0, 0, 0.12) !important;\r\n  opacity:inherit;\r\n  color:rgba(0, 0, 0, 0.12) !important;\r\n}\r\n\r\n  pagination-controls /deep/ li.pagination-previous.disabled.ng-star-inserted{\r\n    background: rgba(0, 0, 0, 0.12) !important;\r\n    opacity:inherit;\r\n    color:rgba(0, 0, 0, 0.12) !important;\r\n  }\r\n\r\n  pagination-controls /deep/ li.pagination-next.ng-star-inserted a.ng-star-inserted:before {\r\n    content: '\\F0DA';\r\n    font: 21px FontAwesome;\r\n    display: inline-block;\r\n    color: #fff;\r\n    position: absolute;\r\n    left: 14px;\r\n    top: 3px;\r\n  }\r\n\r\n  pagination-controls /deep/ li.pagination-next.ng-star-inserted.disabled:before {\r\n    content: '\\F0DA';\r\n    font: 21px FontAwesome;\r\n    display: inline-block;\r\n    color: rgba(0, 0, 0, 0.26);\r\n    position: absolute;\r\n    left: 14px;\r\n    top: 4px;\r\n  }\r\n\r\n\r\n/*Pagination previous*/\r\n\r\npagination-controls /deep/ li.pagination-previous.disabled.ng-star-inserted {\r\n  font-size: 0.2rem;\r\n  color: #b3c3d9;\r\n  background: #b3c3d9;\r\n  padding: 6px 6px 0 15px !important;\r\n  position: relative;\r\n  line-height: 23px;\r\n}\r\n\r\n  pagination-controls /deep/ li.pagination-previous.disabled.ng-star-inserted:before {\r\n    content: '\\F0D9';\r\n    font: 21px FontAwesome;\r\n    display: inline-block;\r\n    left: 34%;\r\n    color: #fff;\r\n    position: absolute;\r\n    top: 11%;\r\n  }\r\n\r\npagination-controls /deep/ li.pagination-previous.ng-star-inserted {\r\n  color: #29aae2;\r\n  background: #29aae2;\r\n  font-size: 0.2rem;\r\n  line-height: 16px;\r\n  padding-top: 6px;\r\n  position: relative;\r\n}\r\n\r\n  pagination-controls /deep/ li.pagination-previous.ng-star-inserted a.ng-star-inserted {\r\n    position: relative;\r\n  }\r\n\r\n    pagination-controls /deep/ li.pagination-previous.ng-star-inserted a.ng-star-inserted:before {\r\n      content: '\\F0D9';\r\n      font: 21px FontAwesome;\r\n      display: inline-block;\r\n      color: #fff;\r\n      position: absolute;\r\n      bottom: 4px;\r\n      left: 10px;\r\n    }\r\n\r\npagination-controls /deep/ .ngx-pagination a:hover,\r\n.ngx-pagination button:hover {\r\n  background: none;\r\n}\r\n\r\n.width80percent {\r\n  width: 80%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract-list/contract-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"mt-4 pt-2\">\n\n    <h1 class=\"mainHeading borderBottomNone pb-0\">Contracts</h1>\n    <div class=\"row mt-4 mb-5\">\n      <form [formGroup]=\"searchContracts\" (ngSubmit)=\"findContracts(searchContracts.get('searchText').value,searchContracts.get('fromDate').value,searchContracts.get('toDate').value,searchContracts.get('startOrEndDate').value)\"\n        class=\"w-100\">\n        <div class=\"col-md-12\">\n          <div class=\"lightBlueContainer pb-2 pl-4 pr-4 pt-4\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n\n                  <div class=\"col-md-2\">\n                    <mat-form-field class=\"width80percent\">\n                      <span matPrefix>From &nbsp;</span>\n                      <mat-datepicker-toggle matSuffix [for]=\"fromdate\">\n                        <mat-icon matDatepickerToggleIcon>\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                        </mat-icon>\n                      </mat-datepicker-toggle>\n                      <input matInput readonly [matDatepicker]=\"fromdate\" placeholder=\"DD-MMM-YY\" formControlName=\"fromDate\">\n                      <mat-datepicker #fromdate></mat-datepicker>\n                    </mat-form-field>\n                    <span class=\"btn transparent-circle smallDeleteIcon ml-1\" title=\"Delete\">\n                      <i aria-hidden=\"true\" class=\"fa fa-times-thin\" (click)=\"checkIsFromDateCleared();\"></i>\n                    </span>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <mat-form-field class=\"width80percent\">\n                      <span matPrefix>To &nbsp;</span>\n                      <input matInput readonly [matDatepicker]=\"todate\" placeholder=\"DD-MMM-YY\" formControlName=\"toDate\" [min]=\"searchContracts.get('fromDate').value\">\n                      <mat-datepicker-toggle matSuffix [for]=\"todate\">\n                        <mat-icon matDatepickerToggleIcon>\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                        </mat-icon>\n                      </mat-datepicker-toggle>\n                      <mat-datepicker #todate></mat-datepicker>\n                    </mat-form-field>\n                    <span class=\"btn transparent-circle smallDeleteIcon ml-1\" title=\"Delete\">\n                      <i aria-hidden=\"true\" class=\"fa fa-times-thin\" (click)=\"checkIsToDateCleared();\"></i>\n                    </span>\n                  </div>\n                  <div class=\"col-md-2 alignItemCenter\">\n                    <mat-radio-group formControlName=\"startOrEndDate\" class=\"col-md-12\">\n                      <div class=\"row\">\n                        <div class=\"col-md-6\">\n                          <mat-radio-button [value]=\"'start'\">Start date</mat-radio-button>\n                        </div>\n                        <div class=\"col-md-6\">\n                          <mat-radio-button [value]=\"'end'\">End date</mat-radio-button>\n                        </div>\n                      </div>\n                    </mat-radio-group>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Search by Hotel Name, Contract Name, Contact, Location\" formControlName=\"searchText\" (keyup)=\"checkIsInputCleared($event)\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-2 text-right controlButtons\">\n                    <button [hidden]='isRead' class=\"genericButton activeButton mat-primary mat-raised-button genericSmallButton top10px\" title=\"Search\" type=\"submit\">\n                      Search</button>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"row mb-3\">\n      <div *ngIf=\"createView\" class=\"col-md-12 text-right controlButtons\">\n        <button [hidden]='isRead' class=\"defaultButton genericButton genericSmallButton mat-raised-button\" mat-raised-button title=\"Create New Contract\"\n          type=\"button\" (click)=\"createContract()\">\n          <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n          <span>Create New Contract</span>\n        </button>\n      </div>\n    </div>\n\n    <table class=\"table genericTable mb-4\">\n      <thead>\n        <tr class=\"title-Bar\">\n          <th></th>\n          <th (click)=\"sort('hotelName')\">\n            Hotel Name\n            <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'hotelName',\n                      'fa-sort-desc': (column == 'hotelName' && !isDesc),\n                      'fa-sort-asc': (column == 'hotelName' && isDesc) }\" aria-hidden=\"true\"></i>\n          </th>\n          <th (click)=\"sort('contactPerson')\">\n            Contact\n            <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'contactPerson',\n                      'fa-sort-desc': (column == 'contactPerson' && !isDesc),\n                      'fa-sort-asc': (column == 'contactPerson' && isDesc) }\" aria-hidden=\"true\"></i>\n          </th>\n          <th (click)=\"sort('location')\">\n            Location\n            <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'location',\n                      'fa-sort-desc': (column == 'location' && !isDesc),\n                      'fa-sort-asc': (column == 'location' && isDesc) }\" aria-hidden=\"true\"></i>\n          </th>\n          <th (click)=\"sort('id')\">\n            Contract ID\n            <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'id',\n                      'fa-sort-desc': (column == 'id' && !isDesc),\n                      'fa-sort-asc': (column == 'id' && isDesc) }\" aria-hidden=\"true\"></i>\n          </th>\n          <th (click)=\"sort('name')\">\n            Contract Name\n            <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'name',\n                      'fa-sort-desc': (column == 'name' && !isDesc),\n                      'fa-sort-asc': (column == 'name' && isDesc) }\" aria-hidden=\"true\"></i>\n          </th>\n          <th (click)=\"sort('startDateEndDate')\">\n            Start-End Date\n            <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'startDateEndDate',\n                      'fa-sort-desc': (column == 'startDateEndDate' && !isDesc),\n                      'fa-sort-asc': (column == 'startDateEndDate' && isDesc) }\" aria-hidden=\"true\"></i>\n          </th>\n          <th (click)=\"sort('status')\">\n            Status\n            <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'status',\n                      'fa-sort-desc': (column == 'status' && !isDesc),\n                      'fa-sort-asc': (column == 'status' && isDesc) }\" aria-hidden=\"true\"></i>\n          </th>\n          <th class=\"ActionTh\"></th>\n        </tr>\n        <tr class=\"white-space\"></tr>\n      </thead>\n      <tbody>\n        <ng-container *ngFor=\"let contract of (!isSearch ? contractsList : filteredData) | orderByContracts: {property:column,direction: direction} | paginate: { itemsPerPage: pagesize, currentPage: currentpage}\">\n          <tr (click)=\"contract.isExpanded = !contract.isExpanded\">\n            <td>\n              <div *ngIf=\"contract.promoContracts.length !== 0\" class=\"ml-1\">\n                <i class=\"fa\" [ngClass]=\"{'fa-angle-down': contract.isExpanded === false ,\n                                          'fa-angle-up': contract.isExpanded === true  }\" aria-hidden=\"true\"></i>\n              </div>\n            </td>\n            <td class=\"hotelTitle\">\n              <div>{{contract.hotelName}}</div>\n              <span *ngIf=\"contract.promoContracts.length !== 0\" class=\"extraRowsCount d-inline-block mt-2\">\n                <span>+</span> {{contract.promoContracts.length}} More</span>\n            </td>\n            <td>\n              <div *ngFor=\"let contact of contract.contacts\">\n                {{contact.contactPerson}}\n                <br> {{contract.designation}}\n                <br> {{contact.emailAddress}}\n                <br> {{contact.contactNumber}}\n              </div>\n            </td>\n            <td>{{contract.location}}</td>\n            <td>{{contract.id}}</td>\n            <td>\n              <div>{{contract.name}}</div>\n              <div class=\"lightGrey mt-1\">\n                <i class=\"fa fa-file-o\" aria-hidden=\"true\"></i>\n                {{contract.contractType}}</div>\n            </td>\n            <td>\n              <span class=\"d-block\">{{contract.startDate | date : \"dd-MMM-yy\"}} to</span>\n              <span class=\"d-block\">{{contract.endDate | date: \"dd-MMM-yy\"}}</span>\n            </td>\n            <td>\n              <i class=\"fa draft_status\"></i>{{contract.status}}</td>\n            <td class=\"text-center placeholderColorGray\" *ngIf='createView || deleteView'>\n              <mat-select placeholder=\"Actions\" name=\"Actions\" [(ngModel)]=\"actions\">\n                <mat-option value=\"{{contract.id}}-edit\" #edit (click)=\"GoContractUpdate(edit.value, contract)\">Edit</mat-option>\n                <mat-option value=\"{{contract.id}}-delete\" #delete (click)=\"GoContractUpdate(delete.value)\">Delete</mat-option>\n                <!-- <mat-option *ngIf=\"contract.status !== 'draft'\" value=\"{{contract.id}}-view\" #view (click)=\"ViewPDF()\" target=\"_blank\">View PDF</mat-option> -->\n              </mat-select>\n            </td>\n          </tr>\n          <ng-container *ngFor=\"let promoContract of contract.promoContracts\">\n            <tr *ngIf=\"contract.isExpanded === true\" class=\"backgroundNone\">\n              <td class=\"borderBottomNone borderTopNone\"></td>\n              <td class=\"borderBottomNone borderTopNone\"></td>\n              <td class=\"borderBottomNone borderTopNone\"></td>\n              <td class=\"borderBottomNone borderTopNone\"></td>\n              <td class=\"dottedBorderBottom\">{{promoContract.id}}</td>\n              <td class=\"dottedBorderBottom\">\n                <div>{{promoContract.name}}</div>\n                <div class=\"lightGrey mt-1\">\n                  <i class=\"fa fa-file-o\" aria-hidden=\"true\"></i>\n                  {{promoContract.contractType}}</div>\n              </td>\n              <td class=\"dottedBorderBottom\">\n                <span class=\"d-block\">{{contract.startDate | date : \"dd-MMM-yy\"}} to</span>\n                <span class=\"d-block\">{{contract.endDate | date: \"dd-MMM-yy\"}}</span>\n              </td>\n              <td class=\"dottedBorderBottom\">\n                <i class=\"fa fa-circle active_status\"></i>{{promoContract.status}}</td>\n              <td class=\"text-center placeholderColorGray dottedBorderBottom\" *ngIf='createView || deleteView'>\n                <mat-select placeholder=\"Actions\" name=\"Actions\" [(ngModel)]=\"actions\">\n                  <mat-option value=\"{{contract.id}}-edit\" #edit (click)=\"GoPromoContractUpdate(edit.value, promoContract)\">Edit</mat-option>\n                  <mat-option value=\"{{contract.id}}-delete\" #delete (click)=\"GoPromoContractUpdate(delete.value)\">Delete</mat-option>\n                  <!-- <mat-option value=\"{{contract.id}}-view\" #view (click)=\"ViewPDF()\" target=\"_blank\">View PDF</mat-option> -->\n                </mat-select>\n              </td>\n            </tr>\n          </ng-container>\n        </ng-container>\n      </tbody>\n    </table>\n    <div style=\"color:orange\" *ngIf=\"noDataAvailable\">\n      No Contract is created.\n    </div>\n    <div *ngIf=\"!noDataAvailable\" class=\"row PaginationControls pl-5 ml-4\">\n\n      <div class=\"col-md-10\">\n        <div class=\"contractsPagination\">\n          <pagination-controls (pageChange)=\"currentpage = $event\" boundaryLinks=true directionLinks=true autoHide=\"false\">\n          </pagination-controls>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"page-size\">\n          <mat-select placeholder=\"Show\" class=\"form-group\" (select)=\"onPageChange($event)\" [(ngModel)]=\"pagesize\">\n            <mat-option [value]=\"5\">5</mat-option>\n            <mat-option [value]=\"10\">10</mat-option>\n            <mat-option [value]=\"20\">20</mat-option>\n            <mat-option [value]=\"50\">50</mat-option>\n          </mat-select>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract-list/contract-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePickerDateAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_shared_services_user_profile_service__ = __webpack_require__("../../../../../src/app/common/shared/services/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_extranet_shared_dialogs_dialogs_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/dialogs/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_extranet_shared_services_contracts_contract_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_extranet_shared_services_contracts_contract_name_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-name-data.service.ts");
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
}(__WEBPACK_IMPORTED_MODULE_5__angular_material_core__["u" /* NativeDateAdapter */]));

var ContractListComponent = (function () {
    function ContractListComponent(router, activatedRoute, contractsDataService, userProfileService, datepipe, dialogsService, contractNameDataService, changeDetectorRefs) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.contractsDataService = contractsDataService;
        this.userProfileService = userProfileService;
        this.datepipe = datepipe;
        this.dialogsService = dialogsService;
        this.contractNameDataService = contractNameDataService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.deleteView = false;
        this.createView = false;
        this.readView = false;
        this.edit = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.read;
        this.isDesc = false;
        this.pagesize = 20;
        this.currentpage = 1;
    }
    ContractListComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.isSearch = false;
        this.isDesc = false;
        this.searchContracts = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            fromDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            toDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](),
            startOrEndDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('start'),
            searchText: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]()
        });
        this.getPrivileges();
        this.contractsList = this.activatedRoute.snapshot.data['contractListData'];
        for (var _i = 0, _a = this.contractsList; _i < _a.length; _i++) {
            var contract = _a[_i];
            contract.contactPerson = contract.contacts[0].contactPerson.toLowerCase() + '\n' + contract.designation + '\n' +
                contract.contacts.contactPerson + '\n' + contract.contacts.contactPerson;
        }
        for (var _b = 0, _c = this.contractsList; _b < _c.length; _b++) {
            var contract = _c[_b];
            contract.isExpanded = false;
        }
        this.changeDetectorRefs.detectChanges();
        if (this.contractsList.length === 0) {
            this.noDataAvailable = true;
        }
    };
    ContractListComponent.prototype.createContract = function () {
        var _this = this;
        this.dialogsService.openContractTemplateModal().subscribe(function (res) {
            _this.result = res;
        });
    };
    ContractListComponent.prototype.getPrivileges = function () {
        this.privileges = this.userProfileService.GetUserPermissionsForFeature(__WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].application.extranet, __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].featuretypeid.Templates);
        for (var _i = 0, _a = this.privileges; _i < _a.length; _i++) {
            var privilege = _a[_i];
            if (privilege === 'VW') {
                this.readView = true;
            }
            else if (privilege === 'CR') {
                this.createView = true;
            }
            else if (privilege === 'DE') {
                this.deleteView = true;
            }
        }
    };
    ContractListComponent.prototype.findContracts = function (filterValue, filterFrom, filterTo, startOrEndDate) {
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
        function getFilteredPromoContracts(contract) {
            var isTrue;
            isTrue = false;
            var promoData = contract.promoContracts.filter(function (promoContract) {
                if (promoContract.name.toLowerCase().includes(filterValue)) {
                    isTrue = true;
                    return promoContract;
                }
            });
            if (isTrue) {
                contract.isExpanded = true;
                contract.promoContracts = promoData;
                return contract;
            }
        }
        if (this.isSearch) {
            this.filteredData = this.contractsList.filter(function (contract) {
                var startDate = _this.datepipe.transform(contract.startDate, 'yyyy-MM-dd');
                var endDate = _this.datepipe.transform(contract.endDate, 'yyyy-MM-dd');
                if (startOrEndDate === 'start') {
                    if (filterValue !== null && (filterFrom === null && filterTo === null)) {
                        if (contract.hotelName.toLowerCase().includes(filterValue) ||
                            contract.name.toLowerCase().includes(filterValue) ||
                            contract.designation.toLowerCase().includes(filterValue) ||
                            (contract.contacts[0].contactPerson.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].emailAddress.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].contactNumber.toLowerCase().includes(filterValue)) ||
                            contract.location.toLowerCase().includes(filterValue) ||
                            getFilteredPromoContracts(contract)) {
                            contract.isExpanded = true;
                            return contract;
                        }
                    }
                    else if (filterFrom !== null && (filterTo === null && filterValue === null)) {
                        return startDate >= filterFrom;
                    }
                    else if (filterTo !== null && (filterFrom === null && filterValue === null)) {
                        return startDate <= filterTo;
                    }
                    else if (filterValue === null && (filterFrom !== null && filterTo !== null)) {
                        return filterFrom <= startDate && startDate <= filterTo;
                    }
                    else if (filterFrom === null && (filterValue !== null && filterTo !== null)) {
                        if ((contract.hotelName.toLowerCase().includes(filterValue) ||
                            contract.name.toLowerCase().includes(filterValue) ||
                            contract.designation.toLowerCase().includes(filterValue) ||
                            (contract.contacts[0].contactPerson.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].emailAddress.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].contactNumber.toLowerCase().includes(filterValue)) ||
                            contract.location.toLowerCase().includes(filterValue) ||
                            getFilteredPromoContracts(contract)) &&
                            startDate <= filterTo) {
                            contract.isExpanded = true;
                            return contract;
                        }
                    }
                    else if (filterTo === null && (filterFrom !== null && filterValue !== null)) {
                        if ((contract.hotelName.toLowerCase().includes(filterValue) ||
                            contract.name.toLowerCase().includes(filterValue) ||
                            contract.designation.toLowerCase().includes(filterValue) ||
                            (contract.contacts[0].contactPerson.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].emailAddress.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].contactNumber.toLowerCase().includes(filterValue)) ||
                            contract.location.toLowerCase().includes(filterValue) ||
                            getFilteredPromoContracts(contract)) &&
                            startDate >= filterFrom) {
                            contract.isExpanded = true;
                            return contract;
                        }
                    }
                    else if (filterFrom !== null && filterTo !== null && filterValue !== null) {
                        if ((contract.hotelName.toLowerCase().includes(filterValue) ||
                            contract.name.toLowerCase().includes(filterValue) ||
                            contract.designation.toLowerCase().includes(filterValue) ||
                            (contract.contacts[0].contactPerson.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].emailAddress.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].contactNumber.toLowerCase().includes(filterValue)) ||
                            contract.location.toLowerCase().includes(filterValue) ||
                            getFilteredPromoContracts(contract)) &&
                            filterFrom <= startDate && startDate <= filterTo) {
                            contract.isExpanded = true;
                            return contract;
                        }
                    }
                }
                else {
                    if (filterValue !== null && (filterFrom === null && filterTo === null)) {
                        if (contract.hotelName.toLowerCase().includes(filterValue) ||
                            contract.name.toLowerCase().includes(filterValue) ||
                            contract.designation.toLowerCase().includes(filterValue) ||
                            (contract.contacts[0].contactPerson.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].emailAddress.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].contactNumber.toLowerCase().includes(filterValue)) ||
                            contract.location.toLowerCase().includes(filterValue) ||
                            getFilteredPromoContracts(contract)) {
                            contract.isExpanded = true;
                            return contract;
                        }
                    }
                    else if (filterFrom !== null && (filterTo === null && filterValue === null)) {
                        return endDate >= filterFrom;
                    }
                    else if (filterTo !== null && (filterFrom === null && filterValue === null)) {
                        return endDate <= filterTo;
                    }
                    else if (filterValue === null && (filterFrom !== null && filterTo !== null)) {
                        return filterFrom <= endDate && endDate <= filterTo;
                    }
                    else if (filterFrom === null && (filterValue !== null && filterTo !== null)) {
                        if ((contract.hotelName.toLowerCase().includes(filterValue) ||
                            contract.name.toLowerCase().includes(filterValue) ||
                            contract.designation.toLowerCase().includes(filterValue) ||
                            (contract.contacts[0].contactPerson.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].emailAddress.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].contactNumber.toLowerCase().includes(filterValue)) ||
                            contract.location.toLowerCase().includes(filterValue) ||
                            getFilteredPromoContracts(contract)) &&
                            endDate <= filterTo) {
                            contract.isExpanded = true;
                            return contract;
                        }
                    }
                    else if (filterTo === null && (filterFrom !== null && filterValue !== null)) {
                        if ((contract.hotelName.toLowerCase().includes(filterValue) ||
                            contract.name.toLowerCase().includes(filterValue) ||
                            contract.designation.toLowerCase().includes(filterValue) ||
                            (contract.contacts[0].contactPerson.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].emailAddress.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].contactNumber.toLowerCase().includes(filterValue)) ||
                            contract.location.toLowerCase().includes(filterValue) ||
                            getFilteredPromoContracts(contract)) &&
                            endDate >= filterFrom) {
                            contract.isExpanded = true;
                            return contract;
                        }
                    }
                    else if (filterFrom !== null && filterTo !== null && filterValue !== null) {
                        if ((contract.hotelName.toLowerCase().includes(filterValue) ||
                            contract.name.toLowerCase().includes(filterValue) ||
                            contract.designation.toLowerCase().includes(filterValue) ||
                            (contract.contacts[0].contactPerson.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].emailAddress.toLowerCase().includes(filterValue) ||
                                contract.contacts[0].contactNumber.toLowerCase().includes(filterValue)) ||
                            contract.location.toLowerCase().includes(filterValue) ||
                            getFilteredPromoContracts(contract)) &&
                            filterFrom <= endDate && endDate <= filterTo) {
                            contract.isExpanded = true;
                            return contract;
                        }
                    }
                }
            });
            for (var _i = 0, _a = this.filteredData; _i < _a.length; _i++) {
                var contract = _a[_i];
                contract.contactPerson = contract.contacts[0].contactPerson.toLowerCase() + '\n' + contract.designation + '\n' +
                    contract.contacts.contactPerson + '\n' + contract.contacts.contactPerson;
            }
        }
    };
    ContractListComponent.prototype.checkIsInputCleared = function (event) {
        if (this.searchContracts.get('searchText').value && this.searchContracts.get('searchText').value.length < 3) {
            this.getContractsList();
        }
    };
    ContractListComponent.prototype.checkIsFromDateCleared = function () {
        this.searchContracts.get('fromDate').setValue(null);
        if ((this.searchContracts.get('searchText').value === null || this.searchContracts.get('searchText').value === '') &&
            this.searchContracts.get('toDate').value === null) {
            this.getContractsList();
        }
    };
    ContractListComponent.prototype.checkIsToDateCleared = function () {
        this.searchContracts.get('toDate').setValue(null);
        if ((this.searchContracts.get('searchText').value === null || this.searchContracts.get('searchText').value === '') &&
            this.searchContracts.get('fromDate').value === null) {
            this.getContractsList();
        }
    };
    ContractListComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc;
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    ContractListComponent.prototype.onPageChange = function (event) {
        this.pagesize = event.value;
    };
    ContractListComponent.prototype.GoContractUpdate = function (e, contract) {
        // this.dialogsService
        // .confirm('Information', 'Work in Progress.', false).subscribe(res => {
        //   this.result = res;
        //   if (this.result) {
        //   }
        // });
        // const val = e.value.split('-');
        var contractBasicInfo = contract.name.trim() +
            '~#' +
            new Date(contract.startDate) +
            '~#' +
            new Date(contract.endDate);
        this.contractsDataService.contractBasicDetails = contractBasicInfo;
        this.contractsDataService.savedcontractBasicDetails = contractBasicInfo;
        this.contractNameDataService.changeContractName(contractBasicInfo);
        var val = e.split('-');
        var contractId = val[0];
        this.operation = val[1];
        if (this.operation.trim().toLowerCase() === this.edit) {
            this.router.navigate(['../contract', contractId, this.operation.trim().toLowerCase()], { relativeTo: this.activatedRoute });
        }
    };
    ContractListComponent.prototype.GoPromoContractUpdate = function (e) {
        // this.dialogsService
        // .confirm('Information', 'Work in Progress.', false).subscribe(res => {
        //   this.result = res;
        //   if (this.result) {
        //   }
        // });
        // const val = e.value.split('-');
        var val = e.split('-');
        var contractId = val[0];
        this.operation = val[1];
        if (this.operation.trim().toLowerCase() === this.edit) {
            this.router.navigate(['../contract', contractId, this.operation.trim().toLowerCase()], { relativeTo: this.activatedRoute });
        }
    };
    // ViewPDF() {
    //   const path = {
    //     path: '\\MGDocuments\\hotelId-1486\\contracts\\815944525.pdf'
    //   };
    //   this.contractsDataService.viewPdf(path).subscribe((result) => {
    //     console.log(result);
    //   });
    // }
    ContractListComponent.prototype.getContractsList = function () {
        var _this = this;
        this.contractsDataService.getContractsList().subscribe(function (contractsList) {
            _this.isSearch = false;
            _this.contractsList = contractsList;
            _this.filteredData = contractsList;
            for (var _i = 0, _a = _this.filteredData; _i < _a.length; _i++) {
                var contract = _a[_i];
                contract.isExpanded = false;
                contract.contactPerson = contract.contacts[0].contactPerson.toLowerCase() + '\n' + contract.designation + '\n' +
                    contract.contacts.contactPerson + '\n' + contract.contacts.contactPerson;
            }
            for (var _b = 0, contractsList_1 = contractsList; _b < contractsList_1.length; _b++) {
                var contract = contractsList_1[_b];
                contract.isExpanded = false;
                contract.contactPerson = contract.contacts[0].contactPerson.toLowerCase() + '\n' + contract.designation + '\n' +
                    contract.contacts.contactPerson + '\n' + contract.contacts.contactPerson;
            }
            _this.changeDetectorRefs.detectChanges();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ContractListComponent.prototype, "_dateValue", void 0);
    ContractListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contract-list',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract-list/contract-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract-list/contract-list.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_material_core__["c" /* DateAdapter */], useClass: DatePickerDateAdapter },
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_material_core__["f" /* MAT_DATE_FORMATS */], useValue: DATE_FORMATS },
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_8__common_extranet_shared_services_contracts_contract_data_service__["a" /* ContractDataService */],
            __WEBPACK_IMPORTED_MODULE_4__common_shared_services_user_profile_service__["a" /* UserProfileService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_7__common_extranet_shared_dialogs_dialogs_service__["a" /* DialogsService */],
            __WEBPACK_IMPORTED_MODULE_9__common_extranet_shared_services_contracts_contract_name_data_service__["a" /* ContractNameDataService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], ContractListComponent);
    return ContractListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract-nav-menu/contract-nav-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".genericTable mat-header-cell, .genericTable mat-row mat-cell {\r\n  width: 28%;\r\n}\r\n\r\n.genericTable mat-header-cell:last-child, .genericTable mat-row mat-cell:last-child {\r\n  width: 16%;\r\n}\r\n\r\n.minWidth230px {\r\n  min-width: 230px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract-nav-menu/contract-nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"mt-4\">\n      <div class=\"customBreadcrumb mb-4\">\n          <span>Contracts </span><span>&gt; {{breadcrumbs}} Contract {{contractTypeName}}</span>\n      </div>\n    <h1 class=\"mainHeading borderBottomNone customBreadcrumb\">{{breadcrumbs}} Contract <span class=\"mandatoryInfo float-right\">Indicates Mandatory Fields</span></h1>\n    <p class=\"m-0\">Complete below steps to create your new contract</p>\n    <form [formGroup]=\"createContract\">\n    <div class=\"row mb-4 mt-5\">\n      <div class=\"col-md-12\">\n        <div class=\"lightBlueContainer pb-2 pl-4 pr-2 pt-3 mb-3\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"row\">\n                  <div class=\"form-group col-md-6 mb-0\">\n                      <mat-form-field class=\"example-full-width\">\n                        <input matInput placeholder=\"Contract Name\" formControlName=\"contractNameEntered\"\n                          required  [disabled]=\"isNameEditable\" (keyup)=\"checkContractName()\" (change)=\"checkContractName()\" maxlength=\"150\"/>\n                      </mat-form-field>\n                      <div class=\"col-md-12 templateNameError\">\n                        <mat-error *ngIf=\"uniqueNameError\">\n                          Contract Name already exists.\n                        </mat-error>\n                      </div>\n                    </div>\n                    <div class=\"col-md-2 minWidth230px\">\n                      <mat-form-field>\n                        <span class=\"requiredLabel mr-3\" matPrefix>Start Date</span>\n                        <mat-datepicker-toggle matSuffix [for]=\"sdate\">\n                          <mat-icon matDatepickerToggleIcon>\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                          </mat-icon>\n                        </mat-datepicker-toggle>\n                        <input matInput [matDatepicker]=\"sdate\" placeholder=\"DD-MMM-YY\" [disabled]=\"isNameEditable\" formControlName=\"startDate\" (dateInput)=\"dateChangeEvent('startDate', $event)\" (dateChange)=\"dateChangeEvent('startDate', $event)\"\n                        [min]=\"(contractTypeName === ' (Non - MG)') ? startNonMGDate : startDate\"\n                        >\n                        <mat-datepicker #sdate></mat-datepicker>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-md-2 minWidth230px\">\n                      <mat-form-field>\n                        <span class=\"requiredLabel mr-3\" matPrefix>End Date</span>\n                        <input matInput [matDatepicker]=\"edate\" placeholder=\"DD-MMM-YY\" [disabled]=\"isNameEditable\" [min]=\"createContract.get('startDate').value\" formControlName=\"endDate\" (dateInput)=\"dateChangeEvent('endDate', $event)\" (dateChange)=\"dateChangeEvent('endDate', $event)\">\n                        <mat-datepicker-toggle matSuffix [for]=\"edate\">\n                          <mat-icon matDatepickerToggleIcon>\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                          </mat-icon>\n                        </mat-datepicker-toggle>\n                        <mat-datepicker #edate></mat-datepicker>\n                      </mat-form-field>\n                    </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div *ngIf=\"showMenuChips\">\n    <div class=\"mb-4\">\n      <mat-chip-list *ngIf=\"isDisabledTab\" class=\"genericProcessFlow\">\n        <mat-chip *ngFor=\" let chip of chipsList; let i=index\" [selected]=\"chip.selected\" [color]=\"chip.chipcolor\"  disabled=\"true\">\n          <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-stack-1x fa-inverse\">{{i+1}}</i>\n          </span>{{chip.chipname}}</mat-chip>\n      </mat-chip-list>\n      <mat-chip-list *ngIf=\"!isDisabledTab\" class=\"genericProcessFlow\">\n        <mat-chip *ngFor=\" let chip of chipsList; let i=index\" (click)=\"changeChip(chip, chipsList)\" [selected]=\"chip.selected\" [color]=\"chip.chipcolor\"\n          [routerLink]=\"[chip.routerLink]\">\n          <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-stack-1x fa-inverse\">{{i+1}}</i>\n          </span>{{chip.chipname}}</mat-chip>\n      </mat-chip-list>\n    </div>\n    <nav mat-tab-nav-bar *ngIf=\"showhotelinfo\" id=\"hotelinfo\" class=\"genericTab mb-4\">\n      <a mat-tab-link routerLinkActive=\"active\" label=\"Hotel Info\" [routerLink]=\"['hoteldetails']\">Hotel Info</a>\n      <a *ngIf=\"!isDisabledTab && contractDataService.showFacility\" mat-tab-link routerLinkActive=\"active\" label=\"Facilities and Services\" [routerLink]=\"['facilitiesservices']\">Facilities and Services</a>\n      <a *ngIf=\"isDisabledTab && contractDataService.showFacility\" mat-tab-link routerLinkActive=\"active\" label=\"Facilities and Services\">Facilities and Services</a>\n    </nav>\n    <nav mat-tab-nav-bar *ngIf=\"showRate\" id=\"rate\" class=\"genericTab mb-4\">\n      <a *ngIf=\"!isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"room type\" [routerLink]=\"['roomtypelist']\">Room Type</a>\n      <a *ngIf=\"!isDisabledTab && contractDataService.showamenity\" mat-tab-link routerLinkActive=\"active\" label=\"amenities\" [routerLink]=\"['amenities']\">Amenities</a>\n      <a *ngIf=\"!isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"mealplan\" [routerLink]=\"['mealplan']\">Meal Plan</a>\n      <a *ngIf=\"!isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"Policies\" [routerLink]=\"['policylist']\">Policies</a>\n      <a *ngIf=\"!isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"rate category\" [routerLink]=\"['ratecategory']\">Rate Category</a>\n\n      <a *ngIf=\"isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"room type\">Room Type</a>\n      <a *ngIf=\"isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"amenities\">Amenities</a>\n      <a *ngIf=\"isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"mealplan\">Meal Plan</a>\n      <a *ngIf=\"isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"Policies\">Policies</a>\n      <a *ngIf=\"isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"rate category\">Rate Category</a>\n    </nav>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract-nav-menu/contract-nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePickerDateAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractNavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_contracts_contract_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-url-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_contracts_contract_name_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-name-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_contracts_contract_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_enums__ = __webpack_require__("../../../../../src/app/common/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
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










var read = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.read;
var edit = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.edit;
var create = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* CONSTANTS */].operation.create;
var DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' }
    }
};
var DatePickerDateAdapter = (function (_super) {
    __extends(DatePickerDateAdapter, _super);
    function DatePickerDateAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerDateAdapter.prototype.format = function (date, displayFormat) {
        date.setMinutes(date.getTimezoneOffset() * -1);
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
}(__WEBPACK_IMPORTED_MODULE_9__angular_material_core__["u" /* NativeDateAdapter */]));

var ContractNavMenuComponent = (function () {
    function ContractNavMenuComponent(activatedRoute, router, contractNameDataService, contractDataService, contractUrlNotificationService, datepipe) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.contractNameDataService = contractNameDataService;
        this.contractDataService = contractDataService;
        this.contractUrlNotificationService = contractUrlNotificationService;
        this.datepipe = datepipe;
        this.colorClass = '';
        this.state1 = true;
        this.state2 = false;
        this.state3 = false;
        this.state4 = false;
        this.isNameEditable = false;
        this.startDate = new Date();
        this.startNonMGDate = new Date();
        this.contractBasicData = [];
        this.uniqueNameError = false;
        this.chipsList = [
            {
                chipId: 1,
                chipname: 'Hotel Info',
                chipcolor: 'primary',
                chipchild: 'hotelinfo',
                routerLink: 'hoteldetails',
                selected: true
            },
            {
                chipId: 2,
                chipname: 'Rate',
                chipcolor: 'accent',
                chipchild: 'Rate',
                routerLink: 'roomtypelist',
                selected: false
            },
            {
                chipId: 3,
                chipname: 'Allocations',
                chipcolor: 'accent',
                chipchild: 'allocation',
                routerLink: 'allocations',
                selected: false
            },
            {
                chipId: 4,
                chipname: 'Contract Terms',
                chipcolor: 'accent',
                chipchild: '',
                routerLink: 'contractterms',
                selected: false
            }
        ];
        this.events = [];
    }
    ContractNavMenuComponent.prototype.DateFunction = function (toDay) {
        var year = toDay.getFullYear();
        var month = toDay.getMonth();
        var day = toDay.getDate();
        var updatedDate = new Date(year - 1, month, day);
        return updatedDate;
    };
    ContractNavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isNameEditable = false;
        this.contractName = '';
        this.operation = this.activatedRoute.snapshot.params['operation'];
        this.contractId = +this.activatedRoute.snapshot.params['id'];
        this.createContract = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            contractNameEntered: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required),
            startDate: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required),
            endDate: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required)
        });
        if (this.operation === edit) {
            this.contractTypeName = ' (MG - Static)';
            this.showMenuChips = true;
            this.breadcrumbs = 'Edit ';
            this.contractType = __WEBPACK_IMPORTED_MODULE_7__common_enums__["a" /* ContractType */].MGStatic;
        }
        else if (this.operation === create) {
            this.isDisabledTab = true;
            this.contractType = this.contractDataService.contractType;
            switch (this.contractType) {
                case 0:
                    this.contractTypeName = ' (MG - Static)';
                    this.showMenuChips = true;
                    break;
                case 1:
                    this.contractTypeName = ' (MG - Dynamic)';
                    this.showMenuChips = false;
                    break;
                case 2:
                    this.contractTypeName = ' (Non - MG)';
                    this.showMenuChips = false;
                    this.startNonMGDate = this.DateFunction(new Date());
                    break;
            }
            this.breadcrumbs = 'Create New ';
            this.showhotelinfo = true;
            this.showRate = false;
        }
        this.contractUrlNotificationService.urlPath.subscribe(function (path) {
            _this.path = path;
            if (_this.router.url.indexOf('hoteldetails') >= 0) {
                _this.isNameEditable = false;
            }
            else {
                _this.isNameEditable = true;
            }
            if (_this.operation.trim().toLocaleLowerCase() === create && _this.contractId === 0) {
                _this.isDisabledTab = true;
            }
            else {
                _this.isDisabledTab = false;
            }
            if (_this.contractType === __WEBPACK_IMPORTED_MODULE_7__common_enums__["a" /* ContractType */].MGStatic) {
                if (_this.path === 'hoteldetails' || _this.path === 'facilitiesservices') {
                    _this.showhotelinfo = true;
                    _this.showRate = false;
                    _this.changeChip(_this.chipsList[0], _this.chipsList);
                }
                else if (_this.path === 'roomtype' ||
                    _this.path === 'roomtypelist' ||
                    _this.path === 'amenities' ||
                    _this.path === 'mealplan' ||
                    _this.path === 'ratecategory' ||
                    _this.path === 'childandextrabedpolicy' ||
                    _this.path === 'cancellationpolicies') {
                    _this.changeChip(_this.chipsList[1], _this.chipsList);
                    // this.isNameEditable = true;
                }
                else if (_this.path === 'allocation') {
                    _this.showhotelinfo = false;
                    _this.showRate = false;
                    _this.changeChip(_this.chipsList[2], _this.chipsList);
                    // this.isNameEditable = true;
                }
                else if (_this.path === 'contractterms') {
                    _this.showhotelinfo = false;
                    _this.showRate = false;
                    _this.changeChip(_this.chipsList[3], _this.chipsList);
                    // this.isNameEditable = true;
                }
            }
            _this.contractDetailsUpdate();
        });
        if (this.contractName !== '') {
            this.contractBasicDetails();
        }
    };
    ContractNavMenuComponent.prototype.contractDetailsUpdate = function () {
        if (this.contractType === __WEBPACK_IMPORTED_MODULE_7__common_enums__["a" /* ContractType */].MGStatic) {
            this.showMenuChips = true;
            if (this.operation === edit) {
                if (this.contractDataService.contractBasicDetails !== undefined &&
                    this.contractDataService.contractBasicDetails.trim() !== '') {
                    this.contractBasicData = this.contractDataService.contractBasicDetails.split('~#');
                    this.createContract.controls['contractNameEntered'].setValue(this.contractBasicData[0]);
                    this.contractName = this.contractBasicData[0];
                    this.createContract.get('startDate').setValue(new Date(this.contractBasicData[1]).toISOString());
                    this.createContract.get('endDate').setValue(new Date(this.contractBasicData[2]).toISOString());
                    // this.createContract.get('contractNameEntered').disable();
                    // this.createContract.get('startDate').disable();
                    // this.createContract.get('endDate').disable();
                }
                else {
                    var contractDetails_1 = '';
                    this.contractNameDataService.contractName.subscribe(function (name) {
                        return contractDetails_1 = name;
                    });
                    this.contractBasicData = contractDetails_1.trim().split('~#');
                    this.createContract.controls['contractNameEntered'].setValue(this.contractBasicData[0]);
                    this.createContract.get('startDate').setValue(new Date(this.contractBasicData[1]).toISOString());
                    this.createContract.get('endDate').setValue(new Date(this.contractBasicData[2]).toISOString());
                }
                if (this.isNameEditable) {
                    this.createContract.get('contractNameEntered').disable();
                    this.createContract.get('startDate').disable();
                    this.createContract.get('endDate').disable();
                }
            }
            this.stepsCheck();
        }
        else {
            this.showMenuChips = false;
        }
    };
    ContractNavMenuComponent.prototype.checkContractName = function () {
        this.checkUniqueContractName();
        this.contractBasicDetails();
    };
    ContractNavMenuComponent.prototype.checkUniqueContractName = function () {
        var _this = this;
        if (this.contractName !== undefined && this.contractName !== null) {
            // // // console.log('this.templatesDataService.templateListDto - ' + JSON.stringify(this.templatesDataService.templateListDto));
            if (this.contractDataService.contractListDto === undefined) {
                this.uniqueNameError = false;
            }
            else {
                this.contractDataService.contractNameExist(this.contractName.trim()).subscribe(function (data) {
                    if (data.result === false) {
                        _this.uniqueNameError = false;
                        _this.contractNameDataService.changeContractName(_this.contractName.trim());
                    }
                    else {
                        _this.uniqueNameError = true;
                        _this.contractNameDataService.changeContractName('');
                    }
                });
            }
        }
    };
    ContractNavMenuComponent.prototype.dateChangeEvent = function (type, event) {
        this.events = [];
        this.events.push("" + event.value);
        this.contractBasicDetails();
    };
    ContractNavMenuComponent.prototype.contractBasicDetails = function () {
        var sDate = '';
        var eDate = '';
        var newSDate;
        var newEDate;
        if (this.createContract.controls['startDate'].value !== null) {
            newSDate = new Date(this.createContract.controls['startDate'].value);
        }
        if (this.createContract.controls['endDate'].value !== null) {
            newEDate = new Date(this.createContract.controls['endDate'].value);
        }
        if (newSDate > newEDate) {
            this.createContract.controls['endDate'].setValue('');
        }
        else {
            sDate =
                this.datepipe.transform(this.createContract.controls['startDate'].value, 'dd-MM-yy') === null ? '' : this.datepipe.transform(this.createContract.controls['startDate'].value, 'dd-MM-yy');
            eDate =
                this.datepipe.transform(this.createContract.controls['endDate'].value, 'dd-MM-yy') === null ? '' : this.datepipe.transform(this.createContract.controls['endDate'].value, 'dd-MM-yy');
        }
        var contractNamePass = '';
        if (this.uniqueNameError === true) {
            contractNamePass = '';
        }
        else {
            contractNamePass = this.createContract.controls['contractNameEntered'].value.trim();
        }
        var contractBasicInfo = contractNamePass +
            '~#' +
            new Date(this.createContract.get('startDate').value) +
            '~#' +
            new Date(this.createContract.get('endDate').value);
        this.contractNameDataService.changeContractName(contractBasicInfo);
        this.contractDataService.contractBasicDetails = contractBasicInfo;
        this.contractName = this.createContract.controls['contractNameEntered'].value;
        // this.checkUniqueContractName();
    };
    ContractNavMenuComponent.prototype.stepsCheck = function () {
        var _this = this;
        if (this.operation !== edit) {
            this.contractDataService
                .getTemplateSteps(this.contractDataService.templateId)
                .subscribe(function (templatesSteps) {
                if (templatesSteps !== null) {
                    var step = templatesSteps;
                    if (templatesSteps.facilityCount > 0) {
                        _this.contractDataService.showFacility = true;
                    }
                    else {
                        _this.contractDataService.showFacility = false;
                    }
                    if (templatesSteps.amenityCount > 0) {
                        _this.contractDataService.showamenity = true;
                    }
                    else {
                        _this.contractDataService.showamenity = false;
                    }
                }
            });
        }
        else {
            this.contractDataService
                .getContractSteps(this.contractId)
                .subscribe(function (templatesSteps) {
                if (templatesSteps !== null) {
                    var step = templatesSteps;
                    if (templatesSteps.facilityCount > 0) {
                        _this.contractDataService.showFacility = true;
                    }
                    else {
                        _this.contractDataService.showFacility = false;
                    }
                    if (templatesSteps.amenityCount > 0) {
                        _this.contractDataService.showamenity = true;
                    }
                    else {
                        _this.contractDataService.showamenity = false;
                    }
                }
            });
        }
    };
    ContractNavMenuComponent.prototype.changeChip = function (chip, chipsList) {
        if (chip.selected) {
            chip.chipcolor = 'primary';
        }
        else {
            for (var _i = 0, chipsList_1 = chipsList; _i < chipsList_1.length; _i++) {
                var cc = chipsList_1[_i];
                if (cc.chipId !== chip.chipId) {
                    cc.selected = false;
                    cc.chipcolor = 'accent';
                }
            }
            chip.selected = !chip.selected;
            chip.chipcolor = 'primary';
            if (chip.chipId === 1) {
                this.showhotelinfo = true;
                this.showRate = false;
            }
            else if (chip.chipId === 2) {
                this.showhotelinfo = false;
                this.showRate = true;
            }
            else {
                this.showhotelinfo = false;
                this.showRate = false;
            }
        }
        this.stepsCheck();
    };
    ContractNavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contract-nav-menu',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract-nav-menu/contract-nav-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract-nav-menu/contract-nav-menu.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_material_core__["c" /* DateAdapter */], useClass: DatePickerDateAdapter },
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_material_core__["f" /* MAT_DATE_FORMATS */], useValue: DATE_FORMATS }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_contracts_contract_name_data_service__["a" /* ContractNameDataService */],
            __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_contracts_contract_data_service__["a" /* ContractDataService */],
            __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_contracts_contract_url_notification_service__["a" /* ContractUrlNotificationService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"]])
    ], ContractNavMenuComponent);
    return ContractNavMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract-terms/contract-terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract-terms/contract-terms.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contract-terms works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract-terms/contract-terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractTermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_extranet_shared_services_contracts_contract_terms_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-terms-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContractTermsComponent = (function () {
    function ContractTermsComponent(contractTermsDataService) {
        this.contractTermsDataService = contractTermsDataService;
    }
    ContractTermsComponent.prototype.ngOnInit = function () {
        var terms = this.contractTermsDataService.getContractTerms(1);
        console.log(JSON.stringify(terms));
    };
    ContractTermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contract-terms',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract-terms/contract-terms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract-terms/contract-terms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_extranet_shared_services_contracts_contract_terms_data_service__["a" /* ContractTermsDataService */]])
    ], ContractTermsComponent);
    return ContractTermsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract/contract.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract/contract.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-contract-nav-menu></app-contract-nav-menu>\n</div>\n<div >\n  <div class=\"body-style\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contract/contract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContractComponent = (function () {
    function ContractComponent() {
    }
    ContractComponent.prototype.ngOnInit = function () {
    };
    ContractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contract',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract/contract.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract/contract.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContractComponent);
    return ContractComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contracts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedContractsComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contract_contract_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract/contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contract_list_contract_list_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract-list/contract-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contract_nav_menu_contract_nav_menu_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract-nav-menu/contract-nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contract_terms_contract_terms_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contract-terms/contract-terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__allocations_allocations_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/allocations/allocations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hotel_info_hotel_details_hotel_details_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/hotel-details/hotel-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hotel_info_facilities_services_facilities_services_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/facilities-services/facilities-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rate_amenities_amenities_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/amenities/amenities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rate_room_type_room_type_info_room_type_info_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-info/room-type-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rate_room_type_room_type_list_room_type_list_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-list/room-type-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rate_meal_plan_meal_plan_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/meal-plan/meal-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rate_policies_cancellation_policies_cancellation_policies_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policies/cancellation-policies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rate_policies_cancellation_policy_list_cancellation_policy_list_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policy-list/cancellation-policy-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rate_policies_child_and_extra_bed_policy_child_and_extra_bed_policy_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy/child-and-extra-bed-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__rate_policies_child_and_extra_bed_policy_list_child_and_extra_bed_policy_list_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy-list/child-and-extra-bed-policy-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__rate_policies_policy_list_policy_list_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/policy-list/policy-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__rate_rate_category_rate_category_list_rate_category_list_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-list/rate-category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__rate_rate_category_rate_category_info_rate_category_info_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-info/rate-category-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__redirect_redirect_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/redirect/redirect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_extranet_shared_services_contracts_hotels_name_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/hotels-name-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_extranet_shared_services_contracts_contract_data_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-data-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_extranet_shared_services_contracts_contract_facilities_data_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-facilities-data-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// tslint:disable-next-line:max-line-length







// tslint:disable-next-line:max-line-length

var routes = [
    { path: '', redirectTo: 'contracts', pathMatch: 'full' },
    { path: 'contracts', component: __WEBPACK_IMPORTED_MODULE_3__contract_list_contract_list_component__["a" /* ContractListComponent */], resolve: { contractListData: __WEBPACK_IMPORTED_MODULE_22__common_extranet_shared_services_contracts_contract_data_resolver_service__["a" /* ContractDataResolverService */] } },
    { path: 'redirect/:contractid', component: __WEBPACK_IMPORTED_MODULE_20__redirect_redirect_component__["a" /* RedirectComponent */] },
    {
        path: 'contract/:id/:operation',
        component: __WEBPACK_IMPORTED_MODULE_2__contract_contract_component__["a" /* ContractComponent */],
        children: [
            { path: '', redirectTo: 'hoteldetails', pathMatch: 'full' },
            {
                path: 'hoteldetails', component: __WEBPACK_IMPORTED_MODULE_7__hotel_info_hotel_details_hotel_details_component__["a" /* HotelDetailsComponent */],
                resolve: { hotelsName: __WEBPACK_IMPORTED_MODULE_21__common_extranet_shared_services_contracts_hotels_name_resolver_service__["a" /* HotelsNameResolverService */] }
            },
            {
                path: 'facilitiesservices', component: __WEBPACK_IMPORTED_MODULE_8__hotel_info_facilities_services_facilities_services_component__["a" /* FacilitiesServicesComponent */],
                resolve: { contractFacilityData: __WEBPACK_IMPORTED_MODULE_23__common_extranet_shared_services_contracts_contract_facilities_data_resolver_service__["a" /* ContractFacilitiesDataResolverService */] }
            },
            { path: 'roomtypelist', component: __WEBPACK_IMPORTED_MODULE_11__rate_room_type_room_type_list_room_type_list_component__["a" /* RoomTypeListComponent */] },
            { path: 'roomtype/:id/:operation', component: __WEBPACK_IMPORTED_MODULE_10__rate_room_type_room_type_info_room_type_info_component__["a" /* RoomTypeInfoComponent */] },
            {
                path: 'amenities',
                component: __WEBPACK_IMPORTED_MODULE_9__rate_amenities_amenities_component__["a" /* AmenitiesComponent */]
            },
            {
                path: 'mealplan',
                component: __WEBPACK_IMPORTED_MODULE_12__rate_meal_plan_meal_plan_component__["a" /* MealPlanComponent */]
            },
            {
                path: 'policylist',
                component: __WEBPACK_IMPORTED_MODULE_17__rate_policies_policy_list_policy_list_component__["a" /* PolicyListComponent */]
            },
            {
                path: 'childandextrabedpolicy/:id/:operation',
                component: __WEBPACK_IMPORTED_MODULE_15__rate_policies_child_and_extra_bed_policy_child_and_extra_bed_policy_component__["a" /* ChildAndExtraBedPolicyComponent */]
            },
            {
                path: 'cancellationpolicies/:id/:operation',
                component: __WEBPACK_IMPORTED_MODULE_13__rate_policies_cancellation_policies_cancellation_policies_component__["a" /* CancellationPoliciesComponent */]
            },
            { path: 'allocations', component: __WEBPACK_IMPORTED_MODULE_6__allocations_allocations_component__["a" /* AllocationsComponent */] },
            { path: 'contractterms', component: __WEBPACK_IMPORTED_MODULE_5__contract_terms_contract_terms_component__["a" /* ContractTermsComponent */] },
            { path: 'ratecategory', component: __WEBPACK_IMPORTED_MODULE_18__rate_rate_category_rate_category_list_rate_category_list_component__["a" /* RateCategoryListComponent */] },
            {
                path: 'ratecategory/:id/:operation',
                component: __WEBPACK_IMPORTED_MODULE_19__rate_rate_category_rate_category_info_rate_category_info_component__["a" /* RateCategoryInfoComponent */]
            }
        ]
    }
];
var ContractsRoutingModule = (function () {
    function ContractsRoutingModule() {
    }
    ContractsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ContractsRoutingModule);
    return ContractsRoutingModule;
}());

var routedContractsComponents = [
    __WEBPACK_IMPORTED_MODULE_7__hotel_info_hotel_details_hotel_details_component__["a" /* HotelDetailsComponent */],
    __WEBPACK_IMPORTED_MODULE_8__hotel_info_facilities_services_facilities_services_component__["a" /* FacilitiesServicesComponent */],
    __WEBPACK_IMPORTED_MODULE_2__contract_contract_component__["a" /* ContractComponent */],
    __WEBPACK_IMPORTED_MODULE_6__allocations_allocations_component__["a" /* AllocationsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__contract_list_contract_list_component__["a" /* ContractListComponent */],
    __WEBPACK_IMPORTED_MODULE_4__contract_nav_menu_contract_nav_menu_component__["a" /* ContractNavMenuComponent */],
    __WEBPACK_IMPORTED_MODULE_5__contract_terms_contract_terms_component__["a" /* ContractTermsComponent */],
    __WEBPACK_IMPORTED_MODULE_11__rate_room_type_room_type_list_room_type_list_component__["a" /* RoomTypeListComponent */],
    __WEBPACK_IMPORTED_MODULE_10__rate_room_type_room_type_info_room_type_info_component__["a" /* RoomTypeInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_9__rate_amenities_amenities_component__["a" /* AmenitiesComponent */],
    __WEBPACK_IMPORTED_MODULE_12__rate_meal_plan_meal_plan_component__["a" /* MealPlanComponent */],
    __WEBPACK_IMPORTED_MODULE_18__rate_rate_category_rate_category_list_rate_category_list_component__["a" /* RateCategoryListComponent */],
    __WEBPACK_IMPORTED_MODULE_19__rate_rate_category_rate_category_info_rate_category_info_component__["a" /* RateCategoryInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_14__rate_policies_cancellation_policy_list_cancellation_policy_list_component__["a" /* CancellationPolicyListComponent */],
    __WEBPACK_IMPORTED_MODULE_15__rate_policies_child_and_extra_bed_policy_child_and_extra_bed_policy_component__["a" /* ChildAndExtraBedPolicyComponent */],
    __WEBPACK_IMPORTED_MODULE_13__rate_policies_cancellation_policies_cancellation_policies_component__["a" /* CancellationPoliciesComponent */],
    __WEBPACK_IMPORTED_MODULE_16__rate_policies_child_and_extra_bed_policy_list_child_and_extra_bed_policy_list_component__["a" /* ChildAndExtraBedPolicyListComponent */],
    __WEBPACK_IMPORTED_MODULE_17__rate_policies_policy_list_policy_list_component__["a" /* PolicyListComponent */],
    __WEBPACK_IMPORTED_MODULE_20__redirect_redirect_component__["a" /* RedirectComponent */]
];


/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/contracts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsModule", function() { return ContractsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contracts_routing_module__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/contracts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_material_material_module__ = __webpack_require__("../../../../../src/app/common/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_extranet_shared_services_contracts_contract_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-url-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_contracts_contract_name_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-name-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_pipes_contractsOrderPipe__ = __webpack_require__("../../../../../src/app/extranet/common/pipes/contractsOrderPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_extranet_shared_services_contracts_contract_terms_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-terms-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ContractsModule = (function () {
    function ContractsModule() {
    }
    ContractsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__contracts_routing_module__["a" /* ContractsRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__common_material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__contracts_routing_module__["b" /* routedContractsComponents */], __WEBPACK_IMPORTED_MODULE_8__common_pipes_contractsOrderPipe__["a" /* ContractsOrderPipe */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_5__common_extranet_shared_services_contracts_contract_url_notification_service__["a" /* ContractUrlNotificationService */], __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_contracts_contract_name_data_service__["a" /* ContractNameDataService */],
                __WEBPACK_IMPORTED_MODULE_9__common_extranet_shared_services_contracts_contract_terms_data_service__["a" /* ContractTermsDataService */]
            ]
        })
    ], ContractsModule);
    return ContractsModule;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/facilities-services/facilities-services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/facilities-services/facilities-services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <h1 class=\"mainHeading mb-1 customBreadcrumb\">Facilities &amp; Services<span class=\"mandatoryInfo float-right\">Indicates Mandatory Fields</span></h1>\r\n    <!--  <p>Edit the details of your property, such as bed options, onsite facilities, services and amenities.</p>-->\r\n    <form [formGroup]=\"facilitiesForm\" class=\"pt-1\">\r\n\r\n        <div class=\"formSections pb-0 pt-4 borderBottomNone\" formArrayName=\"facilitiesGroupArray\" *ngFor=\"let facilityGroup of facilitiesGroupArray.controls; let i=index\">\r\n\r\n            <!-- Internet -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === internetGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/internetIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n\r\n                    <div class=\"row customeRow mt-4 pb-2\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n\r\n\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                                    <div [formGroupName]=\"j\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeId').value) === isInternetAvailableTypeId\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"{{(facilityType.get('facilityTypeName').value)}}\" formControlName=\"selectedFacilityId\" (change)=\"isInternetDropdownChange($event)\">\r\n                                                <mat-option [value]=\"null\">Select</mat-option>\r\n                                                <div formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                                    <mat-option [formGroupName]=\"k\" attr.for=\"{{ 'facilityTypeId' + k }}\" value=\"{{facility.get('id').value}}\">\r\n                                                        {{facility.get(\"name\").value}}\r\n                                                    </mat-option>\r\n                                                </div>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div [formGroupName]=\"j\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeId').value) != isInternetAvailableTypeId\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"{{(facilityType.get('facilityTypeName').value)}}\" formControlName=\"selectedFacilityId\">\r\n                                                <mat-option [value]=\"null\">Select</mat-option>\r\n                                                <div formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                                    <mat-option [formGroupName]=\"k\" attr.for=\"{{ 'facilityTypeId' + k }}\" value=\"{{facility.get('id').value}}\">\r\n                                                        {{facility.get(\"name\").value}}\r\n                                                    </mat-option>\r\n                                                </div>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Internet Ends -->\r\n            <!-- Parking -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === parkingGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/parking.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow mt-4 pb-2\">\r\n                        <div class=\"col-md-12\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"form-group col-md-4 col-lg-3\" [formGroupName]=\"j\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeId').value) != 6\">\r\n                                    <mat-form-field>\r\n                                        <mat-select placeholder=\"{{(facilityType.get('facilityTypeName').value)}}\" formControlName=\"selectedFacilityId\">\r\n                                            <mat-option [value]=\"null\">Select</mat-option>\r\n                                            <div formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                                <mat-option [formGroupName]=\"k\" attr.for=\"{{ 'facilityTypeId' + k }}\" value=\"{{facility.get('id').value}}\">\r\n                                                    {{facility.get(\"name\").value}}\r\n                                                </mat-option>\r\n                                            </div>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div [formGroupName]=\"j\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeId').value) === 6\">\r\n                                <div class=\"row mt-1 checkBoxList facilitiesServicesList\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <p class=\"mt-0 optionsTxt semiboldText\">{{(facilityType.get('facilityTypeName').value)}}</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                    <div class=\"col-md-4 col-lg-3\">\r\n                                        <div class=\"form-group mb-3\">\r\n                                            <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">\r\n                                                All\r\n                                            </mat-checkbox>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                    <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                        <div class=\"form-group mb-3\" [formGroupName]=\"k\" attr.for=\"{{ 'facilityTypeId' + k }}\">\r\n                                            <mat-checkbox formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">{{facility.get(\"name\").value}}</mat-checkbox>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Parking Ends -->\r\n            <!-- Pets -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === petsGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/petsIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow mt-4 pb-2\">\r\n                        <div class=\"col-md-12\">\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                                    <div [formGroupName]=\"j\" attr.for=\"{{ 'facilityTypeId' + j }}\">\r\n                                        <mat-form-field>\r\n                                            <mat-select placeholder=\"{{(facilityType.get('facilityTypeName').value)}}\" formControlName=\"selectedFacilityId\">\r\n                                                <mat-option [value]=\"null\">Select</mat-option>\r\n                                                <div formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                                    <mat-option [formGroupName]=\"k\" attr.for=\"{{ 'facilityTypeId' + k }}\" value=\"{{facility.get('id').value}}\">\r\n                                                        {{facility.get(\"name\").value}}\r\n                                                    </mat-option>\r\n                                                </div>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Pets ends -->\r\n            <!-- Languages -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === languagesGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/langaugeIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow mt-4 pb-2\">\r\n                        <div class=\"col-md-12\">\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                                    <div [formGroupName]=\"j\" attr.for=\"{{ 'facilityTypeId' + j }}\">\r\n                                        <mat-form-field>\r\n                                            <mat-select multiple placeholder=\"Languages\" formControlName=\"multiSelectedFacilityIds\">\r\n                                                <div formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                                    <mat-option [formGroupName]=\"k\" attr.for=\"{{ 'facilityTypeId' + k }}\" value=\"{{facility.get('id').value}}\">\r\n                                                        {{facility.get(\"name\").value}}\r\n                                                    </mat-option>\r\n                                                </div>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Languages ends -->\r\n            <!-- Activities -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === activitiesGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer pb-2\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/activityIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                        <div class=\"col-md-12\" [formGroupName]=\"j\">\r\n\r\n                            <div class=\"row mt-4 pt-1 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h5 class=\"pl-0 h5 semiboldText mb-1\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\r\n                                        {{(facilityType.get('facilityTypeName').value)}}\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <div class=\"form-group mb-3\">\r\n                                        <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">All</mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                    <div class=\"form-group mb-3\" [formGroupName]=\"k\">\r\n                                        <mat-checkbox attr.for=\"{{ 'facilityTypeId' + k }}\" formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">\r\n                                            {{facility.get(\"name\").value}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Activities ends -->\r\n            <!-- Food and Drinks -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === foodAndDrinkGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer pb-2\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/foodsanddrinkIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                        <div class=\"col-md-12\" [formGroupName]=\"j\">\r\n\r\n                            <div class=\"row mt-4 checkBoxList facilitiesServicesList pt-1\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h5 class=\"pl-0 h5 semiboldText mb-1 w-100 d-block\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\r\n                                        {{(facilityType.get('facilityTypeName').value)}}\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <div class=\"form-group mb-3\">\r\n                                        <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">All</mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                    <div class=\"form-group mb-3\" [formGroupName]=\"k\">\r\n                                        <mat-checkbox attr.for=\"{{ 'facilityTypeId' + k }}\" formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">\r\n                                            {{facility.get(\"name\").value}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Food and Drinks ends -->\r\n            <!-- Pool and Wellness -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === poolAndWellnessGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer pb-2\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/poolIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                        <div class=\"col-md-12\" [formGroupName]=\"j\">\r\n                            <div class=\"row mt-4 checkBoxList facilitiesServicesList pt-1\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h5 class=\"pl-0 h5 semiboldText mb-1 w-100 d-block\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\r\n                                        {{(facilityType.get('facilityTypeName').value)}}\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <div class=\"form-group mb-3\">\r\n                                        <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">All</mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                    <div class=\"form-group mb-3\" [formGroupName]=\"k\">\r\n                                        <mat-checkbox attr.for=\"{{ 'facilityTypeId' + k }}\" formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">\r\n                                            {{facility.get(\"name\").value}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Pool and Wellness ends -->\r\n            <!-- Reception Services -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === receptionServicesGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer pb-2\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/receptionIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                        <div class=\"col-md-12\" [formGroupName]=\"j\">\r\n\r\n                            <div class=\"row mt-4 checkBoxList facilitiesServicesList pt-1\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h5 class=\"pl-0 h5 semiboldText mb-1 w-100 d-block\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\r\n                                        {{(facilityType.get('facilityTypeName').value)}}\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <div class=\"form-group mb-3\">\r\n                                        <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">All</mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                    <div class=\"form-group mb-3\" [formGroupName]=\"k\">\r\n                                        <mat-checkbox attr.for=\"{{ 'facilityTypeId' + k }}\" formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">\r\n                                            {{facility.get(\"name\").value}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Reception Services ends -->\r\n            <!-- Transport -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === transportGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer pb-2\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/transportIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                        <div class=\"col-md-12\" [formGroupName]=\"j\">\r\n\r\n                            <div class=\"row mt-4 checkBoxList facilitiesServicesList pt-1\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h5 class=\"pl-0 h5 semiboldText mb-1 w-100 d-block\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\r\n                                        {{(facilityType.get('facilityTypeName').value)}}\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <div class=\"form-group mb-3\">\r\n                                        <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">All</mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                    <div class=\"form-group mb-3\" [formGroupName]=\"k\">\r\n                                        <mat-checkbox attr.for=\"{{ 'facilityTypeId' + k }}\" formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">\r\n                                            {{facility.get(\"name\").value}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Transport Ends -->\r\n            <!-- Common Areas -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === commonAreasGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer pb-2\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/commonareaIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                        <div class=\"col-md-12\" [formGroupName]=\"j\">\r\n\r\n                            <div class=\"row mt-4 checkBoxList facilitiesServicesList pt-1\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h5 class=\"pl-0 h5 semiboldText mb-1 w-100 d-block\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\r\n                                        {{(facilityType.get('facilityTypeName').value)}}\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"form-group mb-3\">\r\n                                        <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">All</mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                    <div class=\"form-group mb-3\" [formGroupName]=\"k\">\r\n                                        <mat-checkbox attr.for=\"{{ 'facilityTypeId' + k }}\" formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">\r\n                                            {{facility.get(\"name\").value}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Common Areas Ends -->\r\n            <!-- Entertainment and Family Services -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === entertainmentGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer pb-2\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/entertainmentIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                        <div class=\"col-md-12\" [formGroupName]=\"j\">\r\n\r\n                            <div class=\"row mt-4 checkBoxList facilitiesServicesList pt-1\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <h5 class=\"pl-0 h5 semiboldText mb-1 w-100 d-block\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\r\n                                        {{(facilityType.get('facilityTypeName').value)}}\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <div class=\"form-group mb-3\">\r\n                                        <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">All</mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                    <div class=\"form-group mb-3\" [formGroupName]=\"k\">\r\n                                        <mat-checkbox attr.for=\"{{ 'facilityTypeId' + k }}\" formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">\r\n                                            {{facility.get(\"name\").value}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Entertainment and Family Services ends -->\r\n            <!-- Cleaning Services -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === cleaningGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer pb-2\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/cleanIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                        <div class=\"col-md-12\" [formGroupName]=\"j\">\r\n\r\n                            <div class=\"row mt-4 checkBoxList facilitiesServicesList pt-1\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h5 class=\"pl-0 h5 semiboldText mb-1 w-100 d-block\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\r\n                                        {{(facilityType.get('facilityTypeName').value)}}\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <div class=\"form-group mb-3\">\r\n                                        <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">All</mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                    <div class=\"form-group mb-3\" [formGroupName]=\"k\">\r\n                                        <mat-checkbox attr.for=\"{{ 'facilityTypeId' + k }}\" formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">\r\n                                            {{facility.get(\"name\").value}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Cleaning Services ends -->\r\n            <!-- Business Facilities -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === businessGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer pb-2\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/buisnessIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                        <div class=\"col-md-12\" [formGroupName]=\"j\">\r\n\r\n\r\n\r\n                            <div class=\"row mt-4 checkBoxList facilitiesServicesList pt-1\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h5 class=\"pl-0 h5 semiboldText mb-1 w-100 d-block\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\r\n                                        {{(facilityType.get('facilityTypeName').value)}}\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <div class=\"form-group mb-3\">\r\n                                        <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">All</mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                    <div class=\"form-group mb-3\" [formGroupName]=\"k\">\r\n                                        <mat-checkbox attr.for=\"{{ 'facilityTypeId' + k }}\" formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">\r\n                                            {{facility.get(\"name\").value}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Business Facilities ends -->\r\n            <!-- Shops -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === shopsGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer pb-2\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/shopIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                        <div class=\"col-md-12\" [formGroupName]=\"j\">\r\n\r\n                            <div class=\"row mt-4 checkBoxList facilitiesServicesList pt-1\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h5 class=\"pl-0 h5 semiboldText w-100 d-block mb-1\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\r\n                                        {{(facilityType.get('facilityTypeName').value)}}\r\n                                    </h5>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <div class=\"form-group mb-3\">\r\n                                        <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">All</mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                    <div class=\"form-group mb-3\" [formGroupName]=\"k\">\r\n                                        <mat-checkbox attr.for=\"{{ 'facilityTypeId' + k }}\" formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">\r\n                                            {{facility.get(\"name\").value}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Shops ends -->\r\n            <!-- Miscellaneous -->\r\n            <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === miscellaneousGroupId && (facilitiesGroupArray.controls[i].get('isSelected').value) === true\">\r\n                <mat-expansion-panel class=\"expandCollapseContainer pb-4\" expanded='true'>\r\n                    <mat-expansion-panel-header class=\"panelHeader\">\r\n                        <mat-panel-title>\r\n                            <div class=\"row iconHeading\">\r\n                                <div class=\"col-md-1 pr-0 iconHolder\">\r\n                                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/misllaniousIcon.png\">\r\n                                </div>\r\n                                <div class=\"col-md-11 pl-2\">\r\n                                    <h2 attr.for=\"{{ 'facilityGroupId' + i }}\">\r\n                                        {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\r\n                                    </h2>\r\n                                </div>\r\n                            </div>\r\n                        </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"row customeRow\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\r\n                        <div class=\"col-md-12\" [formGroupName]=\"j\">\r\n\r\n                            <div class=\"row mt-4 checkBoxList facilitiesServicesList pt-1\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <h5 class=\"pl-0 h5 semiboldText mb-1 w-100 d-block\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\r\n                                        {{(facilityType.get('facilityTypeName').value)}}\r\n                                    </h5>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\">\r\n                                    <div class=\"form-group mb-3\">\r\n                                        <mat-checkbox (change)=\"selectAll(i,j)\" formControlName=\"selectedAll\">All</mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2 checkBoxList facilitiesServicesList\">\r\n                                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\r\n                                    <div class=\"form-group mb-3\" [formGroupName]=\"k\">\r\n                                        <mat-checkbox attr.for=\"{{ 'facilityTypeId' + k }}\" formControlName=\"isSelected\" (change)=\"checkIfAllSelected(i,j)\">\r\n                                            {{facility.get(\"name\").value}}\r\n                                        </mat-checkbox>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n                </mat-expansion-panel>\r\n            </div>\r\n            <!-- Miscellaneous ends -->\r\n\r\n\r\n        </div>\r\n        <div class=\"controlButtons borderTopDark paddingTop50px pb-4 mb-1\">\r\n            <button title=\"Save\" class=\"genericButton activeButton mat-raised-button mat-primary\" (click)=\"saveFacilities()\">Save</button>\r\n            <button title=\"Cancel\" (click)=\"cancelFacilities()\" class=\"genericButton defaultButton\">Cancel</button>\r\n            <button title=\"Continue\" class=\"genericButton activeButton mat-raised-button mat-primary float-right\" (click)=\"saveAndContinue()\">Save & Continue</button>\r\n        </div>\r\n\r\n    </form>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/facilities-services/facilities-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilitiesServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/extranet/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_enums__ = __webpack_require__("../../../../../src/app/common/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_contracts_contract_facilities_data_service_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-facilities-data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_extranet_shared_services_contracts_contract_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-url-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// tslint:disable-next-line:max-line-length



var facilities = __WEBPACK_IMPORTED_MODULE_2__common_constants__["a" /* EXTRANETCONSTANTS */].facilities;
var duration = __WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration;
var FacilitiesServicesComponent = (function () {
    function FacilitiesServicesComponent(route, router, snackBar, contractFacilitiesDataServiceService, activatedRoute, contractUrlNotificationService) {
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.contractFacilitiesDataServiceService = contractFacilitiesDataServiceService;
        this.activatedRoute = activatedRoute;
        this.contractUrlNotificationService = contractUrlNotificationService;
        this.groupIndexOfInternet = 0;
        this.contractId = this.route.parent.snapshot.params['id'];
        this.edit = __WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* CONSTANTS */].operation.read;
        this.internetGroupId = facilities.facilitiesGroupIds.internetGroupId;
        this.parkingGroupId = facilities.facilitiesGroupIds.parkingGroupId;
        this.petsGroupId = facilities.facilitiesGroupIds.petsGroupId;
        this.languagesGroupId = facilities.facilitiesGroupIds.languagesGroupId;
        this.activitiesGroupId = facilities.facilitiesGroupIds.activitiesGroupId;
        this.foodAndDrinkGroupId = facilities.facilitiesGroupIds.foodAndDrinkGroupId;
        this.poolAndWellnessGroupId = facilities.facilitiesGroupIds.poolAndWellnessGroupId;
        this.receptionServicesGroupId = facilities.facilitiesGroupIds.receptionServicesGroupId;
        this.transportGroupId = facilities.facilitiesGroupIds.transportGroupId;
        this.commonAreasGroupId = facilities.facilitiesGroupIds.commonAreasGroupId;
        this.entertainmentGroupId = facilities.facilitiesGroupIds.entertainmentGroupId;
        this.cleaningGroupId = facilities.facilitiesGroupIds.cleaningGroupId;
        this.businessGroupId = facilities.facilitiesGroupIds.businessGroupId;
        this.shopsGroupId = facilities.facilitiesGroupIds.shopsGroupId;
        this.miscellaneousGroupId = facilities.facilitiesGroupIds.miscellaneousGroupId;
        this.isInternetAvailableTypeId = facilities.facilitiesTypeId.isInternetAvailableTypeId;
        this.connectionTypeTypeId = facilities.facilitiesTypeId.connectionTypeTypeId;
        this.connectionLocationTypeId = facilities.facilitiesTypeId.connectionLocationTypeId;
        this.isParkingAvailableTypeId = facilities.facilitiesTypeId.isParkingAvailableTypeId;
        this.reserveParkingTypeId = facilities.facilitiesTypeId.reserveParkingTypeId;
        this.petsAllowedTypeId = facilities.facilitiesTypeId.petsAllowedTypeId;
        contractUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    FacilitiesServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFacilitiesServices();
        window.scrollTo(0, 0);
        this.contractFacilitiesDataServiceService.isContractFacilityExits(this.contractId).subscribe(function (isFacilityExits) {
            _this.isFacilityExits = isFacilityExits.result;
            if (_this.isFacilityExits === false) {
                _this.facilityOperation = _this.create;
            }
            else {
                _this.facilityOperation = _this.edit;
            }
        });
    };
    FacilitiesServicesComponent.prototype.getFacilitiesServices = function () {
        var _this = this;
        this.facilityGroupList = this.route.snapshot.data['contractFacilityData'];
        this.facilitiesForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            facilitiesGroupArray: this.buildFacilityGroupsForm(this.facilityGroupList)
        });
        // To disable dropdown if internet connection is NO
        var isInternet = null;
        this.getTypeArrayForGroup(this.groupIndexOfInternet).controls.forEach(function (facilityTypeControl) {
            if (facilityTypeControl.value.facilityTypeId === 1) {
                var facilitySelected_1 = facilityTypeControl.value.selectedFacilityId;
                facilityTypeControl.value.facilityList.forEach(function (facility) {
                    if (facility.id === +(facilitySelected_1)) {
                        if (facility.name === 'No') {
                            isInternet = 'No';
                        }
                        else {
                            isInternet = 'Yes';
                        }
                    }
                });
            }
            if (isInternet === 'No') {
                if (facilityTypeControl.value.facilityTypeId === _this.connectionTypeTypeId ||
                    facilityTypeControl.value.facilityTypeId === _this.connectionLocationTypeId) {
                    facilityTypeControl.disable();
                }
            }
        });
        // To disable dropdown if internet connection is NO Ends
    };
    Object.defineProperty(FacilitiesServicesComponent.prototype, "facilitiesGroupArray", {
        get: function () {
            return this.facilitiesForm.get('facilitiesGroupArray');
        },
        enumerable: true,
        configurable: true
    });
    FacilitiesServicesComponent.prototype.getTypeArrayForGroup = function (groupIndex) {
        return this.facilitiesGroupArray.controls[groupIndex].get('hotelFacilityTypes');
    };
    FacilitiesServicesComponent.prototype.getFacilityArrayForGroupAndType = function (groupIndex, typeIndex) {
        return this.getTypeArrayForGroup(groupIndex).controls[typeIndex].get('facilityList');
    };
    FacilitiesServicesComponent.prototype.buildFacilityGroupsForm = function (facilityGroups) {
        var _this = this;
        var groupFormGroup;
        var groupFormArray;
        facilityGroups.forEach(function (facilityGroup) {
            groupFormGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
                facilityGroupId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facilityGroup.facilityGroupId),
                facilityGroupName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facilityGroup.facilityGroupName),
                isSelected: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facilityGroup.isSelected),
                hotelFacilityTypes: _this.buildFacilityTypesForm(facilityGroup)
            });
            if (groupFormArray === null || groupFormArray === undefined) {
                groupFormArray = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormArray"]([groupFormGroup]);
            }
            else {
                groupFormArray.push(groupFormGroup);
            }
        });
        return groupFormArray;
    };
    FacilitiesServicesComponent.prototype.buildFacilityTypesForm = function (facilityGroup) {
        var _this = this;
        var typeFormGroup;
        var typeFormArray;
        facilityGroup.hotelFacilityTypes.forEach(function (facilityType) {
            typeFormGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
                facilityTypeId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facilityType.facilityTypeId),
                facilityGroupId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facilityType.facilityGroupId),
                facilityTypeName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facilityType.facilityTypeName),
                selectedAll: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](false),
                selectedFacilityId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"],
                multiSelectedFacilityIds: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"],
                facilityList: _this.buildFacilitiesForm(facilityType)
            });
            // for single select dropdowns
            if (facilityType.facilityTypeId === _this.isInternetAvailableTypeId ||
                facilityType.facilityTypeId === _this.connectionTypeTypeId ||
                facilityType.facilityTypeId === _this.connectionLocationTypeId ||
                facilityType.facilityTypeId === _this.isParkingAvailableTypeId ||
                facilityType.facilityTypeId === _this.reserveParkingTypeId ||
                facilityType.facilityTypeId === _this.petsAllowedTypeId) {
                facilityType.facilityList.forEach(function (facility) {
                    if (facility.isSelected === true) {
                        typeFormGroup.patchValue({
                            selectedFacilityId: String(facility.id)
                        });
                    }
                });
            }
            var selectedAll = facilityType.facilityList.every(function (item) {
                return item.isSelected === true;
            });
            typeFormGroup.patchValue({
                selectedAll: selectedAll
            });
            // for multi select dropdown
            if (facilityGroup.facilityGroupId === _this.languagesGroupId) {
                var multiselectedFacilityIds_1 = [];
                facilityType.facilityList.forEach(function (facility) {
                    if (facility.isSelected === true) {
                        multiselectedFacilityIds_1.push(String(facility.id));
                        typeFormGroup.patchValue({
                            multiSelectedFacilityIds: multiselectedFacilityIds_1
                        });
                    }
                });
            }
            if (typeFormArray === null || typeFormArray === undefined) {
                typeFormArray = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormArray"]([typeFormGroup]);
            }
            else {
                typeFormArray.push(typeFormGroup);
            }
        });
        return typeFormArray;
    };
    FacilitiesServicesComponent.prototype.buildFacilitiesForm = function (facilityType) {
        var facilityFormGroup;
        var facilityFormArray;
        facilityType.facilityList.forEach(function (facility) {
            facilityFormGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
                facilityRelationId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facility.facilityRelationId),
                id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facility.id),
                name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facility.name),
                facilityTypeId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facility.facilityTypeId),
                facilityGroupId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facility.facilityGroupId),
                isSelected: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](facility.isSelected)
            });
            if (facilityFormArray === null || facilityFormArray === undefined) {
                facilityFormArray = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormArray"]([facilityFormGroup]);
            }
            else {
                facilityFormArray.push(facilityFormGroup);
            }
        });
        return facilityFormArray;
    };
    FacilitiesServicesComponent.prototype.selectAll = function (facilityGroupIndex, facilityTypeIndex) {
        var _this = this;
        this.getFacilityArrayForGroupAndType(facilityGroupIndex, facilityTypeIndex).controls.forEach(function (facility) {
            facility.patchValue({
                isSelected: _this.facilitiesForm.value.facilitiesGroupArray[facilityGroupIndex].
                    hotelFacilityTypes[facilityTypeIndex].selectedAll
            });
        });
    };
    FacilitiesServicesComponent.prototype.checkIfAllSelected = function (facilityGroupIndex, facilityTypeIndex) {
        var _this = this;
        this.getTypeArrayForGroup(facilityGroupIndex).controls.forEach(function (facilityType, i) {
            if (facilityTypeIndex === i) {
                facilityType.patchValue({
                    selectedAll: _this.facilitiesForm.value.facilitiesGroupArray[facilityGroupIndex].
                        hotelFacilityTypes[facilityTypeIndex].facilityList.every(function (item) {
                        return item.isSelected === true;
                    })
                });
            }
        });
    };
    FacilitiesServicesComponent.prototype.saveFacilities = function () {
        var _this = this;
        this.updateFacilitiesList();
        var saveContractFacilities = {
            facilityGroupList: this.facilitiesList,
            contractId: this.contractId
        };
        this.contractFacilitiesDataServiceService.addContractFacilities(saveContractFacilities)
            .subscribe(function (data) {
            _this.router.navigate(['/contractmgmt/contracts']);
            _this.snackBar.open('Contract Facilities & Services Saved Successfully', '', { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
            window.scrollTo(0, 0);
        });
    };
    FacilitiesServicesComponent.prototype.saveAndContinue = function () {
        var _this = this;
        this.updateFacilitiesList();
        var saveContractFacilities = {
            facilityGroupList: this.facilitiesList,
            contractId: this.contractId
        };
        this.contractFacilitiesDataServiceService.addContractFacilities(saveContractFacilities)
            .subscribe(function (data) {
            _this.router.navigate(['contractmgmt/contract', _this.contractId, _this.edit, 'roomtypelist']);
            _this.snackBar.open('Contract Facilities & Services Saved Successfully', '', { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
            window.scrollTo(0, 0);
        });
    };
    FacilitiesServicesComponent.prototype.updateFacilitiesList = function () {
        // to convert dropdown facilities in true or false
        this.facilitiesForm.value.facilitiesGroupArray.forEach(function (facilityGroup) {
            facilityGroup.hotelFacilityTypes.forEach(function (facilityType) {
                if (facilityType.selectedFacilityId != null) {
                    facilityType.facilityList.forEach(function (facility) {
                        if (facility.id === +(facilityType.selectedFacilityId)) {
                            facility.isSelected = true;
                        }
                        else {
                            facility.isSelected = false;
                        }
                    });
                }
                else if (facilityType.multiSelectedFacilityIds != null) {
                    facilityType.facilityList.forEach(function (facility) {
                        facility.isSelected = false;
                    });
                    facilityType.multiSelectedFacilityIds.forEach(function (selectedId) {
                        facilityType.facilityList.forEach(function (facility) {
                            if (facility.id === +(selectedId)) {
                                facility.isSelected = true;
                            }
                        });
                    });
                }
            });
        });
        this.facilitiesList = Object.assign([], this.facilityGroupList, this.facilitiesForm.value.facilitiesGroupArray);
        this.updateObjectState();
    };
    FacilitiesServicesComponent.prototype.updateObjectState = function () {
        var _this = this;
        if (this.facilityOperation === this.create) {
            this.facilitiesList.forEach(function (grp) {
                grp.hotelFacilityTypes.forEach(function (type) {
                    type.facilityList.forEach(function (facility) {
                        if (facility.isSelected) {
                            facility.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Added;
                        }
                        else {
                            facility.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Unchanged;
                        }
                    });
                });
            });
        }
        else if (this.facilityOperation === this.edit) {
            this.facilitiesList.forEach(function (grp, i) {
                grp.hotelFacilityTypes.forEach(function (type, j) {
                    type.facilityList.forEach(function (facility, k) {
                        if (facility.isSelected !== _this.checkOriginalObjectState(i, j, k)) {
                            if (facility.isSelected) {
                                facility.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Added;
                            }
                            else {
                                facility.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Deleted;
                            }
                        }
                        else {
                            facility.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Unchanged;
                        }
                    });
                });
            });
        }
    };
    FacilitiesServicesComponent.prototype.checkOriginalObjectState = function (grpindex, typeindex, facilityindex) {
        return this.facilityGroupList[grpindex].hotelFacilityTypes[typeindex].
            facilityList[facilityindex].isSelected;
    };
    FacilitiesServicesComponent.prototype.cancelFacilities = function () {
        this.router.navigate(['/contractmgmt/contracts']);
        window.scrollTo(0, 0);
    };
    FacilitiesServicesComponent.prototype.isInternetDropdownChange = function (event) {
        var _this = this;
        // 2 is for 'NO'
        if (+(event.value) === 2) {
            this.getTypeArrayForGroup(this.groupIndexOfInternet).controls.forEach(function (facilityTypeControl) {
                if (facilityTypeControl.value.facilityTypeId === _this.connectionTypeTypeId ||
                    facilityTypeControl.value.facilityTypeId === _this.connectionLocationTypeId) {
                    facilityTypeControl.disable();
                    facilityTypeControl.patchValue({
                        selectedFacilityId: null
                    });
                }
            });
        }
        else {
            this.getTypeArrayForGroup(this.groupIndexOfInternet).controls.forEach(function (facilityTypeControl) {
                if (facilityTypeControl.value.facilityTypeId === _this.connectionTypeTypeId ||
                    facilityTypeControl.value.facilityTypeId === _this.connectionLocationTypeId) {
                    facilityTypeControl.enable();
                }
            });
        }
    };
    FacilitiesServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-facilities-services',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/facilities-services/facilities-services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/facilities-services/facilities-services.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_contracts_contract_facilities_data_service_service__["a" /* ContractFacilitiesDataServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_8__common_extranet_shared_services_contracts_contract_url_notification_service__["a" /* ContractUrlNotificationService */]])
    ], FacilitiesServicesComponent);
    return FacilitiesServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/hotel-details/hotel-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\r\n    display: inline-block;\r\n  }\r\n  \r\n  .amt {\r\n    width: 50%;\r\n    display: inline-block;\r\n  }\r\n  \r\n  .buttons {\r\n    float: right;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .mapLocator {\r\n    position: relative;\r\n  }\r\n  \r\n    .mapLocator .input-group-addon {\r\n      position: absolute;\r\n      right: 0;\r\n      top: 2px;\r\n      background: none;\r\n      border: none;\r\n      cursor: pointer;\r\n      padding: 0;\r\n    }\r\n  \r\n    .mapLocator .input-group-addon button{\r\n      background: none;\r\n      border: none;\r\n    }\r\n\r\n\r\n    .customFileUpload input[type=\"file\"]{\r\n      border: 1px solid #29b6f6;\r\n      padding: 7px 10px;\r\n    }\r\n  \r\n      .mapLocator .input-group-addon .fa {\r\n        color: #29aae2;\r\n        font-size: 1.2rem;\r\n      }\r\n  \r\n    .mapLocator .form-control {\r\n      padding-right: 34px;\r\n    }\r\n  \r\n  .custom-select {\r\n  }\r\n  \r\n  .table td, .table th {\r\n    vertical-align: middle;\r\n  }\r\n  \r\n  .table th {\r\n    border-bottom: 0;\r\n  }\r\n  \r\n  .typeLabel {\r\n    font-size: 0.875rem;\r\n    color: #666;\r\n  }\r\n  \r\n  .taxtesTypeTh {\r\n    width: 16.7%;\r\n  }\r\n  \r\n  .taxtesRoomTh {\r\n    width: 21.0%;\r\n  }\r\n  \r\n  .taxtesAmountTh {\r\n    width: 10.5%;\r\n  }\r\n  \r\n  .taxtesRatesTh {\r\n    width: 10.5%;\r\n  }\r\n  \r\n  \r\n  td.taxesLabel .mat-form-field{\r\n    width: 70%;\r\n  }\r\n  \r\n  .taxesAmountLabel .percentageIcon{\r\n    position: absolute;\r\n    right: -20px;\r\n    top: 10px;\r\n  }\r\n  \r\n  \r\n  .primaryContactTh{\r\n    width: 5%;\r\n  }\r\n  \r\n  .contactContactTh{\r\n    width: 22%;\r\n  }\r\n  \r\n  .titleContactTh{\r\n    width: 25.2%;\r\n  }\r\n  \r\n  .emailContactTh{  \r\n    width: 28.2%;\r\n  }\r\n  \r\n  .contactNumberContactTh{\r\n    width: 27.9%;  \r\n  }\r\n  \r\n  .addContact{\r\n    position: relative;\r\n  }\r\n  \r\n  .addContact .btn.buttonStacked{\r\n    position: absolute;\r\n    right: 0;\r\n    top: 25px;\r\n  }\r\n  \r\n  \r\n  .addContact .text-primary{\r\n    color: #29aae2 !important;\r\n  }\r\n  \r\n  .contactTable td .mat-form-field{\r\n    width: 70%;\r\n  }\r\n  \r\n  .fileUploaded{\r\n    color: green;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/hotel-details/hotel-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form [formGroup]=\"hotelDetailsContractGroup\"> -->\n<!-- <input matInput placeholder=\"contractNameEntered\" formControlName=\"contractNameEntered\" style=\"    visibility: hidden\"/>\n<input matInput placeholder=\"startDate\" formControlName=\"startDate\" style=\" visibility: hidden\"/>\n<input matInput placeholder=\"EndDate\" formControlName=\"endDate\" style=\"visibility: hidden\"/> -->\n\n\n<div class=\"container-fluid\">\n  <h1 class=\"mainHeading mb-4 customBreadcrumb\">Hotel Info</h1>\n  <form [formGroup]=\"hotelDetailsContractGroup\">\n    <input class=\"d-none\" matInput placeholder=\"contractNameEntered\" formControlName=\"contractNameEntered\" style=\"visibility: hidden\"/>\n    <input class=\"d-none\" matInput placeholder=\"startDate\" formControlName=\"startDate\" style=\" visibility: hidden\" />\n    <input class=\"d-none\" matInput placeholder=\"EndDate\" formControlName=\"endDate\" style=\"visibility: hidden\" />\n\n    <div class=\"formSections pt-3 pb-4 borderBottomNone\" *ngIf=\"isSelectedName || isSelectedChain || isSelectedBrand || isSelectedType || isSelectedStarRating || isSelectedMgPoints\">\n      <h5 class=\"semiBold mb-5\">Hotel Details</h5>\n      <div class=\"row customeRow\">\n\n        <div class=\"form-group col-md-4 col-lg-3 serachField\" *ngIf=\"isSelectedName\">\n          <mat-form-field>\n            <input matInput placeholder=\"Search by Name\" formControlName=\"hotelName\" [matAutocomplete]=\"auto\" required />\n\n            <mat-autocomplete #auto=\"matAutocomplete\">\n              <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.name\" (onSelectionChange)=\"searchHotel($event, option.id)\">\n                {{ option.name }}\n              </mat-option>\n            </mat-autocomplete>\n            <!-- <button type=\"submit\" class=\"searchButton\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n          </button> -->\n            <i aria-hidden=\"true\" class=\"fa fa-search\"></i>\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-group col-md-4 col-lg-3\" *ngIf=\"isSelectedChain\">\n          <mat-form-field>\n            <mat-select formControlName=\"hotelChainId\" placeholder=\"Chain\" disabled>\n              <mat-option *ngFor=\"let chain of hotelChainList\" [value]=\"chain.hotelChainId\">{{chain.hotelChainName}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-group col-md-4 col-lg-3\" *ngIf=\"isSelectedBrand\">\n          <mat-form-field>\n            <mat-select formControlName=\"hotelBrandId\" placeholder=\"Brand\" disabled>\n              <mat-option *ngFor=\"let brand of hotelBrandList\" [value]=\"brand.hotelBrandId\">{{brand.hotelBrandName}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-group  col-md-4 col-lg-3\" *ngIf=\"isSelectedType\">\n          <mat-form-field>\n            <mat-select formControlName=\"hotelTypeId\" placeholder=\"Type\" required disabled>\n              <mat-option *ngFor=\"let type of hotelTypeList\" [value]=\"type.hotelTypeId\">{{type.hotelTypeName}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n      <div class=\"form-group col-md-4 col-lg-3\" *ngIf=\"isSelectedTotalNumberOfRooms\">\n        <mat-form-field>\n          <input matInput placeholder=\"Number of Rooms\" pattern=\"^[0-9]*$\" formControlName=\"totalNumberOfRooms\" required readonly/>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-group  col-md-4 col-lg-3\" *ngIf=\"isSelectedStarRating\">\n        <mat-form-field>\n          <mat-select formControlName=\"starRatingId\" placeholder=\"Star Rating\" required disabled>\n            <mat-option *ngFor=\"let starRating of starRatingList\" [value]=\"starRating.hotelStarRatingId\">{{starRating.hotelStarRatingName}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"form-group  col-md-4 col-lg-3\" *ngIf=\"isSelectedMgPoints\">\n        <mat-form-field>\n          <input  matInput formControlName=\"mgPoint\" placeholder=\"MG Points\" type=\"number\" min=\"1\" max=\"99\" readonly>\n        </mat-form-field>\n      </div>\n\n\n\n      </div>\n      <!-- Form section cosed-->\n    </div>\n    <!-- Row div cosed-->\n\n    <div class=\"formSections pt-5 pb-4 borderTop\" *ngIf=\"isSelectedAddress1 || isSelectedAddress2 || isSelectedCountry || isSelectedCity || isSelectedZip || isSelectedLatLong\">\n      <div class=\"row customeRow\">\n        <div class=\"form-group  col-md-4 col-lg-3\" *ngIf=\"isSelectedAddress1\">\n          <mat-form-field>\n            <input matInput placeholder=\"Address 1\" formControlName=\"address1\" maxlength=\"500\" required readonly/>\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-group  col-md-4 col-lg-3\" *ngIf=\"isSelectedAddress2\">\n          <mat-form-field>\n            <input matInput placeholder=\"Address 2\" formControlName=\"address2\" maxlength=\"500\" readonly/>\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-group  col-md-4 col-lg-3\" *ngIf=\"isSelectedCountry\">\n          <mat-form-field>\n            <mat-select formControlName=\"countryId\" placeholder=\"Country\" required disabled>\n              <mat-option *ngFor=\"let country of countriesList\" [value]=\"country.countryId\">{{country.countryName}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-group  col-md-4 col-lg-3\" *ngIf=\"isSelectedCity\">\n          <mat-form-field>\n            <mat-select formControlName=\"cityId\" placeholder=\"City\" required disabled>\n              <mat-option *ngFor=\"let city of citiesList\" [value]=\"city.cityId\">{{city.cityName}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-group  col-md-4 col-lg-3\" *ngIf=\"isSelectedZip\">\n          <mat-form-field>\n            <input matInput placeholder=\"Zipcode\" formControlName=\"zipCode\" maxlength=\"7\" required readonly/>\n          </mat-form-field>\n        </div>\n\n        <div class=\"col-md-4 col-lg-3\" *ngIf=\"isSelectedLatLong\">\n          <div class=\"mapLocator\">\n            <mat-form-field>\n              <input matInput placeholder=\"Latitude / Longitude\" formControlName=\"latLong\" required readonly />\n              <span class=\"input-group-addon\">\n                <button class=\"\">\n                  <i _ngcontent-c24=\"\" aria-hidden=\"true\" class=\"fa fa-map-marker\"></i>\n                </button>\n              </span>\n            </mat-form-field>\n          </div>\n        </div>\n\n\n\n\n      </div>\n    </div>\n\n    <div class=\"formSections pb-4 pt-4\" *ngIf=\"isSelectedShortDescription || isSelectedLongDescription\">\n      <div class=\"row mt-3 customeRow\" *ngIf=\"isSelectedShortDescription\">\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <textarea matInput formControlName=\"shortDescription\" placeholder=\"Hotel Short Description\" rows=\"5\" cols=\"200\" maxlength=\"500\"\n              required readonly></textarea>\n          </mat-form-field>\n          <p class=\"small text-right lightGrey\">Max. 500 characters</p>\n\n        </div>\n      </div>\n      <div class=\"row mt-3 customeRow\" *ngIf=\"isSelectedLongDescription\">\n        <div class=\"col-md-12\">\n          <mat-form-field>\n            <textarea matInput formControlName=\"longDescription\" placeholder=\"Hotel Long Description\" rows=\"5\" cols=\"70\" maxlength=\"1200\"\n              readonly></textarea>\n          </mat-form-field>\n          <p class=\"small text-right lightGrey\">Max. 1200 characters</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"formSections pb-0 pt-5\" *ngIf=\"isSelectedCheckinCheckout\">\n\n\n      <div class=\"row  mt-0 customeRow pb-4 customeRow\">\n        <div class=\"col-md-4 checkInCheckoutBorderRight form-group col-lg-3\">\n          <div class=\"row customeRow mb-4\">\n            <div class=\"col-md-12\">\n              <h5 class=\"requiredLabel semiBold mb-4\">Check-in</h5>\n            </div>\n          </div>\n          <div class=\"row customeRow\">\n            <div class=\"col-md-12\">\n              <mat-form-field>\n                <mat-select placeholder=\"From\" formControlName=\"checkInFrom\" required disabled>\n                  <mat-option *ngFor=\"let checkinfrom of checkInCheckOut\" [value]=\"checkinfrom.Value\">{{checkinfrom.Value}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4 form-group col-lg-3\">\n          <div class=\"row customeRow pr-5 mb-4\">\n            <div class=\"col-md-12\">\n              <h5 class=\"requiredLabel semiBold mb-4\">Check-out</h5>\n            </div>\n          </div>\n          <div class=\"row customeRow\">\n            <div class=\"col-md-12\">\n              <mat-form-field>\n                <mat-select placeholder=\"To\" formControlName=\"checkOutTo\" disabled required>\n                  <mat-option *ngFor=\"let checkoutto of checkInCheckOut\" [value]=\"checkoutto.Value\">{{checkoutto.Value}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <div *ngIf=\"isSelectedContactDetails\">\n    <div class=\"formSections pb-0 borderBottomNone pt-5 paddingRight15px\">\n      <h2 class=\"pb-1\">Contact Details</h2>\n      <div class=\"row mt-4\">\n        <div class=\"form-group col-md-12 mb-0\">\n          <table class=\"table genericTable borderTopZero mb-0 contactTable\">\n            <thead>\n              <tr>\n                <th class=\"border-top-0 primaryContactTh\">Set as Primary</th>\n                <th class=\"border-top-0 contactContactTh\">Contact Person</th>\n                <th class=\"border-top-0 titleContactTh\">Designation</th>\n                <th class=\"border-top-0 emailContactTh\">Email</th>\n                <th class=\"border-top-0 contactNumberContactTh\">Contact Number</th>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container formArrayName=\"contactDetails\" *ngFor=\"let contact of contactDetails.controls; let i =index\">\n                <ng-container [formGroupName]=\"i\">\n                  <tr>\n                    <td class=\"align-middle\">\n                      <mat-radio-group formControlName=\"rowSelected\">\n                        <mat-radio-button [value]=\"i\" disabled></mat-radio-button>\n                      </mat-radio-group>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                        <input matInput formControlName=\"contactPerson\" placeholder=\"\" [readonly]=\"i === rowSelected\" [required]=\"i === rowSelected\" (change)=\"flagContactDetailsAsEdited(i)\"/>\n                      </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                        <mat-select placeholder=\"\" formControlName=\"designationId\" [disabled]=\"i === rowSelected\" required (change)=\"flagContactDetailsAsEdited(i)\">\n                          <mat-option [value]=\"null\">Select</mat-option>\n                          <mat-option *ngFor=\"let contactTitle of contactPersonTitleList\" [value]=\"contactTitle.designationId\">{{contactTitle.title}}</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </td>\n                    <td>\n                      <mat-form-field>\n                        <input matInput placeholder=\"\" formControlName=\"emailAddress\" type=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                          [readonly]=\"i === rowSelected\" required (change)=\"flagContactDetailsAsEdited(i)\"/>\n                      </mat-form-field>\n                    </td>\n                    <td class=\"addContact\">\n                      <mat-form-field>\n                        <input matInput placeholder=\"\" formControlName=\"contactNumber\" pattern=\"[0-9+-]*\" maxlength=\"18\" [readonly]=\"i === rowSelected\"\n                          required (change)=\"flagContactDetailsAsEdited(i)\"/>\n                      </mat-form-field>\n\n                      <ng-container *ngIf=\"i === (contactDetails.controls.length - 1)\">\n                        <button title=\"Add\" type=\"button\" class=\"buttonStacked\" mat-raised-button (click)=\"addContact()\"><span class=\"fa-stack\">\n                        <i class=\"fa fa-circle-thin fa-stack-2x text-primary\"></i>\n                        <i class=\"fa fa-plus fa-stack-1x fa-inverse text-primary\"></i>\n                      </span></button>\n                      </ng-container>\n                    </td>\n                  </tr>\n                </ng-container>\n              </ng-container>\n            </tbody>\n          </table>\n\n          </div>\n        </div>\n      </div>\n\n    <div class=\"formSections pb-4 pt-4\">\n      <div class=\"row customeRow\">\n        <div class=\"form-group col-md-4  col-lg-3\">\n          <mat-form-field>\n            <input matInput formControlName=\"website\" placeholder=\"Website\" pattern=\"(\\w*\\W*)?\\w*(\\.(\\w)+)+(\\W\\d+)?(\\/\\w*(\\W*\\w)*)*\" (change)=\"flagHotelDetailsAsEdited()\" required/>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group col-md-4  col-lg-3\">\n          <mat-form-field>\n            <input matInput formControlName=\"reservationEmail\" placeholder=\"Email (Reservation)\" pattern=\"\\w+([\\.-]?\\w+)*@\\w+\\.\\w+(,\\s*\\w+([\\.-]?\\w+)*@\\w+\\.\\w+)*\" (change)=\"flagHotelDetailsAsEdited()\" required/>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group col-md-4  col-lg-3\">\n          <mat-form-field>\n            <input matInput formControlName=\"reservationContactNo\" placeholder=\"Telephone (Reservation)\" type=\"tel\" pattern=\"[0-9+-]+(,\\s*[0-9+-]+)*\" (change)=\"flagHotelDetailsAsEdited()\" required/>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"formSections pb-1 pt-5\" formGroupName=\"hotelPaymentMethodRelation\" *ngIf=\"contractType === mgStatic && isSelectedPaymentDetails\">\n    <h2>Payment Details</h2>\n    <label for=\"paymentMethod\" class=\"d-block semiBold mb-3 mt-4 pt-2\">Payment Method</label>    \n    <div class=\"row alignItemCenter pb-4 customeRow\">\n      <div class=\"col-md-4  col-lg-4\">\n        <div class=\"row customeRow\">\n          <!-- <label for=\"paymentMethod\" class=\"d-block\">Payment Method</label> -->\n          <div class=\"col-md-12\">\n            <mat-radio-group formControlName=\"paymentMethodId\" class=\"row\" (change)=\"flagPaymentDetailsAsEdited()\">\n              <mat-radio-button *ngFor=\"let paymentMethod of paymentMethodList\" class=\"col-md-6 pl-0\" [value]=\"paymentMethod.id\">{{paymentMethod.name}}</mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group col-md-4  col-lg-4\">\n        <mat-form-field>\n          <mat-select placeholder=\"Currency\" formControlName=\"currencyId\" (change)=\"flagPaymentDetailsAsEdited()\" required>\n            <mat-option [value]=\"null\">Select</mat-option>\n            <mat-option *ngFor=\"let currency of currencyList\" [value]=\"currency.currencyId\">{{currency.currencyName}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <div class=\"col-md-4  col-lg-4\">\n        <label class=\"d-block mb-4\">Rate Type</label>\n        <div class=\"row customeRow\">\n          <div class=\"col-md-12 pl-0 ml-3\">\n            <mat-radio-group formControlName=\"rateTypeId\" class=\"row\" (change)=\"flagPaymentDetailsAsEdited()\">\n              <mat-radio-button *ngFor=\"let rateType of rateTypeList\" class=\"col-md-3\" [value]=\"rateType.id\">{{rateType.name}}</mat-radio-button>\n            </mat-radio-group>\n          </div>\n        </div>\n      </div>\n\n      </div>\n    </div>\n\n  <div class=\"formSections pt-5\" *ngIf=\"contractType === mgStatic && isSelectedExtranetDetails\">\n    <h2>Extranet Details</h2>\n    <div class=\"row mt-4 pt-2 pb-2 customeRow\">\n      <div class=\"form-group col-md-4  col-lg-4  mb-0\">\n        <p>Extranet Account Access</p>\n        <mat-button-toggle-group formControlName=\"isExtranetAccess\" (change)=\"flagHotelDetailsAsEdited()\">\n          <mat-button-toggle [value]=\"true\">\n            Yes\n          </mat-button-toggle>\n          <mat-button-toggle [value]=\"false\">\n            No\n          </mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n      <div class=\"form-group col-md-4  col-lg-4  mb-0\">\n        <p>Channel Manager Connectivity</p>\n        <mat-button-toggle-group formControlName=\"isChannelManagerConnectivity\" #channelManagerGroup=\"matButtonToggleGroup\" (change)=\"isChannelManager(channelManagerGroup.value)\">\n          <mat-button-toggle [value]=\"true\">\n            Yes\n          </mat-button-toggle>\n          <mat-button-toggle [value]=\"false\">\n            No\n          </mat-button-toggle>\n        </mat-button-toggle-group>\n      </div>\n      <div class=\"form-group col-md-4 mb-0\">\n        <mat-form-field class=\"mt-4\">\n          <mat-select placeholder=\"Channel Manager\" formControlName=\"channelManagerId\" (change)=\"flagHotelDetailsAsEdited()\" required>\n            <mat-option *ngFor=\"let channelManager of channelManagerList\" [value]=\"channelManager.id\">{{channelManager.channelManager}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"pt-5 pb-4 paddingRight15px\" *ngIf=\"contractType === mgStatic && isSelectedTaxes\">\n    <h2>Taxes</h2>\n    <p>\n      Rates will be considered all INCLUSIVE unless the below section is completed\n    </p>\n    <table class=\"table genericTable mb-4\">\n      <thead>\n        <tr>\n          <th class=\"taxtesTypeTh\">Type</th>\n          <th class=\"taxtesRoomTh\">Per Room/Person</th>\n          <th class=\"taxtesAmountTh\">Amount</th>\n          <th class=\"taxtesRatesTh\">Included in Rates</th>\n        </tr>\n      </thead>\n      <tbody>\n        <ng-container formArrayName=\"taxDetails\" *ngFor=\"let tax of taxDetails.controls; let i =index\">\n          <ng-container [formGroupName]=\"i\">\n            <tr>\n              <td class=\"typeLabel taxesLabel\">\n                <label>{{tax.get('taxesType').value}}</label>\n              </td>\n              <td class=\"taxesLabel\">\n                <mat-form-field>\n                  <mat-select formControlName=\"taxApplicabilityId\" (change)=\"flagTaxDetailsAsEdited(i)\">\n                    <mat-option *ngFor=\"let taxesApplicability of taxesApplicabilityList\" [value]=\"taxesApplicability.id\">{{taxesApplicability.name}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n              <td class=\"taxesLabel taxesAmountLabel\">\n                <mat-form-field>\n                  <input matInput formControlName=\"amount\" pattern=\"^(\\d\\d?(\\.\\d\\d?)?|100(\\.00?)?)$\" (change)=\"flagTaxDetailsAsEdited(i)\"/>\n                  <span class=\"percentageIcon\">&nbsp;%</span>\n                </mat-form-field>\n              </td>\n              <td class=\"taxesLabel\">\n                <mat-form-field>\n                  <mat-select formControlName=\"isIncludedInRates\" (change)=\"flagTaxDetailsAsEdited(i)\">\n                    <mat-option [value]=\"true\">Yes</mat-option>\n                    <mat-option [value]=\"false\">No</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </td>\n            </tr>\n          </ng-container>\n        </ng-container>\n      </tbody>\n    </table>\n  </div>\n\n\n  <div class=\"formSections pb-4 pt-5 borderBottomNone\" *ngIf=\"contractType !== mgStatic\">\n    <h2 class=\"pb-1\">Upload Contract File</h2>\n\n    <div class=\"row customeRow controlButtons customFileUpload mt-4\">\n      <div class=\"col-md-12\">\n        <input type=\"file\" accept=\".doc, .docx, .pdf\" (change)=\"fileChanged($event)\">\n        <button (click)=\"readFile()\" class=\"genericButton activeButton mat-raised-button mat-primary\" [disabled]=\"this.hotelDetailsContractGroup.get('hotelId').value === null || error !== null || errorSize !== null || !file || isUploadComplete\">Upload</button>\n        <mat-spinner [diameter]=\"50\" *ngIf=\"!isUploadComplete && isFileUploaded\"></mat-spinner>\n        <mat-error *ngIf=\"error !== null\">{{error}}</mat-error>\n        <mat-error *ngIf=\"errorSize !== null\">{{errorSize}}</mat-error>\n        <div *ngIf=\"isUploadComplete && isFileUploaded\" class=\"fileUploaded\">File Uploaded</div>\n        <div *ngIf=\"isUploadComplete && isFileUploaded\"><a target=\"_blank\" (click)=\"viewPdf()\">View/download uploaded file</a></div>\n    </div>\n    </div>\n  </div>\n\n\n\n    <div class=\"controlButtons borderTopDark paddingTop50px pb-4 mb-1 paddingRight15px\">\n      <button *ngIf=\"contractType === mgStatic\" title=\"Save\" class=\"genericButton activeButton mat-raised-button mat-primary\" [disabled]=\"!hotelDetailsContractGroup.valid\"\n        (click)=\"saveContract()\">Save</button>\n      <button *ngIf=\"contractType !== mgStatic\" title=\"Save\" class=\"genericButton activeButton mat-raised-button mat-primary\" [disabled]=\"!hotelDetailsContractGroup.valid || !isUploadComplete || !isFileUploaded\"\n        (click)=\"saveContract()\">Save</button>\n      <button title=\"Cancel\" class=\"genericButton defaultButton\" (click)=\"backToList()\">Cancel</button>\n      <!-- <button title=\"Continue\" class=\"genericButton activeButton mat-raised-button mat-primary float-right\" [disabled]=\"!hotelDetailsContractGroup.valid\" >Save & Continue</button> -->\n      <button *ngIf=\"contractType === mgStatic\" title=\"Continue\" class=\"genericButton activeButton mat-raised-button mat-primary float-right\" [disabled] = \"!hotelDetailsContractGroup.valid\" (click)=\"saveAndContinue()\">Save & Continue</button>\n  </div>\n  \n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/hotel-details/hotel-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_contracts_contract_name_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-name-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_contracts_contract_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-url-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_shared_services_lookup_service__ = __webpack_require__("../../../../../src/app/common/shared/services/lookup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_contracts_contract_hotel_details_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-hotel-details-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_extranet_shared_services_hotel_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/hotel-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_constants__ = __webpack_require__("../../../../../src/app/extranet/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_extranet_shared_services_contracts_contract_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_enums__ = __webpack_require__("../../../../../src/app/common/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_extranet_shared_services_templates_templates_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/templates-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var duration = __WEBPACK_IMPORTED_MODULE_14__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration;
var HotelDetailsComponent = (function () {
    function HotelDetailsComponent(contractNameDataService, contractDataService, contractUrlNotificationService, lookupService, contractHotelDetailsDataService, templatesDataService, activatedRoute, router, hotelDataService, changeDetector, snackBar) {
        this.contractNameDataService = contractNameDataService;
        this.contractDataService = contractDataService;
        this.contractUrlNotificationService = contractUrlNotificationService;
        this.lookupService = lookupService;
        this.contractHotelDetailsDataService = contractHotelDetailsDataService;
        this.templatesDataService = templatesDataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.hotelDataService = hotelDataService;
        this.changeDetector = changeDetector;
        this.snackBar = snackBar;
        this.edit = __WEBPACK_IMPORTED_MODULE_14__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_14__common_constants__["a" /* CONSTANTS */].operation.create;
        this.contractBasicData = [];
        this.nonMg = __WEBPACK_IMPORTED_MODULE_11__common_enums__["a" /* ContractType */].NonMG;
        this.mgStatic = __WEBPACK_IMPORTED_MODULE_11__common_enums__["a" /* ContractType */].MGStatic;
        this.mgDynamic = __WEBPACK_IMPORTED_MODULE_11__common_enums__["a" /* ContractType */].MGDynamic;
        this.hotelInfoCodes = __WEBPACK_IMPORTED_MODULE_9__common_constants__["a" /* EXTRANETCONSTANTS */].templates.hotelinfo;
        this.contractId = this.activatedRoute.parent.snapshot.params['id'];
        this.operation = this.activatedRoute.parent.snapshot.params['operation'];
        this.checkInCheckOut = __WEBPACK_IMPORTED_MODULE_9__common_constants__["a" /* EXTRANETCONSTANTS */].arrCheckInCheckOut;
        contractUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    HotelDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.error = null;
        this.errorSize = null;
        this.maxSize = 5;
        this.fileExt = __WEBPACK_IMPORTED_MODULE_11__common_enums__["b" /* DocumentType */][0] + ', ' + __WEBPACK_IMPORTED_MODULE_11__common_enums__["b" /* DocumentType */][1] + ', ' + __WEBPACK_IMPORTED_MODULE_11__common_enums__["b" /* DocumentType */][2];
        this.isFileUploaded = false;
        this.getCountries();
        this.getHotelTypes();
        this.getHotelChains();
        this.getContactTitles();
        this.getCurrency();
        this.getPaymentMethod();
        this.getRateType();
        this.getChannelManager();
        this.getTaxApplicability();
        this.getStarRating();
        this.hotelsNameList = this.activatedRoute.snapshot.data['hotelsName'];
        this.templateId = this.contractDataService.templateId;
        if (this.operation === this.create) {
            this.contractType = this.contractDataService.contractType;
        }
        else if (this.operation === this.edit) {
            this.contractType = this.mgStatic;
        }
        this.hotelDetailsContractGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            hotelId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            hotelName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            hotelChainId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            hotelBrandId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            hotelTypeId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            totalNumberOfRooms: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            countryId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            cityId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            address1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            address2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            zipCode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            latLong: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            starRatingId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            mgPoint: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            shortDescription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            longDescription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            checkInFrom: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            checkOutTo: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            contactDetails: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"]([this.buildContactDetailsForm()]),
            website: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            reservationEmail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            reservationContactNo: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            hotelPaymentMethodRelation: this.buildPaymentMethod(),
            isExtranetAccess: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            isChannelManagerConnectivity: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            channelManagerId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            taxDetails: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"]([this.buildTaxDetailsForm()]),
            contractNameEntered: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            startDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            endDate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            objectState: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
        this.contractNameDataService.contractName.subscribe(function (contractBasicDetails) {
            _this.contractBasicData = contractBasicDetails.split('~#');
            _this.hotelDetailsContractGroup.controls['contractNameEntered'].setValue(_this.contractBasicData[0]);
            _this.hotelDetailsContractGroup.controls['startDate'].setValue(_this.contractBasicData[1]);
            _this.hotelDetailsContractGroup.controls['endDate'].setValue(_this.contractBasicData[2]);
        });
        if (this.operation === this.create) {
            this.hotelDetailsContractGroup.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added);
            this.contactDetails.controls.forEach(function (contact, index) {
                contact.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added);
            });
            this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('objectState').
                setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added);
            this.taxDetails.controls.forEach(function (tax, index) {
                tax.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added);
            });
            this.hotelDetailsContractGroup.get('hotelName').enable();
        }
        else if (this.contractType === this.mgStatic && this.operation === this.edit) {
            this.hotelDetailsContractGroup.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Unchanged);
            this.contactDetails.controls.forEach(function (contact, index) {
                contact.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Unchanged);
            });
            this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('objectState').
                setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Unchanged);
            this.taxDetails.controls.forEach(function (tax, index) {
                tax.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Unchanged);
            });
            this.hotelDetailsContractGroup.get('hotelName').disable();
            // this.savedcontractBasicDetails = this.contractsDataService.savedcontractBasicDetails.split('~#');
        }
        if (this.contractType === this.mgStatic && this.operation === this.create) {
            this.templateViewModel = {
                id: this.templateId
            };
            this.templatesDataService.getTemplateHotelFields(this.templateViewModel).subscribe(function (templateData) {
                _this.hotelFields = templateData.hotelFields;
                _this.updateHotelFields();
            });
        }
        else if (this.contractType === this.mgStatic && this.operation === this.edit) {
            this.contractHotelDetailsDataService.getContractHotelDetailsByContractId(this.contractId).subscribe(function (hotelDetails) {
                _this.hotelFields = hotelDetails.contractHotelFieldsList;
                _this.hotelData = hotelDetails.contractHotelDetailsModel;
                _this.initialContactDetailsLength = _this.hotelData.contactDetails.length;
                _this.initialTaxDetailsLength = _this.hotelData.taxDetails.length;
                _this.updateHotelFields();
                _this.setHotelFieldsValue();
            });
        }
        else if (this.contractType === this.nonMg || this.contractType === this.mgDynamic) {
            this.isSelectedName = true;
            this.isSelectedChain = true;
            this.isSelectedBrand = true;
            this.isSelectedType = true;
            this.isSelectedTotalNumberOfRooms = true;
            this.isSelectedAddress1 = true;
            this.isSelectedAddress2 = true;
            this.isSelectedCountry = true;
            this.isSelectedCity = true;
            this.isSelectedZip = true;
            this.isSelectedLatLong = true;
            this.isSelectedStarRating = true;
            this.isSelectedMgPoints = true;
            this.isSelectedShortDescription = true;
            this.isSelectedLongDescription = true;
            this.isSelectedContactDetails = true;
            this.isSelectedPaymentDetails = false;
            this.isSelectedExtranetDetails = false;
            this.isSelectedTaxes = false;
            this.isSelectedCheckinCheckout = true;
        }
        // function for serach by hotel name
        this.filteredOptions = this.hotelDetailsContractGroup.get('hotelName').valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["a" /* map */])(function (val) { return _this.filter(val.trim()); }));
    };
    HotelDetailsComponent.prototype.updateHotelFields = function () {
        var _this = this;
        this.hotelFields.forEach(function (hotelField) {
            if (hotelField.isConfigurable === false) {
                hotelField.isSelected = true;
            }
            if (_this.hotelInfoCodes.name === hotelField.code) {
                _this.isSelectedName = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.chain === hotelField.code) {
                _this.isSelectedChain = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.brand === hotelField.code) {
                _this.isSelectedBrand = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.type === hotelField.code) {
                _this.isSelectedType = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.address1 === hotelField.code) {
                _this.isSelectedAddress1 = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.address2 === hotelField.code) {
                _this.isSelectedAddress2 = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.country === hotelField.code) {
                _this.isSelectedCountry = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.city === hotelField.code) {
                _this.isSelectedCity = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.zip === hotelField.code) {
                _this.isSelectedZip = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.latlong === hotelField.code) {
                _this.isSelectedLatLong = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.starrating === hotelField.code) {
                _this.isSelectedStarRating = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.mgpoints === hotelField.code) {
                _this.isSelectedMgPoints = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.shortdescription === hotelField.code) {
                _this.isSelectedShortDescription = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.longdescription === hotelField.code) {
                _this.isSelectedLongDescription = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.contactdetails === hotelField.code) {
                _this.isSelectedContactDetails = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.paymentdetails === hotelField.code) {
                _this.isSelectedPaymentDetails = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.extranetdetails === hotelField.code) {
                _this.isSelectedExtranetDetails = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.taxes === hotelField.code) {
                _this.isSelectedTaxes = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.checkincheckout === hotelField.code) {
                _this.isSelectedCheckinCheckout = hotelField.isSelected;
            }
            else if (_this.hotelInfoCodes.totalNumberOfRooms === hotelField.code) {
                _this.isSelectedTotalNumberOfRooms = hotelField.isSelected;
            }
        });
    };
    HotelDetailsComponent.prototype.setHotelFieldsValue = function () {
        var _this = this;
        if (this.contactDetails.controls.length !== 0) {
            var contactDetailsControlLength = this.contactDetails.controls.length;
            for (var i = 0; i < contactDetailsControlLength; i++) {
                this.contactDetails.removeAt(0);
            }
        }
        if (this.taxDetails.controls.length !== 0) {
            var taxDetailsControlLength = this.taxDetails.controls.length;
            for (var i = 0; i < taxDetailsControlLength; i++) {
                this.taxDetails.removeAt(0);
            }
        }
        if (this.hotelData.hotelChainId != null) {
            this.getHotelBrands(this.hotelData.hotelChainId);
        }
        if (this.hotelData.countryId != null) {
            this.getCities(this.hotelData.countryId);
        }
        this.latLong = this.hotelData.latitude + '/' + this.hotelData.longitude;
        for (var i = 0; i < this.hotelData.contactDetails.length; i++) {
            this.addContact();
        }
        for (var i = 0; i < this.hotelData.contactDetails.length; i++) {
            if (this.hotelData.contactDetails[i].isPrimary === true) {
                this.rowSelected = i;
            }
            else if (this.hotelData.contactDetails[i].contactPerson === null) {
                this.rowSelected = i;
            }
        }
        for (var i = 0; i < this.hotelData.taxDetails.length; i++) {
            this.addTax();
        }
        if (this.hotelData.isChannelManagerConnectivity === false) {
            this.hotelDetailsContractGroup.get('channelManagerId').setValue(null);
            this.hotelDetailsContractGroup.get('channelManagerId').disable();
        }
        else {
            this.hotelDetailsContractGroup.get('channelManagerId').enable();
        }
        if (this.operation === this.create) {
            this.hotelDetailsContractGroup.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added);
            this.contactDetails.controls.forEach(function (contact, index) {
                contact.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added);
            });
            this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('objectState').
                setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added);
            this.taxDetails.controls.forEach(function (tax, index) {
                tax.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added);
            });
        }
        else if (this.contractType === this.mgStatic && this.operation === this.edit) {
            this.hotelDetailsContractGroup.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Unchanged);
            this.contactDetails.controls.forEach(function (contact, index) {
                contact.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Unchanged);
            });
            this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('objectState').
                setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Unchanged);
            this.taxDetails.controls.forEach(function (tax, index) {
                tax.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Unchanged);
            });
        }
        this.hotelDetailsContractGroup.get('hotelId').setValue(this.hotelData.hotelId);
        this.hotelDetailsContractGroup.get('hotelName').setValue(this.hotelData.hotelName);
        this.hotelDetailsContractGroup.get('hotelChainId').setValue(this.hotelData.hotelChainId);
        this.hotelDetailsContractGroup.get('hotelBrandId').setValue(this.hotelData.hotelBrandId);
        this.hotelDetailsContractGroup.get('hotelTypeId').setValue(this.hotelData.hotelTypeId);
        this.hotelDetailsContractGroup.get('totalNumberOfRooms').setValue(this.hotelData.totalNumberOfRooms);
        this.hotelDetailsContractGroup.get('countryId').setValue(this.hotelData.countryId);
        this.hotelDetailsContractGroup.get('cityId').setValue(this.hotelData.cityId);
        this.hotelDetailsContractGroup.get('address1').setValue(this.hotelData.address1);
        this.hotelDetailsContractGroup.get('address2').setValue(this.hotelData.address2);
        this.hotelDetailsContractGroup.get('zipCode').setValue(this.hotelData.zipCode);
        this.hotelDetailsContractGroup.get('latLong').setValue(this.latLong);
        this.hotelDetailsContractGroup.get('starRatingId').setValue(this.hotelData.starRatingId);
        this.hotelDetailsContractGroup.get('mgPoint').setValue(this.hotelData.mgPoint);
        this.hotelDetailsContractGroup.get('shortDescription').setValue(this.hotelData.shortDescription);
        this.hotelDetailsContractGroup.get('longDescription').setValue(this.hotelData.longDescription);
        this.hotelDetailsContractGroup.get('checkInFrom').setValue(this.hotelData.checkInFrom);
        this.hotelDetailsContractGroup.get('checkOutTo').setValue(this.hotelData.checkOutTo);
        this.hotelDetailsContractGroup.get('website').setValue(this.hotelData.website);
        this.hotelDetailsContractGroup.get('reservationEmail').setValue(this.hotelData.reservationEmail);
        this.hotelDetailsContractGroup.get('reservationContactNo').setValue(this.hotelData.reservationContactNo);
        this.hotelDetailsContractGroup.get('isExtranetAccess').setValue(this.hotelData.isExtranetAccess);
        this.hotelDetailsContractGroup.get('isChannelManagerConnectivity').setValue(this.hotelData.isChannelManagerConnectivity);
        this.hotelDetailsContractGroup.get('channelManagerId').setValue(this.hotelData.channelManagerId);
        this.contactDetails.controls.forEach(function (contact, index) {
            contact.get('contactId').setValue(_this.hotelData.contactDetails[index].contactId);
            contact.get('contactPerson').setValue(_this.hotelData.contactDetails[index].contactPerson);
            contact.get('designationId').setValue(_this.hotelData.contactDetails[index].designationId);
            contact.get('emailAddress').setValue(_this.hotelData.contactDetails[index].emailAddress);
            contact.get('contactNumber').setValue(_this.hotelData.contactDetails[index].contactNumber);
            contact.get('rowSelected').setValue(_this.rowSelected);
        });
        this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('paymentMethodId').
            setValue(this.hotelData.hotelPaymentMethodRelation.paymentMethodId);
        this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('currencyId').
            setValue(this.hotelData.hotelPaymentMethodRelation.currencyId);
        this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('rateTypeId').
            setValue(this.hotelData.hotelPaymentMethodRelation.rateTypeId);
        this.taxDetails.controls.forEach(function (tax, index) {
            tax.get('taxTypeId').setValue(_this.hotelData.taxDetails[index].taxTypeId);
            tax.get('taxesType').setValue(_this.hotelData.taxDetails[index].taxesType);
            tax.get('taxApplicabilityId').setValue(_this.hotelData.taxDetails[index].taxApplicabilityId);
            tax.get('amount').setValue(_this.hotelData.taxDetails[index].amount);
            tax.get('isIncludedInRates').setValue(_this.hotelData.taxDetails[index].isIncludedInRates);
        });
    };
    /* ---------- Contact Details ---------------- */
    HotelDetailsComponent.prototype.buildContactDetailsForm = function () {
        var contactDetailsFormGroup;
        contactDetailsFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            contactId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            isPrimary: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            contactPerson: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            designationId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            emailAddress: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            contactNumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            rowSelected: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            objectState: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
        return contactDetailsFormGroup;
    };
    Object.defineProperty(HotelDetailsComponent.prototype, "contactDetails", {
        get: function () {
            return this.hotelDetailsContractGroup.get('contactDetails');
        },
        enumerable: true,
        configurable: true
    });
    HotelDetailsComponent.prototype.addContact = function () {
        this.contactDetails.push(this.buildContactDetailsForm());
        this.changeDetector.detectChanges();
    };
    /* ---------- Contact Details Ends ---------------- */
    /* ---------- Payment Method ---------------- */
    HotelDetailsComponent.prototype.buildPaymentMethod = function () {
        var paymentMethodFormGroup;
        paymentMethodFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            hotelPaymentMethodRelationId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            paymentMethodId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            currencyId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            rateTypeId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            objectState: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
        return paymentMethodFormGroup;
    };
    /* ---------- Payment Method Ends ---------------- */
    /* ---------- Tax Details ---------------- */
    HotelDetailsComponent.prototype.buildTaxDetailsForm = function () {
        var taxDetailsFormGroup;
        taxDetailsFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            taxTypeId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            taxesType: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            taxApplicabilityId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            amount: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            isIncludedInRates: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            objectState: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
        return taxDetailsFormGroup;
    };
    Object.defineProperty(HotelDetailsComponent.prototype, "taxDetails", {
        get: function () {
            return this.hotelDetailsContractGroup.get('taxDetails');
        },
        enumerable: true,
        configurable: true
    });
    HotelDetailsComponent.prototype.addTax = function () {
        this.taxDetails.push(this.buildTaxDetailsForm());
        this.changeDetector.detectChanges();
    };
    /* ---------- Tax Details Ends ---------------- */
    /* ---------- Filter Hotel ---------------- */
    HotelDetailsComponent.prototype.filter = function (val) {
        return this.hotelsNameList.filter(function (hotelsNameList) {
            return hotelsNameList.name.toLowerCase().includes(val.toLowerCase());
        });
    };
    HotelDetailsComponent.prototype.searchHotel = function (event, hotelId) {
        var _this = this;
        if (event.source.selected) {
            this.hotelDataService.getHotel(hotelId).subscribe(function (hotelData) {
                _this.hotelData = hotelData;
                _this.initialContactDetailsLength = _this.hotelData.contactDetails.length;
                _this.initialTaxDetailsLength = _this.hotelData.taxDetails.length;
                _this.setHotelFieldsValue();
            });
        }
    };
    /* ---------- Filter Hotel Ends ---------------- */
    /* ---------- Get Master Data -------------- */
    HotelDetailsComponent.prototype.getHotelBrands = function (chainId) {
        var _this = this;
        this.lookupService.getHotelBrands(chainId).subscribe(function (hotelBrandData) {
            _this.hotelBrandList = hotelBrandData;
        });
    };
    HotelDetailsComponent.prototype.getCountries = function () {
        var _this = this;
        this.lookupService.getCountries().subscribe(function (countriesData) {
            _this.countriesList = countriesData;
        });
    };
    HotelDetailsComponent.prototype.getCities = function (countryId) {
        var _this = this;
        this.lookupService.getCities(countryId).subscribe(function (citiesData) {
            _this.citiesList = citiesData;
        });
    };
    HotelDetailsComponent.prototype.getHotelTypes = function () {
        var _this = this;
        this.lookupService.getHotelTypes().subscribe(function (hotelTypeData) {
            _this.hotelTypeList = hotelTypeData;
        });
    };
    HotelDetailsComponent.prototype.getHotelChains = function () {
        var _this = this;
        this.lookupService.getHotelChains().subscribe(function (hotelChainData) {
            return _this.hotelChainList = hotelChainData;
        });
    };
    HotelDetailsComponent.prototype.getContactTitles = function () {
        var _this = this;
        this.lookupService.getDesignation().subscribe(function (contactTitleData) {
            return _this.contactPersonTitleList = contactTitleData;
        });
    };
    HotelDetailsComponent.prototype.getCurrency = function () {
        var _this = this;
        this.lookupService.getCurrency().subscribe(function (currencyData) {
            return _this.currencyList = currencyData;
        });
    };
    HotelDetailsComponent.prototype.getPaymentMethod = function () {
        var _this = this;
        this.lookupService.getPaymentMethod().subscribe(function (paymentData) {
            _this.paymentMethodList = paymentData;
        });
    };
    HotelDetailsComponent.prototype.getRateType = function () {
        var _this = this;
        this.lookupService.getRateType().subscribe(function (rateTypeData) {
            _this.rateTypeList = rateTypeData;
        });
    };
    HotelDetailsComponent.prototype.getChannelManager = function () {
        var _this = this;
        this.lookupService.getChannelManager().subscribe(function (channelManagerData) {
            return _this.channelManagerList = channelManagerData;
        });
    };
    HotelDetailsComponent.prototype.getTaxApplicability = function () {
        var _this = this;
        this.lookupService.getTaxApplicability().subscribe(function (taxesApplicabilityData) {
            return _this.taxesApplicabilityList = taxesApplicabilityData;
        });
    };
    HotelDetailsComponent.prototype.getStarRating = function () {
        var _this = this;
        this.lookupService.getStarRating().subscribe(function (starRatingData) {
            _this.starRatingList = starRatingData;
        });
    };
    /* ---------- Get Master Data Ends -------------- */
    HotelDetailsComponent.prototype.backToList = function () {
        this.router.navigate(['/contractmgmt/contracts']);
    };
    HotelDetailsComponent.prototype.fileChanged = function ($event) {
        this.isUploadComplete = false;
        this.isFileUploaded = false;
        this.file = $event.target.files[0];
        if (this.file) {
            this.isValidFileExtension(this.file);
        }
    };
    HotelDetailsComponent.prototype.readFile = function () {
        this.isFileUploaded = true;
        this.isUploadComplete = false;
        var myReader = new FileReader();
        myReader.readAsArrayBuffer(this.file);
        var thisObject = this;
        var formdata = {};
        var hotelId = this.hotelDetailsContractGroup.get('hotelId').value;
        myReader.onloadend = function (e) {
            var byteArray = new Uint8Array(myReader.result);
            var array = Array.from(byteArray);
            thisObject.fileArray = array;
            formdata = {
                bytes: array,
                hotelCode: thisObject.hotelData.hotelCode,
                extension: thisObject.extension
            };
            thisObject.contractHotelDetailsDataService.uploadPdf(formdata)
                .subscribe(function (response) {
                thisObject.pdfLink = response.result;
                if (response.result && !response.isError) {
                    thisObject.isUploadComplete = true;
                }
                else {
                    thisObject.error = response.message;
                }
            });
        };
    };
    HotelDetailsComponent.prototype.isValidFileExtension = function (file) {
        var extensions = (this.fileExt.split(','))
            .map(function (x) { return x.toLocaleUpperCase().trim(); });
        var ext = file.name.toUpperCase().split('.').pop() || file.name;
        var exists = extensions.includes(ext);
        if (!exists) {
            this.error = 'Please choose PDF, DOC or DOCX file only.';
        }
        else {
            this.error = null;
            if (ext === __WEBPACK_IMPORTED_MODULE_11__common_enums__["b" /* DocumentType */][0]) {
                this.extension = __WEBPACK_IMPORTED_MODULE_11__common_enums__["b" /* DocumentType */].PDF;
            }
            else if (ext === __WEBPACK_IMPORTED_MODULE_11__common_enums__["b" /* DocumentType */][1]) {
                this.extension = __WEBPACK_IMPORTED_MODULE_11__common_enums__["b" /* DocumentType */].DOC;
            }
            else if (ext === __WEBPACK_IMPORTED_MODULE_11__common_enums__["b" /* DocumentType */][2]) {
                this.extension = __WEBPACK_IMPORTED_MODULE_11__common_enums__["b" /* DocumentType */].DOCX;
            }
        }
        this.isValidFileSize(file);
    };
    HotelDetailsComponent.prototype.isValidFileSize = function (file) {
        var fileSizeinMB = file.size / (1024 * 1000);
        var size = Math.round(fileSizeinMB * 100) / 100;
        if (size > this.maxSize) {
            this.errorSize = 'File exceeds file size limit of ' + this.maxSize + 'MB';
        }
        else if (size === 0) {
            this.errorSize = 'File is empty';
        }
        else {
            this.errorSize = null;
        }
    };
    HotelDetailsComponent.prototype.isChannelManager = function (selected) {
        this.flagHotelDetailsAsEdited();
        if (!selected) {
            this.hotelDetailsContractGroup.get('channelManagerId').setValue(null);
            this.hotelDetailsContractGroup.get('channelManagerId').disable();
        }
        else {
            this.hotelDetailsContractGroup.get('channelManagerId').enable();
        }
    };
    HotelDetailsComponent.prototype.saveContract = function () {
        var _this = this;
        this.updateHotelDataSaveModel();
        if (this.contractType === this.nonMg) {
            this.contractHotelDetailsViewModel = {
                id: this.contractId,
                name: this.hotelDetailsContractGroup.get('contractNameEntered').value,
                startDate: this.startDate.toISOString(),
                endDate: this.endDate.toISOString(),
                objectState: this.contractBasicDetailsObjectState,
                hotelId: this.hotelDetailsContractGroup.get('hotelId').value,
                contractType: this.contractType,
                pdfLink: this.pdfLink,
                hotelDetails: this.hotelDataSave
            };
            console.log(JSON.stringify(this.contractHotelDetailsViewModel));
            this.contractHotelDetailsDataService.addNonMgContract(this.contractHotelDetailsViewModel)
                .subscribe(function (data) {
                _this.router.navigate(['/contractmgmt/contracts']);
                _this.snackBar.open('NonMG Contract Saved Successfully', '', { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                window.scrollTo(0, 0);
            });
        }
        else if (this.contractType === this.mgDynamic) {
            this.contractHotelDetailsViewModel = {
                id: this.contractId,
                name: this.hotelDetailsContractGroup.get('contractNameEntered').value,
                startDate: this.startDate.toISOString(),
                endDate: this.endDate.toISOString(),
                objectState: this.contractBasicDetailsObjectState,
                hotelId: this.hotelDetailsContractGroup.get('hotelId').value,
                contractType: this.contractType,
                pdfLink: this.pdfLink,
                hotelDetails: this.hotelDataSave
            };
            this.contractHotelDetailsDataService.addDynamicContract(this.contractHotelDetailsViewModel)
                .subscribe(function (data) {
                _this.router.navigate(['/contractmgmt/contracts']);
                _this.snackBar.open('Dynamic Contract Saved Successfully', '', { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                window.scrollTo(0, 0);
            });
        }
        else if (this.contractType === this.mgStatic) {
            this.staticContractHotelDetailsVieModel = {
                templateId: this.templateId,
                contractId: this.contractId,
                name: this.hotelDetailsContractGroup.get('contractNameEntered').value,
                startDate: this.startDate.toISOString(),
                endDate: this.endDate.toISOString(),
                objectState: this.contractBasicDetailsObjectState,
                hotelDetailsViewModel: this.hotelDataSave,
                contractType: this.contractType,
                isDeleted: false
            };
            this.contractHotelDetailsDataService.addStaticContract(this.staticContractHotelDetailsVieModel)
                .subscribe(function (data) {
                _this.contractId = data.result.id;
                _this.router.navigate(['/contractmgmt/contracts']);
                _this.snackBar.open('Static Contract Saved Successfully', '', { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                window.scrollTo(0, 0);
            });
        }
    };
    HotelDetailsComponent.prototype.saveAndContinue = function () {
        var _this = this;
        this.updateHotelDataSaveModel();
        this.staticContractHotelDetailsVieModel = {
            templateId: this.templateId,
            contractId: this.contractId,
            name: this.hotelDetailsContractGroup.get('contractNameEntered').value,
            startDate: this.startDate.toISOString(),
            endDate: this.endDate.toISOString(),
            objectState: this.contractBasicDetailsObjectState,
            hotelDetailsViewModel: this.hotelDataSave,
            contractType: this.contractType,
            isDeleted: false
        };
        this.contractHotelDetailsDataService.addStaticContract(this.staticContractHotelDetailsVieModel)
            .subscribe(function (data) {
            _this.contractId = data.result.id;
            _this.router.navigate(['/contractmgmt/redirect', _this.contractId]);
            _this.snackBar.open('Static Contract Saved Successfully', '', { duration: 4000, verticalPosition: 'top', panelClass: 'showSnackBar' });
            window.scrollTo(0, 0);
        });
    };
    HotelDetailsComponent.prototype.updateHotelDataSaveModel = function () {
        var _this = this;
        this.startDate = new Date(this.hotelDetailsContractGroup.get('startDate').value.trim());
        this.endDate = new Date(this.hotelDetailsContractGroup.get('endDate').value.trim());
        this.hotelDataSave = Object.assign({}, this.hotelData, this.hotelDetailsContractGroup.value);
        this.hotelDataSave.isActive = true;
        this.hotelDataSave.latitude = +(this.latLong.split('/')[0]);
        this.hotelDataSave.longitude = +(this.latLong.split('/')[1]);
        this.hotelDataSave.contactDetails.forEach(function (contact, index) {
            if (index === _this.rowSelected) {
                contact.isPrimary = true;
            }
            else {
                contact.isPrimary = false;
            }
            if (contact.contactId === null) {
                contact.contactId = 0;
            }
        });
        this.hotelDataSave.hotelPaymentMethodRelation.hotelPaymentMethodRelationId =
            this.hotelData.hotelPaymentMethodRelation.hotelPaymentMethodRelationId;
        if (this.hotelDataSave.isChannelManagerConnectivity === false) {
            this.hotelDataSave.channelManagerId = null;
        }
        if (this.operation === this.create) {
            this.contractBasicDetailsObjectState = __WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added;
        }
        else if (this.operation === this.edit) {
            this.contractBasicDetailsObjectState = __WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Unchanged;
            // if (this.savedcontractBasicDetails[0] !== this.hotelDetailsContractGroup.get('contractNameEntered').value) {
            //   this.contractBasicDetailsObjectState = ObjectState.Modified;
            // } else if (this.savedcontractBasicDetails[1] !== this.hotelDetailsContractGroup.get('startDate').value) {
            //   this.contractBasicDetailsObjectState = ObjectState.Modified;
            // } else if (this.savedcontractBasicDetails[2] !== this.hotelDetailsContractGroup.get('endDate').value) {
            //   this.contractBasicDetailsObjectState = ObjectState.Modified;
            // }
        }
    };
    HotelDetailsComponent.prototype.flagContactDetailsAsEdited = function (index) {
        if (this.contactDetails.value[index].objectState !== __WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added && this.contactDetails.value[index].objectState !== null) {
            this.contactDetails.controls[index].get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Modified);
        }
        if (this.initialContactDetailsLength !== this.contactDetails.length && index >= this.initialContactDetailsLength) {
            this.contactDetails.controls[index].get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added);
        }
    };
    HotelDetailsComponent.prototype.flagHotelDetailsAsEdited = function () {
        if (this.hotelDetailsContractGroup.value.objectState !== __WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added) {
            this.hotelDetailsContractGroup.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Modified);
        }
    };
    HotelDetailsComponent.prototype.flagPaymentDetailsAsEdited = function () {
        if (this.hotelDetailsContractGroup.value.hotelPaymentMethodRelation.objectState !== __WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added) {
            this.hotelDetailsContractGroup.controls.hotelPaymentMethodRelation.get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Modified);
        }
    };
    HotelDetailsComponent.prototype.flagTaxDetailsAsEdited = function (index) {
        if (this.taxDetails.value[index].objectState !== __WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added && this.taxDetails.value[index].objectState !== null) {
            this.taxDetails.controls[index].get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Modified);
        }
        if (this.initialTaxDetailsLength !== this.taxDetails.length && index >= this.initialTaxDetailsLength) {
            this.taxDetails.controls[index].get('objectState').setValue(__WEBPACK_IMPORTED_MODULE_11__common_enums__["d" /* ObjectState */].Added);
        }
    };
    HotelDetailsComponent.prototype.viewPdf = function () {
        var byteArray = new Uint8Array(this.fileArray);
        var blob = new Blob([byteArray], {
            type: this.file.type
        });
        var fileURL = URL.createObjectURL(blob);
        window.open(fileURL);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HotelDetailsComponent.prototype, "fileExt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], HotelDetailsComponent.prototype, "maxSize", void 0);
    HotelDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hotel-details',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/hotel-details/hotel-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/hotel-info/hotel-details/hotel-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_contracts_contract_name_data_service__["a" /* ContractNameDataService */],
            __WEBPACK_IMPORTED_MODULE_10__common_extranet_shared_services_contracts_contract_data_service__["a" /* ContractDataService */],
            __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_contracts_contract_url_notification_service__["a" /* ContractUrlNotificationService */],
            __WEBPACK_IMPORTED_MODULE_5__common_shared_services_lookup_service__["a" /* LookupService */],
            __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_contracts_contract_hotel_details_data_service__["a" /* ContractHotelDetailsDataService */],
            __WEBPACK_IMPORTED_MODULE_12__common_extranet_shared_services_templates_templates_data_service__["a" /* TemplatesDataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_8__common_extranet_shared_services_hotel_data_service__["a" /* HotelDataService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_13__angular_material__["F" /* MatSnackBar */]])
    ], HotelDetailsComponent);
    return HotelDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/amenities/amenities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/amenities/amenities.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  amenities works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/amenities/amenities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmenitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmenitiesComponent = (function () {
    function AmenitiesComponent() {
    }
    AmenitiesComponent.prototype.ngOnInit = function () {
    };
    AmenitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-amenities',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/amenities/amenities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/amenities/amenities.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AmenitiesComponent);
    return AmenitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/meal-plan/meal-plan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/meal-plan/meal-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  meal-plan works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/meal-plan/meal-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealPlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MealPlanComponent = (function () {
    function MealPlanComponent() {
    }
    MealPlanComponent.prototype.ngOnInit = function () {
    };
    MealPlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-meal-plan',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/meal-plan/meal-plan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/meal-plan/meal-plan.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MealPlanComponent);
    return MealPlanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policies/cancellation-policies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policies/cancellation-policies.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cancellation-policies works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policies/cancellation-policies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancellationPoliciesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CancellationPoliciesComponent = (function () {
    function CancellationPoliciesComponent() {
    }
    CancellationPoliciesComponent.prototype.ngOnInit = function () {
    };
    CancellationPoliciesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cancellation-policies',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policies/cancellation-policies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policies/cancellation-policies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CancellationPoliciesComponent);
    return CancellationPoliciesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policy-list/cancellation-policy-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policy-list/cancellation-policy-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cancellation-policy-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policy-list/cancellation-policy-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancellationPolicyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CancellationPolicyListComponent = (function () {
    function CancellationPolicyListComponent() {
    }
    CancellationPolicyListComponent.prototype.ngOnInit = function () {
    };
    CancellationPolicyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cancellation-policy-list',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policy-list/cancellation-policy-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/cancellation-policy-list/cancellation-policy-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CancellationPolicyListComponent);
    return CancellationPolicyListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy-list/child-and-extra-bed-policy-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy-list/child-and-extra-bed-policy-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  child-and-extra-bed-policy-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy-list/child-and-extra-bed-policy-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildAndExtraBedPolicyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildAndExtraBedPolicyListComponent = (function () {
    function ChildAndExtraBedPolicyListComponent() {
    }
    ChildAndExtraBedPolicyListComponent.prototype.ngOnInit = function () {
    };
    ChildAndExtraBedPolicyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-child-and-extra-bed-policy-list',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy-list/child-and-extra-bed-policy-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy-list/child-and-extra-bed-policy-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChildAndExtraBedPolicyListComponent);
    return ChildAndExtraBedPolicyListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy/child-and-extra-bed-policy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy/child-and-extra-bed-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  child-and-extra-bed-policy works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy/child-and-extra-bed-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildAndExtraBedPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildAndExtraBedPolicyComponent = (function () {
    function ChildAndExtraBedPolicyComponent() {
    }
    ChildAndExtraBedPolicyComponent.prototype.ngOnInit = function () {
    };
    ChildAndExtraBedPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-child-and-extra-bed-policy',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy/child-and-extra-bed-policy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/child-and-extra-bed-policy/child-and-extra-bed-policy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChildAndExtraBedPolicyComponent);
    return ChildAndExtraBedPolicyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/policy-list/policy-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/policy-list/policy-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  policy-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/policy-list/policy-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PolicyListComponent = (function () {
    function PolicyListComponent() {
    }
    PolicyListComponent.prototype.ngOnInit = function () {
    };
    PolicyListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-policy-list',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/policy-list/policy-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/policies/policy-list/policy-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PolicyListComponent);
    return PolicyListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-info/rate-category-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-info/rate-category-info.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  rate-category-info works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-info/rate-category-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCategoryInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RateCategoryInfoComponent = (function () {
    function RateCategoryInfoComponent() {
    }
    RateCategoryInfoComponent.prototype.ngOnInit = function () {
    };
    RateCategoryInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rate-category-info',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-info/rate-category-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-info/rate-category-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RateCategoryInfoComponent);
    return RateCategoryInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-list/rate-category-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-list/rate-category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  rate-category-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-list/rate-category-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RateCategoryListComponent = (function () {
    function RateCategoryListComponent() {
    }
    RateCategoryListComponent.prototype.ngOnInit = function () {
    };
    RateCategoryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rate-category-list',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-list/rate-category-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/rate-category/rate-category-list/rate-category-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RateCategoryListComponent);
    return RateCategoryListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-info/room-type-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-info/room-type-info.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  room-type-info works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-info/room-type-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomTypeInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_extranet_shared_services_contracts_contract_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-url-notification.service.ts");
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



var RoomTypeInfoComponent = (function () {
    function RoomTypeInfoComponent(contractUrlNotificationService, activatedRoute) {
        this.contractUrlNotificationService = contractUrlNotificationService;
        this.activatedRoute = activatedRoute;
        contractUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    RoomTypeInfoComponent.prototype.ngOnInit = function () {
        // this.contractUrlNotificationService.changeURLRoute(this.activatedRoute.snapshot.url[0].path);
    };
    RoomTypeInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-room-type-info',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-info/room-type-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-info/room-type-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_extranet_shared_services_contracts_contract_url_notification_service__["a" /* ContractUrlNotificationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], RoomTypeInfoComponent);
    return RoomTypeInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-list/room-type-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-list/room-type-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  room-type-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-list/room-type-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomTypeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_extranet_shared_services_contracts_contract_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-url-notification.service.ts");
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



var RoomTypeListComponent = (function () {
    function RoomTypeListComponent(contractUrlNotificationService, activatedRoute) {
        this.contractUrlNotificationService = contractUrlNotificationService;
        this.activatedRoute = activatedRoute;
        contractUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    RoomTypeListComponent.prototype.ngOnInit = function () {
        this.contractUrlNotificationService.changeURLRoute(this.activatedRoute.snapshot.url[0].path);
    };
    RoomTypeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-room-type-list',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-list/room-type-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/rate/room-type/room-type-list/room-type-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_extranet_shared_services_contracts_contract_url_notification_service__["a" /* ContractUrlNotificationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], RoomTypeListComponent);
    return RoomTypeListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/redirect/redirect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/redirect/redirect.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  redirect works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/contracts/redirect/redirect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_extranet_shared_services_contracts_contract_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/contracts/contract-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var read = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].operation.read;
var edit = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].operation.edit;
var create = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].operation.create;
var RedirectComponent = (function () {
    function RedirectComponent(contractDataService, router, activatedRoute) {
        this.contractDataService = contractDataService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    RedirectComponent.prototype.ngOnInit = function () {
        var contractId = +this.activatedRoute.snapshot.params['contractid'];
        console.log('Redirect contractId-' + contractId);
        if (this.contractDataService.showFacility) {
            this.router.navigate(['/contractmgmt/contract', contractId, edit, 'facilitiesservices']);
        }
        else {
            this.router.navigate(['/contractmgmt/contract', contractId, edit, 'roomtypelist']);
        }
    };
    RedirectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-redirect',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/redirect/redirect.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/contracts/redirect/redirect.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_extranet_shared_services_contracts_contract_data_service__["a" /* ContractDataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], RedirectComponent);
    return RedirectComponent;
}());



/***/ }),

/***/ "../../../../rxjs/_esm5/AsyncSubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncSubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/** PURE_IMPORTS_START ._Subject,._Subscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * @class AsyncSubject<T>
 */
var AsyncSubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(AsyncSubject, _super);
    function AsyncSubject() {
        _super.apply(this, arguments);
        this.value = null;
        this.hasNext = false;
        this.hasCompleted = false;
    }
    AsyncSubject.prototype._subscribe = function (subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */].EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */].EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject.prototype.next = function (value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject.prototype.error = function (error) {
        if (!this.hasCompleted) {
            _super.prototype.error.call(this, error);
        }
    };
    AsyncSubject.prototype.complete = function () {
        this.hasCompleted = true;
        if (this.hasNext) {
            _super.prototype.next.call(this, this.value);
        }
        _super.prototype.complete.call(this);
    };
    return AsyncSubject;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["Subject"]));
//# sourceMappingURL=AsyncSubject.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/ReplaySubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplaySubject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_queue__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/queue.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__operators_observeOn__ = __webpack_require__("../../../../rxjs/_esm5/operators/observeOn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_ObjectUnsubscribedError__ = __webpack_require__("../../../../rxjs/_esm5/util/ObjectUnsubscribedError.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SubjectSubscription__ = __webpack_require__("../../../../rxjs/_esm5/SubjectSubscription.js");
/** PURE_IMPORTS_START ._Subject,._scheduler_queue,._Subscription,._operators_observeOn,._util_ObjectUnsubscribedError,._SubjectSubscription PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/**
 * @class ReplaySubject<T>
 */
var ReplaySubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ReplaySubject, _super);
    function ReplaySubject(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) {
            bufferSize = Number.POSITIVE_INFINITY;
        }
        if (windowTime === void 0) {
            windowTime = Number.POSITIVE_INFINITY;
        }
        _super.call(this);
        this.scheduler = scheduler;
        this._events = [];
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
    }
    ReplaySubject.prototype.next = function (value) {
        var now = this._getNow();
        this._events.push(new ReplayEvent(now, value));
        this._trimBufferThenGetEvents();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject.prototype._subscribe = function (subscriber) {
        var _events = this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var subscription;
        if (this.closed) {
            throw new __WEBPACK_IMPORTED_MODULE_4__util_ObjectUnsubscribedError__["a" /* ObjectUnsubscribedError */]();
        }
        else if (this.hasError) {
            subscription = __WEBPACK_IMPORTED_MODULE_2__Subscription__["a" /* Subscription */].EMPTY;
        }
        else if (this.isStopped) {
            subscription = __WEBPACK_IMPORTED_MODULE_2__Subscription__["a" /* Subscription */].EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new __WEBPACK_IMPORTED_MODULE_5__SubjectSubscription__["a" /* SubjectSubscription */](this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new __WEBPACK_IMPORTED_MODULE_3__operators_observeOn__["a" /* ObserveOnSubscriber */](subscriber, scheduler));
        }
        var len = _events.length;
        for (var i = 0; i < len && !subscriber.closed; i++) {
            subscriber.next(_events[i].value);
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    };
    ReplaySubject.prototype._getNow = function () {
        return (this.scheduler || __WEBPACK_IMPORTED_MODULE_1__scheduler_queue__["a" /* queue */]).now();
    };
    ReplaySubject.prototype._trimBufferThenGetEvents = function () {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        // Trim events that fall out of the time window.
        // Start at the front of the list. Break early once
        // we encounter an event that falls within the window.
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    };
    return ReplaySubject;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["Subject"]));
var ReplayEvent = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ReplayEvent(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent;
}());
//# sourceMappingURL=ReplaySubject.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/observable/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = race;
/* unused harmony export RaceOperator */
/* unused harmony export RaceSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isArray__ = __webpack_require__("../../../../rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_ArrayObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ArrayObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._util_isArray,.._observable_ArrayObservable,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    // if the only argument is an array, it was most likely called with
    // `race([obs1, obs2, ...])`
    if (observables.length === 1) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_isArray__["a" /* isArray */])(observables[0])) {
            observables = observables[0];
        }
        else {
            return observables[0];
        }
    }
    return new __WEBPACK_IMPORTED_MODULE_1__observable_ArrayObservable__["a" /* ArrayObservable */](observables).lift(new RaceOperator());
}
var RaceOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RaceOperator() {
    }
    RaceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RaceSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RaceSubscriber, _super);
    function RaceSubscriber(destination) {
        _super.call(this, destination);
        this.hasFirst = false;
        this.observables = [];
        this.subscriptions = [];
    }
    RaceSubscriber.prototype._next = function (observable) {
        this.observables.push(observable);
    };
    RaceSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            for (var i = 0; i < len && !this.hasFirst; i++) {
                var observable = observables[i];
                var subscription = Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(this, observable, observable, i);
                if (this.subscriptions) {
                    this.subscriptions.push(subscription);
                }
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for (var i = 0; i < this.subscriptions.length; i++) {
                if (i !== outerIndex) {
                    var subscription = this.subscriptions[i];
                    subscription.unsubscribe();
                    this.remove(subscription);
                }
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=race.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/buffer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export buffer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return function bufferOperatorFunction(source) {
        return source.lift(new BufferOperator(closingNotifier));
    };
}
var BufferOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
        _super.call(this, destination);
        this.buffer = [];
        this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, closingNotifier));
    }
    BufferSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };
    return BufferSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=buffer.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/bufferCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bufferCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) {
        startBufferEvery = null;
    }
    return function bufferCountOperatorFunction(source) {
        return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    };
}
var BufferCountOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) {
            this.subscriberClass = BufferCountSubscriber;
        }
        else {
            this.subscriberClass = BufferSkipCountSubscriber;
        }
    }
    BufferCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferCountSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.buffer = [];
    }
    BufferCountSubscriber.prototype._next = function (value) {
        var buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
        }
    };
    BufferCountSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer.length > 0) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSkipCountSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferSkipCountSubscriber, _super);
    function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [];
        this.count = 0;
    }
    BufferSkipCountSubscriber.prototype._next = function (value) {
        var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
        this.count++;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (var i = buffers.length; i--;) {
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                buffers.splice(i, 1);
                this.destination.next(buffer);
            }
        }
    };
    BufferSkipCountSubscriber.prototype._complete = function () {
        var _a = this, buffers = _a.buffers, destination = _a.destination;
        while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        _super.prototype._complete.call(this);
    };
    return BufferSkipCountSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=bufferCount.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/bufferTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bufferTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_isScheduler__ = __webpack_require__("../../../../rxjs/_esm5/util/isScheduler.js");
/** PURE_IMPORTS_START .._scheduler_async,.._Subscriber,.._util_isScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    if (Object(__WEBPACK_IMPORTED_MODULE_2__util_isScheduler__["a" /* isScheduler */])(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return function bufferTimeOperatorFunction(source) {
        return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
    };
}
var BufferTimeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
}());
var Context = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function Context() {
        this.buffer = [];
    }
    return Context;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferTimeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        _super.call(this, destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
        this.contexts = [];
        var context = this.openContext();
        this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (this.timespanOnly) {
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            var closeState = { subscriber: this, context: context };
            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
    }
    BufferTimeSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
            var context = contexts[i];
            var buffer = context.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    };
    BufferTimeSubscriber.prototype._error = function (err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function () {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while (contexts.length > 0) {
            var context = contexts.shift();
            destination.next(context.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function () {
        this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function (context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber.prototype.openContext = function () {
        var context = new Context();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function (context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    };
    return BufferTimeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_1__Subscriber__["a" /* Subscriber */]));
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}
//# sourceMappingURL=bufferTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/bufferToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bufferToggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._Subscription,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return function bufferToggleOperatorFunction(source) {
        return source.lift(new BufferToggleOperator(openings, closingSelector));
    };
}
var BufferToggleOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferToggleSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, openings));
    }
    BufferToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
            contexts[i].buffer.push(value);
        }
    };
    BufferToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            this.destination.next(context.buffer);
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
        this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber.prototype.openBuffer = function (value) {
        try {
            var closingSelector = this.closingSelector;
            var closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) {
                this.trySubscribe(closingNotifier);
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
        var contexts = this.contexts;
        if (contexts && context) {
            var buffer = context.buffer, subscription = context.subscription;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    };
    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new __WEBPACK_IMPORTED_MODULE_0__Subscription__["a" /* Subscription */]();
        var context = { buffer: buffer, subscription: subscription };
        contexts.push(context);
        var innerSubscription = Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
            this.closeBuffer(context);
        }
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    };
    return BufferToggleSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=bufferToggle.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/bufferWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bufferWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subscription,.._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return function (source) {
        return source.lift(new BufferWhenOperator(closingSelector));
    };
}
var BufferWhenOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    };
    return BufferWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferWhenSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.closingSelector = closingSelector;
        this.subscribing = false;
        this.openBuffer();
    }
    BufferWhenSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function () {
        this.buffer = null;
        this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function () {
        if (this.subscribing) {
            this.complete();
        }
        else {
            this.openBuffer();
        }
    };
    BufferWhenSubscriber.prototype.openBuffer = function () {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.closingSelector)();
        if (closingNotifier === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            this.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
        }
        else {
            closingSubscription = new __WEBPACK_IMPORTED_MODULE_0__Subscription__["a" /* Subscription */]();
            this.closingSubscription = closingSubscription;
            this.add(closingSubscription);
            this.subscribing = true;
            closingSubscription.add(Object(__WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__["a" /* subscribeToResult */])(this, closingNotifier));
            this.subscribing = false;
        }
    };
    return BufferWhenSubscriber;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=bufferWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/combineAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export combineAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/operators/combineLatest.js");
/** PURE_IMPORTS_START .._operators_combineLatest PURE_IMPORTS_END */

function combineAll(project) {
    return function (source) { return source.lift(new __WEBPACK_IMPORTED_MODULE_0__operators_combineLatest__["a" /* CombineLatestOperator */](project)); };
}
//# sourceMappingURL=combineAll.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export concat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_concat__ = __webpack_require__("../../../../rxjs/_esm5/observable/concat.js");
/** PURE_IMPORTS_START .._observable_concat PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function (source) { return source.lift.call(__WEBPACK_IMPORTED_MODULE_0__observable_concat__["a" /* concat */].apply(void 0, [source].concat(observables))); };
}
//# sourceMappingURL=concat.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/concatMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export concatMapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__concatMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/concatMap.js");
/** PURE_IMPORTS_START ._concatMap PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__concatMap__["a" /* concatMap */])(function () { return innerObservable; }, resultSelector);
}
//# sourceMappingURL=concatMapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/count.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export count */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return function (source) { return source.lift(new CountOperator(predicate, source)); };
}
var CountOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function CountOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    CountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CountSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(CountSubscriber, _super);
    function CountSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.count = 0;
        this.index = 0;
    }
    CountSubscriber.prototype._next = function (value) {
        if (this.predicate) {
            this._tryPredicate(value);
        }
        else {
            this.count++;
        }
    };
    CountSubscriber.prototype._tryPredicate = function (value) {
        var result;
        try {
            result = this.predicate(value, this.index++, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.count++;
        }
    };
    CountSubscriber.prototype._complete = function () {
        this.destination.next(this.count);
        this.destination.complete();
    };
    return CountSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=count.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/debounce.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export debounce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return function (source) { return source.lift(new DebounceOperator(durationSelector)); };
}
var DebounceOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DebounceOperator(durationSelector) {
        this.durationSelector = durationSelector;
    }
    DebounceOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DebounceSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DebounceSubscriber, _super);
    function DebounceSubscriber(destination, durationSelector) {
        _super.call(this, destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
        this.durationSubscription = null;
    }
    DebounceSubscriber.prototype._next = function (value) {
        try {
            var result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DebounceSubscriber.prototype._complete = function () {
        this.emitValue();
        this.destination.complete();
    };
    DebounceSubscriber.prototype._tryNext = function (value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, duration);
        if (!subscription.closed) {
            this.add(this.durationSubscription = subscription);
        }
    };
    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    DebounceSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    DebounceSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            var value = this.value;
            var subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = null;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = null;
            this.hasValue = false;
            _super.prototype._next.call(this, value);
        }
    };
    return DebounceSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=debounce.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/delayWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export delayWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subscriber,.._Observable,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function (source) {
            return new SubscriptionDelayObservable(source, subscriptionDelay)
                .lift(new DelayWhenOperator(delayDurationSelector));
        };
    }
    return function (source) { return source.lift(new DelayWhenOperator(delayDurationSelector)); };
}
var DelayWhenOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DelayWhenOperator(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DelayWhenSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DelayWhenSubscriber, _super);
    function DelayWhenSubscriber(destination, delayDurationSelector) {
        _super.call(this, destination);
        this.delayDurationSelector = delayDurationSelector;
        this.completed = false;
        this.delayNotifierSubscriptions = [];
        this.values = [];
    }
    DelayWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DelayWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) {
            this.destination.next(value);
        }
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype._next = function (value) {
        try {
            var delayNotifier = this.delayDurationSelector(value);
            if (delayNotifier) {
                this.tryDelay(delayNotifier, value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    DelayWhenSubscriber.prototype._complete = function () {
        this.completed = true;
        this.tryComplete();
    };
    DelayWhenSubscriber.prototype.removeSubscription = function (subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        var value = null;
        if (subscriptionIdx !== -1) {
            value = this.values[subscriptionIdx];
            this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
            this.values.splice(subscriptionIdx, 1);
        }
        return value;
    };
    DelayWhenSubscriber.prototype.tryDelay = function (delayNotifier, value) {
        var notifierSubscription = Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            this.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
        this.values.push(value);
    };
    DelayWhenSubscriber.prototype.tryComplete = function () {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) {
            this.destination.complete();
        }
    };
    return DelayWhenSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelayObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SubscriptionDelayObservable, _super);
    function SubscriptionDelayObservable(source, subscriptionDelay) {
        _super.call(this);
        this.source = source;
        this.subscriptionDelay = subscriptionDelay;
    }
    SubscriptionDelayObservable.prototype._subscribe = function (subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable;
}(__WEBPACK_IMPORTED_MODULE_1__Observable__["a" /* Observable */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SubscriptionDelaySubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SubscriptionDelaySubscriber, _super);
    function SubscriptionDelaySubscriber(parent, source) {
        _super.call(this);
        this.parent = parent;
        this.source = source;
        this.sourceSubscribed = false;
    }
    SubscriptionDelaySubscriber.prototype._next = function (unused) {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype._error = function (err) {
        this.unsubscribe();
        this.parent.error(err);
    };
    SubscriptionDelaySubscriber.prototype._complete = function () {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber.prototype.subscribeToSource = function () {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    };
    return SubscriptionDelaySubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=delayWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/dematerialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export dematerialize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return function dematerializeOperatorFunction(source) {
        return source.lift(new DeMaterializeOperator());
    };
}
var DeMaterializeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DeMaterializeOperator() {
    }
    DeMaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DeMaterializeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DeMaterializeSubscriber, _super);
    function DeMaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    DeMaterializeSubscriber.prototype._next = function (value) {
        value.observe(this.destination);
    };
    return DeMaterializeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=dematerialize.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/distinct.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export distinct */
/* unused harmony export DistinctSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_Set__ = __webpack_require__("../../../../rxjs/_esm5/util/Set.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult,.._util_Set PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return function (source) { return source.lift(new DistinctOperator(keySelector, flushes)); };
}
var DistinctOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DistinctOperator(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
    }
    DistinctOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
    };
    return DistinctOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DistinctSubscriber, _super);
    function DistinctSubscriber(destination, keySelector, flushes) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.values = new __WEBPACK_IMPORTED_MODULE_2__util_Set__["a" /* Set */]();
        if (flushes) {
            this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, flushes));
        }
    }
    DistinctSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values.clear();
    };
    DistinctSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    DistinctSubscriber.prototype._next = function (value) {
        if (this.keySelector) {
            this._useKeySelector(value);
        }
        else {
            this._finalizeNext(value, value);
        }
    };
    DistinctSubscriber.prototype._useKeySelector = function (value) {
        var key;
        var destination = this.destination;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this._finalizeNext(key, value);
    };
    DistinctSubscriber.prototype._finalizeNext = function (key, value) {
        var values = this.values;
        if (!values.has(key)) {
            values.add(key);
            this.destination.next(value);
        }
    };
    return DistinctSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=distinct.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/distinctUntilChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = distinctUntilChanged;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_tryCatch,.._util_errorObject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return function (source) { return source.lift(new DistinctUntilChangedOperator(compare, keySelector)); };
}
var DistinctUntilChangedOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function DistinctUntilChangedOperator(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var DistinctUntilChangedSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(DistinctUntilChangedSubscriber, _super);
    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber.prototype._next = function (value) {
        var keySelector = this.keySelector;
        var key = value;
        if (keySelector) {
            key = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.keySelector)(value);
            if (key === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                return this.destination.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        var result = false;
        if (this.hasKey) {
            result = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.compare)(this.key, key);
            if (result === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                return this.destination.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
            }
        }
        else {
            this.hasKey = true;
        }
        if (Boolean(result) === false) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=distinctUntilChanged.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/distinctUntilKeyChanged.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export distinctUntilKeyChanged */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/operators/distinctUntilChanged.js");
/** PURE_IMPORTS_START ._distinctUntilChanged PURE_IMPORTS_END */

/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__distinctUntilChanged__["a" /* distinctUntilChanged */])(function (x, y) { return compare ? compare(x[key], y[key]) : x[key] === y[key]; });
}
//# sourceMappingURL=distinctUntilKeyChanged.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/elementAt.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export elementAt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__ = __webpack_require__("../../../../rxjs/_esm5/util/ArgumentOutOfRangeError.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_ArgumentOutOfRangeError PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return function (source) { return source.lift(new ElementAtOperator(index, defaultValue)); };
}
var ElementAtOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ElementAtOperator(index, defaultValue) {
        this.index = index;
        this.defaultValue = defaultValue;
        if (index < 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__["a" /* ArgumentOutOfRangeError */];
        }
    }
    ElementAtOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ElementAtSubscriber(subscriber, this.index, this.defaultValue));
    };
    return ElementAtOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ElementAtSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ElementAtSubscriber, _super);
    function ElementAtSubscriber(destination, index, defaultValue) {
        _super.call(this, destination);
        this.index = index;
        this.defaultValue = defaultValue;
    }
    ElementAtSubscriber.prototype._next = function (x) {
        if (this.index-- === 0) {
            this.destination.next(x);
            this.destination.complete();
        }
    };
    ElementAtSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index >= 0) {
            if (typeof this.defaultValue !== 'undefined') {
                destination.next(this.defaultValue);
            }
            else {
                destination.error(new __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__["a" /* ArgumentOutOfRangeError */]);
            }
        }
        destination.complete();
    };
    return ElementAtSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=elementAt.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/exhaust.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export exhaust */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return function (source) { return source.lift(new SwitchFirstOperator()); };
}
var SwitchFirstOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SwitchFirstOperator() {
    }
    SwitchFirstOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber(subscriber));
    };
    return SwitchFirstOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SwitchFirstSubscriber, _super);
    function SwitchFirstSubscriber(destination) {
        _super.call(this, destination);
        this.hasCompleted = false;
        this.hasSubscription = false;
    }
    SwitchFirstSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, value));
        }
    };
    SwitchFirstSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=exhaust.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/exhaustMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export exhaustMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000).take(5));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return function (source) { return source.lift(new SwitchFirstMapOperator(project, resultSelector)); };
}
var SwitchFirstMapOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SwitchFirstMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchFirstMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchFirstMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchFirstMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchFirstMapSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SwitchFirstMapSubscriber, _super);
    function SwitchFirstMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.hasSubscription = false;
        this.hasCompleted = false;
        this.index = 0;
    }
    SwitchFirstMapSubscriber.prototype._next = function (value) {
        if (!this.hasSubscription) {
            this.tryNext(value);
        }
    };
    SwitchFirstMapSubscriber.prototype.tryNext = function (value) {
        var index = this.index++;
        var destination = this.destination;
        try {
            var result = this.project(value, index);
            this.hasSubscription = true;
            this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, result, value, index));
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (!this.hasSubscription) {
            this.destination.complete();
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchFirstMapSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        try {
            var result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
            destination.next(result);
        }
        catch (err) {
            destination.error(err);
        }
    };
    SwitchFirstMapSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    SwitchFirstMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.hasSubscription = false;
        if (this.hasCompleted) {
            this.destination.complete();
        }
    };
    return SwitchFirstMapSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=exhaustMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/expand.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export expand */
/* unused harmony export ExpandOperator */
/* unused harmony export ExpandSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (scheduler === void 0) {
        scheduler = undefined;
    }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return function (source) { return source.lift(new ExpandOperator(project, concurrent, scheduler)); };
}
var ExpandOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ExpandOperator(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    ExpandOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ExpandSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ExpandSubscriber, _super);
    function ExpandSubscriber(destination, project, concurrent, scheduler) {
        _super.call(this, destination);
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
        this.index = 0;
        this.active = 0;
        this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) {
            this.buffer = [];
        }
    }
    ExpandSubscriber.dispatch = function (arg) {
        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
        subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        var index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__util_tryCatch__["a" /* tryCatch */])(this.project)(value, index);
            if (result === __WEBPACK_IMPORTED_MODULE_1__util_errorObject__["a" /* errorObject */]) {
                destination.error(__WEBPACK_IMPORTED_MODULE_1__util_errorObject__["a" /* errorObject */].e);
            }
            else if (!this.scheduler) {
                this.subscribeToProjection(result, value, index);
            }
            else {
                var state = { subscriber: this, result: result, value: value, index: index };
                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
        this.active++;
        this.add(Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(this, result, value, index));
    };
    ExpandSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._next(innerValue);
    };
    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer && buffer.length > 0) {
            this._next(buffer.shift());
        }
        if (this.hasCompleted && this.active === 0) {
            this.destination.complete();
        }
    };
    return ExpandSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=expand.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/find.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export find */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindValueOperator; });
/* unused harmony export FindValueSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    if (typeof predicate !== 'function') {
        throw new TypeError('predicate is not a function');
    }
    return function (source) { return source.lift(new FindValueOperator(predicate, source, false, thisArg)); };
}
var FindValueOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    FindValueOperator.prototype.call = function (observer, source) {
        return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var FindValueSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(FindValueSubscriber, _super);
    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
        this.index = 0;
    }
    FindValueSubscriber.prototype.notifyComplete = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    FindValueSubscriber.prototype._next = function (value) {
        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
        var index = this.index++;
        try {
            var result = predicate.call(thisArg || this, value, index, this.source);
            if (result) {
                this.notifyComplete(this.yieldIndex ? index : value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    FindValueSubscriber.prototype._complete = function () {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=find.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/findIndex.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__operators_find__ = __webpack_require__("../../../../rxjs/_esm5/operators/find.js");
/** PURE_IMPORTS_START .._operators_find PURE_IMPORTS_END */

/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return function (source) { return source.lift(new __WEBPACK_IMPORTED_MODULE_0__operators_find__["a" /* FindValueOperator */](predicate, source, true, thisArg)); };
}
//# sourceMappingURL=findIndex.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/groupBy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export groupBy */
/* unused harmony export GroupedObservable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_Map__ = __webpack_require__("../../../../rxjs/_esm5/util/Map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_FastMap__ = __webpack_require__("../../../../rxjs/_esm5/util/FastMap.js");
/** PURE_IMPORTS_START .._Subscriber,.._Subscription,.._Observable,.._Subject,.._util_Map,.._util_FastMap PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function (source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
var GroupByOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupBySubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(GroupBySubscriber, _super);
    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        _super.call(this, destination);
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
        this.groups = null;
        this.attemptedToUnsubscribe = false;
        this.count = 0;
    }
    GroupBySubscriber.prototype._next = function (value) {
        var key;
        try {
            key = this.keySelector(value);
        }
        catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber.prototype._group = function (value, key) {
        var groups = this.groups;
        if (!groups) {
            groups = this.groups = typeof key === 'string' ? new __WEBPACK_IMPORTED_MODULE_5__util_FastMap__["a" /* FastMap */]() : new __WEBPACK_IMPORTED_MODULE_4__util_Map__["a" /* Map */]();
        }
        var group = groups.get(key);
        var element;
        if (this.elementSelector) {
            try {
                element = this.elementSelector(value);
            }
            catch (err) {
                this.error(err);
            }
        }
        else {
            element = value;
        }
        if (!group) {
            group = this.subjectSelector ? this.subjectSelector() : new __WEBPACK_IMPORTED_MODULE_3__Subject__["Subject"]();
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                }
                catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) {
            group.next(element);
        }
    };
    GroupBySubscriber.prototype._error = function (err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber.prototype._complete = function () {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function (group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber.prototype.removeGroup = function (key) {
        this.groups.delete(key);
    };
    GroupBySubscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) {
                _super.prototype.unsubscribe.call(this);
            }
        }
    };
    return GroupBySubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var GroupDurationSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(GroupDurationSubscriber, _super);
    function GroupDurationSubscriber(key, group, parent) {
        _super.call(this, group);
        this.key = key;
        this.group = group;
        this.parent = parent;
    }
    GroupDurationSubscriber.prototype._next = function (value) {
        this.complete();
    };
    GroupDurationSubscriber.prototype._unsubscribe = function () {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) {
            parent.removeGroup(key);
        }
    };
    return GroupDurationSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
/**
 * An Observable representing values belonging to the same group represented by
 * a common key. The values emitted by a GroupedObservable come from the source
 * Observable. The common key is available as the field `key` on a
 * GroupedObservable instance.
 *
 * @class GroupedObservable<K, T>
 */
var GroupedObservable = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(GroupedObservable, _super);
    function GroupedObservable(key, groupSubject, refCountSubscription) {
        _super.call(this);
        this.key = key;
        this.groupSubject = groupSubject;
        this.refCountSubscription = refCountSubscription;
    }
    GroupedObservable.prototype._subscribe = function (subscriber) {
        var subscription = new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */]();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) {
            subscription.add(new InnerRefCountSubscription(refCountSubscription));
        }
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable;
}(__WEBPACK_IMPORTED_MODULE_2__Observable__["a" /* Observable */]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var InnerRefCountSubscription = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(InnerRefCountSubscription, _super);
    function InnerRefCountSubscription(parent) {
        _super.call(this);
        this.parent = parent;
        parent.count++;
    }
    InnerRefCountSubscription.prototype.unsubscribe = function () {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
                parent.unsubscribe();
            }
        }
    };
    return InnerRefCountSubscription;
}(__WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */]));
//# sourceMappingURL=groupBy.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/ignoreElements.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ignoreElements */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_noop__ = __webpack_require__("../../../../rxjs/_esm5/util/noop.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_noop PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return function ignoreElementsOperatorFunction(source) {
        return source.lift(new IgnoreElementsOperator());
    };
}
var IgnoreElementsOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function IgnoreElementsOperator() {
    }
    IgnoreElementsOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IgnoreElementsSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IgnoreElementsSubscriber, _super);
    function IgnoreElementsSubscriber() {
        _super.apply(this, arguments);
    }
    IgnoreElementsSubscriber.prototype._next = function (unused) {
        Object(__WEBPACK_IMPORTED_MODULE_1__util_noop__["a" /* noop */])();
    };
    return IgnoreElementsSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=ignoreElements.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__audit__ = __webpack_require__("../../../../rxjs/_esm5/operators/audit.js");
/* unused harmony reexport audit */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auditTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/auditTime.js");
/* unused harmony reexport auditTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buffer__ = __webpack_require__("../../../../rxjs/_esm5/operators/buffer.js");
/* unused harmony reexport buffer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bufferCount__ = __webpack_require__("../../../../rxjs/_esm5/operators/bufferCount.js");
/* unused harmony reexport bufferCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bufferTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/bufferTime.js");
/* unused harmony reexport bufferTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bufferToggle__ = __webpack_require__("../../../../rxjs/_esm5/operators/bufferToggle.js");
/* unused harmony reexport bufferToggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bufferWhen__ = __webpack_require__("../../../../rxjs/_esm5/operators/bufferWhen.js");
/* unused harmony reexport bufferWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__catchError__ = __webpack_require__("../../../../rxjs/_esm5/operators/catchError.js");
/* unused harmony reexport catchError */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__combineAll__ = __webpack_require__("../../../../rxjs/_esm5/operators/combineAll.js");
/* unused harmony reexport combineAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/operators/combineLatest.js");
/* unused harmony reexport combineLatest */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__concat__ = __webpack_require__("../../../../rxjs/_esm5/operators/concat.js");
/* unused harmony reexport concat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__concatAll__ = __webpack_require__("../../../../rxjs/_esm5/operators/concatAll.js");
/* unused harmony reexport concatAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__concatMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/concatMap.js");
/* unused harmony reexport concatMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__concatMapTo__ = __webpack_require__("../../../../rxjs/_esm5/operators/concatMapTo.js");
/* unused harmony reexport concatMapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__count__ = __webpack_require__("../../../../rxjs/_esm5/operators/count.js");
/* unused harmony reexport count */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__debounce__ = __webpack_require__("../../../../rxjs/_esm5/operators/debounce.js");
/* unused harmony reexport debounce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/debounceTime.js");
/* unused harmony reexport debounceTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__defaultIfEmpty__ = __webpack_require__("../../../../rxjs/_esm5/operators/defaultIfEmpty.js");
/* unused harmony reexport defaultIfEmpty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__delay__ = __webpack_require__("../../../../rxjs/_esm5/operators/delay.js");
/* unused harmony reexport delay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__delayWhen__ = __webpack_require__("../../../../rxjs/_esm5/operators/delayWhen.js");
/* unused harmony reexport delayWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__dematerialize__ = __webpack_require__("../../../../rxjs/_esm5/operators/dematerialize.js");
/* unused harmony reexport dematerialize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__distinct__ = __webpack_require__("../../../../rxjs/_esm5/operators/distinct.js");
/* unused harmony reexport distinct */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/operators/distinctUntilChanged.js");
/* unused harmony reexport distinctUntilChanged */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__distinctUntilKeyChanged__ = __webpack_require__("../../../../rxjs/_esm5/operators/distinctUntilKeyChanged.js");
/* unused harmony reexport distinctUntilKeyChanged */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__elementAt__ = __webpack_require__("../../../../rxjs/_esm5/operators/elementAt.js");
/* unused harmony reexport elementAt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__every__ = __webpack_require__("../../../../rxjs/_esm5/operators/every.js");
/* unused harmony reexport every */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__exhaust__ = __webpack_require__("../../../../rxjs/_esm5/operators/exhaust.js");
/* unused harmony reexport exhaust */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__exhaustMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/exhaustMap.js");
/* unused harmony reexport exhaustMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__expand__ = __webpack_require__("../../../../rxjs/_esm5/operators/expand.js");
/* unused harmony reexport expand */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__filter__ = __webpack_require__("../../../../rxjs/_esm5/operators/filter.js");
/* unused harmony reexport filter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__finalize__ = __webpack_require__("../../../../rxjs/_esm5/operators/finalize.js");
/* unused harmony reexport finalize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__find__ = __webpack_require__("../../../../rxjs/_esm5/operators/find.js");
/* unused harmony reexport find */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__findIndex__ = __webpack_require__("../../../../rxjs/_esm5/operators/findIndex.js");
/* unused harmony reexport findIndex */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__first__ = __webpack_require__("../../../../rxjs/_esm5/operators/first.js");
/* unused harmony reexport first */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__groupBy__ = __webpack_require__("../../../../rxjs/_esm5/operators/groupBy.js");
/* unused harmony reexport groupBy */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ignoreElements__ = __webpack_require__("../../../../rxjs/_esm5/operators/ignoreElements.js");
/* unused harmony reexport ignoreElements */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__isEmpty__ = __webpack_require__("../../../../rxjs/_esm5/operators/isEmpty.js");
/* unused harmony reexport isEmpty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__last__ = __webpack_require__("../../../../rxjs/_esm5/operators/last.js");
/* unused harmony reexport last */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_38__map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__mapTo__ = __webpack_require__("../../../../rxjs/_esm5/operators/mapTo.js");
/* unused harmony reexport mapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__materialize__ = __webpack_require__("../../../../rxjs/_esm5/operators/materialize.js");
/* unused harmony reexport materialize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__max__ = __webpack_require__("../../../../rxjs/_esm5/operators/max.js");
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__merge__ = __webpack_require__("../../../../rxjs/_esm5/operators/merge.js");
/* unused harmony reexport merge */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__mergeAll__ = __webpack_require__("../../../../rxjs/_esm5/operators/mergeAll.js");
/* unused harmony reexport mergeAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/mergeMap.js");
/* unused harmony reexport mergeMap */
/* unused harmony reexport flatMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__mergeMapTo__ = __webpack_require__("../../../../rxjs/_esm5/operators/mergeMapTo.js");
/* unused harmony reexport mergeMapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__mergeScan__ = __webpack_require__("../../../../rxjs/_esm5/operators/mergeScan.js");
/* unused harmony reexport mergeScan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__min__ = __webpack_require__("../../../../rxjs/_esm5/operators/min.js");
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__multicast__ = __webpack_require__("../../../../rxjs/_esm5/operators/multicast.js");
/* unused harmony reexport multicast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__observeOn__ = __webpack_require__("../../../../rxjs/_esm5/operators/observeOn.js");
/* unused harmony reexport observeOn */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__onErrorResumeNext__ = __webpack_require__("../../../../rxjs/_esm5/operators/onErrorResumeNext.js");
/* unused harmony reexport onErrorResumeNext */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pairwise__ = __webpack_require__("../../../../rxjs/_esm5/operators/pairwise.js");
/* unused harmony reexport pairwise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__partition__ = __webpack_require__("../../../../rxjs/_esm5/operators/partition.js");
/* unused harmony reexport partition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pluck__ = __webpack_require__("../../../../rxjs/_esm5/operators/pluck.js");
/* unused harmony reexport pluck */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__publish__ = __webpack_require__("../../../../rxjs/_esm5/operators/publish.js");
/* unused harmony reexport publish */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__publishBehavior__ = __webpack_require__("../../../../rxjs/_esm5/operators/publishBehavior.js");
/* unused harmony reexport publishBehavior */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__publishLast__ = __webpack_require__("../../../../rxjs/_esm5/operators/publishLast.js");
/* unused harmony reexport publishLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__publishReplay__ = __webpack_require__("../../../../rxjs/_esm5/operators/publishReplay.js");
/* unused harmony reexport publishReplay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__race__ = __webpack_require__("../../../../rxjs/_esm5/operators/race.js");
/* unused harmony reexport race */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__reduce__ = __webpack_require__("../../../../rxjs/_esm5/operators/reduce.js");
/* unused harmony reexport reduce */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__repeat__ = __webpack_require__("../../../../rxjs/_esm5/operators/repeat.js");
/* unused harmony reexport repeat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__repeatWhen__ = __webpack_require__("../../../../rxjs/_esm5/operators/repeatWhen.js");
/* unused harmony reexport repeatWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__retry__ = __webpack_require__("../../../../rxjs/_esm5/operators/retry.js");
/* unused harmony reexport retry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__retryWhen__ = __webpack_require__("../../../../rxjs/_esm5/operators/retryWhen.js");
/* unused harmony reexport retryWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__refCount__ = __webpack_require__("../../../../rxjs/_esm5/operators/refCount.js");
/* unused harmony reexport refCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__sample__ = __webpack_require__("../../../../rxjs/_esm5/operators/sample.js");
/* unused harmony reexport sample */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__sampleTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/sampleTime.js");
/* unused harmony reexport sampleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__scan__ = __webpack_require__("../../../../rxjs/_esm5/operators/scan.js");
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__sequenceEqual__ = __webpack_require__("../../../../rxjs/_esm5/operators/sequenceEqual.js");
/* unused harmony reexport sequenceEqual */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__share__ = __webpack_require__("../../../../rxjs/_esm5/operators/share.js");
/* unused harmony reexport share */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__shareReplay__ = __webpack_require__("../../../../rxjs/_esm5/operators/shareReplay.js");
/* unused harmony reexport shareReplay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__single__ = __webpack_require__("../../../../rxjs/_esm5/operators/single.js");
/* unused harmony reexport single */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__skip__ = __webpack_require__("../../../../rxjs/_esm5/operators/skip.js");
/* unused harmony reexport skip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__skipLast__ = __webpack_require__("../../../../rxjs/_esm5/operators/skipLast.js");
/* unused harmony reexport skipLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__skipUntil__ = __webpack_require__("../../../../rxjs/_esm5/operators/skipUntil.js");
/* unused harmony reexport skipUntil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__skipWhile__ = __webpack_require__("../../../../rxjs/_esm5/operators/skipWhile.js");
/* unused harmony reexport skipWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* unused harmony reexport startWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__switchAll__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchAll.js");
/* unused harmony reexport switchAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* unused harmony reexport switchMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__switchMapTo__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMapTo.js");
/* unused harmony reexport switchMapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__take__ = __webpack_require__("../../../../rxjs/_esm5/operators/take.js");
/* unused harmony reexport take */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__takeLast__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeLast.js");
/* unused harmony reexport takeLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeUntil.js");
/* unused harmony reexport takeUntil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/operators/takeWhile.js");
/* unused harmony reexport takeWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__tap__ = __webpack_require__("../../../../rxjs/_esm5/operators/tap.js");
/* unused harmony reexport tap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__throttle__ = __webpack_require__("../../../../rxjs/_esm5/operators/throttle.js");
/* unused harmony reexport throttle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__throttleTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/throttleTime.js");
/* unused harmony reexport throttleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__timeInterval__ = __webpack_require__("../../../../rxjs/_esm5/operators/timeInterval.js");
/* unused harmony reexport timeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__timeout__ = __webpack_require__("../../../../rxjs/_esm5/operators/timeout.js");
/* unused harmony reexport timeout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__timeoutWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/timeoutWith.js");
/* unused harmony reexport timeoutWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__timestamp__ = __webpack_require__("../../../../rxjs/_esm5/operators/timestamp.js");
/* unused harmony reexport timestamp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__toArray__ = __webpack_require__("../../../../rxjs/_esm5/operators/toArray.js");
/* unused harmony reexport toArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__window__ = __webpack_require__("../../../../rxjs/_esm5/operators/window.js");
/* unused harmony reexport window */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__windowCount__ = __webpack_require__("../../../../rxjs/_esm5/operators/windowCount.js");
/* unused harmony reexport windowCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__windowTime__ = __webpack_require__("../../../../rxjs/_esm5/operators/windowTime.js");
/* unused harmony reexport windowTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__windowToggle__ = __webpack_require__("../../../../rxjs/_esm5/operators/windowToggle.js");
/* unused harmony reexport windowToggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__windowWhen__ = __webpack_require__("../../../../rxjs/_esm5/operators/windowWhen.js");
/* unused harmony reexport windowWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__withLatestFrom__ = __webpack_require__("../../../../rxjs/_esm5/operators/withLatestFrom.js");
/* unused harmony reexport withLatestFrom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__zip__ = __webpack_require__("../../../../rxjs/_esm5/operators/zip.js");
/* unused harmony reexport zip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__zipAll__ = __webpack_require__("../../../../rxjs/_esm5/operators/zipAll.js");
/* unused harmony reexport zipAll */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */














































































/**
 * TODO(https://github.com/ReactiveX/rxjs/issues/2900): Add back subscribeOn once it can be
 * treeshaken. Currently if this export is added back, it
 * forces apps to bring in asap scheduler along with
 * Immediate, root, and other supporting code.
 */
// export { subscribeOn } from './subscribeOn';























//# sourceMappingURL=index.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/isEmpty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isEmpty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

function isEmpty() {
    return function (source) { return source.lift(new IsEmptyOperator()); };
}
var IsEmptyOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function IsEmptyOperator() {
    }
    IsEmptyOperator.prototype.call = function (observer, source) {
        return source.subscribe(new IsEmptySubscriber(observer));
    };
    return IsEmptyOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var IsEmptySubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(IsEmptySubscriber, _super);
    function IsEmptySubscriber(destination) {
        _super.call(this, destination);
    }
    IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
        var destination = this.destination;
        destination.next(isEmpty);
        destination.complete();
    };
    IsEmptySubscriber.prototype._next = function (value) {
        this.notifyComplete(false);
    };
    IsEmptySubscriber.prototype._complete = function () {
        this.notifyComplete(true);
    };
    return IsEmptySubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=isEmpty.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/mapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return function (source) { return source.lift(new MapToOperator(value)); };
}
var MapToOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function MapToOperator(value) {
        this.value = value;
    }
    MapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MapToSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(MapToSubscriber, _super);
    function MapToSubscriber(destination, value) {
        _super.call(this, destination);
        this.value = value;
    }
    MapToSubscriber.prototype._next = function (x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=mapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/materialize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export materialize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Notification__ = __webpack_require__("../../../../rxjs/_esm5/Notification.js");
/** PURE_IMPORTS_START .._Subscriber,.._Notification PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return function materializeOperatorFunction(source) {
        return source.lift(new MaterializeOperator());
    };
}
var MaterializeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function MaterializeOperator() {
    }
    MaterializeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MaterializeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(MaterializeSubscriber, _super);
    function MaterializeSubscriber(destination) {
        _super.call(this, destination);
    }
    MaterializeSubscriber.prototype._next = function (value) {
        this.destination.next(__WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createNext(value));
    };
    MaterializeSubscriber.prototype._error = function (err) {
        var destination = this.destination;
        destination.next(__WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createError(err));
        destination.complete();
    };
    MaterializeSubscriber.prototype._complete = function () {
        var destination = this.destination;
        destination.next(__WEBPACK_IMPORTED_MODULE_1__Notification__["a" /* Notification */].createComplete());
        destination.complete();
    };
    return MaterializeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=materialize.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/max.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduce__ = __webpack_require__("../../../../rxjs/_esm5/operators/reduce.js");
/** PURE_IMPORTS_START ._reduce PURE_IMPORTS_END */

/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    var max = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) > 0 ? x : y; }
        : function (x, y) { return x > y ? x : y; };
    return Object(__WEBPACK_IMPORTED_MODULE_0__reduce__["a" /* reduce */])(max);
}
//# sourceMappingURL=max.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/mergeMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeMapTo */
/* unused harmony export MergeMapToOperator */
/* unused harmony export MergeMapToSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
        resultSelector = null;
    }
    return function (source) { return source.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent)); };
}
// TODO: Figure out correct signature here: an Operator<Observable<T>, R>
//       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>
var MergeMapToOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function MergeMapToOperator(ish, resultSelector, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
    }
    MergeMapToOperator.prototype.call = function (observer, source) {
        return source.subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
    };
    return MergeMapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeMapToSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(MergeMapToSubscriber, _super);
    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
        if (concurrent === void 0) {
            concurrent = Number.POSITIVE_INFINITY;
        }
        _super.call(this, destination);
        this.ish = ish;
        this.resultSelector = resultSelector;
        this.concurrent = concurrent;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeMapToSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var resultSelector = this.resultSelector;
            var index = this.index++;
            var ish = this.ish;
            var destination = this.destination;
            this.active++;
            this._innerSub(ish, destination, resultSelector, value, index);
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
        this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, ish, value, index));
    };
    MergeMapToSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            this.destination.complete();
        }
    };
    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    MergeMapToSubscriber.prototype.notifyError = function (err) {
        this.destination.error(err);
    };
    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            this.destination.complete();
        }
    };
    return MergeMapToSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=mergeMapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/mergeScan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeScan */
/* unused harmony export MergeScanOperator */
/* unused harmony export MergeScanSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/** PURE_IMPORTS_START .._util_tryCatch,.._util_errorObject,.._util_subscribeToResult,.._OuterSubscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) {
        concurrent = Number.POSITIVE_INFINITY;
    }
    return function (source) { return source.lift(new MergeScanOperator(accumulator, seed, concurrent)); };
}
var MergeScanOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function MergeScanOperator(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    MergeScanOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
    };
    return MergeScanOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var MergeScanSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(MergeScanSubscriber, _super);
    function MergeScanSubscriber(destination, accumulator, acc, concurrent) {
        _super.call(this, destination);
        this.accumulator = accumulator;
        this.acc = acc;
        this.concurrent = concurrent;
        this.hasValue = false;
        this.hasCompleted = false;
        this.buffer = [];
        this.active = 0;
        this.index = 0;
    }
    MergeScanSubscriber.prototype._next = function (value) {
        if (this.active < this.concurrent) {
            var index = this.index++;
            var ish = Object(__WEBPACK_IMPORTED_MODULE_0__util_tryCatch__["a" /* tryCatch */])(this.accumulator)(this.acc, value);
            var destination = this.destination;
            if (ish === __WEBPACK_IMPORTED_MODULE_1__util_errorObject__["a" /* errorObject */]) {
                destination.error(__WEBPACK_IMPORTED_MODULE_1__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                this.active++;
                this._innerSub(ish, value, index);
            }
        }
        else {
            this.buffer.push(value);
        }
    };
    MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
        this.add(Object(__WEBPACK_IMPORTED_MODULE_2__util_subscribeToResult__["a" /* subscribeToResult */])(this, ish, value, index));
    };
    MergeScanSubscriber.prototype._complete = function () {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var destination = this.destination;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    };
    MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
        var buffer = this.buffer;
        this.remove(innerSub);
        this.active--;
        if (buffer.length > 0) {
            this._next(buffer.shift());
        }
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) {
                this.destination.next(this.acc);
            }
            this.destination.complete();
        }
    };
    return MergeScanSubscriber;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=mergeScan.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/min.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduce__ = __webpack_require__("../../../../rxjs/_esm5/operators/reduce.js");
/** PURE_IMPORTS_START ._reduce PURE_IMPORTS_END */

/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    var min = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) < 0 ? x : y; }
        : function (x, y) { return x < y ? x : y; };
    return Object(__WEBPACK_IMPORTED_MODULE_0__reduce__["a" /* reduce */])(min);
}
//# sourceMappingURL=min.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export onErrorResumeNext */
/* unused harmony export onErrorResumeNextStatic */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_FromObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/FromObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isArray__ = __webpack_require__("../../../../rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._observable_FromObservable,.._util_isArray,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    if (nextSources.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_1__util_isArray__["a" /* isArray */])(nextSources[0])) {
        nextSources = nextSources[0];
    }
    return function (source) { return source.lift(new OnErrorResumeNextOperator(nextSources)); };
}
/* tslint:enable:max-line-length */
function onErrorResumeNextStatic() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    var source = null;
    if (nextSources.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_1__util_isArray__["a" /* isArray */])(nextSources[0])) {
        nextSources = nextSources[0];
    }
    source = nextSources.shift();
    return new __WEBPACK_IMPORTED_MODULE_0__observable_FromObservable__["a" /* FromObservable */](source, null).lift(new OnErrorResumeNextOperator(nextSources));
}
var OnErrorResumeNextOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function OnErrorResumeNextOperator(nextSources) {
        this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator;
}());
var OnErrorResumeNextSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(OnErrorResumeNextSubscriber, _super);
    function OnErrorResumeNextSubscriber(destination, nextSources) {
        _super.call(this, destination);
        this.destination = destination;
        this.nextSources = nextSources;
    }
    OnErrorResumeNextSubscriber.prototype.notifyError = function (error, innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.notifyComplete = function (innerSub) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._error = function (err) {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype._complete = function () {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber.prototype.subscribeToNextSource = function () {
        var next = this.nextSources.shift();
        if (next) {
            this.add(Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(this, next));
        }
        else {
            this.destination.complete();
        }
    };
    return OnErrorResumeNextSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=onErrorResumeNext.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/pairwise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pairwise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return function (source) { return source.lift(new PairwiseOperator()); };
}
var PairwiseOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function PairwiseOperator() {
    }
    PairwiseOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    };
    return PairwiseOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var PairwiseSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(PairwiseSubscriber, _super);
    function PairwiseSubscriber(destination) {
        _super.call(this, destination);
        this.hasPrev = false;
    }
    PairwiseSubscriber.prototype._next = function (value) {
        if (this.hasPrev) {
            this.destination.next([this.prev, value]);
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
    };
    return PairwiseSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=pairwise.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/partition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export partition */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_not__ = __webpack_require__("../../../../rxjs/_esm5/util/not.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter__ = __webpack_require__("../../../../rxjs/_esm5/operators/filter.js");
/** PURE_IMPORTS_START .._util_not,._filter PURE_IMPORTS_END */


/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return function (source) {
        return [
            Object(__WEBPACK_IMPORTED_MODULE_1__filter__["a" /* filter */])(predicate, thisArg)(source),
            Object(__WEBPACK_IMPORTED_MODULE_1__filter__["a" /* filter */])(Object(__WEBPACK_IMPORTED_MODULE_0__util_not__["a" /* not */])(predicate, thisArg))(source)
        ];
    };
}
//# sourceMappingURL=partition.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/pluck.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export pluck */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/** PURE_IMPORTS_START ._map PURE_IMPORTS_END */

/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    var length = properties.length;
    if (length === 0) {
        throw new Error('list of properties cannot be empty.');
    }
    return function (source) { return Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* map */])(plucker(properties, length))(source); };
}
function plucker(props, length) {
    var mapper = function (x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
            var p = currentProp[props[i]];
            if (typeof p !== 'undefined') {
                currentProp = p;
            }
            else {
                return undefined;
            }
        }
        return currentProp;
    };
    return mapper;
}
//# sourceMappingURL=pluck.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/publish.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export publish */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multicast__ = __webpack_require__("../../../../rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._Subject,._multicast PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return selector ?
        Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(function () { return new __WEBPACK_IMPORTED_MODULE_0__Subject__["Subject"](); }, selector) :
        Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(new __WEBPACK_IMPORTED_MODULE_0__Subject__["Subject"]());
}
//# sourceMappingURL=publish.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/publishBehavior.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export publishBehavior */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multicast__ = __webpack_require__("../../../../rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._BehaviorSubject,._multicast PURE_IMPORTS_END */


/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return function (source) { return Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(new __WEBPACK_IMPORTED_MODULE_0__BehaviorSubject__["a" /* BehaviorSubject */](value))(source); };
}
//# sourceMappingURL=publishBehavior.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/publishLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export publishLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncSubject__ = __webpack_require__("../../../../rxjs/_esm5/AsyncSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multicast__ = __webpack_require__("../../../../rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._AsyncSubject,._multicast PURE_IMPORTS_END */


function publishLast() {
    return function (source) { return Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(new __WEBPACK_IMPORTED_MODULE_0__AsyncSubject__["a" /* AsyncSubject */]())(source); };
}
//# sourceMappingURL=publishLast.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/publishReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export publishReplay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__multicast__ = __webpack_require__("../../../../rxjs/_esm5/operators/multicast.js");
/** PURE_IMPORTS_START .._ReplaySubject,._multicast PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') {
        scheduler = selectorOrScheduler;
    }
    var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    var subject = new __WEBPACK_IMPORTED_MODULE_0__ReplaySubject__["a" /* ReplaySubject */](bufferSize, windowTime, scheduler);
    return function (source) { return Object(__WEBPACK_IMPORTED_MODULE_1__multicast__["a" /* multicast */])(function () { return subject; }, selector)(source); };
}
//# sourceMappingURL=publishReplay.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export race */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_isArray__ = __webpack_require__("../../../../rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_race__ = __webpack_require__("../../../../rxjs/_esm5/observable/race.js");
/** PURE_IMPORTS_START .._util_isArray,.._observable_race PURE_IMPORTS_END */


/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function raceOperatorFunction(source) {
        // if the only argument is an array, it was most likely called with
        // `pair([obs1, obs2, ...])`
        if (observables.length === 1 && Object(__WEBPACK_IMPORTED_MODULE_0__util_isArray__["a" /* isArray */])(observables[0])) {
            observables = observables[0];
        }
        return source.lift.call(__WEBPACK_IMPORTED_MODULE_1__observable_race__["a" /* race */].apply(void 0, [source].concat(observables)));
    };
}
//# sourceMappingURL=race.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/repeat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export repeat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_EmptyObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/EmptyObservable.js");
/** PURE_IMPORTS_START .._Subscriber,.._observable_EmptyObservable PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) {
        count = -1;
    }
    return function (source) {
        if (count === 0) {
            return new __WEBPACK_IMPORTED_MODULE_1__observable_EmptyObservable__["a" /* EmptyObservable */]();
        }
        else if (count < 0) {
            return source.lift(new RepeatOperator(-1, source));
        }
        else {
            return source.lift(new RepeatOperator(count - 1, source));
        }
    };
}
var RepeatOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RepeatOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RepeatOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RepeatSubscriber, _super);
    function RepeatSubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RepeatSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.complete.call(this);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RepeatSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=repeat.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/repeatWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export repeatWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subject,.._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return function (source) { return source.lift(new RepeatWhenOperator(notifier)); };
}
var RepeatWhenOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RepeatWhenOperator(notifier) {
        this.notifier = notifier;
    }
    RepeatWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
    };
    return RepeatWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RepeatWhenSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RepeatWhenSubscriber, _super);
    function RepeatWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
        this.sourceIsBeingSubscribedTo = true;
    }
    RepeatWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    };
    RepeatWhenSubscriber.prototype.notifyComplete = function (innerSub) {
        if (this.sourceIsBeingSubscribedTo === false) {
            return _super.prototype.complete.call(this);
        }
    };
    RepeatWhenSubscriber.prototype.complete = function () {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) {
                this.subscribeToRetries();
            }
            else if (this.retriesSubscription.closed) {
                return _super.prototype.complete.call(this);
            }
            this._unsubscribeAndRecycle();
            this.notifications.next();
        }
    };
    RepeatWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RepeatWhenSubscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, notifications = _a.notifications, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.notifications = null;
        this.retries = null;
        this.retriesSubscription = null;
        _super.prototype._unsubscribeAndRecycle.call(this);
        this.notifications = notifications;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        return this;
    };
    RepeatWhenSubscriber.prototype.subscribeToRetries = function () {
        this.notifications = new __WEBPACK_IMPORTED_MODULE_0__Subject__["Subject"]();
        var retries = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.notifier)(this.notifications);
        if (retries === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            return _super.prototype.complete.call(this);
        }
        this.retries = retries;
        this.retriesSubscription = Object(__WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__["a" /* subscribeToResult */])(this, retries);
    };
    return RepeatWhenSubscriber;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=repeatWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/retry.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export retry */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) {
        count = -1;
    }
    return function (source) { return source.lift(new RetryOperator(count, source)); };
}
var RetryOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RetryOperator(count, source) {
        this.count = count;
        this.source = source;
    }
    RetryOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetrySubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RetrySubscriber, _super);
    function RetrySubscriber(destination, count, source) {
        _super.call(this, destination);
        this.count = count;
        this.source = source;
    }
    RetrySubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) {
                return _super.prototype.error.call(this, err);
            }
            else if (count > -1) {
                this.count = count - 1;
            }
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RetrySubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=retry.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/retryWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export retryWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subject,.._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return function (source) { return source.lift(new RetryWhenOperator(notifier, source)); };
}
var RetryWhenOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function RetryWhenOperator(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var RetryWhenSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(RetryWhenSubscriber, _super);
    function RetryWhenSubscriber(destination, notifier, source) {
        _super.call(this, destination);
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var errors = this.errors;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new __WEBPACK_IMPORTED_MODULE_0__Subject__["Subject"]();
                retries = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.notifier)(errors);
                if (retries === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    return _super.prototype.error.call(this, __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
                retriesSubscription = Object(__WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__["a" /* subscribeToResult */])(this, retries);
            }
            else {
                this.errors = null;
                this.retriesSubscription = null;
            }
            this._unsubscribeAndRecycle();
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    };
    RetryWhenSubscriber.prototype._unsubscribe = function () {
        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
        if (errors) {
            errors.unsubscribe();
            this.errors = null;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = null;
        }
        this.retries = null;
    };
    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
        this.errors = null;
        this.retries = null;
        this.retriesSubscription = null;
        this._unsubscribeAndRecycle();
        this.errors = errors;
        this.retries = retries;
        this.retriesSubscription = retriesSubscription;
        this.source.subscribe(this);
    };
    return RetryWhenSubscriber;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=retryWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/sample.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sample */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return function (source) { return source.lift(new SampleOperator(notifier)); };
}
var SampleOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SampleOperator(notifier) {
        this.notifier = notifier;
    }
    SampleOperator.prototype.call = function (subscriber, source) {
        var sampleSubscriber = new SampleSubscriber(subscriber);
        var subscription = source.subscribe(sampleSubscriber);
        subscription.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(sampleSubscriber, this.notifier));
        return subscription;
    };
    return SampleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SampleSubscriber, _super);
    function SampleSubscriber() {
        _super.apply(this, arguments);
        this.hasValue = false;
    }
    SampleSubscriber.prototype._next = function (value) {
        this.value = value;
        this.hasValue = true;
    };
    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    };
    SampleSubscriber.prototype.notifyComplete = function () {
        this.emitValue();
    };
    SampleSubscriber.prototype.emitValue = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    };
    return SampleSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=sample.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/sampleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sampleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/** PURE_IMPORTS_START .._Subscriber,.._scheduler_async PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_async__["a" /* async */];
    }
    return function (source) { return source.lift(new SampleTimeOperator(period, scheduler)); };
}
var SampleTimeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SampleTimeOperator(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    SampleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SampleTimeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SampleTimeSubscriber, _super);
    function SampleTimeSubscriber(destination, period, scheduler) {
        _super.call(this, destination);
        this.period = period;
        this.scheduler = scheduler;
        this.hasValue = false;
        this.add(scheduler.schedule(dispatchNotification, period, { subscriber: this, period: period }));
    }
    SampleTimeSubscriber.prototype._next = function (value) {
        this.lastValue = value;
        this.hasValue = true;
    };
    SampleTimeSubscriber.prototype.notifyNext = function () {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    };
    return SampleTimeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
function dispatchNotification(state) {
    var subscriber = state.subscriber, period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
}
//# sourceMappingURL=sampleTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/sequenceEqual.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sequenceEqual */
/* unused harmony export SequenceEqualOperator */
/* unused harmony export SequenceEqualSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_tryCatch,.._util_errorObject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return function (source) { return source.lift(new SequenceEqualOperator(compareTo, comparor)); };
}
var SequenceEqualOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SequenceEqualOperator(compareTo, comparor) {
        this.compareTo = compareTo;
        this.comparor = comparor;
    }
    SequenceEqualOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparor));
    };
    return SequenceEqualOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SequenceEqualSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SequenceEqualSubscriber, _super);
    function SequenceEqualSubscriber(destination, compareTo, comparor) {
        _super.call(this, destination);
        this.compareTo = compareTo;
        this.comparor = comparor;
        this._a = [];
        this._b = [];
        this._oneComplete = false;
        this.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, this)));
    }
    SequenceEqualSubscriber.prototype._next = function (value) {
        if (this._oneComplete && this._b.length === 0) {
            this.emit(false);
        }
        else {
            this._a.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber.prototype._complete = function () {
        if (this._oneComplete) {
            this.emit(this._a.length === 0 && this._b.length === 0);
        }
        else {
            this._oneComplete = true;
        }
    };
    SequenceEqualSubscriber.prototype.checkValues = function () {
        var _c = this, _a = _c._a, _b = _c._b, comparor = _c.comparor;
        while (_a.length > 0 && _b.length > 0) {
            var a = _a.shift();
            var b = _b.shift();
            var areEqual = false;
            if (comparor) {
                areEqual = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(comparor)(a, b);
                if (areEqual === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
                    this.destination.error(__WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e);
                }
            }
            else {
                areEqual = a === b;
            }
            if (!areEqual) {
                this.emit(false);
            }
        }
    };
    SequenceEqualSubscriber.prototype.emit = function (value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    SequenceEqualSubscriber.prototype.nextB = function (value) {
        if (this._oneComplete && this._a.length === 0) {
            this.emit(false);
        }
        else {
            this._b.push(value);
            this.checkValues();
        }
    };
    return SequenceEqualSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
var SequenceEqualCompareToSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SequenceEqualCompareToSubscriber, _super);
    function SequenceEqualCompareToSubscriber(destination, parent) {
        _super.call(this, destination);
        this.parent = parent;
    }
    SequenceEqualCompareToSubscriber.prototype._next = function (value) {
        this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber.prototype._error = function (err) {
        this.parent.error(err);
    };
    SequenceEqualCompareToSubscriber.prototype._complete = function () {
        this.parent._complete();
    };
    return SequenceEqualCompareToSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=sequenceEqual.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/shareReplay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shareReplay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/** PURE_IMPORTS_START .._ReplaySubject PURE_IMPORTS_END */

/**
 * @method shareReplay
 * @owner Observable
 */
function shareReplay(bufferSize, windowTime, scheduler) {
    return function (source) { return source.lift(shareReplayOperator(bufferSize, windowTime, scheduler)); };
}
function shareReplayOperator(bufferSize, windowTime, scheduler) {
    var subject;
    var refCount = 0;
    var subscription;
    var hasError = false;
    var isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        if (!subject || hasError) {
            hasError = false;
            subject = new __WEBPACK_IMPORTED_MODULE_0__ReplaySubject__["a" /* ReplaySubject */](bufferSize, windowTime, scheduler);
            subscription = source.subscribe({
                next: function (value) { subject.next(value); },
                error: function (err) {
                    hasError = true;
                    subject.error(err);
                },
                complete: function () {
                    isComplete = true;
                    subject.complete();
                },
            });
        }
        var innerSub = subject.subscribe(this);
        return function () {
            refCount--;
            innerSub.unsubscribe();
            if (subscription && refCount === 0 && isComplete) {
                subscription.unsubscribe();
            }
        };
    };
}
;
//# sourceMappingURL=shareReplay.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export single */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_EmptyError__ = __webpack_require__("../../../../rxjs/_esm5/util/EmptyError.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_EmptyError PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return function (source) { return source.lift(new SingleOperator(predicate, source)); };
}
var SingleOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SingleOperator(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    SingleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SingleSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SingleSubscriber, _super);
    function SingleSubscriber(destination, predicate, source) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.source = source;
        this.seenValue = false;
        this.index = 0;
    }
    SingleSubscriber.prototype.applySingleValue = function (value) {
        if (this.seenValue) {
            this.destination.error('Sequence contains more than one element');
        }
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    };
    SingleSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this.tryNext(value, index);
        }
        else {
            this.applySingleValue(value);
        }
    };
    SingleSubscriber.prototype.tryNext = function (value, index) {
        try {
            if (this.predicate(value, index, this.source)) {
                this.applySingleValue(value);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    SingleSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        }
        else {
            destination.error(new __WEBPACK_IMPORTED_MODULE_1__util_EmptyError__["a" /* EmptyError */]);
        }
    };
    return SingleSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=single.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/skip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export skip */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return function (source) { return source.lift(new SkipOperator(count)); };
}
var SkipOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SkipOperator(total) {
        this.total = total;
    }
    SkipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SkipSubscriber, _super);
    function SkipSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    SkipSubscriber.prototype._next = function (x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    };
    return SkipSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=skip.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/skipLast.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export skipLast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__ = __webpack_require__("../../../../rxjs/_esm5/util/ArgumentOutOfRangeError.js");
/** PURE_IMPORTS_START .._Subscriber,.._util_ArgumentOutOfRangeError PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return function (source) { return source.lift(new SkipLastOperator(count)); };
}
var SkipLastOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SkipLastOperator(_skipCount) {
        this._skipCount = _skipCount;
        if (this._skipCount < 0) {
            throw new __WEBPACK_IMPORTED_MODULE_1__util_ArgumentOutOfRangeError__["a" /* ArgumentOutOfRangeError */];
        }
    }
    SkipLastOperator.prototype.call = function (subscriber, source) {
        if (this._skipCount === 0) {
            // If we don't want to skip any values then just subscribe
            // to Subscriber without any further logic.
            return source.subscribe(new __WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */](subscriber));
        }
        else {
            return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
        }
    };
    return SkipLastOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipLastSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SkipLastSubscriber, _super);
    function SkipLastSubscriber(destination, _skipCount) {
        _super.call(this, destination);
        this._skipCount = _skipCount;
        this._count = 0;
        this._ring = new Array(_skipCount);
    }
    SkipLastSubscriber.prototype._next = function (value) {
        var skipCount = this._skipCount;
        var count = this._count++;
        if (count < skipCount) {
            this._ring[count] = value;
        }
        else {
            var currentIndex = count % skipCount;
            var ring = this._ring;
            var oldValue = ring[currentIndex];
            ring[currentIndex] = value;
            this.destination.next(oldValue);
        }
    };
    return SkipLastSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=skipLast.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/skipUntil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export skipUntil */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return function (source) { return source.lift(new SkipUntilOperator(notifier)); };
}
var SkipUntilOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SkipUntilOperator(notifier) {
        this.notifier = notifier;
    }
    SkipUntilOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
    };
    return SkipUntilOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipUntilSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SkipUntilSubscriber, _super);
    function SkipUntilSubscriber(destination, notifier) {
        _super.call(this, destination);
        this.hasValue = false;
        this.isInnerStopped = false;
        this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, notifier));
    }
    SkipUntilSubscriber.prototype._next = function (value) {
        if (this.hasValue) {
            _super.prototype._next.call(this, value);
        }
    };
    SkipUntilSubscriber.prototype._complete = function () {
        if (this.isInnerStopped) {
            _super.prototype._complete.call(this);
        }
        else {
            this.unsubscribe();
        }
    };
    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.hasValue = true;
    };
    SkipUntilSubscriber.prototype.notifyComplete = function () {
        this.isInnerStopped = true;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    return SkipUntilSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=skipUntil.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/skipWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export skipWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - A function to test each item emitted from the source Observable.
 * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return function (source) { return source.lift(new SkipWhileOperator(predicate)); };
}
var SkipWhileOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SkipWhileOperator(predicate) {
        this.predicate = predicate;
    }
    SkipWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    };
    return SkipWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SkipWhileSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SkipWhileSubscriber, _super);
    function SkipWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.skipping = true;
        this.index = 0;
    }
    SkipWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        if (this.skipping) {
            this.tryCallPredicate(value);
        }
        if (!this.skipping) {
            destination.next(value);
        }
    };
    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
        try {
            var result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        }
        catch (err) {
            this.destination.error(err);
        }
    };
    return SkipWhileSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=skipWhile.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/switchAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export switchAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operators/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_identity__ = __webpack_require__("../../../../rxjs/_esm5/util/identity.js");
/** PURE_IMPORTS_START ._switchMap,.._util_identity PURE_IMPORTS_END */


function switchAll() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__switchMap__["a" /* switchMap */])(__WEBPACK_IMPORTED_MODULE_1__util_identity__["a" /* identity */]);
}
//# sourceMappingURL=switchAll.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/switchMapTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export switchMapTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return function (source) { return source.lift(new SwitchMapToOperator(innerObservable, resultSelector)); };
}
var SwitchMapToOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function SwitchMapToOperator(observable, resultSelector) {
        this.observable = observable;
        this.resultSelector = resultSelector;
    }
    SwitchMapToOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
    };
    return SwitchMapToOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapToSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(SwitchMapToSubscriber, _super);
    function SwitchMapToSubscriber(destination, inner, resultSelector) {
        _super.call(this, destination);
        this.inner = inner;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapToSubscriber.prototype._next = function (value) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, this.inner, value, this.index++));
    };
    SwitchMapToSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        if (resultSelector) {
            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            destination.next(innerValue);
        }
    };
    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
        var result;
        try {
            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        destination.next(result);
    };
    return SwitchMapToSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=switchMapTo.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/takeWhile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export takeWhile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/** PURE_IMPORTS_START .._Subscriber PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return function (source) { return source.lift(new TakeWhileOperator(predicate)); };
}
var TakeWhileOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TakeWhileOperator(predicate) {
        this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
    };
    return TakeWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeWhileSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.index = 0;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=takeWhile.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/throttle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultThrottleConfig; });
/* unused harmony export throttle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


var defaultThrottleConfig = {
    leading: true,
    trailing: false
};
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) {
        config = defaultThrottleConfig;
    }
    return function (source) { return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing)); };
}
var ThrottleOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc
 * @ignore
 * @extends {Ignored}
 */
var ThrottleSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        _super.call(this, destination);
        this.destination = destination;
        this.durationSelector = durationSelector;
        this._leading = _leading;
        this._trailing = _trailing;
        this._hasTrailingValue = false;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this._trailing) {
                this._hasTrailingValue = true;
                this._trailingValue = value;
            }
        }
        else {
            var duration = this.tryDurationSelector(value);
            if (duration) {
                this.add(this.throttled = Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, duration));
            }
            if (this._leading) {
                this.destination.next(value);
                if (this._trailing) {
                    this._hasTrailingValue = true;
                    this._trailingValue = value;
                }
            }
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype._unsubscribe = function () {
        var _a = this, throttled = _a.throttled, _trailingValue = _a._trailingValue, _hasTrailingValue = _a._hasTrailingValue, _trailing = _a._trailing;
        this._trailingValue = null;
        this._hasTrailingValue = false;
        if (throttled) {
            this.remove(throttled);
            this.throttled = null;
            throttled.unsubscribe();
        }
    };
    ThrottleSubscriber.prototype._sendTrailing = function () {
        var _a = this, destination = _a.destination, throttled = _a.throttled, _trailing = _a._trailing, _trailingValue = _a._trailingValue, _hasTrailingValue = _a._hasTrailingValue;
        if (throttled && _trailing && _hasTrailingValue) {
            destination.next(_trailingValue);
            this._trailingValue = null;
            this._hasTrailingValue = false;
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this._sendTrailing();
        this._unsubscribe();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this._sendTrailing();
        this._unsubscribe();
    };
    return ThrottleSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=throttle.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/throttleTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export throttleTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__throttle__ = __webpack_require__("../../../../rxjs/_esm5/operators/throttle.js");
/** PURE_IMPORTS_START .._Subscriber,.._scheduler_async,._throttle PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_async__["a" /* async */];
    }
    if (config === void 0) {
        config = __WEBPACK_IMPORTED_MODULE_2__throttle__["a" /* defaultThrottleConfig */];
    }
    return function (source) { return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
}
var ThrottleTimeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ThrottleTimeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        _super.call(this, destination);
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
        this._hasTrailingValue = false;
        this._trailingValue = null;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/timeInterval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timeInterval */
/* unused harmony export TimeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/** PURE_IMPORTS_START .._Subscriber,.._scheduler_async PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


function timeInterval(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_async__["a" /* async */];
    }
    return function (source) { return source.lift(new TimeIntervalOperator(scheduler)); };
}
var TimeInterval = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TimeInterval(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval;
}());
;
var TimeIntervalOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TimeIntervalOperator(scheduler) {
        this.scheduler = scheduler;
    }
    TimeIntervalOperator.prototype.call = function (observer, source) {
        return source.subscribe(new TimeIntervalSubscriber(observer, this.scheduler));
    };
    return TimeIntervalOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeIntervalSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TimeIntervalSubscriber, _super);
    function TimeIntervalSubscriber(destination, scheduler) {
        _super.call(this, destination);
        this.scheduler = scheduler;
        this.lastTime = 0;
        this.lastTime = scheduler.now();
    }
    TimeIntervalSubscriber.prototype._next = function (value) {
        var now = this.scheduler.now();
        var span = now - this.lastTime;
        this.lastTime = now;
        this.destination.next(new TimeInterval(value, span));
    };
    return TimeIntervalSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=timeInterval.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/timeout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timeout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isDate__ = __webpack_require__("../../../../rxjs/_esm5/util/isDate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_TimeoutError__ = __webpack_require__("../../../../rxjs/_esm5/util/TimeoutError.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isDate,.._Subscriber,.._util_TimeoutError PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * <img src="./img/timeout.png" width="100%">
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * @example <caption>Check if ticks are emitted within certain timespan</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(1100) // Let's use bigger timespan to be safe,
 *                       // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err) // Will never be called.
 * );
 *
 * seconds.timeout(900).subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err) // Will emit error before even first value is emitted,
 *                             // since it did not arrive within 900ms period.
 * );
 *
 * @example <caption>Use Date to check if Observable completed</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(new Date("December 17, 2020 03:24:00"))
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
 *                             // since Observable did not complete by then.
 * );
 *
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    var absoluteTimeout = Object(__WEBPACK_IMPORTED_MODULE_1__util_isDate__["a" /* isDate */])(due);
    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
    return function (source) { return source.lift(new TimeoutOperator(waitFor, absoluteTimeout, scheduler, new __WEBPACK_IMPORTED_MODULE_3__util_TimeoutError__["a" /* TimeoutError */]())); };
}
var TimeoutOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TimeoutOperator(waitFor, absoluteTimeout, scheduler, errorInstance) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.scheduler = scheduler;
        this.errorInstance = errorInstance;
    }
    TimeoutOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.scheduler, this.errorInstance));
    };
    return TimeoutOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TimeoutSubscriber, _super);
    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, scheduler, errorInstance) {
        _super.call(this, destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.scheduler = scheduler;
        this.errorInstance = errorInstance;
        this.action = null;
        this.scheduleTimeout();
    }
    TimeoutSubscriber.dispatchTimeout = function (subscriber) {
        subscriber.error(subscriber.errorInstance);
    };
    TimeoutSubscriber.prototype.scheduleTimeout = function () {
        var action = this.action;
        if (action) {
            // Recycle the action if we've already scheduled one. All the production
            // Scheduler Actions mutate their state/delay time and return themeselves.
            // VirtualActions are immutable, so they create and return a clone. In this
            // case, we need to set the action reference to the most recent VirtualAction,
            // to ensure that's the one we clone from next time.
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, this));
        }
    };
    TimeoutSubscriber.prototype._next = function (value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        _super.prototype._next.call(this, value);
    };
    TimeoutSubscriber.prototype._unsubscribe = function () {
        this.action = null;
        this.scheduler = null;
        this.errorInstance = null;
    };
    return TimeoutSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=timeout.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/timeoutWith.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timeoutWith */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isDate__ = __webpack_require__("../../../../rxjs/_esm5/util/isDate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._scheduler_async,.._util_isDate,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




/* tslint:enable:max-line-length */
/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * <img src="./img/timeoutWith.png" width="100%">
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * @example <caption>Add fallback observable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const minutes = Rx.Observable.interval(60 * 1000);
 *
 * seconds.timeoutWith(900, minutes)
 *     .subscribe(
 *         value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                      // since first value of `seconds` will not arrive fast enough.
 *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
 *                                 // but here will never be called.
 *     );
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return function (source) {
        var absoluteTimeout = Object(__WEBPACK_IMPORTED_MODULE_1__util_isDate__["a" /* isDate */])(due);
        var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
        return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
    };
}
var TimeoutWithOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    TimeoutWithOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TimeoutWithSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TimeoutWithSubscriber, _super);
    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        _super.call(this, destination);
        this.absoluteTimeout = absoluteTimeout;
        this.waitFor = waitFor;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
        this.action = null;
        this.scheduleTimeout();
    }
    TimeoutWithSubscriber.dispatchTimeout = function (subscriber) {
        var withObservable = subscriber.withObservable;
        subscriber._unsubscribeAndRecycle();
        subscriber.add(Object(__WEBPACK_IMPORTED_MODULE_3__util_subscribeToResult__["a" /* subscribeToResult */])(subscriber, withObservable));
    };
    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
        var action = this.action;
        if (action) {
            // Recycle the action if we've already scheduled one. All the production
            // Scheduler Actions mutate their state/delay time and return themeselves.
            // VirtualActions are immutable, so they create and return a clone. In this
            // case, we need to set the action reference to the most recent VirtualAction,
            // to ensure that's the one we clone from next time.
            this.action = action.schedule(this, this.waitFor);
        }
        else {
            this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, this));
        }
    };
    TimeoutWithSubscriber.prototype._next = function (value) {
        if (!this.absoluteTimeout) {
            this.scheduleTimeout();
        }
        _super.prototype._next.call(this, value);
    };
    TimeoutWithSubscriber.prototype._unsubscribe = function () {
        this.action = null;
        this.scheduler = null;
        this.withObservable = null;
    };
    return TimeoutWithSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=timeoutWith.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/timestamp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export timestamp */
/* unused harmony export Timestamp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/** PURE_IMPORTS_START .._scheduler_async,._map PURE_IMPORTS_END */


/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) {
        scheduler = __WEBPACK_IMPORTED_MODULE_0__scheduler_async__["a" /* async */];
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1__map__["a" /* map */])(function (value) { return new Timestamp(value, scheduler.now()); });
    // return (source: Observable<T>) => source.lift(new TimestampOperator(scheduler));
}
var Timestamp = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function Timestamp(value, timestamp) {
        this.value = value;
        this.timestamp = timestamp;
    }
    return Timestamp;
}());
;
//# sourceMappingURL=timestamp.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/toArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reduce__ = __webpack_require__("../../../../rxjs/_esm5/operators/reduce.js");
/** PURE_IMPORTS_START ._reduce PURE_IMPORTS_END */

function toArrayReducer(arr, item, index) {
    arr.push(item);
    return arr;
}
function toArray() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__reduce__["a" /* reduce */])(toArrayReducer, []);
}
//# sourceMappingURL=toArray.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/window.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export window */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return function windowOperatorFunction(source) {
        return source.lift(new WindowOperator(windowBoundaries));
    };
}
var WindowOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WindowOperator(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        var windowSubscriber = new WindowSubscriber(subscriber);
        var sourceSubscription = source.subscribe(windowSubscriber);
        if (!sourceSubscription.closed) {
            windowSubscriber.add(Object(__WEBPACK_IMPORTED_MODULE_2__util_subscribeToResult__["a" /* subscribeToResult */])(windowSubscriber, this.windowBoundaries));
        }
        return sourceSubscription;
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination) {
        _super.call(this, destination);
        this.window = new __WEBPACK_IMPORTED_MODULE_0__Subject__["Subject"]();
        destination.next(this.window);
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow();
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this._complete();
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
    };
    WindowSubscriber.prototype._unsubscribe = function () {
        this.window = null;
    };
    WindowSubscriber.prototype.openWindow = function () {
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var destination = this.destination;
        var newWindow = this.window = new __WEBPACK_IMPORTED_MODULE_0__Subject__["Subject"]();
        destination.next(newWindow);
    };
    return WindowSubscriber;
}(__WEBPACK_IMPORTED_MODULE_1__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=window.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/windowCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export windowCount */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/** PURE_IMPORTS_START .._Subscriber,.._Subject PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) {
        startWindowEvery = 0;
    }
    return function windowCountOperatorFunction(source) {
        return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
    };
}
var WindowCountOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WindowCountOperator(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowCountSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WindowCountSubscriber, _super);
    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
        this.windows = [new __WEBPACK_IMPORTED_MODULE_1__Subject__["Subject"]()];
        this.count = 0;
        destination.next(this.windows[0]);
    }
    WindowCountSubscriber.prototype._next = function (value) {
        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
        var destination = this.destination;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len && !this.closed; i++) {
            windows[i].next(value);
        }
        var c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
            windows.shift().complete();
        }
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            var window_1 = new __WEBPACK_IMPORTED_MODULE_1__Subject__["Subject"]();
            windows.push(window_1);
            destination.next(window_1);
        }
    };
    WindowCountSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().error(err);
            }
        }
        this.destination.error(err);
    };
    WindowCountSubscriber.prototype._complete = function () {
        var windows = this.windows;
        if (windows) {
            while (windows.length > 0 && !this.closed) {
                windows.shift().complete();
            }
        }
        this.destination.complete();
    };
    WindowCountSubscriber.prototype._unsubscribe = function () {
        this.count = 0;
        this.windows = null;
    };
    return WindowCountSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__Subscriber__["a" /* Subscriber */]));
//# sourceMappingURL=windowCount.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/windowTime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export windowTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scheduler_async__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/async.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_isNumeric__ = __webpack_require__("../../../../rxjs/_esm5/util/isNumeric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_isScheduler__ = __webpack_require__("../../../../rxjs/_esm5/util/isScheduler.js");
/** PURE_IMPORTS_START .._Subject,.._scheduler_async,.._Subscriber,.._util_isNumeric,.._util_isScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





function windowTime(windowTimeSpan) {
    var scheduler = __WEBPACK_IMPORTED_MODULE_1__scheduler_async__["a" /* async */];
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (Object(__WEBPACK_IMPORTED_MODULE_4__util_isScheduler__["a" /* isScheduler */])(arguments[3])) {
        scheduler = arguments[3];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_4__util_isScheduler__["a" /* isScheduler */])(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_3__util_isNumeric__["a" /* isNumeric */])(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_4__util_isScheduler__["a" /* isScheduler */])(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_3__util_isNumeric__["a" /* isNumeric */])(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return function windowTimeOperatorFunction(source) {
        return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
    };
}
var WindowTimeOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
    }
    WindowTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    };
    return WindowTimeOperator;
}());
var CountedSubject = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(CountedSubject, _super);
    function CountedSubject() {
        _super.apply(this, arguments);
        this._numberOfNextedValues = 0;
    }
    CountedSubject.prototype.next = function (value) {
        this._numberOfNextedValues++;
        _super.prototype.next.call(this, value);
    };
    Object.defineProperty(CountedSubject.prototype, "numberOfNextedValues", {
        get: function () {
            return this._numberOfNextedValues;
        },
        enumerable: true,
        configurable: true
    });
    return CountedSubject;
}(__WEBPACK_IMPORTED_MODULE_0__Subject__["Subject"]));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowTimeSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WindowTimeSubscriber, _super);
    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        _super.call(this, destination);
        this.destination = destination;
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
        this.windows = [];
        var window = this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            var closeState = { subscriber: this, window: window, context: null };
            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        }
        else {
            var timeSpanOnlyState = { subscriber: this, window: window, windowTimeSpan: windowTimeSpan };
            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
    }
    WindowTimeSubscriber.prototype._next = function (value) {
        var windows = this.windows;
        var len = windows.length;
        for (var i = 0; i < len; i++) {
            var window_1 = windows[i];
            if (!window_1.closed) {
                window_1.next(value);
                if (window_1.numberOfNextedValues >= this.maxWindowSize) {
                    this.closeWindow(window_1);
                }
            }
        }
    };
    WindowTimeSubscriber.prototype._error = function (err) {
        var windows = this.windows;
        while (windows.length > 0) {
            windows.shift().error(err);
        }
        this.destination.error(err);
    };
    WindowTimeSubscriber.prototype._complete = function () {
        var windows = this.windows;
        while (windows.length > 0) {
            var window_2 = windows.shift();
            if (!window_2.closed) {
                window_2.complete();
            }
        }
        this.destination.complete();
    };
    WindowTimeSubscriber.prototype.openWindow = function () {
        var window = new CountedSubject();
        this.windows.push(window);
        var destination = this.destination;
        destination.next(window);
        return window;
    };
    WindowTimeSubscriber.prototype.closeWindow = function (window) {
        window.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__Subscriber__["a" /* Subscriber */]));
function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
    if (window) {
        subscriber.closeWindow(window);
    }
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = { action: action, subscription: null };
    var timeSpanState = { subscriber: subscriber, window: window, context: context };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
    var subscriber = state.subscriber, window = state.window, context = state.context;
    if (context && context.action && context.subscription) {
        context.action.remove(context.subscription);
    }
    subscriber.closeWindow(window);
}
//# sourceMappingURL=windowTime.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/windowToggle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export windowToggle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Subscription__ = __webpack_require__("../../../../rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subject,.._Subscription,.._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return function (source) { return source.lift(new WindowToggleOperator(openings, closingSelector)); };
}
var WindowToggleOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WindowToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    WindowToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowToggleSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WindowToggleSubscriber, _super);
    function WindowToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(this.openSubscription = Object(__WEBPACK_IMPORTED_MODULE_5__util_subscribeToResult__["a" /* subscribeToResult */])(this, openings, openings));
    }
    WindowToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        if (contexts) {
            var len = contexts.length;
            for (var i = 0; i < len; i++) {
                contexts[i].window.next(value);
            }
        }
    };
    WindowToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.error(err);
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.complete();
                context.subscription.unsubscribe();
            }
        }
        _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber.prototype._unsubscribe = function () {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while (++index < len) {
                var context = contexts[index];
                context.window.unsubscribe();
                context.subscription.unsubscribe();
            }
        }
    };
    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            var closingSelector = this.closingSelector;
            var closingNotifier = Object(__WEBPACK_IMPORTED_MODULE_2__util_tryCatch__["a" /* tryCatch */])(closingSelector)(innerValue);
            if (closingNotifier === __WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */]) {
                return this.error(__WEBPACK_IMPORTED_MODULE_3__util_errorObject__["a" /* errorObject */].e);
            }
            else {
                var window_1 = new __WEBPACK_IMPORTED_MODULE_0__Subject__["Subject"]();
                var subscription = new __WEBPACK_IMPORTED_MODULE_1__Subscription__["a" /* Subscription */]();
                var context = { window: window_1, subscription: subscription };
                this.contexts.push(context);
                var innerSubscription = Object(__WEBPACK_IMPORTED_MODULE_5__util_subscribeToResult__["a" /* subscribeToResult */])(this, closingNotifier, context);
                if (innerSubscription.closed) {
                    this.closeWindow(this.contexts.length - 1);
                }
                else {
                    innerSubscription.context = context;
                    subscription.add(innerSubscription);
                }
                this.destination.next(window_1);
            }
        }
        else {
            this.closeWindow(this.contexts.indexOf(outerValue));
        }
    };
    WindowToggleSubscriber.prototype.notifyError = function (err) {
        this.error(err);
    };
    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
        if (inner !== this.openSubscription) {
            this.closeWindow(this.contexts.indexOf(inner.context));
        }
    };
    WindowToggleSubscriber.prototype.closeWindow = function (index) {
        if (index === -1) {
            return;
        }
        var contexts = this.contexts;
        var context = contexts[index];
        var window = context.window, subscription = context.subscription;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    };
    return WindowToggleSubscriber;
}(__WEBPACK_IMPORTED_MODULE_4__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=windowToggle.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/windowWhen.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export windowWhen */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_tryCatch__ = __webpack_require__("../../../../rxjs/_esm5/util/tryCatch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_errorObject__ = __webpack_require__("../../../../rxjs/_esm5/util/errorObject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._Subject,.._util_tryCatch,.._util_errorObject,.._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return function windowWhenOperatorFunction(source) {
        return source.lift(new WindowOperator(closingSelector));
    };
}
var WindowOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WindowOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    WindowOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WindowSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WindowSubscriber, _super);
    function WindowSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.destination = destination;
        this.closingSelector = closingSelector;
        this.openWindow();
    }
    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
        this._error(error);
    };
    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber.prototype._next = function (value) {
        this.window.next(value);
    };
    WindowSubscriber.prototype._error = function (err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype._complete = function () {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
        if (this.closingNotification) {
            this.closingNotification.unsubscribe();
        }
    };
    WindowSubscriber.prototype.openWindow = function (innerSub) {
        if (innerSub === void 0) {
            innerSub = null;
        }
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) {
            prevWindow.complete();
        }
        var window = this.window = new __WEBPACK_IMPORTED_MODULE_0__Subject__["Subject"]();
        this.destination.next(window);
        var closingNotifier = Object(__WEBPACK_IMPORTED_MODULE_1__util_tryCatch__["a" /* tryCatch */])(this.closingSelector)();
        if (closingNotifier === __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */]) {
            var err = __WEBPACK_IMPORTED_MODULE_2__util_errorObject__["a" /* errorObject */].e;
            this.destination.error(err);
            this.window.error(err);
        }
        else {
            this.add(this.closingNotification = Object(__WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__["a" /* subscribeToResult */])(this, closingNotifier));
        }
    };
    return WindowSubscriber;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=windowWhen.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/withLatestFrom.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export withLatestFrom */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/** PURE_IMPORTS_START .._OuterSubscriber,.._util_subscribeToResult PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return function (source) {
        var project;
        if (typeof args[args.length - 1] === 'function') {
            project = args.pop();
        }
        var observables = args;
        return source.lift(new WithLatestFromOperator(observables, project));
    };
}
var WithLatestFromOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function WithLatestFromOperator(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var WithLatestFromSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(WithLatestFromSubscriber, _super);
    function WithLatestFromSubscriber(destination, observables, project) {
        _super.call(this, destination);
        this.observables = observables;
        this.project = project;
        this.toRespond = [];
        var len = observables.length;
        this.values = new Array(len);
        for (var i = 0; i < len; i++) {
            this.toRespond.push(i);
        }
        for (var i = 0; i < len; i++) {
            var observable = observables[i];
            this.add(Object(__WEBPACK_IMPORTED_MODULE_1__util_subscribeToResult__["a" /* subscribeToResult */])(this, observable, observable, i));
        }
    }
    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) {
                toRespond.splice(found, 1);
            }
        }
    };
    WithLatestFromSubscriber.prototype.notifyComplete = function () {
        // noop
    };
    WithLatestFromSubscriber.prototype._next = function (value) {
        if (this.toRespond.length === 0) {
            var args = [value].concat(this.values);
            if (this.project) {
                this._tryProject(args);
            }
            else {
                this.destination.next(args);
            }
        }
    };
    WithLatestFromSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=withLatestFrom.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export zip */
/* unused harmony export zipStatic */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZipOperator; });
/* unused harmony export ZipSubscriber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable_ArrayObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ArrayObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_isArray__ = __webpack_require__("../../../../rxjs/_esm5/util/isArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Subscriber__ = __webpack_require__("../../../../rxjs/_esm5/Subscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__ = __webpack_require__("../../../../rxjs/_esm5/OuterSubscriber.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__ = __webpack_require__("../../../../rxjs/_esm5/util/subscribeToResult.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symbol_iterator__ = __webpack_require__("../../../../rxjs/_esm5/symbol/iterator.js");
/** PURE_IMPORTS_START .._observable_ArrayObservable,.._util_isArray,.._Subscriber,.._OuterSubscriber,.._util_subscribeToResult,.._symbol_iterator PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};






/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zip() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return function zipOperatorFunction(source) {
        return source.lift.call(zipStatic.apply(void 0, [source].concat(observables)));
    };
}
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each
 * of its input Observables.
 *
 * If the latest parameter is a function, this function is used to compute the created value from the input values.
 * Otherwise, an array of the input values is returned.
 *
 * @example <caption>Combine age and name from different sources</caption>
 *
 * let age$ = Observable.of<number>(27, 25, 29);
 * let name$ = Observable.of<string>('Foo', 'Bar', 'Beer');
 * let isDev$ = Observable.of<boolean>(true, true, false);
 *
 * Observable
 *     .zip(age$,
 *          name$,
 *          isDev$,
 *          (age: number, name: string, isDev: boolean) => ({ age, name, isDev }))
 *     .subscribe(x => console.log(x));
 *
 * // outputs
 * // { age: 27, name: 'Foo', isDev: true }
 * // { age: 25, name: 'Bar', isDev: true }
 * // { age: 29, name: 'Beer', isDev: false }
 *
 * @param observables
 * @return {Observable<R>}
 * @static true
 * @name zip
 * @owner Observable
 */
function zipStatic() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = observables[observables.length - 1];
    if (typeof project === 'function') {
        observables.pop();
    }
    return new __WEBPACK_IMPORTED_MODULE_0__observable_ArrayObservable__["a" /* ArrayObservable */](observables).lift(new ZipOperator(project));
}
var ZipOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function ZipOperator(project) {
        this.project = project;
    }
    ZipOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.project));
    };
    return ZipOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipSubscriber = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ZipSubscriber, _super);
    function ZipSubscriber(destination, project, values) {
        if (values === void 0) {
            values = Object.create(null);
        }
        _super.call(this, destination);
        this.iterators = [];
        this.active = 0;
        this.project = (typeof project === 'function') ? project : null;
        this.values = values;
    }
    ZipSubscriber.prototype._next = function (value) {
        var iterators = this.iterators;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__util_isArray__["a" /* isArray */])(value)) {
            iterators.push(new StaticArrayIterator(value));
        }
        else if (typeof value[__WEBPACK_IMPORTED_MODULE_5__symbol_iterator__["a" /* iterator */]] === 'function') {
            iterators.push(new StaticIterator(value[__WEBPACK_IMPORTED_MODULE_5__symbol_iterator__["a" /* iterator */]]()));
        }
        else {
            iterators.push(new ZipBufferIterator(this.destination, this, value));
        }
    };
    ZipSubscriber.prototype._complete = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                this.add(iterator.subscribe(iterator, i));
            }
            else {
                this.active--; // not an observable
            }
        }
    };
    ZipSubscriber.prototype.notifyInactive = function () {
        this.active--;
        if (this.active === 0) {
            this.destination.complete();
        }
    };
    ZipSubscriber.prototype.checkIterators = function () {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        // abort if not all of them have values
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
                return;
            }
        }
        var shouldComplete = false;
        var args = [];
        for (var i = 0; i < len; i++) {
            var iterator = iterators[i];
            var result = iterator.next();
            // check to see if it's completed now that you've gotten
            // the next value.
            if (iterator.hasCompleted()) {
                shouldComplete = true;
            }
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.project) {
            this._tryProject(args);
        }
        else {
            destination.next(args);
        }
        if (shouldComplete) {
            destination.complete();
        }
    };
    ZipSubscriber.prototype._tryProject = function (args) {
        var result;
        try {
            result = this.project.apply(this, args);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber;
}(__WEBPACK_IMPORTED_MODULE_2__Subscriber__["a" /* Subscriber */]));
var StaticIterator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function StaticIterator(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator.prototype.hasValue = function () {
        return true;
    };
    StaticIterator.prototype.next = function () {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator.prototype.hasCompleted = function () {
        var nextResult = this.nextResult;
        return nextResult && nextResult.done;
    };
    return StaticIterator;
}());
var StaticArrayIterator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function StaticArrayIterator(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator.prototype[__WEBPACK_IMPORTED_MODULE_5__symbol_iterator__["a" /* iterator */]] = function () {
        return this;
    };
    StaticArrayIterator.prototype.next = function (value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
    };
    StaticArrayIterator.prototype.hasValue = function () {
        return this.array.length > this.index;
    };
    StaticArrayIterator.prototype.hasCompleted = function () {
        return this.array.length === this.index;
    };
    return StaticArrayIterator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ZipBufferIterator = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(ZipBufferIterator, _super);
    function ZipBufferIterator(destination, parent, observable) {
        _super.call(this, destination);
        this.parent = parent;
        this.observable = observable;
        this.stillUnsubscribed = true;
        this.buffer = [];
        this.isComplete = false;
    }
    ZipBufferIterator.prototype[__WEBPACK_IMPORTED_MODULE_5__symbol_iterator__["a" /* iterator */]] = function () {
        return this;
    };
    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
    //    this is legit because `next()` will never be called by a subscription in this case.
    ZipBufferIterator.prototype.next = function () {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) {
            return { value: null, done: true };
        }
        else {
            return { value: buffer.shift(), done: false };
        }
    };
    ZipBufferIterator.prototype.hasValue = function () {
        return this.buffer.length > 0;
    };
    ZipBufferIterator.prototype.hasCompleted = function () {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator.prototype.notifyComplete = function () {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        }
        else {
            this.destination.complete();
        }
    };
    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator.prototype.subscribe = function (value, index) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__util_subscribeToResult__["a" /* subscribeToResult */])(this, this.observable, this, index);
    };
    return ZipBufferIterator;
}(__WEBPACK_IMPORTED_MODULE_3__OuterSubscriber__["a" /* OuterSubscriber */]));
//# sourceMappingURL=zip.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/operators/zipAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export zipAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zip__ = __webpack_require__("../../../../rxjs/_esm5/operators/zip.js");
/** PURE_IMPORTS_START ._zip PURE_IMPORTS_END */

function zipAll(project) {
    return function (source) { return source.lift(new __WEBPACK_IMPORTED_MODULE_0__zip__["a" /* ZipOperator */](project)); };
}
//# sourceMappingURL=zipAll.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/QueueAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncAction__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START ._AsyncAction PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var QueueAction = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(QueueAction, _super);
    function QueueAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    QueueAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        if (delay > 0) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction.prototype.execute = function (state, delay) {
        return (delay > 0 || this.closed) ?
            _super.prototype.execute.call(this, state, delay) :
            this._execute(state, delay);
    };
    QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Otherwise flush the scheduler starting with this action.
        return scheduler.flush(this);
    };
    return QueueAction;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncAction__["a" /* AsyncAction */]));
//# sourceMappingURL=QueueAction.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/QueueScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueueScheduler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START ._AsyncScheduler PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var QueueScheduler = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(QueueScheduler, _super);
    function QueueScheduler() {
        _super.apply(this, arguments);
    }
    return QueueScheduler;
}(__WEBPACK_IMPORTED_MODULE_0__AsyncScheduler__["a" /* AsyncScheduler */]));
//# sourceMappingURL=QueueScheduler.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/scheduler/queue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return queue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__QueueAction__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/QueueAction.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__QueueScheduler__ = __webpack_require__("../../../../rxjs/_esm5/scheduler/QueueScheduler.js");
/** PURE_IMPORTS_START ._QueueAction,._QueueScheduler PURE_IMPORTS_END */


/**
 *
 * Queue Scheduler
 *
 * <span class="informal">Put every next task on a queue, instead of executing it immediately</span>
 *
 * `queue` scheduler, when used with delay, behaves the same as {@link async} scheduler.
 *
 * When used without delay, it schedules given task synchronously - executes it right when
 * it is scheduled. However when called recursively, that is when inside the scheduled task,
 * another task is scheduled with queue scheduler, instead of executing immediately as well,
 * that task will be put on a queue and wait for current one to finish.
 *
 * This means that when you execute task with `queue` scheduler, you are sure it will end
 * before any other task scheduled with that scheduler will start.
 *
 * @examples <caption>Schedule recursively first, then do something</caption>
 *
 * Rx.Scheduler.queue.schedule(() => {
 *   Rx.Scheduler.queue.schedule(() => console.log('second')); // will not happen now, but will be put on a queue
 *
 *   console.log('first');
 * });
 *
 * // Logs:
 * // "first"
 * // "second"
 *
 *
 * @example <caption>Reschedule itself recursively</caption>
 *
 * Rx.Scheduler.queue.schedule(function(state) {
 *   if (state !== 0) {
 *     console.log('before', state);
 *     this.schedule(state - 1); // `this` references currently executing Action,
 *                               // which we reschedule with new state
 *     console.log('after', state);
 *   }
 * }, 0, 3);
 *
 * // In scheduler that runs recursively, you would expect:
 * // "before", 3
 * // "before", 2
 * // "before", 1
 * // "after", 1
 * // "after", 2
 * // "after", 3
 *
 * // But with queue it logs:
 * // "before", 3
 * // "after", 3
 * // "before", 2
 * // "after", 2
 * // "before", 1
 * // "after", 1
 *
 *
 * @static true
 * @name queue
 * @owner Scheduler
 */
var queue = /*@__PURE__*/ new __WEBPACK_IMPORTED_MODULE_1__QueueScheduler__["a" /* QueueScheduler */](__WEBPACK_IMPORTED_MODULE_0__QueueAction__["a" /* QueueAction */]);
//# sourceMappingURL=queue.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/util/FastMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FastMap; });
var FastMap = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function FastMap() {
        this.values = {};
    }
    FastMap.prototype.delete = function (key) {
        this.values[key] = null;
        return true;
    };
    FastMap.prototype.set = function (key, value) {
        this.values[key] = value;
        return this;
    };
    FastMap.prototype.get = function (key) {
        return this.values[key];
    };
    FastMap.prototype.forEach = function (cb, thisArg) {
        var values = this.values;
        for (var key in values) {
            if (values.hasOwnProperty(key) && values[key] !== null) {
                cb.call(thisArg, values[key], key);
            }
        }
    };
    FastMap.prototype.clear = function () {
        this.values = {};
    };
    return FastMap;
}());
//# sourceMappingURL=FastMap.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/util/Map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Map; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("../../../../rxjs/_esm5/util/root.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MapPolyfill__ = __webpack_require__("../../../../rxjs/_esm5/util/MapPolyfill.js");
/** PURE_IMPORTS_START ._root,._MapPolyfill PURE_IMPORTS_END */


var Map = __WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */].Map || /*@__PURE__*/ (function () { return __WEBPACK_IMPORTED_MODULE_1__MapPolyfill__["a" /* MapPolyfill */]; })();
//# sourceMappingURL=Map.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/util/MapPolyfill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPolyfill; });
var MapPolyfill = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function MapPolyfill() {
        this.size = 0;
        this._values = [];
        this._keys = [];
    }
    MapPolyfill.prototype.get = function (key) {
        var i = this._keys.indexOf(key);
        return i === -1 ? undefined : this._values[i];
    };
    MapPolyfill.prototype.set = function (key, value) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            this._keys.push(key);
            this._values.push(value);
            this.size++;
        }
        else {
            this._values[i] = value;
        }
        return this;
    };
    MapPolyfill.prototype.delete = function (key) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            return false;
        }
        this._values.splice(i, 1);
        this._keys.splice(i, 1);
        this.size--;
        return true;
    };
    MapPolyfill.prototype.clear = function () {
        this._keys.length = 0;
        this._values.length = 0;
        this.size = 0;
    };
    MapPolyfill.prototype.forEach = function (cb, thisArg) {
        for (var i = 0; i < this.size; i++) {
            cb.call(thisArg, this._values[i], this._keys[i]);
        }
    };
    return MapPolyfill;
}());
//# sourceMappingURL=MapPolyfill.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/util/Set.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minimalSetImpl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Set; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__("../../../../rxjs/_esm5/util/root.js");
/** PURE_IMPORTS_START ._root PURE_IMPORTS_END */

function minimalSetImpl() {
    // THIS IS NOT a full impl of Set, this is just the minimum
    // bits of functionality we need for this library.
    return (function () {
        function MinimalSet() {
            this._values = [];
        }
        MinimalSet.prototype.add = function (value) {
            if (!this.has(value)) {
                this._values.push(value);
            }
        };
        MinimalSet.prototype.has = function (value) {
            return this._values.indexOf(value) !== -1;
        };
        Object.defineProperty(MinimalSet.prototype, "size", {
            get: function () {
                return this._values.length;
            },
            enumerable: true,
            configurable: true
        });
        MinimalSet.prototype.clear = function () {
            this._values.length = 0;
        };
        return MinimalSet;
    }());
}
var Set = __WEBPACK_IMPORTED_MODULE_0__root__["a" /* root */].Set || /*@__PURE__*/ minimalSetImpl();
//# sourceMappingURL=Set.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/util/TimeoutError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeoutError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when duetime elapses.
 *
 * @see {@link timeout}
 *
 * @class TimeoutError
 */
var TimeoutError = /*@__PURE__*/ (/*@__PURE__*/ function (_super) {
    __extends(TimeoutError, _super);
    function TimeoutError() {
        var err = _super.call(this, 'Timeout has occurred');
        this.name = err.name = 'TimeoutError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return TimeoutError;
}(Error));
//# sourceMappingURL=TimeoutError.js.map 


/***/ }),

/***/ "../../../../rxjs/_esm5/util/not.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = not;
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function not(pred, thisArg) {
    function notPred() {
        return !(notPred.pred.apply(notPred.thisArg, arguments));
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}
//# sourceMappingURL=not.js.map 


/***/ })

});
//# sourceMappingURL=contracts.module.chunk.js.map