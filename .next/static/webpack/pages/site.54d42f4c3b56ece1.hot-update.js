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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Site; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_site_ImageCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/site/ImageCard */ \"./components/site/ImageCard.tsx\");\n/* harmony import */ var _components_site_EditorModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/site/EditorModal */ \"./components/site/EditorModal.tsx\");\n/* harmony import */ var _components_site_ImageCanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/site/ImageCanvas */ \"./components/site/ImageCanvas.tsx\");\n/* harmony import */ var _components_site_RequestEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/site/RequestEdit */ \"./components/site/RequestEdit.tsx\");\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/trpc */ \"./utils/trpc.ts\");\n/* harmony import */ var _components_site_Message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/site/Message */ \"./components/site/Message.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst imagesArray = __webpack_require__(/*! ../images.json */ \"./images.json\");\nfunction Site() {\n    var _mutation_error, _mutation_error1;\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imagesArray);\n    const [isVisible, setIsVsible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showMessage, setShowMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isRequestEditVisible, setRequestEditIsIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentImage, setCurrentImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [updatedImage, setUpdatedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const mutation = _utils_trpc__WEBPACK_IMPORTED_MODULE_6__.trpc.saveData.useMutation();\n    const isDefined = (value)=>value !== undefined;\n    const [fileContent, setFileContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleDownload = ()=>{\n        const element = document.createElement(\"a\");\n        const file = new Blob([\n            fileContent\n        ], {\n            type: \"text/plain\"\n        });\n        element.href = URL.createObjectURL(file);\n        element.download = \"output.txt\";\n        document.body.appendChild(element);\n        element.click();\n    };\n    const handleSaveAllData = ()=>{\n        const dataToBeSaved = images.map((image)=>{\n            if (image.is_edited) {\n                console;\n                let shortenedUrl = \"\";\n                if (image.new_url) {\n                    shortenedUrl = image.new_url;\n                }\n                return {\n                    id: image.id,\n                    edited_text: image.edited_text,\n                    new_url: shortenedUrl.slice(0, 200)\n                };\n            }\n        });\n        const filteredData = dataToBeSaved.filter(isDefined);\n        if (filteredData) {\n            var _mutation_error;\n            console.log(filteredData);\n            mutation.mutate(filteredData);\n            if (mutation.data) {\n                setShowMessage(true);\n                setFileContent(JSON.stringify(mutation === null || mutation === void 0 ? void 0 : mutation.data));\n            }\n            if ((_mutation_error = mutation.error) === null || _mutation_error === void 0 ? void 0 : _mutation_error.message) {\n                setShowMessage(true);\n            }\n        }\n    };\n    //state to trigger rerender for edited images to be shown instantly\n    const [rerender, setRerender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (updatedImage) {\n            images.map((image)=>{\n                if (image.id === updatedImage.id) {\n                    image.new_url = updatedImage.new_url;\n                    image.is_edited = updatedImage.is_edited;\n                    image.edited_text = updatedImage.edited_text;\n                }\n                return image;\n            });\n        }\n        // we do not list rerender in dependencies\n        setRerender(!rerender);\n    }, [\n        images,\n        updatedImage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            mutation.data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_Message__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                message: \"Success\",\n                type: \"success\",\n                show: showMessage,\n                setShow: setShowMessage\n            }, void 0, false, {\n                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this),\n            ((_mutation_error = mutation.error) === null || _mutation_error === void 0 ? void 0 : _mutation_error.message) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_Message__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                message: (_mutation_error1 = mutation.error) === null || _mutation_error1 === void 0 ? void 0 : _mutation_error1.message,\n                type: \"error\",\n                show: showMessage,\n                setShow: setShowMessage\n            }, void 0, false, {\n                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-7xl sm:px-6 lg:px-8 my-20 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-left mb-4\",\n                        children: \"Please read the note:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-left mb-4\",\n                        children: [\n                            \"Hello, \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 46\n                            }, this),\n                            \" Thank you for reviewing my app. My implementation requires to ask permission from this url https://cors-anywhere.herokuapp.com/ which is a simple proxy server for appropriate CORS implementation  to make unsplash images editable and exportable from canvas.Just one click on a button.  \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSaveAllData,\n                                className: \"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                children: \"Save all data via server\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"rounded-md ml-2 bg-indigo-50  px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100\",\n                                onClick: handleDownload,\n                                children: \"View output file\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        role: \"list\",\n                        className: \"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n                        children: images && images.map((image)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_ImageCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                image: image,\n                                setCurrentImage: setCurrentImage,\n                                setOpen: setIsVsible,\n                                setRequestEditOpen: setRequestEditIsIsVisible\n                            }, image.id + \"image_list_item\", false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            currentImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_EditorModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        open: isVisible,\n                        setOpen: setIsVsible,\n                        image: currentImage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_ImageCanvas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            setOpen: setIsVsible,\n                            originalImage: currentImage,\n                            pixelSize: 30,\n                            color: \"white\",\n                            setUpdatedImage: setUpdatedImage\n                        }, void 0, false, {\n                            fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 11\n                    }, this),\n                    isRequestEditVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_EditorModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        open: isRequestEditVisible,\n                        setOpen: setRequestEditIsIsVisible,\n                        image: currentImage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_RequestEdit__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            setOpen: setRequestEditIsIsVisible,\n                            setUpdatedImage: setUpdatedImage,\n                            image: currentImage\n                        }, void 0, false, {\n                            fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                            lineNumber: 166,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 161,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n}\n_s(Site, \"Fsr5/sgSdLt0IBAG8AvThPhLibo=\");\n_c = Site;\nvar _c;\n$RefreshReg$(_c, \"Site\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0IzRDsrQkFKZjZCLE1BQU1LLEVBQUUsR0FBRzs7Ozs7d0JBT3RCOzs7Ozs7Ozs7Ozs7WUFHTGpDLDhCQUNDOztrQ0FDRSw4REFBQ2pCLG9FQUFXQTt3QkFDVjRFLE1BQU1qRTt3QkFDTitELFNBQVM5RDt3QkFDVGlDLE9BQU81QjtrQ0FFUCw0RUFBQ2hCLG9FQUFXQTs0QkFDVnlFLFNBQVM5RDs0QkFDVGlFLGVBQWU1RDs0QkFDZjZELFdBQVc7NEJBQ1hDLE9BQU87NEJBQ1AzRCxpQkFBaUJBOzs7Ozs7Ozs7OztvQkFHcEJMLHNDQUNDLDhEQUFDZixvRUFBV0E7d0JBQ1Y0RSxNQUFNN0Q7d0JBQ04yRCxTQUFTMUQ7d0JBQ1Q2QixPQUFPNUI7a0NBRVAsNEVBQUNmLG9FQUFXQTs0QkFDVndFLFNBQVMxRDs0QkFDVEksaUJBQWlCQTs0QkFDakJ5QixPQUFPNUI7Ozs7Ozs7Ozs7Ozs7OztBQVF2QixDQUFDO0dBN0p1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2l0ZS50c3g/M2M4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBJbWFnZUNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9zaXRlL0ltYWdlQ2FyZFwiXG5pbXBvcnQgRWRpdG9yTW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9zaXRlL0VkaXRvck1vZGFsXCJcbmltcG9ydCBJbWFnZUNhbnZhcyBmcm9tIFwiQC9jb21wb25lbnRzL3NpdGUvSW1hZ2VDYW52YXNcIlxuaW1wb3J0IFJlcXVlc3RFZGl0IGZyb20gXCJAL2NvbXBvbmVudHMvc2l0ZS9SZXF1ZXN0RWRpdFwiXG5pbXBvcnQgeyB0cnBjIH0gZnJvbSBcIi4uL3V0aWxzL3RycGNcIlxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9zaXRlL01lc3NhZ2VcIlxuY29uc3QgaW1hZ2VzQXJyYXkgPSByZXF1aXJlKFwiLi4vaW1hZ2VzLmpzb25cIilcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KVxuZXhwb3J0IHR5cGUgSW1hZ2VUeXBlID0ge1xuICBpZDogbnVtYmVyXG4gIGlzX2VkaXRlZDogQm9vbGVhblxuICBvcmlnaW5hbF91cmw6IHN0cmluZ1xuICBuZXdfdXJsOiBzdHJpbmdcbiAgZWRpdGVkX3RleHQ6IHN0cmluZ1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2l0ZSgpIHtcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlPEltYWdlVHlwZVtdPihpbWFnZXNBcnJheSlcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtzaG93TWVzc2FnZSwgc2V0U2hvd01lc3NhZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtpc1JlcXVlc3RFZGl0VmlzaWJsZSwgc2V0UmVxdWVzdEVkaXRJc0lzVmlzaWJsZV0gPVxuICAgIHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBbY3VycmVudEltYWdlLCBzZXRDdXJyZW50SW1hZ2VdID0gdXNlU3RhdGU8SW1hZ2VUeXBlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3VwZGF0ZWRJbWFnZSwgc2V0VXBkYXRlZEltYWdlXSA9IHVzZVN0YXRlPEltYWdlVHlwZSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IG11dGF0aW9uID0gdHJwYy5zYXZlRGF0YS51c2VNdXRhdGlvbigpXG4gIGNvbnN0IGlzRGVmaW5lZCA9IDxUIGV4dGVuZHMgdW5rbm93bj4oXG4gICAgdmFsdWU6IFQgfCB1bmRlZmluZWRcbiAgKTogdmFsdWUgaXMgRXhjbHVkZTxULCB1bmRlZmluZWQ+ID0+IHZhbHVlICE9PSB1bmRlZmluZWRcbiAgY29uc3QgW2ZpbGVDb250ZW50LCBzZXRGaWxlQ29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgY29uc3QgZmlsZSA9IG5ldyBCbG9iKFtmaWxlQ29udGVudF0sIHt0eXBlOiAndGV4dC9wbGFpbid9KTtcbiAgICBlbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIGVsZW1lbnQuZG93bmxvYWQgPSBcIm91dHB1dC50eHRcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuY2xpY2soKTtcbiAgfTsgXG4gIGNvbnN0IGhhbmRsZVNhdmVBbGxEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFUb0JlU2F2ZWQgPSBpbWFnZXMubWFwKChpbWFnZSkgPT4ge1xuICAgICAgaWYgKGltYWdlLmlzX2VkaXRlZCkge1xuICAgICAgICBjb25zb2xlXG4gICAgICAgIGxldCBzaG9ydGVuZWRVcmwgPSBcIlwiXG4gICAgICAgIGlmIChpbWFnZS5uZXdfdXJsKSB7XG4gICAgICAgICAgc2hvcnRlbmVkVXJsID0gaW1hZ2UubmV3X3VybFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGltYWdlLmlkLFxuICAgICAgICAgIGVkaXRlZF90ZXh0OiBpbWFnZS5lZGl0ZWRfdGV4dCxcbiAgICAgICAgICBuZXdfdXJsOiBzaG9ydGVuZWRVcmwuc2xpY2UoMCwgMjAwKSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YVRvQmVTYXZlZC5maWx0ZXIoaXNEZWZpbmVkKVxuICAgIGlmIChmaWx0ZXJlZERhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVyZWREYXRhKVxuICAgICAgbXV0YXRpb24ubXV0YXRlKGZpbHRlcmVkRGF0YSlcbiAgICAgIGlmIChtdXRhdGlvbi5kYXRhKSB7XG4gICAgICAgIHNldFNob3dNZXNzYWdlKHRydWUpXG5cbiAgICAgICAgc2V0RmlsZUNvbnRlbnQoSlNPTi5zdHJpbmdpZnkobXV0YXRpb24/LmRhdGEpKVxuICAgICAgfVxuICAgICAgaWYobXV0YXRpb24uZXJyb3I/Lm1lc3NhZ2UpIHtcbiAgICAgICAgc2V0U2hvd01lc3NhZ2UodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy9zdGF0ZSB0byB0cmlnZ2VyIHJlcmVuZGVyIGZvciBlZGl0ZWQgaW1hZ2VzIHRvIGJlIHNob3duIGluc3RhbnRseVxuICBjb25zdCBbcmVyZW5kZXIsIHNldFJlcmVuZGVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1cGRhdGVkSW1hZ2UpIHtcbiAgICAgIGltYWdlcy5tYXAoKGltYWdlOiBJbWFnZVR5cGUpID0+IHtcbiAgICAgICAgaWYgKGltYWdlLmlkID09PSB1cGRhdGVkSW1hZ2UuaWQpIHtcbiAgICAgICAgICBpbWFnZS5uZXdfdXJsID0gdXBkYXRlZEltYWdlLm5ld191cmxcbiAgICAgICAgICBpbWFnZS5pc19lZGl0ZWQgPSB1cGRhdGVkSW1hZ2UuaXNfZWRpdGVkXG4gICAgICAgICAgaW1hZ2UuZWRpdGVkX3RleHQgPSB1cGRhdGVkSW1hZ2UuZWRpdGVkX3RleHRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1hZ2VcbiAgICAgIH0pXG4gICAgfVxuICAgIC8vIHdlIGRvIG5vdCBsaXN0IHJlcmVuZGVyIGluIGRlcGVuZGVuY2llc1xuICAgIHNldFJlcmVuZGVyKCFyZXJlbmRlcilcbiAgfSwgW2ltYWdlcywgdXBkYXRlZEltYWdlXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bXV0YXRpb24uZGF0YSAmJiAoXG4gICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgbWVzc2FnZT17J1N1Y2Nlc3MnfVxuICAgICAgICAgIHR5cGU9e1wic3VjY2Vzc1wifVxuICAgICAgICAgIHNob3c9e3Nob3dNZXNzYWdlfVxuICAgICAgICAgIHNldFNob3c9e3NldFNob3dNZXNzYWdlfVxuICAgICAgICA+PC9NZXNzYWdlPlxuICAgICAgKX1cbiAgICAgICAgICAgIHttdXRhdGlvbi5lcnJvcj8ubWVzc2FnZSAmJiAoXG4gICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgbWVzc2FnZT17bXV0YXRpb24uZXJyb3I/Lm1lc3NhZ2V9XG4gICAgICAgICAgdHlwZT17XCJlcnJvclwifVxuICAgICAgICAgIHNob3c9e3Nob3dNZXNzYWdlfVxuICAgICAgICAgIHNldFNob3c9e3NldFNob3dNZXNzYWdlfVxuICAgICAgICA+PC9NZXNzYWdlPlxuICAgICAgKX1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBzbTpweC02IGxnOnB4LTggbXktMjAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtbGVmdCBtYi00XCI+UGxlYXNlIHJlYWQgdGhlIG5vdGU6PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG1iLTRcIj5IZWxsbywgPGJyIC8+IFRoYW5rIHlvdSBmb3IgcmV2aWV3aW5nIG15IGFwcC4gTXkgaW1wbGVtZW50YXRpb24gcmVxdWlyZXMgdG8gYXNrIHBlcm1pc3Npb24gZnJvbSB0aGlzIHVybCBodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8gd2hpY2ggaXMgYSBzaW1wbGUgcHJveHkgc2VydmVyIGZvciBhcHByb3ByaWF0ZSBDT1JTIGltcGxlbWVudGF0aW9uICB0byBtYWtlIHVuc3BsYXNoIGltYWdlcyBlZGl0YWJsZSBhbmQgZXhwb3J0YWJsZSBmcm9tIGNhbnZhcy5KdXN0IG9uZSBjbGljayBvbiBhIGJ1dHRvbi4gIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBtYi0zXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2F2ZUFsbERhdGF9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMy41IHB5LTIuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTYXZlIGFsbCBkYXRhIHZpYSBzZXJ2ZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIG1sLTIgYmctaW5kaWdvLTUwICBweC0zLjUgcHktMi41IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWluZGlnby02MDAgc2hhZG93LXNtIGhvdmVyOmJnLWluZGlnby0xMDBcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRG93bmxvYWR9XG4gICAgICAgICAgPlxuXG4gICAgICAgICAgICBWaWV3IG91dHB1dCBmaWxlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx1bFxuICAgICAgICAgIHJvbGU9XCJsaXN0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC02IHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtpbWFnZXMgJiZcbiAgICAgICAgICAgIGltYWdlcy5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEltYWdlQ2FyZFxuICAgICAgICAgICAgICAgICAga2V5PXtpbWFnZS5pZCArIFwiaW1hZ2VfbGlzdF9pdGVtXCJ9XG4gICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW1hZ2U9e3NldEN1cnJlbnRJbWFnZX1cbiAgICAgICAgICAgICAgICAgIHNldE9wZW49e3NldElzVnNpYmxlfVxuICAgICAgICAgICAgICAgICAgc2V0UmVxdWVzdEVkaXRPcGVuPXtzZXRSZXF1ZXN0RWRpdElzSXNWaXNpYmxlfVxuICAgICAgICAgICAgICAgID48L0ltYWdlQ2FyZD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjdXJyZW50SW1hZ2UgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxFZGl0b3JNb2RhbFxuICAgICAgICAgICAgb3Blbj17aXNWaXNpYmxlfVxuICAgICAgICAgICAgc2V0T3Blbj17c2V0SXNWc2libGV9XG4gICAgICAgICAgICBpbWFnZT17Y3VycmVudEltYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZUNhbnZhc1xuICAgICAgICAgICAgICBzZXRPcGVuPXtzZXRJc1ZzaWJsZX1cbiAgICAgICAgICAgICAgb3JpZ2luYWxJbWFnZT17Y3VycmVudEltYWdlfVxuICAgICAgICAgICAgICBwaXhlbFNpemU9ezMwfVxuICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxuICAgICAgICAgICAgICBzZXRVcGRhdGVkSW1hZ2U9e3NldFVwZGF0ZWRJbWFnZX1cbiAgICAgICAgICAgID48L0ltYWdlQ2FudmFzPlxuICAgICAgICAgIDwvRWRpdG9yTW9kYWw+XG4gICAgICAgICAge2lzUmVxdWVzdEVkaXRWaXNpYmxlICYmIChcbiAgICAgICAgICAgIDxFZGl0b3JNb2RhbFxuICAgICAgICAgICAgICBvcGVuPXtpc1JlcXVlc3RFZGl0VmlzaWJsZX1cbiAgICAgICAgICAgICAgc2V0T3Blbj17c2V0UmVxdWVzdEVkaXRJc0lzVmlzaWJsZX1cbiAgICAgICAgICAgICAgaW1hZ2U9e2N1cnJlbnRJbWFnZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFJlcXVlc3RFZGl0XG4gICAgICAgICAgICAgICAgc2V0T3Blbj17c2V0UmVxdWVzdEVkaXRJc0lzVmlzaWJsZX1cbiAgICAgICAgICAgICAgICBzZXRVcGRhdGVkSW1hZ2U9e3NldFVwZGF0ZWRJbWFnZX1cbiAgICAgICAgICAgICAgICBpbWFnZT17Y3VycmVudEltYWdlfVxuICAgICAgICAgICAgICA+PC9SZXF1ZXN0RWRpdD5cbiAgICAgICAgICAgIDwvRWRpdG9yTW9kYWw+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlQ2FyZCIsIkVkaXRvck1vZGFsIiwiSW1hZ2VDYW52YXMiLCJSZXF1ZXN0RWRpdCIsInRycGMiLCJNZXNzYWdlIiwiaW1hZ2VzQXJyYXkiLCJyZXF1aXJlIiwiU2l0ZSIsIm11dGF0aW9uIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiaXNWaXNpYmxlIiwic2V0SXNWc2libGUiLCJzaG93TWVzc2FnZSIsInNldFNob3dNZXNzYWdlIiwiaXNSZXF1ZXN0RWRpdFZpc2libGUiLCJzZXRSZXF1ZXN0RWRpdElzSXNWaXNpYmxlIiwiY3VycmVudEltYWdlIiwic2V0Q3VycmVudEltYWdlIiwidXBkYXRlZEltYWdlIiwic2V0VXBkYXRlZEltYWdlIiwic2F2ZURhdGEiLCJ1c2VNdXRhdGlvbiIsImlzRGVmaW5lZCIsInZhbHVlIiwidW5kZWZpbmVkIiwiZmlsZUNvbnRlbnQiLCJzZXRGaWxlQ29udGVudCIsImhhbmRsZURvd25sb2FkIiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZpbGUiLCJCbG9iIiwidHlwZSIsImhyZWYiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkb3dubG9hZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwiaGFuZGxlU2F2ZUFsbERhdGEiLCJkYXRhVG9CZVNhdmVkIiwibWFwIiwiaW1hZ2UiLCJpc19lZGl0ZWQiLCJjb25zb2xlIiwic2hvcnRlbmVkVXJsIiwibmV3X3VybCIsImlkIiwiZWRpdGVkX3RleHQiLCJzbGljZSIsImZpbHRlcmVkRGF0YSIsImZpbHRlciIsImxvZyIsIm11dGF0ZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJtZXNzYWdlIiwicmVyZW5kZXIiLCJzZXRSZXJlbmRlciIsInNob3ciLCJzZXRTaG93IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsInJvbGUiLCJzZXRPcGVuIiwic2V0UmVxdWVzdEVkaXRPcGVuIiwib3BlbiIsIm9yaWdpbmFsSW1hZ2UiLCJwaXhlbFNpemUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/site.tsx\n"));

/***/ })

});