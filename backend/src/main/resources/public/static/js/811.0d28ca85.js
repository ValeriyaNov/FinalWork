"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[811],{2732:function(t,e,s){s.d(e,{A:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:t.modalClass}},[e("div",{class:t.modalClass},[e("div",{class:`${t.modalClass}-backdrop`,on:{click:t.closeModal}},[e("div",{class:[{"simple-modal-scrollable":t.scrollable},`${t.modalClass}-container`]},[e("div",{class:`${t.modalClass}-content`,attrs:{role:"dialog","aria-labelledby":t.headerId,"aria-describedby":t.bodyId},on:{click:function(t){t.stopPropagation()}}},[e("header",{class:`${t.modalClass}-header`,attrs:{id:t.headerId}},[t._t("header",(function(){return[t._v(" Редактирование документа ")]}),{id:t.bodyId})],2),e("section",{class:`${t.modalClass}-body`},[t._t("body",(function(){return["standard"===t.typeModal?e("div",[e("form",{staticClass:"fon",attrs:{id:t.standardChose.id},on:{submit:function(e){return e.preventDefault(),t.submitForm("st")}}},[e("input",{attrs:{type:"text",name:"title"},domProps:{value:t.standardChose.title}}),e("input",{attrs:{name:"designation"},domProps:{value:t.standardChose.designation}}),e("input",{attrs:{name:"cipher"},domProps:{value:t.standardChose.cipher}}),e("input",{class:`${t.modalClass}-footer`,attrs:{type:"submit",value:"Сохранить"},on:{click:function(e){return t.closeModal()}}})])]):t._e(),"expertise"===t.typeModal?e("form",{staticClass:"fon",attrs:{id:t.standardChose.id},on:{submit:function(e){return e.preventDefault(),t.submitForm("ex")}}},[e("input",{attrs:{type:"text",name:"tk"},domProps:{value:t.standardChose.tk}}),e("input",{attrs:{name:"finalTime"},domProps:{value:t.standardChose.finalTime}}),e("input",{attrs:{name:"type"},domProps:{value:t.standardChose.type}}),e("input",{attrs:{name:"status"},domProps:{value:t.standardChose.status}}),e("p",[t._v(" url"+t._s(t.url))]),e("p",[t._v(t._s(t.expertise))]),e("p",[t._v(" tect"+t._s(t.test))]),e("button",{attrs:{type:"button"},on:{click:function(e){return t.generateUrl()}}},[t._v("rjjjj")]),e("input",{class:`${t.modalClass}-footer`,attrs:{type:"submit",value:"save"},on:{click:function(e){return t.closeModal()}}})]):t._e()]}))],2)])])])])])},d=[],n=s(6342),l={name:"ModalComponent",props:{standardChose:{},typeModal:{type:String,default:"standard"},show:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},headerId:{type:String,required:!0,default:null},bodyId:{type:String,required:!0,default:null},modalClass:{type:String,default:"simple-modal"}},data(){return{standard:{id:"",title:"",designation:"",cipher:""},expertise:{tk:"",startTime:"",finalTime:"",type:"",status:""},url:"",test:""}},mounted(){window.addEventListener("keydown",this.escCloseModal)},destroy(){window.removeEventListener("keydown",this.escCloseModal)},methods:{closeModal(){this.$emit("close"),this.generateUrl()},escCloseModal(t){this.show&&"Escape"===t.key&&this.closeModal()},submitForm(t){let e="";e="st"===t?this.standard:this.expertise,n.$.put(this.url,e).then((t=>{console.log(t.data)})).catch((t=>{console.error(t)}))},generateUrl(){if("standard"===this.typeModal){let t=document.querySelectorAll("input");this.standard.title=t[1].value,this.standard.designation=t[2].value,this.standard.cipher=t[3].value;let e=document.querySelector("form");this.standard.id=e.id,this.url="/standards/"+this.standard.id}else{let t=document.querySelectorAll("input");this.expertise.tk=t[1].value,this.expertise.finalTime=t[2].value,this.expertise.type=t[3].value;let e=document.querySelector("form");this.expertise.id=e.id,this.test=this.standardChose.findIndex((t=>t.id==this.expertise.id)),this.url="/exspertises/"+this.expertise.id}}}},i=l,o=s(1656),r=(0,o.A)(i,a,d,!1,null,null,null),c=r.exports},1811:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fon"},[e("div",{staticClass:"fon"},[e("div",{staticClass:"btn"},[e("button",{staticClass:"banner__button",attrs:{type:"button"}},[e("router-link",{staticClass:"banner__button__text",attrs:{to:"addstandard"}},[t._v("Добавить стандарт")])],1)]),e("ModalComponent",{directives:[{name:"show",rawName:"v-show",value:t.isShowModal,expression:"isShowModal"}],attrs:{show:t.isShowModal,scrollable:!0,"header-id":"modalHeader","body-id":"modalBody",standardChose:t.standardChose,typeModal:"standard"},on:{close:t.toggleModal}}),e("table",{staticClass:"table"},[t._m(0),e("div",{staticClass:"table__content"},t._l(t.standards,(function(s){return e("div",{key:s.id,staticClass:"table__content__item"},[e("tr",[e("td",{staticClass:"table__content__item__text"},[e("h3",{staticClass:"widthSmoll"},[t._v(t._s(s.cipher))])]),e("td",{staticClass:"table__content__item__text"},[e("h3",{staticClass:"widthMedium"},[t._v(t._s(s.designation))])]),e("td",{staticClass:"table__content__item__text"},[e("h3",{staticClass:"widthLarge"},[t._v(t._s(s.title))])]),e("td",{staticClass:"banner"},[e("button",{staticClass:"banner__button",attrs:{id:s.id},on:{click:t.toggleModal}},[e("p",{staticClass:"banner__button__text"},[t._v("Редактировать")])]),e("button",{staticClass:"banner__button",attrs:{type:"button"},on:{click:function(e){return t.deleteItem(s.id)}}},[e("p",{staticClass:"banner__button__text"},[t._v("Удалить")])])])])])})),0)])],1)])},d=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"table__head"},[e("tr",[e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthSmoll"},[t._v("Шифр")])]),e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthMedium"},[t._v("Обозначение")])]),e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthLarge"}),t._v("Наименование")]),e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthMedium"}),t._v("Действие")])])])}],n=(s(492),s(2489),s(2732)),l=s(6342),i={name:"StandardComponent",components:{ModalComponent:n.A},data(){return{standards:[],isShowModal:!1,idChose:"",standardChose:""}},methods:{loadGreeting(){l.$.get("/standards/all").then((t=>{this.$data.standards=t.data})).catch((t=>{console.log("ERROR: "+t.response.data)}))},toggleModal(t){this.isShowModal=!this.isShowModal,this.idChose=t.target.id;for(let e=0;e<=this.standards.length;e++)this.standards[e].id==this.idChose&&(this.standardChose=this.standards[e])},deleteItem(t){l.$.delete(`/standards/${t}`).then((e=>{console.log(e.data),this.standards=this.standards.filter((e=>e.id!==t))})).catch((t=>{console.error("Ошибка удаления элемента:",t)}))}},mounted(){this.loadGreeting()}},o=i,r=s(1656),c=(0,r.A)(o,a,d,!1,null,"01f80a43",null),u=c.exports}}]);
//# sourceMappingURL=811.0d28ca85.js.map