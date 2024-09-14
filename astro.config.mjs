import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import vue from '@astrojs/vue'
import react from '@astrojs/react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), react()],
  devToolbar: {
    enabled: false, //TODO dev時のみ表示させるようにする
  },
  vite: {
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
        '@public/': `${path.resolve(__dirname, 'public')}/`,
      },
    },
  },
})
