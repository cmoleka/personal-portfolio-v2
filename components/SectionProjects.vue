<template>
  <div class="Projects__Container">
    <projects-featured> </projects-featured>
    <projects-single> </projects-single>
  </div>
</template>

<script>
import ProjectsFeatured from '~/components/SectionProjectsFeatured.vue'
import ProjectsSingle from '~/components/SectionProjectsSingle.vue'
export default {
  components: {
    ProjectsFeatured,
    ProjectsSingle
  }
}
</script>

<style lang="css" scoped></style>
