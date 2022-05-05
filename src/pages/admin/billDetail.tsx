import { Badge, Button, Input, Select } from "@chakra-ui/react";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../assets/css/pages/admin/billDetail.module.css";
import MySpinner from "../../components/MySpinner";
import Navbar from "../../components/Navbar";
import {
  useAdminEditBillStatusMutation,
  useAdminGetBillsQuery,
  useAdminHandleBillRejectMutation,
  useAdminHanleBillCompletedMutation,
} from "../../generated/graphql";
import { authSelector } from "../../store/reducers/authSlice";
import { MoneyConverter } from "../../utils/other/ConvertToMoney";
import { BillStatusType } from "../../utils/type/BillStatusType";

interface CustomerProps {
  customerName: string;
  customerPhone: string;
  city: string;
  province: string;
  address: string;
  id: number;
}
interface BillProductProps {
  productName: string;
  productAmount: number;
  productPrice: number;
  productType: string;
}
interface BillsProps {
  id: number;
  notice?: string;
  deliveryPrice: number;
  totalPrice: number;
  introducePrice?: number;
  billStatus: BillStatusType;
  paymentDown?: number;
  paymentType: string;
  customer: CustomerProps;
  billProducts: BillProductProps[];
}

const billDetail = () => {
  const router = useRouter();
  //CheckAdmin
  const { type, isAuthenticated, isLoading } = useSelector(authSelector);

  useEffect(() => {
    if (
      (!isLoading && !isAuthenticated) ||
      (!isLoading && isAuthenticated && type !== "admin")
    )
      router.push("/page-404");
  }, []);
  const { data } = useAdminGetBillsQuery({
    variables: {
      type: router.query.type as string,
    },
  });

  const [bills, setBills] = useState<BillsProps[]>([]);
  const [paymentInput, setPaymentInput] = useState(0);
  const [adminEditBillStatusMutation] = useAdminEditBillStatusMutation();
  const [adminHandleBillCompleted] = useAdminHanleBillCompletedMutation();
  const [adminHandleBillReject] = useAdminHandleBillRejectMutation();

  //State
  const [billStatus, setBilStatus] = useState<BillStatusType>(
    BillStatusType.CONFIRMED
  );

  //effect
  useEffect(() => {
    if (data?.adminGetBills.bills) {
      let tempList: BillsProps[] = [];
      data.adminGetBills.bills.map((item) => {
        // customer
        const customer: CustomerProps = {
          customerName: item.customer.customerName,
          customerPhone: item.customer.customerPhone,
          city: item.customer.city,
          province: item.customer.province,
          address: item.customer.address,
          id: item.customer.id,
        };
        // billProducts
        let billProducts: BillProductProps[] = item.billProducts.map(
          (billProduct) => {
            const billProductItem: BillProductProps = {
              productName: billProduct.productName,
              productAmount: billProduct.productAmount,
              productPrice: billProduct.productPrice,
              productType: billProduct.productType,
            };
            return billProductItem;
          }
        );
        //bills
        const bill: BillsProps = {
          id: item.id,
          notice: item.notice || "",
          deliveryPrice: item.deliveryPrice,
          totalPrice: item.totalPrice,
          introducePrice: item.introducePrice,
          billStatus: item.billStatus as BillStatusType,
          paymentDown: item.paymentDown || 0,
          paymentType: item.paymentType,
          billProducts: billProducts,
          customer,
        };
        tempList.push(bill);
      });
      setBills(tempList);
    }
  }, [data]);

  //Handle
  const handleSubmit = async (id: number, totalPrice: number) => {
    if ((router.query.type as BillStatusType) === BillStatusType.DELIVERING) {
      const res = await adminHandleBillCompleted({
        variables: {
          billId: id,
          totalPrice: totalPrice,
        },
      });
      if (res.errors) console.log(res.errors);
      if (res.data?.adminHandleBillCompleted.success) {
        console.log(res.data.adminHandleBillCompleted);
        let tempList: BillsProps[] = bills.map((item) => item);

        const newTemplist: BillsProps[] = tempList.filter(item => item.id!==id)
     
        setBills(newTemplist);
      }
    } else {
      const res = await adminEditBillStatusMutation({
        variables: {
          billId: id,
          status: billStatus as string,
          paymentDown: paymentInput,
        },
      });
      if (res.errors) console.log(res.errors);
      if (res.data?.adminEditBillStatus.success) {
        console.log(data?.adminGetBills);
        let tempList: BillsProps[] = bills.map((item) => item);

        const newTemplist: BillsProps[] = tempList.filter(
          (item) => item.id !== id
        );

        setBills(newTemplist);
      }
    }
  };
  const handleBillReject = async (billId: number) => {
    console.log(billId);
    const res = await adminHandleBillReject({
      variables: {
        billId,
      },
    });
    console.log(res);
    if (res.errors) console.log(res.errors);
    if (res.data?.adminHandleBillReject.success) {
      console.log(res.data.adminHandleBillReject);
      let tempList: BillsProps[] = bills.map((item) => item);

      const newTemplist: BillsProps[] = tempList.filter(item => item.id!==billId)
   
      setBills(newTemplist);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="distance">
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <h1 style={{ fontSize: "2.4rem", textAlign: "center" }}>
                {router.query.type}
              </h1>
              {bills.map((item) => (
                <div key={item.id}>
                  <div className={styles.billItem}>
                    <div className={styles.component}>
                      {item.paymentType === "Chuyển khoản trước" ? (
                        <h1
                          className={clsx(
                            styles.heading,
                            item.paymentType === "Chuyển khoản trước" &&
                              styles.hightlight
                          )}
                        >
                          Bill ID:{item.id}(Chuyển khoản trước)
                        </h1>
                      ) : (
                        <h1 className={styles.heading}>Bill ID:{item.id}</h1>
                      )}
                    </div>
                    <div className={styles.component}>
                      <Badge>{item.billStatus}</Badge>

                      <h2>Tên người gửi:{item.customer.customerName}</h2>
                      <h2>Số điện thoại:{item.customer.customerPhone}</h2>
                      <h2>Ghi chú:{item.notice}</h2>
                    </div>
                    <table className={styles.table}>
                      <tr>
                        <th>Tên sản phẩm</th>
                        <th>Loại sản phẩm</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Tổng giá</th>
                      </tr>

                      {item.billProducts.map((product, index) => (
                        <tr key={index}>
                          <td>{product.productName}</td>
                          <td>{product.productType}</td>
                          <td>{MoneyConverter(product.productPrice)}</td>
                          <td>{product.productAmount}</td>
                          <td>
                            {MoneyConverter(
                              product.productAmount * product.productPrice
                            )}
                          </td>
                        </tr>
                      ))}

                      <tr>
                        <th colSpan={4} className={styles.textEnd}>
                          Tiền giảm giá
                        </th>
                        <th>{MoneyConverter(item.introducePrice || 0)}</th>
                      </tr>

                      <tr>
                        <th colSpan={4} className={styles.textEnd}>
                          Tiền vận chuyển
                        </th>
                        <th>{MoneyConverter(item.deliveryPrice)}</th>
                      </tr>
                      {item.paymentDown && (
                        <tr>
                          <th colSpan={4} className={styles.textEnd}>
                            Tiền trả trước
                          </th>
                          <th style={{ color: "red" }}>
                            {MoneyConverter(item.paymentDown)}
                          </th>
                        </tr>
                      )}
                      <tr>
                        <th colSpan={4} className={styles.textEnd}>
                          Tổng cộng
                        </th>
                        <th style={{ color: "green" }}>
                          {MoneyConverter(item.totalPrice)}
                        </th>
                      </tr>
                    </table>

                    <div className={styles.controllContainer}>
                      <div>
                        <Select
                          maxWidth="30%"
                          fontFamily="Roboto"
                          fontSize="1rem"
                          size="sm"
                          value={billStatus}
                          onChange={(event) => {
                            setBilStatus(event.target.value as BillStatusType);
                          }}
                        >
                          <option value={BillStatusType.CONFIRMED}>
                            {BillStatusType.CONFIRMED}
                          </option>
                          <option value={BillStatusType.PACKED}>
                            {BillStatusType.PACKED}
                          </option>
                          <option value={BillStatusType.DELIVERING}>
                            {BillStatusType.DELIVERING}
                          </option>
                          <option value={BillStatusType.COMPLETED}>
                            {BillStatusType.COMPLETED}
                          </option>
                          <option value={BillStatusType.CANCEL}>
                            {BillStatusType.CANCEL}
                          </option>
                        </Select>
                        {item.paymentType === "Chuyển khoản trước" &&
                          item.billStatus ===
                            BillStatusType.COMFIRM_WAITING && (
                            <Input
                              placeholder="Tiền chuyển trước"
                              value={paymentInput}
                              type="number"
                              onChange={(event) =>
                                setPaymentInput(+event.target.value)
                              }
                              className={styles.input}
                            />
                          )}
                        <div className={styles.btnControlContainer}>
                          <Button onClick={() => handleBillReject(item.id)}>
                            {" "}
                            Rejected
                          </Button>
                          <Button
                            colorScheme="green"
                            onClick={() =>
                              handleSubmit(item.id, item.totalPrice)
                            }
                          >
                            {" "}
                            Chuyển
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isLoading && <MySpinner />}
    </div>
  );
};

export default billDetail;
