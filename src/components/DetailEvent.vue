<template>
  <NavbarComp />
  <div id="main">
    <div id="first-section">
      <div id="left" class="my-3">
        <h3>{{ data.title }}</h3>
        <p class="mb-md-4 mb-lg-5">
          Jadilah profesional Data Science dan raih karir terbaik di perusahaan
          keinginanmu!!
        </p>

        <div class="container-btn-daftar">
          <button
            id="btnKonsul"
            value="konsul"
            @click="goToKonsul(data.whatsapp, data.title)"
          >
            Konsultasi Sekarang
          </button>
          <button id="btnDaftar" value="daftar" @click="gotoDaftar()">
            Daftar Sekarang
          </button>
        </div>
        <p class="nb-text">
          *Harga khusus diskon up to 50% buat pendaftar hari ini
        </p>
      </div>
      <div id="right">
        <img src="../assets/imgHeaderNew.png" alt="header intelligo.id" />
      </div>
    </div>
    <div id="second-section">
      <div id="aside">
        <a @click="goto('scroll1')" tabindex="0">Tentang Program</a>
        <a @click="goto('scroll2')" tabindex="0">Benefit Program</a>
        <a @click="goto('scroll3')" tabindex="0">Kurikulum</a>
        <a @click="goto('scroll4')" tabindex="0">Tahapan Program</a>
        <a @click="goto('scroll5')" tabindex="0">Trainer</a>
        <a @click="goto('scroll6')" tabindex="0">Biaya</a>
        <a @click="goto('scroll7')" tabindex="0">Jadwal Program</a>
        <a @click="goto('scroll8')" tabindex="0">Alur Pendaftaran</a>
        <a @click="goto('scroll9')" tabindex="0">Testimoni</a>
        <a @click="goto('scroll10')" tabindex="0">FAQ</a>
        <button id="btnDaftar" value="daftar" @click="gotoDaftar()">
          Daftar Sekarang
        </button>
      </div>
      <div id="article">
        <div id="tentangProgram">
          <h4 ref="scroll1">Tentang Program</h4>
          <h3>Apa itu Bootcamp Data Science?</h3>
          <div id="isi" style="display: flex; flex-wrap: wrap">
            <div id="isi1">
              <div v-html="description[0]"></div>
              <p v-html="description[1]"></p>
            </div>
            <div id="isi2">
              <div v-html="description[2]"></div>
              <p v-html="description[3]"></p>
            </div>
          </div>
        </div>
        <div id="benefitProgram">
          <h4 ref="scroll2">Benefit Program</h4>
          <h3>Apa yang kamu dapatkan?</h3>
          <div id="isi">
            <div id="isi1">
              <div id="elemen" v-for="(val, index) in benefit1" :key="index">
                <img
                  :src="val.image"
                  alt="benefit mengikuti bootcamp intelligo.id"
                />
                <div id="detail">
                  <h5>{{ val.title }}</h5>
                  <p v-html="val.description"></p>
                </div>
              </div>
            </div>
            <div id="isi2">
              <div id="elemen" v-for="(val, index) in benefit2" :key="index">
                <img
                  :src="val.image"
                  alt="benefit mengikuti bootcamp intelligo.id"
                />
                <div id="detail">
                  <h5>{{ val.title }}</h5>
                  <p v-html="val.description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="kurikulum">
          <h4 ref="scroll3">Kurikulum</h4>
          <h3>Apa yang dipelajari?</h3>

          <div class="accordion accordion-flush" id="kurikulumAccordion">
            <div
              class="accordion-item mb-2 rounded-4"
              v-for="(value, index) in data.curriculums"
            >
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed bg-grey-custom rounded-4 fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#kurikulum' + String(index + 1)"
                  aria-expanded="false"
                  :aria-controls="'#kurikulum' + String(index + 1)"
                >
                  {{ value.name }}
                </button>
              </h2>
              <div
                :id="'kurikulum' + String(index + 1)"
                class="accordion-collapse collapse bg-grey-custom rounded-bottom-4"
                aria-labelledby="headingOne"
                data-bs-parent="#kurikulumAccordion"
              >
                <div class="accordion-body">{{ value.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <div id="tahapan-program">
          <h4 ref="scroll4">Manfaat Program</h4>
          <h3>Apa yang Anda dapatkan dalam program ini?</h3>
          <div class="tahapan-container">
            <div class="tahapan-item" v-for="(val, index) in data.manfaat">
              <div class="tahapan-desc">
                <h4>{{ val.title }}</h4>
                <p v-html="val.description"></p>
              </div>
              <img :src="val.image" alt="tahapan mendaftar bootcamp" />
            </div>
          </div>
        </div>

        <div id="mentor">
          <h4 ref="scroll5">Trainer</h4>
          <h3>Yuk kenali mentor yang akan membimbingmu!</h3>
          <!-- splide -->
          <Splide
            :has-track="false"
            :options="options"
            @splide:pagination:mounted="onPaginationMounted"
            aria-label="Splide Mentor"
          >
            <div class="container">
              <SplideTrack>
                <SplideSlide class="margin-0">
                  <div id="elemen" class="text-center card-mentor">
                    <img
                      src="../assets/mentor-yudy.png"
                      alt="mentor intelligo.id"
                    />
                    <h5>Yudy Yunardy</h5>
                    <p>
                      Senior Business Analyst Indivara Group, Business Analyst
                      Jati Piranti Solusindo, IBM Advanced Data Science
                      certified, Google Data Analytics certified
                    </p>
                    <a
                      href="https://www.linkedin.com/in/yudy-yunardy-4820a620/"
                    >
                      <img
                        id="linkedin"
                        src="../assets/linkedin.png"
                        alt="mentor intelligo.id"
                      />
                    </a>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div id="elemen" class="text-center card-mentor">
                    <img
                      src="../assets/mentor-fahmi.png"
                      alt="mentor intelligo.id"
                    />
                    <h5>Muhammad Fahmi</h5>
                    <p>Data Scientist <br />at Big Data Tech Company</p>
                    <a href="https://www.linkedin.com/in/muhammad-fahmi17/">
                      <img
                        id="linkedin"
                        src="../assets/linkedin.png"
                        alt="mentor intelligo.id"
                      />
                    </a>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div id="elemen" class="text-center card-mentor">
                    <img
                      src="../assets/mentor-helna.png"
                      alt="mentor intelligo.id"
                    />
                    <h5>Helna Freecenta</h5>
                    <p>
                      Data Analyst<br />
                      at Big Media Company
                    </p>
                    <a href="https://www.linkedin.com/in/helna-freecenta/">
                      <img
                        id="linkedin"
                        src="../assets/linkedin.png"
                        alt="mentor intelligo.id"
                      />
                    </a>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div id="elemen" class="text-center card-mentor">
                    <img
                      src="../assets/mentor-joko.png"
                      alt="mentor intelligo.id"
                    />
                    <h5>Joko Joko Eliyanto</h5>
                    <p>Data Scientist<br />at Teman Data</p>
                    <a
                      href="https://www.linkedin.com/in/joko-eliyanto-23a1b6143/"
                    >
                      <img
                        id="linkedin"
                        src="../assets/linkedin.png"
                        alt="mentor intelligo.id"
                      />
                    </a>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div id="elemen" class="text-center card-mentor">
                    <img
                      src="../assets/mentor-nanda.png"
                      alt="mentor intelligo.id"
                    />
                    <h5>Nanda Harsana</h5>
                    <p>Technical Consultant <br />at ISGS</p>
                    <a
                      href="https://www.linkedin.com/in/nanda-harsana-octavya/"
                    >
                      <img
                        id="linkedin"
                        src="../assets/linkedin.png"
                        alt="mentor intelligo.id"
                      />
                    </a>
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

        <div id="guest_trainer">
          <h4 ref="scroll6">Guest Trainer</h4>
          <p class="guest_trainer_text">
            Setiap Batch Intelligo ID menghadirkan Trainer Tamu yang berasal
            dari Big Startup Company
          </p>
          <div class="guest_trainer_company">
            <div>
              <img
                src="../assets/company_1.png"
                alt="patner intelligo.id data science"
              />
              <img
                src="../assets/company_2.png"
                alt="patner intelligo.id data science"
              />
              <img
                src="../assets/company_3.png"
                alt="patner intelligo.id data science"
              />
              <img
                src="../assets/company_4.png"
                alt="patner intelligo.id data science"
              />
              <img
                src="../assets/company_5.png"
                alt="patner intelligo.id data science"
              />
              <img
                src="../assets/company_6.png"
                alt="patner intelligo.id data science"
              />
              <img
                src="../assets/company_7.png"
                alt="patner intelligo.id data science"
              />
              <img
                src="../assets/company_8.png"
                alt="patner intelligo.id data science"
              />
            </div>
          </div>
        </div>

        <div id="biaya" v-if="data.category?.name === 'Bootcamp'">
          <h4 ref="scroll6">Biaya</h4>
          <h3>Dengan harga yang pas dan tentunya terjangkau</h3>
          <div id="isi">
            <img
              src="../assets/goodjob-finance.png"
              class="img-biaya-kiri"
              alt="biaya murah bootcamp intelligo"
            />
            <div id="information" class="text-center">
              <h5>YUK JOIN SEKARANG JUGA!!</h5>
              <p>Pendaftaran dibuka : 20 Desember 2022 - 12 Februari 2023</p>
              <p>Kelas Terdekat : 23 Januari 2023 & 13 Februari 2023</p>
              <p class="text-price">
                {{
                  Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(data.price)
                }}
              </p>
              <button id="btnDaftar" value="daftar" @click="gotoKupon()">
                Dapatkan Kupon
              </button>
              <p class="text-discount">
                *Dapatkan harga khusus diskon up to 50% buat pendaftaran hari
                ini.
              </p>
            </div>
            <img
              src="../assets/business-finance.png"
              class="img-biaya-kanan"
              alt="biaya murah bootcamp intelligo"
            />
          </div>
        </div>
        <!-- bagianku -->
        <div id="jadwalProgram">
          <h4 ref="scroll7">Jadwal Program</h4>
          <h3>Dengan jadwal yang tepat selama 6 pekan</h3>
          <div id="isi">
            <div id="elemen1">
              <p>Senin</p>
              <h5>19.30 - 21.30</h5>
              <h5>Live Session</h5>
              <p id="detail" style="opacity: 0">as</p>
            </div>
            <div id="elemen2">
              <p>Selasa</p>
              <p id="detail">Belajar Mandiri</p>
            </div>
            <div id="elemen3">
              <p>Rabu</p>
              <h5>19.30 - 21.30</h5>
              <p id="detail">Live Session</p>
            </div>
            <div id="elemen4">
              <p>Kamis</p>
              <p id="detail">Belajar Mandiri</p>
            </div>
            <div id="elemen5">
              <p>Jumat</p>
              <h5>19.30 - 21.30</h5>
              <p id="detail">Live Session & 1on1 Mentoring</p>
            </div>
          </div>
        </div>
        -->

        <div id="jadwalProgram" v-if="data.category?.name === 'Bootcamp'">
          <h4 ref="scroll8">Jadwal Program</h4>
          <h3>Dengan Jadwal yang tepat selama 8 Minggu</h3>
          <h5>Berbagai pilihan jadwal</h5>
          <div id="jadwal_1">
            <div class="jadwal_pilihan">
              <p>Pilihan 1</p>
            </div>
            <div class="jadwal_container">
              <div class="elemen1">
                <p class="jadwal-day">Senin</p>
                <h5>19.30 - 21.30</h5>
                <p class="jadwal_live">Live Session</p>
              </div>
              <div class="elemen2">
                <p class="jadwal-day">Selasa</p>
                <h5>Belajar Mandiri</h5>
              </div>
              <div class="elemen3">
                <p class="jadwal-day">Rabu</p>
                <h5>19.30 - 21.30</h5>
                <p class="jadwal_live">Live Session</p>
              </div>
              <div class="elemen4">
                <p class="jadwal-day">Kamis</p>
                <h5>Belajar Mandiri</h5>
              </div>
              <div class="elemen5">
                <p class="jadwal-day">Jumat</p>
                <h5>1on1 Mentoring</h5>
              </div>
            </div>
          </div>

          <div id="jadwal_2">
            <div class="jadwal_pilihan">
              <p>Pilihan 2</p>
            </div>
            <div class="jadwal_container">
              <div class="elemen1">
                <p class="jadwal-day">Senin</p>
                <h5>Belajar Mandiri</h5>
              </div>
              <div class="elemen2">
                <p class="jadwal-day">Selasa</p>
                <h5>19.30 - 21.30</h5>
                <p class="jadwal_live">Live Session</p>
              </div>
              <div class="elemen3">
                <p class="jadwal-day">Rabu</p>
                <h5>Belajar Mandiri</h5>
              </div>
              <div class="elemen4">
                <p class="jadwal-day">Kamis</p>
                <h5>19.30 - 21.30</h5>
                <p class="jadwal_live">Live Session</p>
              </div>
              <div class="elemen5">
                <p class="jadwal-day">Jumat</p>
                <h5>1on1 Mentoring</h5>
              </div>
            </div>
          </div>

          <div id="jadwal_3">
            <p>
              Selama bulan ramadhan jam mulai disesuaikan di pukul 20.15 WIB
            </p>
            <p>
              atau buat kamu yang pekerja aktif secara profesional bisa join
              kelas Weekend
            </p>
            <div class="jadwal_pilihan_3">Pilihan 3 - Kelas Weekend</div>
          </div>
        </div>

        <div id="alurPendaftaran">
          <h4 ref="scroll8">Alur Pendaftaran</h4>
          <h3>Yuk cek tahap pendaftaranmu dimana!</h3>
          <div class="line-container">
            <div class="line-1"></div>
            <div class="line-2"></div>
          </div>
          <div class="alur-mobile">
            <img src="../assets/alur-1.svg" alt="alur intelligo data science" />
            <img src="../assets/alur-2.svg" alt="alur intelligo data science" />
            <img src="../assets/alur-3.svg" alt="alur intelligo data science" />
          </div>
        </div>

        <div id="testimoni">
          <h4 ref="scroll10">Testimoni</h4>
          <h3>Kata mereka yang sudah mengikuti bootcamp ini</h3>
        </div>

        <Splide
          :has-track="false"
          :options="options"
          @splide:pagination:mounted="onPaginationMounted"
          aria-label="Splide Testimoni"
          class="splide"
        >
          <div class="container">
            <SplideTrack>
              <SplideSlide>
                <div class="testimoni-card card border-light">
                  <div class="row card-judul">
                    <div class="card-pic1">
                      <img
                        class="pic1"
                        src="../assets/testi-yasir.png"
                        alt="testimoni intelligo.id"
                      />
                      <div class="card-name">
                        <h5 class="card-title">Muhammad Yasir</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                          Alumni Bootcamp Batch 1
                        </h6>
                      </div>
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
              </SplideSlide>
              <SplideSlide>
                <div class="testimoni-card card border-light">
                  <div class="row card-judul">
                    <div class="card-pic1">
                      <img
                        class="pic1"
                        src="../assets/testi-ergon.png"
                        alt="testimoni intelligo.id"
                      />
                      <div class="card-name">
                        <h5 class="card-title">Ergon Rizky Purba</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                          Alumni Bootcamp Batch 2
                        </h6>
                      </div>
                    </div>
                  </div>
                  <p class="card-text">
                    “Luar biasa, para mentor berusaha ngajar malam hari, supaya
                    kami bisa ngerti dari awal hingga akhir. Setelah ikut
                    intelligo ini, saya tertantang untuk mengerjakan project
                    data science lainnya ! ”
                  </p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="testimoni-card card border-light">
                  <div class="row card-judul">
                    <div class="card-pic1">
                      <img
                        class="pic1"
                        src="../assets/testi-halimul.png"
                        alt="testimoni intelligo.id"
                      />
                      <div class="card-name">
                        <h5 class="card-title">Halimul Hakim Khairul</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                          Alumni Bootcamp Batch 1
                        </h6>
                      </div>
                    </div>
                  </div>
                  <p class="card-text">
                    “Intelligo ID membuat bootcamp menjadi lebih interaktif
                    karena ada sistem 1on1 yang membantu kita untuk bertanya
                    sepuasnya. ”
                  </p>
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

        <div id="faq">
          <h4 ref="scroll11">FAQ</h4>
          <h3>Frequently asked Question</h3>
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
                  Jika saya kuliah atau bekerja apakah saya dapat mengikuti
                  bootcamp dengan waktu yang tepat ?
                </button>
              </h2>
              <div
                id="faqOne"
                class="accordion-collapse collapse bg-grey-custom rounded-bottom-4"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Bisa banget! karena bootcamp akan dilaksanakan after office
                  hour yaitu malam hari dari jam 19.30 - 21.30.
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
                  Jika saya ketinggalan materi, apakah ada video rekaman dan
                  materi yang bisa saya ulang ?
                </button>
              </h2>
              <div
                id="faqTwo"
                class="accordion-collapse collapse bg-grey-custom rounded-bottom-4"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Documents dan Recordings setiap harinya bisa di akses oleh
                  peserta untuk di ulang jika mau belajar kembali diluar live
                  session.
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
                  Saya non IT, apakah saya bisa mengikuti bootcamp dari dasar
                  banget ?
                </button>
              </h2>
              <div
                id="faqThree"
                class="accordion-collapse collapse bg-grey-custom rounded-bottom-4"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div class="accordion-body">
                  Bootcamp di Intelligo ID, diajarin dari 0 dan dasar banget,
                  jadi jangan takut buat kamu yang non IT !
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComp />
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";

export default {
  name: `DetailEvent`,
  components: {
    Splide,
    SplideSlide,
    SplideTrack,
    NavbarComp,
    FooterComp,
  },
  data() {
    return {
      data: {},
      description: [],
      benefit1: [],
      benefit2: [],
    };
  },
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    goToKonsul(phone, program) {
      window.open(
        `https://api.whatsapp.com/send/?phone=${phone}&text=Halo%20Mintell!%20Saya%20ingin%20Konsultasi%20program%20${program}%20dengan%20identitas%20di%20bawah%20ini.%0ANama:%0AEmail:%0APertanyaan:&type=phone_number&app_absent=0`,
        "_blank"
      );
    },
    gotoDaftar: function () {
      window.open("https://bit.ly/bootcamp-ds-intelligo", "_blank");
    },
    gotoKupon: function () {
      window.open("https://bit.ly/tanya-mintell", "_blank");
    },
    onPaginationMounted(splide, pagination) {
      pagination.items.forEach(function (item) {
        item.button.style.background = "#FCAB97";
      });
    },
    async GetEventById() {
      const id = this.$route.params.id;
      let url = `/get-event/${id}`;
      url += "?_=" + new Date().getTime();
      this.data = (await this.$api.get(url)).data.data;
      for (let index = 0; index < this.data.benefits.length; index++) {
        if (index % 2 !== 0) {
          this.benefit1.push(this.data.benefits[index]);
        } else {
          this.benefit2.push(this.data.benefits[index]);
        }
      }
    },
    async GetDescription() {
      const id = this.$route.params.id;
      let url = `/get-event/${id}`;
      url += "?_=" + new Date().getTime();
      await this.$api
        .get(url)
        .then((response) => {
          // Set nilai data description dari response API
          let data = response.data.data.description;
          if (typeof data === "string") {
            // Memastikan data adalah string
            data = data.replace(/\r?\n|\r/g, ""); // Menghapus karakter "\r" dan "\n" dari data

            // Memisahkan konten menggunakan tag "<p>" dan "</p>"
            let newData = data
              .split(/<\/?p>/)
              .filter((item) => item.trim() !== "");
            this.description = newData; // Set nilai data description
          } else {
            console.log("Data description bukan string"); // Menampilkan pesan error jika data bukan string
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.GetEventById();
    this.GetDescription();
    window.scrollTo(0, 0);
  },
  setup() {
    const options = {
      drag: "free",
      rewind: false,
      perPage: 2,
      perMove: 1,
      gap: "1em",
      breakpoints: {
        1233: {
          perPage: 2,
        },
        900: {
          perPage: 1,
        },
      },
    };
    return { options };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
body {
  margin: 0;
  background-color: white;
  font-family: "Poppins", sans-serif;
}
.testimoni-card {
  background: #f5f5f5;
}
.guest_trainer_text {
  font-weight: 600;
  font-size: 1rem;
  line-height: 140%;
  color: #023047;
}
.guest_trainer_company {
  display: flex;
  justify-content: center;
  align-items: end;
}
.guest_trainer_company img {
  margin-right: 1rem;
}
.guest_trainer_company p {
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #023047;
}

#jadwal_1,
#jadwal_2,
#jadwal_3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
#jadwal_2,
#jadwal_3 {
  margin-top: 1rem;
}
#jadwal_3 p {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.005em;
}
.jadwal_pilihan {
  background-color: #023047;
  color: white;
  width: 100px;
  height: 30px;
  font-weight: 600;
  font-size: 14px;
}
.jadwal_pilihan_3 {
  color: white;
  padding: 0.2rem 2rem;
  font-weight: 600;
  font-size: 14px;
  background-color: #023047;
}
.jadwal_container {
  display: flex;
  width: 100%;
}
.jadwal_container h5 {
  font-weight: 600;
  font-size: 19.8169px;
  letter-spacing: 0.005em;
}
.elemen1,
.elemen2,
.elemen3,
.elemen4,
.elemen5 {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 10px;
  width: 33.33%;
}
.elemen1 {
  background-color: #fecca7;
  border-radius: 8px 0 0 8px;
}
.elemen2 {
  background-color: #f7b79d;
}
.elemen3 {
  background-color: #bda79e;
}
.elemen4 {
  background-color: #ffddcc;
}
.elemen5 {
  background-color: #abbac2;
  border-radius: 0 8px 8px 0;
}
#main {
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
}

/* ADDITIONAL STYLING */
.bg-grey-custom {
  background-color: #f5f5f5;
}

.rounded-bottom-4 {
  box-shadow: 0 -20px #f5f5f5;
  border-radius: 0 0 1rem 1rem;
}
.accordion {
  width: 90%;
}
.accordion-button {
  font-size: 20px;
}
.accordion-body {
  font-size: 18px;
}
.accordion-button:focus {
  color: black !important;
  background-color: #e8e8e8 !important;
  box-shadow: none !important;
}
#first-section {
  display: flex;
  height: 80vh;
  width: 100%;
  padding: 2rem 6rem;
  background: rgb(252, 171, 151);
  background: linear-gradient(
    49deg,
    rgba(252, 171, 151, 1) 52%,
    rgba(255, 192, 176, 1) 83%
  );
  gap: 3rem;
}
.guest_trainer_text {
  font-weight: 600;
  font-size: 1rem;
  line-height: 140%;
  color: #023047;
}
.guest_trainer_company {
  display: flex;
  align-items: end;
}
.guest_trainer_company img {
  margin-right: 1rem;
}
.guest_trainer_company p {
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #023047;
}
#first-section #left {
  align-self: center;
  width: 60%;
}
#first-section h3 {
  font-size: 42px;
  font-weight: 600;
  color: #023047;
}
#first-section p {
  font-size: 18px;
  margin-bottom: 0;
  font-weight: 400;
  color: #02283b;
}
#first-section h6 {
  font-size: 40px;
  font-weight: 600;
  color: #023047;
}
#first-section .nb-text {
  margin-top: 12px;
  font-size: 10px;
  margin-bottom: 0;
  font-weight: 600;
  color: #02283b;
}

