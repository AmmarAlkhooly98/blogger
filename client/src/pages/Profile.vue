<template>
  <div>
    <!-- <div v-for="user in user" :key="user.id"> -->
    <v-flex>
      <panel title="profile">
        <h2>Welcome to your profile {{this.userEmail}}</h2>
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
    <v-flex>
      <panel title="Blogs">
        <v-container class="spacing-playground py-0 px-2" fluid>
          <div v-for="blog in blogs" :key="blog.id" class="pl-1 pr-1 pt-2 pb-2">
            <ul>
              <li>
                <v-card width="344" outlined hover>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title class="headline mb-1">{{blog.title}}</v-list-item-title>
                      <v-list-item-subtitle>{{blog.blog}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
                  </v-list-item>

                  <v-card-actions>
                    <v-btn
                      text
                      outlined
                      hover
                      :to="{
                    name: 'blog', 
                    params: {
                      blogId: blog.id
                    }
                  }"
                    >Read Blog</v-btn>
                  </v-card-actions>
                </v-card>
              </li>
            </ul>
          </div>
        </v-container>
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
      blogs: null
    };
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