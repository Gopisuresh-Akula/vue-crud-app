// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
  actions: {
    asyncIncrement({ commit }) {
      // Simulating an asynchronous action (e.g., API call)
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
  getters: {
    doubledCounter: (state) => state.counter * 2,
  },
});
