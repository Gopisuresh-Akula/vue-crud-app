<!-- TodoForm.vue -->
<template>
  <div>
    <h2>{{ isNewTodo ? 'Create New Todo' : 'Edit Todo' }}</h2>
    <form @submit.prevent="saveTodo">
      <label>Title:</label>
      <input v-model="todo.title" required />
      <label>Completed:</label>
      <input type="checkbox" v-model="todo.completed" />
      <button type="submit">{{ isNewTodo ? 'Create' : 'Update' }}</button>
    </form>
  </div>
</template>

<script>
export default {
    name: "TodoForm",
  data() {
    return {
      todo: {
        title: '',
        completed: false,
      },
      isNewTodo: true,
    };
  },
  methods: {
    saveTodo() {
      if (this.isNewTodo) {
        this.$store.dispatch('createTodo', this.todo);
      } else {
          const data = {
                id: this.$route.params.id,
                title: this.todo.title,
                completed: this.todo.completed
        }
        this.$store.dispatch('updateTodo', data);
      }
      this.$router.push('/');
    },
  },
  created() {
      const todoId = this.$route.params.id;
    console.log("todoId", todoId);
    if (todoId) {
      this.isNewTodo = false;
      this.todo = { ...this.$store.getters.getTodoById(todoId) };
    }
  },
};
</script>
