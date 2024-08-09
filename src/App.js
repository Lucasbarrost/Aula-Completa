import React, {useState} from 'react'


function App() {
  const [isOn, setIsOn] = useState(false)

  const toggle = () =>{
    setIsOn(!isOn)
  }

  return (
    <div>
      <p>{isOn ? 'Ligado' : 'Desligado'}</p>
      <button onClick={toggle}>{isOn ? 'Desligar' : 'Ligar'}</button>
    </div>
  );
}

export default App;
