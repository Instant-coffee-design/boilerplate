import storeUtils from '@/utils/store'

export default {
    namespaced: true,
    state: () => ({
        items: {}
    }),
    mutations: {
        updateOne (state, value) {
            state.items = storeUtils.updateOne(state, value)
        },
        refresh (state, values) {
            state.items = storeUtils.refresh(values)
        }
    },
    actions: {
        async fetch ({ commit }, params) {
            const response = []
            if (!params || params.refresh !== false) commit('refresh', response.data)

            return response.data
        }
    }
}