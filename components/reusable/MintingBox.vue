<template>
  <div>
    <div class="flex-row justify-end">
      <ul class="text-right">
        <li>
          Balance:
          <span class="purple">{{ userData.userBalance }}</span>
        </li>
        <li>
          ABY Generated:
          <span class="purple">{{ userData.abyGenerated }} </span>
        </li>
        <li v-if="isMintable">
          Minting Fee:
          <span>{{ userData.mintingFee }}</span>
        </li>
      </ul>
    </div>
    <div>
      <input-range></input-range>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import { ref } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "MintingBox",
  props: {
    isMintable: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const userData = ref({
      userBalance: 540000,
      abyGenerated: 234,
      mintingFee: 0.08,
    });
    return { userData };
  },
});
</script>

<style scoped>
li {
  padding-block: 5px;
}
ul {
  font-size: 14px;
}
.purple {
  color: #b93cb3;
}
</style>