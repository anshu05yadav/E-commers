import React from 'react';

function CategoryFilter({ category, setCategory }) {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="all">All</option>
      <option value="smartphones">Smartphones</option>
      <option value="laptops">Laptops</option>
      <option value="fragrances">Fragrances</option>
      <option value="skincare">Skincare</option>
      <option value="groceries">Groceries</option>
      <option value="home-decoration">Home Decoration</option>
      <option value="furniture">Furniture</option>
      <option value="tops">Tops</option>
      <option value="womens-dresses">Women’s Dresses</option>
      <option value="womens-shoes">Women’s Shoes</option>
      <option value="mens-shirts">Men’s Shirts</option>
      <option value="mens-shoes">Men’s Shoes</option>
      <option value="mens-watches">Men’s Watches</option>
      <option value="womens-watches">Women’s Watches</option>
    </select>
  );
}

export default CategoryFilter;
