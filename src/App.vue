<template>
  <div id="app">
    <SiteHeader />
    <SearchBar />
    <router-view />
  </div>
</template>

<script>

import SiteHeader from '@/components/SiteHeader'
import SearchBar from '@/components/SearchBar'

export default {
  name: 'app',
  components: {
    SiteHeader,
    SearchBar
  }
}
</script>

<style src="./assets/css/tailwind.css">

</style>
