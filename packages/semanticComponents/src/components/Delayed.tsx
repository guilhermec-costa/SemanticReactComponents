import React, { useState } from "react"

/**
 * Delays the rendering of children by a specified amount of time.
 *
 * @param {number} ms - The delay in milliseconds before rendering children.
 * 
 * Example usage:
 * <Delayed ms={1000}>
 *   <div>Content that appears after 1 second</div>
 * </Delayed>
 */
const Delayed: React.FC<React.PropsWithChildren<{delay: number}>> = ({delay, children}):React.ReactNode => {
  const [showComponent, setShowComponent] = useState<boolean>(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setShowComponent(true), delay);
    return () => clearTimeout(timeoutId);
  });

  return showComponent ? <React.Fragment>{children}</React.Fragment> : null;
}

export default Delayed;