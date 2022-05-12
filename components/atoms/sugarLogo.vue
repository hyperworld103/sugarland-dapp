<template>
  <div class="flex justify-center">
    <img
      class="logoSugar"
      src="https://www.sugarlandcoin.com/wp-content/uploads/2021/12/ExWhite.svg"
      alt=""
    />
    <!--     <img
      v-else
      class="logoSugar"
      src="https://www.sugarlandcoin.com/wp-content/uploads/2021/11/Logo_Light.png"
      alt=""
    /> -->
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "logoSugar",
  setup() {
    return {};
  },
});
</script>





<style scoped>
.logoSugar {
  margin-block-end: 25px;
  cursor: pointer;
  transform-style: preserve-3d;
  animation: rotate3d 5s linear infinite;
  width: 170px;
}

/* @keyframes rotate3d {
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }

  100% {
    transform: perspective(1000px) rotateY(360deg);
  }
} */
</style>