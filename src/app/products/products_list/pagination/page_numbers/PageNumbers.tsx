import React from "react";
import usePageNumbers from "./hooks/usePageNumbers";

import Number from "./number/Number";

import { Ellipsis } from "../Pagination.styles";

const PageNumbers: React.FC = () => {
  const { totalPages, totalPagesArray, firstNumbers, lastNumbers } =
    usePageNumbers();

  if (totalPages <= 6) {
    return (
      <>
        {totalPagesArray.map((number) => (
          <Number key={number} number={number} />
        ))}
      </>
    );
  }

  return (
    <>
      {firstNumbers.map((number) => (
        <Number key={number} number={number} />
      ))}
      <Ellipsis>…</Ellipsis>
      {lastNumbers.map((number) => (
        <Number key={number} number={number} />
      ))}
    </>
  );
};

export default PageNumbers;
