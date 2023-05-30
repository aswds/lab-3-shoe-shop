import { Product } from "../types";
import "./ProductItem.css";
interface ProductItemProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

function ProductItem({ product, handleAddToCart }: ProductItemProps) {
  return (
    <div className="container">
      <img
        src={
          product.image ?? `http://localhost:3000/uploads/${product.fileName}`
        }
        alt={product.fileName}
        className="image"
      />
      <div key={product.id} className="text-container">
        <span>{product.title ?? product.name}</span>
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
