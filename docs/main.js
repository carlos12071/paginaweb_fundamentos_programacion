const arreglodebotonos = document.querySelectorAll("button")
const numeroHtml = document.querySelector(".flex>h2")

let numeroReal = 0
numeroHtml.innerText = numeroReal


function sumar(sumando){
    numeroReal = numeroReal + sumando
    numeroHtml.innerText = numeroReal
}

arreglodebotonos.forEach((boton) =>{
    boton.addEventListener('click', (evento)=>{
        let numero = Number(evento.target.innerText)
        sumar(numero)
        console.log(evento.target.innerText)
    })
})