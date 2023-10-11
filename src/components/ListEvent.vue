<template>
  <NavbarComp :user="user" />
  <div id="main">
    <div class="row sectionOne">
      <div class="col-lg-12">
        <h3 id="txtTitle">{{ txtTitle }}</h3>
        <p id="txtCaption">{{ txtCaption }}</p>
        <div class="row searchDiv">
          <div
            class="col-lg-12 d-flex justify-content-start align-items-center py-2"
          >
            <img src="../assets/search.png" />
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Cari program yang kamu mau"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row sectionTwo">
      <div class="col-lg-6">
        <h4 id="kategori">
          {{
            kategori + " " + (!type ? "Bootcamp" : type.split("-").join(" "))
          }}
        </h4>
      </div>
      <div
        class="col-lg-6 mt-3 mt-lg-0 d-flex flex-wrap justify-content-start align-items-start gap-3 d-lg-block"
      >
        <button
          id="btnKategori"
          value="bootcamp"
          @click="filter('Bootcamp')"
          :class="{
            btnActive1: type == 'Bootcamp' ? true : false,
            btnNactive1: type == 'Bootcamp' ? false : true,
          }"
        >
          {{ bootcamp }}
        </button>
        <button
          id="btnKategori"
          value="mini-bootcamp"
          @click="filter('Mini-Bootcamp')"
          :class="{
            btnActive1: type == 'mini-bootcamp' ? true : false,
            btnNactive1: type == 'mini-bootcamp' ? false : true,
          }"
        >
          Mini Bootcamp
        </button>
        <button
          id="btnKategori"
          value="kursus-one-to-one"
          @click="filter('Kursus-One-to-One')"
          :class="{
            btnActive1: type == 'kursus-one-to-one' ? true : false,
            btnNactive1: type == 'kursus-one-to-one' ? false : true,
          }"
        >
          Kursus One on One
        </button>
        <button
          id="btnKategori"
          value="webinar"
          @click="filter('Webinar')"
          :class="{
            btnActive2: type == 'Webinar' ? true : false,
            btnNactive2: type == 'Webinar' ? false : true,
          }"
        >
          {{ webinar }}
        </button>
        <button
          id="btnKategori"
          value="workshop"
          @click="filter('Workshop')"
          :class="{
            btnActive3: type == 'Workshop' ? true : false,
            btnNactive3: !(type == 'Workshop' ? true : false),
          }"
        >
          {{ workshop }}
        </button>
      </div>
    </div>

    <div id="sectionThree">
      <div id="ktgrVertical">
        <div id="ktgrHorizontal" v-if="onLoad">
          <div
            id="event"
            class="border border-3 rounded-xl mb-lg-0"
            v-for="(val, index) in event"
            :key="index"
            v-if="event.length > 0"
          >
            <div v-if="val.isActive !== null">
              <div class="card-image-container">
                <img
                  :id="type === 'Webinar' ? 'imgWebinar' : 'imgEvent'"
                  :src="val.image"
                  alt="cards"
                />
                <span class="card-label">{{ !type ? "Bootcamp" : type }}</span>
              </div>
            </div>
            <div v-else>
              <div class="card-image-container">
                <img
                  id="imgEvent"
                  :src="val.image"
                  alt="cards"
                  style="opacity: 0.5; filter: grayscale(0.6)"
                />
                <span class="card-label">{{ !type ? "Bootcamp" : type }}</span>
              </div>
            </div>

            <div id="rating">
              <p id="jmlRating" class="mb-0">{{ jmlRating }}</p>
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
            </div>
            <p id="titleEvent">{{ val.title }}</p>
            <p id="hargaEvent">
              {{
                val.price !== "0.00"
                  ? new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(val.price)
                  : "Free"
              }}
            </p>
            <div id="detailEvent">
              <div id="session">
                <div>
                  <img src="../assets/icon_video.png" />
                </div>
                <p id="txtPeserta" v-if="index < 1">20 Session</p>
                <p id="txtPeserta" v-else>-</p>
              </div>
              <div
                id="peserta"
                class="justify-content-end justify-content-lg-start"
              >
                <div>
                  <img src="../assets/icon_peserta.png" />
                </div>
                <!-- <p id="txtPeserta">{{ txtPeserta }}</p> -->
                <p id="txtPeserta" v-if="index < 1">20 Peserta</p>
                <p id="txtPeserta" v-else>-</p>
              </div>
            </div>
            <router-link
              class="text-center mb-3 mb-lg-0"
              v-if="val.isActive !== null"
              :to="
                type === 'Webinar'
                  ? '/detail-event-webinar/' + val.id
                  : '/detail-event/' + val.id
              "
            >
              <button
                id="daftarEvent"
                value="daftarEvent"
                class="w-75 w-lg-100"
              >
                {{ daftarEvent }}
              </button>
            </router-link>
            <router-link
              class="text-center mb-3 mb-lg-0"
              style="cursor: unset"
              v-else
              to="#"
            >
              <button
                id="daftarDisabled"
                value="daftarEvent"
                class="w-75 w-lg-100 btn"
                disabled
              >
                Ditunggu Ya
              </button>
            </router-link>
          </div>
          <div
            class="d-flex justify-content-center flex-column align-items-center"
            v-else
          >
            <h1>Coming Soon</h1>
          </div>
        </div>
        <div
          v-else
          class="d-flex justify-content-center flex-column align-items-center"
          style="height: 50vh"
        >
          <h1>Mohon Tunggu</h1>
        </div>
      </div>
    </div>
  </div>
  <!-- <section></section> -->
  <FooterComp />
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  name: "ListEvent",
  components: {
    NavbarComp,
    FooterComp,
  },
  props: {
    txtTitle: String,
    txtCaption: String,
    kategori: String,
    bootcamp: String,
    webinar: String,
    workshop: String,
    jmlRating: String,
    titleEvent: String,
    hargaEvent: String,
    txtSession: String,
    txtPeserta: String,
    daftarEvent: String,
  },
  data() {
    return {
      searchQuery: null,
      event: [],
      active1: false,
      active2: false,
      active3: false,
      type: "",
      user: false,
      onLoad: false,
    };
  },
  methods: {
    fungsiLoadUser: async function () {
      const response = (await this.$api.get(`/auth/check`)).data;
      if (response.status) {
        this.user = true;
      }

      this.fungsiLoadEvent();
    },
    fungsiLoadEvent: async function (type) {
      if (!type) {
        type = "bootcamp";
      }
      let url = `/get-event?type=${type.toLowerCase()}&_=${new Date().getTime()}`;
      this.event = (await this.$api.get(`${url}`)).data.data;
      this.onLoad = true;
    },
    filter: async function (type) {
      this.type = type;
      this.onLoad = false;

      this.fungsiLoadEvent(type);
    },
  },
  mounted() {
    this.fungsiLoadUser();
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.event.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.event;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
.card-image-container {
  position: relative;
}

.card-label {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #000000;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  border-radius: 2px;
}

#daftarDisabled {
  margin-top: 20px;
  padding: 7px 0px;
  border-radius: 100px;
  background: #023047;
  color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
}

