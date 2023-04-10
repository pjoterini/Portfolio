/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/archImages.js":
/*!**************************************!*\
  !*** ./src/javascript/archImages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var archImages = function archImages() {
  var archImages = document.querySelector(".arch-images");
  if (archImages) {
    var maxRight = -415;
    var speedX = 0.4;
    var positionX = -415;
    if (window.screen.width < 1024) {
      var pdfBtn = document.querySelector(".check-pdf");
      pdfBtn.classList.add("check-pdf-hover");
      var myInterval = setInterval(function () {
        positionX = positionX + speedX;
        if (positionX > maxRight || positionX < -2480) {
          speedX = speedX * -1;
        }
        archImages.style.left = positionX + "px";
        archImages.addEventListener("mouseleave", function (e) {
          clearInterval(myInterval);
          pdfBtn.classList.remove("check-pdf-hover");
        });
      }, 1000 / 250);
    }
    if (window.screen.width >= 1024) {
      archImages.addEventListener("mouseenter", function (e) {
        var pdfBtn = document.querySelector(".check-pdf");
        pdfBtn.classList.add("check-pdf-hover");
        var myInterval = setInterval(function () {
          positionX = positionX + speedX;
          if (positionX > maxRight || positionX < -2480) {
            speedX = speedX * -1;
          }
          archImages.style.left = positionX + "px";
          archImages.addEventListener("mouseleave", function (e) {
            clearInterval(myInterval);
            pdfBtn.classList.remove("check-pdf-hover");
          });
        }, 1000 / 250);
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (archImages);

/***/ }),

/***/ "./src/javascript/arrows.js":
/*!**********************************!*\
  !*** ./src/javascript/arrows.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var arrows = function arrows() {
  var arrows = document.querySelector(".arrows");
  if (arrows) {
    var arrowMove = function arrowMove() {
      arrows.classList.toggle("arrow-move");
    };
    setInterval(arrowMove, 1200);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arrows);

/***/ }),

/***/ "./src/javascript/colorTheme.js":
/*!**************************************!*\
  !*** ./src/javascript/colorTheme.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var colorTheme = function colorTheme() {
  var moonIcon = document.querySelector(".moon-icon");
  var sunIcon = document.querySelector(".sun-icon");
  var logoImg = document.querySelector(".logo-img");
  var moon = document.querySelector(".moon");
  var root = document.querySelector(":root");
  if (moonIcon) {
    moonIcon.addEventListener("click", function () {
      moonIcon.classList.add("active");
      sunIcon.classList.remove("active");
      logoImg.classList.remove("logo-img-light");
      moon.classList.remove("no-spark-moon-light-theme");
      moon.classList.remove("spark-moon-light-theme");
      root.style.setProperty("--primary-color", "#211337");
      root.style.setProperty("--secondary-color", "#ffd698");
      root.style.setProperty("--accent-color", "#44cead");
      root.style.setProperty("--white", "#fff");
      root.style.setProperty("--black", "rgb(0, 0, 0)");
    });
    sunIcon.addEventListener("click", function () {
      moonIcon.classList.remove("active");
      sunIcon.classList.add("active");
      logoImg.classList.add("logo-img-light");
      moon.classList.add("no-spark-moon-light-theme");
      moon.classList.add("spark-moon-light-theme");
      root.style.setProperty("--primary-color", "#fff");
      root.style.setProperty("--secondary-color", "#44cead");
      root.style.setProperty("--accent-color", "#ffd698");
      root.style.setProperty("--white", "#211337");
      root.style.setProperty("--black", "#211337");
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (colorTheme);

/***/ }),

/***/ "./src/javascript/navbar.js":
/*!**********************************!*\
  !*** ./src/javascript/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var navbar = function navbar() {
  var burgerBtnOpen = document.querySelector(".burger-btn-open");
  var burgerBtnClose = document.querySelector(".burger-btn-close");
  var navLinksUl = document.querySelector(".nav-links-ul");
  if (burgerBtnOpen) {
    burgerBtnOpen.addEventListener("click", function () {
      burgerBtnOpen.classList.add("display-none");
      burgerBtnClose.classList.remove("display-none");
      navLinksUl.classList.remove("display-none");
    });
    burgerBtnClose.addEventListener("click", function () {
      burgerBtnClose.classList.add("display-none");
      burgerBtnOpen.classList.remove("display-none");
      navLinksUl.classList.add("display-none");
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);

/***/ }),

