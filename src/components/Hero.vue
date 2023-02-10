<template>
  <section id="hero">
    <div class="notes">
      <Notes
        gsap-move="-100"
        gsap-direction="y"
        top="8%"
        left="23%"
        :rotate="5"
        :scale="2"
        :note="3"
      />

      <Notes
        gsap-move="-200"
        gsap-direction="y"
        top="25%"
        right="25%"
        :white="true"
        :rotate="-12"
        :scale="3"
        :note="3"
      />

      <Notes
        gsap-move="-400"
        gsap-direction="y"
        top="10%"
        right="32%"
        :rotate="15"
        :scale="1"
        :note="2"
      />

      <Notes
        gsap-move="-300"
        gsap-direction="y"
        top="27%"
        left="10%"
        :white="true"
        :rotate="5"
        :scale="3"
      />

      <Notes
        gsap-move="-340"
        gsap-direction="y"
        top="70%"
        left="70%"
        :scale="2.4"
      />

      <Notes
        gsap-move="-200"
        gsap-direction="y"
        top="50%"
        left="15%"
        :rotate="12"
        :scale="0.5"
        :note="2"
      />

      <Notes
        gsap-move="-400"
        gsap-direction="y"
        top="50%"
        left="50%"
        :white="true"
        :rotate="-9"
        :scale="1.5"
      />

      <Notes
        gsap-move="-50"
        gsap-direction="y"
        top="7rem"
        right="2rem"
        :rotate="5"
      />

      <Notes
        gsap-move="-200"
        gsap-direction="y"
        top="90%"
        right="30%"
        :white="true"
        :rotate="-5"
        :scale="1.5"
      />

      <Notes
        gsap-move="-40"
        gsap-direction="y"
        top="7rem"
        left="40%"
        :white="true"
        :rotate="-10"
      />

      <Notes
        gsap-move="-700"
        gsap-direction="y"
        top="50%"
        right="10%"
        :white="true"
        :rotate="-10"
        :note="2"
      />

      <Notes
        gsap-move="-80"
        gsap-direction="y"
        top="70%"
        left="35%"
        :white="true"
        :rotate="-10"
        :scale="0.4"
        :note="2"
      />

      <Notes
        gsap-move="-600"
        gsap-direction="y"
        top="100%"
        left="24%"
        :rotate="25"
        :scale="5"
        :note="3"
      />
    </div>

    <div class="w-100" v-if="!true">
      <svg width="1140" height="1024" xmlns="http://www.w3.org/2000/svg">
        <g>
          <title>Layer 1</title>
          <path
            id="svg_20"
            d="m457.34178,998.99956"
            opacity="undefined"
            stroke-linecap="undefined"
            stroke-linejoin="undefined"
            stroke-width="3"
            stroke="#000"
            fill="none"
          />
          <path
            id="svg_21"
            d="m512.36184,994.58189"
            opacity="undefined"
            stroke-linecap="undefined"
            stroke-linejoin="undefined"
            stroke-width="3"
            stroke="#000"
            fill="none"
          />
          <path
            id="svg_22"
            d="m507.94417,996.18831"
            opacity="undefined"
            stroke-linecap="undefined"
            stroke-linejoin="undefined"
            stroke-width="3"
            stroke="#000"
            fill="none"
          />
          <g stroke="null" id="svg_55">
            <path
              stroke="#000"
              id="svg_25"
              d="m544.68359,-12.97415l0,1034.75842l0,-1034.75842z"
              opacity="undefined"
              stroke-linecap="undefined"
              stroke-linejoin="undefined"
              stroke-width="3"
              fill="none"
            />
            <path
              stroke="#000"
              id="svg_49"
              d="m620.63288,-12.97411l0,1034.75842l0,-1034.75842z"
              opacity="undefined"
              stroke-linecap="undefined"
              stroke-linejoin="undefined"
              stroke-width="3"
              fill="none"
            />
            <path
              stroke="#000"
              id="svg_50"
              d="m519.36715,-12.97411l0,1034.75842l0,-1034.75842z"
              opacity="undefined"
              stroke-linecap="undefined"
              stroke-linejoin="undefined"
              stroke-width="3"
              fill="none"
            />
            <path
              stroke="#000"
              id="svg_52"
              d="m544.68356,-12.97414l0,1034.75842l0,-1034.75842z"
              opacity="undefined"
              stroke-linecap="undefined"
              stroke-linejoin="undefined"
              stroke-width="3"
              fill="none"
            />
            <path
              stroke="#000"
              id="svg_53"
              d="m570,-12.97411l0,1034.75842l0,-1034.75842z"
              opacity="undefined"
              stroke-linecap="undefined"
              stroke-linejoin="undefined"
              stroke-width="3"
              fill="none"
            />
            <path
              stroke="#000"
              id="svg_54"
              d="m595.31644,-12.97411l0,1034.75842l0,-1034.75842z"
              opacity="undefined"
              stroke-linecap="undefined"
              stroke-linejoin="undefined"
              stroke-width="3"
              fill="none"
            />
          </g>
        </g>
      </svg>
    </div>
    <div class="title text-center h-100 d-flex flex-column align-items-center">
      <!--<h1>Spectrum Events</h1>
            <p>Grupa ludzi z pasją do muzyki</p>-->
      <img id="hero-logo" v-bind:src="logo" alt="hello image" />
    </div>

    <!--<img class="position-absolute" src="https://cdn.pixabay.com/photo/2016/10/18/19/34/skyline-1751179_1280.png" alt="">-->

    <div class="wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F3CB2D"
          fill-opacity="1"
          d="M0,128L0,96L36.9,96L36.9,288L73.8,288L73.8,128L110.8,128L110.8,96L147.7,96L147.7,128L184.6,128L184.6,64L221.5,64L221.5,192L258.5,192L258.5,32L295.4,32L295.4,160L332.3,160L332.3,256L369.2,256L369.2,160L406.2,160L406.2,224L443.1,224L443.1,160L480,160L480,32L516.9,32L516.9,224L553.8,224L553.8,128L590.8,128L590.8,128L627.7,128L627.7,224L664.6,224L664.6,160L701.5,160L701.5,320L738.5,320L738.5,160L775.4,160L775.4,192L812.3,192L812.3,224L849.2,224L849.2,256L886.2,256L886.2,128L923.1,128L923.1,128L960,128L960,64L996.9,64L996.9,192L1033.8,192L1033.8,224L1070.8,224L1070.8,64L1107.7,64L1107.7,64L1144.6,64L1144.6,160L1181.5,160L1181.5,224L1218.5,224L1218.5,64L1255.4,64L1255.4,32L1292.3,32L1292.3,64L1329.2,64L1329.2,96L1366.2,96L1366.2,32L1403.1,32L1403.1,160L1440,160L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Notes from "./Notes.vue";

