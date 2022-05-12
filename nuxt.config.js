export default {
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Sugarland Factory",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/moralis.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components/atoms/",
    "~/components/cards/",
    "~/components/modals/",
    "~/components/nav/",
    "~/components/reusable/",
    "~/components/cards/token"
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/composition-api/module",
    "@nuxtjs/color-mode",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/svg", "@nuxtjs/axios"],
  generate: {
    fallback: true,
  },

  axios: {
    // proxy: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.node = {
        fs: "empty",
      };
    },
  },
  target: "static",
  publicRuntimeConfig: {
    moralis_key: process.env.MORALIS_KEY,
    moralis_url: process.env.MORALIS_URL
  }
};
