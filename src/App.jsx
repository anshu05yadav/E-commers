import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError('');
      let url = 'https://dummyjson.com/products';
      if (category !== 'all') {
        url = `https://dummyjson.com/products/category/${category}`;
      } else if (search) {
        url = `https://dummyjson.com/products/search?q=${search}`;
      }

      console.log("Fetching from URL:", url);

      try {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, search]);

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter((fid) => fid !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const filtered = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="container">
        <h1>🛍️ Product Explorer</h1>
        
        {/* ✅ Favorite count display */}
        <p className="favorite-count">❤️ Favorite Items: {favorites.length}</p>

        <div className="controls">
          <SearchBar search={search} setSearch={setSearch} />
          <CategoryFilter category={category} setCategory={setCategory} />
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        {loading && <p>Loading products...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <ProductList
          products={filtered}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}

export default App;