body {
  margin: 0;
  background-color: #f5f5f5;
  font-family: "Poppins", sans-serif;
}

#main {
  margin: 0 auto;
  width: 1250px;
  display: flex;
  flex-direction: column;
}

.sectionOne {
  padding-top: 100px;
  flex: 25%;
  color: #023047;
}

.sectionOne h3 {
  /* margin-left: 400px; */
  text-align: center;
  /* width: 458px; */
  font-size: 32px;
  font-weight: 600;
}

.sectionOne p {
  /* margin-top: 30px;
  margin-left: 400px; */
  text-align: center;
  /* width: 458px; */
  font-size: 16px;
  font-weight: 400;
  opacity: 60%;
}

.searchDiv {
  border: 3px solid #e0e0e0;
  border-radius: 12px;
  margin-top: 80px;
  margin-left: 260px;
  width: 700px;
}

.searchDiv img {
  margin-left: 15px;
}

.searchDiv input {
  margin-left: 10px;
  border: none;
  border-radius: 12px;
  color: #9e9e9e;
  width: 100%;
}

.searchDiv input:focus {
  outline: none !important;
}

.sectionTwo {
  flex: 5%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 100px;
  padding-left: 100px;
}

.sectionTwo #kategori {
  flex: 50%;
}

.sectionTwo #isiKategori {
  flex: 50%;
}

.sectionTwo #btnKategori {
  margin-left: 16px;
  padding: 8px 32px;
  border-radius: 100px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 10px !important;
}

.sectionTwo #btnKategori:hover {
  background-color: #023047;
  color: white;
}

.btnActive1,
.btnActive2,
.btnActive3 {
  background-color: #023047;
  color: white;
}

.btnNactive1,
.btnNactive2,
.btnNactive3 {
  background-color: #ccd6da;
  color: #023047;
}

#sectionThree {
  flex: 70%;
  padding: 67px 0 67px 0;
}

#sectionThree #ktgrVertical {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: minmax(400px, auto);
  gap: 1rem;
}

