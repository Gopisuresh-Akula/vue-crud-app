<!-- NavigationButton.vue -->
<template>
  <button @click="navigateWithQuery">Navigate with Query</button>
</template>

<script>
export default {
  methods: {
    navigateWithQuery() {
      // Add or modify query parameters
      this.$router.push({ path: '/search', query: { q: 'example' } });
    },
  },
};
</script>
