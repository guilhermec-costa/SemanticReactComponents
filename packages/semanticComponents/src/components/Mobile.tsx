import React from "react";

import { Devices }from "../hooks/useDevice";
import useDevice from "../hooks/useDevice";

interface MobileProps {
  baseWidth?: number;
}

const Mobile: React.FC<React.PropsWithChildren<MobileProps>> = ({baseWidth, children}): React.ReactNode => {
  const device = useDevice(baseWidth);

  return device === Devices.DESKTOP ?
    <React.Fragment>{children}</React.Fragment> :
    null;
}

export default Mobile;