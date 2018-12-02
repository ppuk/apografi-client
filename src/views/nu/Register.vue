<template>
  <v-layout>
    <v-flex xs12>
      <v-stepper>
        <v-stepper-header>
          <v-stepper-step step="1">Membership Type</v-stepper-step>
          <v-divider/>
          <v-stepper-step step="2">Your Details</v-stepper-step>
          <v-divider/>
          <v-stepper-step step="3">Payment</v-stepper-step>
          <v-divider/>
          <v-stepper-step step="4">Receipt</v-stepper-step>
        </v-stepper-header>
      </v-stepper>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style scoped>

</style>
