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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Site; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_site_ImageCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/site/ImageCard */ \"./components/site/ImageCard.tsx\");\n/* harmony import */ var _components_site_EditorModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/site/EditorModal */ \"./components/site/EditorModal.tsx\");\n/* harmony import */ var _components_site_ImageCanvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/site/ImageCanvas */ \"./components/site/ImageCanvas.tsx\");\n/* harmony import */ var _components_site_RequestEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/site/RequestEdit */ \"./components/site/RequestEdit.tsx\");\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/trpc */ \"./utils/trpc.ts\");\n/* harmony import */ var _components_site_Message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/site/Message */ \"./components/site/Message.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst imagesArray = __webpack_require__(/*! ../images.json */ \"./images.json\");\nfunction Site() {\n    var _mutation_error, _mutation_error1;\n    _s();\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imagesArray);\n    const [isVisible, setIsVsible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showMessage, setShowMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isRequestEditVisible, setRequestEditIsIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [currentImage, setCurrentImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [updatedImage, setUpdatedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const mutation = _utils_trpc__WEBPACK_IMPORTED_MODULE_6__.trpc.saveData.useMutation();\n    const isDefined = (value)=>value !== undefined;\n    const [fileContent, setFileContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleDownload = ()=>{\n        const element = document.createElement(\"a\");\n        const file = new Blob([\n            fileContent\n        ], {\n            type: \"text/plain\"\n        });\n        element.href = URL.createObjectURL(file);\n        element.download = \"output.txt\";\n        document.body.appendChild(element);\n        element.click();\n    };\n    const handleSaveAllData = ()=>{\n        const dataToBeSaved = images.map((image)=>{\n            if (image.is_edited) {\n                console;\n                let shortenedUrl = \"\";\n                if (image.new_url) {\n                    shortenedUrl = image.new_url;\n                }\n                return {\n                    id: image.id,\n                    edited_text: image.edited_text,\n                    new_url: shortenedUrl.slice(0, 200)\n                };\n            }\n        });\n        const filteredData = dataToBeSaved.filter(isDefined);\n        if (filteredData) {\n            var _mutation_error;\n            console.log(filteredData);\n            mutation.mutate(filteredData);\n            if (mutation.data) {\n                setShowMessage(true);\n                setFileContent(JSON.stringify(mutation === null || mutation === void 0 ? void 0 : mutation.data));\n            }\n            if ((_mutation_error = mutation.error) === null || _mutation_error === void 0 ? void 0 : _mutation_error.message) {\n                setShowMessage(true);\n            }\n        }\n    };\n    //state to trigger rerender for edited images to be shown instantly\n    const [rerender, setRerender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (updatedImage) {\n            images.map((image)=>{\n                if (image.id === updatedImage.id) {\n                    image.new_url = updatedImage.new_url;\n                    image.is_edited = updatedImage.is_edited;\n                    image.edited_text = updatedImage.edited_text;\n                }\n                return image;\n            });\n        }\n        // we do not list rerender in dependencies\n        setRerender(!rerender);\n    }, [\n        images,\n        updatedImage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            mutation.data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_Message__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                message: \"Success\",\n                type: \"success\",\n                show: showMessage,\n                setShow: setShowMessage\n            }, void 0, false, {\n                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, this),\n            ((_mutation_error = mutation.error) === null || _mutation_error === void 0 ? void 0 : _mutation_error.message) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_Message__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                message: (_mutation_error1 = mutation.error) === null || _mutation_error1 === void 0 ? void 0 : _mutation_error1.message,\n                type: \"error\",\n                show: showMessage,\n                setShow: setShowMessage\n            }, void 0, false, {\n                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-7xl sm:px-6 lg:px-8 my-20 text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-left mb-4\",\n                        children: \"Please read the note:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-left\",\n                        children: \"Hello, thank you for reviewing my app. My implementation requires to ask permission from this url https://cors-anywhere.herokuapp.com/ which is a simple proxy server which helps me with providing appropriate CORS implementation  to be able to make unsplash images editable and exportable from canvas element. Please take one minute to click on abutton and request temporary permission to use this proxy server.  \"\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-end mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSaveAllData,\n                                className: \"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                children: \"Save all data via server\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"rounded-md ml-2 bg-indigo-50  px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100\",\n                                onClick: handleDownload,\n                                children: \"View output file\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        role: \"list\",\n                        className: \"grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4\",\n                        children: images && images.map((image)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_ImageCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                image: image,\n                                setCurrentImage: setCurrentImage,\n                                setOpen: setIsVsible,\n                                setRequestEditOpen: setRequestEditIsIsVisible\n                            }, image.id + \"image_list_item\", false, {\n                                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            currentImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_EditorModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        open: isVisible,\n                        setOpen: setIsVsible,\n                        image: currentImage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_ImageCanvas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            setOpen: setIsVsible,\n                            originalImage: currentImage,\n                            pixelSize: 30,\n                            color: \"white\",\n                            setUpdatedImage: setUpdatedImage\n                        }, void 0, false, {\n                            fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                            lineNumber: 152,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 147,\n                        columnNumber: 11\n                    }, this),\n                    isRequestEditVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_EditorModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        open: isRequestEditVisible,\n                        setOpen: setRequestEditIsIsVisible,\n                        image: currentImage,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_RequestEdit__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            setOpen: setRequestEditIsIsVisible,\n                            setUpdatedImage: setUpdatedImage,\n                            image: currentImage\n                        }, void 0, false, {\n                            fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                            lineNumber: 166,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vahan/dev/nextjs-test-app/pages/site.tsx\",\n                        lineNumber: 161,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true);\n}\n_s(Site, \"Fsr5/sgSdLt0IBAG8AvThPhLibo=\");\n_c = Site;\nvar _c;\n$RefreshReg$(_c, \"Site\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7Ozs7O3dCQU90Qjs7Ozs7Ozs7Ozs7O1lBR0xqQyw4QkFDQzs7a0NBQ0UsOERBQUNqQixvRUFBV0E7d0JBQ1YyRSxNQUFNaEU7d0JBQ044RCxTQUFTN0Q7d0JBQ1RpQyxPQUFPNUI7a0NBRVAsNEVBQUNoQixvRUFBV0E7NEJBQ1Z3RSxTQUFTN0Q7NEJBQ1RnRSxlQUFlM0Q7NEJBQ2Y0RCxXQUFXOzRCQUNYQyxPQUFPOzRCQUNQMUQsaUJBQWlCQTs7Ozs7Ozs7Ozs7b0JBR3BCTCxzQ0FDQyw4REFBQ2Ysb0VBQVdBO3dCQUNWMkUsTUFBTTVEO3dCQUNOMEQsU0FBU3pEO3dCQUNUNkIsT0FBTzVCO2tDQUVQLDRFQUFDZixvRUFBV0E7NEJBQ1Z1RSxTQUFTekQ7NEJBQ1RJLGlCQUFpQkE7NEJBQ2pCeUIsT0FBTzVCOzs7Ozs7Ozs7Ozs7Ozs7QUFRdkIsQ0FBQztHQTdKdUJWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpdGUudHN4PzNjOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBTZXRTdGF0ZUFjdGlvbiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gXCJAL2NvbXBvbmVudHMvc2l0ZS9JbWFnZUNhcmRcIlxuaW1wb3J0IEVkaXRvck1vZGFsIGZyb20gXCJAL2NvbXBvbmVudHMvc2l0ZS9FZGl0b3JNb2RhbFwiXG5pbXBvcnQgSW1hZ2VDYW52YXMgZnJvbSBcIkAvY29tcG9uZW50cy9zaXRlL0ltYWdlQ2FudmFzXCJcbmltcG9ydCBSZXF1ZXN0RWRpdCBmcm9tIFwiQC9jb21wb25lbnRzL3NpdGUvUmVxdWVzdEVkaXRcIlxuaW1wb3J0IHsgdHJwYyB9IGZyb20gXCIuLi91dGlscy90cnBjXCJcbmltcG9ydCBNZXNzYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvc2l0ZS9NZXNzYWdlXCJcbmNvbnN0IGltYWdlc0FycmF5ID0gcmVxdWlyZShcIi4uL2ltYWdlcy5qc29uXCIpXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSlcbmV4cG9ydCB0eXBlIEltYWdlVHlwZSA9IHtcbiAgaWQ6IG51bWJlclxuICBpc19lZGl0ZWQ6IEJvb2xlYW5cbiAgb3JpZ2luYWxfdXJsOiBzdHJpbmdcbiAgbmV3X3VybDogc3RyaW5nXG4gIGVkaXRlZF90ZXh0OiBzdHJpbmdcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpdGUoKSB7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZTxJbWFnZVR5cGVbXT4oaW1hZ2VzQXJyYXkpXG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVnNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBbc2hvd01lc3NhZ2UsIHNldFNob3dNZXNzYWdlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBbaXNSZXF1ZXN0RWRpdFZpc2libGUsIHNldFJlcXVlc3RFZGl0SXNJc1Zpc2libGVdID1cbiAgICB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgW2N1cnJlbnRJbWFnZSwgc2V0Q3VycmVudEltYWdlXSA9IHVzZVN0YXRlPEltYWdlVHlwZSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFt1cGRhdGVkSW1hZ2UsIHNldFVwZGF0ZWRJbWFnZV0gPSB1c2VTdGF0ZTxJbWFnZVR5cGUgfCBudWxsPihudWxsKVxuICBjb25zdCBtdXRhdGlvbiA9IHRycGMuc2F2ZURhdGEudXNlTXV0YXRpb24oKVxuICBjb25zdCBpc0RlZmluZWQgPSA8VCBleHRlbmRzIHVua25vd24+KFxuICAgIHZhbHVlOiBUIHwgdW5kZWZpbmVkXG4gICk6IHZhbHVlIGlzIEV4Y2x1ZGU8VCwgdW5kZWZpbmVkPiA9PiB2YWx1ZSAhPT0gdW5kZWZpbmVkXG4gIGNvbnN0IFtmaWxlQ29udGVudCwgc2V0RmlsZUNvbnRlbnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlRG93bmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGNvbnN0IGZpbGUgPSBuZXcgQmxvYihbZmlsZUNvbnRlbnRdLCB7dHlwZTogJ3RleHQvcGxhaW4nfSk7XG4gICAgZWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBlbGVtZW50LmRvd25sb2FkID0gXCJvdXRwdXQudHh0XCI7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBlbGVtZW50LmNsaWNrKCk7XG4gIH07IFxuICBjb25zdCBoYW5kbGVTYXZlQWxsRGF0YSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhVG9CZVNhdmVkID0gaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgIGlmIChpbWFnZS5pc19lZGl0ZWQpIHtcbiAgICAgICAgY29uc29sZVxuICAgICAgICBsZXQgc2hvcnRlbmVkVXJsID0gXCJcIlxuICAgICAgICBpZiAoaW1hZ2UubmV3X3VybCkge1xuICAgICAgICAgIHNob3J0ZW5lZFVybCA9IGltYWdlLm5ld191cmxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBpbWFnZS5pZCxcbiAgICAgICAgICBlZGl0ZWRfdGV4dDogaW1hZ2UuZWRpdGVkX3RleHQsXG4gICAgICAgICAgbmV3X3VybDogc2hvcnRlbmVkVXJsLnNsaWNlKDAsIDIwMCksXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGRhdGFUb0JlU2F2ZWQuZmlsdGVyKGlzRGVmaW5lZClcbiAgICBpZiAoZmlsdGVyZWREYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkRGF0YSlcbiAgICAgIG11dGF0aW9uLm11dGF0ZShmaWx0ZXJlZERhdGEpXG4gICAgICBpZiAobXV0YXRpb24uZGF0YSkge1xuICAgICAgICBzZXRTaG93TWVzc2FnZSh0cnVlKVxuXG4gICAgICAgIHNldEZpbGVDb250ZW50KEpTT04uc3RyaW5naWZ5KG11dGF0aW9uPy5kYXRhKSlcbiAgICAgIH1cbiAgICAgIGlmKG11dGF0aW9uLmVycm9yPy5tZXNzYWdlKSB7XG4gICAgICAgIHNldFNob3dNZXNzYWdlKHRydWUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vc3RhdGUgdG8gdHJpZ2dlciByZXJlbmRlciBmb3IgZWRpdGVkIGltYWdlcyB0byBiZSBzaG93biBpbnN0YW50bHlcbiAgY29uc3QgW3JlcmVuZGVyLCBzZXRSZXJlbmRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXBkYXRlZEltYWdlKSB7XG4gICAgICBpbWFnZXMubWFwKChpbWFnZTogSW1hZ2VUeXBlKSA9PiB7XG4gICAgICAgIGlmIChpbWFnZS5pZCA9PT0gdXBkYXRlZEltYWdlLmlkKSB7XG4gICAgICAgICAgaW1hZ2UubmV3X3VybCA9IHVwZGF0ZWRJbWFnZS5uZXdfdXJsXG4gICAgICAgICAgaW1hZ2UuaXNfZWRpdGVkID0gdXBkYXRlZEltYWdlLmlzX2VkaXRlZFxuICAgICAgICAgIGltYWdlLmVkaXRlZF90ZXh0ID0gdXBkYXRlZEltYWdlLmVkaXRlZF90ZXh0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGltYWdlXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyB3ZSBkbyBub3QgbGlzdCByZXJlbmRlciBpbiBkZXBlbmRlbmNpZXNcbiAgICBzZXRSZXJlbmRlcighcmVyZW5kZXIpXG4gIH0sIFtpbWFnZXMsIHVwZGF0ZWRJbWFnZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge211dGF0aW9uLmRhdGEgJiYgKFxuICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgIG1lc3NhZ2U9eydTdWNjZXNzJ31cbiAgICAgICAgICB0eXBlPXtcInN1Y2Nlc3NcIn1cbiAgICAgICAgICBzaG93PXtzaG93TWVzc2FnZX1cbiAgICAgICAgICBzZXRTaG93PXtzZXRTaG93TWVzc2FnZX1cbiAgICAgICAgPjwvTWVzc2FnZT5cbiAgICAgICl9XG4gICAgICAgICAgICB7bXV0YXRpb24uZXJyb3I/Lm1lc3NhZ2UgJiYgKFxuICAgICAgICA8TWVzc2FnZVxuICAgICAgICAgIG1lc3NhZ2U9e211dGF0aW9uLmVycm9yPy5tZXNzYWdlfVxuICAgICAgICAgIHR5cGU9e1wiZXJyb3JcIn1cbiAgICAgICAgICBzaG93PXtzaG93TWVzc2FnZX1cbiAgICAgICAgICBzZXRTaG93PXtzZXRTaG93TWVzc2FnZX1cbiAgICAgICAgPjwvTWVzc2FnZT5cbiAgICAgICl9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgc206cHgtNiBsZzpweC04IG15LTIwIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWxlZnQgbWItNFwiPlBsZWFzZSByZWFkIHRoZSBub3RlOjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPkhlbGxvLCB0aGFuayB5b3UgZm9yIHJldmlld2luZyBteSBhcHAuIE15IGltcGxlbWVudGF0aW9uIHJlcXVpcmVzIHRvIGFzayBwZXJtaXNzaW9uIGZyb20gdGhpcyB1cmwgaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vIHdoaWNoIGlzIGEgc2ltcGxlIHByb3h5IHNlcnZlciB3aGljaCBoZWxwcyBtZSB3aXRoIHByb3ZpZGluZyBhcHByb3ByaWF0ZSBDT1JTIGltcGxlbWVudGF0aW9uICB0byBiZSBhYmxlIHRvIG1ha2UgdW5zcGxhc2ggaW1hZ2VzIGVkaXRhYmxlIGFuZCBleHBvcnRhYmxlIGZyb20gY2FudmFzIGVsZW1lbnQuIFBsZWFzZSB0YWtlIG9uZSBtaW51dGUgdG8gY2xpY2sgb24gYWJ1dHRvbiBhbmQgcmVxdWVzdCB0ZW1wb3JhcnkgcGVybWlzc2lvbiB0byB1c2UgdGhpcyBwcm94eSBzZXJ2ZXIuICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgbWItM1wiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmVBbGxEYXRhfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1pbmRpZ28tNjAwIHB4LTMuNSBweS0yLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLWluZGlnby01MDAgZm9jdXMtdmlzaWJsZTpvdXRsaW5lIGZvY3VzLXZpc2libGU6b3V0bGluZS0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1vZmZzZXQtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtaW5kaWdvLTYwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2F2ZSBhbGwgZGF0YSB2aWEgc2VydmVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBtbC0yIGJnLWluZGlnby01MCAgcHgtMy41IHB5LTIuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1pbmRpZ28tNjAwIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tMTAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkfVxuICAgICAgICAgID5cblxuICAgICAgICAgICAgVmlldyBvdXRwdXQgZmlsZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWxcbiAgICAgICAgICByb2xlPVwibGlzdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBsZzpncmlkLWNvbHMtNFwiXG4gICAgICAgID5cbiAgICAgICAgICB7aW1hZ2VzICYmXG4gICAgICAgICAgICBpbWFnZXMubWFwKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxJbWFnZUNhcmRcbiAgICAgICAgICAgICAgICAgIGtleT17aW1hZ2UuaWQgKyBcImltYWdlX2xpc3RfaXRlbVwifVxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudEltYWdlPXtzZXRDdXJyZW50SW1hZ2V9XG4gICAgICAgICAgICAgICAgICBzZXRPcGVuPXtzZXRJc1ZzaWJsZX1cbiAgICAgICAgICAgICAgICAgIHNldFJlcXVlc3RFZGl0T3Blbj17c2V0UmVxdWVzdEVkaXRJc0lzVmlzaWJsZX1cbiAgICAgICAgICAgICAgICA+PC9JbWFnZUNhcmQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICB7Y3VycmVudEltYWdlICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8RWRpdG9yTW9kYWxcbiAgICAgICAgICAgIG9wZW49e2lzVmlzaWJsZX1cbiAgICAgICAgICAgIHNldE9wZW49e3NldElzVnNpYmxlfVxuICAgICAgICAgICAgaW1hZ2U9e2N1cnJlbnRJbWFnZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SW1hZ2VDYW52YXNcbiAgICAgICAgICAgICAgc2V0T3Blbj17c2V0SXNWc2libGV9XG4gICAgICAgICAgICAgIG9yaWdpbmFsSW1hZ2U9e2N1cnJlbnRJbWFnZX1cbiAgICAgICAgICAgICAgcGl4ZWxTaXplPXszMH1cbiAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cbiAgICAgICAgICAgICAgc2V0VXBkYXRlZEltYWdlPXtzZXRVcGRhdGVkSW1hZ2V9XG4gICAgICAgICAgICA+PC9JbWFnZUNhbnZhcz5cbiAgICAgICAgICA8L0VkaXRvck1vZGFsPlxuICAgICAgICAgIHtpc1JlcXVlc3RFZGl0VmlzaWJsZSAmJiAoXG4gICAgICAgICAgICA8RWRpdG9yTW9kYWxcbiAgICAgICAgICAgICAgb3Blbj17aXNSZXF1ZXN0RWRpdFZpc2libGV9XG4gICAgICAgICAgICAgIHNldE9wZW49e3NldFJlcXVlc3RFZGl0SXNJc1Zpc2libGV9XG4gICAgICAgICAgICAgIGltYWdlPXtjdXJyZW50SW1hZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxSZXF1ZXN0RWRpdFxuICAgICAgICAgICAgICAgIHNldE9wZW49e3NldFJlcXVlc3RFZGl0SXNJc1Zpc2libGV9XG4gICAgICAgICAgICAgICAgc2V0VXBkYXRlZEltYWdlPXtzZXRVcGRhdGVkSW1hZ2V9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2N1cnJlbnRJbWFnZX1cbiAgICAgICAgICAgICAgPjwvUmVxdWVzdEVkaXQ+XG4gICAgICAgICAgICA8L0VkaXRvck1vZGFsPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZUNhcmQiLCJFZGl0b3JNb2RhbCIsIkltYWdlQ2FudmFzIiwiUmVxdWVzdEVkaXQiLCJ0cnBjIiwiTWVzc2FnZSIsImltYWdlc0FycmF5IiwicmVxdWlyZSIsIlNpdGUiLCJtdXRhdGlvbiIsImltYWdlcyIsInNldEltYWdlcyIsImlzVmlzaWJsZSIsInNldElzVnNpYmxlIiwic2hvd01lc3NhZ2UiLCJzZXRTaG93TWVzc2FnZSIsImlzUmVxdWVzdEVkaXRWaXNpYmxlIiwic2V0UmVxdWVzdEVkaXRJc0lzVmlzaWJsZSIsImN1cnJlbnRJbWFnZSIsInNldEN1cnJlbnRJbWFnZSIsInVwZGF0ZWRJbWFnZSIsInNldFVwZGF0ZWRJbWFnZSIsInNhdmVEYXRhIiwidXNlTXV0YXRpb24iLCJpc0RlZmluZWQiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImZpbGVDb250ZW50Iiwic2V0RmlsZUNvbnRlbnQiLCJoYW5kbGVEb3dubG9hZCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmaWxlIiwiQmxvYiIsInR5cGUiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsImhhbmRsZVNhdmVBbGxEYXRhIiwiZGF0YVRvQmVTYXZlZCIsIm1hcCIsImltYWdlIiwiaXNfZWRpdGVkIiwiY29uc29sZSIsInNob3J0ZW5lZFVybCIsIm5ld191cmwiLCJpZCIsImVkaXRlZF90ZXh0Iiwic2xpY2UiLCJmaWx0ZXJlZERhdGEiLCJmaWx0ZXIiLCJsb2ciLCJtdXRhdGUiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwibWVzc2FnZSIsInJlcmVuZGVyIiwic2V0UmVyZW5kZXIiLCJzaG93Iiwic2V0U2hvdyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInVsIiwicm9sZSIsInNldE9wZW4iLCJzZXRSZXF1ZXN0RWRpdE9wZW4iLCJvcGVuIiwib3JpZ2luYWxJbWFnZSIsInBpeGVsU2l6ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/site.tsx\n"));

/***/ })

});