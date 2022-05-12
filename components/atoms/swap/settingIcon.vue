<template>
  <div class="flex justify-center">
    <img
      class="settingIcon"
      src="https://s2.svgbox.net/hero-solid.svg?ic=cog"
      alt=""
    />
  </div>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "settingIcon",
  setup() {
    return {};
  },
});
</script>





<style scoped>
.settingIcon {
  margin-block: 12px;
  cursor: pointer;
  transform-style: preserve-3d;
}
</style>