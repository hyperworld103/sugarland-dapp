<template>
  <div class="newsCard">
    <h1>Sugarland News</h1>
    <p>
      Price and Marketcap Data will reflect once $SUGAR is listed on CoinGecko.
    </p>
    <slot></slot>
  </div>
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
.newsCard {
  z-index: 10;
  height: 350px;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(62, 31, 100, 0.4);
  box-shadow: 0px 24px 74px rgba(37, 0, 84, 0.5);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-inline: 30px;
  padding-block: 20px;
  margin-inline: 20px;
  margin-block: 30px;
}
img {
  max-width: 80px;
  padding-block: 20px;
}

h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  margin-block-end: 20px;
}

p {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  color: #fff;
  opacity: 0.8;
}
</style>