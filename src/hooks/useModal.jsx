import { useState } from "react";

export const useModal = () => {
  const [modal, setmodal] = useState(false);
  const [modalContent, setModalContent] = useState("IM A MODAL");

  const handleModal = (content = false) => {
    setmodal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return {modal, modalContent, handleModal}
};


