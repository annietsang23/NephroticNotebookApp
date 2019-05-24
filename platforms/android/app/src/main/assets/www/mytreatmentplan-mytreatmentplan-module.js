(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytreatmentplan-mytreatmentplan-module"],{

/***/ "./src/app/mytreatmentplan/mytreatmentplan.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/mytreatmentplan/mytreatmentplan.module.ts ***!
  \***********************************************************/
/*! exports provided: MytreatmentplanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytreatmentplanPageModule", function() { return MytreatmentplanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mytreatmentplan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytreatmentplan.page */ "./src/app/mytreatmentplan/mytreatmentplan.page.ts");







var routes = [
    {
        path: '',
        component: _mytreatmentplan_page__WEBPACK_IMPORTED_MODULE_6__["MytreatmentplanPage"]
    }
];
var MytreatmentplanPageModule = /** @class */ (function () {
    function MytreatmentplanPageModule() {
    }
    MytreatmentplanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mytreatmentplan_page__WEBPACK_IMPORTED_MODULE_6__["MytreatmentplanPage"]]
        })
    ], MytreatmentplanPageModule);
    return MytreatmentplanPageModule;
}());



/***/ }),

/***/ "./src/app/mytreatmentplan/mytreatmentplan.page.html":
/*!***********************************************************!*\
  !*** ./src/app/mytreatmentplan/mytreatmentplan.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\n        <h2 class='ion-header' style=\"padding-bottom: 8%\">\n            My Treatment Plan\n        </h2>\n        \n        <h2 class='ion-header' style=\"padding-top: 10%\">\n            Maintenance Dose\n        </h2>\n\n          <ion-grid>\n              <ion-row>\n              <ion-col>\n                  <h4>Amount:</h4>\n                  <h4>(mg)</h4>\n                  <h5><div class=\"rcorners1\">{{ this.plan[0].amt }}</div></h5> \n              </ion-col>\n              <ion-col>\n                  <h4>Duration:</h4>\n                  <h4>Until</h4>\n                  <h4>Otherwise</h4>\n              </ion-col>\n              <ion-col>\n                  <h4>Times:</h4>\n                  <h4>(per int)</h4>\n                  <h5><div class=\"rcorners1\">{{ this.plan[0].pillno }}</div></h5>\n              </ion-col>\n              <ion-col>\n                  <h4>Interval:</h4>\n                  <h4>(days)</h4>\n                  <h5><div class=\"rcorners1\">{{ this.plan[0].interval }}</div></h5>\n              </ion-col>\n              </ion-row>\n          </ion-grid>\n\n            <h2 class='ion-header' style=\"padding-top: 10%\">\n                Relapse Plan\n            </h2>\n\n            <ion-grid>\n                <ion-row>\n                <ion-col>\n                    <h4>Amount:</h4>\n                    <h4>(mg)</h4>\n                    <h5><div class=\"rcorners1\">{{ this.plan[1].amt }}</div></h5>\n\n                </ion-col>\n                <ion-col>\n                  <h4>Duration:</h4>\n                  <h4>Until</h4>\n                  <h4>Remission</h4>\n                </ion-col>\n                <ion-col>\n                    <h4>Times:</h4>\n                    <h4>(per int)</h4>\n                    <h5><div class=\"rcorners1\">{{ this.plan[1].pillno }}</div></h5>\n                </ion-col>\n                <ion-col>\n                    <h4>Interval:</h4>\n                    <h4>(days)</h4>\n                    <h5><div class=\"rcorners1\">{{ this.plan[1].interval }}</div></h5>\n                </ion-col>\n                </ion-row>\n            </ion-grid>\n            <h2 class='ion-header'  style=\"padding-top: 10%\">\n                Remission Plan\n            </h2>\n            <ion-grid>\n                <ion-row>\n                <ion-col>\n                    <h4>Amount:</h4>\n                    <h4>(mg)</h4>\n                    <h5>\n                        <div *ngFor=\"let treatment of treatmentPlan\" type=\"number\"class=\"rcorners1\">{{ treatment.amt }}</div>\n                    </h5>\n                </ion-col>\n                <ion-col>\n                    <h4>Duration:</h4>\n                    <h4>(days)</h4>\n                    <h5>\n                        <div *ngFor=\"let treatment of treatmentPlan\" type=\"number\"class=\"rcorners1\">{{ treatment.dur }}</div>\n                    </h5>\n                </ion-col>\n                <ion-col>\n                    <h4>Times:</h4>\n                    <h4>(per int)</h4>\n                    <h5>\n                        <div *ngFor=\"let treatment of treatmentPlan\" type=\"number\"class=\"rcorners1\">{{ treatment.pillno }}</div>\n                    </h5>\n                </ion-col>\n                <ion-col width=\"25%\">\n                    <h4>Interval:</h4>\n                    <h4>(days)</h4>\n                    <h5>\n                        <div *ngFor=\"let treatment of treatmentPlan\" type=\"number\"class=\"rcorners1\">{{ treatment.interval }}</div>\n                    </h5>\n                </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <div class=\"box\">\n            <img class=\"bottom-right\" src=\"../../../assets/buttons/newtreatmentplan.svg\" routerDirection=\"forward\" (click)=\"editPlan()\">\n            </div>\n        </ion-content>"

/***/ }),

