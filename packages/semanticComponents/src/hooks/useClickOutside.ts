import React from "react"

const useClickOutside = (callback: () => void) => {
  const htmlRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(htmlRef.current && !htmlRef.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [callback]);

  return htmlRef;
}

export default useClickOutside;