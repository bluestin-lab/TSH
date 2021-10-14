import React, { useEffect } from "react";

import { Props } from "../ProductModal";

import {
  ModalBody,
  ModalWrapper,
  ModalImage,
  ModalClose,
} from "../ProductModal.styles";
import closeIcon from "../assets/close.svg";

const Modal: React.FC<Props> = ({ modalData, setIsModal }) => {
  const { image, name, description } = modalData;

  useEffect(() => {
    document.querySelector("body")?.classList.add("modal-open");

    return () => {
      document.querySelector("body")?.classList.remove("modal-open");
    };
  }, []);

  return (
    <ModalWrapper>
      <ModalBody id="modal-body">
        <div>
          <ModalClose
            onClick={() => setIsModal(false)}
            src={closeIcon}
            alt="Close icon"
          />
          <ModalImage src={image} alt="Random" />
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </ModalBody>
    </ModalWrapper>
  );
};

export default Modal;
