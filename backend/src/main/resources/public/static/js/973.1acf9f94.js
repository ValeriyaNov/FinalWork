"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[973],{5937:function(t,s,e){e.d(s,{A:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("transition",{attrs:{name:t.modalClass}},[s("div",{class:t.modalClass},[s("div",{class:`${t.modalClass}-backdrop`,on:{click:t.closeModal}},[s("div",{class:[{"simple-modal-scrollable":t.scrollable},`${t.modalClass}-container`]},[s("div",{class:`${t.modalClass}-content`,attrs:{role:"dialog","aria-labelledby":t.headerId,"aria-describedby":t.bodyId},on:{click:function(t){t.stopPropagation()}}},[s("header",{class:`${t.modalClass}-header`,attrs:{id:t.headerId}},[t._t("header",(function(){return[t._v(" Редактирование документа ")]}),{id:t.bodyId})],2),s("section",{class:`${t.modalClass}-body`},[t._t("body",(function(){return["standard"===t.typeModal?s("div",[s("form",{staticClass:"fon form",attrs:{id:t.standardChose.id},on:{submit:function(s){return s.preventDefault(),t.submitForm("st")}}},[s("input",{staticClass:"form__item",attrs:{type:"text",name:"title"},domProps:{value:t.standardChose.title}}),s("input",{staticClass:"form__item",attrs:{name:"designation"},domProps:{value:t.standardChose.designation}}),s("input",{staticClass:"form__item",attrs:{name:"cipher"},domProps:{value:t.standardChose.cipher}}),s("input",{staticClass:"btnF",class:`${t.modalClass}-footer`,attrs:{type:"submit",value:"Сохранить"},on:{click:function(s){return t.closeModal()}}})])]):t._e(),"expertise"===t.typeModal?s("form",{staticClass:"fon form",attrs:{id:t.standardChose.id},on:{submit:function(s){return s.preventDefault(),t.submitForm("ex")}}},[s("input",{staticClass:"form__item",attrs:{type:"text",name:"tk"},domProps:{value:t.standardChose.tk}}),s("input",{staticClass:"form__item",attrs:{name:"finalTime"},domProps:{value:t.standardChose.finalTime}}),s("input",{staticClass:"form__item",attrs:{name:"type"},domProps:{value:t.standardChose.type}}),s("input",{staticClass:"form__item",attrs:{name:"status"},domProps:{value:t.standardChose.status}}),s("input",{staticClass:"btnF",class:`${t.modalClass}-footer`,attrs:{type:"submit",value:"Сохранить"},on:{click:function(s){return t.closeModal()}}})]):t._e()]}))],2)])])])])])},l=[],d=e(6342),i={name:"ModalComponent",props:{standardChose:{},typeModal:{type:String,default:"standard"},show:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},headerId:{type:String,required:!0,default:null},bodyId:{type:String,required:!0,default:null},modalClass:{type:String,default:"simple-modal"}},data(){return{standard:{id:"",title:"",designation:"",cipher:""},expertise:{id:"",tk:"",startTime:"",finalTime:"",type:"",status:""},url:"",test:""}},mounted(){window.addEventListener("keydown",this.escCloseModal)},destroy(){window.removeEventListener("keydown",this.escCloseModal)},methods:{closeModal(){this.$emit("close"),this.generateUrl()},escCloseModal(t){this.show&&"Escape"===t.key&&this.closeModal()},submitForm(t){let s="";s="st"===t?this.standard:this.expertise,d.$.put(this.url,s).then((t=>{console.log(t.data)})).catch((t=>{t.response&&403===t.response.status&&alert("У Вас нет доступа!!!"),console.error(t)}))},generateUrl(){if("standard"===this.typeModal){let t=document.querySelectorAll("input");this.standard.title=t[1].value,this.standard.designation=t[2].value,this.standard.cipher=t[3].value;let s=document.querySelector("form");this.standard.id=s.id,this.url="/standards/"+this.standard.id}else{let t=document.querySelectorAll("input");this.expertise.tk=t[1].value,this.expertise.finalTime=t[2].value,this.expertise.type=t[3].value,this.expertise.status=t[4].value;let s=document.querySelector("form");this.expertise.id=s.id,this.expertise.startTime=this.standardChose.startTime,this.url="/exspertises/"+this.expertise.id}}}},n=i,o=e(1656),r=(0,o.A)(n,a,l,!1,null,null,null),c=r.exports},1973:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"fon"},[0!=t.standards.length?s("div",{staticClass:"fon"},[s("div",{staticClass:"btn"},[s("button",{staticClass:"banner__button",attrs:{type:"button"}},[s("router-link",{staticClass:"banner__button__text",attrs:{to:"addstandard"}},[t._v("Добавить стандарт")])],1)]),s("ModalComponent",{directives:[{name:"show",rawName:"v-show",value:t.isShowModal,expression:"isShowModal"}],attrs:{show:t.isShowModal,scrollable:!0,"header-id":"modalHeader","body-id":"modalBody",standardChose:t.standardChose,typeModal:"standard"},on:{close:t.toggleModal}}),s("table",{staticClass:"table"},[t._m(0),s("div",{staticClass:"table__content"},t._l(t.standards,(function(e){return s("div",{key:e.id,staticClass:"table__content__item"},[s("tr",[s("td",{staticClass:"table__content__item__text"},[s("h3",{staticClass:"widthSmoll"},[t._v(t._s(e.cipher))])]),s("td",{staticClass:"table__content__item__text"},[s("h3",{staticClass:"widthMedium"},[t._v(t._s(e.designation))])]),s("td",{staticClass:"table__content__item__text"},[s("h3",{staticClass:"widthLarge"},[t._v(t._s(e.title))])]),s("td",{staticClass:"banner"},[s("button",{staticClass:"banner__button",attrs:{id:e.id},on:{click:function(s){return t.pullStandard(e.id)}}},[s("p",{staticClass:"banner__button__text"},[t._v("Редактировать")])]),s("button",{staticClass:"banner__button",attrs:{type:"button"},on:{click:function(s){return t.deleteItem(e.id)}}},[s("p",{staticClass:"banner__button__text"},[t._v("Удалить")])])])])])})),0)])],1):t._e()])},l=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"table__head"},[s("tr",[s("th",{staticClass:"table__head__cell"},[s("h3",{staticClass:"widthSmoll"},[t._v("Шифр")])]),s("th",{staticClass:"table__head__cell"},[s("h3",{staticClass:"widthMedium"},[t._v("Обозначение")])]),s("th",{staticClass:"table__head__cell"},[s("h3",{staticClass:"widthLarge"}),t._v("Наименование")]),s("th",{staticClass:"table__head__cell"},[s("h3",{staticClass:"widthMedium"}),t._v("Действие")])])])}],d=(e(8111),e(2489),e(5937)),i=e(6342),n={name:"StandardComponent",components:{ModalComponent:d.A},data(){return{standards:[],isShowModal:!1,idChose:"",standardChose:""}},methods:{loadGreeting(){i.$.get("/standards/all").then((t=>{this.$data.standards=t.data})).catch((t=>{t.response&&403===t.response.status&&alert("У Вас нет доступа!!!"),console.log("ERROR: "+t.response.data)}))},toggleModal(){this.isShowModal=!this.isShowModal,this.loadGreeting()},pullStandard(t){for(let s=0;s<this.standards.length;s++)this.standards[s].id==t&&(this.standardChose=this.standards[s]);this.toggleModal()},deleteItem(t){i.$.delete(`/standards/${t}`).then((s=>{console.log(s.data),this.standards=this.standards.filter((s=>s.id!==t))})).catch((t=>{t.response&&403===t.response.status&&alert("У Вас нет доступа!!!"),console.error("Ошибка удаления элемента:",t)}))}},mounted(){this.loadGreeting()}},o=n,r=e(1656),c=(0,r.A)(o,a,l,!1,null,"3c5a12e0",null),u=c.exports}}]);
//# sourceMappingURL=973.1acf9f94.js.map