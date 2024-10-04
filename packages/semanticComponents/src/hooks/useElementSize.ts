import React from "react"

interface Dimensions {
  width: number;
  height: number;
}
const useElementSize = <T extends HTMLElement>():[React.RefObject<T>, Dimensions] => {
  const [size, setSize] = React.useState<Dimensions>({width: 0, height: 0});
  const elementRef = React.useCallback((node: T | null) => {
    if(node !== null) {
      const updateSize = () => {
        setSize({
          width: node.offsetWidth,
          height: node.offsetHeight
        });
      }

    updateSize();
    const resizeObserver = new ResizeObserver(updateSize)
    resizeObserver.observe(node);

    return () => resizeObserver.disconnect();
    }
  }, [])

  //@ts-ignore
  return [elementRef as React.RefObject<T>, size]; 
}

export default useElementSize;