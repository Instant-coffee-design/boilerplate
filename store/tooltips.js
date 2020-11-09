export default {
    namespaced: true,
    state: () => ({
        items: []
    }),
    mutations: {
        open (state, params) {
            let exists = state.items.find(t => t.id === params.id || t.content === params.content)
            let position = params.element.getBoundingClientRect()
            delete params.element

            let tooltip = exists ? exists : {
                id: Math.random(),
                content: '',
                ...params
            }

            tooltip.active = true
            tooltip.position = position
        
            state.items = exists ? state.items.map(item => ({
                ...item,
                ...(item.id == params.id || item.content === params.content ? tooltip : {})
            })) : [ ...state.items, tooltip ]
        },
        close (state) {
            state.items = state.items.map(item => ({
                ...item,
                active: false
            }))
        }
    }
}