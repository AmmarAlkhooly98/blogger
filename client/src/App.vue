<template>
  <div id="app">
    <v-app>
      <main>
        <Header />
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from "@/pages/Header";
import Footer from "@/pages/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
</style>


