(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\minaBlog\blog-front\src\main.ts */"zUnb");


/***/ }),

/***/ "1tBJ":
/*!**********************************************!*\
  !*** ./src/app/service/post/post.service.ts ***!
  \**********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.api.service */ "Uv/h");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PostService extends _base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseAPIService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.searchSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.loadingSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ROUTES = {
            save: '/api/post',
            view: '/api/post/view/:id',
            list: '/api/post/list',
            searchList: '/api/post/list/:type/:value',
            categorizedList: '/api/post/list/category/:categoryId',
            topNList: '/api/post/topN/list/:topN',
            recommendList: '/api/post/recommend/list',
            replyList: '/api/post/reply/list/:postId',
            saveReply: '/api/post/reply',
            tagList: '/api/post/tag/list'
        };
    }
    list() {
        return this.GET(this.ROUTES.list).toPromise();
    }
    searchList(type, value) {
        return this.GET(this.ROUTES.searchList, { type, value }).toPromise();
    }
    categorizedList(categoryId) {
        return this.GET(this.ROUTES.categorizedList, { categoryId }).toPromise();
    }
    topNList(topN) {
        return this.GET(this.inject(this.ROUTES.topNList, { topN })).toPromise();
    }
    recommendList(postId, categoryId, tagList = []) {
        return this.POST(this.ROUTES.recommendList, { postId, categoryId, tagList }).toPromise();
    }
    view(id) {
        return this.GET(this.inject(this.ROUTES.view, { id })).toPromise();
    }
    save(post) {
        return this.POST(this.ROUTES.save, post).toPromise();
    }
    edit(post) {
        return this.PATCH(this.ROUTES.save, post).toPromise();
    }
    replyList(postId) {
        return this.GET(this.inject(this.ROUTES.replyList, { postId })).toPromise();
    }
    saveReply(reply) {
        return this.POST(this.ROUTES.saveReply, { reply }).toPromise();
    }
    tagList() {
        return this.GET(this.ROUTES.tagList).toPromise();
    }
    fromEvent() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            //   const handler = (e) => observer.next(e);
            //   // 대상 엘리먼트에 이벤트 핸들러를 추가합니다.
            //   target.addEventListener(eventName, handler);
            //   return () => {
            //     // 이벤트 핸들러를 제거합니다.
            //     target.removeEventListener(eventName, handler);
            //   };
            observer.next('!!!');
        });
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "3nM9":
/*!******************************************************************!*\
  !*** ./src/app/components/post/post-left/post-left.component.ts ***!
  \******************************************************************/
/*! exports provided: PostLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLeftComponent", function() { return PostLeftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-meta/post-meta.component */ "AK7D");





function PostLeftComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLeftComponent_div_0_div_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.router.navigate(["post", "view", ctx_r3.post.id]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx_r1.post.thumbnail, ")");
} }
function PostLeftComponent_div_0_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.post.category.name);
} }
function PostLeftComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostLeftComponent_div_0_div_1_Template, 3, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostLeftComponent_div_0_p_3_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLeftComponent_div_0_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.router.navigate(["post", "view", ctx_r5.post.id]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-post-meta", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.post.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.catShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.setContent(ctx_r0.post.content));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("createdAt", ctx_r0.post.createdAt)("viewCount", ctx_r0.post.view)("replyCount", ctx_r0.post.replyCount);
} }
class PostLeftComponent {
    constructor(router) {
        this.router = router;
        this.catShow = true;
    }
    ngOnInit() {
        console.log(this.post);
    }
    setContent(content) {
        let newContent = content ? content.replace(/<[^>]*>/g, "") : '';
        return newContent.length > 180 ? newContent.substring(0, 180) + '...' : newContent;
    }
}
PostLeftComponent.ɵfac = function PostLeftComponent_Factory(t) { return new (t || PostLeftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PostLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostLeftComponent, selectors: [["app-post-left"]], inputs: { post: "post", catShow: "catShow" }, decls: 1, vars: 1, consts: [["class", "row post-left post animate-opacity", 4, "ngIf"], [1, "row", "post-left", "post", "animate-opacity"], ["class", "col-md-6 col-sm-12", 4, "ngIf"], [1, "post-body", "col"], ["class", "post-cat", 4, "ngIf"], [1, "post-title"], [3, "click"], [1, "post-text"], [3, "createdAt", "viewCount", "replyCount"], [1, "col-md-6", "col-sm-12"], [1, "post-thumb"], [1, "thumb-img", 3, "click"], [1, "post-cat"]], template: function PostLeftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostLeftComponent_div_0_Template, 10, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_3__["PostMetaComponent"]], styles: [".post-left[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  display: flex;\n  align-items: start;\n}\n.post-left[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%] {\n  padding-bottom: 75% !important;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.post-left[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.post-left[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]   .post-title[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n@media screen and (min-width: 768px) {\n  .post-left[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%] {\n    padding-bottom: 60% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QtbGVmdC9wb3N0LWxlZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKO0FBV0k7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVRSO0FBVVE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBUlo7QUFjUTtFQUNJLGVBQUE7QUFaWjtBQWVJO0VBQ0k7SUFDSSw4QkFBQTtFQWJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC1sZWZ0L3Bvc3QtbGVmdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LWxlZnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICBcclxuICAgIC8vIC5wb3N0LXRodW1iIHtcclxuICAgIC8vICAgICAvL3dpZHRoOiA1MCU7XHJcbiAgICAvLyAgICAgLy9tYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAvLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC8vICAgICBpbWcge1xyXG4gICAgLy8gICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAvLyAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLnBvc3QtdGh1bWIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3NSUhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAudGh1bWItaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wb3N0LWJvZHkge1xyXG4gICAgICAgIC8vd2lkdGg6IDUwJTtcclxuICAgICAgICAucG9zdC10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5wb3N0LXRodW1iIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDYwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostLeftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-left',
                templateUrl: './post-left.component.html',
                styleUrls: ['./post-left.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], catShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "624D":
/*!*************************************!*\
  !*** ./src/app/shared/ui.module.ts ***!
  \*************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");











class UiModule {
}
UiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UiModule });
UiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UiModule_Factory(t) { return new (t || UiModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"].forRoot({
                customOptions: [{
                        import: 'formats/font',
                        whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
                    }]
            }),
        ], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"]], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"].forRoot({
                        customOptions: [{
                                import: 'formats/font',
                                whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
                            }]
                    }),
                ],
                exports: [
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "6erw":
/*!**************************************************!*\
  !*** ./src/app/store/setting/setting.actions.ts ***!
  \**************************************************/
/*! exports provided: setSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSettings", function() { return setSettings; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const setSettings = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Set setting', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "7aL3":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



const _c0 = ["Modal"];
function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add a Word");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CLOSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_ng_template_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.save.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](15, 2);
} }
const _c1 = [[["", "body", ""]], [["", "right-side", ""]], [["", "kiki", ""]]];
const _c2 = ["[body]", "[right-side]", "[kiki]"];
class ModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    open() {
        this.modalService.open(this.Modal);
    }
    close() {
        this.modalService.dismissAll();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Modal = _t.first);
    } }, outputs: { save: "save" }, ngContentSelectors: _c2, decls: 2, vars: 0, consts: [["Modal", ""], [1, "modal-header"], [1, "modal-title", "text-center"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-default", "btn-link", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-link", 3, "click"], [1, "right-side-wrapper"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalComponent_ng_template_0_Template, 16, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, styles: [".modal-dialog[_ngcontent-%COMP%] {\n  max-width: 1000px !important;\n}\n\n.side-right-wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -34vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDoxMDAwcHggIWltcG9ydGFudDtcclxufVxyXG4uc2lkZS1yaWdodC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMzR2aDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal',
                templateUrl: './modal.component.html',
                styleUrls: ['./modal.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, { Modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['Modal']
        }], save: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "9pw4":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _table_row_table_row_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-row/table-row.component */ "vVKM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pagenation_pagenation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pagenation/pagenation.component */ "e2sg");





function TableComponent_div_0_tr_5_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r5);
} }
function TableComponent_div_0_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_div_0_tr_5_th_1_Template, 2, 1, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.titles);
} }
function TableComponent_div_0_tr_7_ng_container_1_td_1_ng_template_1_Template(rf, ctx) { }
function TableComponent_div_0_tr_7_ng_container_1_td_1_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r14.getVal(data_r6, row_r10.val), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TableComponent_div_0_tr_7_ng_container_1_td_1_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r15.getVal(data_r6, row_r10.val)), " ");
} }
function TableComponent_div_0_tr_7_ng_container_1_td_1_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.getVal(data_r6, row_r10.val));
} }
function TableComponent_div_0_tr_7_ng_container_1_td_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_div_0_tr_7_ng_container_1_td_1_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_div_0_tr_7_ng_container_1_td_1_ng_template_2_ng_template_2_Template, 2, 3, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_div_0_tr_7_ng_container_1_td_1_ng_template_2_ng_template_3_Template, 1, 1, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", row_r10.type);
} }
const _c0 = function (a0) { return { row: a0 }; };
function TableComponent_div_0_tr_7_ng_container_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_div_0_tr_7_ng_container_1_td_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_div_0_tr_7_ng_container_1_td_1_ng_template_2_Template, 4, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const data_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", row_r10.width ? row_r10.width : null, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r10.column)("ngIfElse", _r12)("ngTemplateOutlet", row_r10.column)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, data_r6));
} }
function TableComponent_div_0_tr_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_div_0_tr_7_ng_container_1_td_1_Template, 4, 8, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.rows);
} }
function TableComponent_div_0_tr_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_div_0_tr_7_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const data_r6 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.rowSelect.emit(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_div_0_tr_7_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", data_r6.id && data_r6.id == ctx_r2.selectedId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r7 >= _r3.startRow && i_r7 <= _r3.endRow);
} }
function TableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableComponent_div_0_tr_5_Template, 2, 1, "tr", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableComponent_div_0_tr_7_Template, 2, 3, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-pagenation", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total ", ctx_r0.dataList.length, " posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.titles.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dataList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currPage", 1)("totalCount", ctx_r0.dataList.length)("blockCount", ctx_r0.pageCount);
} }
class TableComponent {
    constructor() {
        this.rowSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.titles = [];
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.titles = this.rows.map(r => {
            return r.title;
        });
    }
    getVal(data, val) {
        if (typeof val === 'string') {
            return data[val];
        }
        let list = val;
        let value;
        list.forEach(l => {
            if (value) {
                value = value[l];
            }
            else {
                value = data[l];
            }
        });
        return value;
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], contentQueries: function TableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _table_row_table_row_component__WEBPACK_IMPORTED_MODULE_1__["TableRowComponent"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rows = _t);
    } }, inputs: { dataList: "dataList", selectedId: "selectedId", pageCount: "pageCount" }, outputs: { rowSelect: "rowSelect" }, decls: 1, vars: 1, consts: [["class", "m-table", 4, "ngIf"], [1, "m-table"], [1, "table", "custom-table"], [4, "ngIf"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "currPage", "totalCount", "blockCount"], ["page", ""], [4, "ngFor", "ngForOf"], [3, "click"], [3, "width", 4, "ngFor", "ngForOf"], [3, "ngIf", "ngIfElse", "ngTemplateOutlet", "ngTemplateOutletContext"], ["elseBlock", ""], [3, "ngSwitch"], ["ngSwitchCase", "image"], ["ngSwitchCase", "date"], ["ngSwitchDefault", ""], [3, "src"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableComponent_div_0_Template, 10, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _pagenation_pagenation_component__WEBPACK_IMPORTED_MODULE_3__["PagenationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover {\n  background: #20a8d859;\n}\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr.selected[_ngcontent-%COMP%] {\n  background: #20a8d859;\n}\n.custom-table[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 50px;\n  max-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7QUFBUjtBQUNRO0VBQ0kscUJBQUE7QUFDWjtBQUNRO0VBQ0kscUJBQUE7QUFDWjtBQUVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS10YWJsZSB7XHJcbiAgICB0Ym9keSA+IHRyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMGE4ZDg1OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMGE4ZDg1OTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss']
            }]
    }], function () { return []; }, { dataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_1__["TableRowComponent"]]
        }] }); })();


/***/ }),

/***/ "AK7D":
/*!******************************************************************!*\
  !*** ./src/app/components/post/post-meta/post-meta.component.ts ***!
  \******************************************************************/
/*! exports provided: PostMetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMetaComponent", function() { return PostMetaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PostMetaComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r0.createdAt));
} }
function PostMetaComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.viewCount);
} }
function PostMetaComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.replyCount);
} }
class PostMetaComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostMetaComponent.ɵfac = function PostMetaComponent_Factory(t) { return new (t || PostMetaComponent)(); };
PostMetaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostMetaComponent, selectors: [["app-post-meta"]], inputs: { createdAt: "createdAt", viewCount: "viewCount", replyCount: "replyCount" }, decls: 4, vars: 3, consts: [[1, "post-meta-wrapper"], ["class", "meta-item mr-2", 4, "ngIf"], ["class", "meta-item", 4, "ngIf"], [1, "meta-item", "mr-2"], [1, "icon-calendar", "mr-2"], [1, "icon", "icon-check", "mr-2"], [1, "meta-item"], [1, "icon-comment2", "mr-2"]], template: function PostMetaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostMetaComponent_span_1_Template, 5, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostMetaComponent_span_2_Template, 4, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostMetaComponent_span_3_Template, 4, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.createdAt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.replyCount);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".post-meta-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n  font-size: 11.5px;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QtbWV0YS9wb3N0LW1ldGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LW1ldGEvcG9zdC1tZXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtbWV0YS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostMetaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-meta',
                templateUrl: './post-meta.component.html',
                styleUrls: ['./post-meta.component.scss']
            }]
    }], function () { return []; }, { createdAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], replyCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDCMQkI0U_QfF0ef8tn0erohOFRAJD5F7Y",
        authDomain: "minaproject-223904.firebaseapp.com",
        databaseURL: "https://minaproject-223904.firebaseio.com",
        projectId: "minaproject-223904",
        storageBucket: "minaproject-223904.appspot.com",
        messagingSenderId: "893154801183",
        appId: "1:893154801183:web:02ff988c23aab7f24cc72a",
        measurementId: "G-YRKVBMFTJ7"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B6+u":
/*!***************************************************************!*\
  !*** ./src/app/layout/blog-layout/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["blog-footer"]], decls: 4, vars: 0, consts: [[1, "blog-footer", "py-5"], [1, "container"], [1, "m-0", "text-center", "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \u00A9 Mina Choi 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".blog-footer[_ngcontent-%COMP%] {\n  background: var(--blog-footer-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Jsb2ctbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Jsb2ctbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibG9nLWZvb3Rlci1jb2xvcik7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'blog-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FrU0":
/*!************************************************************!*\
  !*** ./src/app/layout/admin-layout/admin-layout.module.ts ***!
  \************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ "ZTs3");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-layout.component */ "o9f7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










class AdminLayoutModule {
}
AdminLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminLayoutModule });
AdminLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminLayoutModule_Factory(t) { return new (t || AdminLayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppAsideModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumbModule"].forRoot(),
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppFooterModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppHeaderModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppSidebarModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminLayoutModule, { declarations: [_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumbModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppFooterModule"],
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppHeaderModule"],
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppSidebarModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]], exports: [_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppAsideModule"],
                    _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppBreadcrumbModule"].forRoot(),
                    _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppFooterModule"],
                    _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppHeaderModule"],
                    _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AppSidebarModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"]
                ],
                declarations: [
                    _admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"]
                ],
                exports: [
                    _admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Hebn":
/*!********************************************!*\
  !*** ./src/app/store/post/post.actions.ts ***!
  \********************************************/
/*! exports provided: setPostCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPostCategories", function() { return setPostCategories; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const setPostCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Set categories', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "HnAg":
/*!**************************************************!*\
  !*** ./src/app/service/admin/setting.service.ts ***!
  \**************************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.api.service */ "Uv/h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class SettingService extends _base_api_service__WEBPACK_IMPORTED_MODULE_2__["BaseAPIService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.ROUTES = {
            list: '/api/setting/list',
            save: '/api/setting',
            edit: '/api/setting',
            view: '/api/setting/:id',
            selectedView: '/api/setting'
        };
    }
    list() {
        return this.GET(this.ROUTES.list).toPromise();
    }
    view(id) {
        return this.GET(this.inject(this.ROUTES.view, { id })).toPromise();
    }
    selectedView() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.setting = yield this.GET(this.ROUTES.selectedView).toPromise();
            return this.setting;
        });
    }
    getSetting() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.setting) {
                return this.setting;
            }
            else {
                return this.selectedView();
            }
        });
    }
    save(settingList, profileImage, profileDesc) {
        return this.http.post(this.ROUTES.save, { settingList, profileImage, profileDesc }).toPromise();
    }
    edit(setting) {
        return this.http.patch(this.ROUTES.save, { setting }).toPromise();
    }
}
SettingService.ɵfac = function SettingService_Factory(t) { return new (t || SettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SettingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SettingService, factory: SettingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "IlLS":
/*!****************************************!*\
  !*** ./src/app/store/index.reducer.ts ***!
  \****************************************/
/*! exports provided: reducers, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _post_post_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post/post.reducer */ "Nx5J");
/* harmony import */ var _setting_setting_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setting/setting.reducer */ "c07R");



const reducers = {
    post: _post_post_reducer__WEBPACK_IMPORTED_MODULE_1__["postReducer"],
    setting: _setting_setting_reducer__WEBPACK_IMPORTED_MODULE_2__["settingReducer"]
};
const productionReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers);
function reducer(state, action) {
    return productionReducer(state, action);
}


/***/ }),

/***/ "Np0w":
/*!*******************************************************************!*\
  !*** ./src/app/layout/blog-layout/side-bar/side-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_store_post_post_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/post/post.reducer */ "Nx5J");
/* harmony import */ var src_app_store_setting_setting_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/setting/setting.reducer */ "c07R");
/* harmony import */ var src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/post/post.service */ "1tBJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_other_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/other/login.service */ "mkk2");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/post/post-edit/post-edit.component */ "cppd");
/* harmony import */ var _components_post_post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/post/post-meta/post-meta.component */ "AK7D");












function SideBarComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_div_0_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r5.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New Post!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SideBarComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_div_0_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "LOGIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SideBarComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_div_0_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "LOGOUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SideBarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-post-edit", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("saveEvent", function SideBarComponent_div_0_Template_app_post_edit_saveEvent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.getData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SideBarComponent_div_0_button_3_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SideBarComponent_div_0_button_4_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SideBarComponent_div_0_button_5_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isLogin);
} }
function SideBarComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const tag_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.router.navigate(["post", "list", "tag", tag_r17.name]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r17.name);
} }
function SideBarComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_li_27_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const cat_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.router.navigate(["post", "cat", "list", cat_r20.id]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", cat_r20.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", cat_r20.postCount, ")");
} }
function SideBarComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_div_32_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const post_r23 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.router.navigate(["post", "view", post_r23.id]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_div_32_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const post_r23 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.router.navigate(["post", "view", post_r23.id]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-post-meta", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("background-image: url(", post_r23.thumbnail, ");");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r23.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("viewCount", post_r23.view)("replyCount", post_r23.replyCount);
} }
class SideBarComponent {
    constructor(postService, router, route, loginService, store) {
        this.postService = postService;
        this.router = router;
        this.route = route;
        this.loginService = loginService;
        this.store = store;
        this.categoryAllCount = 0;
        this.isLogin = true;
        this.isAdmin = this.route.snapshot.queryParams.isAdmin || '';
        this.setCategoryListCount = (categoryList) => {
            this.categoryList = categoryList;
            this.categoryAllCount = categoryList.reduce((a, b) => a + b.postCount, 0);
        };
        store
            .select(src_app_store_post_post_reducer__WEBPACK_IMPORTED_MODULE_2__["selectPostCategories"])
            .subscribe(this.setCategoryListCount);
        this.profile$ = store.select(src_app_store_setting_setting_reducer__WEBPACK_IMPORTED_MODULE_3__["selectProfile"]);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getTopNList();
            this.getTagList();
            this.isLogin = yield this.loginService.isAdmin();
        });
    }
    getTopNList() {
        this.postService.topNList(3)
            .then(r => {
            console.log(r, 'topNLISt');
            this.topNList = r;
        });
    }
    getTagList() {
        this.postService.tagList()
            .then(r => {
            console.log(r, 'tagLsit');
            this.tagList = r;
        });
    }
    getData() {
        //this.postService.searchSub$.next();
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loginService.login();
            this.isLogin = yield this.loginService.isAdmin();
            this.router.navigate(['post', 'home'], { replaceUrl: true });
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loginService.logout();
            this.isLogin = yield this.loginService.isAdmin();
            this.router.navigate(['post', 'home'], { replaceUrl: true });
        });
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_other_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["side-bar"]], decls: 43, vars: 11, consts: [["class", "mb-4", 4, "ngIf"], [1, "side-widget-item"], [1, "widget-title", "blog-title"], [1, "widget-body"], [1, "input-group", "mn-search-wrapper"], ["type", "text", "placeholder", "Search..", 1, "form-control", 3, "keyup.enter"], ["searchInput", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], [1, "fa", "fa-search"], [1, "tagcloud-wrapper"], ["class", "tagcloud-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "mn-sidecat-wrapper"], [3, "click"], [4, "ngFor", "ngForOf"], [1, "widget-body", "post-side-wrapper"], ["class", "post-side post", 4, "ngFor", "ngForOf"], ["routerLink", "/post/profile", 1, "profile-image"], [3, "src"], [1, "mn-profile-text", "mt-3"], [1, "mb-4"], [3, "saveEvent"], ["edit", ""], ["class", "btn btn-sm btn-outline-dark mr-2", 3, "click", 4, "ngIf"], ["class", "btn btn-sm btn-outline-dark", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-dark", "mr-2", 3, "click"], [1, "btn", "btn-sm", "btn-outline-dark", 3, "click"], [1, "tagcloud-item", 3, "click"], [1, "post-side", "post"], [1, "post-thumb", 3, "click"], [1, "post-body"], [1, "post-title", 3, "click"], [3, "viewCount", "replyCount"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SideBarComponent_div_0_Template, 6, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "SEARCH POSTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function SideBarComponent_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); return ctx.router.navigate(["post", "list", "search", _r1.value]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); return ctx.router.navigate(["post", "list", "search", _r1.value]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "TAG CLOUD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SideBarComponent_a_16_Template, 2, 1, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "CATEGORIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SideBarComponent_Template_a_click_23_listener() { return ctx.router.navigate(["post", "cat", "list", 0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SideBarComponent_li_27_Template, 5, 2, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "POPULAR POSTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SideBarComponent_div_32_Template, 6, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tagList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx.categoryAllCount, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.topNList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 7, ctx.profile$).image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 9, ctx.profile$).text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _components_post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_9__["PostEditComponent"], _components_post_post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_10__["PostMetaComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".profile-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.profile-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n}\n.post-side-wrapper[_ngcontent-%COMP%]   .post-side[_ngcontent-%COMP%] {\n  position: relative;\n}\n.post-side-wrapper[_ngcontent-%COMP%]   .post-side[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%] {\n  display: block;\n  width: 70px;\n  height: 70px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.post-side-wrapper[_ngcontent-%COMP%]   .post-side[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%] {\n  margin-left: 90px;\n}\n.post-side-wrapper[_ngcontent-%COMP%]   .post-side[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]   .bottom-item-wrapper[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.post-side-wrapper[_ngcontent-%COMP%]   .post-side[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #f0f0f0;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  min-height: 90px;\n}\nul.mn-sidecat-wrapper[_ngcontent-%COMP%] {\n  list-style: outside none none;\n  margin: 0;\n  padding: 0;\n}\nul.mn-sidecat-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  border-bottom: 1px solid #e8e8e8;\n  cursor: pointer;\n}\nul.mn-sidecat-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #000000;\n}\nul.mn-sidecat-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  color: #646464;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-right: 30px;\n  font-size: 15px;\n}\nul.mn-sidecat-wrapper[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0;\n  z-index: 2;\n  transition: all 0.3s ease-out;\n}\n.mn-search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: #f3f3f3;\n}\n.mn-search-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  outline: none;\n  z-index: 0;\n  border: 1px solid #000000;\n}\n.side-widget-item[_ngcontent-%COMP%] {\n  padding-bottom: 60px;\n}\n.side-widget-item[_ngcontent-%COMP%]   .widget-title[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  font-size: 16px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Jsb2ctbGF5b3V0L3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0ksV0FBQTtBQVRKO0FBVUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUlI7QUFhSTtFQUNJLGtCQUFBO0FBVlI7QUFXUTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBVFo7QUFXUTtFQUNJLGlCQUFBO0FBVFo7QUFVWTtFQUNJLGVBQUE7QUFSaEI7QUFXUTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVFo7QUFlQTtFQUNJLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFaSjtBQWFJO0VBQ0ksa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFYUjtBQVlRO0VBQ0ksZ0NBQUE7QUFWWjtBQVlRO0VBQ0ksa0JBQUE7RUFDUixjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFWSjtBQVdJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBS0EsMkJBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUtBLDZCQUFBO0FBVFI7QUFnQkk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFiUjtBQWNJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBWlI7QUFpQkE7RUFDSSxvQkFBQTtBQWRKO0FBZUk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWJSIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Jsb2ctbGF5b3V0L3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnNpZGViYXItd3JhcHBlciB7XHJcbi8vICAgICAvL2Zsb2F0OiByaWdodDtcclxuLy8gICAgIC8vd2lkdGg6IDMwMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vIFx0Ly9yaWdodDogMDtcclxuLy8gICAgIHotaW5kZXg6IDEwMDA7XHJcbi8vIH1cclxuXHJcblxyXG4ucHJvZmlsZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLnBvc3Qtc2lkZS13cmFwcGVyIHtcclxuICAgIC5wb3N0LXNpZGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAucG9zdC10aHVtYiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBvc3QtYm9keSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG4gICAgICAgICAgICAuYm90dG9tLWl0ZW0td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxudWwubW4tc2lkZWNhdC13cmFwcGVyIHtcclxuICAgIGxpc3Qtc3R5bGU6IG91dHNpZGUgbm9uZSBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICM2NDY0NjQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm1uLXNlYXJjaC13cmFwcGVyIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaWRlLXdpZGdldC1pdGVtIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgLndpZGdldC10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.scss']
            }]
    }], function () { return [{ type: src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: src_app_service_other_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }]; }, null); })();


