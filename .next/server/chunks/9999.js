exports.id = 9999;
exports.ids = [9999];
exports.modules = {

/***/ 2837:
/***/ ((module) => {

// Exports
module.exports = {
	"productsContainer": "products_productsContainer__SPHWR",
	"productsList": "products_productsList__DrzY_",
	"headingContainer": "products_headingContainer__Y9dhw",
	"heading": "products_heading__zQmrd",
	"loadMore": "products_loadMore__XC70E",
	"productList": "products_productList__YyIwd",
	"productItem": "products_productItem__v5tct",
	"productType": "products_productType__vRVHe",
	"productClassContainer": "products_productClassContainer__G34wc",
	"salesContainer": "products_salesContainer__tbFAe",
	"salesContainerNone": "products_salesContainerNone__16Q5Y",
	"productName": "products_productName___KI_w",
	"productNameAndRating": "products_productNameAndRating__hoSiA",
	"paidInfo": "products_paidInfo__KP8xs",
	"paidController": "products_paidController__cZBMO",
	"iconOnProduct": "products_iconOnProduct__v5dxT",
	"btnPayNow": "products_btnPayNow__ktrgS",
	"productContainer": "products_productContainer__hOaye",
	"productHeader": "products_productHeader__FnKXU",
	"filterWrapper": "products_filterWrapper__cUcsd",
	"filterContainer": "products_filterContainer__zqxbZ",
	"inputFilter": "products_inputFilter__2EbtQ",
	"inputCustom": "products_inputCustom__SOELx",
	"pagination": "products_pagination__YgP50",
	"select": "products_select__v0C3N"
};


/***/ }),

/***/ 6913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/utils/other/Pagination.ts

const DOTS = "...";
const range = (start, end)=>{
    let length = end - start + 1;
    return Array.from({
        length
    }, (_, idx)=>idx + start
    );
};
const usePagination = ({ totalCount , pageSize , siblingCount =1 , currentPage  })=>{
    const paginationRange = (0,external_react_.useMemo)(()=>{
        const totalPageCount = Math.ceil(totalCount / pageSize);
        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;
        /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */ if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */ const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);
            return [
                ...leftRange,
                DOTS,
                totalPageCount
            ];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [
                firstPageIndex,
                DOTS,
                ...rightRange
            ];
        }
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [
                firstPageIndex,
                DOTS,
                ...middleRange,
                DOTS,
                lastPageIndex
            ];
        }
    }, [
        totalCount,
        pageSize,
        siblingCount,
        currentPage
    ]);
    return paginationRange;
};

;// CONCATENATED MODULE: ./src/components/Pagination.tsx




const Pagination = (props)=>{
    const { onPageChange , totalCount , siblingCount =1 , currentPage , pageSize , className  } = props;
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });
    if (!paginationRange) {
        console.log("pagination is null");
        return null;
    }
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }
    const onNext = ()=>{
        onPageChange(currentPage + 1);
    };
    const onPrevious = ()=>{
        onPageChange(currentPage - 1);
    };
    let lastPage = paginationRange[paginationRange.length - 1];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: external_classnames_default()("pagination-container", {
            [className]: className
        }),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: external_classnames_default()("pagination-item", {
                    disabled: currentPage === 1
                }),
                onClick: onPrevious,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "arrow left"
                })
            }),
            paginationRange.map((pageNumber)=>{
                if (pageNumber === DOTS) {
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "pagination-item dots",
                        children: "\u2026"
                    }, pageNumber);
                }
                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: external_classnames_default()("pagination-item", {
                        selected: pageNumber === currentPage
                    }),
                    onClick: ()=>onPageChange(pageNumber)
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: pageNumber
                    })
                }, pageNumber);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: external_classnames_default()("pagination-item", {
                    disabled: currentPage === lastPage
                }),
                onClick: onNext,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "arrow right"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Pagination = (Pagination);


/***/ })

};
;