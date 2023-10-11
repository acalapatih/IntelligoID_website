<template>
  <div class="home">
    <NavbarComp />
    <HeroComp />
    <keunggulan
      title1="Kenapa Harus Intelligo?"
      title2="Intelligo memiliki beberapa keunggulan yang membantu para siswa dalam belajar"
      why1="Mentoring 1 on 1"
      desc1="Berinteraksi bareng mentor secara langsung"
      why2="Study Case"
      desc2="Siswa akan diberikan study secara langsung"
      why3="Portofolio"
      desc3="Membangun portofolio yang bagus untuk dunia kerja"
      why4="Join Komunitas"
      desc4="Tergabung komunitas internal untuk sharing session"
      why5="Side Project"
      desc5="Berpeluang untuk terlibat dalam project"
      why6="Harga Terjangkau"
      desc6="Harga yang kami tawarkan sangat terjangkau"
    />
    <OurProgram :event="event" :onLoad="loading" />
    <ProceduresForUse
      judul3="Lakukan Pembayaran"
      isi3="Setelah kamu pilih event yang di inginkan, kamu bisa melakukan pembayaran jika event berbayar dan jika tidak maka akan langsung diarahkan ke history pendaftaran"
      ebanking="E-Banking"
      transfer="Transfer"
      hargadatascience="IDR 999.000"
      datascience="Data Science Bootcamp"
      hargawebdev="IDR 999.000"
      webdev="Web Development"
      judul4="Siap untuk Belajar!!"
      isi4="Yes ! Selamat pendaftaran kamu telah berhasil, silahkan konfirmasi ke WA admin jika kamu melakukan pembayaran pada event yang berbayar dan jika tidak berbayar
kamu bisa langsung menuju link yang diberikan"
    />
    <TestiComp />
    <JoinOur />
    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import HeroComp from "../components/HeroComp.vue";
import keunggulan from "../components/keunggulan.vue";
import OurProgram from "../components/OurProgram.vue";
import ProceduresForUse from "../components/ProceduresForUse.vue";
import TestiComp from "../components/TestiComp.vue";
import JoinOur from "../components/JoinOur.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  name: `HomeView`,
  components: {
    NavbarComp,
    HeroComp,
    keunggulan,
    OurProgram,
    ProceduresForUse,
    TestiComp,
    JoinOur,
    FooterComp,
  },
  data() {
    return {
      home: {
        banner: {},
        feature: [],
        feature_title: {},
        join: {},
        step: [],
        step_title: {},
        testimoni: [],
        loading: false,
      },
      event: {},
      program: [],
      user: false,
    };
  },
  methods: {
    LoadEvent: async function () {
      let url = `/get-event`;
      url += "?_=" + new Date().getTime();
      this.event = (await this.$api.get(url)).data.data;
      this.loading = true;
    },
    fungsiLoadUser: async function () {
      const response = (await this.$api.get(`/auth/check`)).data;
      if (response.status) {
        this.user = true;

        this.fungsiLoadProgram();
      }
    },
    fungsiLoadProgram: async function () {
      if (this.user) {
        this.program = (await this.$api.get(`/service`)).data.data;
      }
    },
  },
  mounted() {
    this.fungsiLoadUser();
    this.LoadEvent();
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.maintenance {
  background-color: black;
  opacity: 70%;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
}

.maintenance h1 {
  font-weight: 700;
  font-size: 50px;
  color: white;
  margin: 20% 30%;
}
</style>
