(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<app-quote></app-quote>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid bg-secondary text-light mine\">\n    <h2 class=\"text-center\">Create a new Quote</h2>\n    <div class=\"title-underline bg-primary\"></div>\n    <hr>\n    <div >\n    <form (ngSubmit)='submitQuote()' #quoteForm ='ngForm' >\n        <div class=\"form-group\">\n  \n            <label for=\"name\">Name:</label>\n            <input type=\"text\" required class=\"form-control\" id=\"publisher\" [(ngModel)]=\"newQuote.publisher\" name=\"publisher\" #publisher='ngModel' >\n            <p [hidden]=\"publisher.valid || publisher.pristine\" class=\"alert alert-danger\">\n                <small>Enter Name</small></p>\n  \n        </div>\n        <div class=\"form-group\">\n  \n            <label for=\"quote\">Quote:</label>\n            <textarea class=\"form-control\" id=\"quote\" rows=\"4\" [(ngModel)]=\"newQuote.quote\" name=\"quote\" #quote='ngModel'required></textarea>\n            <p [hidden]=\"quote.valid || quote.pristine\" class=\"alert alert-danger\">\n                    <small>Enter Quote:</small></p>\n        </div>\n        <div class=\"form-group\">\n  \n            <label for=\"author\">Author:</label>\n            <input type=\"text\" required class=\"form-control\" id=\"author\" [(ngModel)]=\"newQuote.author\" name=\"author\" #author='ngModel'>\n            <p [hidden]=\"author.valid || author.pristine\" class=\"alert alert-danger\">\n                    <small>Enter Author of the quote:</small></p>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"dDay\">Date</label>\n            <input type='date' id=\"complete\" class=\"form-control\" [(ngModel)]=\"newQuote.myDate\" name=\"myDte\" #myDate='ngModel' required>\n            <p [hidden]=\"myDate.valid || myDate.pristine\" class=\"alert alert-danger\">\n                    <small>Pick date:</small></p>\n        </div>\n        <button type=\"submit\" class=\"btn btn-success m-3 btn-lg\">Submit Quote:</button>\n    </form>\n    </div>\n  </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote-details/quote-details.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quote-details/quote-details.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p class=\"text-primary\">Author: {{quote.author}} </p>\n<p><i class=\"fas fa-thumbs-up fa-2x mr-2 text-primary\" (click)='addUp(true)'></i> <span class=\"mr-3\">{{quote.upvote}}</span> <i class=\"far fa-thumbs-down fa-2x mr-2 text-danger\" (click)='addDown(true)'></i><span>{{quote.downvote}}</span> </p>\n<p class=\"text-success\">Posted on {{quote.myDate|date}} by {{quote.publisher}}</p>\n<!-- <p>{{quote.myDate|timeAgo}} </p> -->\n<div class=\"form-group\">\n<button type=\"submit\" class=\" btn btn-outline-danger\" (click)= 'quoteDelete(true)'>Delete Quote</button>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h1> Quotes App</h1>\n  <p>This app allows you to get quotes from different people around the world.</p>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div *ngFor='let quote of quotes, let i = index'>\n        <div>\n        <p appHighlighteQuote *ngIf=\"loopVote()===quote.upvote && quote.upvote>0\"><i class=\"fa fa-quote-left fa-2x text-dark mr-3\"></i> {{quote.quote}} </p>\n        <p *ngIf=\"loopVote()!==quote.upvote || quote.upvote===0\"><i class=\"fa fa-quote-left fa-2x text-dark mr-3\"></i>{{quote.quote}}\n        </p>\n         \n        </div>\n        \n        <div>\n          <app-quote-details [quote]='quote' (isComplete)='deleteQuote($event,i)' (isUp)='addTotal($event,i)' (isDown)='adTotal($event,i)'></app-quote-details>\n          <hr class=\"w-75\">\n          </div>\n      </div>\n    </div>\n    \n    <div class=\"col-md-6\">\n        <app-form (addQuote)= \"addNewQuote($event)\"></app-form>\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
            /* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
            /* harmony import */ var _highlighte_quote_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./highlighte-quote.directive */ "./src/app/highlighte-quote.directive.ts");
            /* harmony import */ var _time_count_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time-count.pipe */ "./src/app/time-count.pipe.ts");
            /* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_6__["QuoteDetailsComponent"],
                        _quote_quote_component__WEBPACK_IMPORTED_MODULE_7__["QuoteComponent"],
                        _highlighte_quote_directive__WEBPACK_IMPORTED_MODULE_8__["HighlighteQuoteDirective"],
                        _time_count_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeCountPipe"],
                        _form_form_component__WEBPACK_IMPORTED_MODULE_10__["FormComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/form/form.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/form/form.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mine{\n    border-radius: 25px;\n    box-shadow: (5px 10px 5px #000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWluZXtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJveC1zaGFkb3c6ICg1cHggMTBweCA1cHggIzAwMCk7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/form/form.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/form/form.component.ts ***!
          \****************************************/
        /*! exports provided: FormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function () { return FormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");
            var FormComponent = /** @class */ (function () {
                function FormComponent() {
                    this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](0, '', '', '', 0, 0, new Date());
                    this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                FormComponent.prototype.submitQuote = function () {
                    this.addQuote.emit(this.newQuote);
                    this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](0, '', '', '', 0, 0, new Date());
                };
                FormComponent.prototype.ngOnInit = function () {
                };
                return FormComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], FormComponent.prototype, "addQuote", void 0);
            FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/form/form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")).default]
                })
            ], FormComponent);
            /***/ 
        }),
        /***/ "./src/app/highlighte-quote.directive.ts": 
        /*!***********************************************!*\
          !*** ./src/app/highlighte-quote.directive.ts ***!
          \***********************************************/
        /*! exports provided: HighlighteQuoteDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlighteQuoteDirective", function () { return HighlighteQuoteDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HighlighteQuoteDirective = /** @class */ (function () {
                function HighlighteQuoteDirective(elem) {
                    this.elem = elem;
                    this.elem.nativeElement.style.backgroundColor = 'yellow';
                }
                return HighlighteQuoteDirective;
            }());
            HighlighteQuoteDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
            ]; };
            HighlighteQuoteDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[appHighlighteQuote]'
                })
            ], HighlighteQuoteDirective);
            /***/ 
        }),
        /***/ "./src/app/quote-details/quote-details.component.css": 
        /*!***********************************************************!*\
          !*** ./src/app/quote-details/quote-details.component.css ***!
          \***********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fas {\n    cursor: pointer;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlLWRldGFpbHMvcXVvdGUtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhcyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIFxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/quote-details/quote-details.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/quote-details/quote-details.component.ts ***!
          \**********************************************************/
        /*! exports provided: QuoteDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function () { return QuoteDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var QuoteDetailsComponent = /** @class */ (function () {
                function QuoteDetailsComponent() {
                    this.isComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.isUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.isDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                QuoteDetailsComponent.prototype.quoteDelete = function (complete) {
                    this.isComplete.emit(complete);
                };
                QuoteDetailsComponent.prototype.addUp = function (add) {
                    this.isUp.emit(add);
                };
                QuoteDetailsComponent.prototype.addDown = function (ad) {
                    this.isDown.emit(ad);
                };
                QuoteDetailsComponent.prototype.ngOnInit = function () {
                };
                return QuoteDetailsComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], QuoteDetailsComponent.prototype, "quote", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], QuoteDetailsComponent.prototype, "isComplete", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], QuoteDetailsComponent.prototype, "isUp", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], QuoteDetailsComponent.prototype, "isDown", void 0);
            QuoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-quote-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote-details/quote-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")).default]
                })
            ], QuoteDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/quote.ts": 
        /*!**************************!*\
          !*** ./src/app/quote.ts ***!
          \**************************/
        /*! exports provided: Quote */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function () { return Quote; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Quote = /** @class */ (function () {
                function Quote(id, quote, publisher, author, upvote, downvote, myDate) {
                    this.id = id;
                    this.quote = quote;
                    this.publisher = publisher;
                    this.author = author;
                    this.upvote = upvote;
                    this.downvote = downvote;
                    this.myDate = myDate;
                }
                return Quote;
            }());
            /***/ 
        }),
        /***/ "./src/app/quote/quote.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/quote/quote.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Carter+One&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Carter+One|Righteous&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Carter+One|Chewy|Righteous&display=swap');\nh1{\n    font-family: 'Carter One', cursive;\n    color: blue;\n    display: flex;\n    justify-content: center;\n    font-size: 25px;\n}\np{\n   font-size: 25px;\n    font-family: 'Chewy', cursive;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBOEU7QUFDOUUsd0ZBQXdGO0FBQ3hGLDhGQUE4RjtBQUM5RjtJQUNJLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0FBQ0E7R0FDRyxlQUFlO0lBQ2QsNkJBQTZCOztBQUVqQyIsImZpbGUiOiJzcmMvYXBwL3F1b3RlL3F1b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhcnRlcitPbmUmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhcnRlcitPbmV8UmlnaHRlb3VzJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DYXJ0ZXIrT25lfENoZXd5fFJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbmgxe1xuICAgIGZvbnQtZmFtaWx5OiAnQ2FydGVyIE9uZScsIGN1cnNpdmU7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5we1xuICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ2hld3knLCBjdXJzaXZlO1xuICAgIFxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/quote/quote.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/quote/quote.component.ts ***!
          \******************************************/
        /*! exports provided: QuoteComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function () { return QuoteComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");
            var QuoteComponent = /** @class */ (function () {
                function QuoteComponent() {
                    this.quotes = [
                        new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](1, 'Mobile is the enabling centerpiece of digital convergence. Mobile is the glue for all other digital industries to use when approaching convergence, but mobile is also the digital gateway for the real world to join in this global metamorphosis of human behavior.', 'Brian Kefa', 'Quoted by  Daniel Bæk, Co-founder of Nodes', 0, 0, new Date(2019, 11, 2)),
                        new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](2, 'I think the biggest change, and the one we’re already starting to see take shape, is that globally the majority of internet usage will be done via a mobile device and for most people the mobile web will be their primary – if not their only – way of experiencing the internet.', 'Peninah Njeri', 'Quoted by Tomi Ahonen, consultant and speaker', 0, 0, new Date(2019, 11, 2)),
                        new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](3, 'Mobile is becoming not only the new digital hub, but also the bridge to the physical world. That’s why mobile will affect more than just your digital operations — it will transform your entire business.', 'Cynthia Odul', 'Quoted by  Daniel Bæk, Co-founder of NodesQuoted by Matt Haig Author of Mobile Marketing – “The Message Revolution', 0, 0, new Date(2019, 11, 2)),
                        new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](4, 'The future of mobile is the future of online. It is how people access online content now.', 'Robert Einsten', 'Quoted by Phil Nickinson, Editor of Android Central', 0, 0, new Date(2019, 11, 2)),
                        new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](5, 'Our lives will be facilitated by a myriad of adaptive applications running on different devices, with different sensors, all of them collecting tidbits about everything we do, and feeding big digital brains that can adapt applications to our needs simply because they get to know us.', 'John K9', 'Quoted by Márcio Cyrillo, Executive Director at CI&T', 0, 0, new Date(2019, 11, 2)),
                    ];
                }
                QuoteComponent.prototype.deleteQuote = function (isComplete, index) {
                    if (isComplete) {
                        var toDelete = confirm("Are you sure you want to delete " + this.quotes[index].quote + "?");
                        if (toDelete) {
                            this.quotes.splice(index, 1);
                        }
                    }
                };
                QuoteComponent.prototype.addNewQuote = function (quote) {
                    var quoteLength = this.quotes.length;
                    quote.id = quoteLength + 1;
                    quote.myDate = new Date(quote.myDate);
                    this.quotes.push(quote);
                };
                QuoteComponent.prototype.addTotal = function (mine, index) {
                    if (mine) {
                        this.quotes[index].upvote += 1;
                    }
                };
                QuoteComponent.prototype.adTotal = function (isDown, index) {
                    if (isDown) {
                        this.quotes[index].downvote += 1;
                    }
                };
                QuoteComponent.prototype.loopVote = function () {
                    this.firstNum = 0;
                    this.lastNum = 0;
                    for (this.count = 0; this.count < this.quotes.length; this.count++) {
                        this.lastNum = this.quotes[this.count].upvote;
                        if (this.lastNum > this.firstNum) {
                            this.firstNum = this.lastNum;
                        }
                    }
                    return this.firstNum;
                };
                QuoteComponent.prototype.ngOnInit = function () {
                };
                return QuoteComponent;
            }());
            QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-quote',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")).default]
                })
            ], QuoteComponent);
            /***/ 
        }),
        /***/ "./src/app/time-count.pipe.ts": 
        /*!************************************!*\
          !*** ./src/app/time-count.pipe.ts ***!
          \************************************/
        /*! exports provided: TimeCountPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeCountPipe", function () { return TimeCountPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TimeCountPipe = /** @class */ (function () {
                function TimeCountPipe() {
                }
                TimeCountPipe.prototype.transform = function (value, args) {
                    if (value) {
                        var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
                        if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                            return 'Just now';
                        var intervals = {
                            'year': 31536000,
                            'month': 2592000,
                            'week': 604800,
                            'day': 86400,
                            'hour': 3600,
                            'minute': 60,
                            'second': 1
                        };
                        var counter = void 0;
                        for (var i in intervals) {
                            counter = Math.floor(seconds / intervals[i]);
                            if (counter > 0)
                                if (counter === 1) {
                                    return counter + ' ' + i + ' ago'; // singular (1 day ago)
                                }
                                else {
                                    return counter + ' ' + i + 's ago'; // plural (2 days ago)
                                }
                        }
                    }
                    return value;
                };
                return TimeCountPipe;
            }());
            TimeCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'timeCount',
                    pure: true
                })
            ], TimeCountPipe);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/moringa/Videos/quote/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map