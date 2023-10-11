<!-- Component terpisah yang dipake disini ada SidebarComp.vue dan TopbarComp.vue -->
<template>
    <NavbarComp :user="user" />
    <div id="main">
        <div class="header bg-jc bg-no-repeat bg-cover bg-right-top mx-8 d-flex rounded-3xl">
                <div class="w-auto h-full maskot-container">
                    <img src="../assets/pic-jc.png" class="rounded-bl-3xl md:w-min" alt="">
                </div>
                <div class="w-2/3 text-center text-[#023047] my-auto header-text-container">
                    <h1 class="font-bold text-4xl my-3">
                        Melamar Kerja Mudah Sampai Lolos Screening
                    </h1>
                    <h5 class="text-xl text-for-pc">
                        Persiapkan dirimu dan mulailah membangun karir melalui daftar pekerjaan impian yang sudah menunggumu di laman ini
                    </h5>
                    <h5 class="text-for-mobile hidden leading-8">
                        Yuk ikuti program bootcamp di intelligo dan dapatkan karir impianmu menjadi data scientist handal!
                    </h5>
                </div>
        </div>
        <div id="second-section flex justify-between ">
            <div class="filter-information mx-8 mt-20 mb-2 flex justify-between items-end">
               <TopbarComp @togglenav="navOpen = !navOpen" />
            </div>
            <div class="flex mx-8 gap-y-4">
                <div class="filter-container" v-bind:class="[navOpen ? 'filter-container-size' : 'filter-wrapper']">
                    <SidebarComp :open="navOpen" />
                </div>
                <div id="job-container" v-bind:class="[navOpen ? 'job-container-size': 'job-wrapper']">
                    <div id="list-job" class="flex flex-col gap-y-2">
                        <router-link to="/detail-job-connector">
                        <div class="job-card flex md:p-4 sm:p-2 bg-[#FEEBD4] rounded-xl border">
                            <div class="job-img w-28 ">
                                <img src="../assets/job/tokped.png" class="rounded-lg border-1" alt="">
                            </div>
                            <div class="job-information w-4/5 flex flex-col justify-center mx-8 gap-y-1">
                                <p class="m-0">Tokopedia, <span class="text-gray-400"><i>Ecommerce</i></span></p>
                                <div class="flex justify-content-between items-center w-full m-0">
                                    <p class="text-lg m-0">Jr. Data Scientiest</p>
                                    <p v-bind:class="[navOpen ? 'job-date-time-hidden': '']">WFA - Jakarta</p>
                                    <p class="date-hidden-for-mobile" v-bind:class="[navOpen ? 'job-date-time-hidden': '']">23 Nov</p>
                                </div>
                                <p class="m-0 text-sm">Fulltime</p>
                            </div>
                        </div>
                        </router-link>
                        <div class="job-card flex md:p-4 sm:p-2 bg-[#FEEBD4] rounded-xl border">
                            <div class="job-img w-28">
                                <img src="../assets/job/ruangguru.png" class="rounded-lg w-28 h-28 border-1" alt="">
                            </div>
                            <div class="job-information w-4/5 flex flex-col justify-center mx-8 gap-y-1">
                                <p class="m-0">Ruangguru, <span class="text-gray-400"><i>Pendidikan</i></span></p>
                                <div class="flex justify-between items-center w-full m-0">
                                    <p class="text-lg m-0">Data Scientiest</p>
                                    <p v-bind:class="[navOpen ? 'job-date-time-hidden': '']">WFA - Tanggerang</p>
                                    <p class="date-hidden-for-mobile" v-bind:class="[navOpen ? 'job-date-time-hidden': '']">20 Nov</p>
                                </div>
                                <p class="m-0 text-sm">Fulltime</p>
                            </div>
                        </div>
                        <div class="job-card flex md:p-4 sm:p-2 bg-[#FEEBD4] rounded-xl border">
                            <div class="job-img w-28 ">
                                <img src="../assets/job/intelligo.png" class="rounded-lg w-28 h-28 border-1" alt="">
                            </div>
                            <div class="job-information w-4/5 flex flex-col justify-center mx-8 gap-y-1">
                                <p class="m-0">Intelligo ID, <span class="text-gray-400"><i>Pendidikan</i></span></p>
                                <div class="flex justify-content-between items-center w-full m-0">
                                    <p class="text-lg m-0">Jr. Data Scientiest</p>
                                    <p v-bind:class="[navOpen ? 'job-date-time-hidden': '']">WFA - Bandung</p>
                                    <p class="date-hidden-for-mobile" v-bind:class="[navOpen ? 'job-date-time-hidden': '']">15 Nov</p>
                                </div>
                                <p class="m-0 text-sm">Fulltime</p>
                            </div>
                        </div>
                        <div class="job-card flex md:p-4 sm:p-2 bg-[#FDFDFD] rounded-xl border">
                            <div class="job-img w-28 ">
                                <img src="../assets/job/jnt.png" class="rounded-lg w-28 h-28 border-1" alt="">
                            </div>
                            <div class="job-information w-4/5 flex flex-col justify-center mx-8 gap-y-1">
                                <p class="m-0">J&T, <span class="text-gray-400"><i>Logistic</i></span></p>
                                <div class="flex justify-content-between items-center w-full m-0">
                                    <p class="text-lg m-0">Jr. Data Scientiest</p>
                                    <p v-bind:class="[navOpen ? 'job-date-time-hidden': '']">WFA - Banten</p>
                                    <p class="date-hidden-for-mobile" v-bind:class="[navOpen ? 'job-date-time-hidden': '']">9 Nov</p>
                                </div>
                                <p class="m-0 text-sm">Fulltime</p>
                            </div>
                        </div>
                        <div class="job-card flex md:p-4 sm:p-2 bg-[#FDFDFD] rounded-xl border">
                            <div class="job-img w-28 ">
                                <img src="../assets/job/indomaret.png" class="rounded-lg w-28 h-28 border-1" alt="">
                            </div>
                            <div class="job-information w-4/5 flex flex-col justify-center mx-8 gap-y-1">
                                <p class="m-0">Indomaret, <span class="text-gray-400"><i>Marketplace</i></span></p>
                                <div class="flex justify-content-between items-center w-full m-0">
                                    <p class="text-lg m-0">Data Scientiest</p>
                                    <p v-bind:class="[navOpen ? 'job-date-time-hidden': '']">WFA - Palembang</p>
                                    <p class="date-hidden-for-mobile" v-bind:class="[navOpen ? 'job-date-time-hidden': '']">10 Nov</p>
                                </div>
                                <p class="m-0 text-sm">Fulltime</p>
                            </div>
                        </div>
                        <div class="job-card flex md:p-4 sm:p-2 bg-[#FDFDFD] rounded-xl border">
                            <div class="job-img w-28 ">
                                <img src="../assets/job/sicepat.png" class="rounded-lg w-28 h-28 border-1" alt="">
                            </div>
                            <div class="job-information w-4/5 flex flex-col justify-center mx-8 gap-y-1">
                                <p class="m-0">SiCepat, <span class="text-gray-400"><i>Logistic</i></span></p>
                                <div class="flex justify-content-between items-center w-full m-0">
                                    <p class="text-lg m-0">Jr. Data Scientiest</p>
                                    <p v-bind:class="[navOpen ? 'job-date-time-hidden': '']">WFA - Bandung</p>
                                    <p class="date-hidden-for-mobile" v-bind:class="[navOpen ? 'job-date-time-hidden': '']">5 Nov</p>
                                </div>
                                <p class="m-0 text-sm">Fulltime</p>
                            </div>
                        </div>
                        <div class="job-card flex md:p-4 sm:p-2 bg-[#FDFDFD] rounded-xl border">
                            <div class="job-img w-28 ">
                                <img src="../assets/job/google.png" class="rounded-lg w-28 h-28 border-1" alt="">
                            </div>
                            <div class="job-information w-4/5 flex flex-col justify-center mx-8 gap-y-1">
                                <p class="m-0">Google Inc, <span class="text-gray-400"><i>Tech</i></span></p>
                                <div class="flex justify-content-between items-center w-full m-0">
                                    <p class="text-lg m-0">Data Scientiest Internship</p>
                                    <p v-bind:class="[navOpen ? 'job-date-time-hidden': '']">WFA - USA</p>
                                    <p class="date-hidden-for-mobile" v-bind:class="[navOpen ? 'job-date-time-hidden': '']">30 Oct</p>
                                </div>
                                <p class="m-0 text-sm">Fulltime</p>
                            </div>
                        </div>
                        <div class="job-card flex md:p-4 sm:p-2 bg-[#FDFDFD] rounded-xl border">
                            <div class="job-img w-28 ">
                                <img src="../assets/job/meta.png" class="rounded-lg w-28 h-28 border-1" alt="">
                            </div>
                            <div class="job-information w-4/5 flex flex-col justify-center mx-8 gap-y-1">
                                <p class="m-0">Meta, <span class="text-gray-400"><i>Social Media</i></span></p>
                                <div class="flex justify-content-between items-center w-full m-0">
                                    <p class="text-lg m-0">Associates Data Scientiest</p>
                                    <p v-bind:class="[navOpen ? 'job-date-time-hidden': '']">WFO - California</p>
                                    <p class="date-hidden-for-mobile" v-bind:class="[navOpen ? 'job-date-time-hidden': '']">24 Oct</p>
                                </div>
                                <p class="m-0 text-sm">Fulltime</p>
                            </div>
                        </div>
                        <div class="job-card flex md:p-4 sm:p-2 bg-[#FDFDFD] rounded-xl border">
                            <div class="job-img w-28 ">
                                <img src="../assets/job/niagahoster.png" class="rounded-lg w-28 h-28 border-1" alt="">
                            </div>
                            <div class="job-information w-4/5 flex flex-col justify-center mx-8 gap-y-1">
                                <p class="m-0">Niagahoster, <span class="text-gray-400"><i>Layanan Hosting</i></span>
                                </p>
                                <div class="flex justify-content-between items-center w-full m-0">
                                    <p class="text-lg m-0">Associates Data Scientiest</p>
                                    <p v-bind:class="[navOpen ? 'job-date-time-hidden': '']">Hybird - Yogyakarta</p>
                                    <p class="date-hidden-for-mobile" v-bind:class="[navOpen ? 'job-date-time-hidden': '']">15 Oct</p>
                                </div>
                                <p class="m-0 text-sm">Fulltime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full">
            <div class="third-section flex mx-8">
                <div class="third-content-container w-1/2 text-[#023047] flex flex-col align-center justify-center gap-y-8">
                    <h3 class="font-bold text-4xl leading-normal">Raih Impian dengan Asyik.<br>Apa itu Intelligo Job Connect?</h3>
                    <p class="text-xl leading-loose">Intelligo ID bertujuan untuk membuka dan menyalurkan potensi talent agar mereka lebih mudah
                        menjemput karir mereka. Salah satu cara kami melakukanya adalah dengan membantu talent menyempurnakan dokumen seperti CV
                        dan Portofolio menggunakan konektor pekerjaan kami sendiri, Intelligo Job Connect.</p>
                    <button class="join-intelligo-btn bg-[#023047] rounded-3xl py-3 text-white w-1/3 hover:bg-orange-500">Join Intelligo Sekarang</button>
                </div>
                <div class="third-image-container w-1/2">
                    <img src="../assets/imgHeroJob.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <FooterComp />
