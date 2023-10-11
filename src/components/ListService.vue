<template>
  <NavbarComp />
  <!-- <div id="main">
        <div id="sectionOne">
            <h3 id="txtTitle">Pilih Service Favorite</h3>
            <p id="txtCaption">
                Tingkatkan skill digitalmu dan belajar dengan para mentor terbaik dan berpengalaman
            </p>
            <div id="searchDiv">
                <img src="../assets/search.png">
                <input type="text" v-model="searchQuery" placeholder="Cari program yang kamu mau">
            </div>            
        </div>
        <div id="sectionTwo">
            <h4 id="kategori">Kategori</h4>
            <div id="isiKategori">
                <button id="btnKategori" value="dataScience" @click="filter('data-science')" :class="{btnActive1: active1 , btnNactive1: !active1}">Data Science</button>
                <button id="btnKategori" value="webDev" @click="filter('web-development')" :class="{btnActive2: active2 , btnNactive2: !active2}">Web Development</button>
            </div>
        </div>
        <div id="sectionThree">
            <div id="ktgrVertical">
                <div id="ktgrHorizontal">
                    <div id="event" v-for="service in resultQuery" :key="service.id">
                        <img id="imgEvent" :src="service.image">
                        <div id="rating">
                            <p id="jmlRating">{{ service.review  == 0  ? '-' : service.review }}</p>
                            <img id="star" src="../assets/star.png" v-for="(item , index) in service.review" :key="index">
                        </div>
                        <p id="titleEvent">{{ service.title }}</p>
                        <p id="hargaEvent">{{ service.price == null ? 'Free' : `Rp.${service.price}` }}</p>
                        <div id="detailEvent">
                            <div id="session">
                                <div>
                                    <img src="../assets/icon_video.png">
                                </div>
                                <p id="txtSession">{{ service.session }} session</p>
                            </div>
                            <div id="peserta">
                                <div>
                                    <img src="../assets/icon_peserta.png">
                                </div>
                                <p id="txtPeserta">{{ service.student }} peserta</p>
                            </div>
                        </div>
                        <router-link :to="`/detail-event?event=${service.id}`">
                            <button id="daftarEvent" value="daftarEvent">Lihat Service</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div> -->

  <div id="main">
    <div class="row sectionOne">
      <div class="col-lg-12">
        <h3 id="txtTitle">Pilih Service Favorite</h3>
        <p id="txtCaption">
          Tingkatkan skill digitalmu dan belajar dengan para mentor terbaik dan
          berpengalaman
        </p>
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
        <h4 id="kategori">Kategori</h4>
      </div>
      <div
        class="col-lg-6 mt-3 mt-lg-0 d-flex flex-wrap justify-content-start align-items-start gap-3 d-lg-block"
      >
        <button
          id="btnKategori"
          value="bootcamp"
          @click="filter('bootcamp')"
          :class="{
            btnActive1: type == 'bootcamp' ? true : false,
            btnNactive1: type == 'bootcamp' ? false : true,
          }"
        >
          Data Science
        </button>
        <button
          id="btnKategori"
          value="webinar"
          @click="filter('webinar')"
          :class="{
            btnActive2: type == 'webinar' ? true : false,
            btnNactive2: type == 'webinar' ? false : true,
          }"
        >
          Web Development
        </button>
      </div>
    </div>

    <div id="sectionThree">
      <div id="ktgrVertical">
        <div id="ktgrHorizontal">
          <!-- <div id="event" class="border border-3 rounded-xl mb-5 mb-lg-0">
            <img id="imgEvent" src="../assets/img2.png" />
            <div id="rating">
              <p id="jmlRating" class="mb-0">5.0</p>
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
            </div>
            <p id="titleEvent">{{ service.title }}</p>
            <p id="hargaEvent">Rp. 1.150.000</p>
            <div id="detailEvent">
              <div id="session">
                <div>
                  <img src="../assets/icon_video.png" />
                </div>
                <p id="txtSession">session</p>
              </div>
              <div
                id="peserta"
                class="justify-content-end justify-content-lg-start"
              >
                <div>
                  <img src="../assets/icon_peserta.png" />
                </div>
                <p id="txtPeserta">peserta</p>
              </div>
            </div>
            <router-link class="text-center mb-3 mb-lg-0" to="/detail-event">
              <button
                id="daftarEvent"
                value="daftarEvent"
                class="w-75 w-lg-100"
              >
                Daftar Sekarang
              </button>
            </router-link>
          </div>
          <div id="event" class="border border-3 rounded-xl mb-5 mb-lg-0">
            <img id="imgEvent" src="../assets/img2.png" />
            <div id="rating">
              <p id="jmlRating" class="mb-0">5.0</p>
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
              <img id="star" src="../assets/star.png" />
            </div>
            <p id="titleEvent">{{ service.title }}</p>
            <p id="hargaEvent">Rp. 1.150.000</p>
            <div id="detailEvent">
              <div id="session">
                <div>
                  <img src="../assets/icon_video.png" />
                </div>
                <p id="txtSession">session</p>
              </div>
              <div
                id="peserta"
                class="justify-content-end justify-content-lg-start"
              >
                <div>
                  <img src="../assets/icon_peserta.png" />
                </div>
                <p id="txtPeserta">peserta</p>
              </div>
            </div>
            <router-link class="text-center mb-3 mb-lg-0" to="/detail-event">
              <button
                id="daftarEvent"
                value="daftarEvent"
                class="w-75 w-lg-100"
              >
                Daftar Sekarang
              </button>
            </router-link>
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <section></section>
  <FooterComp />
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  name: "ListService",
  components: {
    NavbarComp,
    FooterComp,
  },
  data() {
    return {
      searchQuery: null,
      service: [],
      active1: false,
      active2: false,
    };
  },
  methods: {
    fungsiLoadEvent: async function (type = null) {
      type = type ? `?type=${type}` : ``;
      this.service = (await this.$api.get(`/get-service${type}`)).data.data;
    },

    filter: async function (type) {
      if (type == "data-science") {
        this.active1 = true;
        this.active2 = false;
      } else {
        this.active2 = true;
        this.active1 = false;
      }

      this.fungsiLoadEvent(type);
    },
  },
  mounted() {
    this.fungsiLoadEvent();
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.service.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.service;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  box-sizing: border-box;
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
  padding-top: 100px;
}

