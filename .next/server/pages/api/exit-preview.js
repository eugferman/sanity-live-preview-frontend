"use strict";
(() => {
var exports = {};
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 5006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ exit)
/* harmony export */ });
// ./pages/api/exit-preview.ts
function exit(req, res) {
    res.clearPreviewData();
    res.writeHead(307, {
        Location: "/"
    });
    res.end();
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5006));
module.exports = __webpack_exports__;

})();