/***/ "./src/app/mytreatmentplan/mytreatmentplan.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/mytreatmentplan/mytreatmentplan.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: white;\n  text-align: center;\n  font-size: 15px !important; }\n\nh4 {\n  color: white;\n  text-align: center;\n  font-size: 10px !important; }\n\nh5 {\n  color: black;\n  text-align: center;\n  font-size: 20px !important; }\n\nh6 {\n  color: white;\n  text-align: right;\n  font-size: 10px !important;\n  background-color: none; }\n\n.error-messages {\n  color: red;\n  text-align: center;\n  font-size: .9em; }\n\n.rcorners {\n  align-content: center;\n  border-radius: 15px;\n  background-color: white;\n  width: 30%;\n  height: 100%;\n  text-align: center;\n  border: 0px; }\n\n.rcorners1 {\n  align-content: center;\n  border-radius: 15px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin: 5%;\n  padding: 5%;\n  border: 0px; }\n\n.box {\n  position: relative;\n  width: 100%;\n  height: 30px;\n  margin: 5%;\n  padding: 5%; }\n\n.bottom-right {\n  position: absolute;\n  bottom: 0;\n  right: 5%; }\n\n#edit-button {\n  width: 80px;\n  height: 30px;\n  border-radius: 15px;\n  border: none;\n  margin: 10px; }\n\n#edit-icon {\n  height: 20px;\n  width: 20px;\n  display: block;\n  border: none;\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL215dHJlYXRtZW50cGxhbi9teXRyZWF0bWVudHBsYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsc0JBQXNCLEVBQUE7O0FBSTFCO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdmO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTLEVBQUE7O0FBR2I7RUFDSSxXQUFVO0VBQ1YsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsWUFBVyxFQUFBOztBQUdmO0VBQ0ksWUFBVztFQUNYLFdBQVU7RUFDVixjQUFjO0VBQ2QsWUFBVztFQUNYLFdBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL215dHJlYXRtZW50cGxhbi9teXRyZWF0bWVudHBsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmg0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweCAhaW1wb3J0YW50O1xufVxuXG5oNSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbn1cblxuaDYge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lOyBcbn1cblxuXG4uZXJyb3ItbWVzc2FnZXMge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLnJjb3JuZXJzIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDBweDtcbn1cblxuLnJjb3JuZXJzMSB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNSU7XG4gICAgcGFkZGluZzogNSU7XG4gICAgYm9yZGVyOiAwcHg7XG59XG5cbi5ib3gge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDUlO1xuICAgIHBhZGRpbmc6IDUlO1xufVxuXG4uYm90dG9tLXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiA1JTtcbn1cblxuI2VkaXQtYnV0dG9ue1xuICAgIHdpZHRoOjgwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIG1hcmdpbjoxMHB4O1xufVxuXG4jZWRpdC1pY29ue1xuICAgIGhlaWdodDoyMHB4O1xuICAgIHdpZHRoOjIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgbWFyZ2luOjVweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/mytreatmentplan/mytreatmentplan.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/mytreatmentplan/mytreatmentplan.page.ts ***!
  \*********************************************************/
/*! exports provided: MytreatmentplanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytreatmentplanPage", function() { return MytreatmentplanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_fetch_reading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/fetch-reading.service */ "./src/app/services/fetch-reading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MytreatmentplanPage = /** @class */ (function () {
    function MytreatmentplanPage(router, formBuilder, fetchReading) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.fetchReading = fetchReading;
        this.treatmentPlan = null;
        this.treatmentPlanId = null;
        this.planId = null;
        this.plan = null;
        this.isData = false;
    }
    MytreatmentplanPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchReading
            .treatmentPlanID()
            .then(function (data) {
            _this.planId = data;
            console.log("id from db come on 4", _this.planId[0].planId);
            _this.planId = _this.planId[0].planId;
            console.log("ID to be retrieved", _this.planId);
            _this.getCurrentPlan(_this.planId);
        });
    };
    MytreatmentplanPage.prototype.getCurrentPlan = function (id) {
        var _this = this;
        this.fetchReading
            .treatmentPlan(id)
            .then(function (data) {
            var existingData = Object.keys(data).length;
            if (existingData !== 0) {
                _this.treatmentPlan = data;
                _this.isData = true;
            }
            console.log("plan 1", _this.treatmentPlan);
            console.log("plan 2", _this.treatmentPlan.amt);
            console.log("plan 3", _this.treatmentPlan[0].amt);
            console.log("plan 4", _this.treatmentPlan[1].dur);
            _this.populatePlan(_this.treatmentPlan);
        });
    };
    MytreatmentplanPage.prototype.makeArray = function (data) {
        var k;
        this.plan.length = 0;
        for (k in data) {
            this.plan.push(data[k].state, data[k].amt, data[k].dur, data[k].pillno, data[k].interval);
        }
        console.log("plan from db", this.plan);
        console.log("plan from db", this.plan[0]);
        console.log("plan from db", this.plan[1]);
    };
    MytreatmentplanPage.prototype.populatePlan = function (data) {
        this.plan = data.splice(0, 2);
        console.log("plan from db", this.plan);
        console.log("plan from db", this.plan[0].amt);
        console.log("plan from db", this.plan[1].amt);
    };
    MytreatmentplanPage.prototype.goBack = function () {
        this.router.navigateByUrl('tabs/tab3');
    };
    MytreatmentplanPage.prototype.editPlan = function () {
        this.router.navigateByUrl('tabs/tab3/mytreatmentplan/edit');
    };
    MytreatmentplanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mytreatmentplan',
            template: __webpack_require__(/*! ./mytreatmentplan.page.html */ "./src/app/mytreatmentplan/mytreatmentplan.page.html"),
            styles: [__webpack_require__(/*! ./mytreatmentplan.page.scss */ "./src/app/mytreatmentplan/mytreatmentplan.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_fetch_reading_service__WEBPACK_IMPORTED_MODULE_3__["FetchReadingService"]])
    ], MytreatmentplanPage);
    return MytreatmentplanPage;
}());



/***/ })

}]);
//# sourceMappingURL=mytreatmentplan-mytreatmentplan-module.js.map