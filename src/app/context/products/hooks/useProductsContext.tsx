import { useContext } from "react";

import { ProductsContext } from "app/context/products/ProductsContext";
import { IProductsContext } from "app/context/products/Products.types";

const useProductsContext = () => {
  const productsCtx: IProductsContext = useContext(ProductsContext);
  const { response, loading, isError, filters, setFilters } = productsCtx;

  return {
    response,
    loading,
    isError,
    filters,
    setFilters,
  };
};

export default useProductsContext;
