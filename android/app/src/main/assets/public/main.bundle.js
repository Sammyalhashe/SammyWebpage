webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Sammy/sammy-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SammyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sammy_component__ = __webpack_require__("./src/app/Sammy/sammy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blog_module_blog_component__ = __webpack_require__("./src/app/blog-module/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__timer_service__ = __webpack_require__("./src/app/Sammy/timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_typing_animation__ = __webpack_require__("./node_modules/angular-typing-animation/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SammyModule = /** @class */ (function () {
    function SammyModule() {
    }
    SammyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_12__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild([
                    { path: "abc", component: __WEBPACK_IMPORTED_MODULE_6__blog_module_blog_component__["a" /* BlogComponent */] },
                    { path: "multipleInheritance", component: __WEBPACK_IMPORTED_MODULE_6__blog_module_blog_component__["a" /* BlogComponent */] },
                    { path: "parseJson", component: __WEBPACK_IMPORTED_MODULE_6__blog_module_blog_component__["a" /* BlogComponent */] },
                    { path: "Rigetti_vs_IBM", component: __WEBPACK_IMPORTED_MODULE_6__blog_module_blog_component__["a" /* BlogComponent */] },
                    { path: "linAlg", component: __WEBPACK_IMPORTED_MODULE_6__blog_module_blog_component__["a" /* BlogComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sammy_component__["a" /* SammyComponent */], __WEBPACK_IMPORTED_MODULE_11_angular_typing_animation__["a" /* TypingAnimationDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__sammy_component__["a" /* SammyComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__timer_service__["a" /* TimerService */]]
        })
    ], SammyModule);
    return SammyModule;
}());



/***/ }),

/***/ "./src/app/Sammy/sammy.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://www.w3schools.com/w3css/4/w3.css\");\n@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300\");\n@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n.container {\n    position: relative;\n    width: 50%;\n}\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.middle {\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%)\n}\n.container:hover .image {\n  opacity: 0.3;\n}\n.container:hover .middle {\n  opacity: 1;\n}\n.text {\n  background-color: #4CAF50;\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n/* Modal Content */\n.modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border: 1px solid #888;\n    width: 80%;\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s\n}\n/* Add Animation */\n@-webkit-keyframes animatetop {\n    from {top:-300px; opacity:0}\n    to {top:0; opacity:1}\n}\n@keyframes animatetop {\n    from {top:-300px; opacity:0}\n    to {top:0; opacity:1}\n}\n/* The Close Button */\n.close {\n    color: white;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n.close:hover,\n.close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n.modal-header {\n    padding: 2px 16px;\n    background-color: #5cb85c;\n    color: white;\n}\n.modal-body {padding: 2px 16px;}\n.modal-footer {\n    padding: 2px 16px;\n    background-color: #5cb85c;\n    color: white;\n}\ndiv.avatar {\n  height: 150px;\n  overflow: hidden;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n.hiddenList {\n  visibility: hidden;\n}\ndiv.w3-container.card-explanation {\n  background: lightgray;\n  opacity: 0.5;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  height: auto;\n  overflow: hidden;\n}\na.component-card {\n  display: block;\n}\nimg {\n  position: relative;\n  top: 0px;\n  left: 0px;\n}\n.backgroundIMG1 {\n  position: relative;\n  width: auto;\n  height: auto;\n  top: -100px;\n  left: auto;\n}\n.backgroundIMG2 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  top: auto;\n  left: auto;\n}\n.foregroundIMG {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n.card.guide {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #487baa;\n}\nimg#tennisPic {\n  height: 50vh;\n  width: 40vw;\n  border-radius: 15px;\n}\n#guideTitle {\n  border-radius: 25px;\n  background: linear-gradient(45deg, rgb(84, 90, 96) 50%, teal 50%);\n}\n@media only screen and (min-width: 0px) and (max-width: 400px) {\n  #tennisPics {\n    display: none;\n  }\n\n  #aboutText {\n    font-size: 0.5vw;\n  }\n\n  .guideBlock {\n    display: none;\n  }\n  .SammyNameSmall {\n    display: block;\n  }\n\n  .SammyNameLarge {\n    display: none;\n  }\n}\n@media only screen and (min-width: 401px) and (max-width: 960px) {\n  #tennisPics {\n    display: none;\n  }\n\n  #aboutText {\n    font-size: 0.5vw;\n  }\n\n  .guideBlock {\n    display: none;\n  }\n\n  .SammyNameSmall {\n    display: none;\n  }\n\n  .SammyNameLarge {\n    display: block;\n  }\n}\n@media only screen and (min-width: 961px) and (max-width: 1024px) {\n  #tennisPics {\n    display: block;\n  }\n\n  #aboutText {\n    font-size: 2vw;\n  }\n\n  .guideBlock {\n    display: block;\n  }\n\n  .SammyNameSmall {\n    display: none;\n  }\n\n  .SammyNameLarge {\n    display: block;\n  }\n}\n@media only screen and (min-width: 1025px) and (max-width: 1699px) {\n  #tennisPics {\n    display: block;\n  }\n\n  #aboutText {\n    font-size: 2vw;\n  }\n\n  .guideBlock {\n    display: block;\n  }\n\n  .SammyNameSmall {\n    display: none;\n  }\n\n  .SammyNameLarge {\n    display: block;\n  }\n}\n@media only screen and (min-width: 1700px) {\n  .guideBlock {\n    display: none;\n  }\n\n  .SammyNameSmall {\n    display: none;\n  }\n\n  .SammyNameLarge {\n    display: block;\n  }\n}\n.blockExplanation {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  border-color: black;\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n.SammyNameLarge {\n  font-family: monospace;\n}\n.SammyNameSmall {\n  font-family: monospace;\n}\ndiv#contact {\n  margin: 0 auto;\n}\n"

/***/ }),

/***/ "./src/app/Sammy/sammy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SammyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer_service__ = __webpack_require__("./src/app/Sammy/timer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as Typed from "typed.js"; // I used this for practice in using a JS library. I also used the Angular equivalent to type my name
var SammyComponent = /** @class */ (function () {
    function SammyComponent(_timer) {
        var _this = this;
        this._timer = _timer;
        this.picNum = 1;
        // initialize class props
        this.modalShow = false;
        this.notReadyModalShow = false;
        this.name = "Sammy";
        this.hoverState = "nonHovered";
        this.JhoverState = "JnonHovered";
        this.pictures = [
            "../../assets/images/tennis.jpg",
            "../../assets/images/Federer-Tweener.jpg",
            "../../assets/images/fedHat.jpg"
        ];
        // setInterval function calls the internal function after a given time (2nd arg in ms)
        setInterval(function () {
            if (_this.picNum === _this.pictures.length - 1) {
                _this.picNum = 0;
            }
            else {
                _this.picNum++;
            }
        }, 10000);
    }
    // fill the list of Python topics
    SammyComponent.prototype.fillList = function () {
        this.items = [
            { Description: "Abstract Base Class in Python", Link: "abc" },
            { Description: "Multiple Inheritance", Link: "multipleInheritance" },
            { Description: "Parsing JSON with Python", Link: "parseJson" }
        ];
        return this.items;
    };
    // empty list of Python topics
    SammyComponent.prototype.emptyList = function () {
        this.items = [];
        return this.items;
    };
    // fill list of QC topics
    SammyComponent.prototype.JfillList = function () {
        this.Jitems = [
            {
                Description: "Comparative Analysis: Rigetti vs IBM Q",
                Link: "Rigetti_vs_IMB"
            },
            { Description: "Linear Algebra Concepts in QM", Link: "linAlg" }
        ];
        return this.Jitems;
    };
    // empty list of QC topics
    SammyComponent.prototype.JemptyList = function () {
        this.Jitems = [];
        return this.Jitems;
    };
    // returns a promise to be used by async function togglePython (and the QC equivalent)
    /*
    delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    */
    /*
      Toggles if the Python state is hovered over or not by updating three
      class props (work on trying to reduce the number of props used):
        1) a hover state label
        2) a hover state bool
        3) the list being filled or not
    */
    SammyComponent.prototype.togglePython = function () {
        if (this.hoverState === "Hovered") {
            this.hoverState = "nonHovered";
        }
        else if (this.hoverState === "nonHovered") {
            this.hoverState = "Hovered";
        }
    };
    /* same thing as above */
    SammyComponent.prototype.toggleJava = function () {
        if (this.JhoverState === "JHovered") {
            this.JhoverState = "JnonHovered";
        }
        else if (this.JhoverState === "JnonHovered") {
            this.JhoverState = "JHovered";
        }
    };
    SammyComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener("scroll", this.scroll, true);
        this.navigationBar = document.getElementById("navigation-bar");
        this.navigationBar.style.display = "block";
        // subscribing to the service timer.service
        this._timer
            .getPythonLinks()
            .subscribe(function (links) { return (_this.items = links); }, function (err) { return (_this.errorMessage = err); });
        this._timer
            .getQcLinks()
            .subscribe(function (links) { return (_this.Jitems = links); }, function (err) { return (_this.JerrorMessage = err); });
        // let typed: any = new Typed(".typed", {
        //   strings: ["Tennis Addict", "Developer"],
        //   typeSpeed: 25,
        //   backSpeed: 25,
        //   fadeOut: false,
        //   loop: true
        // });
        setTimeout(function () { }, 1000);
    };
    SammyComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.scroll, true);
    };
    SammyComponent.prototype.scroll = function () {
        console.log("SCROLLED");
    };
    SammyComponent.prototype.displayModal = function (modalID) {
        switch (modalID) {
            case "tennisModal": {
                this.modalShow = !this.modalShow;
                console.log(this.modalShow);
                break;
            }
            case "notReady": {
                this.notReadyModalShow = !this.notReadyModalShow;
                console.log(this.notReadyModalShow);
                break;
            }
        }
    };
    SammyComponent.prototype.onTypingComplete = function () {
        console.log("TYPED!!");
    };
    SammyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/Sammy/secondary.html"),
            styles: [__webpack_require__("./src/app/Sammy/sammy.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* trigger */])("hoverOverTransition", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* state */])("Hovered", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({
                        height: "310px"
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* state */])("nonHovered", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({
                        height: "100px"
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])("nonHovered => Hovered", [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("0.5s ease-in")]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])("Hovered => nonHovered", [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("0.5s ease-in")])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* trigger */])("JhoverOverTransition", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* state */])("JHovered", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({
                        height: "310px"
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* state */])("JnonHovered", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({
                        height: "100px"
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])("JnonHovered => JHovered", [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("0.5s ease-in")]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])("JHovered => JnonHovered", [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("0.5s ease-in")])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* trigger */])("caroselAnimation", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])("* => *", [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])("img", [
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("1.0s ease-in", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* keyframes */])([Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ opacity: 0 }), Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ opacity: 1 })]))
                            ])
                        ])
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__timer_service__["a" /* TimerService */]])
    ], SammyComponent);
    return SammyComponent;
}());



