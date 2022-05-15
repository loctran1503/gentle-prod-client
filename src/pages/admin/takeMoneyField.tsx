import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../assets/css/pages/admin/takeMoneyField.module.css";
import LocalLoading from "../../components/LocalLoading";
import MySpinner from "../../components/MySpinner";
import Navbar from "../../components/Navbar";
import {
  useAdminGetTakeMoneyFieldsQuery,
  useAdminTakeMoneyFieldCancelMutation,
  useAdminTakeMoneyFieldCompletedMutation,
} from "../../generated/graphql";
import { authSelector } from "../../store/reducers/authSlice";
import { CLOUDINARY_URL, SUCCESS_IMAGE } from "../../utils/other/constants";
import { MoneyConverter } from "../../utils/other/ConvertToMoney";

const takeMoneyField = () => {
  const router = useRouter();

  //CheckIsAdmin
  const { type, isAuthenticated, isLoading } = useSelector(authSelector);

  useEffect(() => {
    if (
      (!isLoading && !isAuthenticated) ||
      (!isLoading && isAuthenticated && type !== "admin")
    )
      router.push("/page-404");
  }, []);

  const { data, error } = useAdminGetTakeMoneyFieldsQuery();
  const [adminHandleTakeMoneyField] = useAdminTakeMoneyFieldCompletedMutation();
  const [cancelTakeMoneyField] = useAdminTakeMoneyFieldCancelMutation();
  const [cancelReason, setCancelReason] = useState("");
  const [imageSuccess, setImageSuccess] = useState("");
  const [itemId, setItemId] = useState(0);
  const [localLoading,setLocalLoading] = useState(false)
  const {
    isOpen: successIsOpen,
    onOpen: successOnOpen,
    onClose: successOnClose,
  } = useDisclosure();
  const {
    isOpen: failIsOpen,
    onOpen: failOnOpen,
    onClose: failOnClose,
  } = useDisclosure();
  useEffect(() => {
    if (error) console.log(error);
    console.log(data);
  }, [error, data]);

  const handleSubmit = async (id: number) => {
   if(imageSuccess!==""){
    const res = await adminHandleTakeMoneyField({
      variables: {
        fieldId: id,
        imageSuccess,
      },
    });
    if (res.errors) alert(res.errors);
    if (res.data?.adminTakeMoneyFieldCompleted.success) {
      setImageSuccess("");
      router.reload();
    }
    if (!res.data?.adminTakeMoneyFieldCompleted.success) {
      alert(res.data?.adminTakeMoneyFieldCompleted.message);
    }
   }
  };
  const handleCancel = async (id: number) => {
    if(cancelReason!==""){
      const res = await cancelTakeMoneyField({
        variables: {
          cancelReason,
          fieldId: id,
        },
      });
      if (res.data?.adminTakeMoneyFieldCancel.success) {
        router.reload();
      }
      if (!res.data?.adminTakeMoneyFieldCancel.success) {
        alert(res.data?.adminTakeMoneyFieldCancel.message);
      }
    }
  };

  const handleImageSuccessChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocalLoading(true)
    const file: File = event.target.files![0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", SUCCESS_IMAGE);
    const result = await axios.post(
      CLOUDINARY_URL,
      formData
    );
    setImageSuccess(result.data.secure_url);
    setLocalLoading(false)
  };

  return (
    <div>
      <Navbar />
      <div className="distance">
        <div className="grid wide">
          <div className="row">
            <div className="col l-6 l-o-3 m-12 c-12">
              <div className={styles.container}>
                <h2 className={styles.heading}>User Take Money Field</h2>

                {data?.adminGetTakeMoneyFields.success &&
                  data.adminGetTakeMoneyFields.fields?.map((item) => (
                    <div className={styles.item} key={item.id}>
                      <h3 className={styles.fieldId}>Field ID: {item.id}</h3>
                      <div className={styles.component}>
                        <h2>Tên chủ tài khoản:{item.accoutName}</h2>
                        <h2>Số tài khoản:{item.accountNumber}</h2>
                        <h2>Tên Ngân hàng:{item.accountBankName}</h2>
                        <h2>
                          Số tiền muốn rút:{" "}
                          <span style={{ marginLeft: 12 }}>
                            {" "}
                            {MoneyConverter(item.money)}
                          </span>
                        </h2>
                      </div>
                      <div className={styles.component}>
                        <h2 className={styles.currentMoney}>
                          Số tiền hiện có:{" "}
                          <span style={{ marginLeft: 12 }}>
                            {" "}
                            {MoneyConverter(item.user.moneyDepot!)}
                          </span>
                        </h2>
                      </div>
                      <div className={styles.controlContainer}>
                        <div className={styles.cancelContainer}>
                          <Button
                            colorScheme="red"
                            onClick={() => {
                              setItemId(item.id);
                              failOnOpen();
                            }}
                          >
                            Hủy
                          </Button>
                        </div>
                        <Button
                          colorScheme="green"
                          onClick={() => {
                            setItemId(item.id);
                            successOnOpen();
                          }}
                        >
                          Xác nhận
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <>
        {/* Success */}
        <Modal isOpen={successIsOpen} onClose={successOnClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>SUCCESS</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {imageSuccess !== "" && <img src={imageSuccess} />}
              <input type="file" onChange={handleImageSuccessChange} />
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="green"
                mr={3}
                onClick={() => handleSubmit(itemId)}
              >
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        {/* Fail */}
        <Modal isOpen={failIsOpen} onClose={failOnClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>FAIL</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                placeholder="Cancel reason"
              />
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="green"
                mr={3}
                onClick={() => handleCancel(itemId)}
              >
                Confirm
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      {localLoading && <LocalLoading/>}
      {isLoading && <MySpinner />}
    </div>
  );
};

export default takeMoneyField;
