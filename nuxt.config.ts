// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/index.css"],
  nitro:{
    prerender:{
      autoSubfolderIndex: false,
    }
  },
  app:{
    head:{
      title:"Markrey's Portfolio",
      meta: [
        {charset: "utf-8"},
        {
          name:"viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid:"description",
          name:"description",
          content:"Marky's Portfolio",
        },
        {
          name:"keywords",
          content:"portfolio,website,dev,developer,programmer"
        }
      ]
    }
  }
})
