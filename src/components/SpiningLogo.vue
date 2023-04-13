<template>
  <div id="spining">
    <div id="background">
      <img id="vinyl" v-bind:src="image2" alt="" />
      <img id="logo" v-bind:src="image" alt="" />
    </div>
  </div>
</template>

<script>
import image from "@/assets/logo.png";
import image2 from "@/assets/turntable.png";

export default {
  name: "Spining Logo",
  data() {
    return {
      image: image,
      image2: image2,
    };
  },
};
</script>

<style>
#vinyl {
  width: 500px;
}

#logo {
  position: absolute;
  top: -365px;
  left: -245px;

  transform: perspective(400px) rotateX(28deg) rotateY(0deg) scale(0.24, 0.13);

  animation: spin 4s linear infinite;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: perspective(400px) rotateX(28deg) rotateY(0deg) scale(0.24, 0.13)
      rotate(360deg);
  }
}
</style>
