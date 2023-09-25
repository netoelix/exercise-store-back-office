import React from 'react';
import { ProductWithId } from '../types';
import Product from './Product';

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string;
};

type Props = {
  products: Product[];
  handleDelete: (productId: string) => void;
};

export default function ListProducts(props: Props) {
  const { products, handleDelete } = props;

  return (
    <div className="product-list">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={ product.id }>
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>
                Preço:
                {' '}
                {product.price}
              </p>
              <p>
                Tags:
                {' '}
                {product.tags}
              </p>
            </div>
            <button onClick={ () => handleDelete(product.id) }>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
