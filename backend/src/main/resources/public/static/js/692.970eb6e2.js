"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[692],{4200:function(t,e,s){s.d(e,{A:function(){return o}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"title"},[t._v(" "+t._s(t.title))])])},i=[],n={name:"TitleComponent",props:["title"]},l=n,r=s(1656),d=(0,r.A)(l,a,i,!1,null,"574db766",null),o=d.exports},5692:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"fon"},[e("div",[e("div",[e("TitleComponent",{attrs:{title:t.title}})],1),e("p",{staticClass:"test"},[t._v(" nenn"+t._s(t.testUrl))]),e("p",{staticClass:"test"},[t._v("aaaa"+t._s(t.testUser))]),e("div",{staticClass:"box"},[e("div",{staticClass:"form-style-5"},[e("p",[t._v("Добавление пользователя")]),e("form",{attrs:{action:"/api/standards/standard",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submitFormAdd.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUserAdd.name,expression:"newUserAdd.name"}],attrs:{type:"text",name:"title",id:"title",placeholder:"Логин пользователя"},domProps:{value:t.newUserAdd.name},on:{input:function(e){e.target.composing||t.$set(t.newUserAdd,"name",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUserAdd.password,expression:"newUserAdd.password"}],attrs:{type:"text",name:"designation",placeholder:"Пароль"},domProps:{value:t.newUserAdd.password},on:{input:function(e){e.target.composing||t.$set(t.newUserAdd,"password",e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newUserAdd.role,expression:"newUserAdd.role"}],attrs:{type:"text",name:"cipher",placeholder:"Роль"},domProps:{value:t.newUserAdd.role},on:{input:function(e){e.target.composing||t.$set(t.newUserAdd,"role",e.target.value)}}}),e("input",{staticClass:"btn",attrs:{type:"submit",value:"Добавить"}})])]),e("table",{staticClass:"table"},[t._m(0),e("div",{staticClass:"table__content"},t._l(t.users,(function(s){return e("div",{key:s.id,staticClass:"table__content__item"},[e("div",{class:t.classVisibleTable},[e("tr",[e("td",{staticClass:"table__content__item__text"},[e("h3",{staticClass:"widthMedium"},[t._v(t._s(s.name))])]),e("td",{staticClass:"table__content__item__text"},[e("h3",{staticClass:"widthMedium"},[t._v(t._s(s.password))])]),e("td",{staticClass:"table__content__item__text"},[e("h3",{staticClass:"widthMedium"},[t._v(t._s(s.role))])]),e("td",{staticClass:"banner"},[e("button",{staticClass:"banner__button widthMedium",on:{click:function(e){return t.oppenForm(s.id)}}},[e("p",{staticClass:"banner__button__text widthMedium"},[t._v("Редактировать")])]),e("button",{staticClass:"banner__button",attrs:{type:"button"},on:{click:function(e){return t.deleteItem(s.id)}}},[e("p",{staticClass:"banner__button__text"},[t._v("Удалить")])])])])]),s.id===t.currentId?e("div",[e("div",{class:t.classVisibleForm},[e("tr",{attrs:{id:s.id}},[e("td",{staticClass:"table__content__item__text"},[e("input",{staticClass:"widthMedium",attrs:{type:"text",name:"name"},domProps:{value:s.name}})]),e("td",{staticClass:"table__content__item__text"},[e("input",{staticClass:"widthMedium",attrs:{type:"text",name:"name"},domProps:{value:s.password}})]),e("td",{staticClass:"table__content__item__text"},[e("input",{staticClass:"widthMedium",attrs:{type:"text",name:"name"},domProps:{value:s.role}})]),e("td",{staticClass:"banner"},[e("button",{staticClass:"banner__button",attrs:{type:"submit"},on:{click:function(e){return t.submitForm(s.id)}}},[e("p",{staticClass:"banner__button__text"},[t._v("Сохранить")])])])])])]):t._e(),e("div")])})),0)])])])])},i=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"table__head"},[e("tr",[e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthMedium"},[t._v("Пользователь")])]),e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthMedium"},[t._v("Пароль")])]),e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthMedium"},[t._v("Роль")])]),e("th",{staticClass:"table__head__cell"},[e("h3",{staticClass:"widthMedium"},[t._v("Действия")])])])])}],n=(s(492),s(2489),s(5471)),l=s(4200),r=s(6342),d=(0,n.pM)({components:{TitleComponent:l.A},data(){return{title:"Только для контроля доступа",currentId:"",users:[],testUrl:"",testUser:"",classVisibleTable:"vivible",classVisibleForm:"novisible",newUser:{id:"",name:"",password:"",role:""},newUserAdd:{name:"",password:"",role:""}}},methods:{oppenForm(t){this.classVisibleForm="visible",this.classVisibleTable="novisible",this.currentId=t},deleteItem(t){r.$.delete(`/users/${t}`).then((e=>{console.log(e.data),this.users=this.users.filter((e=>e.id!==t))})).catch((t=>{console.error("Ошибка удаления элемента:",t)}))},submitForm(t){let e=document.getElementById(t),s=e.children;this.testUser=s,this.testUrl=s[1].children[1].children[1],this.newUser.name=s[1].children[1].value,this.newUser.password=s[2].children[1].value,this.newUser.role=s[3].children[1].value,this.newUser.id=t,this.testUrl="/users/"+t,this.testUser=this.newUser,r.$.put("/users/{$itemId}",this.newUser).then((t=>{console.log(t.data),this.loadGreeting()})).catch((t=>{console.error(t)})),this.classVisibleForm="novisible",this.classVisibleTable="visible"},loadGreeting(){r.$.get("/users/all").then((t=>{this.$data.users=t.data})).catch((t=>{console.log("ERROR: "+t.response.data)}))},submitFormAdd(){r.$.post("/users/user",this.newUserAdd).then((t=>{console.log(t.data),this.loadGreeting()})).catch((t=>{console.error(t)}))}},mounted(){this.loadGreeting()}}),o=d,c=s(1656),u=(0,c.A)(o,a,i,!1,null,"c0c161b8",null),_=u.exports}}]);
//# sourceMappingURL=692.970eb6e2.js.map