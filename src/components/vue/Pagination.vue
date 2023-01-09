<template>
  <div class="pagination">
    <a
      v-if="offset !== 1"
      class="pagination-link pagination-link-prev"
      :href="'/news/page/' + (offset - 1)"
      >Prev</a
    >
    <div class="pagination-flexbox">
      <a v-if="offset !== 1" class="pagination-link" :href="'/news/page/' + 1">1</a>
      <span v-if="offset - 2 > 1">...</span>
      <a v-if="offset - 1 > 1" class="pagination-link" :href="'/news/page/' + (offset - 1)">{{
        offset - 1
      }}</a>
      <span class="pagination-link pagination-link-active">{{ offset }}</span>
      <a v-if="offset + 1 < maxPage" class="pagination-link" :href="'/news/page/' + (offset + 1)">{{
        offset + 1
      }}</a>
      <span v-if="offset + 2 < maxPage">...</span>
      <a v-if="offset !== maxPage" class="pagination-link" :href="'/news/page/' + maxPage">{{
        maxPage
      }}</a>
    </div>
    <a
      v-if="offset !== maxPage"
      class="pagination-link pagination-link-next"
      :href="'/news/page/' + (offset + 1)"
      >Next</a
    >
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    offset: {
      type: Number,
      required: true,
    },
    maxPage: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss">
@import '../../styles/_variables.scss';
.pagination {
  display: flex;
  column-gap: 20px;

  &-flexbox {
    display: flex;
    column-gap: 10px;
  }
  &-link {
    display: inline-block;
    padding: 4px 10px;
    font-size: map-get($map: $font-sizes, $key: 'heading3');

    font-weight: bold;

    &-active {
      color: map-get($map: $text-colors, $key: 'white');
      background-color: map-get($map: $bg-colors, $key: 'black');
    }
  }
}
</style>
