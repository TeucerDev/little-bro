import{v as j,a as R,r as t,aW as P,aX as ie,b as e,d as l,G as h,T as U,ac as k,a3 as T,ad as ce,f as z,an as A,J as H,aY as O,aZ as re,a_ as de,a$ as pe,b0 as ue,ah as Q,ai as X,M as N,b1 as he,b2 as me,B as fe,b3 as ye,K as Y,h as Z,b4 as ge,A as V,z as we,b5 as We,ag as ke,af as L,b6 as be,ak as xe,a0 as Te,at as Se,b7 as Ce,aw as ve,ax as Ie,ay as qe,b8 as Ee,aC as Ke,az as De,b9 as _e,ba as ee,bb as $e,bc as ze,bd as Be,be as Fe,S as J}from"./index-CjyoCtEx.js";const ne=["locked","unlocked"],Me=ge([...ne]);function Ae({numShowing:u,total:n,weaponIds:c}){const{t:d}=j(["page_weapon","ui"]),a=R(),[g,I]=t.useState(a.displayWeapon.get());t.useEffect(()=>{a.displayWeapon.follow((s,r)=>I(r))},[a]);const{weaponType:q,rarity:D,locked:p,showEquipped:i,showInventory:S,locations:E}=g,w=t.useMemo(()=>P(we,s=>a.weapons.entries.forEach(([r,b])=>{const f=V(b.key).weaponType;s[f].total++,c.includes(r)&&s[f].current++})),[a,c]),W=t.useMemo(()=>P(We,s=>a.weapons.entries.forEach(([r,b])=>{const f=V(b.key).rarity;s[f].total++,c.includes(r)&&s[f].current++})),[a,c]),{lockedTotal:K,equippedTotal:C,locationTotal:_}=t.useMemo(()=>{const s={lockedTotal:["locked","unlocked"],equippedTotal:["equipped","unequipped"],locationTotal:[...be,""]};return ie(s,r=>a.weapons.entries.forEach(([b,f])=>{const v=f.location,m=f.lock?"locked":"unlocked",x=v?"equipped":"unequipped";r.lockedTotal[m].total++,r.equippedTotal[x].total++,r.locationTotal[v].total++,c.includes(b)&&(r.lockedTotal[m].current++,r.equippedTotal[x].current++,r.locationTotal[v].current++)}))},[a,c]);return e(Z,{children:l(Y,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(h,{container:!0,children:[e(h,{item:!0,children:e(U,{variant:"h6",children:e(k,{t:d,i18nKey:"weaponFilter",children:"Weapon Filter"})})}),e(h,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:l(U,{children:[e("strong",{children:u})," / ",n]})}),e(h,{item:!0,children:e(T,{size:"small",color:"error",onClick:()=>a.displayWeapon.set({action:"reset"}),startIcon:e(ce,{}),children:e(k,{t:d,i18nKey:"ui:reset"})})})]}),e(z,{children:l(h,{container:!0,spacing:1,children:[l(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",children:[e(k,{t:d,i18nKey:"subheadings.general"}),l(A,{spacing:1,children:[e(H,{sx:{bgcolor:O.palette.contentNormal.light}}),e(re,{fullWidth:!0,onChange:s=>a.displayWeapon.set({weaponType:s}),value:q,totals:w,size:"small"}),e(de,{sx:{height:"100%"},fullWidth:!0,onChange:s=>a.displayWeapon.set({rarity:s}),value:D,totals:W,size:"small"})]})]}),e(h,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:l(z,{children:[e(k,{t:d,i18nKey:"subheadings.inventory"}),l(A,{spacing:1,children:[e(H,{sx:{bgcolor:O.palette.contentNormal.light}}),e(pe,{fullWidth:!0,value:p,size:"small",children:ne.map((s,r)=>l(ue,{value:s,sx:{display:"flex",gap:1},onClick:()=>a.displayWeapon.set({locked:Me(p,s)}),children:[r?e(Q,{}):e(X,{}),e(k,{t:d,i18nKey:`ui:${s}`}),e(N,{label:K[r?"unlocked":"locked"],size:"small"})]},s))}),l(T,{startIcon:e(he,{}),color:S?"success":"secondary",onClick:()=>a.displayWeapon.set({showInventory:!S}),children:[d`weaponInInv`," ",e(N,{sx:{ml:1},label:C.unequipped,size:"small"})]}),l(T,{startIcon:e(me,{}),color:i?"success":"secondary",onClick:()=>a.displayWeapon.set({showEquipped:!i}),children:[d`equippedWeapon`," ",e(N,{sx:{ml:1},label:C.equipped,size:"small"})]})]}),e(A,{spacing:1.5,pt:1.5,children:e(t.Suspense,{fallback:null,children:e(fe,{title:i?d`locationsTooltip`:"",placement:"top",children:e("span",{children:e(ye,{totals:_,locations:i?[]:E,setLocations:s=>a.displayWeapon.set({locations:s}),disabled:i})})})})})]})})]})})]})})}function Ne({weaponIds:u}){const{t:n}=j(["page_weapon","ui"]),c=R(),{numDelete:d,numUnlock:a,numLock:g}=t.useMemo(()=>{const p=u.map(w=>c.weapons.get(w)),i=p.reduce((w,W)=>w+(W.lock?0:1),0),S=p.length-i;return{numDelete:p.reduce((w,W)=>w+(W.lock||W.location?0:1),0),numUnlock:i,numLock:S}},[u,c]);return l(h,{container:!0,spacing:1,alignItems:"center",children:[e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!d,onClick:()=>window.confirm(`Are you sure you want to delete ${d} weapons?`)&&u.map(p=>{const i=c.weapons.get(p);!(i!=null&&i.lock)&&!(i!=null&&i.location)&&c.weapons.remove(p)}),startIcon:e(ke,{}),children:[e(k,{t:n,i18nKey:"button.deleteWeapons",children:"Delete Weapons"}),e(L,{sx:{ml:1},color:d?"success":"secondary",children:d})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!g,onClick:()=>window.confirm(`Are you sure you want to unlock ${g} weapons ?`)&&u.map(p=>c.weapons.set(p,{lock:!1})),startIcon:e(Q,{}),children:[e(k,{t:n,i18nKey:"button.unlockWeapons",children:"Unlock Weapons"}),e(L,{sx:{ml:1},color:g?"success":"secondary",children:g})]})}),e(h,{item:!0,xs:16,sm:8,md:4,children:l(T,{fullWidth:!0,color:"error",disabled:!a,onClick:()=>window.confirm(`Are you sure you want to lock ${a} weapons ?`)&&u.map(p=>c.weapons.set(p,{lock:!0})),startIcon:e(X,{}),children:[e(k,{t:n,i18nKey:"button.lockWeapons",children:"Lock Weapons"}),e(L,{sx:{ml:1},color:a?"success":"secondary",children:a})]})}),e(h,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:e(U,{variant:"caption",color:"text.secondary",children:l(k,{t:n,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",e("b",{children:"currently filtered weapons"})]})})})]})}const Le={xs:1,sm:2,md:3,lg:3,xl:4},Ue={xs:10,sm:12,md:24,lg:24,xl:24},je=Object.keys(ee);function Ge(){const{t:u}=j(["page_weapon","ui","weaponNames_gen"]),n=R(),[c,d]=t.useState(n.displayWeapon.get());t.useEffect(()=>n.displayWeapon.follow((o,y)=>d(y)),[n]);const[a,g]=t.useState(!1),[I,q]=xe();t.useEffect(()=>(Te.send({hitType:"pageview",page:"/weapon"}),n.weapons.followAny((o,y)=>(y==="new"||y==="remove"||y==="update")&&q())),[q,n]);const D=Se(),p=t.useCallback(async o=>{const y=n.weapons.get(o);if(!y)return;const M=u(`weaponNames_gen:${y.key}`);window.confirm(u("removeWeapon",{value:M}))&&(n.weapons.remove(o),c.editWeaponId===o&&n.displayWeapon.set({editWeaponId:""}))},[c.editWeaponId,n,u]),i=t.useCallback(o=>{n.displayWeapon.set({editWeaponId:o})},[n]),S=t.useCallback(o=>{i(n.weapons.new(Ce(o)))},[n,i]),[E,w]=t.useState(""),W=t.useDeferredValue(E),{sortType:K,ascending:C,weaponType:_,rarity:s,locked:r,showEquipped:b,showInventory:f,locations:v}=c,{weaponIds:m,totalWeaponNum:x}=t.useMemo(()=>{const o=n.weapons.values,y=o.length,M=o.filter(ve({weaponType:_,rarity:s,name:W,locked:r,showInventory:f,showEquipped:b,locations:v},$e())).sort(Ie(ee[K]??[],C,ze())).map(le=>le.id);return I&&{weaponIds:M,totalWeaponNum:y}},[I,n,K,C,s,_,r,f,b,v,W]),{numShow:G,setTriggerElement:oe}=qe(Ue[D],m.length),B=t.useMemo(()=>m.slice(0,G),[m,G]),ae=m.length!==x?`${m.length}/${x}`:`${x}`,F=t.useCallback(()=>n.displayWeapon.set({editWeaponId:""}),[n]),{editWeaponId:$}=c;t.useEffect(()=>{$&&(n.weapons.get($)||F())},[n,$,F]);const te={numShowing:B.length,total:ae,t:u,namespace:"page_weapon"},se={sortKeys:[...je],value:K,onChange:o=>n.displayWeapon.set({sortType:o}),ascending:C,onChangeAsc:o=>n.displayWeapon.set({ascending:o})};return l(z,{display:"flex",flexDirection:"column",gap:1,children:[e(t.Suspense,{fallback:!1,children:e(Be,{show:a,onHide:()=>g(!1),onSelect:S})}),e(t.Suspense,{fallback:!1,children:e(Fe,{weaponId:$,footer:!0,onClose:F})}),e(Ae,{numShowing:m.length,total:x,weaponIds:m}),e(Z,{children:l(Y,{sx:{display:"flex",flexDirection:"column",gap:1},children:[l(z,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[e(Ee,{autoFocus:!0,size:"small",value:E,onChange:o=>w(o.target.value),label:u("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}}),e(Ke,{showingTextProps:te,sortByButtonProps:se})]}),e(Ne,{weaponIds:m})]})}),l(t.Suspense,{fallback:e(J,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}}),children:[e(T,{fullWidth:!0,onClick:()=>g(!0),color:"info",startIcon:e(De,{}),children:u("page_weapon:addWeapon")}),e(h,{container:!0,spacing:1,columns:Le,children:B.map(o=>e(h,{item:!0,xs:1,children:e(_e,{weaponId:o,onDelete:p,onEdit:i,canEquip:!0})},o))})]}),m.length!==B.length&&e(J,{ref:o=>{o&&oe(o)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Ge as default};
