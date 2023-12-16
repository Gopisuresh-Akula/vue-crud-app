<!-- SearchResult.vue -->
<template>
  <div>
    <h2>Search Result</h2>
    <p>Query: {{ $route.query.q }}</p>
  </div>
</template>


<script>
export default {
  name: "SearchResult",
};

</script>