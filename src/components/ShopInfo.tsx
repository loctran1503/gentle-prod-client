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
  useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../assets/css/components/shopInfo.module.css";
import {
  useChangeIsHiddenMutation,
  useGetPaginationUsersQuery,
  useGetProductPaidAmountQuery,
} from "../generated/graphql";
import { authSelector, setIsHidden } from "../store/reducers/authSlice";
import LocalLoading from "./LocalLoading";

const ShopInfo = () => {
  const [isMaxEqual739] = useMediaQuery("(max-width: 739px)");
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
      {isMaxEqual739 ? (
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
                      <h2>Ngày thành lập:12/3/2022</h2>
                    </div>

                    <div className={styles.statistics}>
                      {data?.getPaginationUsers.success && (
                        <div className={styles.userPaidContainer}>
                          <h2 className={styles.totalProductPaid}>
                            Sản phẩm đã bán:
                            {productPaidCount?.getProductPaidAmount}
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
              <h2>Ngày thành lập:12/3/2022</h2>
            </div>

            <div className={styles.statistics}>
              {data?.getPaginationUsers.success && (
                <div className={styles.userPaidContainer}>
                  <h2 className={styles.totalProductPaid}>
                    Sản phẩm đã bán:{productPaidCount?.getProductPaidAmount}
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

export default ShopInfo;

// <div className={styles.userItem}>
// <img src="https://scontent-sin6-4.xx.fbcdn.net/v/t1.6435-1/188003145_318861596508649_642500579152781477_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=RyZBZjkdD70AX_hsIRZ&_nc_ht=scontent-sin6-4.xx&oh=00_AT936vFRwStLLLOk0dSL28foRPGMOIsFO6JKZ-btuFL7lA&oe=62688297" />
// <h3>Lộc Trần</h3>
// </div>
