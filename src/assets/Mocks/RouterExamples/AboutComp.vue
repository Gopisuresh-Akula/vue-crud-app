
<template>
  <div>
    <h1>About Page</h1>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'AboutComp',
     mounted() {
    console.log("State data:", this.$route);
  },
}
</script>