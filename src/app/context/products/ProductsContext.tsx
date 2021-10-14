import React from "react";

import useRequestProducts from "./hooks/useRequestProducts";

export const ProductsContext = React.createContext({});

const ProductsContextProvider: React.FC = ({ children }) => {
  const { responseData, loading, isError, filters, setFilters } =
    useRequestProducts();

  const value = {
    response: responseData,
    loading,
    isError,
    filters,
    setFilters,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
