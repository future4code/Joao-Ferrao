~~~
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let preco = 0
    if (quantidade < 12){
      preco = 1.30
    } else if (quantidade >= 12){
      preco = 1
    }
  
  let compra = quantidade * preco
  return compra
}
~~~