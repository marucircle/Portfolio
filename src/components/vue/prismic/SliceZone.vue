<template>
  <SliceZone :slices="slices" :components="{ rich_editor: RichEditor, code: Code }" />
</template>

<script>
import { SliceZone } from '@prismicio/vue'
import RichEditor from '@/components/vue/prismic/RichEditor.vue'
import Code from '@/components/vue/prismic/Code.vue'

export default {
  data() {
    return {
      RichEditor,
      Code,
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
