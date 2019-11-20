<template>
  <v-layout column>
    <v-flex xs3>
      <panel title="Login">
        <div class="pl-14 pr-14 pt-12 pb-12">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br />
          <v-text-field label="Password" type="password" v-model="password"></v-text-field>
          <br />
          <div class="danger-alert" v-html="error" />
          <br />
          <v-btn dark class="cyan" @click="login">Login</v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import Panel from "@/pages/Panel.vue";

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
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "profile",
          params: { userId: response.data.user.id }
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
</style>