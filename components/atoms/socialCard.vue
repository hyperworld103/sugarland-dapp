<template>
  <div class="socialIConsWrap flex-row justify-center">
    <ul class="socialICons">
      <!-- v-if="$colorMode.value === 'dark'" -->
      <li>
        <a target="_blank" href="https://twitter.com/sugarlandcoin"
          ><img
            src="https://s2.svgbox.net/social.svg?ic=twitter&color=f2f2f2"
            width="15"
            height="15"
        /></a>
      </li>
      <li>
        <a target="_blank" href="https://t.me/SugarLandChat"
          ><img
            src="https://s2.svgbox.net/social.svg?ic=telegram&color=f2f2f2"
            width="15"
            height="15"
        /></a>
      </li>
      <li>
        <a target="_blank" href="https://discord.gg/V3ZHGHMqpp"
          ><img
            src="https://s2.svgbox.net/social.svg?ic=discord&color=f2f2f2"
            width="15"
            height="15"
        /></a>
      </li>
      <li>
        <a target="_blank" href=""
          ><img
            src="https://s2.svgbox.net/social.svg?ic=facebook&color=f2f2f2"
            width="15"
            height="15"
        /></a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/sugarland_IG"
          ><img
            src="https://s2.svgbox.net/social.svg?ic=instagram&color=f2f2f2"
            width="15"
            height="15"
        /></a>
      </li>
    </ul>
    <!--  <ul v-else class="socialICons">
      <li>
        <a target="_blank" href="https://twitter.com/sugarlandcoin"
          ><img
            src="https://s2.svgbox.net/social.svg?ic=twitter&color=8224e3"
            width="15"
            height="15"
        /></a>
      </li>
      <li>
        <a target="_blank" href="https://t.me/SugarLandChat"
          ><img
            src="https://s2.svgbox.net/social.svg?ic=telegram&color=8224e3"
            width="15"
            height="15"
        /></a>
      </li>
      <li>
        <a target="_blank" href="https://discord.gg/V3ZHGHMqpp"
          ><img
            src="https://s2.svgbox.net/social.svg?ic=discord&color=8224e3"
            width="15"
            height="15"
        /></a>
      </li>
      <li>
        <a target="_blank" href=""
          ><img
            src="https://s2.svgbox.net/social.svg?ic=facebook&color=8224e3"
            width="15"
            height="15"
        /></a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/sugarland_IG"
          ><img
            src="https://s2.svgbox.net/social.svg?ic=instagram&color=8224e3"
            width="15"
            height="15"
        /></a>
      </li>
    </ul> -->
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
.socialIConsWrap {
  position: absolute;
  bottom: 10px;
}

li {
  margin-inline: 15px;
  transition: all ease 0.5s;
}

li:hover {
  opacity: 0.7;
}
.socialICons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.logoSugar {
  margin-block: 12px;
  margin-block-end: 33px;
}
</style>