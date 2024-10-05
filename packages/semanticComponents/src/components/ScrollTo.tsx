import React from "react"

const ScrollTo: React.FC<React.PropsWithChildren<{targetId: string}>> = ({targetId, children}) => {
  const scrollToElement = () => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({behavior: "smooth"});
  }

  return <button onClick={scrollToElement}>{children}</button>
}

export default ScrollTo;