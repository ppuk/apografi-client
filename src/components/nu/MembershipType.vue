<template>
  <v-layout wrap>
    <v-flex
      sm12
      md6
    >
      <v-card>
        <v-card height="400px">
          <v-card-title>
            <h2 class="headline">
              Member Benefits
            </h2>
          </v-card-title>
          <v-card-text>
            <p>
              Membership of the party is an important way of getting involved. It represents a formal interest in
              Pirate Politics and helps us make a difference through financial support.

              <br/><br/>
              <strong>Advantages of Membership</strong>
            </p>
            <ul>
              <li>Vote in internal elections</li>
              <li>Suggest and make changes to party policy</li>
              <li>Stand for NEC and Board positions</li>
              <li>Support a cause you believe in</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-card>
    </v-flex>
    <v-flex
      sm12
      md6
    >
      <v-layout wrap>
        <v-flex sm12>
          <v-card>
            <v-card-title>
              <h2 class="headline">Membership - £12</h2>
            </v-card-title>
            <v-card-text>
              <p>
                Regular membership is for anyone who wishes to support the party in our political goals. It also means you can shape the party by voting in internal elections.
                <br/><br/>
                Membership fees start at £12 a year. Your membership helps the party run campaigns and win elections.
              </p>

              <br/>
              <v-btn
                color="accent"
                @click="setMembershipType('full')"
              >
                Select Membership
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm12>
          <v-card>
            <v-card-title>
              <h2 class="headline">Reduced Membership - £3</h2>
            </v-card-title>
            <v-card-text>
              <p>
                A reduced membership is for anyone who wishes to support the party but may have a limited income. Students, anyone over the age of 60 or anyone who may have a reduced income (i.e. unemployed) are eligible for a reduced membership.
                <br /><br />
                Reduced memberships cost £3 (that's 25p a month!) and have exactly the same voting privileges, etc as regular members.
                <br /><br />
                We do not check your financial status and operate this reduction on an honesty based system.
                <br />
              </p>
              <v-btn
                color="accent"
                @click="setMembershipType('reduced')"
              >
                Select Reduced Membership
              </v-btn>
              <v-btn
                color="accent"
                @click="test()"
              >
                yeet
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'MembershipType',
  methods: {
    ...mapMutations('registration', ['setMembershipType']),
    test () {
      console.log('yeet')
    }
  }
}
</script>

<style scoped>

</style>
