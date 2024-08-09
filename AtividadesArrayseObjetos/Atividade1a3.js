let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2022
};

console.log(carro);


carro.ano = 2023;
console.log(carro); // Agora o ano é 2023

carro.cor = 'preto';

console.log(carro); // Agora o objeto carro possui a propriedade 'cor' com valor 'preto'


