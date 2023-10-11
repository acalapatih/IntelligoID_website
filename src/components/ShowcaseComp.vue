<template>
  <div class="showcase">
    <NavbarComp />
    <!-- <div id="headerSection">
      <div id="leftHeader">
        <h1>{{ showcase.section.title }}</h1>
        <h2 v-html="showcase.section.description"></h2>
      </div>
      <div id="rightHeader">
        <img :src="showcase.section.image" />
      </div>
    </div>
    <div class="container-2 mt-5">
      <div class="row g-3">
        <div class="col-md" id="cekot">
          <select
            class="form-select"
            id="cekit"
            aria-label="Default select example"
            v-model="filter.sort" @change="fungsiLoadShowCase(`keyword=${filter.keyword}&category=${filter.category}&sort=${filter.sort}`)"
          >
            <option value="DESC" selected>Terbaru</option>
            <option value="ASC">Terakhir</option>
          </select>
        </div>
        <div class="col-md">
          <select
            class="form-select"
            id="cekit"
            aria-label="Default select example"
            v-model="filter.category" @change="fungsiLoadShowCase(`keyword=${filter.keyword}&category=${filter.category}&sort=${filter.sort}`)"
          >
            <option value="">Semua Kategori</option>
            <option :value="item.id" v-for="(item , index) in category" :key="index">{{ item.name }}</option>
          </select>
        </div>
        <div class="col-md">
          <input class="form-control col-md" placeholder="Cari Portofolio" v-model="filter.keyword" @change="fungsiLoadShowCase(`keyword=${filter.keyword}&category=${filter.category}&sort=${filter.sort}`)" />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-4 mb-3" v-for="(item , index) in showcase.list.data" :key="index">
          <div class="card rouded-none">
            <div class="bg-image" :style="`background-image : url(${item.image})`"></div>
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                {{ item.title }}
              </h5>
              <h5 class="card-category">
                {{ item.name }}
              </h5>
              <p class="card-text" v-html="item.description"></p>
              <div class="text-center" id="button">
                <router-link :to="`/detail-showcase?show=${item.id}&show_name=${item.title.replaceAll(' ','-')}`">
                  <a href="#" class="btn btn-primary"> Lihat Showcase </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-3 mt-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item"><a class="page-link" @click="fungsiLoadShowCase(`page=${showcase.list.total_page}`)" href="javascript:void()" v-for="(item , index) in showcase.list.total_page" :key="index">{{ index + 1 }}</a></li>
          </ul>
        </nav>
      </div>
    </div> -->

    <div id="headerSection">
      <div class="LeftHeader">
        <h1>Project Showcase</h1>
        <h2>
          Halo Sobat Mintell, berikut kami mempersembahkan showcase dan portofolio dari beberapa Alumni Bootcamp yang telah bergabung bersama kami. Ayo, jangan lewatkan kesempatan ini untuk melihat karya-karya mereka yang luar biasa!<br> Terima kasih dan selamat menikmati!
        </h2>
      </div>
      <div class="rightHeader">
        <img src="../assets/Maskot_Showcase.png" />
      </div>
    </div>

    <div class="container-2 mt-5">
      <div class="row g-3">
        <div class="col-md" id="cekot">
          <select
            class="form-select"
            id="cekit"
            aria-label="Default select example"
          >
            <option selected>Terbaru</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-md">
          <select
            class="form-select"
            id="cekit"
            aria-label="Default select example"
          >
            <option selected>Semua Kategori</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col-md">
          <input class="form-control col-md" placeholder="Cari Portofolio" />
        </div>
      </div>

      <div class="row mt-5 mx-0">
        <!-- card 1 -->
        <div class="col-md-4 mb-3">
          <div class="card rouded-none">
            <img
              class="card-img-top"
              src="../assets/showcase1.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">
                Terry Dias
                <span class="card-item">&#40;Web Development&#41;</span>
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est.
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-showcase">
                  <a href="#" class="btn btn-primary"> Lihat Showcase </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- card 2 -->
        <div class="col-md-4 mb-3">
          <div class="card rouded-none">
            <img
              class="card-img-top"
              src="../assets/showcase2.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">
                Martin Donin
                <span class="card-item">&#40;Web Development&#41;</span>
              </h5>
              <p class="card-text">               
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est.
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-showcase">
                  <a href="#" class="btn btn-primary"> Lihat Showcase </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- card 3 -->
        <div class="col-md-4 mb-3">
          <div class="card rouded-none">
            <img
              class="card-img-top"
              src="../assets/showcase3.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">
                Tatiana Franci
                <span class="card-item">&#40;Data Science&#41;</span>
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est.
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-showcase">
                  <a href="#" class="btn btn-primary"> Lihat Showcase </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- card 4 -->
        <div class="col-md-4 mb-3">
          <div class="card rouded-none">
            <img
              class="card-img-top"
              src="../assets/showcase4.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">
                Livia Press
                <span class="card-item">&#40;Data Science&#41;</span>
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est.
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-showcase">
                  <a href="#" class="btn btn-primary"> Lihat Showcase </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- card 5 -->
        <div class="col-md-4 mb-3">
          <div class="card rouded-none">
            <img
              class="card-img-top"
              src="../assets/showcase5.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">
                Brandon Vaccaro
                <span class="card-item">&#40;Data Science&#41;</span>
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est.
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-showcase">
                  <a href="#" class="btn btn-primary"> Lihat Showcase </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- card 6 -->
        <div class="col-md-4 mb-3">
          <div class="card rouded-none">
            <img
              class="card-img-top"
              src="../assets/showcase6.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">
                Charlie Sipon
                <span class="card-item">&#40;Web Development&#41;</span>
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est.
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-showcase">
                  <a href="#" class="btn btn-primary"> Lihat Showcase </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- card 7 -->
        <div class="col-md-4 mb-3">
          <div class="card rouded-none">
            <img
              class="card-img-top"
              src="../assets/showcase7.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">
                Craig Ekstrom B
                <span class="card-item">&#40;Data Science&#41;</span>
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est.
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-showcase">
                  <a href="#" class="btn btn-primary"> Lihat Showcase </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- card 8 -->
        <div class="col-md-4 mb-3">
          <div class="card rouded-none">
            <img
              class="card-img-top"
              src="../assets/showcase8.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">
                Tiana Saris
                <span class="card-item">&#40;Data Science&#41;</span>
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est.
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-showcase">
                  <a href="#" class="btn btn-primary"> Lihat Showcase </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- card 9 -->
        <div class="col-md-4 mb-3">
          <div class="card rouded-none">
            <img
              class="card-img-top"
              src="../assets/showcase9.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">
                Ashlynn Torff
                <span class="card-item">&#40;Data Science&#41;</span>
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est.
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-showcase">
                  <a href="#" class="btn btn-primary"> Lihat Showcase </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-3 mt-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center w-100 flex-wrap">
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">6</a></li>
            <li class="page-item"><a class="page-link" href="#">7</a></li>
            <li class="page-item"><a class="page-link" href="#">...</a></li>
            <li class="page-item"><a class="page-link" href="#">50</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <FooterComp />
  </div>
