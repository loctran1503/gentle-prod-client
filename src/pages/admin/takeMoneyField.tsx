import { Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../assets/css/pages/admin/takeMoneyField.module.css";
import MySpinner from "../../components/MySpinner";
import Navbar from "../../components/Navbar";
import {
  useAdminGetTakeMoneyFieldsQuery,
  useAdminTakeMoneyFieldCancelMutation,
  useAdminTakeMoneyFieldCompletedMutation
} from "../../generated/graphql";
import { authSelector } from "../../store/reducers/authSlice";
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
  const [cancelTakeMoneyField] = useAdminTakeMoneyFieldCancelMutation()
  const [cancelReason,setCancelReason] = useState("")
  useEffect(() => {
    if (error) console.log(error);
    console.log(data);
  }, [error, data]);


  const handleSubmit = async (id: number) => {
    const res = await adminHandleTakeMoneyField({
      variables: {
        fieldId: id,

      },
    });
    if (res.errors) console.log(res.errors);
    if (res.data?.adminTakeMoneyFieldCompleted.success)
      router.push("/admin/dashboard");
    console.log(res.data?.adminTakeMoneyFieldCompleted);
  };
  const handleCancel = async (id: number) => {
    const res = await cancelTakeMoneyField({
      variables:{
        cancelReason,
        fieldId:id
      }
    })
    if(res.data?.adminTakeMoneyFieldCancel.success){
      router.reload()
    }
    if(!res.data?.adminTakeMoneyFieldCancel.success){
      alert(res.data?.adminTakeMoneyFieldCancel.message)
    }
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
                            {MoneyConverter(item.user.moneyCount)}
                          </span>
                        </h2>
                      </div>
                      <div className={styles.controlContainer}>
                        {/* <img src={img} />
                        <input type="file" onChange={handleImg} /> */}
                        <div className={styles.cancelContainer}>
                          <Input value={cancelReason} onChange={e => setCancelReason(e.target.value)} placeholder="Cancel reason"/>
                          <Button
                            colorScheme="red"
                            onClick={() => handleCancel(item.id)}
                          >
                            Hủy
                          </Button>
                        </div>
                        <Button
                          colorScheme="green"
                          onClick={() => handleSubmit(item.id)}
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
      {isLoading && <MySpinner />}
    </div>
  );
};

export default takeMoneyField;
