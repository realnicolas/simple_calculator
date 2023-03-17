let screen = document.querySelector(".screen")
let equal = document.querySelector(".btn-equal")
let clear = document.querySelector(".btn-clear")
let otherButtons = document.querySelectorAll(".btn-grey, .btn-orange")

otherButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
            screen.value += button.textContent
    })
})

clear.addEventListener("click", (e) => {
    screen.value = ""
})

equal.addEventListener("click", (e) => {
    if (screen.value === "") {
        screen.value = ""
    } else {
        if (screen.value.includes("x")) {
            operation = screen.value.replace("x","*")
        } else if(screen.value.includes("÷")) {
            operation = screen.value.replace("÷","/")
        } else {
            operation = screen.value
        }
        let answer = eval(operation)
        screen.value = answer
    }
})
