<template>
  <v-layout
    wrap
    align-start
  >
    <v-flex xs12>
      <v-stepper v-model="currentStep">
        <v-stepper-header>
          <v-stepper-step step="1">
            Membership Type
          </v-stepper-step>
          <v-divider />
          <v-stepper-step step="2">
            Your Details
          </v-stepper-step>
          <v-divider />
          <v-stepper-step step="3">
            Payment
          </v-stepper-step>
          <v-divider />
          <v-stepper-step step="4">
            Receipt
          </v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </v-flex>
    <v-flex xs12>
      <component :is="steps[currentStep]" />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import MembershipType from '@/components/nu/MembershipType'
import MemberDetails from '@/components/nu/MemberDetails'

export default {
  name: 'Register',
  data () {
    return {
      steps: {
        1: MembershipType,
        2: MemberDetails
      }
    }
  },
  computed: {
    ...mapGetters('registration', [
      'currentStep'
    ])
  }
}
</script>

<style scoped>

</style>
