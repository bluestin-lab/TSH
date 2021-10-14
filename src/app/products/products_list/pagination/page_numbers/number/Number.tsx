import React from "react";
import useProductsContext from "app/context/products/hooks/useProductsContext";

import { NumberWrapper } from "../../Pagination.styles";

interface Props {
  number: number;
}

const Number: React.FC<Props> = ({ number }) => {
  const { response, filters, setFilters } = useProductsContext();
  const { currentPage } = response?.meta!;

  return (
    <NumberWrapper
      active={number === currentPage}
      onClick={() => setFilters!({ ...filters, page: number })}
    >
      {number}
    </NumberWrapper>
  );
};

export default Number;
