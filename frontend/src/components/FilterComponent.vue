<template>
  <div>
    <div class="tage">
        <div  @click="clickTagFilter" v-for='tag in tages' :key="tag.id" class="tage__item" :class="{pressed:tag.pressed}">
            <div class="tage__item__text">
                {{ tag.value }}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";
export default {
  name: 'FilterComponent',
  mounted() {
    this.clickTagFilter(false);
  },
  computed: {
    ...mapState(['tages']),
  },
  methods: {
    ...mapActions(['clickTagFilter']),
  },
};
</script>

<style lang="scss" scoped>
 @import "@/assets/css-module/_vars.scss";
.tage{
    padding-top: 35px;
    margin-bottom: 35px;
    display: flex;
    justify-content: end;
    gap:25px;
    &__item{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        width: 90px;
        height: 50px;
        background-color: #3A3535;
        &__text{
            color: $colorTitle;
            font-family: Lato;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;  
        }
    }
}
.pressed{
    background-color: #614141;
    transition: 1s;
}
@media screen and (min-width:320px) and (max-width: 767px) {
  $widthSite:320px;
  .tage{
    padding-top: 10px;
    margin-bottom: 10px;
    gap:15px;
    &__item{
        border-radius: 10px;
        width: 50px;
        height: 30px;
        &__text{
            font-size: 14px;
        }
    }
}
}
</style>