#first-section h4 {
  font-size: 28px;
  font-weight: 700;
  color: #ff5400;
}
.container-btn-daftar {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

#first-section #btnKonsul {
  width: 200px;
  background-color: #ff5400;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 10px;
  border-radius: 100px;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.4s;
}

#first-section #btnDaftar {
  width: 200px;
  background-color: #023047;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 10px;
  border-radius: 100px;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.4s;
}

#first-section #btnDaftar:hover {
  background-color: white;
  color: #023047;
  outline-color: #023047;
}

#first-section #right {
  display: flex;
  justify-content: center;
  align-self: center;
  width: 40%;
}

#first-section #right img {
  max-width: 450px;
  height: auto;
  width: 150%;
}

#second-section {
  display: flex;
  flex-direction: row;
  padding: 10px 7%;
}

#second-section #aside {
  flex: 10%;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 10px;
  height: 842px;
  margin-top: 40px;
  width: 270px;
  border-radius: 8px;
  border: 1px solid #c2c2c2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 32px;
  gap: 41px;
}

#aside {
  position: sticky;
  top: 0;
}

#second-section #aside a {
  font-size: 20px;
  color: #023047;
  cursor: pointer;
}

#second-section #aside a:hover {
  color: #ff5400;
}

#second-section #aside button {
  margin-top: 15px;
  width: 200px;
  background-color: #023047;
  font-size: 16px;
  font-weight: 600;
  padding: 18px 10px;
  border-radius: 100px;
  color: white;
  cursor: pointer;
}

