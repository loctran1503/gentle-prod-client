import { useMediaQuery } from "@chakra-ui/react";
import clsx from "clsx";

import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import styles from "../../assets/css/components/products.module.css";

import Footer from "../../components/Footer";
import MySpinner from "../../components/MySpinner";
import Navbar from "../../components/Navbar";
import Pagination from "../../components/Pagination";
import {
  GetProductsByKindDocument,
  GetProductsByKindQuery,
  PaginationOptionsInput,
  PaginationProductsResponse,
} from "../../generated/graphql";
import { client } from "../../utils/lib/ApolloClient";
import { MoneyConverter } from "../../utils/other/ConvertToMoney";
import { FilterRadioProps } from "../../utils/type/customType";

const radioTypeList: FilterRadioProps[] = [
  {
    value: "SALES_DESC",
    name: "Bán chạy",
  },
  {
    value: "PRICE_DESC",
    name: "Giá giảm",
  },
  {
    value: "PRICE_ASC",
    name: "Giá tăng",
  },
  {
    value: "DATE_DESC",
    name: "Sản phẩm mới",
  },
  {
    value: "DISCOUNT_DESC",
    name: "Phần trăm giảm",
  },
];
interface Props {
  data: PaginationProductsResponse;
}

const KindId: NextPage<Props> = ({ data }) => {
  const [mySpinner, setMySpinner] = useState(true);
  const [filterChecked, setFilterChecked] = useState("SALES_DESC");
  const [productClassIdChecked, setProductClassIdChecked] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile] = useMediaQuery("(max-width: 739px)");
  const router = useRouter();
  const [products, setProducts] = useState<PaginationProductsResponse>(data);
  useEffect(() => {
    if (!data) {
      router.push("/page-404");
    } else {
      setProducts(data);
      setMySpinner(false);
    }
  }, [data]);
  useEffect(() => {
    if (Object.keys(router.query).length === 0) setCurrentPage(1);
    if (products.pageSize && router.query.skip) {
      const current = +router.query.skip / products.pageSize + 1;

      setCurrentPage(current);
    }
    // Set state for client
    if (router.query.type) {
      setFilterChecked(router.query.type as string);
    }
    if (router.query.productClassId) {
      setProductClassIdChecked(
    
       +router.query.productClassId,
      );
    }
  }, [router.query]);

  const handlePageChange = (page: number) => {
    const skip = data.pageSize! * (page - 1);

    setCurrentPage(page);

    router.push(
      {
        pathname: `/kind/${router.query.kindId}`,
        query: {
          skip,
          type: filterChecked,
          kindId: router.query.kindId,
          productClassId: router.query.productClassId,
          countryName:router.query.countryName
        },
      },
      undefined,
      { scroll: false }
    );
  };

  const handleFilterChange = (value: string) => {
    setFilterChecked(value);
    setCurrentPage(1);
    router.push(
      {
        pathname: `/kind/${router.query.kindId}`,
        query: {
          skip: 0,
          type: value,
          kindId: router.query.kindId,
          productClassId: router.query.productClassId,
          countryName:router.query.countryName
        },
      },
      undefined,
      { scroll: false }
    );
  };

  const handleProductClassChange = (id: number) => {
    const item = data.productClasses?.find((item) => item.id === id);

    if (item) {
      setProductClassIdChecked(id);
    }
    setCurrentPage(1);
    router.push(
      {
        pathname: `/kind/${router.query.kindId}`,
        query: {
          skip: 0,
          type: router.query.type,
          kindId: router.query.kindId,
          productClassId: id,
          countryName:router.query.countryName
        },
      },
      undefined,
      { scroll: false }
    );
  };

  const handleToProductDetail = (id: number) => {
    const skip = data.pageSize! * (currentPage - 1);
    router.push({
      pathname: `/product/${id}`,
      query: { productId: id, skip, type: filterChecked },
    });
  };
  return (
    <div>
      <Navbar />
      <div className="distance">
        <div className="grid wide">
          <div className="row">
            <div className="col l-4 l-o-4 m-4 m-o-4 c-12">
              {data.kindName && <h2 className="brandName">{data.kindName}</h2>}
            </div>
          </div>
        </div>
        {/* <Brand kindId={+router.query.kindId!} /> */}

        <div className="grid wide">
          <div className="row">
            <div className={clsx("col l-12 m-12 c-12")}>
              <div className={styles.productContainer}>
                <div className={styles.productHeader}>
                  {isMobile ? (
                    <select
                      className="select_custom"
                      value={filterChecked}
                      onChange={(event) =>
                        handleFilterChange(event.target.value)
                      }
                    >
                      {radioTypeList.map((item) => (
                        <option value={item.value} key={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className={styles.filterWrapper}>
                      {radioTypeList.map((item) => (
                        <div
                          className={styles.filterContainer}
                          key={item.value}
                        >
                          <label>
                            <input
                              onChange={() => handleFilterChange(item.value)}
                              type="radio"
                              checked={filterChecked === item.value}
                              className={styles.inputFilter}
                            />
                            <div className={styles.inputCustom}></div>
                            {item.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}

                  <select
                    value={productClassIdChecked}
                    className="select_custom"
                    onChange={(e) => handleProductClassChange(+e.target.value)}
                  >
                    <option value={0}>Tất cả</option>
                    {data.productClasses?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <div className={styles.productList}>
                <div className="row">
                  {data.products &&
                    products.products!.map((product) => (
                      <div
                        className="col l-2-4 m-4 c-6"
                        key={product.id}
                        onClick={() => handleToProductDetail(product.id)}
                      >
                        <div className={styles.productItem}>
                          <div className={styles.productType}>
                            <img src={product.thumbnail} />
                            {product.salesPercent &&
                            product.salesPercent > 0 ? (
                              <div className={styles.salesContainer}>
                                <h2>{product.salesPercent}%</h2>
                              </div>
                            ) : (
                              <div className={styles.salesContainerNone}>
                                <h2>{product.salesPercent}%</h2>
                              </div>
                            )}
                            <div className={styles.productClassContainer}>
                              {product.class?.name}
                            </div>
                          </div>
                          <div className={styles.productName}>
                            <h2 className="textCapitalize">
                              {product.productName}
                            </h2>
                          </div>
                          {product.minPrice === product.maxPrice ? (
                            <div className={styles.productNameAndRating}>
                              <h3 style={{ marginTop: 2 }}>
                                {MoneyConverter(product.minPrice)}
                              </h3>
                            </div>
                          ) : (
                            <div className={styles.productNameAndRating}>
                              <h3>{MoneyConverter(product.minPrice)}</h3>
                              <span style={{ margin: "0 4px" }}>-</span>
                              <h3>{MoneyConverter(product.maxPrice)}</h3>
                            </div>
                          )}
                          {product.averageRating > 0 ? (
                            <>
                              <StarRatings
                                rating={4.5}
                                starDimension="12px"
                                starSpacing="1px"
                                starRatedColor="black"
                              />
                            </>
                          ) : (
                            <>
                              <StarRatings
                                rating={0}
                                starDimension="12px"
                                starSpacing="1px"
                                starRatedColor="black"
                              />
                            </>
                          )}
                          <div className={styles.paidInfo}>
                            {product.sales && product.sales > 0 ? (
                              <h4 style={{ color: "black" }}>
                                Đã bán:{product.sales}
                              </h4>
                            ) : (
                              <h4>Đã bán:{product.sales}</h4>
                            )}
                            {product.sales && product.sales > 0 ? (
                              <h4 style={{ color: "black" }}>
                                Đánh giá:{product.commentCount}
                              </h4>
                            ) : (
                              <h4>Đánh giá:{product.commentCount}</h4>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="l-12 m-12 c-12">
              <div className={styles.pagination}>
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={products.totalCount || 0}
                  pageSize={products.pageSize || 0}
                  onPageChange={(page: number) => handlePageChange(page)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {mySpinner && <MySpinner />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const skip = query.skip || 0;
  const type = query.type || "SALES_DESC";
  const kindId = query.kindId;
  const productClassId = query.productClassId || 0;

  const paginationOptions: PaginationOptionsInput = {
    skip: +skip,
    type: type as string,
    kindId: +kindId!,
    productClassId: +productClassId,
  };

  const { data } = await client.query<GetProductsByKindQuery>({
    query: GetProductsByKindDocument,
    variables: {
      paginationOptions,
      countryName:query.countryName || ""
    },
  });
 

  return {
    props: {
      data: data.getProductsByKind,
    },
  };
};

export default KindId;
