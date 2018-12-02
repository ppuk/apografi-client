<template>
  <v-app>
    <v-navigation-drawer app />
    <v-content>
      <v-container fluid>
        <v-layout>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/global/Footer'

export default {
  name: 'AdminContainer',
  components: {
    Footer
  }
}
</script>
