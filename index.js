
let computerNumber
let userNumbers = []
let attempts = 0
let maxguesses = 10

function newGame() {
    setTimeout(() =>{
        window.location.reload()
       
    },1000)
    
}

///inicialização de tudo iniciada pelo html  por onload no body
function init() {

    ///gerando numero de 0 a 100 e retirando a fração
   computerNumber = Math.floor(Math.random() * 100 + 1)
   ///numero escolhido pela maquina
   console.log(computerNumber)
}
///comparar os nnumeros 
function compareNumbers() {
    ///conversão para numero e  associando a uma variavel 
   const userNumber = Number(document.getElementById('inputBox').value)
   ///adicionando o valor na array
   userNumbers.push(' ' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers
   if(userNumber >100 || userNumber<= 0){
    document.getElementById('textOutput').innerHTML = 'number is not valid'
    document.getElementById('inputBox').value = ''
   }else{

    if (attempts < maxguesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too high'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
           }
           else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too low'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
           }
           else {
            document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
           }
    }
    else {
        document.getElementById('textOutput').innerHTML = 'You Lose! The computer number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
   }
   
}