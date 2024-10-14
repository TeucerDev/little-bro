import{bf as B,be as M,fo as y,bo as N,bg as P,T as U,bm as k,bh as i,r as h,bi as _,bj as z,fp as I,c$ as W,j as w,bk as E,bl as H,v as K,b as x,d as O,L as q,ab as G,ak as J}from"./index-BbKEiuDu.js";function Q(e){return M("MuiLink",e)}const S=B("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),X=S,g={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Y=e=>g[e]||e,Z=({theme:e,ownerState:n})=>{const o=Y(n.color),s=y(e,`palette.${o}`,!1)||n.color,r=y(e,`palette.${o}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:N(s,.4)},ee=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],ne=e=>{const{classes:n,component:o,focusVisible:s,underline:r}=e,t={root:["root",`underline${k(r)}`,o==="button"&&"button",s&&"focusVisible"]};return H(t,Q,n)},oe=P(U,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`underline${k(o.underline)}`],o.component==="button"&&n.button]}})(({theme:e,ownerState:n})=>i({},n.underline==="none"&&{textDecoration:"none"},n.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},n.underline==="always"&&i({textDecoration:"underline"},n.color!=="inherit"&&{textDecorationColor:Z({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),n.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${X.focusVisible}`]:{outline:"auto"}})),se=h.forwardRef(function(n,o){const s=_({props:n,name:"MuiLink"}),{className:r,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:C,underline:L="always",variant:p="inherit",sx:l}=s,v=z(s,ee),{isFocusVisibleRef:f,onBlur:A,onFocus:F,ref:V}=I(),[R,b]=h.useState(!1),$=W(o,V),D=a=>{A(a),f.current===!1&&b(!1),u&&u(a)},T=a=>{F(a),f.current===!0&&b(!0),d&&d(a)},m=i({},s,{color:t,component:c,focusVisible:R,underline:L,variant:p}),j=ne(m);return w.jsx(oe,i({color:t,className:E(j.root,r),classes:C,component:c,onBlur:D,onFocus:T,ref:$,ownerState:m,variant:p,sx:[...Object.keys(g).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},v))}),re=se;function ae(){const{t:e}=K("artifact");return x(J,{severity:"info",variant:"filled",children:O(G,{t:e,i18nKey:"noArtifacts",children:["Looks like you haven't added any artifacts yet. If you want, there are ",x(re,{color:"warning.main",component:q,to:"/scanner",fontFamily:"inherit",children:"automatic scanners"})," that can speed up the import process!"]})})}export{ae as A,re as L};
