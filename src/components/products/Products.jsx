
import React from 'react';
import ProductItem from './ProductItem'; // ProductItem bileşenini içe aktar

function Products({ data, category }) {
  const filteredProducts = category ? data.filter(product => product.category === category) : data;

  return (
    <div className='products-wrapper grid grid-cols-card gap-4'>
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} item={product} /> // ProductItem bileşenini kullan
      ))}
    </div>
  );
}

export default Products;
