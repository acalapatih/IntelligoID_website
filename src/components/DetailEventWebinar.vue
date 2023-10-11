<template>
  <NavbarComp />
  <div id="main">
    <header class="d-flex gap-5">
      <div class="left">
        <h5 class="subtitle">Webinar</h5>
        <h1 class="title">{{ data.title }}</h1>
        <p class="content my-4" v-html="data.description"></p>
        <!-- <div class="speaker d-flex">
          <img
            src="../assets/speaker-icon.png"
            alt="speaker"
            width="28"
            height="28"
          />
          <p class="detail-text">Udin Saepudin</p>
        </div> -->
        <div class="calendar d-flex">
          <img
            src="../assets/calendar-icon.png"
            alt="calendar"
            width="25"
            height="28"
          />
          <p class="detail-text">Minggu, 2 April 2023</p>
          <img
            src="../assets/zoom-logo.svg"
            alt="zoom"
            width="28"
            height="28"
          />
          <p class="detail-text">Zoom</p>
        </div>
        <h2 class="price my-3">
          {{
            dataLoaded
              ? data.price !== "0.00"
                ? new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(data.price)
                : "Free"
              : "Wait"
          }}
        </h2>
        <button class="btn-daftar" type="button" @click="login">
          Daftar Sekarang
        </button>
      </div>

      <div class="right mx-2">
        <img
          :src="data.image"
          alt="webinar"
          style="max-width: 55rem; height: auto; width: 100%"
        />
      </div>
    </header>

    <div class="detail-webinar d-flex">
      <div class="d-flex gap-2">
        <img
          src="../assets/2User-icon.png"
          width="30"
          height="30"
          alt="user-icon"
        />
        <p>Batas Usia : 18 tahun</p>
      </div>
      <div class="d-flex gap-2">
        <img
          src="../assets/Activity-icon.png"
          width="30"
          height="30"
          alt="user-icon"
        />
        <p>Level : Pemula</p>
      </div>
      <div class="d-flex gap-2">
        <img
          src="../assets/Document-icon.png"
          width="30"
          height="30"
          alt="user-icon"
        />
        <p>Bersertifikat</p>
      </div>
    </div>

    <section class="tentang-program d-flex mt-5 gap-5">
      <div class="left">
        <img src="../assets/webinar-1.png" alt="img" />
      </div>
      <div class="right d-flex flex-column">
        <h5 class="subtitle">Tentang Program</h5>
        <h1 class="title">Apa yang dipelajari ?</h1>
        <div class="mt-4 mb-4">
          <div v-if="dataLoaded">
            <!--Menampilkan teks yang telah dipotong-->
            <p class="content" v-html="shortText"></p>
            <span
              style="cursor: pointer"
              v-if="showButton"
              @click="toggleShowMore"
            >
              <!--menampilkan tombol dengan teks "Read Less" jika nilai showMore=true, dan "Read More" jika false-->
              Read {{ showMore ? "Less" : "More" }}
            </span>
          </div>
          <div v-else>Mohon tunggu ....</div>
        </div>

        <h4 class="tools-text">Tools</h4>
        <div class="tools-container d-flex mt-2 gap-3 flex-wrap">
          <div class="tools-card d-flex">
            <img
              src="../assets/python-logo.png"
              width="30"
              height="30"
              alt="python"
            />
            <p>Python</p>
          </div>
          <div class="tools-card d-flex">
            <img
              src="../assets/dbeaver-logo.png"
              width="30"
              height="30"
              alt="dbeaver"
            />
            <p>DBEAVER</p>
          </div>
          <div class="tools-card d-flex">
            <img
              src="../assets/mamp-logo.png"
              width="30"
              height="30"
              alt="mamp"
            />
            <p>MAMP</p>
          </div>
        </div>
        <h4 class="mt-4 tools-text">Poin utama</h4>
        <div class="point-container d-flex mt-4">
          <div class="point-card d-flex gap-2">
            <img
              src="../assets/poin-icon.png"
              width="25"
              height="25"
              alt="point"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur. Mi eleifend ac mi sit vel.
            </p>
          </div>
          <div class="point-card d-flex gap-2">
            <img
              src="../assets/poin-icon.png"
              width="25"
              height="25"
              alt="point"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur. Mi eleifend ac mi sit vel.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="benefit d-flex mt-5">
      <div class="left">
        <h5 class="subtitle">Benefit Program</h5>
        <h1 class="title">Benefit yang didapat</h1>
        <p class="content mt-4 mb-4">
          Yuk ikuti webinar di intelligo.id dan dapatkan benefit menarik!
          Pelajari teknologi terkini bersama para ahli dan kembangkan karir
          kamu. Dapatkan juga kesempatan networking dengan peserta dan pemateri
          dari industri teknologi ternama. Jangan lewatkan kesempatan ini,
          daftar sekarang di intelligo.id!
        </p>
        <h4 class="tools-text">Benefit</h4>
        <div class="benefit-point-container" v-if="dataLoaded">
          <div
            class="d-flex gap-3"
            v-for="(val, index) in benefit1"
            :key="index"
          >
            <img :src="val.image" width="70" height="70" />
            <div class="detail">
              <h5>{{ val.title }}</h5>
              <p v-html="val.description"></p>
            </div>
          </div>
          <div
            class="d-flex gap-3"
            v-for="(val, index) in benefit2"
            :key="index"
          >
            <img :src="val.image" width="70" height="70" />
            <div class="detail">
              <h5>{{ val.title }}</h5>
              <p v-html="val.description"></p>
            </div>
          </div>
        </div>
        <div class="benefit-point-container" v-else><h5>Wait</h5></div>
      </div>
      <div class="right">
        <img src="../assets/benefit-webinar.png" alt="img" />
      </div>
    </section>

    <section class="pemateri mt-5 d-flex flex-column text-center justify-content-center align-items-center">
      <h5 class="subtitle">Pemateri</h5>
      <h1 class="title">Dibimbing Bersama Pemateri<br />Profesional</h1>
      <div
        class="mentor-container mt-4 d-flex gap-4"
        v-for="(value, index) in data.mentor"
        :key="index"
      >
        <div class="card-mentor">
          <img class="mentor-img" :src="value.image" />
          <h5 class="my-3">{{ value.name }}</h5>
          <p class="my-3" v-html="value.description"></p>
          <a href="https://www.linkedin.com/in/yudy-yunardy-4820a620/">
            <img id="linkedin" width="50" src="../assets/linkedin.png" />
          </a>
        </div>
      </div>
    </section>

    <!-- <section
      class="biaya mt-5 d-flex flex-column text-center justify-content-center align-items-center"
    >
      <h5 class="subtitle">Investasi Ilmu</h5>
      <h1 class="title">
        Dengan harga yang pas dan<br />
        tentunya terjangkau
      </h1>
      <div class="isi mt-3">
        <img src="../assets/goodjob-finance.png" class="img-biaya-kiri" />
        <div class="information text-center">
          <h5>YUK JOIN SEKARANG JUGA!!</h5>
          <p class="detail">Kelas Terdekat : 27 Maret 2023</p>
          <p class="detail mt-3 mb-0">Harga :</p>
          <h4 class="text-price">Rp 3.000.000</h4>
          <button class="btnDaftar" value="daftar" @click="gotoKupon()">
            Daftar Sekarang
          </button>
          <p class="text-discount mt-2">
            Gunakan kode kupon : <span class="text-disc-bold">50MARET</span
            ><br />
            *sisa kuota 10 orang
          </p>
        </div>
        <img src="../assets/business-finance.png" class="img-biaya-kanan" />
      </div>
    </section> -->

    <section class="faq">
      <h5 class="subtitle">FAQ</h5>
      <h1 class="title mb-4">Pertanyaan yang sering ditanyakan</h1>
      <div class="accordion accordion-flush" id="faqAccordion">
        <div class="accordion-item mb-4 rounded-4">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-grey-custom rounded-4 fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqOne"
              aria-expanded="false"
              aria-controls="faqOne"
            >
              bagaimana cara pembayaran webinar ?
            </button>
          </h2>
          <div
            id="faqOne"
            class="accordion-collapse collapse bg-grey-custom rounded-bottom-4"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
              nisi, in integer sit hendrerit massa et potenti scelerisque.
              Pellentesque penatibus sollicitudin a sed sit vestibulum nam
              interdum.
            </div>
          </div>
        </div>
        <div class="accordion-item mb-4 rounded-4">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-grey-custom rounded-4 fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqTwo"
              aria-expanded="false"
              aria-controls="faqTwo"
            >
              Jika saya ketinggalan materi, apakah ada video rekaman dan materi
              yang bisa saya ulang ?
            </button>
          </h2>
          <div
            id="faqTwo"
            class="accordion-collapse collapse bg-grey-custom rounded-bottom-4"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body">
              Documents dan Recordings setiap harinya bisa di akses oleh peserta
              untuk di ulang jika mau belajar kembali diluar live session.
            </div>
          </div>
        </div>
        <div class="accordion-item mb-4 rounded-4">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-grey-custom rounded-4 fw-semibold"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqThree"
              aria-expanded="false"
              aria-controls="faqThree"
            >
              Saya non IT, apakah saya bisa mengikuti bootcamp dari dasar banget
              ?
            </button>
          </h2>
          <div
            id="faqThree"
            class="accordion-collapse collapse bg-grey-custom rounded-bottom-4"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body">
              Bootcamp di Intelligo ID, diajarin dari 0 dan dasar banget, jadi
              jangan takut buat kamu yang non IT !
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <FooterComp />
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";

