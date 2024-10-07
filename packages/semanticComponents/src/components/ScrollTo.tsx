import React from "react"

/**
 * `ScrollTo`
 *
 * This component allows smooth scrolling to a specific element on the page when a button or link is clicked.
 * It can be used to create a fluid navigation experience by scrolling to different sections of the site.
 *
 * Props:
 * - `to`: string - A CSS selector (`id` or `class`) indicating the element to which the scroll should occur.
 * - `children`: JSX.Element | JSX.Element[] - The clickable content that triggers the scroll.
 *
 * Example usage:
 * ```tsx
 * <ScrollTo to="#section1">
 *   <button>Go to Section 1</button>
 * </ScrollTo>
 * 
 * <div id="section1">
 *   <h2>Section 1</h2>
 *   <p>Content of Section 1</p>
 * </div>
 * ```
 *
 * When the button or link inside `ScrollTo` is clicked, the browser will smoothly scroll to the element
 * with the `id` or `class` specified in the `to` prop.
 */


const ScrollTo: React.FC<React.PropsWithChildren<{targetId: string}>> = ({targetId, children}) => {
  const scrollToElement = () => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({behavior: "smooth"});
  }

  return <button onClick={scrollToElement}>{children}</button>
}

export default ScrollTo;