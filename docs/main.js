"use strict";
(self["webpackChunkdemo_ngx_contact_list"] = self["webpackChunkdemo_ngx_contact_list"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var node_modules_ngx_contact_list___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node_modules/ngx-contact-list/ */ 633);



const _c0 = function (a0) { return { "active": a0 }; };
function AppComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_5_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const number_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.selectExample(number_r3)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const number_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.currentNumber === number_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Example 0", number_r3, "");
} }
function AppComponent_ngx_contact_list_12_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.name + " " + item_r7.lastName);
} }
const _c1 = function () { return ["name", "lastName"]; };
function AppComponent_ngx_contact_list_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-contact-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function AppComponent_ngx_contact_list_12_Template_ngx_contact_list_onClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.selected($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ngx_contact_list_12_ng_template_1_Template, 3, 1, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("noSmoothScroll", true)("withTemplate", true)("propsSearch", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1))("data", ctx_r1.contacts);
} }
function AppComponent_ngx_contact_list_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r10.imageExist(item_r11), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11.name + " " + item_r11.lastName);
} }
function AppComponent_ngx_contact_list_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-contact-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ngx_contact_list_13_ng_template_1_Template, 4, 2, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("noSmoothScroll", true)("propsSearch", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1))("data", ctx_r2.contacts)("withTemplate", true);
} }
const _c2 = function () { return [1, 2]; };
class AppComponent {
    constructor() {
        this.title = 'ngx-contact-list';
        this.window = window;
        this.filters = ['name', 'lastName'];
        this.contacts = [
            { name: 'Anastacia', image: '', lastName: 'Perez' },
            { name: 'Burgues', image: '', lastName: 'Nadies' },
            { name: 'Ayaka', image: '', lastName: 'Kamisato' },
            { name: 'Thoma', image: '', lastName: 'Kamisato' },
            { name: 'Ayato', image: '', lastName: 'Kamisato' },
            { name: 'Razor', image: '', lastName: 'Lupical' },
            { name: 'SkyZero', image: '', lastName: 'ZX' },
            { name: 'Gouru', image: '', lastName: 'GGGGGG' },
            { name: 'VI', image: '', lastName: 'VITU' },
            { name: 'Thu', image: '', lastName: 'Newcombe' },
            { name: 'Stasia', image: '', lastName: 'Isreal' },
            { name: 'Robbie', image: '', lastName: 'Wininger' },
            { name: 'Daphine', image: '', lastName: 'Truex' },
            { name: 'Su', image: '', lastName: 'Juhl' },
            { name: 'Eda', image: '', lastName: 'Banks' },
            { name: 'Bernita', image: '', lastName: 'Izzo' },
            { name: 'Mayme', image: '', lastName: 'Trader' },
            { name: 'Livia', image: '', lastName: 'Luse' },
            { name: 'Celine', image: '', lastName: 'File' },
            { name: 'Nyla', image: '', lastName: 'Stockton' },
            { name: 'Kathleen', image: '', lastName: 'Burwell' },
            { name: 'Bruce', image: '', lastName: 'Slack' },
            { name: 'Bruce', image: '', lastName: 'Pepe' },
            { name: 'Bruce', image: '', lastName: 'Pedro' },
            { name: 'Bruce', image: '', lastName: 'Lucho' },
            { name: 'Bruce', image: '', lastName: 'Luis' },
            { name: 'Jacquline', image: '', lastName: 'July' },
            { name: 'Chelsey', image: '', lastName: 'Feller' },
            { name: 'Particia', image: '', lastName: 'Ours' },
            { name: 'Jazmin', image: '', lastName: 'Island' },
            { name: 'Gracia', image: '', lastName: 'Harvill' },
            { name: 'Jewel', image: '', lastName: 'Elling' },
            { name: 'Maybelle', image: '', lastName: 'niña' },
            { name: 'Leonie', image: '', lastName: 'ñiño' },
        ];
        this.currentNumber = 1;
        this.example = null;
        this.examples = [
            {
                title: 'Simple use',
                html: '<alphabet-filter propAlphaOrder="name" [propsSearch]="[name , lastName]" placeholder="type name or contact" [data]="contacts" [noSmoothScroll]="true" [withTemplate]="true" ></alphabet-filter>',
            },
            {
                title: 'Custom template',
                html: '<alphabet-filter propAlphaOrder="name" [propsSearch]="[name , lastName]" placeholder="type name or contact" [data]="contacts" height="calc(100vh - 430px)" [withTemplate]="true" [noSmoothScroll]="true">' +
                    '<ng-template let-item>' +
                    '<div class="search-list-item">' +
                    '<img [src]="item.image" (error)="$event.target.src = \'assets/img/none.png\'" alt="">' +
                    '<span>{{item.name}}</span>' +
                    '</div>' +
                    '</ng-template>' +
                    '</alphabet-filter>',
            },
        ];
    }
    selectExample(number) {
        this.currentNumber = number;
        this.example = this.examples[this.currentNumber - 1];
    }
    ngOnInit() {
        this.selectExample(1);
    }
    imageExist(item) {
        if (item.image == '') {
            return 'assets/images/none.png';
        }
        return item.image;
    }
    selected(event) {
        console.log('Selected is ', event);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 6, consts: [[1, "example-nav-bar"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "example"], ["propAlphaOrder", "name", "placeholder", "type name or contact", "height", "550px", 3, "noSmoothScroll", "withTemplate", "propsSearch", "data", "onClick", 4, "ngIf"], ["propAlphaOrder", "name", "placeholder", "type name or contact", "listClass", "search-list", "height", "550px", 3, "noSmoothScroll", "propsSearch", "data", "withTemplate", 4, "ngIf"], [2, "clear", "both"], [1, "footer"], ["href", "https://github.com/skyzerozx/ngx-contact-list", "target", "_blank"], [3, "ngClass", "click"], ["propAlphaOrder", "name", "placeholder", "type name or contact", "height", "550px", 3, "noSmoothScroll", "withTemplate", "propsSearch", "data", "onClick"], ["propAlphaOrder", "name", "placeholder", "type name or contact", "listClass", "search-list", "height", "550px", 3, "noSmoothScroll", "propsSearch", "data", "withTemplate"], [1, "search-list-item"], ["alt", "", 3, "src"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ngx-contact-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_li_5_Template, 2, 4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "section")(8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_ngx_contact_list_12_Template, 2, 5, "ngx-contact-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_ngx_contact_list_13_Template, 2, 5, "ngx-contact-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " See the source code into ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " repository.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.example.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.example.html);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentNumber === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentNumber === 2);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, node_modules_ngx_contact_list___WEBPACK_IMPORTED_MODULE_2__.NgxContactListComponent], styles: ["body[_ngcontent-%COMP%] {\n  background: #000000;\n  color: #999;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n\n\n[_nghost-%COMP%] {\n  box-sizing: border-box;\n  position: relative;\n  display: block;\n  padding-bottom: 80px;\n  min-height: 100%;\n}\n\n[_nghost-%COMP%]   .example-nav-bar[_ngcontent-%COMP%] {\n  background: #4b4b4b;\n}\n\n[_nghost-%COMP%]   .example-nav-bar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: #505050;\n  margin: auto;\n  padding: 30px 0;\n  text-align: center;\n  font-size: 30px;\n  color: #FFF;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.075);\n}\n\n[_nghost-%COMP%]   .example-nav-bar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  padding: 0 10px;\n}\n\n[_nghost-%COMP%]   .example-nav-bar[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  font-size: 13px;\n  max-width: 800px;\n  display: block;\n  list-style: none;\n  margin: auto;\n  padding: 0;\n}\n\n[_nghost-%COMP%]   .example-nav-bar[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 15px 20px;\n  color: #FFF;\n  cursor: pointer;\n  transition-duration: 0.3s;\n}\n\n[_nghost-%COMP%]   .example-nav-bar[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%] {\n  cursor: default;\n  background: #434343;\n}\n\n[_nghost-%COMP%]   .example-nav-bar[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:not(.active):hover {\n  background: #535353;\n}\n\n[_nghost-%COMP%]   .example[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  max-width: 900px;\n  padding: 0 30px;\n  margin: auto;\n  box-sizing: border-box;\n}\n\n[_nghost-%COMP%]   .example[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  margin-bottom: 10px;\n  color: #434343;\n}\n\n[_nghost-%COMP%]   .example[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > h5[_ngcontent-%COMP%] {\n  display: table;\n  margin: auto;\n  text-align: left;\n  font-size: 12px;\n  margin-bottom: 25px;\n  max-width: 500px;\n  font-weight: normal;\n  color: #888888;\n  padding: 10px 20px;\n  background: #FFF;\n  border: 1px solid rgba(75, 75, 75, 0.4);\n}\n\n[_nghost-%COMP%]   .footer[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  background: #FFF;\n  padding: 10px 15px;\n  font-size: 12px;\n  color: #777;\n  text-align: center;\n  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.075);\n}\n\n[_nghost-%COMP%]  .search-list .search-list-item {\n  padding: 10px 0;\n}\n\n[_nghost-%COMP%]  .search-list .search-list-item > img {\n  display: inline-block;\n  vertical-align: middle;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #DDD;\n}\n\n[_nghost-%COMP%]  .search-list .search-list-item > span {\n  padding-left: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUQ7O0FBRUE7Ozs7Ozs7Ozs7OztHQUFBOztBQW1CQTtFQUdJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVNJO0VBQ0ksbUJBZkE7QUFRUjs7QUFTUTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUFQWjs7QUFTWTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtBQVBoQjs7QUFXUTtFQUNJLGVBQUE7RUFDQSxnQkE1Qkc7RUE2QkgsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFUWjs7QUFXWTtFQUNJLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFUaEI7O0FBV2dCO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBVHBCOztBQVlnQjtFQUNJLG1CQUFBO0FBVnBCOztBQWdCSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBZFI7O0FBa0JZO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBaEJoQjs7QUFtQlk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7QUFqQmhCOztBQXNCSTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUFwQlI7O0FBMEJRO0VBQ0ksZUFBQTtBQXZCWjs7QUF5Qlk7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBdkJoQjs7QUEwQlk7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUF4QmhCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHlcclxue1xyXG5cdGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcblx0Y29sb3I6ICM5OTk7XHJcblx0Zm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4vKiAuZ2VuZXJhbCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuZ2VuZXJhbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufSAqL1xyXG5cclxuJGNvbG9yOiAjNGI0YjRiO1xyXG4kYmc6ICNGRkY7XHJcblxyXG4vL0BpbXBvcnQgJ3NyYy9zdHlsZXMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICAkbWF4V2lkdGg6IDgwMHB4O1xyXG5cclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuXHJcbiAgICAuZXhhbXBsZS1uYXYtYmFyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcblxyXG4gICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkY29sb3IsIDIpO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsMCwwLC4wNzUpO1xyXG5cclxuICAgICAgICAgICAgPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoI0ZGRiwgLjEpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6ICRtYXhXaWR0aDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCRjb2xvciwgMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICY6bm90KC5hY3RpdmUpOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRjb2xvciwgMyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5leGFtcGxlIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgPiBzZWN0aW9uIHtcclxuXHJcbiAgICAgICAgICAgID4gaDMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLCAzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiBoNSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODg4ODtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRjb2xvciwgLjQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXIge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC00cHggMCAyMHB4IHJnYmEoMCwwLDAsLjA3NSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0OjpuZy1kZWVwIHtcclxuICAgIC5zZWFyY2gtbGlzdCB7XHJcbiAgICAgICAgLnNlYXJjaC1saXN0LWl0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gICAgICAgICAgICA+IGltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjREREO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var node_modules_ngx_contact_list___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! node_modules/ngx-contact-list/ */ 633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        node_modules_ngx_contact_list___WEBPACK_IMPORTED_MODULE_8__.NgxContactListModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        node_modules_ngx_contact_list___WEBPACK_IMPORTED_MODULE_8__.NgxContactListModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map