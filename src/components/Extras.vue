<template>
  <section id="extras" class="my-5">
    <div class="container-fluid">
      <div class="text-center m-5">
        <h2 class="text-primary">Dodatki</h2>
        <p>
          Poza ekipą od zadań specjalnych mamy w ofercie też dodatki dla was do
          urozmaicenia
        </p>
      </div>
      <div class="d-flex cards">
        <div class="card" v-for="card in cards">
          <img class="card__img" v-bind:src="card.img" alt="" />
          <p class="card__title">{{ card.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image1 from "@/assets/zdj/extras/dym.jpg";
import image2 from "@/assets/zdj/extras/fontanna.jpg";
import image3 from "@/assets/zdj/extras/love.jpg";
import image4 from "@/assets/zdj/extras/swiatlo.jpg";
import image5 from "@/assets/zdj/extras/samochod.jpg";
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
.cards {
  width: 100%;
}

.card {
  flex: 1;
  overflow: hidden;
  transition-duration: 0.8s;
  position: absolute;
}

.card__title {
  transition-duration: 0.2s;
  position: absolute;
  top: 50%;
  height: 100%;
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 4px 4px 6px rgba(66, 68, 90, 1);
}

.card img {
  object-fit: cover;
}

.card__img {
  overflow: hidden;
  height: 700px;
  object-fit: cover;
  object-position: center center;
  filter: grayscale(0.75);
}

.card:hover {
  flex: 3;
}

.card:hover .card__img {
  filter: grayscale(0);
}

.card:hover .card__title {
  opacity: 0;
}
</style>
