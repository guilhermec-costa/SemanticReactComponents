import React from "react";

interface useIntervalProps {
    callback: () => void;
    delay: number;
}

const useInterval = (callback: () => void, delay: number) => {
  const cbRef = React.useRef(callback);

  React.useEffect(() => {
    cbRef.current = callback;
  }, [callback]);

	React.useEffect(() => {
		if(delay !== null) {
      const id = setInterval(cbRef.current, delay)
      return () => clearInterval(id);
    }
	}, [delay]);
}

export default useInterval;