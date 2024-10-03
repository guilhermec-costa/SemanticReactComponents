import React from "react"

const useIsMobile = (baseWidth?: number): boolean => {
  const width = baseWidth || 1024;
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < width);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < width)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

export default useIsMobile;