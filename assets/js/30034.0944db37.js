/*! For license information please see 30034.0944db37.js.LICENSE.txt */
(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30034],{15289:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),o=n(44996),i=n(9460);function a(e){let{children:t,className:n}=e;const{frontMatter:a,assets:l}=(0,i.C)(),{withBaseUrl:c}=(0,o.C)(),s=l.image??a.image;return r.createElement("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&r.createElement("meta",{itemProp:"image",content:c(s,{absolute:!0})}),t)}},92503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(87462),o=n(67294),i=n(86010),a=n(95999),l=n(86668);const c="anchorWithStickyNavbar_LWe7",s="anchorWithHideOnScrollNavbar_WYt5";function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:d}}=(0,l.L)();return"h1"!==t&&n?o.createElement(t,(0,r.Z)({},u,{className:(0,i.Z)("anchor",d?s:c),id:n}),u.children,o.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.Z)({},u,{id:void 0}))}},76505:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(87462),o=n(67294),i=n(35742);var a=n(9612);var l=n(62266);var c=n(86010),s=n(72389),u=n(86043);const d="details_lb9f",p="isBrowser_bmU9",f="collapsibleContent_i85q";function h(e){return!!e&&("SUMMARY"===e.tagName||h(e.parentElement))}function m(e,t){return!!e&&(e===t||m(e.parentElement,t))}function w(e){let{summary:t,children:n,...i}=e;const a=(0,s.Z)(),l=(0,o.useRef)(null),{collapsed:w,setCollapsed:y}=(0,u.u)({initialState:!i.open}),[v,g]=(0,o.useState)(i.open);return o.createElement("details",(0,r.Z)({},i,{ref:l,open:v,"data-collapsed":w,className:(0,c.Z)(d,a&&p,i.className),onMouseDown:e=>{h(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;h(t)&&m(t,l.current)&&(e.preventDefault(),w?(y(!1),g(!0)):y(!0))}}),t??o.createElement("summary",null,"Details"),o.createElement(u.z,{lazy:!1,collapsed:w,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{y(e),g(!e)}},o.createElement("div",{className:f},n)))}const y="details_b_Ee";function v(e){let{...t}=e;return o.createElement(w,(0,r.Z)({},t,{className:(0,c.Z)("alert alert--info",y,t.className)}))}var g=n(92503);function b(e){return o.createElement(g.Z,e)}const Z="containsTaskList_mC6p";const O="img_ev3q";var E=n(47083);const k={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e):e));return o.createElement(i.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return o.Children.toArray(e.children).every((e=>{var n;return"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?o.createElement("code",e):o.createElement(a.Z,e)},a:l.Z,pre:function(e){var t;return o.createElement(a.Z,(0,o.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>{var t;return o.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),i=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(v,(0,r.Z)({},e,{summary:n}),i)},ul:function(e){return o.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,c.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&Z))}));var t},img:function(e){return o.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,O))}));var t},h1:e=>o.createElement(b,(0,r.Z)({as:"h1"},e)),h2:e=>o.createElement(b,(0,r.Z)({as:"h2"},e)),h3:e=>o.createElement(b,(0,r.Z)({as:"h3"},e)),h4:e=>o.createElement(b,(0,r.Z)({as:"h4"},e)),h5:e=>o.createElement(b,(0,r.Z)({as:"h5"},e)),h6:e=>o.createElement(b,(0,r.Z)({as:"h6"},e)),admonition:E.Z}},45042:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),o=n(3905),i=n(60543);function a(e){let{children:t}=e;return r.createElement(o.Zo,{components:i.Z},t)}},9460:(e,t,n)=>{"use strict";n.d(t,{C:()=>l,n:()=>a});var r=n(67294),o=n(902);const i=r.createContext(null);function a(e){let{children:t,content:n,isBlogPostPage:o=!1}=e;const a=function(e){let{content:t,isBlogPostPage:n}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:o});return r.createElement(i.Provider,{value:a},t)}function l(){const e=(0,r.useContext)(i);if(null===e)throw new o.i6("BlogPostProvider");return e}},65130:(e,t,n)=>{"use strict";n.d(t,{b:()=>a,k:()=>l});var r=n(67294),o=n(902);const i=r.createContext(null);function a(e){let{children:t,content:n}=e;const o=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return r.createElement(i.Provider,{value:o},t)}function l(){const e=(0,r.useContext)(i);if(null===e)throw new o.i6("DocProvider");return e}},88824:(e,t,n)=>{"use strict";n.d(t,{c:()=>s});var r=n(67294),o=n(52263);const i=["zero","one","two","few","many","other"];function a(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function s(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}},94184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},37332:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67267).Z)({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"})},53597:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(25456),o=n(86459);const i=(0,n(79075).Z)("linkedin",(function(e,t){var n=t.title,i=t.summary,a=t.source;return(0,r.Z)(e,"linkedin.url"),"https://linkedin.com/shareArticle"+(0,o.Z)({url:e,mini:"true",title:n,summary:i,source:a})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600})},70431:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67267).Z)({color:"#ff4500",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"})},75341:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(25456),o=n(86459);const i=(0,n(79075).Z)("reddit",(function(e,t){var n=t.title;return(0,r.Z)(e,"reddit.url"),"https://www.reddit.com/submit"+(0,o.Z)({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"})},87385:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(67267).Z)({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"})},46616:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(25456),o=n(86459);const i=(0,n(79075).Z)("twitter",(function(e,t){var n=t.title,i=t.via,a=t.hashtags,l=void 0===a?[]:a,c=t.related,s=void 0===c?[]:c;return(0,r.Z)(e,"twitter.url"),(0,r.Z)(Array.isArray(l),"twitter.hashtags is not an array"),(0,r.Z)(Array.isArray(s),"twitter.related is not an array"),"https://twitter.com/share"+(0,o.Z)({url:e,text:n,via:i,hashtags:l.length>0?l.join(","):void 0,related:s.length>0?s.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400})},67267:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(67294),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function a(e){var t=function(t){var n=t.bgStyle,a=t.borderRadius,l=t.iconFillColor,c=t.round,s=t.size,u=i(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return r.createElement("svg",o({viewBox:"0 0 64 64",width:s,height:s},u),c?r.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):r.createElement("rect",{width:"64",height:"64",rx:a,ry:a,fill:e.color,style:n}),r.createElement("path",{d:e.path,fill:l}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}},79075:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r,o=n(67294),i=n(94184),a=n.n(i),l=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},s=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function l(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(l){i=[6,l],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},p=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},f=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},h=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function m(e,t,n){var r=t.height,o=t.width,i=d(t,["height","width"]),a=c({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),l=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var s=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(s),n(l))}catch(e){console.error(e)}}),1e3);return l}const w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,l=void 0===a?"windowCenter":a,s=n.windowWidth,u=void 0===s?550:s;m(e,c({height:i,width:u},"windowCenter"===l?f(u,i):h(u,i)),r)},t.handleClick=function(e){return s(t,void 0,void 0,(function(){var t,n,r,o,i,a,l,c,s,d;return u(this,(function(u){switch(u.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,l=t.openShareDialogOnClick,c=t.opts,s=o(a,c),r?[2]:(e.preventDefault(),n?(d=n(),p(d)?[4,d]:[3,2]):[3,2]);case 1:u.sent(),u.label=2;case 2:return l&&this.openShareDialog(s),i&&i(e,s),[2]}}))}))},t}return l(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,i=e.disabledStyle,l=e.forwardedRef,s=(e.networkLink,e.networkName),u=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),p=e.style,f=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,d(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=a()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),m=c(c(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},p),r&&i);return o.createElement("button",c({},f,{"aria-label":f["aria-label"]||s,className:h,onClick:this.handleClick,ref:l,style:m}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component);var y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},y.apply(this,arguments)};const v=function(e,t,n,r){function i(i,a){var l=n(i),c=y({},i);return Object.keys(l).forEach((function(e){delete c[e]})),o.createElement(w,y({},r,c,{forwardedRef:a,networkName:e,networkLink:t,opts:n(i)}))}return i.displayName="ShareButton-"+e,(0,o.forwardRef)(i)}},25456:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r,o=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return o(t,e),t}(Error);function a(e,t){if(!e)throw new i(t)}},86459:(e,t,n)=>{"use strict";function r(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}n.d(t,{Z:()=>r})}}]);