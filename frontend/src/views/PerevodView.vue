<template>
    <div class="">
      <TitleComponent :title="title"/>
      <TableComponent :filterStandarts="perevods"/> 
    </div>
  </template>
  
  <script>
  import TableComponent from '@/components/TableComponent.vue';
  import TitleComponent from '@/components/TitleComponent.vue'
  import {mapState} from "vuex";
  export default {
    name: 'PerevodtView',
    components: {
      TableComponent,
      TitleComponent
    },
    data() {
    return {
      title:'Переводы стандартов, выполняемые в рамках ТК 320'
    };
  },
    computed: {
      ...mapState(['perevods']),
      
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
  @media screen and (min-width:767px) and (max-width: 1139px) {
    $widthSite:767px;
    *{
        padding-left: calc(50% - $widthSite/2 + 10px);
        padding-right: calc(50% - $widthSite/2 + 10px);

    }
  }
  @media screen and (min-width:320px) and (max-width: 767px) {
    $widthSite:320px;
    *{
        padding-left: calc(50% - $widthSite/2 + 10px);
        padding-right: calc(50% - $widthSite/2 + 10px);
    }
}
  </style>
  
  