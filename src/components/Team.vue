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
    <div class="container-fluid p-2">
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
/*#Team {
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Ccircle stroke='%23F3CB2D' vector-effect='non-scaling-stroke' id='a' fill='none' stroke-width='5' r='315'/%3E%3Cuse id='f' href='%23a' stroke-dasharray='100 100 100 9999'/%3E%3Cuse id='b' href='%23a' stroke-dasharray='250 250 250 250 250 9999'/%3E%3Cuse id='e' href='%23a' stroke-dasharray='1000 500 1000 500 9999'/%3E%3Cuse id='g' href='%23a' stroke-dasharray='1500 9999'/%3E%3Cuse id='h' href='%23a' stroke-dasharray='2000 500 500 9999'/%3E%3Cuse id='j' href='%23a' stroke-dasharray='800 800 800 800 800 9999'/%3E%3Cuse id='k' href='%23a' stroke-dasharray='1200 1200 1200 1200 1200 9999'/%3E%3Cuse id='l' href='%23a' stroke-dasharray='1600 1600 1600 1600 1600 9999'/%3E%3C/defs%3E%3Cg transform='translate(1000 750)' %3E%3Cg %3E%3Ccircle fill='%23F3CB2D' r='10'/%3E%3Cg transform=''%3E%3Cuse href='%23f' transform='scale(.1) rotate(50 0 0)' /%3E%3Cuse href='%23f' transform='scale(.2) rotate(100 0 0)' /%3E%3Cuse href='%23f' transform='scale(.3) rotate(150 0 0)' /%3E%3C/g%3E%3Cg transform=''%3E%3Cuse href='%23b' transform='scale(.4) rotate(200 0 0)' /%3E%3Cuse href='%23z' transform='scale(.5) rotate(250 0 0)' /%3E%3C/g%3E%3Cg id='z' transform=''%3E%3Cg transform=''%3E%3Cuse href='%23b'/%3E%3Cuse href='%23b' transform='scale(1.2) rotate(90 0 0)' /%3E%3Cuse href='%23b' transform='scale(1.4) rotate(60 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.6) rotate(120 0 0)' /%3E%3Cuse href='%23e' transform='scale(1.8) rotate(30 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg id='y' transform=''%3E%3Cg transform=''%3E%3Cuse href='%23e' transform='scale(1.1) rotate(20 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.3) rotate(-40 0 0)' /%3E%3Cuse href='%23g' transform='scale(1.5) rotate(60 0 0)' /%3E%3Cuse href='%23h' transform='scale(1.7) rotate(-80 0 0)' /%3E%3Cuse href='%23j' transform='scale(1.9) rotate(100 0 0)' /%3E%3C/g%3E%3C/g%3E%3Cg transform=''%3E%3Cg transform=''%3E%3Cg transform=''%3E%3Cuse href='%23h' transform='scale(2) rotate(60 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.1) rotate(120 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.3) rotate(180 0 0)'/%3E%3Cuse href='%23h' transform='scale(2.4) rotate(240 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.5) rotate(300 0 0)'/%3E%3C/g%3E%3Cuse href='%23y' transform='scale(2) rotate(180 0 0)' /%3E%3Cuse href='%23j' transform='scale(2.7)'/%3E%3Cuse href='%23j' transform='scale(2.8) rotate(45 0 0)'/%3E%3Cuse href='%23j' transform='scale(2.9) rotate(90 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.1) rotate(135 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.2) rotate(180 0 0)'/%3E%3C/g%3E%3Cuse href='%23k' transform='scale(3.3) rotate(225 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.5) rotate(270 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.6) rotate(315 0 0)'/%3E%3Cuse href='%23k' transform='scale(3.7)'/%3E%3Cuse href='%23k' transform='scale(3.9) rotate(75 0 0)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}*/
</style>
