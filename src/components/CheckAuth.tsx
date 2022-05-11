import { useToast } from "@chakra-ui/react";
import React, { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BillProductInput, useGetWebDataLazyQuery } from "../generated/graphql";
import {
  authSelector,
  setIsAuthenticated,
  setIsHidden,
  setLoading,
  setType,
  setUserAvatar
} from "../store/reducers/authSlice";
import {
  setBillProductsFromLocal,
  setProductBrandsProps
} from "../store/reducers/localSlice";

import JwtManager from "../utils/other/JwtManager";
import {
  ProductBrandProps
} from "../utils/type/redux/reduxType";
import FacebookMessenger from "./FacebookMessenger";
import MySpinner from "./MySpinner";

const CheckAuth = ({ children }: { children: ReactNode }) => {
  const { isLoading, type } = useSelector(authSelector);
  const toast = useToast();
  const [getWebData, { data, loading }] = useGetWebDataLazyQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    const query = async () => {
      if (type !== "user" && type !== "admin") {
        const localBillProducts = JSON.parse(
          localStorage.getItem("localBillProducts")!
        );
        const token = localStorage.getItem("SESSION_TOKEN");

        if (token && token !== "") {
          JwtManager.setToken(token);
        }
        let list: BillProductInput[] = [];

        if (Array.isArray(localBillProducts) && localBillProducts.length > 0) {
          list = localBillProducts.map((item) => item);
        } else {
          list = [];
        }
        const res = await getWebData({
          variables: {
            localBillProducts: list,
          },
        });
        console.log(res.data?.getWebData)
        switch (true) {
          case res.data?.getWebData.code === 999:

            dispatch(setLoading(false));
            break;
          case res.data?.getWebData.code === 200:
            console.log(res.data?.getWebData)
            if (res.data?.getWebData.type === "admin") {
              dispatch(setType(res.data?.getWebData.type!));
            } else {
              console.log(res.data?.getWebData.isHidden)
              dispatch(setType(res.data?.getWebData.type!));
              dispatch(setIsHidden(res.data?.getWebData.isHidden!));
            }
            dispatch(setUserAvatar(res.data?.getWebData.avatar!));
            dispatch(setIsAuthenticated(true));
            JwtManager.setToken(res.data?.getWebData.token!);
            localStorage.setItem("SESSION_TOKEN", res.data?.getWebData.token!);
            dispatch(setLoading(false));
            break;

          default:
            toast({
              title: "Lỗi",
              description: res.data?.getWebData.message,
              duration: 5000,
              status: "error",
              isClosable: true,
            });
            dispatch(setLoading(false));
            break;
        }
      }
    };
    query();
  }, []);

  useEffect(() => {
    if (
      data &&
      data.getWebData.brands &&
      data.getWebData.products
    ) {
     
      const brands: ProductBrandProps[] = data.getWebData.brands.map((item) => {
        const kindItem: ProductBrandProps = {
          id: item.id,
          name: item.brandName,
        };

        return kindItem;
      });
      dispatch(setProductBrandsProps(brands));
      dispatch(setBillProductsFromLocal(data.getWebData.products));
    }
  }, [data, loading]);

  if (isLoading) return <MySpinner />;
  else
    return (
      <>
        {children}
        {process.env.NODE_ENV === "production" && <FacebookMessenger />}
      </>
    );
};

export default CheckAuth;
