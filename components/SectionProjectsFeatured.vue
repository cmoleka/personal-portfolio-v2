<template>
  <div class="Projects__Featured__Container">
    <div class="Projects__Featured__Image">
      <slot name="Projects__Featured_Image" />
    </div>
    <div class="Projects_Featured_Details">
      <slot name="Featured__Status" />
      <slot name="Featured__Title" />
      <slot name="Featured__Description" />
      <slot name="Featured__Technologies" />
      <slot name="Featured__Links" />
    </div>
  </div>
</template>

<style lang="css" scoped>
h1 {
  color: #649edd;
  font-size: 0.75em;
}
h2 {
  color: #ffffff;
  font-size: 2em;
}
p {
  background-color: #18212b;
  padding: 0.5em 1em;
  border-radius: 0.25em;
  font-size: 0.9em;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}
ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
}
.Featured__Tech--List > li {
  margin-left: 1em;
  margin-bottom: 0.75em;
  padding: 0.5em 1em;
  background: #18212b;
  color: #649edd;
  font-size: 0.75em;
}
.Featured__Links--List > li {
  margin-left: 1em;
  margin-bottom: 0.75em;
  font-size: 1.5em;
}
.Featured__Links--List > li > a {
  color: #ffffff;
  text-decoration: none;
}
.Featured__Links--List > li > a:hover {
  color: #649edd;
  text-decoration: none;
}
.Projects__Featured__Container {
  width: 100%;
  overflow: hidden;
  display: flex;
}
.Projects__Featured__Image {
  width: 30rem;
  height: 20rem;
  border-radius: 0.5em;
  background: #649edd;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
}
.Projects__Featured__Image > img {
  width: inherit;
  height: inherit;
  opacity: 0.4;
  object-fit: cover;
  border-radius: 0.5em;
}
.Projects__Featured__Image > img:hover {
  opacity: 1;
  transition: 1s ease-in-out;
}
.Projects_Featured_Details {
  margin-left: 2em;
}
</style>
