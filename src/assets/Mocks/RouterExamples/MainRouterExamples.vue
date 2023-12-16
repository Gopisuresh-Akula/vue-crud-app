<template>
  <div>
  
    <!-- <button @click="navigateToAbout">Go to About</button>
    <button @click="search">Search</button> -->
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
     search() {
      this.$router.push({ path: `/product/${1234}`, id: 234 });
    },
  },
}; 
</script>

<style></style>
