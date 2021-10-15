<template>
  <div class="wrapper">
    <navHeader/>
    <router-view/>
  </div>
  <blockFooter/>
</template>

<script>
  import navHeader from '@/components/Shared/Header.vue'
  import blockFooter from '@/components/Shared/Footer.vue'
  
  export default {
    components: {
      navHeader,
      blockFooter
    }
  }
</script>
<style>
   @import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css");
   #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .wrapper {
    flex: 1 0 auto;
  }
  .footer {
    flex-shrink: 0;
  }
</style>