#ktgrHorizontal {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); */
  gap: 2rem;
}

#ktgrHorizontal #event {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* justify-content: space-between; */
  align-self: end;
  padding: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: none;
  border-radius: 36px;
  background-color: white;
  max-width: 400px;
  justify-content: center; /* mengatur posisi secara vertikal di tengah */
}

#event #imgEvent {
  object-fit: cover; /* memotong gambar untuk menyesuaikan ukuran kontainer */
  object-position: center center; /* menempatkan gambar di tengah-tengah kontainer */
  max-height: 100%; /* mengatur tinggi gambar */
  height: 20rem;
  max-width: 100%;
  overflow: hidden;
  /* border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover; */
}
#event #imgWebinar {
  object-fit: cover; /* memotong gambar untuk menyesuaikan ukuran kontainer */
  object-position: center center; /* menempatkan gambar di tengah-tengah kontainer */
  max-height: 100%; /* mengatur tinggi gambar */
  max-width: 100%;
  overflow: hidden;
  /* border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover; */
}

#event #rating {
  display: flex;
  flex-direction: row;
  margin: 20px 0 0 5px;
  font-size: 16px;
  font-weight: 500;
}

#event #rating p {
  margin-right: 10px;
}

#event #star {
  width: 24px;
  height: 24px;
  margin-right: 3px;
  object-fit: cover;
}

#event #titleEvent {
  font-size: 18px;
  font-weight: 500;
  color: black;
}

#event #hargaEvent {
  color: #ff865d;
  font-size: 16px;
  font-weight: 400;
}

#event #detailEvent {
  display: flex;
  flex-direction: row;
  gap: 2vw;
  justify-content: center;
}

#session {
  display: flex;
  flex-direction: row;
}

#session img {
  width: 36px;
  height: 37px;
  object-fit: cover;
}

#peserta {
  display: flex;
  flex-direction: row;
}

#peserta img {
  width: 40px;
  height: 40px;
  object-fit: cover;
}

#detailEvent p {
  padding-left: 10px;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
}

#daftarEvent {
  margin-top: 20px;
  padding: 7px 0px;
  border-radius: 100px;
  background-color: #023047;
  color: white;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
}

#daftarEvent:hover {
  background-color: white;
  color: #023047;
  outline-color: #023047;
}

section {
  height: 240px;
}

@media only screen and (max-width: 1100px) {
  #main {
    width: 885px;
  }
  .searchDiv {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
  }

  #ktgrHorizontal {
    grid-template-columns: repeat(2, 1fr);
  }

  #event #titleEvent {
    width: 250px;
  }

  #detailEvent p {
    width: 100px;
  }

  #session {
    flex: 0%;
  }

  #event #imgEvent {
    height: max-content;
    width: max-content;
  }
}

@media only screen and (max-width: 800px) {
  #main {
    max-width: 100%;
    margin-left: 0;
    padding: 0 1rem;
  }

  #sectionOne {
    max-width: fit-content;
  }

  .sectionOne h3 {
    font-size: 25px;
  }

  .sectionOne p {
    font-size: 15px;
  }

  .sectionTwo {
    margin-top: 4rem;
    padding-top: 0;
    padding-left: 0;
  }

  .sectionTwo #btnKategori {
    margin-left: 0;
  }

  #session {
    flex: 0%;
    margin-right: -15%;
  }

  #event #imgEvent {
    width: 100%;
    height: 192px;
    border-radius: 33px;
  }

  #event #rating {
    margin: 20px 0 0 0 0.5rem;
  }

  #event #hargaEvent {
    margin: 0 0rem 1rem 0.5rem;
  }
}

@media only screen and (max-width: 768px) {
  #sectionThree #ktgrVertical {
    justify-content: center;
  }
  #sectionThree {
    display: flex;
    padding-top: 67px;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
  }
  #ktgrHorizontal {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media only screen and (max-width: 500px) {
  /* #main {
    width: 500px;
    margin-left: -12%;
  } */

  #sectionOne p {
    width: 300px;
  }

  #sectionOne input {
    font-size: 14px;
    width: 82%;
  }

  #sectionTwo #kategori {
    font-size: 14px;
    margin-top: 10px;
    flex: 40%;
  }

  #sectionTwo #btnKategori {
    font-size: 11px;
    margin-top: 0%;
    margin-left: 5px;
    padding: 8px 15px;
  }

  #session {
    flex: 25%;
  }
}

@media only screen and (max-width: 360px) {
  .searchDiv {
    margin-top: 0px;
    margin-left: 0px;
  }
}
</style>
