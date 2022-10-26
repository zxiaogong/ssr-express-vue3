import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    vue(),
  ],
  resolve: {
    /**设置别名 */
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@requestApi': path.resolve(__dirname, './src/web/common/uitl/requestApi.ts')
    }
  },
})
