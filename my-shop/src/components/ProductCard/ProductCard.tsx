import { Product } from "../ProductsList/ProductsList";
import { RootReducer } from "../../redux/root-reducer";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct } from "../../redux/CartReducer/cartSlice";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const isProductOnCart =
    cart.find((productOnCart) => productOnCart.id === product.id) !== undefined;

  const dispatch = useDispatch();

  function handleAddProductToCart() {
    dispatch(addProduct(product));
  }

  function handleRemoveProductFromCart() {
    dispatch(removeProduct(product));
  }

  const productTitle =
    product.title.length > 40
      ? product.title.substring(0, 45) + "..."
      : product.title;

  return (
    <S.Card title={product.title}>
      <S.ProductImage src={product.image} alt={product.description} />
      <S.ProductTitle>{productTitle}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          {`(${product.rating.rate})`}
        </S.Review>
        <S.Price>${product.price.toFixed(2)}</S.Price>
      </S.ReviewPriceContainer>
      <S.ButtonCartWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover Do Carrinho <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar Ao Carrinho <FiShoppingCart />
          </S.AddToCartButton>
        )}
      </S.ButtonCartWrapper>
    </S.Card>
  );
};
