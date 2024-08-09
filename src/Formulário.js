import React, { useState } from 'react';

// Componente funcional 'App'
function App() {
  // Declara uma nova variável de estado chamada 'name' com o valor inicial vazio
  // Declara uma nova variável de estado chamada 'submittedName' com o valor inicial vazio
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  // Função para lidar com mudanças no input de texto
  // Atualiza o estado 'name' com o valor atual do input
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // Função para lidar com o envio do formulário
  // Impede o comportamento padrão de envio do formulário e atualiza o estado 'submittedName'
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão de envio do formulário
    setSubmittedName(name); // Define 'submittedName' com o valor atual de 'name'
  };

  return (
    <div>
      {/* Formulário para entrada do nome */}
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          {/* Campo de entrada de texto com valor controlado */}
          <input
            type="text"
            value={name} // Valor do input é controlado pelo estado 'name'
            onChange={handleChange} // Atualiza o estado 'name' quando o valor do input muda
          />
        </label>
        {/* Botão para enviar o formulário */}
        <button type="submit">Enviar</button>
      </form>

      {/* Renderiza uma saudação apenas se 'submittedName' não estiver vazio */}
      {submittedName && <h2>Olá, {submittedName}!</h2>}
    </div>
  );
}

// Exporta o componente 'App' para que possa ser importado e usado em outros
export default App;