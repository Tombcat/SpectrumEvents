<template>
  <div class="teamMember" ref="teamMember">
    <span
      class="_frameDesc --top position-absolute zindex-1 text-center margin-auto start-0 end-0"
    >
      {{ name }}
    </span>
    <img class="_photo" :src="getImageUrl()" alt="hello image" />
    <div class="_background h-100 w-100 position-absolute top-0"></div>
    <div
      class="_text position-absolute top-0 h-100 w-100 d-flex justify-content-center align-items-center flex-column p-2 text-justify text-white"
    >
      <span style="max-width: 85vmin">
        <slot name="description"></slot>
      </span>
    </div>
    <span
      class="_frameDesc --bottom position-absolute zindex-1 text-center margin-auto start-0 end-0"
    >
      {{ role }}
    </span>
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
          end: "bottom+=150vh center",
          //markers: true,
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
          scale: 0.1,
          x: this.left % 2 == 0 ? "100vw" : "-100vw",
          duration: 2,
        })
        .to(q("._photo"), 2, {
          boxShadow: "0 0 0 calc(1.2vw + 20px) rgb(255,255,255)",
          ease: "elastic.out(1, 0.5)",
        })
        .from(q(".teamMember ._frameDesc"), {
          opacity: 0,
          scale: 0.5,
          duration: 1,
        })
        .addLabel("image")
        .from(q(".teamMember ._background"), {
          opacity: 0,
          delay: 0.2,
          duration: 0.5,
        })
        .from(q(".teamMember ._text"), {
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
._background {
  opacity: 0.8;
  background: #181818;
}

._frameDesc {
  color: #000;
  text-transform: uppercase;
  font-weight: 700;
  white-space: pre;
}

.--top {
  top: calc(-1.6vw - 20px);
}

.--bottom {
  bottom: calc(-1.6vw - 20px);
}

.teamMember {
  min-height: 260px;
  max-height: calc(90vh - 6.5rem);
  max-width: calc(100% - 20px);
  margin: 0 auto;
  aspect-ratio: 10 / 9;
}

.teamMember ._photo {
  aspect-ratio: 10 / 9;
  object-fit: cover;
  display: block;
  overflow: hidden;
  height: 100%;
}
</style>
