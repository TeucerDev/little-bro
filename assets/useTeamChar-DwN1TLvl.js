import{a as u,fr as f}from"./index-BmhduvC8.js";function d(a){const r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(r,(o,t,n,s)=>t+t+n+n+s+s);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function c(a,r=1){if(a)return`rgba(${a.r},${a.g},${a.b},${r})`}function g(a){const r=u();return f(r.teamChars,a)}export{c,d as h,g as u};
