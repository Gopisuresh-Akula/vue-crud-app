
<template>
  <div>
    <!-- <basicComponent/> -->
    <global-component />
    <LocalComponentVue/>
    <MyComponent1/>
  </div>
  sss
</template>
<!-- MyComponent -->

<script>
import LocalComponentVue from './assets/Mocks/LocalComponent.vue'
import MyComponent from './assets/Mocks/MyComponentStructureInfo.vue'

export default {
  name:'App',
  components: {
    MyComponent1:MyComponent,
  LocalComponentVue
  }
}
</script>

<style >
  
</style>