<template>
  <div class="flying">
    <ButtonDefault
      v-if="!active"
      placeholder="Connect Your Wallet"
      @clicked="showMintingModal"
    />
    <ButtonDefault
      v-else
      :placeholder="formatAddress(account) + ' [Disconnect]'"
      @clicked="deactivate"
    />
    <!-- <span v-if="active"> {{ account }}... </span> -->
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { useWeb3 } from "@instadapp/vue-web3";
import { useModal } from "~/composables/useModal";
import LoginPopup from "~/components/modals/LoginPopup.vue";
import formatAddress from "~/composables/formatAddress";
export default defineComponent({
  name: "LoginCard",
  setup() {
    const { active, deactivate, account } = useWeb3();
    const { showMintingModal } = useModal(LoginPopup);

    return {
      showMintingModal,
      active,
      account,
      deactivate,
      formatAddress,
    };
  },
});
</script>

<style scoped>
.flying {
  position: absolute;
  right: 50px;
  top: 16px;
  font-size: 12px;
  color: var(--color-tertiary);
}

@media (min-width: 320px) {
  .flying {
    position: absolute;
    right: 25px;
    top: 25px;
    font-size: 12px;
    color: var(--color-tertiary);
  }
}
@media (min-width: 520px) {
  .flying {
    position: absolute;
    right: 50px;
    top: 16px;
    font-size: 12px;
    color: var(--color-tertiary);
  }
}
</style>
