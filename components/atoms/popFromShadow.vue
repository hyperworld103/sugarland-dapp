<template>
  <div class="shadowWrapper">
    <!-- <slot></slot> -->
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "popFromShadow",
  setup() {
    return {};
  },
});
</script>





<style scoped>
.shadowWrapper {
  background: rgba(91, 39, 146, 0.3);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 10px;
  border-radius: 10px;
  padding-block: 5px;
  padding-inline: 12px;
  cursor: pointer;
}
</style>