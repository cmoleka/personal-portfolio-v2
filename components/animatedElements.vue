<template>
  <section>
    <div class="Animated__Div" />
    <div class="Animated__Div" />
    <div class="Animated__Div" />
    <div class="Animated__Div" />
    <div class="Animated__Div" />
    <div class="Animated__Div" />
    <div class="Animated__Div" />
    <div class="Animated__Div" />
    <div class="Animated__Div" />
    <div class="Animated__Div" />
  </section>
</template>

<script>
export default {
  mounted() {
    const tl = this.$anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    })

    tl.add({
      targets: 'div.Animated__Div',
      width: '100%',
      background: '#18212b',
      delay: this.$anime.stagger(100)
    })
    tl.add({
      targets: 'div.Animated__Div',
      width: '90%',
      background: '#131a22'
    })
    tl.add({
      targets: 'section',
      scaleY: '2',
      scaleX: '2',
      translateX: '40%',
      rotate: '45deg',
      duration: 5000
    })
  }
}
</script>

<style lang="css" scoped>
section {
  display: grid;
  grid-template-columns: repeat(10, auto);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
section > div {
  background-color: #000000;
  height: 100vh;
  transition: background-color 1s;
}
</style>
