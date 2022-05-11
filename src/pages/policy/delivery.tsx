import { ChevronRightIcon } from '@chakra-ui/icons'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../assets/css/pages/policy.module.css"
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
const Delivery = () => {
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
                    chính sách vận chuyển
                  </p>
                  
                </div>
              </div>
              <div className={styles.body}  dangerouslySetInnerHTML={{
                          __html: content,
                        }}>
                 
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

export default Delivery

const content = `<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:32px;line-height:107%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">Ch&iacute;nh s&aacute;ch vận chuyển</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style="font-size:19px;line-height:107%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">I.Thời gian vận chuyển</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;line-height:107%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Với đơn h&agrave;ng nhập từ mỹ: 9 đến 21 ng&agrave;y kể từ ng&agrave;y đơn h&agrave;ng được x&aacute;c nhận.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;line-height:107%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Với đơn h&agrave;ng nhập từ h&agrave;n quốc: 7 đến 14 ng&agrave;y kể từ ng&agrave;y đơn h&agrave;ng được x&aacute;c nhận.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;line-height:107%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">*Với đơn h&agrave;ng c&oacute; chứa c&aacute;c sản phẩm nhập từ nhiều quốc gia kh&aacute;c nhau, thời gian vận chuyển sẽ t&iacute;nh theo quốc gia c&oacute; thời gian vận chuyển d&agrave;i nhất.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style="font-size:19px;line-height:107%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">II.Ph&iacute; vận chuyển</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;line-height:107%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Với đơn h&agrave;ng nhập từ mỹ: 322.000đ cho c&aacute;c đơn h&agrave;ng dưới 8.000.000đ v&agrave; 0đ cho c&aacute;c đơn h&agrave;ng từ 8.000.000đ trở l&ecirc;n.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;line-height:107%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Với đơn h&agrave;ng nhập từ h&agrave;n quốc: 198.000đ cho c&aacute;c đơn h&agrave;ng dưới 4.000.000đ v&agrave; 0đ &nbsp;cho c&aacute;c đơn h&agrave;ng từ 4.000.000đ trở l&ecirc;n..</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;line-height:107%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">*Với đơn h&agrave;ng c&oacute; chứa c&aacute;c sản phẩm nhập từ nhiều quốc gia kh&aacute;c nhau, Ph&iacute; vận chuyển sẽ t&iacute;nh theo quốc gia c&oacute; ph&iacute; vận chuyển cao nhất, mức ph&iacute; để vận chuyển 0đ cũng &aacute;p dụng tương tự.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;line-height:107%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">Mọi thắc mắc xin qu&yacute; kh&aacute;ch vui l&ograve;ng li&ecirc;n hệ Admin qua fanpage hoặc số điện thoại:0774.917.635 để được giải đ&aacute;p.Xin ch&acirc;n th&agrave;nh cảm ơn qu&yacute; kh&aacute;ch.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style="font-size:19px;line-height:107%;">&nbsp;</span></p>

 `