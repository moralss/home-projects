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
   <div class="col-8">
   <h6> Fill in a Budget </h6>
      <q-input
          ref="label"
          label="label"
          class="col q-pa-sm"
          type="text"
          v-model="label"
          :rules="[val => !!val || 'Label is required']"
            />
      <q-input
        ref="budget"
        label="budget"
        class="col q-pa-sm"
        type="text"
        v-model="budget"
        :rules="[val => !!val || 'budget is required']"
      />
      <q-btn  class="q-ma-md" label="submit budget" @click="submitBudget"/>
    </div>

    <div class="q-pa-md q-gutter-md" style="width:100%;">
    <q-item-label header>Bugets</q-item-label>
    <q-list bordered padding class="rounded-borders"
    v-for="budget in budgetItems" :key="budget.name"
    style="max-width: 500px"
    >

      <q-item clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="folder" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">{{budget.label}}</q-item-label>
          <q-item-label caption>R {{budget.budget}}</q-item-label>
        </q-item-section>
        <q-item-section side>
         {{budget.date}}
          <q-icon name="info" color="green" />
        </q-item-section>
      </q-item>
      <q-separator spaced />
    </q-list>
  </div>
  </q-page>
</template>
<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      salaryEntered: '',
      totalSalaryMonth: '',
      label: '',
      budget: 0,
      listOfItems: [],
    };
  },
  computed: {
    budgetItems() {
      return JSON.parse(JSON.stringify(this.$store.getters.budgetItems));
    },
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
    submitBudget() {
      this.$store.dispatch('addBudget', {
        label: this.label,
        budget: this.budget,
        date: new Date(),
      });

      this.label = '';
      this.budget = '';
    },
  },
};
</script>