/***/ }),

/***/ "Nx5J":
/*!********************************************!*\
  !*** ./src/app/store/post/post.reducer.ts ***!
  \********************************************/
/*! exports provided: postCategory, postState, postReducer, selectPostCategories, selectNavCategories, selectEditCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postCategory", function() { return postCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postState", function() { return postState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postReducer", function() { return postReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostCategories", function() { return selectPostCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNavCategories", function() { return selectNavCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEditCategories", function() { return selectEditCategories; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _post_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.actions */ "Hebn");


const postCategory = [];
const postState = {
    categories: []
};
const postReducer = (state, action) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(postState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_post_actions__WEBPACK_IMPORTED_MODULE_1__["setPostCategories"], (state, { categories }) => {
    return Object.assign(Object.assign({}, state), { categories: categories });
}))(state, action);
const selectPostCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.post, (state) => state.categories);
const selectNavCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.post, (state) => state.categories.filter(c => c.sideShow).map(c => ({ id: c.id, name: c.name })));
const selectEditCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.post, (state) => state.categories.map(c => ({ id: c.id, name: c.name })));


/***/ }),

/***/ "O5Os":
/*!*******************************************************************!*\
  !*** ./src/app/components/image-upload/image-upload.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_other_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/other/upload.service */ "uELl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ImageUploadComponent_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageUploadComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.imageThumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ImageUploadComponent {
    constructor(uploadService) {
        this.uploadService = uploadService;
        this.imageThumbnail = '';
        this.upload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    processFile(imageFile) {
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            const uploadData = new FormData();
            uploadData.append('file', imageFile, imageFile.name);
            this.uploadService.uploadImage(uploadData)
                .then(r => {
                this.imageThumbnail = r.imageUrl;
                this.upload.emit(r.imageUrl);
            });
        });
        reader.readAsDataURL(imageFile);
    }
}
ImageUploadComponent.ɵfac = function ImageUploadComponent_Factory(t) { return new (t || ImageUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_other_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"])); };
ImageUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageUploadComponent, selectors: [["app-image-upload"]], inputs: { imageThumbnail: "imageThumbnail" }, outputs: { upload: "upload" }, decls: 5, vars: 2, consts: [[1, "col-12", "file-container"], ["type", "file", 3, "change"], ["fileRef", ""], ["for", "fileReg", 4, "ngIf"], ["class", "thumbnail", "error", "", 3, "src", 4, "ngIf"], ["for", "fileReg"], ["error", "", 1, "thumbnail", 3, "src"]], template: function ImageUploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageUploadComponent_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.processFile(_r0.files[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageUploadComponent_label_3_Template, 2, 0, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ImageUploadComponent_img_4_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imageThumbnail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageThumbnail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".file-container[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 200px;\n  padding: 2rem;\n  text-align: center;\n  border: dashed 1px #979797;\n  position: relative;\n  margin: 0 auto;\n}\n.file-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.file-container[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  max-width: 350px;\n  max-height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbWFnZS11cGxvYWQvaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUNSO0FBQ007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLXVwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IGRhc2hlZCAxcHggIzk3OTc5NztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvOyBcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgICAgLnRodW1ibmFpbCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageUploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-upload',
                templateUrl: './image-upload.component.html',
                styleUrls: ['./image-upload.component.scss']
            }]
    }], function () { return [{ type: src_app_service_other_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"] }]; }, { imageThumbnail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], upload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'front-end-why';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Jua&family=Noto+Sans+KR:wght@100;300;400;500&family=Noto+Serif+KR:wght@300;400;500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Hi+Melody&display=swap\");\n\n.ql-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.ql-container.ql-disabled[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   ul[data-checked][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  pointer-events: none;\n}\n.ql-clipboard[_ngcontent-%COMP%] {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  cursor: text;\n}\n.ql-editor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: '\\2022';\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before, .ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: '\\2611';\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: '\\2610';\n}\n.ql-editor[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-direction-rtl[_ngcontent-%COMP%]::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.ql-direction-rtl), .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-direction-rtl[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.ql-direction-rtl[_ngcontent-%COMP%] {\n  padding-right: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%] {\n  counter-increment: list-1;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%]:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%] {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%] {\n  counter-increment: list-2;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%]:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%] {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%] {\n  counter-increment: list-3;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%]:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%] {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%] {\n  counter-increment: list-4;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%]:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%] {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%] {\n  counter-increment: list-5;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%]:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%] {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%] {\n  counter-increment: list-6;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%]:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%] {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%] {\n  counter-increment: list-7;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%]:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%] {\n  counter-reset: list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%] {\n  counter-increment: list-8;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%]:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%] {\n  counter-reset: list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-9[_ngcontent-%COMP%] {\n  counter-increment: list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-9[_ngcontent-%COMP%]:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-1[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-1.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 3em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-1.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 4.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-2[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-2.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 6em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-2.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 7.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-3[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-3.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 9em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-3.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 10.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-4[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-4.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 12em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-4.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 13.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-5[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-5.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 15em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-5.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 16.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-6[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-6.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 18em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-6.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 19.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-7[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-7.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 21em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-7.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 22.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-8[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-8.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 24em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-8.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 25.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-9[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-9[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-9.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 27em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-9.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 28.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-video[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-video.ql-align-center[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-video.ql-align-right[_ngcontent-%COMP%] {\n  margin: 0 0 0 auto;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-black[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-red[_ngcontent-%COMP%] {\n  background-color: #e60000;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-orange[_ngcontent-%COMP%] {\n  background-color: #f90;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-yellow[_ngcontent-%COMP%] {\n  background-color: #ff0;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-green[_ngcontent-%COMP%] {\n  background-color: #008a00;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-blue[_ngcontent-%COMP%] {\n  background-color: #06c;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-purple[_ngcontent-%COMP%] {\n  background-color: #93f;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-red[_ngcontent-%COMP%] {\n  color: #e60000;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-orange[_ngcontent-%COMP%] {\n  color: #f90;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-yellow[_ngcontent-%COMP%] {\n  color: #ff0;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-green[_ngcontent-%COMP%] {\n  color: #008a00;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-blue[_ngcontent-%COMP%] {\n  color: #06c;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-purple[_ngcontent-%COMP%] {\n  color: #93f;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-font-serif[_ngcontent-%COMP%] {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-font-monospace[_ngcontent-%COMP%] {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-size-small[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-size-large[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-size-huge[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-direction-rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-align-justify[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.ql-editor.ql-blank[_ngcontent-%COMP%]::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n\n.ql-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.ql-container.ql-disabled[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   ul[data-checked][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  pointer-events: none;\n}\n.ql-clipboard[_ngcontent-%COMP%] {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  cursor: text;\n}\n.ql-editor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: '\\2022';\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before, .ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: '\\2611';\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: '\\2610';\n}\n.ql-editor[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-direction-rtl[_ngcontent-%COMP%]::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.ql-direction-rtl), .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-direction-rtl[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.ql-direction-rtl[_ngcontent-%COMP%] {\n  padding-right: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%] {\n  counter-increment: list-1;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%]:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%] {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%] {\n  counter-increment: list-2;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%]:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%] {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%] {\n  counter-increment: list-3;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%]:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%] {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%] {\n  counter-increment: list-4;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%]:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%] {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%] {\n  counter-increment: list-5;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%]:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%] {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%] {\n  counter-increment: list-6;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%]:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%] {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%] {\n  counter-increment: list-7;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%]:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%] {\n  counter-reset: list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%] {\n  counter-increment: list-8;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%]:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%] {\n  counter-reset: list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-9[_ngcontent-%COMP%] {\n  counter-increment: list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-9[_ngcontent-%COMP%]:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-1[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-1.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 3em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-1.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 4.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-2[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-2.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 6em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-2.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 7.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-3[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-3.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 9em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-3.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 10.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-4[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-4.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 12em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-4.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 13.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-5[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-5.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 15em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-5.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 16.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-6[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-6.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 18em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-6.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 19.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-7[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-7.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 21em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-7.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 22.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-8[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-8.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 24em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-8.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 25.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-9[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-9[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-9.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 27em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-9.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 28.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-video[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-video.ql-align-center[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-video.ql-align-right[_ngcontent-%COMP%] {\n  margin: 0 0 0 auto;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-black[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-red[_ngcontent-%COMP%] {\n  background-color: #e60000;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-orange[_ngcontent-%COMP%] {\n  background-color: #f90;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-yellow[_ngcontent-%COMP%] {\n  background-color: #ff0;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-green[_ngcontent-%COMP%] {\n  background-color: #008a00;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-blue[_ngcontent-%COMP%] {\n  background-color: #06c;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-purple[_ngcontent-%COMP%] {\n  background-color: #93f;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-red[_ngcontent-%COMP%] {\n  color: #e60000;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-orange[_ngcontent-%COMP%] {\n  color: #f90;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-yellow[_ngcontent-%COMP%] {\n  color: #ff0;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-green[_ngcontent-%COMP%] {\n  color: #008a00;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-blue[_ngcontent-%COMP%] {\n  color: #06c;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-purple[_ngcontent-%COMP%] {\n  color: #93f;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-font-serif[_ngcontent-%COMP%] {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-font-monospace[_ngcontent-%COMP%] {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-size-small[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-size-large[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-size-huge[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-direction-rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-align-justify[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.ql-editor.ql-blank[_ngcontent-%COMP%]::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-bubble.ql-toolbar[_ngcontent-%COMP%]:after, .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  float: left;\n  height: 100%;\n}\n.ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:hover, .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:hover {\n  outline: none;\n}\n.ql-bubble.ql-toolbar[_ngcontent-%COMP%]   input.ql-image[type=file][_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   input.ql-image[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover, .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover, .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover, .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover, .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%] {\n  stroke: #fff;\n}\n@media (pointer: coarse) {\n  .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active), .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active) {\n    color: #ccc;\n  }\n  .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-fill[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke.ql-fill[_ngcontent-%COMP%] {\n    fill: #ccc;\n  }\n  .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke[_ngcontent-%COMP%], .ql-bubble.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke-miter[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke-miter[_ngcontent-%COMP%] {\n    stroke: #ccc;\n  }\n}\n.ql-bubble[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.ql-bubble[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-out-bottom[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-out-top[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateY(10px);\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip.ql-flip[_ngcontent-%COMP%] {\n  transform: translateY(-10px);\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%]:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #ccc;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #ccc;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%] {\n  fill: #ccc;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-empty[_ngcontent-%COMP%] {\n  fill: none;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-even[_ngcontent-%COMP%] {\n  fill-rule: evenodd;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-thin[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-stroke.ql-thin[_ngcontent-%COMP%] {\n  stroke-width: 1;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-transparent[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-direction[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-direction.ql-active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:last-child {\n  display: inline;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-direction.ql-active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:first-child {\n  display: none;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.17em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.83em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.67em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   pre.ql-syntax[_ngcontent-%COMP%] {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker[_ngcontent-%COMP%] {\n  color: #ccc;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%] {\n  background-color: #444;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-expanded[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%] {\n  color: #777;\n  z-index: 2;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-expanded[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%] {\n  fill: #777;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-expanded[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%] {\n  stroke: #777;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-expanded[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-icon-picker[_ngcontent-%COMP%] {\n  width: 28px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-icon-picker[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%] {\n  padding: 2px 4px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-icon-picker[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  right: 4px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-icon-picker[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%] {\n  padding: 4px 0px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-icon-picker[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%] {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker[_ngcontent-%COMP%]:not(.ql-color-picker):not(.ql-icon-picker)   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-label][_ngcontent-%COMP%]:not([data-label=''])::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-label[data-label][_ngcontent-%COMP%]:not([data-label=''])::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-label[data-label][_ngcontent-%COMP%]:not([data-label=''])::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-label][_ngcontent-%COMP%]:not([data-label=''])::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[data-label][_ngcontent-%COMP%]:not([data-label=''])::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-label][_ngcontent-%COMP%]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%] {\n  width: 98px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]::before {\n  content: 'Normal';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"1\"][_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"1\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 1';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"2\"][_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"2\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 2';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"3\"][_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"3\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 3';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"4\"][_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"4\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 4';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"5\"][_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"5\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 5';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"6\"][_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"6\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 6';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"1\"][_ngcontent-%COMP%]::before {\n  font-size: 2em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"2\"][_ngcontent-%COMP%]::before {\n  font-size: 1.5em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"3\"][_ngcontent-%COMP%]::before {\n  font-size: 1.17em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"4\"][_ngcontent-%COMP%]::before {\n  font-size: 1em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"5\"][_ngcontent-%COMP%]::before {\n  font-size: 0.83em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"6\"][_ngcontent-%COMP%]::before {\n  font-size: 0.67em;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%] {\n  width: 108px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]::before {\n  content: 'Sans Serif';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-label[data-value=serif][_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[data-value=serif][_ngcontent-%COMP%]::before {\n  content: 'Serif';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-label[data-value=monospace][_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[data-value=monospace][_ngcontent-%COMP%]::before {\n  content: 'Monospace';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[data-value=serif][_ngcontent-%COMP%]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[data-value=monospace][_ngcontent-%COMP%]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%] {\n  width: 98px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]::before {\n  content: 'Normal';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-label[data-value=small][_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=small][_ngcontent-%COMP%]::before {\n  content: 'Small';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-label[data-value=large][_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=large][_ngcontent-%COMP%]::before {\n  content: 'Large';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-label[data-value=huge][_ngcontent-%COMP%]::before, .ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=huge][_ngcontent-%COMP%]::before {\n  content: 'Huge';\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=small][_ngcontent-%COMP%]::before {\n  font-size: 10px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=large][_ngcontent-%COMP%]::before {\n  font-size: 18px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=huge][_ngcontent-%COMP%]::before {\n  font-size: 32px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-color-picker.ql-background[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-color-picker.ql-color[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%] {\n  margin: 8px 12px 8px 0px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%]:first-child {\n  margin-left: 12px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: 1px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%], .ql-bubble[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%] {\n  background-color: #444;\n  border-radius: 25px;\n  color: #fff;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip-arrow[_ngcontent-%COMP%] {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  content: \" \";\n  display: block;\n  left: 50%;\n  margin-left: -6px;\n  position: absolute;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%]:not(.ql-flip)   .ql-tooltip-arrow[_ngcontent-%COMP%] {\n  border-bottom: 6px solid #444;\n  top: -6px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip.ql-flip[_ngcontent-%COMP%]   .ql-tooltip-arrow[_ngcontent-%COMP%] {\n  border-top: 6px solid #444;\n  bottom: -6px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip.ql-editing[_ngcontent-%COMP%]   .ql-tooltip-editor[_ngcontent-%COMP%] {\n  display: block;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip.ql-editing[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip-editor[_ngcontent-%COMP%] {\n  display: none;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip-editor[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #fff;\n  font-size: 13px;\n  height: 100%;\n  outline: none;\n  padding: 10px 20px;\n  position: absolute;\n  width: 100%;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip-editor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  top: 10px;\n  position: absolute;\n  right: 20px;\n}\n.ql-bubble[_ngcontent-%COMP%]   .ql-tooltip-editor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  color: #ccc;\n  content: \"\\D7\";\n  font-size: 16px;\n  font-weight: bold;\n}\n.ql-container.ql-bubble[_ngcontent-%COMP%]:not(.ql-disabled)   a[_ngcontent-%COMP%] {\n  position: relative;\n  white-space: nowrap;\n}\n.ql-container.ql-bubble[_ngcontent-%COMP%]:not(.ql-disabled)   a[_ngcontent-%COMP%]::before {\n  background-color: #444;\n  border-radius: 15px;\n  top: -5px;\n  font-size: 12px;\n  color: #fff;\n  content: attr(href);\n  font-weight: normal;\n  overflow: hidden;\n  padding: 5px 15px;\n  text-decoration: none;\n  z-index: 1;\n}\n.ql-container.ql-bubble[_ngcontent-%COMP%]:not(.ql-disabled)   a[_ngcontent-%COMP%]::after {\n  border-top: 6px solid #444;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  top: 0;\n  content: \" \";\n  height: 0;\n  width: 0;\n}\n.ql-container.ql-bubble[_ngcontent-%COMP%]:not(.ql-disabled)   a[_ngcontent-%COMP%]::before, .ql-container.ql-bubble[_ngcontent-%COMP%]:not(.ql-disabled)   a[_ngcontent-%COMP%]::after {\n  left: 0;\n  margin-left: 50%;\n  position: absolute;\n  transform: translate(-50%, -100%);\n  transition: visibility 0s ease 200ms;\n  visibility: hidden;\n}\n.ql-container.ql-bubble[_ngcontent-%COMP%]:not(.ql-disabled)   a[_ngcontent-%COMP%]:hover::before, .ql-container.ql-bubble[_ngcontent-%COMP%]:not(.ql-disabled)   a[_ngcontent-%COMP%]:hover::after {\n  visibility: visible;\n}\n\n.ql-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 13px;\n  height: 100%;\n  margin: 0px;\n  position: relative;\n}\n.ql-container.ql-disabled[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.ql-container.ql-disabled[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   ul[data-checked][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  pointer-events: none;\n}\n.ql-clipboard[_ngcontent-%COMP%] {\n  left: -100000px;\n  height: 1px;\n  overflow-y: hidden;\n  position: absolute;\n  top: 50%;\n}\n.ql-clipboard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.ql-editor[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  line-height: 1.42;\n  height: 100%;\n  outline: none;\n  overflow-y: auto;\n  padding: 12px 15px;\n  tab-size: 4;\n  -moz-tab-size: 4;\n  text-align: left;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n.ql-editor[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  cursor: text;\n}\n.ql-editor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: '\\2022';\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before, .ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  color: #777;\n  cursor: pointer;\n  pointer-events: all;\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=true][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: '\\2611';\n}\n.ql-editor[_ngcontent-%COMP%]   ul[data-checked=false][_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  content: '\\2610';\n}\n.ql-editor[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  white-space: nowrap;\n  width: 1.2em;\n}\n.ql-editor[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.ql-direction-rtl)::before {\n  margin-left: -1.5em;\n  margin-right: 0.3em;\n  text-align: right;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-direction-rtl[_ngcontent-%COMP%]::before {\n  margin-left: 0.3em;\n  margin-right: -1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.ql-direction-rtl), .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-direction-rtl[_ngcontent-%COMP%], .ql-editor[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.ql-direction-rtl[_ngcontent-%COMP%] {\n  padding-right: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n  counter-increment: list-0;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: counter(list-0, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%] {\n  counter-increment: list-1;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%]:before {\n  content: counter(list-1, lower-alpha) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%] {\n  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%] {\n  counter-increment: list-2;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%]:before {\n  content: counter(list-2, lower-roman) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%] {\n  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%] {\n  counter-increment: list-3;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%]:before {\n  content: counter(list-3, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%] {\n  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%] {\n  counter-increment: list-4;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%]:before {\n  content: counter(list-4, lower-alpha) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%] {\n  counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%] {\n  counter-increment: list-5;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%]:before {\n  content: counter(list-5, lower-roman) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%] {\n  counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%] {\n  counter-increment: list-6;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%]:before {\n  content: counter(list-6, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%] {\n  counter-reset: list-7 list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%] {\n  counter-increment: list-7;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%]:before {\n  content: counter(list-7, lower-alpha) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%] {\n  counter-reset: list-8 list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%] {\n  counter-increment: list-8;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%]:before {\n  content: counter(list-8, lower-roman) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%] {\n  counter-reset: list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-9[_ngcontent-%COMP%] {\n  counter-increment: list-9;\n}\n.ql-editor[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.ql-indent-9[_ngcontent-%COMP%]:before {\n  content: counter(list-9, decimal) '. ';\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-1[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 3em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-1[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 4.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-1.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 3em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-1.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 4.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-2[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 6em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-2[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 7.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-2.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 6em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-2.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 7.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-3[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 9em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-3[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 10.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-3.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 9em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-3.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 10.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-4[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 12em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-4[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 13.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-4.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 12em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-4.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 13.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-5[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 15em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-5[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 16.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-5.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 15em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-5.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 16.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-6[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 18em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-6[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 19.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-6.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 18em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-6.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 19.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-7[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 21em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-7[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 22.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-7.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 21em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-7.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 22.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-8[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 24em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-8[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 25.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-8.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 24em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-8.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 25.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-9[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 27em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-9[_ngcontent-%COMP%]:not(.ql-direction-rtl) {\n  padding-left: 28.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-indent-9.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 27em;\n}\n.ql-editor[_ngcontent-%COMP%]   li.ql-indent-9.ql-direction-rtl.ql-align-right[_ngcontent-%COMP%] {\n  padding-right: 28.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-video[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-video.ql-align-center[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-video.ql-align-right[_ngcontent-%COMP%] {\n  margin: 0 0 0 auto;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-black[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-red[_ngcontent-%COMP%] {\n  background-color: #e60000;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-orange[_ngcontent-%COMP%] {\n  background-color: #f90;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-yellow[_ngcontent-%COMP%] {\n  background-color: #ff0;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-green[_ngcontent-%COMP%] {\n  background-color: #008a00;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-blue[_ngcontent-%COMP%] {\n  background-color: #06c;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-bg-purple[_ngcontent-%COMP%] {\n  background-color: #93f;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-red[_ngcontent-%COMP%] {\n  color: #e60000;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-orange[_ngcontent-%COMP%] {\n  color: #f90;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-yellow[_ngcontent-%COMP%] {\n  color: #ff0;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-green[_ngcontent-%COMP%] {\n  color: #008a00;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-blue[_ngcontent-%COMP%] {\n  color: #06c;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-color-purple[_ngcontent-%COMP%] {\n  color: #93f;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-font-serif[_ngcontent-%COMP%] {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-font-monospace[_ngcontent-%COMP%] {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-size-small[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-size-large[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-size-huge[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-direction-rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: inherit;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-align-justify[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n.ql-editor[_ngcontent-%COMP%]   .ql-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.ql-editor.ql-blank[_ngcontent-%COMP%]::before {\n  color: rgba(0,0,0,0.6);\n  content: attr(data-placeholder);\n  font-style: italic;\n  left: 15px;\n  pointer-events: none;\n  position: absolute;\n  right: 15px;\n}\n.ql-snow.ql-toolbar[_ngcontent-%COMP%]:after, .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  height: 24px;\n  padding: 3px 5px;\n  width: 28px;\n}\n.ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  float: left;\n  height: 100%;\n}\n.ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:hover, .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:hover {\n  outline: none;\n}\n.ql-snow.ql-toolbar[_ngcontent-%COMP%]   input.ql-image[type=file][_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   input.ql-image[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n.ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover, .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover, .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover, .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover, .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%] {\n  color: #06c;\n}\n.ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%] {\n  fill: #06c;\n}\n.ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button.ql-active[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-label.ql-active[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%] {\n  stroke: #06c;\n}\n@media (pointer: coarse) {\n  .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active), .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active) {\n    color: #444;\n  }\n  .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-fill[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke.ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke.ql-fill[_ngcontent-%COMP%] {\n    fill: #444;\n  }\n  .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke[_ngcontent-%COMP%], .ql-snow.ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke-miter[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.ql-active)   .ql-stroke-miter[_ngcontent-%COMP%] {\n    stroke: #444;\n  }\n}\n.ql-snow[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.ql-snow[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-out-bottom[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-out-top[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateY(10px);\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip.ql-flip[_ngcontent-%COMP%] {\n  transform: translateY(-10px);\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%]:after {\n  clear: both;\n  content: '';\n  display: table;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #444;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 2;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-stroke-miter[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #444;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-stroke.ql-fill[_ngcontent-%COMP%] {\n  fill: #444;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-empty[_ngcontent-%COMP%] {\n  fill: none;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-even[_ngcontent-%COMP%] {\n  fill-rule: evenodd;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-thin[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-stroke.ql-thin[_ngcontent-%COMP%] {\n  stroke-width: 1;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-transparent[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-direction[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:last-child {\n  display: none;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-direction.ql-active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:last-child {\n  display: inline;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-direction.ql-active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:first-child {\n  display: none;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.17em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.83em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.67em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  border-left: 4px solid #ccc;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding-left: 16px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  border-radius: 3px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  padding: 5px 10px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 85%;\n  padding: 2px 4px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   pre.ql-syntax[_ngcontent-%COMP%] {\n  background-color: #23241f;\n  color: #f8f8f2;\n  overflow: visible;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-editor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker[_ngcontent-%COMP%] {\n  color: #444;\n  display: inline-block;\n  float: left;\n  font-size: 14px;\n  font-weight: 500;\n  height: 24px;\n  position: relative;\n  vertical-align: middle;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: inline-block;\n  height: 100%;\n  padding-left: 8px;\n  padding-right: 2px;\n  position: relative;\n  width: 100%;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]::before {\n  display: inline-block;\n  line-height: 22px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: none;\n  min-width: 100%;\n  padding: 4px 8px;\n  position: absolute;\n  white-space: nowrap;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-expanded[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%] {\n  color: #ccc;\n  z-index: 2;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-expanded[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]   .ql-fill[_ngcontent-%COMP%] {\n  fill: #ccc;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-expanded[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]   .ql-stroke[_ngcontent-%COMP%] {\n  stroke: #ccc;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-expanded[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: -1px;\n  top: 100%;\n  z-index: 1;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-icon-picker[_ngcontent-%COMP%] {\n  width: 28px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-icon-picker[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%] {\n  padding: 2px 4px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-icon-picker[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  right: 4px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-icon-picker[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%] {\n  padding: 4px 0px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-icon-picker[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  padding: 2px 4px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%] {\n  padding: 3px 5px;\n  width: 152px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  float: left;\n  height: 16px;\n  margin: 2px;\n  padding: 0px;\n  width: 16px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker[_ngcontent-%COMP%]:not(.ql-color-picker):not(.ql-icon-picker)   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -9px;\n  right: 0;\n  top: 50%;\n  width: 18px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-label][_ngcontent-%COMP%]:not([data-label=''])::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-label[data-label][_ngcontent-%COMP%]:not([data-label=''])::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-label[data-label][_ngcontent-%COMP%]:not([data-label=''])::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-label][_ngcontent-%COMP%]:not([data-label=''])::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[data-label][_ngcontent-%COMP%]:not([data-label=''])::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-label][_ngcontent-%COMP%]:not([data-label=''])::before {\n  content: attr(data-label);\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%] {\n  width: 98px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]::before {\n  content: 'Normal';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"1\"][_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"1\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 1';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"2\"][_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"2\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 2';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"3\"][_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"3\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 3';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"4\"][_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"4\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 4';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"5\"][_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"5\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 5';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-label[data-value=\"6\"][_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"6\"][_ngcontent-%COMP%]::before {\n  content: 'Heading 6';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"1\"][_ngcontent-%COMP%]::before {\n  font-size: 2em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"2\"][_ngcontent-%COMP%]::before {\n  font-size: 1.5em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"3\"][_ngcontent-%COMP%]::before {\n  font-size: 1.17em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"4\"][_ngcontent-%COMP%]::before {\n  font-size: 1em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"5\"][_ngcontent-%COMP%]::before {\n  font-size: 0.83em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-header[_ngcontent-%COMP%]   .ql-picker-item[data-value=\"6\"][_ngcontent-%COMP%]::before {\n  font-size: 0.67em;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%] {\n  width: 108px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]::before {\n  content: 'Sans Serif';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-label[data-value=serif][_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[data-value=serif][_ngcontent-%COMP%]::before {\n  content: 'Serif';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-label[data-value=monospace][_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[data-value=monospace][_ngcontent-%COMP%]::before {\n  content: 'Monospace';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[data-value=serif][_ngcontent-%COMP%]::before {\n  font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-font[_ngcontent-%COMP%]   .ql-picker-item[data-value=monospace][_ngcontent-%COMP%]::before {\n  font-family: Monaco, Courier New, monospace;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%] {\n  width: 98px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]::before {\n  content: 'Normal';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-label[data-value=small][_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=small][_ngcontent-%COMP%]::before {\n  content: 'Small';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-label[data-value=large][_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=large][_ngcontent-%COMP%]::before {\n  content: 'Large';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-label[data-value=huge][_ngcontent-%COMP%]::before, .ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=huge][_ngcontent-%COMP%]::before {\n  content: 'Huge';\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=small][_ngcontent-%COMP%]::before {\n  font-size: 10px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=large][_ngcontent-%COMP%]::before {\n  font-size: 18px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-size[_ngcontent-%COMP%]   .ql-picker-item[data-value=huge][_ngcontent-%COMP%]::before {\n  font-size: 32px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-color-picker.ql-background[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-color-picker.ql-color[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n.ql-toolbar.ql-snow[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;\n  padding: 8px;\n}\n.ql-toolbar.ql-snow[_ngcontent-%COMP%]   .ql-formats[_ngcontent-%COMP%] {\n  margin-right: 15px;\n}\n.ql-toolbar.ql-snow[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  box-shadow: rgba(0,0,0,0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-expanded[_ngcontent-%COMP%]   .ql-picker-label[_ngcontent-%COMP%] {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow[_ngcontent-%COMP%]   .ql-picker.ql-expanded[_ngcontent-%COMP%]   .ql-picker-options[_ngcontent-%COMP%] {\n  border-color: #ccc;\n}\n.ql-toolbar.ql-snow[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-item.ql-selected[_ngcontent-%COMP%], .ql-toolbar.ql-snow[_ngcontent-%COMP%]   .ql-color-picker[_ngcontent-%COMP%]   .ql-picker-item[_ngcontent-%COMP%]:hover {\n  border-color: #000;\n}\n.ql-toolbar.ql-snow[_ngcontent-%COMP%]    + .ql-container.ql-snow[_ngcontent-%COMP%] {\n  border-top: 0px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: 0px 0px 5px #ddd;\n  color: #444;\n  padding: 5px 12px;\n  white-space: nowrap;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%]::before {\n  content: \"Visit URL:\";\n  line-height: 26px;\n  margin-right: 8px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  display: none;\n  border: 1px solid #ccc;\n  font-size: 13px;\n  height: 26px;\n  margin: 0px;\n  padding: 3px 5px;\n  width: 170px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%]   a.ql-preview[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 200px;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  vertical-align: top;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%]   a.ql-action[_ngcontent-%COMP%]::after {\n  border-right: 1px solid #ccc;\n  content: 'Edit';\n  margin-left: 16px;\n  padding-right: 8px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%]   a.ql-remove[_ngcontent-%COMP%]::before {\n  content: 'Remove';\n  margin-left: 8px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  line-height: 26px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip.ql-editing[_ngcontent-%COMP%]   a.ql-preview[_ngcontent-%COMP%], .ql-snow[_ngcontent-%COMP%]   .ql-tooltip.ql-editing[_ngcontent-%COMP%]   a.ql-remove[_ngcontent-%COMP%] {\n  display: none;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip.ql-editing[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip.ql-editing[_ngcontent-%COMP%]   a.ql-action[_ngcontent-%COMP%]::after {\n  border-right: 0px;\n  content: 'Save';\n  padding-right: 0px;\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[data-mode=link][_ngcontent-%COMP%]::before {\n  content: \"Enter link:\";\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[data-mode=formula][_ngcontent-%COMP%]::before {\n  content: \"Enter formula:\";\n}\n.ql-snow[_ngcontent-%COMP%]   .ql-tooltip[data-mode=video][_ngcontent-%COMP%]::before {\n  content: \"Enter video:\";\n}\n.ql-snow[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #06c;\n}\n.ql-container.ql-snow[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwibm9kZV9tb2R1bGVzL3F1aWxsL2Rpc3QvcXVpbGwuY29yZS5jc3MiLCJub2RlX21vZHVsZXMvcXVpbGwvZGlzdC9xdWlsbC5idWJibGUuY3NzIiwibm9kZV9tb2R1bGVzL3F1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdRLHVKQUFBO0FBQ0EsOEVBQUE7QUNKUjs7Ozs7RUFLRTtBQUNGO0VBQ0Usc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTs7Ozs7Ozs7Ozs7RUFXRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDZFQUE2RTtBQUMvRTtBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFB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RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7RUFFRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfnF1aWxsL2Rpc3QvcXVpbGwuY29yZS5jc3MnO1xyXG5AaW1wb3J0ICd+cXVpbGwvZGlzdC9xdWlsbC5idWJibGUuY3NzJztcclxuQGltcG9ydCAnfnF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1KdWEmZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDEwMDszMDA7NDAwOzUwMCZmYW1pbHk9Tm90bytTZXJpZitLUjp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1IaStNZWxvZHkmZGlzcGxheT1zd2FwJyk7IiwiLyohXG4gKiBRdWlsbCBFZGl0b3IgdjEuMy43XG4gKiBodHRwczovL3F1aWxsanMuY29tL1xuICogQ29weXJpZ2h0IChjKSAyMDE0LCBKYXNvbiBDaGVuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIHNhbGVzZm9yY2UuY29tXG4gKi9cbi5xbC1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucWwtY29udGFpbmVyLnFsLWRpc2FibGVkIC5xbC10b29sdGlwIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnFsLWNvbnRhaW5lci5xbC1kaXNhYmxlZCAucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZF0gPiBsaTo6YmVmb3JlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucWwtY2xpcGJvYXJkIHtcbiAgbGVmdDogLTEwMDAwMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xufVxuLnFsLWNsaXBib2FyZCBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnFsLWVkaXRvciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgdGFiLXNpemU6IDQ7XG4gIC1tb3otdGFiLXNpemU6IDQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLnFsLWVkaXRvciA+ICoge1xuICBjdXJzb3I6IHRleHQ7XG59XG4ucWwtZWRpdG9yIHAsXG4ucWwtZWRpdG9yIG9sLFxuLnFsLWVkaXRvciB1bCxcbi5xbC1lZGl0b3IgcHJlLFxuLnFsLWVkaXRvciBibG9ja3F1b3RlLFxuLnFsLWVkaXRvciBoMSxcbi5xbC1lZGl0b3IgaDIsXG4ucWwtZWRpdG9yIGgzLFxuLnFsLWVkaXRvciBoNCxcbi5xbC1lZGl0b3IgaDUsXG4ucWwtZWRpdG9yIGg2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTEgbGlzdC0yIGxpc3QtMyBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wsXG4ucWwtZWRpdG9yIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcbn1cbi5xbC1lZGl0b3Igb2wgPiBsaSxcbi5xbC1lZGl0b3IgdWwgPiBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5xbC1lZGl0b3IgdWwgPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjAyMic7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSxcbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPWZhbHNlXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9dHJ1ZV0gPiBsaSAqLFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdID4gbGkgKiB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSA+IGxpOjpiZWZvcmUsXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaTo6YmVmb3JlIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdID4gbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDI2MTEnO1xufVxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdID4gbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDI2MTAnO1xufVxuLnFsLWVkaXRvciBsaTo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMS4yZW07XG59XG4ucWwtZWRpdG9yIGxpOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCk6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMS41ZW07XG4gIG1hcmdpbi1yaWdodDogMC4zZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnFsLWVkaXRvciBsaS5xbC1kaXJlY3Rpb24tcnRsOjpiZWZvcmUge1xuICBtYXJnaW4tbGVmdDogMC4zZW07XG4gIG1hcmdpbi1yaWdodDogLTEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCBsaTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpLFxuLnFsLWVkaXRvciB1bCBsaTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtZGlyZWN0aW9uLXJ0bCxcbi5xbC1lZGl0b3IgdWwgbGkucWwtZGlyZWN0aW9uLXJ0bCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCBsaSB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtMSBsaXN0LTIgbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0wO1xufVxuLnFsLWVkaXRvciBvbCBsaTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMCwgZGVjaW1hbCkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTEge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0xO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMSwgbG93ZXItYWxwaGEpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0xIHtcbiAgY291bnRlci1yZXNldDogbGlzdC0yIGxpc3QtMyBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTIge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0yO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMjpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMiwgbG93ZXItcm9tYW4pICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0yIHtcbiAgY291bnRlci1yZXNldDogbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMyB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTM7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0zLCBkZWNpbWFsKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMyB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNCB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTQ7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC00LCBsb3dlci1hbHBoYSkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTQge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTU7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC01OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC01LCBsb3dlci1yb21hbikgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTUge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC02IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNjtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTY6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTYsIGRlY2ltYWwpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC02IHtcbiAgY291bnRlci1yZXNldDogbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC03IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTc6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTcsIGxvd2VyLWFscGhhKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNyB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC04IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtODtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTg6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTgsIGxvd2VyLXJvbWFuKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOCB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTkge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtOSwgZGVjaW1hbCkgJy4gJztcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0xOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDNlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTE6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogNC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogM2VtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMjpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiA2ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0yOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDcuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTIucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDZlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTIucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDcuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTM6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogOWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogOWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTAuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTQ6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTJlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTQ6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTMuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTQucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEyZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC00LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxNWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxNi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTVlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTUucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC02Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE4ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC02Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE5LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC02LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxOGVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTkuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTc6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjFlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTc6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjIuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTcucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIxZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC03LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyMi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtODpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyNGVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtODpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyNS41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtOC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjRlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTgucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC05Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI3ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC05Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI4LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC05LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyN2VtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtOS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjguNWVtO1xufVxuLnFsLWVkaXRvciAucWwtdmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnFsLWVkaXRvciAucWwtdmlkZW8ucWwtYWxpZ24tY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucWwtZWRpdG9yIC5xbC12aWRlby5xbC1hbGlnbi1yaWdodCB7XG4gIG1hcmdpbjogMCAwIDAgYXV0bztcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjAwMDA7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkwO1xufVxuLnFsLWVkaXRvciAucWwtYmcteWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGEwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZjO1xufVxuLnFsLWVkaXRvciAucWwtYmctcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLXdoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1yZWQge1xuICBjb2xvcjogI2U2MDAwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLW9yYW5nZSB7XG4gIGNvbG9yOiAjZjkwO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3IteWVsbG93IHtcbiAgY29sb3I6ICNmZjA7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiAjMDA4YTAwO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiAjMDZjO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3ItcHVycGxlIHtcbiAgY29sb3I6ICM5M2Y7XG59XG4ucWwtZWRpdG9yIC5xbC1mb250LXNlcmlmIHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG59XG4ucWwtZWRpdG9yIC5xbC1mb250LW1vbm9zcGFjZSB7XG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG59XG4ucWwtZWRpdG9yIC5xbC1zaXplLXNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1zaXplLWxhcmdlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLXNpemUtaHVnZSB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1kaXJlY3Rpb24tcnRsIHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG59XG4ucWwtZWRpdG9yIC5xbC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucWwtZWRpdG9yIC5xbC1hbGlnbi1qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5xbC1lZGl0b3IgLnFsLWFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucWwtZWRpdG9yLnFsLWJsYW5rOjpiZWZvcmUge1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxlZnQ6IDE1cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xufVxuIiwiLyohXG4gKiBRdWlsbCBFZGl0b3IgdjEuMy43XG4gKiBodHRwczovL3F1aWxsanMuY29tL1xuICogQ29weXJpZ2h0IChjKSAyMDE0LCBKYXNvbiBDaGVuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIHNhbGVzZm9yY2UuY29tXG4gKi9cbi5xbC1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucWwtY29udGFpbmVyLnFsLWRpc2FibGVkIC5xbC10b29sdGlwIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnFsLWNvbnRhaW5lci5xbC1kaXNhYmxlZCAucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZF0gPiBsaTo6YmVmb3JlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucWwtY2xpcGJvYXJkIHtcbiAgbGVmdDogLTEwMDAwMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xufVxuLnFsLWNsaXBib2FyZCBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnFsLWVkaXRvciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgdGFiLXNpemU6IDQ7XG4gIC1tb3otdGFiLXNpemU6IDQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLnFsLWVkaXRvciA+ICoge1xuICBjdXJzb3I6IHRleHQ7XG59XG4ucWwtZWRpdG9yIHAsXG4ucWwtZWRpdG9yIG9sLFxuLnFsLWVkaXRvciB1bCxcbi5xbC1lZGl0b3IgcHJlLFxuLnFsLWVkaXRvciBibG9ja3F1b3RlLFxuLnFsLWVkaXRvciBoMSxcbi5xbC1lZGl0b3IgaDIsXG4ucWwtZWRpdG9yIGgzLFxuLnFsLWVkaXRvciBoNCxcbi5xbC1lZGl0b3IgaDUsXG4ucWwtZWRpdG9yIGg2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTEgbGlzdC0yIGxpc3QtMyBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wsXG4ucWwtZWRpdG9yIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcbn1cbi5xbC1lZGl0b3Igb2wgPiBsaSxcbi5xbC1lZGl0b3IgdWwgPiBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5xbC1lZGl0b3IgdWwgPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjAyMic7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSxcbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPWZhbHNlXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9dHJ1ZV0gPiBsaSAqLFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdID4gbGkgKiB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSA+IGxpOjpiZWZvcmUsXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaTo6YmVmb3JlIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdID4gbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDI2MTEnO1xufVxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdID4gbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDI2MTAnO1xufVxuLnFsLWVkaXRvciBsaTo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMS4yZW07XG59XG4ucWwtZWRpdG9yIGxpOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCk6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMS41ZW07XG4gIG1hcmdpbi1yaWdodDogMC4zZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnFsLWVkaXRvciBsaS5xbC1kaXJlY3Rpb24tcnRsOjpiZWZvcmUge1xuICBtYXJnaW4tbGVmdDogMC4zZW07XG4gIG1hcmdpbi1yaWdodDogLTEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCBsaTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpLFxuLnFsLWVkaXRvciB1bCBsaTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtZGlyZWN0aW9uLXJ0bCxcbi5xbC1lZGl0b3IgdWwgbGkucWwtZGlyZWN0aW9uLXJ0bCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCBsaSB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtMSBsaXN0LTIgbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0wO1xufVxuLnFsLWVkaXRvciBvbCBsaTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMCwgZGVjaW1hbCkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTEge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0xO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMSwgbG93ZXItYWxwaGEpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0xIHtcbiAgY291bnRlci1yZXNldDogbGlzdC0yIGxpc3QtMyBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTIge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0yO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMjpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMiwgbG93ZXItcm9tYW4pICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0yIHtcbiAgY291bnRlci1yZXNldDogbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMyB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTM7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0zLCBkZWNpbWFsKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMyB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNCB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTQ7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC00LCBsb3dlci1hbHBoYSkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTQge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTU7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC01OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC01LCBsb3dlci1yb21hbikgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTUge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC02IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNjtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTY6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTYsIGRlY2ltYWwpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC02IHtcbiAgY291bnRlci1yZXNldDogbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC03IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTc6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTcsIGxvd2VyLWFscGhhKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNyB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC04IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtODtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTg6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTgsIGxvd2VyLXJvbWFuKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOCB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTkge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtOSwgZGVjaW1hbCkgJy4gJztcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0xOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDNlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTE6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogNC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogM2VtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMjpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiA2ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0yOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDcuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTIucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDZlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTIucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDcuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTM6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogOWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogOWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTAuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTQ6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTJlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTQ6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTMuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTQucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEyZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC00LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxNWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxNi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTVlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTUucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC02Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE4ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC02Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE5LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC02LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxOGVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTkuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTc6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjFlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTc6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjIuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTcucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIxZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC03LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyMi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtODpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyNGVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtODpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyNS41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtOC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjRlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTgucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC05Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI3ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC05Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI4LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC05LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyN2VtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtOS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjguNWVtO1xufVxuLnFsLWVkaXRvciAucWwtdmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnFsLWVkaXRvciAucWwtdmlkZW8ucWwtYWxpZ24tY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucWwtZWRpdG9yIC5xbC12aWRlby5xbC1hbGlnbi1yaWdodCB7XG4gIG1hcmdpbjogMCAwIDAgYXV0bztcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjAwMDA7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkwO1xufVxuLnFsLWVkaXRvciAucWwtYmcteWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGEwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZjO1xufVxuLnFsLWVkaXRvciAucWwtYmctcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLXdoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1yZWQge1xuICBjb2xvcjogI2U2MDAwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLW9yYW5nZSB7XG4gIGNvbG9yOiAjZjkwO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3IteWVsbG93IHtcbiAgY29sb3I6ICNmZjA7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiAjMDA4YTAwO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiAjMDZjO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3ItcHVycGxlIHtcbiAgY29sb3I6ICM5M2Y7XG59XG4ucWwtZWRpdG9yIC5xbC1mb250LXNlcmlmIHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG59XG4ucWwtZWRpdG9yIC5xbC1mb250LW1vbm9zcGFjZSB7XG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG59XG4ucWwtZWRpdG9yIC5xbC1zaXplLXNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1zaXplLWxhcmdlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLXNpemUtaHVnZSB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1kaXJlY3Rpb24tcnRsIHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG59XG4ucWwtZWRpdG9yIC5xbC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucWwtZWRpdG9yIC5xbC1hbGlnbi1qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5xbC1lZGl0b3IgLnFsLWFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucWwtZWRpdG9yLnFsLWJsYW5rOjpiZWZvcmUge1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxlZnQ6IDE1cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xufVxuLnFsLWJ1YmJsZS5xbC10b29sYmFyOmFmdGVyLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhcjphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogdGFibGU7XG59XG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICB3aWR0aDogMjhweDtcbn1cbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b24gc3ZnLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b24gc3ZnIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b246YWN0aXZlOmhvdmVyLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b246YWN0aXZlOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5xbC1idWJibGUucWwtdG9vbGJhciBpbnB1dC5xbC1pbWFnZVt0eXBlPWZpbGVdLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBpbnB1dC5xbC1pbWFnZVt0eXBlPWZpbGVdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b246aG92ZXIsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcixcbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b246Zm9jdXMsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyxcbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3Zlcixcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1maWxsLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLWZpbGwsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1maWxsLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLWZpbGwsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtZmlsbCxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtZmlsbCxcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1maWxsLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1maWxsLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1maWxsLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtZmlsbCxcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtZmlsbCxcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtZmlsbCxcbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLnFsLWZpbGwge1xuICBmaWxsOiAjZmZmO1xufVxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZSxcbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZSxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZSxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZSxcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZSxcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLFxuLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLWJ1YmJsZSAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1idWJibGUucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtYnViYmxlLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLW1pdGVyIHtcbiAgc3Ryb2tlOiAjZmZmO1xufVxuQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSksXG4gIC5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSB7XG4gICAgY29sb3I6ICNjY2M7XG4gIH1cbiAgLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLWZpbGwsXG4gIC5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtZmlsbCxcbiAgLnFsLWJ1YmJsZS5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZS5xbC1maWxsLFxuICAucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZS5xbC1maWxsIHtcbiAgICBmaWxsOiAjY2NjO1xuICB9XG4gIC5xbC1idWJibGUucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UsXG4gIC5xbC1idWJibGUgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLFxuICAucWwtYnViYmxlLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLW1pdGVyLFxuICAucWwtYnViYmxlIC5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZS1taXRlciB7XG4gICAgc3Ryb2tlOiAjY2NjO1xuICB9XG59XG4ucWwtYnViYmxlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5xbC1idWJibGUgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ucWwtYnViYmxlIC5xbC1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnFsLWJ1YmJsZSAucWwtb3V0LWJvdHRvbSxcbi5xbC1idWJibGUgLnFsLW91dC10b3Age1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ucWwtYnViYmxlIC5xbC10b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG59XG4ucWwtYnViYmxlIC5xbC10b29sdGlwIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXAucWwtZmxpcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG59XG4ucWwtYnViYmxlIC5xbC1mb3JtYXRzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnFsLWJ1YmJsZSAucWwtZm9ybWF0czphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogdGFibGU7XG59XG4ucWwtYnViYmxlIC5xbC1zdHJva2Uge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICNjY2M7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgc3Ryb2tlLXdpZHRoOiAyO1xufVxuLnFsLWJ1YmJsZSAucWwtc3Ryb2tlLW1pdGVyIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjY2NjO1xuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG4gIHN0cm9rZS13aWR0aDogMjtcbn1cbi5xbC1idWJibGUgLnFsLWZpbGwsXG4ucWwtYnViYmxlIC5xbC1zdHJva2UucWwtZmlsbCB7XG4gIGZpbGw6ICNjY2M7XG59XG4ucWwtYnViYmxlIC5xbC1lbXB0eSB7XG4gIGZpbGw6IG5vbmU7XG59XG4ucWwtYnViYmxlIC5xbC1ldmVuIHtcbiAgZmlsbC1ydWxlOiBldmVub2RkO1xufVxuLnFsLWJ1YmJsZSAucWwtdGhpbixcbi5xbC1idWJibGUgLnFsLXN0cm9rZS5xbC10aGluIHtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuLnFsLWJ1YmJsZSAucWwtdHJhbnNwYXJlbnQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ucWwtYnViYmxlIC5xbC1kaXJlY3Rpb24gc3ZnOmxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnFsLWJ1YmJsZSAucWwtZGlyZWN0aW9uLnFsLWFjdGl2ZSBzdmc6bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5xbC1idWJibGUgLnFsLWRpcmVjdGlvbi5xbC1hY3RpdmUgc3ZnOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5xbC1idWJibGUgLnFsLWVkaXRvciBoMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIGgyIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5xbC1idWJibGUgLnFsLWVkaXRvciBoMyB7XG4gIGZvbnQtc2l6ZTogMS4xN2VtO1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIGg0IHtcbiAgZm9udC1zaXplOiAxZW07XG59XG4ucWwtYnViYmxlIC5xbC1lZGl0b3IgaDUge1xuICBmb250LXNpemU6IDAuODNlbTtcbn1cbi5xbC1idWJibGUgLnFsLWVkaXRvciBoNiB7XG4gIGZvbnQtc2l6ZTogMC42N2VtO1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5xbC1idWJibGUgLnFsLWVkaXRvciBibG9ja3F1b3RlIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjY2NjO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIGNvZGUsXG4ucWwtYnViYmxlIC5xbC1lZGl0b3IgcHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIHByZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIGNvZGUge1xuICBmb250LXNpemU6IDg1JTtcbiAgcGFkZGluZzogMnB4IDRweDtcbn1cbi5xbC1idWJibGUgLnFsLWVkaXRvciBwcmUucWwtc3ludGF4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjQxZjtcbiAgY29sb3I6ICNmOGY4ZjI7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLnFsLWJ1YmJsZSAucWwtZWRpdG9yIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlciB7XG4gIGNvbG9yOiAjY2NjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLWxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci1sYWJlbDo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci1vcHRpb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXItb3B0aW9ucyAucWwtcGlja2VyLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItbGFiZWwge1xuICBjb2xvcjogIzc3NztcbiAgei1pbmRleDogMjtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1leHBhbmRlZCAucWwtcGlja2VyLWxhYmVsIC5xbC1maWxsIHtcbiAgZmlsbDogIzc3Nztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1leHBhbmRlZCAucWwtcGlja2VyLWxhYmVsIC5xbC1zdHJva2Uge1xuICBzdHJva2U6ICM3Nzc7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1vcHRpb25zIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIHRvcDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbi5xbC1idWJibGUgLnFsLWNvbG9yLXBpY2tlcixcbi5xbC1idWJibGUgLnFsLWljb24tcGlja2VyIHtcbiAgd2lkdGg6IDI4cHg7XG59XG4ucWwtYnViYmxlIC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1sYWJlbCxcbi5xbC1idWJibGUgLnFsLWljb24tcGlja2VyIC5xbC1waWNrZXItbGFiZWwge1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuLnFsLWJ1YmJsZSAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItbGFiZWwgc3ZnLFxuLnFsLWJ1YmJsZSAucWwtaWNvbi1waWNrZXIgLnFsLXBpY2tlci1sYWJlbCBzdmcge1xuICByaWdodDogNHB4O1xufVxuLnFsLWJ1YmJsZSAucWwtaWNvbi1waWNrZXIgLnFsLXBpY2tlci1vcHRpb25zIHtcbiAgcGFkZGluZzogNHB4IDBweDtcbn1cbi5xbC1idWJibGUgLnFsLWljb24tcGlja2VyIC5xbC1waWNrZXItaXRlbSB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG59XG4ucWwtYnViYmxlIC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1vcHRpb25zIHtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgd2lkdGg6IDE1MnB4O1xufVxuLnFsLWJ1YmJsZSAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDJweDtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogMTZweDtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlcjpub3QoLnFsLWNvbG9yLXBpY2tlcik6bm90KC5xbC1pY29uLXBpY2tlcikgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAxOHB4O1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWxhYmVsW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWxhYmVsW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlLFxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1pdGVtW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIHtcbiAgd2lkdGg6IDk4cHg7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWw6OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiAnTm9ybWFsJztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVwiMVwiXTo6YmVmb3JlLFxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjFcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDEnO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XCIyXCJdOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiMlwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0hlYWRpbmcgMic7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cIjNcIl06OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCIzXCJdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSGVhZGluZyAzJztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVwiNFwiXTo6YmVmb3JlLFxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjRcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDQnO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XCI1XCJdOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiNVwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0hlYWRpbmcgNSc7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cIjZcIl06OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCI2XCJdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSGVhZGluZyA2Jztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCIxXCJdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDJlbTtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCIyXCJdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjNcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMS4xN2VtO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjRcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjVcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMC44M2VtO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjZcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMC42N2VtO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLWZvbnQge1xuICB3aWR0aDogMTA4cHg7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWxhYmVsOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdTYW5zIFNlcmlmJztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1zZXJpZl06OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPXNlcmlmXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1NlcmlmJztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1tb25vc3BhY2VdOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1tb25vc3BhY2VdOjpiZWZvcmUge1xuICBjb250ZW50OiAnTW9ub3NwYWNlJztcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPXNlcmlmXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1tb25vc3BhY2VdOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogTW9uYWNvLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLXNpemUge1xuICB3aWR0aDogOThweDtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWw6OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogJ05vcm1hbCc7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9c21hbGxdOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1zbWFsbF06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdTbWFsbCc7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9bGFyZ2VdOjpiZWZvcmUsXG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1sYXJnZV06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdMYXJnZSc7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9aHVnZV06OmJlZm9yZSxcbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPWh1Z2VdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSHVnZSc7XG59XG4ucWwtYnViYmxlIC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1zbWFsbF06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5xbC1idWJibGUgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPWxhcmdlXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnFsLWJ1YmJsZSAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9aHVnZV06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cbi5xbC1idWJibGUgLnFsLWNvbG9yLXBpY2tlci5xbC1iYWNrZ3JvdW5kIC5xbC1waWNrZXItaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucWwtYnViYmxlIC5xbC1jb2xvci1waWNrZXIucWwtY29sb3IgLnFsLXBpY2tlci1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2xiYXIgLnFsLWZvcm1hdHMge1xuICBtYXJnaW46IDhweCAxMnB4IDhweCAwcHg7XG59XG4ucWwtYnViYmxlIC5xbC10b29sYmFyIC5xbC1mb3JtYXRzOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4ucWwtYnViYmxlIC5xbC1jb2xvci1waWNrZXIgc3ZnIHtcbiAgbWFyZ2luOiAxcHg7XG59XG4ucWwtYnViYmxlIC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkLFxuLnFsLWJ1YmJsZSAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItaXRlbTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucWwtYnViYmxlIC5xbC10b29sdGlwOm5vdCgucWwtZmxpcCkgLnFsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgIzQ0NDtcbiAgdG9wOiAtNnB4O1xufVxuLnFsLWJ1YmJsZSAucWwtdG9vbHRpcC5xbC1mbGlwIC5xbC10b29sdGlwLWFycm93IHtcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM0NDQ7XG4gIGJvdHRvbTogLTZweDtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXAucWwtZWRpdGluZyAucWwtdG9vbHRpcC1lZGl0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXAucWwtZWRpdGluZyAucWwtZm9ybWF0cyB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXAtZWRpdG9yIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXAtZWRpdG9yIGlucHV0W3R5cGU9dGV4dF0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5xbC1idWJibGUgLnFsLXRvb2x0aXAtZWRpdG9yIGEge1xuICB0b3A6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG59XG4ucWwtYnViYmxlIC5xbC10b29sdGlwLWVkaXRvciBhOmJlZm9yZSB7XG4gIGNvbG9yOiAjY2NjO1xuICBjb250ZW50OiBcIlxcRDdcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5xbC1jb250YWluZXIucWwtYnViYmxlOm5vdCgucWwtZGlzYWJsZWQpIGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucWwtY29udGFpbmVyLnFsLWJ1YmJsZTpub3QoLnFsLWRpc2FibGVkKSBhOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0b3A6IC01cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGNvbnRlbnQ6IGF0dHIoaHJlZik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDE7XG59XG4ucWwtY29udGFpbmVyLnFsLWJ1YmJsZTpub3QoLnFsLWRpc2FibGVkKSBhOjphZnRlciB7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCAjNDQ0O1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdG9wOiAwO1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cbi5xbC1jb250YWluZXIucWwtYnViYmxlOm5vdCgucWwtZGlzYWJsZWQpIGE6OmJlZm9yZSxcbi5xbC1jb250YWluZXIucWwtYnViYmxlOm5vdCgucWwtZGlzYWJsZWQpIGE6OmFmdGVyIHtcbiAgbGVmdDogMDtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgZWFzZSAyMDBtcztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnFsLWNvbnRhaW5lci5xbC1idWJibGU6bm90KC5xbC1kaXNhYmxlZCkgYTpob3Zlcjo6YmVmb3JlLFxuLnFsLWNvbnRhaW5lci5xbC1idWJibGU6bm90KC5xbC1kaXNhYmxlZCkgYTpob3Zlcjo6YWZ0ZXIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuIiwiLyohXG4gKiBRdWlsbCBFZGl0b3IgdjEuMy43XG4gKiBodHRwczovL3F1aWxsanMuY29tL1xuICogQ29weXJpZ2h0IChjKSAyMDE0LCBKYXNvbiBDaGVuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIHNhbGVzZm9yY2UuY29tXG4gKi9cbi5xbC1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucWwtY29udGFpbmVyLnFsLWRpc2FibGVkIC5xbC10b29sdGlwIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnFsLWNvbnRhaW5lci5xbC1kaXNhYmxlZCAucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZF0gPiBsaTo6YmVmb3JlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucWwtY2xpcGJvYXJkIHtcbiAgbGVmdDogLTEwMDAwMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xufVxuLnFsLWNsaXBib2FyZCBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnFsLWVkaXRvciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDEycHggMTVweDtcbiAgdGFiLXNpemU6IDQ7XG4gIC1tb3otdGFiLXNpemU6IDQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLnFsLWVkaXRvciA+ICoge1xuICBjdXJzb3I6IHRleHQ7XG59XG4ucWwtZWRpdG9yIHAsXG4ucWwtZWRpdG9yIG9sLFxuLnFsLWVkaXRvciB1bCxcbi5xbC1lZGl0b3IgcHJlLFxuLnFsLWVkaXRvciBibG9ja3F1b3RlLFxuLnFsLWVkaXRvciBoMSxcbi5xbC1lZGl0b3IgaDIsXG4ucWwtZWRpdG9yIGgzLFxuLnFsLWVkaXRvciBoNCxcbi5xbC1lZGl0b3IgaDUsXG4ucWwtZWRpdG9yIGg2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTEgbGlzdC0yIGxpc3QtMyBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wsXG4ucWwtZWRpdG9yIHVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcbn1cbi5xbC1lZGl0b3Igb2wgPiBsaSxcbi5xbC1lZGl0b3IgdWwgPiBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5xbC1lZGl0b3IgdWwgPiBsaTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcMjAyMic7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSxcbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPWZhbHNlXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9dHJ1ZV0gPiBsaSAqLFxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdID4gbGkgKiB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD10cnVlXSA+IGxpOjpiZWZvcmUsXG4ucWwtZWRpdG9yIHVsW2RhdGEtY2hlY2tlZD1mYWxzZV0gPiBsaTo6YmVmb3JlIHtcbiAgY29sb3I6ICM3Nzc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbi5xbC1lZGl0b3IgdWxbZGF0YS1jaGVja2VkPXRydWVdID4gbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDI2MTEnO1xufVxuLnFsLWVkaXRvciB1bFtkYXRhLWNoZWNrZWQ9ZmFsc2VdID4gbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDI2MTAnO1xufVxuLnFsLWVkaXRvciBsaTo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMS4yZW07XG59XG4ucWwtZWRpdG9yIGxpOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCk6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMS41ZW07XG4gIG1hcmdpbi1yaWdodDogMC4zZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnFsLWVkaXRvciBsaS5xbC1kaXJlY3Rpb24tcnRsOjpiZWZvcmUge1xuICBtYXJnaW4tbGVmdDogMC4zZW07XG4gIG1hcmdpbi1yaWdodDogLTEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCBsaTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpLFxuLnFsLWVkaXRvciB1bCBsaTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtZGlyZWN0aW9uLXJ0bCxcbi5xbC1lZGl0b3IgdWwgbGkucWwtZGlyZWN0aW9uLXJ0bCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xufVxuLnFsLWVkaXRvciBvbCBsaSB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtMSBsaXN0LTIgbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0wO1xufVxuLnFsLWVkaXRvciBvbCBsaTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMCwgZGVjaW1hbCkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTEge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0xO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMSwgbG93ZXItYWxwaGEpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0xIHtcbiAgY291bnRlci1yZXNldDogbGlzdC0yIGxpc3QtMyBsaXN0LTQgbGlzdC01IGxpc3QtNiBsaXN0LTcgbGlzdC04IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTIge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC0yO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMjpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtMiwgbG93ZXItcm9tYW4pICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0yIHtcbiAgY291bnRlci1yZXNldDogbGlzdC0zIGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMyB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTM7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC0zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC0zLCBkZWNpbWFsKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtMyB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtNCBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNCB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTQ7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC00OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC00LCBsb3dlci1hbHBoYSkgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTQge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTUgbGlzdC02IGxpc3QtNyBsaXN0LTggbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0LTU7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC01OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobGlzdC01LCBsb3dlci1yb21hbikgJy4gJztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTUge1xuICBjb3VudGVyLXJlc2V0OiBsaXN0LTYgbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC02IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNjtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTY6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTYsIGRlY2ltYWwpICcuICc7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC02IHtcbiAgY291bnRlci1yZXNldDogbGlzdC03IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC03IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtNztcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTc6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTcsIGxvd2VyLWFscGhhKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtNyB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtOCBsaXN0LTk7XG59XG4ucWwtZWRpdG9yIG9sIGxpLnFsLWluZGVudC04IHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpc3QtODtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTg6YmVmb3JlIHtcbiAgY29udGVudDogY291bnRlcihsaXN0LTgsIGxvd2VyLXJvbWFuKSAnLiAnO1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOCB7XG4gIGNvdW50ZXItcmVzZXQ6IGxpc3QtOTtcbn1cbi5xbC1lZGl0b3Igb2wgbGkucWwtaW5kZW50LTkge1xuICBjb3VudGVyLWluY3JlbWVudDogbGlzdC05O1xufVxuLnFsLWVkaXRvciBvbCBsaS5xbC1pbmRlbnQtOTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpc3QtOSwgZGVjaW1hbCkgJy4gJztcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC0xOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDNlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTE6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogNC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogM2VtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogNC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMjpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiA2ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC0yOm5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDcuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTIucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDZlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTIucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDcuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTM6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogOWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMzpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxMC41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtMy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogOWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtMy5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTAuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTQ6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTJlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTQ6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMTMuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTQucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEyZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC00LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMy41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxNWVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNTpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAxNi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtNS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTVlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTUucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC02Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE4ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC02Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDE5LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC02LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxOGVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtNi5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTkuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTc6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjFlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTc6bm90KC5xbC1kaXJlY3Rpb24tcnRsKSB7XG4gIHBhZGRpbmctbGVmdDogMjIuNWVtO1xufVxuLnFsLWVkaXRvciAucWwtaW5kZW50LTcucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIxZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC03LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyMi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtODpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyNGVtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtODpub3QoLnFsLWRpcmVjdGlvbi1ydGwpIHtcbiAgcGFkZGluZy1sZWZ0OiAyNS41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1pbmRlbnQtOC5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjRlbTtcbn1cbi5xbC1lZGl0b3IgbGkucWwtaW5kZW50LTgucWwtZGlyZWN0aW9uLXJ0bC5xbC1hbGlnbi1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC05Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI3ZW07XG59XG4ucWwtZWRpdG9yIGxpLnFsLWluZGVudC05Om5vdCgucWwtZGlyZWN0aW9uLXJ0bCkge1xuICBwYWRkaW5nLWxlZnQ6IDI4LjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLWluZGVudC05LnFsLWRpcmVjdGlvbi1ydGwucWwtYWxpZ24tcmlnaHQge1xuICBwYWRkaW5nLXJpZ2h0OiAyN2VtO1xufVxuLnFsLWVkaXRvciBsaS5xbC1pbmRlbnQtOS5xbC1kaXJlY3Rpb24tcnRsLnFsLWFsaWduLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjguNWVtO1xufVxuLnFsLWVkaXRvciAucWwtdmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnFsLWVkaXRvciAucWwtdmlkZW8ucWwtYWxpZ24tY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucWwtZWRpdG9yIC5xbC12aWRlby5xbC1hbGlnbi1yaWdodCB7XG4gIG1hcmdpbjogMCAwIDAgYXV0bztcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjAwMDA7XG59XG4ucWwtZWRpdG9yIC5xbC1iZy1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkwO1xufVxuLnFsLWVkaXRvciAucWwtYmcteWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGEwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZjO1xufVxuLnFsLWVkaXRvciAucWwtYmctcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzZjtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLXdoaXRlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1yZWQge1xuICBjb2xvcjogI2U2MDAwMDtcbn1cbi5xbC1lZGl0b3IgLnFsLWNvbG9yLW9yYW5nZSB7XG4gIGNvbG9yOiAjZjkwO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3IteWVsbG93IHtcbiAgY29sb3I6ICNmZjA7XG59XG4ucWwtZWRpdG9yIC5xbC1jb2xvci1ncmVlbiB7XG4gIGNvbG9yOiAjMDA4YTAwO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3ItYmx1ZSB7XG4gIGNvbG9yOiAjMDZjO1xufVxuLnFsLWVkaXRvciAucWwtY29sb3ItcHVycGxlIHtcbiAgY29sb3I6ICM5M2Y7XG59XG4ucWwtZWRpdG9yIC5xbC1mb250LXNlcmlmIHtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFRpbWVzIE5ldyBSb21hbiwgc2VyaWY7XG59XG4ucWwtZWRpdG9yIC5xbC1mb250LW1vbm9zcGFjZSB7XG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG59XG4ucWwtZWRpdG9yIC5xbC1zaXplLXNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1zaXplLWxhcmdlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5xbC1lZGl0b3IgLnFsLXNpemUtaHVnZSB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG4ucWwtZWRpdG9yIC5xbC1kaXJlY3Rpb24tcnRsIHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG59XG4ucWwtZWRpdG9yIC5xbC1hbGlnbi1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucWwtZWRpdG9yIC5xbC1hbGlnbi1qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5xbC1lZGl0b3IgLnFsLWFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucWwtZWRpdG9yLnFsLWJsYW5rOjpiZWZvcmUge1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xuICBjb250ZW50OiBhdHRyKGRhdGEtcGxhY2Vob2xkZXIpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxlZnQ6IDE1cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xufVxuLnFsLXNub3cucWwtdG9vbGJhcjphZnRlcixcbi5xbC1zbm93IC5xbC10b29sYmFyOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMjRweDtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgd2lkdGg6IDI4cHg7XG59XG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbiBzdmcsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b24gc3ZnIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmFjdGl2ZTpob3Zlcixcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjphY3RpdmU6aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnFsLXNub3cucWwtdG9vbGJhciBpbnB1dC5xbC1pbWFnZVt0eXBlPWZpbGVdLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgaW5wdXQucWwtaW1hZ2VbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcixcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcixcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3Zlcixcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3Zlcixcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3Zlcixcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIHtcbiAgY29sb3I6ICMwNmM7XG59XG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1maWxsLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbi5xbC1hY3RpdmUgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZS5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbDpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UucWwtZmlsbCxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLnFsLWZpbGwsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZS5xbC1maWxsIHtcbiAgZmlsbDogIzA2Yztcbn1cbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyIC5xbC1zdHJva2UsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZSxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmZvY3VzIC5xbC1zdHJva2UsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZSxcbi5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsOmhvdmVyIC5xbC1zdHJva2UsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1zdHJva2UsXG4ucWwtc25vdyAucWwtdG9vbGJhciAucWwtcGlja2VyLWxhYmVsLnFsLWFjdGl2ZSAucWwtc3Ryb2tlLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW06aG92ZXIgLnFsLXN0cm9rZSxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLFxuLnFsLXNub3cucWwtdG9vbGJhciAucWwtcGlja2VyLWl0ZW0ucWwtc2VsZWN0ZWQgLnFsLXN0cm9rZSxcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXIgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246Zm9jdXMgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpmb2N1cyAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdyAucWwtdG9vbGJhciBidXR0b24ucWwtYWN0aXZlIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWw6aG92ZXIgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93LnFsLXRvb2xiYXIgLnFsLXBpY2tlci1sYWJlbC5xbC1hY3RpdmUgLnFsLXN0cm9rZS1taXRlcixcbi5xbC1zbm93IC5xbC10b29sYmFyIC5xbC1waWNrZXItbGFiZWwucWwtYWN0aXZlIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbTpob3ZlciAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtOmhvdmVyIC5xbC1zdHJva2UtbWl0ZXIsXG4ucWwtc25vdy5xbC10b29sYmFyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCAucWwtc3Ryb2tlLW1pdGVyLFxuLnFsLXNub3cgLnFsLXRvb2xiYXIgLnFsLXBpY2tlci1pdGVtLnFsLXNlbGVjdGVkIC5xbC1zdHJva2UtbWl0ZXIge1xuICBzdHJva2U6ICMwNmM7XG59XG5AbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAucWwtc25vdy5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSksXG4gIC5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkge1xuICAgIGNvbG9yOiAjNDQ0O1xuICB9XG4gIC5xbC1zbm93LnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtZmlsbCxcbiAgLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtZmlsbCxcbiAgLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UucWwtZmlsbCxcbiAgLnFsLXNub3cgLnFsLXRvb2xiYXIgYnV0dG9uOmhvdmVyOm5vdCgucWwtYWN0aXZlKSAucWwtc3Ryb2tlLnFsLWZpbGwge1xuICAgIGZpbGw6ICM0NDQ7XG4gIH1cbiAgLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UsXG4gIC5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZSxcbiAgLnFsLXNub3cucWwtdG9vbGJhciBidXR0b246aG92ZXI6bm90KC5xbC1hY3RpdmUpIC5xbC1zdHJva2UtbWl0ZXIsXG4gIC5xbC1zbm93IC5xbC10b29sYmFyIGJ1dHRvbjpob3Zlcjpub3QoLnFsLWFjdGl2ZSkgLnFsLXN0cm9rZS1taXRlciB7XG4gICAgc3Ryb2tlOiAjNDQ0O1xuICB9XG59XG4ucWwtc25vdyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ucWwtc25vdyAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5xbC1zbm93IC5xbC1oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnFsLXNub3cgLnFsLW91dC1ib3R0b20sXG4ucWwtc25vdyAucWwtb3V0LXRvcCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcCBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcC5xbC1mbGlwIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbn1cbi5xbC1zbm93IC5xbC1mb3JtYXRzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnFsLXNub3cgLnFsLWZvcm1hdHM6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLnFsLXNub3cgLnFsLXN0cm9rZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogIzQ0NDtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICBzdHJva2Utd2lkdGg6IDI7XG59XG4ucWwtc25vdyAucWwtc3Ryb2tlLW1pdGVyIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjNDQ0O1xuICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG4gIHN0cm9rZS13aWR0aDogMjtcbn1cbi5xbC1zbm93IC5xbC1maWxsLFxuLnFsLXNub3cgLnFsLXN0cm9rZS5xbC1maWxsIHtcbiAgZmlsbDogIzQ0NDtcbn1cbi5xbC1zbm93IC5xbC1lbXB0eSB7XG4gIGZpbGw6IG5vbmU7XG59XG4ucWwtc25vdyAucWwtZXZlbiB7XG4gIGZpbGwtcnVsZTogZXZlbm9kZDtcbn1cbi5xbC1zbm93IC5xbC10aGluLFxuLnFsLXNub3cgLnFsLXN0cm9rZS5xbC10aGluIHtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuLnFsLXNub3cgLnFsLXRyYW5zcGFyZW50IHtcbiAgb3BhY2l0eTogMC40O1xufVxuLnFsLXNub3cgLnFsLWRpcmVjdGlvbiBzdmc6bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucWwtc25vdyAucWwtZGlyZWN0aW9uLnFsLWFjdGl2ZSBzdmc6bGFzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5xbC1zbm93IC5xbC1kaXJlY3Rpb24ucWwtYWN0aXZlIHN2ZzpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIGgxIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIGgyIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgaDMge1xuICBmb250LXNpemU6IDEuMTdlbTtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgaDQge1xuICBmb250LXNpemU6IDFlbTtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgaDUge1xuICBmb250LXNpemU6IDAuODNlbTtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgaDYge1xuICBmb250LXNpemU6IDAuNjdlbTtcbn1cbi5xbC1zbm93IC5xbC1lZGl0b3IgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBibG9ja3F1b3RlIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjY2NjO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBjb2RlLFxuLnFsLXNub3cgLnFsLWVkaXRvciBwcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIHByZSB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLnFsLXNub3cgLnFsLWVkaXRvciBjb2RlIHtcbiAgZm9udC1zaXplOiA4NSU7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIHByZS5xbC1zeW50YXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNDFmO1xuICBjb2xvcjogI2Y4ZjhmMjtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4ucWwtc25vdyAucWwtZWRpdG9yIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIge1xuICBjb2xvcjogIzQ0NDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXItbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci1sYWJlbDo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXItb3B0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci1vcHRpb25zIC5xbC1waWNrZXItaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItbGFiZWwge1xuICBjb2xvcjogI2NjYztcbiAgei1pbmRleDogMjtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1sYWJlbCAucWwtZmlsbCB7XG4gIGZpbGw6ICNjY2M7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItbGFiZWwgLnFsLXN0cm9rZSB7XG4gIHN0cm9rZTogI2NjYztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1vcHRpb25zIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIHRvcDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIsXG4ucWwtc25vdyAucWwtaWNvbi1waWNrZXIge1xuICB3aWR0aDogMjhweDtcbn1cbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1sYWJlbCxcbi5xbC1zbm93IC5xbC1pY29uLXBpY2tlciAucWwtcGlja2VyLWxhYmVsIHtcbiAgcGFkZGluZzogMnB4IDRweDtcbn1cbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1sYWJlbCBzdmcsXG4ucWwtc25vdyAucWwtaWNvbi1waWNrZXIgLnFsLXBpY2tlci1sYWJlbCBzdmcge1xuICByaWdodDogNHB4O1xufVxuLnFsLXNub3cgLnFsLWljb24tcGlja2VyIC5xbC1waWNrZXItb3B0aW9ucyB7XG4gIHBhZGRpbmc6IDRweCAwcHg7XG59XG4ucWwtc25vdyAucWwtaWNvbi1waWNrZXIgLnFsLXBpY2tlci1pdGVtIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgcGFkZGluZzogMnB4IDRweDtcbn1cbi5xbC1zbm93IC5xbC1jb2xvci1waWNrZXIgLnFsLXBpY2tlci1vcHRpb25zIHtcbiAgcGFkZGluZzogM3B4IDVweDtcbiAgd2lkdGg6IDE1MnB4O1xufVxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDE2cHg7XG59XG4ucWwtc25vdyAucWwtcGlja2VyOm5vdCgucWwtY29sb3ItcGlja2VyKTpub3QoLnFsLWljb24tcGlja2VyKSBzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDE4cHg7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtbGFiZWxdOm5vdChbZGF0YS1sYWJlbD0nJ10pOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1sYWJlbFtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS1sYWJlbF06bm90KFtkYXRhLWxhYmVsPScnXSk6OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbVtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItaXRlbVtkYXRhLWxhYmVsXTpub3QoW2RhdGEtbGFiZWw9JyddKTo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIHtcbiAgd2lkdGg6IDk4cHg7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdOb3JtYWwnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVwiMVwiXTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCIxXCJdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSGVhZGluZyAxJztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cIjJcIl06OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiMlwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0hlYWRpbmcgMic7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XCIzXCJdOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjNcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDMnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPVwiNFwiXTo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCI0XCJdOjpiZWZvcmUge1xuICBjb250ZW50OiAnSGVhZGluZyA0Jztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1cIjVcIl06OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiNVwiXTo6YmVmb3JlIHtcbiAgY29udGVudDogJ0hlYWRpbmcgNSc7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9XCI2XCJdOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjZcIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIZWFkaW5nIDYnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCIxXCJdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDJlbTtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiMlwiXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiM1wiXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxLjE3ZW07XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWhlYWRlciAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1cIjRcIl06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1oZWFkZXIgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9XCI1XCJdOjpiZWZvcmUge1xuICBmb250LXNpemU6IDAuODNlbTtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtaGVhZGVyIC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPVwiNlwiXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAwLjY3ZW07XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQge1xuICB3aWR0aDogMTA4cHg7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1sYWJlbDo6YmVmb3JlLFxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1NhbnMgU2VyaWYnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1zZXJpZl06OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1zZXJpZl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdTZXJpZic7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLWZvbnQgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPW1vbm9zcGFjZV06OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1tb25vc3BhY2VdOjpiZWZvcmUge1xuICBjb250ZW50OiAnTW9ub3NwYWNlJztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtZm9udCAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1zZXJpZl06OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBUaW1lcyBOZXcgUm9tYW4sIHNlcmlmO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1mb250IC5xbC1waWNrZXItaXRlbVtkYXRhLXZhbHVlPW1vbm9zcGFjZV06OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUge1xuICB3aWR0aDogOThweDtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWxhYmVsOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiAnTm9ybWFsJztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWxhYmVsW2RhdGEtdmFsdWU9c21hbGxdOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9c21hbGxdOjpiZWZvcmUge1xuICBjb250ZW50OiAnU21hbGwnO1xufVxuLnFsLXNub3cgLnFsLXBpY2tlci5xbC1zaXplIC5xbC1waWNrZXItbGFiZWxbZGF0YS12YWx1ZT1sYXJnZV06OmJlZm9yZSxcbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1sYXJnZV06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdMYXJnZSc7XG59XG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1sYWJlbFtkYXRhLXZhbHVlPWh1Z2VdOjpiZWZvcmUsXG4ucWwtc25vdyAucWwtcGlja2VyLnFsLXNpemUgLnFsLXBpY2tlci1pdGVtW2RhdGEtdmFsdWU9aHVnZV06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdIdWdlJztcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1zbWFsbF06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1sYXJnZV06OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5xbC1zbm93IC5xbC1waWNrZXIucWwtc2l6ZSAucWwtcGlja2VyLWl0ZW1bZGF0YS12YWx1ZT1odWdlXTo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlci5xbC1iYWNrZ3JvdW5kIC5xbC1waWNrZXItaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ucWwtc25vdyAucWwtY29sb3ItcGlja2VyLnFsLWNvbG9yIC5xbC1waWNrZXItaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4ucWwtdG9vbGJhci5xbC1zbm93IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiA4cHg7XG59XG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1mb3JtYXRzIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtcGlja2VyLWxhYmVsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1waWNrZXItb3B0aW9ucyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiByZ2JhKDAsMCwwLDAuMikgMCAycHggOHB4O1xufVxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtcGlja2VyLnFsLWV4cGFuZGVkIC5xbC1waWNrZXItbGFiZWwge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG59XG4ucWwtdG9vbGJhci5xbC1zbm93IC5xbC1waWNrZXIucWwtZXhwYW5kZWQgLnFsLXBpY2tlci1vcHRpb25zIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xufVxuLnFsLXRvb2xiYXIucWwtc25vdyAucWwtY29sb3ItcGlja2VyIC5xbC1waWNrZXItaXRlbS5xbC1zZWxlY3RlZCxcbi5xbC10b29sYmFyLnFsLXNub3cgLnFsLWNvbG9yLXBpY2tlciAucWwtcGlja2VyLWl0ZW06aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMwMDA7XG59XG4ucWwtdG9vbGJhci5xbC1zbm93ICsgLnFsLWNvbnRhaW5lci5xbC1zbm93IHtcbiAgYm9yZGVyLXRvcDogMHB4O1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjZGRkO1xuICBjb2xvcjogIzQ0NDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJWaXNpdCBVUkw6XCI7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwIGlucHV0W3R5cGU9dGV4dF0ge1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogMjZweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIHdpZHRoOiAxNzBweDtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwIGEucWwtcHJldmlldyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwIGEucWwtYWN0aW9uOjphZnRlciB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gIGNvbnRlbnQ6ICdFZGl0JztcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwIGEucWwtcmVtb3ZlOjpiZWZvcmUge1xuICBjb250ZW50OiAnUmVtb3ZlJztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwIGEge1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwLnFsLWVkaXRpbmcgYS5xbC1wcmV2aWV3LFxuLnFsLXNub3cgLnFsLXRvb2x0aXAucWwtZWRpdGluZyBhLnFsLXJlbW92ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcC5xbC1lZGl0aW5nIGlucHV0W3R5cGU9dGV4dF0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcC5xbC1lZGl0aW5nIGEucWwtYWN0aW9uOjphZnRlciB7XG4gIGJvcmRlci1yaWdodDogMHB4O1xuICBjb250ZW50OiAnU2F2ZSc7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5xbC1zbm93IC5xbC10b29sdGlwW2RhdGEtbW9kZT1saW5rXTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJFbnRlciBsaW5rOlwiO1xufVxuLnFsLXNub3cgLnFsLXRvb2x0aXBbZGF0YS1tb2RlPWZvcm11bGFdOjpiZWZvcmUge1xuICBjb250ZW50OiBcIkVudGVyIGZvcm11bGE6XCI7XG59XG4ucWwtc25vdyAucWwtdG9vbHRpcFtkYXRhLW1vZGU9dmlkZW9dOjpiZWZvcmUge1xuICBjb250ZW50OiBcIkVudGVyIHZpZGVvOlwiO1xufVxuLnFsLXNub3cgYSB7XG4gIGNvbG9yOiAjMDZjO1xufVxuLnFsLWNvbnRhaW5lci5xbC1zbm93IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "T/Af":
/*!*****************************************************************!*\
  !*** ./src/app/layout/blog-layout/nav-bar/nav-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_store_post_post_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/post/post.reducer */ "Nx5J");
/* harmony import */ var src_app_store_setting_setting_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/store/setting/setting.reducer */ "c07R");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NavBarComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const cat_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.router.navigate(["post", "cat", "list", cat_r1.id]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r1.name);
} }
class NavBarComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.categoryList$ = store.select(src_app_store_post_post_reducer__WEBPACK_IMPORTED_MODULE_1__["selectNavCategories"]);
        this.headerTitle$ = store.select(src_app_store_setting_setting_reducer__WEBPACK_IMPORTED_MODULE_2__["selectHeaderTitle"]);
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["nav-bar"]], decls: 13, vars: 6, consts: [[1, "container"], [1, "blog-header"], ["href", "#", 1, "blog-header-logo", "text-dark"], [1, "blog-nav", "d-flex", "justify-content-center"], ["routerLink", "/post/home", 1, "p-2", "mr-3"], ["class", "p-2 mr-3", 3, "click", 4, "ngFor", "ngForOf"], ["routerLink", "/post/profile", 1, "p-2", "link-secondary"], [1, "p-2", "mr-3", 3, "click"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavBarComponent_a_9_Template, 2, 1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.headerTitle$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.categoryList$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".blog-header {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin: 25px 0;\n}\n.blog-header h1 {\n  margin: 0 auto;\n}\n.blog-header a {\n  font-weight: 500;\n  font-size: 60px;\n}\n.blog-header a:hover {\n  text-decoration: none;\n}\n.blog-nav {\n  font-size: 13px;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin-bottom: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Jsb2ctbGF5b3V0L25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0o7QUFBSTtFQUNJLGNBQUE7QUFFUjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRVI7QUFEUTtFQUNJLHFCQUFBO0FBR1o7QUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ibG9nLWxheW91dC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjVweCAwO1xyXG4gICAgaDEge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJsb2ctbmF2IHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2I3YjdiNztcclxuICAgIC8vIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2I3YjdiNztcclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "nav-bar",
                templateUrl: "./nav-bar.component.html",
                styleUrls: ["./nav-bar.component.scss"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "Tx//":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _blog_layout_blog_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog-layout/blog-layout.module */ "bQDP");
/* harmony import */ var _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-layout/admin-layout.module */ "FrU0");







class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _blog_layout_blog_layout_module__WEBPACK_IMPORTED_MODULE_4__["BlogLayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutModule"]
            // BrowserModule,
            // BrowserAnimationsModule,
            // AppAsideModule,
            // AppBreadcrumbModule.forRoot(),
            // AppFooterModule,
            // AppHeaderModule,
            // AppSidebarModule,
            // PerfectScrollbarModule
        ], _blog_layout_blog_layout_module__WEBPACK_IMPORTED_MODULE_4__["BlogLayoutModule"],
        _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _blog_layout_blog_layout_module__WEBPACK_IMPORTED_MODULE_4__["BlogLayoutModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutModule"]
        // BrowserModule,
        // BrowserAnimationsModule,
        // AppAsideModule,
        // AppBreadcrumbModule.forRoot(),
        // AppFooterModule,
        // AppHeaderModule,
        // AppSidebarModule,
        // PerfectScrollbarModule
    ], exports: [_blog_layout_blog_layout_module__WEBPACK_IMPORTED_MODULE_4__["BlogLayoutModule"],
        _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _blog_layout_blog_layout_module__WEBPACK_IMPORTED_MODULE_4__["BlogLayoutModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutModule"]
                    // BrowserModule,
                    // BrowserAnimationsModule,
                    // AppAsideModule,
                    // AppBreadcrumbModule.forRoot(),
                    // AppFooterModule,
                    // AppHeaderModule,
                    // AppSidebarModule,
                    // PerfectScrollbarModule
                ],
                declarations: [],
                exports: [
                    _blog_layout_blog_layout_module__WEBPACK_IMPORTED_MODULE_4__["BlogLayoutModule"],
                    _admin_layout_admin_layout_module__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Uv/h":
/*!*********************************************!*\
  !*** ./src/app/service/base.api.service.ts ***!
  \*********************************************/
/*! exports provided: BaseAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAPIService", function() { return BaseAPIService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

class BaseAPIService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        this.headers = this.headers.append('Content-Type', 'application/json; charset=UTF-8');
        this.headers = this.headers.append('Accept', 'application/json; charset=UTF-8');
    }
    setHeaders(settingHeaders) {
        for (let key in settingHeaders) {
            this.headers = this.headers.append(key, settingHeaders[key]);
        }
    }
    GET(url, context, opts) {
        if (context) {
            return this.http.get(this.inject(url, context), opts || {});
        }
        else {
            return this.http.get(url, opts || {});
        }
    }
    POST(url, body = {}, opts, isImage = false) {
        return this.http.post(url, body, Object.assign({ headers: this.headers }, opts));
    }
    PATCH(url, body = {}, opts, isImage = false) {
        return this.http.patch(url, body, Object.assign({ headers: this.headers }, opts));
    }
    DELETE(url, context, opts) {
        if (context) {
            return this.http.delete(this.inject(url, context), opts || {});
        }
        else {
            return this.http.delete(url, opts || {});
        }
    }
    inject(restApi, context) {
        let properties = restApi.match(/(:\w+)/g);
        properties.forEach((property) => {
            let contextVar = property.substring(1);
            let contextValue = context[contextVar];
            if (contextValue !== undefined) {
                restApi = restApi.replace(property, contextValue);
            }
            else {
                throw new Error('inject: context.' + contextVar + ' expected but undefined');
            }
        });
        return restApi;
    }
}


/***/ }),

