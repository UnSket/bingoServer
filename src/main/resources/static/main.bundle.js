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

/***/ "../../../../../src/app/add-group/add-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\ninput {\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  border-radius: 15px;\r\n  padding: 5px 15px;\r\n  color: white;\r\n  border: none;\r\n  outline: none;\r\n}\r\ninput:focus {\r\n  box-shadow: 0 0 15px 3px rgba(255, 255, 255, .5);\r\n}\r\n::-webkit-input-placeholder {color:white;}\r\n::-moz-placeholder          {color:white;}/* Firefox 19+ */\r\n:-moz-placeholder           {color:white;}/* Firefox 18- */\r\n:-ms-input-placeholder      {color:white;}\r\n.word-block{\r\n  border: 1px solid rgba(255, 255, 255, .6);\r\n  color: white;\r\n  border-radius: 15px;\r\n  padding: 0 10px;\r\n  cursor: pointer;\r\n}\r\n.word-block:hover{\r\n  color: black;\r\n  background-color: white;\r\n}\r\n.editing {\r\n  color: #fff517 !important;\r\n  border-color: #fff517 !important;\r\n  background-color: transparent !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-group/add-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-12 text-center\">\r\n    <h2>{{title}}</h2>\r\n  </div>\r\n  <div class=\"col-12 col-md mt-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <input (keyup.enter)=\"add()\" [(ngModel)]=\"currentInput\" placeholder=\"Input {{group.name === '' ? 'main': 'next'}} word\" >\r\n      </div>\r\n      <div class=\"col-12 text-center mt-3\">\r\n        <button class=\"btn btn-success\" (click)=\"add()\" >{{editId === -1 ? 'Add' : 'Save'}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"group.name\" class=\"col-12 col-md mt-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center\">\r\n        <h3 class=\"{{editId === -2 ? 'editing' : ''}}\" (click)=\"edit(-2, group.name)\" >{{group.name}}</h3>\r\n      </div>\r\n      <div *ngFor=\"let word of group.others; index as i;\" class=\"col-auto mt-3\">\r\n        <div class=\"word-block {{editId === i ? 'editing' : ''}}\" (click)=\"edit(i, word)\">{{word}}</div>\r\n      </div>\r\n      <div *ngIf=\"group.others.length > 0\" class = \"col-12 text-center mt-3\">\r\n        <button (click)=\"save()\" class = \"btn btn-success\">Save</button>\r\n        <button (click)=\"clear()\" class = \"btn {{group.id === 0 ? 'btn-secondary': 'btn-danger'}} ml-2\">{{group.id === 0 ? 'Clear': 'Delete'}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/add-group/add-group.component.ts":
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
        if (!this.group) {
            this.group = { name: '', others: [], id: 0 };
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
            this.projectService.removeGroup(this.group.id).subscribe(function (data) { return _this.end.emit(null); });
        }
    };
    AddGroupComponent.prototype.save = function () {
        var _this = this;
        if (this.group.id === 0) {
            this.projectService.addGroup(this.project.id, this.group).subscribe(function (data) {
                console.log(data);
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
            template: __webpack_require__("../../../../../src/app/add-group/add-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-group/add-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__project_service__["a" /* ProjectService */]])
    ], AddGroupComponent);
    return AddGroupComponent;
}());



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
            minWidth: '100%'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_menu_main_menu_component__ = __webpack_require__("../../../../../src/app/main-menu/main-menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "project/:id", component: __WEBPACK_IMPORTED_MODULE_3__main_menu_main_menu_component__["a" /* MainMenuComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__welcome_screen_welcome_screen_component__["a" /* WelcomeScreenComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
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
exports.push([module.i, ".root-bg{\r\n  height: 100%;\r\n  background:linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,.6)), url(" + __webpack_require__("../../../../../src/assets/images/I-Have-No-Words-I-Must-Design.png") + ") no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  overflow: hidden;\r\n}\r\n.shadow{\r\n  ;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n", ""]);

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
        this.title = 'app';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_screen_welcome_screen_component__ = __webpack_require__("../../../../../src/app/welcome-screen/welcome-screen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_menu_main_menu_component__ = __webpack_require__("../../../../../src/app/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__add_group_add_group_component__ = __webpack_require__("../../../../../src/app/add-group/add-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_6__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__welcome_screen_welcome_screen_component__["a" /* WelcomeScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_11__main_menu_main_menu_component__["a" /* MainMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__add_group_add_group_component__["a" /* AddGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__edit_edit_component__["a" /* EditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__project_service__["a" /* ProjectService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-outline-light {\r\n  border-radius: 15px;\r\n}\r\n>>> .my-modal .modal-content{\r\n  background-color: rgba(0, 123, 255, .7);\r\n}\r\n>>> .my-modal .modal-content > *{\r\n  border: none !important;\r\n}\r\n>>> .my-modal .modal-header h4{\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-around\">\r\n  <div *ngIf=\"!groups || groups.length === 0\" class=\"col-12 text-center\">\r\n    <p>This project haven't any groups.</p>\r\n  </div>\r\n  <div *ngIf=\"groups && groups.length > 0\" class=\"col-12 text-center\">\r\n    <h3>Choose group</h3>\r\n  </div>\r\n  <div class=\"col-auto mt-2\" *ngFor=\"let group of groups; index as i\">\r\n    <button (click)=\"edit(editModal, i)\" class=\"btn btn-outline-light\">{{group.name}}</button>\r\n  </div>\r\n</div>\r\n<ng-template #editModal let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Edit group {{currentGroup.name}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <app-add-group (end)=\"update($event)\" [project]=\"project\" [group]=\"currentGroup\"></app-add-group>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
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
            template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{\r\n  color: white;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-size: 3em;\r\n  margin-bottom: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n  display: block;\r\n}\r\napp-projects >>> .block {\r\n  background-color: transparent;\r\n  box-shadow: none;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <header>\r\n      <app-header [title]=\"project.name\"></app-header>\r\n    </header>\r\n    <div class=\"container\">\r\n      <ngb-tabset #t = \"ngbTabset\" type=\"pills\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12 col-lg\">\r\n            <ngb-tab id=\"edit\">\r\n                <ng-template ngbTabTitle><b>Add</b></ng-template>\r\n                <ng-template ngbTabContent>\r\n                <app-add-group [title]=\"'Add new group'\" [project]=\"project\"></app-add-group>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </div>\r\n          <div class=\"col-12 col-lg\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle><b>Edit</b></ng-template>\r\n              <ng-template ngbTabContent>\r\n                <app-edit [project]=\"project\"></app-edit>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </div>\r\n          <div class=\"col-12 col-lg\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle><b>Print</b></ng-template>\r\n              <ng-template ngbTabContent>\r\n                <p>There is nothing yet!</p>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </div>\r\n          <div class=\"col-12 col-lg\">\r\n            <ngb-tab>\r\n              <ng-template ngbTabTitle><b>Change project</b></ng-template>\r\n              <ng-template ngbTabContent>\r\n                <app-projects></app-projects>\r\n              </ng-template>\r\n            </ngb-tab>\r\n          </div>\r\n        </div>\r\n      </ngb-tabset>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
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




var MainMenuComponent = (function () {
    function MainMenuComponent(route, router, projectService) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.project = { name: '', id: 0 };
        this.state = 'inactive';
    }
    Object.defineProperty(MainMenuComponent.prototype, "routeAnimation", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    MainMenuComponent.prototype.getProject = function (id) {
        var _this = this;
        this.projectService.getProject(id)
            .subscribe(function (project) { return _this.project = project; });
    };
    MainMenuComponent.prototype.checkLocalStorage = function () {
        if (localStorage.getItem('currentProject')) {
            this.router.navigate(['project/', localStorage.getItem('currentProject')]);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    MainMenuComponent.prototype.ngOnInit = function () {
        this.checkLocalStorage();
        var id = +this.route.snapshot.paramMap.get('id');
        this.getProject(id);
        // this.project = {name: 'Project name', id: id};
        // this.id = this.route.data
    };
    MainMenuComponent.prototype.ngAfterViewChecked = function () {
        this.state = 'active';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('@routeAnimation'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], MainMenuComponent.prototype, "routeAnimation", null);
    MainMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main-menu',
            template: __webpack_require__("../../../../../src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-menu/main-menu.component.css")],
            animations: [
                __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* routeAnimation */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__project_service__["a" /* ProjectService */]])
    ], MainMenuComponent);
    return MainMenuComponent;
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
exports.push([module.i, ".block{\r\n  padding: 40px 20px;\r\n  background-color: rgba(0,0,0,.6);\r\n  border-radius: 15px;\r\n  box-shadow: 0 0 5px 2px black;\r\n}\r\n.dropdown{\r\n  width: 500px;\r\n  max-width: 100%;\r\n}\r\n.dropdown-menu{\r\n  width: 500px;\r\n  max-width: 100%;\r\n}\r\n.dropdown-item:hover{\r\n  background-color: #F2F2F2;\r\n}\r\nh3{\r\n  color: white;\r\n}\r\ninput.newProject{\r\n  width: 205px;\r\n  padding: 5px 15px;\r\n  border-radius: 20px;\r\n  background-color: transparent;\r\n  border: 1px solid white;\r\n  outline: none;\r\n  color: white;\r\n}\r\ninput.newProject:focus{\r\n  box-shadow: 0 0 15px 5px white;\r\n}\r\n::-webkit-input-placeholder {color:white;}\r\n::-moz-placeholder          {color:white;}/* Firefox 19+ */\r\n:-moz-placeholder           {color:white;}/* Firefox 18- */\r\n:-ms-input-placeholder      {color:white;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"block\">\r\n  <div class=\"col-12 text-center\">\r\n    <h3>Choose or create project</h3>\r\n  </div>\r\n  <div class=\"col-12 text-center mt-3\">\r\n    <div ngbDropdown class=\"d-inline-block\">\r\n      <button class=\"btn btn-primary dropdown\" id=\"dropdownBasic2\" ngbDropdownToggle>{{choosedProject.name}}</button>\r\n      <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n        <button (click)=\"choose(project)\" *ngFor=\"let project of projects\" class=\"dropdown-item\">{{project.id}} - {{project.name}}</button>\r\n        <button (click)=\"choose({ name: 'New project', id: 0})\" class=\"dropdown-item\">New project</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"choosedProject.id === 0\" class=\"col-12 text-center mt-3\">\r\n    <input class=\"md-3 newProject\" [(ngModel)]=\"newProject\" placeholder=\"Input new project name\" (keyup)=\"validate()\"/>\r\n    <ngb-alert *ngFor=\"let alert of alerts\" [dismissible]=\"false\" type=\"danger\">{{ alert }}</ngb-alert>\r\n  </div>\r\n  <div class=\"col-12 text-center mt-3\">\r\n    <input class=\"btn btn-success\" type=\"button\" (click)=\"save()\" value=\"Commit\" [disabled]=\"isDisabled\">\r\n  </div>\r\n</div>\r\n"

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
                _this.router.navigate(["/", data]);
            });
        }
        else {
            console.log('choosed - ' + this.choosedProject.name);
            localStorage.setItem('currentProject', this.choosedProject.id.toString());
            this.router.navigate(["/project/", this.choosedProject.id.toString()]);
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
exports.push([module.i, ":host{\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  overflow: auto;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n}\r\nheader{\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n}\r\n.myContainer{\r\n  -webkit-box-flex:1px;\r\n      -ms-flex:1px 1 1;\r\n          flex:1px 1 1;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome-screen/welcome-screen.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <header>\r\n      <app-header title=\"Bingo creater - v 0.1\"></app-header>\r\n    </header>\r\n    <div class=\"myContainer\">\r\n      <app-projects\r\n      (redirect)=\"startAnimation($event)\"></app-projects>\r\n    </div>\r\n\r\n"

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