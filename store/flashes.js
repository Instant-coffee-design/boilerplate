export default {
    namespaced: true,
    state: () => ({
        items: []
    }),
    mutations: {
        add (state, data) {
            let flash = {
                id: Math.random(),
                duration: !data.type || data.type == 'error' ? 8000 : 5000,
                title: 'Une erreur est survenue',
                text: false,
                type: 'error',
                ...data
            }
            
            state.items = [
                ...state.items,
                flash
            ]
        },
        remove (state, id) {
            state.items = state.items.filter(i => i.id != id)
        }
    }
}