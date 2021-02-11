(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-post-module"],{

/***/ "K2Yg":
/*!*************************************************************!*\
  !*** ./src/app/pages/post/post-view/post-view.component.ts ***!
  \*************************************************************/
/*! exports provided: PostViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewComponent", function() { return PostViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/post/post.service */ "1tBJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_other_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/other/login.service */ "mkk2");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_post_post_reply_post_reply_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/post/post-reply/post-reply.component */ "uWw8");
/* harmony import */ var _components_post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/post/post-edit/post-edit.component */ "cppd");
/* harmony import */ var _components_post_post_middle_post_middle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/post/post-middle/post-middle.component */ "k6+q");










function PostViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.post.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PostViewComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostViewComponent_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const tag_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.router.navigate(["post", "list", "tag", tag_r5.name]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r5.name);
} }
function PostViewComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostViewComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26); return _r4.editOpen(ctx_r8.post); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit Post!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostViewComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-post-middle", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("post", post_r10)("catShow", false)("textShow", false);
} }
class PostViewComponent {
    constructor(postService, route, router, loginService) {
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.post = {
            title: '',
            category: {
                id: 0,
                name: ''
            },
            thumbnail: '',
            content: '',
            show: false,
            tags: []
        };
        this.isAdmin = false;
        // this.id = route.snapshot.params.id || null;
        route.params.subscribe(r => {
            this.id = r.id || null;
            this.getData();
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isAdmin = yield this.loginService.isAdmin();
        });
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.post = yield this.postService.view(this.id);
            this.recommendList = yield this.postService.recommendList(this.id, this.post.categoryId, this.post.tags.map(t => t.name));
        });
    }
}
PostViewComponent.ɵfac = function PostViewComponent_Factory(t) { return new (t || PostViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_other_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"])); };
PostViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostViewComponent, selectors: [["app-post-view"]], decls: 27, vars: 11, consts: [[1, "post-view"], ["class", "post-view-thumb", 4, "ngIf"], [1, "post-view-title"], [1, "bottom-item-wrapper"], [1, "bottom-item", "mr-2"], [1, "icon-calendar", "mr-2"], [1, "icon", "icon-eye", "mr-2"], [1, "post-view-content", 3, "innerHTML"], [1, "tagcloud-wrapper", "my-5"], ["class", "tagcloud-item", 3, "click", 4, "ngFor", "ngForOf"], [2, "text-align", "right"], ["class", "btn btn-sm btn-outline-dark", 3, "click", 4, "ngIf"], [3, "postId"], [1, "post-more"], [1, "post-group-title", "blog-title"], [1, "row"], ["class", "col-md-4 col-sm-12", 4, "ngFor", "ngForOf"], ["edit", ""], [1, "post-view-thumb"], [3, "src"], [1, "tagcloud-item", 3, "click"], [1, "btn", "btn-sm", "btn-outline-dark", 3, "click"], [1, "col-md-4", "col-sm-12"], [3, "post", "catShow", "textShow"]], template: function PostViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostViewComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PostViewComponent_a_16_Template, 2, 1, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, PostViewComponent_button_18_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-post-reply", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Recommended posts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PostViewComponent_div_24_Template, 2, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "app-post-edit", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.post.thumbnail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, ctx.post.createdAt));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.post.view);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.post.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.post.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("postId", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.recommendList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_post_post_reply_post_reply_component__WEBPACK_IMPORTED_MODULE_6__["PostReplyComponent"], _components_post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_7__["PostEditComponent"], _components_post_post_middle_post_middle_component__WEBPACK_IMPORTED_MODULE_8__["PostMiddleComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".post-view .post-view-thumb {\n  max-height: 400px;\n  height: 400px;\n}\n.post-view .post-view-thumb img {\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  display: block;\n}\n.post-view .post-view-title {\n  font-size: 30px;\n  letter-spacing: 0.5px;\n  height: 50px;\n  opacity: 0.9;\n  align-items: center;\n  display: flex;\n  margin: 20px 0 10px 0;\n}\n.post-view .post-view-content {\n  margin-top: 30px;\n  font-size: 15px;\n  letter-spacing: 0.5px;\n}\n.post-view .bottom-item {\n  opacity: 0.7;\n  font-size: 13.5px;\n}\n.post-view .post-more .blog-title {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdC9wb3N0LXZpZXcvcG9zdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDWjtBQUVJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUFSO0FBRUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUFSO0FBRUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUdRO0VBQ0ksZUFBQTtBQURaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdC9wb3N0LXZpZXcvcG9zdC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtdmlldyB7XHJcbiAgICAucG9zdC12aWV3LXRodW1iIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG9zdC12aWV3LXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTBweCAwO1xyXG4gICAgfVxyXG4gICAgLnBvc3Qtdmlldy1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIH1cclxuICAgIC5ib3R0b20taXRlbSB7XHJcbiAgICAgICAgb3BhY2l0eTogLjc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgICB9XHJcbiAgICAucG9zdC1tb3JlIHtcclxuICAgICAgICAuYmxvZy10aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-post-view',
                templateUrl: './post-view.component.html',
                styleUrls: ['./post-view.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_service_other_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }]; }, null); })();


/***/ }),

/***/ "Lieg":
/*!*********************************************************!*\
  !*** ./src/app/pages/post/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_store_setting_setting_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/store/setting/setting.reducer */ "c07R");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class ProfileComponent {
    constructor(store) {
        this.store = store;
        this.profile$ = store.select(src_app_store_setting_setting_reducer__WEBPACK_IMPORTED_MODULE_1__["selectProfileDescription"]);
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 3, consts: [[3, "innerHTML"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.profile$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3QvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "b8gr":
/*!*************************************************************!*\
  !*** ./src/app/pages/post/post-list/post-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/post/post.service */ "1tBJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_pagenation_pagenation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/pagenation/pagenation.component */ "e2sg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_post_post_left_post_left_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/post/post-left/post-left.component */ "3nM9");







function PostListComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-left", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const post_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r3);
} }
function PostListComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostListComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 >= _r0.startRow && i_r4 <= _r0.endRow);
} }
function PostListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Not yet..\uD83D\uDE05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PostListComponent {
    constructor(postService, route, router) {
        this.postService = postService;
        this.router = router;
        this.isEmpty = false;
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        route.params.subscribe(r => {
            this.type = r.type || null;
            this.value = r.value || null;
            this.searchData();
        });
    }
    ngOnInit() {
    }
    getData() {
    }
    searchData() {
        console.log(this.type, 'tpye', this.value);
        this.postService.searchList(this.type, this.value)
            .then(r => {
            if (r.length == 0) {
                this.isEmpty = true;
            }
            else {
                this.isEmpty = false;
            }
            this.postList = r;
        });
        //this.postService.loadingSub$.next('loading');
        // if(!this.type) {
        //   this.postService.list()
        //   .then(r => {
        //     this.postList = r;
        //     //this.postService.loadingSub$.next('finished');
        //   });
        // } else {
        //   this.postService.searchList(this.type, this.value)
        //   .then(r => {
        //     console.log(r,'postlist,,')
        //     this.postList = r;
        //   });
        // }
    }
}
PostListComponent.ɵfac = function PostListComponent_Factory(t) { return new (t || PostListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PostListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostListComponent, selectors: [["app-post-list"]], decls: 4, vars: 5, consts: [[3, "currPage", "totalCount", "blockCount"], ["page", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "post"], [1, "notyet-wrapper", "pr-5"]], template: function PostListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-pagenation", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostListComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostListComponent_div_3_Template, 4, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currPage", 1)("totalCount", ctx.postList.length)("blockCount", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmpty);
    } }, directives: [_components_pagenation_pagenation_component__WEBPACK_IMPORTED_MODULE_3__["PagenationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_post_post_left_post_left_component__WEBPACK_IMPORTED_MODULE_5__["PostLeftComponent"]], styles: [".img-2[_ngcontent-%COMP%] {\n  background-image: url(https://s.pstatic.net/shopping.phinf/20201005_10/ca292c07-6d2c-41c7-bf37-02c4048ed260.jpg?type=f214_292);\n}\n\n.notyet-wrapper[_ngcontent-%COMP%] {\n  margin-top: 50%;\n  text-align: center;\n  font-size: 25px;\n  font-family: Jua;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdC9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEhBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdC9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy0yIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3MucHN0YXRpYy5uZXQvc2hvcHBpbmcucGhpbmYvMjAyMDEwMDVfMTAvY2EyOTJjMDctNmQyYy00MWM3LWJmMzctMDJjNDA0OGVkMjYwLmpwZz90eXBlPWYyMTRfMjkyKTtcclxufVxyXG4ubm90eWV0LXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEp1YTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-list',
                templateUrl: './post-list.component.html',
                styleUrls: ['./post-list.component.scss']
            }]
    }], function () { return [{ type: src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "gDdP":
/*!*******************************************!*\
  !*** ./src/app/pages/post/post.module.ts ***!
  \*******************************************/
/*! exports provided: PostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModule", function() { return PostModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-list/post-list.component */ "b8gr");
/* harmony import */ var src_app_components_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/component.module */ "dagM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-view/post-view.component */ "K2Yg");
/* harmony import */ var src_app_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/ui.module */ "624D");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "Lieg");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "tgw9");
/* harmony import */ var _post_cat_list_post_cat_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-cat-list/post-cat-list.component */ "uk/X");













