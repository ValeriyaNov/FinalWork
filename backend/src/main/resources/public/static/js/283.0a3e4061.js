"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[283],{8283:function(t,a,s){s.r(a),s.d(a,{default:function(){return p}});var e=function(){var t=this,a=t._self._c;return a("div",[a("ModalComponent",{directives:[{name:"show",rawName:"v-show",value:t.isShowModal,expression:"isShowModal"}],attrs:{show:t.isShowModal,scrollable:!0,"header-id":"modalHeader","body-id":"modalBody",standardChose:t.standardChose},on:{close:t.toggleModal}}),a("table",{staticClass:"table"},[t._m(0),a("div",{staticClass:"table__content"},t._l(t.standards,(function(s){return a("div",{key:s.id,staticClass:"table__content__item"},[a("tr",[a("td",{staticClass:"table__content__item__text"},[a("h3",{staticClass:"widthSmoll"},[t._v(t._s(s.id))])]),a("td",{staticClass:"table__content__item__text"},[a("h3",{staticClass:"widthSmoll"},[t._v(t._s(s.cipher))])]),a("td",{staticClass:"table__content__item__text"},[a("h3",{staticClass:"widthLarge"},[t._v(t._s(s.designation))])]),a("td",{staticClass:"table__content__item__text"},[a("h3",{staticClass:"widthSmoll"},[t._v(t._s(s.title))])]),a("button",{attrs:{id:s.id},on:{click:t.toggleModal}},[t._v(" Редактировать ")]),a("p",[t._v(t._s(t.standardChose)+" -- "+t._s(t.idChose))]),a("button",{attrs:{type:"button"}},[t._v("Удалить")])])])})),0)])],1)},l=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"table__head"},[a("tr",[a("th",{staticClass:"table__head__cell"},[a("h3",{staticClass:"widthSmoll"},[t._v("Шифр")])]),a("th",{staticClass:"table__head__cell"},[a("h3",{staticClass:"widthLarge"},[t._v("Обозначение")])]),a("th",{staticClass:"table__head__cell"},[a("h3",{staticClass:"widthSmoll"}),t._v("Наименование")])])])}],d=function(){var t=this,a=t._self._c;return a("transition",{attrs:{name:t.modalClass}},[a("div",{class:t.modalClass},[a("div",{class:`${t.modalClass}-backdrop`,on:{click:t.closeModal}},[a("div",{class:[{"simple-modal-scrollable":t.scrollable},`${t.modalClass}-container`]},[a("div",{class:`${t.modalClass}-content`,attrs:{role:"dialog","aria-labelledby":t.headerId,"aria-describedby":t.bodyId},on:{click:function(t){t.stopPropagation()}}},[a("header",{class:`${t.modalClass}-header`,attrs:{id:t.headerId}},[t._t("header",(function(){return[t._v(" Редактирование стандарта ")]}),{id:t.bodyId})],2),a("section",{class:`${t.modalClass}-body`},[t._t("body",(function(){return[a("form",{staticClass:"fon",attrs:{id:t.standardChose.id},on:{submit:function(a){return a.preventDefault(),t.submitForm.apply(null,arguments)}}},[a("input",{attrs:{type:"text",name:"title"},domProps:{value:t.standardChose.title}}),a("input",{attrs:{name:"designation"},domProps:{value:t.standardChose.designation}}),a("input",{attrs:{name:"cipher"},domProps:{value:t.standardChose.cipher}}),a("button",{attrs:{onclick:"generateUrl()"}}),a("p",[t._v(t._s(t.standard))])])]}))],2),a("footer",{class:`${t.modalClass}-footer`},[t._t("footer"),a("button",{attrs:{type:"submit"},on:{click:t.closeModal}},[t._v(" Сохранить ")])],2)])])])])])},o=[],n=s(6342),i={name:"ModalComponent",props:{standardChose:{},show:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},headerId:{type:String,required:!0,default:null},bodyId:{type:String,required:!0,default:null},modalClass:{type:String,default:"simple-modal"}},data(){return{standard:{id:"",title:"",designation:"",cipher:""},url:""}},mounted(){window.addEventListener("keydown",this.escCloseModal)},destroy(){window.removeEventListener("keydown",this.escCloseModal)},methods:{closeModal(){this.$emit("close"),this.generateUrl()},escCloseModal(t){this.show&&"Escape"===t.key&&this.closeModal()},submitForm(){n.$.put(this.url,this.standard).then((t=>{console.log(t.data)})).catch((t=>{console.error(t)}))},generateUrl(){let t=document.getElementsByName("title");this.standard.title=t.value,this.standard.title="hhhh";let a=document.getElementsByName("designation");this.standard.designation=a.value;let s=document.getElementsByName("cipher");this.standard.cipher=s.value,this.url="/standards/standard/3"}}},r=i,h=s(1656),c=(0,h.A)(r,d,o,!1,null,null,null),_=c.exports,u={name:"StandardComponent",components:{ModalComponent:_},data(){return{standards:[],isShowModal:!1,idChose:"",standardChose:""}},methods:{loadGreeting(){n.$.get("/standards/all").then((t=>{this.$data.standards=t.data})).catch((t=>{console.log("ERROR: "+t.response.data)}))},toggleModal(t){this.isShowModal=!this.isShowModal,this.idChose=t.target.id;for(let a=0;a<=this.standards.length;a++)this.standards[a].id==this.idChose&&(this.standardChose=this.standards[a])}},mounted(){this.loadGreeting()}},m=u,C=(0,h.A)(m,e,l,!1,null,"fa67f56e",null),p=C.exports}}]);
//# sourceMappingURL=283.0a3e4061.js.map