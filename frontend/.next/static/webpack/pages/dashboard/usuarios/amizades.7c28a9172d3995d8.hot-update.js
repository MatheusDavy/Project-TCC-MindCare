"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/usuarios/amizades",{

/***/ "./src/components/Pages/dashboard/usuarios/Friends/logic.ts":
/*!******************************************************************!*\
  !*** ./src/components/Pages/dashboard/usuarios/Friends/logic.ts ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLogic: function() { return /* binding */ useLogic; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var src_hooks_useDialogAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hooks/useDialogAlert */ \"./src/hooks/useDialogAlert.ts\");\n/* harmony import */ var src_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/repository */ \"./src/repository/index.ts\");\n\n\n\n\nconst useLogic = ()=>{\n    const dialogAlert = (0,src_hooks_useDialogAlert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const { friendsRepository } = (0,src_repository__WEBPACK_IMPORTED_MODULE_3__.useRepository)();\n    const { data: friendRequests, isLoading: loadingFriendRequests, refetch } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(\"user-friends\", async ()=>{\n        return friendsRepository.getFriends(input).then((param)=>{\n            let { data } = param;\n            return data;\n        }).catch((err)=>err);\n    });\n    const handleAcceptFriendRequest = async (nickname)=>{\n        setLoading(true);\n        await friendsRepository.acceptFriendRequest(nickname).then((param)=>{\n            let { data } = param;\n            dialogAlert.responseSuccess({\n                message: data.message\n            });\n        }).catch((error)=>{\n            dialogAlert.responseError(error.response.data);\n        });\n        setLoading(false);\n        refetch();\n    };\n    const handleCancelFriend = async (nickname)=>{\n        setLoading(true);\n        await friendsRepository.cancelFriend(nickname).then((param)=>{\n            let { data } = param;\n            dialogAlert.responseSuccess({\n                message: data.message\n            });\n        }).catch((error)=>{\n            dialogAlert.responseError(error.response.data);\n        });\n        setLoading(false);\n        refetch();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        refetch();\n    }, [\n        input\n    ]);\n    return {\n        data: {\n            input,\n            loading,\n            friendRequests,\n            loadingFriendRequests\n        },\n        methods: {\n            handleAcceptFriendRequest,\n            handleCancelFriend,\n            setInput\n        }\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlcy9kYXNoYm9hcmQvdXN1YXJpb3MvRnJpZW5kcy9sb2dpYy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNlO0FBQ1A7QUFFeEMsTUFBTUssV0FBVztJQUNwQixNQUFNQyxjQUFjSCxvRUFBY0E7SUFFbEMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLEVBQUVVLGlCQUFpQixFQUFFLEdBQUdQLDZEQUFhQTtJQUUzQyxNQUFNLEVBQ0ZRLE1BQU1DLGNBQWMsRUFDcEJDLFdBQVdDLHFCQUFxQixFQUNoQ0MsT0FBTyxFQUNWLEdBQUdkLHFEQUFRQSxDQUFDLGdCQUFnQjtRQUN6QixPQUFPUyxrQkFDRk0sVUFBVSxDQUFDVixPQUNYVyxJQUFJLENBQUM7Z0JBQUMsRUFBRU4sSUFBSSxFQUFFO21CQUFLQTtRQUFHLEdBQ3RCTyxLQUFLLENBQUMsQ0FBQ0MsTUFBUUE7SUFDeEI7SUFFQSxNQUFNQyw0QkFBNEIsT0FBT0M7UUFDckNaLFdBQVc7UUFDWCxNQUFNQyxrQkFDRFksbUJBQW1CLENBQUNELFVBQ3BCSixJQUFJLENBQUM7Z0JBQUMsRUFBRU4sSUFBSSxFQUFFO1lBQ1hOLFlBQVlrQixlQUFlLENBQUM7Z0JBQ3hCQyxTQUFTYixLQUFLYSxPQUFPO1lBQ3pCO1FBQ0osR0FDQ04sS0FBSyxDQUFDTyxDQUFBQTtZQUNIcEIsWUFBWXFCLGFBQWEsQ0FBQ0QsTUFBTUUsUUFBUSxDQUFDaEIsSUFBSTtRQUNqRDtRQUNKRixXQUFXO1FBQ1hNO0lBQ0o7SUFFQSxNQUFNYSxxQkFBcUIsT0FBT1A7UUFDOUJaLFdBQVc7UUFDWCxNQUFNQyxrQkFDRG1CLFlBQVksQ0FBQ1IsVUFDYkosSUFBSSxDQUFDO2dCQUFDLEVBQUVOLElBQUksRUFBRTtZQUNYTixZQUFZa0IsZUFBZSxDQUFDO2dCQUN4QkMsU0FBU2IsS0FBS2EsT0FBTztZQUN6QjtRQUNKLEdBQ0NOLEtBQUssQ0FBQ08sQ0FBQUE7WUFDSHBCLFlBQVlxQixhQUFhLENBQUNELE1BQU1FLFFBQVEsQ0FBQ2hCLElBQUk7UUFDakQ7UUFDSkYsV0FBVztRQUNYTTtJQUNKO0lBRUFoQixnREFBU0EsQ0FBQztRQUNOZ0I7SUFDSixHQUFHO1FBQUNUO0tBQU07SUFFVixPQUFPO1FBQ0hLLE1BQU07WUFDRkw7WUFDQUU7WUFDQUk7WUFBZ0JFO1FBQXNCO1FBQzFDZ0IsU0FBUztZQUFFVjtZQUEyQlE7WUFBb0JyQjtRQUFTO0lBQ3ZFO0FBQ0osRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QYWdlcy9kYXNoYm9hcmQvdXN1YXJpb3MvRnJpZW5kcy9sb2dpYy50cz9jNjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgdXNlRGlhbG9nQWxlcnQgZnJvbSAnc3JjL2hvb2tzL3VzZURpYWxvZ0FsZXJ0JztcclxuaW1wb3J0IHsgdXNlUmVwb3NpdG9yeSB9IGZyb20gJ3NyYy9yZXBvc2l0b3J5JztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VMb2dpYyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpYWxvZ0FsZXJ0ID0gdXNlRGlhbG9nQWxlcnQoKTtcclxuXHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgeyBmcmllbmRzUmVwb3NpdG9yeSB9ID0gdXNlUmVwb3NpdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhOiBmcmllbmRSZXF1ZXN0cyxcclxuICAgICAgICBpc0xvYWRpbmc6IGxvYWRpbmdGcmllbmRSZXF1ZXN0cyxcclxuICAgICAgICByZWZldGNoLFxyXG4gICAgfSA9IHVzZVF1ZXJ5KCd1c2VyLWZyaWVuZHMnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZyaWVuZHNSZXBvc2l0b3J5XHJcbiAgICAgICAgICAgIC5nZXRGcmllbmRzKGlucHV0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IGRhdGEpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBlcnIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWNjZXB0RnJpZW5kUmVxdWVzdCA9IGFzeW5jIChuaWNrbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBhd2FpdCBmcmllbmRzUmVwb3NpdG9yeVxyXG4gICAgICAgICAgICAuYWNjZXB0RnJpZW5kUmVxdWVzdChuaWNrbmFtZSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dBbGVydC5yZXNwb25zZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nQWxlcnQucmVzcG9uc2VFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgcmVmZXRjaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYW5jZWxGcmllbmQgPSBhc3luYyAobmlja25hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgYXdhaXQgZnJpZW5kc1JlcG9zaXRvcnlcclxuICAgICAgICAgICAgLmNhbmNlbEZyaWVuZChuaWNrbmFtZSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dBbGVydC5yZXNwb25zZVN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nQWxlcnQucmVzcG9uc2VFcnJvcihlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgcmVmZXRjaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlZmV0Y2goKTtcclxuICAgIH0sIFtpbnB1dF0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgbG9hZGluZyxcclxuICAgICAgICAgICAgZnJpZW5kUmVxdWVzdHMsIGxvYWRpbmdGcmllbmRSZXF1ZXN0cyB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHsgaGFuZGxlQWNjZXB0RnJpZW5kUmVxdWVzdCwgaGFuZGxlQ2FuY2VsRnJpZW5kLCBzZXRJbnB1dCB9LFxyXG4gICAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUXVlcnkiLCJ1c2VEaWFsb2dBbGVydCIsInVzZVJlcG9zaXRvcnkiLCJ1c2VMb2dpYyIsImRpYWxvZ0FsZXJ0IiwiaW5wdXQiLCJzZXRJbnB1dCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZnJpZW5kc1JlcG9zaXRvcnkiLCJkYXRhIiwiZnJpZW5kUmVxdWVzdHMiLCJpc0xvYWRpbmciLCJsb2FkaW5nRnJpZW5kUmVxdWVzdHMiLCJyZWZldGNoIiwiZ2V0RnJpZW5kcyIsInRoZW4iLCJjYXRjaCIsImVyciIsImhhbmRsZUFjY2VwdEZyaWVuZFJlcXVlc3QiLCJuaWNrbmFtZSIsImFjY2VwdEZyaWVuZFJlcXVlc3QiLCJyZXNwb25zZVN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyb3IiLCJyZXNwb25zZUVycm9yIiwicmVzcG9uc2UiLCJoYW5kbGVDYW5jZWxGcmllbmQiLCJjYW5jZWxGcmllbmQiLCJtZXRob2RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pages/dashboard/usuarios/Friends/logic.ts\n"));

/***/ })

});