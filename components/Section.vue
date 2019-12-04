<template>
  <div class="section-component pt-5 mx-auto">
    <div class="section__container">
      <div class="sectionTitle pb-4">
        <div class="sectionTitle__container">
          <slot name="section__title"> </slot>
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

<style lang="css">
.section__color--bluish {
  color: #649edd;
}
.section__color--lead {
  color: rgba(255, 255, 255, 0.5);
}
.section-component {
  width: 80%;
}
hr {
  border-top: 1px solid rgba(255, 255, 255, 0.233);
  width: 24rem;
}
.sectionTitle {
  width: 100%;
}
.sectionTitle__container {
  display: flex;
  flex-wrap: nowrap;
}
.sectionTitle__container > h1::before {
  content: counter(contentIndex) '.';
  display: inline-block;
  margin: 0 auto;
  font-size: 0.75em;
  color: #649edd;
  font-family: 'Courier New', Courier, monospace;
}
.sectionTitle__container > h1::after {
  content: '';
  display: inline-block;
  height: 1px;
  width: 30rem;
  background-color: rgb(168, 178, 209);
  margin: 0 auto;
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
  justify-content: space-between;
}
.section__content__left {
  max-width: 55%;
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
