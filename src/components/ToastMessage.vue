<template>
  <Toasts
    :show-progress="true"
    :rtl="false"
    :max-messages="5"
    :time-out="3000"
    :closeable="true"
  ></Toasts>
</template>
<script>
export default {
  methods: {
    showSuccessToast() {
      this.$toastr.s("Success", "Hello world");
    },
  },
};
</script>
