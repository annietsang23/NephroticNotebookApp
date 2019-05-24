(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mydatalog-exportlog-exportlog-module"],{

/***/ "./src/app/mydatalog/exportlog/exportlog.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/mydatalog/exportlog/exportlog.module.ts ***!
  \*********************************************************/
/*! exports provided: ExportlogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportlogPageModule", function() { return ExportlogPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exportlog_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exportlog.page */ "./src/app/mydatalog/exportlog/exportlog.page.ts");







var routes = [
    {
        path: '',
        component: _exportlog_page__WEBPACK_IMPORTED_MODULE_6__["ExportlogPage"]
    }
];
var ExportlogPageModule = /** @class */ (function () {
    function ExportlogPageModule() {
    }
    ExportlogPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_exportlog_page__WEBPACK_IMPORTED_MODULE_6__["ExportlogPage"]]
        })
    ], ExportlogPageModule);
    return ExportlogPageModule;
}());



/***/ }),

/***/ "./src/app/mydatalog/exportlog/exportlog.page.html":
/*!*********************************************************!*\
  !*** ./src/app/mydatalog/exportlog/exportlog.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\n    <h2 class='ion-header' style=\"padding-top: 5%\">\n        Export My Data Log\n    </h2>\n\n    <h3 style=\"padding-top: 8%\">\n      Please choose the period of your data log you wish to export via email.\n    </h3>\n\n    <form [formGroup]=\"dataLogForm\">\n    <h3><ion-label>Date From</ion-label></h3>\n    <h5><ion-datetime formControlName=\"dateFrom\" display-format=\"DD MM YYYY\" picker-format=\"DD MM YYYY\" value=\"\" class=\"rcorners\"></ion-datetime></h5>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.dateFrom\">\n        <div class=\"error-messages\" *ngIf=\"profileForm.get('dateFrom').hasError(error.type) && (profileForm.get('dateFrom').dirty || profileForm.get('dateFrom').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n    </div>\n\n    <h3><ion-label>Date To</ion-label></h3>\n    <h5><ion-datetime formControlName=\"dateTo\" display-format=\"DD MM YYYY\" picker-format=\"DD MM YYYY\" value=\"\" class=\"rcorners\"></ion-datetime></h5>\n    <div class=\"error-messages\">\n      <ng-container *ngFor=\"let error of error_messages.dateTo\">\n        <div class=\"error-messages\" *ngIf=\"profileForm.get('dateTo').hasError(error.type) && (profileForm.get('dateTo').dirty || profileForm.get('dateTo').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n    </div>\n  </form>\n   <div class=\"box\" style=\"padding-top: 5%\">\n  <ion-button [disabled]=\"!dataLogForm.valid\" position=\"center\" shape=\"round\" routerDirection=\"forward\" (click)=\"submit()\" >\n    <ion-icon slot=\"end\" name=\"send\"></ion-icon>\n  Compose email\n</ion-button>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mydatalog/exportlog/exportlog.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/mydatalog/exportlog/exportlog.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  color: white;\n  text-align: center;\n  font-size: 15px !important; }\n\nh4 {\n  color: white;\n  text-align: center;\n  font-size: 10px !important; }\n\nh5 {\n  color: black;\n  text-align: center;\n  font-size: 20px !important; }\n\nh6 {\n  color: white;\n  text-align: right;\n  font-size: 15px !important; }\n\n.error-messages {\n  color: red;\n  text-align: center;\n  font-size: 0.7em; }\n\n.rcorners {\n  align-content: center;\n  border-radius: 15px;\n  border: 0px;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  align-content: center;\n  margin-bottom: 10px;\n  padding: 5px; }\n\n.rcornersbox {\n  align-content: left;\n  font-size: 1em;\n  border-radius: 15px;\n  border: 0px;\n  background-color: white;\n  width: 100%;\n  height: 40%;\n  text-align: left;\n  margin-bottom: 20px;\n  padding: 10px; }\n\n.box {\n  position: relative;\n  width: 100%;\n  height: 50px;\n  text-align: center;\n  align-content: center; }\n\n.bottom-right {\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  margin: 5px;\n  align-content: right; }\n\n#edit-button {\n  width: 80px;\n  height: 30px;\n  border-radius: 15px;\n  border: none;\n  margin: 10px; }\n\n#edit-icon {\n  height: 20px;\n  width: 20px;\n  display: block;\n  border: none;\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aW5ncGluZ3RzYW5nL0Rlc2t0b3AvQ09NUDAwNjdfMjAxOV9UZWFtMTUvbXlOZXBocm90aWNOb3RlYm9vay9zcmMvYXBwL215ZGF0YWxvZy9leHBvcnRsb2cvZXhwb3J0bG9nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMEJBQTBCLEVBQUE7O0FBSTlCO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUdqQjtFQUNBLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1YsWUFBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksV0FBVTtFQUNWLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFlBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVc7RUFDWCxXQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVc7RUFDWCxXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9teWRhdGFsb2cvZXhwb3J0bG9nL2V4cG9ydGxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuaDQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmg1IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG5oNiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG5cbi5lcnJvci1tZXNzYWdlcyB7XG4gICAgY29sb3I6IHJlZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuXG4ucmNvcm5lcnMge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5yY29ybmVyc2JveCB7XG4gICAgYWxpZ24tY29udGVudDogbGVmdDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwJTsgXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib3gge1xucG9zaXRpb246IHJlbGF0aXZlO1xud2lkdGg6MTAwJTtcbmhlaWdodDo1MHB4O1xudGV4dC1hbGlnbjogY2VudGVyO1xuYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYm90dG9tLXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBhbGlnbi1jb250ZW50OiByaWdodDtcbn1cblxuI2VkaXQtYnV0dG9ue1xuICAgIHdpZHRoOjgwcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIG1hcmdpbjoxMHB4O1xufVxuXG4jZWRpdC1pY29ue1xuICAgIGhlaWdodDoyMHB4O1xuICAgIHdpZHRoOjIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgbWFyZ2luOjVweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/mydatalog/exportlog/exportlog.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/mydatalog/exportlog/exportlog.page.ts ***!
  \*******************************************************/
