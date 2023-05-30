import { render } from "@testing-library/react";
import Home from "../pages/Home/Home";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import AddProduct from "../pages/Home/AddProduct";
jest.mock("axios");
describe("fetches products", () => {
  it("fetches products correctly", async () => {
    const fakeStoreProducts = [
      { id: 1, title: "Product 1" },
      { id: 2, title: "Product 2" },
    ];
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(fakeStoreProducts),
    } as any);

    // Mock the response from the local API
    const localProducts = [
      { id: 3, title: "Product 3" },
      { id: 4, title: "Product 4" },
    ];
    jest.spyOn(axios, "get").mockResolvedValueOnce({
      data: localProducts,
    } as any);
  });
});
describe("Home component", () => {
  it("Home page renders correctly", async () => {
    render(<Home />, { wrapper: BrowserRouter });
  });
});

describe("AddProduct component", () => {
  it("AddProduct page renders correctly", async () => {
    render(<AddProduct />, { wrapper: BrowserRouter });
  });
});
