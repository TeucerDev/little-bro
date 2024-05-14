import{a as D,bQ as N,r,bK as L,bR as ee,u as ae,bo as te,ab as re,a2 as se,w as ne,ae as ce,af as oe,aE as C,ag as le,k as w,l as t,m as ie,G as o,aH as he,bS as ue,bT as de,aT as pe,B as M,ak as ge,q as ye,ah as me,z as fe,N as W,bU as Ce,bV as j,bW as we,bX as be,e as Te,d as xe,g as Se,b as ke,bp as ve,bY as Ee,bZ as Ke}from"./index-DucSLQpH.js";import{C as Me}from"./CharacterEditor-CAKlLXwk.js";import"./TeamCard-CPdI2GNa.js";import"./Settings-C6golCrw.js";function We(){const a=D(),l=N();return r.useCallback(u=>{a.chars.get(u)||a.chars.getWithInitWeapon(u),l(`/characters/${u}`)},[l,a])}const De={xs:1,sm:2,md:3,lg:4,xl:4},Ne={xs:5,sm:8,md:9,lg:12,xl:12},je=Object.keys(j);function ze(){const a=D(),l=N(),{params:{characterKey:i}}=L({path:"/characters/:characterKey",end:!1})??{params:{}},u=r.useMemo(()=>i?ee(i)?(a.chars.get(i)||a.chars.getWithInitWeapon(i),i):(l("/characters"),null):null,[i,l,a]),{t:d}=ae(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:y}=r.useContext(te),[b,T]=r.useState(()=>a.displayCharacter.get());r.useEffect(()=>a.displayCharacter.follow((e,n)=>T(n)),[a,T]);const[x,F]=r.useState(""),S=r.useDeferredValue(x),I=re(),[R,k]=r.useState(!1),[_,p]=se();r.useEffect(()=>(ne.send({hitType:"pageview",page:"/characters"}),a.chars.followAny((e,n)=>(n==="new"||n==="remove")&&p())),[p,a]),r.useEffect(()=>a.charMeta.followAny(e=>p()),[p,a]);const z=We(),v=r.useDeferredValue(b),E=r.useDeferredValue(_),{charKeys:s,totalCharNum:m}=r.useMemo(()=>{const n=a.chars.keys.length,{element:h,weaponType:c,rarity:g,sortType:Y,ascending:Z}=v,J=a.chars.keys.filter(ce({element:h,weaponType:c,rarity:g,name:S},we(a,y))).sort(oe(j[Y]??[],Z,be(a,y),["new","favorite"]));return E&&{charKeys:J,totalCharNum:n}},[a,v,S,y,E]),{weaponType:A,element:B,rarity:O,sortType:P,ascending:$}=b,G=r.useMemo(()=>C(xe,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=a.weapons.get(h.equippedWeapon);if(!c)return;const g=Te(c.key).weaponType;e[g].total++,s.includes(n)&&e[g].current++})),[a,s]),U=r.useMemo(()=>C(ke,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=Se(h.key);e[c].total++,s.includes(n)&&e[c].current++})),[a,s]),V=r.useMemo(()=>C(Ee,e=>Object.entries(a.chars.data).forEach(([n,h])=>{const c=ve(h.key).rarity;e[c].total++,s.includes(n)&&e[c].current++})),[a,s]),{numShow:K,setTriggerElement:H}=le(Ne[I],s.length),f=r.useMemo(()=>s.slice(0,K),[s,K]),q=s.length!==m?`${s.length}/${m}`:`${m}`,Q={numShowing:f.length,total:q,t:d,namespace:"page_character"},X={sortKeys:[...je],value:P,onChange:e=>a.displayCharacter.set({sortType:e}),ascending:$,onChangeAsc:e=>a.displayCharacter.set({ascending:e})};return w(M,{display:"flex",flexDirection:"column",gap:1,children:[u&&t(Me,{characterKey:u,onClose:()=>l("/characters")}),t(r.Suspense,{fallback:!1,children:t(Ke,{newFirst:!0,show:R,onHide:()=>k(!1),onSelect:z})}),t(ye,{children:w(ie,{sx:{display:"flex",flexDirection:"column",gap:1},children:[w(o,{container:!0,spacing:1,children:[t(o,{item:!0,children:t(he,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({weaponType:e}),value:A,totals:G,size:"small"})}),t(o,{item:!0,children:t(ue,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({element:e}),value:B,totals:U,size:"small"})}),t(o,{item:!0,children:t(de,{sx:{height:"100%"},onChange:e=>a.displayCharacter.set({rarity:e}),value:O,totals:V,size:"small"})}),t(o,{item:!0,flexGrow:1}),t(o,{item:!0,children:t(pe,{autoFocus:!0,value:x,onChange:e=>F(e.target.value),label:d("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),t(M,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:t(ge,{showingTextProps:Q,sortByButtonProps:X})})]})}),t(fe,{fullWidth:!0,onClick:()=>k(!0),color:"info",startIcon:t(me,{}),children:d`addNew`}),t(r.Suspense,{fallback:t(W,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:t(o,{container:!0,spacing:1,columns:De,children:f.map(e=>t(o,{item:!0,xs:1,children:t(Ce,{characterKey:e,onClick:()=>l(`${e}`),hideStats:!0})},e))})}),s.length!==f.length&&t(W,{ref:e=>{e&&H(e)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{ze as default};