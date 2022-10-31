import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'components': path.resolve(__dirname, 'src/components'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'themes': path.resolve(__dirname, 'src/themes'),
      'services': path.resolve(__dirname, 'src/services'),
      'hooks': path.resolve(__dirname, 'src/hooks'),
      'translations': path.resolve(__dirname, 'src/translations'),
    }
  },
  plugins: [react()],
})
