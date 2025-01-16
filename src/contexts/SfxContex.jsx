import { createContext, useState } from "react";
import { useSound } from "../hooks/useSound";

const SfxContext = createContext({});

const SfxContextProvider = ({ children }) => {
  const options = {
    volume: 1,
    timeout: 200,
  };

  const hoverPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
  const clickedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/click.wav";
  const winnerPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/winner.wav";
  const completedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/completed.wav";

  const hoverSfx = useSound(hoverPath, options);
  const clickSfx = useSound(clickedPath, options);
  const winnerSfx = useSound(winnerPath, {...options, timeout: 1000});
  const completedSfx = useSound(completedPath, {...options, timeout: 2000});

  return (
    <SfxContext.Provider
      value={{ hoverSfx, clickSfx, winnerSfx, completedSfx }}
    >
      {children}
    </SfxContext.Provider>
  );
};

export { SfxContext, SfxContextProvider };
