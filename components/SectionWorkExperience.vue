<template>
  <div class="work__container pb-3">
    <div class="work__title">
      <slot name="work__position" />
      <slot name="work__company_name" />
    </div>
    <slot name="work__time" />
    <slot name="work__tasks" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.work__container {
  width: 100%;
}
.work__title {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: baseline;
}
.work__company_name {
  color: #5d7997;
}
.work__company_name:before {
  content: '-';
  display: inline-block;
}
.section__list {
  list-style: none;
}
.section__list li:before {
  content: '\2022';
  color: #5d7997;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}
</style>
