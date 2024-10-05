import React, { useState } from "react"
const Delayed: React.FC<React.PropsWithChildren<{delay: number}>> = ({delay, children}):React.ReactNode => {
  const [showComponent, setShowComponent] = useState<boolean>(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setShowComponent(true), delay);
    return () => clearTimeout(timeoutId);
  });

  return showComponent ? <React.Fragment>{children}</React.Fragment> : null;
}

export default Delayed;