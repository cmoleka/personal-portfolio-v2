<template>
  <div class="SocialNetworks__Container mb-2">
    <ul class="SocialNetworks__Social">
      <li class="SocialNetworks__ListItem">
        <a href="" class="SocialNetworks__Link"
          ><font-awesome-icon :icon="['fab', 'github']"
        /></a>
      </li>
      <li class="SocialNetworks__ListItem">
        <a href="" class="SocialNetworks__Link"
          ><font-awesome-icon :icon="['fab', 'twitter']"
        /></a>
      </li>
      <li class="SocialNetworks__ListItem">
        <a href="" class="SocialNetworks__Link">
          <font-awesome-icon :icon="['fab', 'instagram']"
        /></a>
      </li>
      <li class="SocialNetworks__ListItem">
        <a href="" class="SocialNetworks__Link"
          ><font-awesome-icon :icon="['fab', 'linkedin']"
        /></a>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.SocialNetworks__Container {
  width: 100%;
}
.SocialNetworks__Social {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.SocialNetworks__Social::before {
  content: '';
  display: block;
  width: 20rem;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.233);
}
.SocialNetworks__Social::after {
  content: '';
  display: block;
  width: 20rem;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.233);
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.SocialNetworks__ListItem {
  display: list-item;
  margin: 0 1em;
}
.SocialNetworks__Link {
  color: #ffffff;
  font-size: 1.25em;
  text-decoration: none;
  display: inline-block;
  text-decoration-skip-ink: auto;
  position: relative;
  cursor: pointer;
  padding: 0.1em;
}
.SocialNetworks__Link:hover {
  color: #649edd;
  text-decoration: none;
}
</style>
