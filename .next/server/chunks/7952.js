"use strict";
exports.id = 7952;
exports.ids = [7952];
exports.modules = {

/***/ 7952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$S": () => (/* binding */ GetProductsByKindDocument),
/* harmony export */   "Dw": () => (/* binding */ GetEventsDocument),
/* harmony export */   "FL": () => (/* binding */ useGetUserLazyQuery),
/* harmony export */   "G$": () => (/* binding */ useGetWebDataLazyQuery),
/* harmony export */   "GZ": () => (/* binding */ useGetProductPaidAmountQuery),
/* harmony export */   "I9": () => (/* binding */ GetProductDocument),
/* harmony export */   "IK": () => (/* binding */ useAdminTakeMoneyFieldCancelMutation),
/* harmony export */   "JR": () => (/* binding */ useAdminHanleBillCompletedMutation),
/* harmony export */   "K4": () => (/* binding */ useAdminHandleBillRejectMutation),
/* harmony export */   "Mh": () => (/* binding */ useAdminAddClassToBrandMutation),
/* harmony export */   "NU": () => (/* binding */ useAdminCreateCountryMutation),
/* harmony export */   "Pg": () => (/* binding */ useLoginWithSocialsMutation),
/* harmony export */   "Pn": () => (/* binding */ useAdminCreateFeedbackMutation),
/* harmony export */   "QG": () => (/* binding */ useAdminEditBillStatusMutation),
/* harmony export */   "QZ": () => (/* binding */ useAdminCreateProductClassMutation),
/* harmony export */   "Q_": () => (/* binding */ useAdminCreateBrandMutation),
/* harmony export */   "T7": () => (/* binding */ useAdminDashboardLazyQuery),
/* harmony export */   "TA": () => (/* binding */ useAdminCreateEventMutation),
/* harmony export */   "TZ": () => (/* binding */ useCreateCommentsMutation),
/* harmony export */   "cb": () => (/* binding */ useCheckIntroduceCodeLazyQuery),
/* harmony export */   "fJ": () => (/* binding */ useAdminGetCommentsNoFeedbackQuery),
/* harmony export */   "fb": () => (/* binding */ useAdminGetTakeMoneyFieldsQuery),
/* harmony export */   "g$": () => (/* binding */ useAdminGetKindBrandClassQuery),
/* harmony export */   "g8": () => (/* binding */ useCreateBillMutation),
/* harmony export */   "is": () => (/* binding */ useUserCancelTakeMoneyFieldMutation),
/* harmony export */   "jK": () => (/* binding */ useChangeIsHiddenMutation),
/* harmony export */   "jP": () => (/* binding */ useHandleBillCancelMutation),
/* harmony export */   "kF": () => (/* binding */ useGetProductsBySearchInputLazyQuery),
/* harmony export */   "kg": () => (/* binding */ useGetEventsQuery),
/* harmony export */   "kw": () => (/* binding */ useAdminGetProductKindsQuery),
/* harmony export */   "m6": () => (/* binding */ useGetPaginationUsersQuery),
/* harmony export */   "p": () => (/* binding */ useAdminTakeMoneyFieldCompletedMutation),
/* harmony export */   "pM": () => (/* binding */ GetEventDocument),
/* harmony export */   "qX": () => (/* binding */ useCreateProductMutation),
/* harmony export */   "qm": () => (/* binding */ useAdminGetBillsQuery),
/* harmony export */   "uY": () => (/* binding */ useAdminCreateOrEditPriceMutation),
/* harmony export */   "xN": () => (/* binding */ useAdminCreateProductKindMutation),
/* harmony export */   "xY": () => (/* binding */ GetProductsForIndexDocument),
/* harmony export */   "y6": () => (/* binding */ useTakeMoneyMutation),
/* harmony export */   "yu": () => (/* binding */ useGetUserMoneyHistoryQuery),
/* harmony export */   "zG": () => (/* binding */ GetBrandWithProductsDocument),
/* harmony export */   "zV": () => (/* binding */ useAdminGetProductClassesQuery)
/* harmony export */ });
/* unused harmony exports AdminAddClassToBrandDocument, AdminCreateBrandDocument, AdminCreateCountryDocument, AdminCreateEventDocument, AdminCreateFeedbackDocument, AdminCreateOrEditPriceDocument, AdminCreateProductClassDocument, AdminCreateProductKindDocument, AdminEditBillStatusDocument, AdminEditProductPriceDocument, useAdminEditProductPriceMutation, AdminHanleBillCompletedDocument, AdminHandleBillRejectDocument, AdminTakeMoneyFieldCancelDocument, AdminTakeMoneyFieldCompletedDocument, ChangeIsHiddenDocument, CreateBillDocument, CreateCommentsDocument, CreateProductDocument, TakeMoneyDocument, HandleBillCancelDocument, LoginWithSocialsDocument, LogoutDocument, useLogoutMutation, UserCancelTakeMoneyFieldDocument, AdminGetKindBrandClassDocument, useAdminGetKindBrandClassLazyQuery, GetUserMoneyHistoryDocument, useGetUserMoneyHistoryLazyQuery, AdminDashboardDocument, useAdminDashboardQuery, AdminGetBillsDocument, useAdminGetBillsLazyQuery, AdminGetCommentsNoFeedbackDocument, useAdminGetCommentsNoFeedbackLazyQuery, AdminGetProductClassesDocument, useAdminGetProductClassesLazyQuery, AdminGetProductKindsDocument, useAdminGetProductKindsLazyQuery, AdminGetTakeMoneyFieldsDocument, useAdminGetTakeMoneyFieldsLazyQuery, CheckIntroduceCodeDocument, useCheckIntroduceCodeQuery, useGetBrandWithProductsQuery, useGetBrandWithProductsLazyQuery, GetCartProductDocument, useGetCartProductQuery, useGetCartProductLazyQuery, GetCommentsDocument, useGetCommentsQuery, useGetCommentsLazyQuery, useGetEventQuery, useGetEventLazyQuery, useGetEventsLazyQuery, GetGiftDocument, useGetGiftQuery, useGetGiftLazyQuery, GetGiftsDocument, useGetGiftsQuery, useGetGiftsLazyQuery, GetKindsAndBrandsDocument, useGetKindsAndBrandsQuery, useGetKindsAndBrandsLazyQuery, GetPaginationUsersDocument, useGetPaginationUsersLazyQuery, useGetProductQuery, useGetProductLazyQuery, useGetProductsForIndexQuery, useGetProductsForIndexLazyQuery, GetProductPaidAmountDocument, useGetProductPaidAmountLazyQuery, useGetProductsByKindQuery, useGetProductsByKindLazyQuery, GetProductsBySearchInputDocument, useGetProductsBySearchInputQuery, GetUserDocument, useGetUserQuery, GetWebDataDocument, useGetWebDataQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const defaultOptions = {};
const AdminAddClassToBrandDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminAddClassToBrand($brandId: Float!, $classId: Float!) {
  adminAddClassToBrand(brandId: $brandId, classId: $classId) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminAddClassToBrandMutation__
 *
 * To run a mutation, you first call `useAdminAddClassToBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminAddClassToBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminAddClassToBrandMutation, { data, loading, error }] = useAdminAddClassToBrandMutation({
 *   variables: {
 *      brandId: // value for 'brandId'
 *      classId: // value for 'classId'
 *   },
 * });
 */ function useAdminAddClassToBrandMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminAddClassToBrandDocument, options);
}
const AdminCreateBrandDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminCreateBrand($brandInput: BrandInput!) {
  adminCreateBrand(brandInput: $brandInput) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminCreateBrandMutation__
 *
 * To run a mutation, you first call `useAdminCreateBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateBrandMutation, { data, loading, error }] = useAdminCreateBrandMutation({
 *   variables: {
 *      brandInput: // value for 'brandInput'
 *   },
 * });
 */ function useAdminCreateBrandMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminCreateBrandDocument, options);
}
const AdminCreateCountryDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminCreateCountry($countryName: String!) {
  adminCreateCountry(countryName: $countryName) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminCreateCountryMutation__
 *
 * To run a mutation, you first call `useAdminCreateCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateCountryMutation, { data, loading, error }] = useAdminCreateCountryMutation({
 *   variables: {
 *      countryName: // value for 'countryName'
 *   },
 * });
 */ function useAdminCreateCountryMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminCreateCountryDocument, options);
}
const AdminCreateEventDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminCreateEvent($input: MyEventInput!) {
  adminCreateEvent(input: $input) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminCreateEventMutation__
 *
 * To run a mutation, you first call `useAdminCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateEventMutation, { data, loading, error }] = useAdminCreateEventMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */ function useAdminCreateEventMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminCreateEventDocument, options);
}
const AdminCreateFeedbackDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminCreateFeedback($feedbackInput: FeedbackInput!) {
  adminCreateFeedback(feedbackInput: $feedbackInput) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminCreateFeedbackMutation__
 *
 * To run a mutation, you first call `useAdminCreateFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateFeedbackMutation, { data, loading, error }] = useAdminCreateFeedbackMutation({
 *   variables: {
 *      feedbackInput: // value for 'feedbackInput'
 *   },
 * });
 */ function useAdminCreateFeedbackMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminCreateFeedbackDocument, options);
}
const AdminCreateOrEditPriceDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminCreateOrEditPrice($priceInput: PriceInput!, $priceId: Float!, $productId: Float!) {
  adminCreateOrEditPrice(
    priceInput: $priceInput
    priceId: $priceId
    productId: $productId
  ) {
    code
    success
    message
    price {
      id
      type
      status
      price
    }
  }
}
    `;
/**
 * __useAdminCreateOrEditPriceMutation__
 *
 * To run a mutation, you first call `useAdminCreateOrEditPriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateOrEditPriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateOrEditPriceMutation, { data, loading, error }] = useAdminCreateOrEditPriceMutation({
 *   variables: {
 *      priceInput: // value for 'priceInput'
 *      priceId: // value for 'priceId'
 *      productId: // value for 'productId'
 *   },
 * });
 */ function useAdminCreateOrEditPriceMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminCreateOrEditPriceDocument, options);
}
const AdminCreateProductClassDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminCreateProductClass($name: String!, $id: Float!) {
  adminCreateProductClass(name: $name, id: $id) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminCreateProductClassMutation__
 *
 * To run a mutation, you first call `useAdminCreateProductClassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateProductClassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateProductClassMutation, { data, loading, error }] = useAdminCreateProductClassMutation({
 *   variables: {
 *      name: // value for 'name'
 *      id: // value for 'id'
 *   },
 * });
 */ function useAdminCreateProductClassMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminCreateProductClassDocument, options);
}
const AdminCreateProductKindDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminCreateProductKind($name: String!) {
  adminCreateProductKind(name: $name) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminCreateProductKindMutation__
 *
 * To run a mutation, you first call `useAdminCreateProductKindMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminCreateProductKindMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminCreateProductKindMutation, { data, loading, error }] = useAdminCreateProductKindMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */ function useAdminCreateProductKindMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminCreateProductKindDocument, options);
}
const AdminEditBillStatusDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminEditBillStatus($billId: Float!, $status: String!, $paymentDown: Float!) {
  adminEditBillStatus(billId: $billId, status: $status, paymentDown: $paymentDown) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminEditBillStatusMutation__
 *
 * To run a mutation, you first call `useAdminEditBillStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminEditBillStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminEditBillStatusMutation, { data, loading, error }] = useAdminEditBillStatusMutation({
 *   variables: {
 *      billId: // value for 'billId'
 *      status: // value for 'status'
 *      paymentDown: // value for 'paymentDown'
 *   },
 * });
 */ function useAdminEditBillStatusMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminEditBillStatusDocument, options);
}
const AdminEditProductPriceDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminEditProductPrice($priceId: Float!, $priceChanging: Float!) {
  adminEditProductPrice(priceId: $priceId, priceChanging: $priceChanging) {
    code
    success
    message
    price {
      id
      type
      price
      status
    }
  }
}
    `;
/**
 * __useAdminEditProductPriceMutation__
 *
 * To run a mutation, you first call `useAdminEditProductPriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminEditProductPriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminEditProductPriceMutation, { data, loading, error }] = useAdminEditProductPriceMutation({
 *   variables: {
 *      priceId: // value for 'priceId'
 *      priceChanging: // value for 'priceChanging'
 *   },
 * });
 */ function useAdminEditProductPriceMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useMutation(AdminEditProductPriceDocument, options);
}
const AdminHanleBillCompletedDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminHanleBillCompleted($totalPrice: Float!, $billId: Float!) {
  adminHandleBillCompleted(totalPrice: $totalPrice, billId: $billId) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminHanleBillCompletedMutation__
 *
 * To run a mutation, you first call `useAdminHanleBillCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminHanleBillCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminHanleBillCompletedMutation, { data, loading, error }] = useAdminHanleBillCompletedMutation({
 *   variables: {
 *      totalPrice: // value for 'totalPrice'
 *      billId: // value for 'billId'
 *   },
 * });
 */ function useAdminHanleBillCompletedMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminHanleBillCompletedDocument, options);
}
const AdminHandleBillRejectDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminHandleBillReject($billId: Float!) {
  adminHandleBillReject(billId: $billId) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminHandleBillRejectMutation__
 *
 * To run a mutation, you first call `useAdminHandleBillRejectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminHandleBillRejectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminHandleBillRejectMutation, { data, loading, error }] = useAdminHandleBillRejectMutation({
 *   variables: {
 *      billId: // value for 'billId'
 *   },
 * });
 */ function useAdminHandleBillRejectMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminHandleBillRejectDocument, options);
}
const AdminTakeMoneyFieldCancelDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminTakeMoneyFieldCancel($fieldId: Float!, $cancelReason: String!) {
  adminTakeMoneyFieldCancel(fieldId: $fieldId, cancelReason: $cancelReason) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminTakeMoneyFieldCancelMutation__
 *
 * To run a mutation, you first call `useAdminTakeMoneyFieldCancelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminTakeMoneyFieldCancelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminTakeMoneyFieldCancelMutation, { data, loading, error }] = useAdminTakeMoneyFieldCancelMutation({
 *   variables: {
 *      fieldId: // value for 'fieldId'
 *      cancelReason: // value for 'cancelReason'
 *   },
 * });
 */ function useAdminTakeMoneyFieldCancelMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminTakeMoneyFieldCancelDocument, options);
}
const AdminTakeMoneyFieldCompletedDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation AdminTakeMoneyFieldCompleted($fieldId: Float!, $imageSuccess: String!) {
  adminTakeMoneyFieldCompleted(fieldId: $fieldId, imageSuccess: $imageSuccess) {
    code
    success
    message
  }
}
    `;
/**
 * __useAdminTakeMoneyFieldCompletedMutation__
 *
 * To run a mutation, you first call `useAdminTakeMoneyFieldCompletedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminTakeMoneyFieldCompletedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminTakeMoneyFieldCompletedMutation, { data, loading, error }] = useAdminTakeMoneyFieldCompletedMutation({
 *   variables: {
 *      fieldId: // value for 'fieldId'
 *      imageSuccess: // value for 'imageSuccess'
 *   },
 * });
 */ function useAdminTakeMoneyFieldCompletedMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(AdminTakeMoneyFieldCompletedDocument, options);
}
const ChangeIsHiddenDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation ChangeIsHidden($value: Boolean!) {
  changeIsHidden(value: $value) {
    code
    success
    message
  }
}
    `;
/**
 * __useChangeIsHiddenMutation__
 *
 * To run a mutation, you first call `useChangeIsHiddenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeIsHiddenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeIsHiddenMutation, { data, loading, error }] = useChangeIsHiddenMutation({
 *   variables: {
 *      value: // value for 'value'
 *   },
 * });
 */ function useChangeIsHiddenMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(ChangeIsHiddenDocument, options);
}
const CreateBillDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation CreateBill($billInput: BillInput!) {
  createBill(billInput: $billInput) {
    code
    success
    message
  }
}
    `;
/**
 * __useCreateBillMutation__
 *
 * To run a mutation, you first call `useCreateBillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBillMutation, { data, loading, error }] = useCreateBillMutation({
 *   variables: {
 *      billInput: // value for 'billInput'
 *   },
 * });
 */ function useCreateBillMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(CreateBillDocument, options);
}
const CreateCommentsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation CreateComments($commentInput: CommentInput!) {
  createComments(commentInput: $commentInput) {
    code
    success
    message
  }
}
    `;
/**
 * __useCreateCommentsMutation__
 *
 * To run a mutation, you first call `useCreateCommentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentsMutation, { data, loading, error }] = useCreateCommentsMutation({
 *   variables: {
 *      commentInput: // value for 'commentInput'
 *   },
 * });
 */ function useCreateCommentsMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(CreateCommentsDocument, options);
}
const CreateProductDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation CreateProduct($productInput: ProductInput!) {
  createProduct(productInput: $productInput) {
    code
    success
    message
  }
}
    `;
/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      productInput: // value for 'productInput'
 *   },
 * });
 */ function useCreateProductMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(CreateProductDocument, options);
}
const TakeMoneyDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation TakeMoney($field: TakeMoneyFieldInput!) {
  createTakeMoneyField(field: $field) {
    code
    success
    message
  }
}
    `;
