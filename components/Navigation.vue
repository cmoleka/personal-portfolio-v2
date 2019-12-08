<template>
  <nav class="navbar navbar-expand-lg Header__Container">
    <logo
      v-scroll-reveal="{
        delay: 1500,
        duration: 800,
        reset: false,
        interval: 600,
        origin: 'left'
      }"
    />
    <div v-scroll-reveal="{ delay: 1500 }" class="Navigation__container">
      <a
        v-scroll-to="'#aboutme'"
        v-scroll-reveal="{
          delay: 1800,
          duration: 800,
          reset: false,
          interval: 600,
          origin: 'top'
        }"
        href="#"
        class="nav-link text-white Navigation__Link"
        >About</a
      >
      <a
        v-scroll-to="'#workexperience'"
        v-scroll-reveal="{
          delay: 2000,
          duration: 800,
          reset: false,
          interval: 600,
          origin: 'top'
        }"
        href="#"
        class="nav-link text-white Navigation__Link"
        >Experience</a
      >
      <a
        v-scroll-to="'#projects'"
        v-scroll-reveal="{
          delay: 2100,
          duration: 800,
          reset: false,
          interval: 600,
          origin: 'top'
        }"
        href="#"
        class="nav-link text-white Navigation__Link"
        >Work</a
      >
      <a
        v-scroll-to="'#contactme'"
        v-scroll-reveal="{
          delay: 2200,
          duration: 800,
          reset: false,
          interval: 600,
          origin: 'top'
        }"
        href="#"
        class="nav-link text-white Navigation__Link"
        >Contact</a
      >
    </div>
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>
<style lang="css">
.Header__Container {
  justify-content: baseline;
}
.Navigation__container {
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  flex-wrap: nowrap;
}
.Navigation__Link {
  counter-increment: contentIndex;
  display: inline-block;
}
.Navigation__Link::before {
  content: counter(contentIndex) '.';
  display: inline-block;
  margin: 0 auto;
  font-size: 1em;
  color: #649edd;
  font-family: 'Courier New', Courier, monospace;
}
</style>
