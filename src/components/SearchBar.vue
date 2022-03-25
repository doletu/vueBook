<template>
  <label>Filter by</label>
  <input type="text" name="q" id="q" placeholder="Keyword" v-model="q" />
  <button
    type="submit"
    class="py-3 text-center w-1/5 bg-primary text-white font-bold rounded-lg"
  >
    Search
  </button>
</template>

<script>
export default {
  name: "Searchbar",
  emits: ["filter"],
  data() {
    return {
      ownerUsers: [],
      q: "",
    };
  },
  methods: {
    emitEvent() {
      this.$emit("filter", {
        keyword: this.q,
      });
    },
  },
  watch: {
    q() {
      this.emitEvent();
    },
  },
  //   mounted() {
  //     const jsonDate = fetchPosts();

  //     jsonDate.forEach((item) => {
  //       if (this.ownerUsers.find((i) => i.id == item.owner.id) == undefined) {
  //         this.ownerUsers.push(item.owner);
  //       }
  //     });
  //   },
};
</script>

<style scoped>
input,
select {
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 20px;
}
</style>
