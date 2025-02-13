const state = {
    isPhone: false
}

const mutations = {
    SET_IS_PHONE(state, isPhone) {
        state.isPhone = isPhone
    }
}

const actions = {
    setIsPhone({ commit }, isPhone) {
        commit('SET_IS_PHONE', isPhone)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}