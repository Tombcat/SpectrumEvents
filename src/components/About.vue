<template>
  <section id="about">
    <div class="container-fluid">
      <div class="about">
        <div
          class="about__block about__block--text text-center d-flex flex-column justify-content-center order-2"
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
          <button class="btn mt-4">
            <a href="#contact">ZAPRASZAMY DO KONTAKTU</a>
          </button>
        </div>
        <div
          class="about__block about__block--full about__block--box-shadow comparisonSection order-3"
        >
          <div class="comparisonImage beforeImage">
            <img
              class="about__image about__image--fit-lt"
              v-bind:src="images[0].src"
              :style="{ objectPosition: images[0].position }"
              alt="DJ/Wodzirej Paweł trzymający mikrofon"
            />
          </div>
          <div class="comparisonImage afterImage">
            <img
              class="about__image"
              v-bind:src="images[1].src"
              :style="{ objectPosition: images[0].position }"
              alt="Marcin"
            />
          </div>
        </div>

        <div
          class="about__block about__small about__block--box-shadow order-1 order-md-4"
        >
          <img
            class="about__image"
            v-bind:src="images[2].src"
            :style="{ objectPosition: images[2].position }"
            alt="Marcin i Paweł z grupy spectrum events grających na konsoli djskiej"
          />
        </div>
      </div>

      <div class="about">
        <div
          class="about__block about__block--full about__block--box-shadow order-2 order-md-1"
        >
          <img
            id="about-large-second"
            class="about__image blur1"
            v-bind:src="images[3].src"
            :style="{ objectPosition: images[3].position }"
            alt="Grupa ludzi podrzuca Pana Młodego"
          />
        </div>
        <div
          class="about__block about__block--text text-center d-flex flex-column justify-content-center order-1"
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
          class="about__block about__block--text text-center d-flex flex-column justify-content-center order-3"
        >
          <h2 class="text-primary">Nasza ekipa</h2>
          <p>
            W skład całego zespołu wchodzą DJ’e/ Wodzireje, Konferansjerzy,
            profesjonalni saksofoniści, a także kamerzysta i licencjonowany
            droniarz.
          </p>

          <button class="btn mt-4">
            <RouterLink to="/ekipa">Więcej o nas</RouterLink>
          </button>
        </div>
        <div
          class="about__block about__block--text about__block--full-side text-center d-flex flex-column justify-content-center order-4"
        >
          <h2 class="text-primary">Dodatki</h2>
          <p>
            Jesteśmy ekipą od zadań specjalnych, dlatego mamy w ofercie również
            szereg innych usług, które uświetnią Waszą uroczystość.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "About",
  data() {
    return {
      images: [
        {
          src: this.getImageUrl("pawel3.jpg"),
          position: "40% top",
        },
        {
          src: this.getImageUrl("marcin2.jpg"),
          position: "30% top",
        },
        {
          src: this.getImageUrl("marcinpawel.jpg"),
          position: "59% top",
        },
        {
          src: this.getImageUrl("maciej.jpg"),
          position: "40% top",
        },
      ],
    };
  },
  methods: {
    getImageUrl(photo) {
      // This path must be correct for your file
      return new URL(`../assets/zdj/${photo}`, import.meta.url);
    },

    animate() {
      this.gsap.utils.toArray(".comparisonSection").forEach((section) => {
        let tl = this.gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "center center",
            // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
            end: () => "+=" + section.offsetWidth,
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
          defaults: { ease: "none" },
        });
        // animate the container one way...
        tl.fromTo(
          section.querySelector(".afterImage"),
          { xPercent: 100, x: 0 },
          { xPercent: 0 }
        )
          // ...and the image the opposite way (at the same time)
          .fromTo(
            section.querySelector(".afterImage img"),
            { xPercent: -100, x: 0 },
            { xPercent: 0 },
            0
          );
      });
    },
  },

  mounted() {
    this.$nextTick(() => this.animate());
  },
};
</script>

<style lang="scss">
#about {
  margin: var(--grid-gap) 0;
}

.about {
  display: grid;
  gap: var(--grid-gap);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-bottom: var(--grid-gap);
  &__image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
    transition-duration: var(--animation-time);
    transition-property: filter;
  }
  &__block {
    background: var(--color-background-soft);
    border-radius: 9px;
    height: 100%;
    position: relative;
    overflow: hidden;
    &--text {
      min-height: 15rem;
      padding: 32px 12px;
      text-decoration: none;
    }
    &--box-shadow {
      transition-duration: var(--animation-time);
      transition-property: box-shadow;
      &:hover {
        -webkit-box-shadow: 0px 0px 29px -1px var(--color-primary);
        -moz-box-shadow: 0px 0px 29px -1px var(--color-primary);
        box-shadow: 0px 0px 29px -1px var(--color-primary);
        .about__image {
          filter: grayscale(10%);
        }
      }
    }
    &--full {
      grid-row: span 2;
      /*max-height: 100%;*/
    }
    &--full-side {
      grid-column: 1 / 3;
    }
  }
}

#about-large-second {
  object-position: center center;
}

@media only screen and (max-width: 760px) {
  .about {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    &__block {
      grid-column: 1 / 3;
    }
  }

  .about__small {
    order: -5;
  }
}

.comparisonSection {
  position: relative;
  height: calc(100vh - var(--grid-gap) * 2);
  /*padding-bottom: 56.25%;*/
}
.comparisonImage {
  width: 100%;
  height: 100%;
}
.afterImage {
  position: absolute;
  overflow: hidden;
  top: 0;
  transform: translate(100%, 0px);
}
.afterImage img {
  transform: translate(-100%, 0px);
}
.comparisonImage img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
</style>
