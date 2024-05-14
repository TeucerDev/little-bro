import{u as L,r,bo as Q,a as j,bi as V,l as a,bl as q,b_ as R,a2 as J,aF as X,b$ as _,p as Y,N as M,c0 as Z,g as ee,bQ as ae,c1 as te,x as se,c2 as re,ae as oe,af as ne,ab as le,ag as ce,k as w,B as K,G as B,m as P,aT as W,ak as ie,q as O,ah as me,z as A,C as he,D as ue,T as de,O as fe,c3 as pe}from"./index-EieDzLXl.js";import{T as ge}from"./TeamCard-BxJpwflz.js";import{d as G}from"./Upload-B9eCOczJ.js";function ye({teamIds:l,charKeys:s,setCharKey:i,acProps:c}){const{t:m}=L(["sillyWisher_charNames","charNames_gen"]),{silly:y}=r.useContext(Q),o=j(),{gender:h}=V(),u=r.useCallback(e=>o.charMeta.get(e).favorite,[o.charMeta]),S=r.useCallback(e=>a(q,{characterKey:e}),[]),v=r.useCallback((e,n)=>m(`${n?"sillyWisher_charNames":"charNames_gen"}:${R(e,h)}`),[h,m]),E=ee,[I,C]=J();r.useEffect(()=>o.chars.followAny((e,n)=>["new","remove"].includes(n)&&C()),[o.chars,C]);const d=r.useMemo(()=>I&&o.chars.keys,[o,I]),{characterTeamTotal:f}=r.useMemo(()=>X({characterTeamTotal:d},n=>{o.teams.values.forEach(k=>{const{loadoutData:T}=k;T.filter(_).forEach(({teamCharId:D})=>{const p=o.teamChars.get(D);if(!p)return;const b=p.key;n.characterTeamTotal[b].total++})}),l.forEach(k=>{const T=o.teams.get(k);if(!T)return;const{loadoutData:D}=T;D.filter(_).forEach(({teamCharId:p})=>{const b=o.teamChars.get(p);if(!b)return;const F=b.key;n.characterTeamTotal[F].current++})})}),[o,d,l]),N=r.useCallback(e=>a("strong",{children:f[e]}),[f]),$=r.useCallback(e=>a(Y,{size:"small",label:f[e]}),[f]),x=r.useMemo(()=>d.map(e=>({key:e,label:v(e,y),alternateNames:y?[v(e,!y)]:void 0,favorite:u(e),color:E(e)})).sort((e,n)=>e.favorite&&!n.favorite?-1:!e.favorite&&n.favorite?1:e.label.localeCompare(n.label)),[y,v,E,u,d]);return a(r.Suspense,{fallback:a(M,{variant:"text",width:100}),children:a(Z,{label:"Characters",options:x,toImg:S,valueKeys:s,onChange:e=>i(e),toExLabel:N,toExItemLabel:$,chipProps:{variant:"outlined"},...c})})}function Te(){return{name:l=>l.name??"",lastEdit:l=>l.lastEdit??0}}const Ce={name:["name","lastEdit"],lastEdit:["lastEdit"]};function xe(l){return{charKeys:(s,i)=>{var o;if(!i.length)return!0;const c=(o=l.teams.get(s))==null?void 0:o.loadoutData.filter(_),m=c==null?void 0:c.map(({teamCharId:h})=>{var u;return(u=l.teamChars.get(h))==null?void 0:u.key}).filter(_);return i.every(h=>m==null?void 0:m.includes(h))},name:(s,i)=>{var c;return!i||!!((c=l.teams.get(s))!=null&&c.name.toLowerCase().includes(i.toLowerCase()))}}}const be={xs:1,sm:2,md:2,lg:3,xl:3},we={xs:6,sm:12,md:18,lg:24,xl:24};function ke(){const{t:l}=L(["page_teams","sillyWisher_charNames","charNames_gen"]),s=j(),[i,c]=J(),m=ae();r.useEffect(()=>s.teams.followAny((t,g)=>(g==="new"||g==="remove"||g==="update")&&c()),[c,s]),te();const y=()=>{const t=s.teams.new();m(t)},[o,h,u]=se(),[S,v]=r.useState(""),E=()=>{try{const t=JSON.parse(S);s.teams.import(t)||window.alert("Data verification failed."),u()}catch(t){window.alert(`Data Import failed. ${t}`);return}},I=re(s.displayTeam),{sortType:C,ascending:d,charKeys:f}=I,[N,$]=r.useState(I.searchTerm),x=r.useDeferredValue(N);r.useEffect(()=>{s.displayTeam.set({searchTerm:x})},[s,x]);const{teamIds:e,totalTeamNum:n}=r.useMemo(()=>{const t=s.teams.keys.length,g=s.teams.keys.filter(oe({charKeys:f,name:x},xe(s))).sort((U,z)=>ne(Ce[C],d,Te())(s.teams.get(U),s.teams.get(z)));return i&&{teamIds:g,totalTeamNum:t}},[i,s,f,x,C,d]),k=le(),{numShow:T,setTriggerElement:D}=ce(we[k],e.length),p=r.useMemo(()=>e.slice(0,T),[e,T]),b=e.length!==n?`${e.length}/${n}`:`${n}`,F={numShowing:p.length,total:b,t:l,namespace:"page_teams"},H={sortKeys:[...pe],value:C,onChange:t=>s.displayTeam.set({sortType:t}),ascending:d,onChangeAsc:t=>s.displayTeam.set({ascending:t})};return w(K,{display:"flex",flexDirection:"column",gap:1,children:[a(O,{children:w(P,{sx:{display:"flex",flexDirection:"column",gap:1},children:[w(K,{display:"flex",gap:1,alignItems:"stretch",children:[a(ye,{teamIds:e,charKeys:f,setCharKey:t=>s.displayTeam.set({charKeys:t}),acProps:{sx:{flexGrow:1}}}),a(W,{autoFocus:!0,value:N,onChange:t=>$(t.target.value),label:"Team Name",sx:{height:"100%",flexGrow:1},InputProps:{sx:{height:"100%"}}})]}),a(K,{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:a(ie,{showingTextProps:F,sortByButtonProps:H})})]})}),w(K,{sx:{display:"flex",gap:1},children:[a(A,{fullWidth:!0,onClick:y,color:"info",startIcon:a(me,{}),children:"Add Team"}),a(fe,{open:o,onClose:u,children:w(O,{children:[a(he,{title:"Import Team"}),a(ue,{}),w(P,{sx:{display:"flex",flexDirection:"column",gap:2},children:[a(de,{children:"Import a team in JSON form below."}),a(W,{fullWidth:!0,label:"JSON Data",placeholder:"Paste your Team JSON here",value:S,onChange:t=>v(t.target.value),multiline:!0,rows:4}),a(A,{startIcon:a(G,{}),disabled:!S,onClick:E,children:"Import"})]})]})}),a(A,{fullWidth:!0,onClick:h,color:"info",startIcon:a(G,{}),children:"Import Team"})]}),a(r.Suspense,{fallback:a(M,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:5e3}}),children:a(B,{container:!0,spacing:1,columns:be,children:p.map(t=>a(B,{item:!0,xs:1,children:a(r.Suspense,{fallback:a(M,{variant:"rectangular",width:"100%",height:150}),children:a(ge,{teamId:t,bgt:"light",onClick:g=>m(`${t}${g?`/${g}`:""}`)})})},t))})}),e.length!==p.length&&a(M,{ref:t=>{t&&D(t)},sx:{borderRadius:1},variant:"rectangular",width:"100%",height:100})]})}export{ke as default};