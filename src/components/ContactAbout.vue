<template>
  <section id="contact" class="contact-about" aria-labelledby="contact-heading">
    <div class="container">
      <div class="content-grid">
        <div class="about-section">
          <h2 id="about-heading" class="section-title">About Me</h2>
          <div class="about-content">
            <p
              v-for="paragraph in portfolioData.about"
              :key="paragraph"
              class="about-paragraph"
            >
              {{ paragraph }}
            </p>

            <div class="about-stats">
              <div
                class="stat-item"
                v-for="stat in portfolioData.stats"
                :key="stat.label"
              >
                <span class="stat-number">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-section">
          <h2 id="contact-heading" class="section-title">Get In Touch</h2>
          <p class="contact-intro">{{ portfolioData.contact.message }}</p>

          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-label">Email:</span>
              <a
                :href="`mailto:${portfolioData.contact.email}`"
                class="contact-link"
                :aria-label="`Send email to ${portfolioData.contact.email}`"
              >
                {{ portfolioData.contact.email }}
              </a>
            </div>

            <div class="contact-item">
              <span class="contact-label">Location:</span>
              <span class="contact-value">{{
                portfolioData.contact.location
              }}</span>
            </div>

            <div v-if="portfolioData.contact.phone" class="contact-item">
              <span class="contact-label">Phone:</span>
              <a
                :href="`tel:${portfolioData.contact.phone}`"
                class="contact-link"
                :aria-label="`Call ${portfolioData.contact.phone}`"
              >
                {{ portfolioData.contact.phone }}
              </a>
            </div>
          </div>

          <form @submit.prevent="submitForm" class="contact-form" novalidate>
            <div class="form-group">
              <label for="name" class="form-label">Name *</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="form-input"
                :class="{ error: errors.name }"
                required
                aria-describedby="name-error"
              />
              <span v-if="errors.name" id="name-error" class="form-error">
                {{ errors.name }}
              </span>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email *</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="form-input"
                :class="{ error: errors.email }"
                required
                aria-describedby="email-error"
              />
              <span v-if="errors.email" id="email-error" class="form-error">
                {{ errors.email }}
              </span>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Subject *</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="form-input"
                :class="{ error: errors.subject }"
                required
                aria-describedby="subject-error"
              />
              <span v-if="errors.subject" id="subject-error" class="form-error">
                {{ errors.subject }}
              </span>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message *</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-textarea"
                :class="{ error: errors.message }"
                rows="5"
                required
                aria-describedby="message-error"
              ></textarea>
              <span v-if="errors.message" id="message-error" class="form-error">
                {{ errors.message }}
              </span>
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              :disabled="isSubmitting"
              :aria-describedby="submitStatus ? 'submit-status' : ''"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>

            <div
              v-if="submitStatus"
              id="submit-status"
              class="submit-status"
              :class="submitStatus.type"
            >
              {{ submitStatus.message }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from "vue";
import { portfolioData } from "../data/portfolioData.js";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = ref({});
const isSubmitting = ref(false);
const submitStatus = ref(null);

const validateForm = () => {
  const newErrors = {};

  if (!form.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = "Please enter a valid email address";
  }

  if (!form.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  if (!form.message.trim()) {
    newErrors.message = "Message is required";
  } else if (form.message.trim().length < 10) {
    newErrors.message = "Message must be at least 10 characters long";
  }

  errors.value = newErrors;
  return Object.keys(newErrors).length === 0;
};

const submitForm = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  submitStatus.value = null;

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    Object.assign(form, { name: "", email: "", subject: "", message: "" });
    submitStatus.value = {
      type: "success",
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    submitStatus.value = {
      type: "error",
      message:
        "Sorry, there was an error sending your message. Please try again.",
    };
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style lang="scss" scoped>
.contact-about {
  padding: 5rem 0;
  background: var(--bg-color);
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

.about-paragraph {
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-item {
  text-align: center;
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: var(--border-radius);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.contact-intro {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-info {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.contact-label {
  font-weight: 600;
  min-width: 80px;
  margin-right: 1rem;
}

.contact-link {
  color: var(--primary-color);
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}

.contact-form {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: var(--border-radius);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &.error {
    border-color: var(--error-color);
  }
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-error {
  display: block;
  color: var(--error-color);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.submit-status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);

  &.success {
    background: var(--success-light);
    color: var(--success-color);
  }

  &.error {
    background: var(--error-light);
    color: var(--error-color);
  }
}
</style>