/*! exports provided: ExportlogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportlogPage", function() { return ExportlogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fetch_reading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fetch-reading.service */ "./src/app/services/fetch-reading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");










var ExportlogPage = /** @class */ (function () {
    function ExportlogPage(platform, file, fileNavigator, alertController, emailComposer, http, router, formBuilder, fetchReading) {
        this.platform = platform;
        this.file = file;
        this.fileNavigator = fileNavigator;
        this.alertController = alertController;
        this.emailComposer = emailComposer;
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.fetchReading = fetchReading;
        this.export_data_log = null;
        this.isThereData = false;
        this.csv = null;
        this.dirName = 'mydatalog';
        this.fileName = 'MyNephroticNotebook.csv';
        this.nativeFilePath = null;
        this.dirPath = null;
        this.nativePath = null;
        this.possiblePath = null;
        this.startdate = null;
        this.enddate = null;
        this.error_messages = {
            'dateFrom': [
                { type: 'required', message: 'This date is needed!' }
            ],
            'dateTo': [
                { type: 'required', message: 'This date is needed too!' }
            ]
        };
        this.dataLogForm = this.formBuilder.group({
            dateFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            dateTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]))
        });
    }
    ExportlogPage.prototype.ngOnInit = function () {
        this.presentAlertConfirm();
    };
    ExportlogPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: 'Please confirm that you are either sharing your own data here, or, you have the full consent of the patient to share this data.',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel');
                                        _this.router.navigateByUrl('tabs/tab3');
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExportlogPage.prototype.submit = function () {
        console.log('From: ', this.dataLogForm.value.dateFrom);
        console.log('To: ', this.dataLogForm.value.dateTo);
        this.getDataLog(this.dataLogForm.value.dateFrom, this.dataLogForm.value.dateTo);
        this.startdate = this.dataLogForm.value.dateFrom.split('T', 2)[0];
        this.enddate = this.dataLogForm.value.dateTo.split('T', 2)[0];
    };
    ExportlogPage.prototype.getDataLog = function (dateFrom, dateTo) {
        var _this = this;
        console.log("getDatalog reached");
        this.fetchReading
            .exportDataLog(dateFrom, dateTo)
            .then(function (data) {
            var existingData = Object.keys(data).length;
            if (existingData !== 0) {
                _this.export_data_log = data;
                _this.isThereData = true;
            }
            _this.convertToCSV();
        });
    };
    ExportlogPage.prototype.convertToCSV = function () {
        var _this = this;
        this.csv = papaparse__WEBPACK_IMPORTED_MODULE_6__["unparse"](this.export_data_log);
        console.log("csv", this.csv);
        var result = this.file.createDir(this.file.dataDirectory, this.dirName, true);
        result.then(function (data) {
            _this.dirPath = data.toURL();
            console.log('Directory exists at:', _this.dirPath);
            var path = _this.file.writeFile(_this.dirPath, _this.fileName, _this.csv, { replace: true });
            path.then(function (dataFile) {
                _this.nativeFilePath = dataFile.toURL();
                console.log('File exists at:', _this.nativeFilePath);
                _this.checkPlatform();
            })
                .catch(function (error) {
                console.log('File doesn\'t exist:', error);
            });
        })
            .catch(function (error) {
            console.log('Directory doesn\'t exist:', error);
        });
    };
    ExportlogPage.prototype.checkPlatform = function () {
        if (this.platform.is('android')) {
            this.possiblePath = this.nativeFilePath;
            console.log("native path android", this.possiblePath);
        }
        else {
            this.possiblePath = this.nativeFilePath.slice(7);
            console.log("native path:", this.possiblePath);
        }
        this.composeEmail();
    };
    ExportlogPage.prototype.composeEmail = function () {
        var email = {
            attachments: [this.possiblePath],
            subject: 'My Nephrotic Notebook Data Log',
            body: 'My Data Log \nFrom: ' + this.startdate + '\nTo: ' + this.enddate,
        };
        this.emailComposer.open(email);
    };
    ExportlogPage.prototype.goBack = function () {
        this.router.navigateByUrl('tabs/tab3');
    };
    ExportlogPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exportlog',
            template: __webpack_require__(/*! ./exportlog.page.html */ "./src/app/mydatalog/exportlog/exportlog.page.html"),
            styles: [__webpack_require__(/*! ./exportlog.page.scss */ "./src/app/mydatalog/exportlog/exportlog.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_fetch_reading_service__WEBPACK_IMPORTED_MODULE_2__["FetchReadingService"]])
    ], ExportlogPage);
    return ExportlogPage;
}());



/***/ })

}]);
//# sourceMappingURL=mydatalog-exportlog-exportlog-module.js.map