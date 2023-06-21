/* 
DOM é a interface api que conecta o html no JS

DOM nao é JS... é a representação do html em formato de um objeto JS

As tags html quando a DOM usa, sao chamadas de: node ou element...

innerText pega o texto do html
innerHTML pega o html

*/
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

/* document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        handleResetClick()
      }
    }) */

let randomNumber = (Math.round(Math.random() * 10))
let xAttempts = 1
console.log(randomNumber)

function handleTryClick(event) {
    event.preventDefault() // nao faça o padrao desse evento (nao envia o formulario)

    const inputNumber = document.querySelector("#inputNumber")

    if(randomNumber == inputNumber.value) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} vezes`
    }
    inputNumber.value = ""
    xAttempts++
}
function handleResetClick() {
    toggleScreen()
    randomNumber = (Math.round(Math.random() * 10))
    xAttempts = 1
    console.log(randomNumber)
}
// funcao callback = uma funcao passando outra funcao como argumento
// e a funcao é executada só depois do click
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function toggleScreen() {
    screen2.classList.toggle("hide")
    screen1.classList.toggle("hide")
}