<template>
  <div class="fon">
    <div class="fon">
      <div class="btn">
        <button type="button" class="banner__button"> <router-link to="addexpertise" class="banner__button__text">Добавить экспертизу</router-link></button>
      </div>
      <ModalComponent
          v-show="isShowModal"
          :show="isShowModal"
          :scrollable="true"
          header-id="modalHeader"
          body-id="modalBody"
          @close="toggleModal"
          :standardChose="expertiseChose"
          typeModal="expertise"/>
      <table class="table">
        <div class="table__head"><tr>
          <th class="table__head__cell "><h3 class="widthLarge">Наименование стандарта</h3></th>
          <th class="table__head__cell "><h3 class="widthSmoll"></h3>ТК</th>
          <th class="table__head__cell "><h3 class="widthMedium"></h3>Сроки экспертизы</th>
          <th class="table__head__cell "><h3 class="widthSmoll"></h3>Тип редакции</th>
          <th class="table__head__cell "><h3 class="widthSmoll"></h3>Статус работы</th>
        </tr>
        </div>
        <div class="table__content">
          <div v-for='item in expertises' :key="item.id" class="table__content__item">
            <tr>
              <td class="table__content__item__text "><h3 class="widthLarge">{{ item.title }}</h3></td>
              <td class="table__content__item__text "><h3 class="widthSmoll">{{ item.tk }}</h3></td>
              <td class="table__content__item__text "><h3 class="widthMedium">{{ item.startTime }}-{{ item.finalTime }}</h3></td>
              <td class="table__content__item__text "><h3 class="widthSmoll">{{ item.type }}</h3></td>
              <td class="table__content__item__text "><h3 class="widthSmoll">{{ item.status }}</h3></td>
              <td class="banner">
                <button @click="pullExpertise(item.id)" :id=item.id class="banner__button">
                  <p class="banner__button__text">Редактировать</p>
                </button>
                <button @click="deleteItem(item.id)" class="banner__button" type="button"><p class="banner__button__text">Удалить</p></button>
              </td>
            </tr>
          </div>
        </div>
      </table>
    </div>
  </div>
</template>

<script >
import ModalComponent from "@/components/ModalComponent.vue";
import {AXIOS} from "../../http-common";
export default {
  name: 'ExpertiseComponent',
  components: {
    ModalComponent,
  },
  data(){
    return{
      expertises:[],
      isShowModal: false,
      idChose:'',
      expertiseChose:''
    }
  },
  methods: {
    loadGreeting() {
      AXIOS.get('/exspertises/all')
          .then(response => {
            this.$data.expertises = response.data;
          })
          .catch(error => {
            console.log('ERROR: ' + error.response.data);
          })
    },
    toggleModal() {
      this.isShowModal = !this.isShowModal;
      this.loadGreeting();
    },
    pullExpertise(itemId){
      for (let i = 0; i < this.expertises.length; i++) {
        if (this.expertises[i].id == itemId){
          this.expertiseChose = this.expertises[i];
        }
      }
      this.toggleModal();
    },
    deleteItem(itemId) {
      AXIOS.delete(`/exspertises/${itemId}`)
          .then(response => {
            console.log(response.data)
            this.expertises = this.expertises.filter(item => item.id !== itemId);
          })
          .catch(error => {
            if (error.response && error.response.status === 403)
                {alert("У Вас нет доступа!!!")}
            console.error('Ошибка удаления элемента:', error);
          });
    }
  },
  mounted() {
    this.loadGreeting();
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/css-module/_vars.scss";
a{
  text-decoration: none;
  color:$colorTitle
}
table{
  width:100%;

}
th, td{
  border:2px solid $colorTitle
}
.widthSmoll{
  width: 85px;
}
.widthMedium{
  width: 150px;
}
.widthLarge{
  width: 635px;
}
.fon{
  display: flex;
  justify-content: center;
  background-color: $colorTitle
;

}
.table{
  min-height: 700px;
  &__head{
    &__cell{
      color: $colorTitle;
      //font-family: Lato;
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
        //font-family: Lato;
        font-size: 14px;
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
@media screen and (min-width:767px) and (max-width: 1139px) {
  $widthSite:767px;
  .table__content__item__text{
    font-size: 14px;
  }
  .table__head__cell{
    font-size: 16px;
  }
  .widthSmoll{
    width: 75px;
  }
  .widthMedium{
    width: 120px;
  }
  .widthLarge{
    width: 320px;
  }
}
@media screen and (min-width:320px) and (max-width: 766px) {
  $widthSite:320px;
  .table__content__item__text{
    font-size: 8px;
  }
  .table__head__cell{
    font-size: 8px;
  }
  .widthSmoll{
    width: 35px;
  }
  .widthMedium{
    width: 55px;
  }
  .widthLarge{
    width: 58px;
  }
}
.banner__button{
  width: 150px;
  height: 30px;
  border-radius: 18px;
  box-shadow: 0px 10px 20px 0px $colorTitle;
  background-color: rgb(41, 47, 54);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 26px 49px 26px 48px;
  color: $colorTitle;
  margin-top: 5px;
  margin-bottom: 10px;
  &__text {
    //font-family: Jost;
    font-size: 14px;
    font-weight: 600;
    line-height: 125%;
    text-align: center;
    margin-right: 10px;
  }
}
.banner__button:hover {
  background-color: #614141;

  border: 1px solid transparent;
}
</style>