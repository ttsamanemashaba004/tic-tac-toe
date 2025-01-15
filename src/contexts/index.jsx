import { GameContextProvider } from "./GameContext";
import { ModalContextProvider } from "./ModalContext";
import { SfxContext, SfxContextProvider } from "./SfxContex";
import { ThemeContextProvider } from "./ThemeContext";

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GameContextProvider><SfxContextProvider>{children}</SfxContextProvider></GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
