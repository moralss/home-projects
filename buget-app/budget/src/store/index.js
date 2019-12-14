import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    listOfItems: [],
    monthlySalary: '',
    totalSpent: 0,

  },
  getters: {
    budgetItems(state) {
      return state.listOfItems;
    },
    monthlySalary(state) {
      return state.monthlySalary;
    },
    totalSalary(state) {
      return state.totalSpent;
    },
  },
  mutations: {
    setBudget(state, data) {
      state.listOfItems.push(data);
    },
    setSalary(state, salary) {
      state.monthlySalary = salary.monthlySalary;
    },
    setBudgetTotal(state, total) {
      console.log('mutation total ', total);
      state.totalSpent = total;
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
    calculateTotal({
      commit,
    }, total) {
      commit('setBudgetTotal', total);
    },
  },
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV,
  plugins: [createPersistedState()],
});
