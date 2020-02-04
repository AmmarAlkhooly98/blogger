<template>
  <div>
    <!-- <div v-for="user in user" :key="user.id"> -->
    <v-flex>
      <panel title="Blogs">
        <v-container class="spacing-playground py-0 px-2" fluid>
          <v-text-field
            label="Seach for Blog by title and content"
            filled
            rounded
            type="text"
            v-model="search"
          ></v-text-field>
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
import BlogsService from "@/services/BlogsService";
import UserService from "@/services/UserService";
import Panel from "@/pages/Panel";
export default {
  data() {
    return {
      blogs: null,
      search: ""
    };
  },
  watch: {
    search(value) {
      const route = {
        name: "profile-blogs"
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