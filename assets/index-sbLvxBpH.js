import{v as r,b as a,aR as g,d as i,ac as c,aO as l,aP as d,r as h,aS as p,aT as f,aU as x,a3 as C,a0 as T,T as y,K as u,J as m,aV as w,h as v}from"./index-CLYw4doG.js";const L={chs:"简体中文",cht:"繁體中文",de:"Deutsch",en:"English",es:"Español",fr:"Français",id:"Bahasa Indonesia",it:"Italiano",ja:"日本語",ko:"한국어",pt:"Português",ru:"Русский язык",th:"ภาษาไทย",tr:"Türkçe",vi:"Tiếng Việt"};function S(){const{t:e,i18n:s}=r(["ui","settings"]),o=t=>()=>s.changeLanguage(t),n=s.languages[0];return a(d,{fullWidth:!0,title:e("settings:languageCard.languageFormat",{language:e(`languages:${n}`)}),children:g.map(t=>i(l,{selected:n===t,disabled:n===t,onClick:o(t),children:[a(c,{i18nKey:`languages:${t}`}),t!==n?` (${L[t]})`:""]},t))})}function D(){const{snow:e,setSnow:s}=h.useContext(p),{t:o}=r();return i(C,{fullWidth:!0,color:e?"success":"secondary",onClick:()=>s(!e),startIcon:e?a(f,{}):a(x,{}),children:["❄ ",o("settings:letsnow")," ❄"]})}function k(){const{t:e}=r(["settings"]);return T.send({hitType:"pageview",page:"/setting"}),i(v,{sx:{my:1},children:[a(u,{sx:{py:1},children:a(y,{variant:"subtitle1",children:a(c,{t:e,i18nKey:"title"})})}),a(m,{}),i(u,{sx:{display:"flex",flexDirection:"column",gap:2},children:[a(S,{}),a(D,{}),a(w,{})]})]})}export{k as default};
