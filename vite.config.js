import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // GitHub 레포지토리 이름으로 설정
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // 파일 이름에 타임스탬프나 해시 추가
        entryFileNames: `assets/[name]-[hash].js`,
        chunkFileNames: `assets/[name]-[hash].js`,
        assetFileNames: `assets/[name]-[hash].[ext]`
      }
    }
  }
})
