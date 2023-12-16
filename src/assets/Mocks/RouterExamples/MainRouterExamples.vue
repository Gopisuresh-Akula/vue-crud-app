<template>
  <div>
    <!-- <button @click="navigateToAbout">Go to About</button>
    <button @click="search">Search</button> -->
    <button @click="search">Search</button>
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
      message: "",
    };
  },
  methods: {
    navigateToAbout() {
      this.$router.push("/about");
    },
    search() {
      //    const userData = { username: 'example' };
      // Use router.push with the state property to pass data
      this.$router.replace({
        name: "about",
     state: {
    user: {
      name: 'John'
    }
  } 
      });
    },
  },
};
</script>

<style></style>
