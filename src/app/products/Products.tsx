import React from "react";

import ProductsContextProvider from "app/context/products/ProductsContext";
import Header from "./header/Header";
import ProductsList from "./products_list/ProductsList";

import {
  ProductsBackground,
  ProductsPage,
  HeaderBackground,
} from "./Products.styles";

export const Products = () => {
  return (
    <ProductsPage>
      <ProductsContextProvider>
        <HeaderBackground>
          <Header />
        </HeaderBackground>
        <ProductsBackground>
          <ProductsList />
        </ProductsBackground>
      </ProductsContextProvider>
    </ProductsPage>
  );
};
