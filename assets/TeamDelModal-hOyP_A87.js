import{r as g,D as _,a as v,dl as O,dx as k,bZ as w,d as a,f,b as e,af as T,T as p,cp as S,ck as L,o as E,e as $,B as A,p as j,ch as H,cm as F,K as D,u as J,cF as K,I as P,a6 as V,a7 as q,J as B,am as R,fx as U,a3 as W,ag as Z,h as M,a8 as z,l as G,C as N,aJ as Q}from"./index-DBjfXAcg.js";import{u as X}from"./useTeamChar-reDja0CS.js";import{d as Y}from"./Settings-BOO832Xq.js";function ee({optimizationTarget:t,customMultiTargets:m}){var s;const{data:o}=g.useContext(_),c=v(),d=g.useMemo(()=>O(o,t[0],c),[o,t,c]),{title:h,icon:n,action:l}=d??{},r=k(o.getDisplay(),t),{textSuffix:u,icon:x,name:y=t[0]==="custom"?(s=m[parseInt(t[1]??"")])==null?void 0:s.name:void 0}=(r&&w(r.info))??{};return a(S,{children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[n||x,e("span",{children:h}),!!l&&e(T,{color:"success",sx:{whiteSpace:"normal"},children:l})]}),e(p,{sx:{display:"flex",alignItems:"center"},children:a(T,{sx:{whiteSpace:"normal"},children:[e("strong",{children:y}),u&&a("span",{children:[" ",u]})]})})]})}function ae({teamCharId:t,showSetting:m=!1,children:o}){const c=v(),{name:d,description:h,buildIds:n,buildTcIds:l,optConfigId:r,customMultiTargets:u}=c.teamChars.get(t),{optimizationTarget:x}=L(r);return a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(E,{}),e(p,{variant:"h6",children:d}),!!h&&e(A,{title:e(p,{children:h}),children:e($,{})}),m&&e(Y,{sx:{ml:"auto"}})]}),a(f,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["Builds: ",e("strong",{children:n.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["TC Builds: ",e("strong",{children:l.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(H,{}),a(p,{children:["Custom multi-targets: ",e("strong",{children:u.length})]})]})]}),x&&a(p,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(F,{}),e(f,{children:"Optimization Target:"}),e(ee,{customMultiTargets:u,optimizationTarget:x})]}),o]})}function le({teamId:t,show:m,onHide:o,onDel:c}){const d=v(),h=J(t),{name:n,description:l,loadoutData:r}=h,u=g.useMemo(()=>r.map(i=>{if(!i)return[];const{teamCharId:s}=i;return d.teams.values.filter(({loadoutData:C})=>C.find(I=>(I==null?void 0:I.teamCharId)===s))}),[d,r]),[x,y]=g.useState(()=>u.map((i,s)=>i.length===1?s:void 0).filter(K)),b=()=>{d.teams.remove(t),r.forEach((i,s)=>{!i||!x.includes(s)||d.teamChars.remove(i.teamCharId)}),c()};return e(z,{open:m,onClose:o,children:a(M,{children:[e(P,{title:a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(f,{children:"Delete Team:"}),e("strong",{children:n}),l&&e(A,{title:l,children:e($,{})})]}),action:e(V,{onClick:o,children:e(q,{})})}),e(B,{}),a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(R,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."}),r.map((i,s)=>i?e(te,{teamCharId:i.teamCharId,selected:x.includes(s),onClick:()=>y(C=>U(C,s)),inTeams:u[s]},s):null)]}),e(B,{}),e(D,{sx:{display:"flex",justifyContent:"flex-end"},children:e(W,{color:"error",startIcon:e(Z,{}),onClick:b,children:"Delete"})})]})})}function te({teamCharId:t,selected:m,onClick:o,inTeams:c}){const d=X(t),{key:h}=d,n=G(h),{target:l}=(n==null?void 0:n[h])??{},r=g.useMemo(()=>{if(!(!n||!l))return{data:l,teamData:n,compareData:void 0}},[l,n]);if(r)return e(_.Provider,{value:r,children:e(M,{bgt:"light",sx:{border:m?"2px red solid":void 0},children:e(N,{onClick:o,children:e(ae,{teamCharId:t,children:e(Q,{color:c.length===1?"success":"warning",children:e(p,{children:c.length===1?"Only in current team":`In ${c.length} teams`})})})})})})}export{ae as L,ee as O,le as T};
