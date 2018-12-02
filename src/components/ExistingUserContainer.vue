<template>
  <v-app>
    <v-navigation-drawer app />
    <v-toolbar app />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/global/Footer'

export default {
  name: 'ExistingUserContainer',
  components: {
    Footer
  }
}
</script>

<style scoped>

</style>
