
     Algoritmo "SomarNumeros"

Var
   N, soma, contador: inteiro

Inicio
   // Solicita ao usuário o valor de N
   Escreva("Digite um valor para N: ")
   Leia(N)

   // Inicializa variáveis
   contador <- 1
   soma <- 0

   // Enquanto o contador for menor ou igual a N, faça:
   Enquanto contador <= N faca
      soma <- soma + contador
      contador <- contador + 1
   FimEnquanto

   // Exibe o resultado da soma
   Escreva("A soma dos números de 1 até ", N, " é: ", soma)

FimAlgoritmo
2