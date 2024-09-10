import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../components/ProductsList/ProductsList";

interface CartState {
  cart: Product[];
  showCart: boolean;
}

const initialState: CartState = {
  cart: [],
  showCart: false,
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    toggleCart: (state, action) => {
      state.showCart = !action.payload;
    },

    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },

    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      const cartFiltered = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );
      state.cart = cartFiltered;
    },
  },
});

export const { toggleCart, addProduct, removeProduct } = cartSlice.actions;
