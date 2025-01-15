import { useEffect, useState } from "react";

export const useSound = (url, options) => {
  const [sound, setSound] = useState(false);
  useEffect(() => {
    const audio = new Audio(url);

    audio.load();
    audio.volume = options.volume;

    setSound(audio);
  }, []);

  return () => {
    if (sound) {
      sound.play();
    }
  };
};
