import{u as F}from"./index.66ecdd60.js";import{D as N}from"./datetime.f197aeae.js";import{C as z}from"./Card.a31a0c5f.js";import{G as B,a as j}from"./Row.df38a5f6.js";import{S as G}from"./Checkmark.e40641dd.js";import{c as O}from"./index.d0745c42.js";import{S as J}from"./Download.17eb5e1f.js";import{T as M,a as Q}from"./Row.2a867ba6.js";import"./translations.d159963e.js";import{_ as W}from"./_plugin-vue_export-helper.eefbdd86.js";import{u as X}from"./ToolsStore.e1e512d6.js";import{_ as s}from"./default-i18n.20001971.js";import{c as l,C as o,l as n,v as r,X as q,o as a,a as c,x as p,t as m,Q as H,k as E,F as _,b as h,G as b,J as D}from"./runtime-dom.esm-bundler.5c3c7d72.js";import"./helpers.53868b98.js";import"./Tooltip.73441134.js";import"./Caret.a21d4ca8.js";import"./Slide.39c07c03.js";const t="all-in-one-seo-pack",K={setup(){return{rootStore:F(),toolsStore:X()}},components:{CoreCard:z,GridColumn:B,GridRow:j,SvgCheckmark:G,SvgCopy:O,SvgDownload:J,TableColumn:M,TableRow:Q},data(){return{copied:!1,emailError:null,emailAddress:null,sendingEmail:!1,strings:{systemStatusInfo:s("System Status Info",t),downloadSystemInfoFile:s("Download System Info File",t),copyToClipboard:s("Copy to Clipboard",t),emailDebugInformation:s("Email Debug Information",t),submit:s("Submit",t),wordPress:s("WordPress",t),serverInfo:s("Server Info",t),activeTheme:s("Active Theme",t),muPlugins:s("Must-Use Plugins",t),activePlugins:s("Active Plugins",t),inactivePlugins:s("Inactive Plugins",t),copied:s("Copied!",t)}}},computed:{copySystemStatusInfo(){return JSON.stringify(this.rootStore.aioseo.data.status)}},methods:{onCopy(){this.copied=!0,setTimeout(()=>{this.copied=!1},2e3)},onError(){},downloadSystemStatusInfo(){const S=new Blob([JSON.stringify(this.rootStore.aioseo.data.status)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(S),i.download=`aioseo-system-status-${N.now().toFormat("yyyy-MM-dd")}.json`,i.click(),URL.revokeObjectURL(i.href)},processEmailDebugInfo(){if(this.emailError=!1,!this.emailAddress||!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailAddress)){this.emailError=!0;return}this.sendingEmail=!0,this.toolsStore.emailDebugInfo(this.emailAddress).then(()=>{this.emailAddress=null,this.sendingEmail=!1})}}},Y={class:"aioseo-tools-system-status-info"},Z={class:"actions"},$={class:"aioseo-settings-row"},ee={class:"settings-name"},se={class:"name"},oe={class:"settings-content"},te={class:"system-status-table"},ne=["title"];function re(S,i,ae,A,e,u){const T=r("svg-download"),f=r("base-button"),x=r("svg-copy"),P=r("svg-checkmark"),v=r("grid-column"),R=r("base-input"),L=r("grid-row"),w=r("table-column"),U=r("table-row"),V=r("core-card"),g=q("clipboard");return a(),l("div",Y,[o(V,{slug:"systemStatusInfo","header-text":e.strings.systemStatusInfo},{default:n(()=>[c("div",Z,[o(L,null,{default:n(()=>[o(v,{sm:"6",class:"left"},{default:n(()=>[o(f,{type:"blue",size:"small",onClick:u.downloadSystemStatusInfo},{default:n(()=>[o(T),p(" "+m(e.strings.downloadSystemInfoFile),1)]),_:1},8,["onClick"]),H((a(),E(f,{type:"blue",size:"small"},{default:n(()=>[e.copied?h("",!0):(a(),l(_,{key:0},[o(x),p(" "+m(e.strings.copyToClipboard),1)],64)),e.copied?(a(),l(_,{key:1},[o(P),p(" "+m(e.strings.copied),1)],64)):h("",!0)]),_:1})),[[g,u.copySystemStatusInfo,"copy"],[g,u.onCopy,"success"],[g,u.onError,"error"]])]),_:1}),o(v,{sm:"6",class:"right"},{default:n(()=>[o(R,{size:"small",placeholder:e.strings.emailDebugInformation,modelValue:e.emailAddress,"onUpdate:modelValue":i[0]||(i[0]=d=>e.emailAddress=d),class:b({"aioseo-error":e.emailError})},null,8,["placeholder","modelValue","class"]),o(f,{type:"blue",size:"small",onClick:u.processEmailDebugInfo,loading:e.sendingEmail},{default:n(()=>[p(m(e.strings.submit),1)]),_:1},8,["onClick","loading"])]),_:1})]),_:1})]),c("div",$,[(a(!0),l(_,null,D(A.rootStore.aioseo.data.status,(d,k)=>{var C;return a(),l(_,{key:k},[(C=d.results)!=null&&C.length?(a(),l("div",{key:0,class:b(["settings-group",["settings-group--"+k]])},[c("div",ee,[c("div",se,m(d.label),1)]),c("div",oe,[c("div",te,[(a(!0),l(_,null,D(d.results,(y,I)=>(a(),E(U,{key:I,class:b({even:I%2===0})},{default:n(()=>[o(w,{class:"system-status-header"},{default:n(()=>[c("span",{title:y.header},m(y.header),9,ne)]),_:2},1024),o(w,null,{default:n(()=>[p(m(y.value),1)]),_:2},1024)]),_:2},1032,["class"]))),128))])])],2)):h("",!0)],64)}),128))])]),_:1},8,["header-text"])])}const Ce=W(K,[["render",re]]);export{Ce as default};
