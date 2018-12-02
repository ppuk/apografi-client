import Vue from 'vue'
import Vuex from 'vuex'

import registration from '@/store/registration'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    registration
  }
})
