<template>
  <div class="map">
    <div class="map__text">Секретариат ТК 320 представляет ПВ ООО "Техноавиа"<br> <br> Юридический адресс: Москва, Василия Петушкова 21 к 1</div>
    <div   style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/tekhnoavia/172180470560/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Техноавиа</a><a href="https://yandex.ru/maps/213/moscow/category/management_company/184105510/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Офис организации в Москве</a><iframe src="https://yandex.ru/map-widget/v1/?ll=37.405206%2C55.838890&mode=poi&poi%5Bpoint%5D=37.402403%2C55.839653&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D172180470560&z=17.14"  class='map__map' height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
  </div>
</template>
<script>
export default {
  name: 'MapComponent',
};
</script>
<style lang="scss" scoped>
@import "@/assets/css-module/_vars.scss";
.map{
    margin-top: 160px;
    margin-bottom: 54px;
    display: flex;
    justify-content: start;
    gap:30px;
    &__text{
        margin-top: 30px;
        margin-left: 100px;
        text-align: start;
        width: 510px;
        color: $colorTitle;
        font-family: Lato;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;}
    &__map{
      width:580px;
    }
    }

@media screen and (min-width:767px) and (max-width: 1139px) {
  .map{
    gap: 15px;
    &__text{
      width: 300px;
      font-size: 25px;
    }
    &__map{
      width: 370px;
    }
  }
  }
  @media screen and (min-width:320px) and (max-width: 766px) {
  .map{
    margin-top: 10px;
    margin-bottom: 15px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    &__text{
      margin-left: 5px;  
      font-size: 16px;
      width: 250px;
    }
    &__map{
      width: 250px;
      height: 250px;
    }
  } 
  }
</style>