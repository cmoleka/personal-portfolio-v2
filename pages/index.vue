<template>
  <main v-scroll-reveal="{ delay: 1500 }" class="container">
    <headline>
      <h1
        slot="intro__greeting"
        v-scroll-reveal="{
          delay: 1800,
          duration: 800,
          reset: false,
          interval: 600,
          origin: 'bottom'
        }"
        class="intro__greeting"
      >
        {{ hero.attributes.title }}
      </h1>
      <h2
        slot="intro__name"
        v-scroll-reveal="{
          delay: 2000,
          duration: 800,
          reset: false,
          interval: 600,
          origin: 'bottom'
        }"
        class="text-white display-4 font-weight-bold text-capitalize intro__name"
      >
        {{ hero.attributes.name }}
      </h2>
      <h3
        slot="intro__work"
        v-scroll-reveal="{
          delay: 2200,
          duration: 800,
          reset: false,
          interval: 600,
          origin: 'bottom'
        }"
        class="intro__work"
      >
        {{ hero.attributes.subtitle }}
      </h3>
      <p
        slot="intro__paragraphe"
        v-scroll-reveal="{
          delay: 2400,
          duration: 800,
          reset: false,
          interval: 600,
          origin: 'bottom'
        }"
        class="text-white-50 lead intro__paragraphe"
      >
        {{ hero.attributes.paragraph }}
      </p>
      <button-component
        v-scroll-reveal="{
          delay: 2600,
          duration: 800,
          reset: false,
          interval: 600,
          origin: 'bottom'
        }"
      >
        <a slot="Button__Text" v-scroll-to="'#aboutme'" href="#">
          <p
            class="py-2 px-4 mb-0 Button__Style left-align"
            style="text-transform: capitalize;"
          >
            {{ $t('navigation.healineCallToAction') }}
          </p>
        </a>
      </button-component>
    </headline>
    <section-component
      id="aboutme"
      v-scroll-reveal="{ delay: 500, duration: 1000 }"
    >
      <h1
        slot="section__title"
        class="font-weight-bold text-white h4 text-capitalize"
      >
        {{ $t('sections.about') }}
      </h1>
      <div slot="section__content" class="section__content">
        <div class="section__content__left">
          <p class="text-white-50">
            {{ aboutMeContent.attributes.paragraph }}
          </p>
          <p class="pt-2 section__color--bluish">
            {{ aboutMeContent.attributes.message }}
          </p>
          <ul class="section__list">
            <li
              v-for="skill in aboutMeContent.attributes.skills"
              :key="skill.id"
              class="text-white"
            >
              {{ skill }}
            </li>
          </ul>
        </div>
        <div class="section__content__right">
          <div class="section__content__imageOverlay">
            <img
              :src="aboutMeContent.attributes.image"
              class="section__profile__photo"
            />
          </div>
        </div>
      </div>
    </section-component>
    <section-component
      id="workexperience"
      v-if="SiteSettings.isExperienceActive && allJobs.length >= 1"
      v-scroll-reveal="{ delay: 500, duration: 1000, origin: 'left' }"
    >
      <h1
        slot="section__title"
        class="font-weight-bold text-white h4 text-capitalize"
      >
        {{ $t('sections.experience') }}
      </h1>
      <div slot="section__content">
        <SectionWorkExperience>
          <h2
            slot="work__company_name--tab"
            v-for="job in allJobs"
            v-on:click.prevent="setActive(job.attributes.company)"
            :key="job.id"
            :class="{ work__tab__active: isActive(job.attributes.company) }"
            class="work__company_name work__tab mb-0 py-2"
          >
            {{ job.attributes.company }}
          </h2>
          <div
            slot="work__details"
            v-for="job in allJobs"
            :key="job.id"
            :class="{ work__tab__display: isActive(job.attributes.company) }"
            class="work__details"
          >
            <div class="work__title">
              <h1 class="work__position h5 text-white-50">
                {{ job.attributes.title }}
              </h1>
              <a
                :href="job.attributes.url"
                target="_blank"
                class="text-decoration-none ml-2"
              >
                <h2 class="work__company_name">
                  @{{ job.attributes.company }}
                </h2>
              </a>
            </div>
            <h3 class="text-white h5 font-weight-normal">
              {{ job.attributes.location }}
            </h3>
            <p class="text-white">
              {{ job.attributes.range }}
            </p>
            <ul class="section__list">
              <li
                v-for="task in job.attributes.tasks"
                :key="task.id"
                class="text-white"
              >
                {{ task }}
              </li>
            </ul>
          </div>
        </SectionWorkExperience>
      </div>
    </section-component>
    <section-component
      id="projects"
      v-scroll-reveal="{ delay: 500, duration: 1000 }"
    >
      <h1
        slot="section__title"
        class="font-weight-bold text-white h4 text-capitalize"
      >
        {{ $t('sections.projects.title') }}
      </h1>
      <div slot="section__content">
        <projects-featured
          v-show="projectsFeatured.length >= 1"
          v-for="(featured, index) in projectsFeatured"
          :key="index"
          class="mb-4"
        >
          <img
            slot="Projects__Featured_Image"
            :src="featured.attributes.image"
          />

          <h1 slot="Featured__Status" class="text-right text-capitalize">
            {{ $t('sections.projects.featured') }}
          </h1>
          <h2 slot="Featured__Title" class="text-right">
            {{ featured.attributes.title }}
          </h2>
          <p slot="Featured__Description" class="text-white-50">
            {{ featured.attributes.description }}
          </p>
          <ul slot="Featured__Technologies" class="Featured__Tech--List">
            <li v-for="tech in featured.attributes.tech" :key="tech.id">
              {{ tech }}
            </li>
          </ul>
          <ul slot="Featured__Links" class="Featured__Links--List">
            <li v-if="featured.attributes.github">
              <a
                :href="featured.attributes.github"
                target="_blank"
                rel="noopener noreferrer"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
            </li>
            <li v-if="featured.attributes.external">
              <a
                :href="featured.attributes.external"
                target="_blank"
                rel="noopener noreferrer"
                ><font-awesome-icon :icon="['fas', 'external-link-alt']"
              /></a>
            </li>
          </ul>
        </projects-featured>
        <projects-single>
          <div
            slot="Projects_Single_Details"
            v-show="projectsNotFeatured.length >= 1"
            v-for="(project, index) in projectsNotFeatured"
            :key="index"
            v-scroll-reveal="{
              delay: 800 + parseInt(100 * index),
              duration: 900,
              interval: 400,
              distance: '50px',
              origin: 'bottom'
            }"
            class="Projects_Single_Details"
          >
            <h1 slot="Single__Title" class="text-capitalize">
              {{ $t('sections.projects.single') }}
            </h1>
            <h2 slot="Single__Description">{{ project.attributes.title }}</h2>
            <p slot="Single__Description" class="text-white-50">
              {{ project.attributes.description }}
            </p>
            <ul slot="Single__Technologies">
              <li v-for="tech in project.attributes.tech" :key="tech.id">
                {{ tech }}
              </li>
            </ul>
            <ul slot="Single__Links" class="Single__Links mt-2">
              <li v-if="project.attributes.github">
                <a
                  :href="project.attributes.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'github']"
                /></a>
              </li>
              <li v-if="project.attributes.external">
                <a
                  :href="project.attributes.external"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fas', 'external-link-alt']"
                /></a>
              </li>
            </ul>
          </div>
        </projects-single>
      </div>
    </section-component>
    <section-component
      id="contactme"
      v-scroll-reveal="{ delay: 500, duration: 1000 }"
    >
      <h1
        slot="section__title"
        class="font-weight-bold text-white h4 text-capitalize"
      >
        {{ $t('sections.contactMe') }}
      </h1>
      <div slot="section__content">
        <headline class="Contact__Section">
          <h2
            slot="intro__name"
            class="text-white text-center display-4 font-weight-bold text-capitalize Contact__title"
          >
            {{ contactMe.attributes.title }}
          </h2>
          <p
            slot="intro__paragraphe"
            class="text-white-50 text-center lead Contact__text"
          >
            {{ contactMe.attributes.paragraph }}
          </p>
          <button-component>
            <a slot="Button__Text" :href="contactMe.attributes.url">
              <p class="py-2 px-4 mb-0 Button__Style mt-2">
                {{ contactMe.attributes.buttontitle }}
              </p>
            </a>
          </button-component>
        </headline>
      </div>
    </section-component>
    <social-networks>
      <ul class="SocialNetworks__Social">
        <li
          v-for="(value, name, index) in socialNetworks.attributes"
          :key="index"
          class="SocialNetworks__ListItem"
        >
          <a :href="value" class="SocialNetworks__Link">
            <font-awesome-icon :icon="['fab', name]" />
          </a>
        </li>
      </ul>
    </social-networks>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Headline from '~/components/Headline.vue'
