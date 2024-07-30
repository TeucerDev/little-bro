import{bg as B,bf as M,fn as y,bp as N,bh as P,T as U,bn as k,bi as i,r as h,bj as _,bk as z,fo as I,cZ as W,j as w,bl as E,bm as H,v as K,b as x,d as O,L as Z,ac as q,am as G}from"./index-CLYw4doG.js";function J(e){return M("MuiLink",e)}const Q=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),S=Q,g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},X=e=>g[e]||e,Y=({theme:e,ownerState:n})=>{const o=X(n.color),s=y(e,`palette.${o}`,!1)||n.color,r=y(e,`palette.${o}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:N(s,.4)},ee=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],ne=e=>{const{classes:n,component:o,focusVisible:s,underline:r}=e,t={root:["root",`underline${k(r)}`,o==="button"&&"button",s&&"focusVisible"]};return H(t,J,n)},oe=P(U,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`underline${k(o.underline)}`],o.component==="button"&&n.button]}})(({theme:e,ownerState:n})=>i({},n.underline==="none"&&{textDecoration:"none"},n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},n.underline==="always"&&i({textDecoration:"underline"},n.color!=="inherit"&&{textDecorationColor:Y({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${S.focusVisible}`]:{outline:"auto"}})),se=h.forwardRef(function(n,o){const s=_({props:n,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:C,underline:L="always",variant:p="inherit",sx:l}=s,v=z(s,ee),{isFocusVisibleRef:f,onBlur:A,onFocus:F,ref:V}=I(),[R,b]=h.useState(!1),T=W(o,V),$=a=>{A(a),f.current===!1&&b(!1),u&&u(a)},j=a=>{F(a),f.current===!0&&b(!0),d&&d(a)},m=i({},s,{color:t,component:c,focusVisible:R,underline:L,variant:p}),D=ne(m);return w.jsx(oe,i({color:t,className:E(D.root,r),classes:C,component:c,onBlur:$,onFocus:j,ref:T,ownerState:m,variant:p,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},v))}),re=se;function ae(){const{t:e}=K("artifact");return x(G,{severity:"info",variant:"filled",children:O(q,{t:e,i18nKey:"noArtifacts",children:["Looks like you haven't added any artifacts yet. If you want, there are ",x(re,{color:"warning.main",component:Z,to:"/scanner",fontFamily:"inherit",children:"automatic scanners"})," that can speed up the import process!"]})})}export{ae as A,re as L};
