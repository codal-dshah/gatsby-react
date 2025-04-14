"use strict";
exports.id = "component---src-templates-blog-post-jshead";
exports.ids = ["component---src-templates-blog-post-jshead"];
exports.modules = {

/***/ "./src/templates/blog-post.js?export=head":
/*!************************************************!*\
  !*** ./src/templates/blog-post.js?export=head ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BlogPost = ({
  data
}) => {
  const post = data.wpPost;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "blog-post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, post.date), post.featuredImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: post.featuredImage.node.sourceUrl,
    alt: post.title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    dangerouslySetInnerHTML: {
      __html: post.content
    }
  }));
};
const query = "1519750611";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);

/***/ })

};
;
//# sourceMappingURL=component---src-templates-blog-post-jshead.js.map