/***/ "X/lP":
/*!*************************************************************!*\
  !*** ./src/app/layout/blog-layout/blog-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogLayoutComponent", function() { return BlogLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_store_post_post_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/post/post.actions */ "Hebn");
/* harmony import */ var src_app_store_setting_setting_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/setting/setting.actions */ "6erw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_admin_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/admin/setting.service */ "HnAg");
/* harmony import */ var src_app_service_post_postCategory_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/post/postCategory.service */ "gQlS");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "T/Af");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/content.component */ "o1AU");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "Np0w");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "B6+u");















class BlogLayoutComponent {
    constructor(elRef, settingService, postCategoryService, store, router) {
        this.elRef = elRef;
        this.settingService = settingService;
        this.postCategoryService = postCategoryService;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.setStyle();
        this.setPostCategories();
        this.setRouteEvent();
    }
    setStyle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let settingList = yield this.settingService.list();
            let setting = lodash__WEBPACK_IMPORTED_MODULE_2__["chain"](settingList).keyBy('key').mapValues('value').value();
            if (settingList) {
                this.elRef.nativeElement.style.setProperty('--blog-highlight-color', setting.HIGH_COLOR);
                this.elRef.nativeElement.style.setProperty('--blog-category-color', setting.CAT_COLOR);
                this.elRef.nativeElement.style.setProperty('--blog-footer-color', setting.FOOTER_COLOR);
                this.elRef.nativeElement.style.setProperty('--blog-profile-image', `url(${setting.PROFILE_IMAGE})`);
            }
            this.store.dispatch(Object(src_app_store_setting_setting_actions__WEBPACK_IMPORTED_MODULE_4__["setSettings"])({
                settingList,
                profileImage: setting.PROFILE_IMAGE,
                profileDescription: setting.PROFILE_DESCRIPTION,
                profileText: setting.PROFILE_TEXT
            }));
        });
    }
    setPostCategories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let categories = yield this.postCategoryService.list();
            this.store.dispatch(Object(src_app_store_post_post_actions__WEBPACK_IMPORTED_MODULE_3__["setPostCategories"])({ categories }));
        });
    }
    setRouteEvent() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
