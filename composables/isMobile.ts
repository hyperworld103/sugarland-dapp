import { defineComponent, ref } from "@vue/composition-api";
import NuxtSSRScreenSize from "nuxt-ssr-screen-size";

export default defineComponent({
  setup() {
    let mixins = NuxtSSRScreenSize;
    /*     function isMobile() {
      if (process.server) {
        if (mixins) {
          return true;
        } else {
          return false;
        }
      }
    } */
    return mixins;
  },
});