/***/ "./src/javascript/projects.js":
/*!************************************!*\
  !*** ./src/javascript/projects.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var projects = function projects() {
  var projects = document.querySelectorAll(".project-vid");
  var projectsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle("show-project-vid", entry.isIntersecting);
    });
  }, {
    threshold: 0
  });
  projects.forEach(function (project) {
    projectsObserver.observe(project);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./src/javascript/spaceBackground.js":
/*!*******************************************!*\
  !*** ./src/javascript/spaceBackground.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var spaceBackground = function spaceBackground() {
  var star = document.querySelector(".star1");
  var star2 = document.querySelector(".star2");
  var star3 = document.querySelector(".star3");
  var star4 = document.querySelector(".star4");
  var star5 = document.querySelector(".star5");
  var star6 = document.querySelector(".star6");
  var star7 = document.querySelector(".star7");
  var star8 = document.querySelector(".star8");
  var star9 = document.querySelector(".star9");
  var star10 = document.querySelector(".star10");
  var star11 = document.querySelector(".star11");
  var star12 = document.querySelector(".star12");
  var star13 = document.querySelector(".star13");
  var star14 = document.querySelector(".star14");
  var star15 = document.querySelector(".star15");
  var star16 = document.querySelector(".star16");
  var star17 = document.querySelector(".star17");
  var star18 = document.querySelector(".star18");
  var star19 = document.querySelector(".star19");
  var star20 = document.querySelector(".star20");
  var moon = document.querySelector(".moon");
  setInterval(spark, 3000);
  function spark() {
    star.classList.toggle("spark");
    star.classList.toggle("no-spark");
  }
  setInterval(spark2, 4000);
  function spark2() {
    star2.classList.toggle("spark");
    star2.classList.toggle("no-spark");
  }
  setInterval(spark3, 3500);
  function spark3() {
    star3.classList.toggle("spark");
    star3.classList.toggle("no-spark");
  }
  setInterval(spark4, 3800);
  function spark4() {
    star4.classList.toggle("spark");
    star4.classList.toggle("no-spark");
  }
  setInterval(spark5, 3200);
  function spark5() {
    star5.classList.toggle("spark");
    star5.classList.toggle("no-spark");
  }
  setInterval(spark6, 4100);
  function spark6() {
    star6.classList.toggle("spark");
    star6.classList.toggle("no-spark");
  }
  setInterval(spark7, 2800);
  function spark7() {
    star7.classList.toggle("spark");
    star7.classList.toggle("no-spark");
  }
  setInterval(spark8, 3300);
  function spark8() {
    star8.classList.toggle("spark");
    star8.classList.toggle("no-spark");
  }
  setInterval(spark9, 3400);
  function spark9() {
    star9.classList.toggle("spark");
    star9.classList.toggle("no-spark");
  }
  setInterval(spark10, 3600);
  function spark10() {
    star10.classList.toggle("spark");
    star10.classList.toggle("no-spark");
  }
  setInterval(spark11, 4100);
  function spark11() {
    star11.classList.toggle("spark");
    star11.classList.toggle("no-spark");
  }
  setInterval(spark12, 2900);
  function spark12() {
    star12.classList.toggle("spark");
    star12.classList.toggle("no-spark");
  }
  setInterval(spark13, 3700);
  function spark13() {
    star13.classList.toggle("spark");
    star13.classList.toggle("no-spark");
  }
  setInterval(spark14, 3800);
  function spark14() {
    star14.classList.toggle("spark");
    star14.classList.toggle("no-spark");
  }
  setInterval(spark15, 3900);
  function spark15() {
    star15.classList.toggle("spark");
    star15.classList.toggle("no-spark");
  }
  setInterval(spark16, 3300);
  function spark16() {
    star16.classList.toggle("spark");
    star16.classList.toggle("no-spark");
  }
  setInterval(spark17, 3350);
  function spark17() {
    star17.classList.toggle("spark");
    star17.classList.toggle("no-spark");
  }
  setInterval(spark18, 4300);
  function spark18() {
    star18.classList.toggle("spark");
    star18.classList.toggle("no-spark");
  }
  setInterval(spark19, 3440);
  function spark19() {
    star19.classList.toggle("spark");
    star19.classList.toggle("no-spark");
  }
  setInterval(spark20, 3550);
  function spark20() {
    star20.classList.toggle("spark");
    star20.classList.toggle("no-spark");
  }

  //  MOON

  if (moon) {
    var spark21 = function spark21() {
      moon.classList.toggle("spark-moon");
      moon.classList.toggle("no-spark-moon");
    };
    setInterval(spark21, 5550);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spaceBackground);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/LOGO_white.png */ "./src/assets/LOGO_white.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/LOGO_black.png */ "./src/assets/LOGO_black.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/1.webp */ "./src/assets/1.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/2.webp */ "./src/assets/2.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/3.webp */ "./src/assets/3.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/4.webp */ "./src/assets/4.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/5.webp */ "./src/assets/5.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/6.webp */ "./src/assets/6.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/7.webp */ "./src/assets/7.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/8.webp */ "./src/assets/8.webp"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/my-image.png */ "./src/assets/my-image.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/kot.jpg */ "./src/assets/kot.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/hala.jpeg */ "./src/assets/hala.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/dyplom.jpg */ "./src/assets/dyplom.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/magistera.jpg */ "./src/assets/magistera.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/kot2.jpg */ "./src/assets/kot2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/plaza.jpg */ "./src/assets/plaza.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary-color: #211337;\n  --secondary-color: #ffd698;\n  --accent-color: #44cead;\n  --white: #fff;\n  --gray: rgb(157, 157, 157);\n  --black: rgb(0, 0, 0);\n  --transition1: 300ms all ease-in-out;\n}\n\n.h1 {\n  font-family: \"Playfair Display\", serif;\n  font-weight: 900;\n  font-size: 4.5rem;\n  color: var(--white);\n}\n\n.h2 {\n  font-family: \"Playfair Display\", serif;\n  font-weight: 900;\n  font-size: 3.2rem;\n  color: var(--white);\n}\n\n.h3 {\n  font-weight: 300;\n  font-size: 1.8rem;\n  color: var(--white);\n}\n\n.h4 {\n  font-size: 2rem;\n  color: var(--white);\n  font-weight: 700;\n}\n\n.h6 {\n  font-size: 18px;\n  color: var(--white);\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\np {\n  line-height: 1.8rem;\n  font-size: 18px;\n  color: var(--gray);\n  font-family: \"Montserrat\", sans-serif;\n}\n\na {\n  text-decoration: none;\n}\n\n.fade-text {\n  color: var(--white);\n  opacity: 0.3;\n  font-weight: 300;\n  font-family: \"Montserrat\", sans-serif;\n}\n\n.stars {\n  width: 100vw;\n}\n\n.star {\n  position: absolute;\n  border: 2px solid var(--white);\n  border-radius: 50%;\n}\n\n.star1 {\n  left: 10vw;\n  top: 40vh;\n}\n\n.star2 {\n  left: 8vw;\n  top: 15vh;\n}\n\n.star3 {\n  left: 25vw;\n  top: 10vh;\n}\n\n.star4 {\n  left: 22vw;\n  top: 28vh;\n}\n\n.star5 {\n  left: 40vw;\n  top: 6vh;\n}\n\n.star6 {\n  left: 47vw;\n  top: 27vh;\n}\n\n.star7 {\n  left: 60vw;\n  top: 12vh;\n}\n\n.star8 {\n  left: 67vw;\n  top: 30vh;\n}\n\n.star9 {\n  left: 85vw;\n  top: 10vh;\n}\n\n.star10 {\n  left: 5vw;\n  top: 60vh;\n}\n\n.star11 {\n  left: 18vw;\n  top: 70vh;\n}\n\n.star12 {\n  left: 48vw;\n  top: 51vh;\n}\n\n.star13 {\n  left: 40vw;\n  top: 76vh;\n}\n\n.star14 {\n  left: 90vw;\n  top: 37vh;\n}\n\n.star15 {\n  left: 84vw;\n  top: 65vh;\n}\n\n.star16 {\n  left: 7vw;\n  top: 86vh;\n}\n\n.star17 {\n  left: 27vw;\n  top: 94vh;\n}\n\n.star18 {\n  left: 90vw;\n  top: 89vh;\n}\n\n.star19 {\n  left: 57vw;\n  top: 86vh;\n}\n\n.star20 {\n  left: 73vw;\n  top: 82vh;\n}\n\n.l {\n  height: 25px;\n  width: 25px;\n  opacity: 0.4;\n}\n\n.m {\n  height: 15px;\n  width: 15px;\n  opacity: 0.3;\n}\n\n.s {\n  height: 8px;\n  width: 8px;\n  opacity: 0.25;\n}\n\n.spark {\n  -webkit-box-shadow: 10px 17px 70px 37px var(--accent-color);\n  -moz-box-shadow: 10px 17px 70px 37px var(--accent-color);\n  box-shadow: 0px 0px 50px 15px var(--accent-color);\n  transition: 1500ms all ease-in-out;\n}\n\n.no-spark {\n  box-shadow: none;\n  opacity: 0.1;\n  transition: 2000ms all ease-in-out;\n}\n\n.spark-moon {\n  -webkit-box-shadow: 10px 17px 70px 37px var(--accent-color);\n  -moz-box-shadow: 10px 17px 70px 37px var(--accent-color);\n  box-shadow: -5px -3px 50px 1px var(--accent-color);\n  transition: 2500ms all ease-in-out;\n  opacity: 1;\n}\n\n.no-spark-moon {\n  box-shadow: none;\n  transition: 3000ms all ease-in-out;\n  opacity: 0.7;\n}\n\n.moon {\n  position: relative;\n  height: 250px;\n  width: 250px;\n  border-radius: 50%;\n  background-color: rgb(177, 177, 177);\n  border-right: 55px solid gray;\n  transform: rotate(30deg);\n}\n\n.moon::before {\n  top: 40px;\n  left: 70px;\n  content: \"\";\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #707070;\n  border-right: solid 7px rgb(85, 85, 85);\n  transform: rotate(190deg);\n}\n\n.moon::after {\n  top: 180px;\n  left: 90px;\n  content: \"\";\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #7e7e7e;\n  border-right: solid 6px rgb(82, 82, 82);\n  transform: rotate(190deg);\n}\n\n.moon-holes1 {\n  top: 120px;\n  left: 20px;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #808080;\n  border-right: solid 5px rgb(94, 94, 94);\n  transform: rotate(190deg);\n}\n\n.moon-holes2 {\n  top: 50px;\n  left: 200px;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #4e4e4e;\n  border-right: solid 3px rgb(58, 58, 58);\n  transform: rotate(190deg);\n}\n\n.moon-holes3 {\n  top: 150px;\n  left: 210px;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #4e4e4e;\n  border-right: solid 2px rgb(66, 66, 66);\n  transform: rotate(190deg);\n}\n\n.moon-holes4 {\n  top: 110px;\n  left: 160px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: #888888;\n  border-right: solid 3px rgb(88, 88, 88);\n  transform: rotate(190deg);\n}\n\n@media (max-width: 1440px) {\n  .star {\n    transform: scale(0.7);\n  }\n}\n.burger-menu {\n  color: var(--white);\n  padding: 0.5rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.burger-btns {\n  display: none;\n}\n\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  .burger-menu {\n    margin-top: 2rem;\n    border: 1px solid var(--accent-color);\n    border-radius: 20px;\n  }\n  .burger-btns {\n    display: block;\n  }\n  .burger-btn-close {\n    margin-top: 0.5rem;\n  }\n}\n.main-nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo-and-mode {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo-img {\n  height: 80px;\n  width: 80px;\n  margin-top: 0.5rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n.logo-img-light {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.color-mode {\n  flex: 1;\n  margin-left: 2rem;\n}\n\n.color-mode ul {\n  display: flex;\n}\n\n.color-mode li {\n  margin: 0 0.5rem;\n  padding: 0.5rem;\n  border-radius: 50%;\n  color: var(--white);\n  display: flex;\n  cursor: pointer;\n  transition: var(--transition1);\n}\n\n.color-mode li.active {\n  -webkit-box-shadow: inset 0px 0px 0px 2px var(--accent-color);\n  -moz-box-shadow: inset 0px 0px 0px 2px var(--accent-color);\n  box-shadow: inset 0px 0px 0px 2px var(--accent-color);\n}\n\n.color-mode-ul {\n  margin-top: 0.5rem;\n}\n\n.nav-links-ul {\n  display: flex;\n}\n\n.nav-links a {\n  align-self: center;\n  color: var(--white);\n  text-decoration: none;\n  list-style-type: none;\n  padding: 0 2rem;\n  font-weight: 600;\n  transition: var(--transition1);\n}\n\n.nav-links a:hover {\n  color: var(--accent-color);\n  transform: scale(1.1);\n}\n\n/* 1024px /////////////////////////// */\n@media (max-width: 1024px) {\n  .main-nav {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .nav-links-ul {\n    margin-top: 2rem;\n  }\n}\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  .main-nav {\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .nav-links {\n    width: 100%;\n  }\n  .nav-links-ul {\n    flex-direction: column;\n  }\n  .nav-links a {\n    padding: 0.5rem 0;\n  }\n}\n.main {\n  width: 100%;\n  margin-top: 16rem;\n  display: grid;\n  grid-template-columns: 60% 40%;\n}\n\n.main-left {\n  color: var(--white);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.main-text-1 {\n  font-weight: 300;\n  font-size: 2.5rem;\n  color: var(--white);\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n}\n\n.main-text-2 {\n  font-weight: 300;\n  font-size: 1.8rem;\n  color: var(--gray);\n  margin-top: 1rem;\n}\n\n.btn {\n  width: 160px;\n  text-align: center;\n  display: inline-block;\n  background-color: var(--accent-color);\n  color: var(--white);\n  text-decoration: none;\n  padding: 1rem;\n  border-radius: 30px;\n  font-weight: 700;\n}\n\n.btn:hover {\n  -webkit-box-shadow: inset 0px 0px 0px 2px var(--accent-color);\n  -moz-box-shadow: inset 0px 0px 0px 2px var(--accent-color);\n  box-shadow: inset 0px 0px 0px 2px var(--accent-color);\n  background-color: transparent;\n  transition: var(--transition1);\n}\n\n.contact-btn {\n  margin-top: 3rem;\n}\n\n.main-right {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* 1024px /////////////////////////// */\n@media (max-width: 1024px) {\n  .moon {\n    transform: scale(0.75);\n  }\n  .main {\n    margin-top: 8rem;\n  }\n}\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  .main {\n    margin-top: 6rem;\n    grid-template-columns: 1fr;\n  }\n  .moon {\n    display: none;\n  }\n  .projects-preview {\n    margin-top: 5rem;\n  }\n}\n.projects-preview {\n  margin-top: 10rem;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.preview {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.arrows {\n  width: 320px;\n  transition: all ease-in-out 1200ms;\n}\n\n.arrow {\n  position: relative;\n}\n\n.arrow2 {\n  margin-top: 1rem;\n  position: relative;\n}\n\n.left {\n  position: absolute;\n  top: 50px;\n  left: 4%;\n  width: 150px;\n  height: 2px;\n  background-color: var(--secondary-color);\n  transform: rotate(10deg);\n}\n\n.right {\n  position: absolute;\n  top: 50px;\n  right: 3%;\n  width: 150px;\n  height: 2px;\n  background-color: var(--secondary-color);\n  transform: rotate(-10deg);\n}\n\n.arrow-move {\n  transform: translateY(8px);\n}\n\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  .arrows {\n    transform: scale(0.8);\n  }\n  .arrow-move {\n    transform: scale(0.8) translateY(8px);\n  }\n}\n#projects {\n  padding-top: 5rem;\n  margin-top: 10rem;\n  width: 100%;\n}\n\n.project {\n  display: grid;\n  grid-template-columns: 35% 65%;\n  margin-top: 6rem;\n}\n\n.project-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.project-info h4 {\n  cursor: pointer;\n  color: var(--white);\n}\n\n.project-info h4:hover {\n  color: var(--accent-color);\n}\n\n.project-info-upper-section {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n\n.projects-git-link {\n  margin-left: 2rem;\n  color: var(--white);\n  transform: scale(0.8);\n}\n\n.projects-git-link:hover {\n  color: var(--accent-color);\n}\n\n.project-text {\n  color: var(--gray);\n  margin-bottom: 2rem;\n}\n\n.programs {\n  margin-top: 2rem;\n  color: var(--secondary-color);\n  margin-top: auto;\n}\n\n.project-vid {\n  position: relative;\n  height: 22rem;\n  display: flex;\n  margin-left: 5rem;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  overflow: hidden;\n  transition: 1000ms ease-in-out;\n  transform: translateX(40%);\n  opacity: 0.1;\n  z-index: 2;\n}\n\n.show-project-vid {\n  transform: translateX(0%);\n  opacity: 1;\n}\n\n.video-hover {\n  opacity: 0;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--white);\n}\n\n.video-hover h2 {\n  font-size: 3rem;\n  z-index: 3;\n  color: var(--accent-color);\n}\n\n.video-hover:hover {\n  opacity: 0.9;\n}\n\n.vid-1 {\n  position: absolute;\n  top: -3%;\n  left: -7%;\n  width: 114%;\n  height: 108%;\n  background-color: var(--accent-color);\n}\n\n.project1 {\n  margin-top: 6rem;\n}\n\n.projects h6 {\n  color: var(--secondary-color);\n}\n\n/* 1440px /////////////////////////// */\n@media (max-width: 1440px) {\n  #projects {\n    padding-top: 5rem;\n    margin-top: 10rem;\n  }\n  .project {\n    display: grid;\n    grid-template-columns: 1fr;\n    margin-top: 10rem;\n  }\n  .project-vid {\n    height: 400px;\n    margin-top: 5rem;\n    margin-left: 0rem;\n  }\n}\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  #projects {\n    padding-top: 5rem;\n    margin-top: 5rem;\n    width: 100%;\n  }\n  .project {\n    margin-top: 7rem;\n  }\n  .project-vid {\n    height: 180px;\n    margin-top: 3rem;\n    margin-left: 0rem;\n  }\n}\n#interview-tasks {\n  margin-top: 10rem;\n}\n\n#interview-tasks h4 {\n  font-weight: 300;\n}\n\n.tasks-container {\n  width: 100%;\n  margin-top: 3rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.task {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n}\n\n.task-h {\n  font-size: 1.4rem;\n}\n\n.task-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 1rem;\n}\n\n.task-features {\n  padding-bottom: 1rem;\n}\n\n.features {\n  padding: 0.2rem 0;\n  text-transform: none;\n  color: var(--secondary-color);\n}\n\n.task-img-link {\n  width: 100%;\n  flex: 1;\n  background-color: var(--primary-color);\n  border-bottom: 1px solid var(--secondary-color);\n}\n\n.task-img {\n  width: 100%;\n  object-fit: contain;\n}\n\n.contain {\n  object-fit: contain;\n}\n\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  .tasks-container {\n    width: 100%;\n    margin-top: 3rem;\n    display: flex;\n    flex-direction: column;\n  }\n  .task {\n    width: 100%;\n    padding-bottom: 2rem;\n  }\n  .task-header {\n    justify-content: flex-start;\n    align-items: center;\n    padding-bottom: 0;\n  }\n  .task-features {\n    padding-left: 2rem;\n    width: 100%;\n  }\n  a.projects-git-link {\n    margin: 0;\n    padding: 0.5rem;\n  }\n  .task-img-link {\n    display: none;\n  }\n}\n#arch-portfolio {\n  position: relative;\n  padding-top: 5rem;\n  margin-top: 15rem;\n  width: 100%;\n}\n\n.condition {\n  display: flex;\n  align-items: center;\n}\n\n.condition h4 {\n  margin-left: 2rem;\n  font-weight: 300;\n}\n\n.condition .if {\n  margin-left: 0;\n  color: var(--accent-color);\n  font-weight: 700;\n}\n\n.orange {\n  color: var(--secondary-color);\n}\n\n.accent {\n  color: var(--accent-color);\n}\n\n.then {\n  margin-left: 4.6rem;\n}\n\n.then h4 {\n  font-weight: 300;\n}\n\n.then h2 {\n  margin-left: -0.8rem;\n  margin-top: 8.4rem;\n}\n\n.then strong {\n  margin-left: -1rem;\n}\n\n.arch-images {\n  position: absolute;\n  top: 350px;\n  left: -415px;\n  margin: 10rem 0;\n  display: flex;\n  justify-content: space-evenly;\n  filter: grayscale(100%);\n  transition: filter 500ms ease-in-out;\n  overflow: hidden;\n}\n\n.arch-images:hover {\n  filter: grayscale(0%);\n}\n\n.check-pdf {\n  display: none;\n}\n\n.check-pdf .h3 {\n  text-decoration: none;\n  padding: 1rem 2rem;\n  background-color: var(--accent-color);\n  border-radius: 40px;\n  pointer-events: none;\n}\n\n.check-pdf-hover {\n  position: absolute;\n  top: 620px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: var(--transition1);\n  pointer-events: none;\n}\n\n.arch-img {\n  padding: 5rem;\n  width: 500px;\n  height: 300px;\n  margin: 0 0.3rem;\n  cursor: pointer;\n}\n\n.arch-img1 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: contain;\n}\n\n.arch-img2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-position: center;\n  background-size: contain;\n}\n\n.arch-img3 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-position: center;\n  background-size: contain;\n}\n\n.arch-img4 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.arch-img5 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n  background-position: center;\n  background-size: contain;\n}\n\n.arch-img6 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  background-position: center;\n  background-size: contain;\n}\n\n.arch-img7 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n  background-position: center;\n  background-size: contain;\n}\n\n.arch-img8 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ");\n  background-position: center;\n  background-size: contain;\n}\n\n/* 1024px /////////////////////////// */\n@media (max-width: 1024px) {\n  #arch-portfolio {\n    margin-top: 8rem;\n  }\n  .then {\n    margin-top: 1rem;\n    margin-left: 3.5rem;\n  }\n}\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  #arch-portfolio {\n    margin-top: 8rem;\n  }\n  .then {\n    margin-top: 1rem;\n    margin-left: 3.5rem;\n  }\n  .then h2 {\n    margin-left: -0.8rem;\n    margin-top: 3rem;\n    font-size: 42px;\n  }\n  .then strong {\n    margin-left: -1rem;\n  }\n  .arch-images {\n    top: 350px;\n  }\n  .arch-images:hover {\n    filter: grayscale(0%);\n  }\n  .check-pdf .h3 {\n    text-decoration: none;\n    padding: 1rem 2rem;\n    background-color: var(--accent-color);\n    border-radius: 40px;\n    pointer-events: none;\n  }\n  .check-pdf-hover {\n    top: 600px;\n  }\n}\n#cv {\n  width: 100%;\n  margin: 30rem auto 15rem auto;\n  padding-top: 10rem;\n}\n\n.cv-btn {\n  margin-left: 2rem;\n  margin-top: 3rem;\n}\n\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  #cv {\n    margin-top: 35rem;\n    margin-bottom: 7rem;\n  }\n  .cv-title {\n    margin-bottom: 2rem;\n  }\n  .cv-btn {\n    margin-left: 0;\n  }\n}\n#about-me {\n  width: 100%;\n  margin: 0rem auto 15rem auto;\n}\n\n.about-me-content {\n  display: grid;\n  grid-template-columns: 60% 40%;\n}\n\n.left-col {\n  padding-right: 5rem;\n}\n\n.left-col h2 {\n  margin-bottom: 2rem;\n}\n\n.about-me-btn {\n  margin-top: 2rem;\n}\n\n.my-picture {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ");\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  border-bottom: 1px solid var(--secondary-color);\n}\n\n/* 1024px /////////////////////////// */\n@media (max-width: 1024px) {\n  #about-me {\n    margin: 25rem auto;\n    margin-bottom: 15rem;\n  }\n  .about-me-content {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .left-col {\n    padding-right: 0;\n  }\n  .my-picture {\n    height: 250px;\n    background-position: right;\n  }\n}\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  #about-me {\n    width: 100%;\n    margin: auto;\n    margin-bottom: 12rem;\n    padding-top: 5rem;\n  }\n  .about-me-content {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .left-col {\n    padding-right: 0;\n  }\n  .my-picture {\n    height: 150px;\n    background-position: right;\n  }\n}\n#contact {\n  margin: 5rem auto 0 auto;\n  width: 100%;\n}\n\n.form {\n  margin-top: 4rem;\n  width: 60%;\n}\n\n.inputs {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  color: var(--white);\n  margin-bottom: 1.5rem;\n}\n\n.inputs label {\n  margin-bottom: 0.7rem;\n}\n\n.inputs input,\ntextarea {\n  background-color: var(--primary-color);\n  border-radius: 10px;\n  outline: none;\n  border: 1px solid var(--secondary-color);\n  color: var(--white);\n  font-weight: 18px;\n  transition: var(--transition1);\n}\n\ninput,\nselect,\ntextarea {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 18px;\n  padding: 1rem 1.5rem;\n}\n\n.form-btn {\n  margin-top: 1rem;\n  outline: none;\n  border: none;\n  font-family: inherit;\n  font-size: 18px;\n}\n\n/* 1024px /////////////////////////// */\n@media (max-width: 1024px) {\n  #contact {\n    margin: 0rem auto 0 auto;\n  }\n  .form {\n    margin-top: 3rem;\n    width: 100%;\n  }\n  .form-btn {\n    margin-top: 1rem;\n    outline: none;\n    border: none;\n    font-family: inherit;\n    font-size: 18px;\n  }\n}\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  #contact {\n    margin: 0rem auto 0 auto;\n  }\n  .form {\n    margin-top: 3rem;\n    width: 100%;\n  }\n  .form-btn {\n    margin-top: 1rem;\n    outline: none;\n    border: none;\n    font-family: inherit;\n    font-size: 18px;\n  }\n}\n#footer {\n  margin-top: 10rem;\n  margin-bottom: -2rem;\n  height: 100px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer-items {\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer-items a {\n  padding-right: 1.5rem;\n  color: var(--white);\n  transition: var(--transition1);\n}\n\n.footer-items a:hover {\n  color: var(--accent-color);\n}\n\n.footer-items p {\n  margin-left: 3rem;\n  color: var(--white);\n}\n\n.footer-items .p2 {\n  margin-left: 1rem;\n  color: var(--white);\n}\n\n/* 1024px /////////////////////////// */\n@media (max-width: 1024px) {\n  #footer {\n    margin-top: 5rem;\n    margin-bottom: -2rem;\n  }\n  .footer-items p {\n    margin-left: 0rem;\n  }\n  .footer-items .p2 {\n    margin-left: 1rem;\n  }\n}\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  #footer {\n    margin-top: 5rem;\n    margin-bottom: -2rem;\n  }\n  .footer-items p {\n    margin-left: 0rem;\n  }\n  .footer-items .p2 {\n    margin-left: 1rem;\n  }\n}\n#moreaboutme {\n  margin-top: 10rem;\n  margin-bottom: 5rem;\n  position: relative;\n  z-index: 100;\n}\n\n.monologue {\n  color: var(--white);\n}\n\n.moreaboutcontent {\n  display: grid;\n  grid-template-columns: 30% 70%;\n}\n\n.pictures {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr 1fr 1.5fr;\n  gap: 1rem;\n}\n\n.pic-long {\n  grid-row: span 2;\n  width: 200px;\n  height: 400px;\n  background-color: #ffd698;\n}\n\n.pic-wide {\n  grid-column: span 2;\n  height: 200px;\n  width: 425px;\n  background-color: #ffd698;\n}\n\n@media (max-width: 1440px) {\n  .pictures {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 2fr 1fr 1fr;\n  }\n  .pic-long {\n    grid-row: span 1;\n  }\n  .pic-wide {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 1024px) {\n  #moreaboutme {\n    margin-top: 3rem;\n  }\n  .pictures {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 1fr 1fr;\n  }\n  .moreaboutcontent {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 720px) {\n  #moreaboutme {\n    margin-top: 2rem;\n  }\n  .pictures {\n    grid-template-columns: 1fr 1fr;\n  }\n  .pic-long {\n    grid-row: span 1;\n    width: 150px;\n    height: 300px;\n  }\n  .pic-wide {\n    grid-column: span 2;\n    height: 160px;\n    width: 320px;\n  }\n}\n.bg {\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.kot {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ");\n}\n\n.hala {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ");\n}\n\n.dyplom {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ");\n}\n\n.magistera {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ");\n}\n\n.kot2 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ");\n}\n\n.plaza {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ");\n}\n\n.thankyou-container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: white;\n}\n\n.thankyou-container .h4 {\n  color: var(--accent-color);\n}\n\n.spark-moon-light-theme {\n  -webkit-box-shadow: 10px 17px 70px 37px rgb(255, 207, 124);\n  -moz-box-shadow: 10px 17px 70px 37px rgb(255, 207, 124);\n  box-shadow: -5px -3px 100px 50px rgba(68, 206, 174, 0.5725490196);\n  transition: 2500ms all ease-in-out;\n  opacity: 0.2;\n}\n\n.no-spark-moon-light-theme {\n  box-shadow: none;\n  transition: 3000ms all ease-in-out;\n  opacity: 0.3;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-size: 18px;\n  background-color: var(--primary-color);\n  z-index: -3;\n  font-family: \"Montserrat\", sans-serif;\n  overflow-x: hidden;\n}\n\nbody::-webkit-scrollbar {\n  width: 0.7rem;\n}\n\nbody::-webkit-scrollbar-track {\n  background: var(--white);\n}\n\nbody::-webkit-scrollbar-thumb {\n  background: var(--gray);\n}\n\n.container {\n  max-width: 1200px;\n  width: 80%;\n  margin: 0 auto;\n  background-color: var(--primary-color);\n}\n\n/* 720px ////////////////////// */\n@media (max-width: 720px) {\n  :root {\n    font-size: 12px;\n  }\n  .display-none {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/index.scss","webpack://./src/styles/background.scss","webpack://./src/styles/burger-menu.scss","webpack://./src/styles/nav.scss","webpack://./src/styles/main.scss","webpack://./src/styles/arrows.scss","webpack://./src/styles/projects.scss","webpack://./src/styles/interview-tasks.scss","webpack://./src/styles/arch-portfolio.scss","webpack://./src/styles/cv.scss","webpack://./src/styles/about-me.scss","webpack://./src/styles/contact.scss","webpack://./src/styles/footer.scss","webpack://./src/styles/moreaboutme.scss","webpack://./src/styles/thank-you-site.scss","webpack://./src/styles/moon-light-mode.scss"],"names":[],"mappings":"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","sourcesContent":["\r\n\r\n:root {\r\n    --primary-color: #211337;\r\n    --secondary-color: #ffd698;\r\n    --accent-color: #44cead;\r\n    --white: #fff;\r\n    --gray: rgb(157, 157, 157);\r\n    --black: rgb(0, 0, 0);\r\n    --transition1: 300ms all ease-in-out;\r\n}\r\n    $primary-color: var(--primary-color);\r\n    $secondary-color:var(--secondary-color);\r\n    $accent-color: var(--accent-color);\r\n    $white: var(--white);\r\n    $gray: var(--gray);\r\n    $black: var(--black);\r\n    $transition1: var(--transition1);\r\n\r\n\r\n\r\n.h1 {\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 900;\r\n    font-size: 4.5rem;\r\n    color: $white;\r\n}\r\n.h2 {\r\n    font-family: 'Playfair Display', serif;\r\n    font-weight: 900;\r\n    font-size: 3.2rem;\r\n    color: $white;\r\n}\r\n.h3 {\r\n    font-weight: 300;\r\n    font-size: 1.8rem;\r\n    color:$white;\r\n}\r\n.h4 {\r\n    font-size: 2rem;\r\n    color:$white;\r\n    font-weight: 700;\r\n}\r\n.h6 {\r\n    font-size: 18px;\r\n    color:$white;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n}\r\n\r\np {\r\n    line-height: 1.8rem;\r\n    font-size: 18px;\r\n    color:$gray;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.fade-text {\r\n    color: $white;\r\n    opacity: .3;\r\n    font-weight: 300;\r\n    font-family: 'Montserrat', sans-serif;\r\n}","@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap\");\r\n@import './styles/variables.scss';\r\n@import './styles/background.scss';\r\n@import './styles/burger-menu.scss';\r\n@import './styles/nav.scss';\r\n@import './styles/main.scss';\r\n@import './styles/arrows.scss';\r\n@import './styles/projects.scss';\r\n@import './styles/interview-tasks.scss';\r\n@import './styles/arch-portfolio.scss';\r\n@import './styles/cv.scss';\r\n@import './styles/about-me.scss';\r\n@import './styles/contact.scss';\r\n@import './styles/footer.scss';\r\n@import './styles/moreaboutme.scss';\r\n@import './styles/thank-you-site.scss';\r\n@import './styles/moon-light-mode.scss';\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-size: 18px;\r\n  background-color: $primary-color;\r\n  z-index: -3;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n  width: 0.7rem;\r\n}\r\nbody::-webkit-scrollbar-track {\r\n  background: $white;\r\n}\r\nbody::-webkit-scrollbar-thumb {\r\n  background: $gray;\r\n}\r\n\r\n.container {\r\n  max-width: 1200px;\r\n  width: 80%;\r\n  margin: 0 auto;\r\n  background-color: $primary-color;\r\n}\r\n\r\n/* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  :root {\r\n    font-size: 12px;\r\n  }\r\n  \r\n  .display-none {\r\n    display: none;\r\n  }\r\n}\r\n","\r\n  \r\n\r\n.stars {\r\n    width: 100vw;\r\n}\r\n\r\n.star {\r\n    position: absolute;\r\n    border: 2px solid $white;\r\n    border-radius: 50%;\r\n    \r\n}\r\n.star1 {\r\n    left: 10vw; \r\n    top: 40vh;\r\n}\r\n.star2 {\r\n    left: 8vw;\r\n    top: 15vh;\r\n}\r\n.star3 {\r\n    left: 25vw;\r\n    top: 10vh;\r\n}\r\n.star4 {\r\n    left: 22vw;\r\n    top: 28vh;\r\n}\r\n.star5 {\r\n    left: 40vw;\r\n    top: 6vh;\r\n}\r\n.star6 {\r\n    left: 47vw;\r\n    top: 27vh;\r\n}\r\n.star7 {\r\n    left: 60vw;\r\n    top: 12vh;\r\n}\r\n.star8 {\r\n    left: 67vw;\r\n    top: 30vh;\r\n}\r\n.star9 {\r\n    left: 85vw;\r\n    top: 10vh;\r\n}\r\n.star10 {\r\n    left: 5vw;\r\n    top: 60vh;\r\n}\r\n.star11 {\r\n    left: 18vw;\r\n    top: 70vh;\r\n}\r\n.star12 {\r\n    left: 48vw;\r\n    top: 51vh;\r\n}\r\n.star13 {\r\n    left: 40vw;\r\n    top: 76vh;\r\n}\r\n.star14 {\r\n    left: 90vw;\r\n    top: 37vh;\r\n}\r\n.star15 {\r\n    left: 84vw;\r\n    top: 65vh;\r\n}\r\n.star16 {\r\n    left: 7vw;\r\n    top: 86vh;\r\n}\r\n.star17 {\r\n    left: 27vw;\r\n    top: 94vh;\r\n}\r\n.star18 {\r\n    left: 90vw;\r\n    top: 89vh;\r\n}\r\n.star19 {\r\n    left: 57vw;\r\n    top: 86vh;\r\n}\r\n.star20 {\r\n    left: 73vw;\r\n    top: 82vh;\r\n}\r\n\r\n.l {\r\n    height: 25px;\r\n    width: 25px;\r\n    opacity: .4;\r\n}\r\n.m {\r\n    height: 15px;\r\n    width: 15px;\r\n    opacity: .3;\r\n}\r\n.s {\r\n    height: 8px;\r\n    width: 8px;\r\n    opacity: .25;\r\n}\r\n\r\n.spark {\r\n    -webkit-box-shadow: 10px 17px 70px 37px $accent-color;\r\n    -moz-box-shadow: 10px 17px 70px 37px $accent-color;\r\n    box-shadow: 0px 0px 50px 15px $accent-color;\r\n    \r\n    transition: 1500ms all ease-in-out;\r\n}\r\n.no-spark {\r\n    box-shadow: none;\r\n    opacity: .1;\r\n    \r\n    transition: 2000ms all ease-in-out;\r\n}\r\n\r\n.spark-moon {\r\n    -webkit-box-shadow: 10px 17px 70px 37px $accent-color;\r\n    -moz-box-shadow: 10px 17px 70px 37px $accent-color;\r\n    box-shadow: -5px -3px 50px 1px $accent-color;\r\n\r\n    transition: 2500ms all ease-in-out;\r\n    opacity: 1;\r\n}\r\n\r\n.no-spark-moon {\r\n    box-shadow: none;\r\n    transition: 3000ms all ease-in-out;\r\n    opacity: .7;\r\n}\r\n\r\n.moon {\r\n    position: relative;\r\n    height: 250px;\r\n    width: 250px;\r\n    border-radius: 50%;\r\n    background-color: rgb(177, 177, 177);\r\n    border-right: 55px solid gray;\r\n    transform: rotate(30deg);\r\n  }\r\n  \r\n  .moon::before {\r\n    top: 40px;\r\n    left: 70px;\r\n    content: \"\";\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    background-color: #707070;\r\n  \r\n    border-right: solid 7px rgb(85, 85, 85);\r\n    transform: rotate(190deg);\r\n  }\r\n  .moon::after {\r\n    top: 180px;\r\n    left: 90px;\r\n    content: \"\";\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    background-color: #7e7e7e;\r\n  \r\n    border-right: solid 6px rgb(82, 82, 82);\r\n    transform: rotate(190deg);\r\n  }\r\n  \r\n  .moon-holes1 {\r\n    top: 120px;\r\n    left: 20px;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    background-color: #808080;\r\n  \r\n    border-right: solid 5px rgb(94, 94, 94);\r\n    transform: rotate(190deg);\r\n  }\r\n  .moon-holes2 {\r\n    top: 50px;\r\n    left: 200px;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    background-color: #4e4e4e;\r\n  \r\n    border-right: solid 3px rgb(58, 58, 58);\r\n    transform: rotate(190deg);\r\n  }\r\n  .moon-holes3 {\r\n    top: 150px;\r\n    left: 210px;\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    background-color: #4e4e4e;\r\n  \r\n    border-right: solid 2px rgb(66, 66, 66);\r\n    transform: rotate(190deg);\r\n  }\r\n  .moon-holes4 {\r\n    top: 110px;\r\n    left: 160px;\r\n    width: 18px;\r\n    height: 18px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    background-color: #888888;\r\n  \r\n    border-right: solid 3px rgb(88, 88, 88);\r\n    transform: rotate(190deg);\r\n  }\r\n\r\n\r\n\r\n@media(max-width: 1440px) {\r\n   .star {\r\n       transform: scale(.7);\r\n   }\r\n}",".burger-menu {\r\n  color: $white;\r\n  padding: 0.5rem 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.burger-btns {\r\n  display: none;\r\n}\r\n\r\n/* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  .burger-menu {\r\n    margin-top: 2rem;\r\n    border: 1px solid $accent-color;\r\n    border-radius: 20px;\r\n  }\r\n\r\n  .burger-btns {\r\n    display: block;\r\n  }\r\n\r\n  .burger-btn-close {\r\n    margin-top: 0.5rem;\r\n  }\r\n}",".main-nav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo-and-mode {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo-img {\r\n  height: 80px;\r\n  width: 80px;\r\n  margin-top: 0.5rem;\r\n  background-image: url(./assets/LOGO_white.png);\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n\r\n.logo-img-light {\r\n  background-image: url(./assets/LOGO_black.png);\r\n}\r\n\r\n.color-mode {\r\n  flex: 1;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.color-mode ul {\r\n  display: flex;\r\n}\r\n\r\n.color-mode li {\r\n  margin: 0 0.5rem;\r\n  padding: 0.5rem;\r\n\r\n  border-radius: 50%;\r\n  color: $white;\r\n  display: flex;\r\n  cursor: pointer;\r\n  transition: $transition1;\r\n}\r\n\r\n.color-mode li.active {\r\n  -webkit-box-shadow: inset 0px 0px 0px 2px $accent-color;\r\n  -moz-box-shadow: inset 0px 0px 0px 2px $accent-color;\r\n  box-shadow: inset 0px 0px 0px 2px $accent-color;\r\n}\r\n\r\n.color-mode-ul {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.nav-links-ul {\r\n  display: flex;\r\n}\r\n\r\n.nav-links a {\r\n  align-self: center;\r\n  color: $white;\r\n  text-decoration: none;\r\n  list-style-type: none;\r\n  padding: 0 2rem;\r\n  font-weight: 600;\r\n\r\n  transition: $transition1;\r\n}\r\n\r\n.nav-links a:hover {\r\n  color: $accent-color;\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* 1024px /////////////////////////// */\r\n\r\n@media (max-width: 1024px) {\r\n  .main-nav {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n  .nav-links-ul {\r\n    margin-top: 2rem;\r\n  }\r\n}\r\n\r\n/* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  .main-nav {\r\n    margin-top: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .nav-links {\r\n    width: 100%;\r\n  }\r\n\r\n  .nav-links-ul {\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .nav-links a {\r\n    padding: 0.5rem 0;\r\n  }\r\n}",".main {\r\n    width: 100%;\r\n    margin-top: 16rem;\r\n    display: grid;\r\n    grid-template-columns: 60% 40%;\r\n  }\r\n  \r\n  .main-left {\r\n    color: $white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n  }\r\n  \r\n  .main-text-1 {\r\n    font-weight: 300;\r\n    font-size: 2.5rem;\r\n    color: $white;\r\n    margin-top: 3rem;\r\n    margin-bottom: 2rem;\r\n  }\r\n  \r\n  .main-text-2 {\r\n    font-weight: 300;\r\n    font-size: 1.8rem;\r\n    color: $gray;\r\n    margin-top: 1rem;\r\n  }\r\n  \r\n  .btn {\r\n    width: 160px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    background-color: $accent-color;\r\n    color: $white;\r\n    text-decoration: none;\r\n    padding: 1rem;\r\n    border-radius: 30px;\r\n    font-weight: 700;\r\n  }\r\n  .btn:hover {\r\n    -webkit-box-shadow: inset 0px 0px 0px 2px $accent-color;\r\n    -moz-box-shadow: inset 0px 0px 0px 2px $accent-color;\r\n    box-shadow: inset 0px 0px 0px 2px $accent-color;\r\n  \r\n    background-color: transparent;\r\n    transition: $transition1;\r\n  }\r\n  \r\n  .contact-btn {\r\n    margin-top: 3rem;\r\n  }\r\n  \r\n  .main-right {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n/* 1024px /////////////////////////// */\r\n\r\n@media (max-width: 1024px) {\r\n  .moon {\r\n    transform: scale(0.75);\r\n  }\r\n\r\n  .main {\r\n    margin-top: 8rem;\r\n  }\r\n}\r\n\r\n/* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  .main {\r\n    margin-top: 6rem;\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .moon {\r\n    display: none;\r\n  }\r\n\r\n  .projects-preview {\r\n    margin-top: 5rem;\r\n  }\r\n}",".projects-preview {\r\n    margin-top: 10rem;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .preview {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  \r\n  .arrows {\r\n    width: 320px;\r\n    transition: all ease-in-out 1200ms;\r\n  }\r\n  \r\n  .arrow {\r\n    position: relative;\r\n  }\r\n  \r\n  .arrow2 {\r\n    margin-top: 1rem;\r\n    position: relative;\r\n  }\r\n  \r\n  .left {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 4%;\r\n    width: 150px;\r\n    height: 2px;\r\n    background-color: $secondary-color;\r\n    transform: rotate(10deg);\r\n  }\r\n  \r\n  .right {\r\n    position: absolute;\r\n    top: 50px;\r\n    right: 3%;\r\n    width: 150px;\r\n    height: 2px;\r\n    background-color: $secondary-color;\r\n    transform: rotate(-10deg);\r\n  }\r\n  \r\n  .arrow-move {\r\n    transform: translateY(8px);\r\n  }\r\n\r\n  /* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  .arrows {\r\n    transform: scale(0.8);\r\n  }\r\n\r\n  .arrow-move {\r\n    transform: scale(0.8) translateY(8px);\r\n  }\r\n}","#projects {\r\n    padding-top: 5rem;\r\n    margin-top: 10rem;\r\n    width: 100%;\r\n  }\r\n  \r\n  .project {\r\n    display: grid;\r\n    grid-template-columns: 35% 65%;\r\n    margin-top: 6rem;\r\n  }\r\n  \r\n  .project-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n  }\r\n  \r\n  .project-info h4 {\r\n    cursor: pointer;\r\n    color: $white;\r\n  }\r\n  \r\n  .project-info h4:hover {\r\n    color: $accent-color;\r\n  }\r\n  \r\n  .project-info-upper-section {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n  }\r\n  \r\n  .projects-git-link {\r\n    margin-left: 2rem;\r\n    color: $white;\r\n    transform: scale(0.8);\r\n  }\r\n  \r\n  .projects-git-link:hover {\r\n    color: $accent-color;\r\n  }\r\n  \r\n  .project-text {\r\n    color: $gray;\r\n    margin-bottom: 2rem;\r\n  }\r\n  \r\n  .programs {\r\n    margin-top: 2rem;\r\n    color: $secondary-color;\r\n    margin-top: auto;\r\n  }\r\n  \r\n  .project-vid {\r\n    position: relative;\r\n    height: 22rem;\r\n    display: flex;\r\n    margin-left: 5rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    transition: 1000ms ease-in-out;\r\n    transform: translateX(40%);\r\n    opacity: 0.1;\r\n    z-index: 2;\r\n  }\r\n  \r\n  .show-project-vid {\r\n    transform: translateX(0%);\r\n    opacity: 1;\r\n  }\r\n  \r\n  .video-hover {\r\n    opacity: 0;\r\n    z-index: 3;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: $white;\r\n  }\r\n  \r\n  .video-hover h2 {\r\n    font-size: 3rem;\r\n    z-index: 3;\r\n    color: $accent-color;\r\n  }\r\n  \r\n  .video-hover:hover {\r\n    opacity: 0.9;\r\n  }\r\n  \r\n  .vid-1 {\r\n    position: absolute;\r\n    top: -3%;\r\n    left: -7%;\r\n    width: 114%;\r\n    height: 108%;\r\n    background-color: $accent-color;\r\n  }\r\n  \r\n  .project1 {\r\n    margin-top: 6rem;\r\n  }\r\n  \r\n  .projects h6 {\r\n    color: $secondary-color;\r\n  }\r\n\r\n  \r\n/* 1440px /////////////////////////// */\r\n\r\n@media (max-width: 1440px) {\r\n\r\n  #projects {\r\n    padding-top: 5rem;\r\n    margin-top: 10rem;\r\n  }\r\n  .project {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    margin-top: 10rem;\r\n  }\r\n\r\n  .project-vid {\r\n    height: 400px;\r\n    margin-top: 5rem;\r\n    margin-left: 0rem;\r\n  }\r\n}\r\n\r\n/* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  #projects {\r\n    padding-top: 5rem;\r\n    margin-top: 5rem;\r\n    width: 100%;\r\n  }\r\n\r\n  .project {\r\n    margin-top: 7rem;\r\n  }\r\n\r\n  .project-vid {\r\n    height: 180px;\r\n    margin-top: 3rem;\r\n    margin-left: 0rem;\r\n  }\r\n}","#interview-tasks {\r\n    margin-top: 10rem;\r\n  }\r\n  \r\n  #interview-tasks h4 {\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .tasks-container {\r\n    width: 100%;\r\n    margin-top: 3rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .task {\r\n    display: flex;\r\n    flex-direction: column;\r\n  \r\n    width: 30%;\r\n  }\r\n  \r\n  .task-h {\r\n    font-size: 1.4rem;\r\n  }\r\n  \r\n  .task-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-bottom: 1rem;\r\n  }\r\n  \r\n  .task-features {\r\n    padding-bottom: 1rem;\r\n  }\r\n  \r\n  .features {\r\n    padding: 0.2rem 0;\r\n    text-transform: none;\r\n    color: $secondary-color;\r\n  }\r\n  \r\n  .task-img-link {\r\n    width: 100%;\r\n    flex: 1;\r\n    background-color: $primary-color;\r\n    border-bottom: 1px solid $secondary-color;\r\n  }\r\n  \r\n  .task-img {\r\n    width: 100%;\r\n    object-fit: contain;\r\n  }\r\n  \r\n  .contain {\r\n    object-fit: contain;\r\n  }\r\n\r\n  /* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  .tasks-container {\r\n    width: 100%;\r\n    margin-top: 3rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .task {\r\n    width: 100%;\r\n    padding-bottom: 2rem;\r\n  }\r\n\r\n  .task-header {\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    padding-bottom: 0;\r\n  }\r\n\r\n  .task-features {\r\n    padding-left: 2rem;\r\n    width: 100%;\r\n  }\r\n\r\n  a.projects-git-link {\r\n    margin: 0;\r\n    padding: 0.5rem;\r\n  }\r\n\r\n  .task-img-link {\r\n    display: none;\r\n  }\r\n}","#arch-portfolio {\r\n    position: relative;\r\n    padding-top: 5rem;\r\n    margin-top: 15rem;\r\n    width: 100%;\r\n  }\r\n  \r\n  .condition {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .condition h4 {\r\n    margin-left: 2rem;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .condition .if {\r\n    margin-left: 0;\r\n    color: $accent-color;\r\n    font-weight: 700;\r\n  }\r\n  \r\n  .orange {\r\n    color: $secondary-color;\r\n  }\r\n  \r\n  .accent {\r\n    color: $accent-color;\r\n  }\r\n  \r\n  .then {\r\n    margin-left: 4.6rem;\r\n  }\r\n  \r\n  .then h4 {\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .then h2 {\r\n    margin-left: -0.8rem;\r\n    margin-top: 8.4rem;\r\n  }\r\n  \r\n  .then strong {\r\n    margin-left: -1rem;\r\n  }\r\n  \r\n  .arch-images {\r\n    position: absolute;\r\n    top: 350px;\r\n    left: -415px;\r\n    margin: 10rem 0;\r\n  \r\n    display: flex;\r\n    justify-content: space-evenly;\r\n  \r\n    filter: grayscale(100%);\r\n    transition: filter 500ms ease-in-out;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .arch-images:hover {\r\n    filter: grayscale(0%);\r\n  }\r\n  \r\n  .check-pdf {\r\n    display: none;\r\n  }\r\n  \r\n  .check-pdf .h3 {\r\n    text-decoration: none;\r\n    padding: 1rem 2rem;\r\n    background-color: $accent-color;\r\n    border-radius: 40px;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .check-pdf-hover {\r\n    position: absolute;\r\n    top: 620px;\r\n  \r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: $transition1;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  .arch-img {\r\n    padding: 5rem;\r\n    width: 500px;\r\n    height: 300px;\r\n    margin: 0 0.3rem;\r\n    cursor: pointer;\r\n  }\r\n  .arch-img1 {\r\n    background-image: url(./assets/1.webp);\r\n    background-position: center;\r\n    background-size: contain;\r\n  }\r\n  .arch-img2 {\r\n    background-image: url(./assets/2.webp);\r\n    background-position: center;\r\n    background-size: contain;\r\n  }\r\n  .arch-img3 {\r\n    background-image: url(./assets/3.webp);\r\n    background-position: center;\r\n    background-size: contain;\r\n  }\r\n  .arch-img4 {\r\n    background-image: url(./assets/4.webp);\r\n    background-position: center;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n  }\r\n  .arch-img5 {\r\n    background-image: url(./assets/5.webp);\r\n    background-position: center;\r\n    background-size: contain;\r\n  }\r\n  .arch-img6 {\r\n    background-image: url(./assets/6.webp);\r\n    background-position: center;\r\n    background-size: contain;\r\n  }\r\n  .arch-img7 {\r\n    background-image: url(./assets/7.webp);\r\n    background-position: center;\r\n    background-size: contain;\r\n  }\r\n  .arch-img8 {\r\n    background-image: url(./assets/8.webp);\r\n    background-position: center;\r\n    background-size: contain;\r\n  }\r\n\r\n  /* 1024px /////////////////////////// */\r\n\r\n@media (max-width: 1024px) {\r\n  #arch-portfolio {\r\n    margin-top: 8rem;\r\n  }\r\n\r\n  .then {\r\n    margin-top: 1rem;\r\n    margin-left: 3.5rem;\r\n  }\r\n}\r\n\r\n/* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  #arch-portfolio {\r\n    margin-top: 8rem;\r\n  }\r\n\r\n  .then {\r\n    margin-top: 1rem;\r\n    margin-left: 3.5rem;\r\n  }\r\n\r\n  .then h2 {\r\n    margin-left: -0.8rem;\r\n    margin-top: 3rem;\r\n    font-size: 42px;\r\n  }\r\n\r\n  .then strong {\r\n    margin-left: -1rem;\r\n  }\r\n\r\n  .arch-images {\r\n    top: 350px;\r\n  }\r\n\r\n  .arch-images:hover {\r\n    filter: grayscale(0%);\r\n  }\r\n\r\n  .check-pdf .h3 {\r\n    text-decoration: none;\r\n    padding: 1rem 2rem;\r\n    background-color: $accent-color;\r\n    border-radius: 40px;\r\n    pointer-events: none;\r\n  }\r\n\r\n  .check-pdf-hover {\r\n    top: 600px;\r\n  }\r\n}","#cv {\r\n    width: 100%;\r\n    margin: 30rem auto 15rem auto;\r\n    padding-top: 10rem;\r\n  }\r\n  \r\n  .cv-btn {\r\n    margin-left: 2rem;\r\n    margin-top: 3rem;\r\n  }\r\n\r\n  /* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  #cv {\r\n    margin-top: 35rem;\r\n    margin-bottom: 7rem;\r\n  }\r\n\r\n  .cv-title {\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  .cv-btn {\r\n    margin-left: 0;\r\n  }\r\n}","#about-me {\r\n    width: 100%;\r\n    margin: 0rem auto 15rem auto;\r\n  }\r\n  \r\n  .about-me-content {\r\n    display: grid;\r\n    grid-template-columns: 60% 40%;\r\n  }\r\n  \r\n  .left-col {\r\n    padding-right: 5rem;\r\n  }\r\n  \r\n  .left-col h2 {\r\n    margin-bottom: 2rem;\r\n  }\r\n  \r\n  .about-me-btn {\r\n    margin-top: 2rem;\r\n  }\r\n  \r\n  .my-picture {\r\n    background-image: url(./assets/my-image.png);\r\n    background-position: center;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n    border-bottom: 1px solid $secondary-color;\r\n  }\r\n\r\n  /* 1024px /////////////////////////// */\r\n\r\n@media (max-width: 1024px) {\r\n  #about-me {\r\n    margin: 25rem auto;\r\n    margin-bottom: 15rem;\r\n  }\r\n\r\n  .about-me-content {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .left-col {\r\n    padding-right: 0;\r\n  }\r\n\r\n  .my-picture {\r\n    height: 250px;\r\n    background-position: right;\r\n  }\r\n}\r\n\r\n/* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  #about-me {\r\n    width: 100%;\r\n    margin: auto;\r\n    margin-bottom: 12rem;\r\n    padding-top: 5rem;\r\n  }\r\n\r\n  .about-me-content {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .left-col {\r\n    padding-right: 0;\r\n  }\r\n\r\n  .my-picture {\r\n    height: 150px;\r\n    background-position: right;\r\n  }\r\n}","#contact {\r\n    margin: 5rem auto 0 auto;\r\n    width: 100%;\r\n  }\r\n  \r\n  .form {\r\n    margin-top: 4rem;\r\n    width: 60%;\r\n  }\r\n  \r\n  .inputs {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n  \r\n    color: $white;\r\n    margin-bottom: 1.5rem;\r\n  }\r\n  \r\n  .inputs label {\r\n    margin-bottom: 0.7rem;\r\n  }\r\n  \r\n  .inputs input,\r\n  textarea {\r\n    background-color: $primary-color;\r\n    border-radius: 10px;\r\n    outline: none;\r\n    border: 1px solid $secondary-color;\r\n    color: $white;\r\n    font-weight: 18px;\r\n    transition: $transition1;\r\n  }\r\n  \r\n  input,\r\n  select,\r\n  textarea {\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-size: 18px;\r\n    padding: 1rem 1.5rem;\r\n  }\r\n  \r\n  .form-btn {\r\n    margin-top: 1rem;\r\n    outline: none;\r\n    border: none;\r\n    font-family: inherit;\r\n    font-size: 18px;\r\n  }\r\n\r\n  /* 1024px /////////////////////////// */\r\n\r\n@media (max-width: 1024px) {\r\n  #contact {\r\n    margin: 0rem auto 0 auto;\r\n  }\r\n\r\n  .form {\r\n    margin-top: 3rem;\r\n    width: 100%;\r\n  }\r\n\r\n  .form-btn {\r\n    margin-top: 1rem;\r\n    outline: none;\r\n    border: none;\r\n    font-family: inherit;\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  #contact {\r\n    margin: 0rem auto 0 auto;\r\n  }\r\n\r\n  .form {\r\n    margin-top: 3rem;\r\n    width: 100%;\r\n  }\r\n\r\n  .form-btn {\r\n    margin-top: 1rem;\r\n    outline: none;\r\n    border: none;\r\n    font-family: inherit;\r\n    font-size: 18px;\r\n  }\r\n}","#footer {\r\n    margin-top: 10rem;\r\n    margin-bottom: -2rem;\r\n    height: 100px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .footer-items {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .footer-items a {\r\n    padding-right: 1.5rem;\r\n    color: $white;\r\n    transition: $transition1;\r\n  }\r\n  \r\n  .footer-items a:hover {\r\n    color: $accent-color;\r\n  }\r\n  \r\n  .footer-items p {\r\n    margin-left: 3rem;\r\n    color: $white;\r\n  }\r\n  \r\n  .footer-items .p2 {\r\n    margin-left: 1rem;\r\n    color: $white;\r\n  }\r\n\r\n  /* 1024px /////////////////////////// */\r\n\r\n@media (max-width: 1024px) {\r\n  #footer {\r\n    margin-top: 5rem;\r\n    margin-bottom: -2rem;\r\n  }\r\n\r\n  .footer-items p {\r\n    margin-left: 0rem;\r\n  }\r\n\r\n  .footer-items .p2 {\r\n    margin-left: 1rem;\r\n  }\r\n}\r\n\r\n/* 720px ////////////////////// */\r\n\r\n@media (max-width: 720px) {\r\n  #footer {\r\n    margin-top: 5rem;\r\n    margin-bottom: -2rem;\r\n  }\r\n\r\n  .footer-items p {\r\n    margin-left: 0rem;\r\n  }\r\n\r\n  .footer-items .p2 {\r\n    margin-left: 1rem;\r\n  }\r\n}\r\n","#moreaboutme {\r\n  margin-top: 10rem;\r\n  margin-bottom: 5rem;\r\n  position: relative;\r\n  z-index: 100;\r\n}\r\n\r\n.monologue {\r\n  color: $white;\r\n}\r\n\r\n.moreaboutcontent {\r\n  display: grid;\r\n  grid-template-columns: 30% 70%;\r\n}\r\n\r\n.pictures {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: 1fr 1fr 1.5fr;\r\n  gap: 1rem;\r\n}\r\n\r\n.pic-long {\r\n  grid-row: span 2;\r\n  width: 200px;\r\n  height: 400px;\r\n  background-color: #ffd698;\r\n}\r\n.pic-wide {\r\n  grid-column: span 2;\r\n  height: 200px;\r\n  width: 425px;\r\n  background-color: #ffd698;\r\n}\r\n\r\n@media (max-width: 1440px) {\r\n  .pictures {\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 2fr 2fr 1fr 1fr;\r\n  }\r\n  .pic-long {\r\n    grid-row: span 1;\r\n  }\r\n  .pic-wide {\r\n    grid-column: span 2;\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  #moreaboutme {\r\n    margin-top: 3rem;\r\n  }\r\n\r\n  .pictures {\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-template-rows: 1fr 1fr;\r\n  }\r\n\r\n  .moreaboutcontent {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n@media (max-width: 720px) {\r\n  #moreaboutme {\r\n    margin-top: 2rem;\r\n  }\r\n  .pictures {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n  .pic-long {\r\n    grid-row: span 1;\r\n    width: 150px;\r\n    height: 300px;\r\n  }\r\n  .pic-wide {\r\n    grid-column: span 2;\r\n    height: 160px;\r\n    width: 320px;\r\n  }\r\n}\r\n\r\n.bg {\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.kot {\r\n  background-image: url(./assets/kot.jpg);\r\n}\r\n.hala {\r\n  background-image: url(./assets/hala.jpeg);\r\n}\r\n.dyplom {\r\n  background-image: url(./assets/dyplom.jpg);\r\n}\r\n.magistera {\r\n  background-image: url(./assets/magistera.jpg);\r\n}\r\n.kot2 {\r\n  background-image: url(./assets/kot2.jpg);\r\n}\r\n.plaza {\r\n  background-image: url(./assets/plaza.jpg);\r\n}\r\n",".thankyou-container {\r\n    height: 100vh;\r\n    width: 100vw;\r\n  \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n  \r\n    color: white;\r\n  }\r\n  \r\n  .thankyou-container .h4 {\r\n    color: $accent-color;\r\n  }",".spark-moon-light-theme {\r\n    -webkit-box-shadow: 10px 17px 70px 37px rgba(255, 207, 124, 1);\r\n    -moz-box-shadow: 10px 17px 70px 37px rgba(255, 207, 124, 1);\r\n    box-shadow: -5px -3px 100px 50px #44ceae92;\r\n\r\n    transition: 2500ms all ease-in-out;\r\n    opacity: .2;\r\n}\r\n\r\n.no-spark-moon-light-theme {\r\n    box-shadow: none;\r\n    transition: 3000ms all ease-in-out;\r\n    opacity: .3;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/1.webp":
