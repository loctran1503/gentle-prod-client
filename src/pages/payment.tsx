import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Input,
  InputGroup,
  Select,
  Spinner,
  Textarea,

  // useToast
} from "@chakra-ui/react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../assets/css/pages/payment.module.css";
import Footer from "../components/Footer";
import MyErrorMessage from "../components/MyErrorMessage";
import {
  BillInput,
  BillProductInput,
  CustomerInput,
  useCheckIntroduceCodeLazyQuery,
  useCreateBillMutation,
} from "../generated/graphql";
import { authSelector } from "../store/reducers/authSlice";
import {
  localSelector,
  setBillProductsFromLocal,
} from "../store/reducers/localSlice";
import {
  AMERICA,
  KOREA,
  KOREA_DELIVERY_PRICE,
  KOREA_PRICE_FREESHIP,
  US_DELIVERY_PRICE,
  US_PRICE_FREESHIP,
} from "../utils/other/constants";

import { MoneyConverter } from "../utils/other/ConvertToMoney";

const apiUrl = "https://sheltered-anchorage-60344.herokuapp.com";



interface ErrorProps {
  customerName: boolean;
  message: string;
  customerPhone: boolean;
  city: boolean;
  province: boolean;
  address: boolean;
}
interface IntroduceCodeResponse {
  type: string;
  message: string;
}
interface DistrictProps {
  idProvince: string;
  idDistrict: string;
  name: string;
}

