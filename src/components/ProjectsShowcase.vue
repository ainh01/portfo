<template>
  <section id="projects" class="projects" aria-labelledby="projects-heading">
    <div class="container">
      <h2 id="projects-heading" class="section-title">Featured Projects</h2>
      <p class="section-subtitle">
        A selection of projects that showcase my development skills and
        creativity
      </p>

      <div class="projects-grid" role="list" aria-label="Project showcase">
        <article
          v-for="project in portfolioData.projects"
          :key="project.id"
          class="project-card"
          role="listitem"
        >
          <div class="project-image">
            <img
              :src="project.image"
              :alt="`${project.title} project screenshot`"
              loading="lazy"
            />
            <div class="project-overlay">
              <button
                @click="openModal(project)"
                class="btn btn-primary"
                :aria-label="`View details for ${project.title}`"
              >
                View Details
              </button>
            </div>
          </div>

          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.shortDescription }}</p>

            <div
              class="project-tech"
              role="list"
              aria-label="Technologies used"
            >
              <span
                v-for="tech in project.technologies.slice(0, 4)"
                :key="tech"
                class="tech-tag"
                role="listitem"
              >
                {{ tech }}
              </span>
              <span v-if="project.technologies.length > 4" class="tech-more">
                +{{ project.technologies.length - 4 }} more
              </span>
            </div>

            <div class="project-links">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`View live version of ${project.title}`"
              >
                Live Demo
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                class="project-link"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`View source code for ${project.title}`"
              >
                Source Code
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>

    <ProjectModal
      :project="selectedProject"
      :isOpen="isModalOpen"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import { portfolioData } from "../data/portfolioData.js";
import ProjectModal from "./ProjectModal.vue";

const selectedProject = ref(null);
const isModalOpen = ref(false);

const openModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
  document.body.style.overflow = "";
};
</script>

<style lang="scss" scoped>
.projects {
  padding: 5rem 0;
  background: var(--bg-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  background: var(--card-bg);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .project-overlay {
    opacity: 1;
  }
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--primary-light);
  color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
}

.tech-more {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
