(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboardtreatmentplan-onboardtreatmentplan-module"],{

/***/ "./src/app/onboardtreatmentplan/onboardtreatmentplan.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/onboardtreatmentplan/onboardtreatmentplan.module.ts ***!
  \*********************************************************************/
/*! exports provided: OnboardtreatmentplanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardtreatmentplanPageModule", function() { return OnboardtreatmentplanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _onboardtreatmentplan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboardtreatmentplan.page */ "./src/app/onboardtreatmentplan/onboardtreatmentplan.page.ts");







var routes = [
    {
        path: '',
        component: _onboardtreatmentplan_page__WEBPACK_IMPORTED_MODULE_6__["OnboardtreatmentplanPage"]
    }
];
var OnboardtreatmentplanPageModule = /** @class */ (function () {
    function OnboardtreatmentplanPageModule() {
    }
    OnboardtreatmentplanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_onboardtreatmentplan_page__WEBPACK_IMPORTED_MODULE_6__["OnboardtreatmentplanPage"]]
        })
    ], OnboardtreatmentplanPageModule);
    return OnboardtreatmentplanPageModule;
}());



/***/ }),

/***/ "./src/app/onboardtreatmentplan/onboardtreatmentplan.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/onboardtreatmentplan/onboardtreatmentplan.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\n  <h2 class='ion-header' style=\"padding-bottom: 8%\">\n      My Treatment Plan\n  </h2>\n  <h3 style=\"padding-bottom: 10%\">\n      Next we need you to enter your Prednisolone treatment plan.\n      You will need your doctor to complete this step for you.\n      Fill in all dosages in milligrams.\n  </h3>\n  \n  <h2 class='ion-header' style=\"padding-bottom: 8%\">\n      Maintenance Dose\n  </h2>\n  \n  <form [formGroup]=\"treatmentForm\" novalidate (ngSubmit)=\"save(treatmentForm)\"> \n    <ion-grid>\n        <ion-row>\n        <ion-col>\n            <h4>Amount:</h4>\n            <h4>(mg)</h4>\n            <h5>\n                <input formControlName=\"maintenanceDose\" type=\"number\" class=\"rcorners1\">\n            </h5>\n        </ion-col>\n        <ion-col>\n            <h4>Duration:</h4>\n            <h4>Until</h4>\n            <h4>Otherwise</h4>\n        </ion-col>\n        <ion-col>\n            <h4>Times:</h4>\n            <h4>(per int)</h4>\n            <h5>\n                <input formControlName=\"maintenanceTimes\" type=\"number\" value=\"\" class=\"rcorners1\">\n            </h5>\n        </ion-col>\n        <ion-col>\n            <h4>Interval:</h4>\n            <h4>(days)</h4>\n            <h5>\n                <input formControlName=\"maintenanceInterval\" type=\"number\" value=\"\" class=\"rcorners1\">\n            </h5>\n        </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.maintenanceDose\">\n              <div class=\"error-messages\" *ngIf=\"treatmentForm.get('maintenanceDose').hasError(error.type) && (treatmentForm.get('maintenanceDose').dirty || treatmentForm.get('maintenanceDose').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n    </div>\n      <h3 style=\"padding-bottom: 10%\">\n          Your maintenance dose is how much Predisolone, in mg, you should\n          be taking daily, regardless of whether you have relapsed.\n      </h3>\n      <h2 class='ion-header' style=\"padding-bottom: 8%\">\n          Relapse Plan\n      </h2>\n      <h3>\n          The relapse plan will activate if you have 3 consecutive days of high\n          protein readings! You will be required to take extra medication until\n          your protein levels return to normal.\n          <p>Please enter amounts in mg and times in number of days</p>\n      </h3>\n  \n      <ion-grid>\n          <ion-row>\n          <ion-col>\n              <h4>Amount:</h4>\n              <h4>(mg)</h4>\n              <h5>\n                  <input formControlName=\"relapseAmount\" type=\"number\" class=\"rcorners1\">\n              </h5>\n          </ion-col>\n          <ion-col>\n            <h4>Duration:</h4>\n            <h4>Until</h4>\n            <h4>Remission</h4>\n          </ion-col>\n          <ion-col>\n              <h4>Times:</h4>\n              <h4>(per int)</h4>\n              <h5>\n                  <input formControlName=\"relapseTimes\" type=\"number\" value=\"\" class=\"rcorners1\">\n              </h5>\n          </ion-col>\n          <ion-col>\n              <h4>Interval:</h4>\n              <h4>(days)</h4>\n              <h5>\n                  <input formControlName=\"relapseInterval\" type=\"number\" value=\"\" class=\"rcorners1\">\n              </h5>\n          </ion-col>\n          </ion-row>\n      </ion-grid>\n      <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.maintenanceDose\">\n              <div class=\"error-messages\" *ngIf=\"treatmentForm.get('relapseAmount').hasError(error.type) && (treatmentForm.get('relapseAmount').dirty || treatmentForm.get('relapseAmount').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n    </div>\n      <h2 class='ion-header' style=\"padding-bottom: 8%\" style=\"padding-top: 10%\">\n          Remission Plan\n      </h2>\n      <h3>\n          The remission plan will be activated when you are in a relapse and\n          have 3 consecutive days of low protein levels.\n      </h3>\n      <ion-grid>\n          <ion-row>\n          <ion-col>\n              <h4>Amount:</h4>\n              <h4>(mg)</h4>\n              <h5>\n                  <input formControlName=\"remissionAmount\" type=\"number\" class=\"rcorners1\">\n  \n              </h5>\n          </ion-col>\n          <ion-col>\n              <h4>Duration:</h4>\n              <h4>(days)</h4>\n              <h5>\n                  <input formControlName=\"remissionDuration\" type=\"number\" value=\"\" class=\"rcorners1\">\n              </h5>\n          </ion-col>\n          <ion-col>\n              <h4>Times:</h4>\n              <h4>(per int)</h4>\n              <h5>\n                  <input formControlName=\"remissionTimes\" type=\"number\" value=\"\" class=\"rcorners1\">\n              </h5>\n          </ion-col>\n          <ion-col width=\"25%\">\n              <h4>Interval:</h4>\n              <h4>(days)</h4>\n              <h5>\n                  <input formControlName=\"remissionInterval\" type=\"number\" value=\"\" class=\"rcorners1\">\n              </h5>\n          </ion-col>\n          </ion-row>\n      </ion-grid>\n      <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.maintenanceDose\">\n              <div class=\"error-messages\" *ngIf=\"treatmentForm.get('remissionAmount').hasError(error.type) && (treatmentForm.get('remissionAmount').dirty || treatmentForm.get('remissionAmount').touched)\">\n                {{ error.message }}\n              </div>\n            </ng-container>\n    </div>\n      <ion-grid>\n          <ion-row>\n              <ion-col>\n                  <div formArrayName=\"moreRemissionAmount\">\n                      <div *ngFor=\"let remissionControl of treatmentForm.get('moreRemissionAmount').controls; let i = index\">\n                          <h5>\n                              <input [formControlName]=\"i\"  type=\"number\" value=\"\" class=\"rcorners1\">\n                          </h5>\n                      </div>\n                  </div>\n              </ion-col>\n              <ion-col>\n                  <div formArrayName=\"moreRemissionDuration\">\n                      <div *ngFor=\"let remissionControl of treatmentForm.get('moreRemissionDuration').controls; let i = index\">\n                          <h5>\n                              <input [formControlName]=\"i\"  type=\"number\" value=\"\" class=\"rcorners1\">\n                          </h5>\n                      </div>\n                  </div>\n              </ion-col>\n              <ion-col>\n                  <div formArrayName=\"moreRemissionTimes\">\n                      <div *ngFor=\"let remissionControl of treatmentForm.get('moreRemissionTimes').controls; let i = index\">\n                          <h5>\n                              <input [formControlName]=\"i\"  type=\"number\" value=\"\" class=\"rcorners1\">\n                          </h5>\n                      </div>\n                  </div>\n              </ion-col>\n              <ion-col>\n                  <div formArrayName=\"moreRemissionInterval\">\n                      <div *ngFor=\"let remissionControl of treatmentForm.get('moreRemissionInterval').controls; let i = index\">\n                          <h5>\n                              <input [formControlName]=\"i\"  type=\"number\" value=\"\" class=\"rcorners1\">\n                          </h5>\n                      </div>\n                  </div>\n              </ion-col>\n          </ion-row>\n      </ion-grid>\n  \n      <div class=\"box\">\n      <h6>\n          <ion-button class=\"bottom-left\" size=\"small\" (click)=\"removeRemissionAmount(i); removeRemissionDuration(i); removeRemissionTimes(i); removeRemissionInterval(i)\">-</ion-button>\n      </h6>\n      <h4>\n        <ion-button class=\"bottom-right\" size=\"small\" (click)=\"addRemissionAmount(i); addRemissionDuration(i); addRemissionTimes(i); addRemissionInterval(i)\">+   Add another step</ion-button>\n      </h4>\n      </div>\n  \n      <div class=\"box\" style=\"padding-top: 10%\">\n      <ion-button [disabled]=\"!treatmentForm.valid\"  class=\"bottom-right\" size=\"small\" shape=\"round\" (click)=\"presentActionSheet()\">\n          <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n          Next\n      </ion-button>\n      </div>\n  </form>\n  </ion-content>"

