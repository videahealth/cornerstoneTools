/*! cornerstone-tools - 6.0.6-g - 2023-05-25 | (c) 2017 Chris Hafey | https://github.com/cornerstonejs/cornerstoneTools */
webpackHotUpdate("cornerstoneTools",{

/***/ "./tools/annotation/TextMarkerTool.js":
/*!********************************************!*\
  !*** ./tools/annotation/TextMarkerTool.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextMarkerTool; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base_BaseAnnotationTool_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base/BaseAnnotationTool.js */ "./tools/base/BaseAnnotationTool.js");
/* harmony import */ var _externalModules_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../externalModules.js */ "./externalModules.js");
/* harmony import */ var _util_pointInsideBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../util/pointInsideBoundingBox.js */ "./util/pointInsideBoundingBox.js");
/* harmony import */ var _stateManagement_toolColors_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../stateManagement/toolColors.js */ "./stateManagement/toolColors.js");
/* harmony import */ var _drawing_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../drawing/index.js */ "./drawing/index.js");
/* harmony import */ var _drawing_drawTextBox_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../drawing/drawTextBox.js */ "./drawing/drawTextBox.js");
/* harmony import */ var _stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../stateManagement/toolState.js */ "./stateManagement/toolState.js");
/* harmony import */ var _cursors_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cursors/index.js */ "./tools/cursors/index.js");














/**
 * @public
 * @class TextMarkerTool
 * @memberof Tools.Annotation
 *
 * @classdesc Tool for annotating an image with text markers.
 * @extends Tools.Base.BaseAnnotationTool
 */

