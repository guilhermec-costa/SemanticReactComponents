import React from "react";

import { DeviceEnum }from "../hooks/useDevice";
import useDevice from "../hooks/useDevice";

interface MobileProps {
  baseWidth?: number;
}

const Mobile: React.FC<React.PropsWithChildren<MobileProps>> = ({baseWidth, children}): React.ReactNode => {
  const device = useDevice(baseWidth);

  return device === DeviceEnum.DESKTOP ?
    <React.Fragment>{children}</React.Fragment> :
    null;
}

export default Mobile;