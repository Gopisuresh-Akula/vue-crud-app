<!-- CounterButtons.vue -->
<template>
  <div>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="asyncIncrement">Async Increment</button>
  </div>
</template>

<script>
export default {
    name: "CounterButtons",
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    asyncIncrement() {
      this.$store.dispatch('asyncIncrement');
    },
  },
};
</script>
