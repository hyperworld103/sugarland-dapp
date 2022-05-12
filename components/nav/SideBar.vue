<template>
  <div class="sideBarWrap" :style="{ width: sidebarWidth }">
    <NuxtLink v-if="!collapsed" class="containedWidth" to="/">
      <SugarLogo />
    </NuxtLink>
    <NuxtLink v-if="!collapsed" to="/">
      <p class="-mt-12 linkBox sugarPrice">Sugar: N/A</p>
    </NuxtLink>

    <div class="linkWrapper">
      <div v-if="!collapsed" class="displayMobile linkBox">
        <div v-if="!collapsed" @click="toggleSidebar">
          <NuxtLink
            v-for="link in utilLinks"
            :key="link.title"
            class="p-2 baseStyle self-center text-left"
            :to="link.page"
          >
            <img class="iconSide" :src="link.icon" alt="" />
            {{ link.title }}</NuxtLink
          >
        </div>
      </div>

      <div class="displayDesktop linkBox">
        <div class="text-left" v-if="!collapsed">
          <NuxtLink
            v-for="link in utilLinks"
            :key="link.title"
            class="p-2 baseStyle self-center"
            :to="link.page"
          >
            <span class="singleMenuItem">
              <img class="iconSide" :src="link.icon" alt="" />{{
                link.title
              }}</span
            ></NuxtLink
          >
        </div>
      </div>
      <div class="displayDesktop linkBox">
        <div class="text-left" v-if="!collapsed">
          <NuxtLink
            v-for="link in otherLinks"
            :key="link.title"
            class="p-2 baseStyle self-center"
            :to="link.page"
          >
            <span class="singleMenuItem deactive">
              <img class="iconSide" :src="link.icon" alt="" />{{
                link.title
              }}</span
            ></NuxtLink
          >
        </div>
      </div>

      <div v-if="!collapsed" class="displayMobile linkBox">
        <div v-if="!collapsed" @click="toggleSidebar">
          <NuxtLink
            v-for="link in otherLinks"
            :key="link.title"
            class="p-2 baseStyle self-center text-left"
            :to="link.page"
          >
            <img class="iconSide" :src="link.icon" alt="" />
            {{ link.title }}</NuxtLink
          >
        </div>
      </div>

      <div class="displayDesktop linkBox">
        <div class="text-left" v-if="!collapsed">
          <NuxtLink
            v-for="link in lastLinks"
            :key="link.title"
            class="p-2 baseStyle self-center"
            :to="link.page"
          >
            <span class="singleMenuItem deactive">
              <img class="iconSide" :src="link.icon" alt="" />{{
                link.title
              }}</span
            ></NuxtLink
          >
        </div>
      </div>

      <div v-if="!collapsed" class="displayMobile linkBox">
        <div v-if="!collapsed" @click="toggleSidebar">
          <NuxtLink
            v-for="link in lastLinks"
            :key="link.title"
            class="p-2 baseStyle self-center text-left"
            :to="link.page"
          >
            <img class="iconSide" :src="link.icon" alt="" />
            {{ link.title }}</NuxtLink
          >
        </div>
      </div>

      <div class="flex-row copyWrapper">
        <!--  <span class="closeIcon"><p></p></span> -->
        <a
          v-if="!collapsed"
          class="copy"
          target="_blank"
          href="https://www.sugarlandcoin.com/"
          ><!-- <strong>Sugarland</strong> --></a
        >
      </div>
    </div>
    <div class="flex-row copyWrapper">
      <SocialCard />
    </div>
  </div>
</template>

<script>
import useSugarToken from "~/composables/token/useSugarToken";
import { defineComponent, onMounted } from "@nuxtjs/composition-api";
import sugarLogo from "~/components/atoms/sugarLogo.vue";

import {
  collapsed,
  closed,
  toggleSidebar,
  sidebarWidth,
  sidebarClose,
} from "~/composables/toggleSidebar.ts";
import SocialCard from "../atoms/socialCard.vue";

