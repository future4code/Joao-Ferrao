/*Exercicio de interpretação de código
1- 10
   10,5

2- 10,10,10

3-  p = cargaHoraria
    t = salarioPorDia
*/

// QUestão 1

/*const nome = (""); 
const idade = ("");


console.log(typeof nome);
console.log(typeof idade);
*/

//Ambos são Strings porque por default a impressão no console é sempre uma String

/*
const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual a sua idade?");
console.log(nome)
console.log(idade)
console.log(typeof nome);
console.log(typeof idade);
//Continua sendo duas Strings o typeof
console.log("Olá", nome, ",você tem", idade, "anos.")
*/


//Questão 2
/*
const question1 = prompt("Você está usando óculos hoje?");
const question2 = prompt("O dia está ensolarado?");
const question3 = prompt("Vai chover hoje?");

console.log("Você está usando óculos hoje?",question1)
console.log("O dia está ensolarado?",question2)
console.log("Vai chover hoje?",question3)
*/

//Questão 3
let a = 10;
let b = 25;
let c = a;

a=b;
b=c;



console.log("O novo valor de a é", a); // O novo valor de a é 25
console.log("O novo valor de b é", b); // O novo valor de b é 10

//DESAFIO


const question4 = Number (prompt("Escreva um número?"));
const question5 = Number (prompt("Escreva um número diferente do primeiro?"));

console.log("Seus números somados são:", (question4)+(question5));
console.log("Seus números multiplicados são:", (question4)*(question5));