/***/ }),

/***/ "./src/app/Sammy/secondary.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<style>\n  body {\n    font: 20px Montserrat, sans-serif;\n    line-height: 1.8;\n    color: #f5f6f7;\n  }\n\n  p {\n    font-size: 16px;\n  }\n\n  .margin {\n    margin-bottom: 45px;\n  }\n\n  .bg-1 {\n    background-color: #1abc9c;\n    /* Green */\n    color: #ffffff;\n  }\n\n  .bg-2 {\n    background-color: #474e5d;\n    /* Dark Blue */\n    color: #ffffff;\n  }\n\n  .bg-3 {\n    background-color: #ffffff;\n    /* White */\n    color: #555555;\n  }\n\n  .bg-4 {\n    background-color: #2f2f2f;\n    /* Black Gray */\n    color: #fff;\n  }\n\n  .container-fluid {\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n\n  .navbar {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    border: 0;\n    border-radius: 0;\n    margin-bottom: 0;\n    font-size: 12px;\n    letter-spacing: 5px;\n  }\n\n  .navbar-nav li a:hover {\n    color: #1abc9c !important;\n  }\n</style>\n<!-- First Container -->\n<div class=\"container-fluid bg-1 text-center mainContainer\" id=\"mainContainer\">\n  <h1 class=\"margin SammyNameLarge\">\n    <span typingAnimation [typeSpeed]=\"25\" [startDelay]=\"1000\" (complete)='this.onTypingComplete()'>Sammy Al Hashemi</span>\n    <br>\n    <span class=\"typed\"></span>\n  </h1>\n  <h1 class=\"margin SammyNameSmall\">\n    <span typingAnimation [typeSpeed]=\"25\" [startDelay]=\"1000\" (complete)='this.onTypingComplete()'>Sammy</span>\n  </h1>\n\n\n\n  <img src=\"..\\assets\\images\\sanFran.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Picture of Me\"\n    width=\"350\" height=\"350\">\n</div>\n\n\n<!-- Second Container -->\n<div class=\"container-fluid bg-2 text-center\">\n  <h3 class=\"margin\">Who Am I?</h3>\n  <p>Hello visitor! My name is Sammy Al Hashemi. I love tennis and tech! I'm currently enrolled in Engineering Science at the\n    University of Toronto and I'm due to graduate in May of 2019. In the menu above, you can find links to my resume and\n    my contact information. In addition, you can also find projects I've worked on. By clicking the two photos below, you\n    can see some of my favorite tennis and tech photos.\n    <br> As you can tell from this page, I am in love (probably too much) with web animations...\n  </p>\n</div>\n\n<!-- Third Container (Grid) -->\n<div class=\"container-fluid bg-6 text-center guideBlock\">\n  <h3 class=\"margin\">Guides</h3>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-sm-4 col-lg-2\">\n      <div (mouseenter)=\"togglePython() \" (mouseleave)=\"togglePython() \" class=\"component-card \">\n        <div class=\"w3-card avatar \">\n          <img src=\"..\\assets\\images\\python_background.png \" class=\"backgroundIMG1 \">\n        </div>\n        <div class=\"w3-container card-explanation \" [@hoverOverTransition]=\"hoverState \">\n          <h5>Python</h5>\n          <p>\n            Learn Some Cool Python Stuff\n          </p>\n          <ng-container *ngIf='this.hoverState === \"Hovered\"'>\n            <ul>\n              <!--[@listAnimation]=\"this.items.length \"-->\n              <li *ngFor='let item of this.items'>\n                <a [routerLink]=\"[ '/',item.Link] \">{{ item.Description }}</a>\n                <!-- href='{{item.Link}}' -->\n              </li>\n            </ul>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-sm-4 col-lg-2\">\n      <a (mouseenter)=\"toggleJava() \" (mouseleave)=\"toggleJava() \" class=\"component-card\">\n        <div class=\"w3-card avatar \">\n          <img src=\"..\\assets\\images\\java.jpg \" class=\"backgroundIMG2 \">\n        </div>\n        <div class=\"w3-container card-explanation \" [@JhoverOverTransition]=\"JhoverState\">\n          <h5>Quantum Mechanics</h5>\n          <p>\n            QM for life\n          </p>\n          <ng-container *ngIf='this.JhoverState === \"JHovered\"'>\n            <ul>\n              <!--[@listAnimation]=\"this.items.length \"-->\n              <li *ngFor='let item of this.Jitems'>\n                <a href='{{item.Link}}'>{{ item.Description }}</a>\n              </li>\n            </ul>\n          </ng-container>\n        </div>\n      </a>\n    </div>\n    <div class=\"col-md-4 col-sm-4 col-lg-8 blockExplanation\">\n      <blockquote>\n        I am going into my fourth year of Engineering Science at UofT. My thesis project is to write scalable versions of Shore's\n        and Grovers Quantum algorithms. Because teaching is the best way to learn, I've decided to write guides/blogs on\n        various ways I've gotten ready to do this. Python is a big part of Quantum Algorithms as a majority of the Quantum\n        SDK's (IMBQ and Rigetti Forest) make use of Python. Obviously, I also needed to have a solid grounding in QM. This\n        is why I chose these two sections.\n      </blockquote>\n    </div>\n  </div>\n  <hr>\n</div>\n\n<!-- Contact Section -->\n<div class=\"container-fluid bg-3 text-center\" id=\"contact\">\n  <h1>Contact Information</h1>\n  <br>\n  <p>Feel free to contact me via email:\n    <a href=\"mailto:sammy.alhashemi@mail.utoronto.ca \">sammy.alhashemi@mail.utoronto.ca</a>\n  </p>\n  <p>You can also contact me by phone\n    <a href=\"tel:408-908-9512 \">408-908-9512</a>\n  </p>\n</div>\n<!-- End page content -->\n\n<!-- Footer -->\n<footer class=\"w3-center w3-light-grey w3-padding-32 \">\n  <p>Find me on social media.</p>\n  <a href=\"https://www.facebook.com/sammy.alhashemi \" title=\"Facebook \" style=\"text-decoration: none \">\n    <i class=\"fa fa-facebook-official w3-hover-opacity \"></i>\n  </a>\n  <a href=\"https://www.instagram.com/sammyalhashemi/ \" title=\"Instagram \" style=\"text-decoration: none \">\n    <i class=\"fa fa-instagram w3-hover-opacity \"></i>\n  </a>\n  <a href=\"https://twitter.com/SammyAlhashemi1 \" title=\"Twitter \" style=\"text-decoration: none \">\n    <i class=\"fa fa-twitter w3-hover-opacity \"></i>\n  </a>\n  <a href=\"https://www.linkedin.com/in/sammy-alhashemi-2a9865a1/ \" title=\"LinkedIn \" style=\"text-decoration: none \">\n    <i class=\"fa fa-linkedin w3-hover-opacity \"></i>\n  </a>\n  <a href=\"https://github.com/Sammyalhashe \" title=\"GitHub \" style=\"text-decoration: none \">\n    <i class=\"fa fa-github w3-hover-opacity \"></i>\n  </a>\n  <hr>\n  <button type=\"button\" class=\"btn btn-primary\" [ngx-scroll-to]=\"'#top'\" [ngx-scroll-to-duration]=\"1500\">Back to Top</button>\n</footer>"

/***/ }),

/***/ "./src/app/Sammy/timer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TimerService = /** @class */ (function () {
    function TimerService(_http) {
        this._http = _http;
        this.pyURL = "./api/json/pythonLinks.json";
        this.qcURL = "./api/json/qcLinks.json";
        this.tpURL = "./api/json/tennisPicsLinks.json";
    }
    TimerService.prototype.getPythonLinks = function () {
        return this._http
            .get(this.pyURL)
            .do(function (data) { return console.log("All Data : " + JSON.stringify(data)); })
            .catch(function (err) {
            console.log(err.message);
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].throw(err.message);
        });
    };
    TimerService.prototype.getQcLinks = function () {
        return this._http
            .get(this.qcURL)
            .do(function (data) { return console.log("All Data : " + JSON.stringify(data)); })
            .catch(function (err) {
            console.log(err.message);
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].throw(err.message);
        });
    };
    TimerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], TimerService);
    return TimerService;
}());



/***/ }),

