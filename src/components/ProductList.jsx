import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, favorites, toggleFavorite }) {
  return (
    <div className="product-list">
      {products.map((product) => {
        const isFavorite = favorites.includes(product.id);

        return (
          <div key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>

            <button
              className="favorite-btn"
              onClick={() => toggleFavorite(product.id)}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? '❤️' : '🤍'}
            </button>
          </div>
        );
      })}
    </div>
  );
}



export default ProductList;
