<template>
  <div class="home">
    <UnderHeaderComponent/>
    <StructuraPkComponent/>
    <ActivityComponent/>
  </div>
</template>

<script>
import ActivityComponent from '@/components/homePageComponents/ActivityComponent.vue';
import StructuraPkComponent from '@/components/homePageComponents/StructuraPkComponent.vue';
import UnderHeaderComponent from '@/components/homePageComponents/UnderHeaderComponent.vue'

export default {
  name: 'HomeView',
  components: {
    UnderHeaderComponent,
    StructuraPkComponent,
    ActivityComponent
  }
}
</script>
