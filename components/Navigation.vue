<template>
  <nav class="navbar navbar-expand-lg">
    <logo />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="#" class="nav-link text-white active">About</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-white active">Experience</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-white active">Work</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-white active">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>
