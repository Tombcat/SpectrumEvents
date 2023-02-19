import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js'
import "./assets/main.css";

const app = createApp(App);

app.use(router);

app.mixin({
  created: function () {
    this.gsap = gsap;
  }
});

app.mount("#app");
