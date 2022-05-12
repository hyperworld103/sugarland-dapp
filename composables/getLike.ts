import { computed, ref } from "@nuxtjs/composition-api";

export const changeStyle = computed(() => {
  return {
    transition: `all ease 0.5s`,
    color: `white`,
  };
});
