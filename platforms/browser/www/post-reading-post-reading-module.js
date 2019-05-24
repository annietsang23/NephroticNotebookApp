(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-reading-post-reading-module"],{

/***/ "./src/app/post-reading/post-reading.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/post-reading/post-reading.module.ts ***!
  \*****************************************************/
/*! exports provided: PostReadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostReadingPageModule", function() { return PostReadingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _post_reading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-reading.page */ "./src/app/post-reading/post-reading.page.ts");







var routes = [
    {
        path: '',
        component: _post_reading_page__WEBPACK_IMPORTED_MODULE_6__["PostReadingPage"]
    }
];
var PostReadingPageModule = /** @class */ (function () {
    function PostReadingPageModule() {
    }
    PostReadingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_post_reading_page__WEBPACK_IMPORTED_MODULE_6__["PostReadingPage"]]
        })
    ], PostReadingPageModule);
    return PostReadingPageModule;
}());



/***/ }),

/***/ "./src/app/post-reading/post-reading.page.html":
/*!*****************************************************!*\
  !*** ./src/app/post-reading/post-reading.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"entire-screen\">\n    <div class=\"top-container\">\n      <h1 class='ion-header'>\n        {{ this.todayStr }}\n      </h1>\n    </div>\n    <div class=\"upper-mid-container\">\n      <div class=\"umid-con-lhs\">\n        <h4>You have already entered today's reading</h4>\n      </div>\n      <div class=\"umid-con-rhs\">\n        <img id=\"checked-tick\" src=\"../../assets/icon/checked.svg\">\n      </div>\n    </div>\n    <div class=\"lower-mid-container\">\n      <h3>{{ this.readingDesc }}</h3>\n      <div class=\"todays-reading-container\">\n        <img id=\"reading-square\" src=\"../../assets/protein-level-square/{{ this.readingSquareIcon }}.svg\">\n      </div>\n      <div class=\"reading-desc\">\n        <p>You are in {{ this.stateName }}</p>\n      </div>\n    </div>\n    <!-- <div class=\"current-state-container\">\n      <h4>You are currently in {{ this.currentState }}</h4>\n    </div> -->\n    <div class=\"bottom-container\">\n      <div class=\"bot-mid-container\">\n        <h4>Recommended Dose of Prednisone</h4>\n        <p *ngIf=\"intervalLen != 1\">Your treatment plan indicates this recommended dosage should be taken every {{ intervalLen }} days.</p>\n          <p *ngIf=\"intervalLen == 1\">Your treatment plan indicates this recommended dosage should be taken every day.</p>\n        <div class=\"dose-container\">\n          <div class=\"dose-lhs-container\">\n            <img class=\"meds\" src=\"../../../assets/icon/med.svg\">\n          </div>\n          <div class=\"dose-rhs-container\">\n            <div class=\"dose-rhs-top\">\n              <h2>{{ reccDose }}mg x {{ dosesPerInterval }}</h2>\n            </div>\n            <div class=\"dose-rhs-bot\">\n              <img (click)=\"confirmMedsTaken()\" id=\"conConfirmMeds\" src=\"../../assets/buttons/confirm-taken-btn.svg\">\n              <img (click)=\"cancelMedsTaken()\" id=\"conCancelMeds\" src=\"../../assets/buttons/confirm-taken-tick.svg\">\n            </div>\n          </div>\n        </div>\n        <div class=\"view-comment-container\">\n          <div class=\"comment-formgroup\">\n            <h4>Your Comment:</h4>\n            <div class=\"comment-textarea\">\n              {{ this.comment }}\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"edit-container\">\n        <img (click)=\"editReading()\" src=\"../../assets/buttons/edit-reading.svg\" alt=\"\" class=\"edit\">\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/post-reading/post-reading.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/post-reading/post-reading.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-container {\n  padding: 5%; }\n\n.upper-mid-container {\n  padding: 5%;\n  width: 100%;\n  display: flex; }\n\n.umid-con-lhs {\n  padding: 1px;\n  width: 70%; }\n\n.umid-con-rhs {\n  width: 30%;\n  display: flex;\n  padding: 2%; }\n\n#checked-tick {\n  align-items: center;\n  justify-content: center;\n  flex: 1; }\n\n.lower-mid-container {\n  width: 100%; }\n\n.current-state-container {\n  padding: 0% 5%; }\n\n.todays-reading-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 2%; }\n\n#reading-square {\n  width: 50%; }\n\n.bottom-container {\n  width: 100%;\n  flex-grow: 1;\n  padding-top: 2%;\n  padding-bottom: 5%; }\n\n.bot-mid-container {\n  width: 100%;\n  padding: 5%; }\n\n.dose-container {\n  height: 50%;\n  width: 100%;\n  margin-top: 5%; }\n\n.dose-lhs-container {\n  display: flex;\n  width: 50%;\n  height: 100%;\n  float: left;\n  text-align: center;\n  justify-content: center; }\n\n.dose-rhs-container {\n  width: 50%;\n  height: 100%;\n  margin-left: 50%; }\n\n.dose-rhs-top {\n  display: flex;\n  height: 50%;\n  width: 100%;\n  text-align: flex-end;\n  justify-content: center; }\n\n.dose-rhs-top h2 {\n    align-self: flex-end; }\n\n.dose-rhs-bot {\n  height: 50%;\n  width: 100%;\n  align-items: flex-start;\n  text-align: center; }\n\n.view-comment-container {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  padding-top: 10%; }\n\n.leave-comm-btn {\n  align-items: center;\n  justify-content: center; }\n\n.comment-formgroup {\n  justify-content: center;\n  text-align: center;\n  padding: 5%;\n  width: 100%;\n  padding: 2% 2% 0% 2%; }\n\n.comment-textarea {\n  justify-content: center;\n  width: 100%;\n  background-color: white;\n  border-radius: 10px;\n  padding: 5%; }\n\n.footer-container {\n  position: absolute;\n  width: 100%;\n  bottom: 0; }\n\n.footer-lhs {\n  padding: 2%;\n  width: 50%;\n  height: 100%;\n  float: left; }\n\n.footer-rhs {\n  padding: 2%;\n  text-align: right;\n  width: 50%;\n  height: 100%;\n  margin-left: 50%; }\n\n.edit-container {\n  width: 100%;\n  padding-top: 10%;\n  display: flex;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL3Bvc3QtcmVhZGluZy9wb3N0LXJlYWRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVyxFQUFBOztBQVFmO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2pCO0VBRUksWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHZDtFQUVJLFVBQVU7RUFDVixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0ksbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixPQUFPLEVBQUE7O0FBR1g7RUFDSSxXQUFVLEVBQUE7O0FBR2Q7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBRUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFVBQVUsRUFBQTs7QUFJZDtFQUdJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUdJLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBRVgsa0JBQWtCO0VBQ2xCLHVCQUF1QixFQUFBOztBQU8zQjtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHVCQUF1QixFQUFBOztBQUwzQjtJQVNRLG9CQUFvQixFQUFBOztBQUk1QjtFQUVJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLG9CQUFvQixFQUFBOztBQUt4QjtFQUVJLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVMsRUFBQTs7QUFHYjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtcmVhZGluZy9wb3N0LXJlYWRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUlO1xufVxuXG4uaW9uLWhlYWRlciB7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDIlO1xuICAgIC8vIHBhZGRpbmctdG9wOiAxJTtcbn1cblxuLnVwcGVyLW1pZC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi51bWlkLWNvbi1saHMge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLnVtaWQtY29uLXJocyB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDIlO1xufVxuXG4jY2hlY2tlZC10aWNrIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXg6IDE7XG59XG5cbi5sb3dlci1taWQtY29udGFpbmVyIHtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uY3VycmVudC1zdGF0ZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAlIDUlO1xufVxuXG4udG9kYXlzLXJlYWRpbmctY29udGFpbmVyIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMiU7XG59XG5cbiNyZWFkaW5nLXNxdWFyZSB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuXG4uYm90dG9tLWNvbnRhaW5lciB7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbn1cblxuLmJvdC1taWQtY29udGFpbmVyIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAvLyBoZWlnaHQ6IDg1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1JTtcbn1cblxuLmRvc2UtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuLmRvc2UtbGhzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZWRzIHtcblxufVxuXG4uZG9zZS1yaHMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uZG9zZS1yaHMtdG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG4gICAgaDIge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB9XG59XG5cbi5kb3NlLXJocy1ib3Qge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmlldy1jb21tZW50LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ubGVhdmUtY29tbS1idG4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb21tZW50LWZvcm1ncm91cCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIlIDIlIDAlIDIlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb21tZW50LXRleHRhcmVhIHtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogNSU7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uZm9vdGVyLWxocyB7XG4gICAgcGFkZGluZzogMiU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mb290ZXItcmhzIHtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xufVxuXG4uZWRpdC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/post-reading/post-reading.page.ts":
/*!***************************************************!*\
  !*** ./src/app/post-reading/post-reading.page.ts ***!
  \***************************************************/
