<template>
  <div class="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
@import "./index.scss";
</style>

<script>
  export default {
    components: {
      Header: () => import('@/widgets/header/ui.vue'),
      Footer: () => import('@/widgets/footer/ui.vue')
    }
  }
</script>