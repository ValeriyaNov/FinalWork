(function(){"use strict";var e={1710:function(e,t,n){var r=n(5471),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("HeaderComponent"),t("router-view"),t("FooterComponent")],1)},i=[],o=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"header"},[t("div",{staticClass:"header__navigation"},e._l(e.links,(function(n){return t("router-link",{key:n.id,staticClass:"header__navigation__link",attrs:{to:n.url}},[e._v(" "+e._s(n.title)+" ")])})),1),t("div",{staticClass:"menu"},[t("input",{staticClass:"burger__checkbox",attrs:{type:"checkbox",id:"burger__checkbox"}}),t("label",{staticClass:"burger",attrs:{for:"burger__checkbox"}}),t("ul",{staticClass:"menu__list"},[t("li",e._l(e.links,(function(n){return t("router-link",{key:n.id,staticClass:"menu__item",attrs:{to:n.url}},[e._v(" "+e._s(n.title)+" ")])})),1)])])])])},s=[],c={name:"HeaderComponent",data(){return{links:[{url:"home",title:"Общая информация"},{url:"standart",title:"Проекты стандартов"},{url:"admin",title:"Для администратора"},{url:"superadmin",title:"superadmin"},{url:"news",title:"Новости"},{url:"contact",title:"Контакты"}]}}},d=c,l=n(1656),u=(0,l.A)(d,o,s,!1,null,"756f6504",null),p=u.exports,f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"footer"},[t("div",{staticClass:"footer__contact"},[t("div",{staticClass:"footer__contact__text"},[t("svg",{staticClass:"footer__contact__text__icons",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[t("path",{attrs:{d:"M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"}})]),t("p",[e._v("Телефон: 8-945-852-5656")])]),t("div",{staticClass:"footer__contact__text"},[t("svg",{staticClass:"footer__contact__text__icons",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[t("path",{attrs:{d:"M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"}})]),t("p",[e._v("E-mail: pk5@yandex.ru")])])]),t("div",{staticClass:"footer__adress footer__contact__text"},[t("svg",{staticClass:"footer__contact__text__icons",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"}},[t("path",{attrs:{d:"M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"}})]),t("p",[e._v("Москва, Болотная набережная, 7")])])])},m=[],h={name:"FooterComponent"},v=h,g=(0,l.A)(v,f,m,!1,null,"0148e0e0",null),_=g.exports,b={name:"App",components:{HeaderComponent:p,FooterComponent:_}},y=b,k=(0,l.A)(y,a,i,!1,null,null,null),C=k.exports,w=n(173);r.Ay.use(w.A);const x=[{path:"/",name:"home",component:()=>Promise.all([n.e(382),n.e(254)]).then(n.bind(n,3254))},{path:"/home",name:"homs",component:()=>Promise.all([n.e(382),n.e(254)]).then(n.bind(n,3254))},{path:"/standart",name:"standart",component:()=>Promise.all([n.e(342),n.e(606)]).then(n.bind(n,6606))},{path:"/addstandard",name:"addstandard",component:()=>Promise.all([n.e(342),n.e(290)]).then(n.bind(n,2290))},{path:"/addexpertise",name:"addexpertise",component:()=>Promise.all([n.e(342),n.e(506)]).then(n.bind(n,5506))},{path:"/adminexpertise",name:"adminexpertise",component:()=>Promise.all([n.e(342),n.e(921)]).then(n.bind(n,1921))},{path:"/adminstandart",name:"adminstandart",component:()=>Promise.all([n.e(342),n.e(973)]).then(n.bind(n,1973))},{path:"/superadmin",name:"superadmin",component:()=>Promise.all([n.e(342),n.e(791)]).then(n.bind(n,7791))},{path:"/admin",name:"admin",component:()=>n.e(330).then(n.bind(n,1330))},{path:"/news",name:"news",component:()=>n.e(733).then(n.bind(n,1733))},{path:"/contact",name:"contact",component:()=>Promise.all([n.e(382),n.e(577)]).then(n.bind(n,3577))},{path:"/admin",name:"admin",component:()=>Promise.all([n.e(382),n.e(577)]).then(n.bind(n,3577))},{path:"*",redirect:"/404"},{path:"/404",name:"404",component:()=>n.e(368).then(n.bind(n,6368))}],j=new w.A({routes:x});var A=j,P=(n(8111),n(2489),n(7588),n(5353));r.Ay.use(P.Ay);var S=new P.Ay.Store({state:{activity:[{id:0,key:"количество национальных стандартов, разработанных в ТК 320",value:239},{id:1,key:"количество межгосудартвенных стандартов разработанных в ТК 320",value:142},{id:2,key:"количество членов ТК 320",value:42},{id:3,key:"результативность",value:52.6},{id:4,key:"место в рейтинге результативности ТК",value:26},{id:5,key:"количество международных стандартов, разработанных совместно с ISO/TC94/SC3",value:37}],standarts:[{id:0,cipher:"1.16.360-2.152.22",name:"ССБТ. СИЗ ног. Обувь специальная для защиты от огня. методы испытаний",type:"первая",data:{first:"26.12.2023",end:"14.05.2024"},pk:"ПК1"},{id:1,cipher:"1.16.360-2.152.22",name:"ССБТ. СИЗ рук. Jlt;lf специальная для защиты от конвективного излучения, прямого огня, повышенных температур, взрывоопасных сред. Основные положения и методы испытаний",type:"ок.ред",data:{first:"22.07.2022",end:"19.12.2023"},pk:"ПК6"},{id:2,cipher:"1.16.360-2.152.22",name:"ССБТ. СИЗ рук. Обувь специальная для защиты от огня. методы испытаний",type:"ок.ред",data:{first:"22.07.2022",end:"19.12.2023"},pk:"ПК11"},{id:3,cipher:"1.16.360-2.152.22",name:"ССБТ. СИЗ рук. Обувь специальная для защиты от огня. методы испытаний",type:"первая",data:{first:"22.07.2022",end:"19.12.2023"},pk:"ПК9"},{id:4,cipher:"1.16.360-2.152.22",name:"ССБТ. СИЗ рук. Обувь специальная для защиты от огня. методы испытаний",type:"ок.ред",data:{first:"22.07.2022",end:"19.12.2023"},pk:"ПК8"},{id:5,cipher:"1.16.360-2.152.22",name:"ССБТ. СИЗ рук. Обувь специальная для защиты от огня. методы испытаний",type:"ок.ред",data:{first:"22.07.2022",end:"19.12.2023"},pk:"ПК6"},{id:6,cipher:"1.16.360-2.152.22",name:"ССБТ. СИЗ рук. Обувь специальная для защиты от огня. методы испытаний",type:"ок.ред",data:{first:"22.07.2022",end:"19.12.2023"},pk:"ПК5"},{id:7,cipher:"1.16.360-2.152.22",name:"ССБТ. СИЗ рук. Обувь специальная для защиты от огня. методы испытаний",type:"ок.ред",data:{first:"22.07.2022",end:"19.12.2023"},pk:"ПК6"},{id:8,cipher:"1.16.360-2.152.22",name:"ССБТ. СИЗ рук. Обувь специальная для защиты от огня. методы испытаний",type:"ок.ред",data:{first:"22.07.2022",end:"19.12.2023"},pk:"ПК6"},{id:9,cipher:"1.16.360-2.152.22",name:"ССБТ. СИЗ рук. Обувь специальная для защиты от огня. методы испытаний",type:"ок.ред",data:{first:"22.07.2022",end:"19.12.2023"},pk:"ПК6"}],tages:[{id:0,value:"первая",pressed:!1},{id:1,value:"ок.ред",pressed:!1}],filterStandarts:[],perevods:[{id:0,cipher:"ISO 22434:2012",name:"Одежда специальная. Нарукавники. Техничсекие требования",type:"-",data:{first:"26.12.2023",end:"14.05.2024"},pk:"ПК4"},{id:1,cipher:"ISO 52368:2022",name:"Одежда специальная. Нарукавники. Техничсекие требования",type:"-",data:{first:"26.12.2023",end:"14.05.2024"},pk:"ПК4"}],news:[{id:0,title:"Собрание ПК4",content:"Уважаемые члены ПК 4, 22.01.2024 г. состоится ежегодное собрание ПК4. Место прведения: Москва, Преображенская ул. дом 8. Обсуждаемые вопросы: итоги выполнения ПНС 2023, голосование по рассматриваемым проектам, рассмотрение заявок на вступление в ПК. Ждем Вас с нетерпением",tag:"собрание",oppen:!0},{id:1,title:"Начало публичного обсуждения проектов ",content:"06 июня 2022 года началось публичное обсуждение следующих проектов национальных и межгосударственных стандартов. Изделия медицинские электрические. Часть 1-11. Общие требования к базовой безопасности и существенным рабочим характеристикам. Требования к медицинскому оборудованию и системам, используемым для ухода за больными в домашней среде (шифр темы: 1.10.011-1.142.22). Аппараты наркозные и дыхательные. Совместимость с кислородом (шифр темы: 1.10.011-1.154.22).",tag:"стандарт",oppen:!1},{id:2,title:"Собрание ТК 320",content:"Уважаемые члены ПК 4, 22.01.2024 г. состоится ежегодное собрание ПК4. Место прведения: Москва, Преображенская ул. дом 8. Обсуждаемые вопросы: итоги выполнения ПНС 2023, голосование по рассматриваемым проектам, рассмотрение заявок на вступление в ПК. Ждем Вас с нетерпением",tag:"собрание",oppen:!1},{id:3,title:"Собрание ТК 320",content:"5 декабря 2023 года в рамках проведения 27-й Международной специализированной выставки и Форума «Безопасность и Охрана труда» (БИОТ-2023) было проведено очное итоговое заседание Технического комитета по стандартизации ТК 320 «Средства индивидуальной защиты», секретариат которого ведет Российский институт стандартизации. Заседание ТК 320 прошло в расширенном составе с участием руководства и членов ТК 320, а также представителями компаний атомной отрасли, в их числе АО «Концерн Росэнергоатом».Члены технического комитета обсудили вопросы, связанные с реформированием профильного подкомитета ПК 1 ТК 320,новое наименование которого« Средства индивидуальной защиты в области использования атомной энергии» и расширенная область деятельности закреплены приказом Федерального агентства по техническому регулированию и метрологии от 19 сентября 2023 года№ 1929.",tag:"uiii",oppen:!1}],contacts:[{id:0,name:"Колесников Николай Владимирович",job:"Председатель",tel:"+7-495-856-4576",mail:"kolesnik@tec.ru",url:"Predsedatel.jpg"},{id:1,name:"Иванов Павел Семенович",job:"Зам. председателя",tel:"+7-495-856-4579",mail:"ivanov@tec.ru",url:"Ivanov.jpg"},{id:2,name:"Новик Валерия Сергеевна",job:"Ответственный секретарь",tel:"+7-495-856-4585",mail:"novik@tec.ru",url:"novik.jpg"}]},getters:{getFilterProjects:e=>e.filterStandarts,getActiveTags:e=>e.tages.filter((e=>!0===e.pressed))},mutations:{setTagsForFiltering(e,t){e.tages.forEach((e=>{e.value===t?e.pressed=!0:e.pressed=!1}))},setFilterProjects(e,t){e.filterStandarts=t}},actions:{clickTagFilter({commit:e,state:t},n){if(n){const r=n.target.textContent.trim();e("setTagsForFiltering",r);const a=t.standarts.filter((e=>e.type===r));e("setFilterProjects",a)}else{const n=t.standarts;e("setFilterProjects",n)}}},modules:{}});r.Ay.config.productionTip=!1,new r.Ay({router:A,store:S,render:e=>e(C)}).$mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],a=e[l][1],i=e[l][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,a,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"static/js/"+e+"."+{254:"befa33a1",290:"049c9635",330:"415ecc38",342:"75b78499",368:"6b0af1ff",382:"140c1909",506:"98d62239",577:"d3b2beea",606:"56935a82",733:"58774d25",791:"572d7c18",921:"75f348f7",973:"1acf9f94"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"static/css/"+e+"."+{254:"af7a3bfd",290:"0df0f416",330:"5fcdba10",368:"addfa926",506:"0f207c65",577:"bc408d27",606:"24f4d690",733:"d3eb1778",791:"5928e5ea",921:"1ad5520e",973:"799c60f6"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";n.l=function(r,a,i,o){if(e[r])e[r].push(a);else{var s,c;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+i){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[a];var p=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,a,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",n.nc&&(o.nonce=n.nc);var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)a();else{var r=n&&n.type,s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,o.parentNode&&o.parentNode.removeChild(o),i(c)}};return o.onerror=o.onload=s,o.href=t,r?r.parentNode.insertBefore(o,r.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){a=o[r],i=a.getAttribute("data-href");if(i===e||i===t)return a}},r=function(r){return new Promise((function(a,i){var o=n.miniCssF(r),s=n.p+o;if(t(o,s))return a();e(r,s,null,a,i)}))},a={524:0};n.f.miniCss=function(e,t){var n={254:1,290:1,330:1,368:1,506:1,577:1,606:1,733:1,791:1,921:1,973:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=i);var o=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,a[1](s)}};n.l(o,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,o=r[0],s=r[1],c=r[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(t&&t(r);d<o.length;d++)i=o[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1710)}));r=n.O(r)})();
//# sourceMappingURL=app.f5e94bfb.js.map