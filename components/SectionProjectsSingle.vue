<template>
  <div class="Projects__Single__Container">
    <slot name="Projects_Single_Details">
      <slot name="Single__Title" />
      <slot name="Single__Description" />
      <slot name="Single__Technologies" />
      <slot name="Single__Links" />
    </slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.Projects__Single__Container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 2rem;
  margin-top: 1.5rem;
}
.Projects_Single_Details {
  background-color: #18212b;
  padding: 0.75em 1em;
  border-radius: 0.25em;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  width: 30%;
  margin-right: 1em;
  margin-bottom: 2em;
}
h1 {
  color: #649edd;
  font-size: 0.75em;
}
h2 {
  color: #ffffff;
  font-size: 1.5em;
}
p {
  font-size: 0.9em;
}
ul {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}
li {
  margin-right: 1em;
  margin-bottom: 0.75em;
  color: #649edd;
  font-size: 0.75em;
}
.Single__Links > li > a {
  color: #ffffff;
  font-size: 1.5em;
  text-decoration: none;
}
.Single__Links > li > a:hover {
  color: #649edd;
  text-decoration: none;
}
</style>
