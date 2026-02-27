export const measurePageLoad = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0]
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart

        console.log(`Page load time: ${loadTime}ms`)

        if (window.gtag) {
          window.gtag('event', 'page_load_time', {
            value: Math.round(loadTime),
            event_category: 'Performance'
          })
        }
      }, 0)
    })
  }
}

export const measureLCP = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log(`LCP: ${lastEntry.startTime}ms`)
    })

    observer.observe({ entryTypes: ['largest-contentful-paint'] })
  }
}
