import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { Product } from "../ProductsList/ProductsList";
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/CartReducer/cartSlice";

// * Mock: Tornar algo fake, mas funcionando
// * Não faz questão dos comportamentos e sim se estão sendo chamados.
const cart: Product[] = [
  {
    id: 1,
    title: "Product 01",
    price: 100,
    description: "Product 01 description",
    category: "Test Category 1",
    image: "teste1",
    rating: {
      rate: 4,
      count: 63,
    },
  },
  {
    id: 2,
    title: "Product 02",
    price: 50,
    description: "Product 02 description",
    category: "Test Category 2",
    image: "teste2",
    rating: {
      rate: 4,
      count: 63,
    },
  },
];

const mockDispatch = jest.fn();

jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
  };
});

describe("Cart > Unit tests", () => {
  it("should Cart render correctly", () => {
    render(<Cart showCart={true} cart={cart} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const closeCartElement = screen.getByTestId("closeCart");

    expect(titleElement).toHaveTextContent("Carrinho de Compras");
    expect(closeCartElement).toBeInTheDocument();
  });

  it("should Cart render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const cartListElement = screen.getByRole("list");
    const emptyCartMessage = screen.getByTestId("emptyCartMessage");

    expect(emptyCartMessage).toHaveTextContent(
      "Ainda não foram adicionados produtos ao carrinho!"
    );
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it("should render Cart with two products correctly", async () => {
    render(<Cart showCart={true} cart={cart} />);

    const productsItemElements = screen.getAllByRole("listitem");

    cart.forEach((product, index) => {
      const productImageElement = screen.getByAltText(product.description);
      const productTitleElement = screen.getByText(product.title);
      const productPriceElement = screen.getByText(
        "$" + product.price.toFixed(2)
      );
      const removeProductButton = screen.getAllByTestId("removeProductButton")[
        index
      ];

      expect(productImageElement).toBeInTheDocument();
      expect(productImageElement).toHaveAttribute("src", product.image);
      expect(productTitleElement).toBeInTheDocument();
      expect(productPriceElement).toBeInTheDocument();
      expect(removeProductButton).toBeInTheDocument();
    });

    const subTotalElement = screen.getByTestId("subtotal");
    const sumProductsPrice = cart
      .reduce((total, product) => total + product.price, 0)
      .toFixed(2);

    expect(productsItemElements.length).toBe(2);
    expect(subTotalElement).toHaveTextContent("SubTotal: $" + sumProductsPrice);
  });

  it("should remove product when remove button is clicked", () => {
    
    render(<Cart showCart={true} cart={[cart[0]]} />);

    const removeProductButton = screen.getByTestId("removeProductButton");

    userEvent.click(removeProductButton);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(removeProduct(cart[0]));
  });
});
