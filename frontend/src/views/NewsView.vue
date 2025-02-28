<template>
    <div class="home">
        <TitleComponent :title="title"/>
        <div class="container">
            <div class="box">
              <div v-for='newsItem in news' :key='newsItem.id'>
                  <NewsComponent :news="newsItem"/>
              </div>
            </div> 
        </div>
    </div>
  </template>
  <script>
import NewsComponent from '@/components/NewsComponent.vue';
import TitleComponent from '@/components/TitleComponent.vue';
import {mapState} from "vuex"; 
  export default {
    name: 'NewsView',
    components: {
      NewsComponent,
      TitleComponent
    },
    data() {
    return {
      title:'Новости и объявления в рамках деятельности ТК 320'
    };
  },
    computed: {
    ...mapState(['news']),
  }
  }
  </script>
  <style lang="scss" scoped>
   @import "@/assets/css-module/_vars.scss";
.home{
    background-color: $colorBack;
    padding-left: calc(50% - $widthSite/2 + 10px);
    padding-right: calc(50% - $widthSite/2 + 10px);
    min-height: 1200px;
    padding-bottom: 97px;
    
.container{
  display: flex;
    justify-content: center;
}
}
.box{
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap:20px;
} 
@media screen and (min-width:767px) and (max-width: 1139px) {
  $widthSite:767px;
  .box{
    grid-template-columns: repeat(1, 1fr);
  }
  .home{
    padding-left: calc(50% - $widthSite/2 + 10px);
    padding-right: calc(50% - $widthSite/2 + 10px);
  }
}
@media screen and (min-width:320px) and (max-width: 766px) {
  $widthSite:320px;
  .box{
    grid-template-columns: repeat(1, 1fr);
  }
  .home{
    padding-left: calc(50% - $widthSite/2 + 10px);
    padding-right: calc(50% - $widthSite/2 + 10px);
  }
}
</style>
  