</template>

<script>
import NavbarComp from "./NavbarComp.vue";
import FooterComp from "./FooterComp.vue";
import SidebarComp from "./SidebarComp.vue";
import TopbarComp from "./TopbarComp.vue";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";

export default {
    name: `DetailEvent`,
    data() {
        return {
            id: this.$route.query.event,
            user: false,
            event: {
                benefits: [],
                registration_flow: [],
                curriculums: [],
                mentor: [],
                faq: [],
            },
            navOpen: true,
        }
    },
    components: {
        NavbarComp,
        FooterComp,
        TopbarComp,
        SidebarComp,
        Splide,
        SplideSlide,
        SplideTrack,
    },
    methods: {
        goto(refName) {
            var element = this.$refs[refName];
            console.log(element);
            var top = element.offsetTop;

            window.scrollTo(0, top);
        },
        fungsiLoadUser: async function () {
            const response = (await this.$api.get(`/auth/check`)).data
            if (response.status) {
                this.user = true
            }

            this.fungsiLoadContent()
        },
        fungsiLoadContent: async function () {
            if (this.user) {
                this.event = (await this.$api.get(`/event/${this.id}`)).data.data
            } else {
                this.event = (await this.$api.get(`/get-event/${this.id}`)).data.data
            }
        },
        fungsiActionLink() {
            window.location = 'https://dash.intelligo.id/'
        }
    },
    mounted() {
        this.fungsiLoadUser()
        let tailwind = document.createElement('script')
        tailwind.setAttribute('src', 'https://cdn.tailwindcss.com')
        document.head.appendChild(tailwind)
    },
    computed: {
        displayText() {
            return this.$mq === 'mobile'
            ? 'You are on a mobile device'
            : 'You are on a larger device'
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

body {
    margin: 0;
    background-color: white;
    font-family: 'Poppins', sans-serif;
}
.maskot-container {
    display: flex;
}
.bg-jc {
    background-image: url("../assets/bg-jobConnector.jpeg");
}
#main {
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    margin: 2rem;
}
.main-child {
    border: 1px solid red;
}
/* Show the dropdown menu on hover */
#article h4 {
    /* margin-top: 40px; */
    font-size: 26px;
    font-weight: 600;
    color: #FF5400;
}

#article h3 {
    font-size: 32px;
    font-weight: 700;
    color: #023047;
}
.third-section {
    margin-top: 4rem;
}
.text-container p {
    font-size: 1.2rem;
}
.filter-wrapper {
    width: 0;
}
.job-wrapper {
    width: 100%;
}
.job-img img {
    width: 100%;
    height: auto;
}
.job-date-time-hidden {
    display: none;
}

