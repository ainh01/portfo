<template>
  <section id="home" class="hero" aria-labelledby="hero-heading">
    <div class="hero-container">
      <div class="hero-content">
        <img
          :src="portfolioData.personal.avatar"
          :alt="`${portfolioData.personal.name} - Profile Picture`"
          class="hero-avatar"
          loading="lazy"
        />

        <h1 id="hero-heading" class="hero-title">
          {{ portfolioData.personal.headline }}
        </h1>

        <p class="hero-summary">
          {{ portfolioData.personal.summary }}
        </p>

        <div class="hero-actions">
          <a
            href="#projects"
            class="btn btn-primary"
            aria-describedby="view-work-desc"
          >
            View My Work
          </a>
          <a
            :href="portfolioData.personal.resumeUrl"
            class="btn btn-secondary"
            download
            aria-describedby="download-resume-desc"
          >
            Download Resume
          </a>
        </div>

        <div class="sr-only">
          <span id="view-work-desc">Navigate to projects section</span>
          <span id="download-resume-desc">Download PDF resume</span>
        </div>

        <div class="hero-social" role="list" aria-label="Social media links">
          <a
            v-for="social in portfolioData.social"
            :key="social.platform"
            :href="social.url"
            class="social-link"
            :aria-label="`Visit ${social.platform} profile`"
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
          >
            <i
              :class="getSocialIconClass(social.platform)"
              class="social-icon"
            ></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from "../data/portfolioData.js";

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
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    var(--bg-color) 0%,
    var(--bg-secondary) 100%
  );
  padding-top: 80px;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.hero-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--primary-color);
  margin-bottom: 2rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(
    45deg,
    var(--primary-color),
    var(--secondary-color)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-summary {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.hero-social {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--card-bg);
  transition: all 0.3s;

  &:hover,
  &:focus {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
}

.social-icon {
  font-size: 1.5rem;
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>