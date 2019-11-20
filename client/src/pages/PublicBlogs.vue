<template>
  <panel title="Public Blogs">
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
</template>

<script>
import BlogsService from "@/services/BlogsService.js";
import Panel from "@/pages/Panel.vue";

export default {
  data() {
    return {
      blogs: null
    };
  },
  async mounted() {
    this.blogs = (await BlogsService.getPublicBlogs()).data;
    console.log(this.blogs);
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