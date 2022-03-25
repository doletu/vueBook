<template>
  <article class="card">
    <img :src="post.coverImg" />
    <h4>{{ post.text }}</h4>
    <span class="author"
      >{{ post.title }} By
      {{ post.author }}
    </span>
  </article>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
};
</script>

<style scoped>
.author {
  font-size: 13px;
  color: #555;
}
.card {
  justify-items: center;
  direction: inherit;
}
.card img {
  width: 250px;
  height: 250px;
  margin-left: 5px;
  object-fit: contain;
}
</style>
