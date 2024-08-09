import React, { useState } from 'react';  // Importa o React e o hook useState do pacote 'react'
import './Tema.css'; // Importa o arquivo de estilos CSS para aplicar os temas

// Componente funcional 'App'
function App() {
  // Declara uma nova variável de estado chamada 'isDarkMode'
  // O valor inicial é 'false', indicando que o tema escuro não está ativado
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Função para alternar entre o tema claro e o tema escuro
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Alterna o valor de 'isDarkMode' entre 'true' e 'false'
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      {/* 
        Botão para alternar o tema
        O texto do botão muda conforme o estado 'isDarkMode'
        - Se 'isDarkMode' for true, o texto será "Mudar para Modo Claro"
        - Se 'isDarkMode' for false, o texto será "Mudar para Modo Escuro"
      */}
      <button onClick={toggleTheme}>
        Mudar para {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
      
      {/* Exibe um título estático */}
      <h1>Olá, Mundo!</h1>
    </div>
  );
}

// Exporta o componente 'App' para que possa ser importado e utilizado em outras partes da aplicação
export default App;
