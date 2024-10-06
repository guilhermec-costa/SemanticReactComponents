import React from "react";

const useLocalStorage = <T,>(key: string, initialValue: T): [T, (value: T) => void, () => void] => {
  const getInitialValue = (): T => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.error(`Error parsing localStorage item "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = React.useState<T>(getInitialValue);

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage item "${key}":`, error);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(initialValue);
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage item "${key}":`, error);
    }
  };

  return [storedValue, setValue, removeValue];
};

export default useLocalStorage;
