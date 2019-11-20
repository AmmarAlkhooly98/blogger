<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link class="home" tag="span" :to="{
          name: 'home'
        }">.blogger</router-link>
    </v-toolbar-title>

    <v-btn text dark :to="{
          name: 'publicBlogs'
        }">Blogs</v-btn>

    <v-btn
      v-if="$store.state.isUserLoggedIn"
      text
      dark
      :to="{
          name: 'profile',
          params: {
            userId: this.$store.state.route.params.userId
          }
        }"
    >profile</v-btn>
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

      <v-btn v-if="$store.state.isUserLoggedIn" text dark @click="logout">logout</v-btn>

      <!-- <v-btn v-if="$store.state.isUserLoggedIn" text dark @click="logout">Log Out</v-btn> -->
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>

<style scoped>
</style>
