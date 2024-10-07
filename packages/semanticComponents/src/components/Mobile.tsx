import React from "react";

/**
 * A component that conditionally renders its children based on the device type.
 * It checks if the current device is a mobile device and renders the children
 * only if the condition is met.
 * 
 * @param {number} baseWidth - the base width to use for comparison
 * @param {React.ReactNode} children - The content to render if the device is mobile.
 *
 * Example usage:
 * ```tsx
 * <Mobile>
 *   <div>This content is only visible on mobile devices.</div>
 * </Mobile>
 * ```
 */

import { Devices }from "../hooks/useDevice";
import useDevice from "../hooks/useDevice";

interface MobileProps {
  baseWidth?: number;
}

const Mobile: React.FC<React.PropsWithChildren<MobileProps>> = ({baseWidth, children}): React.ReactNode => {
  const device = useDevice(baseWidth);

  return device === Devices.MOBILE ?
    <React.Fragment>{children}</React.Fragment> :
    null;
}

export default Mobile;