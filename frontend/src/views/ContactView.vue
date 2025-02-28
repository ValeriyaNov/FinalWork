<template>
    <div class="home">
        <TitleComponent :title="title"/>      
        <div class="box">
            <div v-for='contact in contacts' :key='contact.id' class="box">
              <ContactComponent :contact="contact"/>
            </div>
        </div>
        <MapComponent/> 
        <MemberComponent/>   
    </div>
  </template>
  
  <script> 
  import ContactComponent from '@/components/ContactComponent.vue';
  import MapComponent from '@/components/MapComponent.vue';
  import MemberComponent from '@/components/MemberComponent.vue';
  import TitleComponent from '@/components/TitleComponent.vue';
  import {mapState} from "vuex"; 
  export default {
    name: 'ContactView',
    components: {
      ContactComponent,
      TitleComponent,
      MapComponent,
      MemberComponent
    },
    data() {
    return {
      title:'Структура и состав ТК 320'
    };
  },
    computed: {
    ...mapState(['contacts']), 
  }
  }
  </script>
  <style lang="scss" scoped>
    @import "@/assets/css-module/_vars.scss";
    *{
      background-color: $colorBack;
      padding-left: calc(50% - $widthSite/2 + 10px);
      padding-right: calc(50% - $widthSite/2 + 10px);
    }
    .home{
      padding-bottom: 97px;
    }
    .box{
      margin-bottom: 30px;
    }  
    @media screen and (min-width:767px) and (max-width: 1139px) {
      $widthSite:767px;
      .home{
      padding-left: calc(50% - $widthSite/2 + 10px);
      padding-right: calc(50% - $widthSite/2 + 10px);
      }
    } 
    @media screen and (min-width:320px) and (max-width: 766px) {
      $widthSite:320px;
      .home{
        padding-left: calc(50% - $widthSite/2 + 10px);
        padding-right: calc(50% - $widthSite/2 + 10px);
        padding-bottom: 20px;
        }
      .box{
        padding-bottom: 10px;
          }  
    } 
</style>
  