"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/utils/auth/verify-token-auth.ts":
/*!*********************************************!*\
  !*** ./src/utils/auth/verify-token-auth.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   verifyTokenAuth: () => (/* binding */ verifyTokenAuth)\n/* harmony export */ });\nconst verifyTokenAuth = async (token)=>{\n    return await fetch(new URL(\"http://localhost:4100\" + \"/users/\").href, {\n        method: \"GET\",\n        headers: {\n            Authorization: \"Bearer \" + String(token),\n            \"Content-Type\": \"application/json\"\n        }\n    }).then(async (response)=>{\n        if (!response.ok) {\n            return false;\n        }\n        return true;\n    }).catch(async ()=>{\n        return false;\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL3V0aWxzL2F1dGgvdmVyaWZ5LXRva2VuLWF1dGgudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGtCQUFrQixPQUFPQztJQUVsQyxPQUFPLE1BQU1DLE1BQ1QsSUFBSUMsSUFBSUMsdUJBQW9DLEdBQUksV0FBV0csSUFBSSxFQUMvRDtRQUNJQyxRQUFRO1FBQ1JDLFNBQVM7WUFDTEMsZUFBZSxZQUFZQyxPQUFPVjtZQUNsQyxnQkFBZ0I7UUFDcEI7SUFDSixHQUVDVyxJQUFJLENBQUMsT0FBTUM7UUFDUixJQUFJLENBQUNBLFNBQVNDLEVBQUUsRUFBRTtZQUNkLE9BQU87UUFDWDtRQUVBLE9BQU87SUFDWCxHQUNDQyxLQUFLLENBQUM7UUFDSCxPQUFPO0lBQ1g7QUFDUixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9hdXRoL3ZlcmlmeS10b2tlbi1hdXRoLnRzPzE3NDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHZlcmlmeVRva2VuQXV0aCA9IGFzeW5jICh0b2tlbjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKFxyXG4gICAgICAgIG5ldyBVUkwocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMISArICcvdXNlcnMvJykuaHJlZixcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIFN0cmluZyh0b2tlbiksXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIClcclxuICAgICAgICAudGhlbihhc3luYyByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUb2tlbkF1dGgiLCJ0b2tlbiIsImZldGNoIiwiVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCIsImhyZWYiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIlN0cmluZyIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiY2F0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/utils/auth/verify-token-auth.ts\n");

/***/ })

});