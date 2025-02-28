<template>
  <div class="fon">
    <div>
      <div>
        <TitleComponent :title="title"/>
      </div>
      <div class="box" v-if='users.length!=0'>
        <div class="form-style-5">
          <p>Добавление пользователя</p>
          <form action="/api/standards/standard" method="post" @submit.prevent="submitFormAdd" >
            <input type="text" name="title" id="title" placeholder="Логин пользователя" v-model="newUserAdd.name">
            <input type="text" name="designation" placeholder="Пароль" v-model="newUserAdd.password">
            <input type="text" name="cipher" placeholder="Роль" v-model="newUserAdd.role">
            <input type="submit" class="btn" value="Добавить">
          </form>
        </div>
        <table class="table">
          <div class="table__head"><tr>
            <th class="table__head__cell"><h3 class="widthMedium">Пользователь</h3></th>
            <th class="table__head__cell "><h3 class="widthMedium">Пароль</h3></th>
            <th class="table__head__cell "><h3 class="widthMedium">Роль</h3></th>
            <th class="table__head__cell "><h3 class="widthMedium">Действия</h3></th>
          </tr>
          </div>
          <div class="table__content">
            <div v-for='item in users' :key="item.id" class="table__content__item">
              <div :class="classVisibleTable">
                <tr>
                  <td class="table__content__item__text "><h3 class="widthMedium">{{ item.name }}</h3></td>
                  <td class="table__content__item__text "><h3 class="widthMedium">{{ item.password }}</h3></td>
                  <td class="table__content__item__text "><h3 class="widthMedium">{{ item.role }}</h3></td>
                  <td class="banner widthMedium" >
                    <button @click="oppenForm(item.id)" class="banner__button">
                      <p class="banner__button__text ">Редактировать</p>
                    </button>
                    <button @click="deleteItem(item.id)" class="banner__button" type="button"><p class="banner__button__text">Удалить</p></button>
                  </td>
                </tr>
              </div>
              <div v-if="item.id===currentId">
                <div :class="classVisibleForm" >
                  <tr>
                    <td class="table__content__item__text widthMedium"><input  type="text" :name="item.id" :value="item.name"></td>
                    <td class="table__content__item__text widthMedium"><input  type="text" :name="item.id" :value="item.password"></td>
                    <td class="table__content__item__text widthMedium"><input  type="text" :name="item.id" :value="item.role"></td>
                    <td class="banner widthMedium">
                      <button @click="submitForm(item.id)" class="banner__button" type="submit">
                        <p class="banner__button__text">Сохранить</p>
                      </button>
                    </td>
                  </tr>
                </div>
              </div>
            </div>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>

<script >
import {defineComponent} from "vue";
import TitleComponent from "@/components/TitleComponent.vue";
import {AXIOS} from "../../http-common";

export default defineComponent({
  components: {TitleComponent},
  data() {
    return {
      title: 'Только для контроля доступа',
      currentId:'',
      users:[],
      postUrl:'',
      testUser:'',
      classVisibleTable:'vivible',
      classVisibleForm:'novisible',
      newUser:{
        id:'',
        name:'',
        password:'',
        role:''
      },
      newUserAdd:{
        name:'',
        password:'',
        role:''
      }
    };
  },
  methods:{
    oppenForm(itemId){
      this.classVisibleForm = 'visible';
      this.classVisibleTable = 'novisible';
      this.currentId=itemId;
    },
    deleteItem(itemId){
      AXIOS.delete(`/users/${itemId}`)
          .then(response => {
            console.log(response.data)
            this.users = this.users.filter(item => item.id !== itemId);
          })
          .catch(error => {
            console.error('Ошибка удаления элемента:', error);
                if (error.response && error.response.status === 403)
                   {alert("У Вас нет доступа!!!")}
          });
    },
    submitForm(itemId){
      let array = document.getElementsByName(itemId);
      this.newUser.name = array[0].value;
      this.newUser.password = array[1].value;
      this.newUser.role = array[2].value;
      this.newUser.id = itemId;
      this.postUrl = '/users/' + itemId;
      AXIOS.put(this.postUrl, this.newUser)
          .then(response => {
            console.log(response.data);
            this.loadGreeting();
          })
          .catch(error => {
            if (error.response && error.response.status === 403)
               {alert("У Вас нет доступа!!!")}
            console.error(error);
          });
      this.classVisibleForm = 'novisible';
      this.classVisibleTable = 'visible';
    },
    loadGreeting() {
      AXIOS.get('/users/all')
          .then(response => {
            this.$data.users = response.data;
          })
          .catch(error => {
            if (error.response && error.response.status === 403)
                {alert("У Вас нет доступа!!!")}
            console.log('ERROR: ' + error.response.data);
          })
    },
    submitFormAdd(){
      AXIOS.post('/users/user', this.newUserAdd)
          .then(response => {
            console.log(response.data);
            this.loadGreeting();
          })
          .catch(error => {
            console.error(error);
                if (error.response && error.response.status === 403)
                    {alert("У Вас нет доступа!!!")}
          });
    },
  },
  mounted() {
    this.loadGreeting();
  }
})
</script>

<style scoped lang="scss">
@import "@/assets/css-module/_vars.scss";
.test{
  color:whitesmoke;
}

.visible{
  display: block;
}
.novisible{
  display: none;
}
.form-style-5{
  max-width: 400px;
  padding: 10px 20px;
  background-color: white;
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
  background: rgba(255,255,255,1);
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
  padding: 5px 19px 5px 19px;
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
.fon{
  display: flex;
  justify-content: center;
  background-color: $colorBack;
}
table{
  width:100%;

}
th, td{
  border:2px solid $colorTitle
}

.widthMedium{
  width: 200px;
}

.table{
  min-height: 700px;
  &__head{
    &__cell{
      color: $colorTitle;
      font-family: Lato;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding-left: 5px;
      padding-right: 5px;
      background-color: #614141;
    }
  }
  &__content{
    &__item{
      &__text{
        color: $colorTitle;
        font-family: Lato;
        font-size: 18px;
        font-style: normal;
        font-weight: 100;
        line-height: normal;
        padding-left: 5px;
        padding-right: 5px;
        background-color: #3A3535;
      }
    }
  }
}

</style>