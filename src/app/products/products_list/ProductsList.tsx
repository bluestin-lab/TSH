import React from "react";

import useProductsList from "./hooks/useProductsList";

import Product from "./product/Product";
import Pagination from "./pagination/Pagination";
import ProductModal from "./product_modal/ProductModal";
import Loader from "./loader/Loader";
import NoProducts from "./no_products/NoProducts";

import { Container } from "../Products.styles";
import { ProductsListWrapper } from "./ProductsList.styles";

const ProductsList: React.FC = () => {
  const {
    response,
    loading,
    isError,
    totalPages,
    isModal,
    setIsModal,
    modalData,
    setModalData,
  } = useProductsList();

  if (loading) {
    return <Loader />;
  }

  if (isError) {
    return <>Response Error!</>;
  }

  if (!response?.items.length) {
    return <NoProducts />;
  }

  return (
    <Container id="products-container">
      <ProductsListWrapper>
        {response?.items?.map((product) => (
          <Product
            key={product.id}
            product={product}
            setIsModal={setIsModal}
            setModalData={setModalData}
          />
        ))}
      </ProductsListWrapper>
      {totalPages > 1 && <Pagination />}
      {isModal && (
        <ProductModal modalData={modalData} setIsModal={setIsModal} />
      )}
    </Container>
  );
};

export default ProductsList;
