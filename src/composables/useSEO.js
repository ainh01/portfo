import { ref, watch } from 'vue'

export function useSEO() {
  const updateTitle = (title) => {
    document.title = title
  }

  const updateMeta = (name, content) => {
    let element = document.querySelector(`meta[name="${name}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.name = name
      document.head.appendChild(element)
    }
    element.content = content
  }

  const updateOpenGraph = (property, content) => {
    let element = document.querySelector(`meta[property="${property}"]`)
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute('property', property)
      document.head.appendChild(element)
    }
    element.content = content
  }

  const setPortfolioMeta = (portfolioData) => {
    updateTitle(`${portfolioData.personal.name} - Portfolio`)
    updateMeta('description', portfolioData.personal.summary)
    updateMeta('keywords', 'developer, portfolio, vue.js, full-stack')
    updateMeta('author', portfolioData.personal.name)

    updateOpenGraph('og:title', `${portfolioData.personal.name} - Portfolio`)
    updateOpenGraph('og:description', portfolioData.personal.headline)
    updateOpenGraph('og:image', portfolioData.personal.avatar)
  }

  return { updateTitle, updateMeta, updateOpenGraph, setPortfolioMeta }
}  