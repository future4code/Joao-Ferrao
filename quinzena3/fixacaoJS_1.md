~~~
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
const salarioFixo = 2000
const comissao1 = qtdeCarrosVendidos * 100
const comissao2 = valorTotalVendas * (5/100)
const salarioFinal = salarioFixo + comissao1 + comissao2
return salarioFinal

}
~~~