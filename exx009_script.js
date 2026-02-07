alert ("Ola mundo")
confirm("deseja continuar?")
var nome = prompt("qual o seu nome?")
console.log ("Isso é un log no console")

var saudacao = document.getElementById ("saudacao")


        saudacao.innerHTML = `Seja bem vindo, ${nome}!`
        saudacao.style.color = 