/***/ "./src/app/angularMaterialconfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["F" /* MatTooltipModule */]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://www.w3schools.com/w3css/4/w3.css\");\n.container {\n  position: relative;\n  width: 50%;\n}\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.middle {\n  -webkit-transition: 0.5s ease;\n  transition: 0.5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n.container:hover .image {\n  opacity: 0.3;\n}\n.container:hover .middle {\n  opacity: 1;\n}\n.text {\n  background-color: #4caf50;\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0);\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n}\n/* Modal Content */\n.modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  border: 1px solid #888;\n  width: 80%;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s;\n}\n/* Add Animation */\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n/* The Close Button */\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n}\n.modal-header {\n  padding: 2px 16px;\n  background-color: #5cb85c;\n  color: white;\n}\n.modal-body {\n  padding: 2px 16px;\n}\n.modal-footer {\n  padding: 2px 16px;\n  background-color: #5cb85c;\n  color: white;\n}\n/* bootstrap */\nbody {\n  font: 20px Montserrat, sans-serif;\n  line-height: 1.8;\n  color: #f5f6f7;\n}\np {\n  font-size: 16px;\n}\n.margin {\n  margin-bottom: 45px;\n}\n.bg-1 {\n  background-color: #1abc9c; /* Green */\n  color: #ffffff;\n}\n.bg-2 {\n  background-color: #474e5d; /* Dark Blue */\n  color: #ffffff;\n}\n.bg-3 {\n  background-color: #ffffff; /* White */\n  color: #555555;\n}\n.bg-4 {\n  background-color: #2f2f2f; /* Black Gray */\n  color: #fff;\n}\n.container-fluid {\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n.navbar {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border: 0;\n  border-radius: 0;\n  margin-bottom: 0;\n  font-size: 12px;\n  letter-spacing: 5px;\n}\n.navbar-nav li a:hover {\n  color: #1abc9c !important;\n}\n@media only screen and (min-width: 0px) and (max-width: 400px) {\n  .largeNav {\n    display: none;\n  }\n\n  .medNav {\n    display: none;\n  }\n\n  .smallNav {\n    display: block;\n  }\n\n  #buttonsHolder {\n    display: none;\n  }\n\n  #buttonsHolderSmall {\n    display: block;\n  }\n}\n@media only screen and (min-width: 401px) and (max-width: 756px) {\n  .largeNav {\n    display: none;\n  }\n\n  .medNav {\n    display: none;\n  }\n\n  .smallNav {\n    display: block;\n  }\n\n  #buttonsHolderSmall {\n    display: none;\n  }\n}\n@media only screen and (min-width: 757px) and (max-width: 960px) {\n  .largeNav {\n    display: none;\n  }\n\n  .medNav {\n    display: block;\n  }\n\n  .smallNav {\n    display: none;\n  }\n}\n@media only screen and (min-width: 961px) and (max-width: 1024px) {\n  .largeNav {\n    display: block;\n  }\n\n  .smallNav {\n    display: none;\n  }\n\n  .medNav {\n    display: none;\n  }\n}\n@media only screen and (min-width: 1025px) and (max-width: 1699px) {\n  .largeNav {\n    display: block;\n  }\n\n  .smallNav {\n    display: none;\n  }\n\n  .medNav {\n    display: none;\n  }\n}\n@media only screen and (min-width: 1700px) {\n  .largeNav {\n    display: none;\n  }\n\n  .smallNav {\n    display: none;\n  }\n\n  .medNav {\n    display: block;\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Navbar (sit on top) -->\n<div id=\"top\">\n    <div class=\"w3-top largeNav\">\n        <div class=\"w3-bar w3-black w3-padding w3-card teal lighten-2\" id=\"navigation-bar\" style=\"letter-spacing:4px;\">\n            <button [routerLink]=\"['/home']\" class=\"w3-bar-item w3-button\">Sammy Al Hashemi</button>\n\n            <div class=\"w3-right w3-hide-small\">\n                <button [routerLink]=\" [ '/resume'] \" class=\"w3-bar-item w3-button \">Resume</button>\n                <button [routerLink]=\"[ '/projects'] \" class=\"w3-bar-item w3-button \">Projects</button>\n                <button [ngx-scroll-to]=\"'#contact'\" [ngx-scroll-to-duration]=\"1500\" class=\"w3-bar-item w3-button \">Contact</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"w3-top medNav\">\n        <div class=\"w3-bar w3-black w3-padding w3-card teal lighten-2\" id=\"navigation-bar\" style=\"letter-spacing:4px;\">\n            <button [routerLink]=\"['/home']\" class=\"w3-bar-item w3-button\">Sammy Al Hashemi</button>\n            <div class=\"w3-right w3-hide-small\">\n                <button [routerLink]=\"[ '/guides'] \" class=\"w3-bar-item w3-button \">\n                    Guides\n                </button>\n                <button [routerLink]=\" [ '/resume'] \" class=\"w3-bar-item w3-button \">Resume</button>\n                <button [routerLink]=\"[ '/projects'] \" class=\"w3-bar-item w3-button \">Projects</button>\n                <button [ngx-scroll-to]=\"'#contact'\" [ngx-scroll-to-duration]=\"1500\" class=\"w3-bar-item w3-button \">Contact</button>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"w3-top smallNav\">\n        <div class=\"w3-bar w3-black w3-padding w3-card teal lighten-2\" id=\"navigation-bar\" style=\"letter-spacing:4px;\">\n            <button [routerLink]=\"['/home']\" class=\"w3-bar-item w3-button\">\n                <mat-icon>home</mat-icon>\n            </button>\n            <!-- <div class=\"w3-right\" id=\"buttonsHolder\">\n            <button [routerLink]=\"[ '/guides'] \" class=\"w3-bar-item w3-button \">\n                Guides\n            </button>\n        </div> -->\n            <div class=\"w3-right\" id=\"buttonsHolder\">\n                <button [matMenuTriggerFor]=\"menuSmall\" class=\"w3-bar-item w3-button\">\n                    <mat-icon>list</mat-icon>\n                </button>\n            </div>\n            <div class=\"w3-right\" id=\"buttonsHolderSmall\">\n                <button [matMenuTriggerFor]=\"menuSmall\" class=\"w3-bar-item w3-button\">\n                    <mat-icon>list</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n    <mat-menu [overlapTrigger]=\"false\" #menuSmall=\"matMenu\">\n        <button mat-menu-item [routerLink]=\" [ '/resume'] \">Resume</button>\n        <button mat-menu-item [routerLink]=\"[ '/projects'] \">Projects</button>\n        <button mat-menu-item [routerLink]=\"[ '/guides'] \">Guides</button>\n        <button mat-menu-item [ngx-scroll-to]=\"'#contact'\" [ngx-scroll-to-duration]=\"1500\">Contact</button>\n    </mat-menu>\n\n</div>\n\n\n<div [@routeAnimation]='prepRouteState(routerOutlet)'>\n    <router-outlet #routerOutlet=\"outlet\"></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.toggleDropdown = function () {
        this.dropDownActivated = this.dropDownActivated === false ? true : false;
    };
    AppComponent.prototype.prepRouteState = function (outlet) {
        return outlet.activatedRouteData["animation"] || "homePage";
    };
    AppComponent.prototype.ngOnInit = function () {
        this.navigationBar = document.getElementById("navigation-bar");
        this.navigationBar.style.display = "block";
        this.dropDownActivated = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "sammy-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* trigger */])("dropdownAnimation", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* state */])("false", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ display: "none" })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* state */])("true", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ display: "block" })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])("false <=> true", [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(500)])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* trigger */])("routeAnimation", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])(":enter", []),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])("homePage => resumePage", [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(":enter, :leave", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ position: "fixed", width: "100%" }), {
                                optional: true
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* group */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(":enter", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* stagger */])("1ms", [
                                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("1s ease-in-out", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* keyframes */])([
                                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ opacity: 0.2, transform: "translateX(100%)" }),
                                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ opacity: 1, transform: "translateX(0%)" })
                                    ])),
                                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])("@loadanimation", [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* animateChild */])()], { optional: true }),
                                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])("@loadanimation1", [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* animateChild */])()], { optional: true }),
                                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])("@loadanimation2", [Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["f" /* animateChild */])()], { optional: true })
                                ])),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(":leave", [
                                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("1s ease-in-out", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* keyframes */])([
                                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ opacity: 1, transform: "translateX(0%)" }),
                                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ opacity: 0, transform: "translateX(-100%)" })
                                    ]))
                                ], { optional: true })
                            ])
                        ])
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])("resumePage => homePage", [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(":enter, :leave", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ position: "fixed", width: "100%" }), {
                                optional: true
                            }),
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* group */])([
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(":enter", [
                                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("1s ease-in-out", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* keyframes */])([
                                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ opacity: 0.2, transform: "translateX(-100%)" }),
                                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ opacity: 1, transform: "translateX(0%)" })
                                    ]))
                                ], { optional: true }),
                                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(":leave", [
                                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("1s ease-in-out", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* keyframes */])([
                                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ opacity: 1, transform: "translateX(0%)" }),
                                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ opacity: 0, transform: "translateX(100%)" })
                                    ]))
                                ], { optional: true })
                            ])
                        ])
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sammy_resume_sammy_resume_component__ = __webpack_require__("./src/app/sammy-resume/sammy-resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sammy_sammy_module_module__ = __webpack_require__("./src/app/Sammy/sammy-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Sammy_sammy_component__ = __webpack_require__("./src/app/Sammy/sammy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sammy_resume_sammy_resume_module__ = __webpack_require__("./src/app/sammy-resume/sammy-resume.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blog_module_blog_module_module__ = __webpack_require__("./src/app/blog-module/blog-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_projects_module__ = __webpack_require__("./src/app/projects/projects.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__projects_projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guide_module_guide_module_module__ = __webpack_require__("./src/app/guide-module/guide-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guide_component_guide_component_component__ = __webpack_require__("./src/app/guide-component/guide-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angularMaterialconfig__ = __webpack_require__("./src/app/angularMaterialconfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angularMaterialconfig__["a" /* AngularMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                    {
                        path: "home",
                        component: __WEBPACK_IMPORTED_MODULE_7__Sammy_sammy_component__["a" /* SammyComponent */],
                        data: {
                            animation: "homePage"
                        }
                    },
                    {
                        path: "resume",
                        component: __WEBPACK_IMPORTED_MODULE_0__sammy_resume_sammy_resume_component__["a" /* ResumeComponent */],
                        data: {
                            animation: "resumePage"
                        }
                    },
                    {
                        path: "guides",
                        component: __WEBPACK_IMPORTED_MODULE_14__guide_component_guide_component_component__["a" /* GuideComponentComponent */]
                    },
                    {
                        path: "projects",
                        component: __WEBPACK_IMPORTED_MODULE_12__projects_projects_component__["a" /* ProjectsComponent */]
                    },
                    { path: "", redirectTo: "home", pathMatch: "full" },
                    { path: "**", redirectTo: "/", pathMatch: "full" }
                ]),
                __WEBPACK_IMPORTED_MODULE_1__Sammy_sammy_module_module__["a" /* SammyModule */],
                __WEBPACK_IMPORTED_MODULE_8__sammy_resume_sammy_resume_module__["a" /* SammyResumeModule */],
                __WEBPACK_IMPORTED_MODULE_9__blog_module_blog_module_module__["a" /* BlogModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__projects_projects_module__["a" /* ProjectsModule */],
                __WEBPACK_IMPORTED_MODULE_13__guide_module_guide_module_module__["a" /* GuideModuleModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-module/blog-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_component__ = __webpack_require__("./src/app/blog-module/blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BlogModule = /** @class */ (function () {
    function BlogModule() {
    }
    BlogModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog_component__["a" /* BlogComponent */]
            ]
        })
    ], BlogModule);
    return BlogModule;
}());



/***/ }),