/*!***************************!*\
  !*** ./src/assets/1.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1.webp";

/***/ }),

/***/ "./src/assets/2.webp":
/*!***************************!*\
  !*** ./src/assets/2.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2.webp";

/***/ }),

/***/ "./src/assets/3.webp":
/*!***************************!*\
  !*** ./src/assets/3.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/3.webp";

/***/ }),

/***/ "./src/assets/4.webp":
/*!***************************!*\
  !*** ./src/assets/4.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/4.webp";

/***/ }),

/***/ "./src/assets/5.webp":
/*!***************************!*\
  !*** ./src/assets/5.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5.webp";

/***/ }),

/***/ "./src/assets/6.webp":
/*!***************************!*\
  !*** ./src/assets/6.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6.webp";

/***/ }),

/***/ "./src/assets/7.webp":
/*!***************************!*\
  !*** ./src/assets/7.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7.webp";

/***/ }),

/***/ "./src/assets/8.webp":
/*!***************************!*\
  !*** ./src/assets/8.webp ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8.webp";

/***/ }),

/***/ "./src/assets/CV_Piotr_Górski_eng_noTel.pdf":
/*!**************************************************!*\
  !*** ./src/assets/CV_Piotr_Górski_eng_noTel.pdf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/CV_Piotr_Górski_eng_noTel.pdf";

/***/ }),

