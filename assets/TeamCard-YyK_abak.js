import{a as $,eL as R,ew as B,eN as q,b8 as H,r as x,be as W,l as e,n as v,x as k,q as y,k as h,B as g,bg as w,bh as z,T as C,Z as _,ee as E,eO as N,eP as L,e1 as D,dy as P,s as M,Q as F,U as G,j as U,et as Z,g as Q,dU as J,G as I,d8 as V,eW as X,ci as Y,N as K,dN as ee,dO as ae,cW as te,eZ as re,dP as ne,cf as se}from"./index-BkQk_ytm.js";function ie(a){const n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(n,(c,u,p,t)=>u+u+p+p+t+t);const s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return s?{r:parseInt(s[1],16),g:parseInt(s[2],16),b:parseInt(s[3],16)}:null}function me(a,n){if(a)return`rgba(${a.r},${a.g},${a.b},${n})`}function oe(a){const n=$();return R(n.teamChars,a)}function ce({characterKey:a,onClick:n,onMouseDown:s,onMouseEnter:c,hoverChild:u,hideFav:p}){const t=B(a),{favorite:m}=q(a),{gender:f}=H(),{silly:b}=x.useContext(W),r=x.useCallback(()=>n==null?void 0:n(a),[a,n]),l=x.useCallback(T=>e(v,{onClick:r,onMouseDown:s,onMouseEnter:c,children:T}),[r,s,c]),[i,o,d]=k();return e(P,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!u&&i,onClose:d,onOpen:o,title:u,children:e(y,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:h(D,{condition:!!n||!!s||!!c,wrapper:l,children:[e(g,{display:"flex",className:`grad-${w(a).rarity}star`,children:e(g,{component:"img",src:z(a,f,b),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),t&&e(C,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:e("strong",{children:h(_,{color:"primary",children:[t.level,"/",E[t.ascension]]})})}),!p&&e(g,{sx:{position:"absolute",top:0,right:0},children:m?e(N,{fontSize:"small"}):e(L,{fontSize:"small"})}),t&&e(C,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:e("strong",{children:h(_,{color:"secondary",children:["C",t.constellation]})})})]})})})}function le({index:a}){return e(y,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:e(g,{component:"img",src:M.team[`team${a+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}var S={},de=G;Object.defineProperty(S,"__esModule",{value:!0});var A=S.default=void 0,ue=de(F()),he=U,pe=(0,ue.default)((0,he.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");A=S.default=pe;function xe({teamId:a,onClick:n,hoverCard:s=!1,bgt:c}){const u=Z(a),{name:p,description:t,loadoutData:m}=u,f=$(),b=m.map(r=>{if(!r)return;const l=f.teamChars.get(r.teamCharId);if(l)return Q(l.key)});return e(y,{bgt:c,sx:{height:"100%"},children:h(g,{sx:r=>({height:"100%",display:"flex",flexDirection:"column",background:`linear-gradient(to right, ${b.map(i=>{if(!i)return"rgba(0,0,0,0)";const o=r.palette[i].main,d=ie(o);return d?`rgba(${d.r},${d.g},${d.b},0.25)`:"rgba(0,0,0,0)"}).map((i,o)=>`${i} ${o*25+12.5}%`).join(", ")})`}),children:[e(v,{onClick:()=>n(),sx:{p:1},children:h(C,{sx:{display:"flex",gap:1},children:[e("span",{children:p})," ",t&&e(P,{title:e(C,{children:t}),children:e(J,{})})]})}),e(g,{sx:{p:1,marginTop:"auto"},children:e(I,{container:!0,columns:4,spacing:1,children:m.map((r,l)=>{var d;const i=r==null?void 0:r.teamCharId,o=i&&((d=f.teamChars.get(i))==null?void 0:d.key);return e(I,{item:!0,xs:1,height:"100%",children:o?e(v,{onClick:()=>n(o),children:e(ce,{characterKey:o,hoverChild:s&&e(ge,{characterKey:o,teamCharId:i,teamId:a}),hideFav:!0})}):e(v,{onClick:()=>n(),children:e(le,{index:l})})},l)})})})]})})}function ge({characterKey:a,teamId:n,teamCharId:s}){var d;const c=$(),u=B(a),{name:p}=oe(s),t=c.teams.getLoadoutDatum(n,s),m=c.teams.getActiveBuildName(t),f=c.teams.getLoadoutWeapon(t),b=(()=>{const{buildType:T,buildTcId:j}=t;return T==="tc"&&j?V(c.buildTcs.get(j)):Object.values(c.teams.getLoadoutArtifacts(t)).filter(O=>O)})(),r=X(a,void 0,b,f),l=(d=r==null?void 0:r[a])==null?void 0:d.target,i=x.useMemo(()=>u&&{character:u},[u]),o=x.useMemo(()=>l&&r&&{data:l,teamData:r},[l,r]);return!i||!o?null:e(se.Provider,{value:i,children:e(Y.Provider,{value:o,children:e(g,{sx:{width:300,m:-1},children:e(x.Suspense,{fallback:e(K,{variant:"rectangular",width:"100%",height:300}),children:h(y,{children:[e(ee,{characterKey:a,children:e(ae,{characterKey:a})}),h(g,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:[h(C,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(A,{}),e("span",{children:p})]}),h(C,{sx:{display:"flex",gap:1,alignItems:"center"},children:[e(te,{}),e("span",{children:m})]}),(t==null?void 0:t.buildType)==="tc"&&(t!=null&&t.buildTcId)?e(re,{weapon:f}):e(ne,{})]})]})})})})})}export{ce as C,xe as T,me as c,A as d,ie as h,oe as u};
