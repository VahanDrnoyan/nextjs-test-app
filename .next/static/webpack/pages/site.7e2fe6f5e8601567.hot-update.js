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

/***/ "./pages/site.tsx":
/*!************************!*\
  !*** ./pages/site.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Site; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_site_ImageCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/site/ImageCard */ \"./components/site/ImageCard.tsx\");\n/* harmony import */ var _components_site_EditorModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/site/EditorModal */ \"./components/site/EditorModal.tsx\");\n/* harmony import */ var _components_site_ImageCanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/site/ImageCanvas */ \"./components/site/ImageCanvas.tsx\");\n/* harmony import */ var _components_site_RequestEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/site/RequestEdit */ \"./components/site/RequestEdit.tsx\");\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/trpc */ \"./utils/trpc.ts\");\n/* harmony import */ var _components_site_Message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/site/Message */ \"./components/site/Message.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst imagesArray = __webpack_require__(/*! ../images.json */ \"./images.json\");\nfunction Site() {\n    var _mutation_error, _mutation_error1;\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imagesArray);\n    const [isVisible, setIsVsible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showMessage, setShowMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isRequestEditVisible, setRequestEditIsIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentImage, setCurrentImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [updatedImage, setUpdatedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const mutation = _utils_trpc__WEBPACK_IMPORTED_MODULE_6__.trpc.saveData.useMutation();\n    const isDefined = (value)=>value !== undefined;\n    const [fileContent, setFileContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleDownload = ()=>{\n        const element = document.createElement(\"a\");\n        const file = new Blob([\n            fileContent\n        ], {\n            type: \"text/plain\"\n        });\n        element.href = URL.createObjectURL(file);\n        element.download = \"output.txt\";\n        document.body.appendChild(element);\n        element.click();\n    };\n    const handleSaveAllData = ()=>{\n        console.log(3334445);\n        const dataToBeSaved = images.map((image)=>{\n            console.log(11233);\n            if (image.is_edited) {\n                let shortenedUrl = \"\";\n                if (image.new_url) {\n                    shortenedUrl = image.new_url;\n                }\n                return {\n                    id: image.id,\n                    edited_text: image.edited_text,\n                    new_url: shortenedUrl.slice(0, 200)\n                };\n            }\n        });\n        const filteredData = dataToBeSaved.filter(isDefined);\n        console.log(filteredData.length);\n        if (filteredData.length > 0) {\n            var _mutation_error;\n            console.log(filteredData);\n            console.log(3333334444);\n            mutation.mutate(filteredData);\n            console.log(mutation.data, 333);\n            if (mutation.data) {\n                setShowMessage(true);\n                console.log(JSON.stringify(mutation === null || mutation === void 0 ? void 0 : mutation.data), 222);\n                setFileContent(JSON.stringify(mutation === null || mutation === void 0 ? void 0 : mutation.data));\n            }\n            if ((_mutation_error = mutation.error) === null || _mutation_error === void 0 ? void 0 : _mutation_error.message) {\n                setShowMessage(true);\n            }\n        }\n    };\n    //state to trigger rerender for edited images to be shown instantly\n    const [rerender, setRerender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (updatedImage) {\n            images.map((image)=>{\n                if (image.id === updatedImage.id) {\n                    image.new_url = updatedImage.new_url;\n                    image.is_edited = updatedImage.is_edited;\n                    image.edited_text = updatedImage.edited_text;\n                }\n                return image;\n            });\n        }\n        // we do not list rerender in dependencies\n        setRerender(!rerender);\n    }, [\n        images,\n        updatedImage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            mutation.data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_Message__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                message: \"Success\",\n                type: \"success\",\n                show: showMessage,\n                setShow: setShowMessage\n            }, void 0, false, {\n                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                lineNumber: 95,\n                columnNumber: 9\n            }, this),\n            ((_mutation_error = mutation.error) === null || _mutation_error === void 0 ? void 0 : _mutation_error.message) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_Message__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                message: (_mutation_error1 = mutation.error) === null || _mutation_error1 === void 0 ? void 0 : _mutation_error1.message,\n                type: \"error\",\n                show: showMessage,\n                setShow: setShowMessage\n            }, void 0, false, {\n                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-7xl sm:px-6 lg:px-8 my-20 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-left mb-4\",\n                        children: \"Please read the note:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-left mb-8\",\n                        children: [\n                            \"Hello, \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 46\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 52\n                            }, this),\n                            \" Thank you for reviewing my app.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 90\n                            }, this),\n                            \"1. This implementation requires to ask permission from this page https://cors-anywhere.herokuapp.com/ which is a simple proxy server for appropriate CORS implementation  to make unsplash images editable and exportable from canvas. Just one click on a button.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 7\n                            }, this),\n                            \"2. Edited images are not saved to remote server, nor on own filsystem. Instead the local path on client computer is saved along edited text.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSaveAllData,\n                                className: \"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                children: \"Save all data via server\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"rounded-md ml-2 bg-indigo-50  px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100\",\n                                onClick: handleDownload,\n                                children: \"View output file\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        role: \"list\",\n                        className: \"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n                        children: images && images.map((image)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_ImageCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                image: image,\n                                setCurrentImage: setCurrentImage,\n                                setOpen: setIsVsible,\n                                setRequestEditOpen: setRequestEditIsIsVisible\n                            }, image.id + \"image_list_item\", false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            currentImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_EditorModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        open: isVisible,\n                        setOpen: setIsVsible,\n                        image: currentImage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_ImageCanvas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            setOpen: setIsVsible,\n                            originalImage: currentImage,\n                            pixelSize: 30,\n                            color: \"white\",\n                            setUpdatedImage: setUpdatedImage\n                        }, void 0, false, {\n                            fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                            lineNumber: 159,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 11\n                    }, this),\n                    isRequestEditVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_EditorModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        open: isRequestEditVisible,\n                        setOpen: setRequestEditIsIsVisible,\n                        image: currentImage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_RequestEdit__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            setOpen: setRequestEditIsIsVisible,\n                            setUpdatedImage: setUpdatedImage,\n                            image: currentImage\n                        }, void 0, false, {\n                            fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                            lineNumber: 173,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 168,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n}\n_s(Site, \"Fsr5/sgSdLt0IBAG8AvThPhLibo=\");\n_c = Site;\nvar _c;\n$RefreshReg$(_c, \"Site\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7a0NBR0osOERBQUNIO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQ0NDLFNBQVM5QjtnQ0FDVDBCLFdBQVU7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQ0c7Z0NBQ0NILFdBQVU7Z0NBQ1ZJLFNBQVM1QzswQ0FDVjs7Ozs7Ozs7Ozs7O2tDQU1ILDhEQUFDNkM7d0JBQ0NDLE1BQUs7d0JBQ0xOLFdBQVU7a0NBRVQzRCxVQUNDQSxPQUFPcUMsR0FBRyxDQUFDLENBQUNDLFFBQVU7NEJBQ3BCLHFCQUNFLDhEQUFDaEQsa0VBQVNBO2dDQUVSZ0QsT0FBT0E7Z0NBQ1A3QixpQkFBaUJBO2dDQUNqQnlELFNBQVMvRDtnQ0FDVGdFLG9CQUFvQjVEOytCQUpmK0IsTUFBTUksRUFBRSxHQUFHOzs7Ozt3QkFPdEI7Ozs7Ozs7Ozs7OztZQUdMbEMsOEJBQ0M7O2tDQUNFLDhEQUFDakIsb0VBQVdBO3dCQUNWNkUsTUFBTWxFO3dCQUNOZ0UsU0FBUy9EO3dCQUNUbUMsT0FBTzlCO2tDQUVQLDRFQUFDaEIsb0VBQVdBOzRCQUNWMEUsU0FBUy9EOzRCQUNUa0UsZUFBZTdEOzRCQUNmOEQsV0FBVzs0QkFDWEMsT0FBTzs0QkFDUDVELGlCQUFpQkE7Ozs7Ozs7Ozs7O29CQUdwQkwsc0NBQ0MsOERBQUNmLG9FQUFXQTt3QkFDVjZFLE1BQU05RDt3QkFDTjRELFNBQVMzRDt3QkFDVCtCLE9BQU85QjtrQ0FFUCw0RUFBQ2Ysb0VBQVdBOzRCQUNWeUUsU0FBUzNEOzRCQUNUSSxpQkFBaUJBOzRCQUNqQjJCLE9BQU85Qjs7Ozs7Ozs7Ozs7Ozs7O0FBUXZCLENBQUM7R0FwS3VCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaXRlLnRzeD8zYzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEltYWdlQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL3NpdGUvSW1hZ2VDYXJkXCJcbmltcG9ydCBFZGl0b3JNb2RhbCBmcm9tIFwiQC9jb21wb25lbnRzL3NpdGUvRWRpdG9yTW9kYWxcIlxuaW1wb3J0IEltYWdlQ2FudmFzIGZyb20gXCJAL2NvbXBvbmVudHMvc2l0ZS9JbWFnZUNhbnZhc1wiXG5pbXBvcnQgUmVxdWVzdEVkaXQgZnJvbSBcIkAvY29tcG9uZW50cy9zaXRlL1JlcXVlc3RFZGl0XCJcbmltcG9ydCB7IHRycGMgfSBmcm9tIFwiLi4vdXRpbHMvdHJwY1wiXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiQC9jb21wb25lbnRzL3NpdGUvTWVzc2FnZVwiXG5jb25zdCBpbWFnZXNBcnJheSA9IHJlcXVpcmUoXCIuLi9pbWFnZXMuanNvblwiKVxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pXG5leHBvcnQgdHlwZSBJbWFnZVR5cGUgPSB7XG4gIGlkOiBudW1iZXJcbiAgaXNfZWRpdGVkOiBCb29sZWFuXG4gIG9yaWdpbmFsX3VybDogc3RyaW5nXG4gIG5ld191cmw6IHN0cmluZ1xuICBlZGl0ZWRfdGV4dDogc3RyaW5nXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaXRlKCkge1xuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGU8SW1hZ2VUeXBlW10+KGltYWdlc0FycmF5KVxuICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1ZzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgW3Nob3dNZXNzYWdlLCBzZXRTaG93TWVzc2FnZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgW2lzUmVxdWVzdEVkaXRWaXNpYmxlLCBzZXRSZXF1ZXN0RWRpdElzSXNWaXNpYmxlXSA9XG4gICAgdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtjdXJyZW50SW1hZ2UsIHNldEN1cnJlbnRJbWFnZV0gPSB1c2VTdGF0ZTxJbWFnZVR5cGUgfCBudWxsPihudWxsKVxuICBjb25zdCBbdXBkYXRlZEltYWdlLCBzZXRVcGRhdGVkSW1hZ2VdID0gdXNlU3RhdGU8SW1hZ2VUeXBlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgbXV0YXRpb24gPSB0cnBjLnNhdmVEYXRhLnVzZU11dGF0aW9uKClcbiAgY29uc3QgaXNEZWZpbmVkID0gPFQgZXh0ZW5kcyB1bmtub3duPihcbiAgICB2YWx1ZTogVCB8IHVuZGVmaW5lZFxuICApOiB2YWx1ZSBpcyBFeGNsdWRlPFQsIHVuZGVmaW5lZD4gPT4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICBjb25zdCBbZmlsZUNvbnRlbnQsIHNldEZpbGVDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBmaWxlID0gbmV3IEJsb2IoW2ZpbGVDb250ZW50XSwge3R5cGU6ICd0ZXh0L3BsYWluJ30pO1xuICAgIGVsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgZWxlbWVudC5kb3dubG9hZCA9IFwib3V0cHV0LnR4dFwiO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgZWxlbWVudC5jbGljaygpO1xuICB9OyBcbiAgY29uc3QgaGFuZGxlU2F2ZUFsbERhdGEgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coMzMzNDQ0NSlcbiAgICBjb25zdCBkYXRhVG9CZVNhdmVkID0gaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKDExMjMzKVxuICAgICAgaWYgKGltYWdlLmlzX2VkaXRlZCkge1xuICAgICAgICBsZXQgc2hvcnRlbmVkVXJsID0gXCJcIlxuICAgICAgICBpZiAoaW1hZ2UubmV3X3VybCkge1xuICAgICAgICAgIHNob3J0ZW5lZFVybCA9IGltYWdlLm5ld191cmxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpbWFnZS5pZCxcbiAgICAgICAgICBlZGl0ZWRfdGV4dDogaW1hZ2UuZWRpdGVkX3RleHQsXG4gICAgICAgICAgbmV3X3VybDogc2hvcnRlbmVkVXJsLnNsaWNlKDAsIDIwMCksXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGFUb0JlU2F2ZWQuZmlsdGVyKGlzRGVmaW5lZClcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZERhdGEubGVuZ3RoKVxuICAgIGlmIChmaWx0ZXJlZERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZERhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKDMzMzMzMzQ0NDQpXG4gICAgICBtdXRhdGlvbi5tdXRhdGUoZmlsdGVyZWREYXRhKVxuICAgICAgY29uc29sZS5sb2cobXV0YXRpb24uZGF0YSwgMzMzKVxuICAgICAgaWYgKG11dGF0aW9uLmRhdGEpIHtcbiAgICAgICAgc2V0U2hvd01lc3NhZ2UodHJ1ZSlcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobXV0YXRpb24/LmRhdGEpLCAyMjIpXG4gICAgICAgIHNldEZpbGVDb250ZW50KEpTT04uc3RyaW5naWZ5KG11dGF0aW9uPy5kYXRhKSlcbiAgICAgIH1cbiAgICAgIGlmKG11dGF0aW9uLmVycm9yPy5tZXNzYWdlKSB7XG4gICAgICAgIHNldFNob3dNZXNzYWdlKHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vc3RhdGUgdG8gdHJpZ2dlciByZXJlbmRlciBmb3IgZWRpdGVkIGltYWdlcyB0byBiZSBzaG93biBpbnN0YW50bHlcbiAgY29uc3QgW3JlcmVuZGVyLCBzZXRSZXJlbmRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXBkYXRlZEltYWdlKSB7XG4gICAgICBpbWFnZXMubWFwKChpbWFnZTogSW1hZ2VUeXBlKSA9PiB7XG4gICAgICAgIGlmIChpbWFnZS5pZCA9PT0gdXBkYXRlZEltYWdlLmlkKSB7XG4gICAgICAgICAgaW1hZ2UubmV3X3VybCA9IHVwZGF0ZWRJbWFnZS5uZXdfdXJsXG4gICAgICAgICAgaW1hZ2UuaXNfZWRpdGVkID0gdXBkYXRlZEltYWdlLmlzX2VkaXRlZFxuICAgICAgICAgIGltYWdlLmVkaXRlZF90ZXh0ID0gdXBkYXRlZEltYWdlLmVkaXRlZF90ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGltYWdlXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyB3ZSBkbyBub3QgbGlzdCByZXJlbmRlciBpbiBkZXBlbmRlbmNpZXNcbiAgICBzZXRSZXJlbmRlcighcmVyZW5kZXIpXG4gIH0sIFtpbWFnZXMsIHVwZGF0ZWRJbWFnZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge211dGF0aW9uLmRhdGEgJiYgKFxuICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgIG1lc3NhZ2U9eydTdWNjZXNzJ31cbiAgICAgICAgICB0eXBlPXtcInN1Y2Nlc3NcIn1cbiAgICAgICAgICBzaG93PXtzaG93TWVzc2FnZX1cbiAgICAgICAgICBzZXRTaG93PXtzZXRTaG93TWVzc2FnZX1cbiAgICAgICAgPjwvTWVzc2FnZT5cbiAgICAgICl9XG4gICAgICAgICAgICB7bXV0YXRpb24uZXJyb3I/Lm1lc3NhZ2UgJiYgKFxuICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgIG1lc3NhZ2U9e211dGF0aW9uLmVycm9yPy5tZXNzYWdlfVxuICAgICAgICAgIHR5cGU9e1wiZXJyb3JcIn1cbiAgICAgICAgICBzaG93PXtzaG93TWVzc2FnZX1cbiAgICAgICAgICBzZXRTaG93PXtzZXRTaG93TWVzc2FnZX1cbiAgICAgICAgPjwvTWVzc2FnZT5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgc206cHgtNiBsZzpweC04IG15LTIwIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWxlZnQgbWItNFwiPlBsZWFzZSByZWFkIHRoZSBub3RlOjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBtYi04XCI+SGVsbG8sIDxiciAvPjxiciAvPiBUaGFuayB5b3UgZm9yIHJldmlld2luZyBteSBhcHAuPGJyIC8+XG4gICAgICAxLiBUaGlzIGltcGxlbWVudGF0aW9uIHJlcXVpcmVzIHRvIGFzayBwZXJtaXNzaW9uIGZyb20gdGhpcyBwYWdlIGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLyB3aGljaCBpcyBhIHNpbXBsZSBwcm94eSBzZXJ2ZXIgZm9yIGFwcHJvcHJpYXRlIENPUlMgaW1wbGVtZW50YXRpb24gIHRvIG1ha2UgdW5zcGxhc2ggaW1hZ2VzIGVkaXRhYmxlIGFuZCBleHBvcnRhYmxlIGZyb20gY2FudmFzLiBKdXN0IG9uZSBjbGljayBvbiBhIGJ1dHRvbi5cbiAgICAgIDxiciAvPjIuIEVkaXRlZCBpbWFnZXMgYXJlIG5vdCBzYXZlZCB0byByZW1vdGUgc2VydmVyLCBub3Igb24gb3duIGZpbHN5c3RlbS4gSW5zdGVhZCB0aGUgbG9jYWwgcGF0aCBvbiBjbGllbnQgY29tcHV0ZXIgaXMgc2F2ZWQgYWxvbmcgZWRpdGVkIHRleHQuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtYi0zXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUFsbERhdGF9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMy41IHB5LTIuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTYXZlIGFsbCBkYXRhIHZpYSBzZXJ2ZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIG1sLTIgYmctaW5kaWdvLTUwICBweC0zLjUgcHktMi41IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby02MDAgc2hhZG93LXNtIGhvdmVyOmJnLWluZGlnby0xMDBcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRG93bmxvYWR9XG4gICAgICAgICAgPlxuXG4gICAgICAgICAgICBWaWV3IG91dHB1dCBmaWxlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx1bFxuICAgICAgICAgIHJvbGU9XCJsaXN0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC02IHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtpbWFnZXMgJiZcbiAgICAgICAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEltYWdlQ2FyZFxuICAgICAgICAgICAgICAgICAga2V5PXtpbWFnZS5pZCArIFwiaW1hZ2VfbGlzdF9pdGVtXCJ9XG4gICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW1hZ2U9e3NldEN1cnJlbnRJbWFnZX1cbiAgICAgICAgICAgICAgICAgIHNldE9wZW49e3NldElzVnNpYmxlfVxuICAgICAgICAgICAgICAgICAgc2V0UmVxdWVzdEVkaXRPcGVuPXtzZXRSZXF1ZXN0RWRpdElzSXNWaXNpYmxlfVxuICAgICAgICAgICAgICAgID48L0ltYWdlQ2FyZD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjdXJyZW50SW1hZ2UgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxFZGl0b3JNb2RhbFxuICAgICAgICAgICAgb3Blbj17aXNWaXNpYmxlfVxuICAgICAgICAgICAgc2V0T3Blbj17c2V0SXNWc2libGV9XG4gICAgICAgICAgICBpbWFnZT17Y3VycmVudEltYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZUNhbnZhc1xuICAgICAgICAgICAgICBzZXRPcGVuPXtzZXRJc1ZzaWJsZX1cbiAgICAgICAgICAgICAgb3JpZ2luYWxJbWFnZT17Y3VycmVudEltYWdlfVxuICAgICAgICAgICAgICBwaXhlbFNpemU9ezMwfVxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxuICAgICAgICAgICAgICBzZXRVcGRhdGVkSW1hZ2U9e3NldFVwZGF0ZWRJbWFnZX1cbiAgICAgICAgICAgID48L0ltYWdlQ2FudmFzPlxuICAgICAgICAgIDwvRWRpdG9yTW9kYWw+XG4gICAgICAgICAge2lzUmVxdWVzdEVkaXRWaXNpYmxlICYmIChcbiAgICAgICAgICAgIDxFZGl0b3JNb2RhbFxuICAgICAgICAgICAgICBvcGVuPXtpc1JlcXVlc3RFZGl0VmlzaWJsZX1cbiAgICAgICAgICAgICAgc2V0T3Blbj17c2V0UmVxdWVzdEVkaXRJc0lzVmlzaWJsZX1cbiAgICAgICAgICAgICAgaW1hZ2U9e2N1cnJlbnRJbWFnZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlcXVlc3RFZGl0XG4gICAgICAgICAgICAgICAgc2V0T3Blbj17c2V0UmVxdWVzdEVkaXRJc0lzVmlzaWJsZX1cbiAgICAgICAgICAgICAgICBzZXRVcGRhdGVkSW1hZ2U9e3NldFVwZGF0ZWRJbWFnZX1cbiAgICAgICAgICAgICAgICBpbWFnZT17Y3VycmVudEltYWdlfVxuICAgICAgICAgICAgICA+PC9SZXF1ZXN0RWRpdD5cbiAgICAgICAgICAgIDwvRWRpdG9yTW9kYWw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlQ2FyZCIsIkVkaXRvck1vZGFsIiwiSW1hZ2VDYW52YXMiLCJSZXF1ZXN0RWRpdCIsInRycGMiLCJNZXNzYWdlIiwiaW1hZ2VzQXJyYXkiLCJyZXF1aXJlIiwiU2l0ZSIsIm11dGF0aW9uIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiaXNWaXNpYmxlIiwic2V0SXNWc2libGUiLCJzaG93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwiaXNSZXF1ZXN0RWRpdFZpc2libGUiLCJzZXRSZXF1ZXN0RWRpdElzSXNWaXNpYmxlIiwiY3VycmVudEltYWdlIiwic2V0Q3VycmVudEltYWdlIiwidXBkYXRlZEltYWdlIiwic2V0VXBkYXRlZEltYWdlIiwic2F2ZURhdGEiLCJ1c2VNdXRhdGlvbiIsImlzRGVmaW5lZCIsInZhbHVlIiwidW5kZWZpbmVkIiwiZmlsZUNvbnRlbnQiLCJzZXRGaWxlQ29udGVudCIsImhhbmRsZURvd25sb2FkIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZpbGUiLCJCbG9iIiwidHlwZSIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkb3dubG9hZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwiaGFuZGxlU2F2ZUFsbERhdGEiLCJjb25zb2xlIiwibG9nIiwiZGF0YVRvQmVTYXZlZCIsIm1hcCIsImltYWdlIiwiaXNfZWRpdGVkIiwic2hvcnRlbmVkVXJsIiwibmV3X3VybCIsImlkIiwiZWRpdGVkX3RleHQiLCJzbGljZSIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsImxlbmd0aCIsIm11dGF0ZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJtZXNzYWdlIiwicmVyZW5kZXIiLCJzZXRSZXJlbmRlciIsInNob3ciLCJzZXRTaG93IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsInJvbGUiLCJzZXRPcGVuIiwic2V0UmVxdWVzdEVkaXRPcGVuIiwib3BlbiIsIm9yaWdpbmFsSW1hZ2UiLCJwaXhlbFNpemUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/site.tsx\n"));

/***/ })

});