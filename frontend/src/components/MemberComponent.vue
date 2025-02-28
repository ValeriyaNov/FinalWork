<template>
  <div class="item">
    <p class="item__title">Компании, которые являются членами ТК 320</p>
    <div class="item__content">
      <div v-for='mem in members' :key='mem.id' class="member">
        <img :src="require('@/assets/img/'+ mem.url)" alt="Logo company" class="member__item">
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'MemberComponent',
  data() {
    return {
      members:[
        {url:'3M.png'}, {url:'arty.png'},{url:'techno.jpg'},{url:'honeywell.jpg'},{url:'avangard.jpg'},{url:'chaika.jpg'},{url:'ek.jpg'},{url:'moder.jpeg'},{url:'tambov.png'},{url:'opora.jpg'},{url:'asis.png'},{url:'respir.webp'},{url:'rjmmun.jpg'},{url:'inter.jpeg'},{url:'sercons.jpg'}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css-module/_vars.scss";
.item{ 
    border:1px solid transparent;
    background-color: white;
    border-radius: 120px;
    padding: 20px;
    &__title{
      color: $colorBack;
      font-family: Jost;
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    &__content{
      display: grid;
      grid-template-columns: repeat(3, 3fr);
    }   
}
.member{
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    &__item{
        border:1px solid transparent;
        border-radius: 30px;
        background-color: azure;
    }
}
@media screen and (min-width:767px) and (max-width: 1139px) {
.item__content{
  grid-template-columns: repeat(2, 2fr);
}
}
@media screen and (min-width:320px) and (max-width: 766px) {
.item{
  &__content{
    grid-template-columns: repeat(1, 1fr);
  }
  &__title{
    font-size: 20px;
  } 
}
.member{
  &__item{
    width: 150px;
  }
}
}
</style>