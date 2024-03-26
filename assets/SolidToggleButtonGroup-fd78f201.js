import{al as L,ak as m,am as G,ay as S,aB as k,an as u,aF as R,r as v,ao as N,ar as U,j,at as M,au as E,cd as F}from"./index-c6225add.js";function P(o){return m("MuiToggleButton",o)}const _=L("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),O=_,w=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],A=o=>{const{classes:e,fullWidth:t,selected:r,disabled:i,size:d,color:g}=o,c={root:["root",r&&"selected",i&&"disabled",t&&"fullWidth",`size${k(d)}`,g]};return E(c,P,e)},D=G(S,{name:"MuiToggleButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[`size${k(t.size)}`]]}})(({theme:o,ownerState:e})=>{let t=e.color==="standard"?o.palette.text.primary:o.palette[e.color].main,r;return o.vars&&(t=e.color==="standard"?o.vars.palette.text.primary:o.vars.palette[e.color].main,r=e.color==="standard"?o.vars.palette.text.primaryChannel:o.vars.palette[e.color].mainChannel),u({},o.typography.button,{borderRadius:(o.vars||o).shape.borderRadius,padding:11,border:`1px solid ${(o.vars||o).palette.divider}`,color:(o.vars||o).palette.action.active},e.fullWidth&&{width:"100%"},{[`&.${O.disabled}`]:{color:(o.vars||o).palette.action.disabled,border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:R(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${O.selected}`]:{color:t,backgroundColor:o.vars?`rgba(${r} / ${o.vars.palette.action.selectedOpacity})`:R(t,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${r} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:R(t,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?`rgba(${r} / ${o.vars.palette.action.selectedOpacity})`:R(t,o.palette.action.selectedOpacity)}}}},e.size==="small"&&{padding:7,fontSize:o.typography.pxToRem(13)},e.size==="large"&&{padding:15,fontSize:o.typography.pxToRem(15)})}),H=v.forwardRef(function(e,t){const r=N({props:e,name:"MuiToggleButton"}),{children:i,className:d,color:g="standard",disabled:c=!1,disableFocusRipple:C=!1,fullWidth:T=!1,onChange:n,onClick:y,selected:B,size:s="medium",value:f}=r,$=U(r,w),b=u({},r,{color:g,disabled:c,disableFocusRipple:C,fullWidth:T,size:s}),z=A(b),h=a=>{y&&(y(a,f),a.defaultPrevented)||n&&n(a,f)};return j.jsx(D,u({className:M(z.root,d),disabled:c,focusRipple:!C,ref:t,onClick:h,onChange:n,value:f,ownerState:b,"aria-pressed":B},$,{children:i}))}),eo=H;function V(o,e){return e===void 0||o===void 0?!1:Array.isArray(e)?e.indexOf(o)>=0:o===e}function q(o){return m("MuiToggleButtonGroup",o)}const I=L("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),l=I,J=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],Q=o=>{const{classes:e,orientation:t,fullWidth:r,disabled:i}=o,d={root:["root",t==="vertical"&&"vertical",r&&"fullWidth"],grouped:["grouped",`grouped${k(t)}`,i&&"disabled"]};return E(d,q,e)},X=G("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[{[`& .${l.grouped}`]:e.grouped},{[`& .${l.grouped}`]:e[`grouped${k(t.orientation)}`]},e.root,t.orientation==="vertical"&&e.vertical,t.fullWidth&&e.fullWidth]}})(({ownerState:o,theme:e})=>u({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},o.orientation==="vertical"&&{flexDirection:"column"},o.fullWidth&&{width:"100%"},{[`& .${l.grouped}`]:u({},o.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${l.selected} + .${l.grouped}.${l.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${l.selected} + .${l.grouped}.${l.selected}`]:{borderTop:0,marginTop:0}})})),Y=v.forwardRef(function(e,t){const r=N({props:e,name:"MuiToggleButtonGroup"}),{children:i,className:d,color:g="standard",disabled:c=!1,exclusive:C=!1,fullWidth:T=!1,onChange:n,orientation:y="horizontal",size:B="medium",value:s}=r,f=U(r,J),$=u({},r,{disabled:c,fullWidth:T,orientation:y,size:B}),b=Q($),z=(a,p)=>{if(!n)return;const W=s&&s.indexOf(p);let x;s&&W>=0?(x=s.slice(),x.splice(W,1)):x=s?s.concat(p):[p],n(a,x)},h=(a,p)=>{n&&n(a,s===p?null:p)};return j.jsx(X,u({role:"group",className:M(b.root,d),ref:t,ownerState:$},f,{children:v.Children.map(i,a=>v.isValidElement(a)?v.cloneElement(a,{className:M(b.grouped,a.props.className),onChange:C?h:z,selected:a.props.selected===void 0?V(a.props.value,s):a.props.selected,size:a.props.size||B,fullWidth:T,color:a.props.color||g,disabled:a.props.disabled||c}):null)}))}),Z=Y;function to(o){return(e,t)=>{const r=e.length;return r===o.length?[t]:r===1&&e[0]===t?[...o]:[...new Set(F(e,t))]}}const K=G(Z,{shouldForwardProp:o=>o!=="baseColor"&&o!=="selectedColor"})(({theme:o,baseColor:e="secondary",selectedColor:t="success"})=>({"& .MuiToggleButtonGroup-grouped":{"&":{backgroundColor:o.palette[e].main,color:o.palette[e].contrastText},"&:hover":{backgroundColor:o.palette[e].dark,transition:"background-color 0.25s ease"},"&.Mui-selected":{backgroundColor:o.palette[t].main,color:o.palette[t].contrastText},"&.Mui-selected:hover":{backgroundColor:o.palette[t].dark},"&.Mui-disabled":{backgroundColor:o.palette[e].dark},"&.Mui-selected.Mui-disabled":{backgroundColor:o.palette[t].dark}}})),ro=K;export{ro as S,eo as T,Z as a,to as h};
