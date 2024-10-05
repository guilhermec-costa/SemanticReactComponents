import React from "react";

interface KeyCombo {
  keys: string[];
  callback: () => void;
}

const useKeyCombo = (combos: KeyCombo[]): void => {
  const [pressedKeys, setPressedKeys] = React.useState<string[]>([]);

  React.useEffect(() => {
    const handleKeyDown = ({key}: KeyboardEvent) => {
      if(!pressedKeys.includes(key)) {
        setPressedKeys(prevKeys => [...prevKeys, key]);
      }
    }

    const handleKeyUp = ({key}: KeyboardEvent) => {
      setPressedKeys(prevKeys => prevKeys.filter(k => k !== key));
    }

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, [pressedKeys]);

  React.useEffect(() => {
    combos.forEach(({ keys, callback })=> {
      const isComboPressed = keys.every(key => pressedKeys.includes(key));
      if(isComboPressed) {
        callback();
      }
    })
  }, [pressedKeys, combos])
}

export default useKeyCombo;