<template>
  <div>
    <div class="contact">
        <div class="contact__image"><img class="contact__image__pic" :src="require('@/assets/img/'+contact.url)" alt="People"></div>
        <div class="contact__description">
            <div class="contact__description__name">{{contact.name}}</div>
            <div class="contact__description__job">{{contact.job}}</div>
            <div class="contact__description__tel">
                <svg class='contact__description__tel__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                <p class="contact__description__tel__text"> {{contact.tel}}</p>
            </div>
            <div class="contact__description__mail">
                <svg class="contact__description__mail__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                <p class="contact__description__mail__text">{{contact.mail}}</p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContactComponent',
  props:['contact']
};
</script>

<style lang='scss' scoped>
 @import "@/assets/css-module/_vars.scss";
*{margin:0;
padding:0}
.contact{
    display:flex;
    justify-content:start;
    gap:35px;
    &__image{
        margin-left:100px;
        box-shadow: 10px 5px 5px black;
    }
    &__description{
        &__name{
            height:100px;
                color: $colorTitle;
                font-family: Lato;
                font-size: 32px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-align:start;
        }
        &__job{
            height:70px;
            margin-top:10px;
            margin-bottom:87px;
            color: $colorTitle;
                font-family: Lato;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-align:start;
        }
        &__tel{
            display:flex;
            justify-content:start;
            margin-bottom:10px;   
            &__text{
                color: $colorTitle;
                font-family: Lato;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-align:start;
            }
            &__icon{
                width:20px;
                fill:$colorPink;
                margin-right:10px;
            }
        }
        &__mail{
            display:flex;
                justify-content:start;
            &__text{
                color: $colorTitle;
                font-family: Lato;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                text-align:start;
            }
            &__icon{
                width:20px;
                fill:$colorPink;
                margin-right:10px;
            }
        }
    }
}
@media screen and (min-width:320px) and (max-width: 766px) {
  $widthSite:320px;
  .contact{
    display:flex;
    justify-content:start;
    gap:10px;
    &__image{
        margin-left:5px;
        height: 100px;
        box-shadow: 10px 5px 5px black;
        &__pic{
            width: 100px;
        }
    }
    &__description{
        height: 150px;
        &__name{
            height:50px;
            font-size: 16px;
        }
        &__job{
            height:50px;
            margin-top:5px;
            margin-bottom:5px;
            font-size: 14px;
        }
        &__tel{
            margin-bottom:10px;   
            &__text{
                font-size: 12px;
            }
            &__icon{
                width:15px;
            }
        }
        &__mail{
            &__text{
                font-size: 12px;
            }
            &__icon{
                width:15px;
            }
        }
    }
}
}

</style>