/**
 * __useTakeMoneyMutation__
 *
 * To run a mutation, you first call `useTakeMoneyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTakeMoneyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [takeMoneyMutation, { data, loading, error }] = useTakeMoneyMutation({
 *   variables: {
 *      field: // value for 'field'
 *   },
 * });
 */ function useTakeMoneyMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(TakeMoneyDocument, options);
}
const HandleBillCancelDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation HandleBillCancel($billId: Float!, $reason: String!) {
  handleBillCancel(billId: $billId, reason: $reason) {
    code
    success
    message
  }
}
    `;
/**
 * __useHandleBillCancelMutation__
 *
 * To run a mutation, you first call `useHandleBillCancelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useHandleBillCancelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [handleBillCancelMutation, { data, loading, error }] = useHandleBillCancelMutation({
 *   variables: {
 *      billId: // value for 'billId'
 *      reason: // value for 'reason'
 *   },
 * });
 */ function useHandleBillCancelMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(HandleBillCancelDocument, options);
}
const LoginWithSocialsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation LoginWithSocials($authInput: AuthInput!) {
  loginWithsocial(authInput: $authInput) {
    code
    success
    message
    user {
      userName
      userAvatar
      id
      createdAt
    }
    token
  }
}
    `;
/**
 * __useLoginWithSocialsMutation__
 *
 * To run a mutation, you first call `useLoginWithSocialsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginWithSocialsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginWithSocialsMutation, { data, loading, error }] = useLoginWithSocialsMutation({
 *   variables: {
 *      authInput: // value for 'authInput'
 *   },
 * });
 */ function useLoginWithSocialsMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(LoginWithSocialsDocument, options);
}
const LogoutDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation Logout {
  logout {
    code
    success
  }
}
    `;
/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */ function useLogoutMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useMutation(LogoutDocument, options);
}
const UserCancelTakeMoneyFieldDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation UserCancelTakeMoneyField($takeMoneyFieldId: Float!) {
  userCancelTakeMoneyField(takeMoneyFieldId: $takeMoneyFieldId) {
    code
    success
    message
  }
}
    `;
