<template>
  <div class="Projects__Container">
    <projects-featured>
      <h1 slot="Featured__Status">Featured</h1>
      <h2 slot="Featured__Title">Itraws</h2>
      <p slot="Featured__Description"></p>
      <slot name="Featured__Technologies" />
      <slot name="Featured__Links" />
    </projects-featured>
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
  },
  data() {
    return {
      projectsData: [
        {
          featured: {
            projectName: 'Itraws',
            projectDescription:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.',
            projectTechnologies: ['NuxtJs', 'Contentful CMS', 'Bootstrap'],
            projectLinks: {
              github: '',
              link: ''
            },
            projectImgUrl: 'https://cmoleka.github.io/img/projects/itraws.png',
            projectFeatured: true
          }
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped></style>
