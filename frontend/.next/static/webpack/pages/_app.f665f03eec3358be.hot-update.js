"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/User/User.context.tsx":
/*!*******************************************!*\
  !*** ./src/context/User/User.context.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserProvider: function() { return /* binding */ UserProvider; },\n/* harmony export */   useUserContext: function() { return /* binding */ useUserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _User_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User.types */ \"./src/context/User/User.types.ts\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var src_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/repository */ \"./src/repository/index.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_User_types__WEBPACK_IMPORTED_MODULE_2__.defaultContextData);\nconst UserProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [userDatas, setUserDatas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loadingUserDatas, setLoadinUserDatas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const { userRepository } = (0,src_repository__WEBPACK_IMPORTED_MODULE_4__.useRepository)();\n    const verifyCache = async ()=>{\n        const data = await js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"MindCareUserData\");\n        if (!data) {\n            await getUserInfo();\n        } else {\n            setUserDatas(JSON.parse(data));\n        }\n        await setUserAvatar();\n        etLoadinUserDatas(false);\n    };\n    const getUserInfo = async ()=>{\n        setLoadinUserDatas(true);\n        await userRepository.getMe().then((param)=>{\n            let { data } = param;\n            console.log(data);\n            js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].set(\"MindCareUserData\", JSON.stringify(data));\n            setUserDatas(data);\n        }).catch((e)=>{\n            console.log(e);\n            setUserDatas(null);\n        });\n        setLoadinUserDatas(false);\n    };\n    const setUserAvatar = async ()=>{\n        var _userDatas_utilsInfo;\n        const apiUrl = \"https://gender-api.com/get?name=\".concat(userDatas === null || userDatas === void 0 ? void 0 : (_userDatas_utilsInfo = userDatas.utilsInfo) === null || _userDatas_utilsInfo === void 0 ? void 0 : _userDatas_utilsInfo.avatar, \"&key=\").concat(\"b7c6daccf0c3bb4cd942932119cd7e7e6396f3f788d18607ae0d85be885c1c91\");\n        try {\n            const resposta = await fetch(apiUrl);\n            const dados = await resposta.json();\n            if (dados.gender) {\n                return setUserDatas((prev)=>{\n                    const prevDatas = {\n                        ...prev\n                    };\n                    if (prevDatas.utilsInfo) {\n                        prevDatas.utilsInfo.avatar = dados.gender === \"male\" ? \"/images/profiles/profile-man.webp\" : \"/images/profiles/profile-woman.webp\";\n                    }\n                    return prevDatas;\n                });\n            }\n        } catch (erro) {}\n    };\n    const refreshUserDatas = async ()=>{\n        await js_cookie__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(\"MindCareUserData\");\n        verifyCache();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        verifyCache();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            loadingUserDatas,\n            userDatas,\n            verifyCache,\n            refreshUserDatas\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\context\\\\User\\\\User.context.tsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, undefined);\n};\n_s(UserProvider, \"sVcLZ8K3E+dtyme3tk7NPAcc2nY=\", false, function() {\n    return [\n        src_repository__WEBPACK_IMPORTED_MODULE_4__.useRepository\n    ];\n});\n_c = UserProvider;\nconst useUserContext = ()=>{\n    _s1();\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n    const { loadingUserDatas, userDatas, verifyCache, refreshUserDatas } = context;\n    return {\n        loadingUserDatas,\n        userDatas,\n        verifyCache,\n        refreshUserDatas\n    };\n};\n_s1(useUserContext, \"b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=\");\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9Vc2VyL1VzZXIuY29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFNZTtBQUNtQztBQUNsQjtBQUNlO0FBRy9DLE1BQU1PLDRCQUFjUCxvREFBYUEsQ0FBQ0ksMkRBQWtCQTtBQU03QyxNQUFNSSxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFTOztJQUM1QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQWM7SUFDeEQsTUFBTSxDQUFDUyxrQkFBa0JDLG1CQUFtQixHQUFHViwrQ0FBUUEsQ0FBQztJQUN4RCxNQUFNLEVBQUVXLGNBQWMsRUFBRSxHQUFHUiw2REFBYUE7SUFFeEMsTUFBTVMsY0FBYztRQUNoQixNQUFNQyxPQUFPLE1BQU1YLHFEQUFXLENBQUNhLGtCQUFrQztRQUNqRSxJQUFJLENBQUNGLE1BQU07WUFDUCxNQUFNSztRQUNWLE9BQU87WUFDSFYsYUFBYVcsS0FBS0MsS0FBSyxDQUFDUDtRQUM1QjtRQUVBLE1BQU1RO1FBQ05DLGtCQUFrQjtJQUN0QjtJQUVBLE1BQU1KLGNBQWM7UUFDaEJSLG1CQUFtQjtRQUNuQixNQUFNQyxlQUNEWSxLQUFLLEdBQ0xDLElBQUksQ0FBQztnQkFBQyxFQUFFWCxJQUFJLEVBQUU7WUFDWFksUUFBUUMsR0FBRyxDQUFDYjtZQUNaWCxxREFBVyxDQUNQYSxrQkFBa0MsRUFDbENJLEtBQUtTLFNBQVMsQ0FBQ2Y7WUFFbkJMLGFBQWFLO1FBQ2pCLEdBQ0NnQixLQUFLLENBQUNDLENBQUFBO1lBQ0hMLFFBQVFDLEdBQUcsQ0FBQ0k7WUFDWnRCLGFBQWE7UUFDakI7UUFDSkUsbUJBQW1CO0lBQ3ZCO0lBRUEsTUFBTVcsZ0JBQWdCO1lBQ2dDZDtRQUFsRCxNQUFNd0IsU0FBUyxtQ0FBdUVoQixPQUFwQ1Isc0JBQUFBLGlDQUFBQSx1QkFBQUEsVUFBV3lCLFNBQVMsY0FBcEJ6QiwyQ0FBQUEscUJBQXNCMEIsTUFBTSxFQUFDLFNBQThDLE9BQXZDbEIsa0VBQXNDO1FBRTVILElBQUk7WUFDQSxNQUFNb0IsV0FBVyxNQUFNQyxNQUFNTDtZQUM3QixNQUFNTSxRQUFRLE1BQU1GLFNBQVNHLElBQUk7WUFFakMsSUFBSUQsTUFBTUUsTUFBTSxFQUFFO2dCQUNkLE9BQU8vQixhQUFhZ0MsQ0FBQUE7b0JBQ2hCLE1BQU1DLFlBQVk7d0JBQUUsR0FBR0QsSUFBSTtvQkFBQztvQkFFNUIsSUFBSUMsVUFBVVQsU0FBUyxFQUFFO3dCQUNyQlMsVUFBVVQsU0FBUyxDQUFDQyxNQUFNLEdBQ3RCSSxNQUFNRSxNQUFNLEtBQUssU0FDWCxzQ0FDQTtvQkFDZDtvQkFFQSxPQUFPRTtnQkFDWDtZQUNKO1FBQ0osRUFBRSxPQUFPQyxNQUFNLENBQUM7SUFDcEI7SUFFQSxNQUFNQyxtQkFBbUI7UUFDckIsTUFBTXpDLHdEQUFjLENBQUNhLGtCQUFrQztRQUN2REg7SUFDSjtJQUVBYixnREFBU0EsQ0FBQztRQUNOYTtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDUixZQUFZeUMsUUFBUTtRQUNqQkMsT0FBTztZQUNIckM7WUFDQUY7WUFDQUs7WUFDQStCO1FBQ0o7a0JBRUNyQzs7Ozs7O0FBR2IsRUFBRTtHQWpGV0Q7O1FBR2tCRix5REFBYUE7OztLQUgvQkU7QUFtRk4sTUFBTTBDLGlCQUFpQjs7SUFDMUIsTUFBTUMsVUFBVWxELGlEQUFVQSxDQUFDTTtJQUUzQixNQUFNLEVBQ0ZLLGdCQUFnQixFQUNoQkYsU0FBUyxFQUNUSyxXQUFXLEVBQ1grQixnQkFBZ0IsRUFDbkIsR0FBR0s7SUFFSixPQUFPO1FBQUV2QztRQUFrQkY7UUFBV0s7UUFBYStCO0lBQWlCO0FBQ3hFLEVBQUU7SUFYV0kiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvVXNlci9Vc2VyLmNvbnRleHQudHN4PzljOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIFJlYWN0Tm9kZSxcclxuICAgIGNyZWF0ZUNvbnRleHQsXHJcbiAgICB1c2VDb250ZXh0LFxyXG4gICAgdXNlRWZmZWN0LFxyXG4gICAgdXNlU3RhdGUsXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkZWZhdWx0Q29udGV4dERhdGEgfSBmcm9tICcuL1VzZXIudHlwZXMnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5pbXBvcnQgeyB1c2VSZXBvc2l0b3J5IH0gZnJvbSAnc3JjL3JlcG9zaXRvcnknO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnc3JjL3R5cGVzL3VzZXJzL3VzZXJ0LnR5cGVzJztcclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChkZWZhdWx0Q29udGV4dERhdGEpO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyRGF0YXMsIHNldFVzZXJEYXRhc10gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBbbG9hZGluZ1VzZXJEYXRhcywgc2V0TG9hZGluVXNlckRhdGFzXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgeyB1c2VyUmVwb3NpdG9yeSB9ID0gdXNlUmVwb3NpdG9yeSgpO1xyXG5cclxuICAgIGNvbnN0IHZlcmlmeUNhY2hlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBDb29raWVzLmdldChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VU0VSX0RBVEFTKTtcclxuICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgYXdhaXQgZ2V0VXNlckluZm8oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRVc2VyRGF0YXMoSlNPTi5wYXJzZShkYXRhKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBzZXRVc2VyQXZhdGFyKCk7XHJcbiAgICAgICAgZXRMb2FkaW5Vc2VyRGF0YXMoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRVc2VySW5mbyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5Vc2VyRGF0YXModHJ1ZSk7XHJcbiAgICAgICAgYXdhaXQgdXNlclJlcG9zaXRvcnlcclxuICAgICAgICAgICAgLmdldE1lKClcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VTRVJfREFUQVMsXHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyRGF0YXMoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlckRhdGFzKG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBzZXRMb2FkaW5Vc2VyRGF0YXMoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzZXRVc2VyQXZhdGFyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2dlbmRlci1hcGkuY29tL2dldD9uYW1lPSR7dXNlckRhdGFzPy51dGlsc0luZm8/LmF2YXRhcn0ma2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0VOREVSX0FQSV9LRVl9YDtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9zdGEgPSBhd2FpdCBmZXRjaChhcGlVcmwpO1xyXG4gICAgICAgICAgICBjb25zdCBkYWRvcyA9IGF3YWl0IHJlc3Bvc3RhLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYWRvcy5nZW5kZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRVc2VyRGF0YXMocHJldiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldkRhdGFzID0geyAuLi5wcmV2IH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmV2RGF0YXMudXRpbHNJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZEYXRhcy51dGlsc0luZm8uYXZhdGFyID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhZG9zLmdlbmRlciA9PT0gJ21hbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnL2ltYWdlcy9wcm9maWxlcy9wcm9maWxlLW1hbi53ZWJwJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJy9pbWFnZXMvcHJvZmlsZXMvcHJvZmlsZS13b21hbi53ZWJwJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2RGF0YXM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm8pIHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlZnJlc2hVc2VyRGF0YXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgQ29va2llcy5yZW1vdmUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVNFUl9EQVRBUyk7XHJcbiAgICAgICAgdmVyaWZ5Q2FjaGUoKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB2ZXJpZnlDYWNoZSgpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nVXNlckRhdGFzLFxyXG4gICAgICAgICAgICAgICAgdXNlckRhdGFzLFxyXG4gICAgICAgICAgICAgICAgdmVyaWZ5Q2FjaGUsXHJcbiAgICAgICAgICAgICAgICByZWZyZXNoVXNlckRhdGFzLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVzZXJDb250ZXh0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBsb2FkaW5nVXNlckRhdGFzLFxyXG4gICAgICAgIHVzZXJEYXRhcyxcclxuICAgICAgICB2ZXJpZnlDYWNoZSxcclxuICAgICAgICByZWZyZXNoVXNlckRhdGFzLFxyXG4gICAgfSA9IGNvbnRleHQ7XHJcblxyXG4gICAgcmV0dXJuIHsgbG9hZGluZ1VzZXJEYXRhcywgdXNlckRhdGFzLCB2ZXJpZnlDYWNoZSwgcmVmcmVzaFVzZXJEYXRhcyB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRlZmF1bHRDb250ZXh0RGF0YSIsIkNvb2tpZXMiLCJ1c2VSZXBvc2l0b3J5IiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXJEYXRhcyIsInNldFVzZXJEYXRhcyIsImxvYWRpbmdVc2VyRGF0YXMiLCJzZXRMb2FkaW5Vc2VyRGF0YXMiLCJ1c2VyUmVwb3NpdG9yeSIsInZlcmlmeUNhY2hlIiwiZGF0YSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VU0VSX0RBVEFTIiwiZ2V0VXNlckluZm8iLCJKU09OIiwicGFyc2UiLCJzZXRVc2VyQXZhdGFyIiwiZXRMb2FkaW5Vc2VyRGF0YXMiLCJnZXRNZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwic2V0Iiwic3RyaW5naWZ5IiwiY2F0Y2giLCJlIiwiYXBpVXJsIiwidXRpbHNJbmZvIiwiYXZhdGFyIiwiTkVYVF9QVUJMSUNfR0VOREVSX0FQSV9LRVkiLCJyZXNwb3N0YSIsImZldGNoIiwiZGFkb3MiLCJqc29uIiwiZ2VuZGVyIiwicHJldiIsInByZXZEYXRhcyIsImVycm8iLCJyZWZyZXNoVXNlckRhdGFzIiwicmVtb3ZlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVVzZXJDb250ZXh0IiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/User/User.context.tsx\n"));

/***/ })

});