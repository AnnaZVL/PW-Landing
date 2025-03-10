export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: [
    '~/assets/scss/main.scss', 
  ],
  vite: {
    cacheDir: 'node_modules/.vite_cache',
    css: {
      preprocessorOptions: {        
        scss: {
          additionalData: '@use "~/assets/scss/_variable.scss" as *;'          
        }
      }
    }, 
  },
  app: {
    baseURL: '/PW-Landing/',
    head: {
      meta: [
        
        { name: 'description', content: 'Удобный и эффективный менеджер задач для вашей команды. Создавайте доски для своих проектов и управляйте задачами всей командой из любой точки мира' }
      ],
      link: [
        { rel: 'canonical',  href: 'https://pulsewave.ru'}
      ],
      title: 'PulseWave менеджер задач для вашей команды',
      htmlAttrs: {
        lang: 'ru',
      },   
    }
  },
  // plugins: ['~/plugins/shared-components.js'],   
})
