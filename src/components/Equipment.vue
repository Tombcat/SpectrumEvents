<template>
  <section id="equipment">
    <video class="-video" :src="video" autoplay loop muted></video>
    <h2 class="test">
      <span class="spectrum" v-for="n in 20">SPECTRUM <br /></span>
    </h2>
  </section>
</template>

<script>
import video from "@/assets/spectrum.mp4";

export default {
  name: "equipment",
  data() {
    return {
      video: video,
    };
  },
  mounted() {
    /*this.gsap.fromTo(
      ".spectrum",
      2,
      {
        lineHeight: "18vw",
        fontSize: "5vw",
        x: -500,
      },
      {
        lineHeight: "5vw",
        fontSize: "18vw",
        x: 0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      }
    );*/
  },
};
</script>

<style>
#equipment {
  width: 100%;
  height: 120vh;
  position: relative;
}

.-video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}

.test {
  display: none;
  font-weight: 700;
  width: 100%;
  height: 100%;
  font-size: 18vw;
  text-align: center;
  background-color: #000;
  color: #fff;
  mix-blend-mode: multiply;
  line-height: 13vw;
}

.test span {
  font-weight: 700;
}
</style>
