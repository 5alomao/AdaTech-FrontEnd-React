import { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import axios from "axios";
import * as S from "./styles";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const ProductsList: React.FC = () => {
  // pegar da API de Produtos
  const [products, setProducts] = useState([] as Product[]);
  useEffect(() => {
    async function loadProducts() {
        const response = await axios.get("https://fakestoreapi.com/products");
        const productsData = response.data;
        setProducts(productsData);
    }
    loadProducts();
  }, [products]);

  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
