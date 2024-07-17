import{c as H,j as W,u as O,a as G,r as p,o as C,b as N,g as P,d as V,e as Z,f as F,h as k,i as B,k as r,l as e,T as w,C as K,D as z,m as E,n as x,L as g,p as d,P as U,E as q,q as h,A as Q,I as L,s as _,F as X,S as J,t as I,R as m,v as j,w as Y,G as D,B as $}from"./index-D2UnZUyL.js";import{A as ee}from"./AdResponsive-DMjJSM41.js";import{d as te,R as S}from"./AccessTimeFilled-lM8B9Hg_.js";const ae=H(W.jsx("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter");function A(){const{t:n}=O(["page_home","ui"]),o=G(),{characterTally:u,characterTotal:f}=p.useMemo(()=>{const t=o.chars.keys,a=C(N,()=>0);return t.forEach(c=>{const l=P(c);a[l]=a[l]+1}),{characterTally:a,characterTotal:t.length}},[o]),{weaponTally:T,weaponTotal:y}=p.useMemo(()=>{const t=o.weapons.values,a=C(V,()=>0);return t.forEach(c=>{const l=Z(c.key).weaponType;a[l]=a[l]+1}),{weaponTally:a,weaponTotal:t.length}},[o]),{artifactTally:b,artifactTotal:i}=p.useMemo(()=>{const t=C(F,()=>0),a=o.arts.values;return a.forEach(c=>{const l=c.slotKey;t[l]=t[l]+1}),{artifactTally:t,artifactTotal:a.length}},[o]),v=k(),s=!B(v.breakpoints.up("md"));return r(h,{children:[e(K,{title:e(w,{variant:"h5",children:n`inventoryCard.title`}),avatar:e(ae,{fontSize:"large"})}),e(z,{}),r(E,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(h,{bgt:"light",children:r(x,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:g,to:"/characters",children:[e(d,{label:r("strong",{children:[n("ui:tabs.characters")," ",f]}),icon:e(U,{}),sx:{flexBasis:s?"100%":"auto",flexGrow:1,cursor:"pointer"},color:f?"primary":"secondary"}),Object.entries(u).map(([t,a])=>e(d,{sx:{flexGrow:1,cursor:"pointer"},color:a?t:"secondary",icon:e(q,{ele:t}),label:e("strong",{children:a})},t))]})}),e(h,{bgt:"light",children:r(x,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:g,to:"/weapons",children:[e(d,{label:r("strong",{children:[n("ui:tabs.weapons")," ",y]}),icon:e(Q,{}),sx:{flexBasis:s?"100%":"auto",flexGrow:1,cursor:"pointer"},color:y?"primary":"secondary"}),Object.entries(T).map(([t,a])=>{var c;return e(d,{sx:{flexGrow:1,cursor:"pointer"},color:a?"success":"secondary",icon:e(L,{src:(c=_.weaponTypes)==null?void 0:c[t],size:2}),label:e("strong",{children:a})},t)})]})}),e(h,{bgt:"light",children:r(x,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:g,to:"/artifacts",children:[e(d,{label:r("strong",{children:[n("ui:tabs.artifacts")," ",i]}),icon:e(X,{}),sx:{flexBasis:s?"100%":"auto",flexGrow:1,cursor:"pointer"},color:i?"primary":"secondary"}),Object.entries(b).map(([t,a])=>e(d,{sx:{flexGrow:1,cursor:"pointer"},color:a?"success":"secondary",icon:e(J,{slotKey:t}),label:e("strong",{children:a})},t))]})})]})]})}function M(){const n=G(),[{timeZoneKey:o,resin:u,resinDate:f},T]=p.useState(()=>n.displayTool.get());p.useEffect(()=>n.displayTool.follow((s,t)=>T(t)),[n]);const[y,b]=p.useState(new Date(Date.now()+I[o]));p.useEffect(()=>{const s=()=>(b(new Date(Date.now()+I[o])),setTimeout(()=>{t=s()},j-Date.now()%j));let t=s();return()=>clearTimeout(t)},[o]);const i=p.useRef(void 0),v=s=>{s>=m?(i.current&&clearTimeout(i.current),i.current=void 0):i.current=setTimeout(()=>console.log("set resin",s+1),S),n.displayTool.set({resin:s,resinDate:new Date().getTime()})};return p.useEffect(()=>{if(u<m){const s=Date.now(),t=m-u,a=Math.min(Math.floor((s-f)/S),t),c=u+a,l=f+a*S;n.displayTool.set({resin:c,resinDate:l}),c<m&&(i.current=setTimeout(()=>v(c+1),s-l))}return()=>i.current&&clearTimeout(i.current)},[n]),r(h,{children:[e(K,{title:r(w,{variant:"h5",children:[o," ",y.toLocaleTimeString([],{timeZone:"UTC"})]}),avatar:e(te,{fontSize:"large"})}),e(z,{}),e(E,{children:e(h,{bgt:"light",children:e(x,{sx:{p:2},component:g,to:"/tools",children:r(w,{variant:"h2",sx:{textAlign:"center"},children:[e(L,{src:_.resin.fragile}),r("span",{children:[u,"/",m]})]})})})})]})}function oe(){const n=k(),o=B(n.breakpoints.up("lg"));return Y.send({hitType:"pageview",page:"/home"}),o?r(D,{container:!0,spacing:2,direction:"row-reverse",children:[r(D,{item:!0,xs:12,lg:5,xl:4,sx:{display:"flex",flexDirection:"column",gap:2},children:[e(M,{}),e(ee,{dataAdSlot:"6687816711"})]}),r(D,{item:!0,xs:12,lg:7,xl:8,sx:{display:"flex",flexDirection:"column",gap:2},children:[e(R,{}),e(A,{})]})]}):r($,{my:1,display:"flex",flexDirection:"column",gap:1,children:[e(R,{}),e(A,{}),e(M,{})]})}function R(){return e(h,{children:e(E,{children:r(w,{variant:"subtitle1",children:["The ",e("strong",{children:"ultimate"})," ",e("i",{children:"anime game"}),"calculator, LB will keep track of your artifact/weapon/character inventory, and help you create the best build based on how you play, with what you have."]})})})}export{oe as default};
