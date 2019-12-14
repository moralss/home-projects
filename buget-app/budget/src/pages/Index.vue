<template>
  <q-page>
  <div class="col">
    <h6>  Total Salary {{monthlySalary}} </h6>
     <q-input
      ref="salaryEntered"
      label="Enter Monthly Salary"
      class="col q-pa-sm"
      type="text"
      v-model="salaryEntered"
      :rules="[val => !!val || 'Salary entered is required']"
        />
        <q-btn class="q-ma-md" label="submit" @click="addWeeklySalary"/>
  </div>
  </q-page>
</template>
<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      salaryEntered: 0,
      totalSalaryMonth: 0,
    };
  },
  computed: {
    monthlySalary() {
      return JSON.parse(JSON.stringify(this.$store.getters.monthlySalary));
    },
  },
  methods: {
    addWeeklySalary() {
      this.totalSalaryMonth += this.salaryEntered;
      this.$store.dispatch('addSalary', {
        monthlySalary: this.salaryEntered,
      });
    },
  },
};
</script>
