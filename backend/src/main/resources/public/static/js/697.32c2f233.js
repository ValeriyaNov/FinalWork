"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[697],{4697:function(t,e,i){i.r(e),i.d(e,{default:function(){return H}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("UnderHeaderComponent"),e("StructuraPkComponent"),e("ActivityComponent")],1)},a=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),t._l(t.activity,(function(i){return e("div",{key:i.id,staticClass:"box"},[e("div",{staticClass:"box__active"},[e("div",{staticClass:"box__active__key"},[t._v(t._s(i.value))]),e("div",{staticClass:"box__active__value"},[t._v(t._s(i.key))])])])}))],2)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("div",{staticClass:"title__box"},[e("div",{staticClass:"title__box__text"},[t._v("Активность ТК 320")])])])}],_=i(5353),r={name:"ActivityComponent",computed:{...(0,_.aH)(["activity"])}},c=r,o=i(1656),d=(0,o.A)(c,n,l,!1,null,"678f8338",null),u=d.exports,m=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"main__center"},[t._m(0),e("div",{staticClass:"slider"},[e("div",{staticClass:"slider__carousel"},[e("div",{staticClass:"slider__magnifier"},[e("div",{staticClass:"slider__magnifier__title"},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"slider__magnifier__text"},[t._v(" "+t._s(t.text)+" ")])]),e("div",{staticClass:"slider__images"},[e("img",{staticClass:"slider__images__pic",attrs:{src:i(1382)("./"+t.image),alt:"PPE"}})]),e("ul",{staticClass:"slider__navlinks"},t._l(t.slides,(function(i,s){return e("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedImg,expression:"selectedImg"}],key:s,staticClass:"slider__navlinks__point",attrs:{type:"radio",name:"images"},domProps:{value:s,checked:t._q(t.selectedImg,s)},on:{change:function(e){t.selectedImg=s}}})})),0)])])])])},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"scroller__title"},[e("p",[t._v("Структура "),e("br"),t._v("технического комитета")])])}],g={name:"StructuraPkComponent",data(){return{selectedImg:0,slides:[{id:0,title:"ПК1",content:"Промышленные экзоскелеты",img:"x-arm.jpg"},{id:1,title:"ПК2",content:"Средства индивидуальной защиты органов дыхания",img:"noise.jpg"},{id:2,title:"ПК3",content:"Изолирующие костюмы",img:"suitChim.jpg"},{id:3,title:"ПК4",content:"Промышленные экзоскелеты",img:"skelet.jpg"},{id:4,title:"ПК5",content:"Средства индивидуальной защиты ног",img:"footwear.jpg"},{id:5,title:"ПК6",content:"Средства индивидуальной защиты рук",img:"hand.jpg"},{id:6,title:"ПК7",content:"Средства индивидуальной защиты от падения с высоты",img:"pogarnik.jpg"},{id:7,title:"ПК8",content:"Средства индивидуальной защиты органов слуха",img:"head.jpg"}]}},computed:{image(){return this.slides[this.selectedImg].img},title(){return this.slides[this.selectedImg].title},text(){return this.slides[this.selectedImg].content}}},C=g,p=(0,o.A)(C,m,v,!1,null,"1820a83a",null),h=p.exports,f=function(){var t=this;t._self._c;return t._m(0)},x=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"header__title container"},[e("div",{staticClass:"header__title__designation"},[e("h2",{staticClass:"header__title__designation__text"},[t._v("ТК 320")])]),e("div",{staticClass:"header__title__content"},[e("p",{staticClass:"header__title__content__text"},[t._v("Средства индивидуальной защиты")])])]),e("div",{staticClass:"fon"},[e("a",{staticClass:"header__btn",attrs:{href:"/logout"}},[e("button",{staticClass:"header__btn__item",attrs:{type:"button"}},[t._v(" Выход из учетной записи ")])])])])}],k=i(4335),b={name:"UnderHeaderComponent",data(){return{}},mounted(){},methods:{logout(){k.A.get("/logout").then((t=>{console.log(t.data)})).catch((t=>{console.error(t)}))}}},y=b,j=(0,o.A)(y,f,x,!1,null,"5b55638d",null),A=j.exports,I={name:"HomeView",components:{UnderHeaderComponent:A,StructuraPkComponent:h,ActivityComponent:u}},P=I,w=(0,o.A)(P,s,a,!1,null,null,null),H=w.exports}}]);
//# sourceMappingURL=697.32c2f233.js.map