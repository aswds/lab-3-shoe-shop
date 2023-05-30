import { useEffect, useState } from "react";
import Page from "../layout/Page";
import { ProductsList } from "../../components/Products/ProductList";
import { Product } from "../../components/types";
import axios from "axios";
function Home() {
  useEffect(() => {
    async function fetch_products() {
      const res_fake_store = await fetch("https://fakestoreapi.com/products");
      const prod = await res_fake_store.json();
      const response = await axios.get("http://localhost:3000/api/getProducts");
      setProducts([...response.data, ...prod]);
    }
    fetch_products();
  }, []);

  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
  };
  return (
    <Page>
      <ProductsList products={products} handleAddToCart={handleAddToCart} />
    </Page>
  );
}
export default Home;
