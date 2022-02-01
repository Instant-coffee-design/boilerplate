export default {
    getCollection (items) {
        return Object.keys(items).map(key => items[key])
    },
    getQuery (path, query) {
        return query ? `${path}?${Object.keys(query).map(key => `${key}=${query[key]}`).join('&')}` : path
    },
    updateOne (state, value) {
        let items = JSON.parse(JSON.stringify(state.items))
        items[value._id] = value

        return items
    },
    deleteOne (state, id) {
        let items = JSON.parse(JSON.stringify(state.items))
        delete items[id]

        return items
    },
    refresh (values) {
        let items = values.reduce((acc, value) => {
            return { ...acc, [value._id]: value }
        }, {})

        return items
    },
    handleErrors (e, commit, text) {
        e = Array.isArray(e) ? e : [ e ]

        e.forEach(e => {
            commit('flashes/add', {
                title: text,
                text: e.message
            }, { root: true })

            console.error(e)
        })

        return null
    }
}