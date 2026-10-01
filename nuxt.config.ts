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
      title: 'Riswin Mohammed | Software Developer — AWS & GenAI',
      meta: [
        { name: 'description', content: 'Portfolio of Riswin Mohammed, a software developer building customer-facing applications with TypeScript, Vue, Nuxt, AWS, and generative AI.' },
        { name: 'theme-color', content: '#00dc82' },
        { property: 'og:title', content: 'Riswin Mohammed | Software Developer — AWS & GenAI' },
        { property: 'og:description', content: 'Software developer building customer-facing applications, AWS workflows, and generative AI products.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Riswin Mohammed | Software Developer — AWS & GenAI' },
        { name: 'twitter:description', content: 'Software developer building customer-facing applications, AWS workflows, and generative AI products.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Manrope:wght@400;500;600;700;800&display=swap' }
      ]
    }
  }
})
