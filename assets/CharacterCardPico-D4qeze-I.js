import{fa as B,a1 as m,b as t,fb as A,f as l,i as v,fc as z,bz as H,r as d,bF as R,C as W,h as C,d as f,bG as I,bH as P,T as g,af as x,eP as _,fd as j,fe as w,eC as D,B as F,R as N}from"./index-AnYCBrJQ.js";function q(e){const a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,(o,i,r,s)=>i+i+r+r+s+s);const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}function E(e,a){if(e)return`rgba(${e.r},${e.g},${e.b},${a})`}function G({dataAdSlot:e,bgt:a="normal",maxHeight:n=350}){const{width:o,height:i,ref:r}=B(),[s,h,c]=m(!0);return s?t(l,{ref:r,sx:{height:"100%",width:"100%",maxHeight:n},children:o&&t(A,{bgt:a,onClose:p=>{p.stopPropagation(),c()},dataAdSlot:e,sx:{width:o,height:Math.max(i,n)}})}):null}function L({characterKey:e,onClick:a,onMouseDown:n,onMouseEnter:o,hoverChild:i,hideFav:r}){const s=v(e),{favorite:h}=z(e),{gender:c}=H(),{silly:p}=d.useContext(R),u=d.useCallback(()=>a==null?void 0:a(e),[e,a]),b=d.useCallback($=>t(W,{onClick:u,onMouseDown:n,onMouseEnter:o,children:$}),[u,n,o]),[y,S,T]=m();return t(F,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!i&&y,onClose:T,onOpen:S,title:i,children:t(C,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:f(D,{condition:!!a||!!n||!!o,wrapper:b,children:[t(l,{display:"flex",className:`grad-${I(e).rarity}star`,children:t(l,{component:"img",src:P(e,c,p),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),s&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:t("strong",{children:f(x,{color:"primary",children:[s.level,"/",_[s.ascension]]})})}),!r&&t(l,{sx:{position:"absolute",top:0,right:0},children:h?t(j,{fontSize:"small"}):t(w,{fontSize:"small"})}),s&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:f(x,{color:"secondary",children:["C",s.constellation]})})})]})})})}function J({index:e}){return t(C,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:t(l,{component:"img",src:N.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}export{G as A,J as B,L as C,E as c,q as h};