/***/ "./src/assets/CV_Piotr_Górski_pl_noTel.pdf":
/*!*************************************************!*\
  !*** ./src/assets/CV_Piotr_Górski_pl_noTel.pdf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/CV_Piotr_Górski_pl_noTel.pdf";

/***/ }),

/***/ "./src/assets/LOGO_black.png":
/*!***********************************!*\
  !*** ./src/assets/LOGO_black.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/LOGO_black.png";

/***/ }),

/***/ "./src/assets/LOGO_white.png":
/*!***********************************!*\
  !*** ./src/assets/LOGO_white.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/LOGO_white.png";

/***/ }),

/***/ "./src/assets/Musicalia.mp4":
/*!**********************************!*\
  !*** ./src/assets/Musicalia.mp4 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Musicalia.mp4";

/***/ }),

/***/ "./src/assets/alpost.mkv":
/*!*******************************!*\
  !*** ./src/assets/alpost.mkv ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/alpost.mkv";

/***/ }),

/***/ "./src/assets/dyplom.jpg":
/*!*******************************!*\
  !*** ./src/assets/dyplom.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dyplom.jpg";

/***/ }),

/***/ "./src/assets/favicon-70.png":
/*!***********************************!*\
  !*** ./src/assets/favicon-70.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/favicon-70.png";

/***/ }),

