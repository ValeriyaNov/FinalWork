"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[514],{4200:function(t,e,s){s.d(e,{A:function(){return o}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.title))])])},l=[],i={name:"TitleComponent",props:["title"]},n=i,_=s(1656),c=(0,_.A)(n,a,l,!1,null,"574db766",null),o=c.exports},2514:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fonn"},[e("TitleComponent",{attrs:{title:t.title}}),e("div",{staticClass:"fon"},[e("TableComponent",{attrs:{expertises:t.expertises}})],1)],1)},l=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fon"},[e("table",{staticClass:"table"},[t._m(0),e("div",{staticClass:"table__content"},t._l(t.expertises,(function(s){return e("div",{key:s.id,staticClass:"table__content__item"},[e("tr",[e("td",{staticClass:"table__content__item__text"},[e("h3",{staticClass:"widthSmoll"},[t._v(t._s(s.cipher))])]),e("td",{staticClass:"table__content__item__text"},[e("h3",{staticClass:"widthLarge"},[t._v(t._s(s.title))])]),e("td",{staticClass:"table__content__item__text"},[e("h3",{staticClass:"widthSmoll"},[t._v(t._s(s.type))])]),e("td",{staticClass:"table__content__item__text"},[e("h3",{staticClass:"widthMedium"},[t._v(t._s(t.formatDateToString(s.startTime))+" - "+t._s(t.formatDateToString(s.finalTime))+" ")])]),e("td",{staticClass:"table__content__item__text"},[e("h3",{staticClass:"widthSmoll"},[t._v(t._s(s.tk))])])])])})),0)])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"table__head"},[e("tr",[e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthSmoll"},[t._v("Шифр")])]),e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthLarge"},[t._v("Наименование")])]),e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthSmoll"},[t._v("Тип редакции")])]),e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthMedium"},[t._v("Сроки рассмотрения")])]),e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthSmoll"},[t._v("ПК")])])])])}],_={name:"TableComponent",props:["expertises"],methods:{formatDateToString(t){let e=t.slice(0,4),s=t.slice(5,7),a=t.slice(8,10),l=a+"."+s+"."+e;return l}}},c=_,o=s(1656),r=(0,o.A)(c,i,n,!1,null,"f9573794",null),d=r.exports,h=s(4200),C=s(2920),u={name:"StandartView",components:{TableComponent:d,TitleComponent:h.A},data(){return{title:"Проекты стандартов, разрабатываемые в рамках ТК 320",expertises:[]}},methods:{loadGreeting(){C.$.get("/exspertises/all").then((t=>{this.$data.expertises=t.data})).catch((t=>{console.log("ERROR: "+t.response.data)}))}},mounted(){this.loadGreeting()}},m=u,f=(0,o.A)(m,a,l,!1,null,"6da4c8e6",null),p=f.exports},2920:function(t,e,s){s.d(e,{$:function(){return l}});var a=s(4335);const l=a.A.create({baseURL:"/api"})}}]);
//# sourceMappingURL=514.ac683fa7.js.map