<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <MainHeader></MainHeader>
    <router-view/>
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from './components/stdElem/MainHeader.vue'
import MainFooter from './components/stdElem/MainFooter.vue'

export default {
  name: 'App',
  components: {
  	MainHeader: MainHeader,
  	MainFooter: MainFooter
  }
}
</script>

<style>

</style>
