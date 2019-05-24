(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytreatmentplan-edit-edit-module"],{

/***/ "./src/app/mytreatmentplan/edit/edit.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/mytreatmentplan/edit/edit.module.ts ***!
  \*****************************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/mytreatmentplan/edit/edit.page.ts");







var routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]
    }
];
var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/mytreatmentplan/edit/edit.page.html":
/*!*****************************************************!*\
  !*** ./src/app/mytreatmentplan/edit/edit.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\n    <h2 class='ion-header' style=\"padding-bottom: 8%\">\n        My Treatment Plan\n    </h2>\n    <h3>\n        Enter your new Prednisolone treatment plan.\n        Fill in all dosages in milligrams.\n    </h3>\n    <h3 style=\"padding-bottom: 10%\">\n        Please only update this under the guidance of your doctor.\n    </h3>\n    \n\n    <form [formGroup]=\"treatmentPlanForm\">\n\n        <h3><ion-label>Your Doctor's Name</ion-label></h3> \n        <h5><input formControlName=\"doctorsName\" type=\"text\" class=\"rcorners\" clearInput=\"true\"></h5>\n        <div class=\"error-messages\">\n            <ng-container *ngFor=\"let error of error_messages.doctorsName\">\n            <div class=\"error-messages\" *ngIf=\"treatmentPlanForm.get('doctorsName').hasError(error.type) && (treatmentPlanForm.get('doctorsName').dirty || treatmentPlanForm.get('doctorsName').touched)\">\n                {{ error.message }}\n            </div>\n            </ng-container>\n        </div>\n\n        <h2 class='ion-header' style=\"padding-top: 10%\" style=\"padding-bottom: 8%\">\n            Maintenance Dose\n        </h2>\n\n      <ion-grid>\n          <ion-row>\n          <ion-col>\n              <h4>Amount:</h4>\n              <h4>(mg)</h4>\n              <h5>\n                  <input formControlName=\"maintenanceDose\" type=\"number\" class=\"rcorners1\">\n              </h5>\n          </ion-col>\n          <ion-col>\n              <h4>Duration:</h4>\n              <h4>Until</h4>\n              <h4>Otherwise</h4>\n          </ion-col>\n          <ion-col>\n              <h4>Times:</h4>\n              <h4>(per int)</h4>\n              <h5>\n                  <input formControlName=\"maintenanceTimes\" type=\"number\" value=\"\" class=\"rcorners1\">\n              </h5>\n          </ion-col>\n          <ion-col>\n              <h4>Interval:</h4>\n              <h4>(days)</h4>\n              <h5>\n                  <input formControlName=\"maintenanceInterval\" type=\"number\" value=\"\" class=\"rcorners1\">\n              </h5>\n          </ion-col>\n          </ion-row>\n      </ion-grid>\n      <div class=\"error-messages\">\n        <ng-container *ngFor=\"let error of error_messages.maintenanceDose\">\n            <div class=\"error-messages\" *ngIf=\"treatmentPlanForm.get('maintenanceDose').hasError(error.type) && (treatmentPlanForm.get('maintenanceDose').dirty || treatmentPlanForm.get('maintenanceDose').touched)\">\n                {{ error.message }}\n            </div>\n        </ng-container>\n      </div>\n        <h3 style=\"padding-bottom: 10%\">\n            Your maintenance dose is how much Predisolone, in mg, you should\n            be taking daily, regardless of whether you have relapsed.\n        </h3>\n        <h2 class='ion-header' style=\"padding-bottom: 8%\">\n            Relapse Plan\n        </h2>\n        <h3>\n            The relapse plan will activate if you have 3 consecutive days of high\n            protein readings. You will be required to take extra medication until\n            your protein levels return to normal.\n            <p>Please enter amounts in mg and times in number of days</p>\n        </h3>\n    \n        <ion-grid>\n            <ion-row>\n            <ion-col>\n                <h4>Amount:</h4>\n                <h4>(mg)</h4>\n                <h5>\n                    <input formControlName=\"relapseAmount\" type=\"number\" class=\"rcorners1\">\n                </h5>\n            </ion-col>\n            <ion-col>\n              <h4>Duration:</h4>\n              <h4>Until</h4>\n              <h4>Remission</h4>\n            </ion-col>\n            <ion-col>\n                <h4>Times:</h4>\n                <h4>(per int)</h4>\n                <h5>\n                    <input formControlName=\"relapseTimes\" type=\"number\" value=\"\" class=\"rcorners1\">\n                </h5>\n            </ion-col>\n            <ion-col>\n                <h4>Interval:</h4>\n                <h4>(days)</h4>\n                <h5>\n                    <input formControlName=\"relapseInterval\" type=\"number\" value=\"\" class=\"rcorners1\">\n                </h5>\n            </ion-col>\n            </ion-row>\n        </ion-grid>\n        <div class=\"error-messages\">\n              <ng-container *ngFor=\"let error of error_messages.maintenanceDose\">\n                <div class=\"error-messages\" *ngIf=\"treatmentPlanForm.get('relapseAmount').hasError(error.type) && (treatmentPlanForm.get('relapseAmount').dirty || treatmentPlanForm.get('relapseAmount').touched)\">\n                  {{ error.message }}\n                </div>\n              </ng-container>\n      </div>\n        <h2 class='ion-header' style=\"padding-bottom: 8%\" style=\"padding-top: 10%\">\n            Remission Plan\n        </h2>\n        <h3>\n            The remission plan will be activated when you are in a relapse and\n            have 3 consecutive days of low protein levels.\n        </h3>\n        <ion-grid>\n            <ion-row>\n            <ion-col>\n                <h4>Amount:</h4>\n                <h4>(mg)</h4>\n                <h5>\n                    <input formControlName=\"remissionAmount\" type=\"number\" class=\"rcorners1\">\n    \n                </h5>\n            </ion-col>\n            <ion-col>\n                <h4>Duration:</h4>\n                <h4>(days)</h4>\n                <h5>\n                    <input formControlName=\"remissionDuration\" type=\"number\" value=\"\" class=\"rcorners1\">\n                </h5>\n            </ion-col>\n            <ion-col>\n                <h4>Times:</h4>\n                <h4>(per int)</h4>\n                <h5>\n                    <input formControlName=\"remissionTimes\" type=\"number\" value=\"\" class=\"rcorners1\">\n                </h5>\n            </ion-col>\n            <ion-col width=\"25%\">\n                <h4>Interval:</h4>\n                <h4>(days)</h4>\n                <h5>\n                    <input formControlName=\"remissionInterval\" type=\"number\" value=\"\" class=\"rcorners1\">\n                </h5>\n            </ion-col>\n            </ion-row>\n        </ion-grid>\n        <div class=\"error-messages\">\n              <ng-container *ngFor=\"let error of error_messages.maintenanceDose\">\n                <div class=\"error-messages\" *ngIf=\"treatmentPlanForm.get('remissionAmount').hasError(error.type) && (treatmentPlanForm.get('remissionAmount').dirty || treatmentPlanForm.get('remissionAmount').touched)\">\n                  {{ error.message }}\n                </div>\n              </ng-container>\n      </div>\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <div formArrayName=\"moreRemissionAmount\">\n                        <div *ngFor=\"let remissionControl of treatmentPlanForm.get('moreRemissionAmount').controls; let i = index\">\n                            <h5>\n                                <input [formControlName]=\"i\"  type=\"number\" value=\"\" class=\"rcorners1\">\n                            </h5>\n                        </div>\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <div formArrayName=\"moreRemissionDuration\">\n                        <div *ngFor=\"let remissionControl of treatmentPlanForm.get('moreRemissionDuration').controls; let i = index\">\n                            <h5>\n                                <input [formControlName]=\"i\"  type=\"number\" value=\"\" class=\"rcorners1\">\n                            </h5>\n                        </div>\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <div formArrayName=\"moreRemissionTimes\">\n                        <div *ngFor=\"let remissionControl of treatmentPlanForm.get('moreRemissionTimes').controls; let i = index\">\n                            <h5>\n                                <input [formControlName]=\"i\"  type=\"number\" value=\"\" class=\"rcorners1\">\n                            </h5>\n                        </div>\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <div formArrayName=\"moreRemissionInterval\">\n                        <div *ngFor=\"let remissionControl of treatmentPlanForm.get('moreRemissionInterval').controls; let i = index\">\n                            <h5>\n                                <input [formControlName]=\"i\"  type=\"number\" value=\"\" class=\"rcorners1\">\n                            </h5>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    \n        <div class=\"box\" style=\"padding-bottom: 10%\" style=\"margin-bottom: 10%\">\n        <h6>\n            <ion-button class=\"bottom-left\" size=\"small\" (click)=\"removeRemissionAmount(i); removeRemissionDuration(i); removeRemissionTimes(i); removeRemissionInterval(i)\">-</ion-button>\n        </h6>\n        <h4>\n            <ion-button class=\"bottom-right\" size=\"small\" (click)=\"addRemissionAmount(i); addRemissionDuration(i); addRemissionTimes(i); addRemissionInterval(i)\">+   Add another step</ion-button>\n        </h4>\n        </div>\n    \n        <div class=\"box\">\n        <ion-button size=\"small\" shape=\"round\" outerDirection=\"backward\" (click)=\"goBack()\"> \n                Cancel\n        </ion-button>\n        <ion-button [disabled]=\"!treatmentPlanForm.valid\" class=\"bottom-right\" size=\"small\" shape=\"round\" routerDirection=\"forward\" (click)=\"presentActionSheet()\">\n            Confirm\n        </ion-button>\n        </div>\n    </form>  \n    </ion-content>"

/***/ }),

