import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className={`${styles.card} ${
        !product.inStock ? styles.outOfStock : ""
      }`}
      style={{ margin: "10px 0" }}
    >
      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>

      <button
        data-testid={"product-" + product.id}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;