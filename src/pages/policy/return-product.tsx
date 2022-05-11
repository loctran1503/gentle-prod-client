import { ChevronRightIcon } from '@chakra-ui/icons'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../assets/css/pages/policy.module.css"
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
const ReturnProduct = () => {
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
                    Chính sách đổi trả
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

export default ReturnProduct

const content = `<p style='margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;'><em><span style="font-size:32px;line-height:150%;font-family:Roboto;">Ch&iacute;nh s&aacute;ch đổi trả</span></em></p>
<p style='margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;'><em><span style="font-size:19px;line-height:150%;font-family:Roboto;">+Đối với sản phẩm nước ngo&agrave;i:</span></em></p>
<p style='margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;'><span style="font-size:19px;line-height:150%;font-family:Roboto;">&nbsp; -li&ecirc;n hệ Admin để giải quyết vấn đề đổi trả</span></p>
<p style='margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;'><em><span style="font-size:19px;line-height:150%;font-family:Roboto;">+Đối với sản phẩm trong nước:</span></em></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">&nbsp; -C&aacute;c trường hợp được đổi lại h&agrave;ng h&oacute;a:</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Trường hợp sản phẩm bị lỗi do nh&agrave; sản xuất, sản phẩm k&eacute;m chất lượng, sản phẩm kh&ocirc;ng đ&uacute;ng chủng loại, mẫu m&atilde;, số lượng như đ&atilde; đặt h&agrave;ng, Qu&yacute; kh&aacute;ch kh&ocirc;ng h&agrave;i l&ograve;ng chất lượng &ndash; Qu&yacute; kh&aacute;ch sẽ được đổi sản phẩm kh&aacute;c hoặc trả lại m&agrave; kh&ocirc;ng mất khoản ph&iacute; n&agrave;o.</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Sản phẩm đổi phải đảm bảo chưa được sử dụng, đối với h&agrave;ng Full seal th&igrave; phải c&ograve;n nguy&ecirc;n seal, đối với c&aacute;c sản phẩm Gift Set, Tester phải đảm bảo c&ograve;n nguy&ecirc;n hộp, sản phẩm chưa bị can thiệp v&agrave; sử dụng. sản phẩm sẽ được ch&uacute;ng t&ocirc;i kiểm tra lại để đảm bảo sản phẩm l&agrave; h&agrave;ng h&oacute;a của b&ecirc;n ch&uacute;ng t&ocirc;i ph&acirc;n phối.</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">&nbsp;</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">C&aacute;c trường hợp kh&ocirc;ng được &aacute;p dụng đổi lại h&agrave;ng h&oacute;a:</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Sản phẩm kh&ocirc;ng phải do Gentlevn.com cung cấp, kh&ocirc;ng chứng minh được nguồn gốc của sản phẩm (h&oacute;a đơn, thời gian mua h&agrave;ng).&nbsp;</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Sản phẩm được mua qu&aacute; 7 ng&agrave;y kể từ khi sản phẩm được b&aacute;n ra.</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Sản phẩm bị t&aacute;c động từ ph&iacute;a người sử dụng dẫn đến hư hỏng, m&oacute;p m&eacute;o, thay đổi h&igrave;nh dạng.</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Sản phẩm đ&atilde; được sử dụng</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Ch&uacute;ng t&ocirc;i kh&ocirc;ng chấp nhận trả lại h&agrave;ng, ho&agrave;n lại tiền với c&aacute;c trường hợp muốn trả lại h&agrave;ng v&igrave; l&yacute; do kh&ocirc;ng th&iacute;ch m&ugrave;i, thay đổi &yacute; định, hay c&aacute;c l&yacute; do c&aacute; nh&acirc;n kh&aacute;c.</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Kh&ocirc;ng bảo h&agrave;nh lỗi chai/v&ograve;i xịt do nh&agrave; sản xuất</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Kh&ocirc;ng bảo h&agrave;nh đối với sản phẩm nước hoa mini ( &lt;= 20ml )</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Kh&ocirc;ng đổi trả lotion, sữa tắm, lăn khử m&ugrave;i</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">&nbsp;</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">Quy tr&igrave;nh đổi h&agrave;ng h&oacute;a:</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Sau khi bạn đ&aacute;p ứng được c&aacute;c điều kiện về đổi lại h&agrave;ng h&oacute;a của ch&uacute;ng t&ocirc;i, h&atilde;y li&ecirc;n hệ với ch&uacute;ng t&ocirc;i để được hỗ trợ.</span></p>
<p style='margin-right:0in;margin-bottom:11.25pt;margin-left:0in;line-height:150%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;background:white;'><span style="font-size:19px;line-height:150%;font-family:Roboto;color:black;">- Sau khi tiếp nhận th&ocirc;ng tin v&agrave; check kiểm c&aacute;c điều kiện, nếu bạn đ&aacute;p ứng đủ điều kiện, ch&uacute;ng t&ocirc;i sẽ hỗ trợ ngay v&agrave; nhanh nhất cho bạn.</span></p>
<p><span style='font-size:16px;font-family:"Times New Roman",serif;'><br>&nbsp;</span></p>
<p style='margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;'>&nbsp;</p>
<p style='margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0in;'>&nbsp;</p>`