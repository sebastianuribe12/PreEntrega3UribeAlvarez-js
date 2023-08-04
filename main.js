const btnAumentar =document.querySelector('.btn-info')
const btnDism =document.querySelector('.btn-danger')
const span =document.getElementById('span')
let contador =0
btnAumentar.addEventListener('click', () =>{
    console.log('le diste click aumentar')
    contador++
    span.textContent = contador
})

btnDism.addEventListener('click', () =>{
    console.log('le diste click aumentar')
    contador =contador-1
    span.textContent = contador
})
