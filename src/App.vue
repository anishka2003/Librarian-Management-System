<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/212.jpg"
          transition="scale-transition"
          width="40"
        />

        <p>LIbrarian</p>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        @click="$router.push('/')"
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    

    <v-main>
      <router-view/>
      <bottom-navbar></bottom-navbar>
    </v-main>
  </v-app>
</template>

<script>
import BottomNavbar from "@/components/BottomNavbar.vue";

export default {
  name: 'App',

  components: {
    BottomNavbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url('@/assets/styles.css');
</style>