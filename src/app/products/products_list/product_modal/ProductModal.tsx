import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "./backdrop/Backdrop";
import Modal from "./modal/Modal";

export interface Props {
  modalData: {
    image: string;
    name: string;
    description: string;
  };
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductModal: React.FC<Props> = ({ modalData, setIsModal }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setIsModal={setIsModal} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <Modal modalData={modalData} setIsModal={setIsModal} />,
        document.getElementById("modal-root")!
      )}
    </>
  );
};

export default ProductModal;
