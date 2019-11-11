<template>
  <div id="app">
    <v-app>
      <main>
        <Header />
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import Header from "@/pages/Header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
</style>>


