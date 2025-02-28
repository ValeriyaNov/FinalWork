<template>
  <div class="back">
    <div class="text">
      <p class="text__content">Страница не найдена </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',

};
</script>

<style lang='scss' scoped>
  @import "@/assets/css-module/_vars.scss";
.back{
  background-color:$colorBack;
  display:flex;
  justify-content:center;
}
  .text{
    
    box-shadow: 0 0 8px 8px #1f1e1e inset;

    border: 1px solid transparent;
    background-image: url(@/assets/img/notFound.jpg);
    height:1000px;
    background-size:cover;
    height:800px;
    width:1140px;
    text-align:start;
    padding-left:50px;
    &__content{
      color: $colorTitle;
      font-family: Lato;
      font-size: 50px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
</style>