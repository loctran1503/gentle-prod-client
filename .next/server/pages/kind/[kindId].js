"use strict";
(() => {
var exports = {};
exports.id = 3756;
exports.ids = [3756];
exports.modules = {

/***/ 4472:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9883);
/* harmony import */ var react_star_ratings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_star_ratings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2837);
/* harmony import */ var _assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1794);
/* harmony import */ var _components_MySpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6830);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6116);
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6913);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7952);
/* harmony import */ var _utils_lib_ApolloClient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3029);
/* harmony import */ var _utils_other_ConvertToMoney__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3932);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_8__]);
_components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];














const radioTypeList = [
    {
        value: "SALES_DESC",
        name: "B\xe1n ch\u1EA1y"
    },
    {
        value: "PRICE_DESC",
        name: "Gi\xe1 gi\u1EA3m"
    },
    {
        value: "PRICE_ASC",
        name: "Gi\xe1 t\u0103ng"
    },
    {
        value: "DATE_DESC",
        name: "S\u1EA3n ph\u1EA9m m\u1EDBi"
    },
    {
        value: "DISCOUNT_DESC",
        name: "Ph\u1EA7n tr\u0103m gi\u1EA3m"
    }, 
];
const KindId = ({ data  })=>{
    var ref1;
    const { 0: mySpinner , 1: setMySpinner  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    const { 0: filterChecked , 1: setFilterChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("SALES_DESC");
    const { 0: productClassIdChecked , 1: setProductClassIdChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const [isMobile] = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)("(max-width: 739px)");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: products , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(data);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!data) {
            router.push("/page-404");
        } else {
            setProducts(data);
            setMySpinner(false);
        }
    }, [
        data
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (Object.keys(router.query).length === 0) setCurrentPage(1);
        if (products.pageSize && router.query.skip) {
            const current = +router.query.skip / products.pageSize + 1;
            setCurrentPage(current);
        }
        // Set state for client
        if (router.query.type) {
            setFilterChecked(router.query.type);
        }
        if (router.query.productClassId) {
            setProductClassIdChecked(+router.query.productClassId);
        }
    }, [
        router.query
    ]);
    const handlePageChange = (page)=>{
        const skip = data.pageSize * (page - 1);
        setCurrentPage(page);
        router.push({
            pathname: `/kind/${router.query.kindId}`,
            query: {
                skip,
                type: filterChecked,
                kindId: router.query.kindId,
                productClassId: router.query.productClassId,
                countryName: router.query.countryName
            }
        }, undefined, {
            scroll: false
        });
    };
    const handleFilterChange = (value)=>{
        setFilterChecked(value);
        setCurrentPage(1);
        router.push({
            pathname: `/kind/${router.query.kindId}`,
            query: {
                skip: 0,
                type: value,
                kindId: router.query.kindId,
                productClassId: router.query.productClassId,
                countryName: router.query.countryName
            }
        }, undefined, {
            scroll: false
        });
    };
    const handleProductClassChange = (id)=>{
        var ref;
        const item1 = (ref = data.productClasses) === null || ref === void 0 ? void 0 : ref.find((item)=>item.id === id
        );
        if (item1) {
            setProductClassIdChecked(id);
        }
        setCurrentPage(1);
        router.push({
            pathname: `/kind/${router.query.kindId}`,
            query: {
                skip: 0,
                type: router.query.type,
                kindId: router.query.kindId,
                productClassId: id,
                countryName: router.query.countryName
            }
        }, undefined, {
            scroll: false
        });
    };
    const handleToProductDetail = (id)=>{
        const skip = data.pageSize * (currentPage - 1);
        router.push({
            pathname: `/product/${id}`,
            query: {
                productId: id,
                skip,
                type: filterChecked
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "distance",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid wide",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col l-4 l-o-4 m-4 m-o-4 c-12",
                                children: data.kindName && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "brandName",
                                    children: data.kindName
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid wide",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("col l-12 m-12 c-12"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().productContainer),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().productHeader),
                                            children: [
                                                isMobile ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                    className: "select_custom",
                                                    value: filterChecked,
                                                    onChange: (event)=>handleFilterChange(event.target.value)
                                                    ,
                                                    children: radioTypeList.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: item.value,
                                                            children: item.name
                                                        }, item.value)
                                                    )
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().filterWrapper),
                                                    children: radioTypeList.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().filterContainer),
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        onChange: ()=>handleFilterChange(item.value)
                                                                        ,
                                                                        type: "radio",
                                                                        checked: filterChecked === item.value,
                                                                        className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().inputFilter)
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().inputCustom)
                                                                    }),
                                                                    item.name
                                                                ]
                                                            })
                                                        }, item.value)
                                                    )
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                    value: productClassIdChecked,
                                                    className: "select_custom",
                                                    onChange: (e)=>handleProductClassChange(+e.target.value)
                                                    ,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: 0,
                                                            children: "T\u1EA5t c\u1EA3"
                                                        }),
                                                        (ref1 = data.productClasses) === null || ref1 === void 0 ? void 0 : ref1.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: item.id,
                                                                children: item.name
                                                            }, item.id)
                                                        )
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col l-12 m-12 c-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().productList),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row",
                                            children: data.products && products.products.map((product)=>{
                                                var ref;
                                                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "col l-2-4 m-4 c-6",
                                                    onClick: ()=>handleToProductDetail(product.id)
                                                    ,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().productItem),
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().productType),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        src: product.thumbnail
                                                                    }),
                                                                    product.salesPercent && product.salesPercent > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().salesContainer),
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                                            children: [
                                                                                product.salesPercent,
                                                                                "%"
                                                                            ]
                                                                        })
                                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().salesContainerNone),
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                                            children: [
                                                                                product.salesPercent,
                                                                                "%"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().productClassContainer),
                                                                        children: (ref = product.class) === null || ref === void 0 ? void 0 : ref.name
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().productName),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "textCapitalize",
                                                                    children: product.productName
                                                                })
                                                            }),
                                                            product.minPrice === product.maxPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().productNameAndRating),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    style: {
                                                                        marginTop: 2
                                                                    },
                                                                    children: (0,_utils_other_ConvertToMoney__WEBPACK_IMPORTED_MODULE_13__/* .MoneyConverter */ .N)(product.minPrice)
                                                                })
                                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().productNameAndRating),
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        children: (0,_utils_other_ConvertToMoney__WEBPACK_IMPORTED_MODULE_13__/* .MoneyConverter */ .N)(product.minPrice)
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        style: {
                                                                            margin: "0 4px"
                                                                        },
                                                                        children: "-"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        children: (0,_utils_other_ConvertToMoney__WEBPACK_IMPORTED_MODULE_13__/* .MoneyConverter */ .N)(product.maxPrice)
                                                                    })
                                                                ]
                                                            }),
                                                            product.averageRating > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_star_ratings__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                    rating: 4.5,
                                                                    starDimension: "12px",
                                                                    starSpacing: "1px",
                                                                    starRatedColor: "black"
                                                                })
                                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_star_ratings__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                    rating: 0,
                                                                    starDimension: "12px",
                                                                    starSpacing: "1px",
                                                                    starRatedColor: "black"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().paidInfo),
                                                                children: [
                                                                    product.sales && product.sales > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                        style: {
                                                                            color: "black"
                                                                        },
                                                                        children: [
                                                                            "\u0110\xe3 b\xe1n:",
                                                                            product.sales
                                                                        ]
                                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                        children: [
                                                                            "\u0110\xe3 b\xe1n:",
                                                                            product.sales
                                                                        ]
                                                                    }),
                                                                    product.sales && product.sales > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                        style: {
                                                                            color: "black"
                                                                        },
                                                                        children: [
                                                                            "\u0110\xe1nh gi\xe1:",
                                                                            product.commentCount
                                                                        ]
                                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                                        children: [
                                                                            "\u0110\xe1nh gi\xe1:",
                                                                            product.commentCount
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, product.id);
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "l-12 m-12 c-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_assets_css_components_products_module_css__WEBPACK_IMPORTED_MODULE_12___default().pagination),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Pagination__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            className: "pagination-bar",
                                            currentPage: currentPage,
                                            totalCount: products.totalCount || 0,
                                            pageSize: products.pageSize || 0,
                                            onPageChange: (page)=>handlePageChange(page)
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            mySpinner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySpinner__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
const getServerSideProps = async ({ query  })=>{
    const skip = query.skip || 0;
    const type = query.type || "SALES_DESC";
    const kindId = query.kindId;
    const productClassId = query.productClassId || 0;
    const paginationOptions = {
        skip: +skip,
        type: type,
        kindId: +kindId,
        productClassId: +productClassId
    };
    const { data  } = await _utils_lib_ApolloClient__WEBPACK_IMPORTED_MODULE_11__/* .client.query */ .L.query({
        query: _generated_graphql__WEBPACK_IMPORTED_MODULE_10__/* .GetProductsByKindDocument */ .$S,
        variables: {
            paginationOptions,
            countryName: query.countryName || ""
        }
    });
    return {
        props: {
            data: data.getProductsByKind
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KindId);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5368:
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3599:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 9883:
/***/ ((module) => {

module.exports = require("react-star-ratings");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4686,5675,7952,9680,6830,3872,5597,6116,1794,3029,9999], () => (__webpack_exec__(4472)));
module.exports = __webpack_exports__;

})();