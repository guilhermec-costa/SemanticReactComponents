import React from "react";

/**
 * `Mobile`
 *
 * This component is responsible for rendering its content only when the device is identified
 * as a mobile device. It uses a custom hook to check the type of device.
 *
 * Props:
 * - `children`: JSX.Element | JSX.Element[] - The content that will be rendered inside the component when on a mobile device.
 *
 * Example usage:
 * ```tsx
 * <Mobile>
 *   <p>This text will only be displayed on mobile devices.</p>
 * </Mobile>
 * ```
 *
 * The `Mobile` component serves as a conditional based on the device type, allowing certain elements
 * or behaviors to be displayed only on mobile devices, such as phones or tablets.
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