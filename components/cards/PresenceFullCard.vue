<template>
  <PopFromShadow
    ><div class="backgroundCard">
      <slot></slot>
    </div>
  </PopFromShadow>
</template> 

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import PopFromShadow from "../atoms/popFromShadow.vue";
export default defineComponent({
  name: "PresenceFullCard",

  setup(props) {
    const Previews = ref([]);
    return { Previews };
  },
  components: { PopFromShadow },
});
</script>





<style scoped>
.backgroundCard {
  max-height: 490px;
  max-width: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 80px;
  padding-inline: 60px;
}
img {
  max-width: 80px;
  padding-block: 20px;
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
  text-align: center;
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
  text-align: center;
  color: var(--color-secondary) !important;
}
</style>