<template>
  <div class="container">
    <div class="row">
      <button
        @click="onLogOut"
        class="bg-primary text-white font-bold rounded-lg w-[100px]"
      >
        LogOut
      </button>
    </div>
    <h1 class="w-auto">All Posts</h1>
    <searchbar @filter="filter" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import Searchbar from "../components/SearchBar.vue";
import PostList from "../components/ListItem.vue";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useLogOut } from "@/composable/useLogOut";
import { useGetData } from "@/composable/useGetData";
export default {
  name: "Posts",
  components: {
    PostList,
    Searchbar,
  },
  setup() {
    const router = useRouter();
    const { LogOut } = useLogOut();
    async function onLogOut() {
      var response = await LogOut().then((response) => {
        return response;
      });
      if (response != null) {
        router.push({
          name: "home",
          replace: true,
        });
      } else {
        alert("Fail");
      }
    }

    let posts = ref([]);
    const { GetData, SearchData } = useGetData();
    onMounted(() => {
      GetData().then((response) => {
        posts.value = response;
      });
    });

    function filter(filterData) {
      if (filterData.keyword) {
        SearchData(filterData.keyword).then((response) => {
          posts.value = response;
        });
      } else {
        GetData().then((response) => {
          posts.value = response;
        });
      }
    }

    return {
      posts: posts,
      filter,
      onLogOut,
    };
  },
};
</script>

<style>
.container {
  margin: 20px;
  margin-top: 30px;
  justify-content: center;
}
.container h1 {
  text-align: center;
}
.container .row {
  display: -webkit-flex;
  display: flex;
  list-style-type: none;
  padding: 0;
  justify-content: flex-end;
}
</style>
