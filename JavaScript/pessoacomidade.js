class Person {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
ehMaiorDeIdade(){
    return this.idade >= 18 ? `${this.nome} é maior de idade.` : `${this.nome} não e maior de idade.`;
  
    }
}
const pessoa1 = new Person ('Ana', 15);
const pessoa2 = new Person ('Carlos', 22);
console.log(pessoa1.ehMaiorDeIdade());
console.log(pessoa2.ehMaiorDeIdade());