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
        class="text-white display-4 font-weight-bold text-capitalize"
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
        class="text-white display-3 font-weight-bold"
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
        class="text-white-50 lead "
      >
        {{ data.intro.message }}
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
            {{ data.about.message }}
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
        <div class="section__content__right ml-5">
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
            v-for="work in data.workExperienceData"
            v-on:click.prevent="setActive(work.companyName)"
            :class="{ work__tab__active: isActive(work.companyName) }"
            class="work__company_name work__tab mb-0 py-2"
          >
            {{ work.companyName }}
          </h2>
          <div
            slot="work__details"
            v-for="work in data.workExperienceData"
            :class="{ work__tab__display: isActive(work.companyName) }"
            class="work__details"
          >
            <div class="work__title">
              <h1 class="work__position h5 text-white-50">
                {{ work.position }}
              </h1>
              <h2 class="work__company_name">
                {{ work.companyName }}
              </h2>
            </div>
            <p class="text-white">
              {{ work.time }}
            </p>
            <ul class="section__list">
              <li v-for="task in work.tasks" class="text-white">
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
        Some of my projects
      </h1>
      <div slot="section__content">
        <projects-featured v-if="projectsFeatured.isFeatured === true">
          <img slot="Projects__Featured_Image" :src="projectsFeatured.image" />

          <h1 slot="Featured__Status" class="text-right">Featured Project</h1>
          <h2 slot="Featured__Title" class="text-right">
            {{ projectsFeatured.title }}
          </h2>
          <p slot="Featured__Description" class="text-white-50">
            {{ projectsFeatured.description }}
          </p>
          <ul slot="Featured__Technologies" class="Featured__Tech--List">
            <li v-for="tech in projectsFeatured.technologies">
              {{ tech }}
            </li>
          </ul>
          <ul slot="Featured__Links" class="Featured__Links--List">
            <li v-if="projectsFeatured.githubLink">
              <a
                :href="projectsFeatured.githubLink"
                target="_blank"
                rel="noopener noreferrer"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
            </li>
            <li v-if="projectsFeatured.websiteLink">
              <a
                :href="projectsFeatured.websiteLink"
                target="_blank"
                rel="noopener noreferrer"
                ><font-awesome-icon :icon="['fas', 'external-link-alt']"
              /></a>
            </li>
          </ul>
        </projects-featured>
        <projects-single class="mt-4">
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
            <h2 slot="Single__Description">{{ project.title }}</h2>
            <p slot="Single__Description" class="text-white-50">
              {{ project.description }}
            </p>
            <ul slot="Single__Technologies">
              <li v-for="tech in project.technologies">{{ tech }}</li>
            </ul>
            <ul slot="Single__Links" class="Single__Links mt-2">
              <li v-if="project.githubLink">
                <a
                  :href="project.githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'github']"
                /></a>
              </li>
              <li v-if="project.websiteLink">
                <a
                  :href="project.websiteLink"
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
        <headline>
          <h2
            slot="intro__name"
            class="text-white text-center display-4 font-weight-bold text-capitalize"
          >
            {{ data.contactMe.headline }}
          </h2>
          <p slot="intro__paragraphe" class="text-white-50 text-center lead ">
            {{ data.contactMe.message }}
          </p>
          <button-component>
            <a slot="Button__Text" :href="data.contactMe.url">
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
        <li class="SocialNetworks__ListItem">
          <a :href="data.socialMedia.github" class="SocialNetworks__Link"
            ><font-awesome-icon :icon="['fab', 'github']"
          /></a>
        </li>
        <li class="SocialNetworks__ListItem">
          <a :href="data.socialMedia.twitter" class="SocialNetworks__Link"
            ><font-awesome-icon :icon="['fab', 'twitter']"
          /></a>
        </li>
        <li class="SocialNetworks__ListItem">
          <a :href="data.socialMedia.instagram" class="SocialNetworks__Link">
            <font-awesome-icon :icon="['fab', 'instagram']"
          /></a>
        </li>
        <li class="SocialNetworks__ListItem">
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
          greeting: 'Hi my name is,',
          name: 'Carlo Moleka.',
          occupation: 'Web Developer.',
          message:
            'I am a self-taught Web developer, learning through research and development. My greatest asset is curiosity. It defines and motivates me to expand my knowledge and skills to greater heights.'
        },
        about: {
          image: 'https://avatars3.githubusercontent.com/u/38387370?s=460&v=4',
          message:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          skills: {
            message:
              "Here are a few technologies I've been working with recently:",
            skills: [
              'Javascript (ES6+)',
              'Node.js',
              'HTML & (S)CSS',
              'Vue',
              'Nuxt',
              'Express',
              'Python'
            ]
          }
        },
        workExperienceData: [
          {
            companyName: 'Itraws',
            position: 'Engineer',
            time: 'April 2013 - Present',
            tasks: [
              'Excepteur sint occaecat cupidatat non proident.',
              'Excepteur sint occaecat cupidatat non proident.',
              'Excepteur sint occaecat cupidatat non proident.'
            ]
          },
          {
            companyName: 'Victoria Analytica',
            position: 'Data Analyst',
            time: 'April 2019 - Present',
            tasks: [
              'Excepteur sint occaecat cupidatat non proident.',
              'Excepteur sint occaecat cupidatat non proident.',
              'Excepteur sint occaecat cupidatat non proident.'
            ]
          }
        ],
        projects: [
          {
            title: 'Itraws V1',
            image: 'https://cmoleka.github.io/img/projects/itraws.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.',
            technologies: ['Nuxt', 'Contentful', 'Bootstrap'],
            githubLink: '',
            websiteLink: 'https://www.itraws.com',
            isFeatured: true
          },
          {
            title: 'Itraws V1',
            image: 'https://cmoleka.github.io/img/projects/itraws.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.',
            technologies: ['Nuxt', 'Contentful', 'Bootstrap'],
            githubLink: '',
            websiteLink: 'https://www.itraws.com',
            isFeatured: false
          },
          {
            title: 'Itraws V1',
            image: 'https://cmoleka.github.io/img/projects/itraws.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.',
            technologies: ['Nuxt', 'Contentful', 'Bootstrap'],
            githubLink: '',
            websiteLink: 'https://www.itraws.com',
            isFeatured: false
          },
          {
            title: 'Itraws V1',
            image: 'https://cmoleka.github.io/img/projects/itraws.png',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua.',
            technologies: ['Nuxt', 'Contentful', 'Bootstrap'],
            githubLink: '',
            websiteLink: 'https://www.itraws.com',
            isFeatured: false
          }
        ],
        contactMe: {
          headline: 'Get In Touch',
          message:
            "Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!",
          button: {
            text: 'Mail me',
            url: 'mailto:cmoleka@icloud.com'
          }
        },
        socialMedia: {
          github: 'https://github.com/cmoleka',
          twitter: 'https://twitter.com/CarloMoleka',
          instagram: 'https://www.instagram.com/cmolex',
          linkedin: 'https://www.linkedin.com/in/carlomoleka/'
        }
      }
    }
  },
  computed: {
    projectsFeatured() {
      const featured = this.data.projects.filter(
        (feature) => feature.isFeatured === true
      )
      return featured[0]
    },
    projectsNotFeatured() {
      const projects = this.data.projects.filter(
        (project) => project.isFeatured === false
      )
      return projects
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
.section-component {
  counter-increment: contentIndex;
}
.Transitions__ {
  display: block;
}
</style>
