import React, { useEffect, useState } from "react";
import Page from "../layout/Page";
import { ProductsList } from "../../components/Products/ProductList";
import { Product } from "../../components/types";

function Home() {
  useEffect(() => {
    async function fetch_products() {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    }

    fetch_products();
  }, []);

  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product: Product) => {
    // setCart([...cart, product]);
  };
  return (
    <Page>
      <ProductsList products={products} handleAddToCart={handleAddToCart} />
    </Page>
  );
}
export default Home;
