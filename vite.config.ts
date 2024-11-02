import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path'

const NODE_ENV = process.env.NODE_ENV === "development"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    vue(),
  ],
  resolve: {
    /**设置别名 */
    alias: {
      '@framework': path.resolve(__dirname, './framework'),
      '@server': path.resolve(__dirname, './src/server'),
      '@web': path.resolve(__dirname, './src/web'),
      '@router': path.resolve(__dirname, './src/router'),
      '@apiCall': path.resolve(__dirname, './src/apiCall')
    }
  },
  base: "./",
})
