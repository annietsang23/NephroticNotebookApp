(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onboardothermeds-onboardothermeds-module"],{

/***/ "./src/app/onboardothermeds/onboardothermeds.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/onboardothermeds/onboardothermeds.module.ts ***!
  \*************************************************************/
/*! exports provided: OnboardothermedsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardothermedsPageModule", function() { return OnboardothermedsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _onboardothermeds_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onboardothermeds.page */ "./src/app/onboardothermeds/onboardothermeds.page.ts");







var routes = [
    {
        path: '',
        component: _onboardothermeds_page__WEBPACK_IMPORTED_MODULE_6__["OnboardothermedsPage"]
    }
];
var OnboardothermedsPageModule = /** @class */ (function () {
    function OnboardothermedsPageModule() {
    }
    OnboardothermedsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_onboardothermeds_page__WEBPACK_IMPORTED_MODULE_6__["OnboardothermedsPage"]]
        })
    ], OnboardothermedsPageModule);
    return OnboardothermedsPageModule;
}());



/***/ }),

/***/ "./src/app/onboardothermeds/onboardothermeds.page.html":
/*!*************************************************************!*\
  !*** ./src/app/onboardothermeds/onboardothermeds.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n\n  <h2 class='ion-header' style=\"padding-bottom: 8%\">\n      Other Medication\n  </h2>\n  <h3 style=\"padding-bottom: 10%\">\n      You can list any other medications and dosages you take here if you want!\n  </h3>\n\n  <ion-textarea [(ngModel)]=\"myMeds\" type=\"text\" value=\"\" class=\"rcornersbox\" clearInput=\"true\">\n    </ion-textarea>\n\n  <div class=\"box\">\n    <ion-button class=\"bottom-right\" size=\"small\" shape=\"round\" (click)=\"addToDB()\">\n        <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n        Finish\n    </ion-button>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/onboardothermeds/onboardothermeds.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/onboardothermeds/onboardothermeds.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: white;\n  text-align: center;\n  font-size: 15px !important; }\n\nh4 {\n  color: white;\n  text-align: center;\n  font-size: 10px !important; }\n\nh5 {\n  color: black;\n  text-align: center;\n  font-size: 20px !important; }\n\nh6 {\n  color: white;\n  text-align: right;\n  font-size: 15px !important; }\n\n.error-messages {\n  color: red;\n  text-align: center;\n  font-size: .9em; }\n\n.rcornersbox {\n  align-content: left;\n  font-size: 1em;\n  border-radius: 15px;\n  border: 0px;\n  background-color: white;\n  width: 100%;\n  height: 40%;\n  text-align: left;\n  margin-bottom: 20px;\n  padding: 10px; }\n\n.box {\n  position: relative;\n  margin: 5%;\n  padding: 5%; }\n\n.bottom-right {\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL29uYm9hcmRvdGhlcm1lZHMvb25ib2FyZG90aGVybWVkcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDBCQUEwQixFQUFBOztBQUk5QjtFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUluQjtFQUNJLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvb25ib2FyZG90aGVybWVkcy9vbmJvYXJkb3RoZXJtZWRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG5oNCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cblxuaDUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmg2IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLmVycm9yLW1lc3NhZ2VzIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG5cblxuLnJjb3JuZXJzYm94IHtcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAlOyBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogNSU7XG4gICAgcGFkZGluZzogNSU7XG59XG5cbi5ib3R0b20tcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/onboardothermeds/onboardothermeds.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/onboardothermeds/onboardothermeds.page.ts ***!
  \***********************************************************/
/*! exports provided: OnboardothermedsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardothermedsPage", function() { return OnboardothermedsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");




var OnboardothermedsPage = /** @class */ (function () {
    function OnboardothermedsPage(router, database) {
        this.router = router;
        this.database = database;
    }
    OnboardothermedsPage.prototype.ngOnInit = function () {
    };
    OnboardothermedsPage.prototype.openHome = function () {
        this.router.navigateByUrl('/tabs/tab3');
    };
    OnboardothermedsPage.prototype.backToTreatmentPlan = function () {
        this.router.navigateByUrl('../onboardtrementplan');
    };
    OnboardothermedsPage.prototype.addToDB = function () {
        this.myOtherMedDetails = {
            "other_meds": this.myMeds,
        };
        this.database.insertData(this.myOtherMedDetails, "profileOtherMeds");
        console.log('Other Meds: ', this.myMeds);
        this.router.navigateByUrl('/tabs/tab2');
    };
    OnboardothermedsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-onboardothermeds',
            template: __webpack_require__(/*! ./onboardothermeds.page.html */ "./src/app/onboardothermeds/onboardothermeds.page.html"),
            styles: [__webpack_require__(/*! ./onboardothermeds.page.scss */ "./src/app/onboardothermeds/onboardothermeds.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], OnboardothermedsPage);
    return OnboardothermedsPage;
}());



/***/ })

}]);
//# sourceMappingURL=onboardothermeds-onboardothermeds-module.js.map