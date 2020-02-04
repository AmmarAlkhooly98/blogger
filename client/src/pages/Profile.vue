<template>
  <div>
    <!-- <div v-for="user in user" :key="user.id"> -->
    <v-flex>
      <panel title="profile">
        <h2>Welcome to your profile {{this.userEmail}}</h2>
        <div>
          <v-btn
            text
            outlined
            hover
            :to="{
                    name: 'profile-blogs'
                  }"
          >My Blogs</v-btn>
        </div>
        <br />
        <div>
          publish blog
          <v-btn :to="{
          name: 'blogs-create'
        }" class="cyan" fab>
            <v-icon>add</v-icon>
          </v-btn>
        </div>
      </panel>
    </v-flex>

    <!-- </div> -->
  </div>
</template>

<script>
import UserService from "@/services/userService";
import BlogsService from "@/services/BlogsService";
import Panel from "@/pages/Panel";
export default {
  data() {
    return {
      userEmail: null,
      blogs: null,
      search: ""
    };
  },
  watch: {
    search(value) {
      const route = {
        name: "profile"
      };
      if (this.search !== "") {
        this.query = {
          search: this.search
        };
      }
      this.$router.push(route);
      console.log(value);
    }
  },
  async mounted() {
    const userId = this.$store.state.route.params.userId;
    this.userEmail = (await UserService.getUser(userId)).data.user[0].email;
    this.blogs = (await UserService.getUser(userId)).data.blogs;
  },
  components: {
    Panel
  }
};
</script>


<style scoped>
li {
  float: left;
  padding: 2%;
}

ul {
  list-style-type: none;
}
</style>