<template>
  <main class="about">
    <h1 class="about__title">Kwanwoo Jeong</h1>
    <div class="about__section">
      <p>
        아무거나 기록하는 블로그.
      </p>
    </div>
    <div class="about__section">
      <h3 class="about__section__title">
        Contact
      </h3>
      <a class="link" href="mailto:kwanwoo.jeong@gmail.com">
        kwanwoo.jeong@gmail.com
      </a>
    </div>
  </main>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about {
  padding: 1rem;
}

.about__title,
.about__section {
  border-bottom: 1px dashed #ccc;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
}
</style>