#second-section #aside button:hover {
  background-color: white;
  color: #023047;
  outline-color: #023047;
}

#second-section #article {
  flex: 90%;
  display: flex;
  flex-direction: column;
  margin-left: 60px;
}

#article {
  display: flex;
  flex-direction: column;
  /* margin-right: 100px; */
  width: 800px;
  margin-right: 40px;
}

#article #tentangProgram,
#article #benefitProgram,
#article #kurikulum,
#article #tahapanProgram,
#article #mentor,
#article #biaya,
#article #jadwalProgram,
#article #alurPendaftaran,
#article #testimoni,
#article #faq {
  margin-top: 40px;
}

#article #tentangProgram #isi1 {
  display: flex;
  flex-direction: row;
}

#article #tentangProgram #isi2 {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-left: 80px;
}

#article #tentangProgram p {
  padding-left: 30px;
  text-align: justify;
}

#article #benefitProgram #isi {
  display: flex;
  flex-direction: row;
}

#article #benefitProgram #elemen {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-right: 50px;
  height: 150px;
}

#article #benefitProgram p {
  text-align: justify;
}

#article #benefitProgram img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-right: 20px;
}

#article #benefitProgram h5 {
  font-size: 20px;
  font-weight: 600;
  color: #ff5400;
}

#article #kurikulum {
  display: flex;
  flex-direction: column;
}

