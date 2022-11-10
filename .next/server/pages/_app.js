"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/generated/graphql.tsx
var graphql = __webpack_require__(7952);
// EXTERNAL MODULE: ./src/store/reducers/authSlice.ts
var authSlice = __webpack_require__(9680);
// EXTERNAL MODULE: ./src/store/reducers/localSlice.ts
var localSlice = __webpack_require__(5597);
// EXTERNAL MODULE: ./src/utils/other/JwtManager.ts
var JwtManager = __webpack_require__(8378);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./src/components/FacebookMessenger.tsx



const FacebookMessenger = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "fb-root"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "fb-customer-chat",
                className: "fb-customerchat"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                strategy: "lazyOnload",
                children: `
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "113765614663507");
    chatbox.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v13.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    `
            })
        ]
    });
};
/* harmony default export */ const components_FacebookMessenger = (/*#__PURE__*/(0,external_react_.memo)(FacebookMessenger));

// EXTERNAL MODULE: ./src/components/MySpinner.tsx
var MySpinner = __webpack_require__(6830);
;// CONCATENATED MODULE: ./src/components/CheckAuth.tsx










const CheckAuth = ({ children  })=>{
    const { isLoading , type  } = (0,external_react_redux_.useSelector)(authSlice/* authSelector */.aF);
    const toast = (0,react_.useToast)();
    const [getWebData, { data , loading  }] = (0,graphql/* useGetWebDataLazyQuery */.G$)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        const query = async ()=>{
            if (type !== "user" && type !== "admin") {
                var ref, ref1;
                const localBillProducts = JSON.parse(localStorage.getItem("localBillProducts"));
                const token = localStorage.getItem("SESSION_TOKEN");
                if (token && token !== "") {
                    JwtManager/* default.setToken */.Z.setToken(token);
                }
                let list = [];
                if (Array.isArray(localBillProducts) && localBillProducts.length > 0) {
                    list = localBillProducts.map((item)=>item
                    );
                } else {
                    list = [];
                }
                const res = await getWebData({
                    variables: {
                        localBillProducts: list
                    }
                });
                switch(true){
                    case ((ref = res.data) === null || ref === void 0 ? void 0 : ref.getWebData.code) === 999:
                        dispatch((0,authSlice/* setLoading */.K4)(false));
                        break;
                    case ((ref1 = res.data) === null || ref1 === void 0 ? void 0 : ref1.getWebData.code) === 200:
                        var ref2, ref3, ref4, ref5;
                        if (((ref2 = res.data) === null || ref2 === void 0 ? void 0 : ref2.getWebData.type) === "admin") {
                            var ref6;
                            dispatch((0,authSlice/* setType */.Cw)((ref6 = res.data) === null || ref6 === void 0 ? void 0 : ref6.getWebData.type));
                        } else {
                            var ref7, ref8;
                            dispatch((0,authSlice/* setType */.Cw)((ref7 = res.data) === null || ref7 === void 0 ? void 0 : ref7.getWebData.type));
                            dispatch((0,authSlice/* setIsHidden */.AJ)((ref8 = res.data) === null || ref8 === void 0 ? void 0 : ref8.getWebData.isHidden));
                        }
                        dispatch((0,authSlice/* setUserAvatar */.iW)((ref3 = res.data) === null || ref3 === void 0 ? void 0 : ref3.getWebData.avatar));
                        dispatch((0,authSlice/* setIsAuthenticated */.BF)(true));
                        JwtManager/* default.setToken */.Z.setToken((ref4 = res.data) === null || ref4 === void 0 ? void 0 : ref4.getWebData.token);
                        localStorage.setItem("SESSION_TOKEN", (ref5 = res.data) === null || ref5 === void 0 ? void 0 : ref5.getWebData.token);
                        dispatch((0,authSlice/* setLoading */.K4)(false));
                        break;
                    default:
                        var ref9;
                        toast({
                            title: "L\u1ED7i",
                            description: (ref9 = res.data) === null || ref9 === void 0 ? void 0 : ref9.getWebData.message,
                            duration: 5000,
                            status: "error",
                            isClosable: true
                        });
                        dispatch((0,authSlice/* setLoading */.K4)(false));
                        break;
                }
            }
        };
        query();
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (data && data.getWebData.brands && data.getWebData.products) {
            const brands = data.getWebData.brands.map((item)=>{
                const kindItem = {
                    id: item.id,
                    name: item.brandName
                };
                return kindItem;
            });
            dispatch((0,localSlice/* setProductBrandsProps */.bi)(brands));
            dispatch((0,localSlice/* setBillProductsFromLocal */.mp)(data.getWebData.products));
        }
    }, [
        data,
        loading
    ]);
    if (isLoading) return /*#__PURE__*/ jsx_runtime_.jsx(MySpinner/* default */.Z, {});
    else return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            children,
             true && /*#__PURE__*/ jsx_runtime_.jsx(components_FacebookMessenger, {})
        ]
    });
};
/* harmony default export */ const components_CheckAuth = (CheckAuth);

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./src/store/index.ts

// import counterReducer from '../features/counter/counterSlice';


const store = (0,toolkit_.configureStore)({
    reducer: {
        auth: authSlice/* default */.ZP,
        local: localSlice/* default */.ZP
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        })
});

;// CONCATENATED MODULE: external "@chakra-ui/theme-tools"
const theme_tools_namespaceObject = require("@chakra-ui/theme-tools");
;// CONCATENATED MODULE: ./src/theme.tsx


const fonts = {
    mono: `'Menlo', monospace`
};
const breakpoints = (0,theme_tools_namespaceObject.createBreakpoints)({
    sm: "40em",
    md: "52em",
    lg: "64em",
    xl: "80em"
});
const theme = (0,react_.extendTheme)({
    colors: {
        black: "#16161D"
    },
    fonts,
    breakpoints
});
/* harmony default export */ const src_theme = (theme);

// EXTERNAL MODULE: ./src/utils/lib/ApolloClient.ts
var ApolloClient = __webpack_require__(3029);
// EXTERNAL MODULE: ./src/utils/other/constants.ts
var constants = __webpack_require__(3872);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
















function MyApp({ Component , pageProps  }) {
    const [loading, setLoading] = external_react_default().useState(false);
    external_react_default().useEffect(()=>{
        const start = (url)=>{
            const isURLMatched = constants/* EXCEPTED_ROUTES.some */.hW.some((exceptedRoute)=>url.startsWith(exceptedRoute)
            );
            if (isURLMatched) {
                setLoading(true);
            }
        };
        const end = ()=>{
            setLoading(false);
        };
        router_.Router.events.on("routeChangeStart", start);
        router_.Router.events.on("routeChangeComplete", end);
        router_.Router.events.on("routeChangeError", end);
        return ()=>{
            router_.Router.events.off("routeChangeStart", start);
            router_.Router.events.off("routeChangeComplete", end);
            router_.Router.events.off("routeChangeError", end);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx(MySpinner/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(client_.ApolloProvider, {
            client: ApolloClient/* client */.L,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                store: store,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
                    resetCSS: true,
                    theme: src_theme,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_CheckAuth, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7952,9680,6830,3872,5597,3029], () => (__webpack_exec__(762)));
module.exports = __webpack_exports__;

})();