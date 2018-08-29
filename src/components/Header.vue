<template>
  <header id="header">
    <div class="header__container">
      <span class="site-title">
        Kwanwoo's Blog
      </span>
      <nav class="header__nav">
        <router-link to="/" class="header__nav__item">
          Home
        </router-link>
        <router-link to="/about" class="header__nav__item">
          About
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
#header {
  background: white;
  border-bottom: 1px solid #cdcdcd;
  opacity: 0.95;
  width: 100%;
  position: sticky;
  top: 0;
}

.header__container {
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  margin: 0 auto;
  max-width: 960px;
}

.site-title {
  color: #1a237e;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
}

.header__nav {
  align-items: stretch;
  display: flex;
  justify-content: center;
}

.header__nav__item {
  color: #1a237e;
  font-weight: bold;
  padding: 0.75rem;
  text-decoration: none;
}

.header__nav__item:hover {
  background: #3f51b5;
  color: white;
  cursor: pointer;
}
</style>
