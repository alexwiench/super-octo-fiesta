import{S as te,i as ae,s as le,c as j,e as S,b as H,d as B,f as U,h as N,j as I,k as p,a as se,n as q,o as E,p as F,q as M,u as z,r as K,v as O,x as P,B as ne,y as A,C as re,z as ie,D as oe,t as ce,H as ue,g as he,E as fe,w as _e,F as de}from"./translation.DpMJEUeI.js";import{u as Y}from"./url-utils.BTiBY1B7.js";import{I as pe}from"./zh_TW.DugCeyPP.js";function G(t){return t?.length!==void 0?t:Array.from(t)}function J(t,a,d){const c=t.slice();return c[11]=a[d],c}const me=t=>({}),Q=t=>({}),ge=t=>({}),X=t=>({}),ve=t=>({}),Z=t=>({}),be=t=>({}),$=t=>({});function x(t){let a,d,c=t[11].meta.title+"",y,h,m,f,_=t[11].excerpt+"",T,g,b;const v=t[6]["arrow-icon"],n=j(v,t,t[5],Q);return{c(){a=S("a"),d=S("div"),y=ce(c),n&&n.c(),h=H(),m=S("div"),f=new ue(!1),T=H(),this.h()},l(s){a=B(s,"A",{href:!0,class:!0});var o=U(a);d=B(o,"DIV",{class:!0});var u=U(d);y=he(u,c),n&&n.l(u),u.forEach(I),h=N(o),m=B(o,"DIV",{class:!0});var D=U(m);f=fe(D,!1),D.forEach(I),T=N(o),o.forEach(I),this.h()},h(){p(d,"class","transition text-90 inline-flex font-bold group-hover:text-[var(--primary)]"),f.a=null,p(m,"class","transition text-sm text-50"),p(a,"href",g=t[11].url),p(a,"class","transition first-of-type:mt-2 lg:first-of-type:mt-0 group block rounded-xl text-lg px-3 py-2 hover:bg-[var(--btn-plain-bg-hover)] active:bg-[var(--btn-plain-bg-active)]")},m(s,o){q(s,a,o),E(a,d),E(d,y),n&&n.m(d,null),E(a,h),E(a,m),f.m(_,m),E(a,T),b=!0},p(s,o){(!b||o&8)&&c!==(c=s[11].meta.title+"")&&_e(y,c),n&&n.p&&(!b||o&32)&&z(n,v,s,s[5],b?O(v,s[5],o,me):K(s[5]),Q),(!b||o&8)&&_!==(_=s[11].excerpt+"")&&f.p(_),(!b||o&8&&g!==(g=s[11].url))&&p(a,"href",g)},i(s){b||(P(n,s),b=!0)},o(s){A(n,s),b=!1},d(s){s&&I(a),n&&n.d(s)}}}function we(t){let a,d,c,y,h,m,f,_,T,g,b,v,n,s;const o=t[6]["search-icon"],u=j(o,t,t[5],$),D=t[6]["search-switch"],w=j(D,t,t[5],Z),R=t[6]["search-icon"],k=j(R,t,t[5],X);let V=G(t[3]),r=[];for(let e=0;e<V.length;e+=1)r[e]=x(J(t,V,e));const ee=e=>A(r[e],1,1,()=>{r[e]=null});return{c(){a=S("div"),u&&u.c(),d=H(),c=S("input"),y=H(),h=S("button"),w&&w.c(),m=H(),f=S("div"),_=S("div"),k&&k.c(),T=H(),g=S("input"),b=H();for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){a=B(e,"DIV",{id:!0,class:!0});var l=U(a);u&&u.l(l),d=N(l),c=B(l,"INPUT",{placeholder:!0,class:!0}),l.forEach(I),y=N(e),h=B(e,"BUTTON",{"aria-label":!0,id:!0,class:!0});var i=U(h);w&&w.l(i),i.forEach(I),m=N(e),f=B(e,"DIV",{id:!0,class:!0});var L=U(f);_=B(L,"DIV",{id:!0,class:!0});var C=U(_);k&&k.l(C),T=N(C),g=B(C,"INPUT",{placeholder:!0,class:!0}),C.forEach(I),b=N(L);for(let W=0;W<r.length;W+=1)r[W].l(L);L.forEach(I),this.h()},h(){p(c,"placeholder",se(pe.search)),p(c,"class","transition-all pl-10 text-sm bg-transparent outline-0 h-full w-40 active:w-60 focus:w-60 text-black/50 dark:text-white/50"),p(a,"id","search-bar"),p(a,"class","hidden lg:flex transition-all items-center h-11 mr-2 rounded-lg bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06] dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10 "),p(h,"aria-label","Search Panel"),p(h,"id","search-switch"),p(h,"class","btn-plain scale-animation lg:hidden rounded-lg w-11 h-11 active:scale-90"),p(g,"placeholder","Search"),p(g,"class","pl-10 absolute inset-0 text-sm bg-transparent outline-0 focus:w-60 text-black/50 dark:text-white/50"),p(_,"id","search-bar-inside"),p(_,"class","flex relative lg:hidden transition-all items-center h-11 rounded-xl bg-black/[0.04] hover:bg-black/[0.06] focus-within:bg-black/[0.06] dark:bg-white/5 dark:hover:bg-white/10 dark:focus-within:bg-white/10 "),p(f,"id","search-panel"),p(f,"class","float-panel float-panel-closed search-panel absolute md:w-[30rem] top-20 left-4 md:left-[unset] right-4 shadow-2xl rounded-2xl p-2")},m(e,l){q(e,a,l),u&&u.m(a,null),E(a,d),E(a,c),F(c,t[0]),q(e,y,l),q(e,h,l),w&&w.m(h,null),q(e,m,l),q(e,f,l),E(f,_),k&&k.m(_,null),E(_,T),E(_,g),F(g,t[1]),E(f,b);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(f,null);v=!0,n||(s=[M(c,"input",t[7]),M(c,"focus",t[8]),M(h,"click",t[4]),M(g,"input",t[9])],n=!0)},p(e,[l]){if(u&&u.p&&(!v||l&32)&&z(u,o,e,e[5],v?O(o,e[5],l,be):K(e[5]),$),l&1&&c.value!==e[0]&&F(c,e[0]),w&&w.p&&(!v||l&32)&&z(w,D,e,e[5],v?O(D,e[5],l,ve):K(e[5]),Z),k&&k.p&&(!v||l&32)&&z(k,R,e,e[5],v?O(R,e[5],l,ge):K(e[5]),X),l&2&&g.value!==e[1]&&F(g,e[1]),l&40){V=G(e[3]);let i;for(i=0;i<V.length;i+=1){const L=J(e,V,i);r[i]?(r[i].p(L,l),P(r[i],1)):(r[i]=x(L),r[i].c(),P(r[i],1),r[i].m(f,null))}for(de(),i=V.length;i<r.length;i+=1)ee(i);ne()}},i(e){if(!v){P(u,e),P(w,e),P(k,e);for(let l=0;l<V.length;l+=1)P(r[l]);v=!0}},o(e){A(u,e),A(w,e),A(k,e),r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)A(r[l]);v=!1},d(e){e&&(I(a),I(y),I(h),I(m),I(f)),u&&u.d(e),w&&w.d(e),k&&k.d(e),re(r,e),n=!1,ie(s)}}}function ke(t,a,d){let{$$slots:c={},$$scope:y}=a,h="",m="",f=[];Y("/"),Y("/");let _=(n,s)=>{};oe(()=>{d(2,_=async(n,s)=>{let o=document.getElementById("search-panel");if(!o)return;if(!n&&s){o.classList.add("float-panel-closed");return}let u=[];{const D=await pagefind.search(n);for(const w of D.results)u.push(await w.data())}if(!u.length&&s){o.classList.add("float-panel-closed");return}s&&o.classList.remove("float-panel-closed"),d(3,f=u)})});const T=()=>{document.getElementById("search-panel")?.classList.toggle("float-panel-closed")};function g(){h=this.value,d(0,h)}const b=()=>_(h,!0);function v(){m=this.value,d(1,m)}return t.$$set=n=>{"$$scope"in n&&d(5,y=n.$$scope)},t.$$.update=()=>{t.$$.dirty&5&&_(h,!0),t.$$.dirty&6&&_(m,!1)},[h,m,_,f,T,y,c,g,b,v]}class Te extends te{constructor(a){super(),ae(this,a,ke,we,le,{})}}export{Te as default};