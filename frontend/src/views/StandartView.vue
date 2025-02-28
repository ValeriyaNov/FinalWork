<template>
  <div class="fonn">
    <TitleComponent :title="title"/>
    <div class="fon">
      <TableComponent :expertises="expertises"/>
    </div>

  </div>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue';
import TitleComponent from '@/components/TitleComponent.vue';

import {AXIOS} from "../../http-common";

export default {
  name: 'StandartView',
  components: {
    TableComponent,
    TitleComponent
  },
  data() {
    return {
      title:'Проекты стандартов, разрабатываемые в рамках ТК 320',
      expertises:[]
    };
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

    }
  },
  mounted() {
    this.loadGreeting();
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
  .fon{
    display: flex;
    justify-content: center;
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