BlogLayoutComponent.ɵfac = function BlogLayoutComponent_Factory(t) { return new (t || BlogLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_admin_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_post_postCategory_service__WEBPACK_IMPORTED_MODULE_7__["PostCategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
BlogLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlogLayoutComponent, selectors: [["blog-layout"]], decls: 8, vars: 0, consts: [[1, "container"], [1, "row", "mt-4"], [1, "col-xl-9", "px-md-5"], [1, "col-xl-3", "bl-side-bar"]], template: function BlogLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "blog-footer");
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"], _content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"], _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_11__["SideBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap\");\n:root {\n  --blog-btn-text-color: #000000;\n}\n.blog-btn {\n  background: var(--blog-btn-color) !important;\n  color: var(--blog-btn-text-color) !important;\n}\n.blog-loading {\n  background-image: var(--blog-loading-image);\n}\n.blog-background {\n  background: var(--blog-background-color);\n}\n.m-pagenation-li a {\n  font-size: 12px !important;\n  width: 25px !important;\n  height: 25px !important;\n}\nhtml, body {\n  height: 100%;\n}\nbody {\n  font-family: \"Poppins\", sans-serif !important;\n  font-family: \"Sawarabi Mincho\", sans-serif !important;\n  font-family: \"Montserrat\", sans-serif !important;\n}\nh1, h2, h3, h4, h5 {\n  font-family: \"Limelight\", cursive !important;\n  font-family: \"Playfair Display SC\", serif !important;\n  font-family: \"Sawarabi Mincho\", sans-serif !important;\n  font-family: \"Petit Formal Script\", cursive !important;\n  font-family: \"Playfair Display SC\", serif !important;\n  font-family: \"Didact Gothic\", sans-serif !important;\n  font-family: \"Roboto Slab\", serif !important;\n  font-family: \"Itim\", cursive !important;\n  font-family: \"Amita\", cursive !important;\n  font-family: \"Zilla Slab\", serif !important;\n}\nimg {\n  max-width: 100%;\n}\n:root {\n  --blog-highlight-color: #007bff;\n}\n.blog-title {\n  border-bottom: 1px dashed #bdbdbd;\n  display: inline-block;\n  cursor: default;\n  letter-spacing: 1.5px;\n  font-weight: 400;\n  padding-bottom: 5px;\n  position: relative;\n  font-family: \"Zilla Slab\", serif !important;\n}\n.post-group-title {\n  margin: 30px 0;\n  font-size: 20px;\n}\n.disabled {\n  opacity: 0.6;\n  pointer-events: none;\n}\na {\n  cursor: pointer;\n}\na:hover {\n  opacity: 0.8;\n}\n::selection {\n  background: var(--blog-highlight-color);\n  color: #fff;\n}\n.form-control:focus {\n  box-shadow: none;\n  outline: none;\n  z-index: 0;\n  border: 1px solid #000000;\n}\n.post-thumb {\n  border-radius: 8px;\n}\n.post .post-cat {\n  color: var(--blog-category-color);\n  margin-bottom: 3px;\n  font-weight: 900;\n}\n.post .post-title {\n  font-family: \"Zilla Slab\", serif !important;\n  font-weight: 400;\n  letter-spacing: 1px;\n  font-style: italic;\n  cursor: pointer;\n}\n.post .post-title:hover {\n  color: var(--blog-highlight-color);\n}\n.post .post-text {\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.post .post-meta-wrapper {\n  position: relative;\n  bottom: 0;\n  font-size: 12px;\n}\n.animate-opacity {\n  animation: opac 0.8s;\n}\n@keyframes opac {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.tagcloud-wrapper .tagcloud-item {\n  display: inline-block;\n  position: relative;\n  padding: 0 13px;\n  line-height: 16px;\n  margin-right: 8px;\n  font-size: 10px !important;\n  text-transform: uppercase;\n  border-radius: 100px;\n  border: 1px solid #e0e0e0;\n  font-weight: 700;\n  color: #8d8d8d;\n  margin-bottom: 10px;\n}\na {\n  color: #000000;\n}\na:hover {\n  text-decoration: none;\n  color: var(--blog-highlight-color);\n}\n.notyet-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n  font-size: 30px;\n  font-weight: 900;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  color: bisque;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Jsb2ctbGF5b3V0L2Jsb2ctbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9jc3MvYmxvZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFRLHlGQUFBO0FBRUEsNkVBQUE7QUNWQSw2SEFBQTtBQUNBLHdHQUFBO0FETlI7RUFDSSw4QkFBQTtBQUtKO0FBSEE7RUFDSSw0Q0FBQTtFQUNBLDRDQUFBO0FBTUo7QUFKQTtFQUNJLDJDQUFBO0FBT0o7QUFMQTtFQUNJLHdDQUFBO0FBUUo7QUFGQTtFQUNJLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUtKO0FDYkE7RUFBYSxZQUFBO0FEaUJiO0FDZEE7RUFDSSw2Q0FBQTtFQU9BLHFEQUFBO0VBS0EsZ0RBQUE7QURPSjtBQ0xBO0VBQ0ksNENBQUE7RUFDQSxvREFBQTtFQUNBLHFEQUFBO0VBQ0Esc0RBQUE7RUFDQSxvREFBQTtFQUNBLG1EQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkNBQUE7QURRSjtBQ0xBO0VBQ0ksZUFBQTtBRFFKO0FDTkE7RUFDSSwrQkFBQTtBRFNKO0FDUEE7RUFFSSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QURRSjtBQ0dBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QURBSjtBQ0dBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FEQUo7QUNFQTtFQUNJLGVBQUE7QURDSjtBQ0FJO0VBQ0ksWUFBQTtBREVSO0FDS0M7RUFDRyx1Q0FBQTtFQUNBLFdBQUE7QURHSjtBQ0FBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FER0o7QUNEQTtFQUNJLGtCQUFBO0FESUo7QUNESTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRElSO0FDRkk7RUFDSSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURJUjtBQ0hRO0VBQ0ksa0NBQUE7QURLWjtBQ0ZJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FESVI7QUNGSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QURJUjtBQ0FBO0VBQWlCLG9CQUFBO0FESWpCO0FDSnFDO0VBQWdCO0lBQUssVUFBQTtFRFN4RDtFQ1RtRTtJQUFHLFVBQUE7RURZdEU7QUFDRjtBQ1ZJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRFlSO0FDUkE7RUFDSSxjQUFBO0FEV0o7QUNWSTtFQUNJLHFCQUFBO0VBQ0Esa0NBQUE7QURZUjtBQ1JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtFQUFBO0VBQ0EsYUFBQTtBRFdKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Jsb2ctbGF5b3V0L2Jsb2ctbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gICAgLS1ibG9nLWJ0bi10ZXh0LWNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuLmJsb2ctYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsb2ctYnRuLWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLWJsb2ctYnRuLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJsb2ctbG9hZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1ibG9nLWxvYWRpbmctaW1hZ2UpO1xyXG59XHJcbi5ibG9nLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxvZy1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANTAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURvK0h5ZW9uJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLm0tcGFnZW5hdGlvbi1saSBhe1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBpbXBvcnQgJy9zcmMvYXNzZXRzL2Nzcy9ibG9nLnNjc3MnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFicmlsK0ZhdGZhY2UmZmFtaWx5PUFsaWNlJmZhbWlseT1CaXR0ZXI6d2dodEAzMDAmZmFtaWx5PUNvbWZvcnRhYSZmYW1pbHk9TGltZWxpZ2h0JmZhbWlseT1Mb2JzdGVyJmZhbWlseT1Mb2JzdGVyK1R3byZmYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDMwMCZmYW1pbHk9Tm90bytTZXJpZiZmYW1pbHk9T3BlbitTYW5zJmZhbWlseT1QZXRpdCtGb3JtYWwrU2NyaXB0JmZhbWlseT1QaGlsb3NvcGhlciZmYW1pbHk9UGxheWZhaXIrRGlzcGxheStTQzppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MCw5MDA7MSw3MDAmZmFtaWx5PVJva2tpdHQ6d2dodEAzMDAmZmFtaWx5PVNhd2FyYWJpK01pbmNobyZmYW1pbHk9WmlsbGErU2xhYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcclxuLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGlkYWN0K0dvdGhpYyZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFtaXRhJmZhbWlseT1Hb3VkeStCb29rbGV0dGVyKzE5MTEmZmFtaWx5PUl0aW0mZmFtaWx5PVJvYm90bytTbGFiOndnaHRAMzAwOzQwMCZmYW1pbHk9U291cmNlK1NlcmlmK1Bybzp3Z2h0QDMwMCZmYW1pbHk9WXVzZWkrTWFnaWMmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1aaWxsYStTbGFiOml0YWwsd2dodEAwLDMwMDswLDQwMDswLDUwMDsxLDMwMDsxLDQwMDsxLDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG46cm9vdCB7XHJcblxyXG4gIH1cclxuXHJcbmh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cclxuLy9ib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgLy9mb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIC8vZm9udC1mYW1pbHk6ICdaaWxsYSBTbGFiJywgc2VyaWYgIWltcG9ydGFudDtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmUgIWltcG9ydGFudDtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiAnQWJyaWwgRmF0ZmFjZScsIGN1cnNpdmUgIWltcG9ydGFudDtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiAnTG9ic3RlciBUd28nLCBjdXJzaXZlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBmb250LWZhbWlseTogJ1Jva2tpdHQnLCBzZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTYXdhcmFiaSBNaW5jaG8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBmb250LWZhbWlseTogJ1BoaWxvc29waGVyJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgLy8gZm9udC1mYW1pbHk6ICdBbGljZScsIHNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBmb250LWZhbWlseTogJ0JpdHRlcicsIHNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAvL2ZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG59XHJcbmgxLGgyLGgzLGg0LGg1IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGltZWxpZ2h0JywgY3Vyc2l2ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5IFNDJywgc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2F3YXJhYmkgTWluY2hvJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQZXRpdCBGb3JtYWwgU2NyaXB0JywgY3Vyc2l2ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5IFNDJywgc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRGlkYWN0IEdvdGhpYycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdJdGltJywgY3Vyc2l2ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBbWl0YScsIGN1cnNpdmUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsIHNlcmlmICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbmltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuOnJvb3Qge1xyXG4gICAgLS1ibG9nLWhpZ2hsaWdodC1jb2xvcjogIzAwN2JmZjtcclxufVxyXG4uYmxvZy10aXRsZSB7XHJcbiAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHZhcigtLWJsb2ctaGlnaGxpZ2h0LWNvbG9yKSA1MCUsIHRyYW5zcGFyZW50IDUwJSk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNiZGJkYmQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgLy90ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsIHNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAmOjpiZWZvcmUge1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgLy8gICAgIGJvdHRvbTogMDtcclxuICAgIC8vICAgICBsZWZ0OiAwO1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAvLyAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAvLyB9XHJcbn1cclxuLnBvc3QtZ3JvdXAtdGl0bGUge1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5kaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxufVxyXG46Oi1tb3otc2VsZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsb2ctaGlnaGxpZ2h0LWNvbG9yKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gfVxyXG4gOjpzZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxvZy1oaWdobGlnaHQtY29sb3IpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiB9XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbn1cclxuLnBvc3QtdGh1bWIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbi5wb3N0IHtcclxuICAgIC5wb3N0LWNhdCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWJsb2ctY2F0ZWdvcnktY29sb3IpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG4gICAgLnBvc3QtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnWmlsbGEgU2xhYicsIHNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsb2ctaGlnaGxpZ2h0LWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG9zdC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuICAgIC5wb3N0LW1ldGEtd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlLW9wYWNpdHl7YW5pbWF0aW9uOm9wYWMgMC44c31Aa2V5ZnJhbWVzIG9wYWN7ZnJvbXtvcGFjaXR5OjB9IHRve29wYWNpdHk6MX19XHJcblxyXG4udGFnY2xvdWQtd3JhcHBlciB7XHJcbiAgICAudGFnY2xvdWQtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4IWltcG9ydGFudDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogIzhkOGQ4ZDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibG9nLWhpZ2hsaWdodC1jb2xvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub3R5ZXQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsIDFweCAxcHggMCAjMDAwO1xyXG4gICAgY29sb3I6IGJpc3F1ZTtcclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BlogLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'blog-layout',
                templateUrl: './blog-layout.component.html',
                styleUrls: ['./blog-layout.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: src_app_service_admin_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"] }, { type: src_app_service_post_postCategory_service__WEBPACK_IMPORTED_MODULE_7__["PostCategoryService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "YGSq":
/*!******************************************************************!*\
  !*** ./src/app/components/post/post-main/post-main.component.ts ***!
  \******************************************************************/
/*! exports provided: PostMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMainComponent", function() { return PostMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-meta/post-meta.component */ "AK7D");





function PostMainComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostMainComponent_div_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.router.navigate(["post", "view", ctx_r1.post.id]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-post-meta", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background: url(", ctx_r0.post.thumbnail, ");");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.setContent(ctx_r0.post.content));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("createdAt", ctx_r0.post.createdAt)("viewCount", ctx_r0.post.view)("replyCount", ctx_r0.post.replyCount);
} }
class PostMainComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        console.log(this.post, 'post~~');
    }
    setContent(content) {
        let newContent = content ? content.replace(/<[^>]*>/g, "") : '';
        return newContent.length > 140 ? newContent.substring(0, 140) + '...' : newContent;
    }
}
PostMainComponent.ɵfac = function PostMainComponent_Factory(t) { return new (t || PostMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PostMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostMainComponent, selectors: [["app-post-main"]], inputs: { post: "post" }, decls: 1, vars: 1, consts: [["class", "post-main-wrapper", 4, "ngIf"], [1, "post-main-wrapper"], [3, "click"], [1, "post-main", "post"], [1, "post-body", "p-3"], [1, "post-title"], [1, "lead", "my-3"], [3, "createdAt", "viewCount", "replyCount"]], template: function PostMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostMainComponent_div_0_Template, 9, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_3__["PostMetaComponent"]], styles: [".post-main-wrapper[_ngcontent-%COMP%] {\n  height: 400px;\n  position: relative;\n}\n.post-main-wrapper[_ngcontent-%COMP%]   .post-main[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fff;\n  height: 100%;\n  border-radius: 7px;\n  overflow: hidden;\n}\n.post-main-wrapper[_ngcontent-%COMP%]   .post-main[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  z-index: 1000;\n}\n.post-main-wrapper[_ngcontent-%COMP%]   .post-main[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]   .post-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 30px;\n}\n.post-main-wrapper[_ngcontent-%COMP%]   .post-main[_ngcontent-%COMP%]::after {\n  content: \"\";\n  top: 15% !important;\n  background: linear-gradient(to bottom, rgba(50, 50, 50, 0) 0%, rgba(16, 15, 15, 0.91) 89%, rgba(16, 15, 15, 0.93) 93%) !important;\n  transition: 0.2s all ease-in-out;\n  opacity: 0.93;\n  display: block;\n  position: absolute;\n  z-index: 1;\n  bottom: 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QtbWFpbi9wb3N0LW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUdaO0FBRlk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFJaEI7QUFBUTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlJQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ1IsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBR0Esc0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LW1haW4vcG9zdC1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtbWFpbi13cmFwcGVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAucG9zdC1tYWluIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC5wb3N0LWJvZHkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgLnBvc3QtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICB0b3A6IDE1JSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20scmdiYSg1MCw1MCw1MCwwKSAwJSxyZ2JhKDE2LDE1LDE1LC45MSkgODklLHJnYmEoMTYsMTUsMTUsLjkzKSA5MyUpIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjkzO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-main',
                templateUrl: './post-main.component.html',
                styleUrls: ['./post-main.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YJIf":
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_quill_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-quill-upload */ "VHOx");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill */ "kzlf");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_service_other_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/other/upload.service */ "uELl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "CzEO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function EditorComponent_quill_editor_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "quill-editor", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditorComponent_quill_editor_0_Template_quill_editor_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.content = $event; })("ngModelChange", function EditorComponent_quill_editor_0_Template_quill_editor_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.contentChange.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("modules", ctx_r0.modules)("ngModel", ctx_r0.content);
} }
class EditorComponent {
    constructor(uploadService, elRef) {
        this.uploadService = uploadService;
        this.elRef = elRef;
        this.imageList = Array(0).fill(0);
        this.imageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.content = '';
        this.height = 300;
        this.contentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modules = {
            imageHandler: {
                upload: (file) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const uploadData = new FormData();
                    uploadData.append('file', file, file.name);
                    return this.uploadService.uploadImage(uploadData)
                        .then(r => {
                        this.imageList.push(r.imageUrl);
                        this.imageEvent.emit(r.imageUrl);
                        return r.imageUrl;
                    }).catch(e => { console.log(e); });
                }),
                accepts: ['png', 'jpg', 'jpeg', 'jfif'] // Extensions to allow for images (Optional) | Default - ['jpg', 'jpeg', 'png']
            }
        };
        quill__WEBPACK_IMPORTED_MODULE_3___default.a.register('modules/imageHandler', ngx_quill_upload__WEBPACK_IMPORTED_MODULE_2__["ImageHandler"]);
    }
    ngOnInit() {
        this.elRef.nativeElement.style.setProperty('--blog-editor-width', this.height);
    }
    ngAfterContentInit() {
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_other_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], inputs: { content: "content", height: "height" }, outputs: { imageEvent: "imageEvent", contentChange: "contentChange" }, decls: 1, vars: 1, consts: [[3, "modules", "ngModel", "ngModelChange", 4, "ngIf"], [3, "modules", "ngModel", "ngModelChange"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EditorComponent_quill_editor_0_Template, 1, 2, "quill-editor", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modules);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".ql-editor {\n  overflow-y: scroll;\n  height: calc(var(--blog-editor-width) * 1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSw0Q0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFsLWVkaXRvciB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tYmxvZy1lZGl0b3Itd2lkdGgpICogMXB4KTtcclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-editor',
                templateUrl: './editor.component.html',
                styleUrls: ['./editor.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_service_other_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { imageEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], contentChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.module */ "Tx//");
/* harmony import */ var _service_service_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/service.module */ "mhyn");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_ui_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/ui.module */ "624D");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_index_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/index.reducer */ "IlLS");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig),
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _service_service_module__WEBPACK_IMPORTED_MODULE_7__["ServiceModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _shared_ui_module__WEBPACK_IMPORTED_MODULE_10__["UiModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forRoot(_store_index_reducer__WEBPACK_IMPORTED_MODULE_13__["reducers"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
        _service_service_module__WEBPACK_IMPORTED_MODULE_7__["ServiceModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        _shared_ui_module__WEBPACK_IMPORTED_MODULE_10__["UiModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig),
                    _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                    _service_service_module__WEBPACK_IMPORTED_MODULE_7__["ServiceModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                    _shared_ui_module__WEBPACK_IMPORTED_MODULE_10__["UiModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forRoot(_store_index_reducer__WEBPACK_IMPORTED_MODULE_13__["reducers"])
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bQDP":
/*!**********************************************************!*\
  !*** ./src/app/layout/blog-layout/blog-layout.module.ts ***!
  \**********************************************************/
/*! exports provided: BlogLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogLayoutModule", function() { return BlogLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _blog_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog-layout.component */ "X/lP");
/* harmony import */ var src_app_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/ui.module */ "624D");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/content.component */ "o1AU");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "T/Af");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "B6+u");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "Np0w");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/component.module */ "dagM");












