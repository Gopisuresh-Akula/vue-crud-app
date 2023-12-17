<!-- CounterDisplay.vue -->
<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <p>Doubled Counter: {{ doubledCounter }}</p>
  </div>
</template>

<script>
export default {
    name: "CounterDisplay",
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    doubledCounter() {
      return this.$store.getters.doubledCounter;
    },
  },
};
</script>
