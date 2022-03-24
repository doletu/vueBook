<template>
  <article>
    <img :src="post.image" width="300" height="250" />
    <h4>{{ post.text }}</h4>
    <span class="author"
      >By
      {{
        post.owner.title +
        " " +
        post.owner.firstName +
        " " +
        post.owner.lastName
      }}
    </span>
    <ul class="tags">
      <li v-for="(tag, key) in post.tags" :key="key">
        <router-link :to="'/posts-by-tag/' + tag">{{ tag }}</router-link>
      </li>
    </ul>
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

.tags {
  list-style-type: none;
}

.tags li {
  display: inline-block;
  margin-left: 7px;
}

.tags li a {
  background-color: #21f7d9;
  padding: 3px 4px;
  border-radius: 7px;
  color: #000;
  text-decoration: none;
  font-size: 13px;
}
</style>