class BlogLayoutModule {
}
BlogLayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlogLayoutModule });
BlogLayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlogLayoutModule_Factory(t) { return new (t || BlogLayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            src_app_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"],
            src_app_components_component_module__WEBPACK_IMPORTED_MODULE_10__["ComponentModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlogLayoutModule, { declarations: [_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
        _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["SideBarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
        _blog_layout_component__WEBPACK_IMPORTED_MODULE_3__["BlogLayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        src_app_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"],
        src_app_components_component_module__WEBPACK_IMPORTED_MODULE_10__["ComponentModule"]], exports: [_blog_layout_component__WEBPACK_IMPORTED_MODULE_3__["BlogLayoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogLayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    src_app_shared_ui_module__WEBPACK_IMPORTED_MODULE_4__["UiModule"],
                    src_app_components_component_module__WEBPACK_IMPORTED_MODULE_10__["ComponentModule"]
                ],
                declarations: [
                    _content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"],
                    _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["SideBarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"],
                    _blog_layout_component__WEBPACK_IMPORTED_MODULE_3__["BlogLayoutComponent"]
                ],
                exports: [
                    _blog_layout_component__WEBPACK_IMPORTED_MODULE_3__["BlogLayoutComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "c07R":
/*!**************************************************!*\
  !*** ./src/app/store/setting/setting.reducer.ts ***!
  \**************************************************/
/*! exports provided: settingState, settingReducer, getSettingState, selectProfileImage, selectProfileDescription, selectProfile, selectHeaderTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingState", function() { return settingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingReducer", function() { return settingReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingState", function() { return getSettingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProfileImage", function() { return selectProfileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProfileDescription", function() { return selectProfileDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProfile", function() { return selectProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHeaderTitle", function() { return selectHeaderTitle; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _setting_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.actions */ "6erw");


const settingState = {
    settingList: [],
    profileImage: '',
    profileDescription: '',
    profileText: ''
};
const settingReducer = (state, action) => Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(settingState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_setting_actions__WEBPACK_IMPORTED_MODULE_1__["setSettings"], (state, payload) => {
    console.log(payload, 'payload');
    return Object.assign(Object.assign({}, state), payload);
}))(state, action);
const getSettingState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('setting');
const selectProfileImage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.setting, (state) => state.profileImage);
const selectProfileDescription = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.setting, (state) => state.profileDescription);
const selectProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.setting, (state) => ({ text: state.profileText, image: state.profileImage }));
const selectHeaderTitle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])((state) => state.setting, (state) => {
    if (state.settingList.length == 0) {
        return '';
    }
    let titles = state.settingList.find(s => s.key === 'HEADER_TITLE').value.split(',');
    let randomIndex = Math.floor(Math.random() * titles.length);
    return titles[randomIndex];
});


