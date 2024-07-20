document.body.style.display = 'none';
document.body.offsetHeight; // trigger reflow
document.body.style.display = '';



alert(`Olá. Vamos brincar um pouco com o JavaScript!?

A seguir iremos realizar 5 interações, desde uma simples exibicao de mensagem em tela até algumas operações matemáticas. 
  
Preparado?!`)




/*Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.*/
alert(`Exercício 1 - Apenas diga Hello World`);



/*Operações matemáticas*/
alert(`Exercício 2 - Vamos fazer algumas operações matemáticas e testar a minha calculadora?!`)

let firstNumber = prompt(`Digite um primeiro número`)
let secondNumber = prompt(`Digite o segundo número`)

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`O resultado da soma é: ` + sum)
alert(`O resultado da subtração é: ` + sub)
alert(`O resultado da multiplicação é: ` + multi)
alert(`O resultado da divisão é: ` + div)
alert(`O resto da divisão dos dois numeros inseridos é: ` + restDiv)



/*Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".*/
let entrada = prompt(`Exercício 3 - Digite qualquer coisa que quiser.

Nosso sistema irá interpretar os caracteres inseridos e retornar se estes correspondem a números ou não.`);
if (entrada === "" || entrada === null) {
  alert(`Você inseriu um valor VAZIO ou NULO. Tente novamente!`)
}
else if (isNaN(entrada) === false) {
  alert("O que você inseriu É um número!");
}
else {
  alert("O que você inseriu NÃO é um número!");
}



/*Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string"*/
let input = prompt(`Exercício 4 - Digite algo, qualquer coisa.
  
Dessa vez iremos avaliar se o imput inserido por sí é uma string (texto) ou não.`);
function isText(value) {
    const textRegex = /^[a-zA-ZÀ-ÿ\s]+$/g;
    return textRegex.test(value.trim());
}
if (isText(input)) {
    alert("O imput fornecido por si É uma string");
} else {
    alert("O que voce digitou NÃO é um string");
}


/*Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".*/
let entradaUsuario = prompt(`Exercício 5 - Volte a digitar um número qualquer - mas dessa vez inteiro - que irei te dizer se este é Par ou Impar.

Isso pode parecer simples pra você, mas lembre-se, eu sou apenas uma máquina!`)
if (Number(entradaUsuario) % 2 === 0) {
    alert(`O número é PAR`);
} else {
    alert(`O número é IMPAR`)
}



alert(`Obrigado por passar esse tempinho comigo e até a proxima!
    
Ass: Sr JavaScript.`)