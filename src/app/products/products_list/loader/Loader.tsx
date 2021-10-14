import React from "react";

import loaderIcon from "../assets/loader.svg";
import { LoaderWrapper } from "../ProductsList.styles";

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <img src={loaderIcon} alt="Loader" />
    </LoaderWrapper>
  );
};

export default Loader;
