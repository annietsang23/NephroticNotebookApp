(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mydatalog-mydatalog-module"],{

/***/ "./src/app/mydatalog/mydatalog.module.ts":
/*!***********************************************!*\
  !*** ./src/app/mydatalog/mydatalog.module.ts ***!
  \***********************************************/
/*! exports provided: MydatalogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydatalogPageModule", function() { return MydatalogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mydatalog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mydatalog.page */ "./src/app/mydatalog/mydatalog.page.ts");







var routes = [
    {
        path: '',
        component: _mydatalog_page__WEBPACK_IMPORTED_MODULE_6__["MydatalogPage"]
    }
];
var MydatalogPageModule = /** @class */ (function () {
    function MydatalogPageModule() {
    }
    MydatalogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mydatalog_page__WEBPACK_IMPORTED_MODULE_6__["MydatalogPage"]]
        })
    ], MydatalogPageModule);
    return MydatalogPageModule;
}());



/***/ }),

/***/ "./src/app/mydatalog/mydatalog.page.html":
/*!***********************************************!*\
  !*** ./src/app/mydatalog/mydatalog.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n\n  <h2 class='ion-header' style=\"padding-bottom: 5%\" style=\"padding-top: 5%\">\n      My Data Log\n  </h2>\n  <ion-grid>\n      <ion-row>\n      <ion-col>\n          <h4>Date</h4>\n      </ion-col>\n      <ion-col>\n          <h4>Reading</h4>\n      </ion-col>\n      <ion-col>\n          <h4>Meds Taken</h4>\n      </ion-col>\n      </ion-row>\n  </ion-grid>\n  \n  <div class=\"display\" scrollY=\"true\">\n  <ion-grid>\n      <ion-row>\n      <ion-col>\n          <h5>\n              <div *ngFor=\"let data of data_log\" type=\"number\" >{{ data.date }}</div>\n          </h5>\n      </ion-col>\n      <ion-col>\n          <h5>\n              <div *ngFor=\"let data of data_log\" type=\"number\" >{{ data.symbol }}</div>\n          </h5>\n      </ion-col>\n      <ion-col>\n          <h5>\n              <div *ngFor=\"let data of data_log\" type=\"number\">{{ data.meds_taken }}</div>\n          </h5>\n      </ion-col>\n      </ion-row>\n  </ion-grid>\n</div>\n\n<div class=\"box\">\n    <img class=\"bottom-right\" src=\"../../../assets/buttons/export.svg\"  routerDirection=\"forward\" (click)=\"exportDataLog()\">\n</div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/mydatalog/mydatalog.page.scss":
/*!***********************************************!*\
  !*** ./src/app/mydatalog/mydatalog.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: white;\n  text-align: center;\n  font-size: 15px !important; }\n\nh4 {\n  color: white;\n  text-align: center;\n  font-size: 10px !important; }\n\nh5 {\n  color: black;\n  text-align: center;\n  font-size: 15px !important; }\n\nh6 {\n  color: white;\n  text-align: right;\n  font-size: 10px !important;\n  background-color: none; }\n\n.height {\n  line-height: 11px; }\n\n.error-messages {\n  color: red;\n  text-align: center;\n  font-size: 0.7em; }\n\n.rcorners {\n  align-content: center;\n  border-radius: 15px;\n  border: 0px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  align-content: center;\n  margin-bottom: 10px;\n  padding: 5px; }\n\n.rcorners1 {\n  align-content: center;\n  border-radius: 15px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: 0px; }\n\n.display {\n  align-content: center;\n  border-radius: 15px;\n  width: 100%;\n  height: 60%;\n  background-color: white;\n  white-space: nowrap;\n  overflow-y: scroll; }\n\n.box {\n  position: relative;\n  width: 100%;\n  height: 35px;\n  margin-top: 5%; }\n\n.bottom-right {\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n.centre {\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n.bottom-left {\n  position: absolute;\n  bottom: 0;\n  left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL215ZGF0YWxvZy9teWRhdGFsb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0kscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBRWY7RUFDSSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVc7RUFDWCxjQUFjLEVBQUE7O0FBSWxCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRLEVBQUE7O0FBR1o7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVEsRUFBQTs7QUFHWjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbXlkYXRhbG9nL215ZGF0YWxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmgzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG5oNCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cblxuaDUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmg2IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTsgXG59XG5cbi5oZWlnaHQge1xuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmVycm9yLW1lc3NhZ2VzIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuN2VtO1xufVxuXG4ucmNvcm5lcnMge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5yY29ybmVyczEge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDBweDtcbn1cbi5kaXNwbGF5IHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwJTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cblxuLmJveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgXG59XG5cbi5ib3R0b20tcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5jZW50cmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5ib3R0b20tbGVmdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/mydatalog/mydatalog.page.ts":
/*!*********************************************!*\
  !*** ./src/app/mydatalog/mydatalog.page.ts ***!
  \*********************************************/
/*! exports provided: MydatalogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydatalogPage", function() { return MydatalogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_reading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fetch-reading.service */ "./src/app/services/fetch-reading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MydatalogPage = /** @class */ (function () {
    function MydatalogPage(router, fetchReading) {
        this.router = router;
        this.fetchReading = fetchReading;
        this.data_log = null;
    }
    MydatalogPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchReading
            .dataLog()
            .then(function (data) {
            var existingData = Object.keys(data).length;
            if (existingData !== 0) {
                _this.data_log = data;
            }
            console.log("plan 1", _this.data_log);
            console.log("plan 3", _this.data_log[0].date);
            console.log("plan 4", _this.data_log[0].meds_taken);
            console.log("plan 5", _this.data_log[0].symbol);
        });
    };
    MydatalogPage.prototype.exportDataLog = function () {
        this.router.navigateByUrl('/tabs/tab3/mydatalog/exportlog');
    };
    MydatalogPage.prototype.goBack = function () {
        this.router.navigateByUrl('tabs/tab3');
    };
    MydatalogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mydatalog',
            template: __webpack_require__(/*! ./mydatalog.page.html */ "./src/app/mydatalog/mydatalog.page.html"),
            styles: [__webpack_require__(/*! ./mydatalog.page.scss */ "./src/app/mydatalog/mydatalog.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_fetch_reading_service__WEBPACK_IMPORTED_MODULE_2__["FetchReadingService"]])
    ], MydatalogPage);
    return MydatalogPage;
}());



/***/ })

}]);
//# sourceMappingURL=mydatalog-mydatalog-module.js.map