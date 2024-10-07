import useDevice from "../hooks/useDevice";
import { Devices } from "../hooks/useDevice";
import React from "react"

/**
 * Conditionally renders children only when the screen width is above a specified value (usually for desktop screens).
 *
 * @param {number} width - The minimum screen width for rendering the children (default could be 1024 for desktop).
 * 
 * Example usage:
 * <Desktop>
 *   <div>This content will only appear on desktop</div>
 * </Desktop>
 */

interface DesktopProps {
  baseWidth?: number;
}

const Desktop: React.FC<React.PropsWithChildren<DesktopProps>> = ({baseWidth, children}): React.ReactNode => {
  const device = useDevice(baseWidth);

  return device === Devices.DESKTOP ?
    <React.Fragment>{children}</React.Fragment> :
    null;
}

export default Desktop;