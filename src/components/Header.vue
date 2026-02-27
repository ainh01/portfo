<template>
  <header class="header" role="banner">
    <nav class="nav" role="navigation" aria-label="Main navigation">
      <div class="nav-container">
        <a href="#home" class="logo" aria-label="Portfolio Home">
          <span class="logo-text">{{ portfolioData.personal.name }}</span>
        </a>

        <button
          class="nav-toggle"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-menu" :class="{ active: isMenuOpen }" id="nav-menu">
          <li v-for="item in navItems" :key="item.id">
            <a :href="item.href" class="nav-link" @click="closeMenu">
              {{ item.text }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { portfolioData } from "../data/portfolioData.js";

const isMenuOpen = ref(false);

const navItems = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#projects", text: "Projects" },
  { id: 3, href: "#skills", text: "Skills" },
  { id: 4, href: "#awards", text: "Awards" },
  { id: 5, href: "#contact", text: "Contact" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style lang="scss" scoped>
.header {
  background: var(--bg-color);
  box-shadow: var(--shadow-sm);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  span {
    width: 25px;
    height: 3px;
    background: var(--text-color);
    margin: 2px 0;
    transition: 0.3s;
  }

  &.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: var(--primary-color);
  }
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--bg-color);
    flex-direction: column;
    padding: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;

    &.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
