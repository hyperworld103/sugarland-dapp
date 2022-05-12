<template>
  <div class="dataBoxWrapp">
    <slot></slot>
  </div>
</template> 

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  name: "DataTab",

  setup() {
    return {};
  },
});
</script>

<style scoped>
img {
  max-width: 80px;
  padding-block: 20px;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  color: var(--color-tertiary);
}

p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
  color: var(--color-tertiary);
}
.dataBoxWrapp {
  width: 220px;
  background: rgba(62, 31, 100, 0.4);
  box-shadow: 0px 24px 74px rgba(37, 0, 84, 0.5);
  backdrop-filter: blur(13px);
  -webkit-backdrop-filter: blur(13px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding-inline: 30px;
  padding-block: 20px;
}

.purple {
  color: var(--color-secondary) !important;
}

@media (min-width: 320px) {
  .dataBoxWrapp {
    margin-inline-end: 0;
    margin-block: 20px;
  }
}
@media (min-width: 620px) {
  .dataBoxWrapp {
    margin-inline-end: 45px;
    margin-block: 20px;
  }
}
</style>