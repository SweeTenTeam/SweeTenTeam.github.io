"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[702],{8448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"RTB/Verbali_Esterni/index","title":"Verbali Esterni","description":"Documenti","source":"@site/docs/RTB/Verbali_Esterni/index.mdx","sourceDirName":"RTB/Verbali_Esterni","slug":"/RTB/Verbali_Esterni/","permalink":"/docs/RTB/Verbali_Esterni/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Verbali Esterni","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Glossario","permalink":"/docs/RTB/Glossario/"},"next":{"title":"Verbale Esterno 2024-11-12","permalink":"/docs/RTB/Verbali_Esterni/Verbale_Esterno_2024-11-12_V1.0"}}');var s=r(4848),i=r(8453),o=r(5871);const l={title:"Verbali Esterni",sidebar_position:5},c=void 0,a={},u=[{value:"Documenti",id:"documenti",level:2}];function d(e){const t={h2:"h2",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"documenti",children:"Documenti"}),"\n",(0,s.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5871:(e,t,r)=>{r.d(t,{A:()=>V});var n=r(6540),s=r(4164),i=r(4718),o=r(8774),l=r(4586);const c=["zero","one","two","few","many","other"];function a(e){return c.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,l.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),i=r.pluralForms.indexOf(s);return n[Math.min(i,n.length-1)]}(r,t,e)}}var h=r(6654),f=r(1312),p=r(1107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=r(4848);function b(e){let{href:t,children:r}=e;return(0,g.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",x.cardContainer),children:r})}function j(e){let{href:t,icon:r,title:n,description:i}=e;return(0,g.jsxs)(b,{href:t,children:[(0,g.jsxs)(p.A,{as:"h2",className:(0,s.A)("text--truncate",x.cardTitle),title:n,children:[r," ",n]}),i&&(0,g.jsx)("p",{className:(0,s.A)("text--truncate",x.cardDescription),title:i,children:i})]})}function _(e){let{item:t}=e;const r=(0,i.Nr)(t),n=function(){const{selectMessage:e}=m();return t=>e(t,(0,f.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,g.jsx)(j,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function w(e){let{item:t}=e;const r=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(t.docId??void 0);return(0,g.jsx)(j,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function E(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(w,{item:t});case"category":return(0,g.jsx)(_,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function T(e){let{className:t}=e;const r=(0,i.$S)();return(0,g.jsx)(V,{items:r.items,className:t})}function V(e){const{items:t,className:r}=e;if(!t)return(0,g.jsx)(T,{...e});const n=(0,i.d1)(t);return(0,g.jsx)("section",{className:(0,s.A)("row",r),children:n.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(E,{item:e})},t)))})}}}]);