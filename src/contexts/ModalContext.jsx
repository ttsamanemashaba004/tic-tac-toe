import { createContext } from "react";
import { useModal } from "../hooks/useModal";
import ModalTemplate from "../components/Modal/ModalTemplate";

const ModalContext = createContext({});

const ModalContextProvider = ({ children }) => {
  const { modal, modalContent, handleModal } = useModal();

  return (
    <ModalContext.Provider value={{ modal, modalContent, handleModal }}>
      <ModalTemplate />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
