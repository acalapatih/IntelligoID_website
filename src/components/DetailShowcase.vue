<template>
  <div class="detail-showcase">
    <NavbarComp />

    <div class="container mt-4">
      <img :src="showcase.image" alt="" />
      <h1>{{ showcase.title }}</h1>
      <h5>{{ showcase.name }}</h5>
      <h2>Summary</h2>
        <div v-html="showcase.summary"></div>
      <h2>Description</h2>
        <div v-html="showcase.description"></div>
    </div>

    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  name: "DetailShowcase",
  components: {
    NavbarComp,
    FooterComp,
  },
  data () {
    return {
      id        : this.$route.query.show,
      showcase  : {}
    }
  },
  methods : {
    fungsiLoadDetail : async function () {
      this.showcase = (await this.$api.get(`/showcase/${this.id}`)).data.data
    }
  },
  mounted () {
    this.fungsiLoadDetail()
  }
};
</script>

<style>
.detail-showcase .container {
  box-sizing: border-box;
}
.detail-showcase .container img {
  width: 100%;
  margin-bottom: 40px;
}
.detail-showcase .container h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 130%;
  letter-spacing: 0.005em;
  color: #ff5400;
}
.detail-showcase .container h5 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.005em;
  color: #023047;
}
.detail-showcase .container span {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.005em;
  color: #023047;
}
.detail-showcase .container h2 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 130%;
  letter-spacing: 0.005em;
  color: #ff5400;
  margin-top: 60px;
}
.detail-showcase .container p {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.005em;
  color: #000000;
}
</style>