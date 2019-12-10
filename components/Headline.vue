<template>
  <div class="headline-component">
    <div class="headline__container">
      <slot name="intro__greeting"></slot>
      <slot name="intro__name"></slot>
      <slot name="intro__work"></slot>
      <slot name="intro__paragraphe"></slot>
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.headline-component {
  width: 80%;
  padding-top: 3rem;
  margin: 0 auto;
}
.headline__container {
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 7rem;
}
.intro__greeting {
  color: #649edd;
  font-size: 1.2em;
}
.intro__work::before {
  content: '{';
  color: #4188d3;
}
.intro__work::after {
  content: '}';
  color: #4188d3;
}
</style>
