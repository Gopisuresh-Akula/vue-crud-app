<template>
  <div>
  
    <button @click="navigateToAbout">Go to About</button>
    <router-view></router-view>

  </div>

   
</template>
<!-- MyComponent -->

<script>




export default {
  name: "MainRouterExamples",
  components: {
    // "My-Component": MyComponent,
    // LocalComponentVue,
    // VueMethodsVue: VueMethodsVue,
    // InterpolationsExamplesVue,
    // DirectivesExamplesVue,
    // DirectivesExamplesVue2
    // computedExamplesVue
    // watcherExamplesVue,
    // SlotExamplesVue,
    // ChildComponentExamplesVue,
    // lifecycleExamplesVue
  },
  data() {
    return {
message:'',
  };
  },
  methods: {
    
     navigateToAbout() {
      this.$router.push('/about');
    },
  },
}; 
</script>

<style></style>
