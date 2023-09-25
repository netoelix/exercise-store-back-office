import './styles/App.css';
import { useState } from 'react';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';

function App() {
  const [activeComponent, setActiveComponent] = useState('cadastro');

  const handleClick = (component: string) => {
    setActiveComponent(component);
  };
  return (
    <div className="app">
      <header>
        <button onClick={ () => handleClick('cadastro') }>Cadastrar</button>
        <button onClick={ () => handleClick('lista') }>Ver produtos</button>
      </header>
      {activeComponent === 'cadastro' && <RegisterProduct />}
      {activeComponent === 'lista' && <ListProducts products={ [] } />}
    </div>
  );
}

export default App;
