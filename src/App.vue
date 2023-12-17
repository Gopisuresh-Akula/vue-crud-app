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
    <!-- <ChildComponentExamplesVue 
     :message="parentMessage"
      :count="parentCount"
      :isActive="parentIsActive"
      :items="parentItems"
      :user="parentUser"
      :username="parentUsername"
      :age="parentAge"
       theme="props theme"
       :btnclick="handleButtonClick"
       :onChange="handleInputChange"
    />
    {{inputValue}} -->
    <!-- <SlotExamplesVue/> -->
     <!-- <SlotExamplesVue> -->
    <!-- <p>This content will be injected into the slot ok with that.</p> -->
    <!-- named slot -->
    <!-- <template v-slot:header>
      <h1>Header Slot</h1>
    </template>
    <template v-slot:content>
      <p>This content goes into the content slot.</p>
    </template>
    <template v-slot:footer>
      <p>This content goes into the footer slot.</p>
    </template>

     <template v-slot:default="slotProps">
      <p>Message: {{ slotProps.message }}</p>
    </template>

  </SlotExamplesVue> -->
    <!-- <ChildComponentExamplesVue @custom-event="handleCustomEvent" />
    <p>{{ messageFromChild }}</p> -->
    <!-- <button @click="navigateToAbout">Go to About</button>
     <router-view></router-view>
     sss -->
      <!-- <MainRouterExamples/> -->
     <!-- <MainStateMngVue/> -->
       <router-view></router-view>
  </div>
  <!-- <div>
    <a href="https://www.example.com" @click.prevent="handleLinkClick">Click me!</a>
  </div>
    <button @click.once="handleClickOnce">Click me once!</button> -->
   
</template>
<!-- MyComponent -->

<script>
// import MainRouterExamples from './assets/Mocks/RouterExamples/MainRouterExamples.vue';
// import MainStateMngVue from './assets/Mocks/RouterExamples/stateMangement/MainStateMng.vue';

// import ChildComponentExamplesVue from './assets/Mocks/ChildComponentExamples.vue';
// import lifecycleExamplesVue from './assets/Mocks/lifecycleExamples.vue';
// import SlotExamplesVue from './assets/Mocks/SlotExamples.vue';
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
    // SlotExamplesVue,
    // ChildComponentExamplesVue,
    // lifecycleExamplesVue
    // MainRouterExamples,
    // MainStateMngVue
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
      inputValue: '',
      messageFromChild: '',
    }
  },
  methods: {
    handleButtonClick() {
      alert('Button Clicked in Parent!');
    },
    handleInputChange(value) {
      // Handle input change in the parent component
      this.inputValue = value;
    },
    handleCustomEvent(message) {
      this.messageFromChild = message;
    },
    handleLinkClick() {
      console.log('Link clicked, default behavior prevented');
    },
    handleClickOnce() {
      console.log('Button clicked, handler called once');
    },
     navigateToAbout() {
      this.$router.push('/about');
    },
  },
}; 
</script>

<style></style>
