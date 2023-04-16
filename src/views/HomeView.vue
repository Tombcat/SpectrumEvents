<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Team from "../components/Team.vue";
import Equipment from "../components/Equipment.vue";
import Games from "../components/Games.vue";

import SpiningLogo from "../components/SpiningLogo.vue";
import Contact from "../components/Contact.vue";
import Extras from "../components/Extras.vue";
</script>

<template>
  <main>
    <!--<TheWelcome />-->
    <Hero />

    <About />

    <Extras />
    <Contact />

    <!--<Team />
    <Games />-->
  </main>
</template>

<style>
main {
  overflow-x: hidden;
}
</style>
