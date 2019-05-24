(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mydetails-editdetails-editdetails-module"],{

/***/ "./src/app/mydetails/editdetails/editdetails.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/mydetails/editdetails/editdetails.module.ts ***!
  \*************************************************************/
/*! exports provided: EditdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditdetailsPageModule", function() { return EditdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _editdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editdetails.page */ "./src/app/mydetails/editdetails/editdetails.page.ts");







var routes = [
    {
        path: '',
        component: _editdetails_page__WEBPACK_IMPORTED_MODULE_6__["EditdetailsPage"]
    }
];
var EditdetailsPageModule = /** @class */ (function () {
    function EditdetailsPageModule() {
    }
    EditdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_editdetails_page__WEBPACK_IMPORTED_MODULE_6__["EditdetailsPage"]]
        })
    ], EditdetailsPageModule);
    return EditdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/mydetails/editdetails/editdetails.page.html":
/*!*************************************************************!*\
  !*** ./src/app/mydetails/editdetails/editdetails.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\n    <h2 class='ion-header' style=\"padding-bottom: 8%\">\n        Edit Your Details\n    </h2>\n    <form [formGroup]=\"profileForm\">\n    <h3><ion-label>Your Name</ion-label></h3> \n    <h5><input formControlName=\"myName\" type=\"text\" class=\"rcorners\" clearInput=\"true\"></h5>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.myName\">\n        <div class=\"error-messages\" *ngIf=\"profileForm.get('myName').hasError(error.type) && (profileForm.get('myName').dirty || profileForm.get('myName').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <h3><ion-label>Your Doctor</ion-label></h3>\n    <h5><input formControlName=\"myDoctor\" type=\"text\" value=\"\"class=\"rcorners\" clearInput=\"true\"></h5>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.myDoctor\">\n        <div class=\"error-messages\" *ngIf=\"profileForm.get('myDoctor').hasError(error.type) && (profileForm.get('myDoctor').dirty || profileForm.get('myDoctor').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <h3><ion-label>Your Doctor's Number</ion-label></h3>\n    <h5><input formControlName=\"myDoctorsNumber\" type=\"text\" value=\"\" class=\"rcorners\" clearInput=\"true\"></h5>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.myDoctorsNumber\">\n        <div class=\"error-messages\" *ngIf=\"profileForm.get('myDoctorsNumber').hasError(error.type) && (profileForm.get('myDoctorsNumber').dirty || profileForm.get('myDoctorsNumber').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <h3><ion-label>Your Birthday</ion-label></h3>\n    <h5><ion-datetime formControlName=\"myBirthday\" display-format=\"DD MM YYYY\" picker-format=\"DD MM YYYY\" value=\"\" class=\"rcorners\"></ion-datetime></h5>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.myBirthday\">\n        <div class=\"error-messages\" *ngIf=\"profileForm.get('myBirthday').hasError(error.type) && (profileForm.get('myBirthday').dirty || profileForm.get('myBirthday').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <h3><ion-label>Your Other Medication</ion-label></h3>\n    <ion-textarea formControlName=\"myOtherMeds\" type=\"text\" value=\"\" class=\"rcornersbox\" style=\"padding-bottom: 10%\" clearInput=\"true\">\n      </ion-textarea>\n    </form>\n\n    <div class=\"box\">\n      <ion-button size=\"small\" shape=\"round\" routerDirection=\"backward\" (click)=\"goBack()\">\n              Cancel\n      </ion-button>\n      <ion-button [disabled]=\"!profileForm.valid\" class=\"bottom-right\" size=\"small\" shape=\"round\" routerDirection=\"forward\" (click)=\"addToDB()\">\n        Confirm\n      </ion-button>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mydetails/editdetails/editdetails.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/mydetails/editdetails/editdetails.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: white;\n  text-align: center;\n  font-size: 15px !important; }\n\nh4 {\n  color: white;\n  text-align: center;\n  font-size: 10px !important; }\n\nh5 {\n  color: black;\n  text-align: center;\n  font-size: 20px !important; }\n\nh6 {\n  color: white;\n  text-align: right;\n  font-size: 15px !important; }\n\n.error-messages {\n  color: red;\n  text-align: center;\n  font-size: .9em; }\n\n.rcorners {\n  align-content: center;\n  border-radius: 15px;\n  border: 0px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  align-content: center;\n  margin-bottom: 10px;\n  padding: 5px; }\n\n.rcornersbox {\n  align-content: left;\n  font-size: 1em;\n  border-radius: 15px;\n  border: 0px;\n  background-color: white;\n  width: 100%;\n  height: 20%;\n  text-align: left;\n  margin-bottom: 20px;\n  padding: 10px; }\n\n.box {\n  position: relative;\n  width: 100%;\n  height: 35px; }\n\n.bottom-right {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  align-content: right; }\n\n#edit-button {\n  width: 80px;\n  height: 30px;\n  border-radius: 15px;\n  border: none;\n  margin: 10px; }\n\n#edit-icon {\n  height: 20px;\n  width: 20px;\n  display: block;\n  border: none;\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL215ZGV0YWlscy9lZGl0ZGV0YWlscy9lZGl0ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDBCQUEwQixFQUFBOztBQUk5QjtFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUluQjtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0Esa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXLEVBQUE7O0FBR1g7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxXQUFVO0VBQ1YsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdmO0VBQ0ksWUFBVztFQUNYLFdBQVU7RUFDVixjQUFjO0VBQ2QsWUFBVztFQUNYLFdBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL215ZGV0YWlscy9lZGl0ZGV0YWlscy9lZGl0ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaDQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmg1IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG5oNiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG5cbi5lcnJvci1tZXNzYWdlcyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuXG5cbi5yY29ybmVycyB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnJjb3JuZXJzYm94IHtcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAlOyBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmJveCB7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG53aWR0aDoxMDAlO1xuaGVpZ2h0OjM1cHg7XG59XG5cbi5ib3R0b20tcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYWxpZ24tY29udGVudDogcmlnaHQ7XG59XG5cbiNlZGl0LWJ1dHRvbntcbiAgICB3aWR0aDo4MHB4O1xuICAgIGhlaWdodDozMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBtYXJnaW46MTBweDtcbn1cblxuI2VkaXQtaWNvbntcbiAgICBoZWlnaHQ6MjBweDtcbiAgICB3aWR0aDoyMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjpub25lO1xuICAgIG1hcmdpbjo1cHg7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/mydetails/editdetails/editdetails.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/mydetails/editdetails/editdetails.page.ts ***!
  \***********************************************************/
