import { GameContextProvider } from "./GameContext";
import { ModalContextProvider } from "./ModalContext";
import { ThemeContextProvider } from "./ThemeContext";

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GameContextProvider>{children}</GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
