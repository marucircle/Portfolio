<template>
  <PrismicRichText
    :field="slice.primary.rich_editor"
    :html-serializer="htmlSerializer"
    class="rich-editor"
  />
</template>

<script>
import { PrismicRichText, PrismicImage } from '@prismicio/vue'

export default {
  name: 'RichEditor',
  components: { PrismicRichText },
  props: {
    slice: Object,
  },

  methods: {
    //embedで整形の必要ありな部分が出てきたらいじる
    htmlSerializer: function (type, element, text, children) {
      if (type === 'image') {
        return `<div class="image"><img src="${element.url}" alt="${element.alt}" /><p class="image-description">${element.alt}</p></div>`
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/prismic/rich-editor.scss';
</style>
