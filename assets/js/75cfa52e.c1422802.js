"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6949],{8940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"PB/index","title":"PB","description":"Documenti RTB","source":"@site/docs/PB/index.mdx","sourceDirName":"PB","slug":"/PB/","permalink":"/docs/PB/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"PB","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Intro","permalink":"/docs/intro"},"next":{"title":"Documentazione Esterna","permalink":"/docs/PB/Documentazione_Esterna/"}}');var s=n(4848),i=n(8453),o=n(5871);const c={title:"PB",sidebar_position:1},l=void 0,a={},u=[{value:"Documenti RTB",id:"documenti-rtb",level:2}];function d(e){const t={h2:"h2",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"documenti-rtb",children:"Documenti RTB"}),"\n",(0,s.jsx)(o.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>D});var r=n(6540),s=n(4164),i=n(4718),o=n(8774),c=n(4586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,c.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function m(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}var h=n(6654),f=n(1312),p=n(1107);const x={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(4848);function j(e){let{href:t,children:n}=e;return(0,g.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",x.cardContainer),children:n})}function b(e){let{href:t,icon:n,title:r,description:i}=e;return(0,g.jsxs)(j,{href:t,children:[(0,g.jsxs)(p.A,{as:"h2",className:(0,s.A)("text--truncate",x.cardTitle),title:r,children:[n," ",r]}),i&&(0,g.jsx)("p",{className:(0,s.A)("text--truncate",x.cardDescription),title:i,children:i})]})}function w(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=m();return t=>e(t,(0,f.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,g.jsx)(b,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function P(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,g.jsx)(b,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(P,{item:t});case"category":return(0,g.jsx)(w,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function B(e){let{className:t}=e;const n=(0,i.$S)();return(0,g.jsx)(D,{items:n.items,className:t})}function D(e){const{items:t,className:n}=e;if(!t)return(0,g.jsx)(B,{...e});const r=(0,i.d1)(t);return(0,g.jsx)("section",{className:(0,s.A)("row",n),children:r.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(y,{item:e})},t)))})}}}]);