export default defineComponent({
  name: "SideBar",
  components: {
    sugarLogo,
    SocialCard,
  },
  setup() {
    const { SugarPrice, fetchSugarData } = useSugarToken();

    const utilLinks = [
      {
        page: "/",
        title: "Stats",
        icon: "https://s2.svgbox.net/hero-solid.svg?ic=chart-bar&color=fff",
      },
      {
        page: "/tracker",
        title: "Reflections",
        icon: "https://s2.svgbox.net/materialui.svg?ic=stars&color=fff",
      },
      {
        page: "/swap",
        title: "Swap",
        icon: "https://s2.svgbox.net/materialui.svg?ic=swap_horizontal_circle&color=fff",
      },
      {
        page: "#",
        title: "Pools",
        icon: "https://s2.svgbox.net/hero-outline.svg?ic=sparkles&color=fff",
      },
    ];
    const otherLinks = [
      {
        page: "#",
        title: "Mint NFT",
        icon: "https://s2.svgbox.net/hero-solid.svg?ic=newspaper&color=fff",
      },
      {
        page: "#",
        title: "Stake NFT",
        icon: "https://s2.svgbox.net/octicons.svg?ic=graph-bold&color=fff",
      },
    ];
    const lastLinks = [
      {
        page: "#",
        title: "Governance",
        icon: "https://s2.svgbox.net/materialui.svg?ic=how_to_vote&color=fff",
      },
      {
        page: "#",
        title: "Merch",
        icon: "https://s2.svgbox.net/hero-solid.svg?ic=shopping-bag&color=fff",
      },
    ];

    onMounted(() => {
      console.info("on mounted");
      if (window.innerWidth < 520) {
        toggleSidebar();
      }
      fetchSugarData();
      window.setInterval(() => {
        fetchSugarData();
      }, 20000);
    });

    return {
      utilLinks,
      otherLinks,
      lastLinks,
      collapsed,
      closed,
      toggleSidebar,
      sidebarWidth,
      sidebarClose,
      SugarPrice,
      fetchSugarData,
    };
  },
});
</script>





<style scoped>
.deactive {
  opacity: 0.3;
}
.singleMenuItem {
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconSide {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
.linkBox {
  background: linear-gradient(180.08deg, #463d8b -4.85%, #76468f 105.34%);
  box-shadow: 0px 4px 64px rgba(0, 0, 0, 0.25);

  border-radius: 10px;
  width: 200px;
  margin-block: 10px;
  padding-block: 10px;
  padding-inline: 10px;
}
.linkWrapper {
  display: flex;
  align-items: flex-start;
}
span {
  margin-left: 5px;
  font-weight: 500;
  font-size: 14px;
  color: #fff;
  opacity: 0.6;
}
a.nuxt-link-exact-active span:not(.deactive) {
  color: #fff;
  opacity: 1;
}
div {
  display: flex;
  flex-direction: column;
}

p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 23px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  color: rgba(255, 255, 255, 0.457);
}

.copyWrapper {
  width: 100%;
  align-items: center;
}

.sideBarWrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  height: 100vh;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-right: 20px;
  padding-block-start: 28px;
  transition: all ease 0.3s;

  background: linear-gradient(180deg, #261d48 0%, #4a2b7c 100%);
}

.sugarLogo {
  width: 100%;
  padding-inline: 15px;
  top: 10px;
}

.baseStyle {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  line-height: 2.5;
  align-self: start;
  display: flex;
  justify-content: center;
  align-items: center;
}

.closeIcon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  white-space: nowrap;
}
.closeIcon p {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 23px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
  color: var(--color-secondary) !important;
  cursor: pointer;
}

.custNuxtLink {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 23px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  text-align: left;
  color: var(--color-secondary);
  align-self: start;
}
.separatorLine {
  width: 150px;
  height: 1px;
  background-color: var(--color-opaque);
  margin-block: 20px;
}

.sugarPrice {
  padding-inline-start: 19px;
  color: #fff;
}

@media (min-width: 320px) {
  .copy {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 23px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    color: var(--color-secondary) !important;
    position: absolute;
    bottom: 10px;
    left: 30px;
    white-space: nowrap;
  }
  .displayMobile {
    display: flex;
  }
  .displayDesktop {
    display: none;
  }
}

@media (min-width: 620px) {
  .copy {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 23px;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    color: var(--color-secondary) !important;
    position: absolute;
    bottom: 10px;
    left: 25%;
    white-space: nowrap;
  }
  .displayMobile {
    display: none;
  }
  .displayDesktop {
    display: flex;
  }
}
</style>