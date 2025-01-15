import { createContext, useState } from "react";
import { useSound } from "../hooks/useSound";

const SfxContext = createContext({});

const SfxContextProvider = ({ children }) => {
const options = {
  volume: 1
}

const hoverPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3"
const hoverSfx = useSound(hoverPath, options)

  return (
    <SfxContext.Provider value={{ hoverSfx }}>
      {children}
    </SfxContext.Provider>
  );
};

export { SfxContext, SfxContextProvider };
