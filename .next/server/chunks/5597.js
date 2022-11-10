"use strict";
exports.id = 5597;
exports.ids = [5597];
exports.modules = {

/***/ 5597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ij": () => (/* binding */ setCountryName),
/* harmony export */   "VT": () => (/* binding */ setPaymentProps),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "bi": () => (/* binding */ setProductBrandsProps),
/* harmony export */   "dY": () => (/* binding */ localSelector),
/* harmony export */   "gD": () => (/* binding */ setWriteCommentProps),
/* harmony export */   "mp": () => (/* binding */ setBillProductsFromLocal),
/* harmony export */   "z3": () => (/* binding */ setEditProductPriceProps)
/* harmony export */ });
/* unused harmony exports setProductInCommentProps, setCountProps, setProductKindsProps */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_other_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3872);


const initialState = {
    writeCommentProps: null,
    productInCommentProps: null,
    paymentProps: null,
    editProductPriceProps: null,
    countProps: 0,
    kinds: [],
    brands: [],
    billProductsFromLocal: [],
    countryName: _utils_other_constants__WEBPACK_IMPORTED_MODULE_1__/* .AMERICA */ .J$
};
const localSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "local",
    initialState,
    reducers: {
        setCountProps (state, action) {
            state.countProps = action.payload;
        },
        setWriteCommentProps (state, action) {
            state.writeCommentProps = action.payload;
        },
        setProductInCommentProps (state, action) {
            state.productInCommentProps = action.payload;
        },
        setPaymentProps (state, action) {
            state.paymentProps = action.payload;
        },
        setEditProductPriceProps (state, action) {
            state.editProductPriceProps = action.payload;
        },
        // kind and brand
        setProductKindsProps (state, action) {
            state.kinds = action.payload;
        },
        setProductBrandsProps (state, action) {
            state.brands = action.payload;
        },
        setBillProductsFromLocal (state, action) {
            state.billProductsFromLocal = action.payload;
        },
        setCountryName (state, action) {
            if (action.payload !== "") {
                state.countryName = action.payload;
            }
        }
    }
});
const localReducer = localSlice.reducer;
const localSelector = (state)=>state.local
;
const { setPaymentProps , setProductInCommentProps , setWriteCommentProps , setEditProductPriceProps , setCountProps , setProductKindsProps , setProductBrandsProps , setBillProductsFromLocal , setCountryName  } = localSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localReducer);


/***/ })

};
;