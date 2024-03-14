import{g as T,h as W,k as e,a2 as L,i as t,l as S,B as r,e as z,ct as k,cs as I,u as U,a as J,r as h,v as P,aX as Q,T as p,bI as V,C as X,aN as q,s as C,z as E,m as Y}from"./index-9c4f648f.js";import{d as Z,e as ee,h as ae}from"./StarDisplay-7421eee5.js";import{T as B,S as M,h as _}from"./SolidToggleButtonGroup-70213330.js";import{I as A,i as N}from"./ColoredText-d1deb99d.js";import{w as ne,x as se,u as y,y as te,n as oe,C as ie}from"./index-46e46301.js";import{u as re}from"./useWeapon-2a1cd4a4.js";import{C as le,L as ce,a as pe,b as de,d as ue}from"./ConditionalWrapper-ce33c3b9.js";import{g as me}from"./index-a4c7472a.js";const he=_([...L]);function We({value:a,totals:s,onChange:d,...u}){const g=T(),c=!W(g.breakpoints.up("sm"));return e(M,{exclusive:!0,value:a,...u,children:L.map(o=>e(B,{value:o,sx:{p:c?1:void 0,minWidth:c?0:"6em",display:"flex",gap:c?0:1},onClick:()=>d(he(a,o)),children:t(r,{display:"flex",children:[e("strong",{children:o}),e(Z,{}),e(S,{label:s[o],size:"small"})]})},o))})}const ge=_([...z]);function Le({value:a,totals:s,onChange:d,...u}){const g=T(),c=!W(g.breakpoints.up("sm"));return e(M,{exclusive:!0,value:a,...u,children:z.map(o=>{var m;return t(B,{value:o,sx:{p:c?1:void 0,minWidth:c?0:"6em",display:"flex",gap:c?0:1},onClick:()=>d(ge(a,o)),children:[e(A,{src:(m=N.weaponTypes)==null?void 0:m[o],size:2,sideMargin:!0}),e(S,{label:s[o],size:"small"})]},o)})})}function Se(){return{level:a=>a.level*(a.ascension+1),rarity:a=>k.weapon.data[a.key].rarity,name:a=>I.t(`weaponNames_gen:${a.key}`)}}function ze(){return{rarity:(a,s)=>s.includes(k.weapon.data[a.key].rarity),weaponType:(a,s)=>s.includes(k.weapon.data[a.key].weaponType),name:(a,s)=>I.t(`weaponNames_gen:${a.key}`).toLowerCase().includes(s.toLowerCase())}}const Ie={name:["name"],level:["level","rarity","name"],rarity:["rarity","level","name"]};function Be({weaponId:a,onClick:s,onEdit:d,onDelete:u,canEquip:g=!1,extraButtons:c}){const{t:o}=U(["page_weapon","ui"]),m=J(),l=re(a),i=l!=null&&l.key?me(l.key):void 0,j=h.useCallback(n=>n.weaponTypeKey===(i==null?void 0:i.weaponType),[i]),D=h.useCallback(n=>e(ie,{onClick:()=>s==null?void 0:s(a),children:n}),[s,a]),$=h.useCallback(n=>e(r,{children:n}),[]),F=h.useCallback(n=>a&&m.weapons.set(a,{location:n}),[m,a]),f=h.useMemo(()=>i&&l&&ne([i.data,se(l)]),[i,l]);if(!l||!i||!f)return null;const{level:K,ascension:v,refinement:O,id:x,location:b="",lock:w}=l,R=f.get(y.weapon.type).value,G=[y.weapon.main,y.weapon.sub,y.weapon.sub2].map(n=>f.get(n)),H=te(l.key,v>=2);return e(h.Suspense,{fallback:e(P,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:t(Y,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[t(le,{condition:!!s,wrapper:D,falseWrapper:$,children:[t(r,{className:`grad-${i.rarity}star`,sx:{position:"relative",pt:2,px:2},children:[!s&&e(Q,{color:"primary",onClick:()=>m.weapons.set(x,{lock:!w}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:w?e(ce,{}):e(pe,{})}),t(r,{sx:{position:"relative",zIndex:1},children:[t(r,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[e(A,{size:2,src:N.weaponTypes[R]}),e(p,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:e("strong",{children:i.name})})]}),t(p,{component:"span",variant:"h5",children:["Lv. ",K]}),t(p,{component:"span",variant:"h5",color:"text.secondary",children:["/",V[v]]}),t(p,{variant:"h6",children:["Refinement ",e("strong",{children:O})]}),e(ee,{stars:i.rarity,colored:!0})]}),e(r,{sx:{height:"100%",position:"absolute",right:0,top:0},children:e(r,{component:"img",src:H??"",width:"auto",height:"100%",sx:{float:"right"}})})]}),e(X,{children:G.map(n=>n.info.name?t(r,{sx:{display:"flex"},children:[t(p,{flexGrow:1,children:[n.info.icon," ",n.info.name]}),e(p,{children:oe(n)})]},JSON.stringify(n.info)):null)})]}),t(r,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[e(r,{sx:{flexGrow:1},children:g?e(de,{location:b,setLocation:F,filter:j,autoCompleteProps:{getOptionDisabled:n=>!n.key}}):e(ae,{location:b})}),t(r,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[!!d&&e(q,{title:e(p,{children:o`page_weapon:edit`}),placement:"top",arrow:!0,children:e(C,{color:"info",size:"small",onClick:()=>d(x),children:e(ue,{})})}),!!u&&e(C,{color:"error",size:"small",onClick:()=>u(x),disabled:!!b||w,children:e(E,{})}),c]})]})]})})}export{Le as W,We as a,Be as b,ze as c,Se as d,Ie as w};