/***/ }),

/***/ "./src/app/onboardtreatmentplan/onboardtreatmentplan.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/onboardtreatmentplan/onboardtreatmentplan.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: white;\n  text-align: center;\n  font-size: 15px !important; }\n\nh4 {\n  color: white;\n  text-align: center;\n  font-size: 10px !important; }\n\nh5 {\n  color: black;\n  text-align: center;\n  font-size: 20px !important; }\n\nh6 {\n  color: white;\n  text-align: right;\n  font-size: 10px !important;\n  background-color: none; }\n\n.height {\n  line-height: 11px; }\n\n.error-messages {\n  color: red;\n  text-align: center;\n  font-size: .9em; }\n\n.rcorners {\n  align-content: center;\n  border-radius: 15px;\n  background-color: white;\n  width: 30%;\n  height: 100%;\n  text-align: center;\n  border: 0px; }\n\n.rcorners1 {\n  align-content: center;\n  border-radius: 15px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: 0px; }\n\n.box {\n  position: relative;\n  margin: 5%;\n  padding: 5%; }\n\n.bottom-right {\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n.bottom-left {\n  position: absolute;\n  bottom: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL29uYm9hcmR0cmVhdG1lbnRwbGFuL29uYm9hcmR0cmVhdG1lbnRwbGFuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdmO0VBQ0Esa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR1g7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVEsRUFBQTs7QUFHWjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvb25ib2FyZHRyZWF0bWVudHBsYW4vb25ib2FyZHRyZWF0bWVudHBsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5oMyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaDQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmg1IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG5oNiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7IFxufVxuXG4uaGVpZ2h0IHtcbiAgICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi5lcnJvci1tZXNzYWdlcyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuXG4ucmNvcm5lcnMge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMHB4O1xufVxuXG4ucmNvcm5lcnMxIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cbi5ib3gge1xucG9zaXRpb246IHJlbGF0aXZlO1xubWFyZ2luOiA1JTtcbnBhZGRpbmc6IDUlO1xufVxuXG4uYm90dG9tLXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uYm90dG9tLWxlZnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/onboardtreatmentplan/onboardtreatmentplan.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/onboardtreatmentplan/onboardtreatmentplan.page.ts ***!
  \*******************************************************************/
