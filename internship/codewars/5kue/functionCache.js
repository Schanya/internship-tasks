const cache = (f) => {
    const map = new Map()
    return (...args) => {
        const data = JSON.stringify(args)
        if (!map.has(data)) {
            map.set(data, f(...args))
        }
        return map.get(data)
    }
}