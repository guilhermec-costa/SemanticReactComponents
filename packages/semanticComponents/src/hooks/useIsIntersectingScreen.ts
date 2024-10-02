import React from "react"

const useIsIntersectingScreen = (htmlRef: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting));
    if(htmlRef.current) observer.observe(htmlRef.current);

    return () => observer.disconnect();
  }, [htmlRef]);

  return isIntersecting;
}

export default useIsIntersectingScreen;