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

const content = `<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:32px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">Ch&iacute;nh s&aacute;ch thanh to&aacute;n</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">Để đảm bảo đơn h&agrave;ng được ho&agrave;n th&agrave;nh tốt nhất, ch&uacute;ng t&ocirc;i th&agrave;nh thật k&iacute;nh mong qu&yacute; kh&aacute;ch thanh to&aacute;n trước một phần gi&aacute; trị của mỗi đơn h&agrave;ng.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">C&aacute;c bước mua h&agrave;ng sẽ được thực hiện theo tr&igrave;nh tự như sau</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><strong><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">I:C&aacute;c bước thanh to&aacute;n</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Nếu qu&yacute; kh&aacute;ch đ&atilde; chọn được sản phẩm ưng &yacute;, qu&yacute; kh&aacute;ch h&atilde;y nhấn v&agrave;o n&uacute;t thanh to&aacute;n hoặc c&oacute; thể để sản phẩm ở giỏ h&agrave;ng.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Trong trang thanh to&aacute;n,qu&yacute; kh&aacute;ch vui l&ograve;ng điền đầy đủ th&ocirc;ng tin của người nhận h&agrave;ng.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Qu&yacute; kh&aacute;ch c&oacute; thể chuyển khoản theo số t&agrave;i khoản được cung cấp b&ecirc;n dưới mỗi trang thanh to&aacute;n, nh&acirc;n vi&ecirc;n cửa h&agrave;ng sẽ gọi v&agrave;o số điện thoại được cung cấp để x&aacute;c nhận đơn h&agrave;ng.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Nếu qu&aacute; 24h kể từ thời gian đặt nhưng đơn h&agrave;ng vẫn chưa được trả trước, đơn h&agrave;ng sẽ bị hủy.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Sau khi thanh to&aacute;n trước th&agrave;nh c&ocirc;ng,qu&yacute; kh&aacute;ch sẽ nhận được h&oacute;a đơn hiển thị t&igrave;nh trạng đơn h&agrave;ng, h&oacute;a đơn c&oacute; đầy đủ th&ocirc;ng tin bao gồm cả ph&iacute; thanh to&aacute;n trước.(H&oacute;a đơn nằm ở mục th&ocirc;ng tin người d&ugrave;ng).</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Trường hợp qu&yacute; kh&aacute;ch kh&ocirc;ng đăng nhập, ch&uacute;ng t&ocirc;i xin ph&eacute;p được gửi t&igrave;nh trạng đơn h&agrave;ng qua t&agrave;i khoản mạng x&atilde; hội để qu&yacute; kh&aacute;ch nắm bắt được t&igrave;nh trạng đơn h&agrave;ng một c&aacute;ch tốt nhất.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><strong><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">&nbsp;</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><strong><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">II:Chi tiết ph&iacute; thanh to&aacute;n</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Với đơn h&agrave;ng nhập từ mỹ:25% tổng gi&aacute; trị đơn h&agrave;ng.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Với đơn h&agrave;ng nhập từ h&agrave;n quốc:15% tổn gi&aacute; trị đơn h&agrave;ng.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">*Với đơn h&agrave;ng c&oacute; chứa c&aacute;c sản phẩm nhập từ nhiều quốc gia kh&aacute;c nhau,ph&iacute; thanh to&aacute;n trước sẽ t&iacute;nh theo quốc gia c&oacute; ph&iacute; thanh to&aacute;n cao nhất.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;text-align:center;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">Ch&acirc;n th&agrave;nh cảm ơn qu&yacute; kh&aacute;ch đ&atilde; đọc những th&ocirc;ng tin n&agrave;y, k&iacute;nh ch&uacute;c qu&yacute; kh&aacute;ch c&oacute; những gi&acirc;y ph&uacute;t mua sắm thật thoải m&aacute;i.Nếu c&oacute; bất cứ thắc mắc n&agrave;o, k&iacute;nh mong qu&yacute; kh&aacute;ch h&atilde;y li&ecirc;n hệ với Admin để được giải đ&aacute;p, Ch&uacute;ng t&ocirc;i rất h&acirc;n hạnh được phục vụ qu&yacute; kh&aacute;ch</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;background:#FCFCFC;vertical-align:baseline;'><span style='font-size:19px;line-height:150%;font-family:"inherit",serif;color:#1A202C;border:none windowtext 1.0pt;padding:0in;'>&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>

 `