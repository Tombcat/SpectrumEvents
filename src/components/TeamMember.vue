<template>
  <div class="teamMember" ref="teamMember">
    <h2 class="text-center mb-4 px-2 -title">
      {{ name }}
    </h2>
    <div class="">
      <img
        class="w-100 h-100 imageFrame -photo"
        :src="getImageUrl()"
        alt="hello image"
      />
      <div class="info h-100 w-100">
        <div class="-background"></div>
        <div
          class="-text h-100 w-100 d-flex justify-content-center align-items-center flex-column p-2"
        >
          <p style="max-width: 600px">
            <slot name="description"></slot>
          </p>
        </div>
      </div>
    </div>
    <p class="-role">{{ role }} - {{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "Team Member",
  props: {
    photo: {
      type: String,
      default: "none",
    },
    name: {
      type: String,
      default: "none",
    },
    role: {
      type: String,
      default: " DJ / wodzirej / konferansjer",
    },
    left: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getImageUrl() {
      // This path must be correct for your file
      return new URL(`../assets/zdj/${this.photo}`, import.meta.url);
    },
    animate() {
      const q = this.gsap.utils.selector(this.$refs.teamMember);

      const { teamMember } = this.$refs;

      var tl = this.gsap.timeline({
        scrollTrigger: {
          trigger: teamMember,
          start: "center center",
          end: "bottom center",
          markers: true,
          scrub: 1,
          toggleActions: "play none none none",
          pin: true,
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          },
        },
      });

      tl.addLabel("start")
        .from(teamMember, {
          x: this.left % 2 == 0 ? "100vw" : "-100vw",
          duration: 1,
        })
        .to(q(".-photo"), {
          boxShadow: "0 0 0 20px rgb(255,255,255)",
        })
        .addLabel("image")

        .from([q(".-title"), q(".-role")], {
          opacity: 0,
          scale: 0.5,
          duration: 1,
        })
        .addLabel("title")
        .to(q(".info .-background"), {
          opacity: 0.8,
          width: "100%",
          height: "100%",
          borderRadius: 0,
          delay: 0.2,
          duration: 1,
          top: 0,
          left: 0,
        })
        .addLabel("background")
        .from(q(".info .-text"), {
          opacity: 0,
          duration: 2,
        })
        .addLabel("text");
    },
  },
  mounted() {
    this.$nextTick(() => this.animate());
  },
};
</script>

<style>
.info {
  position: absolute;
  z-index: 5;
  bottom: 0;
  min-width: 300px;
  color: #fff;
  width: 100%;
  height: 100%;
  /*font-size: 1.5rem;*/
  text-align: center;
  text-shadow: 4px 4px 12px rgba(0, 0, 0, 1);
}

.info .-background {
  position: absolute;
  top: 50%;
  left: 50%;
  background: #181818;
  opacity: 0;
  border-radius: 100%;
  height: 10px;
  width: 200px;
}

.-title {
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
}

.-role {
  z-index: 10;
  /*color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #fff;*/
  color: #000;
  top: -0.2rem;
  font-size: 1rem;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  white-space: pre;
}
</style>
