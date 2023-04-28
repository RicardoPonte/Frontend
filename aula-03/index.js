console.log("Hello World!")

//sempre declarar variavel com let ou const
let nome = "joão felipe"
const PI = 3.14;
let isRunning = false;
//const pessoa = {
    //nome: "João Pessoa",
    //idade: 32,
    //profissão: "Professor"
//}

let cores = ["amarelo", "azul", "verde", 1, false]



console.log(typeof nome)
console.log(typeof PI)
console.log(typeof isRunning)
console.log(typeof pessoa)
console.log(typeof cores)
console.log(pessoa.nome)

let frase = "Meu nome é "+pessoa.nome+". Eu tenho "+pessoa.idade+ " anos."
let frase1 = `Meu nome é ${pessoa.nome}. Eu tenho ${pessoa.idade} anos.`

console.log(frase)
console.log(frase1)

//estrutura de decisão

const pessoa = {
    nome: Ricardo,
    idade: 32,
}
if(pessoa.idade <= 0){
    console.log("Você ainda não nasceu")
}else if(pessoa.idade >= 18){
    console.log(`A pessoa de nome ${pessoa.nome} é maior de idade`)
}else{
    console.log("Menor de idade")
}

switch (pessoa.idade) {
    case 20:
        console.log("20 anos")
        break;
    case 30:
        console.log("30 anos")
        break;
    default:
        console("Idade desconhecida")
        break;
}

//operador ternario
pessoa.idade >= 18 ? console.log("Maior de idade") : console.log ("Menor de idade")

//Estrutura de repetição - for - while - do while
for (let index = 0; index < 10; index++) {
    console.log(index);
    
}

let count = 0;
let count1 = 0;
while (count < 5) {
    console.log(count)
    count++    
}

do {
    console.log(count1)
    count1++
} while (count < 3);


//Funções
function imprimeOi(){
    console.log("oi")
}

function imprime(frase){
    console.log(frase)
}

imprimeOi();
imprime("Olá! Função com parametro")

function soma(num1, num2) {
    let resultado = num1 + num2
    return resultado;
}

let result = soma(5,8)

console.log("Resultado da soma: " +soma(1,5))
console.log("resultado da soma 2:" +result)

//arrow function
const multiplica = (num1, num2) => {
    console.log("Resultado: ", num1*num2)
}

multiplica(2, 5)

const objeto = {
    chave: "valor",
    numero: 53,
    booleano: false,
    obj: {
        chaves: "valores"
    }
}

const impares = [1, 3, 5, 7]
const coisas = [1, false, {chave: "valor"}, [0, 1, true]]

const top3 = [
    {
        nome: "produto 1",
        valor: 45.00
    },
    {
        nome: "produto 2",
        valor: 35.00
    },
    {
        nome: "produto 3",
        valor: 25.00
    }
]

top3.forEach(item => {
    console.log(item.nome)
});