/***/ "./src/app/mytreatmentplan/edit/edit.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/mytreatmentplan/edit/edit.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: white;\n  text-align: center;\n  font-size: 15px !important; }\n\nh4 {\n  color: white;\n  text-align: center;\n  font-size: 10px !important; }\n\nh5 {\n  color: black;\n  text-align: center;\n  font-size: 20px !important; }\n\nh6 {\n  color: white;\n  text-align: right;\n  font-size: 10px !important;\n  background-color: none; }\n\n.height {\n  line-height: 11px; }\n\n.error-messages {\n  color: red;\n  text-align: center;\n  font-size: .9em; }\n\n.rcorners {\n  align-content: center;\n  border-radius: 15px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  border: 0px; }\n\n.rcorners1 {\n  align-content: center;\n  border-radius: 15px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: 0px; }\n\n.box {\n  position: relative;\n  width: 100%;\n  height: 35px; }\n\n.bottom-right {\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n.bottom-left {\n  position: absolute;\n  bottom: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL215dHJlYXRtZW50cGxhbi9lZGl0L2VkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQUdaO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9teXRyZWF0bWVudHBsYW4vZWRpdC9lZGl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaDMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmg0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuXG5oNSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuaDYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lOyBcbn1cblxuLmhlaWdodCB7XG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XG59XG4uZXJyb3ItbWVzc2FnZXMge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLnJjb3JuZXJzIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cbi5yY29ybmVyczEge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDBweDtcbn1cblxuLmJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjM1cHg7XG59XG5cbi5ib3R0b20tcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5ib3R0b20tbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/mytreatmentplan/edit/edit.page.ts":
/*!***************************************************!*\
  !*** ./src/app/mytreatmentplan/edit/edit.page.ts ***!
  \***************************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _services_fetch_reading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/fetch-reading.service */ "./src/app/services/fetch-reading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");








