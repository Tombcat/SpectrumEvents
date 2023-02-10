<template>
  <section id="Team">
    <div class="container-xl mt-5">
      <div class="row text-center">
        <h1 class="text-primary">Poznajcie nas zespół</h1>
        <p>niezłe z nas kocury</p>
      </div>
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
  mounted() {},
};
</script>

<style></style>
