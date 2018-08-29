<template>
  <div id="app">
    <Header/>
    <router-view/>
    <widget
      v-bind:categories="categories"
      v-bind:tags="tags"
    />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Widget from './components/Widget';
import Footer from './components/Footer';
import butter from './helpers/buttercms';

export default {
  name: 'App',
  components: {
    Header,
    Widget,
    Footer,
  },
  data() {
    return {
      categories: [],
      tags: [],
    };
  },
  created() {
    this.getCategories();
    this.getTags();
  },
  methods: {
    async getCategories() {
      const res = await butter.category.list();
      this.categories = await this.getCategoriesCount(res.data.data);
    },
    getCategoriesCount(categories) {
      categories.forEach(async category => {
        const res = await butter.post.list({
          category_slug: category.slug
        });
        category.count = res.data.meta.count;
      });

      return categories;
    },
    async getTags() {
      const res = await butter.tag.list();
      this.tags = await this.getTagsCount(res.data.data);
    },
    getTagsCount(tags) {
      tags.forEach(async tag => {
        const res = await butter.post.list({
          tag_slug: tag.slug
        });
        tag.count = res.data.meta.count;
      });

      return tags;
    },
  },
};
</script>

<style>
@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
@import url(https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css);

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  transition: 0.2s;
}

html {
  font-family: 'Noto Sans KR', sans-serif;
}

body {
  padding: 0;
  margin: 0;
}

main {
  line-height: 1.5;
  margin: 0 auto;
  max-width: 800px;
}

.link {
  text-decoration: none;
  border-bottom: 2px solid transparent;
  color: #1a237e;
}

.link:hover {
  border-bottom: 2px solid #1a237e;
}
</style>
