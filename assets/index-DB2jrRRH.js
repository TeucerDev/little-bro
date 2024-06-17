import{c as Z,j as q,u as F,a as A,g as O,b as e,d as a,C as v,T as S,B as U,e as Q,f as j,G as k,h as T,i as X,k as J,l as Y,r as x,D as ee,S as te,m as ae,n as re,o as se,p as ne,q as oe,s as ce,t as ie,v as le,w as de,x as B,y as he,z as ue,A as pe,E as me,F as W,H as z,I as P,J as N,K as $,L as I,M as w,P as fe,N as ge,O as xe,Q as K,R as V,U as ye,V as be,W as Ce,X as Te,Y as we,Z as G,_ as D,$ as R,a0 as ve}from"./index-CjyoCtEx.js";import{h as Se,C as Ee,B as ke,A as De}from"./CharacterCardPico-Cm5UGwDc.js";import{u as Ie}from"./useTeamChar-B6yWRGkx.js";import{d as je,R as M}from"./AccessTimeFilled-C6uMZKKY.js";const Ae=Z(q.jsx("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter");function Be({teamId:s,onClick:u,hoverCard:o=!1,bgt:m}){const y=F(s),{name:E,description:c,loadoutData:p}=y,b=A(),l=p.map(n=>{if(!n)return;const h=b.teamChars.get(n.teamCharId);if(h)return O(h.key)});return e(T,{bgt:m,sx:{height:"100%"},children:a(j,{sx:n=>({height:"100%",display:"flex",flexDirection:"column",background:`linear-gradient(to right, ${l.map(d=>{if(!d)return"rgba(0,0,0,0)";const i=n.palette[d].main,f=Se(i);return f?`rgba(${f.r},${f.g},${f.b},0.25)`:"rgba(0,0,0,0)"}).map((d,i)=>`${d} ${i*25+12.5}%`).join(", ")})`}),children:[e(v,{onClick:()=>u(),sx:{p:1},children:a(S,{sx:{display:"flex",gap:1},children:[e("span",{children:E})," ",c&&e(U,{title:e(S,{children:c}),children:e(Q,{})})]})}),e(j,{sx:{p:1,marginTop:"auto"},children:e(k,{container:!0,columns:4,spacing:1,children:p.map((n,h)=>{var f;const d=n==null?void 0:n.teamCharId,i=d&&((f=b.teamChars.get(d))==null?void 0:f.key);return e(k,{item:!0,xs:1,height:"100%",children:i?e(v,{onClick:()=>u(i),children:e(Ee,{characterKey:i,hoverChild:o&&e(Me,{characterKey:i,teamCharId:d,teamId:s}),hideFav:!0})}):e(v,{onClick:()=>u(),children:e(ke,{index:h})})},h)})})})]})})}function Me({characterKey:s,teamId:u,teamCharId:o}){var f;const m=A(),y=X(s),{name:E}=Ie(o),c=m.teams.getLoadoutDatum(u,o),p=m.teams.getActiveBuildName(c),b=m.teams.getLoadoutWeapon(c),l=(()=>{const{buildType:t,buildTcId:r}=c;return t==="tc"&&r?J(m.buildTcs.get(r)):Object.values(m.teams.getLoadoutArtifacts(c)).filter(g=>g)})(),n=Y(s,void 0,l,b),h=(f=n==null?void 0:n[s])==null?void 0:f.target,d=x.useMemo(()=>y&&{character:y},[y]),i=x.useMemo(()=>h&&n&&{data:h,teamData:n},[h,n]);return!d||!i?null:e(ie.Provider,{value:d,children:e(ee.Provider,{value:i,children:e(j,{sx:{width:300,m:-1},children:e(x.Suspense,{fallback:e(te,{variant:"rectangular",width:"100%",height:300}),children:a(T,{children:[e(ae,{characterKey:s,children:e(re,{characterKey:s})}),a(j,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:[a(S,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(se,{}),e("span",{children:E})]}),a(S,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(ne,{}),e("span",{children:p})]}),(c==null?void 0:c.buildType)==="tc"&&(c!=null&&c.buildTcId)?e(oe,{weapon:b}):e(ce,{})]})]})})})})})}function L(){const{t:s}=le(["page_home","ui"]),u=de(),o=A(),{characterTally:m,characterTotal:y}=x.useMemo(()=>{const t=o.chars.keys,r=B(he,()=>0);return t.forEach(g=>{const C=O(g);r[C]=r[C]+1}),{characterTally:r,characterTotal:t.length}},[o]),{weaponTally:E,weaponTotal:c}=x.useMemo(()=>{const t=o.weapons.values,r=B(ue,()=>0);return t.forEach(g=>{const C=pe(g.key).weaponType;r[C]=r[C]+1}),{weaponTally:r,weaponTotal:t.length}},[o]),{artifactTally:p,artifactTotal:b}=x.useMemo(()=>{const t=B(me,()=>0),r=o.arts.values;return r.forEach(g=>{const C=g.slotKey;t[C]=t[C]+1}),{artifactTally:t,artifactTotal:r.length}},[o]),l=o.teams.keys.length,n=o.teamChars.keys.length,h=o.builds.keys.length+o.buildTcs.keys.length,d=W(),i=!z(d.breakpoints.up("md")),f=o.teams.entries.sort((t,r)=>{const[,g]=t,[,C]=r;return C.lastEdit-g.lastEdit}).map(([t])=>t).slice(0,6);return a(T,{children:[e(P,{title:e(S,{variant:"h5",children:s`inventoryCard.title`}),avatar:e(Ae,{fontSize:"large"})}),e(N,{}),a($,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(T,{bgt:"light",children:a(v,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:I,to:"/characters",children:[e(w,{label:a("strong",{children:[s("ui:tabs.characters")," ",y]}),icon:e(fe,{}),sx:{flexBasis:i?"100%":"auto",flexGrow:1,cursor:"pointer"},color:y?"primary":"secondary"}),Object.entries(m).map(([t,r])=>e(w,{sx:{flexGrow:1,cursor:"pointer"},color:r?t:"secondary",icon:e(ge,{ele:t}),label:e("strong",{children:r})},t))]})}),e(T,{bgt:"light",children:a(v,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:I,to:"/weapons",children:[e(w,{label:a("strong",{children:[s("ui:tabs.weapons")," ",c]}),icon:e(xe,{}),sx:{flexBasis:i?"100%":"auto",flexGrow:1,cursor:"pointer"},color:c?"primary":"secondary"}),Object.entries(E).map(([t,r])=>{var g;return e(w,{sx:{flexGrow:1,cursor:"pointer"},color:r?"success":"secondary",icon:e(K,{src:(g=V.weaponTypes)==null?void 0:g[t],size:2}),label:e("strong",{children:r})},t)})]})}),e(T,{bgt:"light",children:a(v,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:I,to:"/artifacts",children:[e(w,{label:a("strong",{children:[s("ui:tabs.artifacts")," ",b]}),icon:e(ye,{}),sx:{flexBasis:i?"100%":"auto",flexGrow:1,cursor:"pointer"},color:b?"primary":"secondary"}),Object.entries(p).map(([t,r])=>e(w,{sx:{flexGrow:1,cursor:"pointer"},color:r?"success":"secondary",icon:e(be,{slotKey:t}),label:e("strong",{children:r})},t))]})}),a(T,{bgt:"light",children:[a(v,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:I,to:"/teams",children:[e(w,{sx:{flexGrow:1,cursor:"pointer"},color:l?"success":"secondary",icon:e(Ce,{}),label:a("strong",{children:[s("ui:tabs.teams")," ",l]})}),e(w,{sx:{flexGrow:1,cursor:"pointer"},color:n?"success":"secondary",icon:e(Te,{}),label:a("strong",{children:[s("ui:tabs.loadouts")," ",n]})}),e(w,{sx:{flexGrow:1,cursor:"pointer"},color:h?"success":"secondary",icon:e(we,{}),label:a("strong",{children:[s("ui:tabs.builds")," ",h]})})]}),e(k,{container:!0,columns:{xs:1,sm:2},sx:{px:1,pb:1},spacing:1,children:f.map(t=>e(k,{item:!0,xs:1,children:e(Be,{teamId:t,onClick:r=>u(r?`/teams/${t}/${r}`:`/teams/${t}`)})},t))})]})]})]})}function _(){const s=A(),[{timeZoneKey:u,resin:o,resinDate:m},y]=x.useState(()=>s.displayTool.get());x.useEffect(()=>s.displayTool.follow((l,n)=>y(n)),[s]);const[E,c]=x.useState(new Date(Date.now()+G[u]));x.useEffect(()=>{const l=()=>(c(new Date(Date.now()+G[u])),setTimeout(()=>{n=l()},R-Date.now()%R));let n=l();return()=>clearTimeout(n)},[u]);const p=x.useRef(void 0),b=l=>{l>=D?(p.current&&clearTimeout(p.current),p.current=void 0):p.current=setTimeout(()=>console.log("set resin",l+1),M),s.displayTool.set({resin:l,resinDate:new Date().getTime()})};return x.useEffect(()=>{if(o<D){const l=Date.now(),n=D-o,h=Math.min(Math.floor((l-m)/M),n),d=o+h,i=m+h*M;s.displayTool.set({resin:d,resinDate:i}),d<D&&(p.current=setTimeout(()=>b(d+1),l-i))}return()=>p.current&&clearTimeout(p.current)},[s]),a(T,{children:[e(P,{title:a(S,{variant:"h5",children:[u," ",E.toLocaleTimeString([],{timeZone:"UTC"})]}),avatar:e(je,{fontSize:"large"})}),e(N,{}),e($,{children:e(T,{bgt:"light",children:e(v,{sx:{p:2},component:I,to:"/tools",children:a(S,{variant:"h2",sx:{textAlign:"center"},children:[e(K,{src:V.resin.fragile}),a("span",{children:[o,"/",D]})]})})})})]})}function _e(){const s=W(),u=z(s.breakpoints.up("lg"));return ve.send({hitType:"pageview",page:"/home"}),u?a(k,{container:!0,spacing:2,direction:"row-reverse",children:[a(k,{item:!0,xs:12,lg:5,xl:4,sx:{display:"flex",flexDirection:"column",gap:2},children:[e(_,{}),e(De,{dataAdSlot:"6687816711"})]}),a(k,{item:!0,xs:12,lg:7,xl:8,sx:{display:"flex",flexDirection:"column",gap:2},children:[e(H,{}),e(L,{})]})]}):a(j,{my:1,display:"flex",flexDirection:"column",gap:1,children:[e(H,{}),e(L,{}),e(_,{})]})}function H(){return e(T,{children:e($,{children:a(S,{variant:"subtitle1",children:["The ",e("strong",{children:"ultimate"})," ",e("i",{children:"anime game"}),"calculator, LB will keep track of your artifact/weapon/character inventory, and help you create the best build based on how you play, with what you have."]})})})}export{_e as default};
