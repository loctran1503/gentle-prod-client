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
              <div className={styles.body}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  />

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

export default Delivery

const content = `

<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:27px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">CH&Iacute;NH S&Aacute;CH VẬN CHUYỂN</span></p>
<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline;'><span style="font-size:27px;line-height:150%;font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">&nbsp;</span></p>
<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline;'><strong><span style="font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">I.THỜI GIAN VẬN CHUYỂN</span></strong></p>
<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline; border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;'><span style=" border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;line-height:inherit;"><span style="font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Với đơn h&agrave;ng nhập từ mỹ: 9 đến 21 ng&agrave;y kể từ ng&agrave;y đơn h&agrave;ng được x&aacute;c nhận.</span></span></p>
<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline; border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;'><span style=" border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;line-height:inherit;"><span style="font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Với đơn h&agrave;ng nhập từ h&agrave;n quốc: 7 đến 14 ng&agrave;y kể từ ng&agrave;y đơn h&agrave;ng được x&aacute;c nhận.</span></span></p>
<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline; border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;'><span style=" border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;line-height:inherit;"><span style="font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">*Với đơn h&agrave;ng c&oacute; chứa c&aacute;c sản phẩm nhập từ nhiều quốc gia kh&aacute;c nhau, thời gian vận chuyển sẽ t&iacute;nh theo quốc gia c&oacute; thời gian vận chuyển d&agrave;i nhất.</span></span></p>
<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline;'><span style='font-size:15px;line-height:150%;font-family:"Calibri",sans-serif;'>&nbsp;</span></p>
<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline; border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;'><strong style=" border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-stretch: inherit;font-size:inherit;line-height:inherit;"><span style=" border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;line-height:inherit;"><span style="font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">II.PH&Iacute; VẬN CHUYỂN</span></span></strong></p>
<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline; border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;'><span style=" border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;line-height:inherit;"><span style="font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Với đơn h&agrave;ng nhập từ mỹ: 322.000đ cho c&aacute;c đơn h&agrave;ng dưới 8.000.000đ v&agrave; 0đ cho c&aacute;c đơn h&agrave;ng từ 8.000.000đ trở l&ecirc;n.</span></span></p>
<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline; border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;'><span style=" border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;line-height:inherit;"><span style="font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">-Với đơn h&agrave;ng nhập từ h&agrave;n quốc: 198.000đ cho c&aacute;c đơn h&agrave;ng dưới 4.000.000đ v&agrave; 0đ &nbsp;cho c&aacute;c đơn h&agrave;ng từ 4.000.000đ trở l&ecirc;n..</span></span></p>
<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline; border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;'><span style=" border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;line-height:inherit;"><span style="font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">*Với đơn h&agrave;ng c&oacute; chứa c&aacute;c sản phẩm nhập từ nhiều quốc gia kh&aacute;c nhau, Ph&iacute; vận chuyển sẽ t&iacute;nh theo quốc gia c&oacute; ph&iacute; vận chuyển cao nhất, mức ph&iacute; để vận chuyển 0đ cũng &aacute;p dụng tương tự.</span></span></p>
<p style='margin-right:0in;margin-left:0in;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:.0001pt;line-height:150%;margin:0in;background:#FCFCFC;vertical-align:baseline; border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;'><span style=" border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch: inherit;line-height:inherit;"><span style="font-family:Roboto;color:black;border:none windowtext 1.0pt;padding:0in;">Mọi thắc mắc xin qu&yacute; kh&aacute;ch vui l&ograve;ng li&ecirc;n hệ Admin qua fanpage hoặc số điện thoại:0774.917.635 để được giải đ&aacute;p.Xin ch&acirc;n th&agrave;nh cảm ơn qu&yacute; kh&aacute;ch.</span></span></p>
<p style='margin-right:0in;margin-left:0in;font-size:0.9rem;font-family:"Calibri",sans-serif;margin-top:0in;margin-bottom:8.0pt;line-height:inherit; border-box;overflow-wrap: break-word;font-style:inherit;font-variant:inherit;font-stretch: inherit;'>&nbsp;</p>

 `