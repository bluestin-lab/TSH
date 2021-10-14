import useProductsContext from "app/context/products/hooks/useProductsContext";

const usePageNumbers = () => {
  const { response } = useProductsContext();
  const { totalPages, currentPage } = response?.meta!;

  const totalPagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  const generateFirstPages = () => {
    if (currentPage === totalPages - 3)
      return [currentPage - 2, currentPage - 1, currentPage];

    if (currentPage === 1 || currentPage >= totalPages - 2) return [1, 2, 3];

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const firstNumbers = generateFirstPages();
  const lastNumbers = [totalPages - 2, totalPages - 1, totalPages];

  return {
    totalPages,
    totalPagesArray,
    firstNumbers,
    lastNumbers,
  };
};

export default usePageNumbers;
