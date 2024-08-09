// Definindo a classe Animal
class Animal {
    fazerBarulho() {
      alert('Fazendo barulho genérico');
    }
  }
  
  // Definindo a subclasse Cachorro que estende Animal
  class Cachorro extends Animal {
    latir() {
      alert('Au au!');
    }
  }
  
  // Funções para interação com o usuário
  function fazerBarulho() {
    // Criando uma instância da classe Animal
    let animal = new Animal();
    animal.fazerBarulho();
  }
  
  function latir() {
    // Criando uma instância da subclasse Cachorro
    let cachorro = new Cachorro();
    cachorro.fazerBarulho(); // Chama o método da superclasse Animal
    cachorro.latir();
  }
  