export default {
  name: `DetailEventWebinar`,
  components: {
    NavbarComp,
    FooterComp,
  },
  data() {
    return {
      showMore: false,
      maxLength: 350,
      data: {},
      benefit1: [],
      benefit2: [],
      dataLoaded: false,
    };
  },
  computed: {
    shortText() {
      //mengembalikan teks yang telah dipotong menggunakan maxLength
      if (
        this.data?.about_description.length > this.maxLength &&
        !this.showMore
      ) {
        return (
          this.data?.about_description.substring(0, this.maxLength) + "..."
        );
      } else {
        return this.data?.about_description;
      }
    },
    showButton() {
      //mengembalikan nilai boolean untuk menentukan apakah tombol harus ditampilkan atau tidak
      return this.data?.about_description.length > this.maxLength;
    },
  },
  methods: {
    toggleShowMore() {
      //mengubah nilai showMore untuk menampilkan lebih banyak teks
      this.showMore = !this.showMore;
    },
    login() {
      window.open("https://dashboard.intelligo.id/signin", "_blank");
    },
    async GetEventById() {
      const id = this.$route.params.id;
      let url = `/get-event/${id}`;
      url += "?_=" + new Date().getTime();
      try {
        this.data = (await this.$api.get(url)).data.data;
        for (let index = 0; index < this.data.benefits.length; index++) {
          if (index % 2 !== 0) {
            this.benefit1.push(this.data.benefits[index]);
          } else {
            this.benefit2.push(this.data.benefits[index]);
          }
        }
        this.dataLoaded = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.GetEventById();
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

#main {
  padding: 7%;
}

/*-------------------HEADER------------------- */
#left,
#right {
  flex: 50%;
}
#right {
  display: flex;
  align-items: center;
}

.webinar-image {
  max-width: 559px;
  width: 100%;
  max-height: 369px;
}

.subtitle {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 30px;
  color: #ff5400;
}
.title {
  font-weight: 600;
  font-size: 3rem;
  line-height: 110%;
  letter-spacing: 0.005em;
  color: #023047;
}
.content {
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  text-align: justify;
  color: #78839e;
}
.speaker,
.calendar {
  gap: 10px;
}
.detail-text {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 30px;
  color: #78839e;
}
.price {
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 125%;
  letter-spacing: 0.005em;
  color: #ff5400;
}
.btn-daftar {
  width: 198px;
  height: 54px;
  background: #023047;
  border-radius: 16px;
  color: white;
}

/*---------------DETAIL WEBINAR------------ */
.detail-webinar {
  margin-top: 3rem;
  justify-content: space-between;
}
.detail-webinar p {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #78839e;
}

/*-----------TENTANG PROGRAM------------ */
.tools-text {
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 36px;
}
.tools-card {
  padding: 10px 10px 0;
  background: #faf9f9;
  border-radius: 8px;
  gap: 10px;
}
.tools-card p {
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 30px;
  color: #181818;
}

/*---------------BENEFIT----------- */

.benefit .left {
  display: flex;
  flex: 50%;
  flex-direction: column;
  justify-content: center;
}

.benefit .right {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 50%;
}
.benefit-point-container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
}
.benefit-point-container .detail h5 {
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 100%;
  letter-spacing: 0.005em;
  color: #ff5400;
}
.benefit-point-container .detail p {
  font-weight: 400;
  font-size: 0.85rem;
  line-height: 140%;
  text-align: justify;
  color: #023047;
}

