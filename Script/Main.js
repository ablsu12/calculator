let buttons = document.querySelectorAll("button")
let clear = document.getElementById('clear')
let ac = document.getElementById('ac')
let equal = document.getElementById('equal')
let answer = document.getElementById('answer')
let getLength = answer.value.length
let clickButton = (event) => {
    let value = event.target.dataset.num
    answer.value += value
}
buttons.forEach(button => button.addEventListener('click', clickButton))
let doClearDisplay = () => answer.value = '';
let resetToZero = () => {
    answer.value = 0
}
let getAnswer = () => answer.value = eval(answer.value);
ac.addEventListener('click', doClearDisplay)
clear.addEventListener('click', resetToZero)
equal.addEventListener('click', getAnswer)

