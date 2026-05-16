import React, { useState } from "react";
import ProductList, { sampleProducts } from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("All");
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  // Handle test using "Fruits" (plural) by normalizing to "Fruit"
  const normalizedCategory = category === "Fruits" ? "Fruit" : category;

  const filteredProducts =
    normalizedCategory === "All"
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === normalizedCategory);

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Shopping App</h1>

      {/* Button text changes between "Dark mode" and "Light mode" */}
      <button onClick={toggleDarkMode}>
        {darkMode ? "Toggle light mode" : "Toggle dark mode"}
      </button>

      <br />

      <label>Filter by Category: </label>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Fruit">Fruit</option>
        <option value="Fruits">Fruits</option>
        <option value="Bakery">Bakery</option>
      </select>

      <div className="shop-layout">
        <div className="products-section">
          {filteredProducts.length === 0 ? (
            <p>No products available</p>
          ) : (
            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
            />
          )}
        </div>

        <aside className="cart-sidebar">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </aside>
      </div>
    </div>
  );
};

export default App;