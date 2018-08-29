<template>
  <footer id="footer">
    <div class="footer__container">
      <p class="footer__item">
        &copy; Kwanwoo Jeong 2018.
      </p>
      <p class="footer__item">Built with
        <a
          href="https://vuejs.org" 
          target="_blank" 
          class="link footer__link"
        >
          Vue.js
        </a>
        Powered by
        <a 
          href="https://buttercms.com"
          target="_blank"
          class="link footer__link"
        >
          Butter CMS
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
#footer {
  background: #ddd;
}

.footer__container {
  max-width: 900px;
  margin: auto;
  padding: 2rem 0 1rem;
}

.footer__item {
  margin: 0;
  padding: 0.25rem;
  text-align: center;
}

.footer__link {
  color: #1a237e;
}
</style>
