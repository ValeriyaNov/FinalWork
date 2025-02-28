<template>
  <div>
    <div class="news">
        <div :class="getClass"></div>
        <div class="news__title">
            <div class="news__title__text">{{ news.title }}</div>
        </div>
        <div class="news__content">
            <div class="news__content__text">{{news.content}}</div>
        </div>
        <div class="news__igon">
            <svg class='news__igon__item' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewsComponent',
  props:['news'],
  computed: {
    getClass(){
        let clasas = '';
        if(this.news.tag==='собрание')
        {clasas='news__image1'}
        else if(this.news.tag==='стандарт')
        {clasas='news__image2'}
        else{
            clasas='news__image3'}
        return clasas
        },
  },
};
</script>

<style lang="scss" scoped>
 @import "@/assets/css-module/_vars.scss";
.news{
    background-color: $colorBack;
    width: 540px;
    &__title{
        margin-top: 20px;
        margin-bottom: 20px;
        height: 70px;
        &__text{color: $colorTitle;
                font-family: Lato;
                font-size: 35px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;}
    }
    &__content{
        padding-left: 25px;
        padding-right: 15px;
        height: 100px;
        overflow: hidden;
        &__text{color: $colorTitle;
                font-family: Lato;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-align: start;}
    }
    &__igon{
        &__item{
            width: 50px;
            fill:#C14067;
            transition: 1s;
        }
    &__igon:hover .news__content{
            height: 500px;
    }
    }
    &__image1{
        background-image: url(@/assets/img/meeting.jpg);
        width: 540px;
        height: 200px;
        background-size: 100%;
    }
    &__image2{
        background-image: url(@/assets/img/standart.jpg);
        width: 540px;
        height: 200px;
        background-size: 100%;
    }
    &__image3{
        background-image: url(@/assets/img/other.jpg);
        width: 540px;
        height: 200px;
        background-position: 0px -60px;
        background-size: 100%;
    }
}
    .news:hover  .news__igon__item {
    transform: rotate(180deg);
    transition: 1s;
    }
    .news:hover  .news__content {
    height: 100%;
    }
@media screen and (min-width:320px) and (max-width: 766px) {
    .news{
        width: 300px;
        &__title{
            margin-top: 5px;
            margin-bottom: 5px;
            height: 60px;
            &__text{
                font-size: 20px;
                }
            }
        &__content{
            &__text{
                font-size: 16px;
                }
            }
        &__igon{
            &__item{
                width: 30px;
        }   
        &__igon:hover .news__content{
            height: 500px;
        }
        }
        &__image1{
            width: 300px;
            height: 100px;
            background-size: 100%;
        }
        &__image2{
            background-size: 100%;
            width: 300px;
            height: 100px;
        }
        &__image3{
            background-size: 100%;
            width: 300px;
            height: 100px;
        }
    }
  }
</style>