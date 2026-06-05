// let  result = ""
// let screen = result

const calculate = document.getElementById("calculate")
const buttons = document.getElementsByClassName("number")
const display = document.getElementById("display")
const operators = document.getElementsByClassName("operators")
const allClear = document.getElementById("all-clear")
const allowed = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/","%","^",".","(",")"]
const backspace = document.getElementById("backspace")

let expression = ""


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function num(e) {
        console.log(e.target.value)
        expression += e.target.value

        display.textContent = expression
    })
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function ops(op) {
        if (op.target.id === "calculate") {
            return
        }
        console.log(op.target.value)
        // opr = op.target.value
        // firstValue = screen
        // screen = ""
        expression += op.target.value
        display.textContent = expression
    })
}

allClear.addEventListener("click", function clear() {

    expression = ""
    display.textContent = expression

})

calculate.addEventListener("click", function soln() {
    let typedExpression = expression
    typedExpression = typedExpression.replaceAll("^","**")
    let result = eval(typedExpression)
    // expression = screen
    display.textContent = Number(result.toFixed(5))
    expression = result.toString()
})

document.addEventListener("keydown", function keysInputHandler (e) {
    console.log(e.key);
    if (allowed.includes(e.key)) {
        expression += e.key
        display.textContent = expression
    }

    if (e.key === "Enter") {
        calculate.click()
    }

    if (e.key === "c" || e.key === "C") {
        allClear.click()
    }

    if (e.key === "Backspace") {
        backspace.click()
    }
    
})

backspace.addEventListener("click", function () {
    expression = expression.slice(0, -1)
    display.textContent = expression
})



// all-clear.addEventListener()
