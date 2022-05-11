import { ChevronRightIcon } from "@chakra-ui/icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../assets/css/pages/paymentSuccess.module.css";
import Navbar from "../components/Navbar";
import {
  KOREA,
  KOREA_DELIVERY_TIME,
  AMERICA,
  US_UK_DELIVERY_TIME,

} from "../utils/other/constants";
const Success = () => {
  const router = useRouter()
  return (
    <div>
      <Navbar />
      <div className="distance">
        <div className="grid wide">
          <div className="row">
            <div className="col l-12 m-12 c-12">
              <div>
                <div className={styles.backContainer}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <Link href="/">
                    <h2>Quay về trang chủ</h2>
                  </Link>
                </div>
                <div className={styles.paymentSuccessContainer}>
                  <div className={styles.heading}>
                    <h1>Đặt hàng thành công</h1>
                    <p>
                      Cảm ơn quý khách đã mua hàng,nhân viên cửa hàng sẽ liên
                      lạc với quý khách để xác nhận đơn hàng!!!
                    </p>
                  </div>
                  <div className={styles.body}>
                    <p>+Thời gian vận chuyển:</p>
                    <p className={styles.bodyItem}>
                      -Với đơn hàng có sản phẩm{" "}
                      <span style={{ fontWeight: 500 }}>{AMERICA}</span>:
                      {US_UK_DELIVERY_TIME}
                    </p>
                    <p className={styles.bodyItem}>
                      -Với đơn hàng có sản phẩm{" "}
                      <span style={{ fontWeight: 500 }}>{KOREA}</span>:
                      {KOREA_DELIVERY_TIME}
                    </p>
                    {/* <p className={styles.bodyItem}>
                      -Với đơn hàng có sản phẩm{" "}
                      <span style={{ fontWeight: 500 }}>{VIETNAM}</span>:
                      {VIETNAM_DELIVERY_TIME}
                    </p> */}
                    <h4 className={styles.bodyItem}>
                      *Lưu ý:Với đơn hàng có sản phẩm của nhiều quốc gia khác
                      nhau, thời gian vận chuyển sẽ được tính theo quốc gia có
                      thời gian vận chuyển lâu nhất. Kính mong quý khách thông
                      cảm vì sự bất tiện này.
                    </h4>
                  </div>
                  <div className={styles.deliveryDetail} onClick={() => router.push("/policy/delivery")}>
                    <ChevronRightIcon/>
                    <p>Xem chi tiết chính sách vận chuyển</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
