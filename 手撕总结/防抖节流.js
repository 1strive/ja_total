

function torottle(fn, delay) {
    let timer
    return function (...args) {
        if (!timer) {
            fn.apply(this, args)
            timer = setTimeout(() => {
                timer = null
            }, delay);
        }
    }
}

function debounce(fn, delay) {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

setTimeout(console.log, 100, 2)