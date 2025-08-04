import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' 
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'], // 自动导入vue的API
      dts: 'src/auto-imports.d.ts' // 生成类型声明文件
    })
  ],
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  // 新增：构建配置
  build: {
    outDir: 'dist',     // 打包输出目录（默认dist）
    assetsDir: 'assets',// 静态资源目录（js/css/img等）
    sourcemap: false    // 生产环境不生成sourcemap（减小体积）
  },
  // 新增：路径别名（@指向src目录）
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
)


