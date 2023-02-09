<template>
  <div class="row game" ref="row">
    <div class="col-md p-0" :class="{ 'order-md-2': reversed }">
      <div class="image_cont">
        <img
          ref="photo"
          class="w-100 -photo"
          :src="getImageUrl()"
          alt="Gra weselna"
        />
      </div>
    </div>
    <div class="col-md p-0" :class="{ 'order-md-1': reversed }">
      <div class="p-3" :class="{ 'text-end': reversed }">
        <h2 class="-title text-primary">
          <span class="bullet"></span>
          <span>{{ title }}</span>
        </h2>
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

    var tl = this.gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: "top bottom-=10%",
        end: "bottom top",
        //markers: true,
        scrub: 2,
        toggleActions: "play none none none",
      },
    });

    tl.to(photo, {
      duration: 0.5,
      y: "10%",
    });
  },
};
</script>

<style>
.game .-description {
  font-size: 1.2rem;
}

.game .-title {
  font-size: 1rem;
}

.bullet {
  width: 1rem;
  height: 0.7rem;
  background-color: currentcolor;
  display: inline-block;
  /*border-radius: 50%;*/
  margin-right: 0.625rem;
}

.image_cont {
  position: relative;
  overflow: hidden;
  height: 300px;
}

.-photo {
  position: absolute;
  width: 100%;
  height: 140%;
  object-fit: contain;
  bottom: -15%;
}
</style>
