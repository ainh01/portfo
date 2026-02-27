<template>
  <div v-if="hasError" class="error-boundary" role="alert">
    <div class="error-content">
      <h2 class="error-title">Oops! Something went wrong</h2>
      <p class="error-message">{{ errorMessage }}</p>
      <button @click="retry" class="btn btn-primary">Try Again</button>
    </div>
  </div>
  <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from "vue";

const hasError = ref(false);
const errorMessage = ref("");

onErrorCaptured((error) => {
  hasError.value = true;
  errorMessage.value = error.message || "An unexpected error occurred";
  console.error("Portfolio Error:", error);
  return false;
});

const retry = () => {
  hasError.value = false;
  errorMessage.value = "";
  location.reload();
};
</script>

<style lang="scss" scoped>
.error-boundary {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
}

.error-content {
  text-align: center;
  max-width: 500px;
}

.error-title {
  color: var(--error-color);
  margin-bottom: 1rem;
}

.error-message {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}
</style>
