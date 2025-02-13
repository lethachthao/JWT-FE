'use client';

import CreateProduct from './components/CreateProduct';
import ProductList from './components/productList';

const ProductPage = () => {
  return (
    <div>
      <CreateProduct />
      <ProductList />
    </div>
  );
};

export default ProductPage;
