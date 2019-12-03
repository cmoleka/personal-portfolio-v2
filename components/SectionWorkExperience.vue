<template>
  <div class="work__container">
    <div class="work__tabs--container">
      <slot name="work__company_name--tab" />
    </div>
    <slot name="work__details" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.work__container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem 0;
}
.work__tab {
  cursor: pointer;
  display: block;
  border-left: 0.1em solid rgba(255, 255, 255, 0.233);
}
.work__tab__active {
  border-left: 0.1em solid #649edd !important;
  background-color: #18212b;
}

.work__tab__display {
  display: block !important;
  transition: 1s;
}
.work__tabs--container > .work__company_name:hover {
  background-color: #18212b;
  transition: 0.5s;
  color: #5d7997 !important;
}
.work__title {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: baseline;
}
.work__details {
  align-items: flex-start;
  display: none;
  margin-left: 5rem;
}
.work__tabs--container > .work__company_name {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1em;
  padding: 0.25em 0.5em;
}
.work__company_name {
  color: #649edd;
  font-size: 1.25rem;
}
.work__title > .work__company_name:before {
  content: '@';
  display: inline-block;
  margin-left: 0.5em;
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
