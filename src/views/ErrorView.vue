<template>
  <div
    class="d-flex justify-content-center flex-column align-items-center"
    style="height: 100vh"
  >
    <h1>404 Not Found</h1>
    <h4>Maaf, terjadi kesalahan</h4>
    <p
      @click="goBack()"
      className="badge text-black mt-4"
      style="cursor: pointer"
    >
      Kembali ke halaman sebelumnya
    </p>
  </div>
</template>

<script>
export default {
  name: "ErrorView",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
