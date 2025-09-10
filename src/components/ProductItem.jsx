import React from 'react';

function ProductItem({ product, isFavorite, toggleFavorite }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Rating: ⭐ {product.rating}</p>
      <button onClick={() => toggleFavorite(product.id)}>
        {isFavorite ? '💖 Remove Favorite' : '🤍 Add to Favorites'}
      </button>
    </div>
  );
}

export default ProductItem;
