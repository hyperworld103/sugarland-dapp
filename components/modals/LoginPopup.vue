<template>
  <div v-if="isShown" class="modalBackground" @click.self="close()">
    <div class="absolute top-10 right-10">
      <transition :duration="{ enter: 300, leave: 200 }">
        <p class="cursor-pointer" @click="close()">Close</p>
      </transition>
    </div>
    <div class="modalPopUp z-30">
      <h1 class="modalTitle">Connect your wallet</h1>

      <button
        v-for="(wallet, key) in wallets"
        :key="key"
        :disabled="connecting"
        @click="connect(wallet.connector)"
        class="myButt"
      >
        <component :is="wallet.iconURL" class="w-7 h-7 text-white mx-3" />
        {{ wallet.name }}
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import { useWeb3 } from "@instadapp/vue-web3";
import { useWallets } from "~/composables/web3/useWallets";
import { useModal } from "~/composables/useModal";
import InputRange from "../atoms/inputRange.vue";
export default defineComponent({
  name: "LoginPopup",
  props: {
    show: { type: Boolean, default: false },
  },
  setup() {
    const { activate } = useWeb3();
    const { wallets } = useWallets();
    const { isShown, props, modal, close } = useModal();

    const connecting = ref(false);
    const connect = async (connector) => {
      connecting.value = true;
      try {
        await activate(connector, undefined, true);
        connecting.value = false;
        close();
      } catch (error) {
        console.error(error.message);
      }
      connecting.value = false;
    };

    return {
      isShown,
      props,
      modal,
      wallets,
      connecting,
      connect,
      close,
    };
  },
  components: { InputRange },
});
</script>

<style scoped>
.myButt {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 600;
  background: rgba(62, 31, 100, 0.4);
  box-shadow: 0px 24px 74px rgba(37, 0, 84, 0.5);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-inline: 25px;
  padding-block: 7px;
  border-radius: 10px;
  color: #fff;
}

h1 {
  color: #fff;
}
.modalBackground {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  box-shadow: 0px 2px 20px -2px #53378d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modalPopUp {
  max-height: 500px;
  max-width: 650px;
  background: #2f2054;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 80px;
  /* padding-inline: 120px; */
  border-radius: 30px;
  margin-inline: 20px;
  padding: 75px;
}
.modalTitle {
  padding-top: 20px;
  padding-bottom: 80px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
}
</style>
