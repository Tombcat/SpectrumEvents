<template>
  <section id="extras">
    <div class="container-fluid">
      <div class="d-flex cards flex-column flex-md-row">
        <div class="card" v-for="card in cards">
          <img class="card__img" v-bind:src="card.img" alt="" />
          <span class="card__title">{{ card.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image1 from "@/assets/zdj/extras/dym3.jpg";
import image2 from "@/assets/zdj/extras/fontanna2.jpg";
import image3 from "@/assets/zdj/extras/love.jpg";
import image4 from "@/assets/zdj/extras/swiatlo.jpg";
import image5 from "@/assets/zdj/extras/samochod2.jpg";
import image6 from "@/assets/zdj/extras/lustro.jpg";

export default {
  name: "Extras",
  data() {
    return {
      cards: [
        {
          img: image1,
          title: "Ciężki dym",
        },
        {
          img: image2,
          title: "Fontanna iskier",
        },
        {
          img: image3,
          title: "Napis love",
        },
        {
          img: image4,
          title: "Dekoracja światłem",
        },
        {
          img: image5,
          title: "Samochód do ślubu",
        },
        {
          img: image6,
          title: "Fotolustro",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.cards {
  width: 100%;
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

@media only screen and (min-width: 760px) {
  .cards {
    height: 35vw;
  }
}
</style>
