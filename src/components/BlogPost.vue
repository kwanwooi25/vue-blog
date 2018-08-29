<template>
  <main class="blog-post">
    <h1 class="post__title">{{ post.title }}</h1>
    <div class="post__meta post__section">
      <span class="post__meta__date">
        {{ post.published | formatDate }}
      </span>
      <router-link
        class="post__meta__categories"
        v-for="category in post.categories"
        :key="category.slug"
        :to="'/categories/' + category.slug"
      >
        {{ category.name }}
      </router-link>
    </div>
    <article
      class="blog-post-content markdown-body post__section"
      v-html="post.body"
    />
    <div class="post__section" v-if="post.tags">
      <h2 class="post__section__title">Tags</h2>
      <div class="post__tags">
        <router-link
          v-for="tag in post.tags"
          :key="tag.slug"
          :to="'/tags/' + tag.slug"
        >
          #{{ tag.name }}
        </router-link>
      </div>
    </div>
    <div class="post__section">
      <h2 class="post__section__title">Comments</h2>
      <vue-disqus shortname="kwanwoos-blog" :identifier="post.slug" url="'http://kwjeong.me/post/' + post.slug"></vue-disqus>
    </div>
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
.blog-post {
  padding: 1rem;
}

.post__title,
.post__section__title {
  margin: 1rem 0;
}

.post__section {
  border-bottom: 1px dashed #ccc;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
}

.post__meta {
  color: #777;
  display: flex;
  font-size: 0.9rem;
  justify-content: space-between;
}

.post__meta__categories,
.post__tags a {
  text-decoration: none;
  border-bottom: 2px solid transparent;
  color: #555;
}

.post__meta__categories:hover,
.post__tags a:hover {
  border-bottom: 2px solid #1a237e;
  color: #1a237e;
}

.blog-post-content {
  margin: 1rem 0;
}
</style>
