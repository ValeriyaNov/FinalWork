<template>
  <transition :name="modalClass">
    <div :class="modalClass">
      <div
          :class="`${modalClass}-backdrop`"
          @click="closeModal">
        <div :class="[{'simple-modal-scrollable': scrollable}, `${modalClass}-container`]">
          <div
              :class="`${modalClass}-content`"
              role="dialog"
              :aria-labelledby="headerId"
              :aria-describedby="bodyId"
              @click.stop>
            <header
                :id="headerId"
                :class="`${modalClass}-header`">
              <slot
                  :id="bodyId"
                  name="header">
                Редактирование документа
              </slot>
            </header>
            <section :class="`${modalClass}-body`" >
              <slot name="body">
                <div v-if="typeModal==='standard'">
                  <form  class="fon form" @submit.prevent="submitForm('st')" :id="standardChose.id">
                    <input class= 'form__item' type="text" name="title" :value='standardChose.title'>
                    <input class= 'form__item' name="designation" :value=standardChose.designation >
                    <input class= 'form__item' name="cipher" :value=standardChose.cipher >
                    <input :class="`${modalClass}-footer`" class="btnF"
                           type="submit"
                           @click="closeModal()"
                           value="Сохранить">
                  </form>
                </div>
                <form v-if="typeModal==='expertise'" class="fon form" @submit.prevent="submitForm('ex')" :id="standardChose.id">
                  <input  class= 'form__item' type="text" name="tk" :value='standardChose.tk'>
                  <input class= 'form__item' name="finalTime" :value=standardChose.finalTime >
                  <input class= 'form__item' name="type" :value=standardChose.type >
                  <input class= 'form__item' name="status" :value=standardChose.status >
                  <input :class="`${modalClass}-footer`" class="btnF"
                         type="submit"
                         @click="closeModal()"
                         value="Сохранить">
                </form>
              </slot>
            </section>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {AXIOS} from "../../http-common";
export default {
  name: 'ModalComponent',
  props: {
    standardChose:{
    },
    typeModal:{
      type:String,
      default:'standard'
    },
  show: {
      type: Boolean,
      default: false,
    },
    scrollable: {
      type: Boolean,
      default: false,
    },
    headerId: {
      type: String,
      required: true,
      default: null,
    },
    bodyId: {
      type: String,
      required: true,
      default: null,
    },
    modalClass: {
      type: String,
      default: 'simple-modal',
    }
    },

  data(){
    return{
      standard:{
        id:'',
        title:'',
        designation:'',
        cipher:''
      },
      expertise:{
        id:'',
        tk:'',
        startTime:'',
        finalTime:'',
        type:'',
        status:''
      },
      url:'',
      test:''
    }
  },

  mounted() {
      window.addEventListener('keydown', this.escCloseModal);
  },
  destroy() {
    window.removeEventListener('keydown', this.escCloseModal);
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.generateUrl();
    },
    escCloseModal(e) {
      if (this.show && e.key === 'Escape') {
        this.closeModal();
      }
    },
    submitForm(flag) {
      let item = '';
      if (flag==='st'){
        item = this.standard;
      }
      else{
        item = this.expertise;
      }
      AXIOS.put(this.url, item)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            if (error.response && error.response.status === 403)
               {alert("У Вас нет доступа!!!")}
            console.error(error);
          })
    },
    generateUrl(){
      if (this.typeModal === 'standard'){
        let array = document.querySelectorAll('input');
        this.standard.title = array[1].value;
        this.standard.designation = array[2].value;
        this.standard.cipher = array[3].value;
        let form = document.querySelector('form');
        this.standard.id = form.id;
        this.url = '/standards/' + this.standard.id;
      }
      else{
        let array = document.querySelectorAll('input');
        this.expertise.tk = array[1].value;
        this.expertise.finalTime = array[2].value;
        this.expertise.type = array[3].value;
        this.expertise.status = array[4].value;
        let form = document.querySelector('form');
        this.expertise.id = form.id;
        this.expertise.startTime = this.standardChose.startTime;
        this.url = '/exspertises/' + this.expertise.id;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css-module/_vars.scss";
.form{
  &__item{
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
  &__item:focus{
    background: #d2d9dd;
  }
}
.btnF{
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
.btnF:hover{
  background: #109177;
}
.simple-modal {
  &-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    transition: opacity 0.3s ease;
    z-index: 9999;
  }

  &-container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: auto;
    margin: 16px;
  }

  &-scrollable {
    overflow-x: hidden;
    overflow-y: auto;
  }

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    margin: 1.75rem auto;
    padding: 20px 30px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    box-sizing: border-box;
    transform: translate(0, 0);
    transition: all 0.3s ease;
  }

  &-header {
    padding-bottom: 16px;
    font-size: 25px;
    text-align: center;
  }

  &-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    text-align: center;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease;
  }
}
</style>