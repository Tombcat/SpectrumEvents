<template>
  <section id="Team">
    <div class="text-center" ref="heading">
      <h2 class="text-primary">Poznajcie nas zespół</h2>
      <p>niezłe z nas kocury</p>
    </div>

    <div class="background">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 0 1000 120"
      >
        <rect fill="#000000" width="1000" height="120" />
        <g fill="none" stroke="#222" stroke-width="10" stroke-opacity="1">
          <path
            d="M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"
          />
          <path
            d="M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"
          />
          <path
            d="M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"
          />
          <path
            d="M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"
          />
          <path
            d="M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"
          />
          <path
            d="M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30"
          />
        </g>
      </svg>
    </div>
    <div class="container-fluid p-2" id="teamMembers">
      <TeamMember photo="pawel.jpg" name="Paweł">
        <template v-slot:description>
          W branży muzycznej od ponad 15 lat, gdzie zbierał doświadczenie
          również jako wokalista i gitarzysta grając we własnym zespole
          weselnym. Prowadzenie imprez, zarażanie pozytywną energią oraz
          interakcja z gośćmi to jego naturalne środowisko.
        </template>
      </TeamMember>
      <TeamMember photo="marcin.jpg" name="Marcin" :left="true">
        <template v-slot:description>
          Ponad 7 lat doświadczenia w prowadzeniu imprez. Aktualny rezydent
          wielu klubów muzycznych, które nauczyły go nowego podejścia do pojęcia
          “muzyka”. Uwielbia wzbudzać emocje za pomocą fal akustycznych. Poza
          muzyką dba o efekty wizualne, te świetlne i te ze szczyptą magii w
          rękawie.
        </template>
      </TeamMember>
      <TeamMember photo="sebastian.jpg" name="Sebastian">
        <template v-slot:description>
          W branży eventowej od 10 lat. Jego motto brzmi: „Muzyką łączyć
          pokolenia”. Jest również specjalistą od architektury świetlnej, dzięki
          czemu podkreśla romantyczny klimat każdej sali weselnej.
        </template>
      </TeamMember>
      <TeamMember photo="grzegorz.jpg" name="Grzegorz" :left="true">
        <template v-slot:description>
          W branży eventowej od 7 lat. Zaraża pozytywną energią każdego kto
          pojawi się na parkiecie.
        </template>
      </TeamMember>
      <TeamMember photo="michal.jpg" name="Michał" role="Saksofonista">
        <template v-slot:description>
          Doświadczenia muzyczne zbierał w krajowych i zagranicznych salach
          koncertowych, z których najznamienitszą była nowojorska Carnegie Hall.
          Występował z największymi gwiazdami polskiej muzyki rozrywkowej: Ewą
          Bem, Zbigniewem Wodeckim, Ryszardem Rynkowskim, Krystyną Prońko, Hanną
          Banaszak i Andrzejem Piasecznym.
        </template>
      </TeamMember>
      <TeamMember
        photo="kamil.jpg"
        name="Kamil"
        role="Kamerzysta / Fotograf"
        :left="true"
      >
        <template v-slot:description>
          Najlepszy ziomek mojego ziomka jakiego znam, ogólnie jego filmiki
          zawsze mają początek i koniec :)
        </template>
      </TeamMember>
    </div>
  </section>
</template>

<script>
import TeamMember from "@/components/TeamMember.vue";

export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    TeamMember,
  },
  methods: {
    animate() {
      const { heading } = this.$refs;

      console.log("team element", heading);

      this.gsap.fromTo(
        heading,
        2,
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
            trigger: heading,
            start: "center 80%",
            //markers: true,
            toggleActions: "play none none reverse",
          },
        }
      );
      /*const { background } = this.$refs;
      console.log(background);

      const q = this.gsap.utils.selector(this.$refs.background);

      console.log(q("#f")["stroke-dasharray"]);*/
    },
  },
  mounted() {
    this.$nextTick(() => this.animate());
  },
};
</script>

<style>
.background {
  width: 100%;
  position: absolute;
  height: 100%;
  display: none;
}
#teamMembers {
  background: linear-gradient(
      45deg,
      var(--color-primary-darken) 10%,
      transparent 11%,
      transparent 89%,
      var(--color-primary-darken) 90%
    ),
    linear-gradient(
      135deg,
      var(--color-primary-darken) 10%,
      transparent 11%,
      transparent 89%,
      var(--color-primary-darken) 90%
    ),
    radial-gradient(circle, transparent 25%, #181818 26%),
    linear-gradient(
      45deg,
      transparent 46%,
      var(--color-primary-darken) 47%,
      var(--color-primary-darken) 52%,
      transparent 53%
    ),
    linear-gradient(
      135deg,
      transparent 46%,
      var(--color-primary-darken) 47%,
      var(--color-primary-darken) 52%,
      transparent 53%
    );
  background-size: 3em 3em;
  background-color: #181818;
  opacity: 1;
  box-shadow: 0 0 500px rgba(0, 0, 0, 0.9) inset;
}

/*background-color: #e5e5f7;
opacity: 0.8;
background: radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent) 25px 25px, linear-gradient(#444cf7 2px, transparent 2px) 0 -1px, linear-gradient(90deg, #444cf7 2px, #e5e5f7 2px) -1px 0;
background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
*/
</style>
