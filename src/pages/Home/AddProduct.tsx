import React, { useState } from "react";
import axios from "axios";
import Page from "../layout/Page";
import "./AddProduct.css";

const AddProduct: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<string>("");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedImage!);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/addProduct",
        formData
      );

      if (res.status === 200) {
        // Reset the form
        setName("");
        setDescription("");
        setPrice("");
        // Handle success or redirect to another page
      }
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <Page>
      <div>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label htmlFor="name">Name:</label>
            <input
              aria-label="Name:"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="price">Price:</label>
            <input
              aria-label="Price:"
              type="text"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="description">Description:</label>
            <textarea
              aria-label="Description:"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" onChange={handleImageChange} />
          </div>
          <button type="submit" className="addProductButton">
            Add Product
          </button>
        </form>
      </div>
    </Page>
  );
};

export default AddProduct;
