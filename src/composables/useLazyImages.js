import { ref, onMounted, onUnmounted } from 'vue'

export function useLazyImages() {
  const imageObserver = ref(null)

  const initLazyImages = () => {
    const images = document.querySelectorAll('img[data-src]')

    if ('IntersectionObserver' in window) {
      imageObserver.value = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.remove('lazy')
            imageObserver.value.unobserve(img)
          }
        })
      })

      images.forEach(img => imageObserver.value.observe(img))
    } else {
      images.forEach(img => {
        img.src = img.dataset.src
        img.classList.remove('lazy')
      })
    }
  }

  const cleanup = () => {
    if (imageObserver.value) {
      imageObserver.value.disconnect()
    }
  }

  onMounted(initLazyImages)
  onUnmounted(cleanup)

  return { initLazyImages, cleanup }
}  