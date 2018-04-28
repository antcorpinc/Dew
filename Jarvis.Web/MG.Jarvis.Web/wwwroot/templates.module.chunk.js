webpackJsonp(["templates.module"],{

/***/ "../../../../../src/app/extranet/common/extranet-shared/services/templates/template-name-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateNameDataService; });
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


var TemplateNameDataService = (function () {
    function TemplateNameDataService() {
        this.templateNameSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.templateName = this.templateNameSource.asObservable();
    }
    TemplateNameDataService.prototype.changeTemplateName = function (templateName) {
        // console.log('At Data Servise Template name - ' + templateName );
        this.templateNameSource.next(templateName);
    };
    TemplateNameDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TemplateNameDataService);
    return TemplateNameDataService;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateUrlNotificationService; });
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


var TemplateUrlNotificationService = (function () {
    function TemplateUrlNotificationService() {
        this.urlPathSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.urlPath = this.urlPathSource.asObservable();
    }
    TemplateUrlNotificationService.prototype.changeURLRoute = function (urlpath) {
        this.urlPathSource.next(urlpath);
    };
    TemplateUrlNotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TemplateUrlNotificationService);
    return TemplateUrlNotificationService;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/allocations/allocations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/allocations/allocations.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"formSections\">\n      <h1 class=\"mainHeading mb-3\">Allocations</h1>\n          <div class=\"row pb-3\">\n            <div class=\"col-md-4\">\n              <div class=\"lightBlueContainer pb-2 pl-4 pr-4\">\n                <div class=\"row\">\n                  <div class=\"col-md-8\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Pooled Allotment\" disabled=\"true\"/>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                      <button title=\"Apply\" type=\"button\" class=\"pl-3 pr-3 btn addButton float-none\" disabled>Apply</button>\n                      <button title=\"Clear\" type=\"button\" class=\"btn btn-link pl-3 pr-3\" disabled>Clear</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <table class=\"table genericTable mt-4\">\n            <thead>\n              <tr>\n                <th class=\"requiredLabel\">Rate Category</th>\n                <th class=\"requiredLabel\">Room Type</th>\n                <th class=\"requiredLabel\">Dates</th>\n                <th class=\"requiredLabel\">Days</th>\n                <th class=\"requiredLabel\">Type</th>\n                <th class=\"requiredLabel\">Allotment</th>\n                <th>Bed Type &amp; Rates (IDR)</th>\n              </tr>\n            </thead>\n          </table>\n\n          <div class=\"row mt-5\">\n            <div class=\"col-md-12 controlButtons mb-4\">\n              <button title=\"Save\" class=\"genericButton activeButton mat-primary mat-raised-button\" (click)=\"saveAllocation()\">Save</button>\n              <button title=\"Cancel\" class=\"genericButton defaultButton mat-raised-button\" mat-raised-button (click)=\"backToList()\">Cancel</button>\n              <button class=\"genericButton activeButton mat-primary mat-raised-button float-right\" title=\"Save &amp; Continue\" (click)=\"saveAndContinueAllocation()\">Save &amp; Continue</button>\n            </div>\n          </div>\n\n  </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/allocations/allocations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllocationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
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
var AllocationsComponent = (function () {
    function AllocationsComponent(router, activatedRoute, templateUrlNotificationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.templateUrlNotificationService = templateUrlNotificationService;
        this.templateId = this.activatedRoute.parent.snapshot.params['id'];
        templateUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    AllocationsComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    AllocationsComponent.prototype.saveAllocation = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    AllocationsComponent.prototype.backToList = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    AllocationsComponent.prototype.saveAndContinueAllocation = function () {
        this.router.navigate(['/templatemgmt/template', this.templateId, edit, 'contractterms']);
    };
    AllocationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-allocations',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/allocations/allocations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/allocations/allocations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */]])
    ], AllocationsComponent);
    return AllocationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/contract-terms/contract-terms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.borderTop {\r\n    border-top: 1px solid #ebebeb;\r\n}\r\n\r\n.bookerHeader {\r\n    margin-top: -30px;\r\n}\r\n\r\n.transparent-circle {\r\n    border: 1px solid #29aae2;\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 1.25rem;\r\n    position: relative;\r\n    background: white;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n  }\r\n\r\n.transparent-circle span:before {\r\n    content: '+';\r\n    font-size: 1.9rem;\r\n    color: #29aae2;\r\n    position: absolute;\r\n    top: -7.8px;\r\n    right: 6px;\r\n  }\r\n\r\n  .transparent-circle .fa-times-thin:before {\r\n    content: '\\D7';\r\n    font-size: 1.9rem;\r\n    color: #29aae2;\r\n    position: absolute;\r\n    top: -2px;\r\n    right: 6px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/contract-terms/contract-terms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"mt-5\">\n    <h1 class=\"mainHeading pb-2\">Contract Terms</h1>\n    <form [formGroup]=\"contractTermsForm\">\n      <h2 class=\"mb-4 mt-5\">Top-up Terms &amp; Conditions</h2>\n      <div class=\"formSections pt-0 borderBottomNone\" formArrayName=\"contractTermsGroupArray\" *ngFor=\"let contractTermsGroup of contractTermsGroupArray.controls; let i=index\">\n\n        <!-- Order: 1 -->\n        <div class=\"row\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 1\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-checkbox formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n                  {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                </mat-checkbox>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n                {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 paddingLeft42px\">\n                <div class=\"row\">\n                  <div class=\"col-md-9 pr-0\">\n                    <mat-form-field class=\"disableFields\">\n                      <input matInput placeholder=\"Room Size\" type=\"text\" disabled/>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-3 pl-0\">\n                    <mat-form-field class=\"disableFields\">\n                      <mat-select placeholder=\"IDR\" disabled=\"true\">\n                        <ng-container>\n                          <mat-option>Please Select</mat-option>\n                        </ng-container>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Order: 1 -->\n\n        <!-- Order: 2 -->\n        <div class=\"row mt-2\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 2\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-checkbox formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n                  {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                </mat-checkbox>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n                {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 paddingLeft42px\">\n                <div class=row>\n                  <div class=\"col-md-6\">\n                    <mat-form-field class=\"disableFields\">\n                      <input matInput [matDatepicker]=\"startdate\" placeholder=\"Start Date\" disabled>\n                      <mat-datepicker-toggle matSuffix [for]=\"startdate\"></mat-datepicker-toggle>\n                      <mat-datepicker #startdate></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <mat-form-field class=\"disableFields\">\n                      <input matInput [matDatepicker]=\"enddate\" placeholder=\"End Date\" disabled>\n                      <mat-datepicker-toggle matSuffix [for]=\"enddate\"></mat-datepicker-toggle>\n                      <mat-datepicker #enddate></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> \n        <!-- Order: 2 -->\n\n        <!-- Order: 3 -->\n        <div class=\"row mt-2\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 3\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-checkbox formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n                  {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                </mat-checkbox>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n                {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n              </div>\n            </div>\n          </div>\n        </div> \n        <!-- Order: 3 -->\n\n        <!-- Order: 4 -->\n        <div class=\"row mt-2\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 4\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-checkbox formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n                  {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                </mat-checkbox>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n                {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 paddingLeft42px\">\n                <div class=row>\n                  <div class=\"col-md-6\">\n                    <mat-form-field class=\"disableFields\">\n                      <mat-select placeholder=\"Every\" disabled>\n                        <mat-option>Select</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> \n        <!-- Order: 4 -->\n\n        <!-- Order: 5 -->\n        <div class=\"row mt-2\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 5\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-checkbox formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n                  {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                </mat-checkbox>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n                {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 paddingLeft42px\">\n                <div class=row>\n                  <div class=\"col-md-6\">\n                    <mat-form-field class=\"disableFields\">\n                      <mat-select placeholder=\"Balance <\" disabled>\n                        <mat-option>Select</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> \n        <!-- Order: 5 -->\n\n        <!-- Order: 6 -->\n        <div class=\"row mt-2\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 6\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-checkbox formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n                  {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                </mat-checkbox>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n                {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n              </div>\n            </div>\n          </div>\n        </div> \n        <!-- Order: 6 -->\n\n        <!-- Order: 7 -->\n        <div class=\"row mt-2\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 7\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-checkbox formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n                  {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                </mat-checkbox>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n                {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 paddingLeft42px\">\n                <div class=row>\n                  <div class=\"col-md-6\">\n                    <mat-form-field class=\"disableFields\">\n                      <input matInput placeholder=\"Incentive\" disabled>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <mat-form-field class=\"disableFields\">\n                      <mat-select placeholder=\"Select\" disabled>\n                        <mat-option>Select</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> \n        <!-- Order: 7 -->\n\n        <!-- Order: 8 -->\n        <div class=\"row mt-2\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 8\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-checkbox formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n                  {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                </mat-checkbox>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n                {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n              </div>\n            </div>\n          </div>\n        </div> \n        <!-- Order: 8 -->\n\n        <!-- Order: 9 -->\n        <div class=\"row mt-2\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 9\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-checkbox formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n                  {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                </mat-checkbox>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n                {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 paddingLeft42px\">\n                <div class=row>\n                  <div class=\"col-md-6\">\n                    <mat-form-field class=\"disableFields\">\n                      <input matInput placeholder=\"Reduction\" disabled>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div> \n        <!-- Order: 9 -->\n\n        <!-- Order: 10 -->\n        <div class=\"row mt-2\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 10\">\n          <div class=\"col-md-12\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-checkbox formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n                  {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                </mat-checkbox>\n              </div>\n              <div class=\"col-md-12\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n                {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n              </div>\n            </div>\n          </div>\n        </div> \n        <!-- Order: 10 -->\n\n        <!-- Order: 11 -->\n        <div class=\"formSections borderBottomNone borderTop\"  [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 11\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-checkbox class=\"headerCheckbox\" formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n                  <h2 class=\"mb-0\">\n                    {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                  </h2>\n                </mat-checkbox>\n              </div>\n              <div class=\"col-md-12\">\n                <h2 class=\"mb-0\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n                  {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n                </h2>\n              </div> \n            </div>\n\n          <div class=\"paddingLeft30px\">\n\n            <h5 class=\"font-weight-bold mb-3 mt-4\">Incentive Target</h5>\n            <div class=\"mt-2 row lightBlueContainer position-relative ml-0 mr-0 mb-5\">\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <div class=\"col-md-3\">\n                    <mat-form-field class=\"disableFields\">\n                      <mat-select placeholder=\"Period\" disabled>\n                        <mat-option>Select</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"disableFields\">\n                          <input matInput placeholder=\"Room Nights (Range)\" disabled=\"true\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"disableFields\">\n                          <input matInput placeholder=\"To\" disabled=\"true\">\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"disableFields\">\n                          <input matInput placeholder=\"Incentive Type\" disabled=\"true\">\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"disableFields\">\n                          <input matInput placeholder=\"IDR\" disabled=\"true\">\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-1 alignItemCenter\">\n                    <span class=\"btn transparent-circle mr-2 disableFields\" title=\"Delete\" disabled><span></span></span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <h5 class=\"font-weight-bold mb-3\">Hotel</h5>\n            <div class=\"mt-2 row lightBlueContainer position-relative ml-0 mr-0\">\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"disableFields\">\n                      <input matInput placeholder=\"Scheme\" disabled=\"true\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"disableFields\">\n                      <mat-select placeholder=\"Incentive Period\" disabled>\n                        <mat-option>Select</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=row>\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"disableFields\">\n                          <input matInput [matDatepicker]=\"IncentiveValidityFrom\" placeholder=\"Incentive Validity From\" disabled>\n                          <mat-datepicker-toggle matSuffix [for]=\"IncentiveValidityFrom\"></mat-datepicker-toggle>\n                          <mat-datepicker #IncentiveValidityFrom></mat-datepicker>\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"disableFields\">\n                          <input matInput [matDatepicker]=\"IncentiveValidityFromTo\" placeholder=\"Incentive Validity To\" disabled>\n                          <mat-datepicker-toggle matSuffix [for]=\"IncentiveValidityFromTo\"></mat-datepicker-toggle>\n                          <mat-datepicker #IncentiveValidityFromTo></mat-datepicker>\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <p>Incentive is accumulative and will be claimed</p>\n                    <mat-form-field class=\"disableFields\">\n                      <mat-select placeholder=\"Select Basis\" disabled>\n                        <mat-option>Select</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <p>Balance of unclaimed rooms will be carried forward to the following</p>\n                    <mat-form-field class=\"disableFields\">\n                      <mat-select placeholder=\"Select Basis\" disabled>\n                        <mat-option>Select</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Order: 11 -->\n\n        <!-- Order: 12 -->\n        <div class=\"row bookerHeader\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 12\">\n          <div class=\"col-md-12\">\n            <mat-checkbox class=\"headerCheckbox\" formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n              <h5 class=\"font-weight-bold mb-0\">\n                {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n              </h5>\n            </mat-checkbox>\n          </div> \n          <div class=\"col-md-12\">\n            <h5 class=\"font-weight-bold mb-0\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n              {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n            </h5>\n          </div>  \n          <div class=\"paddingLeft42px col-md-12\">\n            <div class=\"mt-2 row lightBlueContainer position-relative ml-0 mr-0\">\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <div class=\"col-md-4\">\n                    <mat-form-field class=\"disableFields\">\n                      <input matInput placeholder=\"Scheme IDR\" disabled=\"true\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=row>\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"disableFields\">\n                          <input matInput [matDatepicker]=\"from\" placeholder=\"Incentive Validity From\" disabled>\n                          <mat-datepicker-toggle matSuffix [for]=\"from\"></mat-datepicker-toggle>\n                          <mat-datepicker #from></mat-datepicker>\n                        </mat-form-field>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <mat-form-field class=\"disableFields\">\n                          <input matInput [matDatepicker]=\"to\" placeholder=\"Incentive Validity To\" disabled>\n                          <mat-datepicker-toggle matSuffix [for]=\"to\"></mat-datepicker-toggle>\n                          <mat-datepicker #to></mat-datepicker>\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-md-2\">\n                    <mat-checkbox class=\"disableFields\" disabled>Deduct Net Rates</mat-checkbox>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <mat-checkbox class=\"disableFields\" disabled>Claim to Hotel</mat-checkbox>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <!-- Order: 12 -->\n\n        <!-- Order: 13 -->\n        <div class=\"formSections pb-0 borderBottomNone borderTop\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 13\">\n          <mat-checkbox class=\"headerCheckbox\" formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n            <h2 class=\"mb-0\">\n              {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n            </h2>\n          </mat-checkbox>\n          <h2 class=\"mb-0\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n            {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n          </h2>\n        </div> \n        <!-- Order: 13 -->\n\n        <!-- Order: 14 -->\n        <div class=\"formSections pb-0 borderBottomNone borderTop\" [formGroupName]=\"i\" *ngIf=\"(contractTermsGroupArray.controls[i].get('order').value) === 14\">\n          <mat-checkbox class=\"headerCheckbox\" formControlName=\"isSelected\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === true\">\n            <h2 class=\"mb-0\">\n              {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n            </h2>\n          </mat-checkbox>\n          <h2 class=\"mb-0\" *ngIf=\"(contractTermsGroupArray.controls[i].get('isConfigurable').value) === false\">\n            {{contractTermsGroupArray.controls[i].get(\"description\").value}}\n          </h2>\n          <div class=\"row\">\n            <mat-form-field class=\"disableFields col-md-11\">\n              <textarea rows=\"5\" cols=\"200\" matInput disabled></textarea>\n            </mat-form-field>\n            <div class=\"col-md-1 alignItemCenter\">\n              <span class=\"btn transparent-circle mr-2 disableFields\" disabled><span></span></span>\n            </div>\n          </div>\n        </div> \n        <!-- Order: 14 -->\n\n      </div>\n\n      <div class=\"col-md-12 controlButtons mb-4 borderTopDark pt-5\">\n        <button class=\"genericButton activeButton mat-primary mat-raised-button\" title=\"Save\" (click)=\"saveContractTerms()\">Save</button>\n        <button class=\"genericButton defaultButton mat-raised-button\" mat-raised-button title=\"Cancel\" (click)=\"backToList()\">Cancel</button>\n        <button class=\"genericButton activeButton mat-primary mat-raised-button float-right\" title=\"Save & Publish\" (click)=\"saveAndPublishContractTerms()\">Save & Publish</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/contract-terms/contract-terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractTermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_enums__ = __webpack_require__("../../../../../src/app/common/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_extranet_shared_services_templates_contract_terms_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/contract-terms-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var duration = __WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration;
var ContractTermsComponent = (function () {
    // templateHotelInfoViewModel: TemplateHotelInfoViewModel;
    function ContractTermsComponent(router, activatedRoute, snackBar, contractTermsDataService, templateUrlNotificationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.contractTermsDataService = contractTermsDataService;
        this.templateUrlNotificationService = templateUrlNotificationService;
        this.templateId = this.activatedRoute.parent.snapshot.params['id'];
        this.templateHotelInfoViewModel = this.activatedRoute.snapshot.data['hotelFieldData'];
        templateUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    ContractTermsComponent.prototype.ngOnInit = function () {
        this.getContractTerms();
    };
    ContractTermsComponent.prototype.getContractTerms = function () {
        this.contractTermsList = this.activatedRoute.snapshot.data['contractTermsData'];
        this.contractTermsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            contractTermsGroupArray: this.buildContractTermsGroupsForm(this.contractTermsList)
        });
    };
    Object.defineProperty(ContractTermsComponent.prototype, "contractTermsGroupArray", {
        get: function () {
            return this.contractTermsForm.get('contractTermsGroupArray');
        },
        enumerable: true,
        configurable: true
    });
    ContractTermsComponent.prototype.buildContractTermsGroupsForm = function (contractTermsGroups) {
        var groupFormGroup;
        var groupFormArray;
        contractTermsGroups.forEach(function (contractTermsGroup) {
            groupFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
                clauseLibraryId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](contractTermsGroup.clauseLibraryId),
                description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](contractTermsGroup.description),
                isConfigurable: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](contractTermsGroup.isConfigurable),
                isSelected: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](contractTermsGroup.isSelected),
                name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](contractTermsGroup.name),
                order: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](contractTermsGroup.order),
                status: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](contractTermsGroup.status)
            });
            if (groupFormArray === null || groupFormArray === undefined) {
                groupFormArray = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"]([groupFormGroup]);
            }
            else {
                groupFormArray.push(groupFormGroup);
            }
        });
        return groupFormArray;
    };
    ContractTermsComponent.prototype.saveContractTerms = function () {
        var _this = this;
        this.saveContractTermsList = Object.assign([], this.contractTermsList, this.contractTermsForm.value.contractTermsGroupArray);
        this.contractTermList = {
            id: this.templateId,
            name: this.templateHotelInfoViewModel.name,
            clauseLibraryFields: this.saveContractTermsList,
            isPublished: this.templateHotelInfoViewModel.isPublished === true ? true : false,
            objectState: __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged
        };
        this.updateObjectState();
        this.contractTermsDataService.addContractTerms(this.contractTermList)
            .subscribe(function (data) {
            _this.router.navigate(['/templatemgmt/templates']);
            _this.snackBar.open('Contract Terms Template Saved Successfully', '', { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
            window.scrollTo(0, 0);
        });
    };
    ContractTermsComponent.prototype.saveAndPublishContractTerms = function () {
        var _this = this;
        this.saveContractTermsList = Object.assign([], this.contractTermsList, this.contractTermsForm.value.contractTermsGroupArray);
        this.contractTermList = {
            id: this.templateId,
            name: this.templateHotelInfoViewModel.name,
            clauseLibraryFields: this.saveContractTermsList,
            isPublished: true,
            objectState: this.templateHotelInfoViewModel.isPublished === false ? __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified : __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged
        };
        this.updateObjectState();
        this.contractTermsDataService.addContractTerms(this.contractTermList)
            .subscribe(function (data) {
            _this.router.navigate(['/templatemgmt/templates']);
            _this.snackBar.open('Contract Terms Template Saved Successfully', '', { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
            window.scrollTo(0, 0);
        });
    };
    ContractTermsComponent.prototype.updateObjectState = function () {
        var _this = this;
        this.saveContractTermsList.forEach(function (contractTerm, contractTermIndex) {
            if (contractTerm.status === 0) {
                if (contractTerm.isSelected === true) {
                    contractTerm.objectState = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    contractTerm.objectState = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
                }
            }
            else {
                if (contractTerm.isSelected !== _this.checkOriginalObjectState(contractTermIndex)) {
                    contractTerm.objectState = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified;
                }
                else {
                    contractTerm.objectState = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
                }
            }
        });
    };
    ContractTermsComponent.prototype.checkOriginalObjectState = function (contractTermIndex) {
        return this.contractTermsList[contractTermIndex].isSelected;
    };
    ContractTermsComponent.prototype.backToList = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    ContractTermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contract-terms',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/contract-terms/contract-terms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/contract-terms/contract-terms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__common_extranet_shared_services_templates_contract_terms_data_service__["a" /* ContractTermsDataService */],
            __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */]])
    ], ContractTermsComponent);
    return ContractTermsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/facilities-services/facilities-services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkBoxList {\r\n    padding-left: 120px !important;\r\n}\r\n\r\n.iconHeading mat-checkbox {\r\n    top: -4px;\r\n}\r\n\r\nh5 {\r\n    font-family: 'maven_promedium';\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/facilities-services/facilities-services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"mt-5\">\n    <h1 class=\"mainHeading mb-1\">Facilities and Services</h1>\n    <form [formGroup]=\"facilitiesForm\">\n      <div class=\"formSections pt-4 pb-0 borderBottomNone\" formArrayName=\"facilitiesGroupArray\" *ngFor=\"let facilityGroup of facilitiesGroupArray.controls; let i=index\">\n\n      <!-- Internet -->\n        <div  [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === internetGroupId\">\n          <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n            <mat-expansion-panel-header class=\"panelHeader\">\n              <mat-panel-title>\n                <div class=\"row iconHeading\">\n                  <div class=\"col-md-1 pr-0 iconHolder\">\n                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/internetIcon.png\">\n                  </div>\n                  <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                        <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                        <h2 class=\"checkAll\">\n                          {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                        </h2>\n                    </div>\n                  </div>\n                </div>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n            <div class=\"row customeRow mt-4 pb-2\">\n              <div class=\"col-md-12\">\n                <div class=\"row mt-2\">\n                  <div class=\"col-md-12 checkBoxList optionsList\">\n                    <div class=\"row customeRow\">\n                      <div class=\"col-md-4 col-lg-3\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n                        <div [formGroupName]=\"j\" attr.for=\"{{ 'facilityTypeId' + j }}\">\n                        <mat-form-field class=\"disableFields\">\n                          <mat-select placeholder=\"{{(facilityType.get('facilityTypeName').value)}}\" disabled>\n                          </mat-select>\n                        </mat-form-field>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </mat-expansion-panel>\n        </div>\n      <!-- Internet Ends -->\n\n      <!-- Parking -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === parkingGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/parking.png\">\n                </div>\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                  <div class=\"inlineColumn elementSelection\">\n                    <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                  </div>\n                  <div class=\"inlineColumn\">\n                    <h2 class=\"checkAll\">\n                      {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                    </h2>\n                  </div>\n                </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row customeRow mt-4 pb-2\">\n            <div class=\"col-md-12\">\n              <div class=\"row\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n                <div class=\"col-md-12 checkBoxList optionsList\">\n                  <div class=\"row customeRow\">\n                    <div class=\"form-group col-md-4 col-lg-3\" [formGroupName]=\"j\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeId').value) != 6\">\n                      <mat-form-field class=\"disableFields\">\n                        <mat-select placeholder=\"{{(facilityType.get('facilityTypeName').value)}}\" disabled>\n                        </mat-select>\n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-md-12\" [formGroupName]=\"j\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeId').value) === 6\">\n                      <p class=\"mt-0 optionsTxt semiboldText\">{{(facilityType.get('facilityTypeName').value)}}</p>\n                      <div class=\"row\">\n                        <div class=\"col-md-4 col-lg-3\">\n                          <div class=\"form-group mb-3\">\n                            All\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                          <div class=\"form-group mb-3\" [formGroupName]=\"k\" attr.for=\"{{ 'facilityTypeId' + k }}\">\n                            {{facility.get(\"name\").value}}\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Parking Ends -->\n\n      <!-- Pets -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === petsGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n              <mat-panel-title>\n                <div class=\"row iconHeading\">\n                  <div class=\"col-md-1 pr-0 iconHolder\">\n                    <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/petsIcon.png\">\n                  </div>\n                  <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                      <h2 class=\"checkAll\">\n                          {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                        </h2>\n                    </div>\n                  </div>\n                </div>\n              </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row customeRow mt-4 pb-2\">\n            <div class=\"col-md-12\">\n              <div class=\"row mt-2\">\n                <div class=\"col-md-12 checkBoxList optionsList\">\n                  <div class=\"row customeRow\">\n                    <div class=\"col-md-4 col-lg-3\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n                      <div [formGroupName]=\"j\" attr.for=\"{{ 'facilityTypeId' + j }}\">\n                        <mat-form-field class=\"disableFields\">\n                          <mat-select placeholder=\"{{(facilityType.get('facilityTypeName').value)}}\" disabled>\n                          </mat-select>\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Pets ends -->\n\n      <!-- Languages -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === languagesGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/langaugeIcon.png\">\n                </div>\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                  <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                  </div>\n                  <div class=\"inlineColumn\">\n                    <h2 class=\"checkAll\">\n                      {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                    </h2>\n                    <h2 class=\"checkAll\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === false\">\n                      {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                    </h2>\n                  </div>\n                </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row customeRow mt-4 pb-2\">\n            <div class=\"col-md-12\">\n              <div class=\"row\">\n                <div class=\"col-md-12 checkBoxList optionsList\">\n                  <div class=\"row customeRow\">\n                    <div class=\"col-md-4 col-lg-3\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n                      <div [formGroupName]=\"j\" attr.for=\"{{ 'facilityTypeId' + j }}\">\n                        <mat-form-field class=\"disableFields\">\n                          <mat-select multiple placeholder=\"Languages\" disabled>\n                          </mat-select>\n                        </mat-form-field>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Languages ends -->\n\n      <!-- Activities -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === activitiesGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/activityIcon.png\">\n                </div>\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                  <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                  </div>\n                  <div class=\"inlineColumn\">\n                        <h2 class=\"checkAll\">\n                          {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                        </h2>\n                  </div>\n                </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row mt-4 pt-1\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n            <div class=\"col-md-12 checkBoxList optionsList\" [formGroupName]=\"j\">\n              <h5 class=\"pl-0 h5 semiboldText mb-3\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\n                {{(facilityType.get('facilityTypeName').value)}}\n              </h5>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group mb-3\">\n                    All\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                  <div class=\"form-group mb-3\" [formGroupName]=\"k\">\n                    {{facility.get(\"name\").value}}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Activities ends -->\n\n      <!-- Food and Drinks -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === foodAndDrinkGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/foodsanddrinkIcon.png\">\n                </div>\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                  <div class=\"inlineColumn elementSelection\">\n                    <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\">\n                    </mat-checkbox>\n                  </div>\n                  <div class=\"inlineColumn\">\n                    <h2 class=\"checkAll\">\n                      {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                    </h2>\n                  </div>\n                </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row mt-4 pt-1\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n            <div class=\"col-md-12 checkBoxList optionsList\" [formGroupName]=\"j\">\n              <h5 class=\"pl-0 h5 semiboldText mb-3\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\n                {{(facilityType.get('facilityTypeName').value)}}\n              </h5>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group mb-3\">\n                    All\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                  <div class=\"form-group mb-3\" [formGroupName]=\"k\">\n                    {{facility.get(\"name\").value}}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Food and Drinks ends -->\n\n      <!-- Pool and Wellness -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === poolAndWellnessGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/poolIcon.png\">\n                </div>\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                  <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                  </div>\n                  <div class=\"inlineColumn\">\n                          <h2 class=\"checkAll\">\n                            {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                          </h2>\n                  </div>\n                 \n                </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row mt-4 pt-1\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n            <div class=\"col-md-12 checkBoxList optionsList\" [formGroupName]=\"j\">\n              <h5 class=\"pl-0 h5 semiboldText mb-3\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\n                {{(facilityType.get('facilityTypeName').value)}}\n              </h5>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group mb-3\">\n                    All\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                  <div class=\"form-group mb-3\" [formGroupName]=\"k\">\n                    {{facility.get(\"name\").value}}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Pool and Wellness ends -->\n\n      <!-- Reception Services -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === receptionServicesGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/receptionIcon.png\">\n                </div>\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                  <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                  </div>\n                  <div class=\"inlineColumn\">\n                          <h2 class=\"checkAll\">\n                            {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                          </h2>\n                  </div>\n                  \n                </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row mt-4 pt-1\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n            <div class=\"col-md-12 checkBoxList optionsList\" [formGroupName]=\"j\">\n              <h5 class=\"pl-0 h5 semiboldText mb-3\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\n                {{(facilityType.get('facilityTypeName').value)}}\n              </h5>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group mb-3\">\n                    All\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                  <div class=\"form-group mb-3\" [formGroupName]=\"k\">\n                    {{facility.get(\"name\").value}}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Reception Services ends -->\n\n      <!-- Transport -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === transportGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/transportIcon.png\">\n                </div>\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                        <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"> </mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                            <h2 class=\"checkAll\">\n                              {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                            </h2>\n                    </div>\n                    \n                  </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row mt-4 pt-1\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n            <div class=\"col-md-12 checkBoxList optionsList\" [formGroupName]=\"j\">\n              <h5 class=\"pl-0 h5 semiboldText mb-3\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\n                {{(facilityType.get('facilityTypeName').value)}}\n              </h5>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group mb-3\">\n                    All\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                  <div class=\"form-group mb-3\" [formGroupName]=\"k\">\n                    {{facility.get(\"name\").value}}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Transport Ends -->\n\n      <!-- Common Areas -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === commonAreasGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/commonareaIcon.png\">\n                </div>\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                        <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                            <h2 class=\"checkAll\">\n                              {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                            </h2>\n                    </div>\n                    \n                  </div>\n\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row mt-4 pt-1\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n            <div class=\"col-md-12 checkBoxList optionsList\" [formGroupName]=\"j\">\n              <h5 class=\"pl-0 h5 semiboldText mb-3\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\n                {{(facilityType.get('facilityTypeName').value)}}\n              </h5>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group mb-3\">\n                    All\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                  <div class=\"form-group mb-3\" [formGroupName]=\"k\">\n                    {{facility.get(\"name\").value}}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Common Areas Ends -->\n\n      <!-- Entertainment and Family Services -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === entertainmentGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/entertainmentIcon.png\">\n                </div>\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                        <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                            <h2 class=\"checkAll\">\n                              {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                            </h2>\n                    </div>\n                    \n                  </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row mt-4 pt-1\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n            <div class=\"col-md-12 checkBoxList optionsList\" [formGroupName]=\"j\">\n              <h5 class=\"pl-0 h5 semiboldText mb-3\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\n                {{(facilityType.get('facilityTypeName').value)}}\n              </h5>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group mb-3\">\n                    All\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                  <div class=\"form-group mb-3\" [formGroupName]=\"k\">\n                    {{facility.get(\"name\").value}}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Entertainment and Family Services ends -->\n\n      <!-- Cleaning Services -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === cleaningGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/cleanIcon.png\">\n                </div>\n\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                        <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                            <h2 class=\"checkAll\">\n                              {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                            </h2>\n                    </div>\n                    \n                  </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row mt-4 pt-1\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n            <div class=\"col-md-12 checkBoxList optionsList\" [formGroupName]=\"j\">\n              <h5 class=\"pl-0 h5 semiboldText mb-3\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\n                {{(facilityType.get('facilityTypeName').value)}}\n              </h5>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group mb-3\">\n                    All\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                  <div class=\"form-group mb-3\" [formGroupName]=\"k\">\n                    {{facility.get(\"name\").value}}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Cleaning Services ends -->\n\n      <!-- Business Facilities -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === businessGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/buisnessIcon.png\">\n                </div>\n\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                        <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                            <h2 class=\"checkAll\">\n                              {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                            </h2>\n                    </div>\n                    \n                  </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row mt-4 pt-1\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n            <div class=\"col-md-12 checkBoxList optionsList\" [formGroupName]=\"j\">\n              <h5 class=\"pl-0 h5 semiboldText mb-3\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\n                {{(facilityType.get('facilityTypeName').value)}}\n              </h5>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group mb-3\">\n                    All\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                  <div class=\"form-group mb-3\" [formGroupName]=\"k\">\n                    {{facility.get(\"name\").value}}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Business Facilities ends -->\n\n      <!-- Shops -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === shopsGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/shopIcon.png\">\n                </div>\n\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                        <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                            <h2 class=\"checkAll\">\n                              {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                            </h2>\n                    </div>\n                    \n                  </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row mt-4 pt-1\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n            <div class=\"col-md-12 checkBoxList optionsList\" [formGroupName]=\"j\">\n              <h5 class=\"pl-0 h5 semiboldText mb-3\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\n                {{(facilityType.get('facilityTypeName').value)}}\n              </h5>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group mb-3\">\n                    All\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                  <div class=\"form-group mb-3\" [formGroupName]=\"k\">\n                    {{facility.get(\"name\").value}}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Shops ends -->\n\n      <!-- Miscellaneous -->\n      <div [formGroupName]=\"i\" *ngIf=\"(facilitiesGroupArray.controls[i].get('facilityGroupId').value) === miscellaneousGroupId\">\n        <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n          <mat-expansion-panel-header class=\"panelHeader\">\n            <mat-panel-title>\n              <div class=\"row iconHeading\">\n                <div class=\"col-md-1 pr-0 iconHolder\">\n                  <img alt=\"\" src=\"assets/FacilitiesandServicesIcon/misllaniousIcon.png\">\n                </div>\n\n                <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(facilitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                            <h2 class=\"checkAll\">\n                              {{facilitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                            </h2>\n                    </div>\n                    \n                  </div>\n              </div>\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div class=\"row mt-4 pt-1\" formArrayName=\"hotelFacilityTypes\" *ngFor=\"let facilityType of getTypeArrayForGroup(i).controls; let j=index\">\n            <div class=\"col-md-12 checkBoxList optionsList\" [formGroupName]=\"j\">\n              <h5 class=\"pl-0 h5 semiboldText mb-3\" attr.for=\"{{ 'facilityTypeId' + j }}\" *ngIf=\"(facilityType.get('facilityTypeName').value) != null\">\n                {{(facilityType.get('facilityTypeName').value)}}\n              </h5>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group mb-3\">\n                    All\n                  </div>\n                </div>\n              </div>\n              <div class=\"row mt-2 \">\n                <div class=\"col-md-4 col-lg-3\" formArrayName=\"facilityList\" *ngFor=\"let facility of getFacilityArrayForGroupAndType(i,j).controls; let k=index\">\n                  <div class=\"form-group mb-3\" [formGroupName]=\"k\">\n                    {{facility.get(\"name\").value}}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mat-expansion-panel>\n      </div>\n      <!-- Miscellaneous ends -->\n\n      </div>\n      <div class=\"controlButtons mb-4 borderTopDark pt-5 mt-2\">\n        <button title=\"Save\" class=\"genericButton activeButton mat-primary mat-raised-button\" (click)=\"saveFacilities()\">Save</button>\n        <button title=\"Cancel\" type=\"reset\" class=\"genericButton defaultButton mat-raised-button\" mat-raised-button (click)=\"backToList()\">Cancel</button>\n        <button title=\"Continue\" class=\"genericButton activeButton mat-primary mat-raised-button float-right\" (click)=\"saveAndContinueFacilities()\">Save &amp; Continue</button>\n      </div>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/facilities-services/facilities-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilitiesServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__("../../../../../src/app/extranet/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_templates_template_facilities_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-facilities-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_enums__ = __webpack_require__("../../../../../src/app/common/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var facilities = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* EXTRANETCONSTANTS */].facilities;
var read = __WEBPACK_IMPORTED_MODULE_6__common_constants__["a" /* CONSTANTS */].operation.read;
var edit = __WEBPACK_IMPORTED_MODULE_6__common_constants__["a" /* CONSTANTS */].operation.edit;
var create = __WEBPACK_IMPORTED_MODULE_6__common_constants__["a" /* CONSTANTS */].operation.create;
var duration = __WEBPACK_IMPORTED_MODULE_6__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration;
var FacilitiesServicesComponent = (function () {
    function FacilitiesServicesComponent(route, templateFacilitiesDataService, snackBar, router, templateUrlNotificationService) {
        this.route = route;
        this.templateFacilitiesDataService = templateFacilitiesDataService;
        this.snackBar = snackBar;
        this.router = router;
        this.templateUrlNotificationService = templateUrlNotificationService;
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
        this.templateId = this.route.parent.snapshot.params['id'];
        templateUrlNotificationService.changeURLRoute(route.snapshot.url[0].path);
    }
    FacilitiesServicesComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.getTemplateFacilitiesServices();
    };
    FacilitiesServicesComponent.prototype.getTemplateFacilitiesServices = function () {
        this.templateFacilityGroupList = this.route.snapshot.data['facilityData'];
        this.facilitiesForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            facilitiesGroupArray: this.buildFacilityGroupsForm(this.templateFacilityGroupList)
        });
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
            groupFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
                facilityGroupId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facilityGroup.facilityGroupId),
                facilityGroupName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facilityGroup.facilityGroupName),
                hotelFacilityTypes: _this.buildFacilityTypesForm(facilityGroup),
                isConfigurable: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facilityGroup.isConfigurable),
                isSelected: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facilityGroup.isSelected),
                id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facilityGroup.id),
                status: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facilityGroup.status)
            });
            if (groupFormArray === null || groupFormArray === undefined) {
                groupFormArray = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"]([groupFormGroup]);
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
            typeFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
                facilityTypeId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facilityType.facilityTypeId),
                facilityGroupId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facilityType.facilityGroupId),
                facilityTypeName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facilityType.facilityTypeName),
                facilityList: _this.buildFacilitiesForm(facilityType)
            });
            if (typeFormArray === null || typeFormArray === undefined) {
                typeFormArray = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"]([typeFormGroup]);
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
            facilityFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
                facilityRelationId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facility.facilityRelationId),
                id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facility.id),
                name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facility.name),
                facilityTypeId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facility.facilityTypeId),
                facilityGroupId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facility.facilityGroupId),
                isSelected: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](facility.isSelected)
            });
            if (facilityFormArray === null || facilityFormArray === undefined) {
                facilityFormArray = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormArray"]([facilityFormGroup]);
            }
            else {
                facilityFormArray.push(facilityFormGroup);
            }
        });
        return facilityFormArray;
    };
    FacilitiesServicesComponent.prototype.saveFacilities = function () {
        var _this = this;
        this.templateFacilitiesList = Object.assign([], this.templateFacilityGroupList, this.facilitiesForm.value.facilitiesGroupArray);
        this.updateObjectState();
        this.templateFacilitiesDataService.addFacilities(this.templateFacilitiesList, this.templateId)
            .subscribe(function (data) {
            _this.router.navigate(['/templatemgmt/templates']);
            _this.snackBar.open('Facilities & Services Template Saved Successfully', '', { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
            window.scrollTo(0, 0);
        });
    };
    FacilitiesServicesComponent.prototype.saveAndContinueFacilities = function () {
        var _this = this;
        this.templateFacilitiesList = Object.assign([], this.templateFacilityGroupList, this.facilitiesForm.value.facilitiesGroupArray);
        this.updateObjectState();
        this.templateFacilitiesDataService.addFacilities(this.templateFacilitiesList, this.templateId)
            .subscribe(function (data) {
            _this.router.navigate(['/templatemgmt/template', _this.templateId, edit, 'roomtype']);
            _this.snackBar.open('Facilities & Services Template Saved Successfully', '', { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
            window.scrollTo(0, 0);
        });
    };
    FacilitiesServicesComponent.prototype.updateObjectState = function () {
        var _this = this;
        this.templateFacilitiesList.forEach(function (facilityGroup, facilityGroupIndex) {
            if (facilityGroup.status === 0) {
                if (facilityGroup.isSelected === true) {
                    facilityGroup.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    facilityGroup.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Unchanged;
                }
            }
            else {
                if (facilityGroup.isSelected !== _this.checkOriginalObjectState(facilityGroupIndex)) {
                    facilityGroup.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Modified;
                }
                else {
                    facilityGroup.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Unchanged;
                }
            }
        });
    };
    FacilitiesServicesComponent.prototype.checkOriginalObjectState = function (facilityGroupIndex) {
        return this.templateFacilityGroupList[facilityGroupIndex].isSelected;
    };
    FacilitiesServicesComponent.prototype.backToList = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    FacilitiesServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-facilities-services',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/facilities-services/facilities-services.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/facilities-services/facilities-services.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_templates_template_facilities_data_service__["a" /* TemplateFacilitiesDataService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_7__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */]])
    ], FacilitiesServicesComponent);
    return FacilitiesServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/hotel-details/hotel-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group {\r\n  display: inline-block;\r\n}\r\n\r\n.amt {\r\n  width: 50%;\r\n  display: inline-block;\r\n}\r\n\r\n.buttons {\r\n  float: right;\r\n  margin-bottom: 15px;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n}\r\n\r\n.clear {\r\n  clear: both;\r\n  overflow: hidden;\r\n  height: 0;\r\n}\r\n\r\n.hotelStatus {\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n.hotelStatus {\r\n  margin-bottom: 0;\r\n  margin-left: 10px;\r\n}\r\n\r\n  .hotelStatus .form-check.form-check-inline {\r\n    margin: 0;\r\n  }\r\n\r\n  .hotelStatus .custom-control-description {\r\n    line-height: 1.7;\r\n    margin-bottom: 0;\r\n    font-weight: normal;\r\n  }\r\n\r\n.mapLocator {\r\n  position: relative;\r\n}\r\n\r\n  .mapLocator .input-group-addon {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 2px;\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    padding: 0;\r\n  }\r\n\r\n  .mapLocator .input-group-addon button{\r\n    background: none;\r\n    border: none;\r\n  }\r\n\r\n    .mapLocator .input-group-addon .fa {\r\n      color: #29aae2;\r\n      font-size: 1.2rem;\r\n    }\r\n\r\n  .mapLocator .form-control {\r\n    padding-right: 34px;\r\n  }\r\n\r\n/* .custom-select {\r\n  background: url(../../../../../../assets/selectDropDown.png) no-repeat right .75rem center !important;\r\n} */\r\n\r\n\r\n.LeftnavSection {\r\n  width: 23%;\r\n  margin-right: 40px;\r\n}\r\n\r\n.LeftnavSection {\r\n  width: 77%;\r\n}\r\n\r\n /* .ng-valid[required], .ng-valid.required {\r\n  border-left: 5px solid #42A948;\r\n}\r\n\r\n.ng-invalid:not(form) {\r\n  border-left: 5px solid #a94442;\r\n}  */\r\n\r\n/*\r\ninput:invalid {\r\n  border-left: 5px solid #a94442;\r\n}  */\r\n\r\n/* .container-fluid.bodyContainer {\r\n  overflow: scroll;\r\n  width: 100%;\r\n  height: 100%;\r\n} */\r\n\r\n.table td, .table th {\r\n  vertical-align: middle;\r\n}\r\n\r\n.table th {\r\n  border-bottom: 0;\r\n}\r\n\r\n.typeLabel {\r\n  font-size: 0.875rem;\r\n  color: #666;\r\n}\r\n\r\n.taxtesTypeTh {\r\n  width: 16.7%;\r\n}\r\n\r\n.taxtesRoomTh {\r\n  width: 21.0%;\r\n}\r\n\r\n.taxtesAmountTh {\r\n  width: 10.5%;\r\n}\r\n\r\n.taxtesRatesTh {\r\n  width: 10.5%;\r\n}\r\n\r\n\r\ntd.taxesLabel .mat-form-field{\r\n  width: 70%;\r\n}\r\n\r\n.taxesAmountLabel .percentageIcon{\r\n  position: absolute;\r\n  right: -20px;\r\n  top: 10px;\r\n}\r\n\r\n.onOffButton {\r\n  border: 1px solid #e0e0e0;\r\n}\r\n\r\n  .onOffButton .btn {\r\n    border-radius: 0;\r\n    font-size: 0.875rem;\r\n    box-shadow: none;\r\n    padding: 4px 18px;\r\n    border: none;\r\n  }\r\n\r\n    .onOffButton .btn.btn-default {\r\n      background: none;\r\n    }\r\n\r\n    .onOffButton .btn.btn-primary {\r\n      background: #4168a1;\r\n    }\r\n.mat-form-field{\r\n  margin-left: 24px;\r\n  margin-right: 75px;\r\n}\r\n\r\n.mat-form-field-infix{\r\n  width: 200px !important;\r\n}\r\n\r\n.mat-select-value{\r\n  color: #333;\r\n}\r\n\r\nmat-checkbox.mat-checkbox-checked /deep/  .mat-checkbox-background{\r\n  background: #4168a1;\r\n}\r\n\r\nmat-checkbox /deep/ .mat-checkbox-frame{\r\n  border: 1px solid #e2e2e2;\r\n}\r\n\r\nmat-button-toggle-group .mat-button-toggle-label{\r\n  margin-bottom: 0;\r\n  color: #333;\r\n  font-size: 0.875em;\r\n}\r\n\r\nmat-button-toggle-group{\r\n  border-radius: 0;\r\n  border:1px solid #e0e0e0;\r\n  box-shadow: none;\r\n}\r\n\r\nmat-button-toggle-group /deep/ .mat-button-toggle{\r\n  color: #333;\r\n  font-size: 0.875em;\r\n}\r\n\r\nmat-button-toggle-group /deep/ .mat-button-toggle .mat-button-toggle-label-content{\r\n  line-height: 22px;\r\n  padding: 0 15px;\r\n}\r\n\r\nmat-button-toggle-group /deep/ .mat-button-toggle-checked{\r\n  background: #4168a1;\r\n  color: #fff;\r\n}\r\n\r\nmat-button-toggle-group /deep/ .mat-button-toggle-checked .mat-button-toggle-label{\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.primaryContactTh{\r\n  width: 5%;\r\n}\r\n\r\n.contactContactTh{\r\n  width: 22%;\r\n}\r\n\r\n.titleContactTh{\r\n  width: 25.2%;\r\n}\r\n\r\n.emailContactTh{\r\n  width: 28.2%;\r\n}\r\n\r\n.contactNumberContactTh{\r\n  width: 27.9%;\r\n}\r\n\r\n.addContact{\r\n  position: relative;\r\n}\r\n\r\n.addContact .btn.buttonStacked{\r\n  position: absolute;\r\n  right: 0;\r\n  top: 25px;\r\n}\r\n\r\n\r\n.addContact .text-primary{\r\n  color: #29aae2 !important;\r\n}\r\n\r\n.contactTable td .mat-form-field{\r\n  width: 70%;\r\n}\r\n\r\n::ng-deep .matCheckBox label.mat-checkbox-layout{\r\n  margin-bottom: 0;\r\n}\r\n.genericLabel\r\n{\r\n  margin-bottom: 0;\r\n}\r\n\r\n.widthCalculate30 {\r\n  width: calc(100% - 30px);\r\n}\r\n\r\n.paddingLeft45 {\r\n  padding-left: 45px;\r\n}\r\n\r\n.specifyOptions {\r\n  border-top: 1px solid #d5d5d5;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/hotel-details/hotel-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <!-- <form [formGroup]=\"hotelInfoForm\" (ngSubmit)=\"saveHotelInfo()\" > -->\n      <form [formGroup]=\"hotelInfoForm\">\n<div class=\"mt-5\">\n  <div class=\"mt-4\">\n    <h1 class=\"mainHeading mb-4\">Hotel Info</h1>\n\n       <!-- <div class=\"formSections pb-0 borderBottomNone\">\n        <h5 class=\"semiBold\">\n     Hotel Status\n    <div class=\"form-group hotelStatus\">\n      <div class=\"form-check form-check-inline\">\n        <mat-checkbox>Active</mat-checkbox>\n      </div>\n    </div>\n  </h5>\n      </div>-->\n      <div class=\"formSections pt-3 pb-4 borderBottomNone\">\n        <h5 class=\"semiBold mb-5\">Hotel Details</h5>\n        <!-- <label>Hotel ID: CA00000001</label> -->\n        <div class=\"row customeRow\">\n          <div class=\"inlineGroup col-md-4 col-lg-3\">\n              <div class=\"inlineColumn elementSelection\"><mat-checkbox *ngIf=\"hotelnameStatus[0]['isConfigurable']\"  class=\"matCheckBox\" formControlName=\"hotelName\"></mat-checkbox></div>\n            <!-- <label>Name</label> -->\n            <div class=\"inlineColumn\">\n                <mat-form-field class=\"serachFieldDisabled disableFields\">\n                    <input matInput placeholder=\"Search by Name\" required disabled=\"true\" />\n                    <i aria-hidden=\"true\" class=\"fa fa-search\"></i>\n                  </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"inlineGroup col-md-4 col-lg-3\">\n              <div class=\"inlineColumn elementSelection\"><mat-checkbox *ngIf=\"chainStatus[0]['isConfigurable']\"  class=\"matCheckBox\" formControlName=\"chain\" (change)=\"onChainChange($event)\"></mat-checkbox></div>\n            <!-- <label>Chain</label> -->\n            <div class=\"inlineColumn\">\n              <mat-form-field class=\"disableFields \">\n                <mat-select [disabled]=\"true\" placeholder=\"Chain\" >\n                  <mat-option [value]=\"null\">Select</mat-option>\n                </mat-select>\n              </mat-form-field>\n              </div>\n          </div>\n\n          <div class=\"inlineGroup col-md-4 col-lg-3\">\n              <div class=\"inlineColumn elementSelection\"><mat-checkbox *ngIf=\"brandStatus[0]['isConfigurable']\"  class=\"matCheckBox\" formControlName=\"brand\"></mat-checkbox></div>\n            <!-- <label>Brand</label> -->\n            <div class=\"inlineColumn\">\n              <mat-form-field class=\"disableFields \">\n                <mat-select [disabled]=\"true\" placeholder=\"Brand\">\n                  <mat-option [value]=\"null\">Select</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"inlineGroup  col-md-4 col-lg-3\">\n              <div class=\"inlineColumn elementSelection\"><mat-checkbox *ngIf=\"typeStatus[0]['isConfigurable']\" class=\"matCheckBox\" formControlName=\"type\"></mat-checkbox></div>\n            <!--*ngIf=\"isName\" class=\"genericLabel\" -->\n            <div class=\"inlineColumn\">\n              <mat-form-field class=\"disableFields \">\n                <mat-select [disabled]=\"true\" placeholder=\"Type\">\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"inlineGroup col-md-4 col-lg-3\">\n            <div class=\"inlineColumn elementSelection\">\n              <mat-checkbox *ngIf=\"totalNumberOfRoomsStatus[0]['isConfigurable']\" class=\"matCheckBox\" formControlName=\"totalNumberOfRooms\"></mat-checkbox>\n            </div>\n            <div class=\"inlineColumn\">\n              <mat-form-field class=\"disableFields \">\n                <input matInput placeholder=\"Number of Rooms\" disabled/>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"inlineGroup  col-md-4 col-lg-3\">\n            <div class=\"inlineColumn elementSelection\"><mat-checkbox *ngIf=\"starratingStatus[0]['isConfigurable']\"  class=\"matCheckBox\" formControlName=\"starrating\" [disabled]=\"true\"></mat-checkbox></div>\n            <!-- <label>Star Rating</label> -->\n            <div class=\"inlineColumn\">\n              <mat-form-field class=\"disableFields \">\n                <mat-select disabled=\"true\" placeholder=\"Star Rating\" required>\n                  <mat-option></mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"inlineGroup  col-md-4 col-lg-3\">\n              <div class=\"inlineColumn elementSelection\"><mat-checkbox *ngIf=\"mgpointsStatus[0]['isConfigurable']\" class=\"matCheckBox\" formControlName=\"mgpoints\"></mat-checkbox></div>\n              <!-- <label>MG Points</label> -->\n            <div class=\"inlineColumn\">\n              <mat-form-field class=\"disableFields \">\n                <input matInput placeholder=\"MG Points\" disabled>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n        <!-- Form section cosed-->\n      </div>\n      <!-- Row div cosed-->\n\n      <div class=\"formSections pt-5 pb-4 borderTop\">\n        <div class=\"row customeRow\">\n        <div class=\"inlineGroup  col-md-4 col-lg-3\">\n          <div class=\"inlineColumn elementSelection\"><mat-checkbox *ngIf=\"add1Status[0]['isConfigurable']\" class=\"matCheckBox\" formControlName=\"address1\"></mat-checkbox></div>\n          <!-- <label>Address1</label> -->\n          <div class=\"inlineColumn\">\n            <mat-form-field class=\"disableFields \">\n              <input matInput required disabled  placeholder=\"Address1\"/>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"inlineGroup  col-md-4 col-lg-3\">\n            <div class=\"inlineColumn elementSelection\"><mat-checkbox *ngIf=\"add2Status[0]['isConfigurable']\" class=\"matCheckBox\" formControlName=\"address2\"></mat-checkbox></div>\n          <!-- <label>Address2</label> -->\n          <div class=\"inlineColumn\">\n            <mat-form-field class=\"disableFields \">\n              <input matInput required disabled  placeholder=\"Address2\"/>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"inlineGroup  col-md-4 col-lg-3\">\n            <div class=\"inlineColumn elementSelection\"><mat-checkbox *ngIf=\"countryStatus[0]['isConfigurable']\" class=\"matCheckBox\" formControlName=\"country\"></mat-checkbox></div>\n          <!-- <label>Country</label> -->\n          <div class=\"inlineColumn\">\n            <mat-form-field class=\"disableFields \">\n              <mat-select [disabled]=\"true\" required  placeholder=\"Country\">\n                <mat-option [value]=\"null\">Select</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"inlineGroup  col-md-4 col-lg-3\">\n            <div class=\"inlineColumn elementSelection\"><mat-checkbox *ngIf=\"cityStatus[0]['isConfigurable']\" class=\"matCheckBox\" formControlName=\"city\"></mat-checkbox></div>\n          <!-- <label>City</label> -->\n          <div class=\"inlineColumn\">\n            <mat-form-field class=\"disableFields \">\n              <mat-select [disabled]=\"true\" placeholder=\"City\" required>\n                <mat-option [value]=\"null\">Select</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"inlineGroup  col-md-4 col-lg-3\">\n            <div class=\"inlineColumn elementSelection\"><mat-checkbox *ngIf=\"zipStatus[0]['isConfigurable']\" [checked]=\"zipStatus[0]['isSelected']\" class=\"matCheckBox\" formControlName=\"zip\"></mat-checkbox></div>\n            <!-- <label>Zip Code</label> -->\n          <div class=\"inlineColumn\">\n            <mat-form-field class=\"disableFields \">\n              <input matInput placeholder=\"Zip Code\" required disabled/>\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"inlineGroup col-md-4 col-lg-3\">\n          <div class=\"mapLocator\">\n              <div class=\"float-left checkBoxDiv\"><mat-checkbox *ngIf=\"latlongStatus[0]['isConfigurable']\" class=\"matCheckBox\" formControlName=\"latlong\"></mat-checkbox></div>\n              <!-- <label>Latitude / Longitude</label> -->\n            <div class=\"float-left marginLeft10 widthCalculate30\">\n              <mat-form-field class=\"disableFields \">\n                <input matInput placeholder=\"Latitude / Longitude\" required disabled/>\n                <span class=\"input-group-addon\">\n                  <button [disabled]=\"true\" >\n                    <i aria-hidden=\"true\" class=\"fa fa-map-marker\"></i>\n                  </button>\n                </span>\n              </mat-form-field>\n            </div>\n          </div>\n        </div>\n        </div>\n      </div>\n\n      <div class=\"formSections pb-4 pt-4\">\n        <div class=\"row mt-3 customeRow\">\n          <div class=\"col-md-12\">\n            <div class=\"float-left checkBoxDiv\">\n                <mat-checkbox *ngIf=\"shortdescriptionStatus[0]['isConfigurable']\"  class=\"matCheckBox\" formControlName=\"shortdescription\"></mat-checkbox>\n            </div>\n            <div class=\"float-left marginLeft10 widthCalculate30\">\n                <h2>\n                  Hotel Short Description\n                    <!-- <label>Hotel Short Description</label> -->\n                </h2>\n              <mat-form-field class=\"disableFields \">\n                <textarea [disabled]=\"true\" matInput placeholder=\"Hotel Short Description\" rows=\"5\" cols=\"200\" maxlength=\"500\" required></textarea>\n              </mat-form-field>\n              <p class=\"small text-right lightGrey\">Max. 500 characters</p>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"row mt-3 customeRow\">\n          <div class=\"col-md-12\">\n              <div class=\"float-left checkBoxDiv\">\n                  <mat-checkbox *ngIf=\"longdescriptionStatus[0]['isConfigurable']\"  class=\"matCheckBox\" formControlName=\"longdescription\"></mat-checkbox>\n              </div>\n              <div class=\"float-left marginLeft10 widthCalculate30\">\n                <h2>\n                    Hotel Long Description\n                    <!-- <label>Hotel Long Description</label> -->\n                </h2>\n                <mat-form-field class=\"disableFields \">\n                  <textarea [disabled]=\"true\" matInput placeholder=\"Hotel Long Description\"></textarea>\n                </mat-form-field>\n                <p class=\"small text-right lightGrey\">Max. 1200 characters</p>\n              </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"formSections pb-0 pt-5\">\n        <!-- Checkin Check Out-->\n        <div class=\"row mt-0 customeRow pb-4 customeRow\">\n          <div class=\"col-md-12\">\n            <div class=\"float-left checkBoxDiv\">\n                <mat-checkbox *ngIf=\"checkincheckoutStatus[0]['isConfigurable']\"  class=\"matCheckBox\" formControlName=\"checkincheckout\"></mat-checkbox>\n            </div>\n            <div class=\"float-left marginLeft10 widthCalculate30\">\n              <h2>\n                  Check In Check Out\n                    <!-- <label>Check In Check Out</label> -->\n                </h2>\n              <div class=\"row  mt-3 customeRow\">\n                <div class=\"col-md-4 checkInCheckoutBorderRight form-group col-lg-3\">\n                  <div class=\"row customeRow\">\n                    <div class=\"col-md-12\"><h5 class=\"requiredLabel semiBold mb-4\">Check-in</h5></div>\n                  </div>\n                  <div class=\"row customeRow\">\n                    <div class=\"col-md-12\">\n                      <mat-form-field class=\"disableFields \">\n                        <mat-select disabled=\"true\" placeholder=\"From\" id=\"checkinfrom\" name=\"checkinfrom\">\n                          <mat-option value=\"undefined\" disabled=\"true\" hidden>Select</mat-option>\n                          <mat-option >checkinfrom.Value</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </div>\n                    <!-- <div class=\"col-md-6\">\n                      <mat-form-field >\n                        <mat-select disabled=\"true\" placeholder=\"To (Optional)\" id=\"checkinto\" name=\"checkinto\" >\n                          <mat-option [value]=\"null\">Select</mat-option>\n                          <mat-option>checkinto.Value</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </div> -->\n                  </div>\n                </div>\n                <div class=\"col-md-4 form-group col-lg-3\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12 pl-3\"><h5 class=\"requiredLabel semiBold mb-4\">Check-out</h5></div>\n                  </div>\n                  <div class=\"row customeRow\">\n                    <div class=\"col-md-12\">\n                      <mat-form-field class=\"disableFields \">\n                        <mat-select disabled=\"true\" placeholder=\"From (Optional)\" id=\"checkoutfrom\" name=\"checkoutfrom\">\n                          <mat-option [value]=\"null\">Select</mat-option>\n                          <mat-option >checkoutfrom.Value</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </div>\n                    <!-- <div class=\"col-md-6\">\n                      <mat-form-field >\n                      <mat-select disabled=\"true\" placeholder=\"To\" id=\"checkoutto\" name=\"checkoutto\">\n                      <mat-option value=\"undefined\" disabled=\"true\" hidden>Select</mat-option>\n                      <mat-option>checkoutto.Value</mat-option>\n                      </mat-select>\n                      </mat-form-field>\n                    </div> -->\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n        </div>\n      </div>\n\n      <div class=\"formSections pb-0 borderBottomNone pt-5 paddingRight15px\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"float-left checkBoxDiv\">\n              <mat-checkbox *ngIf=\"contactStatus[0]['isConfigurable']\"  class=\"matCheckBox\" formControlName=\"contactdetails\"></mat-checkbox>\n            </div>\n            <div class=\"float-left marginLeft10 widthCalculate30\">\n              <h2 class=\"pb-1\">Contact Details</h2>\n              <div class=\"row mt-4\">\n                <div class=\"form-group col-md-12 mb-0\">\n                  <table class=\"table genericTable borderTopZero mb-0 contactTable\">\n                    <thead>\n                      <tr>\n                        <th class=\"border-top-0 primaryContactTh\">Set as Primary</th>\n                        <th class=\"border-top-0 contactContactTh\">Contact Person</th>\n                        <th class=\"border-top-0 titleContactTh\">Designation</th>\n                        <th class=\"border-top-0 emailContactTh\">Email</th>\n                        <th class=\"border-top-0 contactNumberContactTh\">Contact Number</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <!-- <tr>\n                        <td class=\"align-middle\">\n                          <mat-radio-group >\n                            <mat-radio-button [disabled]=\"true\"></mat-radio-button>\n                          </mat-radio-group>\n                        </td>\n                        <td>\n                          <mat-form-field >\n                            <input matInput placeholder=\"\" disabled/>\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          <mat-form-field >\n                            <mat-select [disabled]=\"true\" placeholder=\"\">\n                              <mat-option [value]=\"undefined\" disabled=\"true\">Select</mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          <mat-form-field >\n                            <input matInput placeholder=\"\" disabled/>\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          <mat-form-field >\n                            <input matInput placeholder=\"\" disabled/>\n                          </mat-form-field>\n                        </td>\n                      </tr> -->\n                      <tr>\n                        <td class=\"align-middle\">\n                          <mat-radio-group class=\"disableFields\">\n                            <mat-radio-button value=\"1\" disabled=\"true\"></mat-radio-button>\n                          </mat-radio-group>\n                        </td>\n                        <td>\n                          <mat-form-field class=\"disableFields\">\n                            <input matInput placeholder=\"\" disabled/>\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          <mat-form-field class=\"disableFields\">\n                            <mat-select disabled=\"true\" placeholder=\"\">\n                              <mat-option>Select</mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                        </td>\n                        <td>\n                          <mat-form-field class=\"disableFields\">\n                            <input matInput placeholder=\"\" disabled/>\n                          </mat-form-field>\n                        </td>\n                        <td class=\"addContact\">\n                          <mat-form-field class=\"disableFields\">\n                            <input matInput placeholder=\"\" disabled/>\n                          </mat-form-field>\n\n                          <button class=\"btn-default buttonStacked disableFields\" title=\"Add\" type=\"button\" disabled=\"true\">\n                            <span class=\"btn transparent-circle mr-2 disableFields\" disabled><span></span></span>\n                          </button>\n                        </td>\n\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"formSections pb-4 pt-4 paddingLeft30px\">\n        <div class=\"row customeRow\">\n          <div class=\"form-group col-md-4  col-lg-3\">\n            <mat-form-field class=\"disableFields\">\n              <input matInput placeholder=\"Website\" disabled/>\n            </mat-form-field>\n          </div>\n          <div class=\"form-group col-md-4  col-lg-3\">\n            <mat-form-field class=\"disableFields\">\n              <input matInput placeholder=\"Email (Reservation)\" disabled/>\n            </mat-form-field>\n          </div>\n          <div class=\"form-group col-md-4  col-lg-3\">\n            <mat-form-field class=\"disableFields\">\n              <input matInput placeholder=\"Telephone (Reservation)\" disabled/>\n            </mat-form-field>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"formSections pb-1 pt-5\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"float-left checkBoxDiv\">\n              <mat-checkbox *ngIf=\"paymentStatus[0]['isConfigurable']\"  class=\"matCheckBox\" formControlName=\"paymentdetails\"></mat-checkbox>\n            </div>\n            <div class=\"float-left marginLeft10 widthCalculate30\">\n              <h2>Payment Details</h2>\n              <label for=\"paymentMethod\" class=\"d-block semiBold mb-3 mt-4 pt-2\">Payment Method</label>\n              <div class=\"row alignItemCenter pb-4 customeRow\">\n                  <div class=\"col-md-4  col-lg-4\">\n\n                      <!-- <div class=\"col-md-5\">\n                        <mat-radio-group  disabled=\"true\">\n                          <mat-radio-button checked=\"false\" disabled=\"true\">Credit</mat-radio-button>\n                        </mat-radio-group>\n                      </div> -->\n                      <div class=\"row\">\n                      <div class=\"col-md-5\">\n                        <mat-radio-group class=\"disableFields\">\n                          <mat-radio-button value=\"1\" disabled=\"true\">15 Days after Check-out</mat-radio-button>\n                        </mat-radio-group>\n                      </div>\n                      <div class=\"col-md-5\">\n                        <mat-radio-group class=\"disableFields\">\n                          <mat-radio-button value=\"2\" disabled=\"true\">30 Days after Check-out</mat-radio-button>\n                        </mat-radio-group>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"form-group col-md-4  col-lg-4\">\n                    <mat-form-field class=\"disableFields\">\n                      <mat-select disabled=\"true\" placeholder=\"Currency\"  name=\"currency\" required>\n                        <mat-option  disabled=\"true\">Select</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4  col-lg-4\">\n                    <label class=\"d-block mb-4\" for=\"rateType\">Rate Type</label>\n                    <div class=\"row customeRow\">\n                        <div class=\"col-md-4\">\n                          <mat-radio-group  class=\"disableFields\">\n                            <mat-radio-button value=\"1\"  disabled=\"true\">Net</mat-radio-button>\n                          </mat-radio-group>\n                        </div>\n                        <div class=\"col-md-4\">\n                          <mat-radio-group class=\"disableFields\">\n                            <mat-radio-button value=\"2\"  disabled=\"true\">Other</mat-radio-button>\n                          </mat-radio-group>\n                        </div>\n                    </div>\n                  </div>\n\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"formSections pt-5 paddingRight15px\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"float-left checkBoxDiv\">\n              <mat-checkbox *ngIf=\"extranetStatus[0]['isConfigurable']\"  class=\"matCheckBox\" formControlName=\"extranetdetails\"></mat-checkbox>\n            </div>\n            <div class=\"float-left marginLeft10 widthCalculate30\">\n              <h2>Extranet Details</h2>\n              <div class=\"row mt-4 pt-2 pb-2\">\n                  <div class=\"form-group col-md-4  col-lg-4  mb-0\">\n                    <p>Extranet Account Access</p>\n                    <mat-button-toggle-group class=\"disableFields disabledToggleBtn\" >\n                      <mat-button-toggle [value]=\"true\" disabled=\"true\">\n                        Yes\n                      </mat-button-toggle>\n                      <mat-button-toggle [value]=\"false\" disabled=\"true\">\n                        No\n                      </mat-button-toggle>\n                    </mat-button-toggle-group>\n                  </div>\n                  <div class=\"form-group col-md-4  col-lg-4  mb-0 paddingLeft45\">\n                    <p>Channel Manager Connectivity</p>\n                    <mat-button-toggle-group class=\"disableFields disabledToggleBtn\" >\n                      <mat-button-toggle [value]=\"true\" disabled=\"true\">\n                        Yes\n                      </mat-button-toggle>\n                      <mat-button-toggle [value]=\"false\" disabled=\"true\">\n                        No\n                      </mat-button-toggle>\n                    </mat-button-toggle-group>\n                  </div>\n                  <div class=\"form-group col-md-4 mb-0 paddingLeft45\">\n                    <mat-form-field class=\"mt-4 disableFields\">\n                      <mat-select placeholder=\"Channel Manager\" required disabled=\"true\">\n                        <mat-option></mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"pt-5 pb-4 paddingRight15px\">\n        <div class=\"row\">\n         <div class=\"col-md-12\">\n            <div class=\"float-left checkBoxDiv\">\n                <mat-checkbox *ngIf=\"taxesStatus[0]['isConfigurable']\"  class=\"matCheckBox\" formControlName=\"taxes\"></mat-checkbox>\n            </div>\n            <div class=\"float-left marginLeft10 widthCalculate30\">\n              <h2>\n                Taxes\n              <!-- <h2>\n                <label>Taxes</label>\n              </h2> -->\n              </h2>\n              <p>\n                Rates will be considered all INCLUSIVE unless the below section is completed\n              </p>\n              <table class=\"table genericTable mb-4\">\n                <thead>\n                  <tr>\n                    <th class=\"taxtesTypeTh\">Type</th>\n                    <th class=\"taxtesRoomTh\">Per Room/Person</th>\n                    <th class=\"taxtesAmountTh\">Amount</th>\n                    <th class=\"taxtesRatesTh\">Included in Rates</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td class=\"typeLabel taxesLabel\">\n                      <label>VAT</label>\n                    </td>\n                    <td class=\"taxesLabel\">\n                      <mat-form-field  class=\"disableFields\">\n                        <mat-select [(ngModel)]=\"optionYes\" [ngModelOptions]=\"{standalone: true}\" disabled=\"true\">\n                          <mat-option [value]=\"true\">Per Room</mat-option>\n                        </mat-select>\n                      </mat-form-field>\n                    </td>\n                    <td class=\"taxesLabel taxesAmountLabel\">\n                      <mat-form-field class=\"disableFields\">\n                        <input matInput id=\"amount\" disabled/>\n                        <span class=\"percentageIcon\">&nbsp;%</span>\n                      </mat-form-field>\n                    </td>\n                    <td class=\"taxesLabel\">\n                      <mat-form-field class=\"disableFields\">\n                        <mat-select [(ngModel)]=\"optionYes\" [ngModelOptions]=\"{standalone: true}\"disabled=\"true\">\n                          <mat-option [value]=\"true\" >Yes</mat-option>\n\n                        </mat-select>\n                      </mat-form-field>\n                    </td>\n                  </tr>\n                  <tr>\n                      <td class=\"typeLabel taxesLabel\">\n                        <label>Service Charges</label>\n                      </td>\n                      <td class=\"taxesLabel\">\n                        <mat-form-field class=\"disableFields\">\n                          <mat-select [(ngModel)]=\"optionYes\" [ngModelOptions]=\"{standalone: true}\" disabled=\"true\">\n                            <mat-option [value]=\"true\">Per Room</mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      </td>\n                      <td class=\"taxesLabel taxesAmountLabel\">\n                        <mat-form-field class=\"disableFields\">\n                          <input matInput id=\"amount\" disabled/>\n                          <span class=\"percentageIcon\">&nbsp;%</span>\n                        </mat-form-field>\n                      </td>\n                      <td class=\"taxesLabel\">\n                        <mat-form-field class=\"disableFields\">\n                          <mat-select [(ngModel)]=\"optionYes\" [ngModelOptions]=\"{standalone: true}\" disabled=\"true\">\n                            <mat-option [value]=\"true\" >Yes</mat-option>\n\n                          </mat-select>\n                        </mat-form-field>\n                      </td>\n                    </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n        <input matInput placeholder=\"templateName\" formControlName=\"templateName\" style=\"    visibility: hidden\"/>\n\n      <div class=\"controlButtons mb-4 borderTopDark pt-5\">\n        <button title=\"Save\" type=\"submit\" class=\"genericButton activeButton mat-primary mat-raised-button\"  [disabled]=\"!hotelInfoForm.valid\" (click)=\"saveHotelInfo()\">Save</button>\n        <button title=\"Cancel\" type=\"button\" class=\"genericButton defaultButton mat-raised-button\" mat-raised-button (click)=\"backToList()\">Cancel</button>\n        <button title=\"Continue\" class=\"genericButton activeButton mat-primary mat-raised-button float-right\"  [disabled]=\"!hotelInfoForm.valid\" type=\"submit\" (click)=\"saveandContinue()\">Save & Continue</button>\n      </div>\n\n  </div>\n  <!-- </mat-tab>\n<mat-tab label=\"Facilities and Services\">Content 2</mat-tab>\n</mat-tab-group> -->\n\n</div>\n</form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/hotel-details/hotel-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("../../../../../src/app/extranet/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_template_name_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-name-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_templates_templates_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/templates-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_enums__ = __webpack_require__("../../../../../src/app/common/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var hotelinfo = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* EXTRANETCONSTANTS */].templates.hotelinfo;
var read = __WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* CONSTANTS */].operation.read;
var edit = __WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* CONSTANTS */].operation.edit;
var create = __WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* CONSTANTS */].operation.create;
var HotelDetailsComponent = (function () {
    function HotelDetailsComponent(router, snackBar, templateNameDataService, templateDataService, activatedRoute, templateUrlNotificationService) {
        this.router = router;
        this.snackBar = snackBar;
        this.templateNameDataService = templateNameDataService;
        this.templateDataService = templateDataService;
        this.activatedRoute = activatedRoute;
        this.templateUrlNotificationService = templateUrlNotificationService;
        this.isName = true;
        this.name = hotelinfo.name;
        this.chain = hotelinfo.chain;
        this.brand = hotelinfo.brand;
        this.type = hotelinfo.type;
        this.address1 = hotelinfo.address1;
        this.address2 = hotelinfo.address2;
        this.country = hotelinfo.country;
        this.city = hotelinfo.city;
        this.zip = hotelinfo.zip;
        this.latlong = hotelinfo.latlong;
        this.starrating = hotelinfo.starrating;
        this.mgpoints = hotelinfo.mgpoints;
        this.shortdescription = hotelinfo.shortdescription;
        this.longdescription = hotelinfo.longdescription;
        this.contactdetails = hotelinfo.contactdetails;
        this.paymentdetails = hotelinfo.paymentdetails;
        this.extranetdetails = hotelinfo.extranetdetails;
        this.taxes = hotelinfo.taxes;
        this.checkincheckout = hotelinfo.checkincheckout;
        this.totalNumberOfRooms = hotelinfo.totalNumberOfRooms;
        this.optionYes = true;
        templateUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    HotelDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isRead = true;
        window.scrollTo(0, 0);
        this.operation = this.activatedRoute.parent.snapshot.params['operation'];
        this.templateId = this.activatedRoute.parent.snapshot.params['id'];
        this.getHotelFieldsList();
        this.formFieldList = this.templateHotelInfoViewModel.hotelFields;
        this.getFieldStatus();
        this.hotelInfoForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            hotelName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.hotelnameStatus[0]['isSelected']),
            chain: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.chainStatus[0]['isSelected']),
            brand: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: this.brandStatus[0]['isSelected'], disabled: true }),
            type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.typeStatus[0]['isSelected']),
            totalNumberOfRooms: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.totalNumberOfRoomsStatus[0]['isSelected']),
            address1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.add1Status[0]['isSelected']),
            address2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.add2Status[0]['isSelected']),
            country: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.countryStatus[0]['isSelected']),
            city: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.cityStatus[0]['isSelected']),
            zip: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.zipStatus[0]['isSelected']),
            latlong: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.latlongStatus[0]['isSelected']),
            starrating: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.starratingStatus[0]['isSelected']),
            mgpoints: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.mgpointsStatus[0]['isSelected']),
            shortdescription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.shortdescriptionStatus[0]['isSelected']),
            longdescription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.longdescriptionStatus[0]['isSelected']),
            contactdetails: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.contactStatus[0]['isSelected']),
            paymentdetails: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.paymentStatus[0]['isSelected']),
            extranetdetails: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.extranetStatus[0]['isSelected']),
            taxes: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.taxesStatus[0]['isSelected']),
            checkincheckout: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.checkincheckoutStatus[0]['isSelected']),
            templateName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.templateNameDataService.templateName.subscribe(function (templateNameEntered) {
            if (templateNameEntered !== undefined && templateNameEntered !== null) {
                _this.templateName = templateNameEntered.trim();
            }
            // console.log('this.templateName-' + this.templateName);
            _this.hotelInfoForm.controls['templateName'].setValue(_this.templateName);
        });
    };
    HotelDetailsComponent.prototype.getHotelFieldsList = function () {
        // tslint:disable-next-line:max-line-length
        if (this.activatedRoute.snapshot.data['hotelFieldData'] !== undefined && this.activatedRoute.snapshot.data['hotelFieldData'] !== null) {
            this.templateHotelInfoViewModel = this.activatedRoute.snapshot.data['hotelFieldData'];
            // // console.log('Template Hotel Info data - ' +  JSON.stringify(this.templateHotelInfoViewModel ));
            this.getTemplateName(this.templateHotelInfoViewModel.name);
        }
    };
    HotelDetailsComponent.prototype.getTemplateName = function (tempName) {
        this.templateNameDataService.changeTemplateName(tempName);
    };
    HotelDetailsComponent.prototype.onChainChange = function (event) {
        if (event.checked) {
            this.hotelInfoForm.controls['brand'].setValue(true);
        }
        else {
            this.hotelInfoForm.controls['brand'].setValue(false);
        }
    };
    HotelDetailsComponent.prototype.getFieldStatus = function () {
        var _this = this;
        this.hotelnameStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.name; });
        this.chainStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.chain; });
        this.brandStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.brand; });
        this.typeStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.type; });
        this.totalNumberOfRoomsStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.totalNumberOfRooms; });
        this.add1Status = this.formFieldList.filter(function (arr) { return arr.code === _this.address1; });
        this.add2Status = this.formFieldList.filter(function (arr) { return arr.code === _this.address2; });
        this.countryStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.country; });
        this.cityStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.city; });
        this.zipStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.zip; });
        this.latlongStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.latlong; });
        this.starratingStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.starrating; });
        this.mgpointsStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.mgpoints; });
        this.shortdescriptionStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.shortdescription; });
        this.longdescriptionStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.longdescription; });
        this.contactStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.contactdetails; });
        this.paymentStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.paymentdetails; });
        this.extranetStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.extranetdetails; });
        this.taxesStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.taxes; });
        this.checkincheckoutStatus = this.formFieldList.filter(function (arr) { return arr.code === _this.checkincheckout; });
        // this.checkincheckoutStatus[0].objectState = ObjectState.Added;
    };
    HotelDetailsComponent.prototype.saveHotelInfo = function () {
        var _this = this;
        if (this.hotelInfoForm.valid) {
            this.createSavingData(this.operation.toLowerCase().trim());
            // // console.log('Template Hotel Info data for saving - ' +  JSON.stringify(this.templateHotelInfoViewModel ));
            this.templateDataService.saveTemplateHotelFields(this.templateHotelInfoViewModel).subscribe(function (response) {
                _this.router.navigate(['/templatemgmt/templates']);
                _this.snackBar.open('Hotel Info Template Saved Successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                window.scrollTo(0, 0);
            });
        }
    };
    HotelDetailsComponent.prototype.saveandContinue = function () {
        var _this = this;
        if (this.hotelInfoForm.valid) {
            this.createSavingData(this.operation.toLowerCase().trim());
            this.templateDataService.saveTemplateHotelFields(this.templateHotelInfoViewModel).subscribe(function (response) {
                _this.router.navigate(['/templatemgmt/redirect', response.result]);
                _this.snackBar.open('Hotel Info Template Saved Successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_7__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                window.scrollTo(0, 0);
            });
        }
    };
    HotelDetailsComponent.prototype.createSavingData = function (operation) {
        var arrayHotelFields;
        arrayHotelFields = [];
        if (operation === create) {
            this.hotelnameStatus[0]['isSelected'] = this.hotelInfoForm.controls['hotelName'].value;
            this.hotelnameStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.hotelnameStatus[0]);
            this.chainStatus[0]['isSelected'] = this.hotelInfoForm.controls['chain'].value;
            this.chainStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.chainStatus[0]);
            this.brandStatus[0]['isSelected'] = this.hotelInfoForm.controls['brand'].value;
            this.brandStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.brandStatus[0]);
            this.typeStatus[0]['isSelected'] = this.hotelInfoForm.controls['type'].value;
            this.typeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.typeStatus[0]);
            this.totalNumberOfRoomsStatus[0]['isSelected'] = this.hotelInfoForm.controls['totalNumberOfRooms'].value;
            this.totalNumberOfRoomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.totalNumberOfRoomsStatus[0]);
            this.add1Status[0]['isSelected'] = this.hotelInfoForm.controls['address1'].value;
            this.add1Status[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.add1Status[0]);
            this.add2Status[0]['isSelected'] = this.hotelInfoForm.controls['address2'].value;
            this.add2Status[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.add2Status[0]);
            this.countryStatus[0]['isSelected'] = this.hotelInfoForm.controls['country'].value;
            this.countryStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.countryStatus[0]);
            this.cityStatus[0]['isSelected'] = this.hotelInfoForm.controls['city'].value;
            this.cityStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.cityStatus[0]);
            this.zipStatus[0]['isSelected'] = this.hotelInfoForm.controls['zip'].value;
            this.zipStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.zipStatus[0]);
            this.latlongStatus[0]['isSelected'] = this.hotelInfoForm.controls['latlong'].value;
            this.latlongStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.latlongStatus[0]);
            this.starratingStatus[0]['isSelected'] = this.hotelInfoForm.controls['starrating'].value;
            this.starratingStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.starratingStatus[0]);
            this.mgpointsStatus[0]['isSelected'] = this.hotelInfoForm.controls['mgpoints'].value;
            this.mgpointsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.mgpointsStatus[0]);
            this.shortdescriptionStatus[0]['isSelected'] = this.hotelInfoForm.controls['shortdescription'].value;
            this.shortdescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.shortdescriptionStatus[0]);
            this.longdescriptionStatus[0]['isSelected'] = this.hotelInfoForm.controls['longdescription'].value;
            this.longdescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.longdescriptionStatus[0]);
            this.contactStatus[0]['isSelected'] = this.hotelInfoForm.controls['contactdetails'].value;
            this.contactStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.contactStatus[0]);
            this.paymentStatus[0]['isSelected'] = this.hotelInfoForm.controls['paymentdetails'].value;
            this.paymentStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.paymentStatus[0]);
            this.extranetStatus[0]['isSelected'] = this.hotelInfoForm.controls['extranetdetails'].value;
            this.extranetStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.extranetStatus[0]);
            this.taxesStatus[0]['isSelected'] = this.hotelInfoForm.controls['taxes'].value;
            this.taxesStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.taxesStatus[0]);
            this.checkincheckoutStatus[0]['isSelected'] = this.hotelInfoForm.controls['checkincheckout'].value;
            this.checkincheckoutStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            arrayHotelFields.push(this.checkincheckoutStatus[0]);
            this.templateHotelInfoViewModel.name = this.hotelInfoForm.controls['templateName'].value;
            this.templateHotelInfoViewModel.objectState = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
            this.templateDataService.newTemplateName = this.hotelInfoForm.controls['templateName'].value;
        }
        else if (operation === edit) {
            if (this.hotelnameStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['hotelName'].value) {
                this.hotelnameStatus[0]['isSelected'] = this.hotelInfoForm.controls['hotelName'].value;
                if (this.hotelnameStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.hotelnameStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.hotelnameStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.hotelnameStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.hotelnameStatus[0]);
            if (this.totalNumberOfRoomsStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['totalNumberOfRooms'].value) {
                this.totalNumberOfRoomsStatus[0]['isSelected'] = this.hotelInfoForm.controls['totalNumberOfRooms'].value;
                if (this.totalNumberOfRoomsStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.totalNumberOfRoomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.totalNumberOfRoomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.totalNumberOfRoomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.totalNumberOfRoomsStatus[0]);
            if (this.chainStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['chain'].value) {
                this.chainStatus[0]['isSelected'] = this.hotelInfoForm.controls['chain'].value;
                if (this.chainStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.chainStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.chainStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.chainStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.chainStatus[0]);
            if (this.brandStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['brand'].value) {
                this.brandStatus[0]['isSelected'] = this.hotelInfoForm.controls['brand'].value;
                if (this.brandStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.brandStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.brandStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.brandStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.brandStatus[0]);
            if (this.typeStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['type'].value) {
                this.typeStatus[0]['isSelected'] = this.hotelInfoForm.controls['type'].value;
                if (this.typeStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.typeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.typeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.typeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.typeStatus[0]);
            if ((this.add1Status[0]['isSelected'] !== this.hotelInfoForm.controls['address1'].value)) {
                this.add1Status[0]['isSelected'] = this.hotelInfoForm.controls['address1'].value;
                if (this.add1Status[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.add1Status[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.add1Status[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.add1Status[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.add1Status[0]);
            if (this.add2Status[0]['isSelected'] !==
                this.hotelInfoForm.controls['address2'].value) {
                this.add2Status[0]['isSelected'] = this.hotelInfoForm.controls['address2'].value;
                if (this.add2Status[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.add2Status[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.add2Status[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.add2Status[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.add2Status[0]);
            if (this.countryStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['country'].value) {
                this.countryStatus[0]['isSelected'] = this.hotelInfoForm.controls['country'].value;
                if (this.countryStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.countryStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.countryStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.countryStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.countryStatus[0]);
            if (this.cityStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['city'].value) {
                this.cityStatus[0]['isSelected'] = this.hotelInfoForm.controls['city'].value;
                if (this.cityStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.cityStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.cityStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.cityStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.cityStatus[0]);
            if (this.zipStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['zip'].value) {
                this.zipStatus[0]['isSelected'] = this.hotelInfoForm.controls['zip'].value;
                if (this.zipStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.zipStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.zipStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.zipStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.zipStatus[0]);
            if (this.latlongStatus[0]['isSelected'] !== this.hotelInfoForm.controls['latlong'].value) {
                this.latlongStatus[0]['isSelected'] = this.hotelInfoForm.controls['latlong'].value;
                if (this.latlongStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.latlongStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.latlongStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.latlongStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.latlongStatus[0]);
            if (this.starratingStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['starrating'].value) {
                this.starratingStatus[0]['isSelected'] = this.hotelInfoForm.controls['starrating'].value;
                if (this.starratingStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.starratingStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.starratingStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.starratingStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.starratingStatus[0]);
            if (this.mgpointsStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['mgpoints'].value) {
                this.mgpointsStatus[0]['isSelected'] = this.hotelInfoForm.controls['mgpoints'].value;
                if (this.mgpointsStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.mgpointsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.mgpointsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.mgpointsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.mgpointsStatus[0]);
            if (this.shortdescriptionStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['shortdescription'].value) {
                this.shortdescriptionStatus[0]['isSelected'] = this.hotelInfoForm.controls['shortdescription'].value;
                if (this.shortdescriptionStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.shortdescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.shortdescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.shortdescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.shortdescriptionStatus[0]);
            if (this.longdescriptionStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['longdescription'].value) {
                this.longdescriptionStatus[0]['isSelected'] = this.hotelInfoForm.controls['longdescription'].value;
                if (this.longdescriptionStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.longdescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.longdescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.longdescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.longdescriptionStatus[0]);
            if (this.contactStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['contactdetails'].value) {
                this.contactStatus[0]['isSelected'] = this.hotelInfoForm.controls['contactdetails'].value;
                if (this.contactStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.contactStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.contactStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.contactStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.contactStatus[0]);
            if (this.paymentStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['paymentdetails'].value) {
                this.paymentStatus[0]['isSelected'] = this.hotelInfoForm.controls['paymentdetails'].value;
                if (this.paymentStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.paymentStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.paymentStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.paymentStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.paymentStatus[0]);
            if (this.extranetStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['extranetdetails'].value) {
                this.extranetStatus[0]['isSelected'] = this.hotelInfoForm.controls['extranetdetails'].value;
                if (this.extranetStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.extranetStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.extranetStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.extranetStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.extranetStatus[0]);
            if (this.taxesStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['taxes'].value) {
                this.taxesStatus[0]['isSelected'] = this.hotelInfoForm.controls['taxes'].value;
                if (this.taxesStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.taxesStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.taxesStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.taxesStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.taxesStatus[0]);
            if (this.checkincheckoutStatus[0]['isSelected'] !==
                this.hotelInfoForm.controls['checkincheckout'].value) {
                this.checkincheckoutStatus[0]['isSelected'] = this.hotelInfoForm.controls['checkincheckout'].value;
                if (this.checkincheckoutStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_6__common_enums__["c" /* EntityState */].New) {
                    this.checkincheckoutStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.checkincheckoutStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.checkincheckoutStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayHotelFields.push(this.checkincheckoutStatus[0]);
            if (this.templateHotelInfoViewModel.name !==
                this.hotelInfoForm.controls['templateName'].value) {
                this.templateHotelInfoViewModel.name = this.hotelInfoForm.controls['templateName'].value;
                this.templateHotelInfoViewModel.objectState = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Modified;
            }
            else {
                this.templateHotelInfoViewModel.objectState = __WEBPACK_IMPORTED_MODULE_6__common_enums__["d" /* ObjectState */].Unchanged;
            }
        }
        this.templateHotelInfoViewModel.hotelFields = arrayHotelFields;
    };
    HotelDetailsComponent.prototype.backToList = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    HotelDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hotel-details',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/hotel-details/hotel-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/hotel-details/hotel-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_template_name_data_service__["a" /* TemplateNameDataService */],
            __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_templates_templates_data_service__["a" /* TemplatesDataService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_8__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */]])
    ], HotelDetailsComponent);
    return HotelDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/amenities/amenities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hotelsName {\r\n    vertical-align: middle;\r\n    padding: 0.55rem 2rem 0.55rem 0.8rem;\r\n    background: #fff;\r\n    color: #666;\r\n    border-radius: .25rem;\r\n    font-size: 0.875rem;\r\n    position: relative;\r\n    border: 1px solid #ebebeb;\r\n    margin:0 10px 10px 0;\r\n    display: inline-block;\r\n  \r\n  }\r\n  \r\n  .hotelsName:after {\r\n    content: 'X';\r\n    position: absolute;\r\n    top: 7.5px;\r\n    left: 162px;\r\n    font-size: 0.9375rem;\r\n  }\r\n  \r\n  .selectedRooms {\r\n    vertical-align: middle;\r\n    color: #333;\r\n    font-family: Proxima Nova Semibold;\r\n    font-size: 1rem;\r\n  }\r\n  \r\n  .checkBoxList {\r\n    padding: 20px;\r\n    border-bottom: 1px solid #ebebeb;\r\n  }\r\n  \r\n  .amenitiesType .checkBoxList:last-child {\r\n    border-bottom: none;\r\n  } \r\n\r\n.checkBoxList {\r\n    padding: 20px;\r\n    border-bottom: 1px solid #ebebeb;\r\n}\r\n\r\n.checklists .checkBoxList:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.checkBoxList span {\r\n font-size: 18px;\r\n font-family: 'maven_proregular';\r\n}\r\n\r\n.iconHeading mat-checkbox {\r\n    top: -4px;\r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/amenities/amenities.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"mt-5\">\n    <h1 class=\"mainHeading mb-4\">Room Amenities</h1>\n    <div class=\"row pt-1\">\n      <div class=\"col-md-4\">\n        <div class=\"globalSearch\">\n          <input class=\"form-control\" placeholder=\"Search by Amenities Name, Category etc.\" type=\"text\" disabled>\n          <button class=\"searchButton\" type=\"submit\">\n          <i aria-hidden=\"true\" class=\"fa fa-search\"></i>\n        </button>\n        </div>\n      </div>\n    </div>\n    <h5 class=\"h5 semiboldText mt-5\">Please select amenities that applies</h5>\n    <form [formGroup]=\"amenitiesForm\">\n      <div formArrayName=\"amenitiesGroupArray\" *ngFor=\"let amenityGroup of amenitiesGroupArray.controls; let i=index\">\n\n        <!-- General -->\n        <div class=\"formSections pb-0 pt-4 borderBottomNone\" [formGroupName]=\"i\" *ngIf=\"(amenitiesGroupArray.controls[i].get('code').value) === '201'\">\n          <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n\n            <mat-expansion-panel-header class=\"panelHeader\">\n              <mat-panel-title>\n                <div class=\"row iconHeading\">\n                  <div class=\"col-md-1 pr-0 iconHolder\">\n                    <img alt=\"\" src=\"assets/AmenitiesIcon/generalIcon.png\">\n                  </div>\n                  <div class=\"col-md-11 pl-2 inlineGroup\">\n                      <div class=\"inlineColumn elementSelection\">\n                          <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(amenitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                      </div>\n                      <div class=\"inlineColumn\">\n                          <h2 class=\"checkAll\">\n                              {{amenitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                            </h2>\n                      </div>\n                    </div>\n                </div>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <div class=\"row\" formArrayName=\"roomFacilityTypes\" *ngFor=\"let amenityType of getTypeArrayForGroup(i).controls; let j=index\">\n              <div class=\"col-md-12\" [formGroupName]=\"j\">\n\n                <h5 class=\"pl-0 h5 semiboldText mb-3\" *ngIf=\"(amenityType.get('facilityTypeName').value) != null\">\n                  {{(amenityType.get('facilityTypeName').value)}}\n                </h5>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12 checkBoxList border-bottom-0\">\n                    <div class=\"form-group borderTopNone p-0 border-bottom-0 mb-0\">\n                      <span class=\"paddingLeft30px\">All</span>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row checklists borderTopNone p-0\">\n                  <div class=\"col-md-12 checkBoxList\" formArrayName=\"facilityList\" *ngFor=\"let amenity of getAmenityArrayForGroupAndType(i,j).controls; let k=index\">\n                    <div class=\"form-group mb-0\" [formGroupName]=\"k\">\n                        <span class=\"paddingLeft30px\">\n                          {{amenity.get(\"name\").value}}\n                        </span>\n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n            \n          </mat-expansion-panel>\n        </div>\n        <!-- General -->\n\n        <!-- Bathroom -->\n        <div class=\"formSections pb-0 pt-4 borderBottomNone\" [formGroupName]=\"i\" *ngIf=\"(amenitiesGroupArray.controls[i].get('code').value) === '202'\">\n          <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n\n            <mat-expansion-panel-header class=\"panelHeader\">\n              <mat-panel-title>\n                <div class=\"row iconHeading\">\n                  <div class=\"col-md-1 pr-0 iconHolder\">\n                    <img alt=\"\" src=\"assets/AmenitiesIcon/bathroomIcon.png\">\n                  </div>\n                  <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(amenitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                      <h2 class=\"checkAll\">\n                        {{amenitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                      </h2>\n                    </div>\n                  </div>\n                </div>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <div class=\"row\" formArrayName=\"roomFacilityTypes\" *ngFor=\"let amenityType of getTypeArrayForGroup(i).controls; let j=index\">\n              <div class=\"col-md-12\" [formGroupName]=\"j\">\n\n                <h5 class=\"pl-0 h5 semiboldText mb-3\" *ngIf=\"(amenityType.get('facilityTypeName').value) != null\">\n                  {{(amenityType.get('facilityTypeName').value)}}\n                </h5>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12 checkBoxList border-bottom-0\">\n                    <div class=\"form-group borderTopNone p-0 border-bottom-0 mb-0\">\n                      <span class=\"paddingLeft30px\">All</span>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row checklists borderTopNone p-0\">\n                  <div class=\"col-md-12 checkBoxList\" formArrayName=\"facilityList\" *ngFor=\"let amenity of getAmenityArrayForGroupAndType(i,j).controls; let k=index\">\n                    <div class=\"form-group mb-0\" [formGroupName]=\"k\">\n                        <span class=\"paddingLeft30px\">\n                          {{amenity.get(\"name\").value}}\n                        </span> \n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n            \n          </mat-expansion-panel>\n        </div>\n        <!-- Bathroom -->\n\n        <!-- Media And Technology -->\n        <div class=\"formSections pb-0 pt-4 borderBottomNone\" [formGroupName]=\"i\" *ngIf=\"(amenitiesGroupArray.controls[i].get('code').value) === '203'\">\n          <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n\n            <mat-expansion-panel-header class=\"panelHeader\">\n              <mat-panel-title>\n                <div class=\"row iconHeading\">\n                  <div class=\"col-md-1 pr-0 iconHolder\">\n                    <img alt=\"\" src=\"assets/AmenitiesIcon/mediaIcon.png\">\n                  </div>\n                  <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(amenitiesGroupArray.controls[i].get('isConfigurable').value) === true\">\n                      </mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                      <h2 class=\"checkAll\">\n                        {{amenitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                      </h2>\n                    </div>\n                  </div>\n                </div>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <div class=\"row\" formArrayName=\"roomFacilityTypes\" *ngFor=\"let amenityType of getTypeArrayForGroup(i).controls; let j=index\">\n              <div class=\"col-md-12\" [formGroupName]=\"j\">\n\n                <h5 class=\"pl-0 h5 semiboldText mb-3\" *ngIf=\"(amenityType.get('facilityTypeName').value) != null\">\n                  {{(amenityType.get('facilityTypeName').value)}}\n                </h5>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12 checkBoxList border-bottom-0\">\n                    <div class=\"form-group borderTopNone p-0 border-bottom-0 mb-0\">                    \n                      <span class=\"paddingLeft30px\">All</span>                    \n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row checklists borderTopNone p-0\">\n                  <div class=\"col-md-12 checkBoxList\" formArrayName=\"facilityList\" *ngFor=\"let amenity of getAmenityArrayForGroupAndType(i,j).controls; let k=index\">\n                    <div class=\"form-group mb-0\" [formGroupName]=\"k\">                      \n                        <span class=\"paddingLeft30px\">\n                          {{amenity.get(\"name\").value}}\n                        </span>                     \n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n            \n          </mat-expansion-panel>\n        </div>\n        <!-- Media And Technology -->\n\n        <!-- Food & Drink -->\n        <div class=\"formSections pb-0 pt-4 borderBottomNone\" [formGroupName]=\"i\" *ngIf=\"(amenitiesGroupArray.controls[i].get('code').value) === '204'\">\n          <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n\n            <mat-expansion-panel-header class=\"panelHeader\">\n              <mat-panel-title>\n                <div class=\"row iconHeading\">\n                  <div class=\"col-md-1 pr-0 iconHolder\">\n                    <img alt=\"\" src=\"assets/AmenitiesIcon/foodIcon.png\">\n                  </div>\n                  <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(amenitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                      <h2 class=\"checkAll\">\n                        {{amenitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                      </h2>\n                    </div>\n                  </div>\n                </div>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <div class=\"row\" formArrayName=\"roomFacilityTypes\" *ngFor=\"let amenityType of getTypeArrayForGroup(i).controls; let j=index\">\n              <div class=\"col-md-12\" [formGroupName]=\"j\">\n\n                <h5 class=\"pl-0 h5 semiboldText mb-3\" *ngIf=\"(amenityType.get('facilityTypeName').value) != null\">\n                  {{(amenityType.get('facilityTypeName').value)}}\n                </h5>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12 checkBoxList border-bottom-0\">\n                    <div class=\"form-group borderTopNone p-0 border-bottom-0 mb-0\">\n                        <span class=\"paddingLeft30px\">All</span> \n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row checklists borderTopNone p-0\">\n                  <div class=\"col-md-12 checkBoxList\" formArrayName=\"facilityList\" *ngFor=\"let amenity of getAmenityArrayForGroupAndType(i,j).controls; let k=index\">\n                    <div class=\"form-group mb-0\" [formGroupName]=\"k\">                     \n                        <span class=\"paddingLeft30px\">\n                          {{amenity.get(\"name\").value}}\n                        </span>\n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n            \n          </mat-expansion-panel>\n        </div>\n        <!-- Food & Drink -->\n\n        <!-- Services & Extras -->\n        <div class=\"formSections pb-0 pt-4 borderBottomNone\" [formGroupName]=\"i\" *ngIf=\"(amenitiesGroupArray.controls[i].get('code').value) === '205'\">\n          <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n\n            <mat-expansion-panel-header class=\"panelHeader\">\n              <mat-panel-title>\n                <div class=\"row iconHeading\">\n                  <div class=\"col-md-1 pr-0 iconHolder\">\n                    <img alt=\"\" src=\"assets/AmenitiesIcon/servicesIcon.png\">\n                  </div>\n                  <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(amenitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                      <h2 class=\"checkAll\">\n                        {{amenitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                      </h2>\n                    </div>\n                  </div>\n                </div>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <div class=\"row\" formArrayName=\"roomFacilityTypes\" *ngFor=\"let amenityType of getTypeArrayForGroup(i).controls; let j=index\">\n              <div class=\"col-md-12\" [formGroupName]=\"j\">\n\n                <h5 class=\"pl-0 h5 semiboldText mb-3\" *ngIf=\"(amenityType.get('facilityTypeName').value) != null\">\n                  {{(amenityType.get('facilityTypeName').value)}}\n                </h5>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12 checkBoxList border-bottom-0\">\n                    <div class=\"form-group borderTopNone p-0 border-bottom-0 mb-0\">\n                        <span class=\"paddingLeft30px\">All</span> \n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row checklists borderTopNone p-0\">\n                  <div class=\"col-md-12 checkBoxList\" formArrayName=\"facilityList\" *ngFor=\"let amenity of getAmenityArrayForGroupAndType(i,j).controls; let k=index\">\n                    <div class=\"form-group mb-0\" [formGroupName]=\"k\">\n                        <span class=\"paddingLeft30px\">\n                          {{amenity.get(\"name\").value}}\n                        </span>\n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n            \n          </mat-expansion-panel>\n        </div>\n        <!-- Services & Extras -->\n\n        <!-- Outdoor & View -->\n        <div class=\"formSections pb-0 pt-4 borderBottomNone\" [formGroupName]=\"i\" *ngIf=\"(amenitiesGroupArray.controls[i].get('code').value) === '206'\">\n          <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n\n            <mat-expansion-panel-header class=\"panelHeader\">\n              <mat-panel-title>\n                <div class=\"row iconHeading\">\n                  <div class=\"col-md-1 pr-0 iconHolder\">\n                    <img alt=\"\" src=\"assets/AmenitiesIcon/outdoorIcon.png\">\n                  </div>\n                  <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(amenitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                      <h2 class=\"checkAll\">\n                        {{amenitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                      </h2>\n                    </div>\n                  </div>\n                </div>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <div class=\"row\" formArrayName=\"roomFacilityTypes\" *ngFor=\"let amenityType of getTypeArrayForGroup(i).controls; let j=index\">\n              <div class=\"col-md-12\" [formGroupName]=\"j\">\n\n                <h5 class=\"pl-0 h5 semiboldText mb-3\" *ngIf=\"(amenityType.get('facilityTypeName').value) != null\">\n                  {{(amenityType.get('facilityTypeName').value)}}\n                </h5>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12 checkBoxList border-bottom-0\">\n                    <div class=\"form-group borderTopNone p-0 border-bottom-0 mb-0\">\n                        <span class=\"paddingLeft30px\">All</span>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row checklists borderTopNone p-0\">\n                  <div class=\"col-md-12 checkBoxList\" formArrayName=\"facilityList\" *ngFor=\"let amenity of getAmenityArrayForGroupAndType(i,j).controls; let k=index\">\n                    <div class=\"form-group mb-0\" [formGroupName]=\"k\">\n                        <span class=\"paddingLeft30px\">\n                          {{amenity.get(\"name\").value}}\n                        </span> \n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n            \n          </mat-expansion-panel>\n        </div>\n        <!-- Outdoor & View -->\n\n        <!-- Accessibility -->\n        <div class=\"formSections pb-0 pt-4 borderBottomNone\" [formGroupName]=\"i\" *ngIf=\"(amenitiesGroupArray.controls[i].get('code').value) === '207'\">\n          <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n\n            <mat-expansion-panel-header class=\"panelHeader\">\n              <mat-panel-title>\n                <div class=\"row iconHeading\">\n                  <div class=\"col-md-1 pr-0 iconHolder\">\n                    <img alt=\"\" src=\"assets/AmenitiesIcon/accessibilityIcon.png\">\n                  </div>\n                  <div class=\"col-md-11 pl-2 inlineGroup\">\n                    <div class=\"inlineColumn elementSelection\">\n                      <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(amenitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                    </div>\n                    <div class=\"inlineColumn\">\n                      <h2 class=\"checkAll\" >\n                        {{amenitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                      </h2>\n                    </div>\n                  </div>\n                </div>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <div class=\"row\" formArrayName=\"roomFacilityTypes\" *ngFor=\"let amenityType of getTypeArrayForGroup(i).controls; let j=index\">\n              <div class=\"col-md-12\" [formGroupName]=\"j\">\n\n                <h5 class=\"pl-0 h5 semiboldText mb-3\" *ngIf=\"(amenityType.get('facilityTypeName').value) != null\">\n                  {{(amenityType.get('facilityTypeName').value)}}\n                </h5>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12 checkBoxList border-bottom-0\">\n                    <div class=\"form-group borderTopNone p-0 border-bottom-0 mb-0\">\n                        <span class=\"paddingLeft30px\">All</span>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row checklists borderTopNone p-0\">\n                  <div class=\"col-md-12 checkBoxList\" formArrayName=\"facilityList\" *ngFor=\"let amenity of getAmenityArrayForGroupAndType(i,j).controls; let k=index\">\n                    <div class=\"form-group mb-0\" [formGroupName]=\"k\">\n                        <span class=\"paddingLeft30px\">\n                          {{amenity.get(\"name\").value}}\n                        </span>\n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n            \n          </mat-expansion-panel>\n        </div>\n        <!-- Accessibility -->\n\n        <!-- Entertainment & Family Services -->\n        <div class=\"formSections pb-0 pt-4 borderBottomNone\" [formGroupName]=\"i\" *ngIf=\"(amenitiesGroupArray.controls[i].get('code').value) === '208'\">\n          <mat-expansion-panel class=\"expandCollapseContainer\" expanded='true' disabled>\n\n            <mat-expansion-panel-header class=\"panelHeader\">\n              <mat-panel-title>\n                <div class=\"row iconHeading\">\n                  <div class=\"col-md-1 pr-0 iconHolder\">\n                    <img alt=\"\" src=\"assets/AmenitiesIcon/entertainmentIcon.png\">\n                  </div>\n                  <div class=\"col-md-11 pl-2 inlineGroup\">\n                      <div class=\"inlineColumn elementSelection\">\n                          <mat-checkbox class=\"checkAll\" formControlName=\"isSelected\" *ngIf=\"(amenitiesGroupArray.controls[i].get('isConfigurable').value) === true\"></mat-checkbox>\n                      </div>\n                      <div class=\"inlineColumn\">\n                          <h2 class=\"checkAll\">\n                              {{amenitiesGroupArray.controls[i].get(\"facilityGroupName\").value}}\n                            </h2>\n                      </div>\n                    </div>\n                </div>\n              </mat-panel-title>\n            </mat-expansion-panel-header>\n\n            <div class=\"row\" formArrayName=\"roomFacilityTypes\" *ngFor=\"let amenityType of getTypeArrayForGroup(i).controls; let j=index\">\n              <div class=\"col-md-12\" [formGroupName]=\"j\">\n\n                <h5 class=\"pl-0 h5 semiboldText mb-3\" *ngIf=\"(amenityType.get('facilityTypeName').value) != null\">\n                  {{(amenityType.get('facilityTypeName').value)}}\n                </h5>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12 checkBoxList border-bottom-0\">\n                    <div class=\"form-group borderTopNone p-0 border-bottom-0 mb-0\">\n                        <span class=\"paddingLeft30px\">All</span>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"row checklists borderTopNone p-0\">\n                  <div class=\"col-md-12 checkBoxList\" formArrayName=\"facilityList\" *ngFor=\"let amenity of getAmenityArrayForGroupAndType(i,j).controls; let k=index\">\n                    <div class=\"form-group mb-0\" [formGroupName]=\"k\">\n                        <span class=\"paddingLeft30px\">\n                          {{amenity.get(\"name\").value}}\n                        </span>\n                    </div>\n                  </div>\n                </div>\n                \n              </div>\n            </div>\n            \n          </mat-expansion-panel>\n        </div>\n        <!-- Entertainment & Family Services -->\n\n      </div>\n\n      <div class=\"controlButtons pt-5 mb-4 borderTopDark\">\n        <button title=\"Save\" class=\"genericButton activeButton mat-primary mat-raised-button\" (click)=\"saveAmenities()\">Save</button>\n        <button title=\"Cancel\" class=\"genericButton defaultButton mat-raised-button\" mat-raised-button (click)=\"backToList()\">Cancel</button>\n        <button title=\"Save & Continue\" class=\"genericButton activeButton mat-primary mat-raised-button float-right\"(click)=\"saveandContinue()\">Save & Continue</button>\n      </div>\n    </form>\n  </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/amenities/amenities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmenitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_enums__ = __webpack_require__("../../../../../src/app/common/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_templates_template_amenities_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-amenities-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
var duration = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration;
var AmenitiesComponent = (function () {
    function AmenitiesComponent(router, snackBar, activatedRoute, templateUrlNotificationService, templateAmenitiesDataService) {
        this.router = router;
        this.snackBar = snackBar;
        this.activatedRoute = activatedRoute;
        this.templateUrlNotificationService = templateUrlNotificationService;
        this.templateAmenitiesDataService = templateAmenitiesDataService;
        this.templateId = this.activatedRoute.parent.snapshot.params['id'];
        templateUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    AmenitiesComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.getTemplateAmenitiesServices();
    };
    AmenitiesComponent.prototype.getTemplateAmenitiesServices = function () {
        this.templateAmenitiesGroupList = this.activatedRoute.snapshot.data['amenitiesData'];
        this.amenitiesForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            amenitiesGroupArray: this.buildAmenityGroupsForm(this.templateAmenitiesGroupList)
        });
    };
    Object.defineProperty(AmenitiesComponent.prototype, "amenitiesGroupArray", {
        get: function () {
            return this.amenitiesForm.get('amenitiesGroupArray');
        },
        enumerable: true,
        configurable: true
    });
    AmenitiesComponent.prototype.getTypeArrayForGroup = function (groupIndex) {
        return this.amenitiesGroupArray.controls[groupIndex].get('roomFacilityTypes');
    };
    AmenitiesComponent.prototype.getAmenityArrayForGroupAndType = function (groupIndex, typeIndex) {
        return this.getTypeArrayForGroup(groupIndex).controls[typeIndex].get('facilityList');
    };
    AmenitiesComponent.prototype.buildAmenityGroupsForm = function (amenityGroups) {
        var _this = this;
        var groupFormGroup;
        var groupFormArray;
        amenityGroups.forEach(function (amenityGroup) {
            groupFormGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
                facilityGroupName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenityGroup.facilityGroupName),
                roomFacilityTypes: _this.buildAmenityTypesForm(amenityGroup),
                id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenityGroup.id),
                facilityGroupId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenityGroup.facilityGroupId),
                code: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenityGroup.code),
                isSelected: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenityGroup.isSelected),
                isConfigurable: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenityGroup.isConfigurable),
                status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenityGroup.status)
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
    AmenitiesComponent.prototype.buildAmenityTypesForm = function (amenityGroup) {
        var _this = this;
        var typeFormGroup;
        var typeFormArray;
        amenityGroup.roomFacilityTypes.forEach(function (amenityType) {
            typeFormGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
                facilityTypeId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenityType.facilityTypeId),
                facilityTypeName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenityType.facilityTypeName),
                facilityGroupId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenityType.facilityGroupId),
                facilityList: _this.buildAmenitiesForm(amenityType)
            });
            if (typeFormArray === null || typeFormArray === undefined) {
                typeFormArray = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormArray"]([typeFormGroup]);
            }
            else {
                typeFormArray.push(typeFormGroup);
            }
        });
        return typeFormArray;
    };
    AmenitiesComponent.prototype.buildAmenitiesForm = function (amenityType) {
        var amenityFormGroup;
        var amenityFormArray;
        amenityType.facilityList.forEach(function (amenity) {
            amenityFormGroup = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
                id: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenity.id),
                name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenity.name),
                facilityTypeId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenity.facilityTypeId),
                facilityGroupId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](amenity.facilityGroupId)
            });
            if (amenityFormArray === null || amenityFormArray === undefined) {
                amenityFormArray = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormArray"]([amenityFormGroup]);
            }
            else {
                amenityFormArray.push(amenityFormGroup);
            }
        });
        return amenityFormArray;
    };
    AmenitiesComponent.prototype.saveAmenities = function () {
        var _this = this;
        this.templateAmenitiesList = Object.assign([], this.templateAmenitiesGroupList, this.amenitiesForm.value.amenitiesGroupArray);
        this.updateObjectState();
        this.templateAmenitiesDataService.addAmenities(this.templateAmenitiesList, this.templateId)
            .subscribe(function (data) {
            _this.router.navigate(['/templatemgmt/templates']);
            _this.snackBar.open('Amenities Template Saved Successfully', '', { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
            window.scrollTo(0, 0);
        });
    };
    AmenitiesComponent.prototype.saveandContinue = function () {
        var _this = this;
        this.templateAmenitiesList = Object.assign([], this.templateAmenitiesGroupList, this.amenitiesForm.value.amenitiesGroupArray);
        this.updateObjectState();
        this.templateAmenitiesDataService.addAmenities(this.templateAmenitiesList, this.templateId)
            .subscribe(function (data) {
            _this.router.navigate(['/templatemgmt/template', _this.templateId, edit, 'mealplan']);
            _this.snackBar.open('Amenities Template Saved Successfully', '', { duration: duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
            window.scrollTo(0, 0);
        });
    };
    AmenitiesComponent.prototype.updateObjectState = function () {
        var _this = this;
        this.templateAmenitiesList.forEach(function (amenityGroup, amenityGroupIndex) {
            if (amenityGroup.status === 0) {
                if (amenityGroup.isSelected === true) {
                    amenityGroup.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    amenityGroup.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Unchanged;
                }
            }
            else {
                if (amenityGroup.isSelected !== _this.checkOriginalObjectState(amenityGroupIndex)) {
                    amenityGroup.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Modified;
                }
                else {
                    amenityGroup.objectState = __WEBPACK_IMPORTED_MODULE_5__common_enums__["d" /* ObjectState */].Unchanged;
                }
            }
        });
    };
    AmenitiesComponent.prototype.checkOriginalObjectState = function (amenityGroupIndex) {
        return this.templateAmenitiesGroupList[amenityGroupIndex].isSelected;
    };
    AmenitiesComponent.prototype.backToList = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    AmenitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-amenities',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/amenities/amenities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/amenities/amenities.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */],
            __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_templates_template_amenities_data_service__["a" /* TemplateAmenitiesDataService */]])
    ], AmenitiesComponent);
    return AmenitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/meal-plan/meal-plan.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.breakfastDetails{\r\n    font-size:1.125rem;\r\n    display: block;\r\n}\r\n\r\n.mealPlanContainer .checklists {\r\n\tborder-bottom: 1px solid #ebebeb;\r\n}\r\n\r\n.first{\r\n\tborder-top: 1px solid #ebebeb;\r\n}\r\n\r\n.mealPlanRules{\r\nfont-size: 0.8125rem;\r\n    color: #666;\r\n}\r\n\r\n.currencySelect{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    width: 165px;\r\n}\r\n\r\n.mealType {\r\n    font-size: 18px;\r\n    font-family: 'maven_proregular';\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/meal-plan/meal-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mealPlanContainer\">\n  <div class=\"mt-5\">\n    <h1 class=\"mainHeading mb-4\">Meal Plan</h1>\n    <form>\n      <div class=\"formSections pb-3 pt-3\" *ngFor=\"let meal of mealTypes\">\n        <div class=\"inlineGroup\">\n          <div class=\"inlineColumn elementSelection\">\n            <mat-checkbox class=\"semiBold\" [disabled]=\"true\" [checked]=\"meal.isSelected\"></mat-checkbox>\n          </div>\n          <div class=\"inlineColumn\">\n              <span class=\"mealType\">{{meal.meal}}</span>\n    \n              <div>\n                <div>\n                  <div class=\"row mb-4 mt-4 customeRow\">\n                    <div class=\"col-md-3\">\n                      <div class=\"row customeRow\">\n                        <div class=\"col-md-4 pr-0\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"\" name=\"currency\" disabled value=\"IDR\">\n                          </mat-form-field>\n                        </div>\n                        <div class=\"col-md-8 pl-0\">\n                          <mat-form-field>\n                            <input matInput placeholder=\"\" type=\"number\" name=\"price\" class=\"text-right hideUpDownArrow\" disabled=\"true\">\n                          </mat-form-field>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-12 text-right roomRateText\">\n                          Per person, per day\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n    \n                  <h2 class=\"pb-4 pt-3\"> {{meal.meal}} Details</h2>\n                  <div class=\"breakFastSelection pr-3 pb-3\" *ngFor=\"let cuisine of cuisineTypes\">\n                    <div>\n                      <mat-checkbox class=\"pt-2 pb-2 pl-2 mr-2 mealTypeCheckbox\" disabled>{{cuisine.cusine}}</mat-checkbox>\n                    </div>\n                  </div>\n                </div>\n    \n                <div>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"controlButtons mb-4 mt-5\">\n        <button title=\"Save\" type=\"button\" class=\"genericButton activeButton mat-primary mat-raised-button\" (click)=\"saveMealPlan()\">Save</button>\n        <button title=\"Cancel\" type=\"button\" class=\"genericButton defaultButton mat-raised-button\" mat-raised-button (click)=\"backToList()\">Cancel</button>\n        <button title=\"Save & Continue\" type=\"button\" class=\"genericButton activeButton mat-primary mat-raised-button float-right\" (click)=\"saveandContinue()\">Save & Continue</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/meal-plan/meal-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealPlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_extranet_shared_services_associate_mealplan_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/associate-mealplan-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
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
    function MealPlanComponent(router, activatedRoute, templateUrlNotificationService, mealplanService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.templateUrlNotificationService = templateUrlNotificationService;
        this.mealplanService = mealplanService;
        this.templateId = this.activatedRoute.parent.snapshot.params['id'];
        templateUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    MealPlanComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.getMealPlans();
    };
    MealPlanComponent.prototype.saveMealPlan = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    MealPlanComponent.prototype.saveandContinue = function () {
        this.router.navigate(['/templatemgmt/template', this.templateId, 'edit', 'childpolicy']);
    };
    MealPlanComponent.prototype.backToList = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    MealPlanComponent.prototype.getMealPlans = function () {
        this.mealTypes = this.activatedRoute.snapshot.data['mealTypesData'];
        this.cuisineTypes = this.activatedRoute.snapshot.data['cuisineTypesData'];
    };
    MealPlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-meal-plan',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/meal-plan/meal-plan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/meal-plan/meal-plan.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */],
            __WEBPACK_IMPORTED_MODULE_0__common_extranet_shared_services_associate_mealplan_data_service__["a" /* AssociateMealplanDataService */]])
    ], MealPlanComponent);
    return MealPlanComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/cancellation-payment/cancellation-payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".specifyOptions {\r\n    border-top: 1px solid #d5d5d5;\r\n  }\r\n\r\n  .maxWidth170px {\r\n    max-width: 170px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/cancellation-payment/cancellation-payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"mt-5\">\r\n    <h1 class=\"mainHeading\">Create New Cancellation Policy</h1>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        <div class=\"formSections pt-2 pb-3\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group paddingLeft42px  col-md-5 col-lg-5\">\r\n              <mat-form-field class=\"example-full-width disableFields\">\r\n                <input matInput placeholder=\"What is the name of your policy?\" id=\"name\" required disabled />\r\n              </mat-form-field>\r\n              <span class=\"nameNote\">This name is just of you. Not displayed to Customers</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group paddingLeft42px  col-md-12 col-lg-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 pt-4 mt-2\">\r\n                  <h2 class=\"pb-3\">Cancellation Preference</h2>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"row\">\r\n                    <mat-radio-group class=\"w-100 d-flex disableFields\">\r\n                      <div class=\"col-md-5 maxWidth170px\">\r\n                        <mat-radio-button value=\"1\" disabled=\"true\">Non-Refundable</mat-radio-button>\r\n                      </div>\r\n                      <div class=\"col-md-4 maxWidth170px\">\r\n                        <mat-radio-button value=\"2\" disabled=\"true\">Flexible</mat-radio-button>\r\n                      </div>\r\n                    </mat-radio-group>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row mt-2 m-0 p-3 alignItemCenter lightBlueContainer\">\r\n              <h6 class=\"pl-2 h6\">Specify condition(s)</h6>\r\n              <div class=\"row m-0\">\r\n                  <div class=\"col-md-6\">\r\n                    <div class=\"row mb-3\">\r\n                      <mat-radio-group class=\"w-100 d-flex disableFields\">\r\n                        <div class=\"col-md-5 maxWidth170px\">\r\n                            <mat-radio-button value=\"1\" disabled=\"true\">First Amount</mat-radio-button>\r\n                        </div>\r\n                        <div class=\"col-md-4 maxWidth170px\">\r\n                            <mat-radio-button value=\"2\" disabled=\"true\">Full Night</mat-radio-button>\r\n                        </div>\r\n                      </mat-radio-group>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row specifyOptions m-0\">\r\n                <div class=\"col-md-1\">\r\n                  <mat-form-field class=\"disableFields\">\r\n                    <input matInput disabled/>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-4 pl-0 pr-0 text-center\">Day(s) before Arrival, Cancellation fees is</div>\r\n                <div class=\"col-md-1\">\r\n                  <mat-form-field class=\"disableFields\">\r\n                    <input matInput disabled/>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-md-1\">% of</div>\r\n                <div class=\"pl-0 col-md-5 text-right\">\r\n                    <span class=\"btn transparent-circle mr-2\"><span></span></span>\r\n                </div>\r\n              </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row formSections borderBottomNone\">\r\n          <div class=\"form-group paddingLeft42px  col-md-12 col-lg-12\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <h2>No Show</h2>\r\n                <h6 class=\"h6 pb-2 pb-3 pt-3\">Is there any charges for No show?</h6>\r\n                <mat-button-toggle-group class=\"disableFields disabledToggleBtn\">\r\n                  <mat-button-toggle [value]=\"true\" disabled=\"true\">\r\n                    Yes\r\n                  </mat-button-toggle>\r\n                  <mat-button-toggle [value]=\"false\" disabled=\"true\">\r\n                    No\r\n                  </mat-button-toggle>\r\n                </mat-button-toggle-group>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-5 pt-4\">\r\n                <div class=\"row\">\r\n                  <mat-radio-group class=\"w-100 d-flex disableFields\">\r\n                    <div class=\"col-md-4\">\r\n                      <mat-radio-button value=\"1\" disabled>First Night</mat-radio-button>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <mat-radio-button value=\"2\" disabled>Full Amount</mat-radio-button>\r\n                    </div>\r\n                  </mat-radio-group>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n      <div class=\"col-md-12 controlButtons mb-4 borderTopDark pt-5\">\r\n        <button title=\"Save\" type=\"button\" class=\"genericButton activeButton mat-primary mat-raised-button\" (click)=\"saveCancellationPolicy()\">Save</button>\r\n        <button title=\"Cancel\" type=\"button\" class=\"genericButton defaultButton mat-raised-button\" mat-raised-button (click)=\"backToList()\">Cancel</button>\r\n        <button class=\"genericButton activeButton mat-primary mat-raised-button float-right\" title=\"Save & Continue\" type=\"button\" (click)=\"saveandContinue()\">Save & Continue</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/cancellation-payment/cancellation-payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancellationPaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CancellationPaymentComponent = (function () {
    function CancellationPaymentComponent(router, activatedRoute, templateUrlNotificationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.templateUrlNotificationService = templateUrlNotificationService;
        this.templateId = this.activatedRoute.parent.snapshot.params['id'];
        templateUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    CancellationPaymentComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    CancellationPaymentComponent.prototype.saveandContinue = function () {
        this.router.navigate(['/templatemgmt/template', this.templateId, 'edit', 'ratecategory']);
    };
    CancellationPaymentComponent.prototype.saveCancellationPolicy = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    CancellationPaymentComponent.prototype.backToList = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    CancellationPaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cancellation-payment',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/cancellation-payment/cancellation-payment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/cancellation-payment/cancellation-payment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */]])
    ], CancellationPaymentComponent);
    return CancellationPaymentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/child-extra-bed/child-extra-bed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/child-extra-bed/child-extra-bed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"mt-5\">\n    <h1 class=\"mainHeading mb-4\">Create New Children & Extra Bed Policy</h1>\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <div class=\"formSections paddingLeft30px pt-4 pb-4\">\n          <div class=\"row\">\n            <div class=\"form-group col-md-12 col-lg-12\">\n              <h2>Child</h2>\n              <h6 class=\"h6 pb-0 pt-3 darkGreyText\">Do you allow children at your property?</h6>\n              <span class=\"font-italic pb-4 nameNote d-block pt-0 text-left\">(You can specify the ages and prices later)</span>\n              <mat-button-toggle-group class=\"disableFields disabledToggleBtn\">\n                <mat-button-toggle [value]=\"true\" disabled=\"true\">\n                  Yes\n                </mat-button-toggle>\n                <mat-button-toggle [value]=\"false\" disabled=\"true\">\n                  No\n                </mat-button-toggle>\n              </mat-button-toggle-group>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12 pt-4 mb-0\">\n              <h6 class=\"h6 requiredLabel disabledLabel\">What age are children allowed?</h6>\n              <div class=\"row customeRow\">\n                <div class=\"col-md-3\">\n                  <mat-form-field class=\"disableFields\">\n                    <mat-select placeholder=\"Min. Age\" [disabled]=\"true\">\n\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-3\">\n                  <mat-form-field class=\"disableFields\">\n                    <mat-select placeholder=\"Max. Age\" [disabled]=\"true\">\n\n                    </mat-select>\n                  </mat-form-field>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"formSections paddingLeft30px\">\n          <div class=\"row\">\n            <div class=\"form-group col-md-12 pt-0 pb-0 mb-0\">\n              <h2>Cot & Extra Bed Options</h2>\n              <h6 class=\"h6 pb-3 pt-2 darkGreyText\">Can you provide cots in any of your rooms/units (upon request)</h6>\n              <mat-button-toggle-group class=\"disableFields disabledToggleBtn\">\n                <mat-button-toggle [value]=\"true\" disabled=\"true\">\n                  Yes\n                </mat-button-toggle>\n                <mat-button-toggle [value]=\"false\" disabled=\"true\">\n                  No\n                </mat-button-toggle>\n              </mat-button-toggle-group>\n              <h2 class=\"pt-4 mt-2 pb-3\">Cots</h2>\n              <h6 class=\"h6 pb-3 pt-2 darkGreyText\">Set your prices and age restrictions for cots.</h6>\n              <div class=\"ageSet mt-3\">\n\n\n                <div class=\"row customeRow\">\n                  <div class=\"col-md-3 mb-0\">\n                    <mat-form-field class=\"disableFields\">\n                      <mat-select placeholder=\"Age Upto\" required disabled>\n                        <mat-option>Select</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row customeRow\">\n                  <div class=\"col-md-3 mb-0\">\n                    <mat-form-field class=\"disableFields\">\n                      <mat-select placeholder=\"Price\" required disabled>\n                        <mat-option>Free</mat-option>\n                        <mat-option>Paid</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-3 mb-0\">\n                    <mat-form-field class=\"disableFields\">\n                      <input matInput placeholder=\"Enter Price\" disabled=\"true\"/>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"formSections paddingLeft30px\">\n            <div class=\"col-md-12 pt-2 pl-0\">\n              <h2>Extra Beds</h2>\n              <h6 class=\"h6 pb-3 pt-2 darkGreyText\">Can you provide extra beds in any of your rooms/ units (upon request)?</h6>\n              <mat-button-toggle-group class=\"disableFields disabledToggleBtn\">\n                <mat-button-toggle [value]=\"true\" disabled=\"true\">\n                  Yes\n                </mat-button-toggle>\n                <mat-button-toggle [value]=\"false\" disabled=\"true\">\n                  No\n                </mat-button-toggle>\n              </mat-button-toggle-group>\n            </div>\n        </div>\n\n        <div class=\"formSections borderBottomNone paddingLeft30px pb-3\">\n            <div class=\"form-group col-md-12 pt-2 pl-0\">\n              <h2>Maximum Children and Extra Beds per Room/Units</h2>\n              <h6 class=\"h6 pb-3 pt-2 darkGreyText\">Set maximum children and extra beds per room/units.</h6>\n              <table class=\"table genericTable\">\n                <thead>\n                  <tr>\n                    <th class=\"hotelNameTH align-middle\">Name</th>\n                    <th class=\"guestsTH\">Number of Guest</th>\n                    <th class=\"bedsTH align-middle\">Beds</th>\n                    <th class=\"maxChildrenTH align-middle\">Maximum Children *</th>\n                    <th class=\"extraBedsTH align-middle\">Extra Beds *</th>\n                  </tr>\n                </thead>\n              </table>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"controlButtons mb-4 borderTopDark pt-5\">\n      <button title=\"Save\" type=\"button\" class=\"genericButton activeButton mat-primary mat-raised-button\"  (click)=\"savePolicy()\">Save</button>\n      <button title=\"Cancel\" type=\"button\" class=\"genericButton defaultButton mat-raised-button\" mat-raised-button (click)=\"backToList()\">Cancel</button>\n      <button class=\"genericButton activeButton mat-primary mat-raised-button float-right\" title=\"Save & Continue\" type=\"button\" (click)=\"saveandContinue()\">Save & Continue</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/child-extra-bed/child-extra-bed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildExtraBedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChildExtraBedComponent = (function () {
    function ChildExtraBedComponent(router, activatedRoute, templateUrlNotificationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.templateUrlNotificationService = templateUrlNotificationService;
        this.templateId = this.activatedRoute.parent.snapshot.params['id'];
        templateUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    ChildExtraBedComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ChildExtraBedComponent.prototype.saveandContinue = function () {
        this.router.navigate(['/templatemgmt/template', this.templateId, 'edit', 'cancellationpolicy']);
    };
    ChildExtraBedComponent.prototype.savePolicy = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    ChildExtraBedComponent.prototype.backToList = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    ChildExtraBedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-child-extra-bed',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/child-extra-bed/child-extra-bed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/child-extra-bed/child-extra-bed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_2__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */]])
    ], ChildExtraBedComponent);
    return ChildExtraBedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/rate-category/rate-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/rate-category/rate-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"mt-5\">\n    <h2 class=\"mainHeading mb-4\">Create New Rate Category</h2>\n    <div class=\"formSections pb-3  paddingLeft30px pt-0\">\n      <div class=\"form-group col-md-12 p-0\">\n          <h2 class=\"pb-3\">Contract type</h2>\n          <mat-radio-group class=\"disableFields row\">\n              <div class=\"col-md-1\">\n                <mat-radio-button value=\"1\" disabled=\"true\">Static</mat-radio-button>\n              </div>\n              <div class=\"col-md-3\">\n                <mat-radio-button value=\"2\" disabled=\"true\">Dynamic</mat-radio-button>\n              </div>\n          </mat-radio-group>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n          <mat-form-field disabled class=\"disableFields \">\n            <input matInput placeholder=\"Name of your rate category? *\"  required disabled/>\n          </mat-form-field>\n          <span class=\"mb-3 d-block nameNote\">This name is just of you. Not displayed to Customers</span>\n        </div>\n  </div>\n    </div>\n\n\n    <div class=\"formSections pb-3 paddingLeft30px\">\n      <h2>Which room types?</h2>\n    </div>\n\n    <div class=\"formSections pb-3 paddingLeft30px\">\n      <h2>Which cancellation policy?</h2>\n    </div>\n\n    <div class=\"formSections pb-3 paddingLeft30px\">\n      <h2>Which meal types?</h2>\n    </div>\n\n    <div class=\"formSections pb-3 borderBottomNone paddingLeft30px\">\n      <h2>Which market?</h2>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 mt-5 controlButtons mb-4\">\n        <button class=\"genericButton activeButton mat-primary mat-raised-button\" title=\"Save\" (click)=\"saveRateCategory()\">Save</button>\n        <button class=\"genericButton defaultButton mat-raised-button\" mat-raised-button title=\"Cancel\" (click)=\"backToList()\">Cancel</button>\n        <button class=\"genericButton activeButton mat-primary mat-raised-button float-right\" title=\"Continue\" (click)=\"saveAndContinueRateCategory()\">Save &amp; Continue</button>\n      </div>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/rate-category/rate-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
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
var RateCategoryComponent = (function () {
    function RateCategoryComponent(router, activatedRoute, templateUrlNotificationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.templateUrlNotificationService = templateUrlNotificationService;
        this.templateId = this.activatedRoute.parent.snapshot.params['id'];
        templateUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    RateCategoryComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    RateCategoryComponent.prototype.saveRateCategory = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    RateCategoryComponent.prototype.backToList = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    RateCategoryComponent.prototype.saveAndContinueRateCategory = function () {
        this.router.navigate(['/templatemgmt/template', this.templateId, edit, 'allocation']);
    };
    RateCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rate-category',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/rate-category/rate-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/rate-category/rate-category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */]])
    ], RateCategoryComponent);
    return RateCategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/room-type/room-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/room-type/room-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"mt-5\">\n    <form [formGroup] = \"roomTypeForm\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <h1 class=\"mainHeading pb-2\">Create New Room Type</h1>\n        </div>\n      </div>\n\n      <div class=\"row customeRow mt-4\">\n          <div class=\"inlineGroup  col-md-4 col-lg-3 mb-3\">\n            <div class=\"inlineColumn elementSelection\">\n                <mat-checkbox class=\"d-flex pb-2\" *ngIf=\"roomtypeStatus[0]['isConfigurable']\" formControlName=\"roomtype\" ></mat-checkbox>\n            </div>\n            <div class=\"inlineColumn\">\n              <mat-form-field class=\"disableFields\">\n              <mat-select  placeholder=\"Room Type\" required disabled>\n              <mat-option>Room Type</mat-option>\n              <mat-option>Garden Facing</mat-option>\n              <mat-option>Sea Facing</mat-option>\n              </mat-select>\n              </mat-form-field>\n            </div> \n          </div>\n          <div class=\"inlineGroup col-md-4 col-lg-3 mb-3\">\n              <div class=\"inlineColumn elementSelection\">\n                  <mat-checkbox class=\"d-flex pb-2\"  *ngIf=\"roomnameStatus[0]['isConfigurable']\" formControlName=\"roomname\"></mat-checkbox>\n              </div>\n              <div class=\"inlineColumn\">\n                  <mat-form-field class=\"disableFields\">\n                      <input matInput placeholder=\"Room Name\" required disabled />\n                  </mat-form-field>\n              </div>\n          </div>\n          <div class=\"col-md-4 col-lg-3 inlineGroup mb-3\">\n              <div class=\"inlineColumn elementSelection\">\n                <mat-checkbox class=\"d-flex pb-2\" *ngIf=\"roomsizeStatus[0]['isConfigurable']\" formControlName=\"roomsize\"></mat-checkbox>\n              </div>\n              <div class=\"inlineColumn\">\n                  <div class=\"row\">\n                  <div class=\"col-md-7 mr-0 pr-0 pl-3\">\n                  <mat-form-field class=\"disableFields\">\n                    <input matInput placeholder=\"Room Size\" required disabled>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-5 mr-0 pl-0 pr-3\">\n                    <mat-form-field class=\"disableFields\">\n                        <mat-select placeholder=\"m2\">\n                        <mat-option>Sq ft.</mat-option>\n                        </mat-select>\n                        </mat-form-field>\n                  </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"inlineGroup col-md-4 col-lg-3 mb-3\">\n            <div class=\"inlineColumn elementSelection\">\n              <mat-checkbox class=\"d-flex pb-2\" *ngIf=\"totalnumberofroomsStatus[0]['isConfigurable']\" formControlName=\"totalnumberofrooms\"></mat-checkbox>\n            </div>\n            <div class=\"inlineColumn\">\n              <mat-form-field class=\"disableFields\">\n                <input matInput placeholder=\"Number of Rooms \" required disabled />\n              </mat-form-field> \n            </div>  \n          </div>\n         <div class=\"inlineGroup col-md-4 col-lg-3 mb-3\">\n            <div class=\"inlineColumn elementSelection\">\n              <mat-checkbox class=\"d-flex pb-2\" *ngIf=\"totalNumberofdoubleroomsStatus[0]['isConfigurable']\" formControlName=\"totalNumberofdoublerooms\"></mat-checkbox>\n            </div>\n            <div class=\"inlineColumn\">  \n              <mat-form-field class=\"disableFields\">\n                <input matInput placeholder=\"Number of Double Rooms\" disabled/>\n              </mat-form-field>\n            </div>  \n        </div>\n        <div class=\"inlineGroup col-md-4 col-lg-3 mb-3\">\n            <div class=\"inlineColumn elementSelection\">\n              <mat-checkbox class=\"d-flex pb-2\" *ngIf=\"totalnumberofTwinroomsStatus[0]['isConfigurable']\" formControlName=\"totalnumberofTwinrooms\"></mat-checkbox>\n            </div>\n            <div class=\"inlineColumn\">  \n              <mat-form-field class=\"disableFields\">\n                <input matInput placeholder=\"Number of Twin Rooms\" disabled/>\n              </mat-form-field>\n            </div>\n        </div>\n      </div>\n    <div class=\"row pb-5 customeRow\">\n        <div class=\"inlineGroup col-md-4 col-lg-3 mb-0\">\n          <div class=\"inlineColumn elementSelection\">\n            <mat-checkbox class=\"d-flex pb-2\" *ngIf=\"isfreesaleStatus[0]['isConfigurable']\" formControlName=\"isfreesale\"></mat-checkbox>\n          </div>\n          <div class=\"inlineColumn\">   \n            <p for=\"extranetaccountaccess\">Is Free Sale</p>\n            <mat-button-toggle-group class=\"disableFields disabledToggleBtn\">\n              <mat-button-toggle [value]=\"true\" disabled=\"true\">\n                Yes\n              </mat-button-toggle>\n              <mat-button-toggle [value]=\"false\" disabled=\"true\">\n                No\n              </mat-button-toggle>\n            </mat-button-toggle-group>\n          </div>  \n        </div>\n\n        <div class=\"inlineGroup col-md-4  col-lg-3  mb-0\">\n            <div class=\"inlineColumn elementSelection\">\n                <mat-checkbox class=\"d-flex pb-2\" *ngIf=\"smokingroomStatus[0]['isConfigurable']\" formControlName=\"smokingroom\"></mat-checkbox>\n              </div>\n              <div class=\"inlineColumn\">\n                <p for=\"extranetaccountaccess\">Smoking</p>\n                <mat-button-toggle-group class=\"disableFields disabledToggleBtn\">\n                    <mat-button-toggle [value]=\"true\" disabled=\"true\">\n                      Yes\n                    </mat-button-toggle>\n                    <mat-button-toggle [value]=\"false\" disabled=\"true\">\n                      No\n                    </mat-button-toggle>\n                </mat-button-toggle-group>\n              </div>\n        </div>\n      </div>\n    <div class=\"pt-4 formSections pb-4 borderTopDark\">\n      <div class=\"row customeRow mt-3\">\n        <div class=\"col-md-12\">\n            <div class=\"float-left checkBoxDiv\">\n                <mat-checkbox *ngIf=\"roomDescriptionStatus[0]['isConfigurable']\" formControlName=\"roomDescription\"></mat-checkbox>\n              </div>\n              <div class=\"float-left marginLeft10 widthCalculate30\">\n                  <h2 class=\"pb-4\">Room Description</h2>\n                  <mat-form-field class=\"disableFields\">\n                      <textarea rows=\"5\" cols=\"200\" maxlength=\"500\" matInput required disabled></textarea>\n                    </mat-form-field>\n                <p class=\"small text-right lightGrey mb-0\">Max. 500 characters</p>\n              </div>\n        </div>\n      </div>\n    </div>\n  <div class=\"pt-5 borderBottomNone\">\n      <div class=\"row customeRow\">\n        <div class=\"col-md-12\">\n              <div class=\"float-left checkBoxDiv\">\n                  <mat-checkbox class=\"d-flex pb-2\" *ngIf=\"bedoptionsStatus[0]['isConfigurable']\" formControlName=\"bedoptions\">Bed Options</mat-checkbox>\n                </div>\n            <div class=\"col-md-12 float-left marginLeft10 widthCalculate30 p-0\">\n                  <h2 class=\"pb-4\">Bed Options</h2>\n                  <div class=\"row\">\n                      <div class=\"form-group col-md-4 col-lg-3 mt-0 mb-0 paddingLeft15px\">\n                          <mat-form-field class=\"disableFields\">\n                          <mat-select placeholder=\"Number of Guests\" required disabled>\n                            <mat-option>1</mat-option>\n                            <mat-option>2</mat-option>\n                            <mat-option>3</mat-option>\n                            <mat-option>4</mat-option>\n                          </mat-select>\n                          </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"mt-4 mb-4 row lightBlueContainer position-relative pb-3 ml-0 mr-0\">\n                        <div class=\"col-md-12 pl-3 pr-3\">\n                          <div class=\"row customeRow\">\n                            <div class=\"col-md-12 pb-3\"><h6 class=\"semiboldText\">Standard Arrangement</h6></div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-8 p-0\">\n                                    <div class=\"row\">\n                                      <div class=\"col-md-5\">\n                          <mat-form-field class=\"disableFields\">\n                                        <mat-select placeholder=\"Bed Type available\" required disabled>\n                                            <mat-option>Select</mat-option>\n                                        </mat-select>\n                            </mat-form-field>\n                                      </div>\n                                      <div class=\"col-md-2 icon-multiply\"></div>\n                                      <div class=\"col-md-5\">\n                          <mat-form-field class=\"disableFields\">\n                                        <mat-select placeholder=\"Number of Beds\" required disabled>\n                                          <mat-option>1</mat-option>\n                                          <mat-option>2</mat-option>\n                                          <mat-option>3</mat-option>\n                                          <mat-option>4</mat-option>\n                                        </mat-select>\n                            </mat-form-field>\n                                      </div> \n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-4 pt-3 pr-3 controlButtons text-right\">\n                                      <button class=\"genericButton defaultButton genericSmallButton float-none mat-raised-button\" mat-raised-button type=\"button\" title=\"Add Another Bed\">\n                                        Add Another Bed\n                                      </button>\n                                  </div>\n                            </div>\n                \n                      </div>\n                    </div>\n            </div>\n        </div>\n      </div>\n\n      \n</div>\n        <div class=\"col-md-12 mt-4 controlButtons mb-4\">\n          <button class=\"mr-2 genericButton activeButton mat-primary mat-raised-button\" title=\"Save\" type=\"submit\" (click)=\"saveRoomTypeInfo()\">Save</button>\n          <button class=\"genericButton defaultButton mat-raised-button\" mat-raised-button title=\"Cancel\" type=\"submit\" (click) = \"backToList()\">Cancel</button>\n          <button class=\"genericButton activeButton mat-primary mat-raised-button float-right\" title=\"Continue\" type=\"submit\" (click)=\"saveandContinue()\">Save & Continue</button>\n        </div>\n    </form>\n  </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/rate/room-type/room-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("../../../../../src/app/extranet/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_enums__ = __webpack_require__("../../../../../src/app/common/enums.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_extranet_shared_services_templates_template_room_type_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-room-type-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var read = __WEBPACK_IMPORTED_MODULE_5__common_constants__["a" /* CONSTANTS */].operation.read;
var edit = __WEBPACK_IMPORTED_MODULE_5__common_constants__["a" /* CONSTANTS */].operation.edit;
var create = __WEBPACK_IMPORTED_MODULE_5__common_constants__["a" /* CONSTANTS */].operation.create;
var roomTypeInfo = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* EXTRANETCONSTANTS */].templates.roomtype;
var RoomTypeComponent = (function () {
    function RoomTypeComponent(router, activatedRoute, templateRoomTypeDataService, templateUrlNotificationService, snackBar) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.templateRoomTypeDataService = templateRoomTypeDataService;
        this.templateUrlNotificationService = templateUrlNotificationService;
        this.snackBar = snackBar;
        this.templateId = this.activatedRoute.parent.snapshot.params['id'];
        this.roomtype = roomTypeInfo.roomtype;
        this.roomname = roomTypeInfo.roomname;
        this.roomsize = roomTypeInfo.roomsize;
        this.totalnumberofrooms = roomTypeInfo.totalnumberofrooms;
        this.totalNumberofdoublerooms = roomTypeInfo.totalNumberofdoublerooms;
        this.totalnumberofTwinrooms = roomTypeInfo.totalnumberofTwinrooms;
        this.isfreesale = roomTypeInfo.isfreesale;
        this.smokingroom = roomTypeInfo.smokingroom;
        this.roomDescription = roomTypeInfo.roomDescription;
        this.bedoptions = roomTypeInfo.bedoptions;
        templateUrlNotificationService.changeURLRoute(activatedRoute.snapshot.url[0].path);
    }
    RoomTypeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.operation = this.activatedRoute.parent.snapshot.params['operation'];
        this.templateId = this.activatedRoute.parent.snapshot.params['id'];
        this.getRoomTypeFieldsList();
        this.getRoomFieldStatus();
        this.roomTypeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            roomtype: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.roomtypeStatus[0]['isSelected']),
            roomname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.roomnameStatus[0]['isSelected']),
            roomsize: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.roomsizeStatus[0]['isSelected']),
            totalnumberofrooms: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.totalnumberofroomsStatus[0]['isSelected']),
            totalNumberofdoublerooms: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.totalNumberofdoubleroomsStatus[0]['isSelected']),
            totalnumberofTwinrooms: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.totalnumberofTwinroomsStatus[0]['isSelected']),
            isfreesale: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.isfreesaleStatus[0]['isSelected']),
            smokingroom: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.smokingroomStatus[0]['isSelected']),
            roomDescription: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.roomDescriptionStatus[0]['isSelected']),
            bedoptions: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.bedoptionsStatus[0]['isSelected']),
        });
    };
    RoomTypeComponent.prototype.getRoomTypeFieldsList = function () {
        this.templateRoomtypeinfoviewmodel = this.activatedRoute.snapshot.data['roomTypeData'];
        this.roomtypeiFields = this.templateRoomtypeinfoviewmodel.roomFields;
        // console.log('this.templateRoomtypeinfoviewmodel -' + JSON.stringify(this.templateRoomtypeinfoviewmodel));
        // console.log('this.roomtypeiFields -' + JSON.stringify(this.roomtypeiFields));
    };
    RoomTypeComponent.prototype.getRoomFieldStatus = function () {
        var _this = this;
        this.roomtypeStatus = this.roomtypeiFields.filter(function (arr) { return arr.code === _this.roomtype; });
        this.roomnameStatus = this.roomtypeiFields.filter(function (arr) { return arr.code === _this.roomname; });
        this.roomsizeStatus = this.roomtypeiFields.filter(function (arr) { return arr.code === _this.roomsize; });
        this.totalnumberofroomsStatus = this.roomtypeiFields.filter(function (arr) { return arr.code === _this.totalnumberofrooms; });
        this.totalNumberofdoubleroomsStatus = this.roomtypeiFields.filter(function (arr) { return arr.code === _this.totalNumberofdoublerooms; });
        this.totalnumberofTwinroomsStatus = this.roomtypeiFields.filter(function (arr) { return arr.code === _this.totalnumberofTwinrooms; });
        this.isfreesaleStatus = this.roomtypeiFields.filter(function (arr) { return arr.code === _this.isfreesale; });
        this.smokingroomStatus = this.roomtypeiFields.filter(function (arr) { return arr.code === _this.smokingroom; });
        this.roomDescriptionStatus = this.roomtypeiFields.filter(function (arr) { return arr.code === _this.roomDescription; });
        this.bedoptionsStatus = this.roomtypeiFields.filter(function (arr) { return arr.code === _this.bedoptions; });
    };
    RoomTypeComponent.prototype.createSavingData = function (operation) {
        var arrayRoomTypeFields;
        arrayRoomTypeFields = [];
        if (operation === create) {
            this.roomtypeStatus[0]['isSelected'] = this.roomTypeForm.controls['roomtype'].value;
            this.roomtypeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
            arrayRoomTypeFields.push(this.roomtypeStatus[0]);
            this.roomnameStatus[0]['isSelected'] = this.roomTypeForm.controls['roomname'].value;
            this.roomnameStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
            arrayRoomTypeFields.push(this.roomnameStatus[0]);
            this.roomsizeStatus[0]['isSelected'] = this.roomTypeForm.controls['roomsize'].value;
            this.roomsizeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
            arrayRoomTypeFields.push(this.roomsizeStatus[0]);
            this.totalnumberofroomsStatus[0]['isSelected'] = this.roomTypeForm.controls['totalnumberofrooms'].value;
            this.totalnumberofroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
            arrayRoomTypeFields.push(this.totalnumberofroomsStatus[0]);
            this.totalNumberofdoubleroomsStatus[0]['isSelected'] = this.roomTypeForm.controls['totalNumberofdoublerooms'].value;
            this.totalNumberofdoubleroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
            arrayRoomTypeFields.push(this.totalNumberofdoubleroomsStatus[0]);
            this.totalnumberofTwinrooms[0]['isSelected'] = this.roomTypeForm.controls['totalnumberofTwinrooms'].value;
            this.totalnumberofTwinroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
            arrayRoomTypeFields.push(this.totalnumberofTwinroomsStatus[0]);
            this.isfreesaleStatus[0]['isSelected'] = this.roomTypeForm.controls['isfreesale'].value;
            this.isfreesaleStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
            arrayRoomTypeFields.push(this.isfreesaleStatus[0]);
            this.smokingroomStatus[0]['isSelected'] = this.roomTypeForm.controls['smokingroom'].value;
            this.smokingroomStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
            arrayRoomTypeFields.push(this.smokingroomStatus[0]);
            this.roomDescriptionStatus[0]['isSelected'] = this.roomTypeForm.controls['roomDescription'].value;
            this.roomDescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
            arrayRoomTypeFields.push(this.roomDescriptionStatus[0]);
            this.bedoptionsStatus[0]['isSelected'] = this.roomTypeForm.controls['bedoptions'].value;
            this.bedoptionsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
            arrayRoomTypeFields.push(this.bedoptionsStatus[0]);
        }
        else if (operation === edit) {
            if (this.roomtypeStatus[0]['isSelected'] !==
                this.roomTypeForm.controls['roomtype'].value) {
                this.roomtypeStatus[0]['isSelected'] = this.roomTypeForm.controls['roomtype'].value;
                if (this.roomtypeStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_4__common_enums__["c" /* EntityState */].New) {
                    this.roomtypeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.roomtypeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.roomtypeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayRoomTypeFields.push(this.roomtypeStatus[0]);
            if (this.roomnameStatus[0]['isSelected'] !==
                this.roomTypeForm.controls['roomname'].value) {
                this.roomnameStatus[0]['isSelected'] = this.roomTypeForm.controls['roomname'].value;
                if (this.roomnameStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_4__common_enums__["c" /* EntityState */].New) {
                    this.roomnameStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.roomnameStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.roomnameStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayRoomTypeFields.push(this.roomnameStatus[0]);
            if (this.roomsizeStatus[0]['isSelected'] !==
                this.roomTypeForm.controls['roomsize'].value) {
                this.roomsizeStatus[0]['isSelected'] = this.roomTypeForm.controls['roomsize'].value;
                // this.roomsizeStatus[0]['objectState'] = ObjectState.Modified;
                if (this.roomsizeStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_4__common_enums__["c" /* EntityState */].New) {
                    this.roomsizeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.roomsizeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.roomsizeStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayRoomTypeFields.push(this.roomsizeStatus[0]);
            if (this.totalnumberofroomsStatus[0]['isSelected'] !==
                this.roomTypeForm.controls['totalnumberofrooms'].value) {
                this.totalnumberofroomsStatus[0]['isSelected'] = this.roomTypeForm.controls['totalnumberofrooms'].value;
                if (this.totalnumberofroomsStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_4__common_enums__["c" /* EntityState */].New) {
                    this.totalnumberofroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.totalnumberofroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.totalnumberofroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayRoomTypeFields.push(this.totalnumberofroomsStatus[0]);
            if ((this.totalNumberofdoubleroomsStatus[0]['isSelected'] !== this.roomTypeForm.controls['totalNumberofdoublerooms'].value)) {
                this.totalNumberofdoubleroomsStatus[0]['isSelected'] = this.roomTypeForm.controls['totalNumberofdoublerooms'].value;
                if (this.totalNumberofdoubleroomsStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_4__common_enums__["c" /* EntityState */].New) {
                    this.totalNumberofdoubleroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.totalNumberofdoubleroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.totalNumberofdoubleroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayRoomTypeFields.push(this.totalNumberofdoubleroomsStatus[0]);
            if (this.totalnumberofTwinroomsStatus[0]['isSelected'] !==
                this.roomTypeForm.controls['totalnumberofTwinrooms'].value) {
                this.totalnumberofTwinroomsStatus[0]['isSelected'] = this.roomTypeForm.controls['totalnumberofTwinrooms'].value;
                if (this.totalnumberofTwinroomsStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_4__common_enums__["c" /* EntityState */].New) {
                    this.totalnumberofTwinroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.totalnumberofTwinroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.totalnumberofTwinroomsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayRoomTypeFields.push(this.totalnumberofTwinroomsStatus[0]);
            if (this.isfreesaleStatus[0]['isSelected'] !==
                this.roomTypeForm.controls['isfreesale'].value) {
                this.isfreesaleStatus[0]['isSelected'] = this.roomTypeForm.controls['isfreesale'].value;
                if (this.isfreesaleStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_4__common_enums__["c" /* EntityState */].New) {
                    this.isfreesaleStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.isfreesaleStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.isfreesaleStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayRoomTypeFields.push(this.isfreesaleStatus[0]);
            if (this.smokingroomStatus[0]['isSelected'] !==
                this.roomTypeForm.controls['smokingroom'].value) {
                this.smokingroomStatus[0]['isSelected'] = this.roomTypeForm.controls['smokingroom'].value;
                if (this.smokingroomStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_4__common_enums__["c" /* EntityState */].New) {
                    this.smokingroomStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.smokingroomStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.smokingroomStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayRoomTypeFields.push(this.smokingroomStatus[0]);
            if (this.roomDescriptionStatus[0]['isSelected'] !==
                this.roomTypeForm.controls['roomDescription'].value) {
                this.roomDescriptionStatus[0]['isSelected'] = this.roomTypeForm.controls['roomDescription'].value;
                if (this.roomDescriptionStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_4__common_enums__["c" /* EntityState */].New) {
                    this.roomDescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.roomDescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.roomDescriptionStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayRoomTypeFields.push(this.roomDescriptionStatus[0]);
            if (this.bedoptionsStatus[0]['isSelected'] !== this.roomTypeForm.controls['bedoptions'].value) {
                this.bedoptionsStatus[0]['isSelected'] = this.roomTypeForm.controls['bedoptions'].value;
                if (this.bedoptionsStatus[0]['status'] === __WEBPACK_IMPORTED_MODULE_4__common_enums__["c" /* EntityState */].New) {
                    this.bedoptionsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Added;
                }
                else {
                    this.bedoptionsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Modified;
                }
            }
            else {
                this.bedoptionsStatus[0]['objectState'] = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
            }
            arrayRoomTypeFields.push(this.bedoptionsStatus[0]);
        }
        this.templateRoomtypeinfoviewmodel.objectState = __WEBPACK_IMPORTED_MODULE_4__common_enums__["d" /* ObjectState */].Unchanged;
        this.templateRoomtypeinfoviewmodel.roomFields = arrayRoomTypeFields;
    };
    RoomTypeComponent.prototype.saveRoomTypeInfo = function () {
        var _this = this;
        // console.log('Room Type Saving -');
        if (this.roomTypeForm.valid) {
            this.createSavingData(this.operation.toLowerCase().trim());
            // console.log('Save room data -' + JSON.stringify(this.templateRoomtypeinfoviewmodel));
            this.templateRoomTypeDataService.saveTemplateRoomTypeFields(this.templateRoomtypeinfoviewmodel).subscribe(function (response) {
                _this.router.navigate(['/templatemgmt/templates']);
                _this.snackBar.open('Rate Type Template Saved Successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_5__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                window.scrollTo(0, 0);
            });
        }
    };
    RoomTypeComponent.prototype.saveandContinue = function () {
        var _this = this;
        if (this.roomTypeForm.valid) {
            this.createSavingData(this.operation.toLowerCase().trim());
            this.templateRoomTypeDataService.saveTemplateRoomTypeFields(this.templateRoomtypeinfoviewmodel).subscribe(function (response) {
                _this.router.navigate(['/templatemgmt/template', _this.templateId, edit, 'amenities']);
                _this.snackBar.open('Rate Type Template Saved Successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_5__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                window.scrollTo(0, 0);
            });
        }
    };
    RoomTypeComponent.prototype.backToList = function () {
        this.router.navigate(['/templatemgmt/templates']);
    };
    RoomTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-room-type',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/room-type/room-type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/room-type/room-type.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_7__common_extranet_shared_services_templates_template_room_type_data_service__["a" /* TemplateRoomTypeDataService */],
            __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["F" /* MatSnackBar */]])
    ], RoomTypeComponent);
    return RoomTypeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/redirect/redirect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/redirect/redirect.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  redirect works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/redirect/redirect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_templates_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/templates-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewmodel_templates_hotel_info_hotelinfoviewmodel__ = __webpack_require__("../../../../../src/app/extranet/viewmodel/templates/hotel-info/hotelinfoviewmodel.ts");
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
var templateViewModel = new __WEBPACK_IMPORTED_MODULE_4__viewmodel_templates_hotel_info_hotelinfoviewmodel__["a" /* TemplateViewModel */]();
var RedirectComponent = (function () {
    function RedirectComponent(router, activatedRoute, templatesDataService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.templatesDataService = templatesDataService;
    }
    RedirectComponent.prototype.ngOnInit = function () {
        this.tempid = this.activatedRoute.snapshot.params['tempid'];
        templateViewModel.id = +this.tempid;
        // // console.log('Redirect component templateViewModel - ' + JSON.stringify(templateViewModel));
        // this.templatesDataService.getTemplateHotelFields(templateViewModel);
        this.router.navigate(['/templatemgmt/template', this.tempid, edit, 'facilitiesservices']);
    };
    RedirectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-redirect',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/redirect/redirect.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/redirect/redirect.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_templates_data_service__["a" /* TemplatesDataService */]])
    ], RedirectComponent);
    return RedirectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/template-list/template-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".genericTable mat-header-cell, .genericTable mat-row mat-cell {\r\n    width: 28%;\r\n}\r\n\r\n.genericTable mat-header-cell:last-child, .genericTable mat-row mat-cell:last-child {\r\n    width: 16%;\r\n}\r\n.highlight:nth-child(2){\r\n  background-color: #b1e593; /* #55a029;*/\r\n}\r\n.templateNameError {\r\n  margin: -10px 0 15px 0 ;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/template-list/template-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"mt-4 pt-2\">\n\n    <h1 class=\"mainHeading borderBottomNone pb-0\">Templates</h1>\n    <div class=\"row mt-4 mb-5\">\n      <form [formGroup]=\"searchTemplates\" (ngSubmit)=\"findTemplates(searchTemplates.get('searchText').value,searchTemplates.get('startDate').value,searchTemplates.get('endDate').value)\"\n        class=\"w-100\">\n        <div class=\"col-md-12\">\n          <div class=\"lightBlueContainer pb-2 pl-4 pr-4 pt-4\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n\n                  <div class=\"col-md-2\">\n                    <mat-form-field class=\"width80percent\">\n                      <span matPrefix>From &nbsp;</span>\n                      <mat-datepicker-toggle matSuffix [for]=\"sdate\">\n                        <mat-icon matDatepickerToggleIcon>\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                        </mat-icon>\n                      </mat-datepicker-toggle>\n                      <input matInput readonly [matDatepicker]=\"sdate\" placeholder=\"DD-MMM-YY\" formControlName=\"startDate\">\n                      <mat-datepicker #sdate></mat-datepicker>\n                    </mat-form-field>\n                    <span class=\"btn transparent-circle smallDeleteIcon ml-1\" title=\"Delete\">\n                      <i aria-hidden=\"true\" class=\"fa fa-times-thin\" (click)=\"checkIsFromDateCleared();\"></i>\n                    </span>\n                  </div>\n                  <div class=\"col-md-2\">\n                    <mat-form-field class=\"width80percent\">\n                      <span matPrefix>To &nbsp;</span>\n                      <input matInput readonly [matDatepicker]=\"enddate\" placeholder=\"DD-MMM-YY\" formControlName=\"endDate\" [min]=\"searchTemplates.get('startDate').value\">\n                      <mat-datepicker-toggle matSuffix [for]=\"enddate\">\n                        <mat-icon matDatepickerToggleIcon>\n                          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                        </mat-icon>\n                      </mat-datepicker-toggle>\n                      <mat-datepicker #enddate></mat-datepicker>\n                    </mat-form-field>\n                    <span class=\"btn transparent-circle smallDeleteIcon ml-1\" title=\"Delete\">\n                      <i aria-hidden=\"true\" class=\"fa fa-times-thin\" (click)=\"checkIsToDateCleared();\"></i>\n                    </span>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <mat-form-field>\n                      <input matInput placeholder=\"Search by Template Name,  Last Modified By,  Last Modified Date/Time\" formControlName=\"searchText\" (keydown.backspace)=\"checkIsInputCleared()\" (keyup.enter)=\"searchBtn.click()\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-2 text-right controlButtons\">\n                    <button [hidden]='isRead' class=\"genericButton activeButton mat-primary mat-raised-button genericSmallButton top10px\" #searchBtn (click)=\"searchBtn.click()\"\n                      title=\"Search\" type=\"submit\">\n                      Search</button>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"row mb-3\">\n      <div *ngIf=\"createView\" class=\"col-md-12 text-right controlButtons\">\n        <button [hidden]='isRead' class=\"defaultButton genericButton genericSmallButton mat-raised-button\" mat-raised-button title=\"Create New Template\" type=\"button\" (click)=\"createTemplate()\">\n          <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i><span>Create New Template</span>\n        </button>\n      </div>\n    </div>\n    <mat-table #table [dataSource]=\"!isSearch ? templatesDataSource : filteredData\" matSort matSortActive=\"updatedDate\" matSortDirection=\"desc\"\n      class=\"genericTable mb-2 flexNone\">\n\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header (click)=\"makeCopyFalse()\"> Template Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"updatedBy\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header (click)=\"makeCopyFalse()\"> Last Modified By </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.updatedBy}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"updatedDate\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header (click)=\"makeCopyFalse()\"> Last Modified Date/Time </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">\n          <span>{{element.updatedDate |date:'dd-MMM-yy'}}</span>\n          <span class=\"d-inline ml-2\">{{element.updatedDate | date: \"hh:mm a\"}}</span>\n        </mat-cell>\n      </ng-container>\n\n      <ng-container *ngIf=\"createView || deleteView\" matColumnDef=\"actions\" class=\"text-center\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"invisible\"> </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"placeholderColorGray\">\n          <mat-select placeholder=\"Actions\" name=\"Actions\" [(ngModel)]=\"actions\">\n            <mat-option value=\"{{element.id}}-edit\" #edit (click)=\"GoTemplateUpdate(edit.value)\">Edit</mat-option>\n            <mat-option value=\"{{element.id}}-{{element.name}}-copy\" #copy (click)=\"GoTemplateCopy(copy.value)\">Copy</mat-option>\n            <mat-option value=\"{{element.id}}-delete\" #delete (click)=\"GoTemplateDelete(delete.value)\">Delete</mat-option>\n            <mat-option *ngIf=\"deleteView\" value=\"{{element.id}}-delete\">Delete</mat-option>\n          </mat-select>\n        </mat-cell>\n\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': isCopy}\"></mat-row>\n    </mat-table>\n    <br>\n    <br>\n    <div style=\"color:orange\" *ngIf=\"noDataAvailable\">\n      No Template is created.\n    </div>\n    <div class=\"paginationWrapper\">\n      <span class=\"pageCount\" *ngIf=\"!noDataAvailable\">Page: {{(pageEvent) ? pageEvent.pageIndex + 1 : 1}} of {{(pageEvent) ? Math.ceil(pageEvent.length/pageEvent.pageSize)\n        : Math.ceil(totalRecords/20)}}</span>\n      <mat-paginator *ngIf=\"!noDataAvailable\" (click)=\"makeCopyFalse()\" class=\"genericPagination\" (page)=\"pageEvent = $event\" #paginator1\n        [pageSize]=\"20\" [pageSizeOptions]=\"[5, 10, 20, 50]\">\n      </mat-paginator>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/template-list/template-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DatePickerDateAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_templates_templates_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/templates-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_shared_services_user_profile_service__ = __webpack_require__("../../../../../src/app/common/shared/services/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_extranet_shared_dialogs_dialogs_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/dialogs/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__template_animations__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/template-list/template.animations.ts");
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
}(__WEBPACK_IMPORTED_MODULE_7__angular_material_core__["u" /* NativeDateAdapter */]));

var TemplateListComponent = (function () {
    function TemplateListComponent(snackBar, router, activatedRoute, templatesDataService, userProfileService, datepipe, dialogsService, templateDataService, changeDetectorRefs) {
        this.snackBar = snackBar;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.templatesDataService = templatesDataService;
        this.userProfileService = userProfileService;
        this.datepipe = datepipe;
        this.dialogsService = dialogsService;
        this.templateDataService = templateDataService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.deleteView = false;
        this.createView = false;
        this.readView = false;
        this.displayedColumns = []; // ['name', 'createdBy', 'createdDate', 'actions'];
        this.edit = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].operation.edit;
        this.create = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].operation.create;
        this.read = __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].operation.read;
        this.isCopy = false;
        this.Math = Math;
    }
    TemplateListComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        //   const intervalID = setInterval(function(){
        //    // // console.log(new Date());
        //    this.makeCopyFalse();
        // }, 2000);
        this.templateDataService.templateHotelFieldsDetails = undefined;
        this.isSearch = false;
        this.searchTemplates = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            startDate: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](),
            endDate: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](),
            searchText: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]()
        });
        this.getPrivileges();
        this.getTemplateList();
    };
    TemplateListComponent.prototype.createTemplate = function () {
        this.router.navigate(['../template', 0, this.create], {
            relativeTo: this.activatedRoute
        });
    };
    TemplateListComponent.prototype.getPrivileges = function () {
        this.privileges = this.userProfileService.GetUserPermissionsForFeature(__WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].application.extranet, __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].featuretypeid.Templates);
        // // console.log(' ### User Privileges #### ' + this.privileges);
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
        if (this.createView || this.deleteView) {
            this.displayedColumns = ['name', 'updatedBy', 'updatedDate', 'actions'];
        }
        else {
            this.displayedColumns = ['name', 'updatedBy', 'updatedDate'];
        }
    };
    TemplateListComponent.prototype.findTemplates = function (filterValue, filterFrom, filterTo) {
        var _this = this;
        this.makeCopyFalse();
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
        this.filteredData = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatTableDataSource */](this.templatesList.filter(function (template) {
            var searchDate = _this.datepipe.transform(template.createdDate, 'dd-MMM-yy hh:mm a');
            var date = _this.datepipe.transform(template.createdDate, 'yyyy-MM-dd');
            if (filterValue !== null && (filterFrom === null && filterTo === null)) {
                return template.name.toLowerCase().includes(filterValue) ||
                    template.createdBy.toLowerCase().includes(filterValue) ||
                    searchDate.toLowerCase().includes(filterValue);
            }
            else if (filterFrom !== null && (filterTo === null && filterValue === null)) {
                return date >= filterFrom;
            }
            else if (filterTo !== null && (filterFrom === null && filterValue === null)) {
                return date <= filterTo;
            }
            else if (filterValue === null && (filterFrom !== null && filterTo !== null)) {
                return filterFrom <= date && date <= filterTo;
            }
            else if (filterFrom === null && (filterValue !== null && filterTo !== null)) {
                return (template.name.toLowerCase().includes(filterValue) ||
                    template.createdBy.toLowerCase().includes(filterValue) ||
                    searchDate.toLowerCase().includes(filterValue)) &&
                    date <= filterTo;
            }
            else if (filterTo === null && (filterFrom !== null && filterValue !== null)) {
                return (template.name.toLowerCase().includes(filterValue) ||
                    template.createdBy.toLowerCase().includes(filterValue) ||
                    searchDate.toLowerCase().includes(filterValue)) &&
                    date >= filterFrom;
            }
            else if (filterFrom !== null && filterTo !== null && filterValue !== null) {
                return (template.name.toLowerCase().includes(filterValue) ||
                    template.createdBy.toLowerCase().includes(filterValue) ||
                    searchDate.toLowerCase().includes(filterValue)) &&
                    filterFrom <= date && date <= filterTo;
            }
        }));
        this.filteredData.sort = this.sort;
        this.filteredData.paginator = this.paginator;
        this.paginator.firstPage();
    };
    TemplateListComponent.prototype.checkIsInputCleared = function () {
        this.paginator.page.emit();
        if (this.searchTemplates.get('searchText').value.length === 1 &&
            this.searchTemplates.get('startDate').value === null &&
            this.searchTemplates.get('endDate').value === null) {
            this.filteredData = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatTableDataSource */](this.templatesList);
            this.filteredData.paginator = this.paginator;
            this.filteredData.sort = this.sort;
            this.isSearch = false;
        }
    };
    TemplateListComponent.prototype.checkIsFromDateCleared = function () {
        this.paginator.page.emit();
        this.searchTemplates.get('startDate').setValue(null);
        if ((this.searchTemplates.get('searchText').value === null || this.searchTemplates.get('searchText').value === '') &&
            this.searchTemplates.get('endDate').value === null) {
            this.getTemplateList();
        }
    };
    TemplateListComponent.prototype.checkIsToDateCleared = function () {
        this.paginator.page.emit();
        this.searchTemplates.get('endDate').setValue(null);
        if ((this.searchTemplates.get('searchText').value === null || this.searchTemplates.get('searchText').value === '') &&
            this.searchTemplates.get('startDate').value === null) {
            this.getTemplateList();
        }
    };
    TemplateListComponent.prototype.GoTemplateUpdate = function (value) {
        this.isCopy = false;
        var val = value.split('-');
        var templateId = val[0];
        this.operation = val[1];
        this.router.navigate(['../template', templateId, this.operation.trim().toLowerCase()], { relativeTo: this.activatedRoute });
    };
    TemplateListComponent.prototype.GoTemplateCopy = function (value) {
        var _this = this;
        var val = value.split('-');
        var templateId = val[0];
        var templateName = val[1];
        this.operation = val[2];
        this.dialogsService
            .openCopyModal(templateId, templateName, this.templatesList).subscribe(function (res) {
            _this.result = res;
            if (_this.result !== null) {
                _this.templatesDataService.copyTemplate(_this.result).subscribe(function (response) {
                    // console.log(JSON.stringify(response));
                    _this.snackBar.open('The copy of the template is created successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
                    _this.getTemplateList();
                    _this.isCopy = true;
                });
            }
            _this.actions = null;
        });
    };
    TemplateListComponent.prototype.GoTemplateDelete = function (value) {
        var _this = this;
        this.isCopy = false;
        this.isCopy = false;
        var val = value.split('-');
        var templateId = val[0];
        this.dialogsService
            .confirm('Confirm', 'Are you sure you want to delete this template?').subscribe(function (res) {
            _this.result = res;
            if (_this.result) {
                _this.deleteTemplate(templateId);
            }
            else {
                _this.actions = null;
            }
        });
    };
    TemplateListComponent.prototype.deleteTemplate = function (templateId) {
        var _this = this;
        this.templatesDataService.deleteTemplate(templateId).subscribe(function (isDeleted) {
            _this.isDeleted = isDeleted;
            _this.snackBar.open('Template Deleted Successfully', '', { duration: __WEBPACK_IMPORTED_MODULE_3__common_constants__["a" /* CONSTANTS */].toasterTimeOut.duration, verticalPosition: 'top', panelClass: 'showSnackBar' });
            _this.getTemplateList();
        });
    };
    TemplateListComponent.prototype.getTemplateList = function () {
        var _this = this;
        this.isSearch = false;
        this.templatesDataService.getTemplatesList().subscribe(function (templatesList) {
            if (templatesList !== null) {
                _this.templatesDataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["K" /* MatTableDataSource */](templatesList.result);
                // // console.log('templatesList.result - ' + JSON.stringify(templatesList.result));
                _this.changeDetectorRefs.detectChanges();
                _this.templatesList = templatesList.result;
                _this.totalRecords = _this.templatesList.length;
                _this.templatesDataService.templateListDto = templatesList.result;
                _this.paginator._pageIndex = 0;
                _this.templatesDataSource.paginator = _this.paginator;
                _this.templatesDataSource.sort = _this.sort;
                if (templatesList.result.length === 0) {
                    _this.noDataAvailable = true;
                }
                else {
                    _this.noDataAvailable = false;
                }
            }
            else {
                _this.noDataAvailable = true;
            }
        });
        window.scrollTo(0, 0);
    };
    TemplateListComponent.prototype.makeCopyFalse = function () {
        // // console.log(this.paginator);
        this.isCopy = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TemplateListComponent.prototype, "_dateValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatPaginator */])
    ], TemplateListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["H" /* MatSort */])
    ], TemplateListComponent.prototype, "sort", void 0);
    TemplateListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-template-list',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/template-list/template-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/template-list/template-list.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["c" /* DateAdapter */], useClass: DatePickerDateAdapter },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["f" /* MAT_DATE_FORMATS */], useValue: DATE_FORMATS },
            ],
            animations: [__WEBPACK_IMPORTED_MODULE_10__template_animations__["a" /* rowsAnimation */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_templates_templates_data_service__["a" /* TemplatesDataService */],
            __WEBPACK_IMPORTED_MODULE_6__common_shared_services_user_profile_service__["a" /* UserProfileService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_9__common_extranet_shared_dialogs_dialogs_service__["a" /* DialogsService */],
            __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_templates_templates_data_service__["a" /* TemplatesDataService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], TemplateListComponent);
    return TemplateListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/template-list/template.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rowsAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var rowsAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["trigger"])('rowsAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["transition"])('void => *', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["sequence"])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('.55s ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ background: 'green', height: '*', opacity: '.2', transform: 'translateX(0)', 'box-shadow': 'none' })),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["animate"])('.55s ease', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["style"])({ height: '*', opacity: 1, transform: 'translateX(0)' }))
        ])
    ])
]);


/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/template-nav-menu/template-nav-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/template-nav-menu/template-nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <div class=\"mt-4\">\n    <div class=\"customBreadcrumb mb-4\">\n        <span>Template </span><span>&gt; {{breadcrumbs}} Template</span>\n    </div>\n    <h1 class=\"mainHeading borderBottomNone customBreadcrumb\">{{breadcrumbs}} Template <span class=\"mandatoryInfo float-right\">Indicates Mandatory Fields</span></h1>\n    <p class=\"m-0\">Complete below steps to create your new template</p>\n    <div class=\"row mb-4 mt-5\">\n      <div class=\"col-md-12\">\n        <div class=\"lightBlueContainer pb-2 pl-2 pr-2 pt-3 mb-3\">\n          <div class=\"form-group col-md-4 mb-0\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Template Name\"  (keyup)=\"checkTemplateName()\" (change)=\"getTemplateName()\" [(ngModel)]=\"templateName\"\n                required  [disabled]=\"isNameEditable\"/>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-12 templateNameError\">\n            <mat-error *ngIf=\"uniqueNameError\">\n              Template name already exists.\n            </mat-error>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mb-4\">\n      <mat-chip-list *ngIf=\"isDisabledTab\" class=\"genericProcessFlow\">\n        <mat-chip *ngFor=\" let chip of chipsList; let i=index\" [selected]=\"chip.selected\" [color]=\"chip.chipcolor\" disabled>\n          <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-stack-1x fa-inverse\">{{i+1}}</i>\n          </span>{{chip.chipname}}</mat-chip>\n      </mat-chip-list>\n      <mat-chip-list *ngIf=\"!isDisabledTab\" class=\"genericProcessFlow\">\n        <mat-chip *ngFor=\" let chip of chipsList; let i=index\" (click)=\"changeChip(chip, chipsList)\" [selected]=\"chip.selected\" [color]=\"chip.chipcolor\"\n          [routerLink]=\"[chip.routerLink]\">\n          <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-stack-1x fa-inverse\">{{i+1}}</i>\n          </span>{{chip.chipname}}</mat-chip>\n      </mat-chip-list>\n    </div>\n    <nav mat-tab-nav-bar *ngIf=\"showhotelinfo\" id=\"hotelinfo\" class=\"genericTab mb-4\">\n      <a mat-tab-link routerLinkActive=\"active\" label=\"Hotel Info\" [routerLink]=\"['hoteldetails']\">Hotel Info</a>\n      <a *ngIf=\"!isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"Facilities and Services\" [routerLink]=\"['facilitiesservices']\">Facilities and Services</a>\n      <a *ngIf=\"isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"Facilities and Services\">Facilities and Services</a>\n    </nav>\n    <nav mat-tab-nav-bar *ngIf=\"showRate\" id=\"rate\" class=\"genericTab mb-4\">\n      <a *ngIf=\"!isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"room type\" [routerLink]=\"['roomtype']\">Room Type</a>\n      <a *ngIf=\"!isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"amenities\" [routerLink]=\"['amenities']\">Amenities</a>\n      <a *ngIf=\"!isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"mealplan\" [routerLink]=\"['mealplan']\">Meal Plan</a>\n\n      <a *ngIf=\"!isDisabledTab && !iscancellationpolicy\" mat-tab-link routerLinkActive=\"active\" label=\"Policies\" [routerLink]=\"['childpolicy']\">Policies</a>\n\n      <a *ngIf=\"!isDisabledTab && iscancellationpolicy\" mat-tab-link routerLinkActive=\"active\" label=\"Policies\" [routerLink]=\"['cancellationpolicy']\">Policies</a>\n\n      <a *ngIf=\"!isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"rate category\" [routerLink]=\"['ratecategory']\">Rate Category</a>\n\n      <a *ngIf=\"isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"room type\">Room Type</a>\n      <a *ngIf=\"isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"amenities\">Amenities</a>\n      <a *ngIf=\"isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"mealplan\">Meal Plan</a>\n      <a *ngIf=\"isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"Policies\">Policies</a>\n      <a *ngIf=\"isDisabledTab\" mat-tab-link routerLinkActive=\"active\" label=\"rate category\">Rate Category</a>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/template-nav-menu/template-nav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateNavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_extranet_shared_services_templates_template_name_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-name-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_extranet_shared_services_templates_templates_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/templates-data.service.ts");
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
var TemplateNavMenuComponent = (function () {
    function TemplateNavMenuComponent(activatedRoute, router, templatesDataService, templateNameDataService, templateUrlNotificationService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.templatesDataService = templatesDataService;
        this.templateNameDataService = templateNameDataService;
        this.templateUrlNotificationService = templateUrlNotificationService;
        this.colorClass = '';
        this.state1 = true;
        this.state2 = false;
        this.state3 = false;
        this.state4 = false;
        this.iscancellationpolicy = false;
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
                routerLink: 'roomtype',
                selected: false
            },
            {
                chipId: 3,
                chipname: 'Allocations',
                chipcolor: 'accent',
                chipchild: 'allocation',
                routerLink: 'allocation',
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
    }
    TemplateNavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.operation = this.activatedRoute.snapshot.params['operation'];
        this.templateId = +this.activatedRoute.snapshot.params['id'];
        if (this.operation === create) {
            this.breadcrumbs = 'Create New ';
        }
        else {
            this.breadcrumbs = 'Edit ';
        }
        this.templateUrlNotificationService.urlPath.subscribe(function (path) {
            if (_this.operation === edit && _this.templatesDataService.templateHotelFieldsDetails !== undefined) {
                _this.templateName = _this.templatesDataService.templateHotelFieldsDetails.name;
            }
            else if (_this.operation === edit) {
                _this.templateName = _this.templatesDataService.newTemplateName;
            }
            if (_this.router.url.indexOf('hoteldetails') >= 0) {
                _this.isNameEditable = false;
            }
            else {
                _this.isNameEditable = true;
            }
            if (_this.router.url.indexOf('cancellationpolicy') >= 0) {
                _this.iscancellationpolicy = true;
            }
            else {
                _this.iscancellationpolicy = false;
            }
            if (_this.operation.trim().toLocaleLowerCase() === create && _this.templateId === 0) {
                _this.isDisabledTab = true;
            }
            else {
                _this.isDisabledTab = false;
            }
            _this.path = path;
            if (_this.path === 'hoteldetails' || _this.path === 'facilitiesservices') {
                _this.changeChip(_this.chipsList[0], _this.chipsList);
            }
            else if (_this.path === 'roomtype' || _this.path === 'amenities' ||
                _this.path === 'mealplan' || _this.path === 'ratecategory' || _this.path === 'childpolicy'
                || _this.path === 'cancellationpolicy') {
                _this.changeChip(_this.chipsList[1], _this.chipsList);
            }
            else if (_this.path === 'allocation') {
                _this.changeChip(_this.chipsList[2], _this.chipsList);
            }
            else if (_this.path === 'contractterms') {
                _this.changeChip(_this.chipsList[3], _this.chipsList);
            }
        });
        if (this.templateName !== '') {
            this.getTemplateName();
        }
        this.showhotelinfo = true;
        this.showRate = false;
    };
    TemplateNavMenuComponent.prototype.getTemplateName = function () {
        if (this.router.url.indexOf('hoteldetails') >= 0) {
            this.isNameEditable = false;
        }
        else {
            this.isNameEditable = true;
        }
        // this.checkUniqueTemplateName();
        if (this.uniqueNameError) {
            this.templateNameDataService.changeTemplateName('');
        }
        else {
            this.templateNameDataService.changeTemplateName(this.templateName);
        }
    };
    TemplateNavMenuComponent.prototype.checkTemplateName = function () {
        if (this.router.url.indexOf('hoteldetails') >= 0) {
            this.isNameEditable = false;
        }
        else {
            this.isNameEditable = true;
        }
        this.checkUniqueTemplateName();
        // if (this.uniqueNameError === true) {
        //    this.templateNameDataService.changeTemplateName('');
        // } else {
        //    this.templateNameDataService.changeTemplateName(this.templateName);
        // }
    };
    TemplateNavMenuComponent.prototype.checkUniqueTemplateName = function () {
        var _this = this;
        if (this.templateName !== undefined && this.templateName !== null) {
            if (this.templatesDataService.templateListDto === undefined) {
                this.uniqueNameError = false;
            }
            else {
                this.templatesDataService.templateNameExist(this.templateName.trim()).subscribe(function (data) {
                    if (data.result === false) {
                        _this.uniqueNameError = false;
                        _this.templateNameDataService.changeTemplateName(_this.templateName);
                    }
                    else {
                        _this.uniqueNameError = true;
                        _this.templateNameDataService.changeTemplateName('');
                    }
                });
            }
        }
    };
    TemplateNavMenuComponent.prototype.changeChip = function (chip, chipsList) {
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
    };
    TemplateNavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-template-nav-menu',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/template-nav-menu/template-nav-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/template-nav-menu/template-nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"],
            __WEBPACK_IMPORTED_MODULE_5__common_extranet_shared_services_templates_templates_data_service__["a" /* TemplatesDataService */],
            __WEBPACK_IMPORTED_MODULE_2__common_extranet_shared_services_templates_template_name_data_service__["a" /* TemplateNameDataService */],
            __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */]])
    ], TemplateNavMenuComponent);
    return TemplateNavMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/template/template.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/template/template.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  template works!\n</p> -->\n<div>\n  <app-template-nav-menu></app-template-nav-menu>\n</div>\n<div >\n  <div class=\"body-style\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/template/template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants__ = __webpack_require__("../../../../../src/app/common/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_templates_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/templates-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_templates_template_name_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-name-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var read = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.read;
