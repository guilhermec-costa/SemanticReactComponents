import useDevice from "../hooks/useDevice";
import { Devices } from "../hooks/useDevice";
import React from "react"

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