/***/ }),

/***/ "cppd":
/*!******************************************************************!*\
  !*** ./src/app/components/post/post-edit/post-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: PostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditComponent", function() { return PostEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_quill_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-quill-upload */ "VHOx");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! quill */ "kzlf");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var src_app_store_post_post_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/post/post.reducer */ "Nx5J");
/* harmony import */ var src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/post/post.service */ "1tBJ");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../editor/editor.component */ "YJIf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");














const _c0 = ["modal"];
const _c1 = ["Modal"];
function PostEditComponent_ng_template_0_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No thumbnail yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostEditComponent_ng_template_0_a_36_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostEditComponent_ng_template_0_a_36_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selectThumb(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("outlined", i_r5 == ctx_r4.post.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", i_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c2 = function () { return { label: "ON", value: true }; };
const _c3 = function () { return { label: "OFF", value: false }; };
const _c4 = function (a0, a1) { return [a0, a1]; };
function PostEditComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save a post..");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostEditComponent_ng_template_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ng-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostEditComponent_ng_template_0_Template_ng_select_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.post.categoryId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ng-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostEditComponent_ng_template_0_Template_ng_select_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.post.show = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostEditComponent_ng_template_0_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.post.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "app-editor", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contentChange", function PostEditComponent_ng_template_0_Template_app_editor_contentChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.post.content = $event; })("imageEvent", function PostEditComponent_ng_template_0_Template_app_editor_imageEvent_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.addThumbnail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Thumbnail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PostEditComponent_ng_template_0_p_35_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, PostEditComponent_ng_template_0_a_36_Template, 2, 3, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ng-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostEditComponent_ng_template_0_Template_ng_select_ngModelChange_40_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.post.tags = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostEditComponent_ng_template_0_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "CLOSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostEditComponent_ng_template_0_Template_button_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "SAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 28);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.post.categoryId)("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 17, ctx_r1.categoryList$))("searchable", false)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.post.show)("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3)))("searchable", false)("clearable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r1.post.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.thumbnailList.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.thumbnailList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.post.tags)("multiple", true)("addTag", true)("ngModel", ctx_r1.post.tags)("clearable", false);
} }
class PostEditComponent {
    constructor(postService, modalService, router, store) {
        this.postService = postService;
        this.modalService = modalService;
        this.router = router;
        this.store = store;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"]];
        this.tagInput = '';
        this.vacantPost = {
            title: '',
            categoryId: null,
            thumbnail: '',
            content: '',
            show: null,
            tags: []
        };
        this.thumbnailList = [];
        this.saveEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.categoryList$ = store.select(src_app_store_post_post_reducer__WEBPACK_IMPORTED_MODULE_4__["selectPostCategories"]);
    }
    ngOnInit() {
        quill__WEBPACK_IMPORTED_MODULE_2___default.a.register('modules/imageHandler', ngx_quill_upload__WEBPACK_IMPORTED_MODULE_1__["ImageHandler"]);
        this.post = this.vacantPost;
    }
    open() {
        this.post = this.vacantPost;
        this.modalService.open(this.Modal, { size: 'lg' });
    }
    editOpen(post) {
        this.post = Object.assign({}, post);
        this.setData();
        this.modalService.open(this.Modal, { size: 'lg' });
    }
    close() {
        this.modalService.dismissAll();
    }
    setData() {
        this.post.tags = this.post.tags.map(t => t.name);
        var div = document.createElement('div');
        div.innerHTML = this.post.content;
        div.querySelectorAll('img').forEach(l => {
            this.thumbnailList.push(l.src);
        });
    }
    save() {
        if (this.post.id) {
            this.postService.edit(this.post)
                .then(() => {
                window.location.reload();
                this.close();
            });
        }
        else {
            this.postService.save(this.post)
                .then(() => {
                this.router.navigate(['post']);
                this.close();
            });
        }
    }
    selectThumb(image) {
        this.post.thumbnail = image;
    }
    addThumbnail(image) {
        this.thumbnailList.push(image);
        if (this.thumbnailList.length == 1) {
            this.post.thumbnail = image;
        }
    }
    titi(string) {
        console.log(string, 'string!!!');
        return string;
    }
}
PostEditComponent.ɵfac = function PostEditComponent_Factory(t) { return new (t || PostEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"])); };
PostEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostEditComponent, selectors: [["app-post-edit"]], viewQuery: function PostEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Modal = _t.first);
    } }, outputs: { saveEvent: "saveEvent" }, decls: 2, vars: 0, consts: [["Modal", ""], [1, "modal-header"], [1, "modal-title", "text-center"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["body", "", 1, "modal-body"], [1, "row"], [1, "col-md-7", "col-sm-12"], [1, "form-group"], [1, "col-6", "pr-1"], [1, "d-block"], ["bindLabel", "name", "bindValue", "id", "placeholder", "Category", 3, "ngModel", "items", "searchable", "clearable", "ngModelChange"], [1, "col-6", "pl-1"], ["bindLabel", "label", "bindValue", "value", "placeholder", "Show", 3, "ngModel", "items", "searchable", "clearable", "ngModelChange"], ["for", "company"], ["type", "text", "placeholder", "Enter the post's title.", 1, "form-control", 3, "ngModel", "ngModelChange"], [2, "min-height", "50vh", "margin-bottom", "50px"], [2, "height", "42vh"], [3, "content", "contentChange", "imageEvent"], [1, "col-md-5", "col-sm-12"], [1, "thumb-list"], ["class", "text-info mb-0 ml-2", 4, "ngIf"], ["class", "thumb-item", 3, "outlined", "click", 4, "ngFor", "ngForOf"], ["placeholder", "No tag yet", 1, "disable-arrow", "disable-dropdown", 3, "items", "multiple", "addTag", "ngModel", "clearable", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", "px-3", 3, "click"], ["type", "button", 1, "btn", "btn-dark", "px-4", 3, "click"], [1, "right-side-wrapper"], [1, "text-info", "mb-0", "ml-2"], [1, "thumb-item", 3, "click"], [1, "mr-2", 3, "src"]], template: function PostEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostEditComponent_ng_template_0_Template, 47, 24, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _editor_editor_component__WEBPACK_IMPORTED_MODULE_11__["EditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".example-full-width {\n  width: 100%;\n}\n\n.jss1444 {\n  background: linear-gradient(60deg, #ec407a, #d81b60);\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n}\n\n.right-side-wrapper {\n  position: absolute;\n  right: -19vh;\n}\n\n.ng-select.disable-dropdown ng-dropdown-panel {\n  display: none;\n}\n\n.ng-select.disable-arrow .ng-arrow-wrapper .ng-arrow {\n  display: none;\n}\n\n.ng-select .ng-select-container {\n  border-radius: 0;\n}\n\n.ng-select.ng-select-focused:not(.ng-select-opened) > .ng-select-container {\n  border-color: #000000;\n  box-shadow: none;\n}\n\n.form-control {\n  border-radius: 0;\n}\n\n.thumb-list {\n  min-height: 70px;\n  border: 1px solid #cecece;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n}\n\n.thumb-list .thumb-item {\n  width: 50px;\n  height: 50px;\n  display: inline-block;\n  padding: 2px;\n  margin-right: 2px;\n}\n\n.thumb-list .thumb-item img {\n  width: 100%;\n  height: 100%;\n}\n\n.thumb-list .thumb-item.outlined {\n  border: 1px solid #008eff;\n  border-radius: 2px;\n}\n\n.form-group label {\n  font-size: 14px;\n}\n\n.modal-header, .modal-footer {\n  border: none;\n}\n\n.modal-content {\n  border: none;\n  border-radius: 0;\n}\n\n.modal-footer button {\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QtZWRpdC9wb3N0LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxvREFBQTtFQUNBLG9GQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFMSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFPUjs7QUFOUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBUVo7O0FBTlE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBUVo7O0FBSEk7RUFDSSxlQUFBO0FBTVI7O0FBSEE7RUFDSSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFKSTtFQUNJLGdCQUFBO0FBT1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QvcG9zdC1lZGl0L3Bvc3QtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5qc3MxNDQ0IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VjNDA3YSwgI2Q4MWI2MCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDAgcmdiYSgwLCAwLCAwLC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDIzMywgMzAsIDk5LC40KTtcclxufVxyXG4ucmlnaHQtc2lkZS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMTl2aDtcclxufVxyXG5cclxuLm5nLXNlbGVjdC5kaXNhYmxlLWRyb3Bkb3duIG5nLWRyb3Bkb3duLXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5uZy1zZWxlY3QuZGlzYWJsZS1hcnJvdyAubmctYXJyb3ctd3JhcHBlciAubmctYXJyb3cge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLm5nLXNlbGVjdC5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpPi5uZy1zZWxlY3QtY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMDAwMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59ICAgIFxyXG4udGh1bWItbGlzdCB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLnRodW1iLWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYub3V0bGluZWQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4ZWZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuLm1vZGFsLWhlYWRlciwubW9kYWwtZm9vdGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcbi5tb2RhbC1mb290ZXIge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-edit',
                templateUrl: './post-edit.component.html',
                styleUrls: ['./post-edit.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }]; }, { modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['modal']
        }], Modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['Modal']
        }], saveEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "dFaF":
