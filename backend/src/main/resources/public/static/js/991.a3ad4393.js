"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[991],{9991:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"fonn"},[a("div",{staticClass:"none"},[a("div",{staticClass:"form-style-5"},[t._m(0),a("form",{staticClass:"fon",attrs:{action:"/api/standards/standard",method:"post"},on:{submit:function(a){return a.preventDefault(),t.submitForm.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.standard.title,expression:"standard.title"}],attrs:{type:"text",name:"title",id:"title",placeholder:"Наименование стандарта"},domProps:{value:t.standard.title},on:{input:function(a){a.target.composing||t.$set(t.standard,"title",a.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.standard.designation,expression:"standard.designation"}],attrs:{type:"text",name:"designation",placeholder:"Обозначение стандарта"},domProps:{value:t.standard.designation},on:{input:function(a){a.target.composing||t.$set(t.standard,"designation",a.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.standard.cipher,expression:"standard.cipher"}],attrs:{type:"text",name:"cipher",placeholder:"Шифр"},domProps:{value:t.standard.cipher},on:{input:function(a){a.target.composing||t.$set(t.standard,"cipher",a.target.value)}}}),a("input",{staticClass:"btn",attrs:{type:"submit",value:"Добавить"}}),a("button",{attrs:{type:"button"}},[a("router-link",{attrs:{to:"adminstandart"}},[t._v(" Вернуться ")])],1)])])])])},s=[function(){var t=this,a=t._self._c;return a("p",[a("span",{staticClass:"number"},[t._v("1")]),t._v(" Добавление стандарта")])}],r=e(6342),i={name:"FormForAddExspertise",data(){return{standard:{title:"",designation:"",cipher:""}}},methods:{submitForm(){r.$.post("/standards/standard",this.standard).then((t=>{console.log(t.data)})).catch((t=>{console.error(t)}))}}},d=i,o=e(1656),l=(0,o.A)(d,n,s,!1,null,"9bdf44cc",null),u=l.exports}}]);
//# sourceMappingURL=991.a3ad4393.js.map