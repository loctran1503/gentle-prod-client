exports.id = 8553;
exports.ids = [8553];
exports.modules = {

/***/ 2704:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "redirectHeader_header__TLmny",
	"redirectBackground": "redirectHeader_redirectBackground__XcMeC",
	"item": "redirectHeader_item__5fg59",
	"redirectName": "redirectHeader_redirectName__KB9F_",
	"redirectIcon": "redirectHeader_redirectIcon__KaRQ9"
};


/***/ }),

/***/ 8553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2704);
/* harmony import */ var _assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4__);





const RedirectHeader = ({ list , pageName  })=>{
    if (pageName) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid wide",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col l-4 l-o-4 m-6 m-o-3 c-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "brandName",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: pageName
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().redirectBackground),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid wide",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col l-12 m-12 c-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
                                    children: list.map((redirect, index)=>index === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: redirect.url,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().redirectName),
                                                    children: redirect.displayName
                                                })
                                            })
                                        }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: redirect.url,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronRightIcon, {
                                                        className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().redirectIcon)
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().redirectName),
                                                        children: redirect.displayName
                                                    })
                                                ]
                                            })
                                        }, index)
                                    )
                                })
                            })
                        })
                    })
                })
            ]
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().redirectBackground),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid wide",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col l-12 m-12 c-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
                            children: list.map((redirect, index)=>index === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: redirect.url,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().redirectName),
                                            children: redirect.displayName
                                        })
                                    })
                                }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: redirect.url,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronRightIcon, {
                                                className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().redirectIcon)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_assets_css_components_redirectHeader_module_css__WEBPACK_IMPORTED_MODULE_4___default().redirectName),
                                                children: redirect.displayName
                                            })
                                        ]
                                    })
                                }, index)
                            )
                        })
                    })
                })
            })
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RedirectHeader);


/***/ })

};
;