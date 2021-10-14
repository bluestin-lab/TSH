import React from "react";

import { Item } from "app/context/products/Products.types";

import {
  ProductBox,
  Column,
  BoxBottomPart,
  PromoBox,
  ProductImage,
} from "../ProductsList.styles";

import starIcon from "./assets/star.svg";
import emptyStarIcon from "./assets/empty-star.svg";

interface Props {
  product: Item;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalData: React.Dispatch<
    React.SetStateAction<{
      image: string;
      name: string;
      description: string;
    }>
  >;
}

const Product: React.FC<Props> = ({ product, setIsModal, setModalData }) => {
  const { name, promo, active, description, rating, image } = product;

  const showModal = () => {
    setModalData({
      image,
      name,
      description,
    });
    setIsModal(true);
  };

  return (
    <Column>
      <ProductBox>
        {promo && <PromoBox>Promo</PromoBox>}
        <ProductImage src={image} alt="Random" />
        <h2>{name}</h2>
        <p>{description}</p>
        <BoxBottomPart>
          <div>
            {[...Array(5)].map((_, i) => (
              <img
                src={i < rating ? starIcon : emptyStarIcon}
                alt="Star icon"
                key={i}
              />
            ))}
          </div>
          <button disabled={!active} onClick={showModal}>
            {active ? "Show details" : "Unavailable"}
          </button>
        </BoxBottomPart>
      </ProductBox>
    </Column>
  );
};

export default Product;
