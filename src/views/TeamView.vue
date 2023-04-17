<template>
  <div class="overflow-hidden pt-2">
    <div class="text-center" ref="heading">
      <h1 class="text-primary p-3 text-uppercase">Poznajcie naszą ekipę</h1>
    </div>
    <Team />
  </div>
</template>

<script>
import Team from "../components/Team.vue";

export default {
  name: "Team Page",
  data() {
    return {};
  },
  components: {
    Team,
  },
};
</script>

<style>
@media (min-width: 1024px) {
  /*.about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }*/
}
</style>
