<!-- Product.vue -->
<template>
  <div>
    <h2> params :{{ $route.params.id }}</h2>
     <p>Query Parameter: {{ $route.query.q }}</p>
      <p>Username from state: {{ $route?.state?.userData?.username }}</p>
  </div>
</template>
<script>
export default {
  name: "ProductDetail",

  mounted() {
    console.log("State data:", this.$route.state);
  },
};
</script>