/***/ "./src/assets/hala.jpeg":
/*!******************************!*\
  !*** ./src/assets/hala.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/hala.jpeg";

/***/ }),

/***/ "./src/assets/kot.jpg":
/*!****************************!*\
  !*** ./src/assets/kot.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/kot.jpg";

/***/ }),

/***/ "./src/assets/kot2.jpg":
/*!*****************************!*\
  !*** ./src/assets/kot2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/kot2.jpg";

/***/ }),

/***/ "./src/assets/magistera.jpg":
/*!**********************************!*\
  !*** ./src/assets/magistera.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/magistera.jpg";

/***/ }),

/***/ "./src/assets/my-image.png":
/*!*********************************!*\
  !*** ./src/assets/my-image.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/my-image.png";

/***/ }),

/***/ "./src/assets/plaza.jpg":
/*!******************************!*\
  !*** ./src/assets/plaza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/plaza.jpg";

/***/ }),

/***/ "./src/assets/task1.webp":
/*!*******************************!*\
  !*** ./src/assets/task1.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/task1.webp";

/***/ }),

/***/ "./src/assets/task2.webp":
/*!*******************************!*\
  !*** ./src/assets/task2.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/task2.webp";

/***/ }),

/***/ "./src/assets/task3.webp":
/*!*******************************!*\
  !*** ./src/assets/task3.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/task3.webp";

/***/ }),

