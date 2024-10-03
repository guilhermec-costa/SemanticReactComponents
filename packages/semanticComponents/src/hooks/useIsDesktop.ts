import React from "react"

const useIsDesktop = (baseWidth?: number): boolean => {
  const width = baseWidth || 1024;
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= width);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= width)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}

export default useIsDesktop;