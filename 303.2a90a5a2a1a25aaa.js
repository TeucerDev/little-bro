"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[303],{66615:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(6620),n=r(52322);const a=(0,o.Z)((0,n.jsx)("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter")},75213:(e,t,r)=>{r.d(t,{Z:()=>x});var o=r(7896),n=r(31461),a=r(2784),i=r(6277),s=r(69075),c=r(43853),l=r(65992),h=r(69222),u=r(15672);function Z(e){return(0,u.Z)("MuiCardActionArea",e)}const p=(0,h.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var d=r(94345),f=r(52322);const m=["children","className","focusVisibleClassName"],g=(0,l.ZP)(d.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${p.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${p.focusVisible} .${p.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}}))),y=(0,l.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})((({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}))),x=a.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardActionArea"}),{children:a,className:l,focusVisibleClassName:h}=r,u=(0,n.Z)(r,m),p=r,d=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},Z,t)})(p);return(0,f.jsxs)(g,(0,o.Z)({className:(0,i.Z)(d.root,l),focusVisibleClassName:(0,i.Z)(h,d.focusVisible),ref:t,ownerState:p},u,{children:[a,(0,f.jsx)(y,{className:d.focusHighlight,ownerState:p})]}))}))},24914:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$});var o=r(47746),n=r(86432),a=r(41075),i=r(67550),s=r(7671),c=r(62197),l=r(23119),h=r(61877),u=r(87985),Z=r(66615),p=r(91949),d=r(42523),f=r(56961),m=r(75213),g=r(66198),y=r(2784),x=r(21548),v=r(39857),w=r(79536),b=r(9510),T=r(67937),B=r(38502),C=r(26578),D=r(52972),X=r(13913),A=r(71026),k=r(51650),M=r(10002),V=r(25434),j=r(36893),H=r(41015),z=r(52903);let G,N=e=>e;function O(){const{t:e}=(0,x.$G)(["page_home","ui"]),{database:t}=(0,y.useContext)(k.t),{gender:r}=(0,M.Z)(),a=(0,V.Z)((()=>X.Z.getAll),[]),{characterTally:i,characterTotal:l}=(0,y.useMemo)((()=>{const e=t.chars.keys,o=(0,H.O)(j.N,(()=>0));return a&&e.forEach((e=>{const t=a(e,r).elementKey;o[t]=o[t]+1})),{characterTally:o,characterTotal:e.length}}),[t,a,r]),h=(0,V.Z)((()=>A.Z.getAll),[]),{weaponTally:O,weaponTotal:S}=(0,y.useMemo)((()=>{const e=t.weapons.values,r=(0,H.O)(j.yd,(()=>0));return h&&e.forEach((e=>{const t=h(e.key).weaponType;r[t]=r[t]+1})),{weaponTally:r,weaponTotal:e.length}}),[t,h]),{artifactTally:E,artifactTotal:L}=(0,y.useMemo)((()=>{const e=(0,H.O)(j.eV,(()=>0)),r=t.arts.values;return r.forEach((t=>{const r=t.slotKey;e[r]=e[r]+1})),{artifactTally:e,artifactTotal:r.length}}),[t]),P=(0,o.Z)(),R=!(0,n.Z)(P.breakpoints.up("md"));return(0,z.BX)(u.Z,{children:[(0,z.tZ)(d.Z,{title:(0,z.tZ)(c.Z,{variant:"h5",children:e(G||(G=N`inventoryCard.title`))}),avatar:(0,z.tZ)(Z.Z,{fontSize:"large"})}),(0,z.tZ)(f.Z,{}),(0,z.BX)(s.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,z.tZ)(T.Z,{children:(0,z.BX)(m.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:v.rU,to:"/characters",children:[(0,z.tZ)(g.Z,{label:(0,z.BX)("strong",{children:[e("ui:tabs.characters")," ",l]}),icon:(0,z.tZ)(p.Z,{}),sx:{flexBasis:R?"100%":"auto",flexGrow:1,cursor:"pointer"},color:l?"primary":"secondary"}),Object.entries(i).map((([e,t])=>(0,z.tZ)(g.Z,{sx:{flexGrow:1,cursor:"pointer"},color:t?e:"secondary",icon:(0,z.tZ)(B.Z,{icon:D.z[e]}),label:(0,z.tZ)("strong",{children:t})},e)))]})}),(0,z.tZ)(T.Z,{children:(0,z.BX)(m.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:v.rU,to:"/weapons",children:[(0,z.tZ)(g.Z,{label:(0,z.BX)("strong",{children:[e("ui:tabs.weapons")," ",S]}),icon:w.Z.svg.anvil,sx:{flexBasis:R?"100%":"auto",flexGrow:1,cursor:"pointer"},color:S?"primary":"secondary"}),Object.entries(O).map((([e,t])=>{var r;return(0,z.tZ)(g.Z,{sx:{flexGrow:1,cursor:"pointer"},color:t?"success":"secondary",icon:(0,z.tZ)(C.Z,{src:null==(r=w.Z.weaponTypes)?void 0:r[e],size:2}),label:(0,z.tZ)("strong",{children:t})},e)}))]})}),(0,z.tZ)(T.Z,{children:(0,z.BX)(m.Z,{sx:{display:"flex",justifyContent:"space-between",p:2,gap:1,flexWrap:"wrap"},component:v.rU,to:"/artifacts",children:[(0,z.tZ)(g.Z,{label:(0,z.BX)("strong",{children:[e("ui:tabs.artifacts")," ",L]}),icon:(0,z.tZ)(B.Z,{icon:b.xe.flower}),sx:{flexBasis:R?"100%":"auto",flexGrow:1,cursor:"pointer"},color:L?"primary":"secondary"}),Object.entries(E).map((([e,t])=>(0,z.tZ)(g.Z,{sx:{flexGrow:1,cursor:"pointer"},color:t?"success":"secondary",icon:(0,z.tZ)(B.Z,{icon:b.xe[e]}),label:(0,z.tZ)("strong",{children:t})},e)))]})})]})]})}var S=r(6620),E=r(52322);const L=(0,S.Z)((0,E.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"}),"AccessTimeFilled");var P=r(81624),R=r(74133),U=r(21940);function W(){const{database:e}=(0,y.useContext)(k.t),[{timeZoneKey:t,resin:r,resinDate:o},n]=(0,y.useState)((()=>e.displayTool.get()));(0,y.useEffect)((()=>e.displayTool.follow(((e,t)=>n(t)))),[e]);const[a,i]=(0,y.useState)(new Date(Date.now()+R.W3[t]));(0,y.useEffect)((()=>{const e=()=>(i(new Date(Date.now()+R.W3[t])),setTimeout((()=>{r=e()}),U.vL-Date.now()%U.vL));let r=e();return()=>clearTimeout(r)}),[t]);const l=(0,y.useRef)(void 0);return(0,y.useEffect)((()=>{if(r<P.nD){const t=Date.now(),n=P.nD-r,a=Math.min(Math.floor((t-o)/P.T5),n),i=r+a,s=o+a*P.T5;e.displayTool.set({resin:i,resinDate:s}),i<P.nD&&(l.current=setTimeout((()=>{return(t=i+1)>=P.nD?(l.current&&clearTimeout(l.current),l.current=void 0):l.current=setTimeout((()=>console.log("set resin",t+1)),P.T5),void e.displayTool.set({resin:t,resinDate:(new Date).getTime()});var t}),t-s))}return()=>l.current&&clearTimeout(l.current)}),[e]),(0,z.BX)(u.Z,{children:[(0,z.tZ)(d.Z,{title:(0,z.BX)(c.Z,{variant:"h5",children:[t," ",a.toLocaleTimeString([],{timeZone:"UTC"})]}),avatar:(0,z.tZ)(L,{fontSize:"large"})}),(0,z.tZ)(f.Z,{}),(0,z.tZ)(s.Z,{children:(0,z.tZ)(T.Z,{children:(0,z.tZ)(m.Z,{sx:{p:2},component:v.rU,to:"/tools",children:(0,z.BX)(c.Z,{variant:"h2",sx:{textAlign:"center"},children:[(0,z.tZ)(C.Z,{src:w.Z.resin.fragile}),(0,z.BX)("span",{children:[r,"/",P.nD]})]})})})})]})}function $(){const e=(0,o.Z)(),t=(0,n.Z)(e.breakpoints.up("lg"));return h.ZP.send({hitType:"pageview",page:"/home"}),t?(0,z.BX)(a.ZP,{container:!0,spacing:2,direction:"row-reverse",sx:{my:2},children:[(0,z.tZ)(a.ZP,{item:!0,xs:12,lg:5,xl:4,sx:{display:"flex",flexDirection:"column",gap:2},children:(0,z.tZ)(W,{})}),(0,z.BX)(a.ZP,{item:!0,xs:12,lg:7,xl:8,sx:{display:"flex",flexDirection:"column",gap:2},children:[(0,z.tZ)(K,{}),(0,z.tZ)(O,{})]})]}):(0,z.BX)(i.Z,{my:1,display:"flex",flexDirection:"column",gap:1,children:[(0,z.tZ)(K,{}),(0,z.tZ)(O,{}),(0,z.tZ)(W,{})]})}function K(){return(0,z.tZ)(u.Z,{children:(0,z.tZ)(s.Z,{children:(0,z.BX)(c.Z,{variant:"subtitle1",children:["The ",(0,z.tZ)("strong",{children:"ultimate"})," ",(0,z.tZ)(l.Z,{href:"https://genshin.mihoyo.com/",target:"_blank",rel:"noreferrer",children:(0,z.tZ)("i",{children:"Genshin Impact"})})," ","calculator, LB will keep track of your artifact/weapon/character inventory, and help you create the best build based on how you play, with what you have."]})})})}}}]);