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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   verifyTokenAuth: () => (/* binding */ verifyTokenAuth)\n/* harmony export */ });\nconst verifyTokenAuth = async (token)=>{\n    return await fetch(new URL(\"http://localhost:4100\" + \"/users/\").href, {\n        method: \"GET\",\n        headers: {\n            Authorization: \"Bearer \" + String(token),\n            \"Content-Type\": \"application/json\"\n        }\n    }).then(async (response)=>{\n        if (!response.ok) {\n            return false;\n        }\n        return true;\n    }).catch(async ()=>{\n        return false;\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL3V0aWxzL2F1dGgvdmVyaWZ5LXRva2VuLWF1dGgudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLGtCQUFrQixPQUFPQztJQUNsQyxPQUFPLE1BQU1DLE1BQ1QsSUFBSUMsSUFBSUMsdUJBQW9DLEdBQUksV0FBV0csSUFBSSxFQUMvRDtRQUNJQyxRQUFRO1FBQ1JDLFNBQVM7WUFDTEMsZUFBZSxZQUFZQyxPQUFPVjtZQUNsQyxnQkFBZ0I7UUFDcEI7SUFDSixHQUVDVyxJQUFJLENBQUMsT0FBTUM7UUFDUixJQUFJLENBQUNBLFNBQVNDLEVBQUUsRUFBRTtZQUNkLE9BQU87UUFDWDtRQUVBLE9BQU87SUFDWCxHQUNDQyxLQUFLLENBQUM7UUFDSCxPQUFPO0lBQ1g7QUFDUixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9hdXRoL3ZlcmlmeS10b2tlbi1hdXRoLnRzPzE3NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi9sb2dvdXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZlcmlmeVRva2VuQXV0aCA9IGFzeW5jICh0b2tlbjogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgbmV3IFVSTChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwhICsgJy91c2Vycy8nKS5ocmVmLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgU3RyaW5nKHRva2VuKSxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG4gICAgICAgIC50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxufTtcclxuIl0sIm5hbWVzIjpbInZlcmlmeVRva2VuQXV0aCIsInRva2VuIiwiZmV0Y2giLCJVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwiaHJlZiIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiU3RyaW5nIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJjYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/utils/auth/verify-token-auth.ts\n");

/***/ })

});