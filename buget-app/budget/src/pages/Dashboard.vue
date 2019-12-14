<template>
    <q-page>
     <h5> Dashboard </h5>

  <p> {{totalSpent.totalSpent}} </p>
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
    budgetItems() {
      return JSON.parse(JSON.stringify(this.$store.getters.budgetItems));
    },
    monthlySalary() {
      return JSON.parse(JSON.stringify(this.$store.getters.monthlySalary));
    },
    totalSpent() {
      return this.$store.getters;
    },
  },
  created() {
  },
  methods: {
    submitBudget() {
      console.log('total money spent', this.$store.getters);
      // eslint-disable-next-line no-console
      this.$store.dispatch('addBudget', {
        label: this.label,
        budget: this.budget,
        date: new Date(),
      });

      // eslint-disable-next-line no-restricted-syntax
      // eslint-disable-next-line no-restricted-syntax
      for (const i of this.budgetItems) {
        this.currentlyTotal = this.currentlyTotal + Number(i.budget);
      }

      console.log('calculateTotal', this.monthlySalary - this.currentlyTotal);
      this.$store.dispatch('calculateTotal', this.monthlySalary - this.currentlyTotal);
      this.label = '';
      this.budget = '';
    },
  },
};
</script>