/***/ "./src/app/blog-module/blog.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n    font-size: 20px;\n    color: #212529;\n    font-family: 'Lora', 'Times New Roman', serif;\n  }\n  \n  p {\n    line-height: 1.5;\n    margin: 30px 0;\n  }\n  \n  p a {\n    text-decoration: underline;\n  }\n  \n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: 800;\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  \n  a {\n    color: #212529;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n  }\n  \n  a:focus, a:hover {\n    color: #0085A1;\n  }\n  \n  blockquote {\n    font-style: italic;\n    color: #868e96;\n  }\n  \n  .section-heading {\n    font-size: 36px;\n    font-weight: 700;\n    margin-top: 60px;\n  }\n  \n  .caption {\n    font-size: 14px;\n    font-style: italic;\n    display: block;\n    margin: 0;\n    padding: 10px;\n    text-align: center;\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n  \n  ::-moz-selection {\n    color: #fff;\n    background: #0085A1;\n    text-shadow: none;\n  }\n  \n  ::selection {\n    color: #fff;\n    background: #0085A1;\n    text-shadow: none;\n  }\n  \n  img::-moz-selection {\n    color: #fff;\n    background: transparent;\n  }\n  \n  img::selection {\n    color: #fff;\n    background: transparent;\n  }\n  \n  img::-moz-selection {\n    color: #fff;\n    background: transparent;\n  }\n  \n  #mainNav {\n    position: absolute;\n    border-bottom: 1px solid #e9ecef;\n    background-color: white;\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  \n  #mainNav .navbar-brand {\n    font-weight: 800;\n    color: #343a40;\n  }\n  \n  #mainNav .navbar-toggler {\n    font-size: 12px;\n    font-weight: 800;\n    padding: 13px;\n    text-transform: uppercase;\n    color: #343a40;\n  }\n  \n  #mainNav .navbar-nav > li.nav-item > a {\n    font-size: 12px;\n    font-weight: 800;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n  \n  @media only screen and (min-width: 992px) {\n    #mainNav {\n      border-bottom: 1px solid transparent;\n      background: transparent;\n    }\n    #mainNav .navbar-brand {\n      padding: 10px 20px;\n      color: #fff;\n    }\n    #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\n      color: rgba(255, 255, 255, 0.8);\n    }\n    #mainNav .navbar-nav > li.nav-item > a {\n      padding: 10px 20px;\n      color: #fff;\n    }\n    #mainNav .navbar-nav > li.nav-item > a:focus, #mainNav .navbar-nav > li.nav-item > a:hover {\n      color: rgba(255, 255, 255, 0.8);\n    }\n  }\n  \n  @media only screen and (min-width: 992px) {\n    #mainNav {\n      -webkit-transition: background-color 0.2s;\n      transition: background-color 0.2s;\n      /* Force Hardware Acceleration in WebKit */\n      -webkit-transform: translate3d(0, 0, 0);\n      transform: translate3d(0, 0, 0);\n      -webkit-backface-visibility: hidden;\n    }\n    #mainNav.is-fixed {\n      /* when the user scrolls down, we hide the header right above the viewport */\n      position: fixed;\n      top: -67px;\n      -webkit-transition: -webkit-transform 0.2s;\n      transition: -webkit-transform 0.2s;\n      transition: transform 0.2s;\n      transition: transform 0.2s, -webkit-transform 0.2s;\n      border-bottom: 1px solid white;\n      background-color: rgba(255, 255, 255, 0.9);\n    }\n    #mainNav.is-fixed .navbar-brand {\n      color: #212529;\n    }\n    #mainNav.is-fixed .navbar-brand:focus, #mainNav.is-fixed .navbar-brand:hover {\n      color: #0085A1;\n    }\n    #mainNav.is-fixed .navbar-nav > li.nav-item > a {\n      color: #212529;\n    }\n    #mainNav.is-fixed .navbar-nav > li.nav-item > a:focus, #mainNav.is-fixed .navbar-nav > li.nav-item > a:hover {\n      color: #0085A1;\n    }\n    #mainNav.is-visible {\n      /* if the user changes the scrolling direction, we show the header */\n      -webkit-transform: translate3d(0, 100%, 0);\n      transform: translate3d(0, 100%, 0);\n    }\n  }\n  \n  header.masthead {\n    margin-bottom: 50px;\n    background: no-repeat center center;\n    background-color: #868e96;\n    background-attachment: scroll;\n    position: relative;\n    background-size: cover;\n  }\n  \n  header.masthead .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: #212529;\n    opacity: 0.5;\n  }\n  \n  header.masthead .page-heading,\n  header.masthead .post-heading,\n  header.masthead .site-heading {\n    padding: 200px 0 150px;\n    color: white;\n  }\n  \n  @media only screen and (min-width: 768px) {\n    header.masthead .page-heading,\n    header.masthead .post-heading,\n    header.masthead .site-heading {\n      padding: 200px 0;\n    }\n  }\n  \n  header.masthead .page-heading,\n  header.masthead .site-heading {\n    text-align: center;\n  }\n  \n  header.masthead .page-heading h1,\n  header.masthead .site-heading h1 {\n    font-size: 50px;\n    margin-top: 0;\n  }\n  \n  header.masthead .page-heading .subheading,\n  header.masthead .site-heading .subheading {\n    font-size: 24px;\n    font-weight: 300;\n    line-height: 1.1;\n    display: block;\n    margin: 10px 0 0;\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  \n  @media only screen and (min-width: 768px) {\n    header.masthead .page-heading h1,\n    header.masthead .site-heading h1 {\n      font-size: 80px;\n    }\n  }\n  \n  header.masthead .post-heading h1 {\n    font-size: 35px;\n  }\n  \n  header.masthead .post-heading .meta,\n  header.masthead .post-heading .subheading {\n    line-height: 1.1;\n    display: block;\n  }\n  \n  header.masthead .post-heading .subheading {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 10px 0 30px;\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  \n  header.masthead .post-heading .meta {\n    font-size: 20px;\n    font-weight: 300;\n    font-style: italic;\n    font-family: 'Lora', 'Times New Roman', serif;\n  }\n  \n  header.masthead .post-heading .meta a {\n    color: #fff;\n  }\n  \n  @media only screen and (min-width: 768px) {\n    header.masthead .post-heading h1 {\n      font-size: 55px;\n    }\n    header.masthead .post-heading .subheading {\n      font-size: 30px;\n    }\n  }\n  \n  .post-preview > a {\n    color: #212529;\n  }\n  \n  .post-preview > a:focus, .post-preview > a:hover {\n    text-decoration: none;\n    color: #0085A1;\n  }\n  \n  .post-preview > a > .post-title {\n    font-size: 30px;\n    margin-top: 30px;\n    margin-bottom: 10px;\n  }\n  \n  .post-preview > a > .post-subtitle {\n    font-weight: 300;\n    margin: 0 0 10px;\n  }\n  \n  .post-preview > .post-meta {\n    font-size: 18px;\n    font-style: italic;\n    margin-top: 0;\n    color: #868e96;\n  }\n  \n  .post-preview > .post-meta > a {\n    text-decoration: none;\n    color: #212529;\n  }\n  \n  .post-preview > .post-meta > a:focus, .post-preview > .post-meta > a:hover {\n    text-decoration: underline;\n    color: #0085A1;\n  }\n  \n  @media only screen and (min-width: 768px) {\n    .post-preview > a > .post-title {\n      font-size: 36px;\n    }\n  }\n  \n  .floating-label-form-group {\n    font-size: 14px;\n    position: relative;\n    margin-bottom: 0;\n    padding-bottom: 0.5em;\n    border-bottom: 1px solid #dee2e6;\n  }\n  \n  .floating-label-form-group input,\n  .floating-label-form-group textarea {\n    font-size: 1.5em;\n    position: relative;\n    z-index: 1;\n    padding: 0;\n    resize: none;\n    border: none;\n    border-radius: 0;\n    background: none;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    font-family: 'Lora', 'Times New Roman', serif;\n  }\n  \n  .floating-label-form-group input::-webkit-input-placeholder,\n  .floating-label-form-group textarea::-webkit-input-placeholder {\n    color: #868e96;\n    font-family: 'Lora', 'Times New Roman', serif;\n  }\n  \n  .floating-label-form-group label {\n    font-size: 0.85em;\n    line-height: 1.764705882em;\n    position: relative;\n    z-index: 0;\n    top: 2em;\n    display: block;\n    margin: 0;\n    -webkit-transition: top 0.3s ease, opacity 0.3s ease;\n    transition: top 0.3s ease, opacity 0.3s ease;\n    vertical-align: middle;\n    vertical-align: baseline;\n    opacity: 0;\n  }\n  \n  .floating-label-form-group .help-block {\n    margin: 15px 0;\n  }\n  \n  .floating-label-form-group-with-value label {\n    top: 0;\n    opacity: 1;\n  }\n  \n  .floating-label-form-group-with-focus label {\n    color: #0085A1;\n  }\n  \n  form .form-group:first-child .floating-label-form-group {\n    border-top: 1px solid #dee2e6;\n  }\n  \n  footer {\n    padding: 50px 0 65px;\n  }\n  \n  footer .list-inline {\n    margin: 0;\n    padding: 0;\n  }\n  \n  footer .copyright {\n    font-size: 14px;\n    margin-bottom: 0;\n    text-align: center;\n  }\n  \n  .btn {\n    font-size: 14px;\n    font-weight: 800;\n    padding: 15px 25px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    border-radius: 0;\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  \n  .btn-primary {\n    background-color: #0085A1;\n    border-color: #0085A1;\n  }\n  \n  .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    color: #fff;\n    background-color: #00657b !important;\n    border-color: #00657b !important;\n  }\n  \n  .btn-lg {\n    font-size: 16px;\n    padding: 25px 35px;\n  }"

/***/ }),

