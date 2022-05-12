<template>
  <div class="flex justify-center">
    <img
      class="burgerMenu"
      src="https://s2.svgbox.net/hero-solid.svg?ic=menu-alt-2"
      alt=""
    />
  </div>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "burgerMenu",
  setup() {
    return {};
  },
});
</script>





<style scoped>
.burgerMenu {
  margin-block: 12px;
  cursor: pointer;
  transform-style: preserve-3d;
}
</style>