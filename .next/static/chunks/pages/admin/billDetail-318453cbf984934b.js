(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8021],{4612:function(e,t,n){"use strict";n.d(t,{BZ:function(){return g},II:function(){return d}});var r=n(9762),i=n(2846),l=n(4592),a=n(7294),c=n(6450);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var u=["htmlSize"],d=(0,i.Gp)((function(e,t){var n=e.htmlSize,c=s(e,u),d=(0,i.jC)("Input",c),h=(0,i.Lr)(c),p=(0,r.Yp)(h),m=(0,l.cx)("chakra-input",e.className);return a.createElement(i.m$.input,o({size:n},p,{__css:d.field,ref:t,className:m}))}));l.Ts&&(d.displayName="Input"),d.id="Input";var h=["placement"],p={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},m=(0,i.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),f=(0,i.Gp)((function(e,t){var n,r=e.placement,l=void 0===r?"left":r,c=s(e,h),u=null!=(n=p[l])?n:{},d=(0,i.yK)();return a.createElement(m,o({ref:t},c,{__css:o({},d.addon,u)}))}));l.Ts&&(f.displayName="InputAddon");var v=(0,i.Gp)((function(e,t){return a.createElement(f,o({ref:t,placement:"left"},e,{className:(0,l.cx)("chakra-input__left-addon",e.className)}))}));l.Ts&&(v.displayName="InputLeftAddon"),v.id="InputLeftAddon";var y=(0,i.Gp)((function(e,t){return a.createElement(f,o({ref:t,placement:"right"},e,{className:(0,l.cx)("chakra-input__right-addon",e.className)}))}));l.Ts&&(y.displayName="InputRightAddon"),y.id="InputRightAddon";var x=["children","className"],g=(0,i.Gp)((function(e,t){var n=(0,i.jC)("Input",e),r=(0,i.Lr)(e),u=r.children,d=r.className,h=s(r,x),p=(0,l.cx)("chakra-input__group",d),m={},f=(0,c.WR)(u),v=n.field;f.forEach((function(e){if(n){var t,r;if(v&&"InputLeftElement"===e.type.id)m.paddingStart=null!=(t=v.height)?t:v.h;if(v&&"InputRightElement"===e.type.id)m.paddingEnd=null!=(r=v.height)?r:v.h;"InputRightAddon"===e.type.id&&(m.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(m.borderStartRadius=0)}}));var y=f.map((function(t){var n,r,i=(0,l.YU)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(r=t.props)?void 0:r.variant)||e.variant});return"Input"!==t.type.id?a.cloneElement(t,i):a.cloneElement(t,Object.assign(i,m,t.props))}));return a.createElement(i.m$.div,o({className:p,ref:t,__css:{width:"100%",display:"flex",position:"relative"}},h),a.createElement(i.Fo,{value:n},y))}));l.Ts&&(g.displayName="InputGroup");var E=["placement"],N=["className"],j=["className"],b=(0,i.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),_=(0,i.Gp)((function(e,t){var n,r,l,c=e.placement,u=void 0===c?"left":c,d=s(e,E),h=(0,i.yK)(),p=h.field,m=o(((l={})["left"===u?"insetStart":"insetEnd"]="0",l.width=null!=(n=null==p?void 0:p.height)?n:null==p?void 0:p.h,l.height=null!=(r=null==p?void 0:p.height)?r:null==p?void 0:p.h,l.fontSize=null==p?void 0:p.fontSize,l),h.element);return a.createElement(b,o({ref:t,__css:m},d))}));_.id="InputElement",l.Ts&&(_.displayName="InputElement");var I=(0,i.Gp)((function(e,t){var n=e.className,r=s(e,N),i=(0,l.cx)("chakra-input__left-element",n);return a.createElement(_,o({ref:t,placement:"left",className:i},r))}));I.id="InputLeftElement",l.Ts&&(I.displayName="InputLeftElement");var C=(0,i.Gp)((function(e,t){var n=e.className,r=s(e,j),i=(0,l.cx)("chakra-input__right-element",n);return a.createElement(_,o({ref:t,placement:"right",className:i},r))}));C.id="InputRightElement",l.Ts&&(C.displayName="InputRightElement")},1391:function(e,t,n){"use strict";n.d(t,{Ph:function(){return v}});var r=n(9762),i=n(2846),l=n(4244),a=n(4592),c=n(8554),o=n.n(c),s=n(7294);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var h=["children","placeholder","className"],p=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize","isFullWidth"],m=["children"],f=(0,i.Gp)((function(e,t){var n=e.children,r=e.placeholder,l=e.className,c=d(e,h);return s.createElement(i.m$.select,u({},c,{ref:t,className:(0,a.cx)("chakra-select",l)}),r&&s.createElement("option",{value:""},r),n)}));a.Ts&&(f.displayName="SelectField");var v=(0,i.Gp)((function(e,t){var n=(0,i.jC)("Select",e),c=(0,i.Lr)(e),h=c.rootProps,m=c.placeholder,v=c.icon,y=c.color,x=c.height,E=c.h,N=c.minH,j=c.minHeight,b=c.iconColor,_=c.iconSize;c.isFullWidth;var I=d(c,p),C=(0,a.Vl)(I,l.oE),S=C[0],P=C[1],T=(0,r.Yp)(P),w={width:"100%",height:"fit-content",position:"relative",color:y},D=o()({paddingEnd:"2rem"},n.field,{_focus:{zIndex:"unset"}});return s.createElement(i.m$.div,u({className:"chakra-select__wrapper",__css:w},S,h),s.createElement(f,u({ref:t,height:null!=E?E:x,minH:null!=N?N:j,placeholder:m},T,{__css:D}),e.children),s.createElement(g,u({"data-disabled":(0,a.PB)(T.disabled)},(b||y)&&{color:b||y},{__css:n.icon},_&&{fontSize:_}),v))}));a.Ts&&(v.displayName="Select");var y=function(e){return s.createElement("svg",u({viewBox:"0 0 24 24"},e),s.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},x=(0,i.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),g=function(e){var t=e.children,n=void 0===t?s.createElement(y,null):t,r=d(e,m),i=s.cloneElement(n,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return s.createElement(x,u({},r,{className:"chakra-select__icon-wrapper"}),s.isValidElement(n)?i:null)};a.Ts&&(g.displayName="SelectIcon")},5770:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/billDetail",function(){return n(2670)}])},2670:function(e,t,n){"use strict";n.r(t);var r=n(4051),i=n.n(r),l=n(5893),a=n(8790),c=n(1391),o=n(4612),s=n(5193),u=n(6010),d=n(1163),h=n(7294),p=n(5617),m=n(9334),f=n.n(m),v=n(6830),y=n(8072),x=n(4654),g=n(9680),E=n(3932),N=n(5262);function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t,n,r,i,l,a){try{var c=e[l](a),o=c.value}catch(s){return void n(s)}c.done?t(o):Promise.resolve(o).then(r,i)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var l=e.apply(t,n);function a(e){b(l,r,i,a,c,"next",e)}function c(e){b(l,r,i,a,c,"throw",e)}a(void 0)}))}}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,l=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);a=!0);}catch(o){c=!0,i=o}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=function(){var e=(0,d.useRouter)(),t=(0,p.v9)(g.aF),n=t.type,r=t.isAuthenticated,m=t.isLoading;(0,h.useEffect)((function(){(!m&&!r||!m&&r&&"admin"!==n)&&e.push("/page-404")}),[]);var j=(0,x.qm)({variables:{type:e.query.type}}).data,b=(0,h.useState)([]),C=b[0],S=b[1],P=(0,h.useState)(0),T=P[0],w=P[1],D=I((0,x.QG)(),1)[0],A=I((0,x.JR)(),1)[0],R=I((0,x.K4)(),1)[0],k=(0,h.useState)(N.i.CONFIRMED),O=k[0],L=k[1];(0,h.useEffect)((function(){if(null===j||void 0===j?void 0:j.adminGetBills.bills){var e=[];j.adminGetBills.bills.map((function(t){var n={customerName:t.customer.customerName,customerPhone:t.customer.customerPhone,city:t.customer.city,province:t.customer.province,address:t.customer.address,id:t.customer.id},r=t.billProducts.map((function(e){return{productName:e.productName,productAmount:e.productAmount,productPrice:e.productPrice,productType:e.productType}})),i={id:t.id,notice:t.notice||"",deliveryPrice:t.deliveryPrice,totalPrice:t.totalPrice,introducePrice:t.introducePrice,billStatus:t.billStatus,paymentDown:t.paymentDown||0,paymentType:t.paymentType,billProducts:r,customer:n};e.push(i)})),S(e)}}),[j]);var G=function(){var t=_(i().mark((function t(n,r){var l,a,c,o,s,u,d,h;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.query.type!==N.i.DELIVERING){t.next=9;break}return t.next=4,A({variables:{billId:n,totalPrice:r}});case 4:(a=t.sent).errors&&console.log(a.errors),(null===(l=a.data)||void 0===l?void 0:l.adminHandleBillCompleted.success)&&(console.log(a.data.adminHandleBillCompleted),c=C.map((function(e){return e})),o=c.filter((function(e){return e.id!==n})),S(o)),t.next=15;break;case 9:return t.next=12,D({variables:{billId:n,status:O,paymentDown:T}});case 12:(u=t.sent).errors&&console.log(u.errors),(null===(s=u.data)||void 0===s?void 0:s.adminEditBillStatus.success)&&(console.log(null===j||void 0===j?void 0:j.adminGetBills),d=C.map((function(e){return e})),h=d.filter((function(e){return e.id!==n})),S(h));case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),z=function(){var e=_(i().mark((function e(t){var n,r,l,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=4,R({variables:{billId:t}});case 4:r=e.sent,console.log(r),r.errors&&console.log(r.errors),(null===(n=r.data)||void 0===n?void 0:n.adminHandleBillReject.success)&&(console.log(r.data.adminHandleBillReject),l=C.map((function(e){return e})),a=l.filter((function(e){return e.id!==t})),S(a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,l.jsxs)("div",{children:[(0,l.jsx)(y.Z,{}),(0,l.jsx)("div",{className:"distance",children:(0,l.jsx)("div",{className:"grid wide",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col l-12 m-12 c-12",children:[(0,l.jsx)("h1",{style:{fontSize:"2.4rem",textAlign:"center"},children:e.query.type}),C.map((function(e){return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:f().billItem,children:[(0,l.jsx)("div",{className:f().component,children:"Chuy\u1ec3n kho\u1ea3n tr\u01b0\u1edbc"===e.paymentType?(0,l.jsxs)("h1",{className:(0,u.Z)(f().heading,"Chuy\u1ec3n kho\u1ea3n tr\u01b0\u1edbc"===e.paymentType&&f().hightlight),children:["Bill ID:",e.id,"(Chuy\u1ec3n kho\u1ea3n tr\u01b0\u1edbc)"]}):(0,l.jsxs)("h1",{className:f().heading,children:["Bill ID:",e.id]})}),(0,l.jsxs)("div",{className:f().component,children:[(0,l.jsx)(a.Ct,{children:e.billStatus}),(0,l.jsxs)("h2",{children:["T\xean ng\u01b0\u1eddi g\u1eedi:",e.customer.customerName]}),(0,l.jsxs)("h2",{children:["S\u1ed1 \u0111i\u1ec7n tho\u1ea1i:",e.customer.customerPhone]}),(0,l.jsxs)("h2",{children:["Ghi ch\xfa:",e.notice]})]}),(0,l.jsxs)("table",{className:f().table,children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"T\xean s\u1ea3n ph\u1ea9m"}),(0,l.jsx)("th",{children:"Lo\u1ea1i s\u1ea3n ph\u1ea9m"}),(0,l.jsx)("th",{children:"\u0110\u01a1n gi\xe1"}),(0,l.jsx)("th",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),(0,l.jsx)("th",{children:"T\u1ed5ng gi\xe1"})]}),e.billProducts.map((function(e,t){return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:e.productName}),(0,l.jsx)("td",{children:e.productType}),(0,l.jsx)("td",{children:(0,E.N)(e.productPrice)}),(0,l.jsx)("td",{children:e.productAmount}),(0,l.jsx)("td",{children:(0,E.N)(e.productAmount*e.productPrice)})]},t)})),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{colSpan:4,className:f().textEnd,children:"Ti\u1ec1n gi\u1ea3m gi\xe1"}),(0,l.jsx)("th",{children:(0,E.N)(e.introducePrice||0)})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{colSpan:4,className:f().textEnd,children:"Ti\u1ec1n v\u1eadn chuy\u1ec3n"}),(0,l.jsx)("th",{children:(0,E.N)(e.deliveryPrice)})]}),e.paymentDown&&(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{colSpan:4,className:f().textEnd,children:"Ti\u1ec1n tr\u1ea3 tr\u01b0\u1edbc"}),(0,l.jsx)("th",{style:{color:"red"},children:(0,E.N)(e.paymentDown)})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{colSpan:4,className:f().textEnd,children:"T\u1ed5ng c\u1ed9ng"}),(0,l.jsx)("th",{style:{color:"green"},children:(0,E.N)(e.totalPrice)})]})]}),(0,l.jsx)("div",{className:f().controllContainer,children:(0,l.jsxs)("div",{children:[(0,l.jsxs)(c.Ph,{maxWidth:"30%",fontFamily:"Roboto",fontSize:"1rem",size:"sm",value:O,onChange:function(e){L(e.target.value)},children:[(0,l.jsx)("option",{value:N.i.CONFIRMED,children:N.i.CONFIRMED}),(0,l.jsx)("option",{value:N.i.PACKED,children:N.i.PACKED}),(0,l.jsx)("option",{value:N.i.DELIVERING,children:N.i.DELIVERING}),(0,l.jsx)("option",{value:N.i.COMPLETED,children:N.i.COMPLETED}),(0,l.jsx)("option",{value:N.i.CANCEL,children:N.i.CANCEL})]}),"Chuy\u1ec3n kho\u1ea3n tr\u01b0\u1edbc"===e.paymentType&&e.billStatus===N.i.COMFIRM_WAITING&&(0,l.jsx)(o.II,{placeholder:"Ti\u1ec1n chuy\u1ec3n tr\u01b0\u1edbc",value:T,type:"number",onChange:function(e){return w(+e.target.value)},className:f().input}),(0,l.jsxs)("div",{className:f().btnControlContainer,children:[(0,l.jsxs)(s.zx,{onClick:function(){return z(e.id)},children:[" ","Rejected"]}),(0,l.jsxs)(s.zx,{colorScheme:"green",onClick:function(){return G(e.id,e.totalPrice)},children:[" ","Chuy\u1ec3n"]})]})]})})]})},e.id)}))]})})})}),m&&(0,l.jsx)(v.Z,{})]})}},5262:function(e,t,n){"use strict";var r;n.d(t,{i:function(){return r}}),function(e){e.COMFIRM_WAITING="Ch\u1edd x\xe1c nh\u1eadn",e.CONFIRMED="\u0110\xe3 x\xe1c nh\u1eadn",e.PACKED="\u0110\xe3 \u0111\xf3ng g\xf3i",e.DELIVERING="\u0110ang v\u1eadn chuy\u1ec3n",e.COMPLETED="\u0110\xe3 ho\xe0n th\xe0nh",e.CANCEL="\u0110\xe3 h\u1ee7y"}(r||(r={}))},9334:function(e){e.exports={heading:"billDetail_heading__KLPu9",hightlight:"billDetail_hightlight__qrD8e",billItem:"billDetail_billItem__EJIfq",component:"billDetail_component__BDoHg",input:"billDetail_input__6PMl1",controllContainer:"billDetail_controllContainer__Tl4tB",textEnd:"billDetail_textEnd__IWZyO",btnControlContainer:"billDetail_btnControlContainer__5zgDX",table:"billDetail_table__mud5O"}}},function(e){e.O(0,[8523,7112,3612,6789,2569,5053,8467,8072,9774,2888,179],(function(){return t=5770,e(e.s=t);var t}));var t=e.O();_N_E=t}]);