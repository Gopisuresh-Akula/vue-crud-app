import axios from 'axios';
// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, newTodo) {
      state.todos.push(newTodo);
    },
    updateTodo(state, updatedTodo) {
      const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, updatedTodo);
      }
    },
    deleteTodo(state, todoId) {
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    },
    async createTodo({ commit }, newTodo) {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
        commit('addTodo', response.data);
      } catch (error) {
        console.error('Error creating todo:', error);
      }
    },
    async updateTodo({ commit }, updatedTodo) {
      try {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
        commit('updateTodo', updatedTodo);
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    },
    async deleteTodo({ commit }, todoId) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        commit('deleteTodo', todoId);
      } catch (error) {
        console.error('Error deleting todo:', error);
      }
    },
  },
  getters: {
    getTodoById: (state) => (id) => state.todos.find((todo) => todo.id === id),
  },
});
