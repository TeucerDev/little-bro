import{r as g,D as _,a as v,dl as M,dx as O,bZ as w,d as a,f,b as e,ae as T,T as p,cp as S,ck as L,o as E,e as $,B as k,ap as H,p as j,ch as F,cm as K,K as D,u as P,cF as V,I as q,a5 as J,a6 as R,J as B,ak as U,fx as W,a2 as Z,af as z,h as A,a7 as G,l as N,C as Q,aI as X}from"./index-CjgJUq4G.js";import{u as Y}from"./useTeamChar-C_4uuedr.js";function ee({optimizationTarget:t,customMultiTargets:m}){var s;const{data:o}=g.useContext(_),c=v(),d=g.useMemo(()=>M(o,t[0],c),[o,t,c]),{title:h,icon:n,action:l}=d??{},r=O(o.getDisplay(),t),{textSuffix:u,icon:x,name:y=t[0]==="custom"?(s=m[parseInt(t[1]??"")])==null?void 0:s.name:void 0}=(r&&w(r.info))??{};return a(S,{children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[n||x,e("span",{children:h}),!!l&&e(T,{color:"success",sx:{whiteSpace:"normal"},children:l})]}),e(p,{sx:{display:"flex",alignItems:"center"},children:a(T,{sx:{whiteSpace:"normal"},children:[e("strong",{children:y}),u&&a("span",{children:[" ",u]})]})})]})}function ae({teamCharId:t,showSetting:m=!1,children:o}){const c=v(),{name:d,description:h,buildIds:n,buildTcIds:l,optConfigId:r,customMultiTargets:u}=c.teamChars.get(t),{optimizationTarget:x}=L(r);return a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(E,{}),e(p,{variant:"h6",children:d}),!!h&&e(k,{title:e(p,{children:h}),children:e($,{})}),m&&e(H,{sx:{ml:"auto"}})]}),a(f,{sx:{display:"flex",gap:1,justifyContent:"space-between"},children:[a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["Builds: ",e("strong",{children:n.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(j,{}),a(p,{children:["TC Builds: ",e("strong",{children:l.length})]})]}),a(f,{sx:{display:"flex",justifyItems:"center",gap:1},children:[e(F,{}),a(p,{children:["Custom multi-targets: ",e("strong",{children:u.length})]})]})]}),x&&a(p,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(K,{}),e(f,{children:"Optimization Target:"}),e(ee,{customMultiTargets:u,optimizationTarget:x})]}),o]})}function re({teamId:t,show:m,onHide:o,onDel:c}){const d=v(),h=P(t),{name:n,description:l,loadoutData:r}=h,u=g.useMemo(()=>r.map(i=>{if(!i)return[];const{teamCharId:s}=i;return d.teams.values.filter(({loadoutData:C})=>C.find(I=>(I==null?void 0:I.teamCharId)===s))}),[d,r]),[x,y]=g.useState(()=>u.map((i,s)=>i.length===1?s:void 0).filter(V)),b=()=>{d.teams.remove(t),r.forEach((i,s)=>{!i||!x.includes(s)||d.teamChars.remove(i.teamCharId)}),c()};return e(G,{open:m,onClose:o,children:a(A,{children:[e(q,{title:a(f,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(f,{children:"Delete Team:"}),e("strong",{children:n}),l&&e(k,{title:l,children:e($,{})})]}),action:e(J,{onClick:o,children:e(R,{})})}),e(B,{}),a(D,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e(U,{severity:"info",children:"Removing the team will remove: resonance buffs, and enemy configs stored in the team. Loadouts that are only in this team are also selected by default for deletion."}),r.map((i,s)=>i?e(te,{teamCharId:i.teamCharId,selected:x.includes(s),onClick:()=>y(C=>W(C,s)),inTeams:u[s]},s):null)]}),e(B,{}),e(D,{sx:{display:"flex",justifyContent:"flex-end"},children:e(Z,{color:"error",startIcon:e(z,{}),onClick:b,children:"Delete"})})]})})}function te({teamCharId:t,selected:m,onClick:o,inTeams:c}){const d=Y(t),{key:h}=d,n=N(h),{target:l}=(n==null?void 0:n[h])??{},r=g.useMemo(()=>{if(!(!n||!l))return{data:l,teamData:n,compareData:void 0}},[l,n]);if(r)return e(_.Provider,{value:r,children:e(A,{bgt:"light",sx:{border:m?"2px red solid":void 0},children:e(Q,{onClick:o,children:e(ae,{teamCharId:t,children:e(X,{color:c.length===1?"success":"warning",children:e(p,{children:c.length===1?"Only in current team":`In ${c.length} teams`})})})})})})}export{ae as L,ee as O,re as T};
