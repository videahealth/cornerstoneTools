/*! cornerstone-tools - 6.0.6-g - 2023-05-25 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/cornerstoneTools */
webpackHotUpdate("cornerstoneTools",{

/***/ "./drawing/drawTextBox.js":
/*!********************************!*\
  !*** ./drawing/drawTextBox.js ***!
  \********************************/
/*! exports provided: textBoxWidth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textBoxWidth", function() { return textBoxWidth; });
/* harmony import */ var _stateManagement_textStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stateManagement/textStyle.js */ "./stateManagement/textStyle.js");
/* harmony import */ var _draw_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.js */ "./drawing/draw.js");
/* harmony import */ var _fillTextLines_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillTextLines.js */ "./drawing/fillTextLines.js");
/* harmony import */ var _fillBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fillBox.js */ "./drawing/fillBox.js");




/**
 * Compute the width of the box required to display the given `text` with a given `padding`.
 * @public
 * @function textBoxWidth
 * @memberof Drawing
 *
 * @param {CanvasRenderingContext2D} context - Target context
 * @param {String} text - The text to find the width of.
 * @param {Number} padding - The padding to apply on either end of the text.
 * @returns {Number} computed text box width
 */

function textBoxWidth(context, text, padding) {
  var font = _stateManagement_textStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"].getFont();
  var origFont = context.font;

  if (font && font !== origFont) {
    context.font = font;
  }

  var width = context.measureText(text).width;

  if (font && font !== origFont) {
    context.font = origFont;
  }

  return width + 2 * padding;
}
/**
 * Draws a textBox.
 * @public
 * @function drawTextBox
 * @memberof Drawing
 *
 * @param  {CanvasRenderingContext2D} context The canvas context.
 * @param  {string} textLines   The text to display.
 * @param  {number} x           The x position of the textBox.
 * @param  {number} y           The y position of the textBox.
 * @param  {string} color       The color of the textBox.
 * @param  {Object} options     Options for the textBox.
 * @param  {boolean} options.centering Option to center the textbox.
 * @param  {function} options.displacer displacer function.
 * @returns {Object} {top, left, width, height} - Bounding box; can be used for pointNearTool
 */

/* harmony default export */ __webpack_exports__["default"] = (function (context, textLines, x, y, color) {
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  if (Object.prototype.toString.call(textLines) !== '[object Array]') {
    textLines = [textLines];
  }

  var padding = 2;
  var fontSize = _stateManagement_textStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"].getFontSize();
  var backgroundColor = _stateManagement_textStyle_js__WEBPACK_IMPORTED_MODULE_0__["default"].getBackgroundColor(); // Find the longest text width in the array of text data

  var maxWidth = 0;
  textLines.forEach(function (text) {
    // Get the text width in the current font
    var width = textBoxWidth(context, text, padding); // Find the maximum with for all the text rows;

    maxWidth = Math.max(maxWidth, width);
  }); // Calculate the bounding box for this text box

  var boundingBox = {
    width: maxWidth,
    height: padding + textLines.length * (fontSize + padding)
  };
  Object(_draw_js__WEBPACK_IMPORTED_MODULE_1__["default"])(context, function (context) {
    context.strokeStyle = color; // Draw the background box with padding

    if (options.centering) {
      if (options.centering.x === true) {
        x -= boundingBox.width / 2;
      }

      if (options.centering.y === true) {
        y -= boundingBox.height / 2;
      }
    }

    boundingBox.left = x;
    boundingBox.top = y; // Check if a displacer function was provided

    if (typeof options.displacer === 'function') {
      options.displacer(boundingBox);
    }

    Object(_fillBox_js__WEBPACK_IMPORTED_MODULE_3__["default"])(context, boundingBox, backgroundColor); // Draw each of the text lines on top of the background box

    Object(_fillTextLines_js__WEBPACK_IMPORTED_MODULE_2__["default"])(context, boundingBox, textLines, color, padding);
  }); // Return the bounding box so it can be used for pointNearHandle

  return boundingBox;
});

/***/ })

})
//# sourceMappingURL=cornerstoneTools.eee6cb0767eaa16fc476.hot-update.js.map