/*! exports provided: PostReadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostReadingPage", function() { return PostReadingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var PostReadingPage = /** @class */ (function () {
    function PostReadingPage(database, router, storage) {
        this.database = database;
        this.router = router;
        this.storage = storage;
    }
    PostReadingPage.prototype.ngOnInit = function () {
        this.now = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DD') + ' 00:00:00';
        this.todayStr = this.getTodaysDateAsStr();
        this.getReadingInfo();
        this.getTreatmentDetails();
    };
    PostReadingPage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    PostReadingPage.prototype.getTodaysDateAsStr = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth();
        var mmstr;
        switch (mm) {
            case mm = 0:
                mmstr = "Jan";
                break;
            case mm = 1:
                mmstr = "Feb";
                break;
            case mm = 2:
                mmstr = "Mar";
                break;
            case mm = 3:
                mmstr = "Apr";
                break;
            case mm = 4:
                mmstr = "May";
                break;
            case mm = 5:
                mmstr = "Jun";
                break;
            case mm = 6:
                mmstr = "Jul";
                break;
            case mm = 7:
                mmstr = "Aug";
                break;
            case mm = 8:
                mmstr = "Sep";
                break;
            case mm = 9:
                mmstr = "Oct";
                break;
            case mm = 10:
                mmstr = "Nov";
                break;
            case mm = 11:
                mmstr = "Dec";
        }
        var todaysDateAsStr = mmstr.toUpperCase() + ' ' + dd;
        return todaysDateAsStr;
    };
    PostReadingPage.prototype.displayMedsTaken = function () {
        document.getElementById("conConfirmMeds").style.display = "none";
        document.getElementById("conCancelMeds").style.display = "";
    };
    PostReadingPage.prototype.displayMedsNotTaken = function () {
        document.getElementById("conConfirmMeds").style.display = "";
        document.getElementById("conCancelMeds").style.display = "none";
    };
    PostReadingPage.prototype.confirmMedsTaken = function () {
        var _this = this;
        var query = "UPDATE daily_readings SET medication_taken = 1 WHERE date_of_reading = '" + this.now + "';";
        this.database.doQuery(query).then(function (data) {
            console.log(query);
            _this.displayMedsTaken();
            _this.medTaken = 1;
        });
    };
    PostReadingPage.prototype.cancelMedsTaken = function () {
        var _this = this;
        var query = "UPDATE daily_readings SET medication_taken = 0 WHERE date_of_reading = '" + this.now + "';";
        this.database.doQuery(query).then(function (data) {
            console.log(query);
            _this.displayMedsNotTaken();
            _this.medTaken = 0;
        });
    };
    PostReadingPage.prototype.getReadingInfo = function () {
        var _this = this;
        var query = "SELECT * FROM daily_readings WHERE date_of_reading = '" + this.now + "';";
        this.database.doQuery(query).then(function (data) {
            console.log("postreading data = ");
            console.log(data);
            _this.reading = data[1]["reading_level_id"];
            console.log("reading = " + _this.reading);
            // get reading info
            if (_this.reading == 1) {
                _this.readingSquareIcon = "neg-sq";
                _this.readingDesc = "Negative";
            }
            else if (_this.reading == 2) {
                _this.readingSquareIcon = "trace-sq";
                _this.readingDesc = "Trace";
            }
            else if (_this.reading == 3) {
                _this.readingSquareIcon = "oneplus-sq";
                _this.readingDesc = "30mg/dL";
            }
            else if (_this.reading == 4) {
                _this.readingSquareIcon = "twoplus-sq";
                _this.readingDesc = "100mg/dL";
            }
            else if (_this.reading == 5) {
                _this.readingSquareIcon = "threeplus-sq";
                _this.readingDesc = "300mg/dL";
            }
            else if (_this.reading == 6) {
                _this.readingSquareIcon = "fourplus-sq";
                _this.readingDesc = "2000mg/dL +";
            }
            else {
                console.log(_this.reading + "is not a number between 1 and 6");
            }
            console.log("readingSqIcon = " + _this.readingSquareIcon);
            // get meds info
            _this.medTaken = data[1]["medication_taken"];
            console.log("medstaken = " + _this.medTaken);
            if (_this.medTaken == 0) {
                _this.displayMedsNotTaken();
                console.log('displayMeds0');
            }
            else if (_this.medTaken == 1) {
                _this.displayMedsTaken();
                console.log('displayMeds1');
            }
            // get comment
            _this.comment = data[1]["user_comment"];
            console.log("user comment = " + _this.comment);
            if (!_this.comment) {
                _this.comment = "None";
            }
        });
    };
    PostReadingPage.prototype.editReading = function () {
        var _this = this;
        var query = "DELETE FROM daily_readings WHERE date_of_reading = '" + this.now + "'";
        console.log(query);
        // let query = "DELETE FROM daily_readings WHERE date_of_reading = date('now')";
        this.database.doQuery(query)
            .then(function (data) {
            _this.storage.get("origStateObj");
        })
            .then(function (val) {
            console.log("val pulled from storage below:");
            console.log(val);
            _this.orig_state = val["orig_state"];
            _this.orig_start_date = val["orig_start_date"];
        })
            .then(function (data) {
            _this.database.updateActiveTreatmentState(_this.orig_state, _this.orig_start_date);
        })
            .then(function (data) {
            _this.router.navigate(['tabs/tab2/pre-reading']);
        });
    };
    PostReadingPage.prototype.getTreatmentDetails = function () {
        var _this = this;
        this.storage.get("new_state_obj")
            .then(function (val) {
            console.log("val pulled from storage below:");
            console.log(val);
            _this.new_state = val["new_state"];
            _this.new_start_date = val["new_start_date"];
        });
        this.database.doQuery("SELECT * FROM active_treatment_state")
            .then(function (val1) {
            console.log(val1);
            _this.active_state_id = val1[1]["active_treatment_state_id"];
        })
            .then(function (val) {
            var query = "SELECT * FROM treatment_state WHERE treatment_state_id = " + _this.new_state;
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
        });
    };
    PostReadingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-reading',
            template: __webpack_require__(/*! ./post-reading.page.html */ "./src/app/post-reading/post-reading.page.html"),
            styles: [__webpack_require__(/*! ./post-reading.page.scss */ "./src/app/post-reading/post-reading.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], PostReadingPage);
    return PostReadingPage;
}());



/***/ })

}]);
//# sourceMappingURL=post-reading-post-reading-module.js.map