(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[173],{8133:function(e,t,n){"use strict";n.d(t,{XZ:function(){return E}});var r=n(4592),a=n(6450),o=n(7294),i=n(4697),u=n(7375),l=n(2846),s=n(6024),c=n(4441),d=n(9762),f=n(1358);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var p=(0,a.kr)({name:"CheckboxGroupContext",strict:!1}),h=(p[0],p[1]);function b(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}r.Ts;var y=["isIndeterminate","isChecked"];var m=function(e){var t=s.E;return"custom"in t&&"function"===typeof t.custom?t.custom(e):t(e)}(l.m$.svg),k=function(e){return o.createElement(m,v({width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},e),o.createElement("polyline",{points:"1.5 6 4.5 9 10.5 1"}))},g=function(e){return o.createElement(m,v({width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4}},e),o.createElement("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))},_=function(e){var t=e.open,n=e.children;return o.createElement(c.M,{initial:!1},t&&o.createElement(s.E.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},n))},C=function(e){var t=e.isIndeterminate,n=e.isChecked,r=b(e,y),a=t?g:k;return o.createElement(_,{open:n||t},o.createElement(a,r))},O=["defaultIsChecked","defaultChecked","isChecked","isFocusable","onChange","isIndeterminate","name","value","tabIndex","aria-label","aria-labelledby","aria-invalid"];function P(e){e.preventDefault(),e.stopPropagation()}var w=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange","inputProps"],x=(0,l.m$)("span",{baseStyle:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0}}),j=(0,l.m$)("label",{baseStyle:{cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"}}),E=(0,l.Gp)((function(e,t){var n=h(),s=v({},n,e),c=(0,l.jC)("Checkbox",s),p=(0,l.Lr)(e),y=p.spacing,m=void 0===y?"0.5rem":y,k=p.className,g=p.children,_=p.iconColor,E=p.iconSize,D=p.icon,I=void 0===D?o.createElement(C,null):D,S=p.isChecked,B=p.isDisabled,M=void 0===B?null==n?void 0:n.isDisabled:B,T=p.onChange,R=p.inputProps,L=b(p,w),N=S;null!=n&&n.value&&p.value&&(N=n.value.includes(p.value));var A=T;null!=n&&n.onChange&&p.value&&(A=(0,r.PP)(n.onChange,T));var F=function(e){void 0===e&&(e={});var t=(0,d.Kn)(e),n=t.isDisabled,l=t.isReadOnly,s=t.isRequired,c=t.isInvalid,p=t.id,h=t.onBlur,y=t.onFocus,m=t["aria-describedby"],k=e,g=k.defaultIsChecked,_=k.defaultChecked,C=void 0===_?g:_,w=k.isChecked,x=k.isFocusable,j=k.onChange,E=k.isIndeterminate,D=k.name,I=k.value,S=k.tabIndex,B=void 0===S?void 0:S,M=k["aria-label"],T=k["aria-labelledby"],R=k["aria-invalid"],L=b(k,O),N=(0,r.CE)(L,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),A=(0,i.u)(j),F=(0,i.u)(h),V=(0,i.u)(y),q=(0,u.kt)(),z=q[0],K=q[1],G=(0,u.kt)(),X=G[0],U=G[1],$=(0,u.kt)(),H=$[0],W=$[1],Y=(0,o.useRef)(null),Z=(0,o.useState)(!0),J=Z[0],Q=Z[1],ee=(0,o.useState)(!!C),te=ee[0],ne=ee[1],re=(0,u.pY)(w,te),ae=re[0],oe=re[1];(0,r.ZK)({condition:!!g,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var ie=(0,o.useCallback)((function(e){l||n?e.preventDefault():(ae||ne(oe?e.target.checked:!!E||e.target.checked),null==A||A(e))}),[l,n,oe,ae,E,A]);(0,i.a)((function(){Y.current&&(Y.current.indeterminate=Boolean(E))}),[E]),(0,u.rf)((function(){n&&K.off()}),[n,K]);var ue=n&&!x,le=(0,o.useCallback)((function(e){" "===e.key&&W.on()}),[W]),se=(0,o.useCallback)((function(e){" "===e.key&&W.off()}),[W]);(0,i.a)((function(){Y.current&&Y.current.checked!==oe&&ne(Y.current.checked)}),[Y.current]);var ce=(0,o.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:t,"data-active":(0,r.PB)(H),"data-hover":(0,r.PB)(X),"data-checked":(0,r.PB)(oe),"data-focus":(0,r.PB)(z),"data-indeterminate":(0,r.PB)(E),"data-disabled":(0,r.PB)(n),"data-invalid":(0,r.PB)(c),"data-readonly":(0,r.PB)(l),"aria-hidden":!0,onMouseDown:(0,r.v0)(e.onMouseDown,(function(e){e.preventDefault(),W.on()})),onMouseUp:(0,r.v0)(e.onMouseUp,W.off),onMouseEnter:(0,r.v0)(e.onMouseEnter,U.on),onMouseLeave:(0,r.v0)(e.onMouseLeave,U.off)})}),[H,oe,n,z,X,E,c,l,W,U.off,U.on]),de=(0,o.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},N,e,{ref:(0,a.lq)(t,(function(e){e&&Q("LABEL"===e.tagName)})),onClick:(0,r.v0)(e.onClick,(function(){var e;J||(null==(e=Y.current)||e.click(),(0,r.T_)(Y.current,{nextTick:!0}))})),"data-disabled":(0,r.PB)(n),"data-checked":(0,r.PB)(oe),"data-invalid":(0,r.PB)(c)})}),[N,n,oe,c,J]),fe=(0,o.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:(0,a.lq)(Y,t),type:"checkbox",name:D,value:I,id:p,tabIndex:B,onChange:(0,r.v0)(e.onChange,ie),onBlur:(0,r.v0)(e.onBlur,F,K.off),onFocus:(0,r.v0)(e.onFocus,V,K.on),onKeyDown:(0,r.v0)(e.onKeyDown,le),onKeyUp:(0,r.v0)(e.onKeyUp,se),required:s,checked:oe,disabled:ue,readOnly:l,"aria-label":M,"aria-labelledby":T,"aria-invalid":R?Boolean(R):c,"aria-describedby":m,"aria-disabled":n,style:f.NL})}),[D,I,p,ie,K.off,K.on,F,V,le,se,s,oe,ue,l,M,T,R,c,m,n,B]),ve=(0,o.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),v({},e,{ref:t,onMouseDown:(0,r.v0)(e.onMouseDown,P),onTouchStart:(0,r.v0)(e.onTouchStart,P),"data-disabled":(0,r.PB)(n),"data-checked":(0,r.PB)(oe),"data-invalid":(0,r.PB)(c)})}),[oe,n,c]);return{state:{isInvalid:c,isFocused:z,isChecked:oe,isActive:H,isHovered:X,isIndeterminate:E,isDisabled:n,isReadOnly:l,isRequired:s},getRootProps:de,getCheckboxProps:ce,getInputProps:fe,getLabelProps:ve,htmlProps:N}}(v({},L,{isDisabled:M,isChecked:N,onChange:A})),V=F.state,q=F.getInputProps,z=F.getCheckboxProps,K=F.getLabelProps,G=F.getRootProps,X=o.useMemo((function(){return v({opacity:V.isChecked||V.isIndeterminate?1:0,transform:V.isChecked||V.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:E,color:_},c.icon)}),[_,E,V.isChecked,V.isIndeterminate,c.icon]),U=o.cloneElement(I,{__css:X,isIndeterminate:V.isIndeterminate,isChecked:V.isChecked});return o.createElement(j,v({__css:c.container,className:(0,r.cx)("chakra-checkbox",k)},G()),o.createElement("input",v({className:"chakra-checkbox__input"},q(R,t))),o.createElement(x,v({__css:c.control,className:"chakra-checkbox__control"},z()),U),g&&o.createElement(l.m$.span,v({className:"chakra-checkbox__label"},K(),{__css:v({marginStart:m},c.label)}),g))}));r.Ts&&(E.displayName="Checkbox")},7645:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=o.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](i):i instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var i,l;var s=r=a({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};i(n(7294));var o=i(n(4588));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},3644:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},4588:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u=(i=n(7294))&&i.__esModule?i:{default:i},l=n(2021),s=n(3644);var c=[],d=[],f=!1;function v(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,a;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),a&&r(t,a),e}();function h(e){return function(e,t){var n=function(){if(!a){var t=new p(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));var a=null;if(!f&&!r.suspense){var i=r.webpack?r.webpack():r.modules;i&&d.push((function(e){var t=!0,r=!1,a=void 0;try{for(var o,u=i[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var l=o.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,a=s}finally{try{t||null==u.return||u.return()}finally{if(r)throw a}}}))}var c=r.suspense?function(e,t){return u.default.createElement(r.lazy,o({},e,{ref:t}))}:function(e,t){n();var o=u.default.useContext(s.LoadableContext),i=l.useSubscription(a);return u.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),u.default.useMemo((function(){return i.loading||i.error?u.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",u.default.forwardRef(c)}(v,e)}function b(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return b(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};b(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var y=h;t.default=y},2021:function(e,t,n){(()=>{"use strict";var t={800:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,u,l=a(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))n.call(i,c)&&(l[c]=i[c]);if(t){u=t(i);for(var d=0;d<u.length;d++)r.call(i,u[d])&&(l[u[d]]=i[u[d]])}}return l}},569:(e,t,n)=>{0},403:(e,t,n)=>{var r=n(800),a=n(522);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,o=a.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=o[0];var i=o[1];return o=e.value,e.getCurrentValue===t&&e.subscribe===n||(o=t(),i({getCurrentValue:t,subscribe:n,value:o})),a.useDebugValue(o),a.useEffect((function(){function e(){if(!a){var e=t();i((function(a){return a.getCurrentValue!==t||a.subscribe!==n||a.value===e?a:r({},a,{value:e})}))}}var a=!1,o=n(e);return e(),function(){a=!0,o()}}),[t,n]),o}},138:(e,t,n)=>{e.exports=n(403)},522:e=>{e.exports=n(7294)}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}},i=!0;try{t[e](o,o.exports,a),i=!1}finally{i&&delete r[e]}return o.exports}a.ab="//";var o=a(138);e.exports=o})()},5152:function(e,t,n){e.exports=n(7645)},9008:function(e,t,n){e.exports=n(3121)}}]);