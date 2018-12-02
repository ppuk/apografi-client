<template>
  <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/global/Footer'

export default {
  name: "AdminContainer",
  components: {
    Footer
  }
}
</script>

<style scoped>

</style>
