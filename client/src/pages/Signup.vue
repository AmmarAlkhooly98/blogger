<template>
  <v-layout column>
    <v-flex xs3>
      <!-- <v-toolbar-title flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar-title>-->
      <panel title="Register">
        <div class="pl-14 pr-14 pt-12 pb-12">
          <form name="blogger-form" autocomplete="off">
            <v-text-field label="Email" v-model="email"></v-text-field>
            <br />
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>
          <br />
          <div class="danger-alert" v-html="error" />
          <br />
          <v-btn dark class="cyan" @click="register">Register</v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import Panel from "@/pages/Panel.vue";

export default {
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
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        console.log(response.data.user.id);
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