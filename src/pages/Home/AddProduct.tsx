import React, { useState } from "react";
import axios from "axios";
import Page from "../layout/Page";

interface Product {
  name: string;
  price: number;
  description: string;
}

const AddProduct: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    price: 0,
    description: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post("/api/addProduct", product);
      // Reset the form
      setProduct({
        name: "",
        price: 0,
        description: "",
      });
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Page>
      <div>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add Product
          </button>
        </form>
      </div>
    </Page>
  );
};

export default AddProduct;
