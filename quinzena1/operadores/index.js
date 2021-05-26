//Lista de exercicios - Operadores

//Exercicios de interpretação de código

//1
// a.True
// b. True
// c. True
// d. boolean

//2
//Faltou indicar que Variável é um numero e não uma String

//3
//let primeiroNumero = Number(prompt("Digite um numero!"))
//let segundoNumero = Number(prompt("Digite outro numero!"))


//Exercicios de ESCRITA DE CODIGO

 //1
// const idadeUsuario = Number(prompt("Qual a sua idade?"));
// const idadeAmigo = Number(prompt("Qual a idade do seu(sua) melhor amigo(a)?"));
// const idadeMaior = (idadeUsuario >= idadeAmigo);
// const diferenca = (idadeUsuario - idadeAmigo)

// console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)
// console.log("A diferença entre as idades é de", diferenca, "anos.")


// 2

// const numeroPar = Number(prompt("Favor inserir um numero PAR"));
// console.log("Resto de divisão", (numeroPar % 2))

// // c. Se o numero for par o resto sempre será 0
// //d.  Se o usuario inserir um numero impar o resultado do resto da divisão sempre vai ser 1

// 3

// const idadeUsuario = Number(prompt("Qual a sua idade?"));
// const idadeEmMeses = Number(idadeUsuario * 12)
// const idadeEmDias = Number(idadeEmMeses * 30)
// const idadeEmHoras = Number(idadeEmDias * 24)

// console.log("A sua idade em meses é de:", idadeEmMeses);
// console.log("A sua idade em dias é de:", idadeEmDias);
// console.log("A sua idade em horas é de:", idadeEmHoras);

// 4

// const primeiroNumero = Number(prompt("Digite um numero!"))
// const segundoNumero = Number(prompt("Digite outro numero!"))

// const primeiroMaior = primeiroNumero > segundoNumero;
// const primeiroIgual = primeiroNumero === segundoNumero;
// let primeiroDivisivel = (primeiroNumero % segundoNumero) === 0;
// let segundoDivisivel = (segundoNumero % primeiroNumero) === 0;



// console.log("O primeiro numero é maior que segundo?", primeiroMaior);
// console.log("O primeiro numero é igual ao segundo?", primeiroIgual);
// console.log("O primeiro numero é divisível pelo segundo?", primeiroDivisivel);
// console.log("O segundo numero é divisível pelo primeiro?", segundoDivisivel);


//Desafio
//QUestão 1
//A
// let celsius = Number();
// let fahrenheit = 77 //Number(celsius)*(9/5) + 32;
// let kelvin = Number(fahrenheit - 32)*(5/9) + 273.15;

// console.log(kelvin,"°K") //298.15 k

//B
// let fahrenheit = Number(80)*(9/5) + 32;

// console.log(fahrenheit,"°F") // 176°F

// //C
// let celsius = Number(30);
// let fahrenheit = Number(celsius)*(9/5) + 32;
// let kelvin = Number(fahrenheit - 32)*(5/9) + 273.15;


// console.log(fahrenheit,"°F") // 86°f
// console.log(kelvin,"°K") // 303,15°k

// //D 
// let celsius = Number(prompt("Insira uma temperatura em °C"));
// let fahrenheit = Number(celsius)*(9/5) + 32;
// let kelvin = Number(fahrenheit - 32)*(5/9) + 273.15;

// console.log(fahrenheit,"°F") 
// console.log(kelvin,"°K") 


// //Questão 2

// const qwh = Number(5 / 100)
// const consumoCasa = Number((280) * qwh)

// console.log("O valor da conta é de:", consumoCasa)

// console.log("Com desconto o valor é:", consumoCasa - (15 / 100))


//QUestão 3

// 20lb equivalem a X kg
// 10.5oz equivalem a X kg
// 100mi equivalem a X m
// 50ft equivalem a X m
// 103.56gal equivalem a X l
// 450 xic equivalem a X l

//a
const kg = Number(1);
const libras = Number(2205 / 1000);
//B
console.log("20 lb equivalem a", (20 / libras), "Kg") // 9,07 libras
//c
const oz = Number(35274 / 1000)
console.log("10,5 oz equivalem a",( (105/10) / oz), "Kg") // 0,29 oz

const metro = Number(1);
const milha = Number(1609);
console.log("100 mi equivalem a", (100 * milha) / metro, "m")

const pes = Number(30,48)
console.log("50ft equivalem a", (50 * pes) / 100, "m")



