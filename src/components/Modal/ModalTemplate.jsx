import ReactDom from "react-dom"
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { ModalBackdrop, ModalContainer } from "./Modal.styled";

const ModalTemplate = () => {
  const { handleModal, modalContent, modal } = useContext(ModalContext);

  if (modal) {
    return ReactDom.createPortal(
      <ModalBackdrop>
        <ModalContainer>{modalContent}</ModalContainer>
      </ModalBackdrop>,
      document.getElementById("modal-root")
    );
  }
  return null;
};

export default ModalTemplate;
