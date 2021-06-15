//Exercicios de interpretação de codigo
//1-
// vai imprimir todos os arrays com todos os dados
//2
// "Amanda Rangel","Laís Petra","Letícia Chijo"
//3-
//"Mandi","Laura"


// Exercicios de escrita de codigo


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// const somenteNomes = pets.map((pets) => {
//     return pets.nome
// })

// const somenteNomes = pets.map((pets) => {
//     return pets.nome
// console.log(somenteNomes) 

// const racaSalsicha = pets.filter((pets) => {
//     return pets.raca === "Salsicha"
// })

// console.log(racaSalsicha)

// })
// const funcaoFiltro = pets.filter((pets) => {
//    return pets.raca === "Poodle"
   
// }).map((pets) => {
//     return pets.nome
    
// })



// console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`)

//2-

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 const nomeDosItens = produtos.map((produtos) => {
     return produtos.nome
 })

 console.log(nomeDosItens)

 const desconto = produtos.map((produtos) => {
    const soma = produtos.preco * (5/100)
    return produtos.preco - soma
 })
 console.log(desconto)

 const somenteBebidas = produtos.filter((produtos) => {
     return produtos.categoria === "Bebidas"
 })
 console.log(somenteBebidas)

 const somenteYpe = produtos.filter((produtos) => {
    return produtos.nome === "Ype"
 })
 console.log(somenteYpe)