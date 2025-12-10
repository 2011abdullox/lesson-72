let arr = []
let btn = document.querySelectorAll(".btn")

btn[0].addEventListener("click", () => {
    let ism = prompt("Ismingizni kiriting")
    arr.push(ism)
    console.log(arr)
})

btn[1].addEventListener("click", () => {
    arr.pop()
    console.log(arr)
})

btn[2].addEventListener("click", () => {
    let ism = prompt("Ismingizni kiriting")
    arr.unshift(ism)
    console.log(arr)
})

btn[3].addEventListener("click", () => {
    arr.shift()
    console.log(arr)
})