#article #kurikulum #isi {
  display: flex;
  flex-direction: row;
  font-size: 24px;
  border-radius: 8px;
  background-color: #f5f5f5;
  padding: 10px 15px;
  margin-bottom: 15px;
  /* width: 97%; */
  cursor: pointer;
}

#article #kurikulum img {
  position: absolute;
  width: 20px;
  height: 12px;
  object-fit: cover;
  margin-top: 15px;
  margin-left: 90%;
}

#article #tahapan-program {
  margin-top: 44px;
}

#article #tahapan-program .tahapan-container {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 16px;
}

#article #tahapan-program .tahapan-container .tahapan-item {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 26px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
}

#article #tahapan-program .tahapan-container .tahapan-item img {
  max-width: 100px;
  width: 100%;
  max-height: 100px;
  height: 100%;
}

#article #tahapan-program .tahapan-container .tahapan-item .tahapan-desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-mentor {
  height: 30em;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
}
#article #mentor h5 {
  font-size: 24px;
  color: #ff5400;
  font-weight: bold;
  margin: 10px;
}
#article #mentor p {
  font-weight: 500;
}
#article #mentor #linkedin {
  width: 44px;
  height: 44px;
  object-fit: cover;
}

#article #biaya #isi {
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  padding: 15px 32px 20px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  margin-right: 10px;
}

