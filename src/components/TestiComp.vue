<template>
  <div class="testimoni">
    <div class="container-title">
      <h2>
        Apa kata mereka <br />
        tentang Intelligo?
      </h2>
      <p>
        Testimoni dari mereka yang sudah <br />
        mengikuti bootcamp dengan kami
      </p>
      <!-- <h6 class="txt-view text-start ms-3 ms-xl-0">View All</h6> -->
    </div>

    <!-- CARAOUSEL -->
    <Splide
      :has-track="false"
      :options="{
        rewind: true,
        breakpoints: {
          1024: {
            perPage: 2,
            autoWidth: true,
          },
          767: {
            perPage: 1,
            autoWidth: true,
          },
          500: {
            perPage: 1,
            autoWidth: false,
          },
        },
        trimSpace: false,
        autoWidth: true,
        gap: '1em',
        pagination: false,
      }"
      aria-label="My Favorite Images"
    >
      <div class="container">
        <SplideTrack>
          <SplideSlide>
            <div class="card border-light">
              <div class="card-body">
                <div class="container-detail-profile">
                  <img class="pic1" width="60" height="60" src="../assets/testi-yasir.png" alt="" />
                  <div class="card-name">
                    <h5 class="card-title">Muhammad Yasir</h5>
                    <h6 class="card-subtitle">Alumni Bootcamp Batch 1</h6>
                  </div>
                  <div class="d-flex gap-1">
                    <p>5</p>
                    <img class="star" width="20" height="20" src="../assets/star.png" alt="star" />                    
                  </div>     
                </div>
                <p class="card-text">
                  “Bootcamp di Intelligo ID bagus banget yah, karena kita
                  belajar dari dasar dan fundamental, kita juga diberi pilihan
                  materi yang sangat bagus untuk diterapkan ke Final Project
                  seperti text mining dan image classification. Kemudian,
                  dibantu dengan mentoring 1on1 juga serta pembuatan portfolio
                  untuk personal branding. Terima kasih intelligo ID ”
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card border-light">
              <div class="card-body">
                <div class="container-detail-profile">
                  <img class="pic1" width="60" height="60" src="../assets/testi-ergon.png" alt="" />
                  <div class="card-name">
                    <h5 class="card-title">Ergon Rizky Purba</h5>
                    <h6 class="card-subtitle">Alumni Bootcamp Batch 2</h6>
                  </div>
                  <div class="d-flex gap-1">
                    <p>5</p>
                    <img class="star" width="20" height="20" src="../assets/star.png" alt="star" />                    
                  </div>                  
                </div>
                <p class="card-text">
                  “Luar biasa, para mentor berusaha ngajar malam hari, supaya
                  kami bisa ngerti dari awal hingga akhir. Setelah ikut
                  intelligo ini, saya tertantang untuk mengerjakan project data
                  science lainnya ! ”
                </p>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="card border-light">
              <div class="card-body">
                <div class="container-detail-profile">
                  <img class="pic1" width="60" height="60" src="../assets/testi-halimul.png" alt="profile" />
                  <div class="card-name">
                    <h5 class="card-title">Halimul Hakim Khairul</h5>
                    <h6 class="card-subtitle">Alumni Bootcamp Batch 1</h6>
                  </div>
                  <div class="d-flex gap-1">
                    <p>5</p>
                    <img class="star" width="20" height="20" src="../assets/star.png" alt="star" />                    
                  </div>     
                </div>
                <p class="card-text">
                  “Intelligo ID membuat bootcamp menjadi lebih interaktif karena
                  ada sistem 1on1 yang membantu kita untuk bertanya sepuasnya. ”
                </p>
              </div>
            </div>
          </SplideSlide>
        </SplideTrack>

        <div class="wrapper__splide">
          <div class="splide__pagination" />

          <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev">
              <i class="fa-solid fa-circle-arrow-right"></i>
            </button>
            <button class="splide__arrow splide__arrow--next">
              <i class="fa-solid fa-circle-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </Splide>
  </div>
</template>

<script>
import { thisTypeAnnotation } from "@babel/types";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// import "./../plugins/splide.js";
export default {
  return: {
    data() {},
  },

  name: `TestiComp`,
  props: ["content"],
  components: {
    Splide,
    SplideSlide,
    SplideTrack,
  },
  mounted() {},
};
</script>

<style scoped>
.testimoni {
  height: auto;
  background: #023047;
  padding-bottom: 2rem;
}
.container-title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: white;
  justify-content: space-between;
  padding: 50px 7%;
}
.container-title h2 {
  font-weight: 600;
  font-size: 35px;
  /* color: #050810; */
}
.container-title p {
  text-align: right;
  font-weight: 400;
  font-size: 18px;
  /* color: #848484; */
}
.card {
  border-radius: 16px;
}
.card-body {
  max-width: 400px;
  width: 100%;
  min-height: 322px;
  height: 100%;
  justify-content: unset;
}
.container-detail-profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.pic1 {
  border-radius: 100%;
}
.card-name {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 70%;
  margin-left: 10px;
  margin-top: -10px;
}
.card-title {
  font-weight: 600;
  font-size: 17px;
  color: #050810;
}
.card-subtitle {
  font-weight: 400;
  font-size: 14px;
  color: #848484;
}
.card-text {
  margin-top: 18px;
  font-weight: 400;
  font-size: 15px;
  color: #050810;
}
.link-page {
  margin-left: 116px;
  margin-bottom: 100px;
}
.page1 {
  width: 30px;
  height: 10px;
  background: #f94f25;
  border-radius: 100px;
  margin-left: 3px;
}
.page {
  width: 10px;
  height: 10px;
  margin-left: 3px;
}
.wrapper__splide {
  height: 2em;
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
}
.splide__arrows {
  position: relative;
  display: flex;
  gap: 0.875em;
}
.splide__arrow {
  position: static !important;
  transform: translateY(0) !important;
}
.splide__arrow--next {
  color: white;
  background-color: #f94f25 !important;
}
.splide__arrow--prev {
  color: #f94f25;
  background-color: #fedcd3 !important;
}
.splide__pagination {
  position: static !important;
  justify-content: start !important;
}
.splide__pagination__page.is-active {
  background-color: #f94f25 !important;
  transform: scaleX(1.5) !important;
}
.splide__pagination__page {
  background-color: #fcab97 !important;
}

@media only screen and (max-width: 840px) {
  .container-title[data-v-34da32c6] {
    justify-content: center;
  }

  .container-title h2 {
    text-align: center;
  }

  .container-title p {
    margin-top: 10px;
    text-align: center;
  }
}

@media only screen and (max-width: 450px) {
  .card-detail-profile {
    flex-direction: column;
  }

  .card-rating {
    margin-top: 20px;
  }
}
</style>
