(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(9),i=(t(0),t(182)),a={id:"openvpn-troubleshooting-multivpn",title:"Multiple VPN Connections",sidebar_label:"Multiple VPN Connections"},l={id:"openvpn/troubleshooting/openvpn-troubleshooting-multivpn",title:"Multiple VPN Connections",description:"Symptoms include:",source:"@site/docs/openvpn/troubleshooting/multivpn.md",permalink:"/docs/openvpn/troubleshooting/openvpn-troubleshooting-multivpn",editUrl:"https://github.com/tryhackmeltd/docs.tryhackme.com/edit/master/docs/openvpn/troubleshooting/multivpn.md",sidebar_label:"Multiple VPN Connections",sidebar:"docs",previous:{title:"Connecting with OpenVPN",permalink:"/docs/openvpn/connecting/openvpn-connecting"},next:{title:"What are Rooms",permalink:"/docs/rooms/what-are-rooms"}},c=[],p={rightToc:c};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Symptoms include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Instability in VPN connection")),Object(i.b)("p",null,"How to fix:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Type ",Object(i.b)("inlineCode",{parentName:"li"},"ps aux | grep openvpn")," into your ","[linux]"," terminal and press enter"),Object(i.b)("li",{parentName:"ol"},"If there's more than one (and the second doesn't have \"grep\" in it), do the following steps"),Object(i.b)("li",{parentName:"ol"},"Type ",Object(i.b)("inlineCode",{parentName:"li"},"sudo killall openvpn")," into your ","[linux]"," terminal and press enter"),Object(i.b)("li",{parentName:"ol"},"Start the VPN with ",Object(i.b)("inlineCode",{parentName:"li"},"sudo openvpn <path-to-config>"))))}u.isMDXComponent=!0},182:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,d=s["".concat(a,".").concat(m)]||s[m]||b[m]||i;return t?o.a.createElement(d,l({ref:n},p,{components:t})):o.a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);