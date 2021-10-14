import { useState } from "react";
import useProductsContext from "app/context/products/hooks/useProductsContext";

const useProductsList = () => {
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState({
    image: "",
    name: "",
    description: "",
  });

  const { response, loading, isError } = useProductsContext();
  const totalPages = response?.meta?.totalPages!;

  return {
    response,
    loading,
    isError,
    totalPages,
    isModal,
    setIsModal,
    modalData,
    setModalData,
  };
};

export default useProductsList;
