import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "../assets/css/pages/paymentSuccess.module.css";
import Navbar from "../components/Navbar";
const Success = () => {
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
                <h1>Đặt hàng thành công</h1>
                <p>
                  Cảm ơn quý khách đã mua hàng,nhân viên cửa hàng sẽ liên lạc
                  với quý khách để xác nhận đơn hàng!!!
                </p>
                
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
