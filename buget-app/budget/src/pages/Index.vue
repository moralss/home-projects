<template>
  <q-page>
  <div class="col">
    <q-date style="margin:3rem;width:2rem;"
        v-model="date"
        minimal
      />
    <h7 class="text-h7">  Salary  {{monthlySalary.monthlySalary}} </h7>
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
    <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="salaryDetailList"
      :columns="columns"
      row-key="name"
    >
  <template v-slot:body-cell="props">
    <q-td :props="props" @click.native="tappedRow(props.row.id)">
      <div>{{ props.value }}</div>
    </q-td>
  </template>
    </q-table>
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
      date: '2019/02/01',
      columns: [
        {
          name: 'monthlySalary',
          align: 'left',
          label: 'monthlySalary',
          field: 'monthlySalary',
          sortable: true,
        },
        {
          name: 'total', align: 'left', label: 'salary spent', field: 'total', sortable: true,
        },
        {
          name: 'data', align: 'left', label: 'date', field: 'date', sortable: true,
        },
      ],
    };
  },
  computed: {
    monthlySalary() {
      return JSON.parse(JSON.stringify(this.$store.getters.monthlySalary));
    },
    salaryDetailList() {
      return JSON.parse(JSON.stringify(this.$store.getters.salaryDetailList));
    },
  },
  methods: {
    addWeeklySalary() {
      this.totalSalaryMonth += this.salaryEntered;
      this.$store.dispatch('addSalaryDetails', {
        monthlySalary: this.salaryEntered,
        date: this.date,
        total: 0,
      });
    },
    tappedRow(id) {
      this.$router.push(`/dashboard/${id}`);
    },

  },
};
</script>
