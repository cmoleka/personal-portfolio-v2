<template>
  <div class="headline-component pt-5 mx-auto">
    <div class="headline__container">
      <slot name="intro__greeting"></slot>
      <slot name="intro__name"></slot>
      <slot name="intro__work"></slot>
      <slot name="intro__paragraphe"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.headline-component {
  width: 80%;
}
.headline__container {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.intro__greeting {
  color: #5d7997;
  font-size: 1.2em;
}
</style>
