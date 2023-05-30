import ProductItem from "./ProductItem";
import { Product } from "../types";
import "./ProductList.css";
interface ProductListProps {
  products: Product[];
  handleAddToCart: (product: Product) => void;
}

export const ProductsList = ({
  products,
  handleAddToCart,
}: ProductListProps) => {
  return (
    <div className="listContainer">
      {products.map((product, i) => (
        <ProductItem
          product={product}
          handleAddToCart={handleAddToCart}
          key={i}
        />
      ))}
    </div>
  );
};
