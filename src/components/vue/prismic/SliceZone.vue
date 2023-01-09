<template>
  <SliceZone :slices="slices" :components="{ rich_editor: RichEditor }" />
</template>

<script>
import { SliceZone } from '@prismicio/vue'
import RichEditor from '@/components/vue/prismic/RichEditor.vue'

export default {
  data() {
    return {
      RichEditor,
    }
  },
  components: {
    SliceZone,
  },
  props: {
    slices: { type: Object, isArray: true, required: true },
  },
}
</script>
