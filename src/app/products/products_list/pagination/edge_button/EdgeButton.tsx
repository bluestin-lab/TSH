import React from "react";
import useProductsContext from "app/context/products/hooks/useProductsContext";

import { EdgeButtonWrapper } from "../Pagination.styles";

interface Props {
  label: string;
  page: number;
}

const EdgeButton: React.FC<Props> = ({ label, page }) => {
  const { response, filters, setFilters } = useProductsContext();

  const currentPage = response?.meta?.currentPage;

  return (
    <EdgeButtonWrapper
      active={currentPage === page}
      onClick={() => setFilters!({ ...filters, page: page })}
    >
      {label}
    </EdgeButtonWrapper>
  );
};

export default EdgeButton;
