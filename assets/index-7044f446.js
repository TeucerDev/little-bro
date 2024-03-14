import{u as V,a as H,r as t,E as L,p as q,a1 as Q,i as d,k as o,C as J,B as u,n as X,s as Y,G as I,K as Z,_ as D,e as ee,a2 as ae,v as E}from"./index-9c4f648f.js";import{u as te,f as oe,s as ne,a as se,T as re,S as le}from"./StarDisplay-7421eee5.js";import{W as ie,a as pe,b as ce,w as A,c as de,d as ue}from"./WeaponCard-9335d5b3.js";import{g as k}from"./index-a4c7472a.js";import{c as M}from"./totalUtils-3ee34d6f.js";import{A as me}from"./ConditionalWrapper-ce33c3b9.js";import"./DropdownButton-d77412d0.js";import"./ColoredText-d1deb99d.js";import"./index-46e46301.js";import"./SolidToggleButtonGroup-70213330.js";import"./useWeapon-2a1cd4a4.js";const we=Z.lazy(()=>D(()=>import("./WeaponSelectionModal-fc123cef.js"),["./WeaponSelectionModal-fc123cef.js","./index-9c4f648f.js","./index-f8f225f9.css","./index-46e46301.js","./ColoredText-d1deb99d.js","./index-a4c7472a.js","./totalUtils-3ee34d6f.js","./CloseButton-6fbdd333.js","./StarDisplay-7421eee5.js","./DropdownButton-d77412d0.js","./WeaponCard-9335d5b3.js","./SolidToggleButtonGroup-70213330.js","./useWeapon-2a1cd4a4.js","./ConditionalWrapper-ce33c3b9.js"],import.meta.url)),fe=t.lazy(()=>D(()=>import("./WeaponEditor-40ac0aa2.js").then(r=>r.e),["./WeaponEditor-40ac0aa2.js","./index-9c4f648f.js","./index-f8f225f9.css","./index-46e46301.js","./ColoredText-d1deb99d.js","./useWeapon-2a1cd4a4.js","./StarDisplay-7421eee5.js","./DropdownButton-d77412d0.js","./ConditionalWrapper-ce33c3b9.js","./CloseButton-6fbdd333.js","./DataContext-97d19631.js","./InfoTooltip-657b87ed.js","./BootstrapTooltip-fc59917c.js","./index-a4c7472a.js","./CardHeader-0a0f5f99.js"],import.meta.url)),ge={xs:1,sm:2,md:3,lg:3,xl:4},he={xs:10,sm:12,md:24,lg:24,xl:24},ye=Object.keys(A);function Me(){const{t:r}=V(["page_weapon","ui","weaponNames_gen"]),a=H(),[p,P]=t.useState(a.displayWeapon.get());t.useEffect(()=>a.displayWeapon.follow((e,n)=>P(n)),[a]);const[R,S]=t.useState(!1),[T,C]=L();t.useEffect(()=>(q.send({hitType:"pageview",page:"/weapon"}),a.weapons.followAny((e,n)=>(n==="new"||n==="remove")&&C())),[C,a]);const j=te(),F=t.useCallback(async e=>{const n=a.weapons.get(e);if(!n)return;const l=r(`weaponNames_gen:${n.key}`);window.confirm(r("removeWeapon",{value:l}))&&(a.weapons.remove(e),p.editWeaponId===e&&a.displayWeapon.set({editWeaponId:""}))},[p.editWeaponId,a,r]),m=t.useCallback(e=>{a.displayWeapon.set({editWeaponId:e})},[a]),N=t.useCallback(e=>{m(a.weapons.new(Q(e)))},[a,m]),[b,O]=t.useState(""),_=t.useDeferredValue(b),{sortType:w,ascending:f,weaponType:g,rarity:h}=p,{weaponIds:s,totalWeaponNum:y}=t.useMemo(()=>{const e=a.weapons.values,n=e.length,l=e.filter(oe({weaponType:g,rarity:h,name:_},de())).sort(ne(A[w]??[],f,ue())).map(i=>i.id);return T&&{weaponIds:l,totalWeaponNum:n}},[T,a,w,f,h,g,_]),{numShow:v,setTriggerElement:z}=se(he[j],s.length),W=t.useMemo(()=>s.slice(0,v),[s,v]),B=s.length!==y?`${s.length}/${y}`:`${y}`,x=t.useCallback(()=>a.displayWeapon.set({editWeaponId:""}),[a]),{editWeaponId:c}=p;t.useEffect(()=>{c&&(a.weapons.get(c)||x())},[a,c,x]);const K=t.useMemo(()=>M(ee,e=>Object.entries(a.weapons.data).forEach(([n,l])=>{const i=k(l.key).weaponType;e[i].total++,s.includes(n)&&e[i].current++})),[a,s]),G=t.useMemo(()=>M(ae,e=>Object.entries(a.weapons.data).forEach(([n,l])=>{const i=k(l.key).rarity;e[i].total++,s.includes(n)&&e[i].current++})),[a,s]),$={numShowing:W.length,total:B,t:r,namespace:"page_weapon"},U={sortKeys:[...ye],value:w,onChange:e=>a.displayWeapon.set({sortType:e}),ascending:f,onChangeAsc:e=>a.displayWeapon.set({ascending:e})};return d(u,{my:1,display:"flex",flexDirection:"column",gap:1,children:[o(t.Suspense,{fallback:!1,children:o(we,{show:R,onHide:()=>S(!1),onSelect:N})}),o(t.Suspense,{fallback:!1,children:o(fe,{weaponId:c,footer:!0,onClose:x})}),o(X,{children:d(J,{sx:{display:"flex",flexDirection:"column",gap:1},children:[d(u,{display:"flex",flexWrap:"wrap",gap:1,alignItems:"stretch",children:[o(ie,{onChange:e=>a.displayWeapon.set({weaponType:e}),value:g,totals:K,size:"small"}),o(pe,{sx:{height:"100%"},onChange:e=>a.displayWeapon.set({rarity:e}),value:h,totals:G,size:"small"}),o(u,{flexGrow:1}),o(re,{autoFocus:!0,size:"small",value:b,onChange:e=>O(e.target.value),label:r("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})]}),o(u,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:o(le,{showingTextProps:$,sortByButtonProps:U})})]})}),d(t.Suspense,{fallback:o(E,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[o(Y,{fullWidth:!0,onClick:()=>S(!0),color:"info",startIcon:o(me,{}),children:r("page_weapon:addWeapon")}),o(I,{container:!0,spacing:1,columns:ge,children:W.map(e=>o(I,{item:!0,xs:1,children:o(ce,{weaponId:e,onDelete:F,onEdit:m,canEquip:!0})},e))})]}),s.length!==W.length&&o(E,{ref:e=>{e&&z(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Me as default};
