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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLogic: function() { return /* binding */ useLogic; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n/* harmony import */ var src_hooks_useDialogAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/hooks/useDialogAlert */ \"./src/hooks/useDialogAlert.ts\");\n/* harmony import */ var src_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/repository */ \"./src/repository/index.ts\");\n\n\n\n\nconst useLogic = ()=>{\n    const dialogAlert = (0,src_hooks_useDialogAlert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const { friendsRepository } = (0,src_repository__WEBPACK_IMPORTED_MODULE_3__.useRepository)();\n    const { data: friendRequests, isLoading: loadingFriendRequests, refetch } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(\"user-friends\", async ()=>{\n        return friendsRepository.getFriends().then((param)=>{\n            let { data } = param;\n            return data;\n        }).catch((err)=>{\n            console.error(err);\n            return [];\n        });\n    });\n    const handleAcceptFriendRequest = async (nickname)=>{\n        setLoading(true);\n        await friendsRepository.acceptFriendRequest(nickname).then((param)=>{\n            let { data } = param;\n            dialogAlert.responseSuccess({\n                message: data.message\n            });\n        }).catch((error)=>{\n            dialogAlert.responseError(error.response.data);\n        });\n        setLoading(false);\n        refetch();\n    };\n    const handleCancelFriend = async (nickname)=>{\n        setLoading(true);\n        await friendsRepository.cancelFriend(nickname).then((param)=>{\n            let { data } = param;\n            dialogAlert.responseSuccess({\n                message: data.message\n            });\n        }).catch((error)=>{\n            dialogAlert.responseError(error.response.data);\n        });\n        setLoading(false);\n        refetch();\n    };\n    return {\n        data: {\n            input,\n            loading,\n            friends: friendRequests || [],\n            loadingFriendRequests\n        },\n        methods: {\n            handleAcceptFriendRequest,\n            handleCancelFriend,\n            setInput\n        }\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlcy9kYXNoYm9hcmQvdXN1YXJpb3MvRnJpZW5kcy9sb2dpYy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDTDtBQUNlO0FBQ1A7QUFFeEMsTUFBTUksV0FBVztJQUNwQixNQUFNQyxjQUFjSCxvRUFBY0E7SUFFbEMsTUFBTSxDQUFDSSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRVEsaUJBQWlCLEVBQUUsR0FBR0wsNkRBQWFBO0lBRTNDLE1BQU0sRUFDRk0sTUFBTUMsY0FBYyxFQUNwQkMsV0FBV0MscUJBQXFCLEVBQ2hDQyxPQUFPLEVBQ1YsR0FBR1oscURBQVFBLENBQUMsZ0JBQWdCO1FBQ3pCLE9BQU9PLGtCQUNGTSxVQUFVLEdBQ1ZDLElBQUksQ0FBQztnQkFBQyxFQUFFTixJQUFJLEVBQUU7bUJBQUtBO1FBQUcsR0FDdEJPLEtBQUssQ0FBQyxDQUFDQztZQUNKQyxRQUFRQyxLQUFLLENBQUNGO1lBQ2QsT0FBTyxFQUFFO1FBQ2I7SUFDUjtJQUVBLE1BQU1HLDRCQUE0QixPQUFPQztRQUNyQ2QsV0FBVztRQUNYLE1BQU1DLGtCQUNEYyxtQkFBbUIsQ0FBQ0QsVUFDcEJOLElBQUksQ0FBQztnQkFBQyxFQUFFTixJQUFJLEVBQUU7WUFDWEosWUFBWWtCLGVBQWUsQ0FBQztnQkFDeEJDLFNBQVNmLEtBQUtlLE9BQU87WUFDekI7UUFDSixHQUNDUixLQUFLLENBQUNHLENBQUFBO1lBQ0hkLFlBQVlvQixhQUFhLENBQUNOLE1BQU1PLFFBQVEsQ0FBQ2pCLElBQUk7UUFDakQ7UUFDSkYsV0FBVztRQUNYTTtJQUNKO0lBRUEsTUFBTWMscUJBQXFCLE9BQU9OO1FBQzlCZCxXQUFXO1FBQ1gsTUFBTUMsa0JBQ0RvQixZQUFZLENBQUNQLFVBQ2JOLElBQUksQ0FBQztnQkFBQyxFQUFFTixJQUFJLEVBQUU7WUFDWEosWUFBWWtCLGVBQWUsQ0FBQztnQkFDeEJDLFNBQVNmLEtBQUtlLE9BQU87WUFDekI7UUFDSixHQUNDUixLQUFLLENBQUNHLENBQUFBO1lBQ0hkLFlBQVlvQixhQUFhLENBQUNOLE1BQU1PLFFBQVEsQ0FBQ2pCLElBQUk7UUFDakQ7UUFDSkYsV0FBVztRQUNYTTtJQUNKO0lBRUEsT0FBTztRQUNISixNQUFNO1lBQ0ZvQjtZQUNBdkI7WUFDQXdCLFNBQVNwQixrQkFBa0IsRUFBRTtZQUM3QkU7UUFDSjtRQUNBbUIsU0FBUztZQUFFWDtZQUEyQk87WUFBb0JLO1FBQVM7SUFDdkU7QUFDSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BhZ2VzL2Rhc2hib2FyZC91c3Vhcmlvcy9GcmllbmRzL2xvZ2ljLnRzP2M2N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XHJcbmltcG9ydCB1c2VEaWFsb2dBbGVydCBmcm9tICdzcmMvaG9va3MvdXNlRGlhbG9nQWxlcnQnO1xyXG5pbXBvcnQgeyB1c2VSZXBvc2l0b3J5IH0gZnJvbSAnc3JjL3JlcG9zaXRvcnknO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUxvZ2ljID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlhbG9nQWxlcnQgPSB1c2VEaWFsb2dBbGVydCgpO1xyXG5cclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgZnJpZW5kc1JlcG9zaXRvcnkgfSA9IHVzZVJlcG9zaXRvcnkoKTtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YTogZnJpZW5kUmVxdWVzdHMsXHJcbiAgICAgICAgaXNMb2FkaW5nOiBsb2FkaW5nRnJpZW5kUmVxdWVzdHMsXHJcbiAgICAgICAgcmVmZXRjaCxcclxuICAgIH0gPSB1c2VRdWVyeSgndXNlci1mcmllbmRzJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBmcmllbmRzUmVwb3NpdG9yeVxyXG4gICAgICAgICAgICAuZ2V0RnJpZW5kcygpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVBY2NlcHRGcmllbmRSZXF1ZXN0ID0gYXN5bmMgKG5pY2tuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIGF3YWl0IGZyaWVuZHNSZXBvc2l0b3J5XHJcbiAgICAgICAgICAgIC5hY2NlcHRGcmllbmRSZXF1ZXN0KG5pY2tuYW1lKVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ0FsZXJ0LnJlc3BvbnNlU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dBbGVydC5yZXNwb25zZUVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICByZWZldGNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbEZyaWVuZCA9IGFzeW5jIChuaWNrbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBhd2FpdCBmcmllbmRzUmVwb3NpdG9yeVxyXG4gICAgICAgICAgICAuY2FuY2VsRnJpZW5kKG5pY2tuYW1lKVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ0FsZXJ0LnJlc3BvbnNlU3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dBbGVydC5yZXNwb25zZUVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICByZWZldGNoKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgbG9hZGluZyxcclxuICAgICAgICAgICAgZnJpZW5kczogZnJpZW5kUmVxdWVzdHMgfHwgW10sXHJcbiAgICAgICAgICAgIGxvYWRpbmdGcmllbmRSZXF1ZXN0c1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczogeyBoYW5kbGVBY2NlcHRGcmllbmRSZXF1ZXN0LCBoYW5kbGVDYW5jZWxGcmllbmQsIHNldElucHV0IH0sXHJcbiAgICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VRdWVyeSIsInVzZURpYWxvZ0FsZXJ0IiwidXNlUmVwb3NpdG9yeSIsInVzZUxvZ2ljIiwiZGlhbG9nQWxlcnQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZyaWVuZHNSZXBvc2l0b3J5IiwiZGF0YSIsImZyaWVuZFJlcXVlc3RzIiwiaXNMb2FkaW5nIiwibG9hZGluZ0ZyaWVuZFJlcXVlc3RzIiwicmVmZXRjaCIsImdldEZyaWVuZHMiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVBY2NlcHRGcmllbmRSZXF1ZXN0Iiwibmlja25hbWUiLCJhY2NlcHRGcmllbmRSZXF1ZXN0IiwicmVzcG9uc2VTdWNjZXNzIiwibWVzc2FnZSIsInJlc3BvbnNlRXJyb3IiLCJyZXNwb25zZSIsImhhbmRsZUNhbmNlbEZyaWVuZCIsImNhbmNlbEZyaWVuZCIsImlucHV0IiwiZnJpZW5kcyIsIm1ldGhvZHMiLCJzZXRJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pages/dashboard/usuarios/Friends/logic.ts\n"));

/***/ })

});