<template>
  <div>
    <!-- <basicComponent/> -->
    <!-- <global-component />
    <LocalComponentVue />
    <My-Component msg="gopi" />
    <VueMethodsVue vue="...App.." />
    <InterpolationsExamplesVue /> -->
    <DirectivesExamplesVue2 />
    <DirectivesExamplesVue  />
  </div>
  <!-- sss -->
</template>
<!-- MyComponent -->

<script>
import DirectivesExamplesVue from './assets/Mocks/DirectivesExamples.vue';
import DirectivesExamplesVue2 from './assets/Mocks/DirectivesExamples2.vue';
// import InterpolationsExamplesVue from "./assets/Mocks/InterpolationsExamples.vue";
// import LocalComponentVue from "./assets/Mocks/LocalComponent.vue";
// import MyComponent from "./assets/Mocks/MyComponentStructureInfo.vue";
// import VueMethodsVue from "./assets/Mocks/VueMethods.vue";

export default {
  name: "App",
  components: {
    // "My-Component": MyComponent,
    // LocalComponentVue,
    // VueMethodsVue: VueMethodsVue,
    // InterpolationsExamplesVue,
    DirectivesExamplesVue,
    DirectivesExamplesVue2
  },
};
</script>

<style></style>
