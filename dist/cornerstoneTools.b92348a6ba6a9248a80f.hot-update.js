/*! cornerstone-tools - 6.0.6-g - 2023-05-25 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/cornerstoneTools */
webpackHotUpdate("cornerstoneTools",{

/***/ "./drawing/fillBox.js":
/*!****************************!*\
  !*** ./drawing/fillBox.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Draw a filled rectangle defined by `boundingBox` using the style defined by `fillStyle`.
 * @public
 * @method fillBox
 * @memberof Drawing
 *
 * @param {CanvasRenderingContext2D} context - Target context
 * @param {Object} boundingBox - `{ left, top, width, height }` in canvas coordinates.
 * @param {FillStyle} fillStyle - The fillStyle to apply to the region.
 * @returns {undefined}
 */
/* harmony default export */ __webpack_exports__["default"] = (function (context, boundingBox, fillStyle) {
  context.fillStyle = fillStyle;
  context.roundRect(boundingBox.left, boundingBox.top, boundingBox.width, boundingBox.height, 5);
});

/***/ })

})
//# sourceMappingURL=cornerstoneTools.b92348a6ba6a9248a80f.hot-update.js.map