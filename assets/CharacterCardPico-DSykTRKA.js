import{fi as v,a0 as C,b as e,fj as z,f as i,i as H,fk as W,bz as j,r as h,bG as w,C as I,h as b,d as f,bH as N,bE as l,bI as P,T as g,ae as u,eY as _,fl as $,fm as D,eL as E,B as L,Q as O}from"./index-ZfUGPbze.js";function q({dataAdSlot:t,bgt:a="normal",maxHeight:o=350}){const{width:n,height:r,ref:c}=v(),[s,m,p]=C(!0);return s?e(i,{ref:c,sx:{height:"100%",width:"100%",maxHeight:o},children:n&&e(z,{bgt:a,onClose:d=>{d.stopPropagation(),p()},dataAdSlot:t,sx:{width:n,height:Math.max(r,o)}})}):null}function F({characterKey:t,onClick:a,onMouseDown:o,onMouseEnter:n,hoverChild:r,hideFav:c}){const s=H(t),{favorite:m}=W(t),{gender:p}=j(),{silly:d}=h.useContext(w),x=h.useCallback(()=>a==null?void 0:a(t),[t,a]),y=h.useCallback(T=>e(I,{onClick:x,onMouseDown:o,onMouseEnter:n,children:T}),[x,o,n]),[S,B,A]=C();return e(L,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!r&&S,onClose:A,onOpen:B,title:r,children:e(b,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:f(E,{condition:!!a||!!o||!!n,wrapper:y,children:[e(i,{display:"flex",className:`grad-${N(t).rarity}star`,children:e(i,{component:l?l:"img",src:P(t,p,d),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),s&&e(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:e("strong",{children:f(u,{color:"primary",children:[s.level,"/",_[s.ascension]]})})}),!c&&e(i,{sx:{position:"absolute",top:0,right:0},children:m?e($,{fontSize:"small"}):e(D,{fontSize:"small"})}),s&&e(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:e("strong",{children:f(u,{color:"secondary",children:["C",s.constellation]})})})]})})})}function G({index:t}){return e(b,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:e(i,{component:l?l:"img",src:O.team[`team${t+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}export{q as A,G as B,F as C};