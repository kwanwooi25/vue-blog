<template>
  <ul class="blog-posts">
    <li v-for="post in posts" :key="post.slug" class="post-preview">
      <img
        class="post-preview__image"
        :src="post.featured_image"
        :alt="post.title"
      />
      <router-link
        :to="'/post/' + post.slug"
        class="post-preview__title"
      >
        {{post.title}}
      </router-link>
      <p class="post-preview__summary">
        {{post.summary}}
      </p>
      <p class="post-preview__date">
        <em>{{post.published | formatDate}}</em>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PostPreview',
  props: ['posts'],
};
</script>

<style scoped>
.blog-posts {
  list-style: none;
  margin: 0;
  padding: 0;
}

.post-preview {
  align-items: center;
  border-bottom: 1px dashed #cdcdcd;
  display: grid;
  justify-content: flex-start;
  grid-template-columns: 200px auto;
  grid-gap: 1rem;
  padding: 1rem;
}

.post-preview:hover {
  background: #f5f5f5;
}

.post-preview:last-child {
  border-bottom: none;
}

.post-preview__image {
  grid-row-start: 1;
  grid-row-end: 4;
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.post-preview__title {
  border-bottom: 3px solid transparent;
  color: #1a237e;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  justify-self: start;
  text-decoration: none;
}

.post-preview__title:hover {
  border-bottom: 3px solid #1a237e;
}

.post-preview__summary {
  font-size: 0.9rem;
  margin: 0;
  text-align: left;
}

.post-preview__date {
  color: #999;
  font-size: 0.8rem;
  margin: 0;
  text-align: left;
}

@media (max-width: 600px) {
  .post-preview {
    grid-template-columns: 100px auto;
  }

  .post-preview__image {
    width: 100px;
    height: 100px;
  }

  .post-preview__title,
  .post-preview__summary {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
