(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboard-onboard-module"],{

/***/ "./src/app/onboard/onboard.module.ts":
/*!*******************************************!*\
  !*** ./src/app/onboard/onboard.module.ts ***!
  \*******************************************/
/*! exports provided: OnboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardPageModule", function() { return OnboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _onboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboard.page */ "./src/app/onboard/onboard.page.ts");







var routes = [
    {
        path: '',
        component: _onboard_page__WEBPACK_IMPORTED_MODULE_6__["OnboardPage"]
    }
];
var OnboardPageModule = /** @class */ (function () {
    function OnboardPageModule() {
    }
    OnboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_onboard_page__WEBPACK_IMPORTED_MODULE_6__["OnboardPage"]]
        })
    ], OnboardPageModule);
    return OnboardPageModule;
}());



/***/ }),

/***/ "./src/app/onboard/onboard.page.html":
/*!*******************************************!*\
  !*** ./src/app/onboard/onboard.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n\n  <h2 class='ion-header' style=\"padding-bottom: 8%\">\n      Welcome to your Nephrotic Notebook!\n  </h2>\n  <h3 style=\"padding-bottom: 10%\">\n      First, let's go about setting up your profile...\n  </h3>\n  \n  <form [formGroup]=\"profileForm\">\n    <h3><ion-label>What's your name?</ion-label></h3>\n    <h5><input formControlName=\"myName\" type=\"text\" value=\"\"class=\"rcorners\" clearInput=\"true\"></h5>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.myName\">\n        <div class=\"error-messages\" *ngIf=\"profileForm.get('myName').hasError(error.type) && (profileForm.get('myName').dirty || profileForm.get('myName').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n    </div>\n    <h3><ion-label>Who's your doctor?</ion-label></h3>\n    <h5><input formControlName=\"myDoctor\" type=\"text\" value=\"\"class=\"rcorners\" clearInput=\"true\"></h5>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.myDoctor\">\n        <div class=\"error-messages\" *ngIf=\"profileForm.get('myDoctor').hasError(error.type) && (profileForm.get('myDoctor').dirty || profileForm.get('myDoctor').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <h3><ion-label>What's their phone number?</ion-label></h3>\n    <h5><input formControlName=\"myDoctorsNumber\" type=\"text\" value=\"\" class=\"rcorners\" clearInput=\"true\"></h5>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.myDoctorsNumber\">\n        <div class=\"error-messages\" *ngIf=\"profileForm.get('myDoctorsNumber').hasError(error.type) && (profileForm.get('myDoctorsNumber').dirty || profileForm.get('myDoctorsNumber').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <h3><ion-label>When is your birthday?</ion-label></h3>\n    <h5><ion-datetime formControlName=\"myBirthday\" display-format=\"DD MM YYYY\" picker-format=\"DD MM YYYY\" value=\"\" class=\"rcorners\"></ion-datetime></h5>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.myBirthday\">\n        <div class=\"error-messages\" *ngIf=\"profileForm.get('myBirthday').hasError(error.type) && (profileForm.get('myBirthday').dirty || profileForm.get('myBirthday').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n    </div>\n  </form>\n    <h6>\n    <ion-button [disabled]=\"!profileForm.valid\" class=\"bottom-right\" size=\"small\" shape=\"round\" (click)=\"addToDB()\">\n        <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n        Next\n    </ion-button>\n  </h6>\n</ion-content>\n\n     "

/***/ }),

/***/ "./src/app/onboard/onboard.page.scss":
/*!*******************************************!*\
  !*** ./src/app/onboard/onboard.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: white;\n  text-align: center;\n  font-size: 15px !important; }\n\nh4 {\n  color: white;\n  text-align: center;\n  font-size: 10px !important; }\n\nh5 {\n  color: black;\n  text-align: center;\n  font-size: 20px !important; }\n\nh6 {\n  color: white;\n  text-align: right;\n  font-size: 15px !important; }\n\n.error-messages {\n  color: red;\n  text-align: center;\n  font-size: .9em; }\n\n.rcorners {\n  align-content: center;\n  border-radius: 15px;\n  border: 0px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin-bottom: 10px;\n  padding: 5px; }\n\n.box {\n  position: relative; }\n\n.bottom-right {\n  position: relative;\n  bottom: 5px;\n  right: 5px;\n  margin: 5px;\n  align-content: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL29uYm9hcmQvb25ib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDBCQUEwQixFQUFBOztBQUk5QjtFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUluQjtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdoQjtFQUNBLGtCQUFrQixFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL29uYm9hcmQvb25ib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaDQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmg1IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG5oNiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG5cbi5lcnJvci1tZXNzYWdlcyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuXG5cbi5yY29ybmVycyB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uYm94IHtcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJvdHRvbS1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYWxpZ24tY29udGVudDogcmlnaHQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/onboard/onboard.page.ts":
/*!*****************************************!*\
  !*** ./src/app/onboard/onboard.page.ts ***!
  \*****************************************/
/*! exports provided: OnboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardPage", function() { return OnboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var OnboardPage = /** @class */ (function () {
    function OnboardPage(router, formBuilder, database, platform) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.database = database;
        this.platform = platform;
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
            ]))
        });
    }
    OnboardPage.prototype.ngOnInit = function () {
    };
    OnboardPage.prototype.launchForm = function () {
    };
    OnboardPage.prototype.mydetails = function () {
        console.log('Name: ', this.profileForm.value.myName);
        console.log('Doctor: ', this.profileForm.value.myDoctor);
        console.log('Doctors #: ', this.profileForm.value.myDoctorsNumber);
        console.log('Birthday: ', this.profileForm.value.myBirthday);
        console.log('Other_meds: ', this.others);
    };
    OnboardPage.prototype.addToDB = function () {
        var myProfileDetailsBetter = [this.profileForm.value.myName,
            this.profileForm.value.myBirthday,
            this.profileForm.value.myDoctor,
            this.profileForm.value.myDoctorsNumber,
        ];
        this.database.insertData(myProfileDetailsBetter, "profile");
        console.log('Checker: ', myProfileDetailsBetter);
        var myDoc = {
            "doctor_name": this.profileForm.value.myDoctor,
        };
        this.database.insertData(myDoc, "profileDoc");
        this.router.navigateByUrl('/onboardtreatmentplan');
    };
    OnboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboard',
            template: __webpack_require__(/*! ./onboard.page.html */ "./src/app/onboard/onboard.page.html"),
            styles: [__webpack_require__(/*! ./onboard.page.scss */ "./src/app/onboard/onboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], OnboardPage);
    return OnboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=onboard-onboard-module.js.map