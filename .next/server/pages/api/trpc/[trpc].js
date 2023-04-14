"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/trpc/[trpc]";
exports.ids = ["pages/api/trpc/[trpc]"];
exports.modules = {

/***/ "@trpc/server":
/*!*******************************!*\
  !*** external "@trpc/server" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ "@trpc/server/adapters/next":
/*!*********************************************!*\
  !*** external "@trpc/server/adapters/next" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./pages/api/trpc/[trpc].ts":
/*!**********************************!*\
  !*** ./pages/api/trpc/[trpc].ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server/adapters/next */ \"@trpc/server/adapters/next\");\n/* harmony import */ var _server_routers_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server/routers/_app */ \"(api)/./server/routers/_app.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _server_routers_app__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _server_routers_app__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// export API handler\n// @see https://trpc.io/docs/api-handler\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler({\n    router: _server_routers_app__WEBPACK_IMPORTED_MODULE_1__.appRouter,\n    createContext: ()=>({})\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJwYy9bdHJwY10udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXVEO0FBQ0U7QUFFekQscUJBQXFCO0FBQ3JCLHdDQUF3QztBQUN4QyxpRUFBZUEsNEVBQTZCLENBQUM7SUFDM0NHLFFBQVFGLDBEQUFTQTtJQUNqQkcsZUFBZSxJQUFPLEVBQUM7QUFDekIsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9wYWdlcy9hcGkvdHJwYy9bdHJwY10udHM/MmU0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0cnBjTmV4dCBmcm9tICdAdHJwYy9zZXJ2ZXIvYWRhcHRlcnMvbmV4dCc7XG5pbXBvcnQgeyBhcHBSb3V0ZXIgfSBmcm9tICcuLi8uLi8uLi9zZXJ2ZXIvcm91dGVycy9fYXBwJztcblxuLy8gZXhwb3J0IEFQSSBoYW5kbGVyXG4vLyBAc2VlIGh0dHBzOi8vdHJwYy5pby9kb2NzL2FwaS1oYW5kbGVyXG5leHBvcnQgZGVmYXVsdCB0cnBjTmV4dC5jcmVhdGVOZXh0QXBpSGFuZGxlcih7XG4gIHJvdXRlcjogYXBwUm91dGVyLFxuICBjcmVhdGVDb250ZXh0OiAoKSA9PiAoe30pLFxufSk7Il0sIm5hbWVzIjpbInRycGNOZXh0IiwiYXBwUm91dGVyIiwiY3JlYXRlTmV4dEFwaUhhbmRsZXIiLCJyb3V0ZXIiLCJjcmVhdGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/trpc/[trpc].ts\n");

/***/ }),