import logo from "@/assets/logo@0,5x.png";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Hero",
  components: {
    Notes,
  },
  data() {
    return {
      logo: logo,
    };
  },
  mounted() {
    console.log("Mount");

    const notesTrigger = {
      trigger: ".notes",
      start: "top top",
      end: "bottom top",
      //markers: true,
      scrub: 5,
      toggleActions: "play pause resume reverse",
    };

    const notes = gsap.utils.toArray(".note");
    notes.forEach((note) => {
      gsap.to(note, {
        scrollTrigger: notesTrigger,
        [note.getAttribute("gsap-direction")]: note.getAttribute("gsap-move"),
      });
    });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        //markers: true,
        scrub: 1,
        toggleActions: "play pause pause reverse",
      },
    });

    tl.to("#hero-logo", { y: "80vh", duration: 3, rotate: 360 });
  },
};
</script>

<style>
#hero {
  height: 150vh;
  min-height: 40vh;
  background-color: var(--color-primary);
  color: #222831;
  margin-bottom: 25vw;
}

#hero-logo {
  position: relative;
  top: 25vh;
  min-height: 25vw;
  max-width: 75vw;
  z-index: 200;
}

.title h1 {
  z-index: 2;
  font-size: 4rem;
}

.title p {
  font-size: 1.5rem;
}

.notes {
  height: 100%;
  width: 100%;
  z-index: 10;
  position: absolute;
}
</style>
