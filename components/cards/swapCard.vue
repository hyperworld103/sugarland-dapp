<template>
  <div class="swapCardDetail">
    <SwapInputs></SwapInputs>
    <slot></slot>
  </div>
</template> 

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import SwapInputs from "../atoms/swap/SwapInputs.vue";
export default defineComponent({
  name: "SwapCard",
  setup() {
    return {};
  },
  components: { SwapInputs },
});
</script>





<style scoped>
img {
  max-width: 80px;
  padding-block: 20px;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  color: #acacac;
}

p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  color: #acacac;
}
.swapCardDetail {
  border-radius: 10px;
  padding-inline: 30px;
  padding-block: 15px;
  margin-inline: 15px;
}

.purple {
  color: var(--color-secondary) !important;
}
</style>