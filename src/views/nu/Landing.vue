<template>
  <v-layout row wrap>
    <v-flex
      md8
      xs12
    >
      <v-card>
        <v-card-title>
        <h2 class="headline">New Members</h2>
        </v-card-title>
        <v-card-text>
          <p>You might think political parties belong in the past. You wouldn't be alone - the main parties are losing our confidence fast. But the thing is, they still call the shots. That's why our freedoms are being eroded. That's why digital rights are under attack. That's why we aren't all getting our fair share in this society.
            <br/><br/>
            That won't change until we get more people like you involved in front line politics, rather than the same grey identikit politicians. I got fed up of waiting for the people in charge to get better, to listen. You are just as good as them, you've got ideas that are worth listening to to make this world better. This is the chance to share them.
            <br/><br/>
            Being a party member allows you to have a say over candidates for elections, and put yourself forward. It gives you the final say over policy, how the party is run and by who. It's a chance to get involved in a growing global movement and meet like-minded people.
            <br/><br/>
            Joining also helps us keeps our campaigning running. After all, defending free culture doesn't come cheap! But being a member of The Pirate Party is great value at £12. That's just a quid a month. Whatever the chancellor does, that won't get you much else these days.
            <br/><br/>
            Joining up has been one of the best things I've ever done. It's led to a lot exciting, challenging, scary, and fulfilling things. I hope you want to join me on this voyage too!</p>

            <v-btn color="accent" to="/nu/register">
              Join!
            </v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex
      md4
      xs12
    >
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h2 class="headline">Existing Members</h2>
            </v-card-title>
            <v-card-text>
              <p>To access and update your personal details, renew your subscription and vote on party matters, please login.</p>
              <v-btn color="accent" to="/nu/login">
                Login
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h2 class="headline">Your Data</h2>
            </v-card-title>
            <v-card-text>
              <p>
                <strong>Data Protection</strong><br/>
                At the Pirate Party, we believe in data protection and as such we comply fully with GDPR.
                More information about our Data Protection policy can be found at: link
              </p>
              <p>
                <strong>Cookie Policy</strong><br/>
                We don't use Cookies within the Apografi membership system, however some cookies may be used by our CDN.
              </p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    name: "Landing"
}
</script>

<style scoped>

</style>
