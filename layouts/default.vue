<template>
  <div
    class="
      bg-gray-1000
      min-h-screen
      flex flex-wrap
      sm:flex-nowrap
      overflow-x-hidden
    "
  >
    <LoadingBar />
    <HeaderBar>
      <!-- <ColorModePicker class="fixedUP" /> -->
      <LoginCard
    /></HeaderBar>

    <div @click="toggleSidebar" class="burgerMenu">
      <img
        src="https://s2.svgbox.net/hero-solid.svg?ic=menu-alt-2&color=fff"
        width="30"
        height="30"
      />
      <!-- <h1 v-if="!collapsed" class="opclText">close menu</h1>
      <h1 v-else class="opclText">open menu</h1> -->
    </div>

    <SideBar class="fixed sm:relative w-80 min-h-screen z-20" />
    <div class="w-full">
      <Modal class="z-50" />
      <Nuxt class="p-3 sm:p-8" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "@nuxtjs/composition-api";
import LoadingBarVue from "~/components/modals/LoadingBar.vue";
import { useConnect } from "~/composables/web3/useConnect";
import sugarLogo from "~/components/atoms/sugarLogo.vue";
import { useModal } from "~/composables/useModal";
import colorModePicker from "~/components/atoms/colorModePicker.vue";
import {
  collapsed,
  closed,
  toggleSidebar,
  sidebarWidth,
  sidebarClose,
} from "~/composables/toggleSidebar.ts";
import HeaderBar from "~/components/nav/HeaderBar.vue";
import SugarLogo from "~/components/atoms/sugarLogo.vue";
import LoadingBar from "~/components/modals/LoadingBar.vue";
export default defineComponent({
  components: {
    sugarLogo,
    HeaderBar,
    SugarLogo,
    LoadingBar,
  },
  setup() {
    const { showMintingModal } = useModal();
    useConnect();

    return {
      showMintingModal,
      collapsed,
      closed,
      toggleSidebar,
      sidebarWidth,
      sidebarClose,
      colorModePicker,
      LoadingBarVue,
    };
  },
});
</script>

<style scoped>
.containedWidth {
  max-width: 170px;
}

body {
  overflow-x: hidden;
}
@media (min-width: 320px) {
  .burgerMenu {
    position: absolute;
    top: 25px;
    left: 25px;
    width: 30px;
    height: 30px;
    z-index: 40;
    opacity: 0.7;
  }
}
@media (min-width: 620px) {
  .burgerMenu {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 30px;
    height: 30px;
    z-index: 40;
    opacity: 0.7;
    display: none;
  }
}
.opclText {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  color: var(--color-secondary) !important;
  cursor: pointer;
  white-space: nowrap;
}

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: var(--color-secondary);
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-secondary);
}
::-webkit-scrollbar-thumb:active {
  background: #7021c0;
}
::-webkit-scrollbar-track {
  background: #251c48;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #251c48;
}
::-webkit-scrollbar-track:active {
  background: #251c48;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>