<template>
  <div class="swapCard">
    <div class="InnerSwap">
      <h1 class="singleDataSwap">Swap</h1>

      <!-- Primo Input -->
      <div class="singleDataSwap">
        <input class="inputText" type="text" placeholder="0.00" />
      </div>

      <!-- icona cambio -->
      <div class="swapInvert">
        <img
          src="https://s2.svgbox.net/materialui.svg?ic=swap_vertical_circle&color=fff"
          width="25"
          height="25"
        />
      </div>

      <!-- Secondo Input -->
      <div class="singleDataSwap mb-8">
        <input class="inputText" type="text" placeholder="0.00" />
      </div>

      <ButtonDefault
        v-if="!active"
        placeholder="Connect Your Wallet"
        @clicked="showMintingModal"
      />
      <ButtonDefault v-else placeholder="Swap" />
    </div>
  </div>
</template> 

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import { useWeb3 } from "@instadapp/vue-web3";
import PopFromShadow from "~/components/atoms/popFromShadow.vue";
import LoginPopup from "~/components/modals/LoginPopup.vue";
import ChooseToken from "./ChooseToken.vue";
import { useModal } from "~/composables/useModal";

export default defineComponent({
  name: "SwapInputs",

  setup() {
    const { active } = useWeb3();
    const { showMintingModal } = useModal(LoginPopup);

    return { active, showMintingModal };
  },
  components: { PopFromShadow, ChooseToken },
});
</script>





<style scoped>
.swapInvert {
  margin-block: 10px;
}
.singleDataSwap {
  padding-block: 10px;
}
.InnerSwap {
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttonPresent {
  display: flex;
  flex-direction: row;
  font-size: 14px;
}
.inputText {
  outline: none;
  padding-block: 7px;
  padding-inline: 20px;
  border-radius: 10px;
  color: #9034e5;
  margin-right: 10px;
}

.inputText:active {
  outline: none;
}

h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: left;
  font-style: normal;
  line-height: 23px;
}
h2 {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: left;
  font-style: normal;
  line-height: 23px;

  white-space: nowrap;
}

span {
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  font-style: normal;
  font-weight: 200;
  line-height: 23px;
  text-align: center;
  color: #fff !important;
}

.swapCard {
  background: rgba(255, 225, 225, 1);
  background: linear-gradient(179.98deg, #3d2062 0.02%, #431f64 99.98%);
  box-shadow: 0px 24px 74px rgba(37, 0, 84, 0.5);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

@media (min-width: 320px) {
  .swapCard {
    margin-left: 0;
  }
}
@media (min-width: 620px) {
  .swapCard {
    margin-left: 280px;
  }
}
</style>