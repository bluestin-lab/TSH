import React from "react";

import { ModalBackdrop } from "../ProductModal.styles";

export interface Props {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Backdrop: React.FC<Props> = ({ setIsModal }) => (
  <ModalBackdrop onClick={() => setIsModal(false)} />
);

export default Backdrop;
