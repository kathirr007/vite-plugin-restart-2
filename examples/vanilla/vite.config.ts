import { defineConfig } from 'vite'
import VitePluginRestart from 'vite-plugin-restart-2'

export default defineConfig({
  plugins: [
    VitePluginRestart({
      restart: [
        'trigger.txt',
        '../../dist/*.*',
      ],
    }),
  ],
})
