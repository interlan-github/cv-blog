import{G as I}from"./constants.24c44c43.js";import{l as B,r as N,b as D,u as E,m as j,k as U}from"./index.62477ee8.js";import{C as P}from"./Card.da4d4921.js";import{C as V}from"./Tabs.7a016195.js";import{C as F}from"./SeoSiteAnalysisResults.a316b15d.js";import{g as G,v as n,o as i,c as S,C as a,b as f,a as s,t as _,F as W,J as q,k as T,l as p,x as R,w as Y,f as J,y as K,u as m,E as Q,G as X}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{u as Z,p as $}from"./popup.3e33f8c7.js";import{u as w}from"./SeoSiteScore.716d0e98.js";import{C as ee}from"./Blur.edde4939.js";import{C as oe}from"./Index.4c996c46.js";import{S as se}from"./Book.74a13fcd.js";import{S as te}from"./Lab.fa0cc0a1.js";import"./translations.d159963e.js";import{_ as H}from"./_plugin-vue_export-helper.eefbdd86.js";import{u as L}from"./AnalyzerStore.4c49761b.js";import{_ as d,s as x}from"./default-i18n.20001971.js";import{C as re}from"./Tooltip.73441134.js";import{S as ne}from"./Refresh.a1841ba6.js";import{a as ae}from"./index.8c70464a.js";import"./helpers.c7282833.js";import"./Caret.d9cc70ba.js";import"./Slide.39c07c03.js";import"./vue-router.2f910c93.js";import"./ProBadge.751e0b85.js";import"./Information.13e8cece.js";import"./Tags.103f5786.js";import"./helpers.9b039fd1.js";import"./metabox.8dab9766.js";import"./cleanForSlug.c4a9e111.js";import"./toString.a2dfb892.js";import"./_baseTrim.11b89ad9.js";import"./_stringToArray.f9ddb970.js";import"./_baseSet.ab668497.js";import"./regex.8a6101c0.js";import"./GoogleSearchPreview.7b5bf30a.js";import"./Url.3a754ef4.js";import"./Gear.bd4e1565.js";import"./SetupWizardStore.f7bc7af4.js";import"./params.af7ed354.js";const O="all-in-one-seo-pack",ie={setup(l){const{errorObject:y,strings:g}=w({score:G(l.score)});return{analyzerStore:L(),composableStrings:g,errorObject:y,links:B}},components:{CoreSiteScore:oe,SvgBook:se,SvgDannieLab:te},props:{score:Number,loading:Boolean,description:String,summary:{type:Object,default(){return{}}}},data(){return{strings:N({yourOverallSiteScore:d("Your Overall Site Score",O),goodResult:x(d("A very good score is between %1$s%3$d and %4$d%2$s.",O),"<strong>","</strong>",50,75),forBestResults:x(d("For best results, you should strive for %1$s%3$d and above%2$s.",O),"<strong>","</strong>",70),readUltimateSeoGuide:d("Read the Ultimate WordPress SEO Guide",O)},this.composableStrings)}}},le={class:"aioseo-seo-analysis"},ce={key:0,class:"seo-analysis-score"},ue={key:1,class:"seo-analysis-description"},me=["innerHTML"],pe=["innerHTML"],de={class:"d-flex"},_e=["href"],ge={key:2,class:"seo-analysis-error"},ye={class:"error-title"},Se=["innerHTML"],he={class:"error-action-buttons"};function fe(l,y,g,e,c,t){const k=n("core-site-score"),r=n("svg-book"),z=n("svg-dannie-lab"),v=n("base-button");return i(),S("div",le,[e.analyzerStore.analyzeError?f("",!0):(i(),S("div",ce,[a(k,{loading:g.loading,score:g.score,description:g.description,strokeWidth:1.75},null,8,["loading","score","description"])])),e.analyzerStore.analyzeError?f("",!0):(i(),S("div",ue,[s("h2",null,_(c.strings.yourOverallSiteScore),1),s("div",{innerHTML:c.strings.goodResult},null,8,me),s("div",{innerHTML:c.strings.forBestResults},null,8,pe),s("div",de,[a(r),s("a",{href:e.links.getDocUrl("ultimateGuide"),target:"_blank"},_(c.strings.readUltimateSeoGuide),9,_e)])])),e.analyzerStore.analyzeError&&e.errorObject?(i(),S("div",ge,[a(z),s("p",ye,_(c.strings.anErrorOccurred),1),s("p",{class:"error-description",innerHTML:e.errorObject.description},null,8,Se),s("div",he,[(i(!0),S(W,null,q(e.errorObject.buttons,(o,b)=>(i(),T(v,{key:b,type:o.type,tag:o.tag?o.tag:"button",target:"_blank",href:o.url?o.url:"",size:"medium",loading:(o==null?void 0:o.runAgain)&&e.analyzerStore.analyzing,onClick:A=>o!=null&&o.runAgain?e.analyzerStore.runSiteAnalyzer():""},{default:p(()=>[R(_(o.text),1)]),_:2},1032,["type","tag","href","loading","onClick"]))),128))])])):f("",!0)])}const M=H(ie,[["render",fe]]),Ce={class:"aioseo-seo-site-score"},ke={key:1,class:"aioseo-seo-site-score-cta"},ze={__name:"Analyze",setup(l){const y=G(0),{connectWithAioseo:g,description:e,strings:c}=w({score:y}),t=L(),k=Z(),r=D(),z=E();Y(()=>r.internalOptions.internal.siteAnalysis.score,u=>{y.value=u});const v=J(()=>({recommended:t.recommendedCount(),critical:t.criticalCount(),good:t.goodCount()})),o=u=>{$(u,g,600,630,!0,["token"],b,A)},b=u=>k.saveConnectToken(u.token),A=u=>{u&&t.runSiteAnalyzer(),t.analyzing=!0};return K(()=>{!r.internalOptions.internal.siteAnalysis.score&&r.internalOptions.internal.siteAnalysis.connectToken&&(t.analyzing=!0,t.runSiteAnalyzer()),y.value=r.internalOptions.internal.siteAnalysis.score}),(u,C)=>(i(),S("div",Ce,[m(r).internalOptions.internal.siteAnalysis.connectToken?f("",!0):(i(),T(m(ee),{key:0},{default:p(()=>[a(m(M),{score:85,description:m(e)},null,8,["description"])]),_:1})),m(r).internalOptions.internal.siteAnalysis.connectToken?f("",!0):(i(),S("div",ke,[s("a",{href:"#",onClick:C[0]||(C[0]=Q(Re=>o(m(z).aioseo.urls.connect),["prevent"]))},_(m(g)),1),R(" "+_(m(c).toSeeYourSiteScore),1)])),m(r).internalOptions.internal.siteAnalysis.connectToken?(i(),T(m(M),{key:2,score:y.value,description:m(e),loading:u.analyzing,summary:v.value},null,8,["score","description","loading","summary"])):f("",!0)]))}},h="all-in-one-seo-pack",ve={setup(){return{analyzerStore:L(),licenseStore:j(),optionsStore:D(),rootStore:E(),settingsStore:U()}},components:{CoreCard:P,CoreMainTabs:V,CoreSeoSiteAnalysisResults:F,CoreSeoSiteScoreAnalyze:ze,CoreTooltip:re,SvgCircleQuestionMark:ae,SvgRefresh:ne},data(){return{internalDebounce:!1,strings:{completeSeoChecklist:d("Complete SEO Checklist",h),refreshResults:d("Refresh Results",h),cardDescription:d("These are the results our SEO Analzyer has generated after analyzing the homepage of your website.",h)+" "+B.getDocLink(I.learnMore,"seoAnalyzer",!0)}}},computed:{tabs(){const l=this.optionsStore.internalOptions.internal.siteAnalysis;return[{slug:"all-items",label:d("All Items",h),analyze:{classColor:"black",count:l.score?this.analyzerStore.allItemsCount():0}},{slug:"critical",label:d("Important Issues",h),analyze:{classColor:"red",count:l.score?this.analyzerStore.criticalCount():0}},{slug:"recommended-improvements",label:d("Recommended Improvements",h),analyze:{classColor:"blue",count:l.score?this.analyzerStore.recommendedCount():0}},{slug:"good-results",label:d("Good Results",h),analyze:{classColor:"green",count:l.score?this.analyzerStore.goodCount():0}}]}},methods:{processChangeTab(l){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:"seoAuditChecklist",value:l}),setTimeout(()=>{this.internalDebounce=!1},50))},refresh(){this.analyzerStore.analyzing=!0,this.analyzerStore.runSiteAnalyzer({refresh:!0})}}},be={class:"aioseo-seo-audit-checklist"},Ae=["innerHTML"],Oe={class:"label"};function Te(l,y,g,e,c,t){const k=n("core-seo-site-score-analyze"),r=n("core-card"),z=n("svg-circle-question-mark"),v=n("core-tooltip"),o=n("svg-refresh"),b=n("base-button"),A=n("core-main-tabs"),u=n("core-seo-site-analysis-results");return i(),S("div",be,[a(r,{slug:"connectOrScore","hide-header":"","no-slide":"",toggles:!1},{default:p(()=>[a(k)]),_:1}),(e.rootStore.isPro&&e.licenseStore.licenseKey||e.optionsStore.internalOptions.internal.siteAnalysis.connectToken)&&e.optionsStore.internalOptions.internal.siteAnalysis.score?(i(),T(r,{key:0,slug:"completeSeoChecklist","no-slide":"",toggles:!1},{header:p(()=>[s("span",null,_(c.strings.completeSeoChecklist),1),a(v,null,{tooltip:p(()=>[s("span",{innerHTML:c.strings.cardDescription},null,8,Ae)]),default:p(()=>[a(z)]),_:1})]),"header-extra":p(()=>[a(b,{class:"refresh-results",type:"gray",size:"small",onClick:t.refresh,loading:e.analyzerStore.analyzing},{default:p(()=>[a(o),R(" "+_(c.strings.refreshResults),1)]),_:1},8,["onClick","loading"])]),tabs:p(()=>[a(A,{tabs:t.tabs,showSaveButton:!1,active:e.settingsStore.settings.internalTabs.seoAuditChecklist,internal:"",onChanged:t.processChangeTab,"skinny-tabs":""},{"var-tab":p(({tab:C})=>[s("span",{class:X(["round",C.analyze.classColor])},_(C.analyze.count||0),3),s("span",Oe,_(C.label),1)]),_:1},8,["tabs","active","onChanged"])]),default:p(()=>[a(u,{section:e.settingsStore.settings.internalTabs.seoAuditChecklist,"all-results":e.analyzerStore.getSiteAnalysisResults,"show-instructions":""},null,8,["section","all-results"])]),_:1})):f("",!0)])}const go=H(ve,[["render",Te]]);export{go as default};