/***/ "./src/assets/x-kom_clone_video.mkv":
/*!******************************************!*\
  !*** ./src/assets/x-kom_clone_video.mkv ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/x-kom_clone_video.mkv";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _assets_1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/1.webp */ "./src/assets/1.webp");
/* harmony import */ var _assets_2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/2.webp */ "./src/assets/2.webp");
/* harmony import */ var _assets_3_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/3.webp */ "./src/assets/3.webp");
/* harmony import */ var _assets_4_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/4.webp */ "./src/assets/4.webp");
/* harmony import */ var _assets_5_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/5.webp */ "./src/assets/5.webp");
/* harmony import */ var _assets_6_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/6.webp */ "./src/assets/6.webp");
/* harmony import */ var _assets_7_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/7.webp */ "./src/assets/7.webp");
/* harmony import */ var _assets_8_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/8.webp */ "./src/assets/8.webp");
/* harmony import */ var _assets_alpost_mkv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/alpost.mkv */ "./src/assets/alpost.mkv");
/* harmony import */ var _assets_CV_Piotr_G_rski_eng_noTel_pdf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/CV_Piotr_Górski_eng_noTel.pdf */ "./src/assets/CV_Piotr_Górski_eng_noTel.pdf");
/* harmony import */ var _assets_CV_Piotr_G_rski_pl_noTel_pdf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/CV_Piotr_Górski_pl_noTel.pdf */ "./src/assets/CV_Piotr_Górski_pl_noTel.pdf");
/* harmony import */ var _assets_dyplom_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/dyplom.jpg */ "./src/assets/dyplom.jpg");
/* harmony import */ var _assets_hala_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/hala.jpeg */ "./src/assets/hala.jpeg");
/* harmony import */ var _assets_kot_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/kot.jpg */ "./src/assets/kot.jpg");
/* harmony import */ var _assets_kot2_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/kot2.jpg */ "./src/assets/kot2.jpg");
/* harmony import */ var _assets_LOGO_black_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/LOGO_black.png */ "./src/assets/LOGO_black.png");
/* harmony import */ var _assets_LOGO_white_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/LOGO_white.png */ "./src/assets/LOGO_white.png");
/* harmony import */ var _assets_magistera_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/magistera.jpg */ "./src/assets/magistera.jpg");
/* harmony import */ var _assets_Musicalia_mp4__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/Musicalia.mp4 */ "./src/assets/Musicalia.mp4");
/* harmony import */ var _assets_my_image_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/my-image.png */ "./src/assets/my-image.png");
/* harmony import */ var _assets_plaza_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/plaza.jpg */ "./src/assets/plaza.jpg");
/* harmony import */ var _assets_task1_webp__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/task1.webp */ "./src/assets/task1.webp");
/* harmony import */ var _assets_task2_webp__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assets/task2.webp */ "./src/assets/task2.webp");
/* harmony import */ var _assets_task3_webp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assets/task3.webp */ "./src/assets/task3.webp");
/* harmony import */ var _assets_x_kom_clone_video_mkv__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./assets/x-kom_clone_video.mkv */ "./src/assets/x-kom_clone_video.mkv");
/* harmony import */ var _assets_favicon_70_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assets/favicon-70.png */ "./src/assets/favicon-70.png");
/* harmony import */ var _javascript_archImages__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./javascript/archImages */ "./src/javascript/archImages.js");
/* harmony import */ var _javascript_arrows__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./javascript/arrows */ "./src/javascript/arrows.js");
/* harmony import */ var _javascript_navbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./javascript/navbar */ "./src/javascript/navbar.js");
/* harmony import */ var _javascript_projects__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./javascript/projects */ "./src/javascript/projects.js");
/* harmony import */ var _javascript_spaceBackground__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./javascript/spaceBackground */ "./src/javascript/spaceBackground.js");
/* harmony import */ var _javascript_colorTheme__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./javascript/colorTheme */ "./src/javascript/colorTheme.js");

































(0,_javascript_spaceBackground__WEBPACK_IMPORTED_MODULE_31__["default"])();
(0,_javascript_navbar__WEBPACK_IMPORTED_MODULE_29__["default"])();
(0,_javascript_arrows__WEBPACK_IMPORTED_MODULE_28__["default"])();
(0,_javascript_projects__WEBPACK_IMPORTED_MODULE_30__["default"])();
(0,_javascript_archImages__WEBPACK_IMPORTED_MODULE_27__["default"])();
(0,_javascript_colorTheme__WEBPACK_IMPORTED_MODULE_32__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle334f54a3faa4a3014d22.js.map