/***/ "./src/app/blog-module/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\n    <!-- Page Header -->\n    <header class=\"masthead\" style=\"background-image: url('img/post-bg.jpg')\">\n        <div class=\"overlay\"></div>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-md-10 mx-auto\">\n                    <div class=\"post-heading\">\n                        <h1>Man must explore, and this is exploration at its greatest</h1>\n                        <h2 class=\"subheading\">Problems look mighty small from 150 miles up</h2>\n                        <span class=\"meta\">Posted by\n                            <a href=\"#\">Start Bootstrap</a>\n                            on August 24, 2018</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n\n    <!-- Post Content -->\n    <article>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-md-10 mx-auto\">\n                    <p>Never in all their history have men been able truly to conceive of the world as one: a single sphere,\n                        a globe, having the qualities of a globe, a round earth in which all the directions eventually meet,\n                        in which there is no center because every point, or none, is center — an equal earth which all men\n                        occupy as equals. The airman's earth, if free men make it, will be truly round: a globe in practice,\n                        not in theory.</p>\n\n                    <p>Science cuts two ways, of course; its products can be used for both good and evil. But there's no turning\n                        back from science. The early warnings about technological dangers also come from science.</p>\n\n                    <p>What was most significant about the lunar voyage was not that man set foot on the Moon but that they\n                        set eye on the earth.</p>\n\n                    <p>A Chinese tale tells of some men sent to harm a young girl who, upon seeing her beauty, become her protectors\n                        rather than her violators. That's how I felt seeing the Earth for the first time. I could not help\n                        but love and cherish her.</p>\n\n                    <p>For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will,\n                        the experience most certainly changes your perspective. The things that we share in our world are\n                        far more valuable than those which divide us.</p>\n\n                    <h2 class=\"section-heading\">The Final Frontier</h2>\n\n                    <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it\n                        is a task to occupy the generations. And no matter how much progress one makes, there is always the\n                        thrill of just beginning.</p>\n\n                    <p>There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it\n                        is a task to occupy the generations. And no matter how much progress one makes, there is always the\n                        thrill of just beginning.</p>\n\n                    <blockquote class=\"blockquote\">The dreams of yesterday are the hopes of today and the reality of tomorrow. Science has not yet mastered\n                        prophecy. We predict too much for the next year and yet far too little for the next ten.</blockquote>\n\n                    <p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of men. It is a historical\n                        process which mankind is carrying out in accordance with the natural laws of human development.</p>\n\n                    <h2 class=\"section-heading\">Reaching for the Stars</h2>\n\n                    <p>As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size\n                        of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile,\n                        so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has\n                        to change a man.</p>\n\n                    <a href=\"#\">\n                        <img class=\"img-fluid\" src=\"img/post-sample-image.jpg\" alt=\"\">\n                    </a>\n                    <span class=\"caption text-muted\">To go places and do things that have never been done before – that’s what living is all about.</span>\n\n                    <p>Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to\n                        explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man\n                        has gone before.</p>\n\n                    <p>As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental\n                        truth to our nature, Man must explore, and this is exploration at its greatest.</p>\n\n                    <p>Placeholder text by\n                        <a href=\"http://spaceipsum.com/\">Space Ipsum</a>. Photographs by\n                        <a href=\"https://www.flickr.com/photos/nasacommons/\">NASA on The Commons</a>.</p>\n                </div>\n            </div>\n        </div>\n    </article>\n\n    <hr>\n\n    <!-- Footer -->\n    <footer>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-8 col-md-10 mx-auto\">\n                    <ul class=\"list-inline text-center\">\n                        <li class=\"list-inline-item\">\n                            <a href=\"#\">\n                                <span class=\"fa-stack fa-lg\">\n                                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                                    <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i>\n                                </span>\n                            </a>\n                        </li>\n                        <li class=\"list-inline-item\">\n                            <a href=\"#\">\n                                <span class=\"fa-stack fa-lg\">\n                                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                                    <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\n                                </span>\n                            </a>\n                        </li>\n                        <li class=\"list-inline-item\">\n                            <a href=\"#\">\n                                <span class=\"fa-stack fa-lg\">\n                                    <i class=\"fa fa-circle fa-stack-2x\"></i>\n                                    <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i>\n                                </span>\n                            </a>\n                        </li>\n                    </ul>\n                    <p class=\"copyright text-muted\">Copyright &copy; Your Website 2018</p>\n                </div>\n            </div>\n        </div>\n    </footer>\n\n    <!-- Bootstrap core JavaScript -->\n    <script src=\"vendor/jquery/jquery.min.js\"></script>\n    <script src=\"vendor/bootstrap/js/bootstrap.bundle.min.js\"></script>\n\n    <!-- Custom scripts for this template -->\n    <script src=\"js/clean-blog.min.js\"></script>\n\n</body>"

/***/ }),

