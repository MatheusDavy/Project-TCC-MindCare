"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/settings",{

/***/ "./src/components/Pages/dashboard/settings/Forms/Forms.logic.ts":
/*!**********************************************************************!*\
  !*** ./src/components/Pages/dashboard/settings/Forms/Forms.logic.ts ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLogic: function() { return /* binding */ useLogic; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hookform/resolvers/yup */ \"./node_modules/@hookform/resolvers/yup/dist/yup.mjs\");\n/* harmony import */ var _Forms_scheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Forms.scheme */ \"./src/components/Pages/dashboard/settings/Forms/Forms.scheme.ts\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var src_utils_forms_configure_use_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/forms/configure-use-form */ \"./src/utils/forms/configure-use-form.ts\");\n/* harmony import */ var src_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/repository */ \"./src/repository/index.ts\");\n/* harmony import */ var src_hooks_useDialogAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/hooks/useDialogAlert */ \"./src/hooks/useDialogAlert.ts\");\n/* harmony import */ var src_context_User_User_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/context/User/User.context */ \"./src/context/User/User.context.tsx\");\n/* harmony import */ var src_utils_forms_flatten_object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/utils/forms/flatten-object */ \"./src/utils/forms/flatten-object.ts\");\n\n\n\n\n\n\n\n\n\n\nconst useLogic = ()=>{\n    const { userDatas, refreshUserDatas, loadingUserDatas } = (0,src_context_User_User_context__WEBPACK_IMPORTED_MODULE_6__.useUserContext)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [edit, setEdit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const dialogAlert = (0,src_hooks_useDialogAlert__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const { userRepository } = (0,src_repository__WEBPACK_IMPORTED_MODULE_4__.useRepository)();\n    const { control, handleSubmit, formState: { errors }, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({\n        defaultValues: _Forms_scheme__WEBPACK_IMPORTED_MODULE_2__.defaultValues,\n        mode: \"onSubmit\",\n        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_1__.yupResolver)(_Forms_scheme__WEBPACK_IMPORTED_MODULE_2__.schema)\n    });\n    const onSubmit = async (data)=>{\n        setLoading(true);\n        userRepository.updateMe(data).then((param)=>{\n            let { data } = param;\n            console.log(data);\n            dialogAlert.responseSuccess({\n                message: data\n            });\n            refreshUserDatas();\n        }).catch((error)=>{\n            dialogAlert.responseError(error.response.data);\n        });\n        setLoading(false);\n        setEdit(false);\n    };\n    const setUserDatas = ()=>{\n        if (userDatas) {\n            (0,src_utils_forms_configure_use_form__WEBPACK_IMPORTED_MODULE_3__.configureUseForm)(setValue, (0,src_utils_forms_flatten_object__WEBPACK_IMPORTED_MODULE_7__.flattenObject)(userDatas));\n        }\n    };\n    const getUserAddressInfo = async (code)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"https://viacep.com.br/ws/\".concat(code, \"/json/\"));\n            const datas = {\n                city: response.data.localidade,\n                state: response.data.uf\n            };\n            (0,src_utils_forms_configure_use_form__WEBPACK_IMPORTED_MODULE_3__.configureUseForm)(setValue, datas);\n        } catch (error) {}\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        setUserDatas();\n    }, [\n        userDatas\n    ]);\n    console.log(userDatas);\n    return {\n        data: {\n            loading,\n            edit,\n            control,\n            errors,\n            loadingUserDatas\n        },\n        methods: {\n            setEdit,\n            onSubmit,\n            handleSubmit,\n            getUserAddressInfo\n        }\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlcy9kYXNoYm9hcmQvc2V0dGluZ3MvRm9ybXMvRm9ybXMubG9naWMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ1U7QUFDQztBQUNiO0FBQ2hCO0FBQzRDO0FBQ3ZCO0FBQ087QUFDUztBQUVBO0FBRXhELE1BQU1ZLFdBQVc7SUFDcEIsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHTCw2RUFBY0E7SUFDeEUsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNpQixNQUFNQyxRQUFRLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVqQyxNQUFNbUIsY0FBY1gsb0VBQWNBO0lBQ2xDLE1BQU0sRUFBRVksY0FBYyxFQUFFLEdBQUdiLDZEQUFhQTtJQUV4QyxNQUFNLEVBQ0ZjLE9BQU8sRUFDUEMsWUFBWSxFQUNaQyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxFQUNyQkMsUUFBUSxFQUNYLEdBQUdyQix3REFBT0EsQ0FBQztRQUNSRCxhQUFhQSwwREFBQUE7UUFDYnVCLE1BQU07UUFDTkMsVUFBVTFCLG9FQUFXQSxDQUFDQyxpREFBTUE7SUFDaEM7SUFFQSxNQUFNMEIsV0FBVyxPQUFPQztRQUNwQmIsV0FBVztRQUNYSSxlQUFlVSxRQUFRLENBQUNELE1BQ25CRSxJQUFJLENBQUM7Z0JBQUMsRUFBRUYsSUFBSSxFQUFFO1lBQ1hHLFFBQVFDLEdBQUcsQ0FBQ0o7WUFDWlYsWUFBWWUsZUFBZSxDQUFDO2dCQUN4QkMsU0FBU047WUFDYjtZQUNBaEI7UUFDSixHQUNDdUIsS0FBSyxDQUFDQyxDQUFBQTtZQUNIbEIsWUFBWW1CLGFBQWEsQ0FBQ0QsTUFBTUUsUUFBUSxDQUFDVixJQUFJO1FBQ2pEO1FBRUpiLFdBQVc7UUFDWEUsUUFBUTtJQUNaO0lBRUEsTUFBTXNCLGVBQWU7UUFDakIsSUFBSTVCLFdBQVU7WUFDVk4sb0ZBQWdCQSxDQUFDbUIsVUFBVWYsNkVBQWFBLENBQUNFO1FBQzdDO0lBQ0o7SUFFQSxNQUFNNkIscUJBQXFCLE9BQU9DO1FBQzlCLElBQUk7WUFDQSxNQUFNSCxXQUFXLE1BQU1sQyxpREFBUyxDQUM1Qiw0QkFBaUMsT0FBTHFDLE1BQUs7WUFFckMsTUFBTUUsUUFBUTtnQkFDVkMsTUFBTU4sU0FBU1YsSUFBSSxDQUFDaUIsVUFBVTtnQkFDOUJDLE9BQU9SLFNBQVNWLElBQUksQ0FBQ21CLEVBQUU7WUFDM0I7WUFDQTFDLG9GQUFnQkEsQ0FBQ21CLFVBQVVtQjtRQUMvQixFQUFFLE9BQU9QLE9BQU8sQ0FBQztJQUNyQjtJQUVBdEMsZ0RBQVNBLENBQUM7UUFDTnlDO0lBQ0osR0FBRztRQUFDNUI7S0FBVTtJQUVkb0IsUUFBUUMsR0FBRyxDQUFDckI7SUFFWixPQUFPO1FBQ0hpQixNQUFNO1lBQUVkO1lBQVNFO1lBQU1JO1lBQVNHO1lBQVFWO1FBQWlCO1FBQ3pEbUMsU0FBUztZQUNML0I7WUFDQVU7WUFDQU47WUFDQW1CO1FBQ0o7SUFDSjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZXMvZGFzaGJvYXJkL3NldHRpbmdzL0Zvcm1zL0Zvcm1zLmxvZ2ljLnRzPzdlZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCc7XHJcbmltcG9ydCB7IHNjaGVtYSwgZGVmYXVsdFZhbHVlcyB9IGZyb20gJy4vRm9ybXMuc2NoZW1lJztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGNvbmZpZ3VyZVVzZUZvcm0gfSBmcm9tICdzcmMvdXRpbHMvZm9ybXMvY29uZmlndXJlLXVzZS1mb3JtJztcclxuaW1wb3J0IHsgdXNlUmVwb3NpdG9yeSB9IGZyb20gJ3NyYy9yZXBvc2l0b3J5JztcclxuaW1wb3J0IHVzZURpYWxvZ0FsZXJ0IGZyb20gJ3NyYy9ob29rcy91c2VEaWFsb2dBbGVydCc7XHJcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSAnc3JjL2NvbnRleHQvVXNlci9Vc2VyLmNvbnRleHQnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnc3JjL3R5cGVzL3VzZXJzL3VzZXJ0LnR5cGVzJztcclxuaW1wb3J0IHsgZmxhdHRlbk9iamVjdCB9IGZyb20gJ3NyYy91dGlscy9mb3Jtcy9mbGF0dGVuLW9iamVjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTG9naWMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJEYXRhcywgcmVmcmVzaFVzZXJEYXRhcywgbG9hZGluZ1VzZXJEYXRhcyB9ID0gdXNlVXNlckNvbnRleHQoKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkaWFsb2dBbGVydCA9IHVzZURpYWxvZ0FsZXJ0KCk7XHJcbiAgICBjb25zdCB7IHVzZXJSZXBvc2l0b3J5IH0gPSB1c2VSZXBvc2l0b3J5KCk7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGNvbnRyb2wsXHJcbiAgICAgICAgaGFuZGxlU3VibWl0LFxyXG4gICAgICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICAgICAgICBzZXRWYWx1ZSxcclxuICAgIH0gPSB1c2VGb3JtKHtcclxuICAgICAgICBkZWZhdWx0VmFsdWVzLFxyXG4gICAgICAgIG1vZGU6ICdvblN1Ym1pdCcsXHJcbiAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhOiBVc2VyKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICB1c2VyUmVwb3NpdG9yeS51cGRhdGVNZShkYXRhKVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nQWxlcnQucmVzcG9uc2VTdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoVXNlckRhdGFzKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2dBbGVydC5yZXNwb25zZUVycm9yKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgc2V0RWRpdChmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldFVzZXJEYXRhcyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodXNlckRhdGFzKXtcclxuICAgICAgICAgICAgY29uZmlndXJlVXNlRm9ybShzZXRWYWx1ZSwgZmxhdHRlbk9iamVjdCh1c2VyRGF0YXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFVzZXJBZGRyZXNzSW5mbyA9IGFzeW5jIChjb2RlOiBudW1iZXIpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgICAgICAgIGBodHRwczovL3ZpYWNlcC5jb20uYnIvd3MvJHtjb2RlfS9qc29uL2BcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YXMgPSB7XHJcbiAgICAgICAgICAgICAgICBjaXR5OiByZXNwb25zZS5kYXRhLmxvY2FsaWRhZGUsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogcmVzcG9uc2UuZGF0YS51ZixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uZmlndXJlVXNlRm9ybShzZXRWYWx1ZSwgZGF0YXMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRVc2VyRGF0YXMoKTtcclxuICAgIH0sIFt1c2VyRGF0YXNdKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyRGF0YXMpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YTogeyBsb2FkaW5nLCBlZGl0LCBjb250cm9sLCBlcnJvcnMsIGxvYWRpbmdVc2VyRGF0YXMgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIHNldEVkaXQsXHJcbiAgICAgICAgICAgIG9uU3VibWl0LFxyXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgIGdldFVzZXJBZGRyZXNzSW5mbyxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwieXVwUmVzb2x2ZXIiLCJzY2hlbWEiLCJkZWZhdWx0VmFsdWVzIiwidXNlRm9ybSIsImF4aW9zIiwiY29uZmlndXJlVXNlRm9ybSIsInVzZVJlcG9zaXRvcnkiLCJ1c2VEaWFsb2dBbGVydCIsInVzZVVzZXJDb250ZXh0IiwiZmxhdHRlbk9iamVjdCIsInVzZUxvZ2ljIiwidXNlckRhdGFzIiwicmVmcmVzaFVzZXJEYXRhcyIsImxvYWRpbmdVc2VyRGF0YXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVkaXQiLCJzZXRFZGl0IiwiZGlhbG9nQWxlcnQiLCJ1c2VyUmVwb3NpdG9yeSIsImNvbnRyb2wiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJzZXRWYWx1ZSIsIm1vZGUiLCJyZXNvbHZlciIsIm9uU3VibWl0IiwiZGF0YSIsInVwZGF0ZU1lIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZVN1Y2Nlc3MiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlRXJyb3IiLCJyZXNwb25zZSIsInNldFVzZXJEYXRhcyIsImdldFVzZXJBZGRyZXNzSW5mbyIsImNvZGUiLCJnZXQiLCJkYXRhcyIsImNpdHkiLCJsb2NhbGlkYWRlIiwic3RhdGUiLCJ1ZiIsIm1ldGhvZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pages/dashboard/settings/Forms/Forms.logic.ts\n"));

/***/ })

});