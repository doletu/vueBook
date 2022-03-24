<template>
  <h2>All Posts</h2>
  <searchbar @filter="filter" />
  <PostList :posts="posts" />
</template>

<script>
import Searchbar from "../components/SearchBar.vue";
import PostList from "../components/ListItem.vue";
import { onMounted, ref } from "vue";
import { useGetData } from "@/composable/useGetData";
export default {
  name: "Posts",
  components: {
    PostList,
    Searchbar,
  },
  setup() {
    let posts = ref([]);

    const { GetData } = useGetData();
    const preparePosts = () => GetData();
    onMounted(() => (posts.value = GetData()));
    function filter(filterData) {
      let temp = preparePosts();
      posts.value = temp;

      if (filterData.keyword) {
        posts.value = temp.filter((item) =>
          new RegExp(filterData.keyword, "i").test(item.text)
        );
      }

      if (filterData.user) {
        posts.value = temp.filter((item) => item.owner.id == filterData.user);
      }

      if (filterData.publishdate) {
        posts.value = temp.filter(
          (item) =>
            new Date(item.publishDate).toDateString() >=
            new Date(filterData.publishdate).toDateString()
        );
      }
    }

    return {
      posts: posts,
      filter,
    };
  },
};
</script>
