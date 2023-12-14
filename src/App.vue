
<template>
  <div>
    <!-- <basicComponent/> -->
    <global-component />
    <LocalComponentVue/>
    <My-Component msg="gopi"/>
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
    "My-Component":MyComponent,
  LocalComponentVue
  }
}
</script>

<style >
  
</style>