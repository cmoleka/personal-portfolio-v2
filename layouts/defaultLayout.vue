<template>
  <div class="container-fluid">
    <navigation />
    <nuxt />
    <animated-elements />
  </div>
</template>

/* Script */
<script>
import Navigation from '~/components/NavigationComponent.vue'
import animatedElements from '~/components/animatedElements.vue'

export default {
  components: {
    Navigation,
    animatedElements
  }
}
</script>

/* Style */
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #1f2b38;
  letter-spacing: 0.1rem;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: transparent;
}

.text-letterspacing {
  letter-spacing: 0.1rem;
}
</style>
