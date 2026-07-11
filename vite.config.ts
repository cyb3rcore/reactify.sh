import { resolve } from 'node:path'
import viteReact from '@vitejs/plugin-react'
import reactifyPlugin from '@cyb3rcore/reactify/plugin'

export default {
  root: resolve(import.meta.dirname, 'src', 'client'),
  resolve: {
    alias: [
      { find: '@', replacement: resolve(import.meta.dirname, 'src', 'client') },
      { find: 'styled-system', replacement: resolve(import.meta.dirname, 'styled-system') },
    ],
  },
  plugins: [viteReact(), reactifyPlugin()],
}
