<template>
  <section class="flex-row h-screen w-screen">
    <div class="collectionsWrapper py-4">
      <div class="dataBox flex-row">
        <DataTab>
          <h3>Current Price:</h3>
          <span>N/A</span>
        </DataTab>
        <DataTab>
          <h3>Holders:</h3>
          <span>{{ total_holders }}</span>
        </DataTab>
        <DataTab>
          <h3>Circulating:</h3>
          <span>N/A</span>
        </DataTab>
        <DataTab>
          <h3>Market Cap:</h3>
          <span>N/A</span>
        </DataTab>
      </div>

      <div class="afterDataBox">
        <!-- <ChartCard></ChartCard> -->
        <NewsCard> </NewsCard>
      </div>
    </div>
  </section>
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  useContext,
} from "@nuxtjs/composition-api";
import PopFromShadow from "~/components/atoms/popFromShadow.vue";
import sugarPopup from "~/components/modals/sugarPopup.vue";
import { useModal } from "~/composables/useModal";
import useSugarToken from "~/composables/token/useSugarToken.ts";

import NuxtSSRScreenSize from "nuxt-ssr-screen-size";
import ChartCard from "~/components/cards/token/chartCard.vue";

export default defineComponent({
  mixins: [NuxtSSRScreenSize.NuxtSSRScreenSizeMixin],

  setup(mixins) {
    const { $moralis } = useContext();
    const {
      SugarPrice,
      sugarSupply,
      sugarMarketCap,
      SUGAR_ADDRESS,
      SUGAR_GENESIS_BLOCK,
    } = useSugarToken();

    const { showMintingModal } = useModal(sugarPopup);

    let Details = ref([mixins]);

    const total_holders = ref(0);

    onMounted(async () => {
      //await $moralis.initPlugins();
      // const changesInHolders = {
      //   chainId: 56,
      //   contractAddress: SUGAR_ADDRESS,
      //   blockHeight: 13305200,
      //   endingBlock: (SUGAR_GENESIS_BLOCK * 2).toString(),
      // };

      const res = await $moralis.Cloud.run("get_total_holders", {});
      // const holders = await $moralis.Plugins.covalent.getBlockTokenHolders(
      //   changesInHolders
      // );
      total_holders.value = res;
    });

    return {
      showMintingModal,
      Details,
      NuxtSSRScreenSize,
      mixins,
      SugarPrice,
      sugarSupply,
      sugarMarketCap,
      total_holders,
    };
  },
  components: { PopFromShadow, ChartCard },
});
</script>

<style>
body {
  background: rgba(104, 51, 134, 1);
  background: linear-gradient(
    118.23deg,
    #683386 16.85%,
    #48236d 64.32%,
    #311c5d 100.59%
  );
}
div {
  display: flex;
  flex-direction: column;
}
h1 {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 23px;
  font-weight: 400;
  text-align: center;
  line-height: 1.8;
  color: #fff;
}
h3 {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 18px;
  line-height: 23px;
  font-weight: 400;
  text-align: center;
  line-height: 1.8;
  color: var(--color-tertiary);
}

p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 23px;
  font-weight: 400;
  text-align: center;
  color: var(--color-tertiary);
}

span {
  font-weight: 600;
  font-size: 18px;
  color: var(--color-tertiary);
}

.wrapper {
  max-width: 420px;
}

.purple {
  color: #9034e5;
}

@media (min-width: 320px) {
  .wrapper {
    max-width: 420px;
    padding-inline: 40px;
  }
  .collectionsWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-block: 40px;
    margin-inline-start: 0;
  }
  .dataBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-block-start: 50px;
    margin-block-end: 20px;
  }
  .afterDataBox {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
}

@media (min-width: 620px) {
  .wrapper {
    max-width: 485px;
  }
  .collectionsWrapper {
    padding-block: 40px;
    margin-inline-start: 390px;
  }
  .dataBox {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-block-start: 40px;
    margin-block-end: 20px;
  }
  .afterDataBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-inline-start: -25px;
  }
}
</style>
