export default {
  namespaced: true,
  state: {
    membershipType: null,
    currentStep: 1
  },
  mutations: {
    setMembershipType: (state, membershipType) => {
      state.membershipType = membershipType
    }
  },
  actions: {

  },
  getters: {
    currentStep: state => {
      if (state.membershipType === null) {
        return 1
      }

      return 2
    }
  }
}
