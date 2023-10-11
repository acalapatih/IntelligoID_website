<template>
  <div class="blog">
    <NavbarComp />
    <!-- <div id="headerSection">
      <div id="leftHeader">
        <h1>{{ blog.section.title }}</h1>
        <h2 v-html="blog.section.description"></h2>
      </div>
      <div id="rightHeader">
        <img :src="blog.section.image" />
      </div>
    </div>
    <div class="container-2">
      <div class="row mt-5">
        <div class="col-md-4 mb-3" v-for="(item , index) in blog.list.data" :key="index">
          <div class="card rouded-none">
            <img
              class="card-img-top"
              :src="item.image"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                {{ item.title }}
              </h5>
              <h5 class="card-category">Category</h5>
              <p class="card-text" v-html="item.description"></p>
              <div class="text-center" id="button">
                <router-link :to="`/detail-blog?blog=${item.id}&blog_name=${item.title.replaceAll(' ','-')}`">
                  <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-3 mt-4">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item" v-for="(pagin , index) in blog.list.total_page" :key="index"><a class="page-link" href="javascript:void()" @click="fungsiLoadBlog(`?page=${index + 1}`)">{{ index + 1 }}</a></li>
          </ul>
        </nav>
      </div>
    </div> -->

    <div class="row m-0 d-flex justify-content-evenly" id="headerSection">
      <div class="leftHeader col-lg-5">
        <h1>Blog Intelligo.Id</h1>
        <h2>
          Hallo teman-teman! Berikut adalah konten blog kami yang berisi berbagai info menarik tentang dunia teknologi. <br />
          Yuk lihat !!!
        </h2>
      </div>
      <div class="rightHeader col-lg-5 text-center">
        <img src="../assets/picBlog.png" />
      </div>
    </div>

    <div class="container-2 mt-5">
      <div class="row mt-5 mx-0">
        <!-- card 1 -->
        <div class="col-md-4 mb-3">
          <div class="card rouded-none">
            <img
              class="card-img-top"
              src="../assets/cardblog1.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">Category</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                mauris massa. Netus magna elementum in mattis. In amet aliquam
                quis nulla nulla interdum. In ullamcorper phare...
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-blog">
                  <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
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
              src="../assets/cardblog2.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">Category</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                mauris massa. Netus magna elementum in mattis. In amet aliquam
                quis nulla nulla interdum. In ullamcorper phare...
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-blog">
                  <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
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
              src="../assets/cardblog3.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">Category</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                mauris massa. Netus magna elementum in mattis. In amet aliquam
                quis nulla nulla interdum. In ullamcorper phare...
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-blog">
                  <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
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
              src="../assets/cardblog4.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">Category</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                mauris massa. Netus magna elementum in mattis. In amet aliquam
                quis nulla nulla interdum. In ullamcorper phare...
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-blog">
                  <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
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
              src="../assets/cardblog5.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">Category</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                mauris massa. Netus magna elementum in mattis. In amet aliquam
                quis nulla nulla interdum. In ullamcorper phare...
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-blog">
                  <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
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
              src="../assets/cardblog6.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">Category</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                mauris massa. Netus magna elementum in mattis. In amet aliquam
                quis nulla nulla interdum. In ullamcorper phare...
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-blog">
                  <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
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
              src="../assets/cardblog7.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">Category</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                mauris massa. Netus magna elementum in mattis. In amet aliquam
                quis nulla nulla interdum. In ullamcorper phare...
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-blog">
                  <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
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
              src="../assets/cardblog8.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">Category</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                mauris massa. Netus magna elementum in mattis. In amet aliquam
                quis nulla nulla interdum. In ullamcorper phare...
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-blog">
                  <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
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
              src="../assets/cardblog9.png"
              alt="blog 1"
            />
            <div class="card-body">
              <h5 class="card-title" id="card-title-blog">
                Lorem ipsum dolor sit amet
              </h5>
              <h5 class="card-category">Category</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                mauris massa. Netus magna elementum in mattis. In amet aliquam
                quis nulla nulla interdum. In ullamcorper phare...
              </p>
              <div class="text-center" id="button">
                <router-link to="/detail-blog">
                  <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
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
  name: "BlogComp",
  components: {
    NavbarComp,
    FooterComp,
  },
  data() {
    return {
      blog: {
        section: {},
        list: {
          data: [],
        },
      },
    };
  },
  methods: {
    fungsiLoadBlog: async function (url = "") {
      this.blog = (await this.$api.get(`/blog${url}`)).data.data;
    },
  },
  mounted() {
    this.fungsiLoadBlog();
    this.$gtag.pageview();
  },
};
</script>

<style>
#headerSection {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
  background-color: #f5f5f5;
}
#headerSection .leftHeader {
  text-align: center;
}
#headerSection .leftHeader h1 {
  font-size: 32px;
  font-weight: 600;
  color: #ff5400;
}
#headerSection .leftHeader h2 {
  margin-top: 20px;
  font-size: 26px;
  font-weight: 400;
  color: #023047;
}
#headerSection .rightHeader img {
  margin-top: 30px;
  width: max-content;
  height: 377px;
}
.showcase .card-title {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0.005em;
  color: #ff5400;
}
.showcase .card-category {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.005em;
  color: #023047;
}
.showcase .card-item {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.005em;
  color: #023047;
}
#cekit {
  color: #ff5400;
}
#cekot {
  color: #ff5400;
}
.bg-image {
  width: 100%;
  height: 300px;
  background-size: cover;
}

.container-1 {
  padding: 100px 100px;
  margin-top: 5px;
  background: #f5f5f5;
}

.container-1 h1 {
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: #ff5400;
}

.container-1 p {
  text-align: center;
  /* font-family: "Poppins"; */
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #023047;
}

.container-2 {
  padding: 0px 100px;
}

#card-title-blog {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #ff5400;
}

.card-category {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #023047;
}

.card-text {
  text-align: justify;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #0a0a0a;
}

#button {
  background: #d44600;
  border-radius: 20px;
  border: none;
}

#button a {
  background: #d44600;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}

.page-item a {
  color: #848484;
}

@media only screen and (max-width: 1024px) {
  .navbar {
    margin: 1% 2% 0 2%;
  }
}

@media only screen and (max-width: 768px) {
  .container-2 {
    padding: 0px 11px;
  }

  #headerSection .leftHeader {
    margin-top: 138px;
    margin-bottom: -17px;
    /* margin-bottom: 10px; */
  }

  #headerSection .rightHeader img {
    width: 17rem;
  }
}
</style>
