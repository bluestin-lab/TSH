import React from "react";
import useProductsContext from "app/context/products/hooks/useProductsContext";

let typingTimer: NodeJS.Timeout;
const typingDelay = 800;

const Search: React.FC = () => {
  const { filters, setFilters } = useProductsContext();

  const searchProducts = (searchValue: string) => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      setFilters!({
        ...filters,
        search: searchValue ? searchValue : "",
        page: 0,
      });
    }, typingDelay);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          searchProducts(e.target.value);
        }}
        placeholder="Search"
      />
    </>
  );
};

export default Search;
