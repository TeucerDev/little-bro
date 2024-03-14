import{a as j,k as t,cE as lt,cF as dt,cG as ut,cH as ht,cI as ft,cJ as pt,cK as mt,cL as gt,cM as vt,cN as yt,bm as xt,bk as St,bo as oe,cm as Z,cO as bt,co as X,cP as T,cl as ee,ck as z,cn as L,cQ as te,u as Ce,b0 as ve,a$ as _t,i as l,b6 as D,T as g,w as H,x as G,j as V,aa as De,r as b,d as ae,cR as Ct,U as B,E as Dt,b as N,cj as It,cS as wt,bw as Mt,cb as Rt,Q as $t,B as v,v as ie,n as W,G as $,f as jt,aH as ce,aZ as kt,a6 as Ie,aY as le,aV as we,l as A,bI as Me,aJ as Re,q as Bt,b1 as $e,aM as Et,o as je,c0 as Nt,J as ke,bx as Tt,bz as zt,bH as At,bG as Ot,aG as Wt,bA as Ht,bB as Gt,br as Vt,ae as Be}from"./index-9c4f648f.js";import{B as Ee,d as Ft}from"./BootstrapTooltip-fc59917c.js";import{b as J,d as qt,e as Pt,h as Kt,p as Lt}from"./StarDisplay-7421eee5.js";import{D as Q}from"./DataContext-97d19631.js";import{E as Ut,s as Ne,L as S,M as I,N as w,O as y,P as R,p as m,Q as F,R as q,V as Jt,W as Qt,T as Te,X as E,Y as ne,r as Yt,g as P,v as se,G as Zt,Z as Xt,x as ze,I as ea,q as Ae,S as k,d as ta,w as aa,u as ye,y as na,n as sa,K as Oe,C as O,_ as ra,i as U,o as xe,m as oa,D as ia}from"./index-46e46301.js";import{c as ca,g as la,A as We}from"./Artifact-3098e02d.js";import{S as da}from"./SlotIcon-e408a3f6.js";import{i as de,I as ua}from"./ColoredText-d1deb99d.js";import{u as ha}from"./useWeapon-2a1cd4a4.js";import{g as He,W as Ge}from"./index-a4c7472a.js";function fa(e){const a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,(s,o,r,i)=>o+o+r+r+i+i);const n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}function pa(e){const a=j();return J(a.charMeta,e)}function Ve(e){const a=j();return J(a.chars,e)}function ma(e){const a=j();return J(a.teams,e)}function ga(e){const a=j();return J(a.teamChars,e)}function va({statKey:e,iconProps:a={}}){switch(e){case"hp":case"hp_":case"base_hp":return t(St,{...a});case"atk":case"atk_":case"base_atk":return t(xt,{...a});case"def":case"def_":case"base_def":return t(yt,{...a});case"eleMas":return t(vt,{...a});case"critRate_":return t(gt,{...a});case"critDMG_":return t(mt,{...a});case"enerRech_":return t(pt,{...a});case"incHeal_":return t(ft,{...a});case"heal_":return t(ht,{...a});case"cdRed_":return t(ut,{...a});case"shield_":return t(dt,{...a});case"stamina":return t(lt,{...a})}const n=e.split("_")[0];return oe.includes(n)?t(ya,{ele:n,iconProps:a}):null}function ya({ele:e,iconProps:a={}}){switch(e){case"anemo":return t(te,{...a});case"cryo":return t(L,{...a});case"dendro":return t(z,{...a});case"electro":return t(ee,{...a});case"geo":return t(T,{...a});case"hydro":return t(X,{...a});case"physical":return t(bt,{...a});case"pyro":return t(Z,{...a})}}function xa({statKey:e,value:a,color:n,prefix:s="",typographyProps:o={}}){const{t:r}=Ce("statKey_gen"),i=ve(e),c=_t(a,ve(e));return l(g,{color:n?`${n}.main`:void 0,...o,children:[t(va,{statKey:e,iconProps:D})," ",r(e)," ",t("strong",{children:`${s}${c}${i}`})]},e)}function Fe({condition:e,wrapper:a,falseWrapper:n,children:s}){return e?a(s):n?n(s):s}var ue={},Sa=G;Object.defineProperty(ue,"__esModule",{value:!0});var qe=ue.default=void 0,ba=Sa(H()),_a=V,Ca=(0,ba.default)((0,_a.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");qe=ue.default=Ca;const Pe=({stars:e=1,colored:a=!1,inline:n=!1})=>t(De,{color:a?"warning":void 0,children:[...Array(e).keys()].map((s,o)=>t(qt,{fontSize:n?"inherit":void 0,sx:n?{verticalAlign:"text-top"}:void 0},o))});var he={},Da=G;Object.defineProperty(he,"__esModule",{value:!0});var Ia=he.default=void 0,wa=Da(H()),Ma=V,Ra=(0,wa.default)((0,Ma.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");Ia=he.default=Ra;const $a=b.createContext({});function ja({iconProps:e}){const[a,n]=b.useState(0);return b.useEffect(()=>{const s=setInterval(()=>n(o=>o+1),1e3);return()=>clearInterval(s)},[]),t(Ut,{ele:ae[a%ae.length],iconProps:e})}const x=e=>t(Te,{ns:"elementalResonance_gen",key18:e}),re=e=>t(Te,{ns:"elementalResonance",key18:e}),C=Ne(...ae.map(e=>S[e])),Ke=Ct(oe,e=>[`${e}_res_`,I(m.charKey,y(S.ele,4,R(.15)),w.info(`${e}_res_`))]),ka={name:x("ProtectiveCanopy.name"),desc:x("ProtectiveCanopy.desc"),icon:l("span",{children:[t(ja,{iconProps:D})," x4"]}),canShow:e=>e.get(S.ele).value>=4,sections:[{teamBuff:!0,fields:Object.values(Ke).map(([e,a])=>({node:a}))}]},[Ba,Ea]=I(m.charKey,y(C,4,y(S.pyro,2,R(.25))),w.info("atk_")),Na={name:x("FerventFlames.name"),desc:x("FerventFlames.desc"),icon:l("span",{children:[t(Z,{...D})," ",t(Z,{...D})]}),canShow:e=>e.get(S.pyro).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:E("effectDuration.cryo"),value:-40,unit:"%"},{node:Ba}]}]},[Ta,za]=I(m.charKey,y(C,4,y(S.hydro,2,R(.25))),w.info("hp_")),Aa={name:x("SoothingWater.name"),desc:x("SoothingWater.desc"),icon:l("span",{children:[t(X,{...D})," ",t(X,{...D})]}),canShow:e=>e.get(S.hydro).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:E("effectDuration.pyro"),value:-40,unit:"%"},{node:Ta}]}]},Le=["resonance","ShatteringIce"],Ue=F(Le),[Oa,Wa]=I(m.charKey,y(C,4,y(S.cryo,2,q(Ue,"on",R(.15)))),w.info("critRate_")),Ha={name:x("ShatteringIce.name"),desc:x("ShatteringIce.desc"),icon:l("span",{children:[t(L,{...D})," ",t(L,{...D})]}),canShow:e=>e.get(S.cryo).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:E("effectDuration.electro"),value:-40,unit:"%"}]},{teamBuff:!0,path:Le,value:Ue,name:E("enemyAffected.frozenOrCryo"),header:{title:x("ShatteringIce.name"),icon:t(L,{})},states:{on:{fields:[{node:Oa}]}}}]},Ga={name:x("HighVoltage.name"),desc:x("HighVoltage.desc"),icon:l("span",{children:[t(ee,{...D})," ",t(ee,{...D})]}),canShow:e=>e.get(S.electro).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,fields:[{text:E("effectDuration.hydro"),value:-40,unit:"%"}]}]},[Va,Fa]=I(m.charKey,y(C,4,y(S.anemo,2,R(-.15))),w.info("staminaDec_")),[qa,Pa]=I(m.charKey,y(C,4,y(S.anemo,2,R(.1))),w.info("moveSPD_")),[Ka,La]=I(m.charKey,y(C,4,y(S.anemo,2,R(-.05))),w.info("cdRed_")),Ua={name:x("ImpetuousWinds.name"),desc:x("ImpetuousWinds.desc"),icon:l("span",{children:[t(te,{...D})," ",t(te,{...D})]}),canShow:e=>e.get(S.anemo).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,fields:[{node:Va},{node:qa},{node:Ka}]}]},Je=["resonance","EnduringRock"],Qe=F(Je),Ye=["resonance","EnduringRockHit"],Ze=F(Ye),[Ja,Qa]=I(m.charKey,y(C,4,y(S.geo,2,R(.15))),w.info("shield_")),[Ya,Za]=I(m.charKey,y(C,4,y(S.geo,2,q(Qe,"on",R(.15)))),w.info("all_dmg_")),[Xa,en]=I(m.charKey,y(C,4,y(S.geo,2,q(Ze,"on",R(-.2)))),w.info("geo_enemyRes_")),tn={name:x("EnduringRock.name"),desc:x("EnduringRock.desc"),icon:l("span",{children:[t(T,{...D})," ",t(T,{...D})]}),canShow:e=>e.get(S.geo).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,text:x("EnduringRock.desc"),fields:[{node:Ja}]},{teamBuff:!0,path:Je,value:Qe,header:{title:x("EnduringRock.name"),icon:t(T,{})},name:E("protectedByShield"),states:{on:{fields:[{node:Ya}]}}},{teamBuff:!0,path:Ye,value:Ze,header:{title:x("EnduringRock.name"),icon:t(T,{})},name:re("EnduringRock.hitCond"),states:{on:{fields:[{node:Xa},{text:ne("duration"),value:15,unit:"s"}]}}}]},Xe=["resonance","SprawlingCanopy2ele"],et=F(Xe),tt=["resonance","SprawlingCanopy3ele"],at=F(tt),[an,nn]=I(m.charKey,y(C,4,y(S.dendro,2,50)),w.info("eleMas")),[sn,rn]=I(m.charKey,y(C,4,y(S.dendro,2,q(et,"on",30))),w.info("eleMas")),[on,cn]=I(m.charKey,y(C,4,y(S.dendro,2,q(at,"on",20))),w.info("eleMas")),ln={name:x("SprawlingGreenery.name"),desc:x("SprawlingGreenery.desc"),icon:l("span",{children:[t(z,{...D})," ",t(z,{...D})]}),canShow:e=>e.get(S.dendro).value>=2&&e.get(C).value>=4,sections:[{teamBuff:!0,text:x("SprawlingGreenery.desc"),fields:[{node:an}]},{teamBuff:!0,path:Xe,value:et,header:{title:x("SprawlingGreenery.name"),icon:t(z,{})},name:re("SprawlingGreenery.cond2ele"),states:{on:{fields:[{node:sn},{text:ne("duration"),value:6,unit:"s"}]}}},{teamBuff:!0,path:tt,value:at,header:{title:x("SprawlingGreenery.name"),icon:t(z,{})},name:re("SprawlingGreenery.cond3ele"),states:{on:{fields:[{node:on},{text:ne("duration"),value:6,unit:"s"}]}}}]},as=[ka,Na,Aa,Ha,Ga,Ua,tn,ln],dn=Jt({teamBuff:{premod:{...B(Ke,([e,a])=>a),atk_:Ea,hp_:za,staminaDec_:Fa,moveSPD_:Pa,cdRed_:La,shield_:Qa,all_dmg_:Za,geo_enemyRes_:en,eleMas:Qt(Ne(nn,rn,cn),{pivot:!0})},total:{critRate_:Wa}}});function un(e,a=0,n,s){const o=j(),[r,i]=Dt(),c=b.useDeferredValue(r),{gender:u}=N(),h=b.useMemo(()=>c&&fn(o,e,a,u,n,s),[c,u,e,o,a,n,s]);return b.useEffect(()=>e?o.chars.follow(e,i):void 0,[e,i,o]),h}class hn{constructor(a){this.data={},a.chars.followAny(n=>{this.removeData(n)})}getData(a){return this.data[a]}cacheData(a,n){this.data[a]=n}removeData(a){delete this.data[a]}}const Y=new Map,Se=e=>{if(Y.has(e))return Y.get(e);const a=new hn(e);return Y.set(e,a),a};function fn(e,a,n=0,s,o,r){if(!a)return;if(!n&&!o&&!r){const f=Se(e).getData(a);if(f)return f}const{teamData:i,teamBundle:c}=pn(e,a,n,o,r)??{};if(!i||!c)return;const u=Yt(i,s,a),h=It(u,(f,d)=>{const{data:p,..._}=c[d];return{...f,..._}});return!n&&!o&&!r&&Se(e).cacheData(a,h),h}function pn(e,a,n=0,s,o){if(!a)return;const r=e.chars.get(a);if(!r)return;const i=mn(e,!0,n,r,o||(e.weapons.get(r.equippedWeapon)??wt()),s??Object.values(r.equippedArtifacts).map(h=>e.arts.get(h)).filter(h=>h));if(!i)return;const c={[a]:i};return{teamData:{[a]:i.data},teamBundle:c}}function mn(e,a=!1,n,s,o,r){const i=P(s.key,e.gender);if(!i)return;const c=He(o.key);if(!c)return;const u=Ge.getAllDataOfType(i.weaponTypeKey),h=a?(()=>{const{display:_,...M}=c.data;return se([M,u])})():c.data,f=se([i.data,h,ca]),p=[...Array.isArray(r)?r.map(_=>Zt(_,n)):[r],Xt(s),ze(o),f,ea,dn];return{character:s,weapon:o,characterSheet:i,weaponSheet:c,data:p}}function gn({art:e,children:a}){const n=t(v,{children:t(ie,{variant:"rectangular",width:100,height:100})}),s=t(b.Suspense,{fallback:n,children:t(vn,{art:e})});return t(Ee,{placement:"top",title:s,disableInteractive:!0,children:a})}function vn({art:e}){const{t:a}=Ce("statKey_gen"),n=la(e.setKey),{slotKey:s,level:o,rarity:r,mainStatKey:i,substats:c}=e,u=n.getSlotName(s),h=Mt.getVariant(i);return l(v,{p:1,children:[l(g,{variant:"h6",children:[t(da,{slotKey:s,iconProps:D})," ",u]}),l(g,{variant:"subtitle1",color:`${h}.main`,children:[t(Ae,{statKey:i,iconProps:D})," ",a(i)," ",Rt(i,r,o)]}),l(g,{variant:"subtitle2",sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t(Pt,{stars:r}),l(k,{color:We.levelVariant(o),children:["+",o]})," "]}),t(v,{py:1,children:c.map(({value:f,key:d,rolls:p})=>!!(f&&d)&&t(xa,{statKey:d,value:f,color:`roll${$t(p.length,1,6)}`,prefix:"+"},d))}),t(g,{color:"success.main",children:n.name}),t(Kt,{color:"secondary.main",location:e.location})]})}function yn({artifactObj:e,slotKey:a}){if(!e)return t(W,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:t(v,{sx:{width:"100%",pb:"100%",position:"relative"},children:t(v,{sx:{position:"absolute",width:"70%",height:"70%",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:.7},component:"img",src:de.slot[a]})})});const{mainStatKey:n,rarity:s,level:o}=e,i=oe.find(c=>e.mainStatKey.includes(c))??"secondary";return t(gn,{art:e,children:l(W,{sx:{display:"flex",flexDirection:"column",position:"relative"},children:[t(v,{component:"img",className:`grad-${s}star`,src:ta(e.setKey,e.slotKey),maxWidth:"100%",maxHeight:"100%"}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:t("strong",{children:t(k,{sx:{p:.5},color:We.levelVariant(o),children:l("strong",{children:["+",o]})})})}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t(k,{color:i,sx:{p:.5},children:t(Ae,{statKey:n,iconProps:{fontSize:"inherit"}})})})]})})}function xn({sheet:e,addlText:a,children:n}){const s=l(b.Suspense,{fallback:t(ie,{variant:"text",width:100}),children:[l(g,{children:[t(ua,{src:de.weaponTypes[e.weaponType],size:1.5})," ",e.name]}),a]});return t(Ee,{placement:"top",title:s,disableInteractive:!0,children:n})}function Sn({weaponId:e}){const a=ha(e);return a?t(nt,{weapon:a}):null}function nt({weapon:e}){const a=(e==null?void 0:e.key)&&He(e.key),n=b.useMemo(()=>a&&e&&aa([a.data,ze(e)]),[a,e]);if(!e||!a||!n)return null;const s=l(v,{children:[t(be,{node:n.get(ye.weapon.main)}),t(be,{node:n.get(ye.weapon.sub)})]});return l(W,{sx:{height:"100%",maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[t(v,{display:"flex",flexDirection:"column",alignContent:"flex-end",className:`grad-${a.rarity}star`,children:t(xn,{sheet:a,addlText:s,children:t(v,{component:"img",src:na(e.key,e.ascension>=2),maxWidth:"100%",maxHeight:"100%",sx:{mt:"auto"}})})}),t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:t("strong",{children:t(k,{color:"primary",children:Ge.getLevelString(e)})})}),a.hasRefinement&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:l(k,{color:"secondary",children:["R",e.refinement]})})})]})}function be({node:e}){return l(g,{children:[e.info.icon," ",sa(e)]})}function bn({hideWeapon:e=!1}){var n;const{data:a}=b.useContext(Q);return t(v,{children:l($,{container:!0,columns:e?5:6,spacing:.5,children:[!e&&t($,{item:!0,xs:1,height:"100%",children:t(Sn,{weaponId:((n=a.get(m.weapon.id).value)==null?void 0:n.toString())??""})}),t(_n,{})]})})}function _n(){const e=j(),{data:a}=b.useContext(Q),n=jt.map(s=>{var o;return[s,e.arts.get(((o=a.get(m.art[s].id).value)==null?void 0:o.toString())??"")]});return t(ce,{children:n.map(([s,o])=>t($,{item:!0,xs:1,children:t(yn,{artifactObj:o,slotKey:s})},s))})}function Cn({weapon:e}){return t(v,{children:l($,{container:!0,columns:e?6:5,spacing:.5,sx:{},children:[e&&t($,{item:!0,xs:1,height:"100%",children:t(nt,{weapon:e})}),t($,{item:!0,xs:5,children:t(kt,{sx:{backgroundColor:"info.main",height:"44px",display:"flex",justifyContent:"center",alignItems:"center"},children:t(g,{children:"TC Build"})})})]})})}function st(e,a,n){const s=Lt(e,a),o=Oe(e,"icon",a);return n&&s?s:o||""}function Dn({children:e,characterKey:a,onClick:n}){const{gender:s}=N(),{silly:o}=b.useContext(Ie),r=le(a),i=b.useCallback(u=>t(O,{onClick:n,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:u}),[n]),c=Oe(a,"banner",s);return t(Fe,{condition:!!n,wrapper:i,children:l(v,{display:"flex",position:"relative",className:c?void 0:`grad-${r.rarity}star`,sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${c})`,backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[t(v,{flexShrink:1,component:"img",src:st(a,s,o),sx:{maxWidth:"40%"},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1}),t(v,{flexGrow:1,sx:{py:1,pr:1},display:"flex",flexDirection:"column",zIndex:1,justifyContent:"space-between",children:e})]})})}function In({characterKey:e}){const{gender:a}=N(),{data:n}=b.useContext(Q),s=n.get(m.charEle).value,o=n.get(m.lvl).value,r=n.get(m.constellation).value,i=n.get(m.asc).value,c=n.get(m.total.autoBoost).value,u=n.get(m.total.skillBoost).value,h=n.get(m.total.burstBoost).value,f=n.get(m.total.auto).value,d=n.get(m.total.skill).value,p=n.get(m.total.burst).value,_=le(e);return l(ce,{children:[t(A,{label:t(g,{variant:"subtitle1",children:t(we,{characterKey:e,gender:a})}),size:"small",color:s,sx:{opacity:.85}}),l(v,{display:"flex",gap:1,sx:{textShadow:"0 0 5px gray"},alignItems:"center",children:[l(v,{children:[l(g,{component:"span",variant:"h6",whiteSpace:"nowrap",children:["Lv. ",o]}),l(g,{component:"span",variant:"h6",color:"text.secondary",children:["/",Me[i]]})]}),t(g,{component:"span",whiteSpace:"nowrap",sx:{opacity:.85},children:t(Re,{color:`roll${r<3?3:r}`,children:t(De,{color:"white",children:l("strong",{children:["C",r]})})})})]}),l(v,{display:"flex",gap:1,sx:{opacity:.85},children:[t(A,{size:"small",color:c?"info":"secondary",label:t("strong",{children:f})}),t(A,{size:"small",color:u?"info":"secondary",label:t("strong",{children:d})}),t(A,{size:"small",color:h?"info":"secondary",label:t("strong",{children:p})})]}),t(g,{variant:"h6",lineHeight:1,children:t(Pe,{stars:_.rarity,colored:!0,inline:!0})})]})}function ns({characterKey:e}){const{gender:a}=N(),n=le(e),s=P(e,a);return l(ce,{children:[t(A,{label:t(g,{variant:"subtitle1",children:t(we,{characterKey:e,gender:a})}),size:"small",color:s.elementKey,sx:{opacity:.85}}),t(v,{mt:1,children:t(g,{variant:"h4",children:t(Re,{children:"NEW"})})}),t(g,{mt:1.5,children:t(Pe,{stars:n.rarity,colored:!0})})]})}var fe={},wn=G;Object.defineProperty(fe,"__esModule",{value:!0});var rt=fe.default=void 0,Mn=wn(H()),Rn=V,$n=(0,Mn.default)((0,Rn.jsx)("path",{d:"M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7C10.54 3.57 8.5 5.3 8.5 7.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .84-.69 1.52-1.53 1.5-.54-.01-.97.45-.97.99v1.76L2.4 18.2c-.77.58-.36 1.8.6 1.8h18c.96 0 1.37-1.22.6-1.8zM6 18l6-4.5 6 4.5H6z"}),"Checkroom");rt=fe.default=$n;var pe={},jn=G;Object.defineProperty(pe,"__esModule",{value:!0});var ot=pe.default=void 0,kn=jn(H()),Bn=V,En=(0,kn.default)((0,Bn.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");ot=pe.default=En;var me={},Nn=G;Object.defineProperty(me,"__esModule",{value:!0});var it=me.default=void 0,Tn=Nn(H()),zn=V,An=(0,Tn.default)((0,zn.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");it=me.default=An;function On({characterKey:e,onClick:a,onMouseDown:n,onMouseEnter:s,hoverChild:o}){const r=Ve(e),{favorite:i}=pa(e),{gender:c}=N(),{silly:u}=b.useContext(Ie),h=P(e,c),f=b.useCallback(()=>a==null?void 0:a(e),[e,a]),d=b.useCallback(K=>t(O,{onClick:f,onMouseDown:n,onMouseEnter:s,children:K}),[f,n,s]),[p,_,M]=Bt();return t($e,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:!!o&&p,onClose:M,onOpen:_,title:o,children:t(W,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:l(Fe,{condition:!!a||!!n||!!s,wrapper:d,children:[t(v,{display:"flex",className:`grad-${h.rarity}star`,children:t(v,{component:"img",src:st(e,c,u),maxWidth:"100%",maxHeight:"100%",draggable:!1})}),r&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:t("strong",{children:l(k,{color:"primary",children:[r.level,"/",Me[r.ascension]]})})}),t(v,{sx:{position:"absolute",top:0,right:0},children:i?t(qe,{fontSize:"small"}):t(it,{fontSize:"small"})}),r&&t(g,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:t("strong",{children:l(k,{color:"secondary",children:["C",r.constellation]})})})]})})})}function Wn({index:e}){return t(W,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:t(v,{component:"img",src:de.team[`team${e+1}`],sx:{width:"75%",height:"auto",opacity:.7}})})}const _e=ra(Et({dyn:{...m.art,...m.artSet}})),Hn={art:je([...Nt,...ke],e=>_e.dyn[e]),artSet:B(m.artSet,(e,a)=>_e.dyn[a])};function ss(e,a,n){const s={base:{},values:{flower:[],plume:[],goblet:[],circlet:[],sands:[]}},o=new Set;for(const r of e){const i=Tt(r.mainStatKey,r.rarity,Math.max(Math.min(a,zt[r.rarity]),r.level)),c={id:r.id,set:r.setKey,values:{[r.setKey]:1,[r.mainStatKey]:r.mainStatKey.endsWith("_")?i/100:i,...Object.fromEntries(r.substats.map(u=>[u.key,u.key.endsWith("_")?u.accurateValue/100:u.accurateValue]))}};delete c.values[""],s.values[r.slotKey].push(c),Object.keys(c.values).forEach(u=>o.add(u))}if(s.base=je([...o],r=>0),n)for(const r of Object.values(s.values))r.push({id:"",values:{}});return s}function rs(e,a,n){var f;const{artifact:{sets:s},optimization:{target:o,minTotal:r}}=n;if(!o)return{};const i=(f=e[a])==null?void 0:f.target.data[0];if(!i)return{};Object.assign(i,se([i,Hn]));const c=Wt(i.display??{},o);if(!c)return{};const u=Object.keys(r).map(d=>i.total[d]).filter(d=>d);let h=xe([c,...u],i,({path:[d]})=>d!=="dyn");return h=oa(h,d=>{if(d.operation==="read"&&d.path[0]==="dyn"){const p=s[d.path[1]];if(p)return U(p);if(!ke.includes(d.path[1]))return U(0)}return d},d=>d),h=xe(h,{},d=>!1),{nodes:h}}function os(e){const a=new Set;return ia(e,{},n=>{const s=n.path[1];return a.add(s),s},1),a}function is(e){const{artifact:{slots:a,substats:{stats:n,type:s,rarity:o}}}=e,r=B(n,(u,h)=>Math.ceil(n[h]/Ht(h,o,s))),i=Fn(a),c=Vn(a);return{minSubLines:c,minOtherRolls:Gn(Object.entries(r),i,c)}}function Gn(e,a,n=4*5){const s=e.reduce((o,[r,i])=>{const c=5-(a[r]??0);return o+Math.min(i,c)},0);return n-s}function Vn(e){return Object.values(e).reduce((a,{rarity:n,level:s})=>{const{high:o,low:r}=Gt[n];return a+(s>=4?o:r)},0)}function Fn(e){const a={};return Object.values(e).forEach(({statKey:n})=>{a[n]=(a[n]??0)+1},0),a}function qn(e){const{artifact:{slots:a,substats:{stats:n},sets:s}}=e,o=B(n,(r,i)=>At(r,i));return Object.values(a).forEach(({statKey:r,rarity:i,level:c})=>o[r]=(o[r]??0)+Ot(r,i,c)),{art:B(o,(r,i)=>i.endsWith("_")?R(r):U(r)),artSet:B(s,r=>U(r))}}function cs(e){const{weapon:{key:a,level:n,ascension:s,refinement:o}}=e;return{id:"",location:"",key:a,level:n,ascension:s,refinement:o,lock:!1}}function ls({teamId:e,onClick:a,hoverCard:n=!1,bgt:s}){const o=ma(e),{name:r,description:i,teamCharIds:c}=o,u=j(),h=c.map(f=>{if(!f)return;const d=u.teamChars.get(f);if(d)return P(d.key).elementKey});return t(Be,{bgt:s,sx:{height:"100%"},children:l(v,{sx:f=>({height:"100%",display:"flex",flexDirection:"column",background:`linear-gradient(to right, ${h.map(p=>{if(!p)return"rgba(0,0,0,0)";const _=f.palette[p].main,M=fa(_);return M?`rgba(${M.r},${M.g},${M.b},0.25)`:"rgba(0,0,0,0)"}).map((p,_)=>`${p} ${_*25+12.5}%`).join(", ")})`}),children:[t(O,{onClick:()=>a(),sx:{p:1},children:l(g,{sx:{display:"flex",gap:1},children:[t("span",{children:r})," ",t($e,{title:t(g,{children:i}),children:t(Ft,{})})]})}),t(v,{sx:{p:1,marginTop:"auto"},children:t($,{container:!0,columns:4,spacing:1,children:Vt(0,3).map(f=>{var _;const d=c[f],p=d&&((_=u.teamChars.get(d))==null?void 0:_.key);return t($,{item:!0,xs:1,height:"100%",children:p?t(O,{onClick:()=>a(p),children:t(On,{characterKey:p,hoverChild:n&&t(Pn,{characterKey:p,teamCharId:d})})}):t(O,{onClick:()=>a(),children:t(Wn,{index:f})})},f)})})})]})})}function Pn({characterKey:e,teamCharId:a}){var ge;const n=j(),s=Ve(e),{gender:o}=N(),r=P(e,o),{name:i,buildType:c,buildTcId:u}=ga(a),h=n.teamChars.getActiveBuildName(a),f=(()=>n.teamChars.getLoadoutWeapon(a))(),d=(()=>c==="tc"&&u?qn(n.buildTcs.get(u)):Object.values(n.teamChars.getLoadoutArtifacts(a)).filter(ct=>ct))(),p=un(e,void 0,d,f),_=(ge=p==null?void 0:p[e])==null?void 0:ge.target,M=b.useMemo(()=>s&&r&&{character:s,characterSheet:r,characterDispatch:()=>{}},[s,r]),K=b.useMemo(()=>_&&p&&{data:_,teamData:p},[_,p]);return!M||!K?null:t($a.Provider,{value:M,children:t(Q.Provider,{value:K,children:t(v,{sx:{width:300,m:-1},children:t(b.Suspense,{fallback:t(ie,{variant:"rectangular",width:"100%",height:300}),children:l(Be,{children:[t(Dn,{characterKey:e,children:t(In,{characterKey:e})}),l(v,{sx:{p:1,display:"flex",flexDirection:"column",gap:1},children:[l(g,{sx:{display:"flex",gap:1,alignItems:"center"},children:[t(ot,{}),t("span",{children:i})]}),l(g,{sx:{display:"flex",gap:1,alignItems:"center"},children:[t(rt,{}),t("span",{children:h})]}),c==="tc"&&u?t(Cn,{weapon:f}):t(bn,{})]})]})})})})})}export{yn as A,$a as C,ya as E,ns as H,va as S,ls as T,Sn as W,qe as a,rt as b,ot as c,Ia as d,On as e,ss as f,qn as g,Hn as h,Dn as i,In as j,bn as k,is as l,os as m,cs as n,rs as o,fa as p,ga as q,as as r,Ve as s,un as t,ma as u,pa as v,gn as w,xn as x,dn as y,st as z};