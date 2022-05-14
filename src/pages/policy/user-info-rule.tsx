import { ChevronRightIcon } from '@chakra-ui/icons'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../assets/css/pages/policy.module.css"
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
const ServicePolicy = () => {
    const router = useRouter()
  return (
   <div>
       <Navbar/>
       <div className="distance">
        <div className={styles.bgProductRedirect}>

        <div className="grid wide">
          <div className="row">
            <div className="col l-12 c-12 m-12">
              <div className={styles.productNameAndBrand}>
               
                <div className={styles.redirectContainer}>
                  <p className={clsx(styles.redirectName,styles.home)}  onClick={() =>
                      router.push("/")
                    }>
                    Trang chủ
                  </p>
                  <ChevronRightIcon className={styles.redirectIcon} />
                  <p className={styles.redirectName}>
                  Bảo vệ thông tin người dùng
                  </p>
                  
                </div>
              </div>
              <div className={styles.body}>
                <h2 className={styles.infoRuleHeader}>BẢO VỆ THÔNG TIN NGƯỜI DÙNG</h2>
                  <p>
                    Chúng tôi thiết lập đăng nhập thông qua các API của Facebook,Google nên hoàn toàn chỉ có thể nhận những thông tin mà bạn công khai(Tên người dùng,hình ảnh đại diện), chúng tôi không được phép truy cập vào những thông tin khác, bạn có thể kiểm trả bằng cách nhấn vào nút đăng nhập và xem danh mục thông tin mà chúng tôi có thể truy cập và đường dẫn trước khi quyết định xem có muốn đăng nhập vào website này hay không.
                  </p>
                 
                  <div className="row">
                    <div className="col l-6 l-o-3 m-6 m-o-3 c-8 c-o-2">
                      <div className={styles.footer}>
                        <p>
                          Chân thành cảm ơn Bạn đã đọc những thông tin
                          này, kính chúc Bạn có những giây phút mua sắm
                          thật thoải mái.Nếu có bất cứ thắc mắc nào, kính mong
                          Bạn hãy liên hệ với Admin để được giải đáp,
                          Chúng tôi rất hân hạnh được phục vụ Bạn!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          
          </div>
         
        </div>
       </div>
       <Footer/>
   </div>
  )
}

export default ServicePolicy

