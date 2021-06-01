// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  let altura = Number(prompt("Digite a altura do retângulo"));
  let largura = Number(prompt("Digite a largura do retângulo")); 
  
  let resultado = (altura*largura);
  console.log(resultado);
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  let anoAtual = Number(prompt("Em que ano estamos?"));
  let anoNascimento = Number(prompt("Em que ano você nasceu?"));
  console.log((anoAtual)-(anoNascimento))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let peso = Number(prompt("Qual o seu peso (KG)?"));
  let altura = Number(prompt("Qual a sua altura?"));
  //peso / altura *altura
  console.log((peso)/(altura*altura))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  let nome = prompt("Insira seu nome");
  let idade = Number(prompt("Insira sua idade"));
  let email = prompt("Insira seu e-mail");
  console.log("Meu nome é "+ nome+ ", tenho "+ idade+ " anos, e o meu email é "+ email+ ".");
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  var cor1 = prompt("Insira sua primeira cor favorita");
  var cor2 = prompt("Insira sua segunda cor favorita");
  var cor3 = prompt("Insira sua teceira cor favorita");
  
  console.log([cor1, cor2, cor3]);
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  var maiuscula = prompt("Ecreva algo aqui...");
  var big = maiuscula.toUpperCase();
  console.log(big);


}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui/
  var custoEspetaculo = Number(prompt("Qual o custo total do espetáculo"))
  var valorDoIngresso = Number(prompt("Qual o valor de cada ingresso?"));
  var necessidadeDeVenda = custoEspetaculo/valorDoIngresso;
  console.log(necessidadeDeVenda);



}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const pergunta1 = prompt("Escreva uma palavra");
  const pergunta2 = prompt("Escreva outra palavra");
  const resposta = (pergunta1 >= pergunta2 );
  console.log(resposta);
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const pergunta1 = prompt("Escreva uma palavra");
  const pergunta2 = prompt("Escreva outra palavra");
  
  console.log(pergunta1)
  console.log(pergunta2)

  console.log(pergunta1.toLowerCase()===pergunta2.toLowerCase());
   

}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt("Em que ano estamos?"));
  const anoNascimento = Number(prompt("Em que ano você nasceu?"));
  const anoCnh = Number(prompt("Em que ano foi emitida sua CNH"));

  const idade = anoAtual - anoNascimento
  const renovacao = anoAtual - anoCnh

  const resultado = ((idade <= 20) && (renovacao >= 5)) || ((idade >= 20) && (idade <= 50) && (renovacao >= 10)) || ((idade > 50) && (renovacao >= 15))
  console.log(resultado)

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const anoBissexto = Number(prompt("Insira um ano?"));
  const anoBissextoCheck = ((anoBissexto % 400 == 0) || (anoBissexto % 4 ==0) && (anoBissexto % 100 !=0))
console.log(anoBissextoCheck)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const respostaMaioridade = (prompt("Você tem mais de 18 anos?"));
  const respostaFormacao = (prompt("Possui ensino médio completo?"));
  const respostaDisponibilidade = (prompt("Possui disponibilidade integral?"));

  const maioridade = (respostaMaioridade === "sim")
  const formacao = (respostaFormacao === "sim")
  const disponibilidade = (respostaDisponibilidade === "sim")
 
  
  const apto = ((maioridade === true) && (formacao === true) && (disponibilidade === true))

  console.log(apto)



}