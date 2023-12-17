<template>
  <div>
    <p>{{ localState }}</p>
    <button @click="updateLocalState">Update Local State</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localState: 'Initial value',
    };
  },
  methods: {
    updateLocalState() {
      this.localState = 'Updated value';
    },
  },
};
</script>
