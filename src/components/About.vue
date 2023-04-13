<template>
  <section id="about">
    <div class="container-fluid">
      <div class="about">
        <div class="about__block about__block--text-block text-center">
          <h1 class="text-primary text-uppercase">Spectrum Events</h1>
          <p>
            to nie tylko dobra muzyka i profesjonalny DJ, to obowiązkowy element
            udanego przyjęcia weselnego. Szukacie doświadczonego wodzireja,
            który oczaruje, zabawi i porwie do tańca Waszych gości? Marzycie o
            imprezie, na której tanecznych pląsów nie będzie końca? Liczycie na
            muzykę i zabawę, która pozostanie we wspomnieniach Waszych gości na
            bardzo długo?
          </p>
        </div>
        <div class="about__block about_full">
          <img class="image" v-bind:src="pawel" alt="hello image" />
        </div>

        <div class="about__block about__small">
          <img class="image" v-bind:src="image" alt="hello image" />
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-5">
          <h2 class="text-primary">Co powinniście o nas wiedziec?</h2>
          Jesteśmy grupą zajmująca się profesjonalną obsługą imprez
          okolicznościowych. W skład całego zespołu wchodzą DJ’e/ Wodzireje,
          Konferansjerzy, profesjonalni saksofoniści, a także, kamerzysta i
          fotograf. Branżą imprez weselnych i okolicznościowych zajmujemy się od
          ponad 15 lat. Obsłużyliśmy mnóstwo koncertów i imprez, co zaowocowało
          ogromnym doświadczeniem, pomysłowością i indywidualnym podejściem do
          klienta. Każde zlecenie poprzedzone jest rozmową dotyczącą preferencji
          Młodej Pary oraz gości weselnych, co gwarantuje stworzenie oferty
          idealnie dopasowanej do Waszych oczekiwań.
        </div>

        <div class="col-md-7">
          <h2 class="text-primary">Co nas wyróżnia?</h2>
          <ul>
            <li>
              Doświadczeni DJ’e, potrafiący dopasować repertuar do każdego
              gościa weselnego
            </li>
            <li>Dyplomowani saksofoniści</li>
            <li>Kreatywni i nowocześni kamerzyści</li>
            <li>Brak schematów i indywidualne podejście do każdej imprezy</li>
            <li>
              Ustalany z Młodą Parą plan uroczystości oraz poszczególnych
              atrakcji zapewniający perfekcyjne wykonanie każdego zlecenia
            </li>
            <li>Estetyka stanowiska</li>
            <li>
              Muzyka dobierana na bieżąco do preferencji i wieku Weselników
            </li>
            <li>Stała interakcja z Gośćmi</li>
            <li>
              Zabawy / konkursy i animacje, w których bierzmy CZYNNY UDZIAŁ
            </li>
            <li>
              Kooperacja z fotografem i kamerzystą w takim stopniu, aby czas
              uroczystości weselnej wykorzystać w najbardziej efektywnym i
              urozmaiconym stopniu
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image from "@/assets/zdj/spectrum16.jpg";
import pawel from "@/assets/zdj/pawel3.jpg";

import Notes from "./Notes.vue";

export default {
  name: "About",
  components: {
    Notes,
  },
  data() {
    return {
      image: image,
      pawel: pawel,
    };
  },
  mounted() {
    console.log("Mount");

    /*const oNasWiedziec = document.getElementById("oNasWiedziec");

    this.gsap.fromTo(
      oNasWiedziec.children,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "easyInOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#about",
          start: "center 80%",
          //markers: true,
          toggleActions: "play none none reverse",
        },
      }
    );*/
  },
};
</script>

<style>
#about {
  margin-top: 2vh;
}

.about {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-bottom: 3rem;
}

.about_full {
  grid-row: span 2;
  max-height: 100%;
}

.about_full .image {
  object-position: left top;
}

.about__block {
  min-height: 50px;
  background: var(--color-background-soft);
  border-radius: 9px;
  position: relative;
  overflow: hidden;
}

.about__block .image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}

.about__block--text-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  text-decoration: none;
}

@media only screen and (max-width: 760px) {
  .about {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .about__small {
    order: -5;
  }
}
</style>
