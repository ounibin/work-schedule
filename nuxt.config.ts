// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  // 开启调试工具
  devtools: { enabled: true },

  // 源码目录
  srcDir: 'src/',

  // 需要打包的文件
  css: ['@/assets/scss/index.scss'],

  // nuxt模块
  modules: ['@pinia/nuxt', '@element-plus/nuxt'],

  nitro: {
    devProxy: {
      // '/xxx': { target: 'https://h.xxx.com/xxx', changeOrigin: true }
    }
  },

  app: {
    baseURL: '/'
  },

  compatibilityDate: '2024-08-08'
})
