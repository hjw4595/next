"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/common/card/index.tsx":
/*!******************************************!*\
  !*** ./components/common/card/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.module.css */ \"./components/common/card/card.module.css\");\n/* harmony import */ var _card_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_card_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Card(param) {\n    var image = param.image, profile = param.profile, content = param.content;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_card_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_card_module_css__WEBPACK_IMPORTED_MODULE_2___default().image),\n                children: image\n            }, void 0, false, {\n                fileName: \"/Users/hongjungwan/next/components/common/card/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_card_module_css__WEBPACK_IMPORTED_MODULE_2___default().profile),\n                children: profile\n            }, void 0, false, {\n                fileName: \"/Users/hongjungwan/next/components/common/card/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_card_module_css__WEBPACK_IMPORTED_MODULE_2___default().content),\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/hongjungwan/next/components/common/card/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hongjungwan/next/components/common/card/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this));\n}\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9jYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNhO1NBUTdCRSxJQUFJLENBQUMsS0FBc0MsRUFBRSxDQUFDO1FBQXZDQyxLQUFLLEdBQVAsS0FBc0MsQ0FBcENBLEtBQUssRUFBRUMsT0FBTyxHQUFoQixLQUFzQyxDQUE3QkEsT0FBTyxFQUFFQyxPQUFPLEdBQXpCLEtBQXNDLENBQXBCQSxPQUFPO0lBQ3JDLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFFTixpRUFBYzs7d0ZBQzNCSyxDQUFHO2dCQUFDQyxTQUFTLEVBQUVOLCtEQUFZOzBCQUFHRSxLQUFLOzs7Ozs7d0ZBQ25DRyxDQUFHO2dCQUFDQyxTQUFTLEVBQUVOLGlFQUFjOzBCQUFHRyxPQUFPOzs7Ozs7d0ZBQ3ZDRSxDQUFHO2dCQUFDQyxTQUFTLEVBQUVOLGlFQUFjOzBCQUFHSSxPQUFPOzs7Ozs7Ozs7Ozs7QUFHOUMsQ0FBQztLQVJRSCxJQUFJO0FBVWIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9jYXJkL2luZGV4LnRzeD8xNDFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY2FyZC5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcFR5cGVzIHtcbiAgaW1hZ2U6IHN0cmluZztcbiAgcHJvZmlsZTogc3RyaW5nO1xuICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmZ1bmN0aW9uIENhcmQoeyBpbWFnZSwgcHJvZmlsZSwgY29udGVudCB9OiBQcm9wVHlwZXMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+e2ltYWdlfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT57cHJvZmlsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+e2NvbnRlbnR9PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJDYXJkIiwiaW1hZ2UiLCJwcm9maWxlIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsIndyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/card/index.tsx\n");

/***/ })

});