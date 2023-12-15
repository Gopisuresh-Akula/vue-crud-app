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
    name: "lifecycleExamples",
  data() {
    return {
      title: 'Vue.js Lifecycle Example',
      posts: [],
      realTimeUpdates: false,
      loading: true,
      updateInterval: null,
    };
  },
  created() {
    console.log('Component is created');
    this.fetchPosts();
  },
  mounted() {
    console.log('Component is mounted');
    this.startRealTimeUpdates();
  },
  beforeUpdate() {
    console.log('Component is about to update');
  },
  updated() {
    console.log('Component updated');
  },
  beforeUnmount() {
    console.log('Component is about to be destroyed');
    this.stopRealTimeUpdates();
  },
  unmounted() {
    console.log('Component is destroyed');
  },
  methods: {
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
    startRealTimeUpdates() {
      if (this.realTimeUpdates) return;

      this.realTimeUpdates = true;
      this.updateInterval = setInterval(this.fetchPosts, 5000);
    },
    stopRealTimeUpdates() {
      this.realTimeUpdates = false;
      clearInterval(this.updateInterval);
    },
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
