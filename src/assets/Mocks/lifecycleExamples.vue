<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="toggleRealTimeUpdates">
      {{ realTimeUpdates ? 'Stop Real-Time Updates' : 'Start Real-Time Updates' }}
    </button>
    <p v-if="loading">Loading...</p>
    <ul v-else>
      <li v-for="post in posts" :key="post.id">
        <strong>{{ post.title }}</strong>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue.js Lifecycle Example',
      posts: [],
      realTimeUpdates: false,
      loading: true,
      updateInterval: null,
    };
  },
  // Lifecycle Hook: created
  created() {
    // Useful for initializing data and making API calls
    console.log('Component is created');
    this.fetchPosts();
  },
  // Lifecycle Hook: mounted
  mounted() {
    // Useful for performing actions after the component is mounted to the DOM
    console.log('Component is mounted');
    this.startRealTimeUpdates();
  },
  // Lifecycle Hook: beforeUpdate
  beforeUpdate() {
    // Useful for performing actions before a component updates
    console.log('Component is about to update');
  },
  // Lifecycle Hook: updated
  updated() {
    // Useful for performing actions after a component updates
    console.log('Component updated');
  },
  // Lifecycle Hook: beforeUnmount
  beforeUnmount() {
    // Useful for cleanup or resource release before a component is destroyed
    console.log('Component is about to be destroyed');
    this.stopRealTimeUpdates();
  },
  // Lifecycle Hook: unmounted
  unmounted() {
    // Useful for performing cleanup after a component is destroyed
    console.log('Component is destroyed');
  },
  methods: {
    // Fetch posts from the API
    fetchPosts() {
      this.loading = true;
      // Simulate API call to JSONPlaceholder
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          this.posts = data.slice(0, 5);
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
          this.loading = false;
        });
    },
    // Start real-time updates
    startRealTimeUpdates() {
      if (this.realTimeUpdates) return;

      this.realTimeUpdates = true;
      this.updateInterval = setInterval(this.fetchPosts, 5000);
    },
    // Stop real-time updates
    stopRealTimeUpdates() {
      this.realTimeUpdates = false;
      clearInterval(this.updateInterval);
    },
    // Toggle real-time updates
    toggleRealTimeUpdates() {
      if (this.realTimeUpdates) {
        this.stopRealTimeUpdates();
      } else {
        this.startRealTimeUpdates();
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}

button {
  margin-top: 10px;
}

p {
  color: #888;
}
</style>
