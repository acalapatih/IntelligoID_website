import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";

import "@splidejs/vue-splide/css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";

import "bootstrap/dist/js/bootstrap.min.js";

// Google analytic for Vue
import VueGtag from "vue-gtag";
import VueMeta from "vue-meta";

// import "./plugins/splide.js";

const app = createApp(App);
app.use(VueGtag, { config: { id: "G-YC2XCRTQXY" } });
app.use(router);

app.config.globalProperties.$api = axios.create({
  headers: { Authorization: `${localStorage.getItem("token")}` },
  baseURL: "https://api.intelligo.id/api",
});

app.mount("#app");
