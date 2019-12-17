import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    budgetList: [],
    salaryDetailList: [],
    monthlySalary: {},
    salaryLeft: 0,
  },
  getters: {
    budgetList(state) {
      return state.budgetList;
    },
    monthlySalary(state) {
      return state.monthlySalary;
    },
    salaryLeft(state) {
      return state.salaryLeft;
    },
    salaryDetailList(state) {
      return state.salaryDetailList;
    },
  },
  mutations: {
    setBudget(state, data) {
      state.budgetList.push(data);
    },
    setSalaryDetail(state, data) {
      state.monthlySalary = data;
      const id = state.salaryDetailList.length + 1;
      data.id = id;
      state.salaryDetailList.push(data);
    },
    setTotalSpent(state, totalSpentInfo) {
      const list = JSON.parse(JSON.stringify(state.salaryDetailList));
      list.forEach((element, index) => {
        if (element.id === Number(totalSpentInfo.id)) {
          element.total = totalSpentInfo.total;
          state.salaryDetailList.push(element);
          state.salaryDetailList.splice(index, 1);
          // delete element
        }
      });
    },
  },
  actions: {
    addBudget({
      commit,
    }, data) {
      commit('setBudget',
        data);
    },
    addSalaryDetails({
      commit,
    }, data) {
      commit('setSalaryDetail', data);
    },
    calculateTotal({
      commit,
    }, totalSpentInfo) {
      commit('setTotalSpent', totalSpentInfo);
    },
  },
  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV,
  plugins: [createPersistedState()],
});