/**
 * __useUserCancelTakeMoneyFieldMutation__
 *
 * To run a mutation, you first call `useUserCancelTakeMoneyFieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserCancelTakeMoneyFieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userCancelTakeMoneyFieldMutation, { data, loading, error }] = useUserCancelTakeMoneyFieldMutation({
 *   variables: {
 *      takeMoneyFieldId: // value for 'takeMoneyFieldId'
 *   },
 * });
 */ function useUserCancelTakeMoneyFieldMutation(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useMutation(UserCancelTakeMoneyFieldDocument, options);
}
const AdminGetKindBrandClassDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query AdminGetKindBrandClass {
  adminGetKindBrandClass {
    code
    success
    message
    kinds {
      id
      name
    }
    classes {
      id
      name
      kind {
        id
      }
    }
    brands {
      id
      brandName
    }
  }
}
    `;
/**
 * __useAdminGetKindBrandClassQuery__
 *
 * To run a query within a React component, call `useAdminGetKindBrandClassQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminGetKindBrandClassQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminGetKindBrandClassQuery({
 *   variables: {
 *   },
 * });
 */ function useAdminGetKindBrandClassQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(AdminGetKindBrandClassDocument, options);
}
function useAdminGetKindBrandClassLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(AdminGetKindBrandClassDocument, options);
}
const GetUserMoneyHistoryDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetUserMoneyHistory {
  getUserMoneyHistory {
    code
    success
    message
    moneyBonuses {
      moneyNumber
      description
      createdAt
    }
    takeMoneyFields {
      id
      accoutName
      accountNumber
      accountBankName
      cancelReason
      isSuccessImage
      money
      status
      createdAt
    }
  }
}
    `;
/**
 * __useGetUserMoneyHistoryQuery__
 *
 * To run a query within a React component, call `useGetUserMoneyHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMoneyHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMoneyHistoryQuery({
 *   variables: {
 *   },
 * });
 */ function useGetUserMoneyHistoryQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetUserMoneyHistoryDocument, options);
}
function useGetUserMoneyHistoryLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetUserMoneyHistoryDocument, options);
}
const AdminDashboardDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query AdminDashboard {
  dashboard {
    code
    success
    takeMoneyField
    cancel
    confirmWaiting
    confirmed
    packed
    delivering
    commentNoFeedback
  }
}
    `;
/**
 * __useAdminDashboardQuery__
 *
 * To run a query within a React component, call `useAdminDashboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminDashboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminDashboardQuery({
 *   variables: {
 *   },
 * });
 */ function useAdminDashboardQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(AdminDashboardDocument, options);
}
function useAdminDashboardLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(AdminDashboardDocument, options);
}
const AdminGetBillsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query AdminGetBills($type: String!) {
  adminGetBills(type: $type) {
    code
    success
    message
    bills {
      id
      notice
      deliveryPrice
      totalPrice
      introducePrice
      billStatus
      paymentDown
      paymentType
      billProducts {
        productName
        productAmount
        productPrice
        productType
      }
      customer {
        customerName
        customerPhone
        city
        province
        address
        id
      }
    }
  }
}
    `;
/**
 * __useAdminGetBillsQuery__
 *
 * To run a query within a React component, call `useAdminGetBillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminGetBillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminGetBillsQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */ function useAdminGetBillsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(AdminGetBillsDocument, options);
}
function useAdminGetBillsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(AdminGetBillsDocument, options);
}
const AdminGetCommentsNoFeedbackDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query AdminGetCommentsNoFeedback {
  adminGetCommentsNoFeedback {
    code
    success
    message
    comments {
      id
      content
      user {
        userAvatar
        userName
      }
      product {
        productName
        priceToDisplay
      }
    }
  }
}
    `;
/**
 * __useAdminGetCommentsNoFeedbackQuery__
 *
 * To run a query within a React component, call `useAdminGetCommentsNoFeedbackQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminGetCommentsNoFeedbackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminGetCommentsNoFeedbackQuery({
 *   variables: {
 *   },
 * });
 */ function useAdminGetCommentsNoFeedbackQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(AdminGetCommentsNoFeedbackDocument, options);
}
function useAdminGetCommentsNoFeedbackLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(AdminGetCommentsNoFeedbackDocument, options);
}
const AdminGetProductClassesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query AdminGetProductClasses {
  adminGetProductClasses {
    code
    success
    message
    classes {
      id
      name
    }
  }
}
    `;
/**
 * __useAdminGetProductClassesQuery__
 *
 * To run a query within a React component, call `useAdminGetProductClassesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminGetProductClassesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminGetProductClassesQuery({
 *   variables: {
 *   },
 * });
 */ function useAdminGetProductClassesQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(AdminGetProductClassesDocument, options);
}
function useAdminGetProductClassesLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(AdminGetProductClassesDocument, options);
}
const AdminGetProductKindsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query AdminGetProductKinds {
  adminGetProductKinds {
    code
    success
    message
    kinds {
      id
      name
    }
  }
}
    `;
/**
 * __useAdminGetProductKindsQuery__
 *
 * To run a query within a React component, call `useAdminGetProductKindsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminGetProductKindsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminGetProductKindsQuery({
 *   variables: {
 *   },
 * });
 */ function useAdminGetProductKindsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(AdminGetProductKindsDocument, options);
}
function useAdminGetProductKindsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(AdminGetProductKindsDocument, options);
}
const AdminGetTakeMoneyFieldsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query AdminGetTakeMoneyFields {
  adminGetTakeMoneyFields {
    code
    success
    message
    fields {
      id
      accoutName
      accountNumber
      accountBankName
      status
      money
      user {
        moneyDepot
        id
      }
    }
  }
}
    `;
/**
 * __useAdminGetTakeMoneyFieldsQuery__
 *
 * To run a query within a React component, call `useAdminGetTakeMoneyFieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminGetTakeMoneyFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminGetTakeMoneyFieldsQuery({
 *   variables: {
 *   },
 * });
 */ function useAdminGetTakeMoneyFieldsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(AdminGetTakeMoneyFieldsDocument, options);
}
function useAdminGetTakeMoneyFieldsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(AdminGetTakeMoneyFieldsDocument, options);
}
const CheckIntroduceCodeDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query CheckIntroduceCode($introduceCode: Float!, $totalPrice: Float!) {
  checkIntroduceCode(introduceCode: $introduceCode, totalPrice: $totalPrice) {
    code
    success
    message
    introducePrice
  }
}
    `;
/**
 * __useCheckIntroduceCodeQuery__
 *
 * To run a query within a React component, call `useCheckIntroduceCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckIntroduceCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckIntroduceCodeQuery({
 *   variables: {
 *      introduceCode: // value for 'introduceCode'
 *      totalPrice: // value for 'totalPrice'
 *   },
 * });
 */ function useCheckIntroduceCodeQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(CheckIntroduceCodeDocument, options);
}
function useCheckIntroduceCodeLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(CheckIntroduceCodeDocument, options);
}
const GetBrandWithProductsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetBrandWithProducts($paginationOptions: PaginationOptionsInput!) {
  getBrandWithProducts(paginationOptions: $paginationOptions) {
    code
    success
    message
    pageSize
    totalCount
    brandWithProducts {
      id
      brandName
      thumbnail
      description
      productClasses {
        id
        name
      }
      products {
        id
        productName
        salesPercent
        minPrice
        maxPrice
        commentCount
        averageRating
        sales
        thumbnail
        class {
          name
        }
      }
    }
  }
}
    `;
/**
 * __useGetBrandWithProductsQuery__
 *
 * To run a query within a React component, call `useGetBrandWithProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrandWithProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrandWithProductsQuery({
 *   variables: {
 *      paginationOptions: // value for 'paginationOptions'
 *   },
 * });
 */ function useGetBrandWithProductsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetBrandWithProductsDocument, options);
}
function useGetBrandWithProductsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetBrandWithProductsDocument, options);
}
const GetCartProductDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetCartProduct($localBillProducts: [BillProductInput!]!) {
  getCartProduct(localBillProducts: $localBillProducts) {
    code
    success
    message
    products {
      productName
      productType
      productPrice
      productAmount
      productThumbnail
      priceIdForLocal
    }
  }
}
    `;
/**
 * __useGetCartProductQuery__
 *
 * To run a query within a React component, call `useGetCartProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartProductQuery({
 *   variables: {
 *      localBillProducts: // value for 'localBillProducts'
 *   },
 * });
 */ function useGetCartProductQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetCartProductDocument, options);
}
function useGetCartProductLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetCartProductDocument, options);
}
const GetCommentsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query getComments($skip: Float!, $productId: Float!) {
  getComments(skip: $skip, productId: $productId) {
    code
    success
    message
    totalCount
    cursor
    hasMore
    comments {
      user {
        userName
        userAvatar
      }
      content
      rating
      imagesComment
      createdAt
      feedbacks {
        admin {
          adminName
          avatar
        }
        content
        createdAt
      }
    }
  }
}
    `;
/**
 * __useGetCommentsQuery__
 *
 * To run a query within a React component, call `useGetCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      productId: // value for 'productId'
 *   },
 * });
 */ function useGetCommentsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetCommentsDocument, options);
}
function useGetCommentsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetCommentsDocument, options);
}
const GetEventDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetEvent($eventId: Float!) {
  getEvent(eventId: $eventId) {
    code
    success
    message
    myEvent {
      id
      title
      thumbnailForDesktop
      thumbnailForMobile
      content
      createdAt
    }
  }
}
    `;
/**
 * __useGetEventQuery__
 *
 * To run a query within a React component, call `useGetEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventQuery({
 *   variables: {
 *      eventId: // value for 'eventId'
 *   },
 * });
 */ function useGetEventQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetEventDocument, options);
}
function useGetEventLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetEventDocument, options);
}
const GetEventsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query getEvents {
  getEvents {
    code
    success
    message
    myEvents {
      id
      title
      content
      thumbnailForDesktop
      thumbnailForMobile
    }
  }
}
    `;
/**
 * __useGetEventsQuery__
 *
 * To run a query within a React component, call `useGetEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventsQuery({
 *   variables: {
 *   },
 * });
 */ function useGetEventsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetEventsDocument, options);
}
function useGetEventsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetEventsDocument, options);
}
const GetGiftDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetGift($priceCondition: Float!) {
  getGift(priceCondition: $priceCondition) {
    code
    success
    message
    gifts {
      price
      type
      status
      isGift
      product {
        thumbnail
        productName
        priceToDisplay
        sales
      }
    }
  }
}
    `;
/**
 * __useGetGiftQuery__
 *
 * To run a query within a React component, call `useGetGiftQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGiftQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGiftQuery({
 *   variables: {
 *      priceCondition: // value for 'priceCondition'
 *   },
 * });
 */ function useGetGiftQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetGiftDocument, options);
}
function useGetGiftLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetGiftDocument, options);
}
const GetGiftsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetGifts($priceCondition: Float!) {
  getGifts(priceCondition: $priceCondition) {
    code
    success
    message
    gifts {
      price
      type
      status
      isGift
      product {
        thumbnail
        productName
        priceToDisplay
        sales
      }
    }
  }
}
    `;
/**
 * __useGetGiftsQuery__
 *
 * To run a query within a React component, call `useGetGiftsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGiftsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGiftsQuery({
 *   variables: {
 *      priceCondition: // value for 'priceCondition'
 *   },
 * });
 */ function useGetGiftsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetGiftsDocument, options);
}
function useGetGiftsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetGiftsDocument, options);
}
const GetKindsAndBrandsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetKindsAndBrands {
  getKindsAndBrands {
    code
    success
    kinds {
      id
      name
    }
    brands {
      id
      brandName
    }
  }
}
    `;
/**
 * __useGetKindsAndBrandsQuery__
 *
 * To run a query within a React component, call `useGetKindsAndBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetKindsAndBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetKindsAndBrandsQuery({
 *   variables: {
 *   },
 * });
 */ function useGetKindsAndBrandsQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetKindsAndBrandsDocument, options);
}
function useGetKindsAndBrandsLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetKindsAndBrandsDocument, options);
}
const GetPaginationUsersDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetPaginationUsers($skip: Float!) {
  getPaginationUsers(skip: $skip) {
    code
    success
    message
    totalCount
    userHideCount
    hasMore
    cursor
    users {
      userName
      userAvatar
    }
  }
}
    `;
/**
 * __useGetPaginationUsersQuery__
 *
 * To run a query within a React component, call `useGetPaginationUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginationUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginationUsersQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *   },
 * });
 */ function useGetPaginationUsersQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetPaginationUsersDocument, options);
}
function useGetPaginationUsersLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetPaginationUsersDocument, options);
}
const GetProductDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetProduct($productId: ID!) {
  getProduct(productId: $productId) {
    code
    message
    success
    product {
      id
      thumbnail
      productName
      imgDescription
      imageList
      description
      priceToDisplay
      otherInfo
      kind {
        id
        name
      }
      country {
        countryName
      }
      prices {
        id
        type
        price
        salesPercent
        priceAfterDiscount
        status
      }
      brand {
        id
        brandName
      }
      comments {
        user {
          userName
          userAvatar
        }
        content
        rating
        imagesComment
        createdAt
        feedbacks {
          admin {
            adminName
            avatar
          }
          content
          createdAt
        }
      }
    }
  }
}
    `;
/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */ function useGetProductQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetProductDocument, options);
}
function useGetProductLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetProductDocument, options);
}
const GetProductsForIndexDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetProductsForIndex($countryName: String!) {
  getProductsForIndex(countryName: $countryName) {
    code
    success
    message
    kinds {
      id
      name
      countries {
        countryName
      }
      products {
        id
        productName
        averageRating
        sales
        thumbnail
        maxPrice
        minPrice
        salesPercent
        priceAfterDiscount
        commentCount
        class {
          name
        }
      }
    }
  }
}
    `;
