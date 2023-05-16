"use strict";
(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 8544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Movie)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5711);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5524);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_1__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_4__]);
([_portabletext_react__WEBPACK_IMPORTED_MODULE_1__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// ./components/Movie.tsx






const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()(_lib_sanity_client__WEBPACK_IMPORTED_MODULE_4__/* .client */ .Lp);
function Movie({ movie  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: movie === null || movie === void 0 ? void 0 : movie.title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "container mx-auto prose prose-lg p-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: movie === null || movie === void 0 ? void 0 : movie.title
                    }),
                    movie && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "float-left m-0 w-1/3 mr-4 rounded-lg",
                        src: builder.image(movie === null || movie === void 0 ? void 0 : movie.poster).width(300).height(300).url(),
                        width: 300,
                        height: 300,
                        alt: movie === null || movie === void 0 ? void 0 : movie.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_portabletext_react__WEBPACK_IMPORTED_MODULE_1__.PortableText, {
                        value: movie === null || movie === void 0 ? void 0 : movie.overview
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5524:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lp": () => (/* binding */ client)
/* harmony export */ });
/* unused harmony exports projectId, dataset, apiVersion */
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5091);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);
next_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// ./src/lib/sanity.client.ts

const projectId = "a6tvpb9h";
const dataset = "production" // "production"
;
const apiVersion = "2023-01-01" // "2023-01-01"
;
const client = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_sanity_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7541);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5091);
/* harmony import */ var _lib_sanity_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5524);
/* harmony import */ var _components_Movie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8544);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity_preview__WEBPACK_IMPORTED_MODULE_1__, next_sanity__WEBPACK_IMPORTED_MODULE_3__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_4__, _components_Movie__WEBPACK_IMPORTED_MODULE_5__]);
([next_sanity_preview__WEBPACK_IMPORTED_MODULE_1__, next_sanity__WEBPACK_IMPORTED_MODULE_3__, _lib_sanity_client__WEBPACK_IMPORTED_MODULE_4__, _components_Movie__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// ./pages/[slug].tsx






const PreviewMovie = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(311), __webpack_require__.e(664), __webpack_require__.e(541)]).then(__webpack_require__.bind(__webpack_require__, 4541)));
const query = next_sanity__WEBPACK_IMPORTED_MODULE_3__.groq`*[_type == "movie" && slug.current == $slug][0]{
  title,
  poster,
  overview
}`;
const getStaticPaths = async ()=>{
    const paths = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_4__/* .client.fetch */ .Lp.fetch(next_sanity__WEBPACK_IMPORTED_MODULE_3__.groq`*[_type == "movie" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`);
    return {
        paths,
        fallback: true
    };
};
const getStaticProps = async ({ params , preview =false  })=>{
    const queryParams = {
        slug: (params === null || params === void 0 ? void 0 : params.slug) ?? ``
    };
    if (preview) {
        return {
            props: {
                preview,
                data: {
                    queryParams
                }
            }
        };
    }
    const movie = await _lib_sanity_client__WEBPACK_IMPORTED_MODULE_4__/* .client.fetch */ .Lp.fetch(query, queryParams);
    return {
        props: {
            preview,
            data: {
                movie,
                queryParams: {}
            }
        }
    };
};
function Page({ preview , data  }) {
    return preview ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_sanity_preview__WEBPACK_IMPORTED_MODULE_1__.PreviewSuspense, {
        fallback: "Loading...",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PreviewMovie, {
            query: query,
            queryParams: data === null || data === void 0 ? void 0 : data.queryParams
        })
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Movie__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        movie: data === null || data === void 0 ? void 0 : data.movie
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5711:
/***/ ((module) => {

module.exports = import("@portabletext/react");;

/***/ }),

/***/ 5091:
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ 7541:
/***/ ((module) => {

module.exports = import("next-sanity/preview");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,443,675], () => (__webpack_exec__(5623)));
module.exports = __webpack_exports__;

})();