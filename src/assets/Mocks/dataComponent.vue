<template>
    <div>
         -----------------------------------------------------------------------------
    <h1> data Examples</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, Vue!',
        count: 0,
        isActive: true,
        user: {
          name: 'John Doe',
          age: 25,
        },
        items: ['Item 1', 'Item 2', 'Item 3'],
      };
    },
  };
  </script>
  
  <!-- Reactivity -->
  <!-- this.message = 'New Message'; -->
  <!-- Accessing Data Properties: -->
  <!-- <template>
    <div>
      <p>{{ message }}</p>
      <p>{{ user.name }}</p>
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </template> -->
  <!-- Limitations -->
  // To add a new property
<!-- this.$set(this.user, 'newProperty', 'New Value'); -->

// To delete a property
<!-- this.$delete(this.user, 'age'); -->