#article #biaya #information p {
  text-align: center;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  color: #023047;
  margin: 0;
}

#article #biaya #information h5 {
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
  color: #023047;
}

#article #biaya #information button {
  align-self: center;
  width: 320px;
  background-color: #023047;
  font-size: 12px;
  font-weight: 600;
  /* margin: 0 30%; */
  padding: 18px 10px;
  border-radius: 100px;
  color: white;
  cursor: pointer;
}

#article #biaya #information .text-price {
  font-weight: bold;
  margin: 10px 0;
  color: #ff5400;
  font-size: 26px;
}

#article #biaya #information .text-discount {
  color: #ff5400;
  font-size: 12px;
  margin-top: 10px;
}

#alurPendaftaran #isi {
  display: flex;
  flex-direction: row;
}
#alurPendaftaran #elemen1,
#alurPendaftaran #elemen2,
#alurPendaftaran #elemen3 {
  flex: 33%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 15px;
}

#alurPendaftaran #elemen1 {
  background-color: #ffc6aa;
  border-radius: 8px 0 0 8px;
}

#alurPendaftaran #elemen2 {
  background-color: #abbac2;
}

#alurPendaftaran #elemen3 {
  background-color: #ddfaa3;
  border-radius: 0 8px 8px 0;
}

#alurPendaftaran p {
  font-size: 20px;
}

#alurPendaftaran h5 {
  margin: 10px 0;
  font-size: 20px;
  font-weight: 700;
}

#alurPendaftaran #detail {
  text-align: justify;
}

#article #faq {
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
}

#article #faq #isi {
  display: flex;
  flex-wrap: wrap;
  font-size: 24px;
  border-radius: 8px;
  background-color: #f5f5f5;
  padding: 10px 15px;
  margin-bottom: 15px;
  /* width: 97%; */
  cursor: pointer;
}

#article #faq img {
  position: absolute;
  width: 20px;
  height: 12px;
  object-fit: cover;
  margin-top: 15px;
  margin-left: 90%;
}
/* jadwal */
#article #jadwalProgram #isi {
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  justify-content: center;
}

#article #jadwalProgram #elemen1,
#article #jadwalProgram #elemen2,
#article #jadwalProgram #elemen3,
#article #jadwalProgram #elemen4,
#article #jadwalProgram #elemen5 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 15px;
  text-align: center;
  width: 33.33%;
}

