<template>
  <section
    id="skills"
    class="skills-experience"
    aria-labelledby="skills-heading"
  >
    <div class="container">
      <h2 id="skills-heading" class="section-title">Skills & Milestones</h2>

      <div class="content-grid">
        <div class="skills-section">
          <h3>Technical Skills</h3>

          <div class="skill-filters">
            <button
              v-for="category in skillCategories"
              :key="category"
              @click="setActiveFilter(category)"
              :class="{ active: activeFilter === category }"
              class="filter-btn"
              :aria-pressed="activeFilter === category"
            >
              {{ category }}
            </button>
          </div>

          <div class="skills-grid" role="list" aria-label="Technical skills">
            <div
              v-for="skill in displayedSkills"
              :key="skill.name"
              class="skill-item"
              role="listitem"
            >
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.proficiency }}%</span>
              </div>
              <div
                class="skill-bar"
                :aria-label="`${skill.name} proficiency: ${skill.proficiency}%`"
              >
                <div
                  class="skill-progress"
                  :style="{ width: `${skill.proficiency}%` }"
                ></div>
              </div>
            </div>
          </div>

          <div v-if="showLoadMore" class="load-more-container">
            <button
              @click="loadMoreSkills"
              class="load-more-btn"
              :aria-label="`Load ${remainingSkillsCount} more skills from ${activeFilter} category`"
            >
              Load More Skills ({{ remainingSkillsCount }} remaining)
            </button>
          </div>
        </div>

        <div class="experience-section">
          <h3>Personal Milestones</h3>

          <div
            class="timeline"
            role="list"
            aria-label="Work experience timeline"
          >
            <div
              v-for="(experience, index) in portfolioData.experience"
              :key="index"
              class="timeline-item"
              role="listitem"
            >
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h4 class="timeline-title">{{ experience.position }}</h4>
                <p class="timeline-company">{{ experience.company }}</p>
                <p class="timeline-period">{{ experience.period }}</p>
                <p class="timeline-description">{{ experience.description }}</p>

                <ul
                  v-if="experience.achievements"
                  class="timeline-achievements"
                >
                  <li
                    v-for="achievement in experience.achievements"
                    :key="achievement"
                  >
                    {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { portfolioData } from "../data/portfolioData.js";

const SKILLS_PER_PAGE = 5;
const activeFilter = ref("All");
const displayedSkillsCount = ref({});

const initializeDisplayCount = () => {
  const categories = [
    "All",
    ...new Set(portfolioData.skills.map((skill) => skill.category)),
  ];
  const initialCount = {};
  categories.forEach((category) => {
    initialCount[category] = SKILLS_PER_PAGE;
  });
  displayedSkillsCount.value = initialCount;
};

initializeDisplayCount();

const skillCategories = computed(() => {
  const categories = [
    "All",
    ...new Set(portfolioData.skills.map((skill) => skill.category)),
  ];
  return categories;
});

const filteredSkills = computed(() => {
  let skills = [];

  if (activeFilter.value === "All") {
    skills = [...portfolioData.skills];
  } else {
    skills = portfolioData.skills.filter(
      (skill) => skill.category === activeFilter.value,
    );
  }

  return skills.sort((a, b) => b.proficiency - a.proficiency);
});

const displayedSkills = computed(() => {
  const currentDisplayCount =
    displayedSkillsCount.value[activeFilter.value] || SKILLS_PER_PAGE;
  return filteredSkills.value.slice(0, currentDisplayCount);
});

const showLoadMore = computed(() => {
  const currentDisplayCount =
    displayedSkillsCount.value[activeFilter.value] || SKILLS_PER_PAGE;
  return filteredSkills.value.length > currentDisplayCount;
});

const remainingSkillsCount = computed(() => {
  const currentDisplayCount =
    displayedSkillsCount.value[activeFilter.value] || SKILLS_PER_PAGE;
  return Math.max(0, filteredSkills.value.length - currentDisplayCount);
});

const setActiveFilter = (category) => {
  activeFilter.value = category;
};

const loadMoreSkills = () => {
  const currentCount =
    displayedSkillsCount.value[activeFilter.value] || SKILLS_PER_PAGE;
  const remainingSkills = filteredSkills.value.length - currentCount;
  const nextIncrement = Math.min(SKILLS_PER_PAGE, remainingSkills);

  displayedSkillsCount.value[activeFilter.value] = currentCount + nextIncrement;
};

watch(activeFilter, (newFilter) => {
  if (!displayedSkillsCount.value[newFilter]) {
    displayedSkillsCount.value[newFilter] = SKILLS_PER_PAGE;
  }
});
</script>

<style lang="scss" scoped>
.skills-experience {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.skills-section h3,
.experience-section h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--primary-color);
}

.skill-filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: var(--card-bg);
  border: 2px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s;

  &:hover,
  &:focus {
    border-color: var(--primary-color);
  }

  &.active {
    background: var(--primary-color);
    color: white;
  }
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: var(--border-radius);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
}

.skill-level {
  color: var(--primary-color);
  font-weight: 600;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: var(--bg-color);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--primary-color),
    var(--secondary-color)
  );
  transition: width 1s ease-in-out;
}

.load-more-container {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.load-more-btn {
  background: var(--card-bg);
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.75rem 2rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 0.85rem;
  }
}

.timeline {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--primary-color);
  }
}

.timeline-item {
  position: relative;
  padding-left: 60px;
  margin-bottom: 2rem;
}

.timeline-marker {
  position: absolute;
  left: 11px;
  top: 0;
  width: 18px;
  height: 18px;
  background: var(--primary-color);
  border-radius: 50%;
  border: 3px solid var(--bg-secondary);
}

.timeline-content {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
}

.timeline-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.timeline-company {
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.timeline-period {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.timeline-description {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-achievements {
  list-style: none;
  padding: 0;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--primary-color);
      font-weight: bold;
    }
  }
}
</style>
