(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9032:function(e,t,s){Promise.resolve().then(s.t.bind(s,413,23)),Promise.resolve().then(s.bind(s,9754))},9754:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return RequestsList}});var i=s(7437),n=s(2265),c=s(2685),a=s.n(c);function CheckIcon(e){let{onClick:t}=e;return(0,i.jsx)("div",{className:a()["check-icon"],onClick:t,children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512",children:(0,i.jsx)("path",{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"})})})}function RequestItem(e){let{item:t}=e;return(0,i.jsxs)("div",{className:a().item,children:[(0,i.jsx)("span",{className:a()["item-title"],children:t.title}),(0,i.jsxs)("span",{className:a()["item-quantity"],children:["X",t.quantity]})]})}function Request(e){let{request:t}=e,handleCompleted=e=>{fetch("https://api.bandwatch.co.il/requests/close",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})})};return(0,i.jsxs)("div",{className:a().card,children:[t.status,(0,i.jsxs)("span",{className:a().subtitle,children:["חמ״ל: ",(0,i.jsx)("span",{className:a().text,children:t.room})]}),(0,i.jsxs)("div",{className:a().items,children:[(0,i.jsx)("span",{className:a()["items-title"],children:"פריטים:"}),t.items&&t.items.map(e=>(0,i.jsx)(RequestItem,{item:e},e._id))]}),(0,i.jsx)(CheckIcon,{onClick:()=>handleCompleted(t._id)})]})}function RequestsList(){let[e,t]=(0,n.useState)([]),[s,c]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{fetch("https://api.bandwatch.co.il/requests").then(e=>e.json()).then(e=>{t(e),c(!1)}).catch(e=>t(e))},[]),e&&e.map(e=>(0,i.jsx)(Request,{request:e},e._id))}},2685:function(e){e.exports={subtitle:"page_subtitle__iAJUg",text:"page_text__LcLL2",card:"page_card__QV0Om",items:"page_items__GxdmE",item:"page_item__z7Kdy","check-icon":"page_check-icon__LBDK8","items-title":"page_items-title__3sIG_"}}},function(e){e.O(0,[868,971,472,744],function(){return e(e.s=9032)}),_N_E=e.O()}]);