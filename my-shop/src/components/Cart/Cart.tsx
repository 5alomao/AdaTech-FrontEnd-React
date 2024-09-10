import { Product } from "../ProductsList/ProductsList";
import { removeProduct, toggleCart } from "../../redux/CartReducer/cartSlice";
import { AiFillCloseSquare } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import * as S from "./styles";
import { useDispatch } from "react-redux";

interface CartProps {
  showCart: boolean;
  cart: Product[];
}

export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  const dispatch = useDispatch();

  const totalPrice = cart
    .reduce((total, product) => {
      return total + product.price;
    }, 0)
    .toFixed(2);

  return (
    <S.Container $showCart={showCart}>
      <S.CartHeader>
        <S.Title>Carrinho de Compras</S.Title>
        <S.CloseCart
          data-testid="closeCart"
          onClick={() => dispatch(toggleCart(showCart))}
        >
          <AiFillCloseSquare />
        </S.CloseCart>
      </S.CartHeader>
      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <S.CartProductItemImage
              src={product.image}
              alt={product.description}
            />
            <S.CartProductItemTitle>{product.title}</S.CartProductItemTitle>
            <S.CartProductItemPrice>
              ${product.price.toFixed(2)}
            </S.CartProductItemPrice>
            <S.CartProductItemTrash
              data-testid="removeProductButton"
              onClick={() => dispatch(removeProduct(product))}
            >
              <FiTrash2></FiTrash2>
            </S.CartProductItemTrash>
          </S.CartProductItem>
        ))}
      </S.CartProductsList>
      <S.CartSummaryWrapper>
        {cart.length > 0 ? (
          <S.CartSubTotalPrice data-testid="subtotal">
            SubTotal: ${totalPrice}
          </S.CartSubTotalPrice>
        ) : (
          <S.CartIsEmptyMessage data-testid="emptyCartMessage">
            Ainda não foram adicionados produtos ao carrinho!
          </S.CartIsEmptyMessage>
        )}
      </S.CartSummaryWrapper>
    </S.Container>
  );
};
