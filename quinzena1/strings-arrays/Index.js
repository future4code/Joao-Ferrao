console.log("Hello World!")

//Exercicios AULA 05

//Exercicio de interpretação
// Questão-1
// a- []
// b- null
// c- 10
// d- 3
// e- [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f- 9

// Questão 2
// Valor impresso 27


// Exercicios de Escrita de código
//1-
// const userName = (prompt("Insira seu nome"))
// const email = (prompt("Insira seu e-mail"))
// console.log(`O e-mail ${email} foi cadastrado com sucesso.Seja bem-vindo(a) ${userName}!`)

//2-
// const comidasFavoritas = ["strogonoff", "sushi", "churrasco", "hamburguer", "cogumelos"];
// console.log("Antes de mudar", comidasFavoritas);
// const comidasString = comidasFavoritas.toString()
// console.log("Essas são minhas comidas favoritas:", comidasString.replaceAll(",", "\n"))
// const comidasUsuario = (prompt("Qual sua comida favorita?"))
// console.log("Com a comida do usuario", comidasString.replace("sushi", comidasUsuario))
//3-
let arrayTarefa = [];
const listaDeTarefas = arrayTarefa;

const tarefa1 = (prompt("Insira a primeira tarefa"));
const tarefa2 = (prompt("Insira a segunda tarefa"));
const tarefa3 = (prompt("Insira a terceira tarefa"));

arrayTarefa = [tarefa1, tarefa2, tarefa3];
console.log("Tarefas para fazer", arrayTarefa);

const tarefaRealizada = Number(prompt("Insira o numero da tarefa que realizou Use 0, 1, ou 2"));

console.log(arrayTarefa.splice(tarefaRealizada-1, 1));
console.log("resultado", arrayTarefa)

