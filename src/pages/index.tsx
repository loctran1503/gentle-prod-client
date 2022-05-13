import {  ChevronRightIcon } from "@chakra-ui/icons";

import clsx from "clsx";
import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import styles from "../assets/css/pages/index.module.css";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import ShopInfo from "../components/ShopInfo";
import WebEvent from "../components/WebEvent";
import {
  GetProductsForIndexDocument,
  GetProductsForIndexQuery,
  ProductKindResponse,
} from "../generated/graphql";
import { client } from "../utils/lib/ApolloClient";
import { MoneyConverter } from "../utils/other/ConvertToMoney";
import { isMobile } from "react-device-detect";
import { AMERICA } from "../utils/other/constants";
import { localSelector } from "../store/reducers/localSlice";
import { useSelector } from "react-redux";



interface Props {
  data: ProductKindResponse;
}

const Index: NextPage<Props> = ({ data }) => {
  console.log(data)
  const { countryName } = useSelector(localSelector);
  const StarRatings = dynamic(() => import("react-star-ratings"));

  //Server side
  const router = useRouter();

  return (
    <div>
      <Navbar />
      <div className="distance">
        {/* Mobile */}
        {isMobile ? (
          <div className="grid">
            <div className="row">
              <div className="col c-12">
                <div className={styles.webInfo}>
                  <ShopInfo />
                </div>
              </div>
              <div className="col c-12">
                <WebEvent />
              </div>
            </div>
          </div>
        ) : (
          // Desktop
          <div className="grid wide">
            <div className="row">
              <div className="col l-5 m-5 c-12">
                <div className={styles.webInfoDesktop}>
                  {" "}
                  <ShopInfo />{" "}
                </div>
              </div>
              <div className="col l-7 m-7 c-0">
                <WebEvent />
              </div>
            </div>
          </div>
        )}

        <div className="grid wide">
          <div className="row">
            <div className="l-2 l-o-5 m-2 m-o-5 c-6 c-o-3">
              <div className={clsx("brandName", styles.countryName)}>
                {countryName}
              </div>
            </div>
          </div>
          <div className="row">
            <div className={clsx("col l-12 m-12 c-12")}>
              {data.kinds &&
                data.kinds.map((item) => {
                  return (
                    <div className={styles.productsList} key={item.id}>
                      <div className={styles.headingContainer}>
                        <h2 className={styles.heading}>{item.name}</h2>
                        <div
                          className={styles.loadMore}
                          onClick={() => {
                            const countryNameProps =
                              router.query.countryName || countryName;
                            router.push({
                              pathname: `/kind/${item.id}`,
                              query: {
                                kindId: item.id,
                                countryName: countryNameProps,
                              },
                            });
                          }}
                        >
                          <ChevronRightIcon />
                          Xem thêm
                        </div>
                      </div>
                      <div className="row">
                        <div className="col l-12 m-12 c-12">
                          <div className={styles.productList}>
                            <div className="row">
                              {item.products?.map((product) => (
                                <div
                                  key={product.id}
                                  className="col l-2-4 m-3 c-6"
                                  onClick={() =>
                                    router.push(`/product/${product.id}`)
                                  }
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
                                        <div
                                          className={styles.salesContainerNone}
                                        >
                                          <h2>{product.salesPercent}%</h2>
                                        </div>
                                      )}

                                      <div
                                        className={styles.productClassContainer}
                                      >
                                        {product.class?.name}
                                      </div>
                                    </div>
                                    <div className={styles.productName}>
                                      <h2 className="textCapitalize">
                                        {product.productName}
                                      </h2>
                                    </div>

                                    {product.minPrice === product.maxPrice ? (
                                      <div
                                        className={styles.productNameAndRating}
                                      >
                                        <h3 style={{ marginTop: 2 }}>
                                          {MoneyConverter(product.minPrice)}
                                        </h3>
                                      </div>
                                    ) : (
                                      <div
                                        className={styles.productNameAndRating}
                                      >
                                        <h3>
                                          {MoneyConverter(product.minPrice)}
                                        </h3>
                                        <span style={{ margin: "0 4px" }}>
                                          -
                                        </span>
                                        <h3>
                                          {MoneyConverter(product.maxPrice)}
                                        </h3>
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
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const countryName = query.countryName || AMERICA;
  const { data } = await client.query<GetProductsForIndexQuery>({
    query: GetProductsForIndexDocument,
    variables: {
      take: 8,
      countryName,
    },
  });

  return {
    props: {
      data: data.getProductsForIndex,
    },
  };
};

export default Index;
