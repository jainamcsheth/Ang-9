function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'posts',
      component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [["itemSize", "10", "minBufferPx", "100", 1, "app-viewport"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkFixedSizeVirtualScroll"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".app-viewport[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFRlY2hcXEFuZ3VsYXJcXGkzc3lzdGVtcyBhc3NpZ25tZW50XFx0cmF2ZWwtYmxvZy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC12aWV3cG9ydCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsIi5hcHAtdmlld3BvcnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./posts/posts.component */
    "./src/app/posts/posts.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 26,
      vars: 0,
      consts: [[1, "home-image"], ["src", "../../assets/images/kalavantin_2.jpg"], [1, "image-text"], [1, "name"], [1, "seperater"], [1, "desc"], [1, "home-body"], [1, "article"], [1, "sec-head"], [1, "sec-body"], ["src", "../../assets/images/about-me-copy.jpg", 1, "me-img"], [1, "about-me-desc"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Jainam Sheth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Developer by Passion, Traveller by Heart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "About Me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " I\u2019m ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Jainam Sheth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " and people usually call me \u201CJenni\u201D. I am a passionate Software Engineer who enjoys creating things that live on the internet; They can be either websites, applications, plugins, APIs, or anything. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " I strongly believe that a developer should have great composure to hark, comprehend, express, recapitulate, story tell, and with technical expertise designate an impactful software. My goal is to build products that create positive impact on real world. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " When I am not programming, you can find me discovering a new place, clicking elegant food pictures, laying on the couch, meditating or dreaming. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".home-image[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  text-align: center;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.home-body[_ngcontent-%COMP%] {\n  z-index: 500;\n  position: relative;\n}\n\n.image-text[_ngcontent-%COMP%] {\n  top: 20%;\n  position: absolute;\n  font-family: monospace;\n  line-height: 1.5;\n  width: 100%;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 5px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: bold;\n}\n\n.seperater[_ngcontent-%COMP%] {\n  margin: 0 auto 5px;\n  width: 200px;\n  border-top: 1px solid white;\n  border-bottom: none;\n  border-right: none;\n  border-left: none;\n}\n\n.article[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: white;\n}\n\n.sec-head[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.me-img[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.about-me-desc[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  font-size: 1rem;\n  text-align: justify;\n  color: #565656;\n  letter-spacing: 1.6px;\n}\n\n@media (min-width: 600px) {\n  .name[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n\n  .sec-body[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n  }\n  .sec-body[_ngcontent-%COMP%]   .me-img[_ngcontent-%COMP%] {\n    width: 45%;\n    height: 400px;\n    -o-object-fit: contain;\n       object-fit: contain;\n  }\n  .sec-body[_ngcontent-%COMP%]   .about-me-desc[_ngcontent-%COMP%] {\n    width: 45%;\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: center;\n  }\n}\n\n@media (min-width: 900px) {\n  .name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcVGVjaFxcQW5ndWxhclxcaTNzeXN0ZW1zIGFzc2lnbm1lbnRcXHRyYXZlbC1ibG9nL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGlCQUFBO0VDQ0Y7O0VERUE7SUFDRSxhQUFBO0lBQ0EsNkJBQUE7RUNDRjtFRENFO0lBQ0UsVUFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtPQUFBLG1CQUFBO0VDQ0o7RURFRTtJQUNFLFVBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtFQ0FKO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLGVBQUE7RUNGRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmhvbWUtYm9keSB7XHJcbiAgei1pbmRleDogNTAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltYWdlLXRleHQge1xyXG4gIHRvcDogMjAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNlcGVyYXRlciB7XHJcbiAgbWFyZ2luOiAwIGF1dG8gNXB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbn1cclxuXHJcbi5hcnRpY2xlIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uc2VjLWhlYWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1lLWltZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmFib3V0LW1lLWRlc2Mge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgY29sb3I6ICM1NjU2NTY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5zZWMtYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgLm1lLWltZyB7XHJcbiAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LW1lLWRlc2Mge1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xyXG4gIC5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbn1cclxuIiwiLmhvbWUtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuXG4uaG9tZS1ib2R5IHtcbiAgei1pbmRleDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWFnZS10ZXh0IHtcbiAgdG9wOiAyMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zZXBlcmF0ZXIge1xuICBtYXJnaW46IDAgYXV0byA1cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uYXJ0aWNsZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uc2VjLWhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZS1pbWcge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uYWJvdXQtbWUtZGVzYyB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgY29sb3I6ICM1NjU2NTY7XG4gIGxldHRlci1zcGFjaW5nOiAxLjZweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuXG4gIC5zZWMtYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxuICAuc2VjLWJvZHkgLm1lLWltZyB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cbiAgLnNlYy1ib2R5IC5hYm91dC1tZS1kZXNjIHtcbiAgICB3aWR0aDogNDUlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/", "home"];
    };

    var _c1 = function _c1() {
      return ["/", "posts"];
    };

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 11,
      vars: 6,
      consts: [["color", "primary", 1, "justify-between", "nav-main"], [3, "routerLink"], [1, "child", "logo"], ["routerLinkActive", "active", 3, "routerLink"], [1, "child"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Personal Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Posts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: [".nav-main[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.child[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n}\n\n.active[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.logo[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n@media (min-width: 600px) {\n  .nav-main[_ngcontent-%COMP%] {\n    padding: 0 50px;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0U6XFxUZWNoXFxBbmd1bGFyXFxpM3N5c3RlbXMgYXNzaWdubWVudFxcdHJhdmVsLWJsb2cvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLGVBQUE7RUNDRjs7RURFQTtJQUNFLGtCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LW1haW4ge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNoaWxkIHtcclxuICBwYWRkaW5nOiAwIDAuNXJlbTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAubmF2LW1haW4ge1xyXG4gICAgcGFkZGluZzogMCA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gIH1cclxufVxyXG4iLCIubmF2LW1haW4ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jaGlsZCB7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuXG4uYWN0aXZlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubG9nbyB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5uYXYtbWFpbiB7XG4gICAgcGFkZGluZzogMCA1MHB4O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/posts.component.ts":
  /*!******************************************!*\
    !*** ./src/app/posts/posts.component.ts ***!
    \******************************************/

  /*! exports provided: PostsComponent */

  /***/
  function srcAppPostsPostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsComponent", function () {
      return PostsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");

    function PostsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r1.desc);
      }
    }

    var PostsComponent = /*#__PURE__*/function () {
      function PostsComponent(http) {
        _classCallCheck(this, PostsComponent);

        this.http = http;
        this.posts = [];
      }

      _createClass(PostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.fetchPosts().subscribe(function (data) {
            _this.posts = JSON.parse(JSON.stringify(data));
          });
        }
      }, {
        key: "fetchPosts",
        value: function fetchPosts() {
          return this.http.get('assets/mocks/mocks.json');
        }
      }]);

      return PostsComponent;
    }();

    PostsComponent.ɵfac = function PostsComponent_Factory(t) {
      return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostsComponent,
      selectors: [["app-posts"]],
      decls: 6,
      vars: 1,
      consts: [[1, "post-main"], [1, "container"], [1, "recent-post-heading"], [1, "flex-row"], ["class", "post-card flex-col", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "post-card", "flex-col"], [1, "post-img", 3, "src"], [1, "post-desc"]],
      template: function PostsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Recent Posts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostsComponent_div_5_Template, 4, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx.posts);
        }
      },
      directives: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualForOf"]],
      styles: [".post-main[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: lavender;\n}\n\n.recent-post-heading[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-align: center;\n  font-size: 2rem;\n  font-family: cursive;\n}\n\n.post-card[_ngcontent-%COMP%] {\n  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px;\n  margin: 0 5px 20px;\n}\n\n.post-card[_ngcontent-%COMP%]:hover {\n  border: 1px solid #777;\n  cursor: pointer;\n}\n\n.post-desc[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  text-align: center;\n  padding: 5px;\n  font-weight: 500;\n  font-family: fantasy;\n}\n\n.post-img[_ngcontent-%COMP%] {\n  max-height: 275px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  flex: 1;\n}\n\n@media (min-width: 568px) and (max-width: 992px) {\n  .post-card[_ngcontent-%COMP%] {\n    width: 47%;\n    margin: 0 1.5% 1.5%;\n  }\n}\n\n@media (min-width: 993px) {\n  .post-card[_ngcontent-%COMP%] {\n    width: 30%;\n    margin: 0 1.66% 1.66%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvRTpcXFRlY2hcXEFuZ3VsYXJcXGkzc3lzdGVtcyBhc3NpZ25tZW50XFx0cmF2ZWwtYmxvZy9zcmNcXGFwcFxccG9zdHNcXHBvc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0ZBQUE7RUFFQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0LW1haW4ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGF2ZW5kZXI7XHJcbn1cclxuXHJcbi5yZWNlbnQtcG9zdC1oZWFkaW5nIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbi5wb3N0LWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDJweCAycHggMHB4LFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMnB4IDRweCAwcHg7XHJcbiAgbWFyZ2luOiAwIDVweCAyMHB4O1xyXG59XHJcblxyXG4ucG9zdC1jYXJkOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBvc3QtZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LWZhbWlseTogZmFudGFzeTtcclxufVxyXG5cclxuLnBvc3QtaW1nIHtcclxuICBtYXgtaGVpZ2h0OiAyNzVweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5wb3N0LWNhcmQge1xyXG4gICAgd2lkdGg6IDQ3JTtcclxuICAgIG1hcmdpbjogMCAxLjUlIDEuNSU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkzcHgpIHtcclxuICAucG9zdC1jYXJkIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW46IDAgMS42NiUgMS42NiU7XHJcbiAgfVxyXG59XHJcbiIsIi5wb3N0LW1haW4ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsYXZlbmRlcjtcbn1cblxuLnJlY2VudC1wb3N0LWhlYWRpbmcge1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG59XG5cbi5wb3N0LWNhcmQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAycHggMnB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMnB4IDRweCAwcHg7XG4gIG1hcmdpbjogMCA1cHggMjBweDtcbn1cblxuLnBvc3QtY2FyZDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvc3QtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xufVxuXG4ucG9zdC1pbWcge1xuICBtYXgtaGVpZ2h0OiAyNzVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucG9zdC1jYXJkIHtcbiAgICB3aWR0aDogNDclO1xuICAgIG1hcmdpbjogMCAxLjUlIDEuNSU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTNweCkge1xuICAucG9zdC1jYXJkIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbjogMCAxLjY2JSAxLjY2JTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-posts',
          templateUrl: './posts.component.html',
          styleUrls: ['./posts.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Tech\Angular\i3systems assignment\travel-blog\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map