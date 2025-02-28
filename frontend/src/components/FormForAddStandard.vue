<template>
  <div class="fonn">
    <div class="none" v-if='standards.length!=0'>
      <div class="form-style-5">
        <p><span class="number">2</span> Добавление экспертизы</p>
        <form action="/api/standards/standard" method="post" class="fon" @submit.prevent="submitForm" >
          <input type="text" name="tk" id="title" placeholder="tk" v-model="exspertise.tk">
          <input type="text" name="finalTime" placeholder="finalTime" v-model="exspertise.finalTime">
          <input type="text" name="type" placeholder="type" v-model="exspertise.type">
          <label for="standard">Выберите, пожалуйста стандарт</label>
          <select name="standard" class="form-control" id="standard" v-model="idStandard" @change="generateUrl()">
            <option v-for="item in standards" :key="item.id" :value="item.id" >{{item.id}}) {{ item.designation }}</option>
          </select>
          <input type="submit" class="btn" value="Добавить">
            <router-link to="adminexpertise">
              <button type="button">Вернуться</button>
            </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {AXIOS} from "../../http-common";
export default {
  name: 'FormForAddStandard',
  data(){
    return{
      exspertise:{
        tk:'',
        finalTime:'',
        type:''
      },
      standards:[],
      idStandard:null,
      url:''
    }
  },
  methods:{
    loadGreeting() {
      AXIOS.get('/standards/all')
          .then(response => {
            this.$data.standards = response.data;
          })
          .catch(error => {
            if (error.response && error.response.status === 403)
               {alert("У Вас нет доступа!!!")}
            console.log('ERROR: ' + error.response.data);
          })
    },
      submitForm() {
        AXIOS.post(this.url, this.exspertise)
            .then(response => {
              console.log(response.data);
              alert('Экспертиза успешно добавлена!!!')
            })
            .catch(error => {
              console.error(error);
            });
      },
    generateUrl(){
      this.url = '/exspertises/expertise/' + this.idStandard;
    }
    },
  mounted() {
      this.loadGreeting();
    }
}
</script>

<style scoped lang="scss">
@import "@/assets/css-module/_vars.scss";
.fon{

}
a{
  text-decoration: none;
  color:white;
}
.fonn{
  background-color: $colorBack;
  padding-bottom: 240px;
}
.form-style-5{
  max-width: 500px;
  padding: 10px 20px;
  background: #f4f7f8;
  margin: 10px auto;
  padding: 20px;
  background: #f4f7f8;
  border-radius: 8px;
  //font-family: Georgia, "Times New Roman", Times, serif;
}
.form-style-5 p {
  font-size: 1.4em;
  margin-bottom: 10px;
  color:$colorOther;
}
.form-style-5 input[type="text"]{
  //font-family: Georgia, "Times New Roman", Times, serif;
  background: rgba(255,255,255,.1);
  border: none;
  border-radius: 4px;
  font-size: 15px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #e8eeef;
  color:#8a97a0;
  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  margin-bottom: 30px;
}
.form-style-5 input[type="text"]:focus{
  background: #d2d9dd;
}
.form-style-5 input[type="submit"], button
{
  position: relative;
  display: block;
  padding: 19px 39px 18px 39px;
  color: #FFF;
  margin: 0 auto;
  background: #1abc9c;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  width: 100%;
  border: 1px solid #16a085;
  border-width: 1px 1px 3px;
  margin-bottom: 10px;
}
.form-style-5 input[type="submit"]:hover
{
  background: #109177;

}
.form-style-5 button:hover
{
  background: #109177;

}
.form-style-5 select {
  font-family: Georgia, "Times New Roman", Times, serif;
  background: rgba(255,255,255,.1);
  border: none;
  border-radius: 4px;
  font-size: 15px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #e8eeef;
  color:#8a97a0;
  -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  margin-bottom: 30px;
}
.form-style-5 select:focus{
  background: #d2d9dd;
}
.form-style-5 select{
  -webkit-appearance: menulist-button;
  height:35px;
}
</style>