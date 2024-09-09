<template>
  <PrismicRichText
    :field="slice.primary.rich_editor"
    :html-serializer="htmlSerializer"
    class="rich-editor"
  />
</template>

<script>
import Prism from 'prismjs'
import { PrismicRichText, PrismicImage } from '@prismicio/vue'

export default {
  name: 'RichEditor',
  components: { PrismicRichText },
  props: {
    slice: Object,
  },
  mounted() {
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll() // highlight your code on mount
  },

  methods: {
    //embedで整形の必要ありな部分が出てきたらいじる
    htmlSerializer: function (type, element, text, children) {
      if (type === 'image' && element.alt !== null) {
        return `<div class="image"><img src="${element.url}" alt="${element.alt}" /><p class="image-description">${element.alt}</p></div>`
      } else if (type === 'preformatted') {
        return `<pre class="rich-editor-code">${text}</pre>`
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/prismic/rich-editor.scss';
@import '@/styles/_variables.scss';
.rich-editor-code {
  max-height: 500px;
  width: 100%;
  overflow: scroll;
  background-color: #000000;
  color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  @include sp {
    padding: 10px;
    row-gap: 15px;
  }
}
</style>

<style src="../../../../node_modules/prismjs/themes/prism-tomorrow.css"></style>
<style src="../../../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css"></style>
