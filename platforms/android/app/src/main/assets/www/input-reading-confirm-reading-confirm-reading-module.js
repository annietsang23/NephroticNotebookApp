(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-reading-confirm-reading-confirm-reading-module"],{

/***/ "./src/app/input-reading/confirm-reading/confirm-reading.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/input-reading/confirm-reading/confirm-reading.module.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmReadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmReadingPageModule", function() { return ConfirmReadingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirm_reading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-reading.page */ "./src/app/input-reading/confirm-reading/confirm-reading.page.ts");







var routes = [
    {
        path: '',
        component: _confirm_reading_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmReadingPage"]
    }
];
var ConfirmReadingPageModule = /** @class */ (function () {
    function ConfirmReadingPageModule() {
    }
    ConfirmReadingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_confirm_reading_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmReadingPage"]]
        })
    ], ConfirmReadingPageModule);
    return ConfirmReadingPageModule;
}());



/***/ }),

/***/ "./src/app/input-reading/confirm-reading/confirm-reading.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/input-reading/confirm-reading/confirm-reading.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"entire-screen\">\n    <div class=\"top-container\">\n      <div class=\"protein-level-box {{ proteinColorClass }}\">\n        <h4 class=\"box-txt\">Protein level is {{ proteinReading }}</h4>\n        <div class=\"protein-sym-container\">\n          <img class=\"protein-sym\" src=\"../../../assets/icon/protein-symbols/{{ proteinSymb }}\">\n        </div>\n        <div class=\"reading-desc\">\n          <p>You are in {{ this.stateName }}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"bottom-container\">\n      <div class=\"bot-mid-container\">\n        <h4>Recommended Dose of Prednisone</h4>\n        <p *ngIf=\"intervalLen != 1\">Your treatment plan indicates this recommended dosage should be taken every\n          {{ intervalLen }} days.</p>\n        <p *ngIf=\"intervalLen == 1\">Your treatment plan indicates this recommended dosage should be taken every day.</p>\n        <div class=\"dose-container\">\n          <div class=\"dose-lhs-container\">\n            <img class=\"meds\" src=\"../../../assets/icon/med.svg\">\n          </div>\n          <div class=\"dose-rhs-container\">\n            <div class=\"dose-rhs-top\">\n              <h2>{{ reccDose }}mg x {{ dosesPerInterval }}</h2>\n            </div>\n            <div class=\"dose-rhs-bot\">\n              <img (click)=\"this.confirmMedsTaken()\" id=\"confirmMeds\"\n                src=\"../../../assets/buttons/confirm-taken-btn.svg\">\n              <img (click)=\"this.cancelMedsTaken()\" id=\"cancelMeds\" src=\"../../../assets/buttons/confirm-taken-tick.svg\"\n                style=\"display: none\">\n            </div>\n          </div>\n        </div>\n        <div class=\"leave-comment-container\">\n          <form style=\"width: 100%\">\n            <div class=\"form-group comment-formgroup\">\n              <input type=\"hidden\" id=\"readingLevel\" name=\"readingLevel\" value=\"{{ readingLevel }}\">\n              <input type=\"hidden\" id=\"wasMedTaken\" name=\"wasMedTaken\" value=\"{{ readingLevel }}\">\n              <label for=\"comment\">\n                <p>Add a Comment</p>\n              </label>\n              <textarea [(ngModel)]=\"user_comment\" name=\"comment\" id=\"comment\" rows=\"5\"\n                class=\"comment-textarea\"></textarea>\n\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-container\">\n      <div class=\"footer-lhs\">\n        <img src=\"../../../assets/buttons/back-btn.svg\" alt=\"Back\" (click)=\"goBack()\">\n      </div>\n      <div class=\"footer-rhs\">\n        <img src=\"../../../assets/buttons/confirm-btn.svg\" alt=\"Confirm\" (click)=\"addReadingToDB()\">\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/input-reading/confirm-reading/confirm-reading.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/input-reading/confirm-reading/confirm-reading.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entire-screen {\n  display: flex;\n  flex-flow: column;\n  height: 100%;\n  width: 100%; }\n\n.top-container {\n  width: 100%;\n  padding: 5% 5% 5% 5%; }\n\n.protein-level-box {\n  align-items: center;\n  justify-content: center;\n  background: #FFFFFF;\n  border: 6px solid;\n  border-radius: 13px;\n  margin: auto;\n  margin-top: 5%;\n  padding: 2%;\n  height: 100%;\n  width: 100%; }\n\n.box-txt {\n  color: black;\n  text-align: center;\n  font-size: 20px; }\n\n.reading-desc p {\n  color: black; }\n\n.protein-sym-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 5px;\n  margin-bottom: 10px;\n  padding: 2%; }\n\n.protein-sym {\n  align-items: center;\n  background-color: white;\n  display: block;\n  margin: auto; }\n\n.bottom-container {\n  width: 100%;\n  flex-grow: 1; }\n\n.bot-mid-container {\n  width: 100%;\n  padding: 5%; }\n\n.dose-container {\n  height: 50%;\n  width: 100%;\n  margin-top: 5%; }\n\n.dose-lhs-container {\n  display: flex;\n  width: 50%;\n  height: 100%;\n  float: left;\n  text-align: center;\n  justify-content: center; }\n\n.dose-rhs-container {\n  width: 50%;\n  height: 100%;\n  margin-left: 50%; }\n\n.dose-rhs-top {\n  display: flex;\n  height: 50%;\n  width: 100%;\n  text-align: flex-end;\n  justify-content: center; }\n\n.dose-rhs-top h2 {\n    align-self: flex-end; }\n\n.dose-rhs-bot {\n  height: 50%;\n  width: 100%;\n  align-items: flex-start;\n  text-align: center; }\n\n.leave-comment-container {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  padding-top: 10%; }\n\n.leave-comm-btn {\n  align-items: center;\n  justify-content: center; }\n\n.comment-formgroup {\n  text-align: center;\n  color: white; }\n\n.comment-formgroup textarea {\n    border-radius: 10px; }\n\n.comment-textarea {\n  width: 90%;\n  color: black; }\n\n.footer-container {\n  width: 100%;\n  padding: 2%; }\n\n.footer-lhs {\n  padding: 2%;\n  width: 50%;\n  float: left; }\n\n.footer-rhs {\n  padding: 2%;\n  text-align: right;\n  width: 50%;\n  margin-left: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL2lucHV0LXJlYWRpbmcvY29uZmlybS1yZWFkaW5nL2NvbmZpcm0tcmVhZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsb0JBQW9CLEVBQUE7O0FBSXhCO0VBQ0ksbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBRVEsWUFBWSxFQUFBOztBQUlwQjtFQUVJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdoQjtFQUdJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBR0ksV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWE7RUFDYixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFFWCxrQkFBa0I7RUFDbEIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsdUJBQXVCLEVBQUE7O0FBTDNCO0lBU1Esb0JBQW9CLEVBQUE7O0FBSTVCO0VBRUksV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUZoQjtJQUtRLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbnB1dC1yZWFkaW5nL2NvbmZpcm0tcmVhZGluZy9jb25maXJtLXJlYWRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVudGlyZS1zY3JlZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udG9wLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNSUgNSUgNSUgNSU7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbn1cblxuLnByb3RlaW4tbGV2ZWwtYm94IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiA2cHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYm94LXR4dCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5yZWFkaW5nLWRlc2Mge1xuICAgIHAge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxufVxuXG4ucHJvdGVpbi1zeW0tY29udGFpbmVyIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiAyJTtcbn1cblxuLnByb3RlaW4tc3ltIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmJvdHRvbS1jb250YWluZXIge1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uYm90LW1pZC1jb250YWluZXIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIC8vIGhlaWdodDogODUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDUlO1xufVxuXG4uZG9zZS1jb250YWluZXIge1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuXG4uZG9zZS1saHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRvc2UtcmhzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLmRvc2UtcmhzLXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuICAgIGgyIHtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgfVxufVxuXG4uZG9zZS1yaHMtYm90IHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxlYXZlLWNvbW1lbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLmxlYXZlLWNvbW0tYnRuIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29tbWVudC1mb3JtZ3JvdXAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgfVxufVxuXG4uY29tbWVudC10ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyJTtcbn1cblxuLmZvb3Rlci1saHMge1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mb290ZXItcmhzIHtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/input-reading/confirm-reading/confirm-reading.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/input-reading/confirm-reading/confirm-reading.page.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmReadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmReadingPage", function() { return ConfirmReadingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





// import { FetchReadingService } from '../../services/fetch-reading.service';
var ConfirmReadingPage = /** @class */ (function () {
    function ConfirmReadingPage(route, database, router, storage) {
        this.route = route;
        this.database = database;
        this.router = router;
        this.storage = storage;
    }
    ConfirmReadingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.reading = params['reading'];
        });
        this.medTaken = 0;
        this.getNextStateDetails();
        // select correct reading
        switch (this.reading) {
            case "neg": {
                this.proteinReading = "Negative";
                this.proteinSymb = "neg.svg";
                this.proteinColorClass = "protein-neg";
                this.readingLevel = 1;
                break;
            }
            case "trace": {
                this.proteinReading = "Trace";
                this.proteinSymb = "trace.svg";
                this.proteinColorClass = "protein-trace";
                this.readingLevel = 2;
                break;
            }
            case "onep": {
                this.proteinReading = "30mg/dL";
                this.proteinSymb = "oneplus.svg";
                this.proteinColorClass = "protein-one";
                this.readingLevel = 3;
                break;
            }
            case "twop": {
                this.proteinReading = "100mg/dL";
                this.proteinSymb = "twoplus.svg";
                this.proteinColorClass = "protein-two";
                this.readingLevel = 4;
                break;
            }
            case "threep": {
                this.proteinReading = "300mg/dL";
                this.proteinSymb = "threeplus.svg";
                this.proteinColorClass = "protein-three";
                this.readingLevel = 5;
                break;
            }
            case "fourp": {
                this.proteinReading = "2000mg/dL+";
                this.proteinSymb = "fourplus.svg";
                this.proteinColorClass = "protein-four";
                this.readingLevel = 6;
                break;
            }
        }
    };
    ConfirmReadingPage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    ConfirmReadingPage.prototype.getMedicationNumber = function (medTaken) {
        if (medTaken) {
            return 1;
        }
        else {
            return 0;
        }
    };
    ConfirmReadingPage.prototype.addReadingToDB = function () {
        var _this = this;
        // get readingLevel
        this.readingLevelStr = document.getElementById("readingLevel").getAttribute("value");
        console.log(this.readingLevelStr);
        // get comment
        // this.commentStr = document.getElementById("comment").getAttribute("value");
        this.commentStr = this.user_comment;
        if (this.commentStr == null || this.commentStr == "") {
            this.commentStr = "None";
        }
        console.log('comment = ' + this.user_comment);
        this.todaysReadingObj = {
            "reading_level_id": this.readingLevel,
            "medication_taken": this.medTaken,
            "user_comment": this.commentStr,
            "treatment_state_id": this.new_state,
        };
        this.database.insertData(this.todaysReadingObj, "daily_readingsReal")
            .then(function (data) {
            _this.updateNewState();
            _this.router.navigate(['tabs/tab2/post-reading']);
        })
            .catch(function (error) {
            console.log(error);
            console.log(error.stringify());
        });
    };
    ConfirmReadingPage.prototype.confirmMedsTaken = function () {
        document.getElementById("confirmMeds").style.display = "none";
        document.getElementById("cancelMeds").style.display = "";
        this.medTaken = 1;
        console.log('confirmMedsTaken = ');
        console.log(this.medTaken);
    };
    ConfirmReadingPage.prototype.cancelMedsTaken = function () {
        document.getElementById("confirmMeds").style.display = "";
        document.getElementById("cancelMeds").style.display = "none";
        this.medTaken = 0;
        console.log('confirmMedsTaken = ');
        console.log(this.medTaken);
    };
    ConfirmReadingPage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ConfirmReadingPage.prototype.getNextStateDetails = function () {
        var _this = this;
        this.storage.get("new_state_obj")
            .then(function (val) {
            console.log("val pulled from storage below:");
            console.log(val);
            _this.new_state = val["new_state"];
            _this.new_start_date = val["new_start_date"];
        })
            .then(function (val) {
            var query = "SELECT * FROM treatment_state WHERE treatment_state_id = " + _this.new_state + ";";
            console.log(query);
            _this.database.doQuery(query).then(function (result) {
                console.log(result);
                _this.treatmentDetails = result[1];
            }).then(function (val) {
                _this.dosesPerInterval = _this.treatmentDetails["doses_per_interval"];
                _this.reccDose = _this.treatmentDetails["recc_dose"];
                _this.stateName = _this.treatmentDetails["state_name"];
                _this.intervalLen = _this.treatmentDetails["interval_length"];
            });
        })
            .then(function (val) {
            _this.storage.set("treatmentDetails", _this.treatmentDetails);
        });
    };
    ConfirmReadingPage.prototype.updateNewState = function () {
        var _this = this;
        this.database.updateActiveTreatmentState(this.new_state, this.new_start_date)
            .then(function (data) {
            console.log("Updating Active State with " + _this.new_state + " and " + _this.new_start_date);
        })
            .catch(function (error) {
            console.log(error.stringify());
        });
    };
    ConfirmReadingPage.prototype.goBack = function () {
        this.router.navigateByUrl('tabs/tab2/input-reading');
    };
    ConfirmReadingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-reading',
            template: __webpack_require__(/*! ./confirm-reading.page.html */ "./src/app/input-reading/confirm-reading/confirm-reading.page.html"),
            styles: [__webpack_require__(/*! ./confirm-reading.page.scss */ "./src/app/input-reading/confirm-reading/confirm-reading.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], ConfirmReadingPage);
    return ConfirmReadingPage;
}());



/***/ })

}]);
//# sourceMappingURL=input-reading-confirm-reading-confirm-reading-module.js.map