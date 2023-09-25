import './styles/App.css';
import { useState } from 'react';
import ListProducts from './components/ListProducts';
import RegisterProduct from './components/RegisterProduct';

function App() {
  const [activeComponent, setActiveComponent] = useState('cadastro');
  const [products, setProducts] = useState([]);

  const handleClick = (component: string) => {
    setActiveComponent(component);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="app">
      <header>
        <button onClick={ () => handleClick('cadastro') }>Cadastrar</button>
        <button onClick={ () => handleClick('lista') }>Ver produtos</button>
      </header>
      {activeComponent === 'cadastro'
       && <RegisterProduct handleSubmit={ handleAddProduct } />}
      {activeComponent === 'lista' && <ListProducts products={ products } />}
    </div>
  );
}

export default App;
