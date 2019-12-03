<template>
  <main class="container">
    <headline>
      <h1 slot="intro__greeting" class="intro__greeting">
        Hi my name is,
      </h1>
      <h2
        slot="intro__name"
        class="text-white display-4 font-weight-bold text-capitalize"
      >
        Carlo Moleka.
      </h2>
      <h3 slot="intro__work" class="text-white display-4 font-weight-bold">
        Web Developer.
      </h3>
      <p slot="intro__paragraphe" class="text-white-50 lead ">
        I am a self-taught Web developer, learning through research and
        development. My greatest asset is curiosity. It defines and motivates me
        to expand my knowledge and skills to greater heights.
      </p>
    </headline>
    <section-component>
      <h1 slot="section__title" class="font-weight-bold text-white h4">
        About Me
      </h1>
      <div slot="section__content" class="section__content">
        <div class="section__content__left">
          <p class="text-white-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="pt-2 section__color--bluish">
            Here are a few technologies I've been working with recently:
          </p>
          <ul class="section__list">
            <li class="text-white">Javascript (ES6+)</li>
            <li class="text-white">Node.js</li>
            <li class="text-white">HTML & (S)CSS</li>
            <li class="text-white">Vue</li>
            <li class="text-white">Nuxt</li>
            <li class="text-white">Express</li>
            <li class="text-white">Python</li>
          </ul>
        </div>
        <div class="section__content__right ml-5">
          <div class="section__content__imageOverlay">
            <img
              src="https://avatars3.githubusercontent.com/u/38387370?s=460&v=4"
              class="section__profile__photo"
            />
          </div>
        </div>
      </div>
    </section-component>
    <section-component>
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
    <section-component>
      <h1 slot="section__title" class="font-weight-bold text-white h4">
        Some of my projects
      </h1>
      <div slot="section__content">
        <projects-featured>
          <img
            slot="Projects__Featured_Image"
            src="https://cmoleka.github.io/img/projects/itraws.png"
          />

          <h1 slot="Featured__Status" class="text-right">Featured Project</h1>
          <h2 slot="Featured__Title" class="text-right">Itraws</h2>
          <p slot="Featured__Description" class="text-white-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul slot="Featured__Technologies" class="Featured__Tech--List">
            <li>Nuxt</li>
            <li>Contentful</li>
            <li>Bootstrap</li>
            <li>Bootstrap</li>
            <li>Bootstrap</li>
            <li>Bootstrap</li>
            <li>Bootstrap</li>
            <li>Bootstrap</li>
            <li>Bootstrap</li>
          </ul>
          <ul slot="Featured__Links" class="Featured__Links--List">
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer"
                ><font-awesome-icon :icon="['fab', 'github']"
              /></a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer"
                ><font-awesome-icon :icon="['fas', 'external-link-alt']"
              /></a>
            </li>
          </ul>
        </projects-featured>
        <projects-single class="mt-4">
          <div slot="Projects_Single_Details" class="Projects_Single_Details">
            <h1 slot="Single__Title">Project</h1>
            <h2 slot="Single__Description">Description</h2>
            <p slot="Single__Description" class="text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmo tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul slot="Single__Technologies">
              <li>Nuxt</li>
              <li>Contentful</li>
              <li>Bootstrap</li>
            </ul>
            <ul slot="Single__Links" class="Single__Links mt-2">
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'github']"
                /></a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fas', 'external-link-alt']"
                /></a>
              </li>
            </ul>
          </div>
          <div slot="Projects_Single_Details" class="Projects_Single_Details">
            <h1 slot="Single__Title">Project</h1>
            <h2 slot="Single__Description">Description</h2>
            <p slot="Single__Description" class="text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmo tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul slot="Single__Technologies">
              <li>Nuxt</li>
              <li>Contentful</li>
              <li>Bootstrap</li>
            </ul>
            <ul slot="Single__Links" class="Single__Links mt-2">
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'github']"
                /></a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fas', 'external-link-alt']"
                /></a>
              </li>
            </ul>
          </div>
          <div slot="Projects_Single_Details" class="Projects_Single_Details">
            <h1 slot="Single__Title">Project</h1>
            <h2 slot="Single__Description">Description</h2>
            <p slot="Single__Description" class="text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmo tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul slot="Single__Technologies">
              <li>Nuxt</li>
              <li>Contentful</li>
              <li>Bootstrap</li>
            </ul>
            <ul slot="Single__Links" class="Single__Links mt-2">
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'github']"
                /></a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fas', 'external-link-alt']"
                /></a>
              </li>
            </ul>
          </div>
          <div slot="Projects_Single_Details" class="Projects_Single_Details">
            <h1 slot="Single__Title">Project</h1>
            <h2 slot="Single__Description">Description</h2>
            <p slot="Single__Description" class="text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmo tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul slot="Single__Technologies">
              <li>Nuxt</li>
              <li>Contentful</li>
              <li>Bootstrap</li>
            </ul>
            <ul slot="Single__Links" class="Single__Links mt-2">
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fab', 'github']"
                /></a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer"
                  ><font-awesome-icon :icon="['fas', 'external-link-alt']"
                /></a>
              </li>
            </ul>
          </div>
        </projects-single>
      </div>
    </section-component>
    <section-component>
      <h1 slot="section__title" class="font-weight-bold text-white h4">
        Contact me
      </h1>
      <div slot="section__content">
        <headline>
          <h2
            slot="intro__name"
            class="text-white text-center display-4 font-weight-bold text-capitalize"
          >
            Get in touch
          </h2>
          <p slot="intro__paragraphe" class="text-white-50 text-center lead ">
            Although I'm not currently looking for freelance opportunities, my
            inbox is always open. Whether for a potential project or just to say
            hi, I'll try my best to answer your email!
          </p>
          <button-component>
            <a slot="Button__Text" href="mailto:cmoleka@icloud.com">
              <p class="py-2 px-4 mb-0 Button__Style mt-2">
                Mail me
              </p>
            </a>
          </button-component>
        </headline>
      </div>
    </section-component>
  </main>
</template>

<script>
import Headline from '~/components/Headline.vue'
import SectionComponent from '~/components/Section.vue'
import SectionWorkExperience from '~/components/SectionWorkExperience'
import ButtonComponent from '~/components/Button.vue'
import ProjectsFeatured from '~/components/SectionProjectsFeatured.vue'
import ProjectsSingle from '~/components/SectionProjectsSingle.vue'
export default {
  components: {
    Headline,
    SectionComponent,
    SectionWorkExperience,
    ButtonComponent,
    ProjectsFeatured,
    ProjectsSingle
  },
  data() {
    return {
      activeWork: 'Itraws',
      data: {
        intro: {
          greeting: '',
          name: '',
          occupation: '',
          message: ''
        },
        about: {
          image: '',
          message: '',
          skills: {
            message: '',
            skills: []
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
            title: '',
            image: '',
            description: '',
            technologies: [],
            githubLink: '',
            websiteLink: '',
            isFeatured: true
          }
        ],
        contactMe: {
          headline: '',
          message: '',
          button: {
            text: '',
            url: ''
          }
        },
        socialMedia: {
          github: '',
          twitter: '',
          instagram: '',
          linkedin: ''
        }
      }
    }
  },
  computed: {},
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
</style>
