<template>
  <section id="about">
    <div class="container-fluid">
      <div class="about">
        <div
          class="about__block about__block--text-block text-center d-flex flex-column justify-content-center"
        >
          <h1 class="text-primary text-uppercase">Spectrum Events</h1>
          <p>
            to nie tylko dobra muzyka i profesjonalny DJ, to obowiązkowy element
            udanego przyjęcia weselnego. Szukacie doświadczonego wodzireja,
            który oczaruje, zabawi i porwie do tańca Waszych gości? Marzycie o
            imprezie, na której tanecznych pląsów nie będzie końca? Liczycie na
            muzykę i zabawę, która pozostanie we wspomnieniach Waszych gości na
            bardzo długo?
          </p>
          <button class="btn btn-primary btn-lg mt-4">
            ZAPRASZAMY DO KONTAKTU
          </button>
        </div>
        <div class="about__block about_full">
          <img
            class="image"
            v-bind:src="image2"
            alt="DJ/Wodzirej Paweł trzymający mikrofon"
          />
        </div>

        <div class="about__block about__small">
          <img
            class="image"
            v-bind:src="image"
            alt="Marcin i Paweł z grupy spectrum events grających na konsoli djskiej"
          />
        </div>
        <div class="about__block about_full">
          <img
            id="about-large-second"
            class="image"
            v-bind:src="image3"
            alt="Grupa ludzi podrzuca Pana Młodego"
          />
        </div>
        <div
          class="about__block about__block--text-block text-center d-flex flex-column justify-content-center"
        >
          <h2 class="text-primary">Co powinniście o nas wiedziec?</h2>
          Jesteśmy grupą zajmująca się profesjonalną obsługą imprez
          okolicznościowych. Branżą imprez weselnych i okolicznościowych
          zajmujemy się od ponad 15 lat. W tym czasie obsłużyliśmy mnóstwo
          eventów, co zaowocowało ogromnym doświadczeniem, pomysłowością i
          indywidualnym podejściem do klienta. Każde zlecenie poprzedzone jest
          rozmową dotyczącą preferencji Młodej Pary oraz gości weselnych, co
          gwarantuje stworzenie oferty idealnie dopasowanej do Waszych
          oczekiwań.
        </div>
        <div
          class="about__block about__block--text-block text-center d-flex flex-column justify-content-center"
        >
          <h2 class="text-primary">Nasza ekipa</h2>
          <p>
            W skład całego zespołu wchodzą DJ’e/ Wodzireje, Konferansjerzy,
            profesjonalni saksofoniści, a także kamerzysta i licencjonowany
            droniarz.
          </p>
          <button class="btn btn-primary btn-lg mt-4">WIĘCEJ O NAS</button>
        </div>
      </div>

      <div class="row g-4" v-if="!true">
        <div class="col-md-5">
          <h2 class="text-primary">Co powinniście o nas wiedziec?</h2>
          Jesteśmy grupą zajmująca się profesjonalną obsługą imprez
          okolicznościowych. W skład całego zespołu wchodzą DJ’e/ Wodzireje,
          Konferansjerzy, profesjonalni saksofoniści, a także kamerzysta i
          licencjonowany droniarz. Branżą imprez weselnych i okolicznościowych
          zajmujemy się od ponad 15 lat. W tym czasie obsłużyliśmy mnóstwo
          eventów, co zaowocowało ogromnym doświadczeniem, pomysłowością i
          indywidualnym podejściem do klienta. Każde zlecenie poprzedzone jest
          rozmową dotyczącą preferencji Młodej Pary oraz gości weselnych, co
          gwarantuje stworzenie oferty idealnie dopasowanej do Waszych
          oczekiwań.
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
import image from "@/assets/zdj/main2.jpg";
import image2 from "@/assets/zdj/pawel3.jpg";
import image3 from "@/assets/zdj/maciej.jpg";

import Notes from "./Notes.vue";

export default {
  name: "About",
  components: {
    Notes,
  },
  data() {
    return {
      image: image,
      image2: image2,
      image3: image3,
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
  transition-duration: 0.8s;
}

.about__block:hover .image {
  filter: grayscale(10%);
}

.about__block--text-block {
  min-height: 20rem;
  padding: 30px 12px;
  text-decoration: none;
}

.about__block .btn {
  width: fit-content;
  left: 50%;
  transform: translate(-50%, 0);
}

#about-large-second {
  object-position: center center;
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
