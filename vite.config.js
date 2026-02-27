import { defineConfig } from 'vite'  
import vue from '@vitejs/plugin-vue'  

export default defineConfig({  
  plugins: [vue()],  
  css: {  
    preprocessorOptions: {  
      scss: {  
        additionalData: `@use "/src/styles/variables" as *;`  
      }  
    }  
  },  
  build: {  
    rollupOptions: {  
      output: {  
        manualChunks: {  
          vendor: ['vue'],  
          components: ['./src/components/ProjectModal.vue']  
        }  
      }  
    }  
  }  
})  