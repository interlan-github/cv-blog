import{Y as k,h as v}from"./js/runtime-dom.esm-bundler.5c3c7d72.js";import{c as _,b as E}from"./js/vue-router.2f910c93.js";import{e as S,l as I}from"./js/index.7c01c5f2.js";import{l as C}from"./js/index.8c70464a.js";import{l as D}from"./js/index.d80c2c2c.js";import{e as x,m as A,y as L,c as P}from"./js/index.62477ee8.js";import{a as O,m as h}from"./js/helpers.9b039fd1.js";import{i as B}from"./js/isEqual.4981d166.js";import{i as U}from"./js/isEmpty.3aaf5f44.js";import"./js/translations.d159963e.js";import{s as m,_ as s}from"./js/default-i18n.20001971.js";import{_ as p}from"./js/App.b582c12e.js";import"./js/Caret.d9cc70ba.js";import"./js/_plugin-vue_export-helper.eefbdd86.js";import"./js/helpers.c7282833.js";import"./js/metabox.8dab9766.js";import"./js/cleanForSlug.c4a9e111.js";import"./js/toString.a2dfb892.js";import"./js/_baseTrim.11b89ad9.js";import"./js/_stringToArray.f9ddb970.js";import"./js/_baseSet.ab668497.js";import"./js/regex.8a6101c0.js";import"./js/_baseIsEqual.44a599a3.js";import"./js/_getTag.805e37e1.js";/* empty css                */import"./js/LicenseKeyBar.63474522.js";import"./js/ScrollTo.81bea8a7.js";import"./js/params.af7ed354.js";import"./js/LogoGear.cb664d3b.js";import"./js/allowed.c5017e4f.js";import"./js/constants.24c44c43.js";import"./js/SettingsRow.9f92e269.js";import"./js/Row.df38a5f6.js";import"./js/Checkbox.6db0b9ed.js";import"./js/Checkmark.e40641dd.js";import"./js/Url.3a754ef4.js";import"./js/Tabs.7a016195.js";import"./js/ProBadge.751e0b85.js";import"./js/Information.13e8cece.js";import"./js/Slide.39c07c03.js";import"./js/Index.9bf18920.js";import"./js/MaxCounts.7c38e980.js";import"./js/Tags.103f5786.js";import"./js/Tooltip.73441134.js";import"./js/Ellipse.e3ae0692.js";import"./js/Eye.8dc261a7.js";import"./js/debounce.d28a679a.js";import"./js/toNumber.9174f39a.js";import"./js/toFinite.a7fa1cc6.js";import"./js/TruSeoScore.8d32b7a8.js";import"./js/Statistics.2cff8c0a.js";import"./js/Plus.426117bd.js";import"./js/RadioToggle.333e7750.js";import"./js/GoogleSearchPreview.7b5bf30a.js";import"./js/HtmlTagsEditor.744f9f96.js";import"./js/Editor.34061631.js";import"./js/_baseClone.04585615.js";import"./js/_arrayEach.6af5abac.js";import"./js/UnfilteredHtml.8cfccf1f.js";import"./js/popup.3e33f8c7.js";import"./js/SetupWizardStore.f7bc7af4.js";import"./js/datetime.f197aeae.js";import"./js/license.20795cf4.js";import"./js/upperFirst.eac3a366.js";import"./js/Mobile.ada2591a.js";import"./js/Settings.8166179e.js";import"./js/TableOfContentsStore.4a96d77f.js";import"./js/vue3-apexcharts.57b6886c.js";import"./js/ConnectCta.31b92f22.js";import"./js/GoogleSearchConsole.59dc6246.js";import"./js/Index.0e872043.js";import"./js/Blur.edde4939.js";import"./js/Graph.f19a86b9.js";import"./js/numbers.9fc174f3.js";import"./js/WpTable.b5a0979d.js";import"./js/Table.50d8ec51.js";import"./js/Download.17eb5e1f.js";import"./js/RequiredPlans.97e0043b.js";import"./js/addons.274d2a7a.js";import"./js/PostTypes.dafa8837.js";import"./js/External.3b8c2917.js";import"./js/InternalOutbound.8d129cbf.js";import"./js/Image.68a4ffc1.js";import"./js/FacebookPreview.324acf8f.js";import"./js/Img.90c4fd14.js";import"./js/Profile.ad607616.js";import"./js/ImageUploader.4861085d.js";import"./js/TwitterPreview.6c32e38c.js";import"./js/Book.74a13fcd.js";import"./js/Build.b598c742.js";import"./js/Redirects.40a4ab5f.js";import"./js/Index.7d91a986.js";import"./js/JsonValues.3fcfec97.js";import"./js/External.c9d4f255.js";import"./js/escapeRegExp.622432b4.js";import"./js/Exclamation.22e53a8b.js";import"./js/Gear.bd4e1565.js";import"./js/date.a32abd75.js";import"./js/DatePicker.24f35bd1.js";import"./js/Calendar.b69b61c4.js";import"./js/pick.aeb091b6.js";import"./js/Card.da4d4921.js";import"./js/Upsell.78bd0d1e.js";class $ extends window.$e.modules.hookUI.Base{constructor(e,i,o){super(),this.hook=e,this.id=i,this.callback=o}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}class H extends window.$e.modules.hookData.Base{constructor(e,i,o){super(),this.hook=e,this.id=i,this.callback=o}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}function c(t,e,i){window.$e.hooks.registerUIAfter(new $(t,e,i))}function M(t,e,i){window.$e.hooks.registerDataAfter(new H(t,e,i))}let d={},l=!1;const u=()=>{const t=window.elementor.documents.getCurrent();if(!["wp-post","wp-page"].includes(t.config.type))return;const e={...d},i=O();B(e,i)||(d=i,h())},R=()=>{const t=x();U(t.currentPost)||window.elementor.config.document.id===window.elementor.config.document.revisions.current_id&&t.saveCurrentPost(t.currentPost).then(()=>{const e=A(),i=L();e.isUnlicensed||i.fetch()})},T=()=>{window.$e.internal("document/save/set-is-modified",{status:!0})},q=()=>{l||(l=!0,c("editor/documents/attach-preview","aioseo-content-scraper-attach-preview",u),c("document/save/set-is-modified","aioseo-content-scraper-on-modified",u),M("document/save/save","aioseo-save",R),S.on("postSettingsUpdated",T))},V=({elementor:t,elementorModules:e})=>{if(t.config.user.introduction["aioseo-introduction"]===!0)return;const i=new e.editor.utils.Introduction({introductionKey:"aioseo-introduction",dialogType:"alert",dialogOptions:{id:"aioseo-introduction",headerMessage:m(s("New: %1$s %2$s integration","all-in-one-seo-pack"),"AIOSEO","Elementor"),message:m(s("You can now manage your SEO settings inside of %1$s via %2$s before you publish your post!","all-in-one-seo-pack"),"Elementor","All in One SEO"),position:{my:"center center",at:"center center"},strings:{confirm:s("Got It!","all-in-one-seo-pack")},hide:{onButtonClick:!1},onConfirm:()=>{i.setViewed(),i.getDialog().hide()}}});i.show()},r={icon:"eicon-calendar",name:"aioseo-limit-modified-date",param:"aioseo_limit_modified_date",title:s("Save (Don't Modify Date)","all-in-one-seo-pack")},f=t=>{const e=document.getElementById(`elementor-panel-footer-sub-menu-item-${r.name}`);e&&(e.classList.remove("elementor-disabled"),t||e.classList.add("elementor-disabled"))},j=({elementor:t,elementorCommon:e,$e:i})=>{t.once("preview:loaded",function(){t.getRegion("panel").currentView.footer.currentView.addSubMenuItem("saver-options",{icon:r.icon,name:r.name,title:r.title,callback:o=>{o.currentTarget.classList.contains("elementor-disabled")||(e.ajax.requestConstants[r.param]=!0,i.run("document/save/default"))}})}),t.on("document:loaded",o=>{f(o.container.settings.get("post_status")==="draft")}),i.commandsInternal.on("run:after",(o,a,b)=>{switch(a){case"document/save/set-is-modified":f(b.status);break;case"document/save/save":case"document/save/default":delete e.ajax.requestConstants[r.param];break}})};let n=null,w=!1;const W=()=>{let t=window.elementor.getPreferences("ui_theme")||"auto";t==="auto"&&(t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.body.classList.forEach(e=>{e.startsWith("aioseo-elementor-")&&document.body.classList.remove(e)}),document.body.classList.add("aioseo-elementor-"+t)},Y=({elementor:t,$e:e,Marionette:i})=>{e.routes.on("run:after",function(o,a){W(),a==="panel/page-settings/aioseo"&&(n==null||n.unmount(),n=g("#elementor-panel-page-settings-controls"))}),t.modules.layouts.panel.pages.menu.Menu.addItem({name:"aioseo",icon:"aioseo aioseo-element-menu-icon aioseo-element-menu-icon-"+t.getPreferences("ui_theme"),title:"All in One SEO",type:"page",callback:()=>{try{e.routes.run("panel/page-settings/aioseo")}catch{e.routes.run("panel/page-settings/settings"),e.routes.run("panel/page-settings/aioseo")}}},"more"),t.once("preview:loaded",function(){e.components.get("panel/elements").addTab("aioseo",{title:"AIOSEO"})}),t.hooks.addFilter("panel/elements/regionViews",o=>(o.aioseo={region:o.global.region,view:i.ItemView.extend({template:!1,id:"elementor-panel-aioseo",className:"aioseo-elementor aioseo-sidebar-panel",initialize(){document.getElementById("elementor-panel-elements-search-area").hidden=!0},onShow(){n==null||n.unmount(),n=g("#elementor-panel-aioseo")},onDestroy(){document.getElementById("elementor-panel-elements-search-area").hidden=!1}}),options:{}},o))},g=t=>{const e=document.querySelector(t);e.classList.add("edit-post-sidebar","editor-sidebar","aioseo-elementor-panel"),e.appendChild(document.createElement("div"));const i=_({history:E(),routes:[{path:"/",component:p}]});let o=k({name:"Standalone/Elementor",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>v(p)});return o=I(o),o=C(o),o=D(o),o.use(i),i.app=o,P(o,i),q(),o.mount(`${t} > div`),h(),o},y=()=>{Y(window),V(window),j(window)};window.elementor&&(setTimeout(y),w=!0);(function(t){w||t(window).on("elementor:init",()=>{window.elementor.on("panel:init",()=>{setTimeout(y)})})})(window.jQuery);
