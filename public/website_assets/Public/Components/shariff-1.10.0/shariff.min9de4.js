
/*!
 * shariff - v1.10.0 - 15.04.2015
 * https://github.com/heiseonline/shariff
 * Copyright (c) 2015 Ines Pauer, Philipp Busse, Sebastian Hilbig, Erich Kramer, Deniz Sesli
 * Licensed under the MIT <http://www.opensource.org/licenses/mit-license.php> license
 */


(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
!function(o){function e(o){throw RangeError(L[o])}function n(o,e){for(var n=o.length;n--;)o[n]=e(o[n]);return o}function t(o,e){return n(o.split(S),e).join(".")}function r(o){for(var e,n,t=[],r=0,u=o.length;u>r;)e=o.charCodeAt(r++),e>=55296&&56319>=e&&u>r?(n=o.charCodeAt(r++),56320==(64512&n)?t.push(((1023&e)<<10)+(1023&n)+65536):(t.push(e),r--)):t.push(e);return t}function u(o){return n(o,function(o){var e="";return o>65535&&(o-=65536,e+=R(o>>>10&1023|55296),o=56320|1023&o),e+=R(o)}).join("")}function i(o){return 10>o-48?o-22:26>o-65?o-65:26>o-97?o-97:x}function f(o,e){return o+22+75*(26>o)-((0!=e)<<5)}function c(o,e,n){var t=0;for(o=n?P(o/m):o>>1,o+=P(o/e);o>M*C>>1;t+=x)o=P(o/M);return P(t+(M+1)*o/(o+j))}function l(o){var n,t,r,f,l,d,s,a,p,h,v=[],g=o.length,w=0,j=I,m=A;for(t=o.lastIndexOf(F),0>t&&(t=0),r=0;t>r;++r)o.charCodeAt(r)>=128&&e("not-basic"),v.push(o.charCodeAt(r));for(f=t>0?t+1:0;g>f;){for(l=w,d=1,s=x;f>=g&&e("invalid-input"),a=i(o.charCodeAt(f++)),(a>=x||a>P((b-w)/d))&&e("overflow"),w+=a*d,p=m>=s?y:s>=m+C?C:s-m,!(p>a);s+=x)h=x-p,d>P(b/h)&&e("overflow"),d*=h;n=v.length+1,m=c(w-l,n,0==l),P(w/n)>b-j&&e("overflow"),j+=P(w/n),w%=n,v.splice(w++,0,j)}return u(v)}function d(o){var n,t,u,i,l,d,s,a,p,h,v,g,w,j,m,E=[];for(o=r(o),g=o.length,n=I,t=0,l=A,d=0;g>d;++d)v=o[d],128>v&&E.push(R(v));for(u=i=E.length,i&&E.push(F);g>u;){for(s=b,d=0;g>d;++d)v=o[d],v>=n&&s>v&&(s=v);for(w=u+1,s-n>P((b-t)/w)&&e("overflow"),t+=(s-n)*w,n=s,d=0;g>d;++d)if(v=o[d],n>v&&++t>b&&e("overflow"),v==n){for(a=t,p=x;h=l>=p?y:p>=l+C?C:p-l,!(h>a);p+=x)m=a-h,j=x-h,E.push(R(f(h+m%j,0))),a=P(m/j);E.push(R(f(a,0))),l=c(t,w,u==i),t=0,++u}++t,++n}return E.join("")}function s(o){return t(o,function(o){return E.test(o)?l(o.slice(4).toLowerCase()):o})}function a(o){return t(o,function(o){return O.test(o)?"xn--"+d(o):o})}var p="object"==typeof exports&&exports,h="object"==typeof module&&module&&module.exports==p&&module,v="object"==typeof global&&global;(v.global===v||v.window===v)&&(o=v);var g,w,b=2147483647,x=36,y=1,C=26,j=38,m=700,A=72,I=128,F="-",E=/^xn--/,O=/[^ -~]/,S=/\x2E|\u3002|\uFF0E|\uFF61/g,L={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},M=x-y,P=Math.floor,R=String.fromCharCode;if(g={version:"1.2.4",ucs2:{decode:r,encode:u},decode:l,encode:d,toASCII:a,toUnicode:s},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return g});else if(p&&!p.nodeType)if(h)h.exports=g;else for(w in g)g.hasOwnProperty(w)&&(p[w]=g[w]);else o.punycode=g}(this);


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
"use strict";function hasOwnProperty(r,e){return Object.prototype.hasOwnProperty.call(r,e)}module.exports=function(r,e,t,n){e=e||"&",t=t||"=";var o={};if("string"!=typeof r||0===r.length)return o;var a=/\+/g;r=r.split(e);var s=1e3;n&&"number"==typeof n.maxKeys&&(s=n.maxKeys);var p=r.length;s>0&&p>s&&(p=s);for(var y=0;p>y;++y){var u,c,i,l,f=r[y].replace(a,"%20"),v=f.indexOf(t);v>=0?(u=f.substr(0,v),c=f.substr(v+1)):(u=f,c=""),i=decodeURIComponent(u),l=decodeURIComponent(c),hasOwnProperty(o,i)?isArray(o[i])?o[i].push(l):o[i]=[o[i],l]:o[i]=l}return o};var isArray=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)};


},{}],3:[function(require,module,exports){
"use strict";function map(r,e){if(r.map)return r.map(e);for(var t=[],n=0;n<r.length;n++)t.push(e(r[n],n));return t}var stringifyPrimitive=function(r){switch(typeof r){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}};module.exports=function(r,e,t,n){return e=e||"&",t=t||"=",null===r&&(r=void 0),"object"==typeof r?map(objectKeys(r),function(n){var i=encodeURIComponent(stringifyPrimitive(n))+t;return isArray(r[n])?map(r[n],function(r){return i+encodeURIComponent(stringifyPrimitive(r))}).join(e):i+encodeURIComponent(stringifyPrimitive(r[n]))}).join(e):n?encodeURIComponent(stringifyPrimitive(n))+t+encodeURIComponent(stringifyPrimitive(r)):""};var isArray=Array.isArray||function(r){return"[object Array]"===Object.prototype.toString.call(r)},objectKeys=Object.keys||function(r){var e=[];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.push(t);return e};


},{}],4:[function(require,module,exports){
"use strict";exports.decode=exports.parse=require("./decode"),exports.encode=exports.stringify=require("./encode");


},{"./decode":2,"./encode":3}],5:[function(require,module,exports){
function Url(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function urlParse(t,s,e){if(t&&isObject(t)&&t instanceof Url)return t;var h=new Url;return h.parse(t,s,e),h}function urlFormat(t){return isString(t)&&(t=urlParse(t)),t instanceof Url?t.format():Url.prototype.format.call(t)}function urlResolve(t,s){return urlParse(t,!1,!0).resolve(s)}function urlResolveObject(t,s){return t?urlParse(t,!1,!0).resolveObject(s):s}function isString(t){return"string"==typeof t}function isObject(t){return"object"==typeof t&&null!==t}function isNull(t){return null===t}function isNullOrUndefined(t){return null==t}var punycode=require("punycode");exports.parse=urlParse,exports.resolve=urlResolve,exports.resolveObject=urlResolveObject,exports.format=urlFormat,exports.Url=Url;var protocolPattern=/^([a-z0-9.+-]+:)/i,portPattern=/:[0-9]*$/,delims=["<",">",'"',"`"," ","\r","\n","	"],unwise=["{","}","|","\\","^","`"].concat(delims),autoEscape=["'"].concat(unwise),nonHostChars=["%","/","?",";","#"].concat(autoEscape),hostEndingChars=["/","?","#"],hostnameMaxLen=255,hostnamePartPattern=/^[a-z0-9A-Z_-]{0,63}$/,hostnamePartStart=/^([a-z0-9A-Z_-]{0,63})(.*)$/,unsafeProtocol={javascript:!0,"javascript:":!0},hostlessProtocol={javascript:!0,"javascript:":!0},slashedProtocol={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},querystring=require("querystring");Url.prototype.parse=function(t,s,e){if(!isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var h=t;h=h.trim();var r=protocolPattern.exec(h);if(r){r=r[0];var o=r.toLowerCase();this.protocol=o,h=h.substr(r.length)}if(e||r||h.match(/^\/\/[^@\/]+@[^@\/]+/)){var a="//"===h.substr(0,2);!a||r&&hostlessProtocol[r]||(h=h.substr(2),this.slashes=!0)}if(!hostlessProtocol[r]&&(a||r&&!slashedProtocol[r])){for(var n=-1,i=0;i<hostEndingChars.length;i++){var l=h.indexOf(hostEndingChars[i]);-1!==l&&(-1===n||n>l)&&(n=l)}var c,u;u=-1===n?h.lastIndexOf("@"):h.lastIndexOf("@",n),-1!==u&&(c=h.slice(0,u),h=h.slice(u+1),this.auth=decodeURIComponent(c)),n=-1;for(var i=0;i<nonHostChars.length;i++){var l=h.indexOf(nonHostChars[i]);-1!==l&&(-1===n||n>l)&&(n=l)}-1===n&&(n=h.length),this.host=h.slice(0,n),h=h.slice(n),this.parseHost(),this.hostname=this.hostname||"";var p="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!p)for(var f=this.hostname.split(/\./),i=0,m=f.length;m>i;i++){var v=f[i];if(v&&!v.match(hostnamePartPattern)){for(var g="",y=0,d=v.length;d>y;y++)g+=v.charCodeAt(y)>127?"x":v[y];if(!g.match(hostnamePartPattern)){var P=f.slice(0,i),b=f.slice(i+1),j=v.match(hostnamePartStart);j&&(P.push(j[1]),b.unshift(j[2])),b.length&&(h="/"+b.join(".")+h),this.hostname=P.join(".");break}}}if(this.hostname.length>hostnameMaxLen?this.hostname="":this.hostname=this.hostname.toLowerCase(),!p){for(var O=this.hostname.split("."),q=[],i=0;i<O.length;++i){var x=O[i];q.push(x.match(/[^A-Za-z0-9_-]/)?"xn--"+punycode.encode(x):x)}this.hostname=q.join(".")}var U=this.port?":"+this.port:"",C=this.hostname||"";this.host=C+U,this.href+=this.host,p&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==h[0]&&(h="/"+h))}if(!unsafeProtocol[o])for(var i=0,m=autoEscape.length;m>i;i++){var A=autoEscape[i],E=encodeURIComponent(A);E===A&&(E=escape(A)),h=h.split(A).join(E)}var w=h.indexOf("#");-1!==w&&(this.hash=h.substr(w),h=h.slice(0,w));var R=h.indexOf("?");if(-1!==R?(this.search=h.substr(R),this.query=h.substr(R+1),s&&(this.query=querystring.parse(this.query)),h=h.slice(0,R)):s&&(this.search="",this.query={}),h&&(this.pathname=h),slashedProtocol[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var U=this.pathname||"",x=this.search||"";this.path=U+x}return this.href=this.format(),this},Url.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var s=this.protocol||"",e=this.pathname||"",h=this.hash||"",r=!1,o="";this.host?r=t+this.host:this.hostname&&(r=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&isObject(this.query)&&Object.keys(this.query).length&&(o=querystring.stringify(this.query));var a=this.search||o&&"?"+o||"";return s&&":"!==s.substr(-1)&&(s+=":"),this.slashes||(!s||slashedProtocol[s])&&r!==!1?(r="//"+(r||""),e&&"/"!==e.charAt(0)&&(e="/"+e)):r||(r=""),h&&"#"!==h.charAt(0)&&(h="#"+h),a&&"?"!==a.charAt(0)&&(a="?"+a),e=e.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),a=a.replace("#","%23"),s+r+e+a+h},Url.prototype.resolve=function(t){return this.resolveObject(urlParse(t,!1,!0)).format()},Url.prototype.resolveObject=function(t){if(isString(t)){var s=new Url;s.parse(t,!1,!0),t=s}var e=new Url;if(Object.keys(this).forEach(function(t){e[t]=this[t]},this),e.hash=t.hash,""===t.href)return e.href=e.format(),e;if(t.slashes&&!t.protocol)return Object.keys(t).forEach(function(s){"protocol"!==s&&(e[s]=t[s])}),slashedProtocol[e.protocol]&&e.hostname&&!e.pathname&&(e.path=e.pathname="/"),e.href=e.format(),e;if(t.protocol&&t.protocol!==e.protocol){if(!slashedProtocol[t.protocol])return Object.keys(t).forEach(function(s){e[s]=t[s]}),e.href=e.format(),e;if(e.protocol=t.protocol,t.host||hostlessProtocol[t.protocol])e.pathname=t.pathname;else{for(var h=(t.pathname||"").split("/");h.length&&!(t.host=h.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==h[0]&&h.unshift(""),h.length<2&&h.unshift(""),e.pathname=h.join("/")}if(e.search=t.search,e.query=t.query,e.host=t.host||"",e.auth=t.auth,e.hostname=t.hostname||t.host,e.port=t.port,e.pathname||e.search){var r=e.pathname||"",o=e.search||"";e.path=r+o}return e.slashes=e.slashes||t.slashes,e.href=e.format(),e}var a=e.pathname&&"/"===e.pathname.charAt(0),n=t.host||t.pathname&&"/"===t.pathname.charAt(0),i=n||a||e.host&&t.pathname,l=i,c=e.pathname&&e.pathname.split("/")||[],h=t.pathname&&t.pathname.split("/")||[],u=e.protocol&&!slashedProtocol[e.protocol];if(u&&(e.hostname="",e.port=null,e.host&&(""===c[0]?c[0]=e.host:c.unshift(e.host)),e.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===h[0]?h[0]=t.host:h.unshift(t.host)),t.host=null),i=i&&(""===h[0]||""===c[0])),n)e.host=t.host||""===t.host?t.host:e.host,e.hostname=t.hostname||""===t.hostname?t.hostname:e.hostname,e.search=t.search,e.query=t.query,c=h;else if(h.length)c||(c=[]),c.pop(),c=c.concat(h),e.search=t.search,e.query=t.query;else if(!isNullOrUndefined(t.search)){if(u){e.hostname=e.host=c.shift();var p=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;p&&(e.auth=p.shift(),e.host=e.hostname=p.shift())}return e.search=t.search,e.query=t.query,isNull(e.pathname)&&isNull(e.search)||(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.href=e.format(),e}if(!c.length)return e.pathname=null,e.search?e.path="/"+e.search:e.path=null,e.href=e.format(),e;for(var f=c.slice(-1)[0],m=(e.host||t.host)&&("."===f||".."===f)||""===f,v=0,g=c.length;g>=0;g--)f=c[g],"."==f?c.splice(g,1):".."===f?(c.splice(g,1),v++):v&&(c.splice(g,1),v--);if(!i&&!l)for(;v--;v)c.unshift("..");!i||""===c[0]||c[0]&&"/"===c[0].charAt(0)||c.unshift(""),m&&"/"!==c.join("/").substr(-1)&&c.push("");var y=""===c[0]||c[0]&&"/"===c[0].charAt(0);if(u){e.hostname=e.host=y?"":c.length?c.shift():"";var p=e.host&&e.host.indexOf("@")>0?e.host.split("@"):!1;p&&(e.auth=p.shift(),e.host=e.hostname=p.shift())}return i=i||e.host&&c.length,i&&!y&&c.unshift(""),c.length?e.pathname=c.join("/"):(e.pathname=null,e.path=null),isNull(e.pathname)&&isNull(e.search)||(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.auth=t.auth||e.auth,e.slashes=e.slashes||t.slashes,e.href=e.format(),e},Url.prototype.parseHost=function(){var t=this.host,s=portPattern.exec(t);s&&(s=s[0],":"!==s&&(this.port=s.substr(1)),t=t.substr(0,t.length-s.length)),t&&(this.hostname=t)};


},{"punycode":1,"querystring":4}],6:[function(require,module,exports){
"use strict";module.exports=function(e){var o=encodeURIComponent(e.getURL());return{popup:!0,shareText:{de:"teilen",en:"share",es:"compartir",fr:"partager",it:"condividi",da:"del",nl:"delen"},name:"facebook",faName:"fa-facebook",title:{de:"Bei Facebook teilen",en:"Share on Facebook",es:"Compartir en Facebook",fr:"Partager sur Facebook",it:"Condividi su Facebook",da:"Del på Facebook",nl:"Delen op Facebook"},shareUrl:"https://www.facebook.com/sharer/sharer.php?u="+o+e.getReferrerTrack()}};


},{}],7:[function(require,module,exports){
"use strict";module.exports=function(e){var o=encodeURIComponent(e.getURL());return{popup:!0,shareText:"+1",name:"googleplus",faName:"fa-google-plus",title:{de:"Bei Google+ teilen",en:"Share on Google+",es:"Compartir en Google+",fr:"Partager sur Goolge+",it:"Condividi su Google+",da:"Del på Google+",nl:"Delen op Google+"},shareUrl:"https://plus.google.com/share?url="+o+e.getReferrerTrack()}};


},{}],8:[function(require,module,exports){
"use strict";module.exports=function(e){return{blank:!0,popup:!1,shareText:"Info",name:"info",faName:"fa-info",title:{de:"weitere Informationen",en:"more information",es:"más informaciones",fr:"plus d'informations",it:"maggiori informazioni",da:"flere oplysninger",nl:"verdere informatie"},shareUrl:e.getInfoUrl()}};


},{}],9:[function(require,module,exports){
"use strict";module.exports=function(e){var a=e.getOption("mailUrl");return{blank:0===a.indexOf("http"),popup:!1,shareText:"mail",name:"mail",faName:"fa-envelope",title:{de:"Per E-Mail versenden",en:"Send by email",es:"Enviar por email",fr:"Envoyer par courriel",it:"Inviare via email",da:"Sende via e-mail",nl:"Sturen via e-mail "},shareUrl:a}};


},{}],10:[function(require,module,exports){
(function (global){
"use strict";var url=require("url"),$=(typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),abbreviateText=function(t,e){var r=$("<div/>").html(t).text();if(r.length<=e)return t;var i=r.substring(0,e-1).lastIndexOf(" ");return r=encodeURIComponent(r.substring(0,i))+"…"};module.exports=function(t){var e=url.parse("https://twitter.com/intent/tweet",!0),r=t.getMeta("DC.title"),i=t.getMeta("DC.creator");return r.length>0&&i.length>0?r+=" - "+i:r=t.getTitle(),e.query.text=abbreviateText(r,120),e.query.url=t.getURL(),null!==t.options.twitterVia&&(e.query.via=t.options.twitterVia),delete e.search,{popup:!0,shareText:"tweet",name:"twitter",faName:"fa-twitter",title:{de:"Bei Twitter teilen",en:"Share on Twitter",es:"Compartir en Twitter",fr:"Partager sur Twitter",it:"Condividi su Twitter",da:"Del på Twitter",nl:"Delen op Twitter"},shareUrl:url.format(e)+t.getReferrerTrack()}};


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"url":5}],11:[function(require,module,exports){
"use strict";module.exports=function(e){var t=encodeURIComponent(e.getURL()),a=e.getMeta("DC.title"),p=e.getMeta("DC.creator");return a.length>0&&p.length>0?a+=" - "+p:a=e.getTitle(),{popup:!1,shareText:{de:"teilen",en:"share",es:"compartir",fr:"partager",it:"condividi",da:"del",nl:"delen"},name:"whatsapp",faName:"fa-whatsapp",title:{de:"Bei Whatsapp teilen",en:"Share on Whatsapp",es:"Compartir en Whatsapp",fr:"Partager sur Whatsapp",it:"Condividi su Whatsapp",da:"Del på Whatsapp",nl:"Delen op Whatsapp"},shareUrl:"whatsapp://send?text="+encodeURIComponent(a)+"%20"+t+e.getReferrerTrack()}};


},{}],12:[function(require,module,exports){
"use strict";module.exports=function(e){var r=encodeURIComponent(e.getURL());return{popup:!0,shareText:{de:"teilen",en:"share",es:"compartir",fr:"partager",it:"condividi",da:"del",nl:"delen"},name:"xing",faName:"fa-xing",title:{de:"Bei XING teilen",en:"Share on XING",es:"Compartir en XING",fr:"Partager sur XING",it:"Condividi su XING",da:"Del på XING",nl:"Delen op XING"},shareUrl:"https://www.xing.com/social_plugins/share?url="+r+e.getReferrerTrack()}};


},{}],13:[function(require,module,exports){
(function (global){
"use strict";var $=(typeof window !== "undefined" ? window.jQuery : typeof global !== "undefined" ? global.jQuery : null),url=require("url"),Shariff=function(t,e){var r=this;this.element=t,$(t).empty(),this.options=$.extend({},this.defaults,e,$(t).data());var i=[require("./services/facebook"),require("./services/googleplus"),require("./services/info"),require("./services/mail"),require("./services/twitter"),require("./services/whatsapp"),require("./services/xing")];this.services=$.map(this.options.services,function(t){var e;return i.forEach(function(i){return i=i(r),i.name===t?(e=i,null):void 0}),e}),this._addButtonList(),null!==this.options.backendUrl&&this.getShares().then($.proxy(this._updateCounts,this))};Shariff.prototype={defaults:{theme:"color",backendUrl:null,infoUrl:"http://ct.de/-2467514",lang:"de",mailUrl:function(){var t=url.parse(this.getURL(),!0);return t.query.view="mail",delete t.search,url.format(t)},orientation:"horizontal",referrerTrack:null,services:["twitter","facebook","googleplus","info"],title:function(){return $("title").text()},twitterVia:null,url:function(){var t=global.document.location.href,e=$("link[rel=canonical]").attr("href")||this.getMeta("og:url")||"";return e.length>0&&(e.indexOf("http")<0&&(e=global.document.location.protocol+"//"+global.document.location.host+e),t=e),t}},$socialshareElement:function(){return $(this.element)},getLocalized:function(t,e){return"object"==typeof t[e]?t[e][this.options.lang]:"string"==typeof t[e]?t[e]:void 0},getMeta:function(t){var e=$('meta[name="'+t+'"],[property="'+t+'"]').attr("content");return e||""},getInfoUrl:function(){return this.options.infoUrl},getURL:function(){return this.getOption("url")},getOption:function(t){var e=this.options[t];return"function"==typeof e?$.proxy(e,this)():e},getTitle:function(){return this.getOption("title")},getReferrerTrack:function(){return this.options.referrerTrack||""},getShares:function(){var t=url.parse(this.options.backendUrl,!0);return t.query.url=this.getURL(),delete t.search,$.getJSON(url.format(t))},_updateCounts:function(t){var e=this;$.each(t,function(t,r){r>=1e3&&(r=Math.round(r/1e3)+"k"),$(e.element).find("."+t+" a").append('<span class="share_count">'+r)})},_addButtonList:function(){var t=this,e=this.$socialshareElement(),r="theme-"+this.options.theme,i="orientation-"+this.options.orientation,n="col-"+this.options.services.length,a=$("<ul>").addClass(r).addClass(i).addClass(n);this.services.forEach(function(e){var r=$('<li class="shariff-button">').addClass(e.name),i='<span class="share_text">'+t.getLocalized(e,"shareText"),n=$("<a>").attr("href",e.shareUrl).append(i);"undefined"!=typeof e.faName&&n.prepend('<span class="fa '+e.faName+'">'),e.popup?n.attr("rel","popup"):e.blank&&n.attr("target","_blank"),n.attr("title",t.getLocalized(e,"title")),r.append(n),a.append(r)}),a.on("click",'[rel="popup"]',function(t){t.preventDefault();var e=$(this).attr("href"),r="_blank",i="600",n="460",a="width="+i+",height="+n;global.window.open(e,r,a)}),e.append(a)}},module.exports=Shariff,global.Shariff=Shariff,$(".shariff").each(function(){this.hasOwnProperty("shariff")||(this.shariff=new Shariff(this))});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./services/facebook":6,"./services/googleplus":7,"./services/info":8,"./services/mail":9,"./services/twitter":10,"./services/whatsapp":11,"./services/xing":12,"url":5}]},{},[13]);
