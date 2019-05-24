(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-reading-input-reading-module"],{

/***/ "./src/app/input-reading/input-reading.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/input-reading/input-reading.module.ts ***!
  \*******************************************************/
/*! exports provided: InputReadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputReadingPageModule", function() { return InputReadingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _input_reading_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-reading.page */ "./src/app/input-reading/input-reading.page.ts");







var routes = [
    {
        path: '',
        component: _input_reading_page__WEBPACK_IMPORTED_MODULE_6__["InputReadingPage"]
    }
];
var InputReadingPageModule = /** @class */ (function () {
    function InputReadingPageModule() {
    }
    InputReadingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_input_reading_page__WEBPACK_IMPORTED_MODULE_6__["InputReadingPage"]]
        })
    ], InputReadingPageModule);
    return InputReadingPageModule;
}());



/***/ }),

/***/ "./src/app/input-reading/input-reading.page.html":
/*!*******************************************************!*\
  !*** ./src/app/input-reading/input-reading.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n<div class=\"entire-screen\">\n  <div class='stick-container'>\n    <div class='outer-stick'>\n      <div class=\"neg\" (click)='goToConfirmReading($event)'></div>\n      <div class=\"trace\" (click)='goToConfirmReading($event)'></div>\n      <div class=\"onep\" (click)='goToConfirmReading($event)'></div>\n      <div class=\"twop\" (click)='goToConfirmReading($event)'></div>\n      <div class=\"threep\" (click)='goToConfirmReading($event)'></div>\n      <div class=\"fourp\" (click)='goToConfirmReading($event)'></div>\n    </div>\n  </div>\n  <div class=\"right-side-container\">\n    <div class=\"right-side-header\">\n      <h3>Select Protein Level</h3>\n    </div>\n    <div class=\"tap-left-outer-container\">\n      <div class=\"tap-left-inner-container\">\n        <img src=\"../../assets/icon/tap-left.svg\" alt=\"Tap here\" class=\"tap-left\">\n      </div>\n    </div>\n    <div style=\"text-align: center\">\n      <img src=\"../../assets/buttons/back-btn.svg\" alt=\"Back\" (click)=\"goBack()\">\n    </div>\n  </div>\n</div>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/input-reading/input-reading.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/input-reading/input-reading.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".entire-screen {\n  height: 100%;\n  width: 100%; }\n\n.stick-container {\n  height: 100%;\n  width: 40%;\n  text-align: center;\n  padding: 20% 8% 8% 8%;\n  float: left; }\n\n.outer-stick {\n  background: #FFFFFF;\n  border: 1px solid #979797;\n  border-radius: 55px;\n  padding: 30% 0;\n  margin: auto;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n\n.right-side-container {\n  margin-left: 35%;\n  height: 100%;\n  padding: 10% 5%; }\n\n.right-side-header {\n  margin: 10% 0; }\n\n.neg {\n  background-color: #DCE977;\n  height: 10%;\n  width: 60%;\n  margin: auto; }\n\n.trace {\n  background-color: #BAD36D;\n  height: 10%;\n  width: 60%;\n  margin: auto; }\n\n.onep {\n  background-color: #A5C177;\n  height: 10%;\n  width: 60%;\n  margin: auto; }\n\n.twop {\n  background-color: #90B991;\n  height: 10%;\n  width: 60%;\n  margin: auto; }\n\n.threep {\n  background-color: #70AF9A;\n  height: 10%;\n  width: 60%;\n  margin: auto; }\n\n.fourp {\n  background-color: #599C8A;\n  height: 10%;\n  width: 60%;\n  margin: auto; }\n\n.tap-left-outer-container {\n  display: flex;\n  align-items: center;\n  height: 70%; }\n\n.tap-left-inner-container {\n  margin: auto;\n  margin-left: 0; }\n\n.tap-left {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  -webkit-animation-name: pulsate;\n          animation-name: pulsate;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease; }\n\n.footer-container {\n  width: 100%;\n  padding: 2%; }\n\n.footer-lhs {\n  padding: 2%;\n  width: 50%;\n  float: left; }\n\n.footer-rhs {\n  padding: 2%;\n  text-align: right;\n  width: 50%;\n  margin-left: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL2lucHV0LXJlYWRpbmcvaW5wdXQtcmVhZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTs7QUFHZjtFQUNJLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0kseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHaEI7RUFDSSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0kseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUlmO0VBQ0ksWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxNQUFNO0VBQUUsU0FBUztFQUFFLE9BQU87RUFBRSxRQUFRO0VBQ3BDLFlBQVk7RUFDWiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIscUNBQTZCO1VBQTdCLDZCQUE2QjtFQUM3QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLHVDQUErQjtVQUEvQiwrQkFBK0IsRUFBQTs7QUFHbkM7RUFDSSxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdmO0VBQ0ksV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2lucHV0LXJlYWRpbmcvaW5wdXQtcmVhZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW50aXJlLXNjcmVlbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc3RpY2stY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjAlIDglIDglIDglO1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4ub3V0ZXItc3RpY2sge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzk3OTc5NztcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xuICAgIHBhZGRpbmc6IDMwJSAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJpZ2h0LXNpZGUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMCUgNSU7XG59XG5cbi5yaWdodC1zaWRlLWhlYWRlciB7XG4gICAgbWFyZ2luOiAxMCUgMDtcbn1cblxuLm5lZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RDRTk3NztcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnRyYWNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFEMzZEO1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ub25lcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E1QzE3NztcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnR3b3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MEI5OTE7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi50aHJlZXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MEFGOUE7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5mb3VycCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5OUM4QTtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnRhcC1sZWZ0LW91dGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNzAlO1xuICAgIFxufVxuXG4udGFwLWxlZnQtaW5uZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi50YXAtbGVmdCB7XG4gICAgdG9wOiAwOyBib3R0b206IDA7IGxlZnQ6IDA7IHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbmltYXRpb24tbmFtZTogcHVsc2F0ZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG59XG5cbi5mb290ZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyJTtcbn1cblxuLmZvb3Rlci1saHMge1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5mb290ZXItcmhzIHtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/input-reading/input-reading.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/input-reading/input-reading.page.ts ***!
  \*****************************************************/
