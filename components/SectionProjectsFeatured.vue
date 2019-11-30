<template>
  <div class="Projects__Featured__Container">
    <div class="Projects__Featured__Image"></div>
    <div class="Projects_Featured_Details">
      <slot name="Featured__Status" />
      <slot name="Featured__Title" />
      <slot name="Featured__Description" />
      <slot name="Featured__Technologies" />
      <slot name="Featured__Links" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped></style>
