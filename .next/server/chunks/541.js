"use strict";
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 4541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PreviewMovie)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_sanity_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1901);
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8544);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_sanity_preview__WEBPACK_IMPORTED_MODULE_2__, _Movie__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_sanity_preview__WEBPACK_IMPORTED_MODULE_2__, _Movie__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// ./components/PreviewMovie.tsx




function PreviewMovie({ query , queryParams  }) {
    const data = (0,_lib_sanity_preview__WEBPACK_IMPORTED_MODULE_2__/* .usePreview */ .u)(null, query, queryParams);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Movie__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                movie: data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: "bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0",
                href: "/api/exit-preview",
                children: "Exit Preview"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ usePreview)
/* harmony export */ });
/* harmony import */ var next_sanity_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7541);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity_preview__WEBPACK_IMPORTED_MODULE_0__]);
next_sanity_preview__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// ./src/lib/sanity.preview.ts

function onPublicAccessOnly() {
    throw new Error(`Unable to load preview as you're not logged in`);
}
const usePreview = (0,next_sanity_preview__WEBPACK_IMPORTED_MODULE_0__.definePreview)({
    projectId: "a6tvpb9h",
    dataset: "production",
    onPublicAccessOnly
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;