const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], data: {} },
    { path: 'view/:id', component: _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_6__["PostViewComponent"], data: {} },
    { path: 'list/:type/:value', component: _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"], data: {} },
    { path: 'cat/list/:categoryId', component: _post_cat_list_post_cat_list_component__WEBPACK_IMPORTED_MODULE_10__["PostCatListComponent"], data: {} },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], data: {} },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
class PostModule {
}
PostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostModule });
PostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostModule_Factory(t) { return new (t || PostModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            src_app_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"],
            src_app_components_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostModule, { declarations: [_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"],
        _post_cat_list_post_cat_list_component__WEBPACK_IMPORTED_MODULE_10__["PostCatListComponent"],
        _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_6__["PostViewComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"],
        src_app_components_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"],
                    _post_cat_list_post_cat_list_component__WEBPACK_IMPORTED_MODULE_10__["PostCatListComponent"],
                    _post_view_post_view_component__WEBPACK_IMPORTED_MODULE_6__["PostViewComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    src_app_shared_ui_module__WEBPACK_IMPORTED_MODULE_7__["UiModule"],
                    src_app_components_component_module__WEBPACK_IMPORTED_MODULE_4__["ComponentModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tgw9":
/*!***************************************************!*\
  !*** ./src/app/pages/post/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_admin_homeSetting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/admin/homeSetting.service */ "dGRN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_post_post_main_post_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/post/post-main/post-main.component */ "YGSq");
/* harmony import */ var _components_post_post_middle_post_middle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/post/post-middle/post-middle.component */ "k6+q");
/* harmony import */ var _components_post_post_left_post_left_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/post/post-left/post-left.component */ "3nM9");







function HomeComponent_ng_container_0_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](set_r1.title);
} }
function HomeComponent_ng_container_0_app_post_main_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-main", 7);
} if (rf & 2) {
    const set_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", set_r1.postList[0]);
} }
function HomeComponent_ng_container_0_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-middle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r11);
} }
function HomeComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_0_div_4_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", set_r1.postList);
} }
function HomeComponent_ng_container_0_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-middle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r14);
} }
function HomeComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_0_div_5_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", set_r1.postList);
} }
function HomeComponent_ng_container_0_div_6_app_post_left_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post-left", 7);
} if (rf & 2) {
    const post_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r17);
} }
function HomeComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_0_div_6_app_post_left_1_Template, 1, 1, "app-post-left", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", set_r1.postList);
} }
function HomeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_0_h1_1_Template, 2, 1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_container_0_app_post_main_3_Template, 1, 1, "app-post-main", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_ng_container_0_div_4_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_ng_container_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_ng_container_0_div_6_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const set_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", set_r1.uiType !== "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", set_r1.uiType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "twosome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "triple");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "horizontal");
} }
class HomeComponent {
    constructor(homeSettingService) {
        this.homeSettingService = homeSettingService;
        this.homeSettingList = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.homeSettingService.setPosts()
            .then(r => {
            this.homeSettingList = r;
            console.log(r, 'home result');
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_admin_homeSetting_service__WEBPACK_IMPORTED_MODULE_1__["HomeSettingService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["class", "post-group-title blog-title", 4, "ngIf"], [3, "ngSwitch"], [3, "post", 4, "ngSwitchCase"], ["class", "row", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [1, "post-group-title", "blog-title"], [3, "post"], [1, "row"], ["class", "col-6", 4, "ngFor", "ngForOf"], [1, "col-6"], ["class", "col-md-4 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-sm-12"], [3, "post", 4, "ngFor", "ngForOf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_ng_container_0_Template, 7, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.homeSettingList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _components_post_post_main_post_main_component__WEBPACK_IMPORTED_MODULE_3__["PostMainComponent"], _components_post_post_middle_post_middle_component__WEBPACK_IMPORTED_MODULE_4__["PostMiddleComponent"], _components_post_post_left_post_left_component__WEBPACK_IMPORTED_MODULE_5__["PostLeftComponent"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%], span[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000000;\n}\n\n.post-text[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  opacity: 0.9;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb3N0L2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLGgyLGgzLGg0LGg1LHAsc3BhbixhIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5wb3N0LXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_service_admin_homeSetting_service__WEBPACK_IMPORTED_MODULE_1__["HomeSettingService"] }]; }, null); })();


