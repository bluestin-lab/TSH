import styled from "styled-components/macro";

export const ModalBackdrop = styled.div`
  background-color: #1a1b1d;
  opacity: 0.9;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  max-width: 648px;
  padding: 24px;
  max-height: 100%;
  overflow: auto;

  div {
    background-color: #fff;
    position: relative;
    box-shadow: 0px 8px 32px rgb(17 18 20 / 16%);
    border-radius: 8px;
    padding-bottom: 56px;

    h2 {
      font-size: 24px;
      line-height: 40px;
      margin: 18px 32px 8px;

      @media (max-width: 575px) {
        margin: 18px 24px 8px;
      }
    }

    p {
      font-size: 18px;
      line-height: 24px;
      color: #9194a5;
      margin: 0 32px;

      @media (max-width: 575px) {
        margin: 0 24px;
      }
    }

    @media (max-width: 575px) {
      padding-bottom: 24px;
    }
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 354px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`;

export const ModalClose = styled.img`
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
`;
