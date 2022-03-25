<template>
  <section>
    <div class="container box">
      <Post v-for="post in this.posts" :key="post.id" :post="post"></Post>
    </div>
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
  border: 0.5px solid;
  border-radius: 5px;
  border-bottom: none;
}
.box {
  display: flex;
  flex-wrap: wrap;
}
.box > article {
  margin: 15px;
}
</style>
