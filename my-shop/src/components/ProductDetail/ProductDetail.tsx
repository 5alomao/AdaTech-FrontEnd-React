import { useState } from "react";
import * as S from "./styles";

const product = {
  id: 1,
  title: "Camiseta Manga Longa",
  category: "Roupa",
  price: 109.3,
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  description: "Camiseta Branca Manga Longa 100% algodão",
  rating: {
    count: 30,
    rate: 4.2,
  },
  colors: [
    { ptBr: "Preto", color: "black" },
    { ptBr: "Cinza", color: "gray" },
    { ptBr: "Branco", color: "white" },
  ],
  sizes: ["P", "M", "G", "GG", "XG"],
};

export const ProductDetail: React.FC = () => {
  const [amount, setAmount] = useState(1);

  return (
    <S.ProductDetailContainer>
      <S.ProductDetailHeader>
        <S.ProductDetailTitle>{product.title}</S.ProductDetailTitle>
      </S.ProductDetailHeader>

      <S.ProductDetailWrapper>
        <S.ProductDetailCard>
          <S.ProductDetailImage src={product.image} alt={product.title} />
          {/* TODO - CARROSSEL DE IMAGENS*/}
        </S.ProductDetailCard>
        <S.ProductDetailCard>
          <S.OptionsWrapper>
            <S.ProductDetailPrice>
              ${product.price.toFixed(2)}
            </S.ProductDetailPrice>

            <S.OptionDiv>
              <S.OptionLabel>Cor</S.OptionLabel>
              <S.OptionList>
                {product.colors.map((objColor) => (
                  <S.OptionListItem>
                    <S.OptionListItemColor
                      title={objColor.ptBr}
                      $bgColor={objColor.color}
                    ></S.OptionListItemColor>
                  </S.OptionListItem>
                ))}
              </S.OptionList>
            </S.OptionDiv>
            <S.OptionDiv>
              <S.OptionLabel>Tamanho</S.OptionLabel>
              <S.OptionList>
                {product.sizes.map((size) => (
                  <S.OptionListItem title={size}>{size}</S.OptionListItem>
                ))}
              </S.OptionList>
            </S.OptionDiv>
            <S.ProductDetailAddToCart>
              <S.AmountWrapper>
                <S.AmountButton
                  onClick={() => {
                    if (amount > 1) setAmount(amount - 1);
                    else return;
                  }}
                >
                  -
                </S.AmountButton>
                <S.AmountText>{amount}</S.AmountText>
                <S.AmountButton onClick={() => setAmount(amount + 1)}>
                  +
                </S.AmountButton>
              </S.AmountWrapper>
              <S.AddToCartButton>Comprar</S.AddToCartButton>
            </S.ProductDetailAddToCart>
          </S.OptionsWrapper>
        </S.ProductDetailCard>
      </S.ProductDetailWrapper>
    </S.ProductDetailContainer>
  );
};
