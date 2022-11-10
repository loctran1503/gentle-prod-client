"use strict";
exports.id = 9680;
exports.ids = [9680];
exports.modules = {

/***/ 9680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AJ": () => (/* binding */ setIsHidden),
/* harmony export */   "BF": () => (/* binding */ setIsAuthenticated),
/* harmony export */   "Cw": () => (/* binding */ setType),
/* harmony export */   "K4": () => (/* binding */ setLoading),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aF": () => (/* binding */ authSelector),
/* harmony export */   "iW": () => (/* binding */ setUserAvatar)
/* harmony export */ });
/* unused harmony export logoutClient */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_other_JwtManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8378);


const initialState = {
    isLoading: true,
    isAuthenticated: false,
    userAvatar: "",
    type: "",
    isHidden: false
};
// export const checkAuthRedux = createAsyncThunk("checkAuth", async () => {
//   const token = JwtManager.getToken();
//   if (token) {
//     return {
//       success: true,
//       type: "have token",
//       avatar: "",
//     };
//   } else {
//     const data = (await JwtManager.getRefreshToken()) as {
//       success: boolean;
//       avatar: string;
//       type: string;
//       isHidden: boolean;
//     };
//     return data;
//   }
// });
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        logoutClient (state) {
            _utils_other_JwtManager__WEBPACK_IMPORTED_MODULE_1__/* ["default"].deleteInMemoryToken */ .Z.deleteInMemoryToken();
            state.isAuthenticated = false;
        },
        setLoading (state, action) {
            state.isLoading = action.payload;
        },
        setIsAuthenticated (state, action) {
            state.isAuthenticated = action.payload;
        },
        setIsHidden (state, action) {
            state.isHidden = action.payload;
        },
        setUserAvatar (state, action) {
            state.userAvatar = action.payload;
        },
        setType (state, action) {
            state.type = action.payload;
        }
    }
});
const authReducer = authSlice.reducer;
const authSelector = (state)=>state.auth
;
const { logoutClient , setIsAuthenticated , setLoading , setUserAvatar , setType , setIsHidden ,  } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authReducer);


/***/ }),

/***/ 8378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const JwtManager = ()=>{
    let inMemoryToken = null;
    let refreshTokenTimeoutId = null;
    const getToken = ()=>inMemoryToken
    ;
    const setToken = (accessToken)=>{
        inMemoryToken = accessToken;
        //Decode and set countdown to refresh
        // const decoded = jwtDecode<JwtPayload & { userId: number }>(accessToken);
        // setRefreshTokenTimeout(decoded.exp! - decoded.iat!);
        return true;
    };
    const abortRefreshToken = ()=>{
        if (refreshTokenTimeoutId) window.clearTimeout(refreshTokenTimeoutId);
    };
    const deleteInMemoryToken = ()=>{
        inMemoryToken = null;
        abortRefreshToken();
        return true;
    };
    // const getRefreshToken = async () => {
    //   const url : string = process.env.NODE_ENV === "production"
    //   ? "https://boiling-garden-18748.herokuapp.com/refresh_token"
    //   : "http://localhost:4000/refresh_token"
    //   try {
    //     const response = await fetch(url, {
    //       credentials: "include",
    //     });
    //     const data = (await response.json()) as {
    //       success: boolean;
    //       token: string;
    //       type:string;
    //       avatar:string;
    //       isHidden:boolean;
    //     };
    //     setToken(data.token);
    //     return {
    //       success:data.success,
    //       type:data.type,
    //       avatar:data.avatar,
    //       isHidden:data.isHidden || false
    //     };
    //   } catch (error) {
    //     console.log(`error:${error}`);
    //     deleteInMemoryToken();
    //     return {
    //       success:false
    //     };
    //   }
    // };
    // const setRefreshTokenTimeout = (delay: number) => {
    //   //5s before get new refreshToken
    //   refreshTokenTimeoutId = window.setTimeout(
    //     getRefreshToken,
    //     delay * 1000 - 5000
    //   );
    // };
    return {
        getToken,
        setToken,
        deleteInMemoryToken
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JwtManager());


/***/ })

};
;