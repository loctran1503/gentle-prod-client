"use strict";
exports.id = 3029;
exports.ids = [3029];
exports.modules = {

/***/ 3029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _other_JwtManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8378);


const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({
    uri:  true ? "https://gentlevn.com/ecommerce/graphql" : 0,
    credentials: "include"
});
const authMiddleware = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink((operation, forward)=>{
    const token = _other_JwtManager__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getToken */ .Z.getToken();
    operation.setContext(({ headers ={}  })=>({
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : ""
            }
        })
    );
    return forward(operation);
});
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
        addTypename: false,
        typePolicies: {
            Query: {
                fields: {
                    // getEvent: {
                    //   keyArgs: false,
                    //   merge(_, incoming) {
                    //     return incoming;
                    //   },
                    // },
                    // getEvents: {
                    //   keyArgs: false,
                    //   merge(_, incoming) {
                    //     return incoming;
                    //   },
                    // },
                    getUser: {
                        keyArgs: false,
                        merge (_, incoming) {
                            return incoming;
                        }
                    },
                    getProduct: {
                        keyArgs: false,
                        merge (_, incoming) {
                            return incoming.product;
                        }
                    },
                    getProductsForIndex: {
                        keyArgs: false,
                        merge (_, incoming) {
                            return incoming.products;
                        }
                    },
                    getBrandWithProducts: {
                        keyArgs: false,
                        merge (_, incoming) {
                            return incoming.products;
                        }
                    },
                    getProductsByKind: {
                        keyArgs: false,
                        merge (_, incoming) {
                            return incoming.products;
                        }
                    },
                    getPaginationUsers: {
                        keyArgs: false,
                        merge (existing, incoming) {
                            let paginationsItem = [];
                            if (existing && existing.users) {
                                paginationsItem = paginationsItem.concat(existing.users);
                            }
                            if (incoming && incoming.users) {
                                paginationsItem = paginationsItem.concat(incoming.users);
                            }
                            return {
                                ...incoming,
                                users: paginationsItem
                            };
                        }
                    },
                    getComments: {
                        keyArgs: false,
                        merge (existing, incoming) {
                            let paginationItems = [];
                            if (existing && existing.comments) {
                                paginationItems = paginationItems.concat(existing.comments);
                            }
                            if (incoming && incoming.comments) {
                                paginationItems = paginationItems.concat(incoming.comments);
                            }
                            return {
                                ...incoming,
                                comments: paginationItems
                            };
                        }
                    }
                }
            }
        }
    }),
    link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.concat)(authMiddleware, httpLink)
});


/***/ })

};
;