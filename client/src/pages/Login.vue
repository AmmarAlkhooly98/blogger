<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <!-- <panel title="Login"> -->
      <v-text-field label="Email" v-model="email"></v-text-field>
      <br />
      <v-text-field label="Password" type="password" v-model="password"></v-text-field>
      <br />
      <div class="danger-alert" v-html="error" />
      <br />
      <v-btn dark class="cyan" @click="login">Login</v-btn>
      <!-- </panel> -->
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  watch: {
    email() {
      this.error = "";
    },
    password() {
      this.error = "";
    }
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        localStorage.setItem("loggedIn", true);
        this.$router.push("profile");
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
</style>