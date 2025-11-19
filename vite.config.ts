import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: true,
        }),
      ],
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "demo": resolve(__dirname, "./demo"),
      "vue-tiptap-editor": resolve(__dirname, "./src")
    }
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'VueTiptapEditor',
      fileName: (format) => `vue-tiptap-editor.${format}.js`,
    },
    rollupOptions: {
      external: [
        'vue'
      ],
      output: {
        exports: 'named',
        inlineDynamicImports: true,
        globals: {
          vue: 'Vue'
        },
      },
    },
  },
})
