import React from "react";

export enum DeviceEnum {
  DESKTOP = "Desktop",
  MOBILE = "Mobile"
}

const useDevice = (baseWidth?: number): DeviceEnum => {
  const width = baseWidth || 1024;
  const [device, setDevice] = React.useState(window.innerWidth >= width ? DeviceEnum.DESKTOP : DeviceEnum.MOBILE);

  React.useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= width ?
        setDevice(DeviceEnum.DESKTOP) :
        setDevice(DeviceEnum.MOBILE)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}

export default useDevice;