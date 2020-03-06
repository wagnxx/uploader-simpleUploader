<template>
  <div id="app">
    <!-- <Uploader></Uploader> -->
    <!-- <CUploader></CUploader> -->
    <ul>
      <li><router-link to="/">普通上传</router-link></li>
      <li><router-link to="/drop">拖拽上传</router-link></li>
    </ul>
    <router-view></router-view>

  </div>
</template>

<script>
// import Uploader from './components/Uploader.vue'
import CUploader from './components/CUploader.vue'

export default {
  name: 'app',
  components: {
    // simsisimsfUploader,
    CUploader
  }
}
</script>

<style>
#app {
 
}
</style>
