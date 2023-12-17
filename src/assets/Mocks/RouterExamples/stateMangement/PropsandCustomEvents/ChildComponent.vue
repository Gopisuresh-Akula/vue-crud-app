<!-- ChildComponent.vue -->
<template>
  <div>
    <p>{{ propData }}</p>
    <button @click="updateParent">Update Parent</button>
  </div>
</template>

<script>
export default {
  props: ['propData'],
  methods: {
    updateParent() {
      this.$emit('updateParent', 'Updated value');
    },
  },
};
</script>
