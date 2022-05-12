<template>
  <div class="flex-row justify-center align-middle relative">
    <div></div>
    <div class="pb-20 pt-12">
      <input
        name="mass"
        type="range"
        min="0"
        max="100000"
        step="1"
        v-model="mintingAmount"
      />
    </div>
    <div class="absolute burned flex-row justify-center align-middle">
      <span class="relative text-center">$ABY Burned: </span>
      <input
        class="align-middle text-center"
        type="text"
        :value="mintingAmount"
        @input="updateMintingAmount"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "@nuxtjs/composition-api";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "inputRange",
  setup() {
    let mintingAmount = ref(mintingAmount);
    mintingAmount = 0;
    function updateMintingAmount(type) {
      mintingAmount = type.target.value;
    }
    return { mintingAmount, updateMintingAmount };
  },
});
</script>

<style scoped>
input[type="text"] {
  background-color: transparent;
  max-width: 70px;
  margin-inline: 10px;
}

.burned {
  bottom: 40px;
}
input[type="range"] {
  width: 240px;
  margin: 5.8px 0;
  background-color: transparent;
  -webkit-appearance: none;
  transform: translate(0%, -50%);
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  background: #7c009b;

  border-radius: 24.6px;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  margin-top: -6px;
  width: 20px;
  height: 20px;
  background: #b93cb3;
  border: solid #b93cb3;
  border-radius: 50px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #7c009b;
}
input[type="range"]::-moz-range-track {
  background: #7c009b;

  border-radius: 24.6px;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #b93cb3;
  border: solid #b93cb3;
  border-radius: 50px;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  background: transparent;
  border-color: transparent;

  color: transparent;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
input[type="range"]::-ms-fill-lower {
  background: #7c009b;

  border-radius: 49.2px;
}
input[type="range"]::-ms-fill-upper {
  background: #7c009b;
  border: 0.2px solid #b93cb3;
  border-radius: 49.2px;
}
input[type="range"]::-ms-thumb {
  width: 20px;
  height: 20px;
  background: #b93cb3;
  border: solid #b93cb3;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type="range"]:focus::-ms-fill-lower {
  background: #7c009b;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #7c009b;
}
/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align: auto) {
  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type="range"] {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}
</style>