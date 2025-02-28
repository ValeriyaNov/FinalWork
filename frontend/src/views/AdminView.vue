<template>
  <div class="home">
    <TitleComponent :title="title"/>
    <div class="box">
      <router-link to="adminstandart">
        <button type="button" class="box__btn">Стандарты</button>
      </router-link>
      <router-link to="adminexpertise">
        <button type="button" class="box__btn">Экспертизы</button>
      </router-link>
    </div>
  </div>
</template>

<script >
import TitleComponent from "@/components/TitleComponent.vue";
export default {
  name: 'AdminView',
  components: {TitleComponent},
  data() {
    return {
      title: 'Только для администратора'
    };
  },
}
</script>
<style scoped lang="scss">
@import "@/assets/css-module/_vars.scss";
*{
  background-color: $colorBack;
  padding-left: calc(50% - $widthSite/2 + 10px);
  padding-right: calc(50% - $widthSite/2 + 10px);
  text-decoration: none;
}
.home{
  padding-bottom: 97px;
  padding-top: 57px;
  height: 58vh;
}
.box{
  margin-bottom: 30px;
  &__btn{
    position: relative;
    display: block;
    padding: 19px 39px 18px 39px;
    color: #FFF;
    margin: 0 auto;
    background: #1abc9c;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    width: 20%;
    border: 1px solid #16a085;
    border-width: 1px 1px 3px;
    margin-bottom: 10px;
    border-radius: 25px;
  }
  &__btn:hover{
    background: #109177;
  }
}
</style>