(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9768,7637],{5193:function(e,t,n){"use strict";n.d(t,{zx:function(){return N}});var r=n(7375),a=n(2846),i=n(4592),o=n(8554),l=n.n(o),c=n(7294),s=n(6450),u=n(9609);function f(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var p=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],m=(0,s.kr)({strict:!1,name:"ButtonGroupContext"}),v=m[0],h=m[1],y=(0,a.Gp)((function(e,t){var n=e.size,r=e.colorScheme,o=e.variant,l=e.className,s=e.spacing,u=void 0===s?"0.5rem":s,m=e.isAttached,h=e.isDisabled,y=f(e,p),b=(0,i.cx)("chakra-button__group",l),g=c.useMemo((function(){return{size:n,colorScheme:r,variant:o,isDisabled:h}}),[n,r,o,h]),E={display:"inline-flex"};return E=d({},E,m?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),c.createElement(v,{value:g},c.createElement(a.m$.div,d({ref:t,role:"group",__css:E,className:b},y)))}));i.Ts&&(y.displayName="ButtonGroup");var b=["label","placement","spacing","children","className","__css"],g=function(e){var t=e.label,n=e.placement,r=e.spacing,o=void 0===r?"0.5rem":r,l=e.children,s=void 0===l?c.createElement(u.$,{color:"currentColor",width:"1em",height:"1em"}):l,p=e.className,m=e.__css,v=f(e,b),h=(0,i.cx)("chakra-button__spinner",p),y="start"===n?"marginEnd":"marginStart",g=c.useMemo((function(){var e;return d(((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"})[y]=t?o:0,e.fontSize="1em",e.lineHeight="normal",e),m)}),[m,t,y,o]);return c.createElement(a.m$.div,d({className:h},v,{__css:g}),s)};i.Ts&&(g.displayName="ButtonSpinner");var E=["children","className"],x=function(e){var t=e.children,n=e.className,r=f(e,E),o=c.isValidElement(t)?c.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,l=(0,i.cx)("chakra-button__icon",n);return c.createElement(a.m$.span,d({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:l}),o)};i.Ts&&(x.displayName="ButtonIcon");var _=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],N=(0,a.Gp)((function(e,t){var n=h(),o=(0,a.mq)("Button",d({},n,e)),s=(0,a.Lr)(e),u=s.isDisabled,p=void 0===u?null==n?void 0:n.isDisabled:u,m=s.isLoading,v=s.isActive,y=s.isFullWidth,b=s.children,E=s.leftIcon,x=s.rightIcon,N=s.loadingText,L=s.iconSpacing,w=void 0===L?"0.5rem":L,k=s.type,C=s.spinner,I=s.spinnerPlacement,T=void 0===I?"start":I,j=s.className,O=s.as,A=f(s,_),M=c.useMemo((function(){var e,t=l()({},null!=(e=null==o?void 0:o._focus)?e:{},{zIndex:1});return d({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:y?"100%":"auto"},o,!!n&&{_focus:t})}),[o,n,y]),R=function(e){var t=c.useState(!e),n=t[0],r=t[1];return{ref:c.useCallback((function(e){e&&r("BUTTON"===e.tagName)}),[]),type:n?"button":void 0}}(O),B=R.ref,$=R.type,D={rightIcon:x,leftIcon:E,iconSpacing:w,children:b};return c.createElement(a.m$.button,d({disabled:p||m,ref:(0,r.qq)(t,B),as:O,type:null!=k?k:$,"data-active":(0,i.PB)(v),"data-loading":(0,i.PB)(m),__css:M,className:(0,i.cx)("chakra-button",j)},A),m&&"start"===T&&c.createElement(g,{className:"chakra-button__spinner--start",label:N,placement:"start",spacing:w},C),m?N||c.createElement(a.m$.span,{opacity:0},c.createElement(S,D)):c.createElement(S,D),m&&"end"===T&&c.createElement(g,{className:"chakra-button__spinner--end",label:N,placement:"end",spacing:w},C))}));function S(e){var t=e.leftIcon,n=e.rightIcon,r=e.children,a=e.iconSpacing;return c.createElement(c.Fragment,null,t&&c.createElement(x,{marginEnd:a},t),r,n&&c.createElement(x,{marginStart:a},n))}i.Ts&&(N.displayName="Button");var L=["icon","children","isRound","aria-label"],w=(0,a.Gp)((function(e,t){var n=e.icon,r=e.children,a=e.isRound,i=e["aria-label"],o=f(e,L),l=n||r,s=c.isValidElement(l)?c.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return c.createElement(N,d({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":i},o),s)}));i.Ts&&(w.displayName="IconButton")},2684:function(e,t,n){"use strict";n.d(t,{ac:function(){return l}});n(2846);var r=n(4592),a=n(7294),i=n(5393),o=r.jU?a.useLayoutEffect:a.useEffect;function l(e){var t=(0,i.O)(),n=Array.isArray(e)?e:[e],l=r.jU&&"matchMedia"in t.window,c=a.useState(n.map((function(e){return!!l&&!!t.window.matchMedia(e).matches}))),s=c[0],u=c[1];return o((function(){if(l){var e=n.map((function(e){return t.window.matchMedia(e)})),r=e.map((function(t,n){var r=function(t){var n=e.findIndex((function(e){return e.media===t.media}));u((function(e){var r=e.map((function(e){return e}));return r[n]=t.matches,r}))};return"function"===typeof e[n].addEventListener?e[n].addEventListener("change",r):e[n].addListener(r),r}));return function(){e.forEach((function(t,n){"function"===typeof e[n].removeEventListener?e[n].removeEventListener("change",r[n]):e[n].removeListener(r[n])}))}}}),[]),s}r.Ts;r.Ts},9609:function(e,t,n){"use strict";n.d(t,{$:function(){return f}});var r=n(917),a=n(2846),i=n(4592),o=n(1358),l=n(7294);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var s=["label","thickness","speed","emptyColor","className"],u=(0,r.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),f=(0,a.Gp)((function(e,t){var n=(0,a.mq)("Spinner",e),r=(0,a.Lr)(e),f=r.label,d=void 0===f?"Loading...":f,p=r.thickness,m=void 0===p?"2px":p,v=r.speed,h=void 0===v?"0.45s":v,y=r.emptyColor,b=void 0===y?"transparent":y,g=r.className,E=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(r,s),x=(0,i.cx)("chakra-spinner",g),_=c({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:m,borderBottomColor:b,borderLeftColor:b,animation:u+" "+h+" linear infinite"},n);return l.createElement(a.m$.div,c({ref:t,__css:_,className:x},E),d&&l.createElement(o.TX,null,d))}));i.Ts&&(f.displayName="Spinner")},1358:function(e,t,n){"use strict";n.d(t,{NL:function(){return i},TX:function(){return o}});var r=n(2846),a=n(4592),i={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},o=(0,r.m$)("span",{baseStyle:i});a.Ts&&(o.displayName="VisuallyHidden");var l=(0,r.m$)("input",{baseStyle:i});a.Ts&&(l.displayName="VisuallyHiddenInput")},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(c){l=!0,a=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},l=n(1003),c=n(880),s=n(9246);var u={};function f(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),i=o.default.useMemo((function(){var t=a(l.resolveHref(r,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?l.resolveHref(r,e.as):i||n}}),[r,e.href,e.as]),d=i.href,p=i.as,m=o.default.useRef(d),v=o.default.useRef(p),h=e.children,y=e.replace,b=e.shallow,g=e.scroll,E=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var x=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,_=a(s.useIntersection({rootMargin:"200px"}),3),N=_[0],S=_[1],L=_[2],w=o.default.useCallback((function(e){v.current===p&&m.current===d||(L(),v.current=p,m.current=d),N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[p,x,d,L,N]);o.default.useEffect((function(){var e=S&&n&&l.isLocalURL(d),t="undefined"!==typeof E?E:r&&r.locale,a=u[d+"%"+p+(t?"%"+t:"")];e&&!a&&f(r,d,p,{locale:t})}),[p,d,S,E,n,r]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,o,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,r,{shallow:i,locale:c,scroll:o}))}(e,r,d,p,y,b,g,E)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof E?E:r&&r.locale,I=r&&r.isLocaleDomain&&l.getDomainLocale(p,C,r&&r.locales,r&&r.domainLocales);k.href=I||l.addBasePath(l.addLocale(p,C,r&&r.defaultLocale))}return o.default.cloneElement(t,k)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,n){e.exports=n(1551)}}]);