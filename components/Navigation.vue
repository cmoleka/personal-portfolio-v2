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
        >{{ $t('navigation.about') }}</a
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
        >{{ $t('navigation.experience') }}</a
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
        >{{ $t('navigation.work') }}</a
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
        >{{ $t('navigation.contact') }}</a
      >
      <b-dropdown
        id="dropdown-1"
        v-scroll-reveal="{
          delay: 2400,
          duration: 800,
          reset: false,
          interval: 600,
          origin: 'top'
        }"
        right
        class="Navigation__btn"
      >
        <template v-slot:button-content>
          &#127760;
        </template>
        <b-dropdown-item :to="switchLocalePath('en')">English</b-dropdown-item>
        <b-dropdown-item :to="switchLocalePath('fr')">Français</b-dropdown-item>
      </b-dropdown>
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
  text-transform: capitalize;
}
.Navigation__Link::before {
  content: counter(contentIndex) '.';
  display: inline-block;
  margin: 0 auto;
  font-size: 1em;
  color: #649edd;
  font-family: 'Courier New', Courier, monospace;
}
.Navigation__btn > .btn-secondary {
  background-color: transparent;
  border-color: #649edd;
}
.Navigation__btn > .btn-secondary.dropdown-toggle {
  background-color: rgba(100, 158, 221, 0.37);
  border-color: transparent;
}
.Navigation__btn > .btn-secondary:hover {
  background-color: rgba(100, 158, 221, 0.37);
  border-color: transparent;
}
</style>
