 algoritmo "inicializacao_e_impressao_arrays"
var
    nomes: vetor[1..5] de caractere
    i: inteiro
inicio

    nomes[1] <- "Ana"
    nomes[2] <- "João"
    nomes[3] <- "Maria"
    nomes[4] <- "Lucas"
    nomes[5] <- "Kalysse"

    para i de 1 ate 5 faca
        escreva(nomes[i], " ")
    fimpara
fimalgoritmo