"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/aprender",{

/***/ "./src/components/Materials/Chat/Chatbot.comp.tsx":
/*!********************************************************!*\
  !*** ./src/components/Materials/Chat/Chatbot.comp.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatbotComp: function() { return /* binding */ ChatbotComp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatbot_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatbot.style */ \"./src/components/Materials/Chat/Chatbot.style.ts\");\n/* harmony import */ var _Chatbot_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chatbot.logic */ \"./src/components/Materials/Chat/Chatbot.logic.ts\");\n/* harmony import */ var react_simple_chatbot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-simple-chatbot */ \"./node_modules/react-simple-chatbot/dist/react-simple-chatbot.js\");\n/* harmony import */ var react_simple_chatbot__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_simple_chatbot__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Popover */ \"./node_modules/@mui/material/Popover/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"__barrel_optimize__?names=Box!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var src_context_User_User_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/context/User/User.context */ \"./src/context/User/User.context.tsx\");\n/* eslint-disable react/display-name */ // Next\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n// Styles\n\n// Logic\n\n// Chatbot\n\n// Components\n\n\n// Icons\n\n\nfunction ChatbotComp() {\n    var _userDatas_utilsInfo;\n    _s();\n    const { userDatas } = (0,src_context_User_User_context__WEBPACK_IMPORTED_MODULE_5__.useUserContext)();\n    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = ()=>{\n        setAnchorEl(null);\n    };\n    const open = Boolean(anchorEl);\n    const id = open ? \"simple-popover\" : undefined;\n    const steps = [\n        {\n            id: \"1\",\n            message: \"Ol\\xe1! Qual a sua d\\xfavida?\",\n            trigger: \"2\",\n            avatar: \"/images/chatbot/chatbot-avatar.jpeg\"\n        },\n        {\n            id: \"2\",\n            user: true,\n            trigger: \"3\"\n        },\n        {\n            id: \"3\",\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Response, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Materials\\\\Chat\\\\Chatbot.comp.tsx\",\n                lineNumber: 52,\n                columnNumber: 24\n            }, this),\n            waitAction: true,\n            trigger: \"4\"\n        },\n        {\n            id: \"4\",\n            message: \"Conseguimos responder sua pergunta?\",\n            trigger: \"5\",\n            avatar: \"/images/chatbot/chatbot-avatar.jpeg\"\n        },\n        {\n            id: \"5\",\n            component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Options, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Materials\\\\Chat\\\\Chatbot.comp.tsx\",\n                lineNumber: 64,\n                columnNumber: 24\n            }, this),\n            asMessage: true,\n            avatar: \"/images/chatbot/chatbot-avatar.jpeg\"\n        },\n        {\n            id: \"6\",\n            message: \"Obrigado pela avalia\\xe7\\xe3o! Qual outra d\\xfavida voc\\xea tem?\",\n            trigger: \"2\",\n            avatar: \"/images/chatbot/chatbot-avatar.jpeg\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatbot_style__WEBPACK_IMPORTED_MODULE_2__.ChatContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatbot_style__WEBPACK_IMPORTED_MODULE_2__.BtnOpenChatbot, {\n                \"aria-describedby\": id,\n                onClick: handleClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Materials\\\\Chat\\\\Chatbot.comp.tsx\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Popover__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                id: id,\n                open: open,\n                anchorEl: anchorEl,\n                onClose: handleClose,\n                anchorOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"right\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_simple_chatbot__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    headerTitle: \"Dra. Care\",\n                    enableSmoothScroll: true,\n                    placeholder: \"Pergunte algo\",\n                    userAvatar: userDatas === null || userDatas === void 0 ? void 0 : (_userDatas_utilsInfo = userDatas.utilsInfo) === null || _userDatas_utilsInfo === void 0 ? void 0 : _userDatas_utilsInfo.avatar,\n                    steps: steps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Materials\\\\Chat\\\\Chatbot.comp.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Materials\\\\Chat\\\\Chatbot.comp.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Materials\\\\Chat\\\\Chatbot.comp.tsx\",\n        lineNumber: 77,\n        columnNumber: 9\n    }, this);\n}\n_s(ChatbotComp, \"dm6qEJyKydLRW731tuE+GP6tQH4=\", false, function() {\n    return [\n        src_context_User_User_context__WEBPACK_IMPORTED_MODULE_5__.useUserContext\n    ];\n});\n_c = ChatbotComp;\nconst Response = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_s1((props)=>{\n    _s1();\n    const { methods } = (0,_Chatbot_logic__WEBPACK_IMPORTED_MODULE_3__.useLogic)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { steps } = props;\n        const search = steps[2].message;\n        searchResponse(search);\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n    }, []);\n    const triggerNext = (step)=>{\n        props.triggerNextStep({\n            value: step,\n            trigger: step\n        });\n    };\n    const searchResponse = async (value)=>{\n        methods.handleSubmit(value).then((data)=>{\n            console.log(data);\n            if (data !== null && data !== undefined) {\n                setLoading(false);\n                setResult(data);\n                triggerNext(\"4\");\n            } else {\n                setHasError(true);\n                setLoading(false);\n                setResult(\"Erro ao encontrar uma resposta, pergunte !\");\n                triggerNext(\"2\");\n            }\n        }).catch(()=>{\n            setHasError(true);\n            setLoading(false);\n            setResult(\"Erro ao encontrar uma resposta, pesquise por outra resposta !\");\n            triggerNext(\"2\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        fontSize: \"0.8rem\",\n        color: hasError ? \"red\" : \"#7b7b7b\",\n        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_simple_chatbot__WEBPACK_IMPORTED_MODULE_4__.Loading, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Materials\\\\Chat\\\\Chatbot.comp.tsx\",\n            lineNumber: 151,\n            columnNumber: 24\n        }, undefined) : result\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Materials\\\\Chat\\\\Chatbot.comp.tsx\",\n        lineNumber: 150,\n        columnNumber: 9\n    }, undefined);\n}, \"3BtXKphs2SMCqP+6N7LkMAhmKF0=\", false, function() {\n    return [\n        _Chatbot_logic__WEBPACK_IMPORTED_MODULE_3__.useLogic\n    ];\n}));\n_c1 = Response;\nconst Options = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(_s2((props)=>{\n    _s2();\n    const { methods } = (0,_Chatbot_logic__WEBPACK_IMPORTED_MODULE_3__.useLogic)();\n    const [remove, setRemove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userResponse, setUserReponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"none\");\n    const triggerNext = ()=>{\n        props.triggerNextStep({\n            value: \"6\",\n            trigger: \"6\"\n        });\n        setRemove(true);\n    };\n    const handleCreateNewQuestion = ()=>{\n        const { steps } = props;\n        const search = steps[2].message;\n        methods.handleCreateNewQuestion(search);\n        setUserReponse(\"no\");\n        setRemove(true);\n        triggerNext();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        display: \"flex\",\n        gap: 3,\n        sx: {\n            pointerEvents: \"\".concat(remove ? \"none\" : \"auto\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    display: \"\".concat(userResponse === \"no\" ? \"none\" : \"flex\")\n                },\n                onClick: ()=>{\n                    triggerNext();\n                    setUserReponse(\"yes\");\n                },\n                children: \"Sim\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Materials\\\\Chat\\\\Chatbot.comp.tsx\",\n                lineNumber: 184,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    display: \"\".concat(userResponse === \"yes\" ? \"none\" : \"flex\")\n                },\n                onClick: handleCreateNewQuestion,\n                children: \"N\\xe3o\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Materials\\\\Chat\\\\Chatbot.comp.tsx\",\n                lineNumber: 194,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\Programa\\xe7\\xe3o\\\\Projetos\\\\MindCare\\\\frontend\\\\src\\\\components\\\\Materials\\\\Chat\\\\Chatbot.comp.tsx\",\n        lineNumber: 179,\n        columnNumber: 9\n    }, undefined);\n}, \"xwKATMGszV0Pig4oNMo77mSW8g0=\", false, function() {\n    return [\n        _Chatbot_logic__WEBPACK_IMPORTED_MODULE_3__.useLogic\n    ];\n}));\n_c2 = Options;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatbotComp\");\n$RefreshReg$(_c1, \"Response\");\n$RefreshReg$(_c2, \"Options\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXRlcmlhbHMvQ2hhdC9DaGF0Ym90LmNvbXAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBcUMsR0FDckMsT0FBTzs7O0FBQzJDO0FBRWxELFNBQVM7QUFDNEI7QUFFckMsUUFBUTtBQUNtQztBQUUzQyxVQUFVO0FBQzhDO0FBRXhELGFBQWE7QUFDK0I7QUFDTTtBQUVsRCxRQUFRO0FBQzRCO0FBQzJCO0FBRXhELFNBQVNXO1FBeUVnQkM7O0lBeEU1QixNQUFNLEVBQUVBLFNBQVMsRUFBRSxHQUFHRiw2RUFBY0E7SUFFcEMsTUFBTSxDQUFDRyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUEyQjtJQUVuRSxNQUFNYSxjQUFjLENBQUNDO1FBQ2pCRixZQUFZRSxNQUFNQyxhQUFhO0lBQ25DO0lBRUEsTUFBTUMsY0FBYztRQUNoQkosWUFBWTtJQUNoQjtJQUVBLE1BQU1LLE9BQU9DLFFBQVFQO0lBQ3JCLE1BQU1RLEtBQUtGLE9BQU8sbUJBQW1CRztJQUVyQyxNQUFNQyxRQUFRO1FBQ1Y7WUFDSUYsSUFBSTtZQUNKRyxTQUFTO1lBQ1RDLFNBQVM7WUFDVEMsUUFBUTtRQUNaO1FBQ0E7WUFDSUwsSUFBSTtZQUNKTSxNQUFNO1lBQ05GLFNBQVM7UUFDYjtRQUNBO1lBQ0lKLElBQUk7WUFDSk8seUJBQVcsOERBQUNDOzs7OztZQUNaQyxZQUFZO1lBQ1pMLFNBQVM7UUFDYjtRQUNBO1lBQ0lKLElBQUk7WUFDSkcsU0FBUztZQUNUQyxTQUFTO1lBQ1RDLFFBQVE7UUFDWjtRQUNBO1lBQ0lMLElBQUk7WUFDSk8seUJBQVcsOERBQUNHOzs7OztZQUNaQyxXQUFXO1lBQ1hOLFFBQVE7UUFDWjtRQUNBO1lBQ0lMLElBQUk7WUFDSkcsU0FBUztZQUNUQyxTQUFTO1lBQ1RDLFFBQVE7UUFDWjtLQUNIO0lBRUQscUJBQ0ksOERBQUN2Qix5REFBZTs7MEJBQ1osOERBQUNBLDBEQUFnQjtnQkFBQ2dDLG9CQUFrQmQ7Z0JB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UyxHQUEyQyxPQUF4Q0gsaUJBQWlCLE9BQU8sU0FBUztnQkFBUztnQkFDL0RsQyxTQUFTO29CQUNMb0I7b0JBQ0FlLGVBQWU7Z0JBQ25COzBCQUNIOzs7Ozs7MEJBSUQsOERBQUNNO2dCQUNHQyxPQUFPO29CQUFFTCxTQUFTLEdBQTRDLE9BQXpDSCxpQkFBaUIsUUFBUSxTQUFTO2dCQUFTO2dCQUNoRWxDLFNBQVNvQzswQkFDWjs7Ozs7Ozs7Ozs7O0FBS2I7O1FBN0N3QnBFLG9EQUFRQTs7O01BRDFCMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWF0ZXJpYWxzL0NoYXQvQ2hhdGJvdC5jb21wLnRzeD9iZTUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2Rpc3BsYXktbmFtZSAqL1xyXG4vLyBOZXh0XHJcbmltcG9ydCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBTdHlsZXNcclxuaW1wb3J0ICogYXMgUyBmcm9tICcuL0NoYXRib3Quc3R5bGUnO1xyXG5cclxuLy8gTG9naWNcclxuaW1wb3J0IHsgdXNlTG9naWMgfSBmcm9tICcuL0NoYXRib3QubG9naWMnO1xyXG5cclxuLy8gQ2hhdGJvdFxyXG5pbXBvcnQgQ2hhdEJvdCwgeyBMb2FkaW5nIH0gZnJvbSAncmVhY3Qtc2ltcGxlLWNoYXRib3QnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgUG9wb3ZlciBmcm9tICdAbXVpL21hdGVyaWFsL1BvcG92ZXInO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5cclxuLy8gSWNvbnNcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZVVzZXJDb250ZXh0IH0gZnJvbSAnc3JjL2NvbnRleHQvVXNlci9Vc2VyLmNvbnRleHQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYXRib3RDb21wKCkge1xyXG4gICAgY29uc3QgeyB1c2VyRGF0YXMgfSA9IHVzZVVzZXJDb250ZXh0KCk7XHJcblxyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSB1c2VTdGF0ZTxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gICAgY29uc3QgaWQgPSBvcGVuID8gJ3NpbXBsZS1wb3BvdmVyJyA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICBjb25zdCBzdGVwcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdPbMOhISBRdWFsIGEgc3VhIGTDunZpZGE/JyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJzInLFxyXG4gICAgICAgICAgICBhdmF0YXI6ICcvaW1hZ2VzL2NoYXRib3QvY2hhdGJvdC1hdmF0YXIuanBlZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnMicsXHJcbiAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICczJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICczJyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiA8UmVzcG9uc2UgLz4sXHJcbiAgICAgICAgICAgIHdhaXRBY3Rpb246IHRydWUsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICc0JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICc0JyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0NvbnNlZ3VpbW9zIHJlc3BvbmRlciBzdWEgcGVyZ3VudGE/JyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJzUnLFxyXG4gICAgICAgICAgICBhdmF0YXI6ICcvaW1hZ2VzL2NoYXRib3QvY2hhdGJvdC1hdmF0YXIuanBlZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnNScsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogPE9wdGlvbnMgLz4sXHJcbiAgICAgICAgICAgIGFzTWVzc2FnZTogdHJ1ZSxcclxuICAgICAgICAgICAgYXZhdGFyOiAnL2ltYWdlcy9jaGF0Ym90L2NoYXRib3QtYXZhdGFyLmpwZWcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJzYnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnT2JyaWdhZG8gcGVsYSBhdmFsaWHDp8OjbyEgUXVhbCBvdXRyYSBkw7p2aWRhIHZvY8OqIHRlbT8nLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnMicsXHJcbiAgICAgICAgICAgIGF2YXRhcjogJy9pbWFnZXMvY2hhdGJvdC9jaGF0Ym90LWF2YXRhci5qcGVnJyxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTLkNoYXRDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxTLkJ0bk9wZW5DaGF0Ym90IGFyaWEtZGVzY3JpYmVkYnk9e2lkfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcblxyXG4gICAgICAgICAgICA8L1MuQnRuT3BlbkNoYXRib3Q+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDaGF0Qm90XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyVGl0bGU9eydEcmEuIENhcmUnfVxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVNtb290aFNjcm9sbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBlcmd1bnRlIGFsZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJBdmF0YXI9e3VzZXJEYXRhcz8udXRpbHNJbmZvPy5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcHM9e3N0ZXBzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgIDwvUy5DaGF0Q29udGFpbmVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgUmVzcG9uc2UgPSBtZW1vKChwcm9wczogYW55KSA9PiB7XHJcbiAgICBjb25zdCB7IG1ldGhvZHMgfSA9IHVzZUxvZ2ljKCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtoYXNFcnJvciwgc2V0SGFzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzdGVwcyB9ID0gcHJvcHM7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gc3RlcHNbMl0ubWVzc2FnZTtcclxuXHJcbiAgICAgICAgc2VhcmNoUmVzcG9uc2Uoc2VhcmNoKTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCB0cmlnZ2VyTmV4dCA9IChzdGVwOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBwcm9wcy50cmlnZ2VyTmV4dFN0ZXAoeyB2YWx1ZTogc3RlcCwgdHJpZ2dlcjogc3RlcCB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoUmVzcG9uc2UgPSBhc3luYyAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIG1ldGhvZHNcclxuICAgICAgICAgICAgLmhhbmRsZVN1Ym1pdCh2YWx1ZSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlck5leHQoJzQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFzRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnRXJybyBhbyBlbmNvbnRyYXIgdW1hIHJlc3Bvc3RhLCBwZXJndW50ZSAhJ1xyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlck5leHQoJzInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEhhc0Vycm9yKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQoXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Vycm8gYW8gZW5jb250cmFyIHVtYSByZXNwb3N0YSwgcGVzcXVpc2UgcG9yIG91dHJhIHJlc3Bvc3RhICEnXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlck5leHQoJzInKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFR5cG9ncmFwaHkgZm9udFNpemU9eycwLjhyZW0nfSBjb2xvcj17aGFzRXJyb3IgPyAncmVkJyA6ICcjN2I3YjdiJ30+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gPExvYWRpbmcgLz4gOiByZXN1bHR9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5jb25zdCBPcHRpb25zID0gbWVtbygocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBtZXRob2RzIH0gPSB1c2VMb2dpYygpO1xyXG4gICAgY29uc3QgW3JlbW92ZSwgc2V0UmVtb3ZlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VyUmVzcG9uc2UsIHNldFVzZXJSZXBvbnNlXSA9IHVzZVN0YXRlPCd5ZXMnIHwgJ25vJyB8ICdub25lJz4oXHJcbiAgICAgICAgJ25vbmUnXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHRyaWdnZXJOZXh0ID0gKCkgPT4ge1xyXG4gICAgICAgIHByb3BzLnRyaWdnZXJOZXh0U3RlcCh7IHZhbHVlOiAnNicsIHRyaWdnZXI6ICc2JyB9KTtcclxuICAgICAgICBzZXRSZW1vdmUodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNyZWF0ZU5ld1F1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc3RlcHMgfSA9IHByb3BzO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IHN0ZXBzWzJdLm1lc3NhZ2U7XHJcblxyXG4gICAgICAgIG1ldGhvZHMuaGFuZGxlQ3JlYXRlTmV3UXVlc3Rpb24oc2VhcmNoKTtcclxuICAgICAgICBzZXRVc2VyUmVwb25zZSgnbm8nKTtcclxuICAgICAgICBzZXRSZW1vdmUodHJ1ZSk7XHJcbiAgICAgICAgdHJpZ2dlck5leHQoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGRpc3BsYXk9eydmbGV4J31cclxuICAgICAgICAgICAgZ2FwPXszfVxyXG4gICAgICAgICAgICBzeD17eyBwb2ludGVyRXZlbnRzOiBgJHtyZW1vdmUgPyAnbm9uZScgOiAnYXV0byd9YCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogYCR7dXNlclJlc3BvbnNlID09PSAnbm8nID8gJ25vbmUnIDogJ2ZsZXgnfWAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyTmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJSZXBvbnNlKCd5ZXMnKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICBTaW1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBgJHt1c2VyUmVzcG9uc2UgPT09ICd5ZXMnID8gJ25vbmUnIDogJ2ZsZXgnfWAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZU5ld1F1ZXN0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgTsOjb1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsibWVtbyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUyIsInVzZUxvZ2ljIiwiQ2hhdEJvdCIsIkxvYWRpbmciLCJQb3BvdmVyIiwiVHlwb2dyYXBoeSIsIkJveCIsInVzZVVzZXJDb250ZXh0IiwiQ2hhdGJvdENvbXAiLCJ1c2VyRGF0YXMiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsIm9wZW4iLCJCb29sZWFuIiwiaWQiLCJ1bmRlZmluZWQiLCJzdGVwcyIsIm1lc3NhZ2UiLCJ0cmlnZ2VyIiwiYXZhdGFyIiwidXNlciIsImNvbXBvbmVudCIsIlJlc3BvbnNlIiwid2FpdEFjdGlvbiIsIk9wdGlvbnMiLCJhc01lc3NhZ2UiLCJDaGF0Q29udGFpbmVyIiwiQnRuT3BlbkNoYXRib3QiLCJhcmlhLWRlc2NyaWJlZGJ5Iiwib25DbGljayIsIm9uQ2xvc2UiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJoZWFkZXJUaXRsZSIsImVuYWJsZVNtb290aFNjcm9sbCIsInBsYWNlaG9sZGVyIiwidXNlckF2YXRhciIsInV0aWxzSW5mbyIsInByb3BzIiwibWV0aG9kcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiaGFzRXJyb3IiLCJzZXRIYXNFcnJvciIsInNlYXJjaCIsInNlYXJjaFJlc3BvbnNlIiwidHJpZ2dlck5leHQiLCJzdGVwIiwidHJpZ2dlck5leHRTdGVwIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImZvbnRTaXplIiwiY29sb3IiLCJyZW1vdmUiLCJzZXRSZW1vdmUiLCJ1c2VyUmVzcG9uc2UiLCJzZXRVc2VyUmVwb25zZSIsImhhbmRsZUNyZWF0ZU5ld1F1ZXN0aW9uIiwiZGlzcGxheSIsImdhcCIsInN4IiwicG9pbnRlckV2ZW50cyIsImJ1dHRvbiIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Materials/Chat/Chatbot.comp.tsx\n"));

/***/ })

});