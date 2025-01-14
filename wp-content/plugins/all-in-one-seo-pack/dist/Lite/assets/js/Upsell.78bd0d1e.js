import{S as v}from"./Profile.ad607616.js";import{_ as p}from"./_plugin-vue_export-helper.eefbdd86.js";import{v as i,o as a,c as h,k as _,l as c,x as l,t as u,C as y}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{m as x,u as S,l as k}from"./index.62477ee8.js";import{C}from"./Index.0e872043.js";import{R as U}from"./RequiredPlans.97e0043b.js";import"./translations.d159963e.js";import{s as R,_ as t}from"./default-i18n.20001971.js";const b={components:{SvgDannieProfile:v},props:{src:String,size:{required:!0,type:Number}}},w=["src","width","height"];function z(m,f,e,o,r,d){const s=i("svg-dannie-profile");return e.src?(a(),h("img",{key:0,src:e.src,width:e.size,height:e.size,alt:"avatar",loading:"lazy",decoding:"async",class:"aioseo-user-avatar"},null,8,w)):(a(),_(s,{key:1,width:e.size,height:e.size,class:"aioseo-user-avatar aioseo-user-avatar--dannie"},null,8,["width","height"]))}const N=p(b,[["render",z],["__scopeId","data-v-4705aae0"]]),n="all-in-one-seo-pack",E={setup(){return{licenseStore:x(),rootStore:S(),links:k}},components:{Cta:C,RequiredPlans:U},props:{parentComponentContext:String},data(){return{strings:{ctaHeader:R(t("SEO Revisions is a %1$s Feature",n),"PRO"),ctaDescription:t("Our powerful revisions feature provides a valuable record of SEO updates, allowing you to monitor the effectiveness of your SEO efforts and make informed decisions.",n),ctaFeatures:[t("Improved SEO strategy",n),t("Easy to manage revisions",n),t("Greater transparency and accountability",n),t("Historical record of optimization efforts",n)],ctaButtonText:t("Unlock SEO Revisions",n)}}}};function O(m,f,e,o,r,d){const s=i("required-plans"),g=i("cta");return a(),_(g,{"cta-link":o.links.getPricingUrl("seo-revisions","seo-revisions",e.parentComponentContext),"button-text":r.strings.ctaButtonText,"learn-more-link":o.links.getUpsellUrl("seo-revisions",e.parentComponentContext,o.rootStore.isPro?"pricing":"liteUpgrade"),"feature-list":r.strings.ctaFeatures,"hide-bonus":!o.licenseStore.isUnlicensed},{"header-text":c(()=>[l(u(r.strings.ctaHeader),1)]),description:c(()=>[y(s,{"core-feature":["seo-revisions"]}),l(" "+u(r.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])}const T=p(E,[["render",O]]);export{T as S,N as U};
