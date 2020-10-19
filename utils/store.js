export default {
    getCollection (items) {
        return Object.keys(items).map(key => items[key])
    },
    getQuery (path, params) {
        return params.query ? `${path}?${Object.keys(params.query).map(key => `${key}=${params.query[key]}`).join('&')}` : path
    },
    updateOne (state, value) {
        items = JSON.parse(JSON.stringify(state))
        items[value.id] = value

        return items
    },
    refresh (values) {
        let items = values.reduce((acc, value) => {
            return { ...acc, [value.id]: value }
        }, {})

        return items
    }
}