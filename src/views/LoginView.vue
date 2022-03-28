<template>
  <div class="mt-8">
    <div class="row h-2/3">
      <h1 class="font-bold text-[50px]">Login Form</h1>
    </div>
    <div class="container mx-auto px-8 card">
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="userName">
            <span class="font-semisolid">userName</span>
            <input
              type="text"
              id="userName"
              class="form-group form-control px-4 py-3 rounded-lg"
              placeholder="userName"
              v-model="userName"
            />
          </label>
        </div>
        <div class="row mt-5">
          <label class="flex flex-col" for="password">
            <span class="font-semisolid">Password</span>
            <input
              type="password"
              id="password"
              class="form-group form-control px-4 py-3 rounded-lg"
              placeholder="*******"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="py-3 text-center w-1/2 bg-primary text-white font-bold rounded-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { userLogin } from "@/composable/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({});

export default {
  setup() {
    const router = useRouter();
    const { error, Login } = userLogin();
    const userName = ref("");
    const password = ref("");
    async function onSubmit() {
      var data = await Login(userName.value, password.value);
      console.log(data);
      if (data != undefined) {
        toaster.success(`Login Success`, {
          position: "top-right",
          duration: 4000,
        });
        router.push({
          name: "DashBoard",
          replace: true,
          params: { data },
        });
      } else {
        toaster.error(`Login Fail`, {
          position: "top-right",
          duration: 4000,
        });
      }
    }
    return { userName, password, error, onSubmit };
  },
};
</script>

<style>
.card {
  width: 250px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 15px;
}
.form-group {
  border: 1px solid black;
}
</style>
