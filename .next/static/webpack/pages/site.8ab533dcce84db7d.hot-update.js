"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/site",{

/***/ "./components/site/RequestEdit.tsx":
/*!*****************************************!*\
  !*** ./components/site/RequestEdit.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst RequestEdit = (param)=>{\n    let { image , setOpen , setUpdatedImage  } = param;\n    _s();\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmitComment = ()=>{\n        console.log(comment, 444);\n        setUpdatedImage({\n            ...image,\n            edited_text: comment,\n            is_edited: true\n        });\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-w-1/2 flex items-start space-x-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"min-w-1/2 flex-1\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"comment\",\n                            className: \"sr-only\",\n                            children: \"Add your comment\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vahan/dev/nextjs-test-app/components/site/RequestEdit.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            rows: 3,\n                            name: \"comment\",\n                            value: comment,\n                            onChange: (e)=>setComment(e.target.value),\n                            id: \"comment\",\n                            className: \"block w-full resize-none border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:py-1.5 sm:text-sm sm:leading-6\",\n                            placeholder: \"Add your comment...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vahan/dev/nextjs-test-app/components/site/RequestEdit.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vahan/dev/nextjs-test-app/components/site/RequestEdit.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-shrink-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmitComment,\n                            type: \"submit\",\n                            className: \"inline-flex items-center rounded-md mt-2 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500\",\n                            children: \"Post\"\n                        }, void 0, false, {\n                            fileName: \"/Users/vahan/dev/nextjs-test-app/components/site/RequestEdit.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/components/site/RequestEdit.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/vahan/dev/nextjs-test-app/components/site/RequestEdit.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/vahan/dev/nextjs-test-app/components/site/RequestEdit.tsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vahan/dev/nextjs-test-app/components/site/RequestEdit.tsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, undefined);\n};\n_s(RequestEdit, \"vhAvzpEN661Y5K0yhbG0Td/NMg4=\");\n_c = RequestEdit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestEdit);\nvar _c;\n$RefreshReg$(_c, \"RequestEdit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpdGUvUmVxdWVzdEVkaXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFa0U7QUFTbEUsTUFBTUUsY0FBK0IsU0FBc0M7UUFBckMsRUFBQ0MsTUFBSyxFQUFFQyxRQUFPLEVBQUVDLGdCQUFlLEVBQUM7O0lBQ25FLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNTyxzQkFBc0IsSUFBSTtRQUM5QkMsUUFBUUMsR0FBRyxDQUFDSixTQUFTO1FBQ25CRCxnQkFBZ0I7WUFBQyxHQUFHRixLQUFLO1lBQUVRLGFBQWFMO1lBQVNNLFdBQVcsSUFBSTtRQUFDO1FBQ2pFUixRQUFRLEtBQUs7SUFDakI7SUFDRSxxQkFFSSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQU1DLFNBQVE7NEJBQVVGLFdBQVU7c0NBQVU7Ozs7OztzQ0FHN0MsOERBQUNHOzRCQUNDQyxNQUFNOzRCQUNOQyxNQUFLOzRCQUNMQyxPQUFPZDs0QkFDUGUsVUFBVSxDQUFDQyxJQUFJZixXQUFXZSxFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQ3hDSSxJQUFHOzRCQUNIVixXQUFVOzRCQUNWVyxhQUFZOzs7Ozs7Ozs7Ozs7OEJBS2hCLDhEQUFDWjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNZOzRCQUNEQyxTQUFTbkI7NEJBQ1BvQixNQUFLOzRCQUNMZCxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakI7R0F6Q01aO0tBQUFBO0FBMkNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2l0ZS9SZXF1ZXN0RWRpdC50c3g/Mjc0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbWFnZVR5cGUgfSBmcm9tICdAL3BhZ2VzL3NpdGUnXG5cbmltcG9ydCBSZWFjdCwgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xudHlwZSBQcm9wcyA9IHtcbiAgICBpbWFnZTogSW1hZ2VUeXBlLFxuICAgIHNldE9wZW46RGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+LFxuICAgIHNldFVwZGF0ZWRJbWFnZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248SW1hZ2VUeXBlIHwgbnVsbD4+XG5cblxuXG59XG5jb25zdCBSZXF1ZXN0RWRpdDogUmVhY3QuRkM8UHJvcHM+ID0gKHtpbWFnZSwgc2V0T3Blbiwgc2V0VXBkYXRlZEltYWdlfSk9PiB7XG4gICAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpXG5jb25zdCBoYW5kbGVTdWJtaXRDb21tZW50ID0gKCk9PntcbiAgY29uc29sZS5sb2coY29tbWVudCwgNDQ0KVxuICAgIHNldFVwZGF0ZWRJbWFnZSh7Li4uaW1hZ2UsIGVkaXRlZF90ZXh0OiBjb21tZW50LCBpc19lZGl0ZWQ6IHRydWUgfSlcbiAgICBzZXRPcGVuKGZhbHNlKVxufVxuICByZXR1cm4gKFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LTEvMiBmbGV4IGl0ZW1zLXN0YXJ0IHNwYWNlLXgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LTEvMiBmbGV4LTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgc2hhZG93LXNtIHJpbmctMSByaW5nLWluc2V0IHJpbmctZ3JheS0zMDAgZm9jdXMtd2l0aGluOnJpbmctMiBmb2N1cy13aXRoaW46cmluZy1pbmRpZ28tNjAwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tbWVudFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5cbiAgICAgICAgICAgICAgICBBZGQgeW91ciBjb21tZW50XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21tZW50fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIGlkPVwiY29tbWVudFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHJlc2l6ZS1ub25lIGJvcmRlci0wIGJnLXRyYW5zcGFyZW50IHAtMiB0ZXh0LWdyYXktOTAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0wIHNtOnB5LTEuNSBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNlwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciBjb21tZW50Li4uXCJcbiAgICAgICAgICAgICAgLz5cbiAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdENvbW1lbnR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIG10LTIgYmctaW5kaWdvLTYwMCBweC0zIHB5LTIgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLWluZGlnby01MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBvc3RcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0RWRpdDtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZXF1ZXN0RWRpdCIsImltYWdlIiwic2V0T3BlbiIsInNldFVwZGF0ZWRJbWFnZSIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiaGFuZGxlU3VibWl0Q29tbWVudCIsImNvbnNvbGUiLCJsb2ciLCJlZGl0ZWRfdGV4dCIsImlzX2VkaXRlZCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsInRleHRhcmVhIiwicm93cyIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImlkIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/site/RequestEdit.tsx\n"));

/***/ })

});