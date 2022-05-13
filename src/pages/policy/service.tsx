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
                    Điều khoản dịch vụ
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

export default ServicePolicy

const content = `

<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline;"><span style="font-size: 24.0pt; line-height: 150%; font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">ĐIỀU KHOẢN DỊCH VỤ</span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline;"><span style="font-size: 11.5pt; line-height: 150%; font-family: 'inherit',serif; color: #1a202c; border: none windowtext 1.0pt; padding: 0in;">&nbsp;</span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">Khi qu&yacute; kh&aacute;ch truy cập v&agrave;o trang web của ch&uacute;ng t&ocirc;i c&oacute; nghĩa l&agrave; qu&yacute; kh&aacute;ch đồng &yacute; với c&aacute;c điều khoản n&agrave;y. Trang web c&oacute; quyền thay đổi, chỉnh sửa, th&ecirc;m hoặc lược bỏ bất kỳ phần n&agrave;o trong Quy định v&agrave; Điều kiện sử dụng, v&agrave;o bất cứ l&uacute;c n&agrave;o. C&aacute;c thay đổi c&oacute; hiệu lực ngay khi được đăng tr&ecirc;n trang web m&agrave; kh&ocirc;ng cần th&ocirc;ng b&aacute;o trước. V&agrave; khi qu&yacute; kh&aacute;ch tiếp tục sử dụng trang web, sau khi c&aacute;c thay đổi về quy định v&agrave; điều kiện được đăng tải, c&oacute; nghĩa l&agrave; qu&yacute; kh&aacute;ch chấp nhận với những thay đổi đ&oacute;.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">Qu&yacute; kh&aacute;ch vui l&ograve;ng kiểm tra thường xuy&ecirc;n để cập nhật những thay đổi của ch&uacute;ng t&ocirc;i.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline;"><span style="font-size: 11.5pt; line-height: 150%; font-family: 'Calibri',sans-serif; color: #1a202c;">&nbsp;</span></p>
<ol>
<li><strong style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;"> Hướng dẫn sử dụng web</span></span></strong></li>
</ol>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Khi v&agrave;o web của ch&uacute;ng t&ocirc;i, người d&ugrave;ng tối thiểu phải 18 tuổi hoặc truy cập dưới sự gi&aacute;m s&aacute;t của cha mẹ hay người gi&aacute;m hộ hợp ph&aacute;p.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Ch&uacute;ng t&ocirc;i cấp giấy ph&eacute;p sử dụng để bạn c&oacute; thể mua sắm tr&ecirc;n web trong khu&ocirc;n khổ điều khoản v&agrave; điều kiện sử dụng đ&atilde; đề ra.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Nghi&ecirc;m cấm sử dụng bất kỳ phần n&agrave;o của trang web n&agrave;y với mục đ&iacute;ch thương mại hoặc nh&acirc;n danh bất kỳ đối t&aacute;c thứ ba n&agrave;o nếu kh&ocirc;ng được ch&uacute;ng t&ocirc;i cho ph&eacute;p bằng văn bản. Nếu vi phạm bất cứ điều n&agrave;o trong đ&acirc;y, ch&uacute;ng t&ocirc;i sẽ hủy giấy ph&eacute;p của bạn m&agrave; kh&ocirc;ng cần b&aacute;o trước.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Trang web n&agrave;y chỉ d&ugrave;ng để cung cấp th&ocirc;ng tin sản phẩm chứ ch&uacute;ng t&ocirc;i kh&ocirc;ng phải nh&agrave; sản xuất n&ecirc;n những nhận x&eacute;t hiển thị tr&ecirc;n web l&agrave; &yacute; kiến c&aacute; nh&acirc;n của kh&aacute;ch h&agrave;ng, kh&ocirc;ng phải của ch&uacute;ng t&ocirc;i.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Qu&yacute; kh&aacute;ch phải đăng k&yacute; t&agrave;i khoản với th&ocirc;ng tin x&aacute;c thực về bản th&acirc;n v&agrave; phải cập nhật nếu c&oacute; bất kỳ thay đổi n&agrave;o. Mỗi người truy cập phải c&oacute; tr&aacute;ch nhiệm với mật khẩu, t&agrave;i khoản v&agrave; hoạt động của m&igrave;nh tr&ecirc;n web. Hơn nữa, qu&yacute; kh&aacute;ch phải th&ocirc;ng b&aacute;o cho ch&uacute;ng t&ocirc;i biết khi t&agrave;i khoản bị truy cập tr&aacute;i ph&eacute;p. Ch&uacute;ng t&ocirc;i kh&ocirc;ng chịu bất kỳ tr&aacute;ch nhiệm n&agrave;o, d&ugrave; trực tiếp hay gi&aacute;n tiếp, đối với những thiệt hại hoặc mất m&aacute;t g&acirc;y ra do qu&yacute; kh&aacute;ch kh&ocirc;ng tu&acirc;n thủ quy định.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Trong suốt qu&aacute; tr&igrave;nh đăng k&yacute;, qu&yacute; kh&aacute;ch đồng &yacute; nhận email quảng c&aacute;o từ website. Sau đ&oacute;, nếu kh&ocirc;ng muốn tiếp tục nhận mail, qu&yacute; kh&aacute;ch c&oacute; thể từ chối bằng c&aacute;ch nhấp v&agrave;o đường link ở dưới c&ugrave;ng trong mọi email quảng c&aacute;o.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline;"><span style="font-size: 11.5pt; line-height: 150%; font-family: 'Calibri',sans-serif; color: #1a202c;">&nbsp;</span></p>
<ol>
<li><strong style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;"> Chấp nhận đơn h&agrave;ng v&agrave; gi&aacute; cả</span></span></strong></li>
</ol>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Ch&uacute;ng t&ocirc;i c&oacute; quyền từ chối hoặc hủy đơn h&agrave;ng của qu&yacute; kh&aacute;ch v&igrave; bất kỳ l&yacute; do g&igrave; v&agrave;o bất kỳ l&uacute;c n&agrave;o. Ch&uacute;ng t&ocirc;i c&oacute; thể hỏi th&ecirc;m về số điện thoại v&agrave; địa chỉ trước khi nhận đơn h&agrave;ng.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Ch&uacute;ng t&ocirc;i cam kết sẽ cung cấp th&ocirc;ng tin gi&aacute; cả ch&iacute;nh x&aacute;c nhất cho người ti&ecirc;u d&ugrave;ng. Tuy nhi&ecirc;n, đ&ocirc;i l&uacute;c vẫn c&oacute; sai s&oacute;t xảy ra, v&iacute; dụ như trường hợp gi&aacute; sản phẩm kh&ocirc;ng hiển thị ch&iacute;nh x&aacute;c tr&ecirc;n trang web hoặc sai gi&aacute;, t&ugrave;y theo từng trường hợp ch&uacute;ng t&ocirc;i sẽ li&ecirc;n hệ hướng dẫn hoặc th&ocirc;ng b&aacute;o hủy đơn h&agrave;ng đ&oacute; cho qu&yacute; kh&aacute;ch. Ch&uacute;ng t&ocirc;i cũng c&oacute; quyền từ chối hoặc hủy bỏ bất kỳ đơn h&agrave;ng n&agrave;o d&ugrave; đơn h&agrave;ng đ&oacute; đ&atilde; hay chưa được x&aacute;c nhận hoặc đ&atilde; bị thanh to&aacute;n.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline;"><span style="font-size: 11.5pt; line-height: 150%; font-family: 'Calibri',sans-serif; color: #1a202c;">&nbsp;</span></p>
<ol>
<li><strong style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;"> Thương hiệu v&agrave; bản quyền</span></span></strong></li>
</ol>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Mọi quyền sở hữu tr&iacute; tuệ (đ&atilde; đăng k&yacute; hoặc chưa đăng k&yacute;), nội dung th&ocirc;ng tin v&agrave; tất cả c&aacute;c thiết kế, văn bản, đồ họa, phần mềm, h&igrave;nh ảnh, video, &acirc;m nhạc, &acirc;m thanh, bi&ecirc;n dịch phần mềm, m&atilde; nguồn v&agrave; phần mềm cơ bản đều l&agrave; t&agrave;i sản của ch&uacute;ng t&ocirc;i. To&agrave;n bộ nội dung của trang web được bảo vệ bởi luật bản quyền của Việt Nam v&agrave; c&aacute;c c&ocirc;ng ước quốc tế. Bản quyền đ&atilde; được bảo lưu.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline;"><span style="font-size: 11.5pt; line-height: 150%; font-family: 'Calibri',sans-serif; color: #1a202c;">&nbsp;</span></p>
<ol>
<li><strong style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;"> Quyền ph&aacute;p l&yacute;</span></span></strong></li>
</ol>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- C&aacute;c điều kiện, điều khoản v&agrave; nội dung của trang web n&agrave;y được điều chỉnh bởi luật ph&aacute;p Việt Nam v&agrave; T&ograve;a &aacute;n c&oacute; thẩm quyền tại Việt Nam sẽ giải quyết bất kỳ tranh chấp n&agrave;o ph&aacute;t sinh từ việc sử dụng tr&aacute;i ph&eacute;p trang web n&agrave;y.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline;"><span style="font-size: 11.5pt; line-height: 150%; font-family: 'Calibri',sans-serif; color: #1a202c;">&nbsp;</span></p>
<ol>
<li><strong style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;"> Quy định về bảo mật</span></span></strong></li>
</ol>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Trang web của ch&uacute;ng t&ocirc;i coi trọng việc bảo mật th&ocirc;ng tin v&agrave; sử dụng c&aacute;c biện ph&aacute;p tốt nhất bảo vệ th&ocirc;ng tin v&agrave; việc thanh to&aacute;n của qu&yacute; kh&aacute;ch. Th&ocirc;ng tin của qu&yacute; kh&aacute;ch trong qu&aacute; tr&igrave;nh thanh to&aacute;n sẽ được m&atilde; h&oacute;a để đảm bảo an to&agrave;n. Sau khi qu&yacute; kh&aacute;ch ho&agrave;n th&agrave;nh qu&aacute; tr&igrave;nh đặt h&agrave;ng, qu&yacute; kh&aacute;ch sẽ tho&aacute;t khỏi chế độ an to&agrave;n.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Qu&yacute; kh&aacute;ch kh&ocirc;ng được sử dụng bất kỳ chương tr&igrave;nh, c&ocirc;ng cụ hay h&igrave;nh thức n&agrave;o kh&aacute;c để can thiệp v&agrave;o hệ thống hay l&agrave;m thay đổi cấu tr&uacute;c dữ liệu. Trang web cũng nghi&ecirc;m cấm việc ph&aacute;t t&aacute;n, truyền b&aacute; hay cổ vũ cho bất kỳ hoạt động n&agrave;o nhằm can thiệp, ph&aacute; hoại hay x&acirc;m nhập v&agrave;o dữ liệu của hệ thống. C&aacute; nh&acirc;n hay tổ chức vi phạm sẽ bị tước bỏ mọi quyền lợi cũng như sẽ bị truy tố trước ph&aacute;p luật nếu cần thiết.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Mọi th&ocirc;ng tin giao dịch sẽ được bảo mật nhưng trong trường hợp cơ quan ph&aacute;p luật y&ecirc;u cầu, ch&uacute;ng t&ocirc;i sẽ buộc phải cung cấp những th&ocirc;ng tin n&agrave;y cho c&aacute;c cơ quan ph&aacute;p luật.</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline;"><span style="font-size: 11.5pt; line-height: 150%; font-family: 'Calibri',sans-serif; color: #1a202c;">&nbsp;</span></p>
<ol>
<li><strong style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;"> Thay đổi, hủy bỏ giao dịch tại website</span></span></strong></li>
</ol>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">Trong mọi trường hợp, kh&aacute;ch h&agrave;ng đều c&oacute; quyền chấm dứt giao dịch nếu đ&atilde; thực hiện c&aacute;c biện ph&aacute;p sau đ&acirc;y:</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Th&ocirc;ng b&aacute;o cho ch&uacute;ng t&ocirc;i về việc hủy giao dịch qua đường d&acirc;y n&oacute;ng 0774.917.635</span></span></p>
<p style="margin: 0in; margin-bottom: .0001pt; text-align: justify; line-height: 150%; background: white; vertical-align: baseline; box-sizing: border-box; overflow-wrap: break-word; font-variant-ligatures: normal; font-variant-caps: normal; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-stretch: inherit; orphans: 2; widows: 2; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; word-spacing: 0px;"><span style="box-sizing: border-box; overflow-wrap: break-word; font-style: inherit; font-variant: inherit; font-weight: inherit; font-stretch: inherit;"><span style="font-family: Roboto; color: black; border: none windowtext 1.0pt; padding: 0in;">- Trả lại h&agrave;ng ho&aacute; đ&atilde; nhận nhưng chưa sử dụng hoặc hưởng bất kỳ lợi &iacute;ch n&agrave;o từ h&agrave;ng h&oacute;a đ&oacute; (theo quy định của ch&iacute;nh s&aacute;ch đổi trả h&agrave;ng).</span></span></p>
<p style="margin: 9.6pt 0in 9.6pt 0in;">&nbsp;</p>

`