/***/ "(api)/./server/routers/_app.ts":
/*!********************************!*\
  !*** ./server/routers/_app.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appRouter\": () => (/* binding */ appRouter)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var _trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trpc */ \"(api)/./server/trpc.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _trpc__WEBPACK_IMPORTED_MODULE_1__]);\n([zod__WEBPACK_IMPORTED_MODULE_0__, _trpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst appRouter = (0,_trpc__WEBPACK_IMPORTED_MODULE_1__.router)({\n    saveData: _trpc__WEBPACK_IMPORTED_MODULE_1__.procedure.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n        id: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),\n        new_url: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n        edited_text: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()\n    }).array()).mutation(async ({ input  })=>{\n        return input;\n    })\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2ZXIvcm91dGVycy9fYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QjtBQUNvQjtBQUdyQyxNQUFNRyxZQUFZRCw2Q0FBTUEsQ0FBQztJQUM1QkUsVUFBVUgsa0RBQ0osQ0FDSkQseUNBQVEsQ0FBQztRQUNQTyxJQUFJUCx5Q0FBUTtRQUNaUyxTQUFRVCx5Q0FBUTtRQUNoQlcsYUFBYVgseUNBQVE7SUFDdkIsR0FBR1ksS0FBSyxJQUVUQyxRQUFRLENBQUMsT0FBTyxFQUFFUixNQUFLLEVBQU8sR0FBSztRQUNsQyxPQUFPQTtJQUVUO0FBQ0osR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtYXBwLy4vc2VydmVyL3JvdXRlcnMvX2FwcC50cz9kZGI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHogfSBmcm9tICd6b2QnO1xuaW1wb3J0IHsgcHJvY2VkdXJlLCByb3V0ZXIgfSBmcm9tICcuLi90cnBjJztcblxuXG5leHBvcnQgY29uc3QgYXBwUm91dGVyID0gcm91dGVyKHtcbiAgICBzYXZlRGF0YTogcHJvY2VkdXJlXG4gICAgLmlucHV0KFxuICAgICAgei5vYmplY3Qoe1xuICAgICAgICBpZDogei5udW1iZXIoKSxcbiAgICAgICAgbmV3X3VybDp6LnN0cmluZygpLFxuICAgICAgICBlZGl0ZWRfdGV4dDogei5zdHJpbmcoKSxcbiAgICAgIH0pLmFycmF5KCksXG4gICAgKVxuICAgIC5tdXRhdGlvbihhc3luYyAoeyBpbnB1dCB9OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBpbnB1dDtcblxuICAgIH0pLFxufSk7XG5cbi8vIGV4cG9ydCB0eXBlIGRlZmluaXRpb24gb2YgQVBJXG5leHBvcnQgdHlwZSBBcHBSb3V0ZXIgPSB0eXBlb2YgYXBwUm91dGVyOyJdLCJuYW1lcyI6WyJ6IiwicHJvY2VkdXJlIiwicm91dGVyIiwiYXBwUm91dGVyIiwic2F2ZURhdGEiLCJpbnB1dCIsIm9iamVjdCIsImlkIiwibnVtYmVyIiwibmV3X3VybCIsInN0cmluZyIsImVkaXRlZF90ZXh0IiwiYXJyYXkiLCJtdXRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./server/routers/_app.ts\n");

/***/ }),

/***/ "(api)/./server/trpc.ts":
/*!************************!*\
  !*** ./server/trpc.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"procedure\": () => (/* binding */ procedure),\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server */ \"@trpc/server\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server__WEBPACK_IMPORTED_MODULE_0__]);\n_trpc_server__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// Avoid exporting the entire t-object\n// since it's not very descriptive.\n// For instance, the use of a t variable\n// is common in i18n libraries.\nconst t = _trpc_server__WEBPACK_IMPORTED_MODULE_0__.initTRPC.create();\n// Base router and procedure helpers\nconst router = t.router;\nconst procedure = t.procedure;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2ZXIvdHJwYy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFFeEMsc0NBQXNDO0FBQ3RDLG1DQUFtQztBQUNuQyx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CLE1BQU1DLElBQUlELHlEQUFlO0FBRXpCLG9DQUFvQztBQUM3QixNQUFNRyxTQUFTRixFQUFFRSxNQUFNLENBQUM7QUFDeEIsTUFBTUMsWUFBWUgsRUFBRUcsU0FBUyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1hcHAvLi9zZXJ2ZXIvdHJwYy50cz9jNjBjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRUUlBDIH0gZnJvbSAnQHRycGMvc2VydmVyJztcblxuLy8gQXZvaWQgZXhwb3J0aW5nIHRoZSBlbnRpcmUgdC1vYmplY3Rcbi8vIHNpbmNlIGl0J3Mgbm90IHZlcnkgZGVzY3JpcHRpdmUuXG4vLyBGb3IgaW5zdGFuY2UsIHRoZSB1c2Ugb2YgYSB0IHZhcmlhYmxlXG4vLyBpcyBjb21tb24gaW4gaTE4biBsaWJyYXJpZXMuXG5jb25zdCB0ID0gaW5pdFRSUEMuY3JlYXRlKCk7XG5cbi8vIEJhc2Ugcm91dGVyIGFuZCBwcm9jZWR1cmUgaGVscGVyc1xuZXhwb3J0IGNvbnN0IHJvdXRlciA9IHQucm91dGVyO1xuZXhwb3J0IGNvbnN0IHByb2NlZHVyZSA9IHQucHJvY2VkdXJlOyJdLCJuYW1lcyI6WyJpbml0VFJQQyIsInQiLCJjcmVhdGUiLCJyb3V0ZXIiLCJwcm9jZWR1cmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./server/trpc.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/trpc/[trpc].ts"));
module.exports = __webpack_exports__;

})();