import{S as lt,i as at,s as ft,G as ue,n as re,I as He,j as S,D as ut,J as Ct,K as de,L as Qe,e as M,d as L,f as j,M as Ge,N as Ot,H as jt,O as Pt,E as Mt,P as Ke,Q as Lt,a as ve,R as z,b as A,t as xe,T as H,h as N,g as _e,k as I,l as O,o as x,U as Q,q as G,x as K,y as J,V as W,z as Dt}from"./translation.DpMJEUeI.js";import{L as Y,D as Z,A as B,b as $t,c as Ft,d as At}from"./setting-utils.H_x_02w0.js";import{I as ke}from"./zh_TW.DugCeyPP.js";function dt(e,t){const n={},r={},o={$$scope:1};let s=e.length;for(;s--;){const i=e[s],c=t[s];if(c){for(const l in i)l in c||(r[l]=1);for(const l in c)o[l]||(n[l]=c[l],o[l]=1);e[s]=c}else for(const l in i)o[l]=1}for(const i in r)i in n||(n[i]=void 0);return n}const te=/^[a-z0-9]+(-[a-z0-9]+)*$/,pe=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),a={provider:o.length>0?o[0]:r,prefix:l,name:c};return t&&!ae(a)?null:a}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!ae(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!ae(c,n)?null:c}return null},ae=(e,t)=>e?!!((e.provider===""||e.provider.match(te))&&(t&&e.prefix===""||e.prefix.match(te))&&e.name.match(te)):!1,ht=Object.freeze({left:0,top:0,width:16,height:16}),he=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),me=Object.freeze({...ht,...he}),Te=Object.freeze({...me,body:"",hidden:!1});function Nt(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function Je(e,t){const n=Nt(e,t);for(const r in Te)r in he?r in e&&!(r in n)&&(n[r]=he[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function Vt(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,l=c&&s(c);l&&(o[i]=[c].concat(l))}return o[i]}return Object.keys(n).concat(Object.keys(r)).forEach(s),o}function Bt(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=Je(r[c]||o[c],s)}return i(t),n.forEach(i),Je(e,s)}function pt(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=Vt(e);for(const o in r){const s=r[o];s&&(t(o,Bt(e,o,s)),n.push(o))}return n}const Rt={provider:"",aliases:{},not_found:{},...ht};function Se(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function mt(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Se(e,Rt))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(te)||typeof s.body!="string"||!Se(s,Te))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(te)||typeof i!="string"||!n[i]&&!r[i]||!Se(s,Te))return null}return t}const We=Object.create(null);function Ut(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function R(e,t){const n=We[e]||(We[e]=Object.create(null));return n[t]||(n[t]=Ut(e,t))}function Le(e,t){return mt(t)?pt(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function qt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let ne=!1;function gt(e){return typeof e=="boolean"&&(ne=e),ne}function zt(e){const t=typeof e=="string"?pe(e,!0,ne):e;if(t){const n=R(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Ht(e,t){const n=pe(e,!0,ne);if(!n)return!1;const r=R(n.provider,n.prefix);return qt(r,n.name,t)}function Qt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),ne&&!t&&!e.prefix){let o=!1;return mt(e)&&(e.prefix="",pt(e,(s,i)=>{i&&Ht(s,i)&&(o=!0)})),o}const n=e.prefix;if(!ae({provider:t,prefix:n,name:"a"}))return!1;const r=R(t,n);return!!Le(r,e)}const bt=Object.freeze({width:null,height:null}),yt=Object.freeze({...bt,...he}),Gt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Kt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Xe(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(Gt);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=Kt.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}function Jt(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const o=e.indexOf(">",r),s=e.indexOf("</"+t);if(o===-1||s===-1)break;const i=e.indexOf(">",s);if(i===-1)break;n+=e.slice(o+1,s).trim(),e=e.slice(0,r).trim()+e.slice(i+1)}return{defs:n,content:e}}function Wt(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Xt(e,t,n){const r=Jt(e);return Wt(r.defs,t+r.content+n)}const Yt=e=>e==="unset"||e==="undefined"||e==="none";function Zt(e,t){const n={...me,...e},r={...yt,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(k=>{const v=[],w=k.hFlip,u=k.vFlip;let T=k.rotate;w?u?T+=2:(v.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),v.push("scale(-1 1)"),o.top=o.left=0):u&&(v.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),v.push("scale(1 -1)"),o.top=o.left=0);let b;switch(T<0&&(T-=Math.floor(T/4)*4),T=T%4,T){case 1:b=o.height/2+o.top,v.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:v.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,v.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}T%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),v.length&&(s=Xt(s,'<g transform="'+v.join(" ")+'">',"</g>"))});const i=r.width,c=r.height,l=o.width,a=o.height;let f,d;i===null?(d=c===null?"1em":c==="auto"?a:c,f=Xe(d,l/a)):(f=i==="auto"?l:i,d=c===null?Xe(f,a/l):c==="auto"?a:c);const h={},y=(k,v)=>{Yt(v)||(h[k]=v.toString())};y("width",f),y("height",d);const g=[o.left,o.top,l,a];return h.viewBox=g.join(" "),{attributes:h,viewBox:g,body:s}}const en=/\sid="(\S+)"/g,tn="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let nn=0;function on(e,t=tn){const n=[];let r;for(;r=en.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(nn++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const Ee=Object.create(null);function rn(e,t){Ee[e]=t}function Ce(e){return Ee[e]||Ee[""]}function De(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const $e=Object.create(null),ee=["https://api.simplesvg.com","https://api.unisvg.com"],fe=[];for(;ee.length>0;)ee.length===1||Math.random()>.5?fe.push(ee.shift()):fe.push(ee.pop());$e[""]=De({resources:["https://api.iconify.design"].concat(fe)});function sn(e,t){const n=De(t);return n===null?!1:($e[e]=n,!0)}function Fe(e){return $e[e]}const cn=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Ye=cn();function ln(e,t){const n=Fe(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function an(e){return e===404}const fn=(e,t,n)=>{const r=[],o=ln(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=o&&a>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),r.push(i),r};function un(e){if(typeof e=="string"){const t=Fe(e);if(t)return t.path}return"/"}const dn=(e,t,n)=>{if(!Ye){n("abort",424);return}let r=un(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});r+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;Ye(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(an(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},hn={prepare:fn,send:dn};function pn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=R(s,i));let f;c in a.icons?f=t.loaded:i===""||a.missing.has(c)?f=t.missing:f=t.pending;const d={provider:s,prefix:i,name:c};f.push(d)}),t}function wt(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function mn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==o)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:r,prefix:o,name:a});else if(e.missing.has(a))i.missing.push({provider:r,prefix:o,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||wt([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let gn=0;function bn(e,t,n){const r=gn++,o=wt.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function yn(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?pe(o,t,n):o;s&&r.push(s)}),r}var wn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function vn(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let p=e.resources.slice(0);for(i=[];p.length>1;){const E=Math.floor(Math.random()*p.length);i.push(p[E]),p=p.slice(0,E).concat(p.slice(E+1))}i=i.concat(p)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,f,d=null,h=[],y=[];typeof r=="function"&&y.push(r);function g(){d&&(clearTimeout(d),d=null)}function k(){l==="pending"&&(l="aborted"),g(),h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function v(p,E){E&&(y=[]),typeof p=="function"&&y.push(p)}function w(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:h.length,subscribe:v,abort:k}}function u(){l="failed",y.forEach(p=>{p(void 0,f)})}function T(){h.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),h=[]}function b(p,E,$){const F=E!=="success";switch(h=h.filter(_=>_!==p),l){case"pending":break;case"failed":if(F||!e.dataAfterTimeout)return;break;default:return}if(E==="abort"){f=$,u();return}if(F){f=$,h.length||(i.length?P():u());return}if(g(),T(),!e.random){const _=e.resources.indexOf(p.resource);_!==-1&&_!==e.index&&(e.index=_)}l="completed",y.forEach(_=>{_($)})}function P(){if(l!=="pending")return;g();const p=i.shift();if(p===void 0){if(h.length){d=setTimeout(()=>{g(),l==="pending"&&(T(),u())},e.timeout);return}u();return}const E={status:"pending",resource:p,callback:($,F)=>{b(E,$,F)}};h.push(E),a++,d=setTimeout(P,e.rotate),n(p,t,E.callback)}return setTimeout(P),w}function vt(e){const t={...wn,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,a){const f=vn(t,c,l,(d,h)=>{r(),a&&a(d,h)});return n.push(f),f}function s(c){return n.find(l=>c(l))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function Ze(){}const Ie=Object.create(null);function xn(e){if(!Ie[e]){const t=Fe(e);if(!t)return;const n=vt(t),r={config:t,redundancy:n};Ie[e]=r}return Ie[e]}function _n(e,t,n){let r,o;if(typeof e=="string"){const s=Ce(e);if(!s)return n(void 0,424),Ze;o=s.send;const i=xn(e);i&&(r=i.redundancy)}else{const s=De(e);if(s){r=vt(s);const i=e.resources?e.resources[0]:"",c=Ce(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),Ze):r.query(t,o,n)().abort}const et="iconify2",oe="iconify",xt=oe+"-count",tt=oe+"-version",_t=36e5,kn=168,Sn=50;function Oe(e,t){try{return e.getItem(t)}catch{}}function Ae(e,t,n){try{return e.setItem(t,n),!0}catch{}}function nt(e,t){try{e.removeItem(t)}catch{}}function je(e,t){return Ae(e,xt,t.toString())}function Pe(e){return parseInt(Oe(e,xt))||0}const ge={local:!0,session:!0},kt={local:new Set,session:new Set};let Ne=!1;function In(e){Ne=e}let le=typeof window>"u"?{}:window;function St(e){const t=e+"Storage";try{if(le&&le[t]&&typeof le[t].length=="number")return le[t]}catch{}ge[e]=!1}function It(e,t){const n=St(e);if(!n)return;const r=Oe(n,tt);if(r!==et){if(r){const c=Pe(n);for(let l=0;l<c;l++)nt(n,oe+l.toString())}Ae(n,tt,et),je(n,0);return}const o=Math.floor(Date.now()/_t)-kn,s=c=>{const l=oe+c.toString(),a=Oe(n,l);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}nt(n,l)}};let i=Pe(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,je(n,i)):kt[e].add(c))}function Tt(){if(!Ne){In(!0);for(const e in ge)It(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=R(r,o);if(!Le(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function Tn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in ge)It(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function En(e,t){Ne||Tt();function n(r){let o;if(!ge[r]||!(o=St(r)))return;const s=kt[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=Pe(o),i>=Sn||!je(o,i+1))return;const c={cached:Math.floor(Date.now()/_t),provider:e.provider,data:t};return Ae(o,oe+i.toString(),JSON.stringify(c))}t.lastModified&&!Tn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function ot(){}function Cn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,mn(e)}))}function On(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=Ce(n)))return;s.prepare(n,r,o).forEach(c=>{_n(n,c,l=>{if(typeof l!="object")c.icons.forEach(a=>{e.missing.add(a)});else try{const a=Le(e,l);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(d=>{f.delete(d)}),En(e,l)}catch(a){console.error(a)}Cn(e)})})}))}const jn=(e,t)=>{const n=yn(e,!0,gt()),r=pn(n);if(!r.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(r.loaded,r.missing,r.pending,ot)}),()=>{l=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(l=>{const{provider:a,prefix:f}=l;if(f===c&&a===i)return;i=a,c=f,s.push(R(a,f));const d=o[a]||(o[a]=Object.create(null));d[f]||(d[f]=[])}),r.pending.forEach(l=>{const{provider:a,prefix:f,name:d}=l,h=R(a,f),y=h.pendingIcons||(h.pendingIcons=new Set);y.has(d)||(y.add(d),o[a][f].push(d))}),s.forEach(l=>{const{provider:a,prefix:f}=l;o[a][f].length&&On(l,o[a][f])}),t?bn(t,r,s):ot};function Pn(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in bt?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const Mn=/[\s,]+/;function Ln(e,t){t.split(Mn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Dn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}function $n(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Fn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function An(e){return"data:image/svg+xml,"+Fn(e)}function Nn(e){return'url("'+An(e)+'")'}const rt={...yt,inline:!1},Vn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Bn={display:"inline-block"},Me={"background-color":"currentColor"},Et={"background-color":"transparent"},st={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},it={"-webkit-mask":Me,mask:Me,background:Et};for(const e in it){const t=it[e];for(const n in st)t[e+"-"+n]=st[n]}function Rn(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Un(e,t){const n=Pn(rt,t),r=t.mode||"svg",o=r==="svg"?{...Vn}:{};e.body.indexOf("xlink:")===-1&&delete o["xmlns:xlink"];let s=typeof t.style=="string"?t.style:"";for(let w in t){const u=t[w];if(u!==void 0)switch(w){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[w]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&Ln(n,u);break;case"color":s=s+(s.length>0&&s.trim().slice(-1)!==";"?";":"")+"color: "+u+"; ";break;case"rotate":typeof u=="string"?n[w]=Dn(u):typeof u=="number"&&(n[w]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete o["aria-hidden"];break;default:if(w.slice(0,3)==="on:")break;rt[w]===void 0&&(o[w]=u)}}const i=Zt(e,n),c=i.attributes;if(n.inline&&(s="vertical-align: -0.125em; "+s),r==="svg"){Object.assign(o,c),s!==""&&(o.style=s);let w=0,u=t.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),{svg:!0,attributes:o,body:on(i.body,u?()=>u+"ID"+w++:"iconifySvelte")}}const{body:l,width:a,height:f}=e,d=r==="mask"||(r==="bg"?!1:l.indexOf("currentColor")!==-1),h=$n(l,{...c,width:a+"",height:f+""}),g={"--svg":Nn(h)},k=w=>{const u=c[w];u&&(g[w]=Rn(u))};k("width"),k("height"),Object.assign(g,Bn,d?Me:Et);let v="";for(const w in g)v+=w+": "+g[w]+";";return o.style=v+s,{svg:!1,attributes:o}}gt(!0);rn("",hn);if(typeof document<"u"&&typeof window<"u"){Tt();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Qt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;sn(n,o)||console.error(r)}catch{console.error(r)}}}}function qn(e,t,n,r,o){function s(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",s(),{data:{...me,...e}};let i;if(typeof e!="string"||(i=pe(e,!1,!0))===null)return s(),null;const c=zt(i);if(!c)return n&&(!t.loading||t.loading.name!==e)&&(s(),t.name="",t.loading={name:e,abort:jn([i],r)}),null;s(),t.name!==e&&(t.name=e,o&&!t.destroyed&&o(e));const l=["iconify"];return i.prefix!==""&&l.push("iconify--"+i.prefix),i.provider!==""&&l.push("iconify--"+i.provider),{data:c,classes:l}}function zn(e,t){return e?Un({...me,...e},t):null}function ct(e){let t;function n(s,i){return s[0].svg?Qn:Hn}let r=n(e),o=r(e);return{c(){o.c(),t=ue()},l(s){o.l(s),t=ue()},m(s,i){o.m(s,i),re(s,t,i)},p(s,i){r===(r=n(s))&&o?o.p(s,i):(o.d(1),o=r(s),o&&(o.c(),o.m(t.parentNode,t)))},d(s){s&&S(t),o.d(s)}}}function Hn(e){let t,n=[e[0].attributes],r={};for(let o=0;o<n.length;o+=1)r=de(r,n[o]);return{c(){t=M("span"),this.h()},l(o){t=L(o,"SPAN",{}),j(t).forEach(S),this.h()},h(){Ge(t,r)},m(o,s){re(o,t,s)},p(o,s){Ge(t,r=dt(n,[s&1&&o[0].attributes]))},d(o){o&&S(t)}}}function Qn(e){let t,n,r=e[0].body+"",o=[e[0].attributes],s={};for(let i=0;i<o.length;i+=1)s=de(s,o[i]);return{c(){t=Ot("svg"),n=new jt(!0),this.h()},l(i){t=Pt(i,"svg",{});var c=j(t);n=Mt(c,!0),c.forEach(S),this.h()},h(){n.a=null,Ke(t,s)},m(i,c){re(i,t,c),n.m(r,t)},p(i,c){c&1&&r!==(r=i[0].body+"")&&n.p(r),Ke(t,s=dt(o,[c&1&&i[0].attributes]))},d(i){i&&S(t)}}}function Gn(e){let t,n=e[0]&&ct(e);return{c(){n&&n.c(),t=ue()},l(r){n&&n.l(r),t=ue()},m(r,o){n&&n.m(r,o),re(r,t,o)},p(r,[o]){r[0]?n?n.p(r,o):(n=ct(r),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:He,o:He,d(r){r&&S(t),n&&n.d(r)}}}function Kn(e,t,n){const r={name:"",loading:null,destroyed:!1};let o=!1,s=0,i;const c=a=>{typeof t.onLoad=="function"&&t.onLoad(a),Lt()("load",{icon:a})};function l(){n(3,s++,s)}return ut(()=>{n(2,o=!0)}),Ct(()=>{n(1,r.destroyed=!0,r),r.loading&&(r.loading.abort(),n(1,r.loading=null,r))}),e.$$set=a=>{n(6,t=de(de({},t),Qe(a)))},e.$$.update=()=>{{const a=qn(t.icon,r,o,l,c);n(0,i=a?zn(a.data,t):null),i&&a.classes&&n(0,i.attributes.class=(typeof t.class=="string"?t.class+" ":"")+a.classes.join(" "),i)}},t=Qe(t),[i,r,o,s]}class X extends lt{constructor(t){super(),at(this,t,Kn,Gn,ft,{})}}function Jn(e){let t,n,r,o,s,i,c,l,a,f,d,h,y,g,k,v,w=ve(ke.lightMode)+"",u,T,b,P,p,E=ve(ke.darkMode)+"",$,F,_,V,be,Ve=ve(ke.systemMode)+"",ye,D,we,Be;return o=new X({props:{icon:"material-symbols:wb-sunny-outline-rounded",class:"text-[1.25rem]"}}),c=new X({props:{icon:"material-symbols:dark-mode-outline-rounded",class:"text-[1.25rem]"}}),f=new X({props:{icon:"material-symbols:radio-button-partial-outline",class:"text-[1.25rem]"}}),k=new X({props:{icon:"material-symbols:wb-sunny-outline-rounded",class:"text-[1.25rem] mr-3"}}),P=new X({props:{icon:"material-symbols:dark-mode-outline-rounded",class:"text-[1.25rem] mr-3"}}),V=new X({props:{icon:"material-symbols:radio-button-partial-outline",class:"text-[1.25rem] mr-3"}}),{c(){t=M("div"),n=M("button"),r=M("div"),z(o.$$.fragment),s=A(),i=M("div"),z(c.$$.fragment),l=A(),a=M("div"),z(f.$$.fragment),d=A(),h=M("div"),y=M("div"),g=M("button"),z(k.$$.fragment),v=A(),u=xe(w),T=A(),b=M("button"),z(P.$$.fragment),p=A(),$=xe(E),F=A(),_=M("button"),z(V.$$.fragment),be=A(),ye=xe(Ve),this.h()},l(m){t=L(m,"DIV",{class:!0,role:!0,tabindex:!0});var C=j(t);n=L(C,"BUTTON",{"aria-label":!0,role:!0,class:!0,id:!0});var U=j(n);r=L(U,"DIV",{class:!0});var Re=j(r);H(o.$$.fragment,Re),Re.forEach(S),s=N(U),i=L(U,"DIV",{class:!0});var Ue=j(i);H(c.$$.fragment,Ue),Ue.forEach(S),l=N(U),a=L(U,"DIV",{class:!0});var qe=j(a);H(f.$$.fragment,qe),qe.forEach(S),U.forEach(S),d=N(C),h=L(C,"DIV",{id:!0,class:!0});var ze=j(h);y=L(ze,"DIV",{class:!0});var q=j(y);g=L(q,"BUTTON",{class:!0});var se=j(g);H(k.$$.fragment,se),v=N(se),u=_e(se,w),se.forEach(S),T=N(q),b=L(q,"BUTTON",{class:!0});var ie=j(b);H(P.$$.fragment,ie),p=N(ie),$=_e(ie,E),ie.forEach(S),F=N(q),_=L(q,"BUTTON",{class:!0});var ce=j(_);H(V.$$.fragment,ce),be=N(ce),ye=_e(ce,Ve),ce.forEach(S),q.forEach(S),ze.forEach(S),C.forEach(S),this.h()},h(){I(r,"class","absolute"),O(r,"opacity-0",e[0]!==Y),I(i,"class","absolute"),O(i,"opacity-0",e[0]!==Z),I(a,"class","absolute"),O(a,"opacity-0",e[0]!==B),I(n,"aria-label","Light/Dark Mode"),I(n,"role","menuitem"),I(n,"class","relative btn-plain scale-animation rounded-lg h-11 w-11 active:scale-90"),I(n,"id","scheme-switch"),I(g,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"),O(g,"current-theme-btn",e[0]===Y),I(b,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95 mb-0.5"),O(b,"current-theme-btn",e[0]===Z),I(_,"class","flex transition whitespace-nowrap items-center justify-start w-full btn-plain scale-animation rounded-lg h-9 px-3 font-medium active:scale-95"),O(_,"current-theme-btn",e[0]===B),I(y,"class","card-base float-panel p-2"),I(h,"id","light-dark-panel"),I(h,"class","hidden lg:block absolute transition float-panel-closed top-11 -right-2 pt-5"),I(t,"class","relative z-50"),I(t,"role","menu"),I(t,"tabindex","-1")},m(m,C){re(m,t,C),x(t,n),x(n,r),Q(o,r,null),x(n,s),x(n,i),Q(c,i,null),x(n,l),x(n,a),Q(f,a,null),x(t,d),x(t,h),x(h,y),x(y,g),Q(k,g,null),x(g,v),x(g,u),x(y,T),x(y,b),Q(P,b,null),x(b,p),x(b,$),x(y,F),x(y,_),Q(V,_,null),x(_,be),x(_,ye),D=!0,we||(Be=[G(n,"click",e[2]),G(n,"mouseenter",Wn),G(g,"click",e[3]),G(b,"click",e[4]),G(_,"click",e[5]),G(t,"mouseleave",Xn)],we=!0)},p(m,[C]){(!D||C&1)&&O(r,"opacity-0",m[0]!==Y),(!D||C&1)&&O(i,"opacity-0",m[0]!==Z),(!D||C&1)&&O(a,"opacity-0",m[0]!==B),(!D||C&1)&&O(g,"current-theme-btn",m[0]===Y),(!D||C&1)&&O(b,"current-theme-btn",m[0]===Z),(!D||C&1)&&O(_,"current-theme-btn",m[0]===B)},i(m){D||(K(o.$$.fragment,m),K(c.$$.fragment,m),K(f.$$.fragment,m),K(k.$$.fragment,m),K(P.$$.fragment,m),K(V.$$.fragment,m),D=!0)},o(m){J(o.$$.fragment,m),J(c.$$.fragment,m),J(f.$$.fragment,m),J(k.$$.fragment,m),J(P.$$.fragment,m),J(V.$$.fragment,m),D=!1},d(m){m&&S(t),W(o),W(c),W(f),W(k),W(P),W(V),we=!1,Dt(Be)}}}function Wn(){document.querySelector("#light-dark-panel").classList.remove("float-panel-closed")}function Xn(){document.querySelector("#light-dark-panel").classList.add("float-panel-closed")}function Yn(e,t,n){const r=[Y,Z,B];let o=B;ut(()=>{n(0,o=$t());const f=window.matchMedia("(prefers-color-scheme: dark)"),d=h=>{At(o)};return f.addEventListener("change",d),()=>{f.removeEventListener("change",d)}});function s(f){n(0,o=f),Ft(f)}function i(){let f=0;for(;f<r.length&&r[f]!==o;f++);s(r[(f+1)%r.length])}return[o,s,i,()=>s(Y),()=>s(Z),()=>s(B)]}class no extends lt{constructor(t){super(),at(this,t,Yn,Jn,ft,{})}}export{no as default};