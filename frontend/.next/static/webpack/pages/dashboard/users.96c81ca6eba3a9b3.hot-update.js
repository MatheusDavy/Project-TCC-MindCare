"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/users",{

/***/ "./src/components/Pages/dashboard/users/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/Pages/dashboard/users/index.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Structure: function() { return /* binding */ Structure; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search/Search */ \"./src/components/Pages/dashboard/users/Search/Search.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User/User */ \"./src/components/Pages/dashboard/users/User/User.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Structure() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(route);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-[400px_1fr] w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search_Search__WEBPACK_IMPORTED_MODULE_1__.Search, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Pages\\\\dashboard\\\\users\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            router.query.nickname && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_User_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nickname: router.query.nickname\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Pages\\\\dashboard\\\\users\\\\index.tsx\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Pages\\\\dashboard\\\\users\\\\index.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(Structure, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Structure;\nvar _c;\n$RefreshReg$(_c, \"Structure\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlcy9kYXNoYm9hcmQvdXNlcnMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNEO0FBQ1Q7QUFFeEIsU0FBU0c7O0lBQ1osTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCSSxRQUFRQyxHQUFHLENBQUNDO0lBQ1oscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDVCxrREFBTUE7Ozs7O1lBQ05JLE9BQU9NLEtBQUssQ0FBQ0MsUUFBUSxrQkFDbEIsOERBQUNULGtEQUFJQTtnQkFBQ1MsVUFBVVAsT0FBT00sS0FBSyxDQUFDQyxRQUFROzs7Ozs7Ozs7Ozs7QUFJckQ7R0FaZ0JSOztRQUNHRixrREFBU0E7OztLQURaRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QYWdlcy9kYXNoYm9hcmQvdXNlcnMvaW5kZXgudHN4PzI3ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi9TZWFyY2gvU2VhcmNoJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXIvVXNlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RydWN0dXJlKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocm91dGUpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtWzQwMHB4XzFmcl0gdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICAgICAge3JvdXRlci5xdWVyeS5uaWNrbmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8VXNlciBuaWNrbmFtZT17cm91dGVyLnF1ZXJ5Lm5pY2tuYW1lfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiU2VhcmNoIiwidXNlUm91dGVyIiwiVXNlciIsIlN0cnVjdHVyZSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZSIsImRpdiIsImNsYXNzTmFtZSIsInF1ZXJ5Iiwibmlja25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pages/dashboard/users/index.tsx\n"));

/***/ })

});