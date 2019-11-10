<template>
  <div>
    <h1>Login</h1>
    <form method="POST" @submit.prevent="login">
      <div class="imgcontainer">
        <img
          src="https://i.pinimg.com/originals/9d/16/87/9d1687fe53247d0da876e4bff2e3ce64.png"
          alt="Avatar"
          class="avatar"
        />
      </div>
      <div class="container">
        <label>
          <b>Email</b>
        </label>
        <div>
          <input type="text" v-model="email" placeholder="email" />
        </div>
        <label>
          <b>Password</b>
        </label>
        <div>
          <input type="password" v-model="password" placeholder="password" />
        </div>
        <div class="danger-alert" v-html="error" />
        <button type="submit">Login</button>
      </div>
      <div class="container" style="background-color:#f1f1f1">
        <button type="button" class="cancelbtn">
          <router-link :to="{ name: 'home' }">Cancel</router-link>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

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
    async login() {
      try {
        const response = await AuthenticationService.register({
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
.danger-alert {
  color: #f44336;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  box-align: center;
}
form {
  border: 3px solid #f1f1f1;
}

input[type="text"],
input[type="password"] {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 40%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 10%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>