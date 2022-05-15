import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,

} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../assets/css/components/shopInfo.module.css";
import {
  useChangeIsHiddenMutation,
  useGetPaginationUsersQuery,
  useGetProductPaidAmountQuery,
} from "../generated/graphql";
import { authSelector, setIsHidden } from "../store/reducers/authSlice";
import { TIME_CELERATED } from "../utils/other/constants";
import LocalLoading from "./LocalLoading";
import { isMobile } from "react-device-detect";
const ShopInfo = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const { data, loading, fetchMore } = useGetPaginationUsersQuery({
    variables: {
      skip: 0,
    },
  });
  const { isAuthenticated, isHidden } = useSelector(authSelector);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {}, [isHidden]);
  const [localLoading, setLocalLoading] = useState(false);
  const { data: productPaidCount } = useGetProductPaidAmountQuery();
  const [changeIsHidden] = useChangeIsHiddenMutation();

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        skip: data?.getPaginationUsers.cursor,
      },
    });
  };
  const handleIsHiddenChange = async (value: boolean) => {
    setLocalLoading(true);
    if (isAuthenticated) {
      dispatch(setIsHidden(value));
      const res = await changeIsHidden({
        variables: {
          value,
        },
      });

      if (res.errors) console.log(res.errors);
      if (res.data?.changeIsHidden.success) router.reload();
      if (!res.data?.changeIsHidden.success)
        alert(res.data?.changeIsHidden.message);
      setLocalLoading(false);
    } else {
      setLocalLoading(false);
    }
  };

  return (
    <>
      {isMobile ? (
        <div className={styles.mobileVersionContainer}>
          <div  className={styles.headingMobile}>
            <div></div>
            <h2>Thống kê của GENTLE</h2>
            <div className={styles.mobileDetail} onClick={onOpen}>
              <ChevronRightIcon className={styles.iconMobileDetail}/>
            <h3>Xem chi tiết</h3>
            </div>
          </div>

          <Modal isOpen={isOpen} onClose={onClose} size="full">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>THỐNG KÊ</ModalHeader>
              <ModalCloseButton className="noneBorder" />
              <ModalBody>
                <div className={styles.shopInfoContainer}>
                  <div className={styles.heading}>gentle</div>
                  <div className={styles.body}>
                    <div className={styles.createdAt}>
                      <h2>Ngày thành lập:  {TIME_CELERATED}</h2>
                    </div>

                    <div className={styles.statistics}>
                      {data?.getPaginationUsers.success && (
                        <div className={styles.userPaidContainer}>
                          <h2 className={styles.totalProductPaid}>
                            Sản phẩm đã bán:  
                            {productPaidCount?.getProductPaidAmount && productPaidCount.getProductPaidAmount>0 ? productPaidCount.getProductPaidAmount : 0}
                          </h2>
                          <div className={styles.userList}>
                            <h3 className={styles.textSampleUserPaid}>
                              Khách hàng đã mua
                            </h3>
                            {isAuthenticated && (
                              <div className={styles.hideUserContainer}>
                                <h4>Ẩn tôi trong dach sách</h4>
                                <Checkbox
                                  defaultChecked={isHidden}
                                  onChange={(e) =>
                                    handleIsHiddenChange(e.target.checked)
                                  }
                                  size="md"
                                  colorScheme="green"
                                  className={styles.checkBoxHideUser}
                                ></Checkbox>
                                {isHidden && <h4>Đã ẩn</h4>}
                              </div>
                            )}
                            {data.getPaginationUsers.users?.map((item) => (
                              <div
                                className={styles.userItem}
                                key={Math.random()}
                              >
                                <img src={item.userAvatar} />
                                <h3>{item.userName}</h3>
                              </div>
                              
                            ))}
                           <h4 className={styles.userHideCount}>Khách hàng đã ẩn:  {data.getPaginationUsers.userHideCount}</h4>
                          </div>
                          <div className={styles.statisticsFooter}>
                            <Button
                              className="noneBorder"
                              onClick={handleFetchMore}
                              disabled={!data.getPaginationUsers.hasMore}
                              isLoading={loading}
                            >
                              Xem thêm
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {localLoading && <LocalLoading />}
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      ) : (
        <div className={styles.shopInfoContainer}>
          <div className={styles.heading}>gentle</div>
          <div className={styles.body}>
            <div className={styles.createdAt}>
            <h2>Ngày thành lập:  {TIME_CELERATED}</h2>
            </div>

            <div className={styles.statistics}>
              {data?.getPaginationUsers.success && (
                <div className={styles.userPaidContainer}>
                  <h2 className={styles.totalProductPaid}>
                    Sản phẩm đã bán:  {productPaidCount?.getProductPaidAmount}
                  </h2>
                  <div className={styles.userList}>
                    <h3 className={styles.textSampleUserPaid}>
                      Khách hàng đã mua
                    </h3>
                    {isAuthenticated && (
                      <div className={styles.hideUserContainer}>
                        <h4>Ẩn tôi trong dach sách</h4>
                        <Checkbox
                          defaultChecked={isHidden}
                          onChange={(e) =>
                            handleIsHiddenChange(e.target.checked)
                          }
                          size="md"
                          colorScheme="green"
                          className={styles.checkBoxHideUser}
                        ></Checkbox>
                        {isHidden && <h4>Đã ẩn</h4>}
                      </div>
                    )}
                    {data.getPaginationUsers.users?.map((item) => (
                      <div className={styles.userItem} key={Math.random()}>
                          <img src={item.userAvatar} />
                        <h3>{item.userName}</h3>
                      </div>
                    ))}
                     <h4 className={styles.userHideCount}>Khách hàng đã ẩn:  {data.getPaginationUsers.userHideCount}</h4>
                  </div>
                  <div className={styles.statisticsFooter}>
                    <Button
                      className="noneBorder"
                      onClick={handleFetchMore}
                      disabled={!data.getPaginationUsers.hasMore}
                      isLoading={loading}
                    >
                      Xem thêm
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {localLoading && <LocalLoading />}
        </div>
      )}
    </>
  );
};

export default memo(ShopInfo);


