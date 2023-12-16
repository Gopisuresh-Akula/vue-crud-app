<!-- Search.vue -->
<template>
  <div>
    <input v-model="query" />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    };
  },
  methods: {
    search() {
      // Use router.push to navigate with query parameters
      this.$router.push({ path: '/search', query: { q: this.query } });
    },
  },
};
</script>
