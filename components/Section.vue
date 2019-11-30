<template>
  <div class="section-component pt-5 mx-auto">
    <div class="section__container">
      <div class="sectionTitle pb-4">
        <div class="sectionTitle__container">
          <slot name="section__title"> </slot>
          <hr class="ml-4" />
        </div>
      </div>
      <slot name="section__content"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="css" scoped>
.section__color--bluish {
  color: #5d7997;
}
.section__color--lead {
  color: rgba(255, 255, 255, 0.5);
}
.section-component {
  width: 80%;
}
.section__container {
}
hr {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  width: 24rem;
}
.sectionTitle {
  width: 100%;
}
.sectionTitle__container {
  display: flex;
  flex-wrap: nowrap;
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
.section__content {
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.section__content__left {
  max-width: 55%;
}
.section__content__right {
}

.section__content__imageOverlay {
  background: #5d7997;
  overflow: hidden;
  border: 0.5em solid #ffffff;
  border-radius: 50%;
}

.section__profile__photo {
  max-width: 20rem;
  height: auto;
  object-fit: cover;
  opacity: 0.4;
}
.section__profile__photo:hover {
  opacity: 1;
  transition: 1s ease-in-out;
}
</style>
