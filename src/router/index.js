import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogComp from "../components/BlogComp.vue";
import DetailBlog from "../components/DetailBlog.vue";
import ShowcaseComp from "../components/ShowcaseComp.vue";
import DetailShowcase from "../components/DetailShowcase.vue";
import AboutUs from "../components/AboutUs.vue";
import LoginComp from "../components/LoginComp.vue";
import ListEvent from "../views/ListView.vue";
import ListService from "../components/ListService.vue";
import DetailEvent from "../components/DetailEvent.vue";
import DetailEventWebinar from "../components/DetailEventWebinar.vue";
import RegisterComp from "../components/RegisterComp.vue";
import FaqComp from "../components/FaqComp.vue";
import AuthView from "../views/AuthView.vue";
import JobConnector from "../components/JobConnector.vue";
import DetailJobConnector from "../components/DetailJobConnector.vue";
import ErrorView from "../views/ErrorView.vue";

const dataMeta = {
  title: "Intelligo.id - Belajar Data Science",
  metaTags: [
    {
      name: "description",
      content:
        "Intelligo ID adalah platform Edutech atau Education Technology yang bertujuan untuk mengatasi permasalahan pembelajaran dan menjadi solusi di bidang Data Science, sehingga Intelligo ID dapat menjadi Learning & Assistant dalam proses belajar.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Intelligo.id",
    },
    {
      name: "keywords",
      content:
        "data science, bootcamp, Bootcamp Data Science, Bootcamp Data Science Murah, Python Learning, Bootcamp Elite Harga Worth It, Mini Bootcamp, Konsultasi Data Science",
    },
    {
      name: "canonical",
      content: "https://intelligo.id/#/",
    },
    {
      property: "og:title",
      content: "Intelligo ID - Bootcamp Elit Harga Murah",
    },
    {
      property: "og:description",
      content:
        "Bootcamp Data Science adalah suatu kegiatan yang didesain khusus untuk kamu yang mau belajar dari 0 terkait Data Science, dimana akan diajari dari penggunaan python basic, pre-processing hingga pemodelan dalam machine learning. Belajar selama 6 minggu + 2 minggu Final Project dan Career Caching serta akan mendapatkan mentoring 1on1 dengan para trainer berpengalaman.",
    },
    {
      property: "og:image",
      content: "https://intelligo.id/img/logo.55ce919c.png",
    },
  ],
};

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: {
      title: "Intelligo.id - Data Science",
      metaTags: [
        {
          name: "description",
          content:
            "Intelligo ID adalah platform Edutech atau Education Technology yang bertujuan untuk mengatasi permasalahan pembelajaran dan menjadi solusi di bidang Data Science, sehingga Intelligo ID dapat menjadi Learning & Assistant dalam proses belajar.",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "author",
          content: "Intelligo.id",
        },
        {
          name: "keywords",
          content:
            "data science, bootcamp, Bootcamp Data Science, Bootcamp Data Science Murah, Python Learning, Bootcamp Elit Harga Worth It, Mini Bootcamp, Konsultasi Data Science",
        },
        {
          name: "canonical",
          content: "https://intelligo.id/#/",
        },
        {
          property: "og:title",
          content: "Intelligo ID - Bootcamp Elit Harga Murah",
        },
        {
          property: "og:description",
          content:
            "Bootcamp Data Science adalah suatu kegiatan yang didesain khusus untuk kamu yang mau belajar dari 0 terkait Data Science, dimana akan diajari dari penggunaan python basic, pre-processing hingga pemodelan dalam machine learning. Belajar selama 6 minggu + 2 minggu Final Project dan Career Caching serta akan mendapatkan mentoring 1on1 dengan para trainer berpengalaman.",
        },
        {
          property: "og:image",
          content: "https://intelligo.id/img/logo.55ce919c.png",
        },
      ],
    },
  },
  {
    path: "/event",
    name: "event",
    meta: {
      title: "Intelligo.id - Event Bootcamp Data Science Murah",
      metaTags: [
        {
          name: "description",
          content:
            "Intelligo ID adalah platform Edutech atau Education Technology yang bertujuan untuk mengatasi permasalahan pembelajaran dan menjadi solusi di bidang Data Science, sehingga Intelligo ID dapat menjadi Learning & Assistant dalam proses belajar.",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "author",
          content: "Intelligo.id",
        },
        {
          name: "keywords",
          content:
            "data science, bootcamp, Bootcamp Data Science, Bootcamp Data Science Murah, Python Learning, Bootcamp Elit Harga Worth It, Mini Bootcamp, Konsultasi Data Science",
        },
        {
          name: "canonical",
          content: "https://intelligo.id/#/",
        },
        {
          property: "og:title",
          content: "Intelligo ID - Bootcamp Elit Harga Murah",
        },
        {
          property: "og:description",
          content:
            "Bootcamp Data Science adalah suatu kegiatan yang didesain khusus untuk kamu yang mau belajar dari 0 terkait Data Science, dimana akan diajari dari penggunaan python basic, pre-processing hingga pemodelan dalam machine learning. Belajar selama 6 minggu + 2 minggu Final Project dan Career Caching serta akan mendapatkan mentoring 1on1 dengan para trainer berpengalaman.",
        },
        {
          property: "og:image",
          content: "https://intelligo.id/img/logo.55ce919c.png",
        },
      ],
    },
    component: ListEvent,
  },
  {
    path: "/service",
    name: "service",
    meta: dataMeta,
    component: ListService,
  },
  {
    path: "/detail-event/:id",
    name: "DetailEvent",
    meta: dataMeta,
    component: DetailEvent,
  },
  {
    path: "/blog",
    name: "BlogComp",
    meta: dataMeta,
    component: BlogComp,
  },
  // {
  //   path: "/detail-blog",
  //   name: "DetailBlog",
  //   meta: dataMeta,
  //   component: DetailBlog,
  // },
  {
    path: "/detail-event-webinar/:id",
    name: "DetailEventWebinar",
    component: DetailEventWebinar,
    meta: {
      title: "Webinar Intelligo.id - Data Science",
      metaTags: [
        {
          name: "description",
          content:
            "Intelligo ID adalah platform Edutech atau Education Technology yang bertujuan untuk mengatasi permasalahan pembelajaran dan menjadi solusi di bidang Data Science, sehingga Intelligo ID dapat menjadi Learning & Assistant dalam proses belajar.",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "author",
          content: "Intelligo.id",
        },
        {
          name: "keywords",
          content:
            "data science, bootcamp, Bootcamp Data Science, Bootcamp Data Science Murah, Python Learning, Bootcamp Elit Harga Worth It, Mini Bootcamp, Konsultasi Data Science",
        },
        {
          name: "canonical",
          content: "https://intelligo.id/#/",
        },
        {
          property: "og:title",
          content: "Intelligo ID - Bootcamp Elit Harga Murah",
        },
        {
          property: "og:description",
          content:
            "Bootcamp Data Science adalah suatu kegiatan yang didesain khusus untuk kamu yang mau belajar dari 0 terkait Data Science, dimana akan diajari dari penggunaan python basic, pre-processing hingga pemodelan dalam machine learning. Belajar selama 6 minggu + 2 minggu Final Project dan Career Caching serta akan mendapatkan mentoring 1on1 dengan para trainer berpengalaman.",
        },
        {
          property: "og:image",
          content: "https://intelligo.id/img/logo.55ce919c.png",
        },
      ],
    },
  },
  {
    path: "/showcase",
    name: "ShowcaseComp",
    meta: dataMeta,
    component: ShowcaseComp,
  },
  // {
  //   path: "/detail-showcase",
  //   name: "DetailShowcase",
  //   meta: dataMeta,
  //   component: DetailShowcase,
  // },
  {
    path: "/about",
    meta: dataMeta,
    name: "AboutUs",
    component: AboutUs,
  },
  // {
  //   path: "/login",
  //   meta: dataMeta,
  //   name: "LoginComp",
  //   component: LoginComp,
  // },
  // {
  //   path: "/register",
  //   meta: dataMeta,
  //   name: "RegisterComp",
  //   component: RegisterComp,
  // },
  {
    path: "/faq",
    meta: dataMeta,
    name: "FaqComp",
    component: FaqComp,
  },
  // {
  //   path: "/auth",
  //   meta: dataMeta,
  //   name: "AuthPage",
  //   component: AuthView,
  // },
  // {
  //   path: "/job-connector",
  //   meta: dataMeta,
  //   name: "JobConnector",
  //   component: JobConnector,
  // },
  {
    path: "/detail-job-connector",
    meta: dataMeta,
    name: "DetailJobConnector",
    component: DetailJobConnector,
  },
  {
    path: "/:catchAll(.*)",
    meta: dataMeta,
    name: "ErrorPage",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  mode: "history",
  routes,
});

export default router;
