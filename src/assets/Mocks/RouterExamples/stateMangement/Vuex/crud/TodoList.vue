<!-- TodoList.vue -->
<template>
  <div>
    <h2>Todo List</h2>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
        <button @click="editTodo(todo.id)">Edit</button>
        <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "TodoList",
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    editTodo(id) {
      this.$router.push(`/edit/${id}`);
    },
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    },
  },
  created() {
    this.$store.dispatch('fetchTodos');
  },
};
</script>
