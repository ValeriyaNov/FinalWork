<template>
  <div class="container">
    <div class="title"> {{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'TitleComponent',
props:['title']
}
</script>
<style lang='scss' scoped>
  @import "@/assets/css-module/_vars.scss";
  .title{
    width:560px;
    color: $colorTitle;
    font-family: Lato;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
  .container{
    padding-top:56px;
    margin-bottom:30px;
    display:flex;
    justify-content:center;
  }
  @media screen and (min-width:320px) and (max-width: 766px) {
    .title{
      width: 300px;
      font-size: 25px;
    }
  .container{
    padding-top:10px;
    margin-bottom:10px;
    }  
    }
</style>