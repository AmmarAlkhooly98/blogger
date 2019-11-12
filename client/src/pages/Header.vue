<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link class="home" tag="span" :to="{
          name: 'home'
        }">.blogger</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        text
        dark
        :to="{
          name: 'login'
        }"
      >Login</v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        text
        dark
        :to="{
          name: 'signup'
        }"
      >Sign Up</v-btn>

      <!-- <v-btn v-if="$store.state.isUserLoggedIn" text dark @click="logout">Log Out</v-btn> -->
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
