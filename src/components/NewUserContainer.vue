<template>
  <v-app>
    <v-toolbar app color="accent" dark>
      <v-toolbar-title>Pirate Party UK</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <router-view></router-view>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/global/Footer'
export default {
  name: "NewUserContainer",
  components: {
    Footer
  }
}
</script>

<style scoped>

</style>
