import React from "react"

const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const debounceHandler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(debounceHandler);
  }, [value]);

  return debouncedValue;
}

export default useDebounce;