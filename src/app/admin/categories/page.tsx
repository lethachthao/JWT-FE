'use client';

import CategoryList from './components/categoryList';
import CreateCategory from './components/CreateCategory';

const CategoriesPage = () => {
  return (
    <div>
      <CreateCategory />
      <CategoryList />
    </div>
  );
};

export default CategoriesPage;
