import { ChevronRightIcon } from "@chakra-ui/icons";

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

interface Props {
  data: ProductKindResponse;
}

const Index: NextPage<Props> = ({ data }) => {
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
                            router.push(`/kind/${item.id}`);
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
                                  className="col l-2-4 m-4 c-6"
                                  key={product.id}
                                  onClick={() =>
                                    router.push(`/product/${product.id}`)
                                  }
                                >
                                  <div className={styles.productItem}>
                                    <div className={styles.productType}>
                                      <img src={product.thumbnail} />
                                      <div>{product.class?.name}</div>
                                    </div>
                                    <div className={styles.productName}>
                                      <h2 className="textCapitalize">
                                        {product.productName}
                                      </h2>
                                    </div>
                                    {product.averageRating > 0 ? (
                                      <div
                                        className={styles.productNameAndRating}
                                      >
                                        <StarRatings
                                          rating={4.5}
                                          starDimension="12px"
                                          starSpacing="1px"
                                          starRatedColor="black"
                                        />
                                        <h3>
                                          {MoneyConverter(
                                            product.priceToDisplay
                                          )}
                                        </h3>
                                      </div>
                                    ) : (
                                      //No
                                      <div
                                        className={styles.productNameAndRating}
                                      >
                                        <div></div>
                                        <h3>
                                          {MoneyConverter(
                                            product.priceToDisplay
                                          )}
                                        </h3>
                                      </div>
                                    )}

                                    <div className={styles.paidInfo}>
                                      <h4>Đã bán:{product.sales}</h4>
                                      <h4>Bình luận:{product.commentCount}</h4>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<GetProductsForIndexQuery>({
    query: GetProductsForIndexDocument,
    variables: {
      take: 5,
    },
  });

  return {
    props: {
      data: data.getProductsForIndex,
    },
  };
};

export default Index;