const Payment = () => {
  // const toast = useToast();
  const router = useRouter();

  const { isAuthenticated } = useSelector(authSelector);
  const { paymentProps } =
    useSelector(localSelector);
  const [inputInValid, setInputInValid] = useState<ErrorProps>({
    customerName: false,
    message: "",
    customerPhone: false,
    city: false,
    province: false,
    address: false,
  });
  const [paymentSubmit] = useCreateBillMutation();
  const [introduceCodeResponse, setIntroduceCodeResponse] =
    useState<IntroduceCodeResponse>({
      type: "",
      message: "",
    });
  //customer
  const [customer, setCustomer] = useState<CustomerInput>({
    customerName: "",
    customerPhone: "",
    city: "",
    province: "",
    address: "",
  });
  const [notice, setNotice] = useState("");
  const [typePayment, setTypePayment] = useState("Chuyển khoản trước");
  const [districtList, setDistrictList] = useState<string[]>([]);
  const [districtLoading, setDistrictLoading] = useState(false);
  // city change
  const handleCityChange = async (idProvince: string) => {
    setDistrictLoading(true);
    const res = await axios.get<DistrictProps[]>(
      `${apiUrl}/district/?idProvince=${idProvince}`
    );

    let tempList: string[] = res.data.map((item) => item.name);

    setDistrictList(tempList);
    setDistrictLoading(false);
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNotice(event.target.value);
  };

  const handleCustomerInPutChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (
      inputInValid.customerName ||
      inputInValid.customerPhone ||
      inputInValid.address ||
      inputInValid.city ||
      inputInValid.province
    ) {
      setInputInValid({
        customerName: false,
        customerPhone: false,
        address: false,
        city: false,
        province: false,
        message: "",
      });
    }
    switch (event.target.name) {
      case "customerName":
        setCustomer({ ...customer, customerName: event.target.value });
        break;
      case "customerPhone":
        setCustomer({ ...customer, customerPhone: event.target.value });
        break;
      case "address":
        setCustomer({ ...customer, address: event.target.value });
        break;

      default:
        break;
    }
  };
  const handleCustomerSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (
      inputInValid.customerName ||
      inputInValid.customerPhone ||
      inputInValid.address ||
      inputInValid.city ||
      inputInValid.province
    ) {
      setInputInValid({
        customerName: false,
        customerPhone: false,
        address: false,
        city: false,
        province: false,
        message: "",
      });
    }
    switch (event.target.name) {
      case "city":
        setCustomer({ ...customer, city: event.target.value });
        break;
      case "province":
        setCustomer({ ...customer, province: event.target.value });
        break;

      default:
        break;
    }
  };

  //discount
  const [discountInput, setDiscountInput] = useState<number>();
  //price
  const [totalPriceOfProduct, setTotalPriceOfProduct] = useState(0);
  const [priceDelivery, setPriceDelivery] = useState(0);
  const [priceDiscount, setPriceDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  //callApi

  const [checkIntroduceCode] = useCheckIntroduceCodeLazyQuery();

  const [product, setProduct] = useState<BillProductInput[]>([]);

  //Introduce Code
  const handleIntroduceCode = async () => {
    const { data, error } = await checkIntroduceCode({
      variables: {
        introduceCode: discountInput!,
        totalPrice,
      },
    });
    if (data?.checkIntroduceCode.success) {
      setPriceDiscount(data.checkIntroduceCode.introducePrice!);
      setIntroduceCodeResponse({
        type: "success",
        message: data.checkIntroduceCode.message!,
      });
    } else if (error) {
      setPriceDiscount(0);
      alert(error.message);
    } else if (data?.checkIntroduceCode.code === 400) {
      setIntroduceCodeResponse({
        type: "error",
        message: data.checkIntroduceCode.message!,
      });
    }
  };
  //totalPrice
  useEffect(() => {
    setTotalPrice(totalPriceOfProduct - priceDiscount + priceDelivery);
  }, [totalPriceOfProduct, priceDelivery, priceDiscount]);

  //Check if props not found
  useEffect(() => {
    if (!paymentProps) {
      router.push("/");
    } else {
      //check paymentProps
      // if (paymentProps?.totalPrice! > MONEY_PAY_LIMIT) {
      //   setTypePayment("Chuyển khoản trước");
      //   toast({
      //     title: "Thông báo ",
      //     description:
      //       "Với đơn hàng trên 2.000.000đ, Bạn vui lòng chuyển khoản trước tối thiểu 5% hoặc 10% với đơn hàng trên 5.000.000đ để xác nhận đơn hàng,Chân thành Cảm ơn Bạn đã đọc thông tin này!",
      //     status: "info",
      //     duration: 5000,
      //     position: "top",

      //     isClosable: true,
      //   });
      // } else setTypePayment("Thanh toán tất cả khi nhận hàng");

      //query to get gift
      // giftQuery({
      //   variables: {
      //     priceCondition: paymentProps.totalPrice,
      //   },
      // });
      setProduct(paymentProps.listCart);

      const priceOfProduct =   paymentProps.listCart.reduce(
        (prev, current) =>
          prev + current.productPrice * current.productAmount,
        0
      )
      setTotalPriceOfProduct(
        priceOfProduct
      );
      const americaExisting = paymentProps.listCart.findIndex(item => item.countryNameForDeliveryPrice===AMERICA)
       
      if(americaExisting!==-1){
        console.log(priceOfProduct)
        
        priceOfProduct < US_PRICE_FREESHIP
        ? setPriceDelivery(US_DELIVERY_PRICE)
        : setPriceDelivery(0);
      }else{
        const koreaExisting = paymentProps.listCart.findIndex(item => item.countryNameForDeliveryPrice===KOREA)
        if(koreaExisting!==-1){
          priceOfProduct < KOREA_PRICE_FREESHIP
        ? setPriceDelivery(KOREA_DELIVERY_PRICE)
        : setPriceDelivery(0);
        }else{
         console.log("not ameria and not korea")
          router.push("/")
        }
      }
     
    }
  }, []);

  //Set gift
  // useEffect(() => {
  //   if (data?.getGift.success) {
  //     const listProductTemp: BillProductInput[] = product.map((item) => item);

  //     data.getGift.gifts?.map((gift) => {
  //       const item: BillProductInput = {
  //         productName: gift.product.productName!,
  //         productThumbnail: gift.product.thumbnail!,
  //         productType: "gift",
  //         productAmount: 1,
  //         productPrice: 0,
  //       };

  //       listProductTemp.unshift(item);
  //     });
  //     setProduct(listProductTemp);
  //   }
  // }, [data]);

  //callback from AddSample
  // const callbackFromAddSample = (item: BillProductInput, index: number) => {
  //   // let listProductTemp: BillProductInput[] = product.map((item) => item);
  //   // listProductTemp.splice(index, 1, item);
  //   // setProduct(listProductTemp);
  // };

  //Submit
  const handleSubmit = async () => {
    switch (true) {
      case customer.customerName.trim().length < 1:
        setInputInValid({
          customerName: true,
          customerPhone: false,
          address: false,
          city: false,
          province: false,
          message: "Vui lòng điền đầy đủ tên khách hàng",
        });
        break;
      case customer.customerPhone.trim().length < 9:
        setInputInValid({
          customerName: false,
          customerPhone: true,
          address: false,
          city: false,
          province: false,
          message: "Vui lòng điền đầy đủ số điện thoại",
        });
        break;
      case customer.address.trim().length < 1:
        setInputInValid({
          customerName: false,
          customerPhone: false,
          address: true,
          city: false,
          province: false,
          message: "Vui lòng điền đầy đủ địa chỉ",
        });
        break;
      case customer.city.trim().length < 1:
        setInputInValid({
          customerName: false,
          customerPhone: false,
          address: false,
          city: true,
          province: false,
          message: "Vui lòng chọn tỉnh hoặc thành phố",
        });
        break;
      case customer.province.trim().length < 1:
        setInputInValid({
          customerName: false,
          customerPhone: false,
          address: false,
          city: false,
          province: true,
          message: "Vui lòng chọn huyện hoặc thị xã",
        });
        break;
      default:
        let billInput: BillInput = {
          customer,
          products: product,
          deliveryPrice: priceDelivery,
          paymentType: typePayment,
        };
        if (notice) billInput.notice = notice;
        if (discountInput && priceDiscount > 0)
          billInput.introduceCode = discountInput;
        billInput;
        const res = await paymentSubmit({
          variables: {
            billInput: billInput,
          },
          onError: (err) => {
            console.log(console.log(JSON.stringify(err, null, 2)));
          },
        });
        if (res.data?.createBill.code === 400) {
          alert(res.data.createBill.message);
        }
        if (res.data?.createBill.success) {
          router.push("/success");

          if (typeof window !== undefined) {
            localStorage.removeItem("localBillProducts");
            localStorage.removeItem("cartCount");
            dispatch(setBillProductsFromLocal([]));
          }
        }

        break;
    }
  };

  return (
    <div>
      <div className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 c-12">
            <div className={styles.paymentContainer}>
              <div className="row">
                <div className="col l-4 l-o-4 m-4 m-o-4 c-6 m-o-3">
                <h1 className={styles.heading}>GENTLE</h1>
                </div>
              </div>
              <div className="row">
                <div className="col l-6 m-6 c-12">
                  <div className={styles.userInfo}>
                    <h2>Thông tin người nhận</h2>

                    {!isAuthenticated && (
                      <p>
                        Đăng nhập để nhận nhiều ưu đãi hơn
                        <span className={styles.login}>Đăng nhập</span>
                      </p>
                    )}
                    {inputInValid.message !== "" && (
                      <MyErrorMessage
                        type="error"
                        message={inputInValid.message}
                      />
                    )}
                    <InputGroup>
                      <Input
                        isInvalid={inputInValid.customerName}
                        errorBorderColor="crimson"
                        type="text"
                        placeholder="Họ và tên"
                        focusBorderColor="black"
                        className="boxShadowNone"
                        value={customer?.customerName}
                        name="customerName"
                        onChange={(event) => handleCustomerInPutChange(event)}
                      />
                    </InputGroup>
                    <InputGroup>
                      <Input
                        isInvalid={inputInValid.customerPhone}
                        errorBorderColor="crimson"
                        type="tel"
                        value={customer?.customerPhone}
                        name="customerPhone"
                        onChange={(event) => handleCustomerInPutChange(event)}
                        placeholder="Số điện thoại"
                        focusBorderColor="black"
                        className="boxShadowNone"
                      />
                    </InputGroup>
                    <InputGroup>
                      <Input
                        isInvalid={inputInValid.address}
                        errorBorderColor="crimson"
                        type="text"
                        placeholder="Địa chỉ"
                        focusBorderColor="black"
                        name="address"
                        className="boxShadowNone"
                        value={customer?.address}
                        onChange={(event) => handleCustomerInPutChange(event)}
                      />
                    </InputGroup>
                    <Select
                      isInvalid={inputInValid.city}
                      errorBorderColor="crimson"
                      value={customer?.city}
                      name="city"
                      placeholder="Chọn Tỉnh/Thành Phố..."
                      focusBorderColor="black"
                      className="boxShadowNone"
                      onChange={(event) => {
                        handleCustomerSelectChange(event);
                        handleCityChange(event.target.value);
                      }}
                    >
                      <option value="01"> Thành phố Hà Nội</option>
                      <option value="79"> Thành phố Hồ Chí Minh</option>
                      <option value="31"> Thành phố Hải Phòng</option>
                      <option value="48"> Thành phố Đà Nẵng</option>
                      <option value="92"> Thành phố Cần Thơ</option>
                      <option value="02"> Tỉnh Hà Giang</option>
                      <option value="04"> Tỉnh Cao Bằng</option>
                      <option value="06"> Tỉnh Bắc Kạn</option>
                      <option value="08"> Tỉnh Tuyên Quang</option>
                      <option value="10"> Tỉnh Lào Cai</option>
                      <option value="11"> Tỉnh Điện Biên</option>
                      <option value="12"> Tỉnh Lai Châu</option>
                      <option value="14"> Tỉnh Sơn La</option>
                      <option value="15"> Tỉnh Yên Bái</option>
                      <option value="17"> Tỉnh Hoà Bình</option>
                      <option value="19"> Tỉnh Thái Nguyên</option>
                      <option value="20"> Tỉnh Lạng Sơn</option>
                      <option value="22"> Tỉnh Quảng Ninh</option>
                      <option value="24"> Tỉnh Bắc Giang</option>
                      <option value="25"> Tỉnh Phú Thọ</option>
                      <option value="26"> Tỉnh Vĩnh Phúc</option>
                      <option value="27"> Tỉnh Bắc Ninh</option>
                      <option value="30"> Tỉnh Hải Dương</option>
                      <option value="33"> Tỉnh Hưng Yên</option>
                      <option value="34"> Tỉnh Thái Bình</option>
                      <option value="35"> Tỉnh Hà Nam</option>
                      <option value="36"> Tỉnh Nam Định</option>
                      <option value="37"> Tỉnh Ninh Bình</option>
                      <option value="38"> Tỉnh Thanh Hóa</option>
                      <option value="40"> Tỉnh Nghệ An</option>
                      <option value="42"> Tỉnh Hà Tĩnh</option>
                      <option value="44"> Tỉnh Quảng Bình</option>
                      <option value="45"> Tỉnh Quảng Trị</option>
                      <option value="46"> Tỉnh Thừa Thiên Huế</option>
                      <option value="49"> Tỉnh Quảng Nam</option>
                      <option value="51"> Tỉnh Quảng Ngãi</option>
                      <option value="52"> Tỉnh Bình Định</option>
                      <option value="54"> Tỉnh Phú Yên</option>
                      <option value="56"> Tỉnh Khánh Hòa</option>
                      <option value="58"> Tỉnh Ninh Thuận</option>
                      <option value="60"> Tỉnh Bình Thuận</option>
                      <option value="62"> Tỉnh Kon Tum</option>
                      <option value="64"> Tỉnh Gia Lai</option>
                      <option value="66"> Tỉnh Đắk Lắk</option>
                      <option value="67"> Tỉnh Đắk Nông</option>
                      <option value="68"> Tỉnh Lâm Đồng</option>
                      <option value="70"> Tỉnh Bình Phước</option>
                      <option value="72"> Tỉnh Tây Ninh</option>
                      <option value="74"> Tỉnh Bình Dương</option>
                      <option value="75"> Tỉnh Đồng Nai</option>
                      <option value="77"> Tỉnh Bà Rịa - Vũng Tàu</option>
                      <option value="80"> Tỉnh Long An</option>
                      <option value="82"> Tỉnh Tiền Giang</option>
                      <option value="83"> Tỉnh Bến Tre</option>
                      <option value="84"> Tỉnh Trà Vinh</option>
                      <option value="86"> Tỉnh Vĩnh Long</option>
                      <option value="87"> Tỉnh Đồng Tháp</option>
                      <option value="89"> Tỉnh An Giang</option>
                      <option value="91"> Tỉnh Kiên Giang</option>
                      <option value="93"> Tỉnh Hậu Giang</option>
                      <option value="94"> Tỉnh Sóc Trăng</option>
                      <option value="95"> Tỉnh Bạc Liêu</option>
                      <option value="96"> Tỉnh Cà Mau</option>
                    </Select>
                    <div className={styles.provinceContainer}>
                      <Select
                        isInvalid={inputInValid.province}
                        errorBorderColor="crimson"
                        onChange={(event) => handleCustomerSelectChange(event)}
                        name="province"
                        focusBorderColor="black"
                        className="boxShadowNone"
                      >
                        <option value="">Chọn Quận/Huyện...</option>
                        {districtList.length > 0 &&
                          districtList.map((item, index) => (
                            <option value={item} key={index}>
                              {item}
                            </option>
                          ))}
                      </Select>
                      {districtLoading && (
                        <div className={styles.provinceLoading}>
                          <Spinner size="md" />
                        </div>
                      )}
                    </div>
                    <InputGroup>
                      <Textarea
                        className="boxShadowNone"
                        placeholder="Ghi chú"
                        focusBorderColor="black"
                        value={notice}
                        name="notice"
                        onChange={(event) => handleTextAreaChange(event)}
                      />
                    </InputGroup>
                  </div>
                </div>
                <div className="col l-6 m-6 c-12">
                  <div className={styles.orderContainer}>
                    <div className={styles.orderInfo}>
                      <h2>Đơn hàng</h2>
                      {product.map((item, index) => {
                        if (item.productType === "gift") {
                          return (
                            <div className={styles.productItem} key={index}>
                              <div className={styles.productInfo}>
                                <img src={item.productThumbnail} />
                                <div className={styles.productNameAndType}>
                                  <h3>{item.productName}</h3>
                                  <p>Chai 2ml</p>
                                  <p>SL:1</p>
                                </div>
                              </div>
                              <div className={styles.productPrice}>
                                <Badge variant="solid" colorScheme="red">
                                  Quà tặng
                                </Badge>
                                {/* <AddSample
                                  index={index}
                                  priceCondition={paymentProps?.totalPrice!}
                                  // callback={callbackFromAddSample}
                                /> */}
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <div className={styles.productItem} key={index}>
                              <div className={styles.productInfo}>
                                <img src={item.productThumbnail} />
                                <div className={styles.productNameAndType}>
                                  <h3>{item.productName}</h3>
                                  <p>{item.productType}</p>
                                  <p>SL:{item.productAmount}</p>
                                </div>
                              </div>
                              <div className={styles.productPrice}>
                                <h4>{MoneyConverter(item.productPrice)}</h4>
                              </div>
                            </div>
                          );
                        }
                      })}
                      <div className={styles.discountContainer}>
                        {introduceCodeResponse.type !== "" && (
                          <MyErrorMessage
                            type={introduceCodeResponse.type}
                            message={introduceCodeResponse.message}
                          />
                        )}
                        <InputGroup>
                          <Input
                            type="number"
                            placeholder="Mã giảm giá"
                            focusBorderColor="black"
                            value={discountInput}
                            disabled={introduceCodeResponse.type === "success"}
                            onChange={(event) => {
                              setDiscountInput(event.target.valueAsNumber);
                              setIntroduceCodeResponse({
                                type: "",
                                message: "",
                              });
                            }}
                          />
                          <Button
                            className="noneBorder"
                            onClick={handleIntroduceCode}
                            disabled={introduceCodeResponse.type === "success"}
                          >
                            Áp dụng
                          </Button>
                        </InputGroup>
                      </div>
                      <div className={styles.totalPriceContainer}>
                        <div className={styles.totalPriceItem}>
                          <p className={styles.itemName}>Tạm tính:</p>
                          <p>{MoneyConverter(totalPriceOfProduct)}</p>
                        </div>
                        <div className={styles.totalPriceItem}>
                          <p className={styles.itemName}>Phí vận chuyển:</p>
                          {priceDelivery === 0 ? (
                            <p>Miễn phí</p>
                          ) : (
                            <p>{MoneyConverter(priceDelivery)}</p>
                          )}
                        </div>
                        <div className={styles.totalPriceItemLastChild}>
                          <p className={styles.itemName}>Giảm giá</p>
                          <p>{MoneyConverter(priceDiscount)}</p>
                        </div>
                        <div className={styles.total}>
                          <p>Tổng cộng:</p>
                          <h3>{MoneyConverter(totalPrice)}</h3>
                        </div>
                      </div>
                    </div>

                    <div className={styles.typePaymentContainer}>
                      <h3 className={styles.typePaymentHeading}>
                        Hình thức thanh toán
                      </h3>
                      <div className={styles.typePaymentBody}>
                        {/* <div
                          className={clsx(
                            styles.typePaymentItem,
                            paymentProps?.totalPrice! > MONEY_PAY_LIMIT &&
                              styles.disabled
                          )}
                        >
                          <input
                            type="radio"
                            value={typePayment}
                            onChange={() =>
                              setTypePayment("Thanh toán tất cả khi nhận hàng")
                            }
                            checked={
                              typePayment == "Thanh toán tất cả khi nhận hàng"
                            }
                            className={styles.typePaymentInput}
                            disabled={
                              paymentProps?.totalPrice! > MONEY_PAY_LIMIT
                            }
                          />
                          Thanh toán tất cả khi nhận hàng
                          <p className={styles.typePaymentNotice}>
                            1-2 ngày với đơn hàng tại Hồ Chí Minh và Bình Dương,
                            3-5 ngày với đơn hàng ở các tỉnh và thành phố khác
                          </p>
                        </div> */}
                        <div className={clsx(styles.typePaymentItem)}>
                          <div className={styles.headingPaymentContainer}>
                          <div>
                          <input
                            type="radio"
                            value={typePayment}
                            onChange={() =>
                              setTypePayment("Chuyển khoản trước")
                            }
                            checked={typePayment == "Chuyển khoản trước"}
                            className={styles.typePaymentInput}
                          />
                          Chuyển khoản trước
                          </div>
                          <div className={styles.detailPriceRuleContainer}>
                            <ChevronRightIcon/>
                          <p className={styles.typePaymentNotice} onClick={() => router.push("/policy/delivery")}>
                            Xem chi tiết phí
                            trả trước
                          </p>
                          </div>
                          </div>
                          <div className={styles.infoBank}>
                            <p>*Vietcombank - TRAN PHUOC LOC - 0281000647810</p>
                            <p>
                              *Nội dung chuyển khoản:Tên người nhận hàng, Số
                              điện thoại người nhận
                            </p>
                            <p>*Ví dụ:Lộc, 0774917635</p>
                            <p>
                              *Liên hệ với admin để được giải đáp mọi thắc mắc
                            </p>
                            <h4 className={styles.thanksClient}>
                              Chân thành cảm ơn bạn đã đọc nội dung này!
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.orderButtonControl}>
                      <div
                        className={styles.backToCartContainer}
                        onClick={() => {
                     
                          router.back()
                        }}
                      >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <p>QUAY VỀ</p>
                      </div>
                      <button className="btn btn4" onClick={handleSubmit}>
                        Đặt hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