#sectionThree #ktgrVertical {
  display: flex;
  flex-wrap: wrap;
}

#ktgrHorizontal {
  padding-left: 113px;
  margin-bottom: 62px;
  display: flex;
  flex-wrap: wrap;
}

#ktgrHorizontal #event {
  margin-right: 50px;
  padding: 20px;
  border-radius: 36px;
  display: flex;
  flex-direction: column;
  background-color: white;
}

#event #imgEvent {
  width: 254px;
  height: 162px;
  object-fit: cover;
  padding-top: 15px;
  background-color: #fcab97;
  border-radius: 16px;
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
}

#session {
  flex: 40%;
  display: flex;
  flex-direction: row;
}

#session img {
  width: 36px;
  height: 37px;
  object-fit: cover;
}

#peserta {
  flex: 45%;
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
    padding-left: 0px;
    justify-content: space-around;
    width: 100%;
  }

  #ktgrHorizontal #event {
    /* flex: 35%; */
    margin-right: 0%;
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

  #ktgrHorizontal {
    padding-left: 0;
  }

  #ktgrHorizontal #event {
    flex: 100%;
    margin-right: 0%;
  }

  #session {
    flex: 0%;
    margin-right: -15%;
  }

  #ktgrHorizontal #event {
    padding: 3px;
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

  #ktgrHorizontal #event {
    width: 10rem;
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