/*! exports provided: InputReadingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputReadingPage", function() { return InputReadingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/database.service */ "./src/app/services/database.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var InputReadingPage = /** @class */ (function () {
    function InputReadingPage(router, database, storage) {
        this.router = router;
        this.database = database;
        this.storage = storage;
    }
    InputReadingPage.prototype.ngOnInit = function () {
        // clear storage
        this.storage.set("new_state", null);
        this.storage.set("new_start_date", null);
    };
    InputReadingPage.prototype.updateActiveStateToLast = function () {
    };
    InputReadingPage.prototype.goToConfirmReading = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var classAttr = target.attributes.class;
        this.reading = classAttr.nodeValue;
        // select correct reading
        switch (this.reading) {
            case "neg": {
                this.readingLevel = 1;
                break;
            }
            case "trace": {
                this.readingLevel = 2;
                break;
            }
            case "onep": {
                this.readingLevel = 3;
                break;
            }
            case "twop": {
                this.readingLevel = 4;
                break;
            }
            case "threep": {
                this.readingLevel = 5;
                break;
            }
            case "fourp": {
                this.readingLevel = 6;
                break;
            }
        }
        this.findActiveTreatmentStateAndNavigate(this.readingLevel);
    };
    // new_start_date:string="";
    InputReadingPage.prototype.findActiveTreatmentStateAndNavigate = function (reading) {
        var _this = this;
        var new_state = 0;
        var new_start_date = "";
        var yesterday = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).add(-1, 'days').format("YYYY-MM-DD");
        var twodaysago = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).add(-2, 'days').format("YYYY-MM-DD");
        var k = 0;
        var no_of_days = 0;
        //fetch the active treatment plan
        this.database.activeTreatmentState().then(function (k) {
            var active_treatment_plans = k[0];
            var active_state = k[1];
            console.log("active treatment plans: ", active_treatment_plans);
            console.log("active state: ", active_state);
            //check previous two days' reading
            _this.database.reading_PastTwoDays(twodaysago, yesterday).then(function (reading_pasttwodays) {
                console.log("past 2 days: ", reading_pasttwodays);
                if (Object.keys(reading_pasttwodays).length != 2) {
                    //missing data. No change to state.
                    console.log("Not enough readings, setting new_state to current state");
                    console.log(Object.keys(reading_pasttwodays).length);
                    new_state = active_state["treatment_state_id"];
                    new_start_date = active_state["date_started"];
                }
                else {
                    console.log("There are enough readings to check switch cases.");
                    //testing
                    // reading_pasttwodays[yesterday]=3;
                    // reading_pasttwodays[twodaysago]=1;
                    // reading=2;
                    // active_state["state_name"]="remission";
                    // active_state["treatment_state_id"]=3;
                    //beginning of switch cases: determine today's treatment state based on current active state ($active state) and today's reading ($reading)
                    console.log(active_state["state_name"]);
                    switch (active_state["state_name"]) {
                        case "maintenance":
                            console.log("case: ", active_state["state_name"]);
                            if (reading > 4 && (reading_pasttwodays[yesterday] > 4) && (reading_pasttwodays[twodaysago] > 4)) {
                                //reading is 5 (+++) or 6 (++++) for 3 consecutive days. Change the state to relapse    
                                for (k = 1; k < Object.keys(active_treatment_plans).length; k++) {
                                    if (active_treatment_plans[k]["state_name"] == "relapse") {
                                        new_state = active_treatment_plans[k]["treatment_state_id"];
                                        //set today as state start date
                                        new_start_date = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD') + " 00:00:00";
                                        break;
                                    }
                                }
                            }
                            else {
                                //state remains as maintenance
                                new_state = active_state["treatment_state_id"];
                                new_start_date = active_state["date_started"];
                            }
                            break;
                        case "relapse":
                            console.log("case: ", active_state["state_name"]);
                            if ((reading < 3) && (reading_pasttwodays[yesterday] < 3) && (reading_pasttwodays[twodaysago] < 3)) {
                                //reading is zero or trace for 3 consecutive days. Change the state to remission
                                for (k = 1; k < Object.keys(active_treatment_plans).length; k++) {
                                    if (active_treatment_plans[k]["state_name"] == "remission") {
                                        //change state to the first remission state
                                        new_state = active_treatment_plans[k]["treatment_state_id"];
                                        //set today as state start date
                                        new_start_date = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD') + " 00:00:00";
                                        break;
                                    }
                                }
                            }
                            else {
                                //State remains as relapse
                                new_state = active_state["treatment_state_id"];
                                new_start_date = active_state["date_started"];
                            }
                            break;
                        case "remission":
                            console.log("case: ", active_state["state_name"]);
                            if (reading > 4 && (reading_pasttwodays[yesterday] > 4) && (reading_pasttwodays[twodaysago] > 4)) {
                                //reading is 5 or 6 for 3 consecutive days. Change the state to relapse
                                for (k = 1; k < Object.keys(active_treatment_plans).length; k++) {
                                    if (active_treatment_plans[k]["state_name"] == "relapse") {
                                        new_state = active_treatment_plans[k]["treatment_state_id"];
                                        //set today as state start date
                                        new_start_date = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD') + " 00:00:00";
                                        break;
                                    }
                                }
                            }
                            else {
                                //today's reading is below 5. Calculate the no. of days passed in current remission state.
                                no_of_days = moment__WEBPACK_IMPORTED_MODULE_3__().diff(moment__WEBPACK_IMPORTED_MODULE_3__(active_state["date_started"], "YYYY-MM-DD HH:mm:ss"), "days") + 1;
                                // console.log(no_of_days);
                                // //testing
                                // active_state["state_duration"]="5";
                                //check if state duration has been exceeded
                                if (no_of_days > active_state["state_duration"]) {
                                    //current remission state duration is exceeded. Move to next remission state / maintenance
                                    //check if there's a next remission state
                                    var next_id = active_state["treatment_state_id"] + 1;
                                    var next_remission = false;
                                    for (k = 1; k < Object.keys(active_treatment_plans).length + 1; k++) {
                                        if ((active_treatment_plans[k]["treatment_state_id"] == next_id) && (active_treatment_plans[k]["state_name"] == "remission")) {
                                            //next remission state exists. Change state to next remission state
                                            next_remission = true;
                                            new_state = active_treatment_plans[k]["treatment_state_id"];
                                            //set today as state start date
                                            new_start_date = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD') + " 00:00:00";
                                            break;
                                        }
                                    }
                                    if (next_remission == false) {
                                        //next remission state does not exist. Change state back to maintenance
                                        for (k = 1; k < Object.keys(active_treatment_plans).length; k++) {
                                            if (active_treatment_plans[k]["state_name"] == "maintenance") {
                                                new_state = active_treatment_plans[k]["treatment_state_id"];
                                                console.log("DEBUG");
                                                console.log(new_state);
                                                //set today as state start date
                                                new_start_date = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD') + " 00:00:00";
                                                break;
                                            }
                                        }
                                    }
                                }
                                else {
                                    //state duration has not been exceeded. Remain in current remission state
                                    new_state = active_state["treatment_state_id"];
                                    new_start_date = active_state["date_started"];
                                }
                            }
                            break;
                    }
                    setTimeout(function () {
                        console.log("new_state: ", new_state);
                        console.log("new_start_date ", new_start_date);
                        // this.database.updateActiveTreatmentState(new_state,new_start_date);
                        // this.database.updateActiveTreatmentState(1,"2019-03-31 00:00:00");
                    }, 300);
                    //end of switch case
                }
                console.log("new_state to store:");
                console.log(new_state);
                console.log("new_start_date to store:");
                console.log(new_start_date);
                var newStateObj = { "new_state": new_state, "new_start_date": new_start_date };
                _this.storage.set("new_state_obj", newStateObj)
                    .then(function () { return console.log('Stored new_state = ' + newStateObj + ' in Ion-Storage'); })
                    .then(function () { return _this.router.navigate(['tabs/tab2/input-reading/confirm-reading', _this.reading]); });
            });
        });
    };
    InputReadingPage.prototype.goBack = function () {
        this.router.navigateByUrl("tabs/tab2/pre-reading");
    };
    InputReadingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-reading',
            template: __webpack_require__(/*! ./input-reading.page.html */ "./src/app/input-reading/input-reading.page.html"),
            styles: [__webpack_require__(/*! ./input-reading.page.scss */ "./src/app/input-reading/input-reading.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], InputReadingPage);
    return InputReadingPage;
}());



/***/ })

}]);
//# sourceMappingURL=input-reading-input-reading-module.js.map