/*!*****************************************************!*\
  !*** ./src/app/service/other/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthGuardService {
    constructor() {
    }
    canActivate(route, state) {
        console.log('auth guard');
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dGRN":
/*!******************************************************!*\
  !*** ./src/app/service/admin/homeSetting.service.ts ***!
  \******************************************************/
/*! exports provided: HomeSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSettingService", function() { return HomeSettingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.api.service */ "Uv/h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class HomeSettingService extends _base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseAPIService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.ROUTES = {
            list: '/api/setting/home/list',
            save: '/api/setting/home',
            saveOrder: '/api/setting/home/order',
            setPosts: '/api/setting/home/posts',
            delete: '/api/setting/home/:settingId'
        };
    }
    list() {
        return this.GET(this.ROUTES.list).toPromise();
    }
    save(setting) {
        return this.POST(this.ROUTES.save, { setting }).toPromise();
    }
    saveOrder(settings) {
        return this.POST(this.ROUTES.saveOrder, { settings }).toPromise();
    }
    setPosts() {
        return this.GET(this.ROUTES.setPosts).toPromise();
    }
    delete(settingId) {
        return this.DELETE(this.ROUTES.delete, { settingId }).toPromise();
    }
}
HomeSettingService.ɵfac = function HomeSettingService_Factory(t) { return new (t || HomeSettingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HomeSettingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeSettingService, factory: HomeSettingService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeSettingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "dagM":
/*!************************************************!*\
  !*** ./src/app/components/component.module.ts ***!
  \************************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal.component */ "7aL3");
/* harmony import */ var _pagenation_pagenation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagenation/pagenation.component */ "e2sg");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor/editor.component */ "YJIf");
/* harmony import */ var _post_post_reply_post_reply_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post-reply/post-reply.component */ "uWw8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post/post-edit/post-edit.component */ "cppd");
/* harmony import */ var _shared_ui_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/ui.module */ "624D");
/* harmony import */ var _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image-upload/image-upload.component */ "O5Os");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table/table.component */ "9pw4");
/* harmony import */ var _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table/table-row/table-row.component */ "vVKM");
/* harmony import */ var _post_post_middle_post_middle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./post/post-middle/post-middle.component */ "k6+q");
/* harmony import */ var _post_post_left_post_left_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./post/post-left/post-left.component */ "3nM9");
/* harmony import */ var _post_post_main_post_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post/post-main/post-main.component */ "YGSq");
/* harmony import */ var _post_post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post/post-meta/post-meta.component */ "AK7D");

















