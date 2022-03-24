<template>
  <section>
    <Post v-for="post in this.posts" :key="post.id" :post="post"></Post>
  </section>
</template>

<script>
import Post from "./Item";
export default {
  name: "PostList",
  components: { Post },
  props: {
    posts: Array,
  },
};
</script>

<style scoped>
section {
  margin-top: 20px;
  margin-left: 5px;
}
</style>
