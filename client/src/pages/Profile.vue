<template>
  <div>
    <h1>Profile</h1>
    <button @click="logOut">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      localStorage.setItem("loggedIn", false);
      this.$router.push("login");
    }
  }
};
</script>


<style scoped>
</style>