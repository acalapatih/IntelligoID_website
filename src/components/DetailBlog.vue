<template>
    <div class="detail-blog">
        <NavbarComp />
        <div class="container mt-5" id="border-con">
            <div class="detailblog-in">
                <img class="img-detailblog" :src="blog.image" alt="" />
                <h1>{{ blog.title }}</h1>
                <h5>Category</h5>
                <div v-html="blog.description"></div>
            </div>
        </div>
        <div class="container mt-5">
            <h1 class="txt-recom">Rekomendasi Artikel Lain</h1>
            <div class="row mt-3">
                <!-- card 1 -->
                <div class="col-md-4 mb-3">
                    <div class="card rouded-none">
                        <img class="card-img-top" src="../assets/cardblog1.png" alt="blog 1" />
                        <div class="card-body">
                            <h5 class="card-title" id="card-title-blog">Lorem ipsum dolor sit amet</h5>
                            <h5 class="card-category" id="card-category-blog">Category</h5>
                            <p class="card-text-db" id="card-text-blog">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                                mauris massa. Netus magna elementum in mattis. In amet aliquam
                                quis nulla nulla interdum. In testing ullamcorper phare testing...
                            </p>
                            <div class="text-center" id="button">
                                <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- card 2 -->
                <div class="col-md-4 mb-3">
                    <div class="card rouded-none">
                        <img class="card-img-top" src="../assets/cardblog4.png" alt="blog 4" />
                        <div class="card-body">
                            <h5 class="card-title" id="card-title-blog">Lorem ipsum dolor sit amet</h5>
                            <h5 class="card-category" id="card-category-blog">Category</h5>
                            <p class="card-text-db" id="card-text-blog">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                                mauris massa. Netus magna elementum in mattis. In amet aliquam
                                quis nulla nulla interdum. In ullamcorper phare...
                            </p>
                            <div class="text-center" id="button">
                                <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- card 3 -->
                <div class="col-md-4 mb-3">
                    <div class="card rouded-none">
                        <img class="card-img-top" src="../assets/cardblog5.png" alt="blog 5" />
                        <div class="card-body">
                            <h5 class="card-title" id="card-title-blog">Lorem ipsum dolor sit amet</h5>
                            <h5 class="card-category" id="card-category-blog">Category</h5>
                            <p class="card-text-db" id="card-text-blog">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                                a auctor sed suspendisse ultrices. Non augue sed aliquam dolor
                                tortor, volutpat tincidunt nibh est. Lobortis leo urna vitae id
                                mauris massa. Netus magna elementum in mattis. In amet aliquam
                                quis nulla nulla interdum. In ullamcorper phare...
                            </p>
                            <div class="text-center" id="button">
                                <a href="#" class="btn btn-primary"> Baca selengkapnya </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterComp />
    </div>
</template>

<script>
    import NavbarComp from "../components/NavbarComp.vue";
    import FooterComp from "../components/FooterComp.vue";
    export default {
        name: `DetailBlog`,
        components: {
            NavbarComp,
            FooterComp,
        },
        data () {
            return {
                id      : this.$route.query.blog,
                blog    : {}
            }
        },
        methods : {
            fungsiLoadBlog : async function () {
                this.blog = (await this.$api.get(`/blog/${this.id}`)).data.data
            }
        },
        mounted () {
            this.fungsiLoadBlog()
        }
    };
</script>

<style>
    #border-con {
        box-sizing: border-box;
        background: #ffffff;
        border: 1px solid #ff5400;
        border-radius: 20px;
    }

    .detailblog-in {
        box-sizing: border-box;
        padding: 7% 7%;
    }

    .img-detailblog {
        box-sizing: border-box;
        width: 100%;
        padding-bottom: 30px;
    }

    .detail-blog h1 {
        font-family: "Poppins";
        font-weight: 600;
        font-size: 32px;
        color: #000;
    }

    .detail-blog h5 {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
        color: #000000;
    }

    .detail-blog p {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.005em;
        color: #000000;
        text-align: justify;
    }

    .txt-recom {
        text-align: center;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 140%;
        letter-spacing: 0.005em;
        color: #000000;
    }

    #card-category-blog {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #023047;
    }

    #card-text-blog {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #0a0a0a;
    }
</style>
