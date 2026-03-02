<template>
  <section
    id="awards"
    class="awards-achievements"
    aria-labelledby="awards-heading"
  >
    <div class="container">
      <h2 id="awards-heading" class="section-title">Awards & Achievements</h2>
      <p class="section-subtitle">
        Recognition and milestones that highlight my journey in IT field
        <a href="https://drive.google.com/drive/u/4/folders/1j6vTMylJTG1v-T_Gmc2m_6idQT6FkDKQ"
      class="section-subtitle"
        target="_blank"
        >link Drive.
      </a>
      </p>
      

      <div class="award-filters">
        <button
          v-for="category in awardCategories"
          :key="category"
          @click="setActiveFilter(category)"
          :class="{ active: activeFilter === category }"
          class="filter-btn"
          :aria-pressed="activeFilter === category"
        >
          {{ category }}
        </button>
      </div>

      <div class="awards-grid" role="list" aria-label="Awards and achievements">
        <article
          v-for="award in filteredAwards"
          :key="award.id"
          class="award-card"
          :class="`award-${award.level.toLowerCase()}`"
          role="listitem"
        >
          <div class="award-header">
            <div class="award-icon">
              <i :class="award.icon" :aria-hidden="true"></i>
            </div>
            <div
              class="award-level"
              :class="`level-${award.level.toLowerCase()}`"
            >
              {{ award.level }}
            </div>
          </div>

          <div class="award-content">
            <h3 class="award-title">{{ award.title }}</h3>
            <p class="award-organization">{{ award.organization }}</p>
            <time class="award-date" :datetime="award.date">
              {{ formatDate(award.date) }}
            </time>
            <p class="award-description">{{ award.description }}</p>

            <div class="award-meta">
              <span class="award-category">{{ award.category }}</span>
              <span class="award-type">{{ award.type }}</span>
            </div>
          </div>

          <div class="award-overlay">
            <div class="overlay-content">
              <i :class="award.icon" class="overlay-icon"></i>
              <p class="overlay-text">{{ award.title }}</p>
            </div>
          </div>
        </article>
      </div>

      <div v-if="showLoadMore" class="load-more-container">
        <button
          @click="loadMoreAwards"
          class="load-more-btn"
          :aria-label="`Load ${remainingAwardsCount} more awards`"
        >
          Load More Awards ({{ remainingAwardsCount }} remaining)
        </button>
      </div>

      <div class="awards-stats" role="region" aria-labelledby="stats-heading">
        <h3 id="stats-heading" class="stats-title">Achievement Summary</h3>
        <div class="stats-grid">
          <div class="stat-card" v-for="stat in awardStats" :key="stat.label">
            <div class="stat-icon">
              <i :class="stat.icon"></i>
            </div>
            <div class="stat-content">
              <span class="stat-number">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { portfolioData } from "../data/portfolioData.js";

const AWARDS_PER_PAGE = 6;
const activeFilter = ref("All");
const displayedAwardsCount = ref(AWARDS_PER_PAGE);

const awardCategories = computed(() => {
  const categories = [
    "All",
    ...new Set(portfolioData.awards.map((award) => award.category)),
  ];
  return categories;
});

const filteredAwards = computed(() => {
  let awards = [];

  if (activeFilter.value === "All") {
    awards = [...portfolioData.awards];
  } else {
    awards = portfolioData.awards.filter(
      (award) => award.category === activeFilter.value,
    );
  }

  const sortedAwards = awards.sort((a, b) => a.id - b.id);
  return sortedAwards.slice(0, displayedAwardsCount.value);
});

const showLoadMore = computed(() => {
  const totalFilteredAwards =
    activeFilter.value === "All"
      ? portfolioData.awards.length
      : portfolioData.awards.filter(
          (award) => award.category === activeFilter.value,
        ).length;
  return totalFilteredAwards > displayedAwardsCount.value;
});

const remainingAwardsCount = computed(() => {
  const totalFilteredAwards =
    activeFilter.value === "All"
      ? portfolioData.awards.length
      : portfolioData.awards.filter(
          (award) => award.category === activeFilter.value,
        ).length;
  return Math.max(0, totalFilteredAwards - displayedAwardsCount.value);
});

const awardStats = computed(() => {
  const goldCount = portfolioData.awards.filter(
    (award) => award.level === "Gold",
  ).length;
  const silverCount = portfolioData.awards.filter(
    (award) => award.level === "Silver",
  ).length;
  const bronzeCount = portfolioData.awards.filter(
    (award) => award.level === "Bronze",
  ).length;
  const totalCount = portfolioData.awards.length;

  return [
    { label: "Total Awards", value: totalCount, icon: "fas fa-award" },
    { label: "Gold Level", value: goldCount, icon: "fas fa-trophy" },
    { label: "Silver Level", value: silverCount, icon: "fas fa-medal" },
    { label: "Bronze Level", value: bronzeCount, icon: "fas fa-certificate" },
  ];
});

const setActiveFilter = (category) => {
  activeFilter.value = category;
  displayedAwardsCount.value = AWARDS_PER_PAGE;
};

const loadMoreAwards = () => {
  displayedAwardsCount.value += AWARDS_PER_PAGE;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

onMounted(() => {
  const cards = document.querySelectorAll(".award-card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add("fade-in-up");
  });
});
</script>

<style lang="scss" scoped>
.awards-achievements {
  padding: 5rem 0;
  background: var(--bg-color);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(
      135deg,
      var(--primary-light) 0%,
      transparent 70%
    );
    opacity: 0.1;
    z-index: 0;
  }
}

.container {
  position: relative;
  z-index: 1;
}

.award-filters {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 3rem 0 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: var(--card-bg);
  border: 2px solid transparent;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  color: var(--text-color);

  &:hover,
  &:focus {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }

  &.active {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.award-card {
  background: var(--card-bg);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  border-left: 4px solid var(--border-color);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--primary-color),
      var(--secondary-color)
    );
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);

    &::before {
      transform: scaleX(1);
    }

    .award-overlay {
      opacity: 1;
      visibility: visible;
    }
  }

  &.award-gold {
    border-left-color: #ffd700;

    .award-level {
      background: linear-gradient(135deg, #ffd700, #ffed4e);
    }
  }

  &.award-silver {
    border-left-color: #c0c0c0;

    .award-level {
      background: linear-gradient(135deg, #c0c0c0, #e5e5e5);
    }
  }

  &.award-bronze {
    border-left-color: #cd7f32;

    .award-level {
      background: linear-gradient(135deg, #cd7f32, #d4af37);
    }
  }
}

.award-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.award-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 1.5rem;
  flex-shrink: 0;
}

.award-level {
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.5px;
}

.award-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.award-organization {
  font-size: 1.1rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.award-date {
  display: block;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.award-description {
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.award-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.award-category,
.award-type {
  background: var(--bg-secondary);
  color: var(--text-color);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
}

.award-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--secondary-color)
  );
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.overlay-content {
  text-align: center;
  color: white;
}

.overlay-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.overlay-text {
  font-size: 1.2rem;
  font-weight: 600;
}

.load-more-container {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.load-more-btn {
  background: var(--card-bg);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
}

.awards-stats {
  margin-top: 5rem;
  background: var(--bg-secondary);
  padding: 3rem;
  border-radius: var(--border-radius-lg);
}

.stats-title {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-color);
  font-size: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
}

.stat-icon {
  width: 50px;
  height: 50px;
  background: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  font-size: 1.5rem;
  flex-shrink: 0;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .awards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .award-filters {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .award-card {
    padding: 1.5rem;
  }

  .award-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .awards-stats {
    padding: 2rem;
  }
}
</style>
