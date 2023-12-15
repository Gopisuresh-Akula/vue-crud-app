<template>
    <!-- The HTML template for the component -->
    <div>
           -----------------------------------------------------------------------------
    <h1> Component Properties</h1>
      {{ msg }}
      <h2>{{ formattedTitle }}</h2>
      <p>{{ formattedContent }}</p>
      <button @click="handleClick">Click me</button>
      <input v-model="inputValue" @input="handleInput" placeholder="Type something" />
      <p v-if="showDynamicContent">Dynamic Content: {{ dynamicContent }}</p>
    </div>
  </template>
  
  <script>
  export default {
    // JavaScript logic for the component
    name: 'MyComponent', // Naming the component
    data() {
      return {
        // Local data for the component
        title: 'Hello, Vue!',
        content: 'This is my Vue component.',
        inputValue: '',
        dynamicContent: 'Initial dynamic content',
        showDynamicContent: false,
      };
    },
    props: {
      // Properties passed to the component from its parent
      parentData: String,
      msg:String
    },
    computed: {
      // Computed properties based on the component's data and props
      formattedTitle() {
        return this.title.toUpperCase();
      },
      formattedContent() {
        return this.content.toUpperCase();
      },
    },
    methods: {
      // Methods and functions for the component
      handleClick() {
        alert('Button clicked!');
        this.$emit('custom-event', 'Data sent to parent'); // Emitting a custom event
      },
      handleInput() {
        this.showDynamicContent = true;
        this.dynamicContent = this.inputValue;
      },
    },
    // Lifecycle hooks
    created() {
      console.log('MyComponent created');
    },
    mounted() {
      console.log('MyComponent mounted');
    },
    updated() {
      console.log('MyComponent updated');
    },
    unmounted() {
      console.log('MyComponent unmounted');
    },
  };
  </script>
  
  <style scoped>
  /* Styles specific to this component */
  h2 {
    color: #333;
  }
  </style>
  