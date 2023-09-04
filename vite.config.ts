import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// rollup
import Delete from 'rollup-plugin-delete'

// dts
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: 'dist',
      staticImport: true,
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'packages'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.ts'),
      name: 'tethys-button',
      fileName: (format) => `tethys-button.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      plugins: [
        Delete({
          targets: ['dist/*.{ico,txt,svg}'],
          hook: 'generateBundle',
        }),
      ],
    },
  },
})
