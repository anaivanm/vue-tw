<template>
  <div id="app">
    <SiteHeader />
  <router-view />
  </div>
</template>

<script>

import SiteHeader from '@/components/SiteHeader'
export default {
  name: 'app',
  components: {
    SiteHeader
  }
}
</script>

<style src="./assets/css/tailwind.css">

</style>