/***/ "./src/app/blog-module/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = /** @class */ (function () {
    function BlogComponent(router) {
        this.router = router;
    }
    BlogComponent.prototype.ngOnInit = function () {
        console.log("BLOG");
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            console.log("ROUTER");
            window.scrollTo(0, 0);
        });
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/blog-module/blog.component.html"),
            styles: [__webpack_require__("./src/app/blog-module/blog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/guide-component/guide-component.component.css":
/***/ (function(module, exports) {

module.exports = ".ulLinks {\r\n  background: teal;\r\n  padding: 10px;\r\n  margin: 2px;\r\n  color: black;\r\n  border: 0.1rem;\r\n  border-style: ridge;\r\n  border-color: black;\r\n  font-family: cursive;\r\n}\r\n\r\n.listEncapsulator {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/guide-component/guide-component.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div>\n  <style>\n    body {\n      font: 20px Montserrat, sans-serif;\n      line-height: 1.8;\n      color: #f5f6f7;\n    }\n\n    p {\n      font-size: 16px;\n    }\n\n    .margin {\n      margin-bottom: 45px;\n    }\n\n    .bg-1 {\n      background-color: #1abc9c;\n      /* Green */\n      color: #ffffff;\n    }\n\n    .bg-2 {\n      background-color: #474e5d;\n      /* Dark Blue */\n      color: #ffffff;\n    }\n\n    .bg-3 {\n      background-color: #ffffff;\n      /* White */\n      color: #555555;\n    }\n\n    .bg-4 {\n      background-color: #2f2f2f;\n      /* Black Gray */\n      color: #fff;\n    }\n\n    .container-fluid {\n      padding-top: 70px;\n      padding-bottom: 70px;\n    }\n\n    .navbar {\n      padding-top: 15px;\n      padding-bottom: 15px;\n      border: 0;\n      border-radius: 0;\n      margin-bottom: 0;\n      font-size: 12px;\n      letter-spacing: 5px;\n    }\n\n    .navbar-nav li a:hover {\n      color: #1abc9c !important;\n    }\n  </style>\n  <!-- First Container -->\n  <div class=\"container-fluid bg-1 text-center\">\n    <h1 class=\"margin\">\n      Guides\n    </h1>\n    <blockquote>I am going into my fourth year of Engineering Science at UofT. My thesis project is to write scalable versions of Shore's\n      and Grovers Quantum algorithms. Because teaching is the best way to learn, I've decided to write guides/blogs on various\n      ways I've gotten ready to do this. Python is a big part of Quantum Algorithms as a majority of the Quantum SDK's (IMBQ\n      and Rigetti Forest) make use of Python. Obviously, I also needed to have a solid grounding in QM. This is why I chose\n      these two sections.\n    </blockquote>\n  </div>\n\n\n  <!-- Second Container -->\n  <div class=\"container-fluid bg-2 text-center\">\n    <h3 class=\"margin\">Python blog Posts</h3>\n    <p>I am going into my fourth year of Engineering Science at UofT. My thesis project is to write scalable versions of Shore's\n      and Grovers Quantum algorithms. Because teaching is the best way to learn, I've decided to write guides/blogs on various\n      ways I've gotten ready to do this. Python is a big part of Quantum Algorithms as a majority of the Quantum SDK's (IMBQ\n      and Rigetti Forest) make use of Python. Obviously, I also needed to have a solid grounding in QM. This is why I chose\n      these two sections.\n    </p>\n    <div class=\"listEncapsulator\">\n      <ul class=\"list-group\">\n        <li *ngFor='let item of this.items' class=\"listEl\">\n          <a [routerLink]=\"['/',item.Link]\" class=\"list-group-item ulLinks\">{{ item.Description }}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Second Container -->\n  <div class=\"container-fluid bg-3 text-center\">\n    <h3 class=\"margin\">Quantum Mechanics Blog Posts</h3>\n    <p>I am going into my fourth year of Engineering Science at UofT. My thesis project is to write scalable versions of Shore's\n      and Grovers Quantum algorithms. Because teaching is the best way to learn, I've decided to write guides/blogs on various\n      ways I've gotten ready to do this. Python is a big part of Quantum Algorithms as a majority of the Quantum SDK's (IMBQ\n      and Rigetti Forest) make use of Python. Obviously, I also needed to have a solid grounding in QM. This is why I chose\n      these two sections.\n    </p>\n    <div class=\"listEncapsulator\">\n      <ul class=\"list-group\">\n        <li *ngFor='let item of this.Jitems' class=\"listEl\">\n          <a [routerLink]=\"['/',item.Link]\" class=\"list-group-item ulLinks\">{{ item.Description }}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n\n  <!-- Footer -->\n  <footer class=\"w3-center w3-light-grey w3-padding-32\">\n    <p>Find me on social media.</p>\n    <a href=\"https://www.facebook.com/sammy.alhashemi \" title=\"Facebook \" style=\"text-decoration: none \">\n      <i class=\"fa fa-facebook-official w3-hover-opacity \"></i>\n    </a>\n    <a href=\"https://www.instagram.com/sammyalhashemi/ \" title=\"Instagram \" style=\"text-decoration: none \">\n      <i class=\"fa fa-instagram w3-hover-opacity \"></i>\n    </a>\n    <a href=\"https://twitter.com/SammyAlhashemi1 \" title=\"Twitter \" style=\"text-decoration: none \">\n      <i class=\"fa fa-twitter w3-hover-opacity \"></i>\n    </a>\n    <a href=\"https://www.linkedin.com/in/sammy-alhashemi-2a9865a1/ \" title=\"LinkedIn \" style=\"text-decoration: none \">\n      <i class=\"fa fa-linkedin w3-hover-opacity \"></i>\n    </a>\n    <a href=\"https://github.com/Sammyalhashe \" title=\"GitHub \" style=\"text-decoration: none \">\n      <i class=\"fa fa-github w3-hover-opacity \"></i>\n    </a>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/guide-component/guide-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuideComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sammy_timer_service__ = __webpack_require__("./src/app/Sammy/timer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GuideComponentComponent = /** @class */ (function () {
    function GuideComponentComponent(_timer) {
        this._timer = _timer;
    }
    GuideComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribing to the service timer.service
        this._timer
            .getPythonLinks()
            .subscribe(function (links) { return (_this.items = links); }, function (err) { return (_this.errorMessage = err); });
        this._timer
            .getQcLinks()
            .subscribe(function (links) { return (_this.Jitems = links); }, function (err) { return (_this.JerrorMessage = err); });
    };
    GuideComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "sammy-guide-component",
            template: __webpack_require__("./src/app/guide-component/guide-component.component.html"),
            styles: [__webpack_require__("./src/app/guide-component/guide-component.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Sammy_timer_service__["a" /* TimerService */]])
    ], GuideComponentComponent);
    return GuideComponentComponent;
}());



/***/ }),

/***/ "./src/app/guide-module/guide-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuideModuleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guide_component_guide_component_component__ = __webpack_require__("./src/app/guide-component/guide-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GuideModuleModule = /** @class */ (function () {
    function GuideModuleModule() {
    }
    GuideModuleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__guide_component_guide_component_component__["a" /* GuideComponentComponent */]]
        })
    ], GuideModuleModule);
    return GuideModuleModule;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/***/ (function(module, exports) {

module.exports = "\n.container {\n    position: relative;\n    width: 50%;\n}\n\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.middle {\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%)\n}\n\n.container:hover .image {\n  opacity: 0.3;\n}\n\n.container:hover .middle {\n  opacity: 1;\n}\n\n.text {\n  background-color: #4CAF50;\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n/* Modal Content */\n\n.modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border: 1px solid #888;\n    width: 80%;\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s\n}\n\n/* Add Animation */\n\n@-webkit-keyframes animatetop {\n    from {top:-300px; opacity:0}\n    to {top:0; opacity:1}\n}\n\n@keyframes animatetop {\n    from {top:-300px; opacity:0}\n    to {top:0; opacity:1}\n}\n\n/* The Close Button */\n\n.close {\n    color: white;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.modal-header {\n    padding: 2px 16px;\n    background-color: #5cb85c;\n    color: white;\n}\n\n.modal-body {padding: 2px 16px;}\n\n.modal-footer {\n    padding: 2px 16px;\n    background-color: #5cb85c;\n    color: white;\n}\n\nbody {\n  font-size: 20px;\n  color: #212529;\n  font-family: \"Lora\", \"Times New Roman\", serif;\n}\n\np {\n  line-height: 1.5;\n  margin: 30px 0;\n}\n\np a {\n  text-decoration: underline;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 800;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\na {\n  color: #212529;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\na:focus,\na:hover {\n  color: #0085a1;\n}\n\nblockquote {\n  font-style: italic;\n  color: #868e96;\n}\n\n.section-heading {\n  font-size: 36px;\n  font-weight: 700;\n  margin-top: 60px;\n}\n\n.caption {\n  font-size: 14px;\n  font-style: italic;\n  display: block;\n  margin: 0;\n  padding: 10px;\n  text-align: center;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n::-moz-selection {\n  color: #fff;\n  background: #0085a1;\n  text-shadow: none;\n}\n\n::selection {\n  color: #fff;\n  background: #0085a1;\n  text-shadow: none;\n}\n\nimg::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\nimg::selection {\n  color: #fff;\n  background: transparent;\n}\n\nimg::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\n#mainNav {\n  position: absolute;\n  border-bottom: 1px solid #e9ecef;\n  background-color: white;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n#mainNav .navbar-brand {\n  font-weight: 800;\n  color: #343a40;\n}\n\n#mainNav .navbar-toggler {\n  font-size: 12px;\n  font-weight: 800;\n  padding: 13px;\n  text-transform: uppercase;\n  color: #343a40;\n}\n\n#mainNav .navbar-nav > li.nav-item > a {\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n@media only screen and (min-width: 992px) {\n  #mainNav {\n    border-bottom: 1px solid transparent;\n    background: transparent;\n  }\n  #mainNav .navbar-brand {\n    padding: 10px 20px;\n    color: #fff;\n  }\n  #mainNav .navbar-brand:focus,\n  #mainNav .navbar-brand:hover {\n    color: rgba(255, 255, 255, 0.8);\n  }\n  #mainNav .navbar-nav > li.nav-item > a {\n    padding: 10px 20px;\n    color: #fff;\n  }\n  #mainNav .navbar-nav > li.nav-item > a:focus,\n  #mainNav .navbar-nav > li.nav-item > a:hover {\n    color: rgba(255, 255, 255, 0.8);\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  #mainNav {\n    -webkit-transition: background-color 0.2s;\n    transition: background-color 0.2s;\n    /* Force Hardware Acceleration in WebKit */\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n  }\n  #mainNav.is-fixed {\n    /* when the user scrolls down, we hide the header right above the viewport */\n    position: fixed;\n    top: -67px;\n    -webkit-transition: -webkit-transform 0.2s;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n    border-bottom: 1px solid white;\n    background-color: rgba(255, 255, 255, 0.9);\n  }\n  #mainNav.is-fixed .navbar-brand {\n    color: #212529;\n  }\n  #mainNav.is-fixed .navbar-brand:focus,\n  #mainNav.is-fixed .navbar-brand:hover {\n    color: #0085a1;\n  }\n  #mainNav.is-fixed .navbar-nav > li.nav-item > a {\n    color: #212529;\n  }\n  #mainNav.is-fixed .navbar-nav > li.nav-item > a:focus,\n  #mainNav.is-fixed .navbar-nav > li.nav-item > a:hover {\n    color: #0085a1;\n  }\n  #mainNav.is-visible {\n    /* if the user changes the scrolling direction, we show the header */\n    -webkit-transform: translate3d(0, 100%, 0);\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\nheader.masthead {\n  margin-bottom: 50px;\n  background: no-repeat center center;\n  background-color: #868e96;\n  background-attachment: scroll;\n  position: relative;\n  background-size: cover;\n}\n\nheader.masthead .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #212529;\n  opacity: 0.5;\n}\n\nheader.masthead .page-heading,\nheader.masthead .post-heading,\nheader.masthead .site-heading {\n  padding: 200px 0 150px;\n  color: white;\n}\n\n@media only screen and (min-width: 768px) {\n  header.masthead .page-heading,\n  header.masthead .post-heading,\n  header.masthead .site-heading {\n    padding: 200px 0;\n  }\n}\n\nheader.masthead .page-heading,\nheader.masthead .site-heading {\n  text-align: center;\n}\n\nheader.masthead .page-heading h1,\nheader.masthead .site-heading h1 {\n  font-size: 50px;\n  margin-top: 0;\n}\n\nheader.masthead .page-heading .subheading,\nheader.masthead .site-heading .subheading {\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 1.1;\n  display: block;\n  margin: 10px 0 0;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n@media only screen and (min-width: 768px) {\n  header.masthead .page-heading h1,\n  header.masthead .site-heading h1 {\n    font-size: 80px;\n  }\n}\n\nheader.masthead .post-heading h1 {\n  font-size: 35px;\n}\n\nheader.masthead .post-heading .meta,\nheader.masthead .post-heading .subheading {\n  line-height: 1.1;\n  display: block;\n}\n\nheader.masthead .post-heading .subheading {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 10px 0 30px;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\nheader.masthead .post-heading .meta {\n  font-size: 20px;\n  font-weight: 300;\n  font-style: italic;\n  font-family: \"Lora\", \"Times New Roman\", serif;\n}\n\nheader.masthead .post-heading .meta a {\n  color: #fff;\n}\n\n@media only screen and (min-width: 768px) {\n  header.masthead .post-heading h1 {\n    font-size: 55px;\n  }\n  header.masthead .post-heading .subheading {\n    font-size: 30px;\n  }\n}\n\n.post-preview > a {\n  color: #212529;\n}\n\n.post-preview > a:focus,\n.post-preview > a:hover {\n  text-decoration: none;\n  color: #0085a1;\n}\n\n.post-preview > a > .post-title {\n  font-size: 30px;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n\n.post-preview > a > .post-subtitle {\n  font-weight: 300;\n  margin: 0 0 10px;\n}\n\n.post-preview > .post-meta {\n  font-size: 18px;\n  font-style: italic;\n  margin-top: 0;\n  color: #868e96;\n}\n\n.post-preview > .post-meta > a {\n  text-decoration: none;\n  color: #212529;\n}\n\n.post-preview > .post-meta > a:focus,\n.post-preview > .post-meta > a:hover {\n  text-decoration: underline;\n  color: #0085a1;\n}\n\n@media only screen and (min-width: 768px) {\n  .post-preview > a > .post-title {\n    font-size: 36px;\n  }\n}\n\n.floating-label-form-group {\n  font-size: 14px;\n  position: relative;\n  margin-bottom: 0;\n  padding-bottom: 0.5em;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.floating-label-form-group input,\n.floating-label-form-group textarea {\n  font-size: 1.5em;\n  position: relative;\n  z-index: 1;\n  padding: 0;\n  resize: none;\n  border: none;\n  border-radius: 0;\n  background: none;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  font-family: \"Lora\", \"Times New Roman\", serif;\n}\n\n.floating-label-form-group input::-webkit-input-placeholder,\n.floating-label-form-group textarea::-webkit-input-placeholder {\n  color: #868e96;\n  font-family: \"Lora\", \"Times New Roman\", serif;\n}\n\n.floating-label-form-group label {\n  font-size: 0.85em;\n  line-height: 1.764705882em;\n  position: relative;\n  z-index: 0;\n  top: 2em;\n  display: block;\n  margin: 0;\n  -webkit-transition: top 0.3s ease, opacity 0.3s ease;\n  transition: top 0.3s ease, opacity 0.3s ease;\n  vertical-align: middle;\n  vertical-align: baseline;\n  opacity: 0;\n}\n\n.floating-label-form-group .help-block {\n  margin: 15px 0;\n}\n\n.floating-label-form-group-with-value label {\n  top: 0;\n  opacity: 1;\n}\n\n.floating-label-form-group-with-focus label {\n  color: #0085a1;\n}\n\nform .form-group:first-child .floating-label-form-group {\n  border-top: 1px solid #dee2e6;\n}\n\nfooter {\n  padding: 50px 0 65px;\n}\n\nfooter .list-inline {\n  margin: 0;\n  padding: 0;\n}\n\nfooter .copyright {\n  font-size: 14px;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.btn {\n  font-size: 14px;\n  font-weight: 800;\n  padding: 15px 25px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  border-radius: 0;\n  font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.btn-primary {\n  background-color: #0085a1;\n  border-color: #0085a1;\n}\n\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active {\n  color: #fff;\n  background-color: #00657b !important;\n  border-color: #00657b !important;\n}\n\n.btn-lg {\n  font-size: 16px;\n  padding: 25px 35px;\n}\n\ndiv.projectPanel {\n  padding-left: 5vw;\n  padding-right: 5vw;\n  width: auto;\n  height: auto;\n  position: relative;\n}\n\ndiv.allProjects {\n  width: auto;\n  height: auto;\n}\n\n.projectImage {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 40vw;\n  height: 30vw;\n  border-top-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n}\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<!-- Page Header -->\n<header class=\"masthead\" style=\"background-image: url('img/post-bg.jpg')\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 col-md-10 mx-auto\">\n        <div class=\"post-heading\">\n          <h1>Projects</h1>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n<article>\n  <div class=\"allProjects\">\n    <!-- Charlie Project  -->\n    <div class=\"projectPanel\">\n      <!-- Project Heading  -->\n      <div class=\"projectHeading\">\n        <h2>\n          \"Charlie\", the Pipe Scanner\n        </h2>\n      </div>\n      <!-- Contains the Body + Pictures  -->\n      <div class=\"projectContainer\">\n        <!-- Body Description of the project -->\n        <div class=\"projectBody col-lg-8 col-md-10 mx-auto\">\n          <p>\n            Why we called the robot Charlie, I still don’t know. The name has no relationship with the project, the purpose of the Project,\n            or the time in-between when we were designing it. In fact, I only actually know one Charlie, and his name isn’t\n            actually Charlie (it’s a Chinese friend of mine who happens to go by Charlie). Regardless of the naming, I was\n            part of a group project in my second year of university where we built a robot capable of scanning a pipe for\n            “radioactive waste” (black dots) and count the occurrences. “Charlie” would then be entered in a competition\n            against other (obviously inferior, 😉) pipe scanning robots. The challenge of this project was to not only build\n            the robot, but to have it follow the following constraints:\n\n          </p>\n          <ol class=\"charlieList\">\n            <li>Be able to scan dots located anywhere of the circumference of the pipe and at any location along the pipe’s length.</li>\n            <li>Not scratch the pipe, this would lead to an immediate disqualification from the competition. </li>\n            <li>Include an emergency stop button to halt Charlie in his place.</li>\n            <li>To record the number of instances of black dots and record their location relative to the pipe’s length.</li>\n          </ol>\n          <p>\n            I was the electromechanical member of this group. My responsibility was to communicate with the two other members in my group\n            (the circuits member and the programming member). We had team meetings twice a week to update on our individual\n            progress and collaborate on future plans. My role as the electromechanical member was to design the structural\n            framework of the robot and deal with placing any motors and design circuitry on the skeleton. I had major roles\n            in all four requirements above.\n          </p>\n\n          <p>\n            For requirement one, it was my responsibility to design the skeleton of the robot such that it had access to the entire circumference\n            of the pipe for scanning the black dots. I collaborated with my team and people external to my team for ideas\n            on how to approach this. I created many sketches detailing my ideas (albeit, not the greatest sketches) to present\n            to my team, and we eventually settled on a “U-shaped” arm that extends from the robot. We investigated the capabilities\n            of the infrared sensors that would scan the pipe for black dots and discovered that they were easily powerful\n            enough to detect change from far distances. Because of this, we decided that, for convenience sake, this arm\n            didn’t need to fully wrap around the pipe but could leave the bottom uncovered. For requirement two, although\n            we later implemented an ultrasonic sensor to help reposition the robot if it ever became too close or too far\n            from the robot, it was my responsibility to make the robot go as straight as possible. This involved re-placing\n            the wheels many times, but eventually I got it to go straight enough such that the ultrasonic sensor could take\n            over the rest. Requirement three was very simple to complete. All this required was for me to place a red button\n            as close as possible to the motherboard and let the circuit’s member handle the rest. For the fourth requirement,\n            we came up with a simple, yet pretty cool quick solution. I measured the diameter of the wheels we used. Next,\n            I cut up a circular piece of paper to the same diameter as measured. I then coloured the piece of paper in a\n            pattern of black and white slices, effectively creating a pedometer when used with an infrared sensor and placed\n            on the inside of the wheel.\n          </p>\n        </div>\n\n        <div>\n          <img class=\"projectImage\" src=\"../../assets/images/Federer-Tweener.jpg\" alt=\"Picture\">\n        </div>\n      </div>\n      <br>\n      <br>\n\n    </div>\n    <!-- Finder Thingy Project  -->\n    <div class=\"projectPanel\">\n      <!-- Project Heading  -->\n      <div class=\"projectHeading\">\n        <h2>\n          \"Finder Thingy\"\n        </h2>\n      </div>\n      <!-- Contains the Body + Pictures  -->\n      <div class=\"projectContainer\">\n        <!-- Body Description of the project -->\n        <div class=\"projectBody col-lg-8 col-md-10 mx-auto\">\n          <p>\n            Early in the summer of 2017, I first ‘dipped my toes’ into the world of software by taking an object-oriented design course.\n            I did this because I asked my friend from school what would be a good skill to have and he recommended me to\n            object-oriented programming. This course didn’t introduce any traditional “coding-skills”, but it did introduce\n            me to the important foundations used in most software projects used in today’s industry. This interested me,\n            so I decided to go farther and apply these principles to actual projects. However, I wasn’t very adept at any\n            programming languages. I had a MacBook pro at the time, so I decided to try out iOS development in swift by taking\n            a course taught by the same individual. This course taught me the basics such as tableviews, delegation, segues,\n            and networking using tools such as Alamofire. This course also taught me Swift3.\n          </p>\n\n          <p>\n            Using the introductory skills taught in this course, I decided to try some of them out on a silly app I decided to call “Finder\n            Thingy”. The idea behind this app was to have a personalized list of destinations that I like, and wherever I\n            am, I could take out the app and look up the closest location. I used Alamofire to access the Google Maps/Places\n            API (with an API key registered in my AppDelegate file) and de-structured the returned JSON to supply the user\n            with direction information. This was an introductory app that really wasn’t that great at all, but I’m proud\n            of the fact that it was my first.\n          </p>\n        </div>\n\n        <div>\n          <img class=\"projectImage\" src=\"../../assets/images/Federer-Tweener.jpg\" alt=\"Picture\">\n        </div>\n      </div>\n      <br>\n      <br>\n    </div>\n    <!-- Website Project  -->\n    <div class=\"projectPanel\">\n      <!-- Project Heading  -->\n      <div class=\"projectHeading\">\n        <h2>\n          This Website\n        </h2>\n      </div>\n      <!-- Contains the Body + Pictures  -->\n      <div class=\"projectContainer\">\n        <!-- Body Description of the project -->\n        <div class=\"projectBody col-lg-8 col-md-10 mx-auto\">\n          <p>\n            I won't dive too deeply into the details of this website because, well, you're already on it (haha), but I will talk about\n            it's development. This website is a single-page application written in an angular4 frontend. It consists of a\n            main page with a navigation bar defined in the index.html file. Underneath the navigation bar is a router directive\n            for which Angular places all of the applications routed-components. These routed-components include the home\n            page that introduces me, a resume page, a projects page, and a separate blog page. I toyed with many of Agular’s\n            features, some of, my favorites being the animations and routing animations. I followed the material design guidelines\n            to help create a modern-looking website and am always looking for suggestions on how to improve it as this is\n            my first website. I decided on the brighter colour-scheme because I think it matches well with my favorite outdoor\n            sport tennis.\n          </p>\n\n        </div>\n\n        <div>\n          <img class=\"projectImage\" src=\"../../assets/images/Federer-Tweener.jpg\" alt=\"Picture\">\n        </div>\n      </div>\n      <br>\n      <br>\n    </div>\n  </div>\n</article>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(router) {
        this.router = router;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        console.log("PROJECTS");
        this.router.events.subscribe(function (evt) {
            console.log("ROUTER");
            window.scrollTo(0, 0);
        });
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "sammy-projects",
            template: __webpack_require__("./src/app/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_component__ = __webpack_require__("./src/app/projects/projects.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__projects_component__["a" /* ProjectsComponent */]]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/sammy-resume/sammy-resume.component.css":
/***/ (function(module, exports) {

module.exports = "@import url('https://www.w3schools.com/w3css/4/w3.css');\n@import url('https://fonts.googleapis.com/css?family=Roboto');\n@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300');\n@import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');\n.container {\n    position: relative;\n    width: 50%;\n}\n.image {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.middle {\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%)\n}\n.container:hover .image {\n  opacity: 0.3;\n}\n.container:hover .middle {\n  opacity: 1;\n}\n.text {\n  background-color: #4CAF50;\n  color: white;\n  font-size: 16px;\n  padding: 16px 32px;\n}\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n/* Modal Content */\n.modal-content {\n    position: relative;\n    background-color: #fefefe;\n    margin: auto;\n    padding: 0;\n    border: 1px solid #888;\n    width: 80%;\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s\n}\n/* Add Animation */\n@-webkit-keyframes animatetop {\n    from {top:-300px; opacity:0}\n    to {top:0; opacity:1}\n}\n@keyframes animatetop {\n    from {top:-300px; opacity:0}\n    to {top:0; opacity:1}\n}\n/* The Close Button */\n.close {\n    color: white;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n.close:hover,\n.close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n.modal-header {\n    padding: 2px 16px;\n    background-color: #5cb85c;\n    color: white;\n}\n.modal-body {padding: 2px 16px;}\n.modal-footer {\n    padding: 2px 16px;\n    background-color: #5cb85c;\n    color: white;\n}\np.info-zone {\n    word-wrap: break-word;\n}\n"

/***/ }),

/***/ "./src/app/sammy-resume/sammy-resume.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<!-- Page Container -->\n<div class=\"w3-content w3-margin-top\" style=\"max-width:1400px; height:auto;\">\n  <!-- The Grid -->\n  <div class=\"w3-row-padding\">\n    <!-- Left Column -->\n    <div class=\"w3-third\">\n      <div class=\"w3-white w3-text-grey w3-card-4\">\n        <div class=\"w3-display-container\">\n          <!-- Change slashes for different platforms -->\n          <img src=\"../../assets/images/sanFran.jpg\" style=\"width:100%\" alt=\"Avatar\">\n          <div class=\"w3-display-topleft w3-container w3-text-black\">\n            <!-- Font color black -->\n            <h2 style=\"color: #000000\">Sammy Al Hashemi</h2>\n          </div>\n        </div>\n        <div class=\"w3-container\">\n          <br>\n          <p>\n            <i class=\"fa fa-code fa-fw w3-margin-right w3-large w3-text-teal\"></i>Device Characterization Engineer</p>\n          <!-- Google Home Icon; used &emsp for tab spaces -->\n          <p class=\"info-zone\">\n            <i class=\"material-icons\" style=\"color:teal\">home</i>&emsp;Mississauga, Ontario, Canada</p>\n          <p class=\"info-zone\">\n            <i class=\"fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal\"></i>sammy.alhashemi@mail.utoronto.ca</p>\n          <p class=\"info-zone\">\n            <i class=\"fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal\"></i>(408)-908-9512</p>\n          <!-- A Literal Line division inserted -->\n          <hr>\n          <p class=\"w3-large\">\n            <b>\n              <i class=\"fa fa-asterisk fa-fw w3-margin-right w3-text-teal\"></i>Skills</b>\n          </p>\n          <button (click)=\"this.toggler()\">ANIMATE</button>\n          <p>Python</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\" [@loadanimation]=\"this.toggleState\">\n            <div class=\"w3-container w3-center w3-round-xlarge w3-teal score\" style=\"width:70%\">70%</div>\n          </div>\n          <p>Java</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\" [@loadanimation1]=\"this.toggleState\">\n            <div class=\"w3-container w3-center w3-round-xlarge w3-teal score\" style=\"width:60%\">\n              <div class=\"w3-center w3-text-white\">60%</div>\n            </div>\n          </div>\n          <p>Swift3</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\" [@loadanimation1]=\"this.toggleState\">\n            <div class=\"w3-container w3-center w3-round-xlarge w3-teal score\" style=\"width:60%\">60%</div>\n          </div>\n          <p>HTML-CSS-Javascript</p>\n          <div class=\"w3-light-grey w3-round-xlarge w3-small\" [@loadanimation2]=\"this.toggleState\">\n            <div class=\"w3-container w3-center w3-round-xlarge w3-teal score\" style=\"width:40%\">40%</div>\n          </div>\n          <!-- A Line Break -->\n          <br>\n          <p class=\"w3-large w3-text-theme\">\n            <b>\n              <i class=\"fa fa-globe fa-fw w3-margin-right w3-text-teal\"></i>Languages</b>\n          </p>\n          <p>English</p>\n          <div class=\"w3-light-grey w3-round-xlarge\">\n            <div class=\"w3-round-xlarge w3-teal\" style=\"height:24px;width:100%\"></div>\n          </div>\n          <!-- A Line Break -->\n          <br>\n        </div>\n      </div>\n      <br>\n      <!-- End Left Column -->\n    </div>\n    <!-- Right Column -->\n    <div class=\"w3-twothird\">\n      <div class=\"w3-container w3-card w3-white w3-margin-bottom\">\n        <h2 class=\"w3-text-grey w3-padding-16\">\n          <i class=\"fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Work Experience</h2>\n        <div class=\"w3-container\">\n          <h5 class=\"w3-opacity\">\n            <b>Device Characterization and Product Engineering Intern</b>,\n            <i>Microsemi Corp</i>.</h5>\n          <h6 class=\"w3-text-teal\">\n            <i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>July 2017 -\n            <span class=\"w3-tag w3-teal w3-round\">Present</span>\n          </h6>\n          <p>I am currently working on a collaborative team to develop test structures and designs to test and characterize\n            Microsemi FPGA products, specifically their G5 product. I have three main components (projects) within the FPGA\n            for which I am developing the test structures and designs. I take part in weekly meetings where I give my updates\n            and also collaborate with a subset of my team in India. I perform design creation, design simulation, and design\n            testing at offsite vendors to fully characterize the component I am working on.</p>\n          <hr>\n        </div>\n        <div class=\"w3-container\">\n          <h5 class=\"w3-opacity\">\n            <b>Undergraduate Research Assistant</b>,\n            <i>University of Toronto, AP\n              <sub>2</sub>D Labs</i>\n          </h5>\n          <h6 class=\"w3-text-teal\">\n            <i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>May 2015 - Sept 2016</h6>\n          <p>In 2015, I assisted a graduate student in his research in a photovoltaics lab by helping him with the machinery\n            and also coding numerical solvers for him. I conveyed recommendations to him by means of a detailed report on\n            numerical methods recommended, and also with methods already tried and implemented. In 2016, I worked with modelling\n            language LAMMPS to simulate different the behavior of different gaseous substances being introduced to a carbon\n            substrate in order to develop the any understanding if the graphene production process can be synthesized at\n            lower temperatures using AiMS instead of the normal, energy intensive, CVD process.</p>\n          <hr>\n        </div>\n        <div class=\"w3-container\">\n          <h5 class=\"w3-opacity\">\n            <b>Junior Tennis Coach</b>,\n            <i>Ontario Racquet Club/Pine Point Tennis Club</i>\n          </h5>\n          <h6 class=\"w3-text-teal\">\n            <i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>May 2011 - Sept 2014</h6>\n          <p>Supervisor(s): Giulio Morelli (Tennis Canada Coach Level 5) (647)-404-0248</p>\n          <br>\n        </div>\n      </div>\n      <div class=\"w3-container w3-card w3-white\">\n        <h2 class=\"w3-text-grey w3-padding-16\">\n          <i class=\"fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal\"></i>Education</h2>\n        <div class=\"w3-container\">\n          <h4 class=\"w3-opacity\">\n            <b>University of Toronto</b>\n          </h4>\n          <h5 class=\"w3-opacity\">\n            <b>Bachelor of Applied Science and Engineering</b>,\n            <i>Department of Engineering Science</i>\n          </h5>\n          <h6 class=\"w3-text-teal\">\n            <i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>Sept 2014 - Present</h6>\n          <p>\n            Enrolled in the Engineering Science Program. I chose the Physics option which focuses on engineering design with major physics\n            applications\n            <br>\n            <b>cGPA:</b>\n            <i>3.56</i>\n          </p>\n          <hr>\n        </div>\n        <div class=\"w3-container\">\n          <h4 class=\"w3-opacity\">\n            <b>Mentor College</b>,\n            <i>High School</i>\n          </h4>\n          <h5 class=\"w3-text-teal\">\n            <i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>2017</h5>\n          <p>\n            <b>High School Diploma</b>\n          </p>\n          <hr>\n        </div>\n        <div class=\"w3-container\">\n          <h4 class=\"w3-opacity\">\n            <b>Coursera</b>\n          </h4>\n          <h5 class=\"w3-text-teal\">\n            <i class=\"fa fa-calendar fa-fw w3-margin-right\"></i>2017</h5>\n          <p>\n            <b>Courses Taken:</b>\n            <br>\n            <ul class=\"w3-ul\">\n              <li>\n                <i class=\"material-icons\" style=\"color:black; size: 16px\">navigate_next</i>&emsp;&emsp;&emsp;&emsp;\n                <a href=\"https://www.coursera.org/learn/machine-learning/\" title=\"ML\">Machine Learning, Andrew Ng</a>\n              </li>\n            </ul>\n            <hr>\n        </div>\n      </div>\n      <!-- End Right Column -->\n    </div>\n    <!-- End Grid -->\n  </div>\n  <!-- End Page Container -->\n</div>\n<footer class=\"w3-container w3-teal w3-center w3-margin-top\">\n  <!-- Used the text-decoration css style inline to remove underlines from these hrefs -->\n  <p>Find me on social media.</p>\n  <a href=\"https://www.facebook.com/sammy.alhashemi\" title=\"Facebook\" style=\"text-decoration: none\">\n    <i class=\"fa fa-facebook-official w3-hover-opacity\"></i>\n  </a>\n  <a href=\"https://www.instagram.com/sammyalhashemi/\" title=\"Instagram\" style=\"text-decoration: none\">\n    <i class=\"fa fa-instagram w3-hover-opacity\"></i>\n  </a>\n  <a href=\"https://twitter.com/SammyAlhashemi1\" title=\"Twitter\" style=\"text-decoration: none\">\n    <i class=\"fa fa-twitter w3-hover-opacity\"></i>\n  </a>\n  <a href=\"https://www.linkedin.com/in/sammy-alhashemi-2a9865a1/\" title=\"LinkedIn\" style=\"text-decoration: none\">\n    <i class=\"fa fa-linkedin w3-hover-opacity\"></i>\n  </a>\n  <a href=\"https://github.com/Sammyalhashe\" title=\"GitHub\" style=\"text-decoration: none\">\n    <i class=\"fa fa-github w3-hover-opacity\"></i>\n  </a>\n</footer>"

/***/ }),

