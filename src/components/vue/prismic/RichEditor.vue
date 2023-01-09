<template>
  <PrismicRichText :field="slice.primary.rich_editor" />
</template>

<script>
import { PrismicRichText } from '@prismicio/vue'

export default {
  name: 'RichEditor',
  components: { PrismicRichText },
  props: {
    slice: Object,
  },
  created() {
    console.log(this.slice.primary)
  },
}
</script>
