import React from "react";

const useSessionStorage = <T,>(key: string, initialValue: T): [T, (value: T) => void, () => void] => {

  const getInitialValue = (): T => {
    try {
      const storedValue = sessionStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(`Error parsing sessionStorage item "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = React.useState<T>(getInitialValue);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting sessionStorage item "${key}":`, error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing sessionStorage item "${key}":`, error);
    }
  };

  return [storedValue, setValue, removeValue];
};

export default useSessionStorage;