var EditPage = /** @class */ (function () {
    function EditPage(actionSheetController, router, formBuilder, database, fetchReading) {
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.database = database;
        this.fetchReading = fetchReading;
        this.maintenanceDuration = 99999999;
        this.relapseDuration = 99999999;
        this.error_messages = {
            'doctorsName': [
                { type: 'required', message: 'You must enter your Doctor\'s name to update.' }
            ],
            'maintenanceDose': [
                { type: 'required', message: 'These are all required. Enter "0" if none.' }
            ],
            'relapseAmount': [
                { type: 'required', message: 'These are all required. Enter "0" if none.' }
            ],
            'remissionAmount': [
                { type: 'required', message: 'These are all required. Enter "0" if none.' }
            ]
        };
        this.treatmentPlanForm = formBuilder.group({
            doctorsName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            maintenanceDose: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            maintenanceTimes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            maintenanceInterval: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            relapseAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            relapseTimes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            relapseInterval: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remissionAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            remissionDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remissionTimes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            remissionInterval: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            moreRemissionAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            moreRemissionDuration: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            moreRemissionTimes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            moreRemissionInterval: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        });
    }
    EditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchReading
            .treatmentPlanID()
            .then(function (data) {
            _this.planId = data;
            console.log("id from db come on 4", _this.planId[0].planId);
            _this.planId = ((_this.planId[0].planId) + 1);
            _this.newPlanId = _this.planId;
            console.log("single #", _this.planId);
        });
        this.fetchReading
            .activeTreatmentPlanID()
            .then(function (data) {
            _this.stateId = data;
            console.log("id from db come on 4", _this.stateId[0].activeStateId);
            _this.stateId = _this.stateId[0].activeStateId;
        });
    };
    EditPage.prototype.addRemissionAmount = function () {
        this.treatmentPlanForm.get('moreRemissionAmount').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
    };
    EditPage.prototype.removeRemissionAmount = function (index) {
        this.treatmentPlanForm.get('moreRemissionAmount').removeAt(index);
    };
    EditPage.prototype.addRemissionDuration = function () {
        this.treatmentPlanForm.get('moreRemissionDuration').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
    };
    EditPage.prototype.removeRemissionDuration = function (index) {
        this.treatmentPlanForm.get('moreRemissionDuration').removeAt(index);
    };
    EditPage.prototype.addRemissionTimes = function () {
        this.treatmentPlanForm.get('moreRemissionTimes').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
    };
    EditPage.prototype.removeRemissionTimes = function (index) {
        this.treatmentPlanForm.get('moreRemissionTimes').removeAt(index);
    };
    EditPage.prototype.addRemissionInterval = function () {
        this.treatmentPlanForm.get('moreRemissionInterval').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
    };
    EditPage.prototype.removeRemissionInterval = function (index) {
        this.treatmentPlanForm.get('moreRemissionInterval').removeAt(index);
    };
    EditPage.prototype.presentActionSheet = function () {
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
    EditPage.prototype.treatmentplan = function () {
        var maintenance = ["maintenance",
            this.maintenanceDuration,
            this.treatmentPlanForm.value.maintenanceDose,
            this.treatmentPlanForm.value.maintenanceTimes,
            this.treatmentPlanForm.value.maintenanceInterval];
        var relapse = ["relapse",
            this.relapseDuration,
            this.treatmentPlanForm.value.relapseAmount,
            this.treatmentPlanForm.value.relapseTimes,
            this.treatmentPlanForm.value.relapseInterval];
        var remission = ["remission",
            this.treatmentPlanForm.value.remissionDuration,
            this.treatmentPlanForm.value.remissionAmount,
            this.treatmentPlanForm.value.relapseTimes,
            this.treatmentPlanForm.value.relapseInterval];
        var Amount = this.treatmentPlanForm.value.moreRemissionAmount;
        var Duration = this.treatmentPlanForm.value.moreRemissionDuration;
        var Times = this.treatmentPlanForm.value.moreRemissionTimes;
        var Interval = this.treatmentPlanForm.value.moreRemissionInterval;
        var treatmentplan = [maintenance, relapse, remission];
        for (var i = 0; i < Amount.length; i++) {
            treatmentplan.push(window['remission' + i] = ["remission" + i, Duration[i], Amount[i], Times[i], Interval[i]]);
        }
        ;
        console.log('Maintenance: ', maintenance);
        console.log('Relapse: ', relapse);
        console.log('Remission', remission);
        console.log('TreatmentPlan Array: ', treatmentplan);
        console.log('TreatmentPlan Array: ', treatmentplan[0][1]);
        for (var i = 0; i < treatmentplan.length; i++) {
            var treatment = [];
            treatment = [
                this.newPlanId,
                treatmentplan[i][0],
                treatmentplan[i][1],
                treatmentplan[i][2],
                treatmentplan[i][3],
                treatmentplan[i][4],
            ];
            this.database.insertData(treatment, "treatment_stateReal");
            console.log('Treatment: ', treatment);
            console.log("single #", this.newPlanId);
        }
        var myDoc = {
            "doctor_name": this.treatmentPlanForm.value.doctorsName,
        };
        this.database.insertData(myDoc, "profileDoc");
        var now = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD') + ' 00:00:00';
        console.log('Date: ', now);
        var newActiveState = this.stateId + this.currentState;
        console.log('State New: ', newActiveState);
        this.database.updateActiveTreatmentState(newActiveState, now);
        this.router.navigateByUrl('/tabs/tab3');
    };
    EditPage.prototype.goBack = function () {
        this.router.navigateByUrl('tabs/tab3/mytreatmentplan');
    };
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.page.html */ "./src/app/mytreatmentplan/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/mytreatmentplan/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _services_fetch_reading_service__WEBPACK_IMPORTED_MODULE_4__["FetchReadingService"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=mytreatmentplan-edit-edit-module.js.map