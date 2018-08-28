<template>
  <main>
    <h1 class="post__title">{{ post.title }}</h1>
    <div class="post__meta">
      <span class="post__meta__date">
        {{ post.published | formatDate }}
      </span>
      <span
        class="post__meta__categories"
        v-for="category in post.categories"
        :key="category.slug"
      >
        {{ category.name }}
      </span>
    </div>
    <article
      class="blog-post-content markdown-body"
      v-html="post.body"
    />
    <ul class="post__tags">
      <li
        v-for="tag in post.tags"
        :key="tag.name"
      >
        {{ tag.name }}
      </li>
    </ul>
    <div>comments</div>
  </main>
</template>

<script>
import butter from '../helpers/buttercms';

export default {
  name: 'BlogPost',
  data() {
    return {
      post: {},
    };
  },
  methods: {
    async getPost() {
      const res = await butter.post.retrieve(this.$route.params.slug);
      this.post = res.data.data;
    },
  },
  created() {
    this.getPost();
  },
};
</script>

<style scoped>
.post__title {
  margin: 1rem 0;
  text-align: left;
}

.post__meta {
  color: #777;
  display: flex;
  justify-content: space-between;
}

.blog-post-content {
  margin: 1rem 0;
}

</style>
