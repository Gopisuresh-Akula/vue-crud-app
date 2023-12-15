<!-- ChildComponent.vue -->
<template>
  <div>
    <h1>{{ theme }}</h1>
    <p><strong>Message:</strong> {{ validatedMessage }}</p>
    <p><strong>Count:</strong> {{ validatedCount }}</p>
    <p><strong>Is Active:</strong> {{ isActive }}</p>
    <p><strong>Items:</strong> {{ validatedItems }}</p>
    <p><strong>User:</strong> {{ validatedUser }}</p>
    <p><strong>Required Username:</strong> {{ username }}</p>
    <p><strong>Validated Age:</strong> {{ validatedAge }}</p>
  </div>
</template>

<script>
export default {
    name:'ChildComponentExamples',
  props: {
    // String prop with default value
    message: {
      type: String,
      default: 'Default Message',
      },
    theme: {
      type: String,
      default: 'Default theme',
    },
    // Number prop with default value
    count: {
      type: Number,
      default: 42,
    },
    // Boolean prop
    isActive: Boolean,
    // Array prop with default value
    items: {
      type: Array,
      default: () => [],
      validator: (value) => value.every((item) => typeof item === 'string'),
    },
    // Object prop
    user: {
      type: Object,
      default: () => ({}),
    },
    // Required string prop
    username: {
      type: String,
      required: false,
    },
    // Custom validation function for a prop
    age: {
      type: Number,
      validator: (value) => value >= 0 && value <= 120,
    },
  },
  computed: {
    validatedMessage() {
      return `Message: ${this.message}`;
    },
    validatedCount() {
      return `Count: ${this.count}`;
    },
    validatedItems() {
      return `Items: ${this.items.join(', ')}`;
    },
    validatedUser() {
      return `User: ${this.user.name} (${this.user.age} years old)`;
    },
    validatedAge() {
      return `Validated Age: ${this.age}`;
    },
  },
};
</script>
