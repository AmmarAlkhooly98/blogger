<template>
  <div>
    <Header />
    <router-view />
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

<style  scoped>
</style>>


