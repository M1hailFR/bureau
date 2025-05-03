// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: true },
  modules: ['shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    rootId: '__buro-app',
    head: {
      title: 'Suchkov Bureau | Test task',
      htmlAttrs: {
        lang: 'en',
        prefix: 'og:http://ogp.me/ns#',
        class: 'ui-scrollbars',
      },

      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
      script: [],
      // @ts-ignore
      pwa: {
        manifest: {
          lang: 'en',
          name: 'Suchkov Bureau',
          short_name: 'SB',
          description: '',
        },
      },
      robots: {
        UserAgent: '*',
        Disallow: [],
      },
    },
  },
})