<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Create Blog">
        <v-text-field label="Title" required :rules="[required]" v-model="blog.title"></v-text-field>
        <v-card max-width="400" tile>
          <v-list shaped>
            <v-subheader>Privacy</v-subheader>
            <v-list-item-group v-model="blog.type" color="primary">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-model="blog.type">Public</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title v-model="blog.type">Private</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel class="ml-2">
        <v-textarea
          background-color="blue darken-1"
          dark
          required
          :rules="[required]"
          filled
          label="Blog"
          auto-grow
          v-model="blog.blog"
        ></v-textarea>
        <v-btn dark class="cyan" @click="createBlogPost">Publish</v-btn>
      </panel>
      <div class="danger-alert" v-if="error">{{error}}</div>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/pages/Panel.vue";
import BlogsService from "@/services/BlogsService";

export default {
  data() {
    return {
      blog: {
        title: null,
        type: null,
        blog: null,
        UserId: null
      },
      error: null,
      required: value => !!value || "Required."
    };
  },

  methods: {
    async createBlogPost() {
      this.blog.UserId = this.$store.state.user.id;
      this.error = null;
      const areAllFieldsFilledIn = Object.keys(this.blog).every(
        key => !!this.blog[key]
      );
      console.log(this.blog);
      if (this.blog.type === 0) !!areAllFieldsFilledIn;
      else if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields.";
        return;
      }

      try {
        if (this.blog.type === null) this.blog.type = 1;
        await BlogsService.createBlog(this.blog);
        this.$router.push({
          name: "profile-blogs"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
</style>