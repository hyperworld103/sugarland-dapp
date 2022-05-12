<template>
  <transition :duration="{ enter: 300, leave: 200 }">
    <div v-if="isShown" class="modalBackground" @click.self="close()">
      <div class="absolute top-10 right-10">
        <p class="cursor-pointer" @click="close()">Close</p>
      </div>

      <transition
        enter-active-class="duration-300 ease-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div class="modalPopUp z-30">
          <h1 class="modalTitle">Create an abyssal presence</h1>

          <minting-box />

          <PopFromShadow class="w-52 self-center">
            <button-default placeholder="Mint Presence"
          /></PopFromShadow>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useModal } from "~/composables/useModal";
import ButtonDefault from "../atoms/ButtonDefault.vue";
import InputRange from "../atoms/inputRange.vue";
import MintingBox from "../reusable/MintingBox.vue";
export default defineComponent({
  name: "sugarPopup",
  props: {
    show: { type: Boolean, default: false },
  },
  setup() {
    const { isShown, props, modal, close } = useModal();
    return { isShown, props, modal, close };
  },
  components: { InputRange, MintingBox, ButtonDefault },
});
</script>

<style scoped>
.modalBackground {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(55, 55, 55, 0.6);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modalPopUp {
  max-height: 550px;
  max-width: 650px;
  background: #faefef;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 80px;
  /* padding-inline: 120px; */
  border-radius: 30px;
  padding: 75px;
}
.modalTitle {
  padding-top: 20px;
  padding-bottom: 60px;
}
h1 {
  color: var(--color-primary);
}
</style>
