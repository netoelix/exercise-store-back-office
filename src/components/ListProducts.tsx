import React from 'react';
import { ProductWithId } from '../types';
import Product from './Product';

type Props = {
  products: ProductWithId[]
  handleDelete: (productId: string) => void;
};

export default function ListProducts(props: Props) {
  const { products, handleDelete } = props;
  return (
    <main>
      <h1>Lista de produtos</h1>
      <div className="list-container">
        {products.length === 0 && <h2>Nenhum produto cadastrado</h2>}
        {products.map((product) => (
          <Product
            key={ product.id }
            productInfo={ product }
            handleDelete={ () => handleDelete(product.id) }
          />))}
      </div>
    </main>
  );
}
