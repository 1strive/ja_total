class Pubsub {
    subs = {}
    subscribe(type, callback) {
        this.subs[type] = callback
    }

    publish(type, msg) {
        const callback = this.subs[type]
        callback(`${type},${msg}`)
    }
}