#article #jadwalProgram #elemen1 {
  background-color: #fecca7;
  border-radius: 8px 0 0 8px;
}

#article #jadwalProgram #elemen2 {
  background-color: #f7b79d;
}

#article #jadwalProgram #elemen3 {
  background-color: #bda79e;
  border-radius: 0 8px 8px 0;
}

#article #jadwalProgram #elemen4 {
  background-color: #ffddcc;
  border-radius: 0 8px 8px 0;
}

#article #jadwalProgram #elemen5 {
  background-color: #abbac2;
  border-radius: 0 8px 8px 0;
}

#article #jadwalProgram #desc {
  text-align: justify;
}

#article #jadwalProgram p {
  text-align: center;
  font-size: 20px;
}

#article #jadwalProgram p span {
  font-weight: 600;
}

#article #jadwalProgram h5 {
  margin: 10px 0;
  font-size: 20px;
  font-weight: 700;
}

#article #jadwalProgram #detail {
  text-align: center;
}

/* Alur Pendaftaran */
.alur-mobile {
  margin-bottom: 40px;
}
.line-container {
  position: relative;
}
.line-1,
.line-2 {
  background-color: #ff5400;
  width: 220px;
  height: 1px;
  position: absolute;
  top: 15px;
}
.line-1 {
  left: 480px;
}
.line-2 {
  left: 180px;
}

#article h4 {
  /* margin-top: 40px; */
  font-size: 26px;
  font-weight: 600;
  color: #ff5400;
}

#article h3 {
  font-size: 32px;
  font-weight: 700;
  color: #023047;
}
.card {
  border-radius: 16px;
  padding: 16px;
  height: 100%;
  width: 400px;
}
.card-judul {
  display: flex;
  align-items: center;
}
.card-title {
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #050810;
}
.card-subtitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #848484;
}
.card-pic1 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 80%;
}
.card-pic1 img {
  width: 60px;
  height: 60px;
}
.card-rating {
  font-weight: 500;
  font-size: 15px;
  color: #050810;
  display: flex;
  gap: 2px;
  width: 20%;
}
.card-text {
  margin-top: 18px;
  font-weight: 400;
  font-size: 15px;
  color: #050810;
}

.star {
  width: 24px;
  height: 24px;
}

.text-rating {
  margin-top: 4px;
}

.pic1 {
  width: 52px;
  border-radius: 100%;
}

.wrapper__splide {
  height: 2em;
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
  width: 100%;
}

.splide__arrows {
  position: relative;
  display: flex;
  align-items: center;
}

.splide__arrow {
  position: static !important;
  transform: translateY(0) !important;
  margin-right: 8px;
}

.splide__arrow--next,
.splide__arrow--prev {
  color: #f94f25;
  background-color: #fedcd3 !important;
}
.splide__arrow--next :hover {
  opacity: 2;
}
.splide__pagination {
  position: static !important;
  justify-content: start !important;
}
.margin-0 {
  margin: 0;
}

@media only screen and (max-width: 1500px) {
  #first-section p,
  h6 {
    font-size: 16px;
    width: 550px;
  }
  #second-section #aside {
    width: 240px;
    padding: 32px;
    gap: 41px;
  }

  #second-section #aside a {
    font-size: 18px;
  }

  #second-section #aside button {
    width: 170px;
  }

  #second-section #article {
    margin-left: 40px;
  }

  #article {
    width: 60%;
  }

  .img-biaya-kiri,
  .img-biaya-kanan {
    width: 150px; /* ukuran maksimum gambar */
    object-fit: cover; /* gambar akan diperbesar atau diperkecil untuk mengisi seluruh area */
    object-position: center; /* gambar akan diatur pada posisi tengah area */
  }
}
@media only screen and (max-width: 1300px) {
  .line-1,
  .line-2 {
    display: none;
  }
}

@media only screen and (max-width: 1100px) {
  #first-section {
    padding-left: 70px;
    padding: 0 70px;
  }

  #first-section h3 {
    font-size: 28px;
  }

  #first-section h4 {
    font-size: 24px;
  }

  #first-section p,
  h6 {
    font-size: 16px;
    width: 430px;
  }

  #article #benefitProgram #elemen {
    height: 160px;
  }

  #article #benefitProgram p {
    font-size: 12px;
    text-align: justify;
  }

  #article #benefitProgram h5 {
    font-size: 18px;
  }

  #article #tentangProgram img {
    width: 235px;
    height: 181px;
    object-fit: cover;
  }

  .accordion-button {
    font-size: 18px;
  }

  .accordion-body {
    font-size: 16px;
  }

  #article #biaya #information button {
    width: 320px;
    /* margin-left: 150px; */
  }

  .img-biaya-kiri {
    display: none;
  }

  .img-biaya-kanan {
    width: 150px;
  }

  .dropdown:hover {
    margin-bottom: 170px;
  }
}

