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
      '@framework': path.resolve(__dirname, './framework'),
      '@server': path.resolve(__dirname, './src/server'),
      '@web': path.resolve(__dirname, './src/web'),
      '@router': path.resolve(__dirname, './src/router'),
      '@apiCall': path.resolve(__dirname, './src/web/common/apiCall')
    }
  },
  /**
   * 打包后在 dist/client/index.html 中，引入静态文件路径增加 /dist/client
   * 不能设置/dist/client，否则会出现访问不到静态资源（暂时排查不出问题）
   *  */
    base: "./",
})
