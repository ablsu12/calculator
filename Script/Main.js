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
let clearValue = () => {
    let answer = document.getElementById('answer').value
    document.getElementById('answer').value = answer.substring(0, answer.length-1)
}
let getAnswer = () => answer.value = eval(answer.value);
ac.addEventListener('click', doClearDisplay)
clear.addEventListener('click', clearValue)
equal.addEventListener('click', getAnswer)

