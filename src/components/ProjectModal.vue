<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="modal-overlay"
      @click="handleOverlayClick"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="project ? `modal-title-${project.id}` : ''"
    >
      <div class="modal-content" @click.stop>
        <button
          class="modal-close"
          @click="$emit('close')"
          aria-label="Close project details"
        >
          ×
        </button>

        <div v-if="project" class="modal-body">
          <img
            :src="project.image"
            :alt="`${project.title} project screenshot`"
            class="modal-image"
          />

          <h2 :id="`modal-title-${project.id}`" class="modal-title">
            {{ project.title }}
          </h2>

          <p class="modal-description">{{ project.fullDescription }}</p>

          <div class="modal-details">
            <div class="detail-section">
              <h3>Technologies Used</h3>
              <div class="tech-list">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div v-if="project.challenges" class="detail-section">
              <h3>Challenges & Solutions</h3>
              <p>{{ project.challenges }}</p>
            </div>

            <div v-if="project.results" class="detail-section">
              <h3>Results & Impact</h3>
              <p>{{ project.results }}</p>
            </div>
          </div>

          <div class="modal-actions">
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              class="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Demo
            </a>
            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              class="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { watch } from "vue";

const props = defineProps({
  project: Object,
  isOpen: Boolean,
});

const emit = defineEmits(["close"]);

const handleOverlayClick = () => {
  emit("close");
};

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      const focusableElements = document.querySelectorAll(
        ".modal-content button, .modal-content a, .modal-content input",
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  },
);
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1rem;
}

.modal-content {
  background: var(--card-bg);
  border-radius: var(--border-radius);
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--text-color);
  z-index: 1;

  &:hover,
  &:focus {
    color: var(--primary-color);
  }
}

.modal-body {
  padding: 2rem;
}

.modal-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
}

.modal-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.modal-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.detail-section {
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
    color: var(--primary-color);
  }
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .modal-content {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }

  .modal-actions {
    flex-direction: column;
  }
}
</style>
