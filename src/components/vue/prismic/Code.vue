<template>
  <pre class="code">
    <code v-html="code" />
  </pre>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'Code',
  props: {
    slice: Object,
  },
  computed: {
    code() {
      return Prism.highlight(this.slice.primary.code[0].text, Prism.languages.javascript, 'tsx')
    },
  },
  mounted() {
    window.Prism = window.Prism || {}
    window.Prism.manual = true
    Prism.highlightAll() // highlight your code on mount
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.code {
  max-height: 500px;
  overflow: scroll;
  background-color: #000000;
  color: #ffffff;
  margin: 20px 140px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  @include sp {
    margin: 0 10px;
    row-gap: 15px;
  }
}
</style>

<style src="../../../../node_modules/prismjs/themes/prism-tomorrow.css"></style>
<style src="../../../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css"></style>
