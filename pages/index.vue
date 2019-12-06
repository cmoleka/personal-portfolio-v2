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
        {{ data.intro.greeting }}
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
        {{ data.intro.name }}
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
        class="text-white display-3 font-weight-bold intro__work"
      >
        {{ data.intro.occupation }}
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
        {{ data.intro.paragraph }}
      </p>
    </headline>
    <section-component
      id="aboutme"
      v-scroll-reveal="{ delay: 500, duration: 1000 }"
    >
      <h1 slot="section__title" class="font-weight-bold text-white h4">
        About Me
      </h1>
      <div slot="section__content" class="section__content">
        <div class="section__content__left">
          <p class="text-white-50">
            {{ data.about.paragraph }}
          </p>
          <p class="pt-2 section__color--bluish">
            {{ data.about.skills.message }}
          </p>
          <ul class="section__list">
            <li v-for="skill in data.about.skills.skills" class="text-white">
              {{ skill }}
            </li>
          </ul>
        </div>
        <div class="section__content__right">
          <div class="section__content__imageOverlay">
            <img :src="data.about.image" class="section__profile__photo" />
          </div>
        </div>
      </div>
    </section-component>
    <section-component
      id="workexperience"
      v-scroll-reveal="{ delay: 500, duration: 1000, origin: 'left' }"
    >
      <h1 slot="section__title" class="font-weight-bold text-white h4">
        Experience
      </h1>
      <div slot="section__content">
        <SectionWorkExperience>
          <h2
            slot="work__company_name--tab"
            v-for="job in allJobs"
            v-on:click.prevent="setActive(job.attributes.company)"
            :class="{ work__tab__active: isActive(job.attributes.company) }"
            class="work__company_name work__tab mb-0 py-2"
          >
            {{ job.attributes.company }}
          </h2>
          <div
            slot="work__details"
            v-for="job in allJobs"
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
              <li v-for="task in job.attributes.tasks" class="text-white">
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
      <h1 slot="section__title" class="font-weight-bold text-white h4">
        Projects
      </h1>
      <div slot="section__content">
        <projects-featured
          v-if="projectsFeatured.attributes.featured === 'true'"
        >
          <img
            slot="Projects__Featured_Image"
            :src="projectsFeatured.attributes.image"
          />

          <h1 slot="Featured__Status" class="text-right">Featured Project</h1>
          <h2 slot="Featured__Title" class="text-right">
            {{ projectsFeatured.attributes.title }}
          </h2>
          <p slot="Featured__Description" class="text-white-50">
            {{ projectsFeatured.attributes.description }}
          </p>
          <ul slot="Featured__Technologies" class="Featured__Tech--List">
            <li v-for="tech in projectsFeatured.attributes.tech">
              {{ tech }}
            </li>
          </ul>
          <ul slot="Featured__Links" class="Featured__Links--List">
            <li v-if="projectsFeatured.attributes.github">
              <a
                :href="projectsFeatured.attributes.github"
                target="_blank"
                rel="noopener noreferrer"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
            </li>
            <li v-if="projectsFeatured.attributes.external">
              <a
                :href="projectsFeatured.attributes.external"
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
            v-for="(project, index) in projectsNotFeatured"
            v-scroll-reveal="{
              delay: 800 + parseInt(100 * index),
              duration: 900,
              interval: 400,
              distance: '50px',
              origin: 'bottom'
            }"
            class="Projects_Single_Details"
          >
            <h1 slot="Single__Title">Project</h1>
            <h2 slot="Single__Description">{{ project.attributes.title }}</h2>
            <p slot="Single__Description" class="text-white-50">
              {{ project.attributes.description }}
            </p>
            <ul slot="Single__Technologies">
              <li v-for="tech in project.attributes.tech">{{ tech }}</li>
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
      <h1 slot="section__title" class="font-weight-bold text-white h4">
        Contact me
      </h1>
      <div slot="section__content">
        <headline class="Contact__Section">
          <h2
            slot="intro__name"
            class="text-white text-center display-4 font-weight-bold text-capitalize Contact__title"
          >
            {{ data.contactMe.title }}
          </h2>
          <p
            slot="intro__paragraphe"
            class="text-white-50 text-center lead Contact__text"
          >
            {{ data.contactMe.paragraph }}
          </p>
          <button-component>
            <a slot="Button__Text" :href="data.contactMe.button.url">
              <p class="py-2 px-4 mb-0 Button__Style mt-2">
                {{ data.contactMe.button.text }}
              </p>
            </a>
          </button-component>
        </headline>
      </div>
    </section-component>
    <social-networks>
      <ul class="SocialNetworks__Social">
        <li v-if="data.socialMedia.github" class="SocialNetworks__ListItem">
          <a :href="data.socialMedia.github" class="SocialNetworks__Link"
            ><font-awesome-icon :icon="['fab', 'github']"
          /></a>
        </li>
        <li v-if="data.socialMedia.twitter" class="SocialNetworks__ListItem">
          <a :href="data.socialMedia.twitter" class="SocialNetworks__Link"
            ><font-awesome-icon :icon="['fab', 'twitter']"
          /></a>
        </li>
        <li v-if="data.socialMedia.instagram" class="SocialNetworks__ListItem">
          <a :href="data.socialMedia.instagram" class="SocialNetworks__Link">
            <font-awesome-icon :icon="['fab', 'instagram']"
          /></a>
        </li>
        <li v-if="data.socialMedia.linkedin" class="SocialNetworks__ListItem">
          <a :href="data.socialMedia.linkedin" class="SocialNetworks__Link"
            ><font-awesome-icon :icon="['fab', 'linkedin']"
          /></a>
        </li>
      </ul>
    </social-networks>
  </main>
</template>

<script>
import Headline from '~/components/Headline.vue'
import SectionComponent from '~/components/Section.vue'
import SectionWorkExperience from '~/components/SectionWorkExperience'
import ButtonComponent from '~/components/Button.vue'
import ProjectsFeatured from '~/components/SectionProjectsFeatured.vue'
import ProjectsSingle from '~/components/SectionProjectsSingle.vue'
import SocialNetworks from '~/components/SocialNetworks.vue'
// content imports //
import hero from '~/content/hero/index.md'
import aboutme from '~/content/about/index.md'
import contactme from '~/content/contact/index.md'
// content imports end //

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
      data: {
        intro: {
          greeting: hero.attributes.title,
          name: hero.attributes.name,
          occupation: hero.attributes.subtitle,
          paragraph: hero.attributes.paragraph
        },
        about: {
          image: aboutme.attributes.image,
          paragraph: aboutme.attributes.paragraph,
          skills: {
            message: aboutme.attributes.skilltitle,
            skills: aboutme.attributes.skills
          }
        },
        contactMe: {
          title: contactme.attributes.title,
          paragraph: contactme.attributes.paragraph,
          button: {
            text: contactme.attributes.buttontitle,
            url: contactme.attributes.url
          }
        },
        socialMedia: {
          github: contactme.attributes.github,
          twitter: contactme.attributes.twitter,
          instagram: contactme.attributes.instagram,
          linkedin: contactme.attributes.linkedin
        }
      }
    }
  },
  computed: {
    projectsFeatured() {
      const featured = this.allProjects.filter(
        (feature) => feature.attributes.featured === 'true'
      )
      return featured[0]
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
      return projects.keys().map((x) => projects(x))
    }
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