@media only screen and (min-width: 1000px) {
    .filter-container {
        margin-right: 2rem;
    }
    .filter-container-size {
        width: calc(100% / 4);
    }
    .job-container-size {
        width: calc(100% / 4 * 3);
    }
}

@media only screen and (max-width: 980px) {
    #main {
        margin: 6rem 1rem;
    }
    .header {
        padding: 4rem 0;
    }

    /* agar gambar maskot dan text nya hidden */
    .maskot-container, .text-for-pc {
        display: none;
    }
    .header-text-container {
        width: 100%;
        margin: 4rem 2rem;
    }
    .header-text-container h1 {
        font-size: 1.5rem;
    }
    .header-text-container h5 {
        font-size: 1rem;
    }
    .text-for-mobile {
        display: flex;
    }
    .third-section {
        flex-direction: column-reverse;
    }
    .third-image-container, .third-content-container {
        width: 100%;
    }
    .join-intelligo-btn {
        width: 50%;
    }
    .filter-container-size {
        width: calc(100% / 3);
    }
    .job-container-size {
        width: calc(100% / 3 * 2);
    }
}

@media only screen and (max-width: 600px) {
    #main {
        margin: 6rem 0;
    }
    .header {
        padding: 2rem 0;
        background-position: left;
    }
    .header-text-container {
        margin: 0 1rem;
    }
    .text-for-mobile {
        line-height: 1.5rem;
    }
    .third-section {
        justify-content: center;
        align-items: center;
        text-align: center;
    }
   .third-content-container h3 {
        font-size: 2rem;
    }
    .third-content-container p {
        font-size: 1rem;
    }
    .join-intelligo-btn {
        margin: 0 auto; /*agar 'join inteliigo sekarang' button berada di tengah*/
        width: 60%;
    }
    .filter-information {
        font-size: 0.75rem;
    }
    .job-card {
        padding: 0.7rem;
    }
    .job-img {
        width: 5rem;
    }
    .job-card p {
        font-size: 0.8rem;
    }
    /* untuk mengubah margin yg awalnya mx-8 jadi margin left 5px */
    .job-information { 
        margin: 0 0 0 5px;
    }
    .date-hidden-for-mobile {
        display: none;
    }
    .filter-container-size {
        width: 100%;
    }
    .job-container-size {
        display: none;
    }
}

@media only screen and (max-width: 400px) {
    .header {
        padding: 1rem 0;
    }
    .header-text-container h1 {
        font-size: 1.3rem;
    }
    .header-text-container h5 {
        font-size: 0.9rem;
    }
    .join-intelligo-btn {
        width: 90%;
    }
}
</style>