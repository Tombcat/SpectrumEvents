<template>
  <section id="extras">
    <div class="container-fluid">
      <div class="text-center">
        <h2 class="text-primary">Dodatki</h2>
        <p>
          Jesteśmy ekipą od zadań specjalnych, dlatego mamy w ofercie również
          szereg innych usług, które uświetnią Waszą uroczystość.
        </p>
      </div>
      <div class="d-flex cards">
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
import image6 from "@/assets/zdj/extras/lustro.jpeg";

export default {
  name: "Extras",
  data() {
    return {
      cards: [
        {
          img: image1,
          title: "Ciężki dym",
          desc: "Dla was co latają takie, fajne na zdjęciach :)",
        },
        {
          img: image2,
          title: "Fontanna iskier",
          desc: "Dla was co latają takie, fajne na zdjęciach :)",
        },
        {
          img: image3,
          title: "Napis love",
          desc: "Dla was co latają takie, fajne na zdjęciach :)",
        },
        {
          img: image4,
          title: "Dekoracja światłem",
          desc: "Dla was co latają takie, fajne na zdjęciach :)",
        },
        {
          img: image5,
          title: "Samochód do ślubu",
          desc: "Dla was co latają takie, fajne na zdjęciach :)",
        },
        {
          img: image6,
          title: "Fotolustro",
          desc: "Dla was co latają takie, fajne na zdjęciach :)",
        },
      ],
    };
  },
};
</script>

<style>
#extras {
  margin: 5vw 0;
}

.cards {
  width: 100%;
  height: 150vw;
  flex-direction: column;
}

.card {
  flex: 1;
  overflow: hidden;
  transition-duration: 0.8s;
  position: relative;
}

.card:hover {
  flex-grow: 6;
}

/*.card:hover .card__title {
  bottom: 8%;
}*/

.card__title {
  transition-duration: 0.8s;
  position: absolute;
  transform: translate(-50%, 50%);
  bottom: 50%;
  left: 50%;
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 4px 4px 6px rgba(66, 68, 90, 1);
}

.card__img {
  overflow: hidden;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  transition-duration: 0.5s;
  filter: grayscale(0.8);
}

.card:hover .card__img {
  filter: grayscale(0);
}

@media only screen and (min-width: 760px) {
  .cards {
    height: 40vw;
    flex-direction: row;
  }
}
</style>
