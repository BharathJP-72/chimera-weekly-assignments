const input = document.querySelector("input");
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")
const noThrottleText = document.getElementById("nothrottle")


input.addEventListener("input", e => {
    defaultText.textContent = e.target.value
    updateDebounceText(e.target.value)
})

const updateDebounceText = debounce(text => {
    debounceText.textContent = text
}, 500)

const updateThrottleText = throttle(() => {
    incrementCount(throttleText)
}, 1000)

function debounce(cb, delay = 1500) {
    let timeout

    return(...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs

    const timeoutFn = () => {
        if (waitingArgs == null) {
            shouldWait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFn, delay)
        }
    }

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
            return
        }
        cb(...args)
    shouldWait = true
    setTimeout(timeoutFn,delay)
    }

    
}

document.addEventListener("mousemove", e => {
    incrementCount(noThrottleText)
    updateThrottleText()
})

function incrementCount(ele) {
    ele.textContent = (parseInt(ele.innerText) || 0) + 1
}