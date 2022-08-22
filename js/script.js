var a = window.document.getElementById('nao')
var b = window.document.getElementById('sim')
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)
a.addEventListener('click', clicar)
b.addEventListener('click', clicar)

function entrar() {
    a.innerText = 'Sim'
}

function sair() {
    a.innerText = 'Não'
}

function clicar() {
    a = window.location.href = "./html/resultado.html"
}