@media only screen and (max-width: 990px) {
  #first-section button {
    padding: 7px 5px !important;
  }
  #article #jadwalProgram #elemen1,
  #article #jadwalProgram #elemen2,
  #article #jadwalProgram #elemen3,
  #article #jadwalProgram #elemen4,
  #article #jadwalProgram #elemen5 {
    width: 100%;
    text-align: center;
  }
  .alur-mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .line-1,
  .line-2 {
    display: none;
  }

  #first-section {
    height: 480px;
    padding: 0 70px;
  }

  #first-section h3 {
    font-size: 28px;
  }

  #first-section h4 {
    font-size: 22px;
  }

  #first-section p,
  h6 {
    font-size: 14px;
    width: 310px;
  }

  #first-section h4 {
    font-size: 18px;
  }

  #first-section button {
    font-size: 18px;
  }
  #second-section #aside {
    padding: 20px 18px;
    height: 900px;
  }

  #second-section #aside a {
    font-size: 16px;
    margin-top: 12px;
  }

  #second-section #aside button {
    margin-top: 12px;
    width: 160px;
    font-size: 16px;
  }

  #second-section #article {
    margin-left: 40px;
  }

  #article #tentangProgram #isi1 {
    display: flex;
    flex-direction: column;
  }

  #article #tentangProgram #isi2 {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }

  #article #tentangProgram p {
    padding-left: 0;
    padding-top: 12px;
  }

  #article #benefitProgram img {
    width: 56px;
    height: 56px;
  }

  #article #benefitProgram #isi {
    display: flex;
    flex-direction: column;
  }

  #article #benefitProgram #elemen {
    height: 120px;
  }

  #article #biaya #information h5 {
    font-size: 28px;
  }

  #article #biaya #information button {
    width: 320px;
    /* margin-left: 0; */
  }

  #article p,
  #article #tahapanProgram p,
  #article #alurPendaftaran p {
    font-size: 14px;
  }

  #article #jadwalProgram p {
    font-size: 20px;
    text-align: center;
  }

  #article #jadwalProgram h5,
  #article #alurPendaftaran h5 {
    margin-top: 0px;
    font-size: 18px;
  }

  #article h4 {
    /* margin-top: 40px; */
    font-size: 20px;
    font-weight: 600;
    color: #ff5400;
  }
  #article h3 {
    font-size: 22px;
    font-weight: 700;
    color: #023047;
  }
  #article #biaya #isi {
    padding: 15px;
    display: block;
    text-align: center;
  }

  .img-biaya-kiri {
    display: none;
  }

  .img-biaya-kanan {
    display: block;
    width: 150px;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 720px) {
  .guest_trainer_company {
    flex-direction: column;
    align-items: center;
  }
  .guest_trainer_company div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .jadwal_container {
    flex-direction: column;
  }
  .elemen1,
  .elemen2,
  .elemen3,
  .elemen4,
  .elemen5 {
    width: 100%;
  }
  .elemen1 {
    border-radius: 8px 8px 0 0;
  }
  .elemen5 {
    border-radius: 0 0 8px 8px;
  }
  #first-section {
    padding: 100px 7%;
    display: flex;
    flex-direction: column;
    height: auto;
  }
  #first-section #left {
    text-align: center;
    width: 100%;
  }

  #first-section #left p {
    margin: 0 auto;
  }

  .container-btn-daftar {
    justify-content: center;
  }
  #first-section #left .nb-text {
    margin: 10px auto;
    font-size: 7px;
  }

  #first-section #right {
    width: 50%;
    display: none;
  }

  #first-section #right img {
    width: 150%;
  }

  #jadwalProgram #isi div p,
  #jadwalProgram #isi div h5 {
    margin: 0 auto 10px;
  }

  #biaya #isi {
    display: flex;
    flex-direction: column;
  }

  .img-biaya-kiri {
    display: none;
  }

  .img-biaya-kanan {
    display: block;
    width: 150px;
    margin: 0 auto;
  }

  .card-mentor p {
    font-size: 12px;
  }

  .card-mentor img {
    width: 50%;
  }
}
@media only screen and (max-width: 700px) {
  .card {
    height: 100%;
    width: 100%;
  }
  #first-section {
    padding: 2rem;
  }

  #first-section h3 {
    font-size: 18px;
  }

  #first-section h4 {
    font-size: 16px;
  }

  #first-section p,
  h6 {
    font-size: 14px;
    width: 270px;
  }

  #first-section h4 {
    font-size: 16px;
  }

  #first-section button {
    font-size: 16px;
    padding: 9px 5px;
    width: 170px;
  }

  /* #first-section img {
        margin-top: 230px;
        width: 300px;
        height: 415px;
        object-fit: cover;
    } */
  #second-section {
    flex-direction: column;
  }

  #second-section #aside {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px;
    padding: 5px 9px;
    height: 260px;
    gap: 8px;
  }

  #second-section #aside a {
    font-size: 14px;
    margin-top: 10px;
  }

  #second-section #aside button {
    margin-top: 12px;
    width: 130px;
    font-size: 14px;
    padding: 5px 3px;
  }

  #second-section #article {
    width: 100%;
    padding: 5px 9px;
  }

  #article #tentangProgram,
  #article #benefitProgram,
  #article #kurikulum,
  #article #tahapanProgram,
  #article #mentor,
  #article #biaya,
  #article #jadwalProgram,
  #article #alurPendaftaran,
  #article #testimoni,
  #article #faq {
    margin-top: 20px;
  }

  #second-section #article {
    margin: 0;
  }

  #article #tentangProgram #isi1 {
    display: flex;
    flex-direction: column;
  }

  #article #tentangProgram #isi2 {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }

  #article #tentangProgram p {
    padding-left: 0;
  }

  #article #benefitProgram #isi {
    display: flex;
    flex-direction: column;
  }

  #article #biaya #information h5 {
    font-size: 18px;
  }

  #article #biaya #information button {
    width: 200px;
    /* margin-left: 10%; */
  }

  #article #biaya,
  #jadwalProgram,
  #alurPendaftaran {
    width: 95%;
  }

  #elemen1,
  #elemen2,
  #elemen3,
  #elemen4,
  #elemen5 {
    border-radius: 8px;
  }

  #article #jadwalProgram #isi,
  #article #alurPendaftaran #isi {
    display: flex;
    flex-direction: column;
  }

  #article h4 {
    /* margin-top: 40px; */
    font-size: 16px;
    font-weight: 600;
  }

  #article h3 {
    font-size: 18px;
    font-weight: 700;
  }

  #article p {
    font-size: 14px;
  }

  .dropdown:hover {
    margin-bottom: 200px;
  }
}
@media only screen and (max-width: 550px) {
  .guest_trainer_company div {
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .guest_trainer_company img {
    width: 50px;
    height: auto;
  }
  #first-section #left {
    width: 100%;
  }
  #first-section #left h3 {
    font-size: 32px;
  }
  #first-section #left p {
    font-size: 16px;
    width: 95%;
  }
  #first-section #left h6 {
    font-size: 10px;
    width: 200px;
  }
  #first-section #left #harga {
    margin-top: 18px;
  }
  #first-section #left h4 {
    font-size: 22px;
  }
  #first-section #left h5 {
    font-size: 16px;
  }
  #first-section #left button {
    margin-top: 0%;
    font-size: 14px;
    padding: 15px;
    width: fit-content;
  }
  #first-section #left .nb-text {
    font-size: 10px;
  }

  #first-section #right {
    display: none;
  }

  #second-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 7%;
  }

  #article #tentangProgram #isi1 {
    display: flex;
    flex-direction: column;
  }

  #article #tentangProgram #isi2 {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }

  #article #tentangProgram img {
    width: 80%;
  }

  #article #tentangProgram p {
    padding-left: 0;
  }

  #article #benefitProgram #isi {
    display: flex;
    flex-direction: column;
  }

  #article #benefitProgram #elemen {
    margin-top: 10px;
  }

  #article #benefitProgram h5 {
    font-size: 14px;
  }
  .accordion-button {
    font-size: 14px;
  }
  .accordion-body {
    font-size: 12px;
  }
  #article #benefitProgram p {
    font-size: 10px;
  }
  #article #benefitProgram img {
    width: 46px;
    height: 46px;
    object-fit: cover;
  }
  #article #kurikulum #isi,
  #article #faq #isi {
    width: 80%;
  }
  #article #kurikulum img,
  #article #faq img {
    width: 12px;
    height: 7px;
    margin-left: 85%;
  }

  #article #biaya #information h5 {
    font-size: 14px;
  }

  #article #biaya #information button {
    width: 150px;
  }
  #article #jadwalProgram #isi,
  #article #alurPendaftaran #isi {
    display: flex;
    flex-direction: column;
  }
  #article #mentor #elemen {
    min-width: 200px;
    margin-right: 10px;
  }
  #article #mentor img {
    width: 70%;
  }

  #article h4 {
    width: 80%;
    font-size: 16px;
    font-weight: 600;
  }

  #article h3 {
    font-size: 18px;
    font-weight: 700;
  }

  #article #tahapanProgram p {
    font-size: 12px;
  }
  .card-pic1 img {
    width: 50px;
    height: 50px;
  }
  .card-name h5,
  .card-name h6 {
    font-size: 12px;
  }
  .splide__arrow {
    width: 22px;
    height: 22px;
    transform: translateY(0) !important;
  }
  .splide__arrow--next,
  .splide__arrow--prev {
    width: 22px !important;
    height: 22px;
  }
}
@media only screen and (max-width: 420px) {
  .tahapan-item img {
    display: none;
  }
  #second-section #aside a {
    font-size: 9px;
    margin-top: 7px;
  }

  #second-section #aside button {
    margin-top: 8px;
    width: 80px;
    font-size: 5px;
    padding: 5px 3px;
  }

  #article #tentangProgram,
  #article #benefitProgram,
  #article #kurikulum,
  #article #tahapanProgram,
  #article #mentor,
  #article #biaya,
  #article #jadwalProgram,
  #article #alurPendaftaran,
  #article #testimoni,
  #article #faq {
    margin-top: 15px;
  }

  #article #tentangProgram #isi1 {
    display: flex;
    flex-direction: column;
  }

  #article #tentangProgram #isi2 {
    display: flex;
    flex-direction: column;
    padding-left: 0;
  }

  #article #tentangProgram img {
    height: 60%;
    width: 60%;
  }

  #article #tentangProgram p {
    width: 85%;
  }

  #article #benefitProgram #isi {
    display: flex;
    flex-direction: column;
  }

  #article #benefitProgram #elemen {
    margin-top: 10px;
  }

  #article #benefitProgram h5 {
    font-size: 12px;
  }

  .accordion-button {
    font-size: 12px;
  }

  .accordion-body {
    font-size: 10px;
  }

  #article #benefitProgram img {
    width: 26px;
    height: 26px;
    object-fit: cover;
  }

  #article #kurikulum #isi,
  #article #faq #isi,
  .dropdown-content {
    width: 80%;
  }

  #article #kurikulum img,
  #article #faq img {
    width: 10px;
    height: 5px;
    margin-left: 60%;
  }
  #article #tahapanProgram h5 {
    font-size: 9px;
  }

  #article #tahapanProgram #isi {
    width: 90%;
  }

  #article #tahapanProgram #isi p {
    width: 100%;
    font-size: 8px;
  }

  #article #mentor img {
    height: 60px;
    width: 60px;
  }

  #article #mentor h5 {
    font-size: 12px;
  }

  #article #mentor #linkedin {
    width: 20px;
    height: 20px;
  }

  #article #biaya #isi {
    padding: 15px;
    display: block;
    text-align: center;
    /* width: 95%; */
  }

  #article #biaya #information p {
    font-size: 8px;
  }

  #article #biaya #information h5 {
    font-size: 10px;
  }

  #article #biaya #information button {
    font-size: 8px;
    width: 120px;
    /* margin: 0 10%; */
    padding: 9px 5px;
  }

  #article #biaya #information .text-discount {
    color: #ff5400;
    font-size: 8px;
    margin-top: 10px;
  }
  #article #jadwalProgram p,
  #article #alurPendaftaran p {
    font-size: 8px;
  }

  #article #jadwalProgram h5,
  #article #alurPendaftaran h5 {
    font-size: 12px;
  }

  #article #jadwalProgram #isi,
  #article #alurPendaftaran #isi {
    display: flex;
    flex-direction: column;
  }

  #article #mentor #elemen {
    min-width: 160px;
    margin-right: 10px;
  }

  #article #mentor img {
    height: 100px;
    width: 100px;
  }

  #article #faq {
    margin-bottom: 50px;
  }

  #article h4 {
    width: 90%;
    /* margin-top: 15px; */
    font-size: 10px;
    font-weight: 600;
  }

  #article h3 {
    width: 90%;
    font-size: 12px;
    font-weight: 700;
  }

  #article #tahapanProgram p {
    font-size: 12px;
  }

  #article p {
    font-size: 8px;
    width: 100%;
  }
  .splide__arrow--next,
  .splide__arrow--prev {
    width: 14px !important;
    height: 14px;
  }

  .wrapper__splide {
    margin-top: 8px;
  }

  .card-mentor {
    height: 260px;
  }

  .card-mentor p {
    margin-bottom: 6px;
  }

  .img-biaya-kanan {
    display: block;
    width: 100px;
    margin: 0 auto;
  }
}
</style>
