<template>
  <section class="flex-row h-screen w-screen">
    <div class="flex-col justify-center items-center">
      <div class="collectionsWrapper pb-10 py-12">
        <PresenceFullCard
          class="collectionCard"
          v-for="Preview in Previews"
          :key="Preview.id"
        >
          <img class="imgCollection" :src="Preview.image" alt="" />
          <div class="text-center py-4 pb-8">
            <ul class="text-center">
              <li>
                Name:
                <span>{{ Preview.collectionName }}</span>
              </li>
              <li>
                Util:
                <span>{{ Preview.artistName }} </span>
              </li>
              <li>
                Type:
                <span>{{ Preview.collectionType }}</span>
              </li>
            </ul>
          </div>
          <button-default
            class="buttonDefault"
            placeholder="Mint your NFT"
            @clicked="showMintingModal"
          />
        </PresenceFullCard>
      </div>
      <div class="flex-col align-middle"></div>
    </div>
  </section>
</template>


<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import PopFromShadow from "~/components/atoms/popFromShadow.vue";
import PopFromShadow1 from "~/components/atoms/popFromShadow.vue";
import IncreaseMass from "~/components/modals/IncreaseMass.vue";
import { useModal } from "~/composables/useModal";
import PresenceFullCard from "~/components/cards/PresenceFullCard.vue";

export default defineComponent({
  setup() {
    const { showMintingModal } = useModal(IncreaseMass);

    let Previews = ref([
      {
        id: "1",
        image:
          "https://www.sugarlandcoin.com/wp-content/uploads/2021/11/Gif.gif",
        collectionName: "NFT Governance Key",
        artistName: "Access to Sugar Governance",
        collectionType: "Ultra Rare",
      },
      {
        id: "2",
        image:
          "https://www.sugarlandcoin.com/wp-content/uploads/2021/11/Gif.gif",
        collectionName: "NFT Box",
        artistName: "Random NFT from Sugarland",
        collectionType: "Rare",
      },
    ]);
    return { Previews, showMintingModal };
  },
  components: { PopFromShadow, PopFromShadow1, PresenceFullCard },
});
</script>

<style>
.buttonDefault {
  background-color: var(--border-color);
  padding-inline: 25px;
  padding-block: 7px;
  border-radius: 10px;
}
div {
  display: flex;
  flex-direction: column;
}
h1 {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 18px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: center;
}

p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  font-weight: 400;
  line-height: 23px;
  color: var(--color-secondary);
}
li {
  padding-block: 5px;
}
ul {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  font-weight: 400;
}

.imgCollection {
  width: 150px;
  border-radius: 10px;
}

@media (min-width: 320px) {
  .collectionCard {
    max-width: 400px;
    margin-block: 40px;
    margin-inline: 40px;
  }
  .collectionsWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media (min-width: 620px) {
  .collectionCard {
    max-width: 400px;
    margin-block: 40px;
    margin-inline: 50px;
  }
  .collectionsWrapper {
    display: flex;
    align-items: center;
  }
}
</style>