/**
 * __useGetProductsForIndexQuery__
 *
 * To run a query within a React component, call `useGetProductsForIndexQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsForIndexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsForIndexQuery({
 *   variables: {
 *      countryName: // value for 'countryName'
 *   },
 * });
 */ function useGetProductsForIndexQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetProductsForIndexDocument, options);
}
function useGetProductsForIndexLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetProductsForIndexDocument, options);
}
const GetProductPaidAmountDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetProductPaidAmount {
  getProductPaidAmount
}
    `;
/**
 * __useGetProductPaidAmountQuery__
 *
 * To run a query within a React component, call `useGetProductPaidAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductPaidAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductPaidAmountQuery({
 *   variables: {
 *   },
 * });
 */ function useGetProductPaidAmountQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery(GetProductPaidAmountDocument, options);
}
function useGetProductPaidAmountLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetProductPaidAmountDocument, options);
}
const GetProductsByKindDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetProductsByKind($paginationOptions: PaginationOptionsInput!, $countryName: String!) {
  getProductsByKind(
    paginationOptions: $paginationOptions
    countryName: $countryName
  ) {
    code
    success
    message
    pageSize
    totalCount
    kindId
    kindName
    productClasses {
      id
      name
    }
    products {
      id
      productName
      priceToDisplay
      commentCount
      averageRating
      minPrice
      maxPrice
      salesPercent
      sales
      thumbnail
      prices {
        id
        type
        price
        status
      }
      class {
        name
      }
    }
  }
}
    `;
/**
 * __useGetProductsByKindQuery__
 *
 * To run a query within a React component, call `useGetProductsByKindQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsByKindQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsByKindQuery({
 *   variables: {
 *      paginationOptions: // value for 'paginationOptions'
 *      countryName: // value for 'countryName'
 *   },
 * });
 */ function useGetProductsByKindQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetProductsByKindDocument, options);
}
function useGetProductsByKindLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useLazyQuery(GetProductsByKindDocument, options);
}
const GetProductsBySearchInputDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetProductsBySearchInput($value: String!) {
  getProductsBySearchInput(value: $value) {
    code
    success
    message
    products {
      id
      productName
      thumbnail
      minPrice
      maxPrice
    }
  }
}
    `;
/**
 * __useGetProductsBySearchInputQuery__
 *
 * To run a query within a React component, call `useGetProductsBySearchInputQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsBySearchInputQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsBySearchInputQuery({
 *   variables: {
 *      value: // value for 'value'
 *   },
 * });
 */ function useGetProductsBySearchInputQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetProductsBySearchInputDocument, options);
}
function useGetProductsBySearchInputLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(GetProductsBySearchInputDocument, options);
}
const GetUserDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query getUser {
  getUser {
    code
    success
    message
    user {
      userName
      userAvatar
      confirmWaitingCount
      packedCount
      moneyDepot
      deliveringCount
      introduceCode
      bills {
        id
        billStatus
        createdAt
        paymentType
        paymentDown
        totalPrice
        commentPrice
        introducePrice
        isCommented
        billProducts {
          productThumbnail
          productName
          productAmount
          productType
          productPrice
        }
        customer {
          customerName
          customerPhone
          address
          city
          province
        }
      }
    }
  }
}
    `;
/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */ function useGetUserQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetUserDocument, options);
}
function useGetUserLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(GetUserDocument, options);
}
const GetWebDataDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    query GetWebData($localBillProducts: [BillProductInput!]!) {
  getWebData(localBillProducts: $localBillProducts) {
    code
    success
    message
    token
    avatar
    type
    isHidden
    products {
      productName
      productType
      productPrice
      productAmount
      productThumbnail
      priceIdForLocal
      countryNameForDeliveryPrice
    }
    brands {
      id
      brandName
    }
  }
}
    `;
/**
 * __useGetWebDataQuery__
 *
 * To run a query within a React component, call `useGetWebDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWebDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWebDataQuery({
 *   variables: {
 *      localBillProducts: // value for 'localBillProducts'
 *   },
 * });
 */ function useGetWebDataQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return Apollo.useQuery(GetWebDataDocument, options);
}
function useGetWebDataLazyQuery(baseOptions) {
    const options = {
        ...defaultOptions,
        ...baseOptions
    };
    return _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery(GetWebDataDocument, options);
}


/***/ })

};
;