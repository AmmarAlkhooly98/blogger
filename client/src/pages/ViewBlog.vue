<template>
  <panel title="blog view">
    <h2>{{this.blog.title}}</h2>
    <div>{{this.blog.blog}}</div>
    <v-btn
      v-if="$store.state.isUserLoggedIn"
      text
      outlined
      hover
      :to="{
        name: 'blogs-edit',
        params: {
          blogId: blog.id
        }
      }"
    >Edit Blog</v-btn>
  </panel>
</template>

<script>
import BlogsService from "@/services/BlogsService.js";
import Panel from "@/pages/Panel.vue";

// var userId = this.$store.state.user.id === this.$store.state.user.userId;
console.log("blog hi", this.blog);
export default {
  data() {
    return {
      blog: null
    };
  },
  async mounted() {
    const blogId = this.$store.state.route.params.blogId;
    console.log("yo");
    this.blog = (await BlogsService.showBlog(blogId)).data;
    console.log(this.blog);
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
</style>