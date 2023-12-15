<template>
  <div>
    <!-- <basicComponent/> -->
    <global-component />
    <LocalComponentVue />
    <My-Component msg="gopi" />
    <VueMethodsVue  vue="...App.."/>
    <InterpolationsExamplesVue />
  </div>
  sss
</template>
<!-- MyComponent -->

<script>
import InterpolationsExamplesVue from './assets/Mocks/InterpolationsExamples.vue';
import LocalComponentVue from "./assets/Mocks/LocalComponent.vue";
import MyComponent from "./assets/Mocks/MyComponentStructureInfo.vue";
import VueMethodsVue from "./assets/Mocks/VueMethods.vue";

export default {
  name: "App",
  components: {
    "My-Component": MyComponent,
    LocalComponentVue,
    VueMethodsVue: VueMethodsVue,
    InterpolationsExamplesVue
  },
};
</script>

<style></style>
