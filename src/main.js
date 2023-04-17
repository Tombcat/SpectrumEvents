import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faEnvelope, faPhone, faRing } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faEnvelope, faPhone, faFacebook, faInstagram, faRing)


import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js'
import "./assets/main.css";

const app = createApp(App);

app.use(router)
.component('font-awesome-icon', FontAwesomeIcon);

app.mixin({
  created: function () {
    this.gsap = gsap;
  }
});

app.mount("#app");
