import React from "react";

import { NoProductsWrapper, NoProductsBody } from "../ProductsList.styles";
import noProductsIcon from "../assets/no-products.svg";

const NoProducts: React.FC = () => {
  return (
    <NoProductsWrapper>
      <NoProductsBody>
        <img src={noProductsIcon} alt="Task list icon" />
        <h3>Ooops… It’s empty here</h3>
        <p>There are no products on the list</p>
      </NoProductsBody>
    </NoProductsWrapper>
  );
};

export default NoProducts;
