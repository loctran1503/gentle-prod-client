import Script from "next/script";
import React, { memo } from "react";

const FacebookMessenger = () => {
  return (
    <div>
      <div id="fb-root"></div>

      <div id="fb-customer-chat" className="fb-customerchat"></div>

      <Script strategy="lazyOnload">
        {`
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "113765614663507");
    chatbox.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v13.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    `}
      </Script>
    </div>
  );
};

export default memo(FacebookMessenger);
