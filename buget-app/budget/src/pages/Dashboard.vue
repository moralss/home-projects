<template>
    <q-page>
     <h5 class="text-h5"> Budget Summary </h5>
<div class="col">
<q-item-label header> Salary Left {{salaryDetailList.total}} </q-item-label>
   <h7 class="text-h7"> Fill in a Budget </h7>
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
    v-for="budget in budgetList" :key="budget.name"
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
  name: 'Dashboard',

  data() {
    return {
      drawerRight: false,
      label: '',
      budget: 0,
      listOfItems: [],
      currentlyTotal: 0,
    };
  },
  computed: {
    budgetList() {
      const budgetList = JSON.parse(JSON.stringify(this.$store.getters.budgetList));
      return budgetList.filter(obj => obj.idPointer === this.$route.params.id);
    },
    monthlySalary() {
      return JSON.parse(JSON.stringify(this.$store.getters.monthlySalary));
    },
    salaryDetailList() {
      const salaryDetailList = JSON.parse(JSON.stringify(this.$store.getters.salaryDetailList));
      return salaryDetailList.filter(obj => obj.id === Number(this.$route.params.id))[0];
    },
    salaryLeft() {
      return this.$store.getters.salaryLeft;
    },
  },
  methods: {
    submitBudget() {
      // eslint-disable-next-line no-console
      this.$store.dispatch('addBudget', {
        label: this.label,
        budget: this.budget,
        date: new Date(),
        idPointer: this.$route.params.id,
      });

      // eslint-disable-next-line no-restricted-syntax
      for (const i of this.budgetList) {
        this.currentlyTotal = this.currentlyTotal + Number(i.budget);
      }

      this.$store.dispatch('calculateTotal', { total: (this.salaryDetailList.monthlySalary - this.currentlyTotal), id: this.$route.params.id });
      this.label = '';
      this.budget = '';
    },
  },
};
</script>
