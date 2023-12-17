<!-- ParentComponent.vue -->
<template>
  <child-component :propData="parentData" @updateParent="handleUpdateParent" />
</template>

<script>
export default {
  data() {
    return {
      parentData: 'Initial value',
    };
  },
  methods: {
    handleUpdateParent(updatedData) {
      this.parentData = updatedData;
    },
  },
};
</script>
