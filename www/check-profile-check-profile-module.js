(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["check-profile-check-profile-module"],{

/***/ "./src/app/check-profile/check-profile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/check-profile/check-profile.module.ts ***!
  \*******************************************************/
/*! exports provided: CheckProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckProfilePageModule", function() { return CheckProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _check_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./check-profile.page */ "./src/app/check-profile/check-profile.page.ts");







var routes = [
    {
        path: '',
        component: _check_profile_page__WEBPACK_IMPORTED_MODULE_6__["CheckProfilePage"]
    }
];
var CheckProfilePageModule = /** @class */ (function () {
    function CheckProfilePageModule() {
    }
    CheckProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_check_profile_page__WEBPACK_IMPORTED_MODULE_6__["CheckProfilePage"]]
        })
    ], CheckProfilePageModule);
    return CheckProfilePageModule;
}());



/***/ }),

/***/ "./src/app/check-profile/check-profile.page.html":
/*!*******************************************************!*\
  !*** ./src/app/check-profile/check-profile.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"splash-container\">\n  <img class=\"splash\" src=\"../../assets/splashpage.png\" alt=\"\">\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/check-profile/check-profile.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/check-profile/check-profile.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".splash-container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.splash {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL2NoZWNrLXByb2ZpbGUvY2hlY2stcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jaGVjay1wcm9maWxlL2NoZWNrLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwbGFzaC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3BsYXNoIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/check-profile/check-profile.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/check-profile/check-profile.page.ts ***!
  \*****************************************************/
/*! exports provided: CheckProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckProfilePage", function() { return CheckProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var CheckProfilePage = /** @class */ (function () {
    function CheckProfilePage(router, database, platform) {
        this.router = router;
        this.database = database;
        this.platform = platform;
    }
    CheckProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            return _this.platform.ready().then(function () {
                console.log("check profile");
                _this.database.callDatabase().then(function (data) {
                    //check if profile already exists
                    _this.database.profileExists().then(function (onboard) {
                        if (onboard == true) {
                            //onboarding has already completed. Go to home page instead.
                            console.log("return profile exists");
                            _this.router.navigateByUrl('tabs/tab2');
                        }
                        else {
                            //onboarding has already completed. Go to home page instead.
                            console.log("route to onboarding");
                            _this.router.navigateByUrl('h');
                        }
                    });
                });
            });
        }, 4000);
    };
    CheckProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-profile',
            template: __webpack_require__(/*! ./check-profile.page.html */ "./src/app/check-profile/check-profile.page.html"),
            styles: [__webpack_require__(/*! ./check-profile.page.scss */ "./src/app/check-profile/check-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], CheckProfilePage);
    return CheckProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=check-profile-check-profile-module.js.map