// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  vite: {
    cacheDir: process.env.NUXT_VITE_CACHE_DIR || 'node_modules/.cache/vite'
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Riswin Mohammed | AI Application Engineer — AWS & GenAI',
      meta: [
        { name: 'description', content: 'Portfolio of Riswin Mohammed, an AI application engineer building grounded generative AI products, retrieval workflows, secure APIs, and customer-facing systems on AWS.' },
        { name: 'theme-color', content: '#00dc82' },
        { property: 'og:title', content: 'Riswin Mohammed | AI Application Engineer — AWS & GenAI' },
        { property: 'og:description', content: 'AI application engineer building grounded generative AI products, retrieval workflows, secure APIs, and customer-facing systems on AWS.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Riswin Mohammed | AI Application Engineer — AWS & GenAI' },
        { name: 'twitter:description', content: 'AI application engineer building grounded generative AI products, retrieval workflows, secure APIs, and customer-facing systems on AWS.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Manrope:wght@400;500;600;700;800&display=swap' }
      ]
    }
  }
})
