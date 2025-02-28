<template>
  <div id="app">
    <HeaderComponent/>
    <router-view/>
    <FooterComponent/>
  
  </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
   
},
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,100..900;1,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
