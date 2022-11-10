(() => {
var exports = {};
exports.id = 5159;
exports.ids = [5159];
exports.modules = {

/***/ 1519:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "eventDetail_container__act04",
	"body": "eventDetail_body__GrKhG",
	"title": "eventDetail_title__sOGUO",
	"createdAt": "eventDetail_createdAt__uU7Pp",
	"contentContainer": "eventDetail_contentContainer__9ZY13",
	"contentHeading": "eventDetail_contentHeading__3inLZ",
	"contentBody": "eventDetail_contentBody__CuQdM",
	"content": "eventDetail_content__6vAuB",
	"footer": "eventDetail_footer__rrdGA",
	"instructionImageContainer": "eventDetail_instructionImageContainer__rkzQy",
	"imageContainer": "eventDetail_imageContainer__qZcS_",
	"textSample": "eventDetail_textSample__ykFvx",
	"imageItem": "eventDetail_imageItem__24bdY"
};


/***/ }),

/***/ 2236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1519);
/* harmony import */ var _assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1794);
/* harmony import */ var _components_MySpinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6830);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6116);
/* harmony import */ var _components_RedirectHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8553);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7952);
/* harmony import */ var _utils_lib_ApolloClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3029);
/* harmony import */ var _utils_other_MyDateFormat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7261);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navbar__WEBPACK_IMPORTED_MODULE_5__]);
_components_Navbar__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const item1 = {
    displayName: "trang ch\u1EE7",
    url: "/"
};
const item2 = {
    displayName: "s\u1EF1 ki\u1EC7n",
    url: "/events"
};
const list = [
    item1,
    item2
];
const EventId = ({ data  })=>{
    const { 0: mySpinner , 1: setMySpinner  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        console.log(data);
        if (!data) {
            router.push("/page-404");
        } else {
            setMySpinner(false);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "distance",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RedirectHeader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        list: list,
                        pageName: "\u01B0u \u0111\xe3i"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid wide",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col l-12 m-12 c-12",
                                children: data.myEvent && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default().body),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: (_assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default().title),
                                                children: data.myEvent.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: (_assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default().createdAt),
                                                children: (0,_utils_other_MyDateFormat__WEBPACK_IMPORTED_MODULE_10__/* .myDateFormat */ .c)(data.myEvent.createdAt)
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default().contentContainer),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: (_assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default().contentHeading),
                                                        children: "N\u1ED8I DUNG "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default().contentBody),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: data.myEvent.content
                                                            },
                                                            className: (_assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default().content)
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_assets_css_pages_eventDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default().footer),
                                                children: "---K\xcdNH CH\xdaC B\u1EA0N C\xd3 TH\u1EACT NHI\u1EC0U NI\u1EC0M VUI V\xc0 NHI\u1EC0U \u0110I\u1EC0U T\xcdCH C\u1EF0C TRONG CU\u1ED8C S\u1ED0NG NHA---"
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            mySpinner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MySpinner__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data } = await client.query<GetEventsQuery>({
//     query: GetEventsDocument,
//   });
//   return {
//     paths: data.getEvents.myEvents!.map((item) => ({
//       params: { eventId: `${item.id}` },
//     })),
//     fallback: "blocking",
//   };
// };
// export const getStaticProps: GetStaticProps<
//   { [key: string]: any },
//   { eventId: string }
// > = async ({ params }) => {
//   const { data } = await client.query<GetEventQuery>({
//     query: GetEventDocument,
//     variables: { eventId: +params?.eventId! },
//   });
//   return {
//     props: {
//       data: data.getEvent.myEvent,
//     },
//   };
// };
const getServerSideProps = async ({ query  })=>{
    console.log(query.eventId);
    const { data  } = await _utils_lib_ApolloClient__WEBPACK_IMPORTED_MODULE_8__/* .client.query */ .L.query({
        query: _generated_graphql__WEBPACK_IMPORTED_MODULE_7__/* .GetEventDocument */ .pM,
        variables: {
            eventId: +query.eventId
        }
    });
    if (data) {
        return {
            props: {
                data: data.getEvent
            }
        };
    } else {
        return {
            props: {
                data: null
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventId);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ myDateFormat)
/* harmony export */ });
const myDateFormat = (value)=>{
    const date = new Date(value);
    const convertValue = `${date.getHours()}:${date.getMinutes()}  ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return convertValue;
};


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 4513:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5368:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 6466:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 3599:
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4686,5675,676,1664,7952,9680,6830,3872,5597,6116,1794,3029,8553], () => (__webpack_exec__(2236)));
module.exports = __webpack_exports__;

})();