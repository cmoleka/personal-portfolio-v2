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
