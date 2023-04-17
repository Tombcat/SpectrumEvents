<template>
  <section id="Team">
    <div class="container-fluid p-2" id="teamMembers">
      <TeamMember photo="pawel.jpg" name="Paweł">
        <template v-slot:description>
          Założyciel Spectrum Events. W branży muzycznej od ponad 15 lat, gdzie
          zbierał doświadczenie również jako wokalista i gitarzysta grając we
          własnym zespole weselnym. Prowadzenie imprez, zabaw, zarażanie
          pozytywną energią oraz interakcja z gośćmi to jego naturalne
          środowisko.
        </template>
      </TeamMember>
      <TeamMember photo="marcin.jpg" name="Marcin" :left="true">
        <template v-slot:description>
          Ponad 7 lat doświadczenia w prowadzeniu imprez. Aktualny rezydent
          wielu klubów muzycznych, które nauczyły go nowego podejścia do pojęcia
          “muzyka”. Uwielbia wzbudzać emocje za pomocą fal akustycznych. Poza
          muzyką dba o efekty wizualne i techniczne.
        </template>
      </TeamMember>
      <TeamMember photo="sebastian.jpg" name="Sebastian">
        <template v-slot:description>
          W branży eventowej od 12 lat. Jego motto brzmi: „Muzyką łączyć
          pokolenia”. Jest również specjalistą od architektury świetlnej, dzięki
          czemu podkreśla romantyczny klimat każdej sali weselnej.
        </template>
      </TeamMember>
      <TeamMember photo="grzegorz.jpg" name="Grzegorz" :left="true">
        <template v-slot:description>
          W branży eventowej od 7 lat. Zaraża pozytywną energią każdego, kto
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
          Doświadczenie zbierał od 2015 roku w wielu firmach filmujących imprezy
          okolicznościowe. Widzi przez obiektyw to, czego nie widać na pierwszy
          rzut oka. Uwiecznianie wspomnień w ruchu to według niego
          najpiękniejsza forma pamiątki.
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
};
</script>

<style>
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
</style>