/*------------PEMATERI--------------- */
.mentor-container {
  justify-content: center;
}
.card-mentor {
  max-width: 20em;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.mentor-img {
  width: 100%;
  height: auto;
  border-radius: 16px;
}

/*---------------BIAYA-------------- */
.biaya .isi {
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  padding: 20px 40px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.information h5 {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.005em;
  color: #023047;
}
.information .detail {
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  color: #023047;
}
.text-price {
  font-weight: 700;
  font-size: 32px;
  line-height: 140%;
  letter-spacing: 0.005em;
  color: #ff5400;
}
.btnDaftar {
  color: white;
  background: #023047;
  border-radius: 100px;
  padding: 10px 5rem;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
}
.text-discount {
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: #f94f25;
}
.text-disc-bold {
  font-weight: 600;
}

/*----------------FAQ---------------- */
.faq {
  margin: 6rem;
}
.accordion {
  width: 90%;
}
.accordion-button {
  font-size: 20px;
  background: #f5f5f5;
}
.accordion-body {
  font-size: 18px;
}

@media (max-width: 1200px) {
  header {
    flex-direction: column-reverse;
  }
  header .right {
    justify-content: center;
  }
  header .right img {
    max-width: 100%;
    width: 100%;
    max-height: 100%;
  }

  .tentang-program .left {
    display: flex;
    align-items: center;
    flex: 50%;
  }
  .tentang-program .left {
    display: flex;
    align-items: center;
  }

  .tentang-program .right {
    flex: 50%;
  }
  .tentang-program .left img {
    max-width: 562px;
    width: 100%;
    max-height: 406px;
  }

  .benefit {
    gap: 3rem;
  }

  .benefit .right img {
    max-width: 369px;
    max-height: 418px;
    width: 100%;
  }
}
@media (max-width: 992px) {
  .tentang-program {
    flex-direction: column;
  }

  .tentang-program .left {
    justify-content: center;
  }

  .mentor-container {
    flex-wrap: wrap;
  }
}
@media (max-width: 800px) {
  .benefit-point-container {
    display: flex;
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .detail-webinar {
    flex-wrap: wrap;
    justify-content: start;
    gap: 0 20px;
  }
  .benefit {
    flex-direction: column-reverse;
  }

  .biaya .isi {
    flex-direction: column;
  }

  .faq {
    margin: 3rem 0;
  }
}
@media (max-width: 576px) {
  .subtitle {
    font-size: 1rem;
  }
  .title {
    font-size: 2.75rem;
  }
  .content {
    font-size: 0.75rem;
  }
  .detail-text {
    font-size: 1rem;
  }
  .price {
    font-size: 2.15rem;
  }
  .detail-webinar p {
    font-size: 1rem;
  }
  .tools-text {
    font-size: 1.25rem;
  }
  .tools-card p {
    font-size: 1rem;
  }
  .accordion-button {
    font-size: 1rem;
  }

  .point-container {
    flex-wrap: wrap;
  }
}

</style>