/***/ }),

/***/ "uk/X":
/*!*********************************************************************!*\
  !*** ./src/app/pages/post/post-cat-list/post-cat-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: PostCatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCatListComponent", function() { return PostCatListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/post/post.service */ "1tBJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_pagenation_pagenation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/pagenation/pagenation.component */ "e2sg");
/* harmony import */ var _components_post_post_middle_post_middle_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/post/post-middle/post-middle.component */ "k6+q");







function PostCatListComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-post-middle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const post_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("catShow", false)("post", post_r3);
} }
function PostCatListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostCatListComponent_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r4 >= _r1.startRow && i_r4 <= _r1.endRow);
} }
function PostCatListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Not yet..\uD83D\uDE05");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PostCatListComponent {
    constructor(postService, route, router) {
        this.postService = postService;
        this.router = router;
        this.postList = [];
        this.isEmpty = false;
        route.params.subscribe(r => {
            this.categoryId = r.categoryId || null;
            this.searchData();
        });
    }
    ngOnInit() {
    }
    searchData() {
        this.postService.categorizedList(this.categoryId)
            .then(r => {
            if (r.length == 0) {
                this.isEmpty = true;
            }
            else {
                this.isEmpty = false;
            }
            this.postList = r;
            //this.postService.loadingSub$.next('finished');
        });
    }
}
PostCatListComponent.ɵfac = function PostCatListComponent_Factory(t) { return new (t || PostCatListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PostCatListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostCatListComponent, selectors: [["app-post-cat-list"]], decls: 5, vars: 5, consts: [[1, "row"], [4, "ngFor", "ngForOf"], [3, "currPage", "totalCount", "blockCount"], ["page", ""], [4, "ngIf"], [1, "col-md-4", "col-sm-12", "post-md-wrapper"], [3, "catShow", "post"], [1, "notyet-wrapper", "pr-5"]], template: function PostCatListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostCatListComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-pagenation", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostCatListComponent_div_4_Template, 4, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.postList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currPage", 1)("totalCount", ctx.postList.length)("blockCount", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEmpty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_pagenation_pagenation_component__WEBPACK_IMPORTED_MODULE_4__["PagenationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_post_post_middle_post_middle_component__WEBPACK_IMPORTED_MODULE_5__["PostMiddleComponent"]], styles: [".post-md-wrapper[_ngcontent-%COMP%]:nth-of-type(-n+3) {\n  margin-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdC9wb3N0LWNhdC1saXN0L3Bvc3QtY2F0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdC9wb3N0LWNhdC1saXN0L3Bvc3QtY2F0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1tZC13cmFwcGVyOm50aC1vZi10eXBlKC1uKzMpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostCatListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-cat-list',
                templateUrl: './post-cat-list.component.html',
                styleUrls: ['./post-cat-list.component.scss']
            }]
    }], function () { return [{ type: src_app_service_post_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-post-post-module.js.map