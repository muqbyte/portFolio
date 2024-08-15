// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/google-fonts", "nuxt-icons", "@nuxt/icon"],
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],  // Add desired font weights
      Dosis:[100, 300, 400, 500, 700, 900],
      Montserrat:[100, 300, 400, 500, 700, 900],
    },
  },
})