import React, { useState } from 'react';
import Product from './Product';
import '../styles/RegisterProduct.css';

type Props = {
  handleSubmit: (newProduct: any) => void;
};

export default function RegisterProduct(props: Props) {
  const { handleSubmit } = props;

  const [productInfo, setProductInfo] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    tags: '',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const productId = Date.now().toString();
    const newProduct = {
      id: productId,
      ...productInfo,
    };
    handleSubmit(newProduct);
    setProductInfo({
      name: '',
      description: '',
      price: 0,
      image: '',
      tags: '',
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setProductInfo((prevProductInfo) => ({
      ...prevProductInfo,
      [id]: value,
    }));
  };

  return (
    <main>
      <h1>Cadastrar novo produto</h1>
      <div className="register-container">
        <form onSubmit={ onSubmit }>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              id="name"
              required
              value={ productInfo.name }
              onChange={ handleInputChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <input
              type="text"
              id="description"
              required
              value={ productInfo.description }
              onChange={ handleInputChange }
            />
          </label>
          <label htmlFor="price">
            Preço
            <input
              type="number"
              id="price"
              required
              value={ productInfo.price }
              onChange={ handleInputChange }
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              id="image"
              value={ productInfo.image }
              onChange={ handleInputChange }
            />
          </label>
          <label htmlFor="tags">
            Tags
            <input
              type="text"
              id="tags"
              value={ productInfo.tags }
              onChange={ handleInputChange }
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
        <Product productInfo={ productInfo } />
      </div>
    </main>
  );
}
