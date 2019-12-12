import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    listOfItems: [],
    monthlySalary: '',
  },
  getters: {
    budgetItems(state) {
      return state.listOfItems;
    },
    monthlySalary(state) {
      return state.monthlySalary;
    },

  },
  mutations: {
    budget(state, data) {
      state.listOfItems.push(data);
    },
    setSalary(state, salary) {
      state.monthlySalary = salary.monthlySalary;
    },
  },
  actions: {
    addBudget({
      commit,
    }, data) {
      commit('setBudget', {
        label: data.label,
        budget: data.budget,
        date: data.date,
      });
    },
    addSalary({
      commit,
    }, salary) {
      commit('setSalary', salary);
    },
  },
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV,
  plugins: [createPersistedState()],
});
