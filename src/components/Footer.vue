<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">{{ portfolioData.personal.name }}</h3>
          <p class="footer-description">
            {{ portfolioData.personal.tagline }}
          </p>
        </div>

        <div class="footer-section">
          <h4 class="footer-subtitle">Quick Links</h4>
          <nav class="footer-nav" aria-label="Footer navigation">
            <a href="#home" class="footer-link">Home</a>
            <a href="#projects" class="footer-link">Projects</a>
            <a href="#skills" class="footer-link">Skills</a>
            <a href="#contact" class="footer-link">Contact</a>
          </nav>
        </div>

        <div class="footer-section">
          <h4 class="footer-subtitle">Connect</h4>
          <div class="footer-social">
            <a
              v-for="social in portfolioData.social"
              :key="social.platform"
              :href="social.url"
              class="social-link"
              :aria-label="`Follow on ${social.platform}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i :class="getSocialIconClass(social.platform)"></i>
              <span class="sr-only">{{ social.platform }}</span>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">
          © {{ currentYear }} {{ portfolioData.personal.name }}. All rights
          reserved.
        </p>
        <p class="footer-tech">Built with Vue.js & Vite</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { portfolioData } from "../data/portfolioData.js";

const currentYear = computed(() => new Date().getFullYear());

const getSocialIconClass = (platform) => {
  switch (platform.toLowerCase()) {
    case "github":
      return "fab fa-github";
    case "linkedin":
      return "fab fa-linkedin-in";
    case "facebook":
      return "fab fa-facebook-f";
    case "twitter":
      return "fab fa-twitter";
    case "instagram":
      return "fab fa-instagram";
    case "email":
      return "fas fa-envelope";
    default:
      return "fas fa-globe";
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background: var(--bg-dark);
  color: var(--text-light);
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-title {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.footer-subtitle {
  margin-bottom: 1rem;
  color: white;
}

.footer-description {
  color: var(--text-light-secondary);
  line-height: 1.6;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  color: var(--text-light-secondary);
  text-decoration: none;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: var(--primary-color);
  }
}

.footer-social {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--text-light-secondary);
    color: var(--bg-dark);
    font-size: 1.2rem;
    transition:
      background-color 0.3s,
      color 0.3s;

    &:hover,
    &:focus {
      background-color: var(--primary-color);
      color: white;
    }
  }
}

.footer-social a {
  text-decoration: none;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-light);
  color: var(--text-light-secondary);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

.footer-copyright,
.footer-tech {
  font-size: 0.875rem;
  margin: 0;
}
</style>
