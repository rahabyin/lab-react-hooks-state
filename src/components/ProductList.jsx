import React from "react";

// Exported so tests can import it
export const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy", price: "$3" },
  { id: 2, name: "Cheese", category: "Dairy", price: "$5" },
  { id: 3, name: "Apple", category: "Fruit", price: "$2" },
  { id: 4, name: "Banana", category: "Fruit", price: "$1" },
  { id: 5, name: "Bread", category: "Bakery", price: "$4" },
];

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="card">
          <h3>{product.name}</h3>
          <p>{product.category} · {product.price}</p>
          <button
            data-testid={`product-${product.id}`}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;