import React from "react";

export enum Devices {
  DESKTOP = "Desktop",
  MOBILE = "Mobile"
}

const useDevice = (baseWidth?: number): Devices => {
  const width = baseWidth || 1024;
  const [device, setDevice] = React.useState(window.innerWidth >= width ? Devices.DESKTOP : Devices.MOBILE);

  React.useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= width ?
        setDevice(Devices.DESKTOP) :
        setDevice(Devices.MOBILE)
    }
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}

export default useDevice;