/*! exports provided: OnboardtreatmentplanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardtreatmentplanPage", function() { return OnboardtreatmentplanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







var OnboardtreatmentplanPage = /** @class */ (function () {
    function OnboardtreatmentplanPage(actionSheetController, router, formBuilder, database) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.database = database;
        this.maintenanceDuration = 99999999;
        this.relapseDuration = 99999999;
        this.error_messages = {
            'maintenanceDose': [
                { type: 'required', message: 'These are all required. Enter "0" if none.' }
            ]
        };
        this.treatmentForm = this.formBuilder.group({
            maintenanceDose: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            maintenanceTimes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            maintenanceInterval: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            relapseAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            relapseTimes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            relapseInterval: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remissionAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            remissionDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remissionTimes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remissionInterval: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            moreRemissionAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            moreRemissionDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            moreRemissionTimes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            moreRemissionInterval: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
    }
    OnboardtreatmentplanPage.prototype.addRemissionAmount = function () {
        this.treatmentForm.get('moreRemissionAmount').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
    };
    OnboardtreatmentplanPage.prototype.removeRemissionAmount = function (index) {
        this.treatmentForm.get('moreRemissionAmount').removeAt(index);
    };
    OnboardtreatmentplanPage.prototype.addRemissionDuration = function () {
        this.treatmentForm.get('moreRemissionDuration').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
    };
    OnboardtreatmentplanPage.prototype.removeRemissionDuration = function (index) {
        this.treatmentForm.get('moreRemissionDuration').removeAt(index);
    };
    OnboardtreatmentplanPage.prototype.addRemissionTimes = function () {
        this.treatmentForm.get('moreRemissionTimes').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
    };
    OnboardtreatmentplanPage.prototype.removeRemissionTimes = function (index) {
        this.treatmentForm.get('moreRemissionTimes').removeAt(index);
    };
    OnboardtreatmentplanPage.prototype.addRemissionInterval = function () {
        this.treatmentForm.get('moreRemissionInterval').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
    };
    OnboardtreatmentplanPage.prototype.removeRemissionInterval = function (index) {
        this.treatmentForm.get('moreRemissionInterval').removeAt(index);
    };
    OnboardtreatmentplanPage.prototype.ngOnInit = function () {
    };
    // backToDetails() {
    //   this.router.navigateByUrl('../onboard');
    // }
    OnboardtreatmentplanPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'What state are you currently in?',
                            buttons: [{
                                    text: 'Maintenance',
                                    handler: function () {
                                        console.log('Maintenance selected');
                                        _this.currentState = 1;
                                        _this.treatmentplan();
                                    }
                                }, {
                                    text: 'Relapse',
                                    handler: function () {
                                        console.log('Relapse selected');
                                        _this.currentState = 2;
                                        _this.treatmentplan();
                                    }
                                }, {
                                    text: 'Remission',
                                    handler: function () {
                                        console.log('Remission selected');
                                        _this.currentState = 3;
                                        _this.treatmentplan();
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OnboardtreatmentplanPage.prototype.treatmentplan = function () {
        var maintenance = ["maintenance",
            this.maintenanceDuration,
            this.treatmentForm.value.maintenanceDose,
            this.treatmentForm.value.maintenanceTimes,
            this.treatmentForm.value.maintenanceInterval];
        var relapse = ["relapse",
            this.relapseDuration,
            this.treatmentForm.value.relapseAmount,
            this.treatmentForm.value.relapseTimes,
            this.treatmentForm.value.relapseInterval];
        var remission = ["remission",
            this.treatmentForm.value.remissionDuration,
            this.treatmentForm.value.remissionAmount,
            this.treatmentForm.value.relapseTimes,
            this.treatmentForm.value.relapseInterval];
        var Amount = this.treatmentForm.value.moreRemissionAmount;
        var Duration = this.treatmentForm.value.moreRemissionDuration;
        var Times = this.treatmentForm.value.moreRemissionTimes;
        var Interval = this.treatmentForm.value.moreRemissionInterval;
        var treatmentplan = [maintenance, relapse, remission];
        for (var i = 0; i < Amount.length; i++) {
            treatmentplan.push(window['remission' + i] = ["remission" + i, Duration[i], Amount[i], Times[i], Interval[i]]);
        }
        ;
        console.log('Maintenance Dose: ', this.treatmentForm.value.maintenanceDose);
        console.log('Maintenance Duration: ', this.maintenanceDuration);
        console.log('Maintenance Times: ', this.treatmentForm.value.maintenanceTimes);
        console.log('Maintenance Interval: ', this.treatmentForm.value.maintenanceInterval);
        console.log('Relapse Amount: ', this.treatmentForm.value.relapseAmount);
        console.log('Relapse Duration: ', this.relapseDuration);
        console.log('Relapse Times: ', this.treatmentForm.value.relapseTimes);
        console.log('Relapse Interval: ', this.treatmentForm.value.relapseInterval);
        console.log('Remission Amount: ', this.treatmentForm.value.remissionAmount);
        console.log('Remission Duration: ', this.treatmentForm.value.remissionDuration);
        console.log('Remission Times: ', this.treatmentForm.value.remissionTimes);
        console.log('Remission Interval: ', this.treatmentForm.value.remissionInterval);
        console.log('More Remission Amount: ', this.treatmentForm.value.moreRemissionAmount);
        console.log('More Remission Duration: ', this.treatmentForm.value.moreRemissionDuration);
        console.log('More Remission Times: ', this.treatmentForm.value.moreRemissionTimes);
        console.log('More Remission Interval: ', this.treatmentForm.value.moreRemissionInterval);
        console.log('Maintenance: ', maintenance);
        console.log('Relapse: ', relapse);
        console.log('Remission', remission);
        console.log('TreatmentPlan Array: ', treatmentplan);
        console.log('TreatmentPlan Array: ', treatmentplan[0][1]);
        console.log('Current State: ', this.currentState);
        for (var i = 0; i < treatmentplan.length; i++) {
            var treatment = [];
            treatment = [1,
                treatmentplan[i][0],
                treatmentplan[i][1],
                treatmentplan[i][2],
                treatmentplan[i][3],
                treatmentplan[i][4],
            ];
            this.database.insertData(treatment, "treatment_stateReal");
            console.log('Treatment: ', treatment);
        }
        var now = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD') + ' 00:00:00';
        console.log('Date: ', now);
        var activeState = [
            this.currentState,
            now
        ];
        this.database.insertData(activeState, "active_treatment_state");
        this.router.navigateByUrl('/onboardothermeds');
    };
    OnboardtreatmentplanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboardtreatmentplan',
            template: __webpack_require__(/*! ./onboardtreatmentplan.page.html */ "./src/app/onboardtreatmentplan/onboardtreatmentplan.page.html"),
            styles: [__webpack_require__(/*! ./onboardtreatmentplan.page.scss */ "./src/app/onboardtreatmentplan/onboardtreatmentplan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], OnboardtreatmentplanPage);
    return OnboardtreatmentplanPage;
}());



/***/ })

}]);
//# sourceMappingURL=onboardtreatmentplan-onboardtreatmentplan-module.js.map