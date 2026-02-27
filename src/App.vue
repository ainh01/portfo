<template>
  <div id="app">
    <ErrorBoundary>
      <a href="#main-content" class="skip-link" tabindex="1">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" role="main">
        <Homepage />
        <ProjectsShowcase />
        <SkillsExperience />
        <AwardsAchievements />
        <ContactAbout />
      </main>

      <Footer />

      <button
        v-show="showBackToTop"
        @click="scrollToTop"
        class="back-to-top"
        aria-label="Back to top"
        :class="{ visible: showBackToTop }"
      >
        ↑
      </button>
    </ErrorBoundary>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useSEO } from "./composables/useSEO.js";
import { useLazyImages } from "./composables/useLazyImages.js";
import { measurePageLoad, measureLCP } from "./utils/performance.js";
import { portfolioData } from "./data/portfolioData.js";

import ErrorBoundary from "./components/ErrorBoundary.vue";
import Header from "./components/Header.vue";
import Homepage from "./components/Homepage.vue";
import ProjectsShowcase from "./components/ProjectsShowcase.vue";
import SkillsExperience from "./components/SkillsExperience.vue";
import AwardsAchievements from "./components/AwardsAchievements.vue";
import ContactAbout from "./components/ContactAbout.vue";
import Footer from "./components/Footer.vue";

const showBackToTop = ref(false);
const { setPortfolioMeta } = useSEO();

useLazyImages();

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  setPortfolioMeta(portfolioData);

  measurePageLoad();
  measureLCP();

  window.addEventListener("scroll", handleScroll, { passive: true });

  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = "Portfolio page loaded successfully";
  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 999;

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &:hover,
  &:focus {
    background: color-mix(in srgb, var(--primary-color) 90%, black);
    transform: translateY(-2px);
  }
}
</style>