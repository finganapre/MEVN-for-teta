<template>
  <div id="app" class="mainWrapper">
    <!-- <img src="./assets/logo.png"> -->
    
      <MainHeader :siteName="siteName" :siteDsc="siteDsc"></MainHeader>
      <main class="mainContent">
        <router-view/>
      </main>
    
    <MainFooter></MainFooter>
  </div>
</template>

<script>
import MainHeader from './components/stdElem/MainHeader.vue'
import MainFooter from './components/stdElem/MainFooter.vue'

export default {
  name: 'App',
  data(){
    // 
    return {
      siteName: 'Тета',
      siteDsc: 'веб-приложения'
    }
  },
  components: {
  	MainHeader: MainHeader,
  	MainFooter: MainFooter
  }
}
</script>

<style>
.mainWrapper{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.mainContent{
  flex: 1;
}
body{
  font-size: 18px;
}
</style>