/*! exports provided: EditdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditdetailsPage", function() { return EditdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EditdetailsPage = /** @class */ (function () {
    function EditdetailsPage(router, formBuilder, database) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.database = database;
        this.error_messages = {
            'myName': [
                { type: 'required', message: 'Your name is needed!.' }
            ],
            'myDoctor': [
                { type: 'required', message: 'Your doctor\'s name is needed!.' }
            ],
            'myDoctorsNumber': [
                { type: 'required', message: 'A number is needed!.' }
            ],
            'myBirthday': [
                { type: 'required', message: 'Please tell us your birthday :).' }
            ]
        };
        this.profileForm = this.formBuilder.group({
            myName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            myDoctor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            myDoctorsNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            myBirthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            myOtherMeds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    EditdetailsPage.prototype.ngOnInit = function () {
    };
    EditdetailsPage.prototype.mydetails = function () {
        console.log('Name: ', this.profileForm.value.myName);
        console.log('Doctor: ', this.profileForm.value.myDoctor);
        console.log('Doctors #: ', this.profileForm.value.myDoctorsNumber);
        console.log('Birthday: ', this.profileForm.value.myBirthday);
        console.log('Other_meds: ', this.profileForm.value.myOtherMeds);
    };
    EditdetailsPage.prototype.addToDB = function () {
        var myProfileDetailsBetter = [
            this.profileForm.value.myName,
            this.profileForm.value.myBirthday,
            this.profileForm.value.myDoctor,
            this.profileForm.value.myDoctorsNumber,
            this.profileForm.value.myOtherMeds
        ];
        this.database.insertData(myProfileDetailsBetter, "profileUpdate");
        console.log('Checker: ', myProfileDetailsBetter);
        this.router.navigateByUrl('/tabs/tab3');
    };
    EditdetailsPage.prototype.goBack = function () {
        this.router.navigateByUrl('tabs/tab3');
    };
    EditdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editdetails',
            template: __webpack_require__(/*! ./editdetails.page.html */ "./src/app/mydetails/editdetails/editdetails.page.html"),
            styles: [__webpack_require__(/*! ./editdetails.page.scss */ "./src/app/mydetails/editdetails/editdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], EditdetailsPage);
    return EditdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=mydetails-editdetails-editdetails-module.js.map