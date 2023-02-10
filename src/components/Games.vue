<template>
  <section id="games">
    <div class="container-fluid mb-5">
      <div class="row">
        <h1 class="text-primary">Zabawy weselne</h1>
        <p>
          Każde wesele jest wyjątkowe i unikatowe! Do zabaw weselnych
          podchodzimy indywidualnie, stale obserwując reakcje i nastawienie
          gości weselnych. Prezentujemy kilka przykładowych zabaw, które cieszą
          się największą popularnością, a wybór zostawiamy Wam!
        </p>
      </div>
    </div>
    <div class="container-fluid">
      <GameSingle photo="1.jpg" title="Animacje taneczne">
        <template v-slot:description>
          Razem tańczymy układy, które pokazuje DJ/Wodzirej. Tańce są proste,
          ale efektowne. Zabawa zarówno dla starszych jak i dla młodszych.
        </template>
      </GameSingle>
      <GameSingle photo="2.jpg" title="Jaka to melodia?" :reversed="true">
        <template v-slot:description>
          Tworzymy dwa zespoły, podchodzimy kolejno do przycisków i zgadujemy
          tytuły granych utworów. To trudniejsze niż wygląda w TV :)
        </template>
      </GameSingle>
      <GameSingle photo="3.jpg" title="Literki">
        <template v-slot:description>
          Każdy z dwóch zespołów dostaje kamizelki z poduszkami na których
          umieszczone są litery. Zadaniem każdego zespołu jest ułożenie
          odpowiedzi na pytanie szybciej niż drużyna przeciwna.
        </template>
      </GameSingle>
      <GameSingle photo="4.jpg" title="Budowanie wieży" :reversed="true">
        <template v-slot:description>
          Kolejna drużynowa zabawa integrująca gości weselnych. Rywalizacja
          pomiędzy zespołem Pani i Pana Młodego. Zabawa pozornie banalna
          zapewnia bardzo dużo emocji.
        </template>
      </GameSingle>
      <GameSingle photo="5.jpg" title="Alko-gogle">
        <template v-slot:description>
          Slalom wśród pachołków w goglach imitujących 3 promile.
        </template>
      </GameSingle>
      <GameSingle photo="6.jpg" title="Test zgodności." :reversed="true">
        <template v-slot:description>
          Pozwala sprawdzić jak dobrze się znacie
        </template>
      </GameSingle>
      <GameSingle photo="7.jpg" title="Oczepiny">
        <template v-slot:description>
          Tradycyjna zabawa prowadzona w nieco odświeżonej formule.
        </template>
      </GameSingle>
    </div>
  </section>
</template>

<script>
import GameSingle from "@/components/GameSingle.vue";

export default {
  name: "Wedding Games",
  components: {
    GameSingle,
  },
  mounted() {
    console.log("Wedding Games mounted");
  },
};
</script>

<style>
#games {
  margin-top: 5vw;
}
</style>
