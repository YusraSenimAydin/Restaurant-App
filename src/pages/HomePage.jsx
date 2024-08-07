import React, { useState, useEffect } from 'react';
import Categories from '../components/categories/Categories';
import Header from '../components/header/Header';
import Products from '../components/products/Products';
import { data } from '../data/data.js';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState(data);

  useEffect(() => {
    const uniqueCategories = [...new Set(data.map(item => item.category))];
    setCategories(uniqueCategories);
  }, []);

  return (
    <>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24 h-screen">
        <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
          <Categories categories={categories} setCategory={setCategory} />
        </div>
        <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10">
          <Products data={products.filter(product => !category || product.category === category)} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
