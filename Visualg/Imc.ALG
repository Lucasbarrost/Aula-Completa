
algoritmo "CalcularIMC"

var
    peso, altura, imc: real

    inicio

    escreva("Digite seu peso em kg: ")
                    leia(peso)


          escreva("Digite sua altura em metros: ")
                          leia(altura)

imc := peso / (altura * altura)

 escreva("Seu IMC é: ", imc:4:2, "\n")

 se (imc < 18.5) entao
    escreva("Você está abaixo do peso.")
senao

    se (imc >= 18.5) e (imc < 24.9) entao
        escreva("Você está com peso normal.")
    senao

        se (imc >= 25) e (imc < 29.9) entao
            escreva("Você está com sobrepeso.")
        senao

            escreva("Você está com obesidade.")
        fimse
    fimse
fimse

fimalgoritmo

    

