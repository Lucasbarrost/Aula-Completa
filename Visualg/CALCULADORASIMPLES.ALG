algoritmo " calculadorasimples"

var

operacao: inteiro

num1, num2, resultado: real

inicio

escreval("Calcular simples")
escreval("Escolha a operação: ")
escreval("1. + ")
escreval("2. - ")
escreval("3. * ")
escreval("4. / ")

leia(operacao)

              escreval("Digite o primeiro número: ")
                               leia(num1)

              escreval("Digite o segundo número: ")
                               leia(num2)
                               
escolha operacao

caso 1
            resultado <- num1 + num2
 escreva("Resultado da adição: ", resultado)

caso 2
            resultado <- num1 - num2
            escreva("Resultado da subtração: ", resultado)

caso 3
            resultado <- num1 * num2
            escreva("Resultado da multiplicação: ", resultado)

caso 4
            se num2 <> 0 entao
                resultado <- num1 / num2

                escreval("Resultado da divisão: ", resultado)
            senao

                escreval("Erro: divisão por zero.")

            fimse

        caso contrario

            escreval("Opção inválida.")

    fimEscolha
fimalgoritmo