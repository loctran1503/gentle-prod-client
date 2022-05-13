import { ChevronRightIcon } from '@chakra-ui/icons'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React from 'react'
import styles from "../../assets/css/pages/policy.module.css"
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
const PrivacyPolicy = () => {
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
                    chính sách bảo mật
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

export default PrivacyPolicy

const content = `

<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;background:white;vertical-align:baseline;'><span style="font-size:27px;font-family:Roboto;color:#212121;border:none windowtext 1.0pt;padding:0in;">CH&Iacute;NH S&Aacute;CH BẢO MẬT</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;background:white;vertical-align:baseline;'><span style="font-size:27px;font-family:Roboto;color:#212121;border:none windowtext 1.0pt;padding:0in;">&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;background:white;vertical-align:baseline;'><span style="font-size:13px;color:#1A202C;">&nbsp;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><strong><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">I. MỤC Đ&Iacute;CH V&Agrave; PHẠM VI THU THẬP</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">Việc thu thập dữ liệu chủ yếu tr&ecirc;n website bao gồm: họ t&ecirc;n, email, điện thoại, địa chỉ kh&aacute;ch h&agrave;ng trong mục li&ecirc;n hệ. Đ&acirc;y l&agrave; c&aacute;c th&ocirc;ng tin m&agrave; ch&uacute;ng t&ocirc;i cần th&agrave;nh vi&ecirc;n cung cấp bắt buộc khi gửi th&ocirc;ng tin nhờ tư vấn hay muốn mua sản phẩm v&agrave; để ch&uacute;ng t&ocirc;i li&ecirc;n hệ x&aacute;c nhận lại với kh&aacute;ch h&agrave;ng tr&ecirc;n website nhằm đảm bảo quyền lợi cho cho người ti&ecirc;u d&ugrave;ng.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">C&aacute;c th&agrave;nh vi&ecirc;n sẽ tự chịu tr&aacute;ch nhiệm về bảo mật v&agrave; lưu giữ mọi hoạt động sử dụng dịch vụ dưới th&ocirc;ng tin m&agrave; m&igrave;nh cung cấp v&agrave; hộp thư điện tử của m&igrave;nh. Ngo&agrave;i ra, th&agrave;nh vi&ecirc;n c&oacute; tr&aacute;ch nhiệm th&ocirc;ng b&aacute;o kịp thời cho webiste ch&uacute;ng t&ocirc;i về những h&agrave;nh vi sử dụng tr&aacute;i ph&eacute;p, lạm dụng, vi phạm bảo mật, lưu giữ t&ecirc;n đăng k&yacute; v&agrave; mật khẩu của b&ecirc;n thứ ba để c&oacute; biện ph&aacute;p giải quyết ph&ugrave; hợp.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><strong><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">II. PHẠM VI SỬ DỤNG TH&Ocirc;NG TIN</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">Ch&uacute;ng t&ocirc;i sử dụng th&ocirc;ng tin th&agrave;nh vi&ecirc;n cung cấp để:</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">- Li&ecirc;n hệ x&aacute;c nhận đơn h&agrave;ng v&agrave; giao h&agrave;ng cho th&agrave;nh vi&ecirc;n khi nhận được y&ecirc;u cầu từ th&agrave;nh vi&ecirc;n;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">- Cung cấp th&ocirc;ng tin về sản phẩm đến kh&aacute;ch h&agrave;ng nếu c&oacute; y&ecirc;u cầu từ kh&aacute;ch h&agrave;ng;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">- Gửi email tiếp thị, khuyến mại về h&agrave;ng h&oacute;a do ch&uacute;ng t&ocirc;i b&aacute;n;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">- Gửi c&aacute;c th&ocirc;ng b&aacute;o về c&aacute;c hoạt động tr&ecirc;n website</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">- Li&ecirc;n lạc v&agrave; giải quyết với người d&ugrave;ng trong những trường hợp đặc biệt;</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">- Kh&ocirc;ng sử dụng th&ocirc;ng tin c&aacute; nh&acirc;n của người d&ugrave;ng ngo&agrave;i mục đ&iacute;ch x&aacute;c nhận v&agrave; li&ecirc;n hệ c&oacute; li&ecirc;n quan đến giao dịch</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">- Khi c&oacute; y&ecirc;u cầu của cơ quan tư ph&aacute;p bao gồm: Viện kiểm s&aacute;t, t&ograve;a &aacute;n, cơ quan c&ocirc;ng an điều tra li&ecirc;n quan đến h&agrave;nh vi vi phạm ph&aacute;p luật n&agrave;o đ&oacute; của kh&aacute;ch h&agrave;ng.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><strong><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">III. THỜI GIAN LƯU TRỮ TH&Ocirc;NG TIN</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">Dữ liệu c&aacute; nh&acirc;n của th&agrave;nh vi&ecirc;n sẽ được lưu trữ cho đến khi c&oacute; y&ecirc;u cầu ban quản trị hủy bỏ. C&ograve;n lại trong mọi trường hợp th&ocirc;ng tin c&aacute; nh&acirc;n th&agrave;nh vi&ecirc;n sẽ được bảo mật tr&ecirc;n m&aacute;y chủ của ch&uacute;ng t&ocirc;i</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><strong><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">IV. NHỮNG NGƯỜI HOẶC TỔ CHỨC C&Oacute; THỂ ĐƯỢC TIẾP CẬN VỚI TH&Ocirc;NG TIN C&Aacute; NH&Acirc;N</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">Đối tượng được tiếp cận với th&ocirc;ng tin c&aacute; nh&acirc;n của kh&aacute;ch h&agrave;ng thuộc một trong những trường hợp sau:</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">- Nh&acirc;n vi&ecirc;n của c&ocirc;ng ty</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">- C&aacute;c đối t&aacute;c c&oacute; k&yacute; hợp động thực hiện 1 phần dịch vụ của C&ocirc;ng Ty. C&aacute;c đối t&aacute;c n&agrave;y sẽ nhận được những th&ocirc;ng tin theo thỏa thuận hợp đồng (c&oacute; thể 1 phần hoặc to&agrave;n bộ th&ocirc;ng tin tuy theo điều khoản hợp đồng) để tiến h&agrave;nh hỗ trợ người d&ugrave;ng sử dụng dịch vụ do C&ocirc;ng ty cung cấp.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><strong><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">V. ĐỊA CHỈ CỦA ĐƠN VỊ THU THẬP V&Agrave; QUẢN L&Yacute; TH&Ocirc;NG TIN C&Aacute; NH&Acirc;N</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:14px;font-family:Roboto;color:#212121;border:none windowtext 1.0pt;padding:0in;">Cửa h&agrave;ng GENTLE</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:14px;font-family:Roboto;color:#212121;border:none windowtext 1.0pt;padding:0in;">Website:gentlevn.com</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><strong><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">VI. PHƯƠNG TIỆN V&Agrave; C&Ocirc;NG CỤ ĐỂ NGƯỜI D&Ugrave;NG TIẾP CẬN V&Agrave; CHỈNH SỬA DỮ LIỆU C&Aacute; NH&Acirc;N CỦA M&Igrave;NH</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">Th&agrave;nh vi&ecirc;n c&oacute; quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ th&ocirc;ng tin c&aacute; nh&acirc;n của m&igrave;nh bằng c&aacute;ch li&ecirc;n hệ với ban quản trị website thực hiện việc n&agrave;y.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">Th&agrave;nh vi&ecirc;n c&oacute; quyền gửi khiếu nại về nội dung bảo mật th&ocirc;ng tin đề nghị li&ecirc;n hệ Ban quản trị của website. Khi tiếp nhận những phản hồi n&agrave;y, ch&uacute;ng t&ocirc;i sẽ x&aacute;c nhận lại th&ocirc;ng tin, trường hợp đ&uacute;ng như phản &aacute;nh của th&agrave;nh vi&ecirc;n t&ugrave;y theo mức độ, ch&uacute;ng t&ocirc;i sẽ c&oacute; những biện ph&aacute;p xử l&yacute; kịp thời.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><strong><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">VII. CƠ CHẾ TIẾP NHẬN V&Agrave; GIẢI QUYẾT KHIẾU NẠI CỦA NGƯỜI TI&Ecirc;U D&Ugrave;NG</span></strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">Th&ocirc;ng tin c&aacute; nh&acirc;n của th&agrave;nh vi&ecirc;n được cam kết bảo mật tuyệt đối theo ch&iacute;nh s&aacute;ch bảo vệ th&ocirc;ng tin c&aacute; nh&acirc;n. Việc thu thập v&agrave; sử dụng th&ocirc;ng tin của mỗi th&agrave;nh vi&ecirc;n chỉ được thực hiện khi c&oacute; sự đồng &yacute; của kh&aacute;ch h&agrave;ng đ&oacute; trừ những trường hợp ph&aacute;p luật c&oacute; quy định kh&aacute;c.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">Kh&ocirc;ng sử dụng, kh&ocirc;ng chuyển giao, cung cấp hay tiết lộ cho b&ecirc;n thứ 3 n&agrave;o về th&ocirc;ng tin c&aacute; nh&acirc;n của th&agrave;nh vi&ecirc;n khi kh&ocirc;ng c&oacute; sự cho ph&eacute;p đồng &yacute; từ th&agrave;nh vi&ecirc;n.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">Trong trường hợp m&aacute;y chủ lưu trữ th&ocirc;ng tin bị hacker tấn c&ocirc;ng dẫn đến mất m&aacute;t dữ liệu c&aacute; nh&acirc;n th&agrave;nh vi&ecirc;n, ch&uacute;ng t&ocirc;i sẽ c&oacute; tr&aacute;ch nhiệm th&ocirc;ng b&aacute;o vụ việc cho cơ quan chức năng điều tra xử l&yacute; kịp thời v&agrave; th&ocirc;ng b&aacute;o cho th&agrave;nh vi&ecirc;n được biết.</span></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:.0001pt;margin-left:0in;line-height:16.9pt;font-size:15px;font-family:"Calibri",sans-serif;text-align:justify;background:white;vertical-align:baseline;'><span style="font-size:16px;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">Bảo mật tuyệt đối mọi th&ocirc;ng tin giao dịch trực tuyến của th&agrave;nh vi&ecirc;n bao gồm th&ocirc;ng tin h&oacute;a đơn kế to&aacute;n chứng từ số h&oacute;a</span></p>
<p><span style="font-size:16px;line-height:107%;font-family:Roboto;color:#212529;border:none windowtext 1.0pt;padding:0in;">Ban quản l&yacute; y&ecirc;u cầu c&aacute;c c&aacute; nh&acirc;n khi đăng k&yacute;/mua h&agrave;ng phải cung cấp đầy đủ th&ocirc;ng tin c&aacute; nh&acirc;n c&oacute; li&ecirc;n quan như: Họ v&agrave; t&ecirc;n, địa chỉ li&ecirc;n lạc, email, điện thoại.., v&agrave; chịu tr&aacute;ch nhiệm về t&iacute;nh ph&aacute;p l&yacute; của những th&ocirc;ng tin tr&ecirc;n. Ban quản l&yacute; kh&ocirc;ng chịu tr&aacute;ch nhiệm cũng như kh&ocirc;ng giải quyết mọi khiếu nại c&oacute; li&ecirc;n quan đến quyền lợi của th&agrave;nh vi&ecirc;n đ&oacute; nếu x&eacute;t thấy tất cả th&ocirc;ng tin c&aacute; nh&acirc;n của th&agrave;nh vi&ecirc;n đ&oacute; cung cấp khi đăng k&yacute; ban đầu l&agrave; kh&ocirc;ng ch&iacute;nh x&aacute;c.</span></p>

`