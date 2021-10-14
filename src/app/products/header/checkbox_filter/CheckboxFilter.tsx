import React from "react";
import useProductsContext from "app/context/products/hooks/useProductsContext";

import { CheckboxLabel, CheckboxWrapper } from "../Header.styles";

interface Props {
  label: string;
  filterName: string;
}

const CheckboxFilter: React.FC<Props> = ({ label, filterName }) => {
  const { filters, setFilters } = useProductsContext();

  const filterByCheckbox = (checked: boolean) => {
    setFilters!({
      ...filters,
      [filterName]: checked,
      page: 0,
    });
  };

  return (
    <CheckboxWrapper>
      <CheckboxLabel>
        <input
          id={label}
          type="checkbox"
          onChange={(e) => filterByCheckbox(e.target.checked)}
        />
        <span />
        {label}
      </CheckboxLabel>
    </CheckboxWrapper>
  );
};

export default CheckboxFilter;
