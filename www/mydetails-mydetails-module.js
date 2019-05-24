(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mydetails-mydetails-module"],{

/***/ "./src/app/mydetails/mydetails.module.ts":
/*!***********************************************!*\
  !*** ./src/app/mydetails/mydetails.module.ts ***!
  \***********************************************/
/*! exports provided: MydetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydetailsPageModule", function() { return MydetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mydetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mydetails.page */ "./src/app/mydetails/mydetails.page.ts");







var routes = [
    {
        path: '',
        component: _mydetails_page__WEBPACK_IMPORTED_MODULE_6__["MydetailsPage"]
    }
];
var MydetailsPageModule = /** @class */ (function () {
    function MydetailsPageModule() {
    }
    MydetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mydetails_page__WEBPACK_IMPORTED_MODULE_6__["MydetailsPage"]]
        })
    ], MydetailsPageModule);
    return MydetailsPageModule;
}());



/***/ }),

/***/ "./src/app/mydetails/mydetails.page.html":
/*!***********************************************!*\
  !*** ./src/app/mydetails/mydetails.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content padding>\n\n    <h2 class='ion-header' style=\"padding-bottom: 8%\">\n        My Details\n    </h2>\n\n      <h3><ion-label>My Name</ion-label></h3> \n      <h5><div *ngFor=\"let data of myDetails\" class=\"rcorners\">{{ data.name }}</div></h5>\n\n      <h3><ion-label>My Doctor</ion-label></h3>\n      <h5><div *ngFor=\"let data of myDetails\" class=\"rcorners\">{{ data.doc }}</div></h5>\n  \n      <h3><ion-label>My Doctor's Number</ion-label></h3>\n      <h5><div *ngFor=\"let data of myDetails\" class=\"rcorners\">{{ data.num }}</div></h5>\n\n      <h3><ion-label>My Birthday</ion-label></h3>\n      <h5><div class=\"rcorners\">{{ this.myBirthday.date }}</div></h5>\n\n      <h3><ion-label>My Other Medication</ion-label></h3>\n      <h5><div style=\"margin-bottom: 10%\" *ngFor=\"let data of myDetails\" class=\"rcorners\">{{ data.othermeds }}</div></h5>\n\n      <div class=\"box\">\n        <img src=\"../../../assets/buttons/back-btn.svg\" alt=\"Back\" (click)=\"goBack()\">\n        <img class=\"bottom-right\" src=\"../../../assets/buttons/edit.svg\"  routerDirection=\"forward\" (click)=\"editDetails()\">\n        </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mydetails/mydetails.page.scss":
/*!***********************************************!*\
  !*** ./src/app/mydetails/mydetails.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: white;\n  text-align: center;\n  font-size: 15px !important; }\n\nh4 {\n  color: white;\n  text-align: center;\n  font-size: 10px !important; }\n\nh5 {\n  color: black;\n  text-align: center;\n  font-size: 20px !important; }\n\nh6 {\n  color: white;\n  text-align: right;\n  font-size: 15px !important; }\n\n.error-messages {\n  color: red;\n  text-align: center;\n  font-size: 0.7em; }\n\n.rcorners {\n  align-content: center;\n  border-radius: 15px;\n  border: 0px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  align-content: center;\n  margin-bottom: 10px;\n  padding: 5px; }\n\n.rcornersbox {\n  align-content: left;\n  font-size: 1em;\n  border-radius: 15px;\n  border: 0px;\n  background-color: white;\n  width: 100%;\n  height: 40%;\n  text-align: left;\n  margin-bottom: 20px;\n  padding: 10px; }\n\n.box {\n  position: relative;\n  width: 100%;\n  height: 50px; }\n\n.bottom-right {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  margin: 5px;\n  align-content: right; }\n\n#edit-button {\n  width: 80px;\n  height: 30px;\n  border-radius: 15px;\n  border: none;\n  margin: 10px; }\n\n#edit-icon {\n  height: 20px;\n  width: 20px;\n  display: block;\n  border: none;\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL215ZGV0YWlscy9teWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQiwwQkFBMEIsRUFBQTs7QUFJOUI7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBR2pCO0VBQ0Esa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFXLEVBQUE7O0FBR1g7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFlBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVc7RUFDWCxXQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVc7RUFDWCxXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9teWRldGFpbHMvbXlkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG5oNCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbn1cblxuaDUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmg2IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLmVycm9yLW1lc3NhZ2VzIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDAuN2VtO1xufVxuXG5cbi5yY29ybmVycyB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnJjb3JuZXJzYm94IHtcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAlOyBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLmJveCB7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG53aWR0aDoxMDAlO1xuaGVpZ2h0OjUwcHg7XG59XG5cbi5ib3R0b20tcmlnaHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDVweDtcbiAgICByaWdodDogNXB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IHJpZ2h0O1xufVxuXG4jZWRpdC1idXR0b257XG4gICAgd2lkdGg6ODBweDtcbiAgICBoZWlnaHQ6MzBweDtcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgbWFyZ2luOjEwcHg7XG59XG5cbiNlZGl0LWljb257XG4gICAgaGVpZ2h0OjIwcHg7XG4gICAgd2lkdGg6MjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6bm9uZTtcbiAgICBtYXJnaW46NXB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/mydetails/mydetails.page.ts":
/*!*********************************************!*\
  !*** ./src/app/mydetails/mydetails.page.ts ***!
  \*********************************************/
/*! exports provided: MydetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydetailsPage", function() { return MydetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_reading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fetch-reading.service */ "./src/app/services/fetch-reading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MydetailsPage = /** @class */ (function () {
    function MydetailsPage(router, fetchReading) {
        this.router = router;
        this.fetchReading = fetchReading;
        this.myDetails = null;
        this.details = [];
        this.myBirthday = null;
    }
    MydetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchReading
            .myProfileDetails()
            .then(function (data) {
            var existingData = Object.keys(data).length;
            if (existingData !== 0) {
                _this.myDetails = data;
            }
            console.log("my details from db", _this.myDetails);
            _this.makeArray(_this.myDetails);
            var dateonly = _this.myDetails[0].birthday.split("T")[0];
            _this.myBirthday = { date: dateonly };
            console.log("my details", _this.myDetails);
            console.log("my birthday", _this.myBirthday);
            console.log("birthday other", _this.myBirthday.date);
        });
    };
    MydetailsPage.prototype.makeArray = function (data) {
        var k;
        this.details.length = 0;
        for (k in data) {
            this.details.push(data[k].name, data[k].doc, data[k].num, data[k].birthday, data[k].othermeds);
        }
        console.log("plan from db", this.details);
        console.log("plan from db", this.details[0]);
        console.log("plan from db", this.details[1]);
    };
    MydetailsPage.prototype.goBack = function () {
        this.router.navigateByUrl('tabs/tab3');
    };
    MydetailsPage.prototype.editDetails = function () {
        this.router.navigateByUrl('/tabs/tab3/mydetails/editdetails');
    };
    MydetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mydetails',
            template: __webpack_require__(/*! ./mydetails.page.html */ "./src/app/mydetails/mydetails.page.html"),
            styles: [__webpack_require__(/*! ./mydetails.page.scss */ "./src/app/mydetails/mydetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_fetch_reading_service__WEBPACK_IMPORTED_MODULE_2__["FetchReadingService"]])
    ], MydetailsPage);
    return MydetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=mydetails-mydetails-module.js.map