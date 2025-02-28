<template>
  <div>
    <div class="main__center">
        <div class="scroller__title">
            <p>Структура <br>технического комитета</p>
        </div>
        <div class="slider">
            <div class="slider__carousel">
                <div class="slider__magnifier">
                    <div class="slider__magnifier__title">
                        {{ title }}
                    </div>
                    <div class="slider__magnifier__text">
                            {{text}}
                    </div>
                </div>
                <div class="slider__images">
                    <img class="slider__images__pic" :src="require('@/assets/img/'+image)" alt="PPE">
                </div>
                <ul class="slider__navlinks">
                    <input class='slider__navlinks__point' type="radio"  v-for="points,index in slides" v-model="selectedImg" :value="index"  name="images" :key="index"/>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StructuraPkComponent',
  data() {
    return {
    selectedImg:0,
      slides:[
        {
            id:0,
            title:'ПК1',
            content:'Промышленные экзоскелеты',
            img:'x-arm.jpg'
        },
        {
            id:1,
            title:'ПК2',
            content:'Средства индивидуальной защиты органов дыхания',
            img:'noise.jpg'
        },
        {
            id:2,
            title:'ПК3',
            content:'Изолирующие костюмы',
            img:'suitChim.jpg'
        },
        {
            id:3,
            title:'ПК4',
            content:'Промышленные экзоскелеты',
            img:'skelet.jpg'
        },
        {
            id:4,
            title:'ПК5',
            content:'Средства индивидуальной защиты ног',
            img:'footwear.jpg'
        },
        {
            id:5,
            title:'ПК6',
            content:'Средства индивидуальной защиты рук',
            img:'hand.jpg'
        },
        {
            id:6,
            title:'ПК7',
            content:'Средства индивидуальной защиты от падения с высоты',
            img:'pogarnik.jpg'
        },
        {
            id:7,
            title:'ПК8',
            content:'Средства индивидуальной защиты органов слуха',
            img:'head.jpg'
        }
      ]
    };
  },
  computed:{
    image(){
        return this.slides[this.selectedImg].img
    },
    title(){
        return this.slides[this.selectedImg].title
    },
    text(){
        return this.slides[this.selectedImg].content
    },
  }
};
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    @import "@/assets/css-module/_vars.scss";
    .main__center {
        margin: auto;
        padding: 15px;
        text-align: center;
        position: relative;
        background-color: #1f1e1e;
            }
    .scroller__title {
        font-family: Lato;
        font-size: 45px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        color: $colorTitle;
        margin-top: 15px;
        margin-bottom: 20px;
            }
    .slider{
        display: flex;
        justify-content: center;
        &__magnifier{
            position: absolute;
            border: 2px solid $colorTitle;
            border-radius: 15px;
            background-color: $colorTitle;
            width: 350px;
            height: 70px;
            padding: 10px 7px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            &__title{
                font-family: 'Lato';
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
                line-height: 17px;
                color: #1f1e1e;
                    }
                &__text{
                    font-family: Lato;
                    font-style: normal;
                    font-size: 22px;
                    line-height: normal;
                    font-weight: 700;
                    color: #1f1e1e;
                    }
                }
        &__images{
            width:700px;
            height:585px;
            border-radius: 70px;
            overflow: hidden;
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            &__pic{
                width:800px;
                height:650px; 
                }
                }
        &__navlinks{
            &__point{
                margin-left: 10px;
                appearance: none;
                width: 30px;
                height: 30px;
                border-radius: 30%;
                background-color:$colorTitle;
                border:5px solid $colorTitle; 
                    }
                &__point:checked{
                    background-color:#973C28;
                    border-color: #EEEED1;
                    padding: 5px;
                    transform: scale(1.2);
                    } 
                }
            }
    @media screen and (min-width:320px) and (max-width: 766px) {
        $widthSite:320px;
        .scroller__title{
            font-size: 25px;
            }
        .slider{  
            &__magnifier{
                width: 130px;
                height: 40px;
                &__title{
                    font-size: 14px;}
                &__text{
                    font-size: 12px;
                    }
                }
                &__images{
                    width:300px;
                    height:300px;
                    border-radius: 30px;
                    &__pic{
                        width:300px;
                        height:300px; 
                    }
                }
                &__navlinks{
                    &__point{
                        margin-left: 5px;
                        width: 27px;
                        height: 27px;
                    } 
                }
            }
        }
</style>