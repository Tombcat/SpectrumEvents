<template>
  <section id="extras">
    <div class="container-fluid">
      <div class="d-flex cards w-100 flex-column flex-md-row">
        <div class="card" v-for="card in cards">
          <img class="card__img" v-bind:src="card.img" alt="" />
          <span class="card__title">{{ card.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Extras",
  data() {
    return {
      cards: [
        {
          img: this.getImageUrl("dym3.jpg"),
          title: "Ciężki dym",
        },
        {
          img: this.getImageUrl("fontanna2.jpg"),
          title: "Fontanna iskier",
        },
        {
          img: this.getImageUrl("love.jpg"),
          title: "Napis love",
        },
        {
          img: this.getImageUrl("swiatlo.jpg"),
          title: "Dekoracja światłem",
        },
        {
          img: this.getImageUrl("samochod2.jpg"),
          title: "Samochód do ślubu",
        },
        {
          img: this.getImageUrl("lustro.jpg"),
          title: "Fotolustro",
        },
      ],
    };
  },
  methods: {
    getImageUrl(photo) {
      // This path must be correct for your file
      return new URL(`../assets/zdj/extras/${photo}`, import.meta.url);
    },
  },
};
</script>

<style lang="scss">
#extras {
  .cards {
    height: 150vw;
  }
  .card {
    flex: 1;
    overflow: hidden;
    transition-duration: var(--animation-time-longer);
    &:hover {
      flex-grow: 6;
      border-color: var(--color-primary) !important;
      & .card__title {
        bottom: 8%;
      }
      & .card__img {
        width: 100%;
        height: 100%;
        filter: grayscale(0);
      }
    }
    &__title {
      padding: 2px;
      transition-duration: var(--animation-time-longer);
      position: absolute;
      transform: translate(-50%, 50%);
      bottom: 50%;
      left: 50%;
      width: 100%;
      color: #fff;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      text-shadow: 3px 3px 6px rgb(0, 0, 0);
    }
    &__img {
      overflow: hidden;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      transition-duration: var(--animation-time-longer);
      filter: grayscale(0.8);
    }
  }
}

@media only screen and (min-width: 760px) {
  #extras .cards {
    height: 35vw;
  }
}
</style>