var edit = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.edit;
var create = __WEBPACK_IMPORTED_MODULE_1__common_constants__["a" /* CONSTANTS */].operation.create;
var TemplateComponent = (function () {
    // templateViewModel: TemplateViewModel;
    function TemplateComponent(activatedRoute, templateDataService, templateNameDataService) {
        this.activatedRoute = activatedRoute;
        this.templateDataService = templateDataService;
        this.templateNameDataService = templateNameDataService;
    }
    TemplateComponent.prototype.ngOnInit = function () {
        this.operation = this.activatedRoute.snapshot.params['operation'];
        this.templateId = this.activatedRoute.snapshot.params['id'];
        this.getTemplateDetails();
    };
    TemplateComponent.prototype.getTemplateDetails = function () {
        // // console.log('I M at getTemplateDetails from Template component' + JSON.stringify(this.templateDataService.templateHotelFieldsDetails));
        console.log('this.operation -' + this.operation);
        if (this.operation === edit && this.templateDataService.templateHotelFieldsDetails !== undefined) {
            this.templateName = this.templateDataService.templateHotelFieldsDetails.name;
            this.templateNameDataService.changeTemplateName(this.templateName);
        }
    };
    TemplateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-template',
            template: __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/template/template.component.html"),
            styles: [__webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/template/template.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__common_extranet_shared_services_templates_templates_data_service__["a" /* TemplatesDataService */],
            __WEBPACK_IMPORTED_MODULE_4__common_extranet_shared_services_templates_template_name_data_service__["a" /* TemplateNameDataService */]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/templates-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatesRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedTemplateComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotel_info_hotel_details_hotel_details_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/hotel-details/hotel-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__template_template_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/template/template.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__allocations_allocations_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/allocations/allocations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__template_list_template_list_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/template-list/template-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__template_nav_menu_template_nav_menu_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/template-nav-menu/template-nav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contract_terms_contract_terms_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/contract-terms/contract-terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rate_room_type_room_type_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/room-type/room-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rate_amenities_amenities_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/amenities/amenities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rate_meal_plan_meal_plan_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/meal-plan/meal-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rate_rate_category_rate_category_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/rate-category/rate-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rate_policies_child_extra_bed_child_extra_bed_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/child-extra-bed/child-extra-bed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rate_policies_cancellation_payment_cancellation_payment_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/rate/policies/cancellation-payment/cancellation-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hotel_info_facilities_services_facilities_services_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/hotel-info/facilities-services/facilities-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_extranet_shared_services_templates_template_hotel_fields_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-hotel-fields-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__redirect_redirect_component__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/redirect/redirect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_extranet_shared_services_templates_template_facilities_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-facilities-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_extranet_shared_services_mealtypes_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/mealtypes-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_extranet_shared_services_cuisinetypes_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/cuisinetypes-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_extranet_shared_services_currency_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/currency-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_extranet_shared_services_templates_template_room_type_fields_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-room-type-fields-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_extranet_shared_services_templates_contract_terms_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/contract-terms-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_extranet_shared_services_templates_template_amenities_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-amenities-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__common_extranet_shared_services_templates_templates_data_resolver_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/templates-data-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var routes = [
    { path: '', redirectTo: 'templates', pathMatch: 'full' },
    { path: 'templates', component: __WEBPACK_IMPORTED_MODULE_5__template_list_template_list_component__["a" /* TemplateListComponent */], resolve: { templateListData: __WEBPACK_IMPORTED_MODULE_24__common_extranet_shared_services_templates_templates_data_resolver_service__["a" /* TemplatesDataResolverService */] } },
    { path: 'redirect/:tempid', component: __WEBPACK_IMPORTED_MODULE_16__redirect_redirect_component__["a" /* RedirectComponent */] },
    {
        path: 'template/:id/:operation', component: __WEBPACK_IMPORTED_MODULE_3__template_template_component__["a" /* TemplateComponent */],
        children: [
            { path: '', redirectTo: 'hoteldetails', pathMatch: 'full' },
            {
                path: 'hoteldetails', component: __WEBPACK_IMPORTED_MODULE_2__hotel_info_hotel_details_hotel_details_component__["a" /* HotelDetailsComponent */],
                resolve: { hotelFieldData: __WEBPACK_IMPORTED_MODULE_15__common_extranet_shared_services_templates_template_hotel_fields_resolver_service__["a" /* TemplateHotelFieldsResolverService */] }
            },
            {
                path: 'facilitiesservices',
                component: __WEBPACK_IMPORTED_MODULE_14__hotel_info_facilities_services_facilities_services_component__["a" /* FacilitiesServicesComponent */],
                resolve: { facilityData: __WEBPACK_IMPORTED_MODULE_17__common_extranet_shared_services_templates_template_facilities_resolver_service__["a" /* TemplateFacilitiesResolverService */] }
            },
            {
                path: 'roomtype', component: __WEBPACK_IMPORTED_MODULE_8__rate_room_type_room_type_component__["a" /* RoomTypeComponent */],
                resolve: { roomTypeData: __WEBPACK_IMPORTED_MODULE_21__common_extranet_shared_services_templates_template_room_type_fields_resolver_service__["a" /* TemplateRoomTypeFieldsResolverService */] }
            },
            {
                path: 'amenities',
                component: __WEBPACK_IMPORTED_MODULE_9__rate_amenities_amenities_component__["a" /* AmenitiesComponent */],
                resolve: { amenitiesData: __WEBPACK_IMPORTED_MODULE_23__common_extranet_shared_services_templates_template_amenities_resolver_service__["a" /* TemplateAmenitiesResolverService */] }
            },
            {
                path: 'mealplan', component: __WEBPACK_IMPORTED_MODULE_10__rate_meal_plan_meal_plan_component__["a" /* MealPlanComponent */],
                resolve: {
                    currencyData: __WEBPACK_IMPORTED_MODULE_20__common_extranet_shared_services_currency_resolver_service__["a" /* CurrencyResolverService */], mealTypesData: __WEBPACK_IMPORTED_MODULE_18__common_extranet_shared_services_mealtypes_resolver_service__["a" /* MealtypesResolverService */],
                    cuisineTypesData: __WEBPACK_IMPORTED_MODULE_19__common_extranet_shared_services_cuisinetypes_resolver_service__["a" /* CuisinetypesResolverService */]
                }
            },
            { path: 'childpolicy', component: __WEBPACK_IMPORTED_MODULE_12__rate_policies_child_extra_bed_child_extra_bed_component__["a" /* ChildExtraBedComponent */] },
            { path: 'cancellationpolicy', component: __WEBPACK_IMPORTED_MODULE_13__rate_policies_cancellation_payment_cancellation_payment_component__["a" /* CancellationPaymentComponent */] },
            { path: 'ratecategory', component: __WEBPACK_IMPORTED_MODULE_11__rate_rate_category_rate_category_component__["a" /* RateCategoryComponent */] },
            { path: 'allocation', component: __WEBPACK_IMPORTED_MODULE_4__allocations_allocations_component__["a" /* AllocationsComponent */] },
            {
                path: 'contractterms',
                component: __WEBPACK_IMPORTED_MODULE_7__contract_terms_contract_terms_component__["a" /* ContractTermsComponent */],
                resolve: { contractTermsData: __WEBPACK_IMPORTED_MODULE_22__common_extranet_shared_services_templates_contract_terms_resolver_service__["a" /* ContractTermsResolverService */], hotelFieldData: __WEBPACK_IMPORTED_MODULE_15__common_extranet_shared_services_templates_template_hotel_fields_resolver_service__["a" /* TemplateHotelFieldsResolverService */] }
            },
        ]
    },
];
var TemplatesRoutingModule = (function () {
    function TemplatesRoutingModule() {
    }
    TemplatesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], TemplatesRoutingModule);
    return TemplatesRoutingModule;
}());

var routedTemplateComponents = [
    __WEBPACK_IMPORTED_MODULE_2__hotel_info_hotel_details_hotel_details_component__["a" /* HotelDetailsComponent */],
    __WEBPACK_IMPORTED_MODULE_14__hotel_info_facilities_services_facilities_services_component__["a" /* FacilitiesServicesComponent */],
    __WEBPACK_IMPORTED_MODULE_3__template_template_component__["a" /* TemplateComponent */],
    __WEBPACK_IMPORTED_MODULE_4__allocations_allocations_component__["a" /* AllocationsComponent */],
    __WEBPACK_IMPORTED_MODULE_5__template_list_template_list_component__["a" /* TemplateListComponent */],
    __WEBPACK_IMPORTED_MODULE_6__template_nav_menu_template_nav_menu_component__["a" /* TemplateNavMenuComponent */],
    __WEBPACK_IMPORTED_MODULE_7__contract_terms_contract_terms_component__["a" /* ContractTermsComponent */],
    __WEBPACK_IMPORTED_MODULE_8__rate_room_type_room_type_component__["a" /* RoomTypeComponent */],
    __WEBPACK_IMPORTED_MODULE_9__rate_amenities_amenities_component__["a" /* AmenitiesComponent */],
    __WEBPACK_IMPORTED_MODULE_10__rate_meal_plan_meal_plan_component__["a" /* MealPlanComponent */],
    __WEBPACK_IMPORTED_MODULE_11__rate_rate_category_rate_category_component__["a" /* RateCategoryComponent */],
    __WEBPACK_IMPORTED_MODULE_12__rate_policies_child_extra_bed_child_extra_bed_component__["a" /* ChildExtraBedComponent */],
    __WEBPACK_IMPORTED_MODULE_13__rate_policies_cancellation_payment_cancellation_payment_component__["a" /* CancellationPaymentComponent */],
    __WEBPACK_IMPORTED_MODULE_16__redirect_redirect_component__["a" /* RedirectComponent */]
];


/***/ }),

/***/ "../../../../../src/app/extranet/contract-mgmt/templates/templates.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesModule", function() { return TemplatesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__templates_routing_module__ = __webpack_require__("../../../../../src/app/extranet/contract-mgmt/templates/templates-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_material_material_module__ = __webpack_require__("../../../../../src/app/common/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_extranet_shared_services_templates_template_name_data_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-name-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_templates_template_url_notification_service__ = __webpack_require__("../../../../../src/app/extranet/common/extranet-shared/services/templates/template-url-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TemplatesModule = (function () {
    function TemplatesModule() {
    }
    TemplatesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__templates_routing_module__["a" /* TemplatesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__common_material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__templates_routing_module__["b" /* routedTemplateComponents */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_5__common_extranet_shared_services_templates_template_name_data_service__["a" /* TemplateNameDataService */], __WEBPACK_IMPORTED_MODULE_6__common_extranet_shared_services_templates_template_url_notification_service__["a" /* TemplateUrlNotificationService */]]
        })
    ], TemplatesModule);
    return TemplatesModule;
}());



/***/ })

});
//# sourceMappingURL=templates.module.chunk.js.map