<template>
 <appHeader></appHeader>
 <headerBottom></headerBottom>
  <router-view></router-view>
 <appFooter></appFooter>
</template>

<script>
import appHeader from './components/inc/header.vue'
import headerBottom from './components/inc/header-bottom'
import appFooter from './components/inc/footer.vue'

export default {
  name: 'App',
  components: {
    appHeader,
    appFooter,
    headerBottom
  }
}
</script>
