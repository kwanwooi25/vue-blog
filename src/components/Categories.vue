<template>
  <main>
    <h1>Category: {{category}}</h1>
    <post-preview v-bind:posts="posts"/>
    <paginator
      v-bind:onPageChange="onPageChange"
      v-bind:currentPage="page"
      v-bind:totalPage="Math.ceil(count / page_size)"
      v-bind:isFirstPage="page === 1"
      v-bind:isLastPage="page === Math.ceil(count / page_size)"
    />
  </main>
</template>

<script>
import butter from '../helpers/buttercms';
import PostPreview from './PostPreview';
import Paginator from './Paginator';

export default {
  name: 'Categories',
  data() {
    return {
      category: '',
      count: 0,
      posts: [],
      page: 1,
      page_size: 5,
    };
  },
  components: {
    PostPreview,
    Paginator,
  },
  methods: {
    async getPosts() {
      const res = await butter.post.list({
        category_slug: this.$route.params.slug
      });
      this.category = this.$route.params.slug;
      this.posts = res.data.data;
      this.count = res.data.meta.count;
    },
    onPageChange(change) {
      switch (change) {
        case 'first':
          this.page = 1;
          break;
        case 'prev':
          this.page -= 1;
          break;
        case 'next':
          this.page += 1;
          break;
        case 'last':
          this.page = Math.ceil(this.count / this.page_size);
          break;
        default:
          break;
      }
      this.getPosts();
    },
  },
  created() {
    this.getPosts();
  },
  watch: {
    '$route.params.slug'(newSlug, oldSlug) {
      this.getPosts();
    }
  }
};
</script>

<style scoped>
</style>
