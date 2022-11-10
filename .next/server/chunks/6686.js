exports.id = 6686;
exports.ids = [6686];
exports.modules = {

/***/ 5816:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "payment_heading__Z37aP",
	"paymentContainer": "payment_paymentContainer__MX0_Y",
	"userInfo": "payment_userInfo__Opekk",
	"login": "payment_login__edo8o",
	"orderContainer": "payment_orderContainer__0aePj",
	"orderInfo": "payment_orderInfo__D0X8r",
	"productInfo": "payment_productInfo__pwrGZ",
	"productItem": "payment_productItem__0pqr2",
	"productNameAndType": "payment_productNameAndType___RMxB",
	"productPrice": "payment_productPrice___hjIy",
	"discountContainer": "payment_discountContainer__8Q50J",
	"totalPriceContainer": "payment_totalPriceContainer__rxNEo",
	"totalPriceItem": "payment_totalPriceItem__JbaHr",
	"itemName": "payment_itemName__tGpuv",
	"totalPriceItemLastChild": "payment_totalPriceItemLastChild__2jXEb",
	"total": "payment_total__tHaIF",
	"typePaymentContainer": "payment_typePaymentContainer__86Yhh",
	"typePaymentHeading": "payment_typePaymentHeading__yBhKJ",
	"headingPaymentContainer": "payment_headingPaymentContainer__F3oaW",
	"typePaymentBody": "payment_typePaymentBody__M67Ji",
	"typePaymentItem": "payment_typePaymentItem__NZaEn",
	"disabled": "payment_disabled___cXAU",
	"typePaymentInput": "payment_typePaymentInput__tSWw1",
	"detailPriceRuleContainer": "payment_detailPriceRuleContainer__nOOA7",
	"typePaymentNotice": "payment_typePaymentNotice__6tcIS",
	"infoBank": "payment_infoBank__uyg5G",
	"thanksClient": "payment_thanksClient__u6oz_",
	"orderButtonControl": "payment_orderButtonControl__YV3tw",
	"backToCartContainer": "payment_backToCartContainer__W_Eu0",
	"errorDisplay": "payment_errorDisplay__Ce_gK",
	"successDisplay": "payment_successDisplay__FScWj",
	"provinceContainer": "payment_provinceContainer__DuZfE",
	"provinceLoading": "payment_provinceLoading__s15Gv"
};


/***/ }),

/***/ 6686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4513);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_css_pages_payment_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5816);
/* harmony import */ var _assets_css_pages_payment_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_pages_payment_module_css__WEBPACK_IMPORTED_MODULE_3__);




const MyErrorMessage = ({ type , message  })=>{
    let body = null;
    switch(type){
        case "error":
            body = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_assets_css_pages_payment_module_css__WEBPACK_IMPORTED_MODULE_3___default().errorDisplay),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.WarningTwoIcon, {
                        marginRight: 1
                    }),
                    message
                ]
            });
            break;
        case "success":
            body = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_assets_css_pages_payment_module_css__WEBPACK_IMPORTED_MODULE_3___default().successDisplay),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.CheckCircleIcon, {
                        marginRight: 1
                    }),
                    message
                ]
            });
            break;
        default:
            break;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: body
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyErrorMessage);


/***/ })

};
;