var TextMarkerTool =
/*#__PURE__*/
function (_BaseAnnotationTool) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TextMarkerTool, _BaseAnnotationTool);

  function TextMarkerTool() {
    var _this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TextMarkerTool);

    var defaultProps = {
      name: 'TextMarker',
      supportedInteractionTypes: ['Mouse', 'Touch'],
      configuration: {
        markers: [],
        current: '',
        ascending: true,
        loop: false,
        changeTextCallback: changeTextCallback
      },
      svgCursor: _cursors_index_js__WEBPACK_IMPORTED_MODULE_13__["textMarkerCursor"]
    };
    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(TextMarkerTool).call(this, props, defaultProps));
    _this.touchPressCallback = _this._changeText.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.doubleClickCallback = _this._changeText.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TextMarkerTool, [{
    key: "createNewMeasurement",
    value: function createNewMeasurement(eventData) {
      var config = this.configuration;

      if (!config.current) {
        return;
      } // Create the measurement data for this tool with the end handle activated


      var measurementData = {
        visible: true,
        active: true,
        text: config.current,
        color: undefined,
        handles: {
          end: {
            x: eventData.currentPoints.image.x,
            y: eventData.currentPoints.image.y,
            highlight: true,
            active: true,
            hasBoundingBox: true
          }
        }
      }; // Create a rectangle representing the image

      var imageRect = {
        left: 0,
        top: 0,
        width: eventData.image.width,
        height: eventData.image.height
      }; // Check if the current handle is outside the image,
      // If it is, prevent the handle creation

      if (!_externalModules_js__WEBPACK_IMPORTED_MODULE_7__["default"].cornerstoneMath.point.insideRect(measurementData.handles.end, imageRect)) {
        return;
      } // Update the current marker for the next marker


      var currentIndex = config.markers.indexOf(config.current);
      var increment = config.ascending ? 1 : -1;
      currentIndex += increment;

      if (currentIndex >= config.markers.length) {
        currentIndex = config.loop ? 0 : -1;
      } else if (currentIndex < 0) {
        currentIndex = config.loop ? config.markers.length : -1;
      }

      config.current = config.markers[currentIndex];
      return measurementData;
    }
  }, {
    key: "pointNearTool",
    value: function pointNearTool(element, data, coords) {
      if (data.visible === false) {
        return false;
      }

      if (!data.handles.end.boundingBox) {
        return;
      }

      var distanceToPoint = _externalModules_js__WEBPACK_IMPORTED_MODULE_7__["default"].cornerstoneMath.rect.distanceToPoint(data.handles.end.boundingBox, coords);
      var insideBoundingBox = Object(_util_pointInsideBoundingBox_js__WEBPACK_IMPORTED_MODULE_8__["default"])(data.handles.end, coords);
      return distanceToPoint < 10 || insideBoundingBox;
    }
  }, {
    key: "updateCachedStats",
    value: function updateCachedStats() {// Implementing to satisfy BaseAnnotationTool
    }
  }, {
    key: "renderToolData",
    value: function renderToolData(evt) {
      var eventData = evt.detail;
      var config = this.configuration; // If we have no toolData for this element, return immediately as there is nothing to do

      var toolData = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_12__["getToolState"])(eventData.element, this.name);

      if (!toolData) {
        return;
      } // We have tool data for this element - iterate over each one and draw it


      var context = Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["getNewContext"])(eventData.canvasContext.canvas);

      var _loop = function _loop(i) {
        var data = toolData.data[i];

        if (data.visible === false) {
          return "continue";
        }

        var color = _stateManagement_toolColors_js__WEBPACK_IMPORTED_MODULE_9__["default"].getColorIfActive(data);
        Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["draw"])(context, function (context) {
          Object(_drawing_index_js__WEBPACK_IMPORTED_MODULE_10__["setShadow"])(context, config);
          var textCoords = _externalModules_js__WEBPACK_IMPORTED_MODULE_7__["default"].cornerstone.pixelToCanvas(eventData.element, data.handles.end);
          var options = {
            centering: {
              x: true,
              y: true
            }
          };
          data.handles.end.boundingBox = Object(_drawing_drawTextBox_js__WEBPACK_IMPORTED_MODULE_11__["default"])(context, data.text, textCoords.x, textCoords.y - 2, color, options);
        });
      };

      for (var i = 0; i < toolData.data.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }
    }
  }, {
    key: "_changeText",
    value: function _changeText(evt) {
      var eventData = evt.detail;
      var element = eventData.element,
          currentPoints = eventData.currentPoints;
      var data;

      function doneChangingTextCallback(data, updatedText, deleteTool) {
        if (deleteTool === true) {
          Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_12__["removeToolState"])(element, this.name, data);
        } else {
          data.text = updatedText;
        }

        data.active = false;
        _externalModules_js__WEBPACK_IMPORTED_MODULE_7__["default"].cornerstone.updateImage(element);
      }

      var config = this.configuration;
      var coords = currentPoints.canvas;
      var toolData = Object(_stateManagement_toolState_js__WEBPACK_IMPORTED_MODULE_12__["getToolState"])(element, this.name); // Now check to see if there is a handle we can move

      if (!toolData) {
        return;
      }

      for (var i = 0; i < toolData.data.length; i++) {
        data = toolData.data[i];

        if (this.pointNearTool(element, data, coords)) {
          data.active = true;
          _externalModules_js__WEBPACK_IMPORTED_MODULE_7__["default"].cornerstone.updateImage(element); // Allow relabelling via a callback

          config.changeTextCallback(data, eventData, doneChangingTextCallback);
          evt.stopImmediatePropagation();
          evt.preventDefault();
          evt.stopPropagation();
          return;
        }
      }
    }
  }]);

  return TextMarkerTool;
}(_base_BaseAnnotationTool_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
/**
 * This function is a callback to be overwriten in order to provide the wanted feature
 * modal, overlay, popup or any kind of interaction with the user to be able to update
 * the text marker label.
 *
 * @param  {Object} data
 * @param  {Object} eventData
 * @param  {doneChangingTextCallback} doneChangingTextCallback
 * @returns {void}
 */




var changeTextCallback = function changeTextCallback(data, eventData, doneChangingTextCallback) {
  // eslint-disable-next-line no-alert
  doneChangingTextCallback(data, prompt('Change your annotation:'));
};
/**
 * @callback doneChangingTextCallback
 * @param {Object} data
 * @param {string} text - The new text
 */

/***/ })

})
//# sourceMappingURL=cornerstoneTools.a1ee5b4c2294c3117791.hot-update.js.map