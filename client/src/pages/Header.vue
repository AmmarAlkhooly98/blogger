<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link class="home" tag="span" :to="{
          name: 'home'
        }">.blogger</router-link>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text dark :to="{
          name: 'login'
        }">Login</v-btn>

      <v-btn text dark :to="{
          name: 'signup'
        }">Sign Up</v-btn>

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
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #fadebe;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: rgb(216, 175, 141);
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}
</style>
