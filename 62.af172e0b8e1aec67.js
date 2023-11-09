"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62],{42861:(t,e,i)=>{var n=i(95938);e.Z=void 0;var r=n(i(68671)),l=i(52322),a=(0,r.default)((0,l.jsx)("path",{d:"M18 23H4c-1.1 0-2-.9-2-2V7h2v14h14v2zM15 1H8c-1.1 0-1.99.9-1.99 2L6 17c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z"}),"Difference");e.Z=a},66859:(t,e,i)=>{var n=i(95938);e.Z=void 0;var r=n(i(68671)),l=i(52322),a=(0,r.default)((0,l.jsx)("path",{d:"M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm1.19 4.02L2.81 2.81 1.39 4.22l8.89 8.89c-1.81.23-3.39.79-4.67 1.45-1 .51-1.61 1.54-1.61 2.66V20h13.17l2.61 2.61 1.41-1.42z"}),"PersonOff");e.Z=a},24648:(t,e,i)=>{var n=i(95938);e.Z=void 0;var r=n(i(68671)),l=i(52322),a=(0,r.default)((0,l.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay");e.Z=a},79199:(t,e,i)=>{i.d(e,{Z:()=>l});var n=i(49284),r=i(52903);function l({slotKey:t,iconProps:e={}}){switch(t){case"flower":return(0,r.tZ)(n.pv,Object.assign({},e));case"plume":return(0,r.tZ)(n.QA,Object.assign({},e));case"sands":return(0,r.tZ)(n.M6,Object.assign({},e));case"goblet":return(0,r.tZ)(n.NN,Object.assign({},e));case"circlet":return(0,r.tZ)(n.qM,Object.assign({},e))}}},30014:(t,e,i)=>{i.r(e),i.d(e,{default:()=>Zt});var n=i(95178),r=i(12761),l=i(92252),a=i(42861),c=i(67550),s=i(107),o=i(23119),d=i(7671),Z=i(41075),h=i(5896),u=i(83249),f=i(79906),m=i(62197),p=i(2784),y=i(61877),g=i(21560),b=i(39857),x=i(71179),v=i(45269),w=i(24264),P=i(16549),k=i(56961),C=i(23690),A=i(69698),I=i(1665),B=i(52903);function X({pageKey:t,text:e="",modalTitle:i="",children:l}){const[a,c,s]=(0,n.aV)("true"!==localStorage.getItem(`infoShown_${t}`)),[o]=(0,p.useState)(Array.isArray(e)?(0,r.F_)(e):e),h=(0,p.useCallback)((()=>{s(),localStorage.setItem(`infoShown_${t}`,"true")}),[s,t]);return(0,B.BX)(w.Z,{children:[(0,B.BX)(Z.ZP,{container:!0,children:[(0,B.tZ)(Z.ZP,{item:!0,flexGrow:1,children:(0,B.tZ)(m.Z,{variant:"caption",pl:1,children:o})}),(0,B.tZ)(Z.ZP,{item:!0,xs:"auto",children:(0,B.tZ)(u.Z,{size:"small",color:"info",variant:"contained",onClick:c,startIcon:(0,B.tZ)(P.Z,{}),children:(0,B.tZ)(I.v,{ns:"ui",key18:"info"})})})]}),(0,B.tZ)(A.Z,{containerProps:{maxWidth:"xl"},open:a,onClose:h,children:(0,B.BX)(w.Z,{children:[(0,B.tZ)(d.Z,{sx:{py:1},children:(0,B.BX)(Z.ZP,{container:!0,children:[(0,B.tZ)(Z.ZP,{item:!0,flexGrow:1,children:(0,B.tZ)(m.Z,{variant:"h6",children:i})}),(0,B.tZ)(Z.ZP,{item:!0,children:(0,B.tZ)(C.Z,{onClick:h})})]})}),(0,B.tZ)(k.Z,{}),(0,B.tZ)(d.Z,{children:(0,B.tZ)(p.Suspense,{fallback:(0,B.tZ)(f.Z,{variant:"rectangular",width:"100%",height:500}),children:l})}),(0,B.tZ)(k.Z,{}),(0,B.tZ)(d.Z,{sx:{py:1},children:(0,B.tZ)(C.Z,{large:!0,onClick:h})})]})})]})}var S=i(56489),M=i(34156);function D(){const{database:t}=(0,p.useContext)(M.t),[e,i]=(0,p.useState)(t.displayArtifact.get());return(0,p.useEffect)((()=>t.displayArtifact.follow(((t,e)=>i(e)))),[t]),e}var F=i(30706),O=i(24648),j=i(75927),K=i(93994),V=i(22698),$=i(66859),z=i(12366);const G=(0,p.lazy)((()=>Promise.all([i.e(301),i.e(537),i.e(313)]).then(i.bind(i,22537))));function E({numShowing:t,total:e,artifactIds:i}){const{t:n}=(0,g.$G)(["artifact","ui"]),{database:r}=(0,p.useContext)(M.t),{filterOption:l}=D(),a=(0,p.useCallback)((t=>r.displayArtifact.set({filterOption:Object.assign({},l,t)})),[r,l]);return(0,B.tZ)(p.Suspense,{fallback:(0,B.tZ)(f.Z,{variant:"rectangular",width:"100%",height:300}),children:(0,B.tZ)(w.Z,{children:(0,B.BX)(d.Z,{children:[(0,B.BX)(Z.ZP,{container:!0,children:[(0,B.tZ)(Z.ZP,{item:!0,children:(0,B.tZ)(m.Z,{variant:"h6",children:(0,B.tZ)(g.cC,{t:n,i18nKey:"artifactFilter",children:"Artifact Filter"})})}),(0,B.tZ)(Z.ZP,{item:!0,flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",children:t!==e&&(0,B.BX)(m.Z,{children:["Filtered ",(0,B.tZ)("strong",{children:t})," / ",e]})}),(0,B.tZ)(Z.ZP,{item:!0,children:(0,B.tZ)(u.Z,{size:"small",color:"error",onClick:()=>r.displayArtifact.set({action:"reset"}),startIcon:(0,B.tZ)(O.Z,{}),children:(0,B.tZ)(g.cC,{t:n,i18nKey:"ui:reset"})})})]}),(0,B.tZ)(p.Suspense,{fallback:(0,B.tZ)(f.Z,{variant:"rectangular",width:"100%",height:200}),children:(0,B.tZ)(G,{filterOption:l,filterOptionDispatch:a,filteredIds:i})})]})})})}function T({artifactIds:t}){const{t:e}=(0,g.$G)(["artifact","ui"]),{database:i}=(0,p.useContext)(M.t),{numDelete:n,numUnequip:r,numUnlock:l,numLock:a}=(0,p.useMemo)((()=>{const e=t.map((t=>i.arts.get(t))),n=e.reduce(((t,e)=>t+(e.lock?0:1)),0),r=e.length-n;return{numDelete:n,numUnequip:e.reduce(((t,e)=>t+(e.location?1:0)),0),numUnlock:n,numLock:r}}),[t,i]);return(0,B.BX)(Z.ZP,{container:!0,spacing:1,alignItems:"center",children:[(0,B.tZ)(Z.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,B.BX)(u.Z,{fullWidth:!0,color:"error",disabled:!r,onClick:()=>window.confirm(`Are you sure you want to unequip ${r} artifacts currently equipped on characters?`)&&t.map((t=>i.arts.set(t,{location:""}))),startIcon:(0,B.tZ)($.Z,{}),children:[(0,B.tZ)(g.cC,{t:e,i18nKey:"button.unequipArtifacts",children:"Unequip Artifacts"}),(0,B.tZ)(z.Z,{sx:{ml:1},color:r?"success":"secondary",children:r})]})}),(0,B.tZ)(Z.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,B.BX)(u.Z,{fullWidth:!0,color:"error",disabled:!n,onClick:()=>window.confirm(`Are you sure you want to delete ${n} artifacts?`)&&t.map((t=>{var e;return!(null!=(e=i.arts.get(t))&&e.lock)&&i.arts.remove(t)})),startIcon:(0,B.tZ)(V.Z,{}),children:[(0,B.tZ)(g.cC,{t:e,i18nKey:"button.deleteArtifacts",children:"Delete Artifacts"}),(0,B.tZ)(z.Z,{sx:{ml:1},color:n?"success":"secondary",children:n})]})}),(0,B.tZ)(Z.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,B.BX)(u.Z,{fullWidth:!0,color:"error",disabled:!a,onClick:()=>window.confirm(`Are you sure you want to unlock ${a} artifacts?`)&&t.map((t=>i.arts.set(t,{lock:!1}))),startIcon:(0,B.tZ)(K.Z,{}),children:[(0,B.tZ)(g.cC,{t:e,i18nKey:"button.unlockrtifacts",children:"Unlock Artifacts"}),(0,B.tZ)(z.Z,{sx:{ml:1},color:a?"success":"secondary",children:a})]})}),(0,B.tZ)(Z.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,B.BX)(u.Z,{fullWidth:!0,color:"error",disabled:!l,onClick:()=>window.confirm(`Are you sure you want to lock ${l} artifacts?`)&&t.map((t=>i.arts.set(t,{lock:!0}))),startIcon:(0,B.tZ)(j.Z,{}),children:[(0,B.tZ)(g.cC,{t:e,i18nKey:"button.lockArtifacts",children:"Lock Artifacts"}),(0,B.tZ)(z.Z,{sx:{ml:1},color:l?"success":"secondary",children:l})]})}),(0,B.tZ)(Z.ZP,{item:!0,xs:12,display:"flex",justifyContent:"space-around",children:(0,B.tZ)(m.Z,{variant:"caption",color:"text.secondary",children:(0,B.BX)(g.cC,{t:e,i18nKey:"buttonHint",children:["Note: the red buttons above only apply to",(0,B.tZ)("b",{children:"currently filtered artifacts"})]})})})]})}var U=i(15015),W=i(33927),q=i(87833);let L,N,H=t=>t;function _({show:t,onHide:e}){const{t:i}=(0,g.$G)("artifact");return(0,B.tZ)(A.Z,{open:t,onClose:e,children:(0,B.BX)(q.Z,{children:[(0,B.BX)(d.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,B.BX)(m.Z,{variant:"h6",flexGrow:1,children:[(0,B.tZ)(a.Z,{sx:{verticalAlign:"text-top",mr:1}}),i(L||(L=H`showDup`))]}),(0,B.tZ)(C.Z,{onClick:e})]}),(0,B.tZ)(k.Z,{}),(0,B.tZ)(d.Z,{children:(0,B.tZ)(Q,{})})]})})}function Q(){const{t}=(0,g.$G)("artifact"),{database:e}=(0,p.useContext)(M.t),[i,r]=(0,n.NW)();(0,p.useEffect)((()=>e.arts.followAny(r)),[r,e]);const l=(0,p.useMemo)((()=>{const t=i&&[];let n=e.arts.keys;for(;0!==n.length;){const i=n.shift();if(!i)continue;const r=e.arts.get(i);if(!r)continue;const{duplicated:l}=e.arts.findDups(r,n);if(!l.length)continue;const a=l.map((t=>t.id));t.push([i,...a].sort((t=>{var i,n;return null!=(i=null==(n=e.arts.get(t))?void 0:n.location)&&i?-1:1}))),n=n.filter((t=>!a.includes(t)))}return t}),[e,i]),a=(0,p.useMemo)((()=>({})),[]);return(0,B.BX)(W.Z,{spacing:2,children:[l.map((t=>(0,B.tZ)(w.Z,{sx:{overflowX:"scroll"},children:(0,B.tZ)(d.Z,{sx:{display:"flex",gap:1},children:t.map((t=>(0,B.tZ)(c.Z,{sx:{minWidth:300},children:(0,B.tZ)(F.Z,{artifactId:t,canEquip:!0,onDelete:()=>e.arts.remove(t),editorProps:a})},t)))})},t.join()))),!l.length&&(0,B.tZ)(s.Z,{variant:"filled",severity:"success",children:t(N||(N=H`noDupAlert`))})]})}var R=i(31981),J=i(86569),Y=i(68330);const tt=[...R._m];function et({probabilityFilter:t={},setProbabilityFilter:e,disabled:i=!1}){return(0,B.BX)(w.Z,{children:[(0,B.tZ)(d.Z,{sx:{py:1},children:(0,B.tZ)(m.Z,{variant:"h6",children:"Roll Probability Calculator"})}),(0,B.tZ)(k.Z,{}),(0,B.tZ)(d.Z,{children:(0,B.BX)(Z.ZP,{container:!0,spacing:1,children:[(0,B.tZ)(Z.ZP,{item:!0,xs:12,md:6,children:(0,B.tZ)(q.Z,{children:(0,B.tZ)(d.Z,{children:(0,B.BX)(m.Z,{children:['This UI only pops up when "Sort by"',(0,B.tZ)("strong",{children:"Probability"}),". In conjunction with the Artifact Filters above, this UI allows you to set a criteria for substats values, and it will sort the artifacts by those with the highest probability to roll into those criteria values.",(0,B.BX)(J.Z,{color:"warning",children:[" ","Artifacts that already reach the criteria(100%) or are at 0% are hidden."]})]})})})}),(0,B.tZ)(Z.ZP,{item:!0,xs:12,md:6,spacing:1,sx:{display:"flex",flexDirection:"column",gap:1},children:(0,B.tZ)(Y.Z,{statKeys:tt,statFilters:t,setStatFilters:e,disabled:i})})]})})]})}var it=i(57928);let nt,rt,lt,at=t=>t;const ct=p.lazy((()=>Promise.all([i.e(301),i.e(592),i.e(794),i.e(515)]).then(i.bind(i,82120)))),st=p.lazy((()=>Promise.all([i.e(592),i.e(528)]).then(i.bind(i,76806)))),ot={xs:1,sm:2,md:3,lg:3,xl:4},dt={xs:10,sm:12,md:24,lg:24,xl:24};function Zt(){const{t}=(0,g.$G)(["artifact","ui"]),{database:e}=(0,p.useContext)(M.t),i=D(),[m,P,k]=(0,n.aV)(!1),[C,A,I]=(0,n.aV)(!1),O=(0,n.JT)(),j=dt[O],{sortType:K,effFilter:V,ascending:$,probabilityFilter:z}=i,G="probability"===K,[W,q]=(0,p.useState)(0),L=(0,p.useRef)(null),[N,H]=(0,n.NW)(),Q=(0,p.useDeferredValue)(N),R=(0,p.useMemo)((()=>new Set(V)),[V]),J=(0,p.useCallback)((t=>e.arts.remove(t)),[e]);(0,p.useEffect)((()=>(y.ZP.send({hitType:"pageview",page:"/artifact"}),e.arts.followAny((()=>H())))),[e,H]);const Y=(0,p.useCallback)((t=>e.displayArtifact.set({probabilityFilter:t})),[e]),tt=(0,p.useMemo)((()=>!e.arts.values.length),[e]),Zt=(0,p.useMemo)((()=>(0,U.x3)(R,z)),[R,z]),ut=(0,p.useMemo)((()=>(0,U.EM)(R)),[R]),ft=(0,p.useDeferredValue)(i),mt=(0,p.useDeferredValue)(z);(0,p.useEffect)((()=>{if(G)return e.arts.values.forEach((t=>e.arts.setProbability(t.id,(0,it.B)(t,mt)))),()=>e.arts.values.forEach((t=>e.arts.setProbability(t.id,-1)))}),[e,G,mt]);const{artifactIds:pt,totalArtNum:yt}=(0,p.useMemo)((()=>{var t;const{sortType:i=U.OQ[0],ascending:n=!1,filterOption:l}=ft;let a=e.arts.values;G&&(a=a.filter((t=>t.probability&&1!==t.probability)));const c=a.filter((0,r.CZ)(l,ut)).sort((0,r.ef)(null!=(t=U.t$[i])?t:[],n,Zt)).map((t=>t.id));return Object.assign({artifactIds:c,totalArtNum:a.length},Q)}),[ft,Q,e,Zt,ut,G]),{artifactIdsToShow:gt,numPages:bt,currentPageIndex:xt}=(0,p.useMemo)((()=>{const t=Math.ceil(pt.length/j),e=(0,r.re)(W,0,t-1);return{artifactIdsToShow:pt.slice(e*j,(e+1)*j),numPages:t,currentPageIndex:e}}),[pt,W,j]),vt=pt.length!==yt?`${pt.length}/${yt}`:`${yt}`,wt=(0,p.useCallback)(((t,e)=>{var i;null==(i=L.current)||i.scrollIntoView({behavior:"smooth"}),q(e-1)}),[q,L]);return(0,B.BX)(c.Z,{display:"flex",flexDirection:"column",gap:1,my:1,children:[(0,B.tZ)(p.Suspense,{fallback:!1,children:(0,B.tZ)(ct,{artifactIdToEdit:m?"new":"",cancelEdit:k,allowUpload:!0,allowEmpty:!0})}),(0,B.tZ)(p.Suspense,{fallback:!1,children:(0,B.tZ)(_,{show:C,onHide:I})}),(0,B.tZ)(X,{pageKey:"artifactPage",modalTitle:t(nt||(nt=at`info.title`)),text:t("tipsOfTheDay",{returnObjects:!0}),children:(0,B.tZ)(st,{})}),tt&&(0,B.BX)(s.Z,{severity:"info",variant:"filled",children:["Looks like you haven't added any artifacts yet. If you want, there are",(0,B.tZ)(o.Z,{color:"warning.main",component:b.rU,to:"/scanner",children:"automatic scanners"}),"that can speed up the import process!"]}),(0,B.tZ)(E,{numShowing:pt.length,total:yt,artifactIds:pt}),(0,B.tZ)(w.Z,{ref:L,children:(0,B.tZ)(d.Z,{children:(0,B.tZ)(v.Z,{placement:"top",title:(0,B.tZ)(g.cC,{t,i18nKey:"efficiencyFilter.title",children:"Substats to use in efficiency calculation"}),children:(0,B.tZ)(c.Z,{children:(0,B.tZ)(x.Z,{selectedKeys:V,onChange:t=>e.displayArtifact.set({effFilter:t})})})})})}),(0,B.tZ)(w.Z,{children:(0,B.BX)(d.Z,{children:[(0,B.BX)(Z.ZP,{container:!0,alignItems:"center",sx:{pb:2},children:[(0,B.tZ)(Z.ZP,{item:!0,flexGrow:1,children:(0,B.tZ)(h.Z,{count:bt,page:xt+1,onChange:wt})}),(0,B.tZ)(Z.ZP,{item:!0,flexGrow:1,children:(0,B.tZ)(ht,{numShowing:gt.length,total:vt,t})}),(0,B.BX)(Z.ZP,{item:!0,xs:12,sm:6,md:4,lg:4,xl:3,display:"flex",children:[(0,B.tZ)(c.Z,{flexGrow:1}),(0,B.tZ)(S.Z,{sortKeys:[...U.OQ],value:K,onChange:t=>e.displayArtifact.set({sortType:t}),ascending:$,onChangeAsc:t=>e.displayArtifact.set({ascending:t})})]})]}),(0,B.tZ)(T,{artifactIds:pt})]})}),G&&(0,B.tZ)(et,{probabilityFilter:z,setProbabilityFilter:Y}),(0,B.BX)(Z.ZP,{container:!0,columns:ot,spacing:1,children:[(0,B.tZ)(Z.ZP,{item:!0,xs:!0,children:(0,B.tZ)(u.Z,{fullWidth:!0,onClick:P,color:"info",startIcon:(0,B.tZ)(l.Z,{}),children:t(rt||(rt=at`addNew`))})}),(0,B.tZ)(Z.ZP,{item:!0,xs:1,children:(0,B.tZ)(u.Z,{fullWidth:!0,onClick:A,color:"info",startIcon:(0,B.tZ)(a.Z,{}),children:t(lt||(lt=at`showDup`))})})]}),(0,B.tZ)(p.Suspense,{fallback:(0,B.tZ)(f.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:(0,B.tZ)(Z.ZP,{container:!0,spacing:1,columns:ot,children:gt.map((t=>(0,B.tZ)(Z.ZP,{item:!0,xs:1,children:(0,B.tZ)(F.Z,{artifactId:t,effFilter:R,onDelete:J,editorProps:{},canEquip:!0})},t)))})}),bt>1&&(0,B.tZ)(w.Z,{children:(0,B.tZ)(d.Z,{children:(0,B.BX)(Z.ZP,{container:!0,children:[(0,B.tZ)(Z.ZP,{item:!0,flexGrow:1,children:(0,B.tZ)(h.Z,{count:bt,page:xt+1,onChange:wt})}),(0,B.tZ)(Z.ZP,{item:!0,children:(0,B.tZ)(ht,{numShowing:gt.length,total:vt,t})})]})})})]})}function ht({numShowing:t,total:e,t:i}){return(0,B.tZ)(m.Z,{color:"text.secondary",children:(0,B.BX)(g.cC,{t:i,i18nKey:"showingNum",count:t,value:e,children:["Showing ",(0,B.tZ)("b",{children:{count:t}})," out of"," ",{value:e}," Artifacts"]})})}}}]);