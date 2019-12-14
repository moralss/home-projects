<template>
  <q-layout view="lHh Lpr lFf">
      <q-header elevated class="bg-orange">
        <q-toolbar>
          <q-toolbar-title>Money Tracker</q-toolbar-title>
          <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawerRight"
        show-if-above
        side="right"
        :width="200"
        :breakpoint="700"
        elevated
        content-class=""
      >
       <q-list bordered padding class="rounded-borders"
    style="max-width: 500px"
    >
      <q-item to="/dashboard" clickable v-ripple>
        <q-item-section>
        dashboard
        </q-item-section>
      </q-item>
      <q-item to="/" clickable v-ripple>
        <q-item-section>
        main page
        </q-item-section>
      </q-item>
      <q-separator spaced />
    </q-list>
      </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data() {
    return {
      drawerRight: false,
      drawerLeft: true,
    };
  },
};
</script>
