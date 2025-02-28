<template>
  <div class="footer">
    <div class="footer__contact">
            <div class="footer__contact__text">
                <svg  class='footer__contact__text__icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
                <p>Телефон: 8-945-852-5656</p>
            </div>
            <div class="footer__contact__text">
                <svg class='footer__contact__text__icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
                <p>E-mail: pk5@yandex.ru</p>
            </div>
        </div>
        <div class="footer__adress footer__contact__text">
            <svg class='footer__contact__text__icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
            <p>Москва, Болотная набережная, 7</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style lang='scss' scoped>
    @import "@/assets/css-module/_vars.scss";
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
            }
    .footer{
        display: flex;
        justify-content: end;
        gap:25px;
        background-color: $colorBack;
        padding-bottom: 25px;
        padding-top: 35px;
        &__contact{
            &__text{
                display: flex;
                justify-content: start;
                font-family: Lato;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                color: $colorTitle;
            &__icons{
                fill:$colorTitle;
                height:35px;
                margin-right:20px;
                margin-bottom:10px;
                margin-left:25px;
            }
            }
    }
    &__adress{
        margin-right: calc(50% - 1140px/2 + 10px);
    }
}
@media screen and (min-width:767px) and (max-width: 1139px) {
  $widthSite:767px;
  .footer{
    &__adress{
      margin-right: calc((50% - $widthSite/2) + 10px);
    }
  }
}
@media screen and (min-width:320px) and (max-width: 766px) {
  $widthSite:320px;
  .footer{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    &__contact{
        &__text{
            font-size: 15px;  
            &__icons{
              height:25px;
        }
    }
    }
    &__adress{
      margin-right: calc((50% - $widthSite/2) + 10px);
    }
  }
}
</style>