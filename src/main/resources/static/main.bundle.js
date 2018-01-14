webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routeAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var routeAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('routeAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        // the view covers the whole screen with a semi tranparent background
        transform: 'scale(1)',
        opacity: 1
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // start with the content positioned off the right of the screen,
            // -400% is required instead of -100% because the negative position adds to the width of the element
            transform: 'scale(1)',
            // start with background opacity set to 0 (invisible)
            opacity: 1,
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%'
        }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // transition the right position to -400% which slides the content out of view
            transform: 'scale(5)',
            opacity: 0
        }))
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // start with the content positioned off the right of the screen,
            // -400% is required instead of -100% because the negative position adds to the width of the element
            transform: 'scale(5)',
            // start with background opacity set to 0 (invisible)
            opacity: 0
        }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            // transition the right position to 0 which slides the content into view
            transform: 'scale(1)',
            // transition the background opacity to 0.8 to fade it in
            opacity: 1
        }))
    ]),
]);


/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_screen_welcome_screen_component__ = __webpack_require__("../../../../../src/app/welcome-screen/welcome-screen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__welcome_screen_welcome_screen_component__["a" /* WelcomeScreenComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".root-bg{\r\n  height: 100%;\r\n  background:linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.6)), url(" + __webpack_require__("../../../../../src/assets/images/I-Have-No-Words-I-Must-Design.png") + ") no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  overflow: hidden;\r\n}\r\n.shadow{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"root-bg\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_screen_welcome_screen_component__ = __webpack_require__("../../../../../src/app/welcome-screen/welcome-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_menu_teacher_sheet_teacher_sheet_component__ = __webpack_require__("../../../../../src/app/main-menu/teacher-sheet/teacher-sheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_menu_main_menu_module__ = __webpack_require__("../../../../../src/app/main-menu/main-menu.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/dist/angular-font-awesome.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__welcome_screen_welcome_screen_component__["a" /* WelcomeScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_10__main_menu_teacher_sheet_teacher_sheet_component__["a" /* TeacherSheetComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__main_menu_main_menu_module__["a" /* MainMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__project_service__["a" /* ProjectService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/main-menu/add-group/add-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\ninput {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  border-radius: 15px;\r\n  padding: 5px 15px;\r\n  color: white;\r\n  border: none;\r\n  outline: none;\r\n}\r\ninput:focus {\r\n  box-shadow: 0 0 15px 3px rgba(255, 255, 255, .5);\r\n}\r\n::-webkit-input-placeholder {color:white;}\r\n::-moz-placeholder          {color:white;}/* Firefox 19+ */\r\n:-moz-placeholder           {color:white;}/* Firefox 18- */\r\n:-ms-input-placeholder      {color:white;}\r\n.word-block{\r\n  border: 1px solid rgba(255, 255, 255, .6);\r\n  color: white;\r\n  border-radius: 15px;\r\n  padding: 0 10px;\r\n  cursor: pointer;\r\n}\r\n.word-block:hover{\r\n  color: black;\r\n  background-color: white;\r\n}\r\n.editing {\r\n  color: #fff517 !important;\r\n  border-color: #fff517 !important;\r\n  background-color: transparent !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-menu/add-group/add-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 text-center\">\r\n    <h2>{{title}}</h2>\r\n  </div>\r\n  <div *ngIf=\"(currentCount && currentCount < 40) || group.id\" class=\"col-12 col-md mt-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <input (keyup.enter)=\"add()\" [(ngModel)]=\"currentInput\" placeholder=\"Input {{group.name === '' ? 'main': 'next'}} word\" >\r\n      </div>\r\n      <div class=\"col-12 text-center mt-3\">\r\n        <button class=\"btn btn-success\" (click)=\"add()\" >{{editId === -1 ? 'Add' : 'Save'}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"(group.name && currentCount && currentCount < 40) || group.id\" class=\"col-12 col-md mt-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <h3 class=\"{{editId === -2 ? 'editing' : ''}}\" (click)=\"edit(-2, group.name)\" >{{group.name}}</h3>\r\n      </div>\r\n      <div *ngFor=\"let word of group.others; index as i;\" class=\"col-auto mt-3\">\r\n        <div class=\"word-block {{editId === i ? 'editing' : ''}}\" (click)=\"edit(i, word)\">{{word}}</div>\r\n      </div>\r\n      <div *ngIf=\"group.others.length > 0\" class = \"col-12 text-center mt-3\">\r\n        <button (click)=\"save()\" class = \"btn btn-success\">Save</button>\r\n        <button (click)=\"clear()\" class = \"btn {{group.id === 0 ? 'btn-secondary': 'btn-danger'}} ml-2\">{{group.id === 0 ? 'Clear': 'Delete'}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"currentCount && currentCount === 40 && !group.id\" class=\"col-12 text-center\">\r\n    <h4 class=\"text-danger\">You entered max count of groups</h4>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-menu/add-group/add-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Project__ = __webpack_require__("../../../../../src/app/model/Project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Group__ = __webpack_require__("../../../../../src/app/model/Group.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddGroupComponent = (function () {
    function AddGroupComponent(projectService) {
        this.projectService = projectService;
        this.end = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.editId = -1;
    }
    AddGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.group) {
            this.group = { name: '', others: [], id: 0 };
            this.projectService.getGroups(this.project.id).subscribe(function (groups) { return _this.currentCount = groups.length; });
        }
    };
    AddGroupComponent.prototype.add = function () {
        if (this.editId !== -1) {
            if (this.editId === -2) {
                this.group.name = this.currentInput;
            }
            else {
                this.group.others[this.editId] = this.currentInput;
            }
            this.editId = -1;
        }
        else if (this.currentInput) {
            if (this.group.name) {
                this.group.others.push(this.currentInput);
            }
            else {
                this.group.name = this.currentInput;
            }
        }
        this.currentInput = '';
    };
    AddGroupComponent.prototype.edit = function (id, word) {
        this.editId = id;
        this.currentInput = word;
    };
    AddGroupComponent.prototype.clear = function () {
        var _this = this;
        if (this.group.id === 0) {
            this.editId = -1;
            this.currentInput = '';
            this.group = { name: '', others: [], id: 0 };
        }
        else {
            this.projectService.removeGroup(this.group.id).subscribe(function (data) {
                _this.end.emit(null);
                _this.currentCount--;
            });
        }
    };
    AddGroupComponent.prototype.save = function () {
        var _this = this;
        if (this.group.id === 0) {
            this.projectService.addGroup(this.project.id, this.group).subscribe(function (data) {
                console.log(data);
                _this.currentCount++;
                _this.clear();
            });
        }
        else {
            this.projectService.updateGroup(this.group).subscribe(function (data) {
                console.log(data);
                _this.end.emit(_this.group);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_Project__["a" /* Project */])
    ], AddGroupComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], AddGroupComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], AddGroupComponent.prototype, "end", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__model_Group__["a" /* WordGroup */])
    ], AddGroupComponent.prototype, "group", void 0);
    AddGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-group',
            template: __webpack_require__("../../../../../src/app/main-menu/add-group/add-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-menu/add-group/add-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__project_service__["a" /* ProjectService */]])
    ], AddGroupComponent);
    return AddGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-menu/apprentice-sheet/apprentice-sheet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  background: white;\r\n  height: 100%;\r\n  display: block;\r\n  overflow: auto;\r\n}\r\n@media print {\r\n  :host {\r\n    overflow: hidden;\r\n    height: unset;\r\n  }\r\n}\r\nh1{\r\n  text-transform: uppercase;\r\n}\r\nh1, .danger{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.listA4{\r\n  width: 1122px;\r\n  height: 792px;\r\n  border: 1px solid black;\r\n}\r\n.listContainer{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.myRow{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1px;\r\n      -ms-flex: 1px 1 1;\r\n          flex: 1px 1 1;\r\n}\r\n.cell{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  font-size: 16px;\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  padding: 10px;\r\n  -webkit-box-flex: 1px;\r\n      -ms-flex: 1px 1 1;\r\n          flex: 1px 1 1;\r\n  font-weight: bold;\r\n}\r\n.ghost-btn{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 2px 15px;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-bottom-right-radius: 100%;\r\n  text-align: left;\r\n  font-size: 47px;\r\n}\r\n.ghost-btn:hover{\r\n  opacity: 1;\r\n}\r\n@media print {\r\n  .ghost-btn{\r\n    display: none;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-menu/apprentice-sheet/apprentice-sheet.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let sheet of sheets\" class=\"listA4\">\n  <div *ngIf=\"project\" class=\"listContainer\">\n    <h1 class=\"mb-3\">{{project.name}}</h1>\n    <div *ngIf=\"!sheet\" class=\"danger\">\n      <h2 class=\"text-danger mb-3\">Wrong url</h2>\n      <a class=\"btn btn-secondary\" routerLink=\"/project/{{project.id}}\">Back</a>\n    </div>\n    <div class=\"myRow\" *ngFor=\"let words1 of sheet\">\n      <div class=\"cell\" *ngFor=\"let word of words1\">\n        <p>{{word}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n<a *ngIf=\"sheets.length > 0 && project\" class=\"btn btn-secondary ghost-btn\" routerLink=\"/project/{{project.id}}\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n"

/***/ }),

/***/ "../../../../../src/app/main-menu/apprentice-sheet/apprentice-sheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprenticeSheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApprenticeSheetComponent = (function () {
    function ApprenticeSheetComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
        this.sheets = [];
    }
    Object.defineProperty(ApprenticeSheetComponent.prototype, "routeAnimation", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    ApprenticeSheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        var projectId = +this.route.snapshot.paramMap.get('id');
        var sheetId = +this.route.snapshot.paramMap.get('sheetId');
        console.log(sheetId);
        this.projectService.getApprenticeSheet(projectId, sheetId).subscribe(function (sheets) {
            for (var _i = 0, sheets_1 = sheets; _i < sheets_1.length; _i++) {
                var words = sheets_1[_i];
                if (words.length > 0) {
                    var newWords = [];
                    var letWords = words;
                    var length_1 = letWords.length;
                    _this.rows = 1;
                    var h = void 0, w = void 0;
                    while (true) {
                        h = (744 / _this.rows);
                        w = 1122 / (length_1 / _this.rows);
                        if (w >= h) {
                            break;
                        }
                        _this.rows++;
                    }
                    for (var i = 0; i < _this.rows; i++) {
                        newWords[i] = [];
                        var wordsCountInRow = i >= _this.rows - length_1 % _this.rows ?
                            Math.floor(length_1 / _this.rows) + 1 :
                            Math.floor(length_1 / _this.rows);
                        for (var t = 0; t < wordsCountInRow; t++) {
                            newWords[i][t] = letWords.shift();
                        }
                    }
                    _this.sheets.push(newWords);
                }
            }
        });
        this.projectService.getProject(projectId).subscribe(function (project) { return _this.project = project; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('@routeAnimation'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ApprenticeSheetComponent.prototype, "routeAnimation", null);
    ApprenticeSheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-apprentice-sheet',
            template: __webpack_require__("../../../../../src/app/main-menu/apprentice-sheet/apprentice-sheet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-menu/apprentice-sheet/apprentice-sheet.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__animations__["a" /* routeAnimation */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ApprenticeSheetComponent);
    return ApprenticeSheetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-menu/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-outline-light {\r\n  border-radius: 15px;\r\n}\r\n>>> .my-modal .modal-content{\r\n  background-color: rgba(0, 123, 255, .7);\r\n}\r\n>>> .my-modal .modal-content > *{\r\n  border: none !important;\r\n}\r\n>>> .my-modal .modal-header h4{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-menu/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-around\">\r\n  <div *ngIf=\"!groups || groups.length === 0\" class=\"col-12 text-center\">\r\n    <p>This project haven't any groups.</p>\r\n  </div>\r\n  <div *ngIf=\"groups && groups.length > 0\" class=\"col-12 text-center\">\r\n    <h3>Choose group</h3>\r\n  </div>\r\n  <div class=\"col-auto mt-2\" *ngFor=\"let group of groups; index as i\">\r\n    <button (click)=\"edit(editModal, i)\" class=\"btn btn-outline-light\">{{group.name}}</button>\r\n  </div>\r\n</div>\r\n<ng-template #editModal let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Edit group {{currentGroup.name}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-add-group (end)=\"update($event)\" [project]=\"project\" [group]=\"currentGroup\"></app-add-group>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/main-menu/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Project__ = __webpack_require__("../../../../../src/app/model/Project.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = (function () {
    function EditComponent(projectService, modalService) {
        this.projectService = projectService;
        this.modalService = modalService;
    }
    EditComponent.prototype.edit = function (modal, id) {
        this.currentGroup = this.groups[id];
        this.modal = this.modalService.open(modal, { windowClass: 'my-modal' });
    };
    EditComponent.prototype.ngOnInit = function () {
        this.getGroups();
    };
    EditComponent.prototype.getGroups = function () {
        var _this = this;
        this.projectService.getGroups(this.project.id).subscribe(function (next) {
            _this.groups = next;
            console.log(_this.groups);
        });
        // this.groups = [{ name: 'good', others: ['nice', 'light', 'kind'] }, { name: 'bad', others: ['evil', 'dirty', 'another'] }];
    };
    EditComponent.prototype.update = function (group) {
        if (!group) {
            this.groups.splice(this.groups.indexOf(this.currentGroup), 1);
        }
        else {
            this.groups[this.groups.indexOf(this.currentGroup)] = group;
        }
        this.currentGroup = group;
        this.modal.close('close');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__model_Project__["a" /* Project */])
    ], EditComponent.prototype, "project", void 0);
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("../../../../../src/app/main-menu/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-menu/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu-home/main-menu-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n  display: block;\r\n}\r\napp-projects >>> .block {\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n}\r\n.border-top{\r\n  border-top: 1px solid black;\r\n  margin-top: 30px;\r\n  padding-top: 15px;\r\n}\r\nh1{\r\n  text-align: center;\r\n  color: white;\r\n  text-transform: uppercase;\r\n}\r\ninput[type=number]{\r\n  width: 260px;\r\n  padding: 5px 15px;\r\n  border-radius: 20px;\r\n  background-color: transparent;\r\n  border: 1px solid white;\r\n  outline: none;\r\n  color: white;\r\n  max-width: 100%;\r\n  box-shadow: none;\r\n}\r\ninput[type=number]:focus{\r\n  box-shadow: 0 0 15px 5px white;\r\n}\r\ninput[type=number]::-webkit-input-placeholder {color: rgb(182, 182, 182);}\r\ninput[type=number]::-moz-placeholder          {color:rgb(182, 182, 182);}/* Firefox 19+ */\r\ninput[type=number]:-moz-placeholder           {color:rgb(182, 182, 182);}/* Firefox 18- */\r\ninput[type=number]:-ms-input-placeholder      {color:rgb(182, 182, 182);}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu-home/main-menu-home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <header>\r\n      <h1>{{project.name}}</h1>\r\n    </header>\r\n    <div class=\"container\">\r\n      <ngb-tabset #t = \"ngbTabset\" type=\"pills\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-lg\">\r\n            <ngb-tab id=\"edit\">\r\n                <ng-template ngbTabTitle><b>Add</b></ng-template>\r\n                <ng-template ngbTabContent>\r\n                <app-add-group *ngIf=\"project.id\" [title]=\"'Add new group'\" [project]=\"project\"></app-add-group>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </div>\r\n          <div class=\"col-12 col-lg\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle><b>Edit</b></ng-template>\r\n              <ng-template ngbTabContent>\r\n                <app-edit [project]=\"project\"></app-edit>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </div>\r\n          <div class=\"col-12 col-lg\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle><b>Print</b></ng-template>\r\n              <ng-template ngbTabContent>\r\n                <div class=\"row\">\r\n                  <div class=\"col-12 text-center\">\r\n                    <a class=\"btn btn-success\" routerLink=\"teacher-sheet\" routerLinkActive=\"active\">Teacher sheet <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i></a>\r\n                  </div>\r\n                  <div class=\"col-12 text-center border-top\">\r\n                    <h4>Apprentice sheets</h4>\r\n                  </div>\r\n                  <div class=\"col-12 text-center mt-3\">\r\n                    <input class=\"mr-2\" [(ngModel)]=\"apprenticeSheetAddCount\" placeholder=\"Input apprentice sheets count\" type=\"number\" min=\"0\" max=\"{{50 - apprenticeSheetLook.length}}\" (keyup)=\"validate()\"/>\r\n                    <button class=\"btn btn-secondary\" (click)=\"addApprenticeSheet()\"> Add </button>\r\n                  </div>\r\n                  <div class=\"col-12 text-center mt-3\">\r\n                    <div *ngIf=\"apprenticeSheetLook\" class=\"d-inline-block mr-2\" ngbDropdown>\r\n                      <button class=\"btn btn-primary dropdown\" id=\"dropdownBasic2\" ngbDropdownToggle>{{apprenticeSheetLookCurrent.name}}</button>\r\n                      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                        <button (click)=\"changeCurrent('All', -1)\" class=\"dropdown-item\">All</button>\r\n                        <button *ngFor=\"let num of apprenticeSheetLook; let i = index\" (click)=\"changeCurrent(i + 1, num)\" class=\"dropdown-item\">{{i + 1}}</button>\r\n                      </div>\r\n                    </div>\r\n                    <a class=\"btn btn-success\" (click)=\"lookApprenticeSheen()\">Look</a>\r\n                  </div>\r\n                </div>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </div>\r\n          <div class=\"col-12 col-lg\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle><b>Change project</b></ng-template>\r\n              <ng-template ngbTabContent>\r\n                <app-projects></app-projects>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </div>\r\n        </div>\r\n      </ngb-tabset>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu-home/main-menu-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainMenuHomeComponent = (function () {
    function MainMenuHomeComponent(route, router, projectService) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.project = { name: '', id: 0 };
        this.apprenticeSheetLookCurrent = { name: 'All', value: -1 };
    }
    Object.defineProperty(MainMenuHomeComponent.prototype, "routeAnimation", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    MainMenuHomeComponent.prototype.getProject = function (id) {
        var _this = this;
        this.projectService.getProject(id)
            .subscribe(function (project) { return _this.project = project; });
    };
    MainMenuHomeComponent.prototype.getApprenticeSheetLook = function (id) {
        var _this = this;
        this.projectService.getApprenticeSheetCount(id).subscribe(function (ids) {
            _this.apprenticeSheetLook = ids;
        });
    };
    MainMenuHomeComponent.prototype.checkLocalStorage = function () {
        if (localStorage.getItem('currentProject')) {
            this.router.navigate(['project/', localStorage.getItem('currentProject')]);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    MainMenuHomeComponent.prototype.ngOnInit = function () {
        this.checkLocalStorage();
        var id = +this.route.snapshot.paramMap.get('id');
        this.getProject(id);
        this.getApprenticeSheetLook(id);
        // this.project = {name: 'Project name', id: id};
        // this.id = this.route.data
    };
    MainMenuHomeComponent.prototype.validate = function () {
        this.apprenticeSheetAddCount = this.apprenticeSheetAddCount > 50 - this.apprenticeSheetLook.length ?
            50 - this.apprenticeSheetLook.length : this.apprenticeSheetAddCount;
    };
    MainMenuHomeComponent.prototype.addApprenticeSheet = function () {
        var _this = this;
        this.validate();
        this.projectService.addApprenticeSheet(this.project.id, this.apprenticeSheetAddCount).subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var id = data_1[_i];
                _this.apprenticeSheetLook.push(id);
            }
        });
    };
    MainMenuHomeComponent.prototype.changeCurrent = function (newString, newValue) {
        this.apprenticeSheetLookCurrent.value = newValue;
        this.apprenticeSheetLookCurrent.name = newString;
    };
    MainMenuHomeComponent.prototype.lookApprenticeSheen = function () {
        this.router.navigate(['/project/' + this.project.id + '/apprentice-sheet/' + this.apprenticeSheetLookCurrent.value]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('@routeAnimation'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], MainMenuHomeComponent.prototype, "routeAnimation", null);
    MainMenuHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-menu-home',
            template: __webpack_require__("../../../../../src/app/main-menu/main-menu-home/main-menu-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-menu/main-menu-home/main-menu-home.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* routeAnimation */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__project_service__["a" /* ProjectService */]])
    ], MainMenuHomeComponent);
    return MainMenuHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainMenuComponent = (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <router-outlet></router-outlet>\n  "
        })
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__ = __webpack_require__("../../../../../src/app/main-menu/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_group_add_group_component__ = __webpack_require__("../../../../../src/app/main-menu/add-group/add-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__apprentice_sheet_apprentice_sheet_component__ = __webpack_require__("../../../../../src/app/main-menu/apprentice-sheet/apprentice-sheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_routing_module__ = __webpack_require__("../../../../../src/app/main-menu/project-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_menu_component__ = __webpack_require__("../../../../../src/app/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_menu_home_main_menu_home_component__ = __webpack_require__("../../../../../src/app/main-menu/main-menu-home/main-menu-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MainMenuModule = (function () {
    function MainMenuModule() {
    }
    MainMenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__project_routing_module__["a" /* ProjectRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__main_menu_component__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_menu_home_main_menu_home_component__["a" /* MainMenuHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_3__add_group_add_group_component__["a" /* AddGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_4__apprentice_sheet_apprentice_sheet_component__["a" /* ApprenticeSheetComponent */],
                __WEBPACK_IMPORTED_MODULE_13__projects_projects_component__["a" /* ProjectsComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_13__projects_projects_component__["a" /* ProjectsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__project_service__["a" /* ProjectService */]]
        })
    ], MainMenuModule);
    return MainMenuModule;
}());



/***/ }),

/***/ "../../../../../src/app/main-menu/project-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apprentice_sheet_apprentice_sheet_component__ = __webpack_require__("../../../../../src/app/main-menu/apprentice-sheet/apprentice-sheet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_menu_home_main_menu_home_component__ = __webpack_require__("../../../../../src/app/main-menu/main-menu-home/main-menu-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_menu_component__ = __webpack_require__("../../../../../src/app/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__teacher_sheet_teacher_sheet_component__ = __webpack_require__("../../../../../src/app/main-menu/teacher-sheet/teacher-sheet.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var mainMenuRoutes = [
    { path: "project", component: __WEBPACK_IMPORTED_MODULE_4__main_menu_component__["a" /* MainMenuComponent */], children: [
            {
                path: ":id", component: __WEBPACK_IMPORTED_MODULE_3__main_menu_home_main_menu_home_component__["a" /* MainMenuHomeComponent */]
            },
            {
                path: "", redirectTo: '/', pathMatch: 'full'
            },
            {
                path: ":id/apprentice-sheet/:sheetId", component: __WEBPACK_IMPORTED_MODULE_1__apprentice_sheet_apprentice_sheet_component__["a" /* ApprenticeSheetComponent */]
            },
            {
                path: ":id/teacher-sheet", component: __WEBPACK_IMPORTED_MODULE_5__teacher_sheet_teacher_sheet_component__["a" /* TeacherSheetComponent */]
            }
        ]
    }
];
var ProjectRoutingModule = (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(mainMenuRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
        })
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/main-menu/teacher-sheet/teacher-sheet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  background: white;\r\n  height: 100%;\r\n  display: block;\r\n  overflow: auto;\r\n}\r\n@media print {\r\n  :host {\r\n    overflow: hidden;\r\n  }\r\n}\r\n.listA4{\r\n  width: 1122px;\r\n  height: 792px;\r\n  border: 1px solid black;\r\n}\r\n.listContainer{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\nh1{\r\n  text-transform: uppercase;\r\n}\r\nh1, .danger{\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.cell{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  width: 224px;\r\n  height: 182px;\r\n  font-size: 16px;\r\n  border: 1px solid black;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n.cell .mainWordWrapper{\r\n  font-size: 45px;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n.ghost-btn{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  padding: 2px 15px;\r\n  width: 100px;\r\n  height: 100px;\r\n  border-bottom-right-radius: 100%;\r\n  text-align: left;\r\n  font-size: 47px;\r\n}\r\n.ghost-btn:hover{\r\n  opacity: 1;\r\n}\r\n@media print {\r\n  .ghost-btn{\r\n    display: none;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-menu/teacher-sheet/teacher-sheet.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project && groups\" class=\"listA4\">\n  <div class=\"listContainer\">\n    <h1 class=\"mb-3\">{{project.name}}</h1>\n    <div *ngIf=\"!groups\" class=\"danger\">\n      <h2 class=\"text-danger mb-3\">This project have not any groups</h2>\n      <a class=\"btn btn-secondary\" routerLink=\"/project/{{project.id}}\">Back</a>\n    </div>\n    <div class=\"cell\" *ngFor=\"let group of groups\">\n      <div class=\"mainWordWrapper\"><div class=\"mainWord\">{{group.name}}</div></div>\n      <div>{{group.others.join(\", \")}}</div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"groups2 && project\" class=\"listA4\">\n  <div class=\"listContainer\">\n    <h1 class=\"mb-3\">{{project.name}}. Sheet 2</h1>\n    <div class=\"cell\" *ngFor=\"let group of groups2\">\n      <div class=\"mainWordWrapper\"><div class=\"mainWord\">{{group.name}}</div></div>\n      <div>{{group.others.join(\", \")}}</div>\n    </div>\n  </div>\n</div>\n<a *ngIf=\"groups && project\" class=\"btn btn-secondary ghost-btn\" routerLink=\"/project/{{project.id}}\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>\n"

/***/ }),

/***/ "../../../../../src/app/main-menu/teacher-sheet/teacher-sheet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherSheetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TeacherSheetComponent = (function () {
    function TeacherSheetComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
    }
    Object.defineProperty(TeacherSheetComponent.prototype, "routeAnimation", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    TeacherSheetComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.getGroups(id);
    };
    TeacherSheetComponent.prototype.getGroups = function (id) {
        var _this = this;
        this.projectService.getGroups(id).subscribe(function (groups) {
            if (groups.length > 20) {
                _this.groups = groups.slice(0, 20);
                _this.groups2 = groups.slice(20);
            }
            else {
                _this.groups = groups;
            }
        });
        this.projectService.getProject(id).subscribe(function (project) { return _this.project = project; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('@routeAnimation'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], TeacherSheetComponent.prototype, "routeAnimation", null);
    TeacherSheetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-teacher-sheet',
            template: __webpack_require__("../../../../../src/app/main-menu/teacher-sheet/teacher-sheet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-menu/teacher-sheet/teacher-sheet.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* routeAnimation */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TeacherSheetComponent);
    return TeacherSheetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/Group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordGroup; });
var WordGroup = (function () {
    function WordGroup() {
    }
    return WordGroup;
}());



/***/ }),

/***/ "../../../../../src/app/model/Project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "../../../../../src/app/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.projectUrl = "api/projects"; // URL to web api
    }
    ProjectService.prototype.getAllProjects = function () {
        var _this = this;
        var url = this.projectUrl + "/getAll";
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("fetched projects"); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("get all project")));
    };
    ProjectService.prototype.getProject = function (id) {
        var _this = this;
        return this.http.get(this.projectUrl + ("?id=" + id)).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (next) { return _this.log("fetched project " + next.name); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("get all project")));
    };
    ProjectService.prototype.addProject = function (project) {
        var _this = this;
        return this.http.post(this.projectUrl + ("?name=" + project), project).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("added project id=" + project); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('addHero')));
    };
    ProjectService.prototype.getGroups = function (id) {
        var _this = this;
        return this.http.get(this.projectUrl + ("/getGroups?id=" + id)).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (next) { return _this.log("fetched all groups"); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("get all project")));
    };
    ProjectService.prototype.addGroup = function (id, group) {
        var _this = this;
        return this.http.post(this.projectUrl + ("/addGroup?id=" + id), { name: group.name, others: group.others }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("added group id=" + group.name); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('addGroup')));
    };
    ProjectService.prototype.removeGroup = function (id) {
        var _this = this;
        return this.http.delete(this.projectUrl + ("/removeGroup?id=" + id)).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("remove group " + id); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('remove group')));
    };
    ProjectService.prototype.updateGroup = function (group) {
        var _this = this;
        return this.http.put(this.projectUrl + "/updateGroup", group).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("update group " + group.id); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('remove group')));
    };
    ProjectService.prototype.addApprenticeSheet = function (projectId, count) {
        var _this = this;
        return this.http.post(this.projectUrl + ("/addApprenticeSheet?projectId=" + projectId + "&count=" + count), projectId).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (_) { return _this.log("added apprentice to project with id=" + projectId); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError('addHero')));
    };
    ProjectService.prototype.getApprenticeSheet = function (projectId, sheetId) {
        var _this = this;
        return this.http.get(this.projectUrl + ("/getApprenticeSheet?projectId=" + projectId + "&sheetId=" + sheetId)).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (next) { return _this.log("fetched " + sheetId + " apprenticeSheet from " + projectId + " project"); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("get apprenticeSheet")));
    };
    ProjectService.prototype.getApprenticeSheetCount = function (projectId) {
        var _this = this;
        return this.http.get(this.projectUrl + ("/getApprenticeSheetCount?projectId=" + projectId)).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* tap */])(function (next) { return _this.log("fetched apprenticeSheetCount for " + projectId + " project"); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(this.handleError("get apprentice sheet count")));
    };
    ProjectService.prototype.log = function (message) {
        console.log('ProjectService: ' + message);
    };
    ProjectService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error); // log to console instead
            _this.log(operation + " failed: " + error.message);
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n  max-width: 90%;\r\n}\r\n.block{\r\n  padding: 40px 20px;\r\n  background-color: rgba(0,0,0,.6);\r\n  border-radius: 15px;\r\n  box-shadow: 0 0 5px 2px black;\r\n}\r\n.dropdown{\r\n  width: 500px;\r\n  max-width: 100%;\r\n}\r\n.dropdown-menu{\r\n  width: 500px;\r\n  max-width: 100%;\r\n}\r\n.dropdown-item:hover{\r\n  background-color: #F2F2F2;\r\n}\r\nh3{\r\n  color: white;\r\n}\r\ninput.newProject{\r\n  width: 205px;\r\n  padding: 5px 15px;\r\n  border-radius: 20px;\r\n  background-color: transparent;\r\n  border: 1px solid white;\r\n  outline: none;\r\n  color: white;\r\n}\r\ninput.newProject:focus{\r\n  box-shadow: 0 0 15px 5px white;\r\n}\r\n::-webkit-input-placeholder {color:white;}\r\n::-moz-placeholder          {color:white;}/* Firefox 19+ */\r\n:-moz-placeholder           {color:white;}/* Firefox 18- */\r\n:-ms-input-placeholder      {color:white;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"block\">\r\n  <div class=\"col-12 text-center\">\r\n    <h3>Choose or create project</h3>\r\n  </div>\r\n  <div class=\"col-12 text-center mt-3\">\r\n    <div ngbDropdown>\r\n      <button class=\"btn btn-primary dropdown\" id=\"dropdownBasic2\" ngbDropdownToggle>{{choosedProject.name}}</button>\r\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n        <button (click)=\"choose(project)\" *ngFor=\"let project of projects\" class=\"dropdown-item\">{{project.id}} - {{project.name}}</button>\r\n        <button (click)=\"choose({ name: 'New project', id: 0})\" class=\"dropdown-item\">New project</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"choosedProject.id === 0\" class=\"col-12 text-center mt-3\">\r\n    <input class=\"md-3 newProject\" [(ngModel)]=\"newProject\" placeholder=\"Input new project name\" (keyup)=\"validate()\"/>\r\n    <ngb-alert *ngFor=\"let alert of alerts\" [dismissible]=\"false\" type=\"danger\">{{ alert }}</ngb-alert>\r\n  </div>\r\n  <div class=\"col-12 text-center mt-3\">\r\n    <input class=\"btn btn-success\" type=\"button\" (click)=\"save()\" value=\"Commit\" [disabled]=\"isDisabled\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsComponent = (function () {
    function ProjectsComponent(projectService, router) {
        this.projectService = projectService;
        this.router = router;
        this.choosedProject = { name: 'Choose', id: -1 };
        this.alerts = [];
        this.isDisabled = true;
        this.redirect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ProjectsComponent.prototype.validate = function () {
        this.isDisabled = false;
        this.removeAlert('Project with same name already exist');
        this.removeAlert('Field shouldn\'t be empty');
        switch (this.choosedProject.id) {
            case -1:
                this.isDisabled = true;
                break;
            case 0:
                if (this.newProject) {
                    var self_1 = this;
                    this.projects.forEach(function (current) {
                        if (current.name.localeCompare(self_1.newProject.trim()) === 0) {
                            self_1.isDisabled = true;
                            self_1.addAlert('Project with same name already exist');
                        }
                    });
                }
                else {
                    this.addAlert('Field shouldn\'t be empty');
                    this.isDisabled = true;
                }
                break;
            default: this.isDisabled = false;
        }
    };
    ProjectsComponent.prototype.addAlert = function (message) {
        if (this.alerts.indexOf(message) === -1) {
            this.alerts.push(message);
        }
    };
    ProjectsComponent.prototype.removeAlert = function (message) {
        var index = this.alerts.indexOf(message);
        if (index !== -1) {
            this.alerts.splice(index, 1);
        }
    };
    ProjectsComponent.prototype.save = function () {
        var _this = this;
        if (this.choosedProject.id === 0) {
            this.projectService.addProject(this.newProject).subscribe(function (data) {
                localStorage.setItem('currentProject', data);
                _this.router.navigate(["/project/", data]).then(function () {
                    _this.router.navigate(["/"]);
                });
            });
        }
        else {
            console.log('choosed - ' + this.choosedProject.name);
            localStorage.setItem('currentProject', this.choosedProject.id.toString());
            this.router.navigate(["/project/", this.choosedProject.id.toString()]).then(function () {
                _this.router.navigate(["/"]);
            });
            // this.redirect.emit([`/project/`, this.choosedProject.id.toString()]);
        }
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getAllProjects()
            .subscribe(function (projects) { return _this.projects = projects; });
        // this.projects = [ {name: 'first project', id: 3}, {name: 'second project', id: 2}, {name: 'third project', id: 1}];
    };
    ProjectsComponent.prototype.choose = function (project) {
        this.choosedProject = project;
        if (project.id !== 0) {
            this.validate();
        }
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "redirect", void 0);
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/welcome-screen/welcome-screen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  overflow: auto;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\nheader{\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n}\r\n.myContainer{\r\n  -webkit-box-flex:1px;\r\n      -ms-flex:1px 1 1;\r\n          flex:1px 1 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\nh1{\r\n  text-align: center;\r\n  color: white;\r\n  text-transform: uppercase;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome-screen/welcome-screen.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <header>\r\n      <h1>Bingo creater - v 0.1</h1>\r\n    </header>\r\n    <div class=\"myContainer\">\r\n      <app-projects\r\n      (redirect)=\"startAnimation($event)\"></app-projects>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/welcome-screen/welcome-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations__ = __webpack_require__("../../../../../src/app/animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomeScreenComponent = (function () {
    function WelcomeScreenComponent(route, router) {
        this.route = route;
        this.router = router;
        this.state = 'inactive';
    }
    Object.defineProperty(WelcomeScreenComponent.prototype, "routeAnimation", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    WelcomeScreenComponent.prototype.checkLocalStorage = function () {
        if (localStorage.getItem('currentProject')) {
            this.router.navigate(['project/', localStorage.getItem('currentProject')]);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    WelcomeScreenComponent.prototype.ngAfterViewInit = function () {
        this.state = 'active';
    };
    WelcomeScreenComponent.prototype.ngOnInit = function () {
        this.checkLocalStorage();
    };
    WelcomeScreenComponent.prototype.startAnimation = function (path) {
        console.log('connect' + path);
        this.path = path;
        this.redirect();
    };
    WelcomeScreenComponent.prototype.redirect = function () {
        this.router.navigate(this.path);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('@routeAnimation'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], WelcomeScreenComponent.prototype, "routeAnimation", null);
    WelcomeScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome-screen',
            template: __webpack_require__("../../../../../src/app/welcome-screen/welcome-screen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome-screen/welcome-screen.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_2__animations__["a" /* routeAnimation */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WelcomeScreenComponent);
    return WelcomeScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/I-Have-No-Words-I-Must-Design.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "I-Have-No-Words-I-Must-Design.008102daef1525350870.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map