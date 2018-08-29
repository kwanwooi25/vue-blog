<template>
  <div id="widget">
    <div class="widget__container">
      <div class="widget__item" v-if="categories">
        <h3 class="widget__item__title">Categories</h3>
        <ul class="widget__item__categories">
          <li
            v-for="category in categories"
            :key="category.slug"
          >
            <router-link
              class="link widget__item__link"
              :to="'/categories/' + category.slug"
            >
              {{ category.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="widget__item" v-if="tags">
        <h3 class="widget__item__title">Tags</h3>
        <div class="widget__item__tags">
          <router-link
            class="link widget__item__link"
            v-for="tag in tags"
            :key="tag.slug"
            :to="'/tags/' + tag.slug"
            :style="{ fontSize: 0.8 + (tag.count * 0.15) + 'rem'}"
          >
            {{ tag.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Widget',
  props: [ 'categories', 'tags'],
}
</script>

<style scoped>
#widget {
  background: #eee;
}

.widget__container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.widget__item {
  margin-bottom: 1rem;
}

.widget__item:last-child {
  margin-bottom: 0;
}

.widget__item__title {
  color: #333;
  margin: 0;
  margin-bottom: 0.5rem;
}

.widget__item__categories {
  list-style: none;
  margin: 0;
  padding: 0;
}

.widget__item__categories li {
  margin-left: 1rem;
  margin-bottom: 0.25rem;
}

.widget__item__categories li::before {
  content: '-';
  margin-right: 0.5rem;
}

.widget__item__link {
  color: #555;
}

.widget__item__link:hover {
  color: #1a237e;
}

.widget__item__tags a {
  margin-right: 0.25rem;
}

@media (min-width: 600px) {
  .widget__container {
    flex-direction: row;
    max-width: 900px;
    margin: auto;
  }
  
  .widget__item {
    min-width: 50%;
  }
}
</style>
