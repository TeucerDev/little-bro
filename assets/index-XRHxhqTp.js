import{a as W,bG as N,r,bA as Z,bH as ee,u as ae,be as te,ad as re,a2 as se,w as ne,af as ce,ag as oe,aD as C,ah as le,k as w,l as t,m as ie,G as o,aE as he,bI as ue,bJ as de,aG as pe,B as M,ak as ge,q as ye,ai as me,z as fe,N as D,bK as Ce,bL as j,bM as we,bN as be,e as xe,d as Te,g as Se,b as ke,bg as ve,bO as Ee,bP as Ke}from"./index-BkQk_ytm.js";import{C as Me}from"./CharacterEditor-C0XbpK5R.js";import"./Settings-CSD-a6Vp.js";import"./TeamCard-YyK_abak.js";function De(){const a=W(),l=N();return r.useCallback(u=>{a.chars.get(u)||a.chars.getWithInitWeapon(u),l(`/characters/${u}`)},[l,a])}const We={xs:1,sm:2,md:3,lg:4,xl:4},Ne={xs:5,sm:8,md:9,lg:12,xl:12},je=Object.keys(j);function Oe(){const a=W(),l=N(),{params:{characterKey:i}}=Z({path:"/characters/:characterKey",end:!1})??{params:{}},u=r.useMemo(()=>i?ee(i)?(a.chars.get(i)||a.chars.getWithInitWeapon(i),i):(l("/characters"),null):null,[i,l,a]),{t:d}=ae(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:y}=r.useContext(te),[b,x]=r.useState(()=>a.displayCharacter.get());r.useEffect(()=>a.displayCharacter.follow((e,n)=>x(n)),[a,x]);const[T,F]=r.useState(""),S=r.useDeferredValue(T),I=re(),[A,k]=r.useState(!1),[G,p]=se();r.useEffect(()=>(ne.send({hitType:"pageview",page:"/characters"}),a.chars.followAny((e,n)=>(n==="new"||n==="remove")&&p())),[p,a]),r.useEffect(()=>a.charMeta.followAny(e=>p()),[p,a]);const O=De(),v=r.useDeferredValue(b),E=r.useDeferredValue(G),{charKeys:s,totalCharNum:m}=r.useMemo(()=>{const n=a.chars.keys.length,{element:h,weaponType:c,rarity:g,sortType:Q,ascending:X}=v,Y=a.chars.keys.filter(ce({element:h,weaponType:c,rarity:g,name:S},we(a,y))).sort(oe(j[Q]??[],X,be(a,y),["new","favorite"]));return E&&{charKeys:Y,totalCharNum:n}},[a,v,S,y,E]),{weaponType:P,element:_,rarity:z,sortType:B,ascending:R}=b,$=r.useMemo(()=>C(Te,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=a.weapons.get(h.equippedWeapon);if(!c)return;const g=xe(c.key).weaponType;e[g].total++,s.includes(n)&&e[g].current++})),[a,s]),H=r.useMemo(()=>C(ke,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=Se(h.key);e[c].total++,s.includes(n)&&e[c].current++})),[a,s]),U=r.useMemo(()=>C(Ee,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=ve(h.key).rarity;e[c].total++,s.includes(n)&&e[c].current++})),[a,s]),{numShow:K,setTriggerElement:V}=le(Ne[I],s.length),f=r.useMemo(()=>s.slice(0,K),[s,K]),q=s.length!==m?`${s.length}/${m}`:`${m}`,J={numShowing:f.length,total:q,t:d,namespace:"page_character"},L={sortKeys:[...je],value:B,onChange:e=>a.displayCharacter.set({sortType:e}),ascending:R,onChangeAsc:e=>a.displayCharacter.set({ascending:e})};return w(M,{my:1,display:"flex",flexDirection:"column",gap:1,children:[u&&t(Me,{characterKey:u,onClose:()=>l("/characters")}),t(r.Suspense,{fallback:!1,children:t(Ke,{newFirst:!0,show:A,onHide:()=>k(!1),onSelect:O})}),t(ye,{children:w(ie,{sx:{display:"flex",flexDirection:"column",gap:1},children:[w(o,{container:!0,spacing:1,children:[t(o,{item:!0,children:t(he,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({weaponType:e}),value:P,totals:$,size:"small"})}),t(o,{item:!0,children:t(ue,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({element:e}),value:_,totals:H,size:"small"})}),t(o,{item:!0,children:t(de,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({rarity:e}),value:z,totals:U,size:"small"})}),t(o,{item:!0,flexGrow:1}),t(o,{item:!0,children:t(pe,{autoFocus:!0,value:T,onChange:e=>F(e.target.value),label:d("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),t(M,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(ge,{showingTextProps:J,sortByButtonProps:L})})]})}),t(fe,{fullWidth:!0,onClick:()=>k(!0),color:"info",startIcon:t(me,{}),children:d`addNew`}),t(r.Suspense,{fallback:t(D,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(o,{container:!0,spacing:1,columns:We,children:f.map(e=>t(o,{item:!0,xs:1,children:t(Ce,{characterKey:e,onClick:()=>l(`${e}`),hideStats:!0})},e))})}),s.length!==f.length&&t(D,{ref:e=>{e&&V(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{Oe as default};
