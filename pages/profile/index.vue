<template>
  <section class="flex-row h-screen w-screen">
    <div class="flex-col justify-center items-center">
      <h1 class="mt-8 insetG">Here you can stake your collected NFTs</h1>
      <div class="collectionsWrapper pb-10 py-4">
        <!--  <PresenceFullCard
          class="collectionCard"
          v-for="Preview in Previews"
          :key="Preview.id"
        >
          <img class="imgCollection" :src="Preview.image" alt="" />
          <div class="text-left py-8 pb-8">
            <ul class="text-left">
              <li>
                Name:
                <span >{{ Preview.collectionName }}</span>
              </li>
              <li>
                Artist/s:
                <span >{{ Preview.artistName }} </span>
              </li>
              <li>
                Type:
                <span >{{ Preview.collectionType }}</span>
              </li>
            </ul>
          </div>
          <PopFromShadow class="w-52 self-center">
            <button-default
              placeholder="Discover Collection"
              @clicked="showMintingModal"
          /></PopFromShadow>
        </PresenceFullCard> -->
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
        image: "https://beystudio.it/wp-content/uploads/2020/12/ARTWORK.svg",
        collectionName: "Cool Bananas",
        artistName: "Fausto della Villa",
        collectionType: "Random Generated",
      },
      {
        id: "2",
        image: "https://beystudio.it/wp-content/uploads/2020/12/ADV.svg",
        collectionName: "Hot Bananas",
        artistName: "Adriano D'Elia",
        collectionType: "Random Generated",
      },
    ]);
    return { Previews, showMintingModal };
  },
  components: { PopFromShadow, PopFromShadow1, PresenceFullCard },
});
</script>

<style>
div {
  display: flex;
  flex-direction: column;
}
h1 {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
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
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: var(--color-secondary);
}
li {
  padding-block: 5px;
}
ul {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  font-weight: 400;
  text-align: center;
}

.imgCollection {
  width: 150px;
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
  .insetG {
    margin-top: 120px;
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
  .insetG {
    margin-left: 280px;
    margin-top: 100px;
  }
}
</style>