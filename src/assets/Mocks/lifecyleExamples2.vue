<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue.js Lifecycle Example',
      message: 'Initial Message',
    };
  },
  beforeCreate() {
    // Runs before the instance is created
    console.log('Before Create Hook');
  },
  created() {
    // Runs after the instance is created
    console.log('Created Hook');
    this.initializeData();
  },
  beforeMount() {
    // Runs before the template is mounted
    console.log('Before Mount Hook');
  },
  mounted() {
    // Runs after the template is mounted
    console.log('Mounted Hook');
    this.fetchData();
  },
  beforeUpdate() {
    // Runs before the component updates
    console.log('Before Update Hook');
  },
  updated() {
    // Runs after the component updates
    console.log('Updated Hook');
  },
  beforeUnmount() {
    // Runs before the component is destroyed
    console.log('Before Unmount Hook');
  },
  unmounted() {
    // Runs after the component is destroyed
    console.log('Unmounted Hook');
  },
  errorCaptured(err, vm, info) {
    console.error('Error Captured:', err, vm, info);
    // Handle or log errors here
    return false; // Prevent the error from propagating further
  },
  methods: {
    initializeData() {
      // Perform initial data setup here
      console.log('Initializing Data');
    },
    fetchData() {
      // Fetch data after the component is mounted
      console.log('Fetching Data');
    },
    updateMessage() {
      // Simulate a data update triggering beforeUpdate and updated hooks
      this.message = 'Updated Message';
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
