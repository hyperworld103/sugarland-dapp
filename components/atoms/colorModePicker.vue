<template>
  <div class="changeColor">
    <ul>
      <li v-for="color of colors" :key="color">
        <component
          :is="`icon-${color}`"
          @click="$colorMode.preference = color"
          :class="getClasses(color)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
import IconLight from "~/assets/icons/sun-fill.svg?inline";
import IconDark from "~/assets/icons/moon-fill.svg?inline";

export default defineComponent({
  components: { IconLight, IconDark },

  data() {
    return {
      colors: ["light", "dark"],
    };
  },

  methods: {
    getClasses(color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {};
      }
      return {
        selected: color === this.$colorMode.value,
      };
    },
  },
});
</script>

<style scoped>
.changeColor {
  position: absolute;
  top: 20px;
  right: 300px;
}

ul {
  display: flex;
  max-width: 200px;
}

li {
  margin-inline: 10px;
  cursor: pointer;
}

.changeColorButt {
  transition: all ease 0.5s;
}

.changeColorButt.selected {
  fill: var(--color-secondary);
}

.changeColorButt:hover {
  fill: var(--color-secondary);
}
</style>