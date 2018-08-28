<template>
  <div class="paginator">
    <button
      class="paginator__button"
      v-on:click="onPageChange('first')"
      v-bind:disabled="isFirstPage"
    >
      <i class="material-icons">first_page</i>
    </button>
    <button
      class="paginator__button"
      v-on:click="onPageChange('prev')"
      v-bind:disabled="isFirstPage"
    >
      <i class="material-icons">navigate_before</i>
    </button>
    <span class="paginator__page">
      {{ currentPage }} / {{ totalPage }}
    </span>
    <button
      class="paginator__button"
      v-on:click="onPageChange('next')"
      v-bind:disabled="isLastPage"
    >
      <i class="material-icons">navigate_next</i>
    </button>
    <button
      class="paginator__button"
      v-on:click="onPageChange('last')"
      v-bind:disabled="isLastPage"
    >
      <i class="material-icons">last_page</i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Paginator',
  props: [
    'onPageChange',
    'currentPage',
    'totalPage',
    'isFirstPage',
    'isLastPage',
  ],
};
</script>

<style scoped>
.paginator {
  border-top: 1px solid #cdcdcd;
  padding: 1rem 0;
  align-items: center;
  display: flex;
  justify-content: center;
}

.paginator__button {
  background: none;
  border: 1px solid #cdcdcd;
  border-radius: 50%;
  margin: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
}

.paginator__button:hover {
  background: #efefef;
  cursor: pointer;
}

.paginator__button:disabled {
  background: #cdcdcd;
  cursor: default;
}

.paginator__page {
  padding: 0 1rem;
}
</style>
