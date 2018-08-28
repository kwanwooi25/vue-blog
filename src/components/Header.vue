<template>
  <header id="header">
    <div class="header__container">
      <router-link to="/" class="site-title">Kwanwoo's Blog</router-link>
      <nav class="header__nav">
        <router-link to="/categories" class="header__nav__item">Categories</router-link>
        <router-link to="/tags" class="header__nav__item">Tags</router-link>
        <router-link to="/about" class="header__nav__item">About</router-link>
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
  opacity: 0.98;
  width: 100vw;
}

.header__container {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 960px;
}

.site-title {
  background: #1a237e;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
}

.site-title:hover {
  background: white;
  color: #1a237e;
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

@media (min-width: 600px) {
  .header__container {
    align-items: stretch;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
