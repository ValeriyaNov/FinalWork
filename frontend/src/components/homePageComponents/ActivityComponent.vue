<template>
  <div class="container">
    <div class="title">
        <div class="title__box">
            <div class="title__box__text">Активность ТК 320</div>
        </div>
    </div>
    <div class="box" v-for="item in activity" :key="item.id">
        <div class="box__active">
            <div class="box__active__key">{{item.value}}</div>
            <div class="box__active__value">{{ item.key }}</div>
        </div>   
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: 'ActivityComponent',
  computed: {
    ...mapState(['activity']),
  },
};
</script>

<style lang="scss" scoped>
  @import "@/assets/css-module/_vars.scss";
  .container{
    background-color: $colorBack;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .title{
    margin-bottom: 30px;
    display: flex;
    justify-content: center; 
    &__box{
      width: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
      &__text{
          font-family: Lato;
          font-size: 45px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          color: $colorTitle;}
            }
        }
  .box{
    margin-left: calc(50% - 1140px/2);
    margin-right: calc(50% - 1140px/2);
    &__active{
        display: grid;
        grid-template-columns: 1fr 6fr;
        margin-bottom: 30px;
        &__key{
          font-family: Lato;
          font-size: 45px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          color: $colorTitle;
    }
      &__value{
        font-family: Lato;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: start;
        display: flex;
        align-items: center;
        color:$colorTitle;
    }
    }
}
@media screen and (min-width:767px) and (max-width: 1139px) {
  $widthSite:767px;
  .box{
    margin-left: calc(50% - $widthSite/2);
    margin-right: calc(50% - $widthSite/2);
    &__navigation{
      margin-left: calc((50% - $widthSite/2) + 10px);
      margin-right: calc((50% - $widthSite/2) + 10px);
    }
  }
}
@media screen and (min-width:320px) and (max-width: 766px) {
  $widthSite:320px;
  .box{
    margin-left: calc(50% - $widthSite/2);
    margin-right: calc(50% - $widthSite/2);
    &__navigation{
      margin-left: calc((50% - $widthSite/2) + 10px);
      margin-right: calc((50% - $widthSite/2) + 10px);
    }
    &__active{
      margin-bottom: 10px;
      grid-template-columns: 1fr 4fr;
        &__key{
          font-size: 22px;
          margin-left: 15px;
        }
        &__value{
          margin-right: 10px;
          font-size: 20px;
      }
      }
  }
  .title{
    &__box{
      &__text{
        font-size: 25px;
      }
    }
  }
  }
</style>