<template>
  <div>
    <!-- <basicComponent/> -->
    <!-- <global-component />
    <LocalComponentVue />
    <My-Component msg="gopi" />
    <VueMethodsVue vue="...App.." />
    <InterpolationsExamplesVue /> -->
    <!-- <DirectivesExamplesVue2 />
    <DirectivesExamplesVue  />
    <computedExamplesVue /> -->
    <!-- <watcherExamplesVue /> -->
    <ChildComponentExamplesVue 
     :message="parentMessage"
      :count="parentCount"
      :isActive="parentIsActive"
      :items="parentItems"
      :user="parentUser"
      :username="parentUsername"
      :age="parentAge"
    
    />
  </div>
  <!-- sss -->
</template>
<!-- MyComponent -->

<script>
import ChildComponentExamplesVue from './assets/Mocks/ChildComponentExamples.vue';
// import watcherExamplesVue from './assets/Mocks/watcherExamples.vue';
// import computedExamplesVue from './assets/Mocks/computedExamples.vue';
// import DirectivesExamplesVue from './assets/Mocks/DirectivesExamples.vue';
// import DirectivesExamplesVue2 from './assets/Mocks/DirectivesExamples2.vue'

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
    // DirectivesExamplesVue,
    // DirectivesExamplesVue2
    // computedExamplesVue
    // watcherExamplesVue,
    ChildComponentExamplesVue
  },
  data() {
    return {
   parentMessage: 'Hello from Parent!',
      parentCount: 42,
      parentIsActive: true,
      parentItems: ['Item1', 'Item2', 'Item3'],
      parentUser: {
        name: 'John Doe',
        age: 30,
      },
      parentUsername: 'ParentUser',
      parentAge: 25,
    }
  }
};
</script>

<style></style>
