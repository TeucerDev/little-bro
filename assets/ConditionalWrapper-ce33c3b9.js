import{c as x,j as g,w as z,x as A,g as O,k as t,i as k,a8 as M,a9 as S,r as h,v as L,ab as D,l as H,u as N,a6 as P,a as F,b as $,ac as q,E as B,a_ as G,B as I,cC as R,cD as V}from"./index-9c4f648f.js";import{g as W,B as E}from"./index-46e46301.js";import{C as w}from"./ColoredText-d1deb99d.js";import{T as K,A as _,C as U}from"./StarDisplay-7421eee5.js";import{M as b}from"./DropdownButton-d77412d0.js";const ce=x(g.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),j=x(g.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite"),le=x(g.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock"),ne=x(g.jsx("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"}),"LockOpen");var T={},J=A;Object.defineProperty(T,"__esModule",{value:!0});var Q=T.default=void 0,X=J(z()),Y=g,Z=(0,X.default)((0,Y.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");Q=T.default=Z;function ee({options:d,valueKey:i,label:v,onChange:f,toImg:p,toExItemLabel:n,toExLabel:o,textFieldProps:y,...C}){const l=d.find(e=>e.key===i)??null,s=O();return t(_,{autoHighlight:!0,options:d,value:l,onChange:(e,r,c)=>f((r==null?void 0:r.key)??null),isOptionEqualToValue:(e,r)=>e.key===(r==null?void 0:r.key),renderInput:e=>{var a;const r=l==null?void 0:l.color,c=r?(a=s.palette[r])==null?void 0:a.main:void 0,u=l==null?void 0:l.key;return t(K,{...e,...y,label:v,InputProps:{...e.InputProps,startAdornment:u?p(u):void 0},inputProps:{...e.inputProps,autoComplete:"new-password",style:{color:c}},color:i?"success":"primary"})},renderOption:(e,r)=>k(b,{value:r.key,sx:{whiteSpace:"normal"},...e,children:[t(M,{children:p(r.key)}),t(S,{color:r.color,children:t(h.Suspense,{fallback:t(L,{variant:"text",width:100}),children:k(w,{color:r.color,sx:{display:"flex",gap:1},children:[r.key===(l==null?void 0:l.key)?t("strong",{children:r.label}):t("span",{children:r.label}),n==null?void 0:n(r.key)]})})}),!!r.favorite&&t(j,{})]}),filterOptions:(e,{inputValue:r})=>e.filter(c=>{var u;return c.label.toLowerCase().includes(r.toLowerCase())||((u=c.alternateNames)==null?void 0:u.some(a=>a.toLowerCase().includes(r.toLowerCase())))}),...C})}function ie({options:d,valueKeys:i,label:v,onChange:f,toImg:p,toExItemLabel:n,toExLabel:o,chipProps:y,...C}){const l=h.useMemo(()=>i.map(s=>d.find(e=>e.key===s)).filter(s=>s),[d,i]);return t(_,{autoHighlight:!0,options:d,multiple:!0,disableCloseOnSelect:!0,value:l,onChange:(s,e,r)=>r==="clear"?f([]):e!==null&&f(e.map(c=>c.key)),isOptionEqualToValue:(s,e)=>s.key===e.key,renderInput:s=>t(K,{...s,label:v,inputProps:{...s.inputProps,autoComplete:"new-password"},color:i.length?"success":"primary"}),renderOption:(s,e)=>k(b,{value:e.key,...s,children:[t(M,{children:p(e.key)}),t(S,{children:t(h.Suspense,{fallback:t(L,{variant:"text",width:100}),children:k(w,{color:e.color,sx:{display:"flex",gap:1},children:[i.includes(e.key)?t("strong",{children:e.label}):t("span",{children:e.label}),n==null?void 0:n(e.key)]})})}),!!e.favorite&&t(j,{})]}),renderTags:(s,e)=>s.map(({key:r,label:c,color:u},a)=>D(H,{...y,...e({index:a}),key:`${a}${r}${c}`,icon:p(r),label:o?k("span",{children:[c," ",o(r)]}):c,color:u})),filterOptions:(s,{inputValue:e})=>s.filter(r=>{var c;return r.label.toLowerCase().includes(e.toLowerCase())||((c=r.alternateNames)==null?void 0:c.some(u=>u.toLowerCase().includes(e.toLowerCase())))}),...C})}function ue({location:d,setLocation:i,filter:v=()=>!0,autoCompleteProps:f={}}){const{t:p}=N(["ui","artifact","sillyWisher_charNames","charNames_gen"]),{silly:n}=h.useContext(P),o=F(),{gender:y}=$(),C=h.useCallback(a=>m=>p(`${a?"sillyWisher_charNames":"charNames_gen"}:${q(o.chars.LocationToCharacterKey(m),y)}`),[o,y,p]),[l,s]=B();h.useEffect(()=>o.arts.followAny(()=>s()),[o,s]);const e=h.useMemo(()=>l&&o.chars.keys.map(a=>G(a)),[l,o]),r=h.useCallback(a=>a===""?t(E,{}):t(I,{sx:{opacity:e.includes(a)?void 0:.7},children:t(U,{characterKey:o.chars.LocationToCharacterKey(a)})}),[o,e]),c=h.useCallback(a=>a==="Traveler"?R.some(m=>o.charMeta.get(m).favorite):a?o.charMeta.get(a).favorite:!1,[o]),u=h.useMemo(()=>[{key:"",label:p`artifact:filterLocation.inventory`},...Array.from(new Set(V.filter(a=>v(W(o.chars.LocationToCharacterKey(a),y))))).map(a=>({key:a,label:C(n)(a),favorite:c(a),alternateNames:n?[C(!n)(a)]:void 0,color:e.includes(a)?void 0:"secondary"})).sort((a,m)=>a.favorite&&!m.favorite?-1:!a.favorite&&m.favorite?1:!a.color&&m.color?-1:a.color&&!m.color?1:a.label.localeCompare(m.label))],[p,o.chars,y,e,v,C,n,c]);return t(h.Suspense,{fallback:t(L,{variant:"text",width:100}),children:t(ee,{size:"small",options:u,valueKey:d,onChange:a=>i(a??""),toImg:r,...f})})}function he({condition:d,wrapper:i,falseWrapper:v,children:f}){return d?i(f):v?v(f):f}export{ce as A,he as C,j as F,ee as G,le as L,ne as a,ue as b,ie as c,Q as d};