import React from "react"

/**
 * A component that provides a smooth scroll to a specified element when rendered.
 * It scrolls to the target element identified by the `target` prop.
 *
 * @param {string} target - The selector of the element to scroll to.
 * @param {number} duration - The duration of the scrolling animation in milliseconds.
 * @param {boolean} [active=true] - A flag to activate or deactivate the scrolling behavior.
 *
 * Example usage:
 * ```tsx
 * <ScrollTo target="#section1" duration={500}>
 *   <button>Scroll to Section 1</button>
 * </ScrollTo>
 * ```
 */

const ScrollTo: React.FC<React.PropsWithChildren<{targetId: string}>> = ({targetId, children}) => {
  const scrollToElement = () => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({behavior: "smooth"});
  }

  return <button onClick={scrollToElement}>{children}</button>
}

export default ScrollTo;