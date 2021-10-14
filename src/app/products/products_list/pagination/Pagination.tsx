import React from "react";
import useProductsContext from "app/context/products/hooks/useProductsContext";

import PageNumbers from "./page_numbers/PageNumbers";
import EdgeButton from "./edge_button/EdgeButton";

import { PaginationWrapper } from "./Pagination.styles";

const Pagination = () => {
  const { response } = useProductsContext();

  const lastPage = response?.meta?.totalPages;

  return (
    <PaginationWrapper>
      <EdgeButton label="First" page={1} />
      <PageNumbers />
      <EdgeButton label="Last" page={lastPage!} />
    </PaginationWrapper>
  );
};

export default Pagination;
