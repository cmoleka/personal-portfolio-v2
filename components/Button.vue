<template>
  <div class="Button__Container">
    <slot name="Button__Text" />
  </div>
</template>

<style lang="css" scoped>
.Button__Container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Button__Style {
  background: transparent;
  border: 0.1em solid #649edd;
  border-radius: 0.5em;
  cursor: pointer;
  text-decoration: none;
}
.Button__Style:hover {
  border: 0.1em solid #ffffff;
  transition: 0.25s;
  text-decoration: none;
  color: #649edd;
}
.Button__Container > a {
  text-decoration: none;
  color: #ffffff;
}
</style>
