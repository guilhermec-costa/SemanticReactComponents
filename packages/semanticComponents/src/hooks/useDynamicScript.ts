import React from "react"

const useDynamicScript = (src: string) => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [src]);
}

export default useDynamicScript;