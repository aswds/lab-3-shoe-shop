import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import axios from "axios";
import AddProduct from "../pages/Home/AddProduct";
import { BrowserRouter } from "react-router-dom";
jest.mock("axios"); // Mock axios module

describe("AddProduct", () => {
  beforeEach(() => {
    render(<AddProduct />, { wrapper: BrowserRouter });
  });

  it("should render the Add Product form", () => {
    expect(screen.getByLabelText("Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Price:")).toBeInTheDocument();
    expect(screen.getByLabelText("Description:")).toBeInTheDocument();
    expect(screen.getByLabelText("Image:")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Product" })
    ).toBeInTheDocument();
  });

  it("should update input values when typing", () => {
    const nameInput = screen.getByLabelText("Name:") as HTMLInputElement;
    const priceInput = screen.getByLabelText("Price:") as HTMLInputElement;
    const descriptionTextarea = screen.getByLabelText(
      "Description:"
    ) as HTMLTextAreaElement;

    act(() => {
      fireEvent.change(nameInput, { target: { value: "Product Name" } });
      fireEvent.change(priceInput, { target: { value: "9.99" } });
      fireEvent.change(descriptionTextarea, {
        target: { value: "Product Description" },
      });
    });

    expect(nameInput.value).toBe("Product Name");
    expect(priceInput.value).toBe("9.99");
    expect(descriptionTextarea.value).toBe("Product Description");
  });

  it("should submit the form with the correct data", async () => {
    const nameInput = screen.getByLabelText("Name:") as HTMLInputElement;
    const priceInput = screen.getByLabelText("Price:") as HTMLInputElement;
    const descriptionTextarea = screen.getByLabelText(
      "Description:"
    ) as HTMLTextAreaElement;
    const imageInput = screen.getByLabelText("Image:") as HTMLInputElement;

    const mockedAxiosPost = axios.post as jest.MockedFunction<
      typeof axios.post
    >;
    mockedAxiosPost.mockResolvedValue({ status: 200 });
    act(() => {
      fireEvent.change(nameInput, { target: { value: "Product Name" } });
      fireEvent.change(priceInput, { target: { value: "9.99" } });
      fireEvent.change(descriptionTextarea, {
        target: { value: "Product Description" },
      });
      fireEvent.change(imageInput, {
        target: { files: [new File([""], "test.jpg")] },
      });

      fireEvent.click(screen.getByRole("button", { name: "Add Product" }));
    });

    await waitFor(() => {
      expect(mockedAxiosPost).toHaveBeenCalledWith(
        "http://localhost:3000/api/addProduct",
        expect.any(FormData)
      );
    });
    const formData = mockedAxiosPost.mock.calls[0][1] as FormData;
    expect(formData.get("name")).toBe("Product Name");
    expect(formData.get("description")).toBe("Product Description");
    expect(formData.get("price")).toBe("9.99");
    expect(formData.get("image")).toBeInstanceOf(File);
    // You can add more assertions here based on the desired behavior
  });

  // Add more tests as needed
});
