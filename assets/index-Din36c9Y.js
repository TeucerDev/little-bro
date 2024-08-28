import{v as H,b as e,d as a,ab as Fe,ak as Ke,a as j,w as B,r as s,bH as ae,f as h,G as o,h as b,c8 as Pe,c9 as Ge,bW as Ve,ca as qe,P as ge,cb as Ue,by as He,ae as de,U as Ye,cc as he,cd as Je,ce as te,I as O,a5 as ne,a6 as q,J as _,K as I,T as $,cf as Qe,bU as W,cg as R,p as U,e as F,ch as fe,ci as Xe,cj as Ze,a2 as A,af as re,a7 as se,a0 as xe,ck as et,cl as tt,o as at,cm as nt,al as rt,ay as Y,cn as st,co as it,bF as ye,C as lt,cp as ct,a8 as Ce,a9 as be,j as ve,t as P,bz as ie,bA as ot,bG as we,cq as dt,cr as ht,cs as ut,ct as pt,D as Te,bR as ue,x as mt,E as gt,cu as pe,ai as Se,bD as ft,S as K,i as xt,l as yt,cv as Ct,c2 as bt,cw as vt,as as wt,$ as Tt,av as St,aw as kt,aV as ee,ax as Dt,aY as It,cx as At,cy as Mt,b7 as _t,aB as jt,cz as $t,cA as ke,cB as Lt,cC as Wt,A as Ot,z as Bt,g as Et,y as Nt,cD as zt,cE as Rt}from"./index-kUd1_TTK.js";import{u as Ft,B as De,a as Ie,L as Kt,T as me,d as Pt,b as Gt,c as Vt,e as qt,C as Ut,f as Ht,g as Yt,E as Jt}from"./LoadoutInfoAlert-BaYmMXU2.js";import{T as Ae}from"./TeamCard-BKrK4w7P.js";import{u as Qt}from"./useTeamChar-D9Rr3aBB.js";import{O as Xt,L as Zt}from"./TeamDelModal-B2X1hQa5.js";function ea(){const{t}=H("page_character");return e(Ke,{severity:"warning",children:a(Fe,{t,i18nKey:"noLoadout",children:["Looks like you haven't added any loadout/Teams with this character yet. You need to create a loadout+team with this character to"," ",e("strong",{children:"create builds"}),", ",e("strong",{children:"theorycraft"}),", or"," ",e("strong",{children:"optimize"}),"."]})})}function ta(){const t=j(),n=B();return s.useCallback(i=>{t.chars.get(i)||t.chars.getWithInitWeapon(i),n(`/characters/${i}`)},[n,t])}function aa({buildId:t,characterKey:n}){const{name:r,description:i,weaponId:p,artifactIds:u}=Ft(t),m=ae(n).weaponType;return e(De,{name:r,description:i,hideFooter:!0,children:e(h,{sx:{display:"flex",flexDirection:"column",gap:1,alignItems:"stretch"},children:a(o,{container:!0,spacing:1,columns:{xs:2,sm:2,md:2,lg:3,xl:3},children:[e(o,{item:!0,xs:1,children:e(b,{sx:{height:"100%",maxHeight:"8em"},children:e(Pe,{weaponId:p,weaponTypeKey:m})})}),Object.entries(u).map(([x,l])=>e(o,{item:!0,xs:1,children:e(b,{sx:{height:"100%",maxHeight:"8em"},children:e(Ge,{artifactId:l,slotKey:x})})},l||x))]})})})}function na({buildTcId:t}){const n=Ie(t),{name:r,description:i}=n;return e(De,{name:r,description:i,hideFooter:!0,children:e(ra,{buildTcId:t})})}function ra({buildTcId:t}){const{weapon:n,artifact:{slots:r,substats:{stats:i},sets:p}}=Ie(t),u=Ve(n.key),m=Object.entries(i),x=m.slice(0,5),l=m.slice(5);return e(h,{children:a(o,{container:!0,spacing:1,columns:{xs:2,sm:2,md:2,lg:2,xl:2},children:[e(o,{item:!0,xs:1,children:a(h,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(qe,{weapon:n,weaponSheet:u}),!!Object.keys(p).length&&e(b,{sx:{flexGrow:1},children:e(h,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:Object.entries(p).map(([d,c])=>a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(ge,{size:2,src:Ue(d,"flower")}),e("span",{children:e(He,{setKey:d})}),a(de,{children:["x",c]})]},d))})})]})}),e(o,{item:!0,xs:1,children:e(b,{sx:{flexGrow:1,height:"100%",p:1,display:"flex",flexDirection:"column",gap:1,justifyContent:"space-between"},children:Object.entries(r).map(([d,{level:c,statKey:f}])=>a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Ye,{slotKey:d}),a(de,{children:["+",c]}),e(he,{statKey:f})]},d))})}),[x,l].map((d,c)=>e(o,{item:!0,xs:1,children:e(b,{sx:{flexGrow:1,height:"100%"},children:e(h,{sx:{p:1,height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:1},children:d.map(([f,w])=>a(h,{sx:{display:"flex",alignItems:"center",gap:1,justifyContent:"space-between"},children:[e(he,{statKey:f}),a("span",{children:[Je(w,te(f)),te(f)]})]},f))})})},c))]})})}function sa({show:t,onHide:n,teamCharId:r,onDelete:i,teamIds:p,conditionalCount:u}){const m=j(),{name:x,description:l,buildIds:d,buildTcIds:c,customMultiTargets:f,bonusStats:w}=m.teamChars.get(r),k=s.useCallback(()=>{n(),i()},[i,n]);return e(se,{open:t,onClose:n,containerProps:{maxWidth:"md"},children:a(b,{children:[e(O,{title:a("span",{children:["Delete Loadout: ",e("strong",{children:x}),"?"]}),action:e(ne,{onClick:n,children:e(q,{})})}),e(_,{}),a(I,{children:[l&&e(b,{bgt:"dark",sx:{mb:2},children:e(I,{children:l})}),e($,{children:"Deleting the Loadout will also delete the following data:"}),a(Qe,{sx:{listStyleType:"disc",pl:4},children:[!!d.length&&e(W,{sx:{display:"list-item"},children:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:["All saved builds: ",d.length," ",e(R,{title:e(h,{children:d.map(v=>{var C;return a($,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(U,{}),e("span",{children:(C=m.builds.get(v))==null?void 0:C.name})]},v)})}),children:e(F,{})})]})}),!!c.length&&e(W,{sx:{display:"list-item"},children:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:["All saved TC builds: ",c.length," ",e(R,{title:e(h,{children:c.map(v=>{var C;return a($,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(U,{}),e("span",{children:(C=m.buildTcs.get(v))==null?void 0:C.name})]},v)})}),children:e(F,{})})]})}),!!f.length&&e(W,{sx:{display:"list-item"},children:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:["All Custom Multi-targets: ",f.length," ",e(R,{title:e(h,{children:f.map((v,C)=>a($,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(fe,{}),e("span",{children:v.name})]},C))}),children:e(F,{})})]})}),!!Object.keys(w).length&&a(W,{sx:{display:"list-item"},children:["Bonus stats: ",Object.keys(w).length]}),!!u&&a(W,{sx:{display:"list-item"},children:["Conditionals: ",u]}),e(W,{sx:{display:"list-item"},children:"Optimization Configuration"}),!!p.length&&e(W,{sx:{display:"list-item"},children:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[a("span",{children:["Any teams with this loadout will have this loadout removed from the team. Teams will not be deleted. Teams affected:"," ",p.length]}),e(R,{title:e(h,{children:p.map(v=>{var C;return a($,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(Xe,{}),e("span",{children:(C=m.teams.get(v))==null?void 0:C.name})]},v)})}),children:e(F,{})})]})})]})]}),a(Ze,{sx:{float:"right"},children:[e(A,{startIcon:e(q,{}),color:"secondary",onClick:n,children:"Cancel"}),e(A,{startIcon:e(re,{}),color:"error",onClick:k,children:"Delete"})]})]})})}function ia({show:t,onHide:n,teamCharId:r,teamIds:i}){const[p,u,m]=xe(),x=B(),l=j(),{key:d,name:c,description:f,buildIds:w,buildTcIds:k,customMultiTargets:v,bonusStats:C,optConfigId:J,conditional:E}=Qt(r),{optimizationTarget:N}=et(J),T=()=>{n(),l.teamChars.remove(r)},z=()=>{l.teamChars.duplicate(r)&&n()},Q=y=>{const M=l.teams.new();l.teams.set(M,X=>{X.loadoutData[0]={teamCharId:y}}),x(`/teams/${M}`)},G=s.useMemo(()=>{let y=0;return tt(E,[],M=>typeof M!="object",()=>y++),y},[E]);return e(se,{open:t,onClose:n,containerProps:{maxWidth:"lg"},children:a(b,{children:[e(O,{title:a(h,{display:"flex",gap:1,alignItems:"center",children:[e(at,{}),e("strong",{children:c})]}),action:e(ne,{onClick:n,children:e(q,{})})}),e(_,{}),a(I,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Kt,{}),e(me,{fullWidth:!0,label:"Loadout Name",placeholder:"Loadout Name",value:c,onChange:y=>l.teamChars.set(r,{name:y})}),e(me,{fullWidth:!0,label:"Loadout Description",value:f,onChange:y=>l.teamChars.set(r,{description:y}),multiline:!0,minRows:2}),e(h,{children:a(o,{container:!0,columns:{xs:1,md:2},spacing:2,children:[e(o,{item:!0,xs:1,children:e(A,{color:"info",onClick:()=>z(),fullWidth:!0,startIcon:e(Pt,{}),children:"Duplicate Loadout"})}),a(o,{item:!0,xs:1,children:[e(sa,{show:p,onHide:m,onDelete:T,teamCharId:r,teamIds:i,conditionalCount:G}),e(A,{fullWidth:!0,startIcon:e(re,{}),color:"error",onClick:u,children:"Delete Loadout"})]})]})}),e(h,{children:a(o,{container:!0,columns:{xs:1,md:2},spacing:2,children:[!!Object.keys(C).length&&e(o,{item:!0,xs:1,children:e(la,{bonusStats:C})}),!!N&&e(o,{item:!0,xs:1,children:a(b,{bgt:"light",children:[e(O,{title:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(nt,{}),e("span",{children:"Optimization Target"})]})}),e(_,{}),e(I,{children:e(rt,{divider:e(_,{orientation:"vertical",flexItem:!0}),spacing:1,children:e(Xt,{optimizationTarget:N,customMultiTargets:v})})})]})}),!!v.length&&e(o,{item:!0,xs:1,children:e(ca,{customMultiTargets:v})}),e(o,{item:!0,xs:1,children:e(b,{bgt:"light",children:e(I,{children:a($,{variant:"h6",children:["Conditionals: ",e("strong",{children:G})]})})})})]})})]}),e(_,{}),e(O,{title:a(h,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(U,{}),e("span",{children:"Builds"})]})}),e(_,{}),a(I,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(Gt,{}),e(h,{children:e(o,{container:!0,columns:{xs:1,md:2},spacing:2,children:w.map(y=>e(o,{item:!0,xs:1,children:e(aa,{buildId:y,characterKey:d})},y))})}),e(Vt,{}),e(h,{children:e(o,{container:!0,columns:{xs:1,md:2},spacing:2,children:k.map(y=>e(o,{item:!0,xs:1,children:e(na,{buildTcId:y})},y))})})]}),e(_,{}),e(O,{title:a(h,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(U,{}),e("span",{children:"Teams"})]})}),e(_,{}),a(I,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e(qt,{}),a(o,{container:!0,columns:{xs:1,md:2},spacing:2,children:[i.map(y=>e(o,{item:!0,xs:1,children:e(Ae,{bgt:"light",teamId:y,onClick:M=>x(`/teams/${y}${M?`/${M}`:""}`)})},y)),e(o,{item:!0,xs:1,children:e(A,{fullWidth:!0,sx:{height:"100%",backgroundColor:"contentLight.main"},variant:"outlined",onClick:()=>Q(r),color:"info",startIcon:e(Y,{}),children:"Add new Team"})})]})]})]})})}function la({bonusStats:t}){return a(b,{bgt:"light",children:[e(O,{title:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(st,{}),e("span",{children:"Bonus Stats"})]}),titleTypographyProps:{variant:"h6"}}),e(ye,{bgt:"light",sections:[{fields:Object.entries(t).map(([n,r])=>({text:it.getStr(n)??n,value:r,unit:te(n)}))}]})]})}function ca({customMultiTargets:t}){return a(b,{bgt:"light",children:[e(O,{title:a(h,{sx:{display:"flex",alignItems:"center",gap:1},children:[e(fe,{}),e("span",{children:"Custom multi-targets"})]}),titleTypographyProps:{variant:"h6"}}),e(ye,{bgt:"light",sections:[{fields:t.map(({name:n,description:r})=>({text:n,value:r?e(R,{title:r,children:e(F,{})}):void 0}))}]})]})}const oa={xs:1,md:2};function da({teamCharId:t,teamIds:n}){const r=B(),i=j(),p=l=>{const d=i.teams.new();i.teams.set(d,c=>{c.loadoutData[0]={teamCharId:l}}),r(`/teams/${d}`)},[u,m,x]=xe();return a(ct,{children:[e(ia,{show:u,onHide:x,teamCharId:t,teamIds:n}),a(b,{bgt:"light",children:[e(lt,{onClick:m,children:e(Zt,{teamCharId:t,showSetting:!0})}),e(_,{}),e(I,{sx:{p:1},children:a(o,{container:!0,columns:oa,spacing:1,children:[n.map(l=>e(o,{item:!0,xs:1,children:e(Ae,{teamId:l,onClick:d=>r(`/teams/${l}${d?`/${d}`:""}`)})},l)),e(o,{item:!0,xs:1,children:e(A,{fullWidth:!0,sx:{height:"100%",backgroundColor:"contentNormal.main"},variant:"outlined",onClick:()=>p(t),color:"info",startIcon:e(Y,{}),children:"Add new Team"})})]})})]},t)]})}var le={},ha=be;Object.defineProperty(le,"__esModule",{value:!0});var Me=le.default=void 0,ua=ha(Ce()),pa=ve,ma=(0,ua.default)((0,pa.jsx)("path",{d:"M17.5 9.5C17.5 6.46 15.04 4 12 4S6.5 6.46 6.5 9.5c0 2.7 1.94 4.93 4.5 5.4V17H9v2h2v2h2v-2h2v-2h-2v-2.1c2.56-.47 4.5-2.7 4.5-5.4zm-9 0C8.5 7.57 10.07 6 12 6s3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5z"}),"Female");Me=le.default=ma;var ce={},ga=be;Object.defineProperty(ce,"__esModule",{value:!0});var _e=ce.default=void 0,fa=ga(Ce()),xa=ve,ya=(0,fa.default)((0,xa.jsx)("path",{d:"M9.5 11c1.93 0 3.5 1.57 3.5 3.5S11.43 18 9.5 18 6 16.43 6 14.5 7.57 11 9.5 11zm0-2C6.46 9 4 11.46 4 14.5S6.46 20 9.5 20s5.5-2.46 5.5-5.5c0-1.16-.36-2.23-.97-3.12L18 7.42V10h2V4h-6v2h2.58l-3.97 3.97C11.73 9.36 10.66 9 9.5 9z"}),"Male");_e=ce.default=ya;function Ca(){const{t}=H("ui"),n=j(),{character:r}=s.useContext(P),{key:i}=r,{gender:p}=ie(),u=s.useCallback(()=>n.dbMeta.set({gender:p==="F"?"M":"F"}),[p,n]);return i.startsWith("Traveler")?a(A,{onClick:u,startIcon:p==="F"?e(Me,{}):e(_e,{}),children:[e("strong",{children:t(`gender.${p}`)})," "]}):null}function ba({onClose:t}){const{t:n}=H(["page_character","sillyWisher_charNames","charNames_gen"]),r=B(),i=j(),{character:p,character:{key:u}}=s.useContext(P),{gender:m}=ie(),x=ot(u,m),{silly:l}=s.useContext(we),d=s.useCallback(async()=>{const c=n(`${l?"sillyWisher_charNames":"charNames_gen"}:${dt(u,m)}`);window.confirm(n("removeCharacter",{value:c}))&&(i.chars.remove(u),r("/characters"))},[i,r,u,m,l,n]);return a(h,{display:"flex",flexDirection:"column",gap:1,children:[a(h,{display:"flex",gap:1,children:[e(Ca,{}),e(A,{color:"error",onClick:()=>d(),startIcon:e(re,{}),sx:{marginLeft:"auto"},children:n("delete")}),!!t&&e(ne,{onClick:t,children:e(q,{})})]}),e(h,{children:a(o,{container:!0,spacing:1,sx:{justifyContent:"center"},children:[e(o,{item:!0,xs:8,sm:5,md:4,lg:3,children:a(b,{bgt:"light",sx:{height:"100%",display:"flex",flexDirection:"column",gap:1},children:[e(Ut,{}),e(h,{sx:{px:1},children:e(ht,{level:p.level,ascension:p.ascension,setBoth:c=>i.chars.set(u,c)})}),e(ut,{bgt:"light"}),e($,{sx:{textAlign:"center",pb:-1},variant:"h6",children:e(pt,{characterKey:u,gender:m})}),e(h,{sx:{px:1},children:e(Ht,{setConstellation:c=>i.chars.set(u,{constellation:c})})})]})}),a(o,{item:!0,xs:12,sm:7,md:8,lg:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[e(h,{children:e(o,{container:!0,columns:3,spacing:1,children:["auto","skill","burst"].map(c=>{var f;return e(o,{item:!0,xs:1,children:e(Yt,{talentKey:c,dropDownButtonProps:{startIcon:e(ge,{src:(f=x.getTalentOfKey(c))==null?void 0:f.img,size:1.75,sideMargin:!0})},setTalent:w=>i.chars.set(u,k=>{k.talent[c]=w})},c)},c)})})}),e(va,{}),e(wa,{})]})]})})]})}function va(){const{character:{key:t}}=s.useContext(P),{data:n}=s.useContext(Te),r=j(),i=ae(t).weaponType,p=n.get(ue.weapon.id).value,u=s.useMemo(()=>mt(gt,m=>n.get(ue.art[m].id).value),[n]);return e(h,{children:e(Jt,{weaponTypeKey:i,weaponId:p,artifactIds:u,setWeapon:m=>{r.weapons.set(m,{location:pe(t)})},setArtifact:(m,x)=>{r.arts.set(x,{location:pe(t)})}})})}function wa(){const t=B(),{character:{key:n}}=s.useContext(P),r=j(),{gender:i}=ie(),[p,u]=Se(),m=s.useMemo(()=>{const l={};return r.teamChars.entries.map(([d,c])=>{c.key===n&&(l[d]||(l[d]=[]))}),r.teams.entries.forEach(([d,c])=>{const f=c.loadoutData.find(w=>{var k;return w&&((k=r.teamChars.get(w==null?void 0:w.teamCharId))==null?void 0:k.key)===n});f&&l[f==null?void 0:f.teamCharId].push(d)}),p&&l},[p,n,r]);s.useEffect(()=>r.teams.followAny(()=>u()),[r,u]),s.useEffect(()=>r.teamChars.followAny(()=>u()),[r,u]);const x=()=>{const l=r.teams.new(),d=r.teamChars.new(n);r.teams.set(l,c=>{c.loadoutData[0]={teamCharId:d}}),t(`/teams/${l}`)};return a(h,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a($,{variant:"h6",children:["Team Loadouts with"," ",e(ft,{characterKey:n,gender:i})]}),!Object.values(m).length&&e(ea,{}),Object.entries(m).map(([l,d])=>e(da,{teamCharId:l,teamIds:d},l)),e(A,{fullWidth:!0,onClick:()=>x(),color:"info",startIcon:e(Y,{}),variant:"outlined",sx:{backgroundColor:"contentLight.main"},children:"Add new Loadout+Team"}),e(b,{bgt:"light"})]})}function Ta({characterKey:t,onClose:n}){return e(se,{open:!!t,onClose:n,children:e(s.Suspense,{fallback:e(K,{variant:"rectangular",width:"100%",height:1e3}),children:t&&e(Sa,{characterKey:t,onClose:n},t)})})}function Sa({characterKey:t,onClose:n}){const r=xt(t),i=yt(t),{target:p}=(i==null?void 0:i[t])??{},u=s.useMemo(()=>{if(!(!i||!p))return{data:p,teamData:i,compareData:void 0}},[p,i]),m=s.useMemo(()=>r&&{character:r},[r]),[x,l]=s.useState(),[d,c]=s.useState(),f=s.useMemo(()=>({chartData:x,setChartData:l,graphBuilds:d,setGraphBuilds:c}),[x,d]);return s.useEffect(()=>{l(void 0),c(void 0)},[t]),e(b,{children:e(I,{sx:{display:"flex",flexDirection:"column",gap:1},children:e(s.Suspense,{fallback:e(K,{variant:"rectangular",width:"100%",height:1e3}),children:u&&m&&f?e(P.Provider,{value:m,children:e(Te.Provider,{value:u,children:e(Ct.Provider,{value:f,children:e(ba,{onClose:n})})})}):e(K,{variant:"rectangular",width:"100%",height:1e3})})})})}const ka={xs:1,sm:2,md:3,lg:4,xl:4},Da={xs:5,sm:8,md:9,lg:12,xl:12},Ia=Object.keys(ke);function La(){const t=j(),n=B(),{params:{characterKey:r}}=bt({path:"/characters/:characterKey",end:!1})??{params:{}},i=s.useMemo(()=>r?vt(r)?(t.chars.get(r)||t.chars.getWithInitWeapon(r),r):(n("/characters"),null):null,[r,n,t]),{t:p}=H(["page_character","sillyWisher_charNames","charNames_gen"]),{silly:u}=s.useContext(we),[m,x]=s.useState(()=>t.displayCharacter.get());s.useEffect(()=>t.displayCharacter.follow((g,S)=>x(S)),[t,x]);const[l,d]=s.useState(""),c=s.useDeferredValue(l),f=wt(),[w,k]=s.useState(!1),[v,C]=Se();s.useEffect(()=>(Tt.send({hitType:"pageview",page:"/characters"}),t.chars.followAny((g,S)=>(S==="new"||S==="remove")&&C())),[C,t]),s.useEffect(()=>t.charMeta.followAny(g=>C()),[C,t]);const J=ta(),E=s.useDeferredValue(m),N=s.useDeferredValue(v),{charKeys:T,totalCharNum:z}=s.useMemo(()=>{const S=t.chars.keys.length,{element:L,weaponType:D,rarity:V,sortType:Ne,ascending:ze}=E,Re=t.chars.keys.filter(St({element:L,weaponType:D,rarity:V,name:c},Lt(t,u))).sort(kt(ke[Ne]??[],ze,Wt(t,u),["new","favorite"]));return N&&{charKeys:Re,totalCharNum:S}},[t,E,c,u,N]),{weaponType:Q,element:G,rarity:y,sortType:M,ascending:X}=m,je=s.useMemo(()=>ee(Bt,g=>Object.entries(t.chars.data).forEach(([S,L])=>{const D=t.weapons.get(L.equippedWeapon);if(!D)return;const V=Ot(D.key).weaponType;g[V].total++,T.includes(S)&&g[V].current++})),[t,T]),$e=s.useMemo(()=>ee(Nt,g=>Object.entries(t.chars.data).forEach(([S,L])=>{const D=Et(L.key);g[D].total++,T.includes(S)&&g[D].current++})),[t,T]),Le=s.useMemo(()=>ee(zt,g=>Object.entries(t.chars.data).forEach(([S,L])=>{const D=ae(L.key).rarity;g[D].total++,T.includes(S)&&g[D].current++})),[t,T]),{numShow:oe,setTriggerElement:We}=Dt(Da[f],T.length),Z=s.useMemo(()=>T.slice(0,oe),[T,oe]),Oe=T.length!==z?`${T.length}/${z}`:`${z}`,Be={numShowing:Z.length,total:Oe,t:p,namespace:"page_character"},Ee={sortKeys:[...Ia],value:M,onChange:g=>t.displayCharacter.set({sortType:g}),ascending:X,onChangeAsc:g=>t.displayCharacter.set({ascending:g})};return a(h,{display:"flex",flexDirection:"column",gap:1,children:[i&&e(Ta,{characterKey:i,onClose:()=>n("/characters")}),e(s.Suspense,{fallback:!1,children:e(Rt,{newFirst:!0,show:w,onHide:()=>k(!1),onSelect:J})}),e(b,{children:a(I,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(o,{container:!0,spacing:1,children:[e(o,{item:!0,children:e(It,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({weaponType:g}),value:Q,totals:je,size:"small"})}),e(o,{item:!0,children:e(At,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({element:g}),value:G,totals:$e,size:"small"})}),e(o,{item:!0,children:e(Mt,{sx:{height:"100%"},onChange:g=>t.displayCharacter.set({rarity:g}),value:y,totals:Le,size:"small"})}),e(o,{item:!0,flexGrow:1}),e(o,{item:!0,children:e(_t,{autoFocus:!0,value:l,onChange:g=>d(g.target.value),label:p("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})})]}),e(h,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:e(jt,{showingTextProps:Be,sortByButtonProps:Ee})})]})}),e(A,{fullWidth:!0,onClick:()=>k(!0),color:"info",startIcon:e(Y,{}),children:p`addNew`}),e(s.Suspense,{fallback:e(K,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:e(o,{container:!0,spacing:1,columns:ka,children:Z.map(g=>e(o,{item:!0,xs:1,children:e($t,{characterKey:g,onClick:()=>n(`${g}`),hideStats:!0})},g))})}),T.length!==Z.length&&e(K,{ref:g=>{g&&We(g)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{La as default};