</template>

<script>
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";
export default {
  name: `ShowcaseComp`,
  components: {
    NavbarComp,
    FooterComp,
  },
  data() {
    return {
      showcase: {
        section: {},
        list: [],
      },
      filter: {
        sort: "DESC",
        category: "",
        keyword: "",
      },
      category: [],
    };
  },
  methods: {
    fungsiLoadShowCase: async function (url = "") {
      this.showcase = (await this.$api.get(`/showcase?${url}`)).data.data;
    },
    fungsiLoadCategory: async function () {
      this.category = (await this.$api.get(`/showcase-category`)).data.data;
    },
  },
  mounted() {
    this.fungsiLoadShowCase();
    this.fungsiLoadCategory();
  },
};
</script>

<style scoped>
#headerSection {
  display: flex;
  justify-content: space-between;
  padding: 0 6rem;
  gap: 4rem;
  background-color: #f5f5f5;
}
.LeftHeader {
  text-align: justify;
  flex: 70%;
}
.LeftHeader h1 {
  font-size: 2rem;
  font-weight: 600;
  color: #ff5400;
}
.LeftHeader h2 {
  margin-top: 1.5rem;
  font-size: 1.625rem;
  font-weight: 400;
  color: #023047;
}
.rightHeader {
  flex: 30%;
}
.rightHeader img {
  width: 100%;
  height: auto;
}
.showcase .card {
  height: 100%;
  width: 100%;
}
.showcase .card-title {
  font-family: "Poppins";
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 140%;
  letter-spacing: 0.005em;
  color: #ff5400;
}
.showcase .card-category {
  font-family: "Poppins";
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 150%;
  letter-spacing: 0.005em;
  color: #023047;
}
.showcase .card-item {
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 150%;
  letter-spacing: 0.005em;
  color: #023047;
}
#cekit, #cekot {
  color: #ff5400;
}
.bg-image {
  width: 100%;
  height: 300px;
  background-size: cover;
}

@media only screen and (max-width: 1200px) {
  #headerSection {
    padding: 0 4rem;
    gap: 2rem;
  }
  .LeftHeader h1 {
    font-size: 2rem;
  }
  .LeftHeader h2 {
    font-size: 1.3rem;
  }
  .showcase .card-title {
    font-size: 1.125rem;
  }
  .showcase .card-category {
    font-size: 1.125rem;
  }
  .showcase .card-item {
    font-size: 1rem;
    line-height: 100%;
  }
}

@media only screen and (max-width: 900px) {
  #headerSection {
    padding: 1rem 2rem 0;
    gap: 0;
  }
}

@media only screen and (max-width: 800px) {
  #headerSection {
    flex-direction: column;
    padding: 2rem 2rem 0;
  }
}

@media only screen and (max-width: 400px) {
  .LeftHeader h1 {
    font-size: 1.5rem;
  }
  .LeftHeader h2 {
    font-size: 1rem;
  }
}
</style>
