<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Team from "../components/Team.vue";
import Equipment from "../components/Equipment.vue";
import Games from "../components/Games.vue";
</script>

<template>
  <main>
    <!--<TheWelcome />-->
    <Hero />
    <About />
    <Games />
    <Team />

    <div id="empty"></div>
  </main>
</template>

<style>
#empty {
  height: 100vh;
}

main {
  overflow-x: hidden;
}
</style>
