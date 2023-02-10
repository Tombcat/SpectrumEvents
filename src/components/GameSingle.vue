<template>
  <div class="row game" ref="row">
    <div class="col-md-6 p-0" :class="{ 'order-md-2': reversed }">
      <div class="image_cont">
        <img
          ref="photo"
          class="-photo"
          :class="{ 'game-photo__reverse': reversed }"
          :src="getImageUrl()"
          alt="Gra weselna"
        />
      </div>
    </div>
    <div class="col-md p-0" :class="{ 'order-md-1': reversed }">
      <div class="-text" :class="{ 'text-end': reversed }">
        <p class="-title text-primary">
          <span class="bullet"></span>
          <span>{{ title }}</span>
        </p>
        <p class="-description">
          <slot name="description"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wedding Game single",
  props: {
    photo: {
      type: String,
      default: "none",
      required: true,
    },
    reversed: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    getImageUrl() {
      // This path must be correct for your file
      return new URL(`../assets/games/${this.photo}`, import.meta.url);
    },
  },
  mounted() {
    const { photo, row } = this.$refs;

    this.gsap.to(photo, 0.5, {
      scrollTrigger: {
        trigger: row,
        start: "top bottom",
        end: "bottom top",
        //markers: true,
        scrub: 2,
        toggleActions: "play none none none",
      },
      x: this.reversed ? "-25%" : "25%",
    });

    this.gsap.from(row, {
      scrollTrigger: {
        trigger: row,
        start: "center-=10% bottom-=10%",
        end: "bottom bottom-=10%",
        //markers: true,
        //scrub: 2,
        toggleActions: "play none none reverse",
      },
      x: this.reversed ? "-50%" : "50%",
      duration: 1,
      opacity: 0,
      //ease: "back.out(1)",
    });
  },
};
</script>

<style>
.-text {
  padding: 0 2vw;
  font-size: calc(1.8vw + 12px);
}
.game .-description {
  color: #fff;
}

/*.game .-title {
  font-size: calc(1.5vw + 12px);
}*/

.bullet {
  width: calc(2vw + 16px);
  height: calc(1vw + 8px);
  background-color: currentcolor;
  display: inline-block;
  /*border-radius: 50%;*/
  margin-right: 1vw;
}

.image_cont {
  position: relative;
  overflow: hidden;
  height: calc(20vw + 250px);
}

.-photo {
  position: absolute;
  width: 135%;
  height: 100%;
  object-fit: cover;
  bottom: 0;
  left: -38%;
}

.game-photo__reverse {
  left: auto;
  right: -38%;
}
</style>