class ComponentModule {
}
ComponentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentModule });
ComponentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentModule_Factory(t) { return new (t || ComponentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _shared_ui_module__WEBPACK_IMPORTED_MODULE_8__["UiModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentModule, { declarations: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"],
        _post_post_left_post_left_component__WEBPACK_IMPORTED_MODULE_13__["PostLeftComponent"],
        _pagenation_pagenation_component__WEBPACK_IMPORTED_MODULE_3__["PagenationComponent"],
        _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"],
        _post_post_reply_post_reply_component__WEBPACK_IMPORTED_MODULE_5__["PostReplyComponent"],
        _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_7__["PostEditComponent"],
        _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_9__["ImageUploadComponent"],
        _table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"],
        _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_11__["TableRowComponent"],
        _post_post_middle_post_middle_component__WEBPACK_IMPORTED_MODULE_12__["PostMiddleComponent"],
        _post_post_main_post_main_component__WEBPACK_IMPORTED_MODULE_14__["PostMainComponent"],
        _post_post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_15__["PostMetaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _shared_ui_module__WEBPACK_IMPORTED_MODULE_8__["UiModule"]], exports: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"],
        _post_post_left_post_left_component__WEBPACK_IMPORTED_MODULE_13__["PostLeftComponent"],
        _pagenation_pagenation_component__WEBPACK_IMPORTED_MODULE_3__["PagenationComponent"],
        _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"],
        _post_post_reply_post_reply_component__WEBPACK_IMPORTED_MODULE_5__["PostReplyComponent"],
        _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_7__["PostEditComponent"],
        _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_9__["ImageUploadComponent"],
        _table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"],
        _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_11__["TableRowComponent"],
        _post_post_middle_post_middle_component__WEBPACK_IMPORTED_MODULE_12__["PostMiddleComponent"],
        _post_post_main_post_main_component__WEBPACK_IMPORTED_MODULE_14__["PostMainComponent"],
        _post_post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_15__["PostMetaComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"],
                    _post_post_left_post_left_component__WEBPACK_IMPORTED_MODULE_13__["PostLeftComponent"],
                    _pagenation_pagenation_component__WEBPACK_IMPORTED_MODULE_3__["PagenationComponent"],
                    _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"],
                    _post_post_reply_post_reply_component__WEBPACK_IMPORTED_MODULE_5__["PostReplyComponent"],
                    _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_7__["PostEditComponent"],
                    _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_9__["ImageUploadComponent"],
                    _table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"],
                    _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_11__["TableRowComponent"],
                    _post_post_middle_post_middle_component__WEBPACK_IMPORTED_MODULE_12__["PostMiddleComponent"],
                    _post_post_main_post_main_component__WEBPACK_IMPORTED_MODULE_14__["PostMainComponent"],
                    _post_post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_15__["PostMetaComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _shared_ui_module__WEBPACK_IMPORTED_MODULE_8__["UiModule"],
                ],
                exports: [
                    _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"],
                    _post_post_left_post_left_component__WEBPACK_IMPORTED_MODULE_13__["PostLeftComponent"],
                    _pagenation_pagenation_component__WEBPACK_IMPORTED_MODULE_3__["PagenationComponent"],
                    _editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"],
                    _post_post_reply_post_reply_component__WEBPACK_IMPORTED_MODULE_5__["PostReplyComponent"],
                    _post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_7__["PostEditComponent"],
                    _image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_9__["ImageUploadComponent"],
                    _table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"],
                    _table_table_row_table_row_component__WEBPACK_IMPORTED_MODULE_11__["TableRowComponent"],
                    _post_post_middle_post_middle_component__WEBPACK_IMPORTED_MODULE_12__["PostMiddleComponent"],
                    _post_post_main_post_main_component__WEBPACK_IMPORTED_MODULE_14__["PostMainComponent"],
                    _post_post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_15__["PostMetaComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "e2sg":
/*!***************************************************************!*\
  !*** ./src/app/components/pagenation/pagenation.component.ts ***!
  \***************************************************************/
/*! exports provided: PagenationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenationComponent", function() { return PagenationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PagenationComponent_div_0_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagenationComponent_div_0_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PagenationComponent_div_0_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagenationComponent_div_0_li_4_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const page_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.clickPage(page_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r2.currPage == page_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r6);
} }
function PagenationComponent_div_0_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagenationComponent_div_0_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PagenationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PagenationComponent_div_0_li_3_Template, 3, 0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PagenationComponent_div_0_li_4_Template, 3, 3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PagenationComponent_div_0_li_5_Template, 3, 0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currPage > ctx_r0.blockPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.pageArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.endPage != ctx_r0.totalPage);
} }
class PagenationComponent {
    constructor() {
        this.currPage = 1;
        this.totalCount = 0;
        this.blockCount = 5; // 한 페이지에 보여줄 레코드수
        this.blockPage = 5; // 한 블록에 보여줄 페이지수
        this.pageArr = [];
    }
    // @Input('totalCount') 
    // set setTotalCount(totalCount) {
    //   this.totalCount = totalCount;
    //   this.pageInit();
    // }
    ngOnInit() {
        //this.pageInit();
    }
    ngOnChanges() {
        this.pageInit();
    }
    clickPage(index) {
        this.currPage = index;
        this.pageInit();
    }
    pageInit() {
        window.scroll(0, 0);
        // 시작레코드
        this.startRow = ((this.currPage - 1) * this.blockCount);
        // 끝레코드
        this.endRow = this.startRow + this.blockCount - 1;
        // 총페이지수
        this.totalPage = Math.floor(this.totalCount / this.blockCount + (this.totalCount % this.blockCount == 0 ? 0 : 1));
        // 시작페이지
        this.startPage = Math.floor((this.currPage - 1) / this.blockPage) * this.blockPage + 1;
        // 끝페이지
        this.endPage = this.startPage + this.blockPage - 1;
        if (this.totalPage < this.endPage) {
            this.endPage = this.totalPage;
        }
        //보여주는 페이지 배열
        this.pageArr = Array.from({ length: (this.endPage - this.startPage + 1) }, (_, i) => this.startPage + i);
        console.log(this.startRow, 'startRow');
        console.log(this.endRow, 'endRow');
        console.log(this.totalPage, 'totalPage');
        // console.log(this.startPage,'startPage')
        console.log(this.blockCount, 'blockCount');
    }
    previous() {
        this.currPage = this.startPage - 1;
        this.pageInit();
    }
    next() {
        this.currPage = this.endPage + 1;
        this.pageInit();
    }
}
PagenationComponent.ɵfac = function PagenationComponent_Factory(t) { return new (t || PagenationComponent)(); };
PagenationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenationComponent, selectors: [["app-pagenation"]], inputs: { currPage: "currPage", totalCount: "totalCount", blockCount: "blockCount" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "m-pagenation"], [1, "m-pagenation-ul"], ["class", "m-pagenation-li", 3, "click", 4, "ngIf"], ["class", "m-pagenation-li", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "m-pagenation-li", 3, "click"], ["href", "javascript:void(0)", 1, "page-link"]], template: function PagenationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PagenationComponent_div_0_Template, 6, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalPage > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".m-pagenation[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  padding: 1rem;\n}\n.m-pagenation[_ngcontent-%COMP%]   .m-pagenation-ul[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  padding: 0;\n  flex-wrap: wrap;\n  list-style: none;\n  align-items: center;\n}\n.m-pagenation[_ngcontent-%COMP%]   .m-pagenation-ul[_ngcontent-%COMP%]   .m-pagenation-li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  height: 32px;\n  width: 32px;\n  margin: 0 3px;\n  padding: 0 6px;\n  font-size: 0.875rem;\n  box-sizing: border-box;\n  text-align: center;\n  font-weight: 400;\n  line-height: 1.43;\n  border-radius: 16px;\n  letter-spacing: 0.01071em;\n  display: inline-flex;\n  outline: 0;\n  border: 0;\n  align-items: center;\n  position: relative;\n  align-items: center;\n  -webkit-user-select: none;\n          user-select: none;\n  text-decoration: none;\n  justify-content: center;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.m-pagenation[_ngcontent-%COMP%]   .m-pagenation-ul[_ngcontent-%COMP%]   .m-pagenation-li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.m-pagenation[_ngcontent-%COMP%]   .m-pagenation-ul[_ngcontent-%COMP%]   .m-pagenation-li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.08);\n}\n.m-pagenation[_ngcontent-%COMP%]   .m-pagenation-ul[_ngcontent-%COMP%]   .m-pagenation-li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlbmF0aW9uL3BhZ2VuYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0ksU0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0osZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFZO0VBQ0ksMEJBQUE7RUFDWixZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0NBQUE7QUFFSjtBQUFZO0VBQ0kscUNBQUE7QUFFaEI7QUFBWTtFQUNJLHFDQUFBO0FBRWhCO0FBQVk7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FBRWhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlbmF0aW9uL3BhZ2VuYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS1wYWdlbmF0aW9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIC5tLXBhZ2VuYXRpb24tdWwge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAubS1wYWdlbmF0aW9uLWxpIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgbWFyZ2luOiAwIDNweDtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDEwNzFlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmFjdGl2ZSBhe1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagenation',
                templateUrl: './pagenation.component.html',
                styleUrls: ['./pagenation.component.scss']
            }]
    }], function () { return []; }, { currPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blockCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "gQlS":
/*!******************************************************!*\
  !*** ./src/app/service/post/postCategory.service.ts ***!
  \******************************************************/
/*! exports provided: PostCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCategoryService", function() { return PostCategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.api.service */ "Uv/h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PostCategoryService extends _base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseAPIService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.ROUTES = {
            list: '/api/post/category/list',
            adminList: '/api/post/admin/category/list',
            edit: '/api/post/category/list'
        };
    }
    list() {
        return this.GET(this.ROUTES.list).toPromise();
    }
    adminList() {
        return this.GET(this.ROUTES.adminList).toPromise();
    }
    edit(categoryList, deletedList) {
        return this.PATCH(this.ROUTES.edit, { categoryList, deletedList }).toPromise();
    }
}
PostCategoryService.ɵfac = function PostCategoryService_Factory(t) { return new (t || PostCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PostCategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostCategoryService, factory: PostCategoryService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostCategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "k6+q":
/*!**********************************************************************!*\
  !*** ./src/app/components/post/post-middle/post-middle.component.ts ***!
  \**********************************************************************/
/*! exports provided: PostMiddleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMiddleComponent", function() { return PostMiddleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-meta/post-meta.component */ "AK7D");





function PostMiddleComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostMiddleComponent_div_0_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.router.navigate(["post", "view", ctx_r4.post.id]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx_r1.post.thumbnail, ")");
} }
function PostMiddleComponent_div_0_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.post.category.name);
} }
function PostMiddleComponent_div_0_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.setContent(ctx_r3.post.content));
} }
function PostMiddleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostMiddleComponent_div_0_div_1_Template, 2, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostMiddleComponent_div_0_p_3_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostMiddleComponent_div_0_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.router.navigate(["post", "view", ctx_r6.post.id]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostMiddleComponent_div_0_p_7_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-post-meta", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.post.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("no-thumb", !ctx_r0.post.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.catShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.textShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("createdAt", ctx_r0.post.createdAt)("viewCount", ctx_r0.post.view)("replyCount", ctx_r0.post.replyCount);
} }
class PostMiddleComponent {
    constructor(router) {
        this.router = router;
        this.catShow = true;
        this.textShow = true;
    }
    ngOnInit() {
        console.log(this.post);
    }
    setContent(content) {
        let length = this.post.thumbnail ? 25 : 100;
        let newContent = content ? content.replace(/<[^>]*>/g, "") : '';
        return newContent.length > length ? newContent.substring(0, length) + '...' : newContent;
    }
}
PostMiddleComponent.ɵfac = function PostMiddleComponent_Factory(t) { return new (t || PostMiddleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PostMiddleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostMiddleComponent, selectors: [["app-post-middle"]], inputs: { post: "post", catShow: "catShow", textShow: "textShow" }, decls: 1, vars: 1, consts: [["class", "post-md post animate-opacity", 4, "ngIf"], [1, "post-md", "post", "animate-opacity"], ["class", "post-thumb", 4, "ngIf"], [1, "post-body"], ["class", "post-cat", 4, "ngIf"], [1, "post-title"], [3, "click"], ["class", "post-text", 4, "ngIf"], [3, "createdAt", "viewCount", "replyCount"], [1, "post-thumb"], [1, "thumb-img", 3, "click"], [1, "post-cat"], [1, "post-text"]], template: function PostMiddleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostMiddleComponent_div_0_Template, 9, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.post);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _post_meta_post_meta_component__WEBPACK_IMPORTED_MODULE_3__["PostMetaComponent"]], styles: [".post-md[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%] {\n  padding-bottom: 75% !important;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.post-md[_ngcontent-%COMP%]   .post-thumb[_ngcontent-%COMP%]   .thumb-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.post-md[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]:not(.no-thumb) {\n  padding: 15px 10px 0 10px;\n  height: 150px;\n  position: relative;\n}\n.post-md[_ngcontent-%COMP%]   .post-body[_ngcontent-%COMP%]:not(.no-thumb)   .post-title[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.post-md[_ngcontent-%COMP%]   .post-body.no-thumb[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.post-md[_ngcontent-%COMP%]   .post-body.no-thumb[_ngcontent-%COMP%]   .post-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.post-md[_ngcontent-%COMP%]   .post-text[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  opacity: 0.9;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QtbWlkZGxlL3Bvc3QtbWlkZGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUNaO0FBR1E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQURaO0FBRVk7RUFDSSxlQUFBO0FBQWhCO0FBR1E7RUFDSSxtQkFBQTtBQURaO0FBRVk7RUFDSSxlQUFBO0FBQWhCO0FBS0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFIUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LW1pZGRsZS9wb3N0LW1pZGRsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LW1kIHtcclxuICAgIC5wb3N0LXRodW1iIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNzUlIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLnRodW1iLWltZyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wb3N0LWJvZHkge1xyXG4gICAgICAgICY6bm90KC5uby10aHVtYikge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5wb3N0LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLm5vLXRodW1iIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgLnBvc3QtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wb3N0LXRleHQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostMiddleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-middle',
                templateUrl: './post-middle.component.html',
                styleUrls: ['./post-middle.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], catShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], textShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mhyn":
/*!*******************************************!*\
  !*** ./src/app/service/service.module.ts ***!
  \*******************************************/
/*! exports provided: ServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _admin_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/setting.service */ "HnAg");
/* harmony import */ var _other_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other/login.service */ "mkk2");
/* harmony import */ var _other_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./other/snackbar.service */ "rxfW");
/* harmony import */ var _other_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./other/upload.service */ "uELl");
/* harmony import */ var _post_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/post.service */ "1tBJ");
/* harmony import */ var _admin_homeSetting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/homeSetting.service */ "dGRN");
/* harmony import */ var _post_postCategory_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post/postCategory.service */ "gQlS");










class ServiceModule {
}
ServiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServiceModule });
ServiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServiceModule_Factory(t) { return new (t || ServiceModule)(); }, providers: [
        _other_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"],
        _post_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"],
        _post_postCategory_service__WEBPACK_IMPORTED_MODULE_8__["PostCategoryService"],
        _other_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"],
        _other_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
        _admin_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"],
        _admin_homeSetting_service__WEBPACK_IMPORTED_MODULE_7__["HomeSettingService"]
    ], imports: [[
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServiceModule, { imports: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [
                    _other_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"],
                    _post_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"],
                    _post_postCategory_service__WEBPACK_IMPORTED_MODULE_8__["PostCategoryService"],
                    _other_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"],
                    _other_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
                    _admin_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"],
                    _admin_homeSetting_service__WEBPACK_IMPORTED_MODULE_7__["HomeSettingService"]
                ],
                imports: [
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "mkk2":
/*!************************************************!*\
  !*** ./src/app/service/other/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");






class LoginService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.user = user;
                localStorage.setItem('mn-blog-user', JSON.stringify(this.user));
            }
            else {
                localStorage.setItem('mn-blog-user', null);
            }
        });
    }
    login() {
        return this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth.GoogleAuthProvider())
            .then(r => {
            let email = r.additionalUserInfo.profile['email'];
            console.log(email, '<- email');
            if (!['mila@un7qi3.co', 'bellella13@gmail.com'].includes(email)) {
                this.logout();
                alert('You are not allowed.');
                return false;
            }
            return true;
        });
    }
    logout() {
        return this.afAuth.signOut()
            .then(r => {
            console.log('You\'ve just signed out.');
        });
    }
    isAdmin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('isAdmin:', yield this.afAuth.currentUser);
            return (yield this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).toPromise()) ? true : false;
        });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "o1AU":
/*!*****************************************************************!*\
  !*** ./src/app/layout/blog-layout/content/content.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/post/post.service */ "1tBJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ContentComponent {
    constructor(postService) {
        this.postService = postService;
        this.status = 'loading';
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["content"]], decls: 1, vars: 0, template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ibG9nLWxheW91dC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }]; }, null); })();


/***/ }),

/***/ "o9f7":
/*!***************************************************************!*\
  !*** ./src/app/layout/admin-layout/admin-layout.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/angular */ "ZTs3");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class AdminLayoutComponent {
    constructor() {
        this.sidebarMinimized = false;
        this.navItems = [
            // {
            //   name: 'Dashboard',
            //   url: '/admin/dashboard',
            //   icon: 'icon-pencil',
            //   badge: {
            //     variant: 'info',
            //     text: 'NEW'
            //   }
            // },
            {
                title: true,
                name: 'Setting'
            },
            {
                name: 'UI',
                url: '/admin/setting/ui',
                icon: 'icon-star'
            },
            {
                name: 'Home',
                url: '/admin/setting/home',
                icon: 'icon-home'
            },
            {
                title: true,
                name: 'Post'
            },
            {
                name: 'Category',
                url: '/admin/category',
                icon: 'icon-list'
            },
            {
                name: 'Posts',
                url: '/admin/posts',
                icon: 'icon-pencil'
            }
        ];
    }
    toggleMinimize(e) {
        this.sidebarMinimized = e;
    }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(); };
AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-dashboard"]], decls: 19, vars: 8, consts: [[1, "app-body"], [3, "fixed", "display", "minimized", "minimizedChange"], ["appSidebar", ""], [3, "navItems", "perfectScrollbar", "disabled"], [1, "main"], [1, "container-fluid"], [3, "fixed", "display", "ngClass"], ["href", "https://coreui.io"], [1, "ml-auto"], ["href", "https://coreui.io/angular"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-sidebar", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("minimizedChange", function AdminLayoutComponent_Template_app_sidebar_minimizedChange_1_listener($event) { return ctx.toggleMinimize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-sidebar-nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sidebar-minimizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "cui-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-aside", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "CoreUI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u00A9 2018 creativeLabs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CoreUI for Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixed", true)("display", "lg")("minimized", ctx.sidebarMinimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems)("disabled", _r0.minimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixed", true)("display", false)("ngClass", "test");
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './admin-layout.component.html',
                styleUrls: ['./admin-layout.component.scss', '../../../assets/css/coreui.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rxfW":
/*!***************************************************!*\
  !*** ./src/app/service/other/snackbar.service.ts ***!
  \***************************************************/
/*! exports provided: SnackbarComponent, SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




class SnackbarComponent {
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
    }
}
SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) { return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"])); };
SnackbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackbarComponent, selectors: [["snackbar-cmp"]], decls: 2, vars: 1, consts: [[1, "example-pizza-party"]], template: function SnackbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data, "\n");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'snackbar-cmp',
                template: `
<span class="example-pizza-party">
  {{data}}
</span>
        `
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }] }]; }, null); })();
class SnackbarService {
    constructor(_snackBar, componentFactoryResolver) {
        this._snackBar = _snackBar;
        this.componentFactoryResolver = componentFactoryResolver;
        this.rightTopPosition = {
            horizontalPosition: 'right',
            verticalPosition: 'top'
        };
        this.centerBottomPosition = {
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
        };
    }
    openSnackBar(title, duration, position) {
        this._snackBar.openFromComponent(SnackbarComponent, {
            data: title,
            duration: duration * 1000,
            horizontalPosition: position.horizontalPosition,
            verticalPosition: position.horizontalPosition
        });
    }
    saveSnack(title) {
        this.openSnackBar(title, 3, this.centerBottomPosition);
    }
    normalSnack(title) {
        this.openSnackBar(title, 3, this.centerBottomPosition);
    }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
SnackbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackbarService, factory: SnackbarService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, null); })();


/***/ }),

/***/ "uELl":
/*!*************************************************!*\
  !*** ./src/app/service/other/upload.service.ts ***!
  \*************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.api.service */ "Uv/h");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UploadService extends _base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseAPIService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.ROUTES = {
            uploadImage: '/api/upload/image'
        };
    }
    uploadImage(data) {
        return this.http.post(this.ROUTES.uploadImage, data).toPromise();
    }
}
UploadService.ɵfac = function UploadService_Factory(t) { return new (t || UploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UploadService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadService, factory: UploadService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "uWw8":
/*!********************************************************************!*\
  !*** ./src/app/components/post/post-reply/post-reply.component.ts ***!
  \********************************************************************/
/*! exports provided: PostReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostReplyComponent", function() { return PostReplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/post/post.service */ "1tBJ");
/* harmony import */ var src_app_service_other_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/other/snackbar.service */ "rxfW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function PostReplyComponent_div_0_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reply_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reply_r2.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, reply_r2.createdAt), " | ", reply_r2.ip, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](reply_r2.content);
} }
function PostReplyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostReplyComponent_div_0_li_4_Template, 8, 6, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.replyList.length, " Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.replyList);
} }
class PostReplyComponent {
    constructor(postService, snackbarService) {
        this.postService = postService;
        this.snackbarService = snackbarService;
        this.replyVacant = {
            id: 0,
            user_name: '',
            content: '',
            ip: '',
            show: 1
        };
        this.replyList = [];
    }
    ngOnInit() {
        this.reply = Object.assign({ post_id: this.postId }, this.replyVacant);
        this.getReplyList();
    }
    getReplyList() {
        this.postService.replyList(this.postId)
            .then(r => {
            this.replyList = r;
            console.log(r, 'reply');
        });
    }
    saveReply() {
        this.postService.saveReply(this.reply)
            .then(r => {
            this.snackbarService.saveSnack('Thank You For Your Sweet Comment!🍓');
            this.reply = Object.assign({}, this.replyVacant);
            this.getReplyList();
        });
    }
}
PostReplyComponent.ɵfac = function PostReplyComponent_Factory(t) { return new (t || PostReplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_other_snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"])); };
PostReplyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostReplyComponent, selectors: [["app-post-reply"]], inputs: { postId: "postId" }, decls: 26, vars: 5, consts: [["class", "reply-wrapper", 4, "ngIf"], [1, "reply-form-wrapper"], [1, "form-title"], [1, "row"], [1, "col-4"], [1, "form-group"], ["for", "name"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "email"], ["type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "message"], ["name", "", "id", "message", "rows", "5", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "reply-btn", 3, "click"], [1, "reply-wrapper"], [1, "reply-count"], [1, "comment-wrapper"], ["class", "comment", 4, "ngFor", "ngForOf"], [1, "comment"], [1, "comment-name"], [1, "comment-meta"], [1, "comment-content"]], template: function PostReplyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostReplyComponent_div_0_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Leave a comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostReplyComponent_Template_input_ngModelChange_9_listener($event) { return ctx.reply.user_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostReplyComponent_Template_input_ngModelChange_14_listener($event) { return ctx.reply.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostReplyComponent_Template_input_ngModelChange_19_listener($event) { return ctx.reply.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PostReplyComponent_Template_textarea_ngModelChange_23_listener($event) { return ctx.reply.content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostReplyComponent_Template_button_click_24_listener() { return ctx.saveReply(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Post Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.replyList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reply.user_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reply.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reply.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.reply.content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".reply-wrapper[_ngcontent-%COMP%]   .reply-count[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.reply-wrapper[_ngcontent-%COMP%]   ul.comment-wrapper[_ngcontent-%COMP%] {\n  margin: 30px 0 0 0;\n  list-style: none;\n  padding: 0;\n}\n.reply-wrapper[_ngcontent-%COMP%]   ul.comment-wrapper[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid #f0f0f0;\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n}\n.reply-wrapper[_ngcontent-%COMP%]   .comment-name[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.reply-wrapper[_ngcontent-%COMP%]   .comment-meta[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.6;\n}\n.reply-wrapper[_ngcontent-%COMP%]   .comment-content[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.reply-form-wrapper[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  padding: 30px;\n  background: #f7f7f7;\n}\n.reply-form-wrapper[_ngcontent-%COMP%]   .form-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.reply-form-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.reply-form-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n.reply-form-wrapper[_ngcontent-%COMP%]   .reply-btn[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #fff;\n  border: none;\n  border-radius: 3px;\n  border: 1px solid #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0L3Bvc3QtcmVwbHkvcG9zdC1yZXBseS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFBUjtBQUVZO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQWhCO0FBSUk7RUFDSSxlQUFBO0FBRlI7QUFJSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBRlI7QUFJSTtFQUNJLGVBQUE7QUFGUjtBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUlJO0VBQ0ksZUFBQTtBQUZSO0FBSUk7RUFDSSxlQUFBO0FBRlI7QUFJSTtFQUNJLFlBQUE7QUFGUjtBQUlJO0VBQ0ksYUFBQTtFQUNKLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC9wb3N0LXJlcGx5L3Bvc3QtcmVwbHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwbHktd3JhcHBlciB7XHJcbiAgICAucmVwbHktY291bnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIHVsLmNvbW1lbnQtd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb21tZW50LW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH1cclxuICAgIC5jb21tZW50LW1ldGEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgICAuY29tbWVudC1jb250ZW50IHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZXBseS1mb3JtLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgLmZvcm0tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnJlcGx5LWJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostReplyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-reply',
                templateUrl: './post-reply.component.html',
                styleUrls: ['./post-reply.component.scss']
            }]
    }], function () { return [{ type: src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: src_app_service_other_snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"] }]; }, { postId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vVKM":
/*!*******************************************************************!*\
  !*** ./src/app/components/table/table-row/table-row.component.ts ***!
  \*******************************************************************/
/*! exports provided: TableRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRowComponent", function() { return TableRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["column"];
class TableRowComponent {
    constructor() {
        this.title = '';
        this.type = '';
        this.width = 0;
    }
    ngOnInit() {
    }
}
TableRowComponent.ɵfac = function TableRowComponent_Factory(t) { return new (t || TableRowComponent)(); };
TableRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableRowComponent, selectors: [["app-table-row"]], contentQueries: function TableRowComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.column = _t.first);
    } }, inputs: { title: "title", type: "type", width: "width", row: "row", data: "data", val: "val" }, decls: 0, vars: 0, template: function TableRowComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvdGFibGUtcm93L3RhYmxlLXJvdy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table-row',
                templateUrl: './table-row.component.html',
                styleUrls: ['./table-row.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], val: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: ['column']
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_blog_layout_blog_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/blog-layout/blog-layout.component */ "X/lP");
/* harmony import */ var _layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/admin-layout/admin-layout.component */ "o9f7");
/* harmony import */ var _service_other_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/other/auth-guard.service */ "dFaF");







const routes = [
    {
        path: 'post',
        component: _layout_blog_layout_blog_layout_component__WEBPACK_IMPORTED_MODULE_2__["BlogLayoutComponent"],
        canActivate: [_service_other_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        loadChildren: () => __webpack_require__.e(/*! import() | pages-post-post-module */ "pages-post-post-module").then(__webpack_require__.bind(null, /*! ./pages/post/post.module */ "gDdP")).then(m => m.PostModule)
    },
    {
        path: 'admin',
        component: _layout_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_3__["AdminLayoutComponent"],
        canActivate: [_service_other_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        loadChildren: () => __webpack_require__.e(/*! import() | pages-admin-admin-module */ "pages-admin-admin-module").then(__webpack_require__.bind(null, /*! ./pages/admin/admin.module */ "GCp2")).then(m => m.AdminModule)
    },
    { path: '', redirectTo: 'post', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_service_other_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_service_other_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map