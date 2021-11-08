<template>
  <app-nav-bar></app-nav-bar>
  <router-view/>
</template>
<script>
import AppNavBar from './components/shared/AppNavBar.vue'
export default {
  components: {
    AppNavBar: AppNavBar,
  }
}
</script>