import SectionComponent from '~/components/Section.vue'
import SectionWorkExperience from '~/components/SectionWorkExperience'
import ButtonComponent from '~/components/Button.vue'
import ProjectsFeatured from '~/components/SectionProjectsFeatured.vue'
import ProjectsSingle from '~/components/SectionProjectsSingle.vue'
import SocialNetworks from '~/components/SocialNetworks.vue'
import socials from '~/content/social/index.md'

export default {
  components: {
    Headline,
    SectionComponent,
    SectionWorkExperience,
    ButtonComponent,
    ProjectsFeatured,
    ProjectsSingle,
    SocialNetworks
  },
  data() {
    return {
      activeWork: 'Itraws',
      data: {}
    }
  },
  computed: {
    projectsFeatured() {
      /**
       * Returns an array containing all featured projects.
       * @returns {array} - All featured posts
       */
      // eslint-disable-next-line no-console
      const featured = this.allProjects.filter(
        (feature) => feature.attributes.featured === 'true'
      )
      return featured
    },
    projectsNotFeatured() {
      const projects = this.allProjects.filter(
        (project) => project.attributes.featured !== 'true'
      )
      return projects
    },
    allJobs() {
      // Find all markdown files within the jobs folder and subfolder
      const jobs = require.context('@/content/jobs', true, /.*\.(md)/)
      // Return an array of Ojects containing the jobs
      return jobs.keys().map((x) => jobs(x))
    },
    allProjects() {
      // Find all markdown files within the projects folder
      const projects = require.context('@/content/projects', false, /.*\.(md)/)
      // Return an array of Ojects containing the projects
      const projectsMap = projects.keys().map((x) => projects(x))
      const projectsFr = projectsMap.filter(
        (project) => project.attributes.lang === 'fr'
      )
      const projectsEn = projectsMap.filter(
        (project) => project.attributes.lang === 'en'
      )
      const projectMap = new Map()
      projectMap.set('fr', projectsFr)
      projectMap.set('en', projectsEn)
      const projectData = {
        fr: projectMap.get('fr'),
        en: projectMap.get('en')
      }
      if (this.$i18n.locale !== 'en') {
        return projectData.fr
      } else {
        return projectData.en
      }
    },
    hero() {
      const heros = require.context('@/content/hero', false, /.*\.(md)/)
      const herosMap = heros.keys().map((hero) => heros(hero))
      const heroFr = herosMap.filter((hero) => hero.attributes.lang === 'fr')
      const heroEn = herosMap.filter((hero) => hero.attributes.lang === 'en')
      const heroMap = new Map()
      heroMap.set('fr', heroFr)
      heroMap.set('en', heroEn)
      const heroData = {
        fr: heroMap.get('fr')[0],
        en: heroMap.get('en')[0]
      }
      if (this.$i18n.locale !== 'en') {
        return heroData.fr
      } else {
        return heroData.en
      }
    },
    aboutMeContent() {
      const aboutme = require.context('@/content/about', false, /.*\.(md)/)
      const aboutmeMap = aboutme.keys().map((about) => aboutme(about))
      const aboutmeFr = aboutmeMap.filter(
        (about) => about.attributes.lang === 'fr'
      )
      const aboutmeEn = aboutmeMap.filter(
        (about) => about.attributes.lang === 'en'
      )
      const map = new Map()
      map.set('fr', aboutmeFr)
      map.set('en', aboutmeEn)
      const aboutmeData = {
        fr: map.get('fr')[0],
        en: map.get('en')[0]
      }
      if (this.$i18n.locale !== 'en') {
        return aboutmeData.fr
      } else {
        return aboutmeData.en
      }
    },
    contactMe() {
      const contactMe = require.context('@/content/contact', false, /.*\.(md)/)
      const contactMeMap = contactMe.keys().map((contact) => contactMe(contact))
      const contactMeFr = contactMeMap.filter(
        (contact) => contact.attributes.lang === 'fr'
      )
      const contactMeEn = contactMeMap.filter(
        (contact) => contact.attributes.lang === 'en'
      )
      const map = new Map()
      map.set('fr', contactMeFr)
      map.set('en', contactMeEn)
      const contactMeData = {
        fr: map.get('fr')[0],
        en: map.get('en')[0]
      }
      if (this.$i18n.locale !== 'en') {
        return contactMeData.fr
      } else {
        return contactMeData.en
      }
    },
    socialNetworks() {
      return socials
    },
    ...mapState(['SiteSettings'])
  },
  methods: {
    isActive(work) {
      return this.activeWork === work
    },
    setActive(work) {
      this.activeWork = work
    }
  }
}
</script>

<style lang="css">
.section__component {
  counter-increment: contentIndex;
}
.Transitions__ {
  display: block;
}
</style>