/***/ "./src/app/sammy-resume/sammy-resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
        var timeoutId = setTimeout(function () {
            console.log("hello");
        }, 2000);
        console.log(window.location.href);
        this.toggleState = true;
    }
    ResumeComponent.prototype.toggler = function () {
        console.log("CLICKED");
        this.toggleState = this.toggleState ? false : true;
    };
    ResumeComponent.prototype.ngOnInit = function () {
        this.navigationBar = document.getElementById("navigation-bar");
        // this.navigationBar.style.display = "none";
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/sammy-resume/sammy-resume.component.html"),
            styles: [__webpack_require__("./src/app/sammy-resume/sammy-resume.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* trigger */])("loadanimation", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])("* => *", [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(".score", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ width: 0 })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(".score", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* stagger */])("500ms", [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("800ms 0.3s ease-out", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ width: 70 + "%" }))
                        ]))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* trigger */])("loadanimation1", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])("* => *", [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(".score", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ width: 0 })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(".score", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* stagger */])("500ms", [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("800ms 0.3s ease-out", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ width: 60 + "%" }))
                        ]))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* trigger */])("loadanimation2", [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])("* => *", [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(".score", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ width: 0 })),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* query */])(".score", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* stagger */])("500ms", [
                            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])("800ms 0.3s ease-out", Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ width: 40 + "%" }))
                        ]))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/sammy-resume/sammy-resume.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SammyResumeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sammy_resume_component__ = __webpack_require__("./src/app/sammy-resume/sammy-resume.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SammyResumeModule = /** @class */ (function () {
    function SammyResumeModule() {
    }
    SammyResumeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sammy_resume_component__["a" /* ResumeComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__sammy_resume_component__["a" /* ResumeComponent */]
            ]
        })
    ], SammyResumeModule);
    return SammyResumeModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("./src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("./node_modules/core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("./node_modules/core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("./node_modules/zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_web_animations_js__ = __webpack_require__("./node_modules/web-animations-js/web-animations.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_web_animations_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_web_animations_js__);





/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 */
// (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
// (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
// (window as any).__zone_symbol__BLACK_LISTED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
/*
 * in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 * with the following flag, it will bypass `zone.js` patch for IE/Edge
 */
// (window as any).__Zone_enable_cross_context_check = true;
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ "./src/shared/Dialog/dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".overlay {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 999;\n  }\n  \n  .dialog {\n    z-index: 1000;\n    position: fixed;\n    right: 0;\n    left: 0;\n    top: 20px;\n    margin-right: auto;\n    margin-left: auto;\n    min-height: 200px;\n    width: 90%;\n    max-width: 520px;\n    background-color: #fff;\n    padding: 12px;\n    -webkit-box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n            box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n  }\n  \n  @media (min-width: 768px) {\n    .dialog {\n      top: 40px;\n    }\n  }\n  \n  .dialog__close-btn {\n    border: 0;\n    background: none;\n    color: #2d2d2d;\n    position: absolute;\n    top: 8px;\n    right: 8px;\n    font-size: 1.2em;\n  }"

/***/ }),

/***/ "./src/shared/Dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\n    <ng-content></ng-content>\n    <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">X</button>\n</div>\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>"

/***/ }),

/***/ "./src/shared/Dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.closable = false;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "closable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DialogComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DialogComponent.prototype, "visibleChange", void 0);
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sammy-app-dialog',
            template: __webpack_require__("./src/shared/Dialog/dialog.component.html"),
            styles: [__webpack_require__("./src/shared/Dialog/dialog.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["o" /* trigger */])('dialog', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["n" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dialog_dialog_component__ = __webpack_require__("./src/shared/Dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__Dialog_dialog_component__["a" /* DialogComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__Dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map