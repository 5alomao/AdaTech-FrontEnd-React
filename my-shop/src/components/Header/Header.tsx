import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/UserReducer/userSlice";
import { toggleCart } from "../../redux/CartReducer/cartSlice";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { CartOverlay } from "../Cart/styles";
import * as S from "./styles";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );

  const { showCart, cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  // const [showCart, setShowCart] = useState(false);

  const dispatch = useDispatch();

  const isLogged = user !== null;

  function handleUserAuth() {
    // * isLogged = false
    if (user === null) {
      // * Dispatch action --> login
      dispatch(
        login({
          name: "Salomão Ferreira Junior",
          email: "salomao@example.com",
        })
      );
    } else {
      dispatch(logout({}));
    }
  }

  return (
    <S.StyledHeader>
      <CartOverlay onClick={() => dispatch(toggleCart(showCart))} $showCart={showCart} />
      <S.Wrapper>
        <S.HeaderTitle>MyShop</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton $isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => dispatch(toggleCart(showCart))}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} cart={cart} />
    </S.StyledHeader>
  );
};
