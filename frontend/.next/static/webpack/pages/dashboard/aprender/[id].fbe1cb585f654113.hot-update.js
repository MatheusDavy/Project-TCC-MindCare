"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/aprender/[id]",{

/***/ "./src/components/Pages/dashboard/aprender/[id]/Details/Details.logic.ts":
/*!*******************************************************************************!*\
  !*** ./src/components/Pages/dashboard/aprender/[id]/Details/Details.logic.ts ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLogic: function() { return /* binding */ useLogic; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var src_hooks_useDialogAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hooks/useDialogAlert */ \"./src/hooks/useDialogAlert.ts\");\n/* harmony import */ var src_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/repository */ \"./src/repository/index.ts\");\n\n\n\n\n\nconst useLogic = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n    const { learnRepository } = (0,src_repository__WEBPACK_IMPORTED_MODULE_3__.useRepository)();\n    const dialogAlert = (0,src_hooks_useDialogAlert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    // Requests\n    const { data, isLoading, refetch } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(\"content-description-\".concat(router.query.id), async ()=>{\n        const filtered = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/datas/learn.json\").then(async (param)=>{\n            let { data } = param;\n            return data.filter((content)=>content.id == router.query.id);\n        }).catch((err)=>err);\n        return filtered[0];\n    });\n    const { data: friends, isLoading: isLoadingFriends } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(\"friends-who-watched-video-\".concat(router.query.id), async ()=>{\n        await learnRepository.getFriendsWhoWatched(router.query.id).then().catch();\n    });\n    return {\n        data: {\n            data,\n            isLoading,\n            friends,\n            isLoadingFriends\n        },\n        methods: {\n            refetch\n        }\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlcy9kYXNoYm9hcmQvYXByZW5kZXIvW2lkXS9EZXRhaWxzL0RldGFpbHMubG9naWMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBQ0Q7QUFDZTtBQUNQO0FBRXhDLE1BQU1LLFdBQVc7SUFDcEIsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRU0sZUFBZSxFQUFFLEdBQUdILDZEQUFhQTtJQUN6QyxNQUFNSSxjQUFjTCxvRUFBY0E7SUFFbEMsV0FBVztJQUNYLE1BQU0sRUFBRU0sSUFBSSxFQUFFQyxTQUFTLEVBQUVDLE9BQU8sRUFBRSxHQUFHVCxxREFBUUEsQ0FDekMsdUJBQXVDLE9BQWhCSSxPQUFPTSxLQUFLLENBQUNDLEVBQUUsR0FDdEM7UUFDSSxNQUFNQyxXQUFXLE1BQU1kLGlEQUNmLENBQUMscUJBQ0pnQixJQUFJLENBQUM7Z0JBQU8sRUFBRVAsSUFBSSxFQUFFO1lBQ2pCLE9BQU9BLEtBQUtRLE1BQU0sQ0FDZEMsQ0FBQUEsVUFBV0EsUUFBUUwsRUFBRSxJQUFJUCxPQUFPTSxLQUFLLENBQUNDLEVBQUU7UUFFaEQsR0FDQ00sS0FBSyxDQUFDQyxDQUFBQSxNQUFPQTtRQUNsQixPQUFPTixRQUFRLENBQUMsRUFBRTtJQUN0QjtJQUdKLE1BQU0sRUFBRUwsTUFBTVksT0FBTyxFQUFFWCxXQUFXWSxnQkFBZ0IsRUFBRSxHQUFHcEIscURBQVFBLENBQzNELDZCQUE2QyxPQUFoQkksT0FBT00sS0FBSyxDQUFDQyxFQUFFLEdBQzVDO1FBQ0ksTUFBTU4sZ0JBQ0RnQixvQkFBb0IsQ0FBQ2pCLE9BQU9NLEtBQUssQ0FBQ0MsRUFBRSxFQUNwQ0csSUFBSSxHQUNKRyxLQUFLO0lBQ2Q7SUFHSixPQUFPO1FBQ0hWLE1BQU07WUFDRkE7WUFDQUM7WUFDQVc7WUFDQUM7UUFDSjtRQUNBRSxTQUFTO1lBQ0xiO1FBQ0o7SUFDSjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZXMvZGFzaGJvYXJkL2FwcmVuZGVyL1tpZF0vRGV0YWlscy9EZXRhaWxzLmxvZ2ljLnRzP2I4NjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcclxuaW1wb3J0IHVzZURpYWxvZ0FsZXJ0IGZyb20gJ3NyYy9ob29rcy91c2VEaWFsb2dBbGVydCc7XHJcbmltcG9ydCB7IHVzZVJlcG9zaXRvcnkgfSBmcm9tICdzcmMvcmVwb3NpdG9yeSc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTG9naWMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgbGVhcm5SZXBvc2l0b3J5IH0gPSB1c2VSZXBvc2l0b3J5KCk7XHJcbiAgICBjb25zdCBkaWFsb2dBbGVydCA9IHVzZURpYWxvZ0FsZXJ0KCk7XHJcblxyXG4gICAgLy8gUmVxdWVzdHNcclxuICAgIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCByZWZldGNoIH0gPSB1c2VRdWVyeShcclxuICAgICAgICBgY29udGVudC1kZXNjcmlwdGlvbi0ke3JvdXRlci5xdWVyeS5pZH1gLFxyXG4gICAgICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWQgPSBhd2FpdCBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldCgnL2RhdGFzL2xlYXJuLmpzb24nKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0+IGNvbnRlbnQuaWQgPT0gcm91dGVyLnF1ZXJ5LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZFswXTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogZnJpZW5kcywgaXNMb2FkaW5nOiBpc0xvYWRpbmdGcmllbmRzIH0gPSB1c2VRdWVyeShcclxuICAgICAgICBgZnJpZW5kcy13aG8td2F0Y2hlZC12aWRlby0ke3JvdXRlci5xdWVyeS5pZH1gLFxyXG4gICAgICAgIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgbGVhcm5SZXBvc2l0b3J5XHJcbiAgICAgICAgICAgICAgICAuZ2V0RnJpZW5kc1dob1dhdGNoZWQocm91dGVyLnF1ZXJ5LmlkIGFzICdzdHJpbmcnIHwgJ251bWJlcicpXHJcbiAgICAgICAgICAgICAgICAudGhlbigpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgICAgIGZyaWVuZHMsXHJcbiAgICAgICAgICAgIGlzTG9hZGluZ0ZyaWVuZHMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHJlZmV0Y2gsXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVJvdXRlciIsInVzZVF1ZXJ5IiwidXNlRGlhbG9nQWxlcnQiLCJ1c2VSZXBvc2l0b3J5IiwidXNlTG9naWMiLCJyb3V0ZXIiLCJsZWFyblJlcG9zaXRvcnkiLCJkaWFsb2dBbGVydCIsImRhdGEiLCJpc0xvYWRpbmciLCJyZWZldGNoIiwicXVlcnkiLCJpZCIsImZpbHRlcmVkIiwiZ2V0IiwidGhlbiIsImZpbHRlciIsImNvbnRlbnQiLCJjYXRjaCIsImVyciIsImZyaWVuZHMiLCJpc0xvYWRpbmdGcmllbmRzIiwiZ2V0RnJpZW5kc1dob1dhdGNoZWQiLCJtZXRob2RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pages/dashboard/aprender/[id]/Details/Details.logic.ts\n"));

/***/ })

});