import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&family=Roboto:wght@100;300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}

          <ColorModeScript />
          <Main />
          <NextScript />

          <div id="fb-root"></div>

          <div id="fb-customer-chat" className="fb-customerchat"></div>
          <Script strategy="lazyOnload">
            {`
    
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "115404277817582");
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
        </body>
      </Html>
    );
  }
}
