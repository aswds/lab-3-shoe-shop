import React from "react";
import { Product } from "../types";
import "./ProductItem.css";
interface ProductItemProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

function ProductItem({ product, handleAddToCart }: ProductItemProps) {
  return (
    <div className="container">
      <img src={product.image} className="image" />

      <div key={product.id} className="text-container">
        <span>{product.title}</span>
      </div>
      <span style={{ color: "red", fontFamily: "monospace" }}>
        ${product.price}
      </span>

      <button onClick={() => handleAddToCart(product)} className="addToCart">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
