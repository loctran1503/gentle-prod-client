(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5897],{4612:function(e,n,t){"use strict";t.d(n,{BZ:function(){return g},II:function(){return u}});var r=t(9762),a=t(2846),i=t(4592),c=t(7294),o=t(6450);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}var d=["htmlSize"],u=(0,a.Gp)((function(e,n){var t=e.htmlSize,o=l(e,d),u=(0,a.jC)("Input",o),m=(0,a.Lr)(o),f=(0,r.Yp)(m),p=(0,i.cx)("chakra-input",e.className);return c.createElement(a.m$.input,s({size:t},f,{__css:u.field,ref:n,className:p}))}));i.Ts&&(u.displayName="Input"),u.id="Input";var m=["placement"],f={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},p=(0,a.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),h=(0,a.Gp)((function(e,n){var t,r=e.placement,i=void 0===r?"left":r,o=l(e,m),d=null!=(t=f[i])?t:{},u=(0,a.yK)();return c.createElement(p,s({ref:n},o,{__css:s({},u.addon,d)}))}));i.Ts&&(h.displayName="InputAddon");var v=(0,a.Gp)((function(e,n){return c.createElement(h,s({ref:n,placement:"left"},e,{className:(0,i.cx)("chakra-input__left-addon",e.className)}))}));i.Ts&&(v.displayName="InputLeftAddon"),v.id="InputLeftAddon";var _=(0,a.Gp)((function(e,n){return c.createElement(h,s({ref:n,placement:"right"},e,{className:(0,i.cx)("chakra-input__right-addon",e.className)}))}));i.Ts&&(_.displayName="InputRightAddon"),_.id="InputRightAddon";var N=["children","className"],g=(0,a.Gp)((function(e,n){var t=(0,a.jC)("Input",e),r=(0,a.Lr)(e),d=r.children,u=r.className,m=l(r,N),f=(0,i.cx)("chakra-input__group",u),p={},h=(0,o.WR)(d),v=t.field;h.forEach((function(e){if(t){var n,r;if(v&&"InputLeftElement"===e.type.id)p.paddingStart=null!=(n=v.height)?n:v.h;if(v&&"InputRightElement"===e.type.id)p.paddingEnd=null!=(r=v.height)?r:v.h;"InputRightAddon"===e.type.id&&(p.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(p.borderStartRadius=0)}}));var _=h.map((function(n){var t,r,a=(0,i.YU)({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(r=n.props)?void 0:r.variant)||e.variant});return"Input"!==n.type.id?c.cloneElement(n,a):c.cloneElement(n,Object.assign(a,p,n.props))}));return c.createElement(a.m$.div,s({className:f,ref:n,__css:{width:"100%",display:"flex",position:"relative"}},m),c.createElement(a.Fo,{value:t},_))}));i.Ts&&(g.displayName="InputGroup");var b=["placement"],y=["className"],I=["className"],x=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),E=(0,a.Gp)((function(e,n){var t,r,i,o=e.placement,d=void 0===o?"left":o,u=l(e,b),m=(0,a.yK)(),f=m.field,p=s(((i={})["left"===d?"insetStart":"insetEnd"]="0",i.width=null!=(t=null==f?void 0:f.height)?t:null==f?void 0:f.h,i.height=null!=(r=null==f?void 0:f.height)?r:null==f?void 0:f.h,i.fontSize=null==f?void 0:f.fontSize,i),m.element);return c.createElement(x,s({ref:n,__css:p},u))}));E.id="InputElement",i.Ts&&(E.displayName="InputElement");var k=(0,a.Gp)((function(e,n){var t=e.className,r=l(e,y),a=(0,i.cx)("chakra-input__left-element",t);return c.createElement(E,s({ref:n,placement:"left",className:a},r))}));k.id="InputLeftElement",i.Ts&&(k.displayName="InputLeftElement");var j=(0,a.Gp)((function(e,n){var t=e.className,r=l(e,I),a=(0,i.cx)("chakra-input__right-element",t);return c.createElement(E,s({ref:n,placement:"right",className:a},r))}));j.id="InputRightElement",i.Ts&&(j.displayName="InputRightElement")},1758:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/comments",function(){return t(9139)}])},9139:function(e,n,t){"use strict";t.r(n);var r=t(4051),a=t.n(r),i=t(5893),c=t(4612),o=t(5193),s=t(1163),l=t(7294),d=t(5617),u=t(3415),m=t.n(u),f=t(6830),p=t(8072),h=t(4654),v=t(9680);function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function N(e,n,t,r,a,i,c){try{var o=e[i](c),s=o.value}catch(l){return void t(l)}o.done?n(s):Promise.resolve(s).then(r,a)}function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,i=[],c=!0,o=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);c=!0);}catch(s){o=!0,a=s}finally{try{c||null==t.return||t.return()}finally{if(o)throw a}}return i}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=function(){var e,n=(0,s.useRouter)(),t=(0,h.fJ)(),r=t.data,u=t.error,_=g((0,h.Pn)(),1)[0],b=(0,d.v9)(v.aF),y=b.type,I=b.isAuthenticated,x=b.isLoading;(0,l.useEffect)((function(){(!x&&!I||!x&&I&&"admin"!==y)&&n.push("/page-404")}),[]);var E=(0,l.useState)([]),k=E[0],j=E[1];(0,l.useEffect)((function(){if(u&&console.log(u),null===r||void 0===r?void 0:r.adminGetCommentsNoFeedback.comments){var e;e=null===r||void 0===r?void 0:r.adminGetCommentsNoFeedback.comments.map((function(e){return{commentId:e.id,feedbackContent:""}})),j(e)}}),[u,r]);var C=function(){var e,n=(e=a().mark((function e(n,t){var r,i,c,o,s,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={content:t,commentId:n},e.next=4,_({variables:{feedbackInput:o}});case 4:(s=e.sent).errors&&console.log(s.errors),(null===(r=s.data)||void 0===r?void 0:r.adminCreateFeedback.success)||console.log("Fail:".concat(null===(i=s.data)||void 0===i?void 0:i.adminCreateFeedback.message)),(null===(c=s.data)||void 0===c?void 0:c.adminCreateFeedback.success)&&console.log("Create feedback ".concat(s.data.adminCreateFeedback.success)),l=k.filter((function(e){return e.commentId!==n})),j(l);case 10:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){N(i,r,a,c,o,"next",e)}function o(e){N(i,r,a,c,o,"throw",e)}c(void 0)}))});return function(e,t){return n.apply(this,arguments)}}();return(0,i.jsxs)("div",{children:[(0,i.jsx)(p.Z,{}),(0,i.jsx)("div",{className:"distance",children:(0,i.jsx)("div",{className:"grid wide",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col l-12 m-12 c-12",children:(0,i.jsxs)("div",{className:m().container,children:[(0,i.jsx)("h1",{className:m().heading,children:" User Comment"}),(null===r||void 0===r?void 0:r.adminGetCommentsNoFeedback.success)&&(null===(e=r.adminGetCommentsNoFeedback.comments)||void 0===e?void 0:e.map((function(e){return(0,i.jsxs)("div",{className:m().item,children:[(0,i.jsxs)("div",{className:m().userInfo,children:[(0,i.jsx)("img",{src:e.user.userAvatar}),(0,i.jsx)("h2",{children:e.user.userName})]}),(0,i.jsx)("h3",{className:m().productName,children:e.product.productName}),(0,i.jsxs)("p",{className:m().content,children:["B\xecnh lu\u1eadn: ",e.content]}),k.map((function(n){if(n.commentId===e.id)return(0,i.jsxs)("div",{className:m().feedback,children:[(0,i.jsx)(c.BZ,{children:(0,i.jsx)(c.II,{placeholder:"Feedback",focusBorderColor:"black",className:"boxShadowNone",value:n.feedbackContent,onChange:function(n){return function(e,n){var t=k.map((function(t){return t.commentId===e&&(t.feedbackContent=n),t}));j(t)}(e.id,n.target.value)}})}),(0,i.jsx)(o.zx,{colorScheme:"green",onClick:function(){return C(e.id,n.feedbackContent)},children:"Ph\u1ea3n h\u1ed3i"})]},n.commentId)}))]},e.id)})))]})})})})}),x&&(0,i.jsx)(f.Z,{})]})}},3415:function(e){e.exports={container:"comments_container__O1PKb",heading:"comments_heading__Y6zIO",item:"comments_item__OXgwC",userInfo:"comments_userInfo__vQhBt",productName:"comments_productName__zJX6m",content:"comments_content__dfXfT",feedback:"comments_feedback__MX7CM"}}},function(e){e.O(0,[8523,7112,3612,6789,2569,5053,8467,8072,9774,2888,179],(function(){return n=1758,e(e.s=